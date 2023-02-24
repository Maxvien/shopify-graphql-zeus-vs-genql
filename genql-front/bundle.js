(() => {
  // genql-front/runtime/error.ts
  var GenqlError = class extends Error {
    constructor(errors, data) {
      let message = Array.isArray(errors) ? errors.map((x) => x?.message || "").join("\n") : "";
      if (!message) {
        message = "GraphQL error";
      }
      super(message);
      this.errors = [];
      this.errors = errors;
      this.data = data;
    }
  };

  // genql-front/runtime/batcher.ts
  function dispatchQueueBatch(client, queue) {
    let batchedQuery = queue.map((item) => item.request);
    if (batchedQuery.length === 1) {
      batchedQuery = batchedQuery[0];
    }
    client.fetcher(batchedQuery).then((responses) => {
      if (queue.length === 1 && !Array.isArray(responses)) {
        if (responses.errors && responses.errors.length) {
          queue[0].reject(
            new GenqlError(responses.errors, responses.data)
          );
          return;
        }
        queue[0].resolve(responses);
        return;
      } else if (responses.length !== queue.length) {
        throw new Error("response length did not match query length");
      }
      for (let i = 0; i < queue.length; i++) {
        if (responses[i].errors && responses[i].errors.length) {
          queue[i].reject(
            new GenqlError(responses[i].errors, responses[i].data)
          );
        } else {
          queue[i].resolve(responses[i]);
        }
      }
    });
  }
  function dispatchQueue(client, options) {
    const queue = client._queue;
    const maxBatchSize = options.maxBatchSize || 0;
    client._queue = [];
    if (maxBatchSize > 0 && maxBatchSize < queue.length) {
      for (let i = 0; i < queue.length / maxBatchSize; i++) {
        dispatchQueueBatch(
          client,
          queue.slice(i * maxBatchSize, (i + 1) * maxBatchSize)
        );
      }
    } else {
      dispatchQueueBatch(client, queue);
    }
  }
  var QueryBatcher = class {
    constructor(fetcher, {
      batchInterval = 6,
      shouldBatch = true,
      maxBatchSize = 0
    } = {}) {
      this.fetcher = fetcher;
      this._options = {
        batchInterval,
        shouldBatch,
        maxBatchSize
      };
      this._queue = [];
    }
    /**
     * Fetch will send a graphql request and return the parsed json.
     * @param {string}      query          - the graphql query.
     * @param {Variables}   variables      - any variables you wish to inject as key/value pairs.
     * @param {[string]}    operationName  - the graphql operationName.
     * @param {Options}     overrides      - the client options overrides.
     *
     * @return {promise} resolves to parsed json of server response
     *
     * @example
     * client.fetch(`
     *    query getHuman($id: ID!) {
     *      human(id: $id) {
     *        name
     *        height
     *      }
     *    }
     * `, { id: "1001" }, 'getHuman')
     *    .then(human => {
     *      // do something with human
     *      console.log(human);
     *    });
     */
    fetch(query, variables, operationName, overrides = {}) {
      const request = {
        query
      };
      const options = Object.assign({}, this._options, overrides);
      if (variables) {
        request.variables = variables;
      }
      if (operationName) {
        request.operationName = operationName;
      }
      const promise = new Promise((resolve, reject) => {
        this._queue.push({
          request,
          resolve,
          reject
        });
        if (this._queue.length === 1) {
          if (options.shouldBatch) {
            setTimeout(
              () => dispatchQueue(this, options),
              options.batchInterval
            );
          } else {
            dispatchQueue(this, options);
          }
        }
      });
      return promise;
    }
    /**
     * Fetch will send a graphql request and return the parsed json.
     * @param {string}      query          - the graphql query.
     * @param {Variables}   variables      - any variables you wish to inject as key/value pairs.
     * @param {[string]}    operationName  - the graphql operationName.
     * @param {Options}     overrides      - the client options overrides.
     *
     * @return {Promise<Array<Result>>} resolves to parsed json of server response
     *
     * @example
     * client.forceFetch(`
     *    query getHuman($id: ID!) {
     *      human(id: $id) {
     *        name
     *        height
     *      }
     *    }
     * `, { id: "1001" }, 'getHuman')
     *    .then(human => {
     *      // do something with human
     *      console.log(human);
     *    });
     */
    forceFetch(query, variables, operationName, overrides = {}) {
      const request = {
        query
      };
      const options = Object.assign({}, this._options, overrides, {
        shouldBatch: false
      });
      if (variables) {
        request.variables = variables;
      }
      if (operationName) {
        request.operationName = operationName;
      }
      const promise = new Promise((resolve, reject) => {
        const client = new QueryBatcher(this.fetcher, this._options);
        client._queue = [
          {
            request,
            resolve,
            reject
          }
        ];
        dispatchQueue(client, options);
      });
      return promise;
    }
  };

  // genql-front/runtime/fetcher.ts
  var DEFAULT_BATCH_OPTIONS = {
    maxBatchSize: 10,
    batchInterval: 40
  };
  var createFetcher = ({
    url,
    headers = {},
    fetcher,
    fetch: _fetch,
    batch = false,
    ...rest
  }) => {
    if (!url && !fetcher) {
      throw new Error("url or fetcher is required");
    }
    if (!fetcher) {
      fetcher = async (body) => {
        let headersObject = typeof headers == "function" ? await headers() : headers;
        headersObject = headersObject || {};
        if (typeof fetch === "undefined" && !_fetch) {
          throw new Error(
            "Global `fetch` function is not available, pass a fetch polyfill to Genql `createClient`"
          );
        }
        let fetchImpl = _fetch || fetch;
        const res = await fetchImpl(url, {
          headers: {
            "Content-Type": "application/json",
            ...headersObject
          },
          method: "POST",
          body: JSON.stringify(body),
          ...rest
        });
        if (!res.ok) {
          throw new Error(`${res.statusText}: ${await res.text()}`);
        }
        const json = await res.json();
        return json;
      };
    }
    if (!batch) {
      return async (body) => {
        const json = await fetcher(body);
        if (Array.isArray(json)) {
          return json.map((json2) => {
            if (json2?.errors?.length) {
              throw new GenqlError(json2.errors || [], json2.data);
            }
            return json2.data;
          });
        } else {
          if (json?.errors?.length) {
            throw new GenqlError(json.errors || [], json.data);
          }
          return json.data;
        }
      };
    }
    const batcher = new QueryBatcher(
      async (batchedQuery) => {
        const json = await fetcher(batchedQuery);
        return json;
      },
      batch === true ? DEFAULT_BATCH_OPTIONS : batch
    );
    return async ({ query, variables }) => {
      const json = await batcher.fetch(query, variables);
      if (json?.data) {
        return json.data;
      }
      throw new Error(
        "Genql batch fetcher returned unexpected result " + JSON.stringify(json)
      );
    };
  };

  // genql-front/runtime/generateGraphqlOperation.ts
  var parseRequest = (request, ctx, path) => {
    if (typeof request === "object" && "__args" in request) {
      const args = request.__args;
      let fields = { ...request };
      delete fields.__args;
      const argNames = Object.keys(args);
      if (argNames.length === 0) {
        return parseRequest(fields, ctx, path);
      }
      const field = getFieldFromPath(ctx.root, path);
      const argStrings = argNames.map((argName) => {
        ctx.varCounter++;
        const varName = `v${ctx.varCounter}`;
        const typing = field.args && field.args[argName];
        if (!typing) {
          throw new Error(
            `no typing defined for argument \`${argName}\` in path \`${path.join(
              "."
            )}\``
          );
        }
        ctx.variables[varName] = {
          value: args[argName],
          typing
        };
        return `${argName}:$${varName}`;
      });
      return `(${argStrings})${parseRequest(fields, ctx, path)}`;
    } else if (typeof request === "object" && Object.keys(request).length > 0) {
      const fields = request;
      const fieldNames = Object.keys(fields).filter((k) => Boolean(fields[k]));
      if (fieldNames.length === 0) {
        throw new Error(
          `field selection should not be empty: ${path.join(".")}`
        );
      }
      const type = path.length > 0 ? getFieldFromPath(ctx.root, path).type : ctx.root;
      const scalarFields = type.scalar;
      let scalarFieldsFragment;
      if (fieldNames.includes("__scalar")) {
        const falsyFieldNames = new Set(
          Object.keys(fields).filter((k) => !Boolean(fields[k]))
        );
        if (scalarFields?.length) {
          ctx.fragmentCounter++;
          scalarFieldsFragment = `f${ctx.fragmentCounter}`;
          ctx.fragments.push(
            `fragment ${scalarFieldsFragment} on ${type.name}{${scalarFields.filter((f) => !falsyFieldNames.has(f)).join(",")}}`
          );
        }
      }
      const fieldsSelection = fieldNames.filter((f) => !["__scalar", "__name"].includes(f)).map((f) => {
        const parsed = parseRequest(fields[f], ctx, [...path, f]);
        if (f.startsWith("on_")) {
          ctx.fragmentCounter++;
          const implementationFragment = `f${ctx.fragmentCounter}`;
          const typeMatch = f.match(/^on_(.+)/);
          if (!typeMatch || !typeMatch[1])
            throw new Error("match failed");
          ctx.fragments.push(
            `fragment ${implementationFragment} on ${typeMatch[1]}${parsed}`
          );
          return `...${implementationFragment}`;
        } else {
          return `${f}${parsed}`;
        }
      }).concat(scalarFieldsFragment ? [`...${scalarFieldsFragment}`] : []).join(",");
      return `{${fieldsSelection}}`;
    } else {
      return "";
    }
  };
  var generateGraphqlOperation = (operation, root, fields) => {
    const ctx = {
      root,
      varCounter: 0,
      variables: {},
      fragmentCounter: 0,
      fragments: []
    };
    const result = parseRequest(fields, ctx, []);
    const varNames = Object.keys(ctx.variables);
    const varsString = varNames.length > 0 ? `(${varNames.map((v) => {
      const variableType = ctx.variables[v].typing[1];
      return `$${v}:${variableType}`;
    })})` : "";
    const operationName = fields?.__name || "";
    return {
      query: [
        `${operation} ${operationName}${varsString}${result}`,
        ...ctx.fragments
      ].join(","),
      variables: Object.keys(ctx.variables).reduce(
        (r, v) => {
          r[v] = ctx.variables[v].value;
          return r;
        },
        {}
      )
    };
  };
  var getFieldFromPath = (root, path) => {
    let current;
    if (!root)
      throw new Error("root type is not provided");
    if (path.length === 0)
      throw new Error(`path is empty`);
    path.forEach((f) => {
      const type = current ? current.type : root;
      if (!type.fields)
        throw new Error(`type \`${type.name}\` does not have fields`);
      const possibleTypes = Object.keys(type.fields).filter((i) => i.startsWith("on_")).reduce(
        (types, fieldName) => {
          const field2 = type.fields && type.fields[fieldName];
          if (field2)
            types.push(field2.type);
          return types;
        },
        [type]
      );
      let field = null;
      possibleTypes.forEach((type2) => {
        const found = type2.fields && type2.fields[f];
        if (found)
          field = found;
      });
      if (!field)
        throw new Error(
          `type \`${type.name}\` does not have a field \`${f}\``
        );
      current = field;
    });
    return current;
  };

  // genql-front/runtime/createClient.ts
  var createClient = ({
    queryRoot,
    mutationRoot,
    subscriptionRoot,
    ...options
  }) => {
    const fetcher = createFetcher(options);
    const client = {};
    if (queryRoot) {
      client.query = (request) => {
        if (!queryRoot)
          throw new Error("queryRoot argument is missing");
        const resultPromise = fetcher(
          generateGraphqlOperation("query", queryRoot, request)
        );
        return resultPromise;
      };
    }
    if (mutationRoot) {
      client.mutation = (request) => {
        if (!mutationRoot)
          throw new Error("mutationRoot argument is missing");
        const resultPromise = fetcher(
          generateGraphqlOperation("mutation", mutationRoot, request)
        );
        return resultPromise;
      };
    }
    return client;
  };

  // genql-front/runtime/linkTypeMap.ts
  var linkTypeMap = (typeMap2) => {
    const indexToName = Object.assign(
      {},
      ...Object.keys(typeMap2.types).map((k, i) => ({ [i]: k }))
    );
    let intermediaryTypeMap = Object.assign(
      {},
      ...Object.keys(typeMap2.types || {}).map(
        (k) => {
          const type = typeMap2.types[k];
          const fields = type || {};
          return {
            [k]: {
              name: k,
              // type scalar properties
              scalar: Object.keys(fields).filter((f) => {
                const [type2] = fields[f] || [];
                return type2 && typeMap2.scalars.includes(type2);
              }),
              // fields with corresponding `type` and `args`
              fields: Object.assign(
                {},
                ...Object.keys(fields).map(
                  (f) => {
                    const [typeIndex, args] = fields[f] || [];
                    if (typeIndex == null) {
                      return {};
                    }
                    return {
                      [f]: {
                        // replace index with type name
                        type: indexToName[typeIndex],
                        args: Object.assign(
                          {},
                          ...Object.keys(args || {}).map(
                            (k2) => {
                              if (!args || !args[k2]) {
                                return;
                              }
                              const [
                                argTypeName,
                                argTypeString
                              ] = args[k2];
                              return {
                                [k2]: [
                                  indexToName[argTypeName],
                                  argTypeString || indexToName[argTypeName]
                                ]
                              };
                            }
                          )
                        )
                      }
                    };
                  }
                )
              )
            }
          };
        }
      )
    );
    const res = resolveConcreteTypes(intermediaryTypeMap);
    return res;
  };
  var resolveConcreteTypes = (linkedTypeMap) => {
    Object.keys(linkedTypeMap).forEach((typeNameFromKey) => {
      const type = linkedTypeMap[typeNameFromKey];
      if (!type.fields) {
        return;
      }
      const fields = type.fields;
      Object.keys(fields).forEach((f) => {
        const field = fields[f];
        if (field.args) {
          const args = field.args;
          Object.keys(args).forEach((key) => {
            const arg = args[key];
            if (arg) {
              const [typeName2] = arg;
              if (typeof typeName2 === "string") {
                if (!linkedTypeMap[typeName2]) {
                  linkedTypeMap[typeName2] = { name: typeName2 };
                }
                arg[0] = linkedTypeMap[typeName2];
              }
            }
          });
        }
        const typeName = field.type;
        if (typeof typeName === "string") {
          if (!linkedTypeMap[typeName]) {
            linkedTypeMap[typeName] = { name: typeName };
          }
          field.type = linkedTypeMap[typeName];
        }
      });
    });
    return linkedTypeMap;
  };

  // genql-front/types.ts
  var types_default = {
    "scalars": [
      6,
      14,
      15,
      16,
      28,
      66,
      87,
      93,
      97,
      99,
      116,
      124,
      125,
      126,
      129,
      132,
      133,
      139,
      141,
      148,
      150,
      153,
      156,
      157,
      163,
      171,
      173,
      182,
      185,
      194,
      197,
      198,
      202,
      207,
      210,
      215,
      219,
      220,
      225,
      232,
      261,
      268,
      269,
      270,
      272,
      273,
      274,
      279
    ],
    "types": {
      "ApiVersion": {
        "displayName": [
          261
        ],
        "handle": [
          261
        ],
        "supported": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "AppliedGiftCard": {
        "amountUsed": [
          185
        ],
        "amountUsedV2": [
          187
        ],
        "balance": [
          185
        ],
        "balanceV2": [
          187
        ],
        "id": [
          150
        ],
        "lastCharacters": [
          261
        ],
        "presentmentAmountUsed": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "Article": {
        "author": [
          3
        ],
        "authorV2": [
          3
        ],
        "blog": [
          11
        ],
        "comments": [
          90,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "content": [
          261,
          {
            "truncateAt": [
              156
            ]
          }
        ],
        "contentHtml": [
          148
        ],
        "excerpt": [
          261,
          {
            "truncateAt": [
              156
            ]
          }
        ],
        "excerptHtml": [
          148
        ],
        "handle": [
          261
        ],
        "id": [
          150
        ],
        "image": [
          151,
          {
            "maxWidth": [
              156
            ],
            "maxHeight": [
              156
            ],
            "crop": [
              97
            ],
            "scale": [
              156
            ]
          }
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "onlineStoreUrl": [
          270
        ],
        "publishedAt": [
          124
        ],
        "seo": [
          233
        ],
        "tags": [
          261
        ],
        "title": [
          261
        ],
        "url": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "ArticleAuthor": {
        "bio": [
          261
        ],
        "email": [
          261
        ],
        "firstName": [
          261
        ],
        "lastName": [
          261
        ],
        "name": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "ArticleConnection": {
        "edges": [
          5
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "ArticleEdge": {
        "cursor": [
          261
        ],
        "node": [
          2
        ],
        "__typename": [
          261
        ]
      },
      "ArticleSortKeys": {},
      "Attribute": {
        "key": [
          261
        ],
        "value": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "AttributeInput": {
        "key": [
          261
        ],
        "value": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "AutomaticDiscountApplication": {
        "allocationMethod": [
          129
        ],
        "targetSelection": [
          132
        ],
        "targetType": [
          133
        ],
        "title": [
          261
        ],
        "value": [
          213
        ],
        "__typename": [
          261
        ]
      },
      "AvailableShippingRates": {
        "ready": [
          15
        ],
        "shippingRates": [
          254
        ],
        "__typename": [
          261
        ]
      },
      "Blog": {
        "articleByHandle": [
          2,
          {
            "handle": [
              261,
              "String!"
            ]
          }
        ],
        "articles": [
          4,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              6
            ],
            "query": [
              261
            ]
          }
        ],
        "authors": [
          3
        ],
        "handle": [
          261
        ],
        "id": [
          150
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "onlineStoreUrl": [
          270
        ],
        "seo": [
          233
        ],
        "title": [
          261
        ],
        "url": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "BlogConnection": {
        "edges": [
          13
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "BlogEdge": {
        "cursor": [
          261
        ],
        "node": [
          11
        ],
        "__typename": [
          261
        ]
      },
      "BlogSortKeys": {},
      "Boolean": {},
      "CardBrand": {},
      "Cart": {
        "attributes": [
          7
        ],
        "buyerIdentity": [
          20
        ],
        "checkoutUrl": [
          270
        ],
        "createdAt": [
          124
        ],
        "discountCodes": [
          26
        ],
        "estimatedCost": [
          29
        ],
        "id": [
          150
        ],
        "lines": [
          32,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "note": [
          261
        ],
        "updatedAt": [
          124
        ],
        "__typename": [
          261
        ]
      },
      "CartAttributesUpdatePayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartAutomaticDiscountAllocation": {
        "discountedAmount": [
          187
        ],
        "title": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CartBuyerIdentity": {
        "countryCode": [
          93
        ],
        "customer": [
          100
        ],
        "email": [
          261
        ],
        "phone": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CartBuyerIdentityInput": {
        "email": [
          261
        ],
        "phone": [
          261
        ],
        "countryCode": [
          93
        ],
        "customerAccessToken": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CartBuyerIdentityUpdatePayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartCodeDiscountAllocation": {
        "code": [
          261
        ],
        "discountedAmount": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "CartCreatePayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartDiscountAllocation": {
        "discountedAmount": [
          187
        ],
        "on_CartAutomaticDiscountAllocation": [
          19
        ],
        "on_CartCodeDiscountAllocation": [
          23
        ],
        "__typename": [
          261
        ]
      },
      "CartDiscountCode": {
        "applicable": [
          15
        ],
        "code": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CartDiscountCodesUpdatePayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartErrorCode": {},
      "CartEstimatedCost": {
        "subtotalAmount": [
          187
        ],
        "totalAmount": [
          187
        ],
        "totalDutyAmount": [
          187
        ],
        "totalTaxAmount": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "CartInput": {
        "attributes": [
          8
        ],
        "lines": [
          35
        ],
        "discountCodes": [
          261
        ],
        "note": [
          261
        ],
        "buyerIdentity": [
          21
        ],
        "__typename": [
          261
        ]
      },
      "CartLine": {
        "attributes": [
          7
        ],
        "discountAllocations": [
          25
        ],
        "estimatedCost": [
          34
        ],
        "id": [
          150
        ],
        "merchandise": [
          175
        ],
        "quantity": [
          156
        ],
        "sellingPlanAllocation": [
          238
        ],
        "__typename": [
          261
        ]
      },
      "CartLineConnection": {
        "edges": [
          33
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "CartLineEdge": {
        "cursor": [
          261
        ],
        "node": [
          31
        ],
        "__typename": [
          261
        ]
      },
      "CartLineEstimatedCost": {
        "subtotalAmount": [
          187
        ],
        "totalAmount": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "CartLineInput": {
        "attributes": [
          8
        ],
        "quantity": [
          156
        ],
        "merchandiseId": [
          150
        ],
        "sellingPlanId": [
          150
        ],
        "__typename": [
          261
        ]
      },
      "CartLineUpdateInput": {
        "id": [
          150
        ],
        "quantity": [
          156
        ],
        "merchandiseId": [
          150
        ],
        "attributes": [
          8
        ],
        "sellingPlanId": [
          150
        ],
        "__typename": [
          261
        ]
      },
      "CartLinesAddPayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartLinesRemovePayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartLinesUpdatePayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartNoteUpdatePayload": {
        "cart": [
          17
        ],
        "userErrors": [
          41
        ],
        "__typename": [
          261
        ]
      },
      "CartUserError": {
        "code": [
          28
        ],
        "field": [
          261
        ],
        "message": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "Checkout": {
        "appliedGiftCards": [
          1
        ],
        "availableShippingRates": [
          10
        ],
        "buyerIdentity": [
          47
        ],
        "completedAt": [
          124
        ],
        "createdAt": [
          124
        ],
        "currencyCode": [
          99
        ],
        "customAttributes": [
          7
        ],
        "customer": [
          100
        ],
        "discountApplications": [
          130,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "email": [
          261
        ],
        "id": [
          150
        ],
        "lineItems": [
          72,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "lineItemsSubtotalPrice": [
          187
        ],
        "note": [
          261
        ],
        "order": [
          193
        ],
        "orderStatusUrl": [
          270
        ],
        "paymentDue": [
          185
        ],
        "paymentDueV2": [
          187
        ],
        "ready": [
          15
        ],
        "requiresShipping": [
          15
        ],
        "shippingAddress": [
          164
        ],
        "shippingDiscountAllocations": [
          127
        ],
        "shippingLine": [
          254
        ],
        "subtotalPrice": [
          185
        ],
        "subtotalPriceV2": [
          187
        ],
        "taxExempt": [
          15
        ],
        "taxesIncluded": [
          15
        ],
        "totalDuties": [
          187
        ],
        "totalPrice": [
          185
        ],
        "totalPriceV2": [
          187
        ],
        "totalTax": [
          185
        ],
        "totalTaxV2": [
          187
        ],
        "updatedAt": [
          124
        ],
        "webUrl": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutAttributesUpdateInput": {
        "note": [
          261
        ],
        "customAttributes": [
          8
        ],
        "allowPartialAddresses": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutAttributesUpdatePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutAttributesUpdateV2Input": {
        "note": [
          261
        ],
        "customAttributes": [
          8
        ],
        "allowPartialAddresses": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutAttributesUpdateV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutBuyerIdentity": {
        "countryCode": [
          93
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutBuyerIdentityInput": {
        "countryCode": [
          93
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCompleteFreePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCompleteWithCreditCardPayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "payment": [
          208
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCompleteWithCreditCardV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "payment": [
          208
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCompleteWithTokenizedPaymentPayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "payment": [
          208
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCompleteWithTokenizedPaymentV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "payment": [
          208
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCompleteWithTokenizedPaymentV3Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "payment": [
          208
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCreateInput": {
        "email": [
          261
        ],
        "lineItems": [
          74
        ],
        "shippingAddress": [
          167
        ],
        "note": [
          261
        ],
        "customAttributes": [
          8
        ],
        "allowPartialAddresses": [
          15
        ],
        "presentmentCurrencyCode": [
          99
        ],
        "buyerIdentity": [
          48
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCreatePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "queueToken": [
          261
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCustomerAssociatePayload": {
        "checkout": [
          42
        ],
        "customer": [
          100
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCustomerAssociateV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "customer": [
          100
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCustomerDisassociatePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutCustomerDisassociateV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutDiscountCodeApplyPayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutDiscountCodeApplyV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutDiscountCodeRemovePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutEmailUpdatePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutEmailUpdateV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutErrorCode": {},
      "CheckoutGiftCardApplyPayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutGiftCardRemovePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutGiftCardRemoveV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutGiftCardsAppendPayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItem": {
        "customAttributes": [
          7
        ],
        "discountAllocations": [
          127
        ],
        "id": [
          150
        ],
        "quantity": [
          156
        ],
        "title": [
          261
        ],
        "unitPrice": [
          187
        ],
        "variant": [
          226
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemConnection": {
        "edges": [
          73
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemEdge": {
        "cursor": [
          261
        ],
        "node": [
          71
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemInput": {
        "customAttributes": [
          8
        ],
        "quantity": [
          156
        ],
        "variantId": [
          150
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemUpdateInput": {
        "id": [
          150
        ],
        "variantId": [
          150
        ],
        "quantity": [
          156
        ],
        "customAttributes": [
          8
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemsAddPayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemsRemovePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemsReplacePayload": {
        "checkout": [
          42
        ],
        "userErrors": [
          83
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutLineItemsUpdatePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutShippingAddressUpdatePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutShippingAddressUpdateV2Payload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutShippingLineUpdatePayload": {
        "checkout": [
          42
        ],
        "checkoutUserErrors": [
          83
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CheckoutUserError": {
        "code": [
          66
        ],
        "field": [
          261
        ],
        "message": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "Collection": {
        "description": [
          261,
          {
            "truncateAt": [
              156
            ]
          }
        ],
        "descriptionHtml": [
          148
        ],
        "handle": [
          261
        ],
        "id": [
          150
        ],
        "image": [
          151,
          {
            "maxWidth": [
              156
            ],
            "maxHeight": [
              156
            ],
            "crop": [
              97
            ],
            "scale": [
              156
            ]
          }
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "onlineStoreUrl": [
          270
        ],
        "products": [
          216,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              215
            ],
            "filters": [
              218,
              "[ProductFilter!]"
            ]
          }
        ],
        "title": [
          261
        ],
        "updatedAt": [
          124
        ],
        "__typename": [
          261
        ]
      },
      "CollectionConnection": {
        "edges": [
          86
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "CollectionEdge": {
        "cursor": [
          261
        ],
        "node": [
          84
        ],
        "__typename": [
          261
        ]
      },
      "CollectionSortKeys": {},
      "Comment": {
        "author": [
          89
        ],
        "content": [
          261,
          {
            "truncateAt": [
              156
            ]
          }
        ],
        "contentHtml": [
          148
        ],
        "id": [
          150
        ],
        "__typename": [
          261
        ]
      },
      "CommentAuthor": {
        "email": [
          261
        ],
        "name": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CommentConnection": {
        "edges": [
          91
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "CommentEdge": {
        "cursor": [
          261
        ],
        "node": [
          88
        ],
        "__typename": [
          261
        ]
      },
      "Country": {
        "currency": [
          98
        ],
        "isoCode": [
          93
        ],
        "name": [
          261
        ],
        "unitSystem": [
          274
        ],
        "__typename": [
          261
        ]
      },
      "CountryCode": {},
      "CreditCard": {
        "brand": [
          261
        ],
        "expiryMonth": [
          156
        ],
        "expiryYear": [
          156
        ],
        "firstDigits": [
          261
        ],
        "firstName": [
          261
        ],
        "lastDigits": [
          261
        ],
        "lastName": [
          261
        ],
        "maskedNumber": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CreditCardPaymentInput": {
        "amount": [
          185
        ],
        "idempotencyKey": [
          261
        ],
        "billingAddress": [
          167
        ],
        "vaultId": [
          261
        ],
        "test": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "CreditCardPaymentInputV2": {
        "paymentAmount": [
          186
        ],
        "idempotencyKey": [
          261
        ],
        "billingAddress": [
          167
        ],
        "vaultId": [
          261
        ],
        "test": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "CropRegion": {},
      "Currency": {
        "isoCode": [
          99
        ],
        "name": [
          261
        ],
        "symbol": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CurrencyCode": {},
      "Customer": {
        "acceptsMarketing": [
          15
        ],
        "addresses": [
          165,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "createdAt": [
          124
        ],
        "defaultAddress": [
          164
        ],
        "displayName": [
          261
        ],
        "email": [
          261
        ],
        "firstName": [
          261
        ],
        "id": [
          150
        ],
        "lastIncompleteCheckout": [
          42
        ],
        "lastName": [
          261
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "orders": [
          195,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              202
            ],
            "query": [
              261
            ]
          }
        ],
        "phone": [
          261
        ],
        "tags": [
          261
        ],
        "updatedAt": [
          124
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAccessToken": {
        "accessToken": [
          261
        ],
        "expiresAt": [
          124
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAccessTokenCreateInput": {
        "email": [
          261
        ],
        "password": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAccessTokenCreatePayload": {
        "customerAccessToken": [
          101
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAccessTokenCreateWithMultipassPayload": {
        "customerAccessToken": [
          101
        ],
        "customerUserErrors": [
          123
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAccessTokenDeletePayload": {
        "deletedAccessToken": [
          261
        ],
        "deletedCustomerAccessTokenId": [
          261
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAccessTokenRenewPayload": {
        "customerAccessToken": [
          101
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerActivateByUrlPayload": {
        "customer": [
          100
        ],
        "customerAccessToken": [
          101
        ],
        "customerUserErrors": [
          123
        ],
        "__typename": [
          261
        ]
      },
      "CustomerActivateInput": {
        "activationToken": [
          261
        ],
        "password": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CustomerActivatePayload": {
        "customer": [
          100
        ],
        "customerAccessToken": [
          101
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAddressCreatePayload": {
        "customerAddress": [
          164
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAddressDeletePayload": {
        "customerUserErrors": [
          123
        ],
        "deletedCustomerAddressId": [
          261
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerAddressUpdatePayload": {
        "customerAddress": [
          164
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerCreateInput": {
        "firstName": [
          261
        ],
        "lastName": [
          261
        ],
        "email": [
          261
        ],
        "phone": [
          261
        ],
        "password": [
          261
        ],
        "acceptsMarketing": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "CustomerCreatePayload": {
        "customer": [
          100
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerDefaultAddressUpdatePayload": {
        "customer": [
          100
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerErrorCode": {},
      "CustomerRecoverPayload": {
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerResetByUrlPayload": {
        "customer": [
          100
        ],
        "customerAccessToken": [
          101
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerResetInput": {
        "resetToken": [
          261
        ],
        "password": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "CustomerResetPayload": {
        "customer": [
          100
        ],
        "customerAccessToken": [
          101
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerUpdateInput": {
        "firstName": [
          261
        ],
        "lastName": [
          261
        ],
        "email": [
          261
        ],
        "phone": [
          261
        ],
        "password": [
          261
        ],
        "acceptsMarketing": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "CustomerUpdatePayload": {
        "customer": [
          100
        ],
        "customerAccessToken": [
          101
        ],
        "customerUserErrors": [
          123
        ],
        "userErrors": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "CustomerUserError": {
        "code": [
          116
        ],
        "field": [
          261
        ],
        "message": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "DateTime": {},
      "Decimal": {},
      "DigitalWallet": {},
      "DiscountAllocation": {
        "allocatedAmount": [
          187
        ],
        "discountApplication": [
          128
        ],
        "__typename": [
          261
        ]
      },
      "DiscountApplication": {
        "allocationMethod": [
          129
        ],
        "targetSelection": [
          132
        ],
        "targetType": [
          133
        ],
        "value": [
          213
        ],
        "on_AutomaticDiscountApplication": [
          9
        ],
        "on_DiscountCodeApplication": [
          134
        ],
        "on_ManualDiscountApplication": [
          168
        ],
        "on_ScriptDiscountApplication": [
          234
        ],
        "__typename": [
          261
        ]
      },
      "DiscountApplicationAllocationMethod": {},
      "DiscountApplicationConnection": {
        "edges": [
          131
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "DiscountApplicationEdge": {
        "cursor": [
          261
        ],
        "node": [
          128
        ],
        "__typename": [
          261
        ]
      },
      "DiscountApplicationTargetSelection": {},
      "DiscountApplicationTargetType": {},
      "DiscountCodeApplication": {
        "allocationMethod": [
          129
        ],
        "applicable": [
          15
        ],
        "code": [
          261
        ],
        "targetSelection": [
          132
        ],
        "targetType": [
          133
        ],
        "value": [
          213
        ],
        "__typename": [
          261
        ]
      },
      "DisplayableError": {
        "field": [
          261
        ],
        "message": [
          261
        ],
        "on_CartUserError": [
          41
        ],
        "on_CheckoutUserError": [
          83
        ],
        "on_CustomerUserError": [
          123
        ],
        "on_UserError": [
          275
        ],
        "__typename": [
          261
        ]
      },
      "Domain": {
        "host": [
          261
        ],
        "sslEnabled": [
          15
        ],
        "url": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "ExternalVideo": {
        "alt": [
          261
        ],
        "embeddedUrl": [
          270
        ],
        "host": [
          173
        ],
        "id": [
          150
        ],
        "mediaContentType": [
          171
        ],
        "previewImage": [
          151
        ],
        "__typename": [
          261
        ]
      },
      "Filter": {
        "id": [
          261
        ],
        "label": [
          261
        ],
        "type": [
          139
        ],
        "values": [
          140
        ],
        "__typename": [
          261
        ]
      },
      "FilterType": {},
      "FilterValue": {
        "count": [
          156
        ],
        "id": [
          261
        ],
        "input": [
          157
        ],
        "label": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "Float": {},
      "Fulfillment": {
        "fulfillmentLineItems": [
          144,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "trackingCompany": [
          261
        ],
        "trackingInfo": [
          146,
          {
            "first": [
              156
            ]
          }
        ],
        "__typename": [
          261
        ]
      },
      "FulfillmentLineItem": {
        "lineItem": [
          199
        ],
        "quantity": [
          156
        ],
        "__typename": [
          261
        ]
      },
      "FulfillmentLineItemConnection": {
        "edges": [
          145
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "FulfillmentLineItemEdge": {
        "cursor": [
          261
        ],
        "node": [
          143
        ],
        "__typename": [
          261
        ]
      },
      "FulfillmentTrackingInfo": {
        "number": [
          261
        ],
        "url": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "GeoCoordinateInput": {
        "latitude": [
          141
        ],
        "longitude": [
          141
        ],
        "__typename": [
          261
        ]
      },
      "HTML": {},
      "HasMetafields": {
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "on_Article": [
          2
        ],
        "on_Blog": [
          11
        ],
        "on_Collection": [
          84
        ],
        "on_Customer": [
          100
        ],
        "on_Order": [
          193
        ],
        "on_Page": [
          203
        ],
        "on_Product": [
          214
        ],
        "on_ProductVariant": [
          226
        ],
        "on_Shop": [
          255
        ],
        "__typename": [
          261
        ]
      },
      "ID": {},
      "Image": {
        "altText": [
          261
        ],
        "height": [
          156
        ],
        "id": [
          150
        ],
        "originalSrc": [
          270
        ],
        "src": [
          270
        ],
        "transformedSrc": [
          270,
          {
            "maxWidth": [
              156
            ],
            "maxHeight": [
              156
            ],
            "crop": [
              97
            ],
            "scale": [
              156
            ],
            "preferredContentType": [
              153
            ]
          }
        ],
        "url": [
          270,
          {
            "transform": [
              155
            ]
          }
        ],
        "width": [
          156
        ],
        "__typename": [
          261
        ]
      },
      "ImageConnection": {
        "edges": [
          154
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "ImageContentType": {},
      "ImageEdge": {
        "cursor": [
          261
        ],
        "node": [
          151
        ],
        "__typename": [
          261
        ]
      },
      "ImageTransformInput": {
        "crop": [
          97
        ],
        "maxWidth": [
          156
        ],
        "maxHeight": [
          156
        ],
        "scale": [
          156
        ],
        "preferredContentType": [
          153
        ],
        "__typename": [
          261
        ]
      },
      "Int": {},
      "JSON": {},
      "Localization": {
        "availableCountries": [
          92
        ],
        "country": [
          92
        ],
        "__typename": [
          261
        ]
      },
      "Location": {
        "address": [
          160
        ],
        "id": [
          150
        ],
        "name": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "LocationAddress": {
        "address1": [
          261
        ],
        "address2": [
          261
        ],
        "city": [
          261
        ],
        "country": [
          261
        ],
        "countryCode": [
          261
        ],
        "formatted": [
          261
        ],
        "latitude": [
          141
        ],
        "longitude": [
          141
        ],
        "phone": [
          261
        ],
        "province": [
          261
        ],
        "provinceCode": [
          261
        ],
        "zip": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "LocationConnection": {
        "edges": [
          162
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "LocationEdge": {
        "cursor": [
          261
        ],
        "node": [
          159
        ],
        "__typename": [
          261
        ]
      },
      "LocationSortKeys": {},
      "MailingAddress": {
        "address1": [
          261
        ],
        "address2": [
          261
        ],
        "city": [
          261
        ],
        "company": [
          261
        ],
        "country": [
          261
        ],
        "countryCode": [
          261
        ],
        "countryCodeV2": [
          93
        ],
        "firstName": [
          261
        ],
        "formatted": [
          261,
          {
            "withName": [
              15
            ],
            "withCompany": [
              15
            ]
          }
        ],
        "formattedArea": [
          261
        ],
        "id": [
          150
        ],
        "lastName": [
          261
        ],
        "latitude": [
          141
        ],
        "longitude": [
          141
        ],
        "name": [
          261
        ],
        "phone": [
          261
        ],
        "province": [
          261
        ],
        "provinceCode": [
          261
        ],
        "zip": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "MailingAddressConnection": {
        "edges": [
          166
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "MailingAddressEdge": {
        "cursor": [
          261
        ],
        "node": [
          164
        ],
        "__typename": [
          261
        ]
      },
      "MailingAddressInput": {
        "address1": [
          261
        ],
        "address2": [
          261
        ],
        "city": [
          261
        ],
        "company": [
          261
        ],
        "country": [
          261
        ],
        "firstName": [
          261
        ],
        "lastName": [
          261
        ],
        "phone": [
          261
        ],
        "province": [
          261
        ],
        "zip": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "ManualDiscountApplication": {
        "allocationMethod": [
          129
        ],
        "description": [
          261
        ],
        "targetSelection": [
          132
        ],
        "targetType": [
          133
        ],
        "title": [
          261
        ],
        "value": [
          213
        ],
        "__typename": [
          261
        ]
      },
      "Media": {
        "alt": [
          261
        ],
        "mediaContentType": [
          171
        ],
        "previewImage": [
          151
        ],
        "on_ExternalVideo": [
          137
        ],
        "on_MediaImage": [
          174
        ],
        "on_Model3d": [
          183
        ],
        "on_Video": [
          277
        ],
        "__typename": [
          261
        ]
      },
      "MediaConnection": {
        "edges": [
          172
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "MediaContentType": {},
      "MediaEdge": {
        "cursor": [
          261
        ],
        "node": [
          169
        ],
        "__typename": [
          261
        ]
      },
      "MediaHost": {},
      "MediaImage": {
        "alt": [
          261
        ],
        "id": [
          150
        ],
        "image": [
          151
        ],
        "mediaContentType": [
          171
        ],
        "previewImage": [
          151
        ],
        "__typename": [
          261
        ]
      },
      "Merchandise": {
        "on_ProductVariant": [
          226
        ],
        "on_HasMetafields": [
          149
        ],
        "on_Node": [
          191
        ],
        "__typename": [
          261
        ]
      },
      "Metafield": {
        "createdAt": [
          124
        ],
        "description": [
          261
        ],
        "id": [
          150
        ],
        "key": [
          261
        ],
        "namespace": [
          261
        ],
        "parentResource": [
          180
        ],
        "reference": [
          181
        ],
        "type": [
          261
        ],
        "updatedAt": [
          124
        ],
        "value": [
          261
        ],
        "valueType": [
          182
        ],
        "__typename": [
          261
        ]
      },
      "MetafieldConnection": {
        "edges": [
          178
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "MetafieldEdge": {
        "cursor": [
          261
        ],
        "node": [
          176
        ],
        "__typename": [
          261
        ]
      },
      "MetafieldFilter": {
        "namespace": [
          261
        ],
        "key": [
          261
        ],
        "value": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "MetafieldParentResource": {
        "on_Article": [
          2
        ],
        "on_Blog": [
          11
        ],
        "on_Collection": [
          84
        ],
        "on_Customer": [
          100
        ],
        "on_Order": [
          193
        ],
        "on_Page": [
          203
        ],
        "on_Product": [
          214
        ],
        "on_ProductVariant": [
          226
        ],
        "on_Shop": [
          255
        ],
        "on_HasMetafields": [
          149
        ],
        "on_Node": [
          191
        ],
        "on_OnlineStorePublishable": [
          192
        ],
        "__typename": [
          261
        ]
      },
      "MetafieldReference": {
        "on_MediaImage": [
          174
        ],
        "on_Page": [
          203
        ],
        "on_Product": [
          214
        ],
        "on_ProductVariant": [
          226
        ],
        "on_Media": [
          169
        ],
        "on_Node": [
          191
        ],
        "on_HasMetafields": [
          149
        ],
        "on_OnlineStorePublishable": [
          192
        ],
        "__typename": [
          261
        ]
      },
      "MetafieldValueType": {},
      "Model3d": {
        "alt": [
          261
        ],
        "id": [
          150
        ],
        "mediaContentType": [
          171
        ],
        "previewImage": [
          151
        ],
        "sources": [
          184
        ],
        "__typename": [
          261
        ]
      },
      "Model3dSource": {
        "filesize": [
          156
        ],
        "format": [
          261
        ],
        "mimeType": [
          261
        ],
        "url": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "Money": {},
      "MoneyInput": {
        "amount": [
          125
        ],
        "currencyCode": [
          99
        ],
        "__typename": [
          261
        ]
      },
      "MoneyV2": {
        "amount": [
          125
        ],
        "currencyCode": [
          99
        ],
        "__typename": [
          261
        ]
      },
      "MoneyV2Connection": {
        "edges": [
          189
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "MoneyV2Edge": {
        "cursor": [
          261
        ],
        "node": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "Mutation": {
        "cartAttributesUpdate": [
          18,
          {
            "attributes": [
              8,
              "[AttributeInput!]!"
            ],
            "cartId": [
              150,
              "ID!"
            ]
          }
        ],
        "cartBuyerIdentityUpdate": [
          22,
          {
            "cartId": [
              150,
              "ID!"
            ],
            "buyerIdentity": [
              21,
              "CartBuyerIdentityInput!"
            ]
          }
        ],
        "cartCreate": [
          24,
          {
            "input": [
              30
            ]
          }
        ],
        "cartDiscountCodesUpdate": [
          27,
          {
            "cartId": [
              150,
              "ID!"
            ],
            "discountCodes": [
              261,
              "[String!]"
            ]
          }
        ],
        "cartLinesAdd": [
          37,
          {
            "lines": [
              35,
              "[CartLineInput!]!"
            ],
            "cartId": [
              150,
              "ID!"
            ]
          }
        ],
        "cartLinesRemove": [
          38,
          {
            "cartId": [
              150,
              "ID!"
            ],
            "lineIds": [
              150,
              "[ID!]!"
            ]
          }
        ],
        "cartLinesUpdate": [
          39,
          {
            "cartId": [
              150,
              "ID!"
            ],
            "lines": [
              36,
              "[CartLineUpdateInput!]!"
            ]
          }
        ],
        "cartNoteUpdate": [
          40,
          {
            "cartId": [
              150,
              "ID!"
            ],
            "note": [
              261
            ]
          }
        ],
        "checkoutAttributesUpdate": [
          44,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "input": [
              43,
              "CheckoutAttributesUpdateInput!"
            ]
          }
        ],
        "checkoutAttributesUpdateV2": [
          46,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "input": [
              45,
              "CheckoutAttributesUpdateV2Input!"
            ]
          }
        ],
        "checkoutCompleteFree": [
          49,
          {
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutCompleteWithCreditCard": [
          50,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "payment": [
              95,
              "CreditCardPaymentInput!"
            ]
          }
        ],
        "checkoutCompleteWithCreditCardV2": [
          51,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "payment": [
              96,
              "CreditCardPaymentInputV2!"
            ]
          }
        ],
        "checkoutCompleteWithTokenizedPayment": [
          52,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "payment": [
              264,
              "TokenizedPaymentInput!"
            ]
          }
        ],
        "checkoutCompleteWithTokenizedPaymentV2": [
          53,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "payment": [
              265,
              "TokenizedPaymentInputV2!"
            ]
          }
        ],
        "checkoutCompleteWithTokenizedPaymentV3": [
          54,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "payment": [
              266,
              "TokenizedPaymentInputV3!"
            ]
          }
        ],
        "checkoutCreate": [
          56,
          {
            "input": [
              55,
              "CheckoutCreateInput!"
            ],
            "queueToken": [
              261
            ]
          }
        ],
        "checkoutCustomerAssociate": [
          57,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "customerAccessToken": [
              261,
              "String!"
            ]
          }
        ],
        "checkoutCustomerAssociateV2": [
          58,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "customerAccessToken": [
              261,
              "String!"
            ]
          }
        ],
        "checkoutCustomerDisassociate": [
          59,
          {
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutCustomerDisassociateV2": [
          60,
          {
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutDiscountCodeApply": [
          61,
          {
            "discountCode": [
              261,
              "String!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutDiscountCodeApplyV2": [
          62,
          {
            "discountCode": [
              261,
              "String!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutDiscountCodeRemove": [
          63,
          {
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutEmailUpdate": [
          64,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "email": [
              261,
              "String!"
            ]
          }
        ],
        "checkoutEmailUpdateV2": [
          65,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "email": [
              261,
              "String!"
            ]
          }
        ],
        "checkoutGiftCardApply": [
          67,
          {
            "giftCardCode": [
              261,
              "String!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutGiftCardRemove": [
          68,
          {
            "appliedGiftCardId": [
              150,
              "ID!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutGiftCardRemoveV2": [
          69,
          {
            "appliedGiftCardId": [
              150,
              "ID!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutGiftCardsAppend": [
          70,
          {
            "giftCardCodes": [
              261,
              "[String!]!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutLineItemsAdd": [
          76,
          {
            "lineItems": [
              74,
              "[CheckoutLineItemInput!]!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutLineItemsRemove": [
          77,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "lineItemIds": [
              150,
              "[ID!]!"
            ]
          }
        ],
        "checkoutLineItemsReplace": [
          78,
          {
            "lineItems": [
              74,
              "[CheckoutLineItemInput!]!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutLineItemsUpdate": [
          79,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "lineItems": [
              75,
              "[CheckoutLineItemUpdateInput!]!"
            ]
          }
        ],
        "checkoutShippingAddressUpdate": [
          80,
          {
            "shippingAddress": [
              167,
              "MailingAddressInput!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutShippingAddressUpdateV2": [
          81,
          {
            "shippingAddress": [
              167,
              "MailingAddressInput!"
            ],
            "checkoutId": [
              150,
              "ID!"
            ]
          }
        ],
        "checkoutShippingLineUpdate": [
          82,
          {
            "checkoutId": [
              150,
              "ID!"
            ],
            "shippingRateHandle": [
              261,
              "String!"
            ]
          }
        ],
        "customerAccessTokenCreate": [
          103,
          {
            "input": [
              102,
              "CustomerAccessTokenCreateInput!"
            ]
          }
        ],
        "customerAccessTokenCreateWithMultipass": [
          104,
          {
            "multipassToken": [
              261,
              "String!"
            ]
          }
        ],
        "customerAccessTokenDelete": [
          105,
          {
            "customerAccessToken": [
              261,
              "String!"
            ]
          }
        ],
        "customerAccessTokenRenew": [
          106,
          {
            "customerAccessToken": [
              261,
              "String!"
            ]
          }
        ],
        "customerActivate": [
          109,
          {
            "id": [
              150,
              "ID!"
            ],
            "input": [
              108,
              "CustomerActivateInput!"
            ]
          }
        ],
        "customerActivateByUrl": [
          107,
          {
            "activationUrl": [
              270,
              "URL!"
            ],
            "password": [
              261,
              "String!"
            ]
          }
        ],
        "customerAddressCreate": [
          110,
          {
            "customerAccessToken": [
              261,
              "String!"
            ],
            "address": [
              167,
              "MailingAddressInput!"
            ]
          }
        ],
        "customerAddressDelete": [
          111,
          {
            "id": [
              150,
              "ID!"
            ],
            "customerAccessToken": [
              261,
              "String!"
            ]
          }
        ],
        "customerAddressUpdate": [
          112,
          {
            "customerAccessToken": [
              261,
              "String!"
            ],
            "id": [
              150,
              "ID!"
            ],
            "address": [
              167,
              "MailingAddressInput!"
            ]
          }
        ],
        "customerCreate": [
          114,
          {
            "input": [
              113,
              "CustomerCreateInput!"
            ]
          }
        ],
        "customerDefaultAddressUpdate": [
          115,
          {
            "customerAccessToken": [
              261,
              "String!"
            ],
            "addressId": [
              150,
              "ID!"
            ]
          }
        ],
        "customerRecover": [
          117,
          {
            "email": [
              261,
              "String!"
            ]
          }
        ],
        "customerReset": [
          120,
          {
            "id": [
              150,
              "ID!"
            ],
            "input": [
              119,
              "CustomerResetInput!"
            ]
          }
        ],
        "customerResetByUrl": [
          118,
          {
            "resetUrl": [
              270,
              "URL!"
            ],
            "password": [
              261,
              "String!"
            ]
          }
        ],
        "customerUpdate": [
          122,
          {
            "customerAccessToken": [
              261,
              "String!"
            ],
            "customer": [
              121,
              "CustomerUpdateInput!"
            ]
          }
        ],
        "__typename": [
          261
        ]
      },
      "Node": {
        "id": [
          150
        ],
        "on_AppliedGiftCard": [
          1
        ],
        "on_Article": [
          2
        ],
        "on_Blog": [
          11
        ],
        "on_Cart": [
          17
        ],
        "on_CartLine": [
          31
        ],
        "on_Checkout": [
          42
        ],
        "on_CheckoutLineItem": [
          71
        ],
        "on_Collection": [
          84
        ],
        "on_Comment": [
          88
        ],
        "on_ExternalVideo": [
          137
        ],
        "on_Location": [
          159
        ],
        "on_MailingAddress": [
          164
        ],
        "on_MediaImage": [
          174
        ],
        "on_Metafield": [
          176
        ],
        "on_Model3d": [
          183
        ],
        "on_Order": [
          193
        ],
        "on_Page": [
          203
        ],
        "on_Payment": [
          208
        ],
        "on_Product": [
          214
        ],
        "on_ProductOption": [
          221
        ],
        "on_ProductVariant": [
          226
        ],
        "on_ShopPolicy": [
          256
        ],
        "on_Video": [
          277
        ],
        "__typename": [
          261
        ]
      },
      "OnlineStorePublishable": {
        "onlineStoreUrl": [
          270
        ],
        "on_Article": [
          2
        ],
        "on_Blog": [
          11
        ],
        "on_Collection": [
          84
        ],
        "on_Page": [
          203
        ],
        "on_Product": [
          214
        ],
        "__typename": [
          261
        ]
      },
      "Order": {
        "cancelReason": [
          194
        ],
        "canceledAt": [
          124
        ],
        "currencyCode": [
          99
        ],
        "currentSubtotalPrice": [
          187
        ],
        "currentTotalDuties": [
          187
        ],
        "currentTotalPrice": [
          187
        ],
        "currentTotalTax": [
          187
        ],
        "customerLocale": [
          261
        ],
        "customerUrl": [
          270
        ],
        "discountApplications": [
          130,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "edited": [
          15
        ],
        "email": [
          261
        ],
        "financialStatus": [
          197
        ],
        "fulfillmentStatus": [
          198
        ],
        "id": [
          150
        ],
        "lineItems": [
          200,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "name": [
          261
        ],
        "orderNumber": [
          156
        ],
        "originalTotalDuties": [
          187
        ],
        "originalTotalPrice": [
          187
        ],
        "phone": [
          261
        ],
        "processedAt": [
          124
        ],
        "shippingAddress": [
          164
        ],
        "shippingDiscountAllocations": [
          127
        ],
        "statusUrl": [
          270
        ],
        "subtotalPrice": [
          185
        ],
        "subtotalPriceV2": [
          187
        ],
        "successfulFulfillments": [
          142,
          {
            "first": [
              156
            ]
          }
        ],
        "totalPrice": [
          185
        ],
        "totalPriceV2": [
          187
        ],
        "totalRefunded": [
          185
        ],
        "totalRefundedV2": [
          187
        ],
        "totalShippingPrice": [
          185
        ],
        "totalShippingPriceV2": [
          187
        ],
        "totalTax": [
          185
        ],
        "totalTaxV2": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "OrderCancelReason": {},
      "OrderConnection": {
        "edges": [
          196
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "OrderEdge": {
        "cursor": [
          261
        ],
        "node": [
          193
        ],
        "__typename": [
          261
        ]
      },
      "OrderFinancialStatus": {},
      "OrderFulfillmentStatus": {},
      "OrderLineItem": {
        "currentQuantity": [
          156
        ],
        "customAttributes": [
          7
        ],
        "discountAllocations": [
          127
        ],
        "discountedTotalPrice": [
          187
        ],
        "originalTotalPrice": [
          187
        ],
        "quantity": [
          156
        ],
        "title": [
          261
        ],
        "variant": [
          226
        ],
        "__typename": [
          261
        ]
      },
      "OrderLineItemConnection": {
        "edges": [
          201
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "OrderLineItemEdge": {
        "cursor": [
          261
        ],
        "node": [
          199
        ],
        "__typename": [
          261
        ]
      },
      "OrderSortKeys": {},
      "Page": {
        "body": [
          148
        ],
        "bodySummary": [
          261
        ],
        "createdAt": [
          124
        ],
        "handle": [
          261
        ],
        "id": [
          150
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "onlineStoreUrl": [
          270
        ],
        "seo": [
          233
        ],
        "title": [
          261
        ],
        "updatedAt": [
          124
        ],
        "url": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "PageConnection": {
        "edges": [
          205
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "PageEdge": {
        "cursor": [
          261
        ],
        "node": [
          203
        ],
        "__typename": [
          261
        ]
      },
      "PageInfo": {
        "hasNextPage": [
          15
        ],
        "hasPreviousPage": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "PageSortKeys": {},
      "Payment": {
        "amount": [
          185
        ],
        "amountV2": [
          187
        ],
        "billingAddress": [
          164
        ],
        "checkout": [
          42
        ],
        "creditCard": [
          94
        ],
        "errorMessage": [
          261
        ],
        "id": [
          150
        ],
        "idempotencyKey": [
          261
        ],
        "nextActionUrl": [
          270
        ],
        "ready": [
          15
        ],
        "test": [
          15
        ],
        "transaction": [
          267
        ],
        "__typename": [
          261
        ]
      },
      "PaymentSettings": {
        "acceptedCardBrands": [
          16
        ],
        "cardVaultUrl": [
          270
        ],
        "countryCode": [
          93
        ],
        "currencyCode": [
          99
        ],
        "enabledPresentmentCurrencies": [
          99
        ],
        "shopifyPaymentsAccountId": [
          261
        ],
        "supportedDigitalWallets": [
          126
        ],
        "__typename": [
          261
        ]
      },
      "PaymentTokenType": {},
      "PriceRangeFilter": {
        "min": [
          141
        ],
        "max": [
          141
        ],
        "__typename": [
          261
        ]
      },
      "PricingPercentageValue": {
        "percentage": [
          141
        ],
        "__typename": [
          261
        ]
      },
      "PricingValue": {
        "on_MoneyV2": [
          187
        ],
        "on_PricingPercentageValue": [
          212
        ],
        "__typename": [
          261
        ]
      },
      "Product": {
        "availableForSale": [
          15
        ],
        "collections": [
          85,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "compareAtPriceRange": [
          222
        ],
        "createdAt": [
          124
        ],
        "description": [
          261,
          {
            "truncateAt": [
              156
            ]
          }
        ],
        "descriptionHtml": [
          148
        ],
        "featuredImage": [
          151
        ],
        "handle": [
          261
        ],
        "id": [
          150
        ],
        "images": [
          152,
          {
            "maxWidth": [
              156
            ],
            "maxHeight": [
              156
            ],
            "crop": [
              97
            ],
            "scale": [
              156
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              219
            ]
          }
        ],
        "media": [
          170,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              220
            ]
          }
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "onlineStoreUrl": [
          270
        ],
        "options": [
          221,
          {
            "first": [
              156
            ]
          }
        ],
        "presentmentPriceRanges": [
          223,
          {
            "presentmentCurrencies": [
              99,
              "[CurrencyCode!]"
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "priceRange": [
          222
        ],
        "productType": [
          261
        ],
        "publishedAt": [
          124
        ],
        "requiresSellingPlan": [
          15
        ],
        "sellingPlanGroups": [
          247,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "seo": [
          233
        ],
        "tags": [
          261
        ],
        "title": [
          261
        ],
        "totalInventory": [
          156
        ],
        "updatedAt": [
          124
        ],
        "variantBySelectedOptions": [
          226,
          {
            "selectedOptions": [
              236,
              "[SelectedOptionInput!]!"
            ]
          }
        ],
        "variants": [
          227,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              232
            ]
          }
        ],
        "vendor": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "ProductCollectionSortKeys": {},
      "ProductConnection": {
        "edges": [
          217
        ],
        "filters": [
          138
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "ProductEdge": {
        "cursor": [
          261
        ],
        "node": [
          214
        ],
        "__typename": [
          261
        ]
      },
      "ProductFilter": {
        "available": [
          15
        ],
        "variantOption": [
          276
        ],
        "productType": [
          261
        ],
        "productVendor": [
          261
        ],
        "price": [
          211
        ],
        "productMetafield": [
          179
        ],
        "variantMetafield": [
          179
        ],
        "__typename": [
          261
        ]
      },
      "ProductImageSortKeys": {},
      "ProductMediaSortKeys": {},
      "ProductOption": {
        "id": [
          150
        ],
        "name": [
          261
        ],
        "values": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "ProductPriceRange": {
        "maxVariantPrice": [
          187
        ],
        "minVariantPrice": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "ProductPriceRangeConnection": {
        "edges": [
          224
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "ProductPriceRangeEdge": {
        "cursor": [
          261
        ],
        "node": [
          222
        ],
        "__typename": [
          261
        ]
      },
      "ProductSortKeys": {},
      "ProductVariant": {
        "available": [
          15
        ],
        "availableForSale": [
          15
        ],
        "barcode": [
          261
        ],
        "compareAtPrice": [
          185
        ],
        "compareAtPriceV2": [
          187
        ],
        "currentlyNotInStock": [
          15
        ],
        "id": [
          150
        ],
        "image": [
          151,
          {
            "maxWidth": [
              156
            ],
            "maxHeight": [
              156
            ],
            "crop": [
              97
            ],
            "scale": [
              156
            ]
          }
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "presentmentPrices": [
          230,
          {
            "presentmentCurrencies": [
              99,
              "[CurrencyCode!]"
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "presentmentUnitPrices": [
          188,
          {
            "presentmentCurrencies": [
              99,
              "[CurrencyCode!]"
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "price": [
          185
        ],
        "priceV2": [
          187
        ],
        "product": [
          214
        ],
        "quantityAvailable": [
          156
        ],
        "requiresShipping": [
          15
        ],
        "selectedOptions": [
          235
        ],
        "sellingPlanAllocations": [
          239,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "sku": [
          261
        ],
        "storeAvailability": [
          259,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "title": [
          261
        ],
        "unitPrice": [
          187
        ],
        "unitPriceMeasurement": [
          271
        ],
        "weight": [
          141
        ],
        "weightUnit": [
          279
        ],
        "__typename": [
          261
        ]
      },
      "ProductVariantConnection": {
        "edges": [
          228
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "ProductVariantEdge": {
        "cursor": [
          261
        ],
        "node": [
          226
        ],
        "__typename": [
          261
        ]
      },
      "ProductVariantPricePair": {
        "compareAtPrice": [
          187
        ],
        "price": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "ProductVariantPricePairConnection": {
        "edges": [
          231
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "ProductVariantPricePairEdge": {
        "cursor": [
          261
        ],
        "node": [
          229
        ],
        "__typename": [
          261
        ]
      },
      "ProductVariantSortKeys": {},
      "SEO": {
        "description": [
          261
        ],
        "title": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "ScriptDiscountApplication": {
        "allocationMethod": [
          129
        ],
        "description": [
          261
        ],
        "targetSelection": [
          132
        ],
        "targetType": [
          133
        ],
        "title": [
          261
        ],
        "value": [
          213
        ],
        "__typename": [
          261
        ]
      },
      "SelectedOption": {
        "name": [
          261
        ],
        "value": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "SelectedOptionInput": {
        "name": [
          261
        ],
        "value": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlan": {
        "description": [
          261
        ],
        "id": [
          150
        ],
        "name": [
          261
        ],
        "options": [
          250
        ],
        "priceAdjustments": [
          252
        ],
        "recurringDeliveries": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanAllocation": {
        "priceAdjustments": [
          241
        ],
        "sellingPlan": [
          237
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanAllocationConnection": {
        "edges": [
          240
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanAllocationEdge": {
        "cursor": [
          261
        ],
        "node": [
          238
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanAllocationPriceAdjustment": {
        "compareAtPrice": [
          187
        ],
        "perDeliveryPrice": [
          187
        ],
        "price": [
          187
        ],
        "unitPrice": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanConnection": {
        "edges": [
          243
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanEdge": {
        "cursor": [
          261
        ],
        "node": [
          237
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanFixedAmountPriceAdjustment": {
        "adjustmentAmount": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanFixedPriceAdjustment": {
        "price": [
          187
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanGroup": {
        "appName": [
          261
        ],
        "name": [
          261
        ],
        "options": [
          249
        ],
        "sellingPlans": [
          242,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanGroupConnection": {
        "edges": [
          248
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanGroupEdge": {
        "cursor": [
          261
        ],
        "node": [
          246
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanGroupOption": {
        "name": [
          261
        ],
        "values": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanOption": {
        "name": [
          261
        ],
        "value": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanPercentagePriceAdjustment": {
        "adjustmentPercentage": [
          156
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanPriceAdjustment": {
        "adjustmentValue": [
          253
        ],
        "orderCount": [
          156
        ],
        "__typename": [
          261
        ]
      },
      "SellingPlanPriceAdjustmentValue": {
        "on_SellingPlanFixedAmountPriceAdjustment": [
          244
        ],
        "on_SellingPlanFixedPriceAdjustment": [
          245
        ],
        "on_SellingPlanPercentagePriceAdjustment": [
          251
        ],
        "__typename": [
          261
        ]
      },
      "ShippingRate": {
        "handle": [
          261
        ],
        "price": [
          185
        ],
        "priceV2": [
          187
        ],
        "title": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "Shop": {
        "articles": [
          4,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              6
            ],
            "query": [
              261
            ]
          }
        ],
        "blogs": [
          12,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              14
            ],
            "query": [
              261
            ]
          }
        ],
        "collectionByHandle": [
          84,
          {
            "handle": [
              261,
              "String!"
            ]
          }
        ],
        "collections": [
          85,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              87
            ],
            "query": [
              261
            ]
          }
        ],
        "currencyCode": [
          99
        ],
        "description": [
          261
        ],
        "metafield": [
          176,
          {
            "namespace": [
              261,
              "String!"
            ],
            "key": [
              261,
              "String!"
            ]
          }
        ],
        "metafields": [
          177,
          {
            "namespace": [
              261
            ],
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ]
          }
        ],
        "moneyFormat": [
          261
        ],
        "name": [
          261
        ],
        "paymentSettings": [
          209
        ],
        "primaryDomain": [
          136
        ],
        "privacyPolicy": [
          256
        ],
        "productByHandle": [
          214,
          {
            "handle": [
              261,
              "String!"
            ]
          }
        ],
        "productTags": [
          262,
          {
            "first": [
              156,
              "Int!"
            ]
          }
        ],
        "productTypes": [
          262,
          {
            "first": [
              156,
              "Int!"
            ]
          }
        ],
        "products": [
          216,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              225
            ],
            "query": [
              261
            ]
          }
        ],
        "refundPolicy": [
          256
        ],
        "shippingPolicy": [
          256
        ],
        "shipsToCountries": [
          93
        ],
        "shopifyPaymentsAccountId": [
          261
        ],
        "subscriptionPolicy": [
          257
        ],
        "termsOfService": [
          256
        ],
        "__typename": [
          261
        ]
      },
      "ShopPolicy": {
        "body": [
          261
        ],
        "handle": [
          261
        ],
        "id": [
          150
        ],
        "title": [
          261
        ],
        "url": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "ShopPolicyWithDefault": {
        "body": [
          261
        ],
        "handle": [
          261
        ],
        "id": [
          150
        ],
        "title": [
          261
        ],
        "url": [
          270
        ],
        "__typename": [
          261
        ]
      },
      "StoreAvailability": {
        "available": [
          15
        ],
        "location": [
          159
        ],
        "pickUpTime": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "StoreAvailabilityConnection": {
        "edges": [
          260
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "StoreAvailabilityEdge": {
        "cursor": [
          261
        ],
        "node": [
          258
        ],
        "__typename": [
          261
        ]
      },
      "String": {},
      "StringConnection": {
        "edges": [
          263
        ],
        "pageInfo": [
          206
        ],
        "__typename": [
          261
        ]
      },
      "StringEdge": {
        "cursor": [
          261
        ],
        "node": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "TokenizedPaymentInput": {
        "amount": [
          185
        ],
        "idempotencyKey": [
          261
        ],
        "billingAddress": [
          167
        ],
        "type": [
          261
        ],
        "paymentData": [
          261
        ],
        "test": [
          15
        ],
        "identifier": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "TokenizedPaymentInputV2": {
        "paymentAmount": [
          186
        ],
        "idempotencyKey": [
          261
        ],
        "billingAddress": [
          167
        ],
        "paymentData": [
          261
        ],
        "test": [
          15
        ],
        "identifier": [
          261
        ],
        "type": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "TokenizedPaymentInputV3": {
        "paymentAmount": [
          186
        ],
        "idempotencyKey": [
          261
        ],
        "billingAddress": [
          167
        ],
        "paymentData": [
          261
        ],
        "test": [
          15
        ],
        "identifier": [
          261
        ],
        "type": [
          210
        ],
        "__typename": [
          261
        ]
      },
      "Transaction": {
        "amount": [
          185
        ],
        "amountV2": [
          187
        ],
        "kind": [
          268
        ],
        "status": [
          269
        ],
        "statusV2": [
          269
        ],
        "test": [
          15
        ],
        "__typename": [
          261
        ]
      },
      "TransactionKind": {},
      "TransactionStatus": {},
      "URL": {},
      "UnitPriceMeasurement": {
        "measuredType": [
          272
        ],
        "quantityUnit": [
          273
        ],
        "quantityValue": [
          141
        ],
        "referenceUnit": [
          273
        ],
        "referenceValue": [
          156
        ],
        "__typename": [
          261
        ]
      },
      "UnitPriceMeasurementMeasuredType": {},
      "UnitPriceMeasurementMeasuredUnit": {},
      "UnitSystem": {},
      "UserError": {
        "field": [
          261
        ],
        "message": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "VariantOptionFilter": {
        "name": [
          261
        ],
        "value": [
          261
        ],
        "__typename": [
          261
        ]
      },
      "Video": {
        "alt": [
          261
        ],
        "id": [
          150
        ],
        "mediaContentType": [
          171
        ],
        "previewImage": [
          151
        ],
        "sources": [
          278
        ],
        "__typename": [
          261
        ]
      },
      "VideoSource": {
        "format": [
          261
        ],
        "height": [
          156
        ],
        "mimeType": [
          261
        ],
        "url": [
          261
        ],
        "width": [
          156
        ],
        "__typename": [
          261
        ]
      },
      "WeightUnit": {},
      "Query": {
        "articles": [
          4,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              6
            ],
            "query": [
              261
            ]
          }
        ],
        "blog": [
          11,
          {
            "id": [
              150
            ],
            "handle": [
              261
            ]
          }
        ],
        "blogByHandle": [
          11,
          {
            "handle": [
              261,
              "String!"
            ]
          }
        ],
        "blogs": [
          12,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              14
            ],
            "query": [
              261
            ]
          }
        ],
        "cart": [
          17,
          {
            "id": [
              150,
              "ID!"
            ]
          }
        ],
        "collection": [
          84,
          {
            "id": [
              150
            ],
            "handle": [
              261
            ]
          }
        ],
        "collectionByHandle": [
          84,
          {
            "handle": [
              261,
              "String!"
            ]
          }
        ],
        "collections": [
          85,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              87
            ],
            "query": [
              261
            ]
          }
        ],
        "customer": [
          100,
          {
            "customerAccessToken": [
              261,
              "String!"
            ]
          }
        ],
        "localization": [
          158
        ],
        "locations": [
          161,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              163
            ],
            "near": [
              147
            ]
          }
        ],
        "node": [
          191,
          {
            "id": [
              150,
              "ID!"
            ]
          }
        ],
        "nodes": [
          191,
          {
            "ids": [
              150,
              "[ID!]!"
            ]
          }
        ],
        "page": [
          203,
          {
            "id": [
              150
            ],
            "handle": [
              261
            ]
          }
        ],
        "pageByHandle": [
          203,
          {
            "handle": [
              261,
              "String!"
            ]
          }
        ],
        "pages": [
          204,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              207
            ],
            "query": [
              261
            ]
          }
        ],
        "product": [
          214,
          {
            "id": [
              150
            ],
            "handle": [
              261
            ]
          }
        ],
        "productByHandle": [
          214,
          {
            "handle": [
              261,
              "String!"
            ]
          }
        ],
        "productRecommendations": [
          214,
          {
            "productId": [
              150,
              "ID!"
            ]
          }
        ],
        "productTags": [
          262,
          {
            "first": [
              156,
              "Int!"
            ]
          }
        ],
        "productTypes": [
          262,
          {
            "first": [
              156,
              "Int!"
            ]
          }
        ],
        "products": [
          216,
          {
            "first": [
              156
            ],
            "after": [
              261
            ],
            "last": [
              156
            ],
            "before": [
              261
            ],
            "reverse": [
              15
            ],
            "sortKey": [
              225
            ],
            "query": [
              261
            ]
          }
        ],
        "publicApiVersions": [
          0
        ],
        "shop": [
          255
        ],
        "__typename": [
          261
        ]
      }
    }
  };

  // genql-front/schema.ts
  var ApiVersion_possibleTypes = ["ApiVersion"];
  var isApiVersion = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isApiVersion"');
    return ApiVersion_possibleTypes.includes(obj.__typename);
  };
  var AppliedGiftCard_possibleTypes = ["AppliedGiftCard"];
  var isAppliedGiftCard = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isAppliedGiftCard"');
    return AppliedGiftCard_possibleTypes.includes(obj.__typename);
  };
  var Article_possibleTypes = ["Article"];
  var isArticle = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isArticle"');
    return Article_possibleTypes.includes(obj.__typename);
  };
  var ArticleAuthor_possibleTypes = ["ArticleAuthor"];
  var isArticleAuthor = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isArticleAuthor"');
    return ArticleAuthor_possibleTypes.includes(obj.__typename);
  };
  var ArticleConnection_possibleTypes = ["ArticleConnection"];
  var isArticleConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isArticleConnection"');
    return ArticleConnection_possibleTypes.includes(obj.__typename);
  };
  var ArticleEdge_possibleTypes = ["ArticleEdge"];
  var isArticleEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isArticleEdge"');
    return ArticleEdge_possibleTypes.includes(obj.__typename);
  };
  var Attribute_possibleTypes = ["Attribute"];
  var isAttribute = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isAttribute"');
    return Attribute_possibleTypes.includes(obj.__typename);
  };
  var AutomaticDiscountApplication_possibleTypes = ["AutomaticDiscountApplication"];
  var isAutomaticDiscountApplication = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isAutomaticDiscountApplication"');
    return AutomaticDiscountApplication_possibleTypes.includes(obj.__typename);
  };
  var AvailableShippingRates_possibleTypes = ["AvailableShippingRates"];
  var isAvailableShippingRates = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isAvailableShippingRates"');
    return AvailableShippingRates_possibleTypes.includes(obj.__typename);
  };
  var Blog_possibleTypes = ["Blog"];
  var isBlog = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isBlog"');
    return Blog_possibleTypes.includes(obj.__typename);
  };
  var BlogConnection_possibleTypes = ["BlogConnection"];
  var isBlogConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isBlogConnection"');
    return BlogConnection_possibleTypes.includes(obj.__typename);
  };
  var BlogEdge_possibleTypes = ["BlogEdge"];
  var isBlogEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isBlogEdge"');
    return BlogEdge_possibleTypes.includes(obj.__typename);
  };
  var Cart_possibleTypes = ["Cart"];
  var isCart = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCart"');
    return Cart_possibleTypes.includes(obj.__typename);
  };
  var CartAttributesUpdatePayload_possibleTypes = ["CartAttributesUpdatePayload"];
  var isCartAttributesUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartAttributesUpdatePayload"');
    return CartAttributesUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CartAutomaticDiscountAllocation_possibleTypes = ["CartAutomaticDiscountAllocation"];
  var isCartAutomaticDiscountAllocation = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartAutomaticDiscountAllocation"');
    return CartAutomaticDiscountAllocation_possibleTypes.includes(obj.__typename);
  };
  var CartBuyerIdentity_possibleTypes = ["CartBuyerIdentity"];
  var isCartBuyerIdentity = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartBuyerIdentity"');
    return CartBuyerIdentity_possibleTypes.includes(obj.__typename);
  };
  var CartBuyerIdentityUpdatePayload_possibleTypes = ["CartBuyerIdentityUpdatePayload"];
  var isCartBuyerIdentityUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartBuyerIdentityUpdatePayload"');
    return CartBuyerIdentityUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CartCodeDiscountAllocation_possibleTypes = ["CartCodeDiscountAllocation"];
  var isCartCodeDiscountAllocation = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartCodeDiscountAllocation"');
    return CartCodeDiscountAllocation_possibleTypes.includes(obj.__typename);
  };
  var CartCreatePayload_possibleTypes = ["CartCreatePayload"];
  var isCartCreatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartCreatePayload"');
    return CartCreatePayload_possibleTypes.includes(obj.__typename);
  };
  var CartDiscountAllocation_possibleTypes = ["CartAutomaticDiscountAllocation", "CartCodeDiscountAllocation"];
  var isCartDiscountAllocation = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartDiscountAllocation"');
    return CartDiscountAllocation_possibleTypes.includes(obj.__typename);
  };
  var CartDiscountCode_possibleTypes = ["CartDiscountCode"];
  var isCartDiscountCode = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartDiscountCode"');
    return CartDiscountCode_possibleTypes.includes(obj.__typename);
  };
  var CartDiscountCodesUpdatePayload_possibleTypes = ["CartDiscountCodesUpdatePayload"];
  var isCartDiscountCodesUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartDiscountCodesUpdatePayload"');
    return CartDiscountCodesUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CartEstimatedCost_possibleTypes = ["CartEstimatedCost"];
  var isCartEstimatedCost = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartEstimatedCost"');
    return CartEstimatedCost_possibleTypes.includes(obj.__typename);
  };
  var CartLine_possibleTypes = ["CartLine"];
  var isCartLine = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartLine"');
    return CartLine_possibleTypes.includes(obj.__typename);
  };
  var CartLineConnection_possibleTypes = ["CartLineConnection"];
  var isCartLineConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartLineConnection"');
    return CartLineConnection_possibleTypes.includes(obj.__typename);
  };
  var CartLineEdge_possibleTypes = ["CartLineEdge"];
  var isCartLineEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartLineEdge"');
    return CartLineEdge_possibleTypes.includes(obj.__typename);
  };
  var CartLineEstimatedCost_possibleTypes = ["CartLineEstimatedCost"];
  var isCartLineEstimatedCost = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartLineEstimatedCost"');
    return CartLineEstimatedCost_possibleTypes.includes(obj.__typename);
  };
  var CartLinesAddPayload_possibleTypes = ["CartLinesAddPayload"];
  var isCartLinesAddPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartLinesAddPayload"');
    return CartLinesAddPayload_possibleTypes.includes(obj.__typename);
  };
  var CartLinesRemovePayload_possibleTypes = ["CartLinesRemovePayload"];
  var isCartLinesRemovePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartLinesRemovePayload"');
    return CartLinesRemovePayload_possibleTypes.includes(obj.__typename);
  };
  var CartLinesUpdatePayload_possibleTypes = ["CartLinesUpdatePayload"];
  var isCartLinesUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartLinesUpdatePayload"');
    return CartLinesUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CartNoteUpdatePayload_possibleTypes = ["CartNoteUpdatePayload"];
  var isCartNoteUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartNoteUpdatePayload"');
    return CartNoteUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CartUserError_possibleTypes = ["CartUserError"];
  var isCartUserError = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCartUserError"');
    return CartUserError_possibleTypes.includes(obj.__typename);
  };
  var Checkout_possibleTypes = ["Checkout"];
  var isCheckout = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckout"');
    return Checkout_possibleTypes.includes(obj.__typename);
  };
  var CheckoutAttributesUpdatePayload_possibleTypes = ["CheckoutAttributesUpdatePayload"];
  var isCheckoutAttributesUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutAttributesUpdatePayload"');
    return CheckoutAttributesUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutAttributesUpdateV2Payload_possibleTypes = ["CheckoutAttributesUpdateV2Payload"];
  var isCheckoutAttributesUpdateV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutAttributesUpdateV2Payload"');
    return CheckoutAttributesUpdateV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutBuyerIdentity_possibleTypes = ["CheckoutBuyerIdentity"];
  var isCheckoutBuyerIdentity = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutBuyerIdentity"');
    return CheckoutBuyerIdentity_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCompleteFreePayload_possibleTypes = ["CheckoutCompleteFreePayload"];
  var isCheckoutCompleteFreePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCompleteFreePayload"');
    return CheckoutCompleteFreePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCompleteWithCreditCardPayload_possibleTypes = ["CheckoutCompleteWithCreditCardPayload"];
  var isCheckoutCompleteWithCreditCardPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCompleteWithCreditCardPayload"');
    return CheckoutCompleteWithCreditCardPayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCompleteWithCreditCardV2Payload_possibleTypes = ["CheckoutCompleteWithCreditCardV2Payload"];
  var isCheckoutCompleteWithCreditCardV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCompleteWithCreditCardV2Payload"');
    return CheckoutCompleteWithCreditCardV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCompleteWithTokenizedPaymentPayload_possibleTypes = ["CheckoutCompleteWithTokenizedPaymentPayload"];
  var isCheckoutCompleteWithTokenizedPaymentPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCompleteWithTokenizedPaymentPayload"');
    return CheckoutCompleteWithTokenizedPaymentPayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCompleteWithTokenizedPaymentV2Payload_possibleTypes = ["CheckoutCompleteWithTokenizedPaymentV2Payload"];
  var isCheckoutCompleteWithTokenizedPaymentV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCompleteWithTokenizedPaymentV2Payload"');
    return CheckoutCompleteWithTokenizedPaymentV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCompleteWithTokenizedPaymentV3Payload_possibleTypes = ["CheckoutCompleteWithTokenizedPaymentV3Payload"];
  var isCheckoutCompleteWithTokenizedPaymentV3Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCompleteWithTokenizedPaymentV3Payload"');
    return CheckoutCompleteWithTokenizedPaymentV3Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCreatePayload_possibleTypes = ["CheckoutCreatePayload"];
  var isCheckoutCreatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCreatePayload"');
    return CheckoutCreatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCustomerAssociatePayload_possibleTypes = ["CheckoutCustomerAssociatePayload"];
  var isCheckoutCustomerAssociatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCustomerAssociatePayload"');
    return CheckoutCustomerAssociatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCustomerAssociateV2Payload_possibleTypes = ["CheckoutCustomerAssociateV2Payload"];
  var isCheckoutCustomerAssociateV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCustomerAssociateV2Payload"');
    return CheckoutCustomerAssociateV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCustomerDisassociatePayload_possibleTypes = ["CheckoutCustomerDisassociatePayload"];
  var isCheckoutCustomerDisassociatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCustomerDisassociatePayload"');
    return CheckoutCustomerDisassociatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutCustomerDisassociateV2Payload_possibleTypes = ["CheckoutCustomerDisassociateV2Payload"];
  var isCheckoutCustomerDisassociateV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutCustomerDisassociateV2Payload"');
    return CheckoutCustomerDisassociateV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutDiscountCodeApplyPayload_possibleTypes = ["CheckoutDiscountCodeApplyPayload"];
  var isCheckoutDiscountCodeApplyPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutDiscountCodeApplyPayload"');
    return CheckoutDiscountCodeApplyPayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutDiscountCodeApplyV2Payload_possibleTypes = ["CheckoutDiscountCodeApplyV2Payload"];
  var isCheckoutDiscountCodeApplyV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutDiscountCodeApplyV2Payload"');
    return CheckoutDiscountCodeApplyV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutDiscountCodeRemovePayload_possibleTypes = ["CheckoutDiscountCodeRemovePayload"];
  var isCheckoutDiscountCodeRemovePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutDiscountCodeRemovePayload"');
    return CheckoutDiscountCodeRemovePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutEmailUpdatePayload_possibleTypes = ["CheckoutEmailUpdatePayload"];
  var isCheckoutEmailUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutEmailUpdatePayload"');
    return CheckoutEmailUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutEmailUpdateV2Payload_possibleTypes = ["CheckoutEmailUpdateV2Payload"];
  var isCheckoutEmailUpdateV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutEmailUpdateV2Payload"');
    return CheckoutEmailUpdateV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutGiftCardApplyPayload_possibleTypes = ["CheckoutGiftCardApplyPayload"];
  var isCheckoutGiftCardApplyPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutGiftCardApplyPayload"');
    return CheckoutGiftCardApplyPayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutGiftCardRemovePayload_possibleTypes = ["CheckoutGiftCardRemovePayload"];
  var isCheckoutGiftCardRemovePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutGiftCardRemovePayload"');
    return CheckoutGiftCardRemovePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutGiftCardRemoveV2Payload_possibleTypes = ["CheckoutGiftCardRemoveV2Payload"];
  var isCheckoutGiftCardRemoveV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutGiftCardRemoveV2Payload"');
    return CheckoutGiftCardRemoveV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutGiftCardsAppendPayload_possibleTypes = ["CheckoutGiftCardsAppendPayload"];
  var isCheckoutGiftCardsAppendPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutGiftCardsAppendPayload"');
    return CheckoutGiftCardsAppendPayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutLineItem_possibleTypes = ["CheckoutLineItem"];
  var isCheckoutLineItem = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutLineItem"');
    return CheckoutLineItem_possibleTypes.includes(obj.__typename);
  };
  var CheckoutLineItemConnection_possibleTypes = ["CheckoutLineItemConnection"];
  var isCheckoutLineItemConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutLineItemConnection"');
    return CheckoutLineItemConnection_possibleTypes.includes(obj.__typename);
  };
  var CheckoutLineItemEdge_possibleTypes = ["CheckoutLineItemEdge"];
  var isCheckoutLineItemEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutLineItemEdge"');
    return CheckoutLineItemEdge_possibleTypes.includes(obj.__typename);
  };
  var CheckoutLineItemsAddPayload_possibleTypes = ["CheckoutLineItemsAddPayload"];
  var isCheckoutLineItemsAddPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutLineItemsAddPayload"');
    return CheckoutLineItemsAddPayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutLineItemsRemovePayload_possibleTypes = ["CheckoutLineItemsRemovePayload"];
  var isCheckoutLineItemsRemovePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutLineItemsRemovePayload"');
    return CheckoutLineItemsRemovePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutLineItemsReplacePayload_possibleTypes = ["CheckoutLineItemsReplacePayload"];
  var isCheckoutLineItemsReplacePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutLineItemsReplacePayload"');
    return CheckoutLineItemsReplacePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutLineItemsUpdatePayload_possibleTypes = ["CheckoutLineItemsUpdatePayload"];
  var isCheckoutLineItemsUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutLineItemsUpdatePayload"');
    return CheckoutLineItemsUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutShippingAddressUpdatePayload_possibleTypes = ["CheckoutShippingAddressUpdatePayload"];
  var isCheckoutShippingAddressUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutShippingAddressUpdatePayload"');
    return CheckoutShippingAddressUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutShippingAddressUpdateV2Payload_possibleTypes = ["CheckoutShippingAddressUpdateV2Payload"];
  var isCheckoutShippingAddressUpdateV2Payload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutShippingAddressUpdateV2Payload"');
    return CheckoutShippingAddressUpdateV2Payload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutShippingLineUpdatePayload_possibleTypes = ["CheckoutShippingLineUpdatePayload"];
  var isCheckoutShippingLineUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutShippingLineUpdatePayload"');
    return CheckoutShippingLineUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CheckoutUserError_possibleTypes = ["CheckoutUserError"];
  var isCheckoutUserError = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCheckoutUserError"');
    return CheckoutUserError_possibleTypes.includes(obj.__typename);
  };
  var Collection_possibleTypes = ["Collection"];
  var isCollection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCollection"');
    return Collection_possibleTypes.includes(obj.__typename);
  };
  var CollectionConnection_possibleTypes = ["CollectionConnection"];
  var isCollectionConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCollectionConnection"');
    return CollectionConnection_possibleTypes.includes(obj.__typename);
  };
  var CollectionEdge_possibleTypes = ["CollectionEdge"];
  var isCollectionEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCollectionEdge"');
    return CollectionEdge_possibleTypes.includes(obj.__typename);
  };
  var Comment_possibleTypes = ["Comment"];
  var isComment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isComment"');
    return Comment_possibleTypes.includes(obj.__typename);
  };
  var CommentAuthor_possibleTypes = ["CommentAuthor"];
  var isCommentAuthor = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCommentAuthor"');
    return CommentAuthor_possibleTypes.includes(obj.__typename);
  };
  var CommentConnection_possibleTypes = ["CommentConnection"];
  var isCommentConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCommentConnection"');
    return CommentConnection_possibleTypes.includes(obj.__typename);
  };
  var CommentEdge_possibleTypes = ["CommentEdge"];
  var isCommentEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCommentEdge"');
    return CommentEdge_possibleTypes.includes(obj.__typename);
  };
  var Country_possibleTypes = ["Country"];
  var isCountry = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCountry"');
    return Country_possibleTypes.includes(obj.__typename);
  };
  var CreditCard_possibleTypes = ["CreditCard"];
  var isCreditCard = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCreditCard"');
    return CreditCard_possibleTypes.includes(obj.__typename);
  };
  var Currency_possibleTypes = ["Currency"];
  var isCurrency = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCurrency"');
    return Currency_possibleTypes.includes(obj.__typename);
  };
  var Customer_possibleTypes = ["Customer"];
  var isCustomer = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomer"');
    return Customer_possibleTypes.includes(obj.__typename);
  };
  var CustomerAccessToken_possibleTypes = ["CustomerAccessToken"];
  var isCustomerAccessToken = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAccessToken"');
    return CustomerAccessToken_possibleTypes.includes(obj.__typename);
  };
  var CustomerAccessTokenCreatePayload_possibleTypes = ["CustomerAccessTokenCreatePayload"];
  var isCustomerAccessTokenCreatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAccessTokenCreatePayload"');
    return CustomerAccessTokenCreatePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerAccessTokenCreateWithMultipassPayload_possibleTypes = ["CustomerAccessTokenCreateWithMultipassPayload"];
  var isCustomerAccessTokenCreateWithMultipassPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAccessTokenCreateWithMultipassPayload"');
    return CustomerAccessTokenCreateWithMultipassPayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerAccessTokenDeletePayload_possibleTypes = ["CustomerAccessTokenDeletePayload"];
  var isCustomerAccessTokenDeletePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAccessTokenDeletePayload"');
    return CustomerAccessTokenDeletePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerAccessTokenRenewPayload_possibleTypes = ["CustomerAccessTokenRenewPayload"];
  var isCustomerAccessTokenRenewPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAccessTokenRenewPayload"');
    return CustomerAccessTokenRenewPayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerActivateByUrlPayload_possibleTypes = ["CustomerActivateByUrlPayload"];
  var isCustomerActivateByUrlPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerActivateByUrlPayload"');
    return CustomerActivateByUrlPayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerActivatePayload_possibleTypes = ["CustomerActivatePayload"];
  var isCustomerActivatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerActivatePayload"');
    return CustomerActivatePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerAddressCreatePayload_possibleTypes = ["CustomerAddressCreatePayload"];
  var isCustomerAddressCreatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAddressCreatePayload"');
    return CustomerAddressCreatePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerAddressDeletePayload_possibleTypes = ["CustomerAddressDeletePayload"];
  var isCustomerAddressDeletePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAddressDeletePayload"');
    return CustomerAddressDeletePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerAddressUpdatePayload_possibleTypes = ["CustomerAddressUpdatePayload"];
  var isCustomerAddressUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerAddressUpdatePayload"');
    return CustomerAddressUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerCreatePayload_possibleTypes = ["CustomerCreatePayload"];
  var isCustomerCreatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerCreatePayload"');
    return CustomerCreatePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerDefaultAddressUpdatePayload_possibleTypes = ["CustomerDefaultAddressUpdatePayload"];
  var isCustomerDefaultAddressUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerDefaultAddressUpdatePayload"');
    return CustomerDefaultAddressUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerRecoverPayload_possibleTypes = ["CustomerRecoverPayload"];
  var isCustomerRecoverPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerRecoverPayload"');
    return CustomerRecoverPayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerResetByUrlPayload_possibleTypes = ["CustomerResetByUrlPayload"];
  var isCustomerResetByUrlPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerResetByUrlPayload"');
    return CustomerResetByUrlPayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerResetPayload_possibleTypes = ["CustomerResetPayload"];
  var isCustomerResetPayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerResetPayload"');
    return CustomerResetPayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerUpdatePayload_possibleTypes = ["CustomerUpdatePayload"];
  var isCustomerUpdatePayload = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerUpdatePayload"');
    return CustomerUpdatePayload_possibleTypes.includes(obj.__typename);
  };
  var CustomerUserError_possibleTypes = ["CustomerUserError"];
  var isCustomerUserError = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isCustomerUserError"');
    return CustomerUserError_possibleTypes.includes(obj.__typename);
  };
  var DiscountAllocation_possibleTypes = ["DiscountAllocation"];
  var isDiscountAllocation = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isDiscountAllocation"');
    return DiscountAllocation_possibleTypes.includes(obj.__typename);
  };
  var DiscountApplication_possibleTypes = ["AutomaticDiscountApplication", "DiscountCodeApplication", "ManualDiscountApplication", "ScriptDiscountApplication"];
  var isDiscountApplication = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isDiscountApplication"');
    return DiscountApplication_possibleTypes.includes(obj.__typename);
  };
  var DiscountApplicationConnection_possibleTypes = ["DiscountApplicationConnection"];
  var isDiscountApplicationConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isDiscountApplicationConnection"');
    return DiscountApplicationConnection_possibleTypes.includes(obj.__typename);
  };
  var DiscountApplicationEdge_possibleTypes = ["DiscountApplicationEdge"];
  var isDiscountApplicationEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isDiscountApplicationEdge"');
    return DiscountApplicationEdge_possibleTypes.includes(obj.__typename);
  };
  var DiscountCodeApplication_possibleTypes = ["DiscountCodeApplication"];
  var isDiscountCodeApplication = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isDiscountCodeApplication"');
    return DiscountCodeApplication_possibleTypes.includes(obj.__typename);
  };
  var DisplayableError_possibleTypes = ["CartUserError", "CheckoutUserError", "CustomerUserError", "UserError"];
  var isDisplayableError = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isDisplayableError"');
    return DisplayableError_possibleTypes.includes(obj.__typename);
  };
  var Domain_possibleTypes = ["Domain"];
  var isDomain = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isDomain"');
    return Domain_possibleTypes.includes(obj.__typename);
  };
  var ExternalVideo_possibleTypes = ["ExternalVideo"];
  var isExternalVideo = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isExternalVideo"');
    return ExternalVideo_possibleTypes.includes(obj.__typename);
  };
  var Filter_possibleTypes = ["Filter"];
  var isFilter = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isFilter"');
    return Filter_possibleTypes.includes(obj.__typename);
  };
  var FilterValue_possibleTypes = ["FilterValue"];
  var isFilterValue = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isFilterValue"');
    return FilterValue_possibleTypes.includes(obj.__typename);
  };
  var Fulfillment_possibleTypes = ["Fulfillment"];
  var isFulfillment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isFulfillment"');
    return Fulfillment_possibleTypes.includes(obj.__typename);
  };
  var FulfillmentLineItem_possibleTypes = ["FulfillmentLineItem"];
  var isFulfillmentLineItem = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isFulfillmentLineItem"');
    return FulfillmentLineItem_possibleTypes.includes(obj.__typename);
  };
  var FulfillmentLineItemConnection_possibleTypes = ["FulfillmentLineItemConnection"];
  var isFulfillmentLineItemConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isFulfillmentLineItemConnection"');
    return FulfillmentLineItemConnection_possibleTypes.includes(obj.__typename);
  };
  var FulfillmentLineItemEdge_possibleTypes = ["FulfillmentLineItemEdge"];
  var isFulfillmentLineItemEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isFulfillmentLineItemEdge"');
    return FulfillmentLineItemEdge_possibleTypes.includes(obj.__typename);
  };
  var FulfillmentTrackingInfo_possibleTypes = ["FulfillmentTrackingInfo"];
  var isFulfillmentTrackingInfo = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isFulfillmentTrackingInfo"');
    return FulfillmentTrackingInfo_possibleTypes.includes(obj.__typename);
  };
  var HasMetafields_possibleTypes = ["Article", "Blog", "Collection", "Customer", "Order", "Page", "Product", "ProductVariant", "Shop"];
  var isHasMetafields = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isHasMetafields"');
    return HasMetafields_possibleTypes.includes(obj.__typename);
  };
  var Image_possibleTypes = ["Image"];
  var isImage = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isImage"');
    return Image_possibleTypes.includes(obj.__typename);
  };
  var ImageConnection_possibleTypes = ["ImageConnection"];
  var isImageConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isImageConnection"');
    return ImageConnection_possibleTypes.includes(obj.__typename);
  };
  var ImageEdge_possibleTypes = ["ImageEdge"];
  var isImageEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isImageEdge"');
    return ImageEdge_possibleTypes.includes(obj.__typename);
  };
  var Localization_possibleTypes = ["Localization"];
  var isLocalization = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isLocalization"');
    return Localization_possibleTypes.includes(obj.__typename);
  };
  var Location_possibleTypes = ["Location"];
  var isLocation = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isLocation"');
    return Location_possibleTypes.includes(obj.__typename);
  };
  var LocationAddress_possibleTypes = ["LocationAddress"];
  var isLocationAddress = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isLocationAddress"');
    return LocationAddress_possibleTypes.includes(obj.__typename);
  };
  var LocationConnection_possibleTypes = ["LocationConnection"];
  var isLocationConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isLocationConnection"');
    return LocationConnection_possibleTypes.includes(obj.__typename);
  };
  var LocationEdge_possibleTypes = ["LocationEdge"];
  var isLocationEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isLocationEdge"');
    return LocationEdge_possibleTypes.includes(obj.__typename);
  };
  var MailingAddress_possibleTypes = ["MailingAddress"];
  var isMailingAddress = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMailingAddress"');
    return MailingAddress_possibleTypes.includes(obj.__typename);
  };
  var MailingAddressConnection_possibleTypes = ["MailingAddressConnection"];
  var isMailingAddressConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMailingAddressConnection"');
    return MailingAddressConnection_possibleTypes.includes(obj.__typename);
  };
  var MailingAddressEdge_possibleTypes = ["MailingAddressEdge"];
  var isMailingAddressEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMailingAddressEdge"');
    return MailingAddressEdge_possibleTypes.includes(obj.__typename);
  };
  var ManualDiscountApplication_possibleTypes = ["ManualDiscountApplication"];
  var isManualDiscountApplication = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isManualDiscountApplication"');
    return ManualDiscountApplication_possibleTypes.includes(obj.__typename);
  };
  var Media_possibleTypes = ["ExternalVideo", "MediaImage", "Model3d", "Video"];
  var isMedia = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMedia"');
    return Media_possibleTypes.includes(obj.__typename);
  };
  var MediaConnection_possibleTypes = ["MediaConnection"];
  var isMediaConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMediaConnection"');
    return MediaConnection_possibleTypes.includes(obj.__typename);
  };
  var MediaEdge_possibleTypes = ["MediaEdge"];
  var isMediaEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMediaEdge"');
    return MediaEdge_possibleTypes.includes(obj.__typename);
  };
  var MediaImage_possibleTypes = ["MediaImage"];
  var isMediaImage = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMediaImage"');
    return MediaImage_possibleTypes.includes(obj.__typename);
  };
  var Merchandise_possibleTypes = ["ProductVariant"];
  var isMerchandise = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMerchandise"');
    return Merchandise_possibleTypes.includes(obj.__typename);
  };
  var Metafield_possibleTypes = ["Metafield"];
  var isMetafield = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMetafield"');
    return Metafield_possibleTypes.includes(obj.__typename);
  };
  var MetafieldConnection_possibleTypes = ["MetafieldConnection"];
  var isMetafieldConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMetafieldConnection"');
    return MetafieldConnection_possibleTypes.includes(obj.__typename);
  };
  var MetafieldEdge_possibleTypes = ["MetafieldEdge"];
  var isMetafieldEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMetafieldEdge"');
    return MetafieldEdge_possibleTypes.includes(obj.__typename);
  };
  var MetafieldParentResource_possibleTypes = ["Article", "Blog", "Collection", "Customer", "Order", "Page", "Product", "ProductVariant", "Shop"];
  var isMetafieldParentResource = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMetafieldParentResource"');
    return MetafieldParentResource_possibleTypes.includes(obj.__typename);
  };
  var MetafieldReference_possibleTypes = ["MediaImage", "Page", "Product", "ProductVariant"];
  var isMetafieldReference = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMetafieldReference"');
    return MetafieldReference_possibleTypes.includes(obj.__typename);
  };
  var Model3d_possibleTypes = ["Model3d"];
  var isModel3d = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isModel3d"');
    return Model3d_possibleTypes.includes(obj.__typename);
  };
  var Model3dSource_possibleTypes = ["Model3dSource"];
  var isModel3dSource = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isModel3dSource"');
    return Model3dSource_possibleTypes.includes(obj.__typename);
  };
  var MoneyV2_possibleTypes = ["MoneyV2"];
  var isMoneyV2 = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMoneyV2"');
    return MoneyV2_possibleTypes.includes(obj.__typename);
  };
  var MoneyV2Connection_possibleTypes = ["MoneyV2Connection"];
  var isMoneyV2Connection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMoneyV2Connection"');
    return MoneyV2Connection_possibleTypes.includes(obj.__typename);
  };
  var MoneyV2Edge_possibleTypes = ["MoneyV2Edge"];
  var isMoneyV2Edge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMoneyV2Edge"');
    return MoneyV2Edge_possibleTypes.includes(obj.__typename);
  };
  var Mutation_possibleTypes = ["Mutation"];
  var isMutation = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isMutation"');
    return Mutation_possibleTypes.includes(obj.__typename);
  };
  var Node_possibleTypes = ["AppliedGiftCard", "Article", "Blog", "Cart", "CartLine", "Checkout", "CheckoutLineItem", "Collection", "Comment", "ExternalVideo", "Location", "MailingAddress", "MediaImage", "Metafield", "Model3d", "Order", "Page", "Payment", "Product", "ProductOption", "ProductVariant", "ShopPolicy", "Video"];
  var isNode = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isNode"');
    return Node_possibleTypes.includes(obj.__typename);
  };
  var OnlineStorePublishable_possibleTypes = ["Article", "Blog", "Collection", "Page", "Product"];
  var isOnlineStorePublishable = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isOnlineStorePublishable"');
    return OnlineStorePublishable_possibleTypes.includes(obj.__typename);
  };
  var Order_possibleTypes = ["Order"];
  var isOrder = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isOrder"');
    return Order_possibleTypes.includes(obj.__typename);
  };
  var OrderConnection_possibleTypes = ["OrderConnection"];
  var isOrderConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isOrderConnection"');
    return OrderConnection_possibleTypes.includes(obj.__typename);
  };
  var OrderEdge_possibleTypes = ["OrderEdge"];
  var isOrderEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isOrderEdge"');
    return OrderEdge_possibleTypes.includes(obj.__typename);
  };
  var OrderLineItem_possibleTypes = ["OrderLineItem"];
  var isOrderLineItem = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isOrderLineItem"');
    return OrderLineItem_possibleTypes.includes(obj.__typename);
  };
  var OrderLineItemConnection_possibleTypes = ["OrderLineItemConnection"];
  var isOrderLineItemConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isOrderLineItemConnection"');
    return OrderLineItemConnection_possibleTypes.includes(obj.__typename);
  };
  var OrderLineItemEdge_possibleTypes = ["OrderLineItemEdge"];
  var isOrderLineItemEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isOrderLineItemEdge"');
    return OrderLineItemEdge_possibleTypes.includes(obj.__typename);
  };
  var Page_possibleTypes = ["Page"];
  var isPage = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPage"');
    return Page_possibleTypes.includes(obj.__typename);
  };
  var PageConnection_possibleTypes = ["PageConnection"];
  var isPageConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPageConnection"');
    return PageConnection_possibleTypes.includes(obj.__typename);
  };
  var PageEdge_possibleTypes = ["PageEdge"];
  var isPageEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPageEdge"');
    return PageEdge_possibleTypes.includes(obj.__typename);
  };
  var PageInfo_possibleTypes = ["PageInfo"];
  var isPageInfo = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPageInfo"');
    return PageInfo_possibleTypes.includes(obj.__typename);
  };
  var Payment_possibleTypes = ["Payment"];
  var isPayment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPayment"');
    return Payment_possibleTypes.includes(obj.__typename);
  };
  var PaymentSettings_possibleTypes = ["PaymentSettings"];
  var isPaymentSettings = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPaymentSettings"');
    return PaymentSettings_possibleTypes.includes(obj.__typename);
  };
  var PricingPercentageValue_possibleTypes = ["PricingPercentageValue"];
  var isPricingPercentageValue = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPricingPercentageValue"');
    return PricingPercentageValue_possibleTypes.includes(obj.__typename);
  };
  var PricingValue_possibleTypes = ["MoneyV2", "PricingPercentageValue"];
  var isPricingValue = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isPricingValue"');
    return PricingValue_possibleTypes.includes(obj.__typename);
  };
  var Product_possibleTypes = ["Product"];
  var isProduct = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProduct"');
    return Product_possibleTypes.includes(obj.__typename);
  };
  var ProductConnection_possibleTypes = ["ProductConnection"];
  var isProductConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductConnection"');
    return ProductConnection_possibleTypes.includes(obj.__typename);
  };
  var ProductEdge_possibleTypes = ["ProductEdge"];
  var isProductEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductEdge"');
    return ProductEdge_possibleTypes.includes(obj.__typename);
  };
  var ProductOption_possibleTypes = ["ProductOption"];
  var isProductOption = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductOption"');
    return ProductOption_possibleTypes.includes(obj.__typename);
  };
  var ProductPriceRange_possibleTypes = ["ProductPriceRange"];
  var isProductPriceRange = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductPriceRange"');
    return ProductPriceRange_possibleTypes.includes(obj.__typename);
  };
  var ProductPriceRangeConnection_possibleTypes = ["ProductPriceRangeConnection"];
  var isProductPriceRangeConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductPriceRangeConnection"');
    return ProductPriceRangeConnection_possibleTypes.includes(obj.__typename);
  };
  var ProductPriceRangeEdge_possibleTypes = ["ProductPriceRangeEdge"];
  var isProductPriceRangeEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductPriceRangeEdge"');
    return ProductPriceRangeEdge_possibleTypes.includes(obj.__typename);
  };
  var ProductVariant_possibleTypes = ["ProductVariant"];
  var isProductVariant = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductVariant"');
    return ProductVariant_possibleTypes.includes(obj.__typename);
  };
  var ProductVariantConnection_possibleTypes = ["ProductVariantConnection"];
  var isProductVariantConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductVariantConnection"');
    return ProductVariantConnection_possibleTypes.includes(obj.__typename);
  };
  var ProductVariantEdge_possibleTypes = ["ProductVariantEdge"];
  var isProductVariantEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductVariantEdge"');
    return ProductVariantEdge_possibleTypes.includes(obj.__typename);
  };
  var ProductVariantPricePair_possibleTypes = ["ProductVariantPricePair"];
  var isProductVariantPricePair = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductVariantPricePair"');
    return ProductVariantPricePair_possibleTypes.includes(obj.__typename);
  };
  var ProductVariantPricePairConnection_possibleTypes = ["ProductVariantPricePairConnection"];
  var isProductVariantPricePairConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductVariantPricePairConnection"');
    return ProductVariantPricePairConnection_possibleTypes.includes(obj.__typename);
  };
  var ProductVariantPricePairEdge_possibleTypes = ["ProductVariantPricePairEdge"];
  var isProductVariantPricePairEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isProductVariantPricePairEdge"');
    return ProductVariantPricePairEdge_possibleTypes.includes(obj.__typename);
  };
  var QueryRoot_possibleTypes = ["QueryRoot"];
  var isQueryRoot = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isQueryRoot"');
    return QueryRoot_possibleTypes.includes(obj.__typename);
  };
  var SEO_possibleTypes = ["SEO"];
  var isSEO = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSEO"');
    return SEO_possibleTypes.includes(obj.__typename);
  };
  var ScriptDiscountApplication_possibleTypes = ["ScriptDiscountApplication"];
  var isScriptDiscountApplication = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isScriptDiscountApplication"');
    return ScriptDiscountApplication_possibleTypes.includes(obj.__typename);
  };
  var SelectedOption_possibleTypes = ["SelectedOption"];
  var isSelectedOption = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSelectedOption"');
    return SelectedOption_possibleTypes.includes(obj.__typename);
  };
  var SellingPlan_possibleTypes = ["SellingPlan"];
  var isSellingPlan = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlan"');
    return SellingPlan_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanAllocation_possibleTypes = ["SellingPlanAllocation"];
  var isSellingPlanAllocation = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanAllocation"');
    return SellingPlanAllocation_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanAllocationConnection_possibleTypes = ["SellingPlanAllocationConnection"];
  var isSellingPlanAllocationConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanAllocationConnection"');
    return SellingPlanAllocationConnection_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanAllocationEdge_possibleTypes = ["SellingPlanAllocationEdge"];
  var isSellingPlanAllocationEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanAllocationEdge"');
    return SellingPlanAllocationEdge_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanAllocationPriceAdjustment_possibleTypes = ["SellingPlanAllocationPriceAdjustment"];
  var isSellingPlanAllocationPriceAdjustment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanAllocationPriceAdjustment"');
    return SellingPlanAllocationPriceAdjustment_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanConnection_possibleTypes = ["SellingPlanConnection"];
  var isSellingPlanConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanConnection"');
    return SellingPlanConnection_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanEdge_possibleTypes = ["SellingPlanEdge"];
  var isSellingPlanEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanEdge"');
    return SellingPlanEdge_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanFixedAmountPriceAdjustment_possibleTypes = ["SellingPlanFixedAmountPriceAdjustment"];
  var isSellingPlanFixedAmountPriceAdjustment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanFixedAmountPriceAdjustment"');
    return SellingPlanFixedAmountPriceAdjustment_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanFixedPriceAdjustment_possibleTypes = ["SellingPlanFixedPriceAdjustment"];
  var isSellingPlanFixedPriceAdjustment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanFixedPriceAdjustment"');
    return SellingPlanFixedPriceAdjustment_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanGroup_possibleTypes = ["SellingPlanGroup"];
  var isSellingPlanGroup = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanGroup"');
    return SellingPlanGroup_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanGroupConnection_possibleTypes = ["SellingPlanGroupConnection"];
  var isSellingPlanGroupConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanGroupConnection"');
    return SellingPlanGroupConnection_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanGroupEdge_possibleTypes = ["SellingPlanGroupEdge"];
  var isSellingPlanGroupEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanGroupEdge"');
    return SellingPlanGroupEdge_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanGroupOption_possibleTypes = ["SellingPlanGroupOption"];
  var isSellingPlanGroupOption = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanGroupOption"');
    return SellingPlanGroupOption_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanOption_possibleTypes = ["SellingPlanOption"];
  var isSellingPlanOption = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanOption"');
    return SellingPlanOption_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanPercentagePriceAdjustment_possibleTypes = ["SellingPlanPercentagePriceAdjustment"];
  var isSellingPlanPercentagePriceAdjustment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanPercentagePriceAdjustment"');
    return SellingPlanPercentagePriceAdjustment_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanPriceAdjustment_possibleTypes = ["SellingPlanPriceAdjustment"];
  var isSellingPlanPriceAdjustment = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanPriceAdjustment"');
    return SellingPlanPriceAdjustment_possibleTypes.includes(obj.__typename);
  };
  var SellingPlanPriceAdjustmentValue_possibleTypes = ["SellingPlanFixedAmountPriceAdjustment", "SellingPlanFixedPriceAdjustment", "SellingPlanPercentagePriceAdjustment"];
  var isSellingPlanPriceAdjustmentValue = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isSellingPlanPriceAdjustmentValue"');
    return SellingPlanPriceAdjustmentValue_possibleTypes.includes(obj.__typename);
  };
  var ShippingRate_possibleTypes = ["ShippingRate"];
  var isShippingRate = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isShippingRate"');
    return ShippingRate_possibleTypes.includes(obj.__typename);
  };
  var Shop_possibleTypes = ["Shop"];
  var isShop = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isShop"');
    return Shop_possibleTypes.includes(obj.__typename);
  };
  var ShopPolicy_possibleTypes = ["ShopPolicy"];
  var isShopPolicy = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isShopPolicy"');
    return ShopPolicy_possibleTypes.includes(obj.__typename);
  };
  var ShopPolicyWithDefault_possibleTypes = ["ShopPolicyWithDefault"];
  var isShopPolicyWithDefault = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isShopPolicyWithDefault"');
    return ShopPolicyWithDefault_possibleTypes.includes(obj.__typename);
  };
  var StoreAvailability_possibleTypes = ["StoreAvailability"];
  var isStoreAvailability = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isStoreAvailability"');
    return StoreAvailability_possibleTypes.includes(obj.__typename);
  };
  var StoreAvailabilityConnection_possibleTypes = ["StoreAvailabilityConnection"];
  var isStoreAvailabilityConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isStoreAvailabilityConnection"');
    return StoreAvailabilityConnection_possibleTypes.includes(obj.__typename);
  };
  var StoreAvailabilityEdge_possibleTypes = ["StoreAvailabilityEdge"];
  var isStoreAvailabilityEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isStoreAvailabilityEdge"');
    return StoreAvailabilityEdge_possibleTypes.includes(obj.__typename);
  };
  var StringConnection_possibleTypes = ["StringConnection"];
  var isStringConnection = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isStringConnection"');
    return StringConnection_possibleTypes.includes(obj.__typename);
  };
  var StringEdge_possibleTypes = ["StringEdge"];
  var isStringEdge = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isStringEdge"');
    return StringEdge_possibleTypes.includes(obj.__typename);
  };
  var Transaction_possibleTypes = ["Transaction"];
  var isTransaction = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isTransaction"');
    return Transaction_possibleTypes.includes(obj.__typename);
  };
  var UnitPriceMeasurement_possibleTypes = ["UnitPriceMeasurement"];
  var isUnitPriceMeasurement = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isUnitPriceMeasurement"');
    return UnitPriceMeasurement_possibleTypes.includes(obj.__typename);
  };
  var UserError_possibleTypes = ["UserError"];
  var isUserError = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isUserError"');
    return UserError_possibleTypes.includes(obj.__typename);
  };
  var Video_possibleTypes = ["Video"];
  var isVideo = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isVideo"');
    return Video_possibleTypes.includes(obj.__typename);
  };
  var VideoSource_possibleTypes = ["VideoSource"];
  var isVideoSource = (obj) => {
    if (!obj?.__typename)
      throw new Error('__typename is missing in "isVideoSource"');
    return VideoSource_possibleTypes.includes(obj.__typename);
  };
  var enumArticleSortKeys = {
    TITLE: "TITLE",
    BLOG_TITLE: "BLOG_TITLE",
    AUTHOR: "AUTHOR",
    UPDATED_AT: "UPDATED_AT",
    PUBLISHED_AT: "PUBLISHED_AT",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumBlogSortKeys = {
    HANDLE: "HANDLE",
    TITLE: "TITLE",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumCardBrand = {
    VISA: "VISA",
    MASTERCARD: "MASTERCARD",
    DISCOVER: "DISCOVER",
    AMERICAN_EXPRESS: "AMERICAN_EXPRESS",
    DINERS_CLUB: "DINERS_CLUB",
    JCB: "JCB"
  };
  var enumCartErrorCode = {
    INVALID: "INVALID",
    LESS_THAN: "LESS_THAN",
    INVALID_MERCHANDISE_LINE: "INVALID_MERCHANDISE_LINE",
    MISSING_DISCOUNT_CODE: "MISSING_DISCOUNT_CODE",
    MISSING_NOTE: "MISSING_NOTE"
  };
  var enumCheckoutErrorCode = {
    BLANK: "BLANK",
    INVALID: "INVALID",
    TOO_LONG: "TOO_LONG",
    PRESENT: "PRESENT",
    LESS_THAN: "LESS_THAN",
    GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
    LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
    ALREADY_COMPLETED: "ALREADY_COMPLETED",
    LOCKED: "LOCKED",
    NOT_SUPPORTED: "NOT_SUPPORTED",
    BAD_DOMAIN: "BAD_DOMAIN",
    INVALID_FOR_COUNTRY: "INVALID_FOR_COUNTRY",
    INVALID_FOR_COUNTRY_AND_PROVINCE: "INVALID_FOR_COUNTRY_AND_PROVINCE",
    INVALID_STATE_IN_COUNTRY: "INVALID_STATE_IN_COUNTRY",
    INVALID_PROVINCE_IN_COUNTRY: "INVALID_PROVINCE_IN_COUNTRY",
    INVALID_REGION_IN_COUNTRY: "INVALID_REGION_IN_COUNTRY",
    SHIPPING_RATE_EXPIRED: "SHIPPING_RATE_EXPIRED",
    GIFT_CARD_UNUSABLE: "GIFT_CARD_UNUSABLE",
    GIFT_CARD_DISABLED: "GIFT_CARD_DISABLED",
    GIFT_CARD_CODE_INVALID: "GIFT_CARD_CODE_INVALID",
    GIFT_CARD_ALREADY_APPLIED: "GIFT_CARD_ALREADY_APPLIED",
    GIFT_CARD_CURRENCY_MISMATCH: "GIFT_CARD_CURRENCY_MISMATCH",
    GIFT_CARD_EXPIRED: "GIFT_CARD_EXPIRED",
    GIFT_CARD_DEPLETED: "GIFT_CARD_DEPLETED",
    GIFT_CARD_NOT_FOUND: "GIFT_CARD_NOT_FOUND",
    CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE: "CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE",
    DISCOUNT_EXPIRED: "DISCOUNT_EXPIRED",
    DISCOUNT_DISABLED: "DISCOUNT_DISABLED",
    DISCOUNT_LIMIT_REACHED: "DISCOUNT_LIMIT_REACHED",
    HIGHER_VALUE_DISCOUNT_APPLIED: "HIGHER_VALUE_DISCOUNT_APPLIED",
    MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED: "MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED",
    DISCOUNT_NOT_FOUND: "DISCOUNT_NOT_FOUND",
    CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE: "CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE",
    DISCOUNT_CODE_APPLICATION_FAILED: "DISCOUNT_CODE_APPLICATION_FAILED",
    EMPTY: "EMPTY",
    NOT_ENOUGH_IN_STOCK: "NOT_ENOUGH_IN_STOCK",
    MISSING_PAYMENT_INPUT: "MISSING_PAYMENT_INPUT",
    TOTAL_PRICE_MISMATCH: "TOTAL_PRICE_MISMATCH",
    LINE_ITEM_NOT_FOUND: "LINE_ITEM_NOT_FOUND",
    UNABLE_TO_APPLY: "UNABLE_TO_APPLY",
    DISCOUNT_ALREADY_APPLIED: "DISCOUNT_ALREADY_APPLIED",
    THROTTLED_DURING_CHECKOUT: "THROTTLED_DURING_CHECKOUT",
    EXPIRED_QUEUE_TOKEN: "EXPIRED_QUEUE_TOKEN",
    INVALID_QUEUE_TOKEN: "INVALID_QUEUE_TOKEN",
    INVALID_COUNTRY_AND_CURRENCY: "INVALID_COUNTRY_AND_CURRENCY"
  };
  var enumCollectionSortKeys = {
    TITLE: "TITLE",
    UPDATED_AT: "UPDATED_AT",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumCountryCode = {
    AF: "AF",
    AX: "AX",
    AL: "AL",
    DZ: "DZ",
    AD: "AD",
    AO: "AO",
    AI: "AI",
    AG: "AG",
    AR: "AR",
    AM: "AM",
    AW: "AW",
    AC: "AC",
    AU: "AU",
    AT: "AT",
    AZ: "AZ",
    BS: "BS",
    BH: "BH",
    BD: "BD",
    BB: "BB",
    BY: "BY",
    BE: "BE",
    BZ: "BZ",
    BJ: "BJ",
    BM: "BM",
    BT: "BT",
    BO: "BO",
    BA: "BA",
    BW: "BW",
    BV: "BV",
    BR: "BR",
    IO: "IO",
    BN: "BN",
    BG: "BG",
    BF: "BF",
    BI: "BI",
    KH: "KH",
    CA: "CA",
    CV: "CV",
    BQ: "BQ",
    KY: "KY",
    CF: "CF",
    TD: "TD",
    CL: "CL",
    CN: "CN",
    CX: "CX",
    CC: "CC",
    CO: "CO",
    KM: "KM",
    CG: "CG",
    CD: "CD",
    CK: "CK",
    CR: "CR",
    HR: "HR",
    CU: "CU",
    CW: "CW",
    CY: "CY",
    CZ: "CZ",
    CI: "CI",
    DK: "DK",
    DJ: "DJ",
    DM: "DM",
    DO: "DO",
    EC: "EC",
    EG: "EG",
    SV: "SV",
    GQ: "GQ",
    ER: "ER",
    EE: "EE",
    SZ: "SZ",
    ET: "ET",
    FK: "FK",
    FO: "FO",
    FJ: "FJ",
    FI: "FI",
    FR: "FR",
    GF: "GF",
    PF: "PF",
    TF: "TF",
    GA: "GA",
    GM: "GM",
    GE: "GE",
    DE: "DE",
    GH: "GH",
    GI: "GI",
    GR: "GR",
    GL: "GL",
    GD: "GD",
    GP: "GP",
    GT: "GT",
    GG: "GG",
    GN: "GN",
    GW: "GW",
    GY: "GY",
    HT: "HT",
    HM: "HM",
    VA: "VA",
    HN: "HN",
    HK: "HK",
    HU: "HU",
    IS: "IS",
    IN: "IN",
    ID: "ID",
    IR: "IR",
    IQ: "IQ",
    IE: "IE",
    IM: "IM",
    IL: "IL",
    IT: "IT",
    JM: "JM",
    JP: "JP",
    JE: "JE",
    JO: "JO",
    KZ: "KZ",
    KE: "KE",
    KI: "KI",
    KP: "KP",
    XK: "XK",
    KW: "KW",
    KG: "KG",
    LA: "LA",
    LV: "LV",
    LB: "LB",
    LS: "LS",
    LR: "LR",
    LY: "LY",
    LI: "LI",
    LT: "LT",
    LU: "LU",
    MO: "MO",
    MG: "MG",
    MW: "MW",
    MY: "MY",
    MV: "MV",
    ML: "ML",
    MT: "MT",
    MQ: "MQ",
    MR: "MR",
    MU: "MU",
    YT: "YT",
    MX: "MX",
    MD: "MD",
    MC: "MC",
    MN: "MN",
    ME: "ME",
    MS: "MS",
    MA: "MA",
    MZ: "MZ",
    MM: "MM",
    NA: "NA",
    NR: "NR",
    NP: "NP",
    NL: "NL",
    AN: "AN",
    NC: "NC",
    NZ: "NZ",
    NI: "NI",
    NE: "NE",
    NG: "NG",
    NU: "NU",
    NF: "NF",
    MK: "MK",
    NO: "NO",
    OM: "OM",
    PK: "PK",
    PS: "PS",
    PA: "PA",
    PG: "PG",
    PY: "PY",
    PE: "PE",
    PH: "PH",
    PN: "PN",
    PL: "PL",
    PT: "PT",
    QA: "QA",
    CM: "CM",
    RE: "RE",
    RO: "RO",
    RU: "RU",
    RW: "RW",
    BL: "BL",
    SH: "SH",
    KN: "KN",
    LC: "LC",
    MF: "MF",
    PM: "PM",
    WS: "WS",
    SM: "SM",
    ST: "ST",
    SA: "SA",
    SN: "SN",
    RS: "RS",
    SC: "SC",
    SL: "SL",
    SG: "SG",
    SX: "SX",
    SK: "SK",
    SI: "SI",
    SB: "SB",
    SO: "SO",
    ZA: "ZA",
    GS: "GS",
    KR: "KR",
    SS: "SS",
    ES: "ES",
    LK: "LK",
    VC: "VC",
    SD: "SD",
    SR: "SR",
    SJ: "SJ",
    SE: "SE",
    CH: "CH",
    SY: "SY",
    TW: "TW",
    TJ: "TJ",
    TZ: "TZ",
    TH: "TH",
    TL: "TL",
    TG: "TG",
    TK: "TK",
    TO: "TO",
    TT: "TT",
    TA: "TA",
    TN: "TN",
    TR: "TR",
    TM: "TM",
    TC: "TC",
    TV: "TV",
    UG: "UG",
    UA: "UA",
    AE: "AE",
    GB: "GB",
    US: "US",
    UM: "UM",
    UY: "UY",
    UZ: "UZ",
    VU: "VU",
    VE: "VE",
    VN: "VN",
    VG: "VG",
    WF: "WF",
    EH: "EH",
    YE: "YE",
    ZM: "ZM",
    ZW: "ZW",
    ZZ: "ZZ"
  };
  var enumCropRegion = {
    CENTER: "CENTER",
    TOP: "TOP",
    BOTTOM: "BOTTOM",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
  };
  var enumCurrencyCode = {
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
    CAD: "CAD",
    AFN: "AFN",
    ALL: "ALL",
    DZD: "DZD",
    AOA: "AOA",
    ARS: "ARS",
    AMD: "AMD",
    AWG: "AWG",
    AUD: "AUD",
    BBD: "BBD",
    AZN: "AZN",
    BDT: "BDT",
    BSD: "BSD",
    BHD: "BHD",
    BIF: "BIF",
    BZD: "BZD",
    BMD: "BMD",
    BTN: "BTN",
    BAM: "BAM",
    BRL: "BRL",
    BOB: "BOB",
    BWP: "BWP",
    BND: "BND",
    BGN: "BGN",
    MMK: "MMK",
    KHR: "KHR",
    CVE: "CVE",
    KYD: "KYD",
    XAF: "XAF",
    CLP: "CLP",
    CNY: "CNY",
    COP: "COP",
    KMF: "KMF",
    CDF: "CDF",
    CRC: "CRC",
    HRK: "HRK",
    CZK: "CZK",
    DKK: "DKK",
    DOP: "DOP",
    XCD: "XCD",
    EGP: "EGP",
    ETB: "ETB",
    XPF: "XPF",
    FJD: "FJD",
    GMD: "GMD",
    GHS: "GHS",
    GTQ: "GTQ",
    GYD: "GYD",
    GEL: "GEL",
    HTG: "HTG",
    HNL: "HNL",
    HKD: "HKD",
    HUF: "HUF",
    ISK: "ISK",
    INR: "INR",
    IDR: "IDR",
    ILS: "ILS",
    IQD: "IQD",
    JMD: "JMD",
    JPY: "JPY",
    JEP: "JEP",
    JOD: "JOD",
    KZT: "KZT",
    KES: "KES",
    KWD: "KWD",
    KGS: "KGS",
    LAK: "LAK",
    LVL: "LVL",
    LBP: "LBP",
    LSL: "LSL",
    LRD: "LRD",
    LTL: "LTL",
    MGA: "MGA",
    MKD: "MKD",
    MOP: "MOP",
    MWK: "MWK",
    MVR: "MVR",
    MXN: "MXN",
    MYR: "MYR",
    MUR: "MUR",
    MDL: "MDL",
    MAD: "MAD",
    MNT: "MNT",
    MZN: "MZN",
    NAD: "NAD",
    NPR: "NPR",
    ANG: "ANG",
    NZD: "NZD",
    NIO: "NIO",
    NGN: "NGN",
    NOK: "NOK",
    OMR: "OMR",
    PAB: "PAB",
    PKR: "PKR",
    PGK: "PGK",
    PYG: "PYG",
    PEN: "PEN",
    PHP: "PHP",
    PLN: "PLN",
    QAR: "QAR",
    RON: "RON",
    RUB: "RUB",
    RWF: "RWF",
    WST: "WST",
    SAR: "SAR",
    RSD: "RSD",
    SCR: "SCR",
    SGD: "SGD",
    SDG: "SDG",
    SYP: "SYP",
    ZAR: "ZAR",
    KRW: "KRW",
    SSP: "SSP",
    SBD: "SBD",
    LKR: "LKR",
    SRD: "SRD",
    SZL: "SZL",
    SEK: "SEK",
    CHF: "CHF",
    TWD: "TWD",
    THB: "THB",
    TZS: "TZS",
    TTD: "TTD",
    TND: "TND",
    TRY: "TRY",
    TMT: "TMT",
    UGX: "UGX",
    UAH: "UAH",
    AED: "AED",
    UYU: "UYU",
    UZS: "UZS",
    VUV: "VUV",
    VND: "VND",
    XOF: "XOF",
    YER: "YER",
    ZMW: "ZMW",
    BYN: "BYN",
    BYR: "BYR",
    DJF: "DJF",
    ERN: "ERN",
    FKP: "FKP",
    GIP: "GIP",
    GNF: "GNF",
    IRR: "IRR",
    KID: "KID",
    LYD: "LYD",
    MRU: "MRU",
    SLL: "SLL",
    SHP: "SHP",
    SOS: "SOS",
    STD: "STD",
    TJS: "TJS",
    TOP: "TOP",
    VEF: "VEF",
    VES: "VES",
    XXX: "XXX"
  };
  var enumCustomerErrorCode = {
    BLANK: "BLANK",
    INVALID: "INVALID",
    TAKEN: "TAKEN",
    TOO_LONG: "TOO_LONG",
    TOO_SHORT: "TOO_SHORT",
    UNIDENTIFIED_CUSTOMER: "UNIDENTIFIED_CUSTOMER",
    CUSTOMER_DISABLED: "CUSTOMER_DISABLED",
    PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE: "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE",
    CONTAINS_HTML_TAGS: "CONTAINS_HTML_TAGS",
    CONTAINS_URL: "CONTAINS_URL",
    TOKEN_INVALID: "TOKEN_INVALID",
    ALREADY_ENABLED: "ALREADY_ENABLED",
    NOT_FOUND: "NOT_FOUND",
    BAD_DOMAIN: "BAD_DOMAIN",
    INVALID_MULTIPASS_REQUEST: "INVALID_MULTIPASS_REQUEST"
  };
  var enumDigitalWallet = {
    APPLE_PAY: "APPLE_PAY",
    ANDROID_PAY: "ANDROID_PAY",
    GOOGLE_PAY: "GOOGLE_PAY",
    SHOPIFY_PAY: "SHOPIFY_PAY"
  };
  var enumDiscountApplicationAllocationMethod = {
    ACROSS: "ACROSS",
    EACH: "EACH",
    ONE: "ONE"
  };
  var enumDiscountApplicationTargetSelection = {
    ALL: "ALL",
    ENTITLED: "ENTITLED",
    EXPLICIT: "EXPLICIT"
  };
  var enumDiscountApplicationTargetType = {
    LINE_ITEM: "LINE_ITEM",
    SHIPPING_LINE: "SHIPPING_LINE"
  };
  var enumFilterType = {
    LIST: "LIST",
    PRICE_RANGE: "PRICE_RANGE"
  };
  var enumImageContentType = {
    PNG: "PNG",
    JPG: "JPG",
    WEBP: "WEBP"
  };
  var enumLocationSortKeys = {
    ID: "ID",
    NAME: "NAME",
    CITY: "CITY",
    DISTANCE: "DISTANCE"
  };
  var enumMediaContentType = {
    EXTERNAL_VIDEO: "EXTERNAL_VIDEO",
    IMAGE: "IMAGE",
    MODEL_3D: "MODEL_3D",
    VIDEO: "VIDEO"
  };
  var enumMediaHost = {
    YOUTUBE: "YOUTUBE",
    VIMEO: "VIMEO"
  };
  var enumMetafieldValueType = {
    STRING: "STRING",
    INTEGER: "INTEGER",
    JSON_STRING: "JSON_STRING",
    BOOLEAN: "BOOLEAN"
  };
  var enumOrderCancelReason = {
    CUSTOMER: "CUSTOMER",
    DECLINED: "DECLINED",
    FRAUD: "FRAUD",
    INVENTORY: "INVENTORY",
    OTHER: "OTHER"
  };
  var enumOrderFinancialStatus = {
    PENDING: "PENDING",
    AUTHORIZED: "AUTHORIZED",
    PARTIALLY_PAID: "PARTIALLY_PAID",
    PARTIALLY_REFUNDED: "PARTIALLY_REFUNDED",
    VOIDED: "VOIDED",
    PAID: "PAID",
    REFUNDED: "REFUNDED"
  };
  var enumOrderFulfillmentStatus = {
    UNFULFILLED: "UNFULFILLED",
    PARTIALLY_FULFILLED: "PARTIALLY_FULFILLED",
    FULFILLED: "FULFILLED",
    RESTOCKED: "RESTOCKED",
    PENDING_FULFILLMENT: "PENDING_FULFILLMENT",
    OPEN: "OPEN",
    IN_PROGRESS: "IN_PROGRESS",
    ON_HOLD: "ON_HOLD",
    SCHEDULED: "SCHEDULED"
  };
  var enumOrderSortKeys = {
    PROCESSED_AT: "PROCESSED_AT",
    TOTAL_PRICE: "TOTAL_PRICE",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumPageSortKeys = {
    TITLE: "TITLE",
    UPDATED_AT: "UPDATED_AT",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumPaymentTokenType = {
    APPLE_PAY: "APPLE_PAY",
    VAULT: "VAULT",
    SHOPIFY_PAY: "SHOPIFY_PAY",
    GOOGLE_PAY: "GOOGLE_PAY",
    STRIPE_VAULT_TOKEN: "STRIPE_VAULT_TOKEN"
  };
  var enumProductCollectionSortKeys = {
    TITLE: "TITLE",
    PRICE: "PRICE",
    BEST_SELLING: "BEST_SELLING",
    CREATED: "CREATED",
    ID: "ID",
    MANUAL: "MANUAL",
    COLLECTION_DEFAULT: "COLLECTION_DEFAULT",
    RELEVANCE: "RELEVANCE"
  };
  var enumProductImageSortKeys = {
    CREATED_AT: "CREATED_AT",
    POSITION: "POSITION",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumProductMediaSortKeys = {
    POSITION: "POSITION",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumProductSortKeys = {
    TITLE: "TITLE",
    PRODUCT_TYPE: "PRODUCT_TYPE",
    VENDOR: "VENDOR",
    UPDATED_AT: "UPDATED_AT",
    CREATED_AT: "CREATED_AT",
    BEST_SELLING: "BEST_SELLING",
    PRICE: "PRICE",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumProductVariantSortKeys = {
    TITLE: "TITLE",
    SKU: "SKU",
    POSITION: "POSITION",
    ID: "ID",
    RELEVANCE: "RELEVANCE"
  };
  var enumTransactionKind = {
    SALE: "SALE",
    CAPTURE: "CAPTURE",
    AUTHORIZATION: "AUTHORIZATION",
    EMV_AUTHORIZATION: "EMV_AUTHORIZATION",
    CHANGE: "CHANGE"
  };
  var enumTransactionStatus = {
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE",
    ERROR: "ERROR"
  };
  var enumUnitPriceMeasurementMeasuredType = {
    VOLUME: "VOLUME",
    WEIGHT: "WEIGHT",
    LENGTH: "LENGTH",
    AREA: "AREA"
  };
  var enumUnitPriceMeasurementMeasuredUnit = {
    ML: "ML",
    CL: "CL",
    L: "L",
    M3: "M3",
    MG: "MG",
    G: "G",
    KG: "KG",
    MM: "MM",
    CM: "CM",
    M: "M",
    M2: "M2"
  };
  var enumUnitSystem = {
    IMPERIAL_SYSTEM: "IMPERIAL_SYSTEM",
    METRIC_SYSTEM: "METRIC_SYSTEM"
  };
  var enumWeightUnit = {
    KILOGRAMS: "KILOGRAMS",
    GRAMS: "GRAMS",
    POUNDS: "POUNDS",
    OUNCES: "OUNCES"
  };

  // genql-front/index.ts
  var typeMap = linkTypeMap(types_default);
  var createClient2 = function(options) {
    return createClient({
      url: "https://graphql.myshopify.com/api/2021-07/graphql.json",
      ...options,
      queryRoot: typeMap.Query,
      mutationRoot: typeMap.Mutation,
      subscriptionRoot: typeMap.Subscription
    });
  };
  var everything = {
    __scalar: true
  };
  var generateQueryOp = function(fields) {
    return generateGraphqlOperation("query", typeMap.Query, fields);
  };
  var generateMutationOp = function(fields) {
    return generateGraphqlOperation("mutation", typeMap.Mutation, fields);
  };
})();
