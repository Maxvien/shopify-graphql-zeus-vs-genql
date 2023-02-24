(() => {
  // zeus-front/zeus/const.ts
  var AllTypesProps = {
    Article: {
      comments: {},
      content: {},
      excerpt: {},
      image: {
        crop: "CropRegion"
      },
      metafield: {},
      metafields: {}
    },
    ArticleSortKeys: "enum",
    AttributeInput: {},
    Blog: {
      articleByHandle: {},
      articles: {
        sortKey: "ArticleSortKeys"
      },
      metafield: {},
      metafields: {}
    },
    BlogSortKeys: "enum",
    CardBrand: "enum",
    Cart: {
      lines: {}
    },
    CartBuyerIdentityInput: {
      countryCode: "CountryCode"
    },
    CartErrorCode: "enum",
    CartInput: {
      attributes: "AttributeInput",
      lines: "CartLineInput",
      buyerIdentity: "CartBuyerIdentityInput"
    },
    CartLineInput: {
      attributes: "AttributeInput"
    },
    CartLineUpdateInput: {
      attributes: "AttributeInput"
    },
    Checkout: {
      discountApplications: {},
      lineItems: {}
    },
    CheckoutAttributesUpdateInput: {
      customAttributes: "AttributeInput"
    },
    CheckoutAttributesUpdateV2Input: {
      customAttributes: "AttributeInput"
    },
    CheckoutBuyerIdentityInput: {
      countryCode: "CountryCode"
    },
    CheckoutCreateInput: {
      lineItems: "CheckoutLineItemInput",
      shippingAddress: "MailingAddressInput",
      customAttributes: "AttributeInput",
      presentmentCurrencyCode: "CurrencyCode",
      buyerIdentity: "CheckoutBuyerIdentityInput"
    },
    CheckoutErrorCode: "enum",
    CheckoutLineItemInput: {
      customAttributes: "AttributeInput"
    },
    CheckoutLineItemUpdateInput: {
      customAttributes: "AttributeInput"
    },
    Collection: {
      description: {},
      image: {
        crop: "CropRegion"
      },
      metafield: {},
      metafields: {},
      products: {
        sortKey: "ProductCollectionSortKeys",
        filters: "ProductFilter"
      }
    },
    CollectionSortKeys: "enum",
    Comment: {
      content: {}
    },
    CountryCode: "enum",
    CreditCardPaymentInput: {
      amount: "Money",
      billingAddress: "MailingAddressInput"
    },
    CreditCardPaymentInputV2: {
      paymentAmount: "MoneyInput",
      billingAddress: "MailingAddressInput"
    },
    CropRegion: "enum",
    CurrencyCode: "enum",
    Customer: {
      addresses: {},
      metafield: {},
      metafields: {},
      orders: {
        sortKey: "OrderSortKeys"
      }
    },
    CustomerAccessTokenCreateInput: {},
    CustomerActivateInput: {},
    CustomerCreateInput: {},
    CustomerErrorCode: "enum",
    CustomerResetInput: {},
    CustomerUpdateInput: {},
    DateTime: `scalar.DateTime`,
    Decimal: `scalar.Decimal`,
    DigitalWallet: "enum",
    DiscountApplicationAllocationMethod: "enum",
    DiscountApplicationTargetSelection: "enum",
    DiscountApplicationTargetType: "enum",
    FilterType: "enum",
    Fulfillment: {
      fulfillmentLineItems: {},
      trackingInfo: {}
    },
    GeoCoordinateInput: {},
    HTML: `scalar.HTML`,
    HasMetafields: {
      metafield: {},
      metafields: {}
    },
    Image: {
      transformedSrc: {
        crop: "CropRegion",
        preferredContentType: "ImageContentType"
      },
      url: {
        transform: "ImageTransformInput"
      }
    },
    ImageContentType: "enum",
    ImageTransformInput: {
      crop: "CropRegion",
      preferredContentType: "ImageContentType"
    },
    JSON: `scalar.JSON`,
    LocationSortKeys: "enum",
    MailingAddress: {
      formatted: {}
    },
    MailingAddressInput: {},
    MediaContentType: "enum",
    MediaHost: "enum",
    MetafieldFilter: {},
    MetafieldValueType: "enum",
    Money: `scalar.Money`,
    MoneyInput: {
      amount: "Decimal",
      currencyCode: "CurrencyCode"
    },
    Mutation: {
      cartAttributesUpdate: {
        attributes: "AttributeInput"
      },
      cartBuyerIdentityUpdate: {
        buyerIdentity: "CartBuyerIdentityInput"
      },
      cartCreate: {
        input: "CartInput"
      },
      cartDiscountCodesUpdate: {},
      cartLinesAdd: {
        lines: "CartLineInput"
      },
      cartLinesRemove: {},
      cartLinesUpdate: {
        lines: "CartLineUpdateInput"
      },
      cartNoteUpdate: {},
      checkoutAttributesUpdate: {
        input: "CheckoutAttributesUpdateInput"
      },
      checkoutAttributesUpdateV2: {
        input: "CheckoutAttributesUpdateV2Input"
      },
      checkoutCompleteFree: {},
      checkoutCompleteWithCreditCard: {
        payment: "CreditCardPaymentInput"
      },
      checkoutCompleteWithCreditCardV2: {
        payment: "CreditCardPaymentInputV2"
      },
      checkoutCompleteWithTokenizedPayment: {
        payment: "TokenizedPaymentInput"
      },
      checkoutCompleteWithTokenizedPaymentV2: {
        payment: "TokenizedPaymentInputV2"
      },
      checkoutCompleteWithTokenizedPaymentV3: {
        payment: "TokenizedPaymentInputV3"
      },
      checkoutCreate: {
        input: "CheckoutCreateInput"
      },
      checkoutCustomerAssociate: {},
      checkoutCustomerAssociateV2: {},
      checkoutCustomerDisassociate: {},
      checkoutCustomerDisassociateV2: {},
      checkoutDiscountCodeApply: {},
      checkoutDiscountCodeApplyV2: {},
      checkoutDiscountCodeRemove: {},
      checkoutEmailUpdate: {},
      checkoutEmailUpdateV2: {},
      checkoutGiftCardApply: {},
      checkoutGiftCardRemove: {},
      checkoutGiftCardRemoveV2: {},
      checkoutGiftCardsAppend: {},
      checkoutLineItemsAdd: {
        lineItems: "CheckoutLineItemInput"
      },
      checkoutLineItemsRemove: {},
      checkoutLineItemsReplace: {
        lineItems: "CheckoutLineItemInput"
      },
      checkoutLineItemsUpdate: {
        lineItems: "CheckoutLineItemUpdateInput"
      },
      checkoutShippingAddressUpdate: {
        shippingAddress: "MailingAddressInput"
      },
      checkoutShippingAddressUpdateV2: {
        shippingAddress: "MailingAddressInput"
      },
      checkoutShippingLineUpdate: {},
      customerAccessTokenCreate: {
        input: "CustomerAccessTokenCreateInput"
      },
      customerAccessTokenCreateWithMultipass: {},
      customerAccessTokenDelete: {},
      customerAccessTokenRenew: {},
      customerActivate: {
        input: "CustomerActivateInput"
      },
      customerActivateByUrl: {
        activationUrl: "URL"
      },
      customerAddressCreate: {
        address: "MailingAddressInput"
      },
      customerAddressDelete: {},
      customerAddressUpdate: {
        address: "MailingAddressInput"
      },
      customerCreate: {
        input: "CustomerCreateInput"
      },
      customerDefaultAddressUpdate: {},
      customerRecover: {},
      customerReset: {
        input: "CustomerResetInput"
      },
      customerResetByUrl: {
        resetUrl: "URL"
      },
      customerUpdate: {
        customer: "CustomerUpdateInput"
      }
    },
    Order: {
      discountApplications: {},
      lineItems: {},
      metafield: {},
      metafields: {},
      successfulFulfillments: {}
    },
    OrderCancelReason: "enum",
    OrderFinancialStatus: "enum",
    OrderFulfillmentStatus: "enum",
    OrderSortKeys: "enum",
    Page: {
      metafield: {},
      metafields: {}
    },
    PageSortKeys: "enum",
    PaymentTokenType: "enum",
    PriceRangeFilter: {},
    Product: {
      collections: {},
      description: {},
      images: {
        crop: "CropRegion",
        sortKey: "ProductImageSortKeys"
      },
      media: {
        sortKey: "ProductMediaSortKeys"
      },
      metafield: {},
      metafields: {},
      options: {},
      presentmentPriceRanges: {
        presentmentCurrencies: "CurrencyCode"
      },
      sellingPlanGroups: {},
      variantBySelectedOptions: {
        selectedOptions: "SelectedOptionInput"
      },
      variants: {
        sortKey: "ProductVariantSortKeys"
      }
    },
    ProductCollectionSortKeys: "enum",
    ProductFilter: {
      variantOption: "VariantOptionFilter",
      price: "PriceRangeFilter",
      productMetafield: "MetafieldFilter",
      variantMetafield: "MetafieldFilter"
    },
    ProductImageSortKeys: "enum",
    ProductMediaSortKeys: "enum",
    ProductSortKeys: "enum",
    ProductVariant: {
      image: {
        crop: "CropRegion"
      },
      metafield: {},
      metafields: {},
      presentmentPrices: {
        presentmentCurrencies: "CurrencyCode"
      },
      presentmentUnitPrices: {
        presentmentCurrencies: "CurrencyCode"
      },
      sellingPlanAllocations: {},
      storeAvailability: {}
    },
    ProductVariantSortKeys: "enum",
    QueryRoot: {
      articles: {
        sortKey: "ArticleSortKeys"
      },
      blog: {},
      blogByHandle: {},
      blogs: {
        sortKey: "BlogSortKeys"
      },
      cart: {},
      collection: {},
      collectionByHandle: {},
      collections: {
        sortKey: "CollectionSortKeys"
      },
      customer: {},
      locations: {
        sortKey: "LocationSortKeys",
        near: "GeoCoordinateInput"
      },
      node: {},
      nodes: {},
      page: {},
      pageByHandle: {},
      pages: {
        sortKey: "PageSortKeys"
      },
      product: {},
      productByHandle: {},
      productRecommendations: {},
      productTags: {},
      productTypes: {},
      products: {
        sortKey: "ProductSortKeys"
      }
    },
    SelectedOptionInput: {},
    SellingPlanGroup: {
      sellingPlans: {}
    },
    Shop: {
      articles: {
        sortKey: "ArticleSortKeys"
      },
      blogs: {
        sortKey: "BlogSortKeys"
      },
      collectionByHandle: {},
      collections: {
        sortKey: "CollectionSortKeys"
      },
      metafield: {},
      metafields: {},
      productByHandle: {},
      productTags: {},
      productTypes: {},
      products: {
        sortKey: "ProductSortKeys"
      }
    },
    TokenizedPaymentInput: {
      amount: "Money",
      billingAddress: "MailingAddressInput"
    },
    TokenizedPaymentInputV2: {
      paymentAmount: "MoneyInput",
      billingAddress: "MailingAddressInput"
    },
    TokenizedPaymentInputV3: {
      paymentAmount: "MoneyInput",
      billingAddress: "MailingAddressInput",
      type: "PaymentTokenType"
    },
    TransactionKind: "enum",
    TransactionStatus: "enum",
    URL: `scalar.URL`,
    UnitPriceMeasurementMeasuredType: "enum",
    UnitPriceMeasurementMeasuredUnit: "enum",
    UnitSystem: "enum",
    VariantOptionFilter: {},
    WeightUnit: "enum"
  };
  var ReturnTypes = {
    accessRestricted: {
      reason: "String"
    },
    inContext: {
      country: "CountryCode",
      preferredLocationId: "ID"
    },
    ApiVersion: {
      displayName: "String",
      handle: "String",
      supported: "Boolean"
    },
    AppliedGiftCard: {
      amountUsed: "Money",
      amountUsedV2: "MoneyV2",
      balance: "Money",
      balanceV2: "MoneyV2",
      id: "ID",
      lastCharacters: "String",
      presentmentAmountUsed: "MoneyV2"
    },
    Article: {
      author: "ArticleAuthor",
      authorV2: "ArticleAuthor",
      blog: "Blog",
      comments: "CommentConnection",
      content: "String",
      contentHtml: "HTML",
      excerpt: "String",
      excerptHtml: "HTML",
      handle: "String",
      id: "ID",
      image: "Image",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      onlineStoreUrl: "URL",
      publishedAt: "DateTime",
      seo: "SEO",
      tags: "String",
      title: "String",
      url: "URL"
    },
    ArticleAuthor: {
      bio: "String",
      email: "String",
      firstName: "String",
      lastName: "String",
      name: "String"
    },
    ArticleConnection: {
      edges: "ArticleEdge",
      pageInfo: "PageInfo"
    },
    ArticleEdge: {
      cursor: "String",
      node: "Article"
    },
    Attribute: {
      key: "String",
      value: "String"
    },
    AutomaticDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      title: "String",
      value: "PricingValue"
    },
    AvailableShippingRates: {
      ready: "Boolean",
      shippingRates: "ShippingRate"
    },
    Blog: {
      articleByHandle: "Article",
      articles: "ArticleConnection",
      authors: "ArticleAuthor",
      handle: "String",
      id: "ID",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      onlineStoreUrl: "URL",
      seo: "SEO",
      title: "String",
      url: "URL"
    },
    BlogConnection: {
      edges: "BlogEdge",
      pageInfo: "PageInfo"
    },
    BlogEdge: {
      cursor: "String",
      node: "Blog"
    },
    Cart: {
      attributes: "Attribute",
      buyerIdentity: "CartBuyerIdentity",
      checkoutUrl: "URL",
      createdAt: "DateTime",
      discountCodes: "CartDiscountCode",
      estimatedCost: "CartEstimatedCost",
      id: "ID",
      lines: "CartLineConnection",
      note: "String",
      updatedAt: "DateTime"
    },
    CartAttributesUpdatePayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartAutomaticDiscountAllocation: {
      discountedAmount: "MoneyV2",
      title: "String"
    },
    CartBuyerIdentity: {
      countryCode: "CountryCode",
      customer: "Customer",
      email: "String",
      phone: "String"
    },
    CartBuyerIdentityUpdatePayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartCodeDiscountAllocation: {
      code: "String",
      discountedAmount: "MoneyV2"
    },
    CartCreatePayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartDiscountAllocation: {
      "...on CartAutomaticDiscountAllocation": "CartAutomaticDiscountAllocation",
      "...on CartCodeDiscountAllocation": "CartCodeDiscountAllocation",
      discountedAmount: "MoneyV2"
    },
    CartDiscountCode: {
      applicable: "Boolean",
      code: "String"
    },
    CartDiscountCodesUpdatePayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartEstimatedCost: {
      subtotalAmount: "MoneyV2",
      totalAmount: "MoneyV2",
      totalDutyAmount: "MoneyV2",
      totalTaxAmount: "MoneyV2"
    },
    CartLine: {
      attributes: "Attribute",
      discountAllocations: "CartDiscountAllocation",
      estimatedCost: "CartLineEstimatedCost",
      id: "ID",
      merchandise: "Merchandise",
      quantity: "Int",
      sellingPlanAllocation: "SellingPlanAllocation"
    },
    CartLineConnection: {
      edges: "CartLineEdge",
      pageInfo: "PageInfo"
    },
    CartLineEdge: {
      cursor: "String",
      node: "CartLine"
    },
    CartLineEstimatedCost: {
      subtotalAmount: "MoneyV2",
      totalAmount: "MoneyV2"
    },
    CartLinesAddPayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartLinesRemovePayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartLinesUpdatePayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartNoteUpdatePayload: {
      cart: "Cart",
      userErrors: "CartUserError"
    },
    CartUserError: {
      code: "CartErrorCode",
      field: "String",
      message: "String"
    },
    Checkout: {
      appliedGiftCards: "AppliedGiftCard",
      availableShippingRates: "AvailableShippingRates",
      buyerIdentity: "CheckoutBuyerIdentity",
      completedAt: "DateTime",
      createdAt: "DateTime",
      currencyCode: "CurrencyCode",
      customAttributes: "Attribute",
      customer: "Customer",
      discountApplications: "DiscountApplicationConnection",
      email: "String",
      id: "ID",
      lineItems: "CheckoutLineItemConnection",
      lineItemsSubtotalPrice: "MoneyV2",
      note: "String",
      order: "Order",
      orderStatusUrl: "URL",
      paymentDue: "Money",
      paymentDueV2: "MoneyV2",
      ready: "Boolean",
      requiresShipping: "Boolean",
      shippingAddress: "MailingAddress",
      shippingDiscountAllocations: "DiscountAllocation",
      shippingLine: "ShippingRate",
      subtotalPrice: "Money",
      subtotalPriceV2: "MoneyV2",
      taxExempt: "Boolean",
      taxesIncluded: "Boolean",
      totalDuties: "MoneyV2",
      totalPrice: "Money",
      totalPriceV2: "MoneyV2",
      totalTax: "Money",
      totalTaxV2: "MoneyV2",
      updatedAt: "DateTime",
      webUrl: "URL"
    },
    CheckoutAttributesUpdatePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutAttributesUpdateV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutBuyerIdentity: {
      countryCode: "CountryCode"
    },
    CheckoutCompleteFreePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutCompleteWithCreditCardPayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      payment: "Payment",
      userErrors: "UserError"
    },
    CheckoutCompleteWithCreditCardV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      payment: "Payment",
      userErrors: "UserError"
    },
    CheckoutCompleteWithTokenizedPaymentPayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      payment: "Payment",
      userErrors: "UserError"
    },
    CheckoutCompleteWithTokenizedPaymentV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      payment: "Payment",
      userErrors: "UserError"
    },
    CheckoutCompleteWithTokenizedPaymentV3Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      payment: "Payment",
      userErrors: "UserError"
    },
    CheckoutCreatePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      queueToken: "String",
      userErrors: "UserError"
    },
    CheckoutCustomerAssociatePayload: {
      checkout: "Checkout",
      customer: "Customer",
      userErrors: "UserError"
    },
    CheckoutCustomerAssociateV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      customer: "Customer",
      userErrors: "UserError"
    },
    CheckoutCustomerDisassociatePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutCustomerDisassociateV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutDiscountCodeApplyPayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutDiscountCodeApplyV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutDiscountCodeRemovePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutEmailUpdatePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutEmailUpdateV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutGiftCardApplyPayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutGiftCardRemovePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutGiftCardRemoveV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutGiftCardsAppendPayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutLineItem: {
      customAttributes: "Attribute",
      discountAllocations: "DiscountAllocation",
      id: "ID",
      quantity: "Int",
      title: "String",
      unitPrice: "MoneyV2",
      variant: "ProductVariant"
    },
    CheckoutLineItemConnection: {
      edges: "CheckoutLineItemEdge",
      pageInfo: "PageInfo"
    },
    CheckoutLineItemEdge: {
      cursor: "String",
      node: "CheckoutLineItem"
    },
    CheckoutLineItemsAddPayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutLineItemsRemovePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutLineItemsReplacePayload: {
      checkout: "Checkout",
      userErrors: "CheckoutUserError"
    },
    CheckoutLineItemsUpdatePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutShippingAddressUpdatePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutShippingAddressUpdateV2Payload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutShippingLineUpdatePayload: {
      checkout: "Checkout",
      checkoutUserErrors: "CheckoutUserError",
      userErrors: "UserError"
    },
    CheckoutUserError: {
      code: "CheckoutErrorCode",
      field: "String",
      message: "String"
    },
    Collection: {
      description: "String",
      descriptionHtml: "HTML",
      handle: "String",
      id: "ID",
      image: "Image",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      onlineStoreUrl: "URL",
      products: "ProductConnection",
      title: "String",
      updatedAt: "DateTime"
    },
    CollectionConnection: {
      edges: "CollectionEdge",
      pageInfo: "PageInfo"
    },
    CollectionEdge: {
      cursor: "String",
      node: "Collection"
    },
    Comment: {
      author: "CommentAuthor",
      content: "String",
      contentHtml: "HTML",
      id: "ID"
    },
    CommentAuthor: {
      email: "String",
      name: "String"
    },
    CommentConnection: {
      edges: "CommentEdge",
      pageInfo: "PageInfo"
    },
    CommentEdge: {
      cursor: "String",
      node: "Comment"
    },
    Country: {
      currency: "Currency",
      isoCode: "CountryCode",
      name: "String",
      unitSystem: "UnitSystem"
    },
    CreditCard: {
      brand: "String",
      expiryMonth: "Int",
      expiryYear: "Int",
      firstDigits: "String",
      firstName: "String",
      lastDigits: "String",
      lastName: "String",
      maskedNumber: "String"
    },
    Currency: {
      isoCode: "CurrencyCode",
      name: "String",
      symbol: "String"
    },
    Customer: {
      acceptsMarketing: "Boolean",
      addresses: "MailingAddressConnection",
      createdAt: "DateTime",
      defaultAddress: "MailingAddress",
      displayName: "String",
      email: "String",
      firstName: "String",
      id: "ID",
      lastIncompleteCheckout: "Checkout",
      lastName: "String",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      orders: "OrderConnection",
      phone: "String",
      tags: "String",
      updatedAt: "DateTime"
    },
    CustomerAccessToken: {
      accessToken: "String",
      expiresAt: "DateTime"
    },
    CustomerAccessTokenCreatePayload: {
      customerAccessToken: "CustomerAccessToken",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerAccessTokenCreateWithMultipassPayload: {
      customerAccessToken: "CustomerAccessToken",
      customerUserErrors: "CustomerUserError"
    },
    CustomerAccessTokenDeletePayload: {
      deletedAccessToken: "String",
      deletedCustomerAccessTokenId: "String",
      userErrors: "UserError"
    },
    CustomerAccessTokenRenewPayload: {
      customerAccessToken: "CustomerAccessToken",
      userErrors: "UserError"
    },
    CustomerActivateByUrlPayload: {
      customer: "Customer",
      customerAccessToken: "CustomerAccessToken",
      customerUserErrors: "CustomerUserError"
    },
    CustomerActivatePayload: {
      customer: "Customer",
      customerAccessToken: "CustomerAccessToken",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerAddressCreatePayload: {
      customerAddress: "MailingAddress",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerAddressDeletePayload: {
      customerUserErrors: "CustomerUserError",
      deletedCustomerAddressId: "String",
      userErrors: "UserError"
    },
    CustomerAddressUpdatePayload: {
      customerAddress: "MailingAddress",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerCreatePayload: {
      customer: "Customer",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerDefaultAddressUpdatePayload: {
      customer: "Customer",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerRecoverPayload: {
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerResetByUrlPayload: {
      customer: "Customer",
      customerAccessToken: "CustomerAccessToken",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerResetPayload: {
      customer: "Customer",
      customerAccessToken: "CustomerAccessToken",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerUpdatePayload: {
      customer: "Customer",
      customerAccessToken: "CustomerAccessToken",
      customerUserErrors: "CustomerUserError",
      userErrors: "UserError"
    },
    CustomerUserError: {
      code: "CustomerErrorCode",
      field: "String",
      message: "String"
    },
    DateTime: `scalar.DateTime`,
    Decimal: `scalar.Decimal`,
    DiscountAllocation: {
      allocatedAmount: "MoneyV2",
      discountApplication: "DiscountApplication"
    },
    DiscountApplication: {
      "...on AutomaticDiscountApplication": "AutomaticDiscountApplication",
      "...on DiscountCodeApplication": "DiscountCodeApplication",
      "...on ManualDiscountApplication": "ManualDiscountApplication",
      "...on ScriptDiscountApplication": "ScriptDiscountApplication",
      allocationMethod: "DiscountApplicationAllocationMethod",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    DiscountApplicationConnection: {
      edges: "DiscountApplicationEdge",
      pageInfo: "PageInfo"
    },
    DiscountApplicationEdge: {
      cursor: "String",
      node: "DiscountApplication"
    },
    DiscountCodeApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      applicable: "Boolean",
      code: "String",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    DisplayableError: {
      "...on CartUserError": "CartUserError",
      "...on CheckoutUserError": "CheckoutUserError",
      "...on CustomerUserError": "CustomerUserError",
      "...on UserError": "UserError",
      field: "String",
      message: "String"
    },
    Domain: {
      host: "String",
      sslEnabled: "Boolean",
      url: "URL"
    },
    ExternalVideo: {
      alt: "String",
      embeddedUrl: "URL",
      host: "MediaHost",
      id: "ID",
      mediaContentType: "MediaContentType",
      previewImage: "Image"
    },
    Filter: {
      id: "String",
      label: "String",
      type: "FilterType",
      values: "FilterValue"
    },
    FilterValue: {
      count: "Int",
      id: "String",
      input: "JSON",
      label: "String"
    },
    Fulfillment: {
      fulfillmentLineItems: "FulfillmentLineItemConnection",
      trackingCompany: "String",
      trackingInfo: "FulfillmentTrackingInfo"
    },
    FulfillmentLineItem: {
      lineItem: "OrderLineItem",
      quantity: "Int"
    },
    FulfillmentLineItemConnection: {
      edges: "FulfillmentLineItemEdge",
      pageInfo: "PageInfo"
    },
    FulfillmentLineItemEdge: {
      cursor: "String",
      node: "FulfillmentLineItem"
    },
    FulfillmentTrackingInfo: {
      number: "String",
      url: "URL"
    },
    HTML: `scalar.HTML`,
    HasMetafields: {
      "...on Article": "Article",
      "...on Blog": "Blog",
      "...on Collection": "Collection",
      "...on Customer": "Customer",
      "...on Order": "Order",
      "...on Page": "Page",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      "...on Shop": "Shop",
      metafield: "Metafield",
      metafields: "MetafieldConnection"
    },
    Image: {
      altText: "String",
      height: "Int",
      id: "ID",
      originalSrc: "URL",
      src: "URL",
      transformedSrc: "URL",
      url: "URL",
      width: "Int"
    },
    ImageConnection: {
      edges: "ImageEdge",
      pageInfo: "PageInfo"
    },
    ImageEdge: {
      cursor: "String",
      node: "Image"
    },
    JSON: `scalar.JSON`,
    Localization: {
      availableCountries: "Country",
      country: "Country"
    },
    Location: {
      address: "LocationAddress",
      id: "ID",
      name: "String"
    },
    LocationAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      country: "String",
      countryCode: "String",
      formatted: "String",
      latitude: "Float",
      longitude: "Float",
      phone: "String",
      province: "String",
      provinceCode: "String",
      zip: "String"
    },
    LocationConnection: {
      edges: "LocationEdge",
      pageInfo: "PageInfo"
    },
    LocationEdge: {
      cursor: "String",
      node: "Location"
    },
    MailingAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      company: "String",
      country: "String",
      countryCode: "String",
      countryCodeV2: "CountryCode",
      firstName: "String",
      formatted: "String",
      formattedArea: "String",
      id: "ID",
      lastName: "String",
      latitude: "Float",
      longitude: "Float",
      name: "String",
      phone: "String",
      province: "String",
      provinceCode: "String",
      zip: "String"
    },
    MailingAddressConnection: {
      edges: "MailingAddressEdge",
      pageInfo: "PageInfo"
    },
    MailingAddressEdge: {
      cursor: "String",
      node: "MailingAddress"
    },
    ManualDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      description: "String",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      title: "String",
      value: "PricingValue"
    },
    Media: {
      "...on ExternalVideo": "ExternalVideo",
      "...on MediaImage": "MediaImage",
      "...on Model3d": "Model3d",
      "...on Video": "Video",
      alt: "String",
      mediaContentType: "MediaContentType",
      previewImage: "Image"
    },
    MediaConnection: {
      edges: "MediaEdge",
      pageInfo: "PageInfo"
    },
    MediaEdge: {
      cursor: "String",
      node: "Media"
    },
    MediaImage: {
      alt: "String",
      id: "ID",
      image: "Image",
      mediaContentType: "MediaContentType",
      previewImage: "Image"
    },
    Merchandise: {
      "...on ProductVariant": "ProductVariant"
    },
    Metafield: {
      createdAt: "DateTime",
      description: "String",
      id: "ID",
      key: "String",
      namespace: "String",
      parentResource: "MetafieldParentResource",
      reference: "MetafieldReference",
      type: "String",
      updatedAt: "DateTime",
      value: "String",
      valueType: "MetafieldValueType"
    },
    MetafieldConnection: {
      edges: "MetafieldEdge",
      pageInfo: "PageInfo"
    },
    MetafieldEdge: {
      cursor: "String",
      node: "Metafield"
    },
    MetafieldParentResource: {
      "...on Article": "Article",
      "...on Blog": "Blog",
      "...on Collection": "Collection",
      "...on Customer": "Customer",
      "...on Order": "Order",
      "...on Page": "Page",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      "...on Shop": "Shop"
    },
    MetafieldReference: {
      "...on MediaImage": "MediaImage",
      "...on Page": "Page",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant"
    },
    Model3d: {
      alt: "String",
      id: "ID",
      mediaContentType: "MediaContentType",
      previewImage: "Image",
      sources: "Model3dSource"
    },
    Model3dSource: {
      filesize: "Int",
      format: "String",
      mimeType: "String",
      url: "String"
    },
    Money: `scalar.Money`,
    MoneyV2: {
      amount: "Decimal",
      currencyCode: "CurrencyCode"
    },
    MoneyV2Connection: {
      edges: "MoneyV2Edge",
      pageInfo: "PageInfo"
    },
    MoneyV2Edge: {
      cursor: "String",
      node: "MoneyV2"
    },
    Mutation: {
      cartAttributesUpdate: "CartAttributesUpdatePayload",
      cartBuyerIdentityUpdate: "CartBuyerIdentityUpdatePayload",
      cartCreate: "CartCreatePayload",
      cartDiscountCodesUpdate: "CartDiscountCodesUpdatePayload",
      cartLinesAdd: "CartLinesAddPayload",
      cartLinesRemove: "CartLinesRemovePayload",
      cartLinesUpdate: "CartLinesUpdatePayload",
      cartNoteUpdate: "CartNoteUpdatePayload",
      checkoutAttributesUpdate: "CheckoutAttributesUpdatePayload",
      checkoutAttributesUpdateV2: "CheckoutAttributesUpdateV2Payload",
      checkoutCompleteFree: "CheckoutCompleteFreePayload",
      checkoutCompleteWithCreditCard: "CheckoutCompleteWithCreditCardPayload",
      checkoutCompleteWithCreditCardV2: "CheckoutCompleteWithCreditCardV2Payload",
      checkoutCompleteWithTokenizedPayment: "CheckoutCompleteWithTokenizedPaymentPayload",
      checkoutCompleteWithTokenizedPaymentV2: "CheckoutCompleteWithTokenizedPaymentV2Payload",
      checkoutCompleteWithTokenizedPaymentV3: "CheckoutCompleteWithTokenizedPaymentV3Payload",
      checkoutCreate: "CheckoutCreatePayload",
      checkoutCustomerAssociate: "CheckoutCustomerAssociatePayload",
      checkoutCustomerAssociateV2: "CheckoutCustomerAssociateV2Payload",
      checkoutCustomerDisassociate: "CheckoutCustomerDisassociatePayload",
      checkoutCustomerDisassociateV2: "CheckoutCustomerDisassociateV2Payload",
      checkoutDiscountCodeApply: "CheckoutDiscountCodeApplyPayload",
      checkoutDiscountCodeApplyV2: "CheckoutDiscountCodeApplyV2Payload",
      checkoutDiscountCodeRemove: "CheckoutDiscountCodeRemovePayload",
      checkoutEmailUpdate: "CheckoutEmailUpdatePayload",
      checkoutEmailUpdateV2: "CheckoutEmailUpdateV2Payload",
      checkoutGiftCardApply: "CheckoutGiftCardApplyPayload",
      checkoutGiftCardRemove: "CheckoutGiftCardRemovePayload",
      checkoutGiftCardRemoveV2: "CheckoutGiftCardRemoveV2Payload",
      checkoutGiftCardsAppend: "CheckoutGiftCardsAppendPayload",
      checkoutLineItemsAdd: "CheckoutLineItemsAddPayload",
      checkoutLineItemsRemove: "CheckoutLineItemsRemovePayload",
      checkoutLineItemsReplace: "CheckoutLineItemsReplacePayload",
      checkoutLineItemsUpdate: "CheckoutLineItemsUpdatePayload",
      checkoutShippingAddressUpdate: "CheckoutShippingAddressUpdatePayload",
      checkoutShippingAddressUpdateV2: "CheckoutShippingAddressUpdateV2Payload",
      checkoutShippingLineUpdate: "CheckoutShippingLineUpdatePayload",
      customerAccessTokenCreate: "CustomerAccessTokenCreatePayload",
      customerAccessTokenCreateWithMultipass: "CustomerAccessTokenCreateWithMultipassPayload",
      customerAccessTokenDelete: "CustomerAccessTokenDeletePayload",
      customerAccessTokenRenew: "CustomerAccessTokenRenewPayload",
      customerActivate: "CustomerActivatePayload",
      customerActivateByUrl: "CustomerActivateByUrlPayload",
      customerAddressCreate: "CustomerAddressCreatePayload",
      customerAddressDelete: "CustomerAddressDeletePayload",
      customerAddressUpdate: "CustomerAddressUpdatePayload",
      customerCreate: "CustomerCreatePayload",
      customerDefaultAddressUpdate: "CustomerDefaultAddressUpdatePayload",
      customerRecover: "CustomerRecoverPayload",
      customerReset: "CustomerResetPayload",
      customerResetByUrl: "CustomerResetByUrlPayload",
      customerUpdate: "CustomerUpdatePayload"
    },
    Node: {
      "...on AppliedGiftCard": "AppliedGiftCard",
      "...on Article": "Article",
      "...on Blog": "Blog",
      "...on Cart": "Cart",
      "...on CartLine": "CartLine",
      "...on Checkout": "Checkout",
      "...on CheckoutLineItem": "CheckoutLineItem",
      "...on Collection": "Collection",
      "...on Comment": "Comment",
      "...on ExternalVideo": "ExternalVideo",
      "...on Location": "Location",
      "...on MailingAddress": "MailingAddress",
      "...on MediaImage": "MediaImage",
      "...on Metafield": "Metafield",
      "...on Model3d": "Model3d",
      "...on Order": "Order",
      "...on Page": "Page",
      "...on Payment": "Payment",
      "...on Product": "Product",
      "...on ProductOption": "ProductOption",
      "...on ProductVariant": "ProductVariant",
      "...on ShopPolicy": "ShopPolicy",
      "...on Video": "Video",
      id: "ID"
    },
    OnlineStorePublishable: {
      "...on Article": "Article",
      "...on Blog": "Blog",
      "...on Collection": "Collection",
      "...on Page": "Page",
      "...on Product": "Product",
      onlineStoreUrl: "URL"
    },
    Order: {
      cancelReason: "OrderCancelReason",
      canceledAt: "DateTime",
      currencyCode: "CurrencyCode",
      currentSubtotalPrice: "MoneyV2",
      currentTotalDuties: "MoneyV2",
      currentTotalPrice: "MoneyV2",
      currentTotalTax: "MoneyV2",
      customerLocale: "String",
      customerUrl: "URL",
      discountApplications: "DiscountApplicationConnection",
      edited: "Boolean",
      email: "String",
      financialStatus: "OrderFinancialStatus",
      fulfillmentStatus: "OrderFulfillmentStatus",
      id: "ID",
      lineItems: "OrderLineItemConnection",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      name: "String",
      orderNumber: "Int",
      originalTotalDuties: "MoneyV2",
      originalTotalPrice: "MoneyV2",
      phone: "String",
      processedAt: "DateTime",
      shippingAddress: "MailingAddress",
      shippingDiscountAllocations: "DiscountAllocation",
      statusUrl: "URL",
      subtotalPrice: "Money",
      subtotalPriceV2: "MoneyV2",
      successfulFulfillments: "Fulfillment",
      totalPrice: "Money",
      totalPriceV2: "MoneyV2",
      totalRefunded: "Money",
      totalRefundedV2: "MoneyV2",
      totalShippingPrice: "Money",
      totalShippingPriceV2: "MoneyV2",
      totalTax: "Money",
      totalTaxV2: "MoneyV2"
    },
    OrderConnection: {
      edges: "OrderEdge",
      pageInfo: "PageInfo"
    },
    OrderEdge: {
      cursor: "String",
      node: "Order"
    },
    OrderLineItem: {
      currentQuantity: "Int",
      customAttributes: "Attribute",
      discountAllocations: "DiscountAllocation",
      discountedTotalPrice: "MoneyV2",
      originalTotalPrice: "MoneyV2",
      quantity: "Int",
      title: "String",
      variant: "ProductVariant"
    },
    OrderLineItemConnection: {
      edges: "OrderLineItemEdge",
      pageInfo: "PageInfo"
    },
    OrderLineItemEdge: {
      cursor: "String",
      node: "OrderLineItem"
    },
    Page: {
      body: "HTML",
      bodySummary: "String",
      createdAt: "DateTime",
      handle: "String",
      id: "ID",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      onlineStoreUrl: "URL",
      seo: "SEO",
      title: "String",
      updatedAt: "DateTime",
      url: "URL"
    },
    PageConnection: {
      edges: "PageEdge",
      pageInfo: "PageInfo"
    },
    PageEdge: {
      cursor: "String",
      node: "Page"
    },
    PageInfo: {
      hasNextPage: "Boolean",
      hasPreviousPage: "Boolean"
    },
    Payment: {
      amount: "Money",
      amountV2: "MoneyV2",
      billingAddress: "MailingAddress",
      checkout: "Checkout",
      creditCard: "CreditCard",
      errorMessage: "String",
      id: "ID",
      idempotencyKey: "String",
      nextActionUrl: "URL",
      ready: "Boolean",
      test: "Boolean",
      transaction: "Transaction"
    },
    PaymentSettings: {
      acceptedCardBrands: "CardBrand",
      cardVaultUrl: "URL",
      countryCode: "CountryCode",
      currencyCode: "CurrencyCode",
      enabledPresentmentCurrencies: "CurrencyCode",
      shopifyPaymentsAccountId: "String",
      supportedDigitalWallets: "DigitalWallet"
    },
    PricingPercentageValue: {
      percentage: "Float"
    },
    PricingValue: {
      "...on MoneyV2": "MoneyV2",
      "...on PricingPercentageValue": "PricingPercentageValue"
    },
    Product: {
      availableForSale: "Boolean",
      collections: "CollectionConnection",
      compareAtPriceRange: "ProductPriceRange",
      createdAt: "DateTime",
      description: "String",
      descriptionHtml: "HTML",
      featuredImage: "Image",
      handle: "String",
      id: "ID",
      images: "ImageConnection",
      media: "MediaConnection",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      onlineStoreUrl: "URL",
      options: "ProductOption",
      presentmentPriceRanges: "ProductPriceRangeConnection",
      priceRange: "ProductPriceRange",
      productType: "String",
      publishedAt: "DateTime",
      requiresSellingPlan: "Boolean",
      sellingPlanGroups: "SellingPlanGroupConnection",
      seo: "SEO",
      tags: "String",
      title: "String",
      totalInventory: "Int",
      updatedAt: "DateTime",
      variantBySelectedOptions: "ProductVariant",
      variants: "ProductVariantConnection",
      vendor: "String"
    },
    ProductConnection: {
      edges: "ProductEdge",
      filters: "Filter",
      pageInfo: "PageInfo"
    },
    ProductEdge: {
      cursor: "String",
      node: "Product"
    },
    ProductOption: {
      id: "ID",
      name: "String",
      values: "String"
    },
    ProductPriceRange: {
      maxVariantPrice: "MoneyV2",
      minVariantPrice: "MoneyV2"
    },
    ProductPriceRangeConnection: {
      edges: "ProductPriceRangeEdge",
      pageInfo: "PageInfo"
    },
    ProductPriceRangeEdge: {
      cursor: "String",
      node: "ProductPriceRange"
    },
    ProductVariant: {
      available: "Boolean",
      availableForSale: "Boolean",
      barcode: "String",
      compareAtPrice: "Money",
      compareAtPriceV2: "MoneyV2",
      currentlyNotInStock: "Boolean",
      id: "ID",
      image: "Image",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      presentmentPrices: "ProductVariantPricePairConnection",
      presentmentUnitPrices: "MoneyV2Connection",
      price: "Money",
      priceV2: "MoneyV2",
      product: "Product",
      quantityAvailable: "Int",
      requiresShipping: "Boolean",
      selectedOptions: "SelectedOption",
      sellingPlanAllocations: "SellingPlanAllocationConnection",
      sku: "String",
      storeAvailability: "StoreAvailabilityConnection",
      title: "String",
      unitPrice: "MoneyV2",
      unitPriceMeasurement: "UnitPriceMeasurement",
      weight: "Float",
      weightUnit: "WeightUnit"
    },
    ProductVariantConnection: {
      edges: "ProductVariantEdge",
      pageInfo: "PageInfo"
    },
    ProductVariantEdge: {
      cursor: "String",
      node: "ProductVariant"
    },
    ProductVariantPricePair: {
      compareAtPrice: "MoneyV2",
      price: "MoneyV2"
    },
    ProductVariantPricePairConnection: {
      edges: "ProductVariantPricePairEdge",
      pageInfo: "PageInfo"
    },
    ProductVariantPricePairEdge: {
      cursor: "String",
      node: "ProductVariantPricePair"
    },
    QueryRoot: {
      articles: "ArticleConnection",
      blog: "Blog",
      blogByHandle: "Blog",
      blogs: "BlogConnection",
      cart: "Cart",
      collection: "Collection",
      collectionByHandle: "Collection",
      collections: "CollectionConnection",
      customer: "Customer",
      localization: "Localization",
      locations: "LocationConnection",
      node: "Node",
      nodes: "Node",
      page: "Page",
      pageByHandle: "Page",
      pages: "PageConnection",
      product: "Product",
      productByHandle: "Product",
      productRecommendations: "Product",
      productTags: "StringConnection",
      productTypes: "StringConnection",
      products: "ProductConnection",
      publicApiVersions: "ApiVersion",
      shop: "Shop"
    },
    SEO: {
      description: "String",
      title: "String"
    },
    ScriptDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      description: "String",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      title: "String",
      value: "PricingValue"
    },
    SelectedOption: {
      name: "String",
      value: "String"
    },
    SellingPlan: {
      description: "String",
      id: "ID",
      name: "String",
      options: "SellingPlanOption",
      priceAdjustments: "SellingPlanPriceAdjustment",
      recurringDeliveries: "Boolean"
    },
    SellingPlanAllocation: {
      priceAdjustments: "SellingPlanAllocationPriceAdjustment",
      sellingPlan: "SellingPlan"
    },
    SellingPlanAllocationConnection: {
      edges: "SellingPlanAllocationEdge",
      pageInfo: "PageInfo"
    },
    SellingPlanAllocationEdge: {
      cursor: "String",
      node: "SellingPlanAllocation"
    },
    SellingPlanAllocationPriceAdjustment: {
      compareAtPrice: "MoneyV2",
      perDeliveryPrice: "MoneyV2",
      price: "MoneyV2",
      unitPrice: "MoneyV2"
    },
    SellingPlanConnection: {
      edges: "SellingPlanEdge",
      pageInfo: "PageInfo"
    },
    SellingPlanEdge: {
      cursor: "String",
      node: "SellingPlan"
    },
    SellingPlanFixedAmountPriceAdjustment: {
      adjustmentAmount: "MoneyV2"
    },
    SellingPlanFixedPriceAdjustment: {
      price: "MoneyV2"
    },
    SellingPlanGroup: {
      appName: "String",
      name: "String",
      options: "SellingPlanGroupOption",
      sellingPlans: "SellingPlanConnection"
    },
    SellingPlanGroupConnection: {
      edges: "SellingPlanGroupEdge",
      pageInfo: "PageInfo"
    },
    SellingPlanGroupEdge: {
      cursor: "String",
      node: "SellingPlanGroup"
    },
    SellingPlanGroupOption: {
      name: "String",
      values: "String"
    },
    SellingPlanOption: {
      name: "String",
      value: "String"
    },
    SellingPlanPercentagePriceAdjustment: {
      adjustmentPercentage: "Int"
    },
    SellingPlanPriceAdjustment: {
      adjustmentValue: "SellingPlanPriceAdjustmentValue",
      orderCount: "Int"
    },
    SellingPlanPriceAdjustmentValue: {
      "...on SellingPlanFixedAmountPriceAdjustment": "SellingPlanFixedAmountPriceAdjustment",
      "...on SellingPlanFixedPriceAdjustment": "SellingPlanFixedPriceAdjustment",
      "...on SellingPlanPercentagePriceAdjustment": "SellingPlanPercentagePriceAdjustment"
    },
    ShippingRate: {
      handle: "String",
      price: "Money",
      priceV2: "MoneyV2",
      title: "String"
    },
    Shop: {
      articles: "ArticleConnection",
      blogs: "BlogConnection",
      collectionByHandle: "Collection",
      collections: "CollectionConnection",
      currencyCode: "CurrencyCode",
      description: "String",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      moneyFormat: "String",
      name: "String",
      paymentSettings: "PaymentSettings",
      primaryDomain: "Domain",
      privacyPolicy: "ShopPolicy",
      productByHandle: "Product",
      productTags: "StringConnection",
      productTypes: "StringConnection",
      products: "ProductConnection",
      refundPolicy: "ShopPolicy",
      shippingPolicy: "ShopPolicy",
      shipsToCountries: "CountryCode",
      shopifyPaymentsAccountId: "String",
      subscriptionPolicy: "ShopPolicyWithDefault",
      termsOfService: "ShopPolicy"
    },
    ShopPolicy: {
      body: "String",
      handle: "String",
      id: "ID",
      title: "String",
      url: "URL"
    },
    ShopPolicyWithDefault: {
      body: "String",
      handle: "String",
      id: "ID",
      title: "String",
      url: "URL"
    },
    StoreAvailability: {
      available: "Boolean",
      location: "Location",
      pickUpTime: "String"
    },
    StoreAvailabilityConnection: {
      edges: "StoreAvailabilityEdge",
      pageInfo: "PageInfo"
    },
    StoreAvailabilityEdge: {
      cursor: "String",
      node: "StoreAvailability"
    },
    StringConnection: {
      edges: "StringEdge",
      pageInfo: "PageInfo"
    },
    StringEdge: {
      cursor: "String",
      node: "String"
    },
    Transaction: {
      amount: "Money",
      amountV2: "MoneyV2",
      kind: "TransactionKind",
      status: "TransactionStatus",
      statusV2: "TransactionStatus",
      test: "Boolean"
    },
    URL: `scalar.URL`,
    UnitPriceMeasurement: {
      measuredType: "UnitPriceMeasurementMeasuredType",
      quantityUnit: "UnitPriceMeasurementMeasuredUnit",
      quantityValue: "Float",
      referenceUnit: "UnitPriceMeasurementMeasuredUnit",
      referenceValue: "Int"
    },
    UserError: {
      field: "String",
      message: "String"
    },
    Video: {
      alt: "String",
      id: "ID",
      mediaContentType: "MediaContentType",
      previewImage: "Image",
      sources: "VideoSource"
    },
    VideoSource: {
      format: "String",
      height: "Int",
      mimeType: "String",
      url: "String",
      width: "Int"
    }
  };
  var Ops = {
    mutation: "Mutation",
    query: "QueryRoot"
  };

  // zeus-front/zeus/index.ts
  var HOST = "https://graphql.myshopify.com/api/2021-07/graphql.json";
  var HEADERS = {};
  var apiSubscription = (options) => (query) => {
    try {
      const queryString = options[0] + "?query=" + encodeURIComponent(query);
      const wsString = queryString.replace("http", "ws");
      const host = options.length > 1 && options[1]?.websocket?.[0] || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e) => {
          ws.onmessage = (event) => {
            if (event.data) {
              const parsed = JSON.parse(event.data);
              const data = parsed.data;
              return e(data);
            }
          };
        },
        off: (e) => {
          ws.onclose = e;
        },
        error: (e) => {
          ws.onerror = e;
        },
        open: (e) => {
          ws.onopen = e;
        }
      };
    } catch {
      throw new Error("No websockets implemented");
    }
  };
  var handleFetchResponse = (response) => {
    if (!response.ok) {
      return new Promise((_, reject) => {
        response.text().then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        }).catch(reject);
      });
    }
    return response.json();
  };
  var apiFetch = (options) => (query, variables = {}) => {
    const fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === "GET") {
      return fetch(`${options[0]}?query=${encodeURIComponent(query)}`, fetchOptions).then(handleFetchResponse).then((response) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
    }
    return fetch(`${options[0]}`, {
      body: JSON.stringify({ query, variables }),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      ...fetchOptions
    }).then(handleFetchResponse).then((response) => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      return response.data;
    });
  };
  var InternalsBuildQuery = ({
    ops,
    props,
    returns,
    options,
    scalars
  }) => {
    const ibb = (k, o, p = "", root = true, vars = []) => {
      const keyForPath = purifyGraphQLKey(k);
      const newPath = [p, keyForPath].join(SEPARATOR);
      if (!o) {
        return "";
      }
      if (typeof o === "boolean" || typeof o === "number") {
        return k;
      }
      if (typeof o === "string") {
        return `${k} ${o}`;
      }
      if (Array.isArray(o)) {
        const args = InternalArgsBuilt({
          props,
          returns,
          ops,
          scalars,
          vars
        })(o[0], newPath);
        return `${ibb(args ? `${k}(${args})` : k, o[1], p, false, vars)}`;
      }
      if (k === "__alias") {
        return Object.entries(o).map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== "object" || Array.isArray(objectUnderAlias)) {
            throw new Error(
              "Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}"
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(`${alias}:${operationName}`, operation, p, false, vars);
        }).join("\n");
      }
      const hasOperationName = root && options?.operationName ? " " + options.operationName : "";
      const keyForDirectives = o.__directives ?? "";
      const query = `{${Object.entries(o).filter(([k2]) => k2 !== "__directives").map((e) => ibb(...e, [p, `field<>${keyForPath}`].join(SEPARATOR), false, vars)).join("\n")}}`;
      if (!root) {
        return `${k} ${keyForDirectives}${hasOperationName} ${query}`;
      }
      const varsString = vars.map((v) => `${v.name}: ${v.graphQLType}`).join(", ");
      return `${k} ${keyForDirectives}${hasOperationName}${varsString ? `(${varsString})` : ""} ${query}`;
    };
    return ibb;
  };
  var Thunder = (fn) => (operation, graphqlOptions) => (o, ops) => fn(
    Zeus(operation, o, {
      operationOptions: ops,
      scalars: graphqlOptions?.scalars
    }),
    ops?.variables
  ).then((data) => {
    if (graphqlOptions?.scalars) {
      return decodeScalarsInResponse({
        response: data,
        initialOp: operation,
        initialZeusQuery: o,
        returns: ReturnTypes,
        scalars: graphqlOptions.scalars,
        ops: Ops
      });
    }
    return data;
  });
  var Chain = (...options) => Thunder(apiFetch(options));
  var SubscriptionThunder = (fn) => (operation, graphqlOptions) => (o, ops) => {
    const returnedFunction = fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars
      })
    );
    if (returnedFunction?.on && graphqlOptions?.scalars) {
      const wrapped = returnedFunction.on;
      returnedFunction.on = (fnToCall) => wrapped((data) => {
        if (graphqlOptions?.scalars) {
          return fnToCall(
            decodeScalarsInResponse({
              response: data,
              initialOp: operation,
              initialZeusQuery: o,
              returns: ReturnTypes,
              scalars: graphqlOptions.scalars,
              ops: Ops
            })
          );
        }
        return fnToCall(data);
      });
    }
    return returnedFunction;
  };
  var Subscription = (...options) => SubscriptionThunder(apiSubscription(options));
  var Zeus = (operation, o, ops) => InternalsBuildQuery({
    props: AllTypesProps,
    returns: ReturnTypes,
    ops: Ops,
    options: ops?.operationOptions,
    scalars: ops?.scalars
  })(operation, o);
  var ZeusSelect = () => (t) => t;
  var Selector = (key) => key && ZeusSelect();
  var TypeFromSelector = (key) => key && ZeusSelect();
  var Gql = Chain(HOST, {
    headers: {
      "Content-Type": "application/json",
      ...HEADERS
    }
  });
  var ZeusScalars = ZeusSelect();
  var decodeScalarsInResponse = ({
    response,
    scalars,
    returns,
    ops,
    initialZeusQuery,
    initialOp
  }) => {
    if (!scalars) {
      return response;
    }
    const builder = PrepareScalarPaths({
      ops,
      returns
    });
    const scalarPaths = builder(initialOp, ops[initialOp], initialZeusQuery);
    if (scalarPaths) {
      const r = traverseResponse({ scalarPaths, resolvers: scalars })(initialOp, response, [ops[initialOp]]);
      return r;
    }
    return response;
  };
  var traverseResponse = ({
    resolvers,
    scalarPaths
  }) => {
    const ibb = (k, o, p = []) => {
      if (Array.isArray(o)) {
        return o.map((eachO) => ibb(k, eachO, p));
      }
      if (o == null) {
        return o;
      }
      const scalarPathString = p.join(SEPARATOR);
      const currentScalarString = scalarPaths[scalarPathString];
      if (currentScalarString) {
        const currentDecoder = resolvers[currentScalarString.split(".")[1]]?.decode;
        if (currentDecoder) {
          return currentDecoder(o);
        }
      }
      if (typeof o === "boolean" || typeof o === "number" || typeof o === "string" || !o) {
        return o;
      }
      const entries = Object.entries(o).map(([k2, v]) => [k2, ibb(k2, v, [...p, purifyGraphQLKey(k2)])]);
      const objectFromEntries = entries.reduce((a, [k2, v]) => {
        a[k2] = v;
        return a;
      }, {});
      return objectFromEntries;
    };
    return ibb;
  };
  var SEPARATOR = "|";
  var GraphQLError = class extends Error {
    constructor(response) {
      super("");
      this.response = response;
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  };
  var ExtractScalar = (mappedParts, returns) => {
    if (mappedParts.length === 0) {
      return;
    }
    const oKey = mappedParts[0];
    const returnP1 = returns[oKey];
    if (typeof returnP1 === "object") {
      const returnP2 = returnP1[mappedParts[1]];
      if (returnP2) {
        return ExtractScalar([returnP2, ...mappedParts.slice(2)], returns);
      }
      return void 0;
    }
    return returnP1;
  };
  var PrepareScalarPaths = ({ ops, returns }) => {
    const ibb = (k, originalKey, o, p = [], pOriginals = [], root = true) => {
      if (!o) {
        return;
      }
      if (typeof o === "boolean" || typeof o === "number" || typeof o === "string") {
        const extractionArray = [...pOriginals, originalKey];
        const isScalar = ExtractScalar(extractionArray, returns);
        if (isScalar?.startsWith("scalar")) {
          const partOfTree = {
            [[...p, k].join(SEPARATOR)]: isScalar
          };
          return partOfTree;
        }
        return {};
      }
      if (Array.isArray(o)) {
        return ibb(k, k, o[1], p, pOriginals, false);
      }
      if (k === "__alias") {
        return Object.entries(o).map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== "object" || Array.isArray(objectUnderAlias)) {
            throw new Error(
              "Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}"
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(alias, operationName, operation, p, pOriginals, false);
        }).reduce((a, b) => ({
          ...a,
          ...b
        }));
      }
      const keyName = root ? ops[k] : k;
      return Object.entries(o).filter(([k2]) => k2 !== "__directives").map(([k2, v]) => {
        const isInlineFragment = originalKey.match(/^...\s*on/) != null;
        return ibb(
          k2,
          k2,
          v,
          isInlineFragment ? p : [...p, purifyGraphQLKey(keyName || k2)],
          isInlineFragment ? pOriginals : [...pOriginals, purifyGraphQLKey(originalKey)],
          false
        );
      }).reduce((a, b) => ({
        ...a,
        ...b
      }));
    };
    return ibb;
  };
  var purifyGraphQLKey = (k) => k.replace(/\([^)]*\)/g, "").replace(/^[^:]*\:/g, "");
  var mapPart = (p) => {
    const [isArg, isField] = p.split("<>");
    if (isField) {
      return {
        v: isField,
        __type: "field"
      };
    }
    return {
      v: isArg,
      __type: "arg"
    };
  };
  var ResolveFromPath = (props, returns, ops) => {
    const ResolvePropsType = (mappedParts) => {
      const oKey = ops[mappedParts[0].v];
      const propsP1 = oKey ? props[oKey] : props[mappedParts[0].v];
      if (propsP1 === "enum" && mappedParts.length === 1) {
        return "enum";
      }
      if (typeof propsP1 === "string" && propsP1.startsWith("scalar.") && mappedParts.length === 1) {
        return propsP1;
      }
      if (typeof propsP1 === "object") {
        if (mappedParts.length < 2) {
          return "not";
        }
        const propsP2 = propsP1[mappedParts[1].v];
        if (typeof propsP2 === "string") {
          return rpp(
            `${propsP2}${SEPARATOR}${mappedParts.slice(2).map((mp) => mp.v).join(SEPARATOR)}`
          );
        }
        if (typeof propsP2 === "object") {
          if (mappedParts.length < 3) {
            return "not";
          }
          const propsP3 = propsP2[mappedParts[2].v];
          if (propsP3 && mappedParts[2].__type === "arg") {
            return rpp(
              `${propsP3}${SEPARATOR}${mappedParts.slice(3).map((mp) => mp.v).join(SEPARATOR)}`
            );
          }
        }
      }
    };
    const ResolveReturnType = (mappedParts) => {
      if (mappedParts.length === 0) {
        return "not";
      }
      const oKey = ops[mappedParts[0].v];
      const returnP1 = oKey ? returns[oKey] : returns[mappedParts[0].v];
      if (typeof returnP1 === "object") {
        if (mappedParts.length < 2)
          return "not";
        const returnP2 = returnP1[mappedParts[1].v];
        if (returnP2) {
          return rpp(
            `${returnP2}${SEPARATOR}${mappedParts.slice(2).map((mp) => mp.v).join(SEPARATOR)}`
          );
        }
      }
    };
    const rpp = (path) => {
      const parts = path.split(SEPARATOR).filter((l) => l.length > 0);
      const mappedParts = parts.map(mapPart);
      const propsP1 = ResolvePropsType(mappedParts);
      if (propsP1) {
        return propsP1;
      }
      const returnP1 = ResolveReturnType(mappedParts);
      if (returnP1) {
        return returnP1;
      }
      return "not";
    };
    return rpp;
  };
  var InternalArgsBuilt = ({
    props,
    ops,
    returns,
    scalars,
    vars
  }) => {
    const arb = (a, p = "", root = true) => {
      if (typeof a === "string") {
        if (a.startsWith(START_VAR_NAME)) {
          const [varName, graphQLType] = a.replace(START_VAR_NAME, "$").split(GRAPHQL_TYPE_SEPARATOR);
          const v = vars.find((v2) => v2.name === varName);
          if (!v) {
            vars.push({
              name: varName,
              graphQLType
            });
          } else {
            if (v.graphQLType !== graphQLType) {
              throw new Error(
                `Invalid variable exists with two different GraphQL Types, "${v.graphQLType}" and ${graphQLType}`
              );
            }
          }
          return varName;
        }
      }
      const checkType = ResolveFromPath(props, returns, ops)(p);
      if (checkType.startsWith("scalar.")) {
        const [_, ...splittedScalar] = checkType.split(".");
        const scalarKey = splittedScalar.join(".");
        return scalars?.[scalarKey]?.encode?.(a) || JSON.stringify(a);
      }
      if (Array.isArray(a)) {
        return `[${a.map((arr) => arb(arr, p, false)).join(", ")}]`;
      }
      if (typeof a === "string") {
        if (checkType === "enum") {
          return a;
        }
        return `${JSON.stringify(a)}`;
      }
      if (typeof a === "object") {
        if (a === null) {
          return `null`;
        }
        const returnedObjectString = Object.entries(a).filter(([, v]) => typeof v !== "undefined").map(([k, v]) => `${k}: ${arb(v, [p, k].join(SEPARATOR), false)}`).join(",\n");
        if (!root) {
          return `{${returnedObjectString}}`;
        }
        return returnedObjectString;
      }
      return `${a}`;
    };
    return arb;
  };
  var resolverFor = (type, field, fn) => fn;
  var START_VAR_NAME = `$ZEUS_VAR`;
  var GRAPHQL_TYPE_SEPARATOR = `__$GRAPHQL__`;
  var $ = (name, graphqlType) => {
    return START_VAR_NAME + name + GRAPHQL_TYPE_SEPARATOR + graphqlType;
  };
  var ArticleSortKeys = /* @__PURE__ */ ((ArticleSortKeys2) => {
    ArticleSortKeys2["TITLE"] = "TITLE";
    ArticleSortKeys2["BLOG_TITLE"] = "BLOG_TITLE";
    ArticleSortKeys2["AUTHOR"] = "AUTHOR";
    ArticleSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    ArticleSortKeys2["PUBLISHED_AT"] = "PUBLISHED_AT";
    ArticleSortKeys2["ID"] = "ID";
    ArticleSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ArticleSortKeys2;
  })(ArticleSortKeys || {});
  var BlogSortKeys = /* @__PURE__ */ ((BlogSortKeys2) => {
    BlogSortKeys2["HANDLE"] = "HANDLE";
    BlogSortKeys2["TITLE"] = "TITLE";
    BlogSortKeys2["ID"] = "ID";
    BlogSortKeys2["RELEVANCE"] = "RELEVANCE";
    return BlogSortKeys2;
  })(BlogSortKeys || {});
  var CardBrand = /* @__PURE__ */ ((CardBrand2) => {
    CardBrand2["VISA"] = "VISA";
    CardBrand2["MASTERCARD"] = "MASTERCARD";
    CardBrand2["DISCOVER"] = "DISCOVER";
    CardBrand2["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
    CardBrand2["DINERS_CLUB"] = "DINERS_CLUB";
    CardBrand2["JCB"] = "JCB";
    return CardBrand2;
  })(CardBrand || {});
  var CartErrorCode = /* @__PURE__ */ ((CartErrorCode2) => {
    CartErrorCode2["INVALID"] = "INVALID";
    CartErrorCode2["LESS_THAN"] = "LESS_THAN";
    CartErrorCode2["INVALID_MERCHANDISE_LINE"] = "INVALID_MERCHANDISE_LINE";
    CartErrorCode2["MISSING_DISCOUNT_CODE"] = "MISSING_DISCOUNT_CODE";
    CartErrorCode2["MISSING_NOTE"] = "MISSING_NOTE";
    return CartErrorCode2;
  })(CartErrorCode || {});
  var CheckoutErrorCode = /* @__PURE__ */ ((CheckoutErrorCode2) => {
    CheckoutErrorCode2["BLANK"] = "BLANK";
    CheckoutErrorCode2["INVALID"] = "INVALID";
    CheckoutErrorCode2["TOO_LONG"] = "TOO_LONG";
    CheckoutErrorCode2["PRESENT"] = "PRESENT";
    CheckoutErrorCode2["LESS_THAN"] = "LESS_THAN";
    CheckoutErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    CheckoutErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    CheckoutErrorCode2["ALREADY_COMPLETED"] = "ALREADY_COMPLETED";
    CheckoutErrorCode2["LOCKED"] = "LOCKED";
    CheckoutErrorCode2["NOT_SUPPORTED"] = "NOT_SUPPORTED";
    CheckoutErrorCode2["BAD_DOMAIN"] = "BAD_DOMAIN";
    CheckoutErrorCode2["INVALID_FOR_COUNTRY"] = "INVALID_FOR_COUNTRY";
    CheckoutErrorCode2["INVALID_FOR_COUNTRY_AND_PROVINCE"] = "INVALID_FOR_COUNTRY_AND_PROVINCE";
    CheckoutErrorCode2["INVALID_STATE_IN_COUNTRY"] = "INVALID_STATE_IN_COUNTRY";
    CheckoutErrorCode2["INVALID_PROVINCE_IN_COUNTRY"] = "INVALID_PROVINCE_IN_COUNTRY";
    CheckoutErrorCode2["INVALID_REGION_IN_COUNTRY"] = "INVALID_REGION_IN_COUNTRY";
    CheckoutErrorCode2["SHIPPING_RATE_EXPIRED"] = "SHIPPING_RATE_EXPIRED";
    CheckoutErrorCode2["GIFT_CARD_UNUSABLE"] = "GIFT_CARD_UNUSABLE";
    CheckoutErrorCode2["GIFT_CARD_DISABLED"] = "GIFT_CARD_DISABLED";
    CheckoutErrorCode2["GIFT_CARD_CODE_INVALID"] = "GIFT_CARD_CODE_INVALID";
    CheckoutErrorCode2["GIFT_CARD_ALREADY_APPLIED"] = "GIFT_CARD_ALREADY_APPLIED";
    CheckoutErrorCode2["GIFT_CARD_CURRENCY_MISMATCH"] = "GIFT_CARD_CURRENCY_MISMATCH";
    CheckoutErrorCode2["GIFT_CARD_EXPIRED"] = "GIFT_CARD_EXPIRED";
    CheckoutErrorCode2["GIFT_CARD_DEPLETED"] = "GIFT_CARD_DEPLETED";
    CheckoutErrorCode2["GIFT_CARD_NOT_FOUND"] = "GIFT_CARD_NOT_FOUND";
    CheckoutErrorCode2["CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE"] = "CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE";
    CheckoutErrorCode2["DISCOUNT_EXPIRED"] = "DISCOUNT_EXPIRED";
    CheckoutErrorCode2["DISCOUNT_DISABLED"] = "DISCOUNT_DISABLED";
    CheckoutErrorCode2["DISCOUNT_LIMIT_REACHED"] = "DISCOUNT_LIMIT_REACHED";
    CheckoutErrorCode2["HIGHER_VALUE_DISCOUNT_APPLIED"] = "HIGHER_VALUE_DISCOUNT_APPLIED";
    CheckoutErrorCode2["MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED"] = "MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED";
    CheckoutErrorCode2["DISCOUNT_NOT_FOUND"] = "DISCOUNT_NOT_FOUND";
    CheckoutErrorCode2["CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE"] = "CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE";
    CheckoutErrorCode2["DISCOUNT_CODE_APPLICATION_FAILED"] = "DISCOUNT_CODE_APPLICATION_FAILED";
    CheckoutErrorCode2["EMPTY"] = "EMPTY";
    CheckoutErrorCode2["NOT_ENOUGH_IN_STOCK"] = "NOT_ENOUGH_IN_STOCK";
    CheckoutErrorCode2["MISSING_PAYMENT_INPUT"] = "MISSING_PAYMENT_INPUT";
    CheckoutErrorCode2["TOTAL_PRICE_MISMATCH"] = "TOTAL_PRICE_MISMATCH";
    CheckoutErrorCode2["LINE_ITEM_NOT_FOUND"] = "LINE_ITEM_NOT_FOUND";
    CheckoutErrorCode2["UNABLE_TO_APPLY"] = "UNABLE_TO_APPLY";
    CheckoutErrorCode2["DISCOUNT_ALREADY_APPLIED"] = "DISCOUNT_ALREADY_APPLIED";
    CheckoutErrorCode2["THROTTLED_DURING_CHECKOUT"] = "THROTTLED_DURING_CHECKOUT";
    CheckoutErrorCode2["EXPIRED_QUEUE_TOKEN"] = "EXPIRED_QUEUE_TOKEN";
    CheckoutErrorCode2["INVALID_QUEUE_TOKEN"] = "INVALID_QUEUE_TOKEN";
    CheckoutErrorCode2["INVALID_COUNTRY_AND_CURRENCY"] = "INVALID_COUNTRY_AND_CURRENCY";
    return CheckoutErrorCode2;
  })(CheckoutErrorCode || {});
  var CollectionSortKeys = /* @__PURE__ */ ((CollectionSortKeys2) => {
    CollectionSortKeys2["TITLE"] = "TITLE";
    CollectionSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CollectionSortKeys2["ID"] = "ID";
    CollectionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CollectionSortKeys2;
  })(CollectionSortKeys || {});
  var CountryCode = /* @__PURE__ */ ((CountryCode2) => {
    CountryCode2["AF"] = "AF";
    CountryCode2["AX"] = "AX";
    CountryCode2["AL"] = "AL";
    CountryCode2["DZ"] = "DZ";
    CountryCode2["AD"] = "AD";
    CountryCode2["AO"] = "AO";
    CountryCode2["AI"] = "AI";
    CountryCode2["AG"] = "AG";
    CountryCode2["AR"] = "AR";
    CountryCode2["AM"] = "AM";
    CountryCode2["AW"] = "AW";
    CountryCode2["AC"] = "AC";
    CountryCode2["AU"] = "AU";
    CountryCode2["AT"] = "AT";
    CountryCode2["AZ"] = "AZ";
    CountryCode2["BS"] = "BS";
    CountryCode2["BH"] = "BH";
    CountryCode2["BD"] = "BD";
    CountryCode2["BB"] = "BB";
    CountryCode2["BY"] = "BY";
    CountryCode2["BE"] = "BE";
    CountryCode2["BZ"] = "BZ";
    CountryCode2["BJ"] = "BJ";
    CountryCode2["BM"] = "BM";
    CountryCode2["BT"] = "BT";
    CountryCode2["BO"] = "BO";
    CountryCode2["BA"] = "BA";
    CountryCode2["BW"] = "BW";
    CountryCode2["BV"] = "BV";
    CountryCode2["BR"] = "BR";
    CountryCode2["IO"] = "IO";
    CountryCode2["BN"] = "BN";
    CountryCode2["BG"] = "BG";
    CountryCode2["BF"] = "BF";
    CountryCode2["BI"] = "BI";
    CountryCode2["KH"] = "KH";
    CountryCode2["CA"] = "CA";
    CountryCode2["CV"] = "CV";
    CountryCode2["BQ"] = "BQ";
    CountryCode2["KY"] = "KY";
    CountryCode2["CF"] = "CF";
    CountryCode2["TD"] = "TD";
    CountryCode2["CL"] = "CL";
    CountryCode2["CN"] = "CN";
    CountryCode2["CX"] = "CX";
    CountryCode2["CC"] = "CC";
    CountryCode2["CO"] = "CO";
    CountryCode2["KM"] = "KM";
    CountryCode2["CG"] = "CG";
    CountryCode2["CD"] = "CD";
    CountryCode2["CK"] = "CK";
    CountryCode2["CR"] = "CR";
    CountryCode2["HR"] = "HR";
    CountryCode2["CU"] = "CU";
    CountryCode2["CW"] = "CW";
    CountryCode2["CY"] = "CY";
    CountryCode2["CZ"] = "CZ";
    CountryCode2["CI"] = "CI";
    CountryCode2["DK"] = "DK";
    CountryCode2["DJ"] = "DJ";
    CountryCode2["DM"] = "DM";
    CountryCode2["DO"] = "DO";
    CountryCode2["EC"] = "EC";
    CountryCode2["EG"] = "EG";
    CountryCode2["SV"] = "SV";
    CountryCode2["GQ"] = "GQ";
    CountryCode2["ER"] = "ER";
    CountryCode2["EE"] = "EE";
    CountryCode2["SZ"] = "SZ";
    CountryCode2["ET"] = "ET";
    CountryCode2["FK"] = "FK";
    CountryCode2["FO"] = "FO";
    CountryCode2["FJ"] = "FJ";
    CountryCode2["FI"] = "FI";
    CountryCode2["FR"] = "FR";
    CountryCode2["GF"] = "GF";
    CountryCode2["PF"] = "PF";
    CountryCode2["TF"] = "TF";
    CountryCode2["GA"] = "GA";
    CountryCode2["GM"] = "GM";
    CountryCode2["GE"] = "GE";
    CountryCode2["DE"] = "DE";
    CountryCode2["GH"] = "GH";
    CountryCode2["GI"] = "GI";
    CountryCode2["GR"] = "GR";
    CountryCode2["GL"] = "GL";
    CountryCode2["GD"] = "GD";
    CountryCode2["GP"] = "GP";
    CountryCode2["GT"] = "GT";
    CountryCode2["GG"] = "GG";
    CountryCode2["GN"] = "GN";
    CountryCode2["GW"] = "GW";
    CountryCode2["GY"] = "GY";
    CountryCode2["HT"] = "HT";
    CountryCode2["HM"] = "HM";
    CountryCode2["VA"] = "VA";
    CountryCode2["HN"] = "HN";
    CountryCode2["HK"] = "HK";
    CountryCode2["HU"] = "HU";
    CountryCode2["IS"] = "IS";
    CountryCode2["IN"] = "IN";
    CountryCode2["ID"] = "ID";
    CountryCode2["IR"] = "IR";
    CountryCode2["IQ"] = "IQ";
    CountryCode2["IE"] = "IE";
    CountryCode2["IM"] = "IM";
    CountryCode2["IL"] = "IL";
    CountryCode2["IT"] = "IT";
    CountryCode2["JM"] = "JM";
    CountryCode2["JP"] = "JP";
    CountryCode2["JE"] = "JE";
    CountryCode2["JO"] = "JO";
    CountryCode2["KZ"] = "KZ";
    CountryCode2["KE"] = "KE";
    CountryCode2["KI"] = "KI";
    CountryCode2["KP"] = "KP";
    CountryCode2["XK"] = "XK";
    CountryCode2["KW"] = "KW";
    CountryCode2["KG"] = "KG";
    CountryCode2["LA"] = "LA";
    CountryCode2["LV"] = "LV";
    CountryCode2["LB"] = "LB";
    CountryCode2["LS"] = "LS";
    CountryCode2["LR"] = "LR";
    CountryCode2["LY"] = "LY";
    CountryCode2["LI"] = "LI";
    CountryCode2["LT"] = "LT";
    CountryCode2["LU"] = "LU";
    CountryCode2["MO"] = "MO";
    CountryCode2["MG"] = "MG";
    CountryCode2["MW"] = "MW";
    CountryCode2["MY"] = "MY";
    CountryCode2["MV"] = "MV";
    CountryCode2["ML"] = "ML";
    CountryCode2["MT"] = "MT";
    CountryCode2["MQ"] = "MQ";
    CountryCode2["MR"] = "MR";
    CountryCode2["MU"] = "MU";
    CountryCode2["YT"] = "YT";
    CountryCode2["MX"] = "MX";
    CountryCode2["MD"] = "MD";
    CountryCode2["MC"] = "MC";
    CountryCode2["MN"] = "MN";
    CountryCode2["ME"] = "ME";
    CountryCode2["MS"] = "MS";
    CountryCode2["MA"] = "MA";
    CountryCode2["MZ"] = "MZ";
    CountryCode2["MM"] = "MM";
    CountryCode2["NA"] = "NA";
    CountryCode2["NR"] = "NR";
    CountryCode2["NP"] = "NP";
    CountryCode2["NL"] = "NL";
    CountryCode2["AN"] = "AN";
    CountryCode2["NC"] = "NC";
    CountryCode2["NZ"] = "NZ";
    CountryCode2["NI"] = "NI";
    CountryCode2["NE"] = "NE";
    CountryCode2["NG"] = "NG";
    CountryCode2["NU"] = "NU";
    CountryCode2["NF"] = "NF";
    CountryCode2["MK"] = "MK";
    CountryCode2["NO"] = "NO";
    CountryCode2["OM"] = "OM";
    CountryCode2["PK"] = "PK";
    CountryCode2["PS"] = "PS";
    CountryCode2["PA"] = "PA";
    CountryCode2["PG"] = "PG";
    CountryCode2["PY"] = "PY";
    CountryCode2["PE"] = "PE";
    CountryCode2["PH"] = "PH";
    CountryCode2["PN"] = "PN";
    CountryCode2["PL"] = "PL";
    CountryCode2["PT"] = "PT";
    CountryCode2["QA"] = "QA";
    CountryCode2["CM"] = "CM";
    CountryCode2["RE"] = "RE";
    CountryCode2["RO"] = "RO";
    CountryCode2["RU"] = "RU";
    CountryCode2["RW"] = "RW";
    CountryCode2["BL"] = "BL";
    CountryCode2["SH"] = "SH";
    CountryCode2["KN"] = "KN";
    CountryCode2["LC"] = "LC";
    CountryCode2["MF"] = "MF";
    CountryCode2["PM"] = "PM";
    CountryCode2["WS"] = "WS";
    CountryCode2["SM"] = "SM";
    CountryCode2["ST"] = "ST";
    CountryCode2["SA"] = "SA";
    CountryCode2["SN"] = "SN";
    CountryCode2["RS"] = "RS";
    CountryCode2["SC"] = "SC";
    CountryCode2["SL"] = "SL";
    CountryCode2["SG"] = "SG";
    CountryCode2["SX"] = "SX";
    CountryCode2["SK"] = "SK";
    CountryCode2["SI"] = "SI";
    CountryCode2["SB"] = "SB";
    CountryCode2["SO"] = "SO";
    CountryCode2["ZA"] = "ZA";
    CountryCode2["GS"] = "GS";
    CountryCode2["KR"] = "KR";
    CountryCode2["SS"] = "SS";
    CountryCode2["ES"] = "ES";
    CountryCode2["LK"] = "LK";
    CountryCode2["VC"] = "VC";
    CountryCode2["SD"] = "SD";
    CountryCode2["SR"] = "SR";
    CountryCode2["SJ"] = "SJ";
    CountryCode2["SE"] = "SE";
    CountryCode2["CH"] = "CH";
    CountryCode2["SY"] = "SY";
    CountryCode2["TW"] = "TW";
    CountryCode2["TJ"] = "TJ";
    CountryCode2["TZ"] = "TZ";
    CountryCode2["TH"] = "TH";
    CountryCode2["TL"] = "TL";
    CountryCode2["TG"] = "TG";
    CountryCode2["TK"] = "TK";
    CountryCode2["TO"] = "TO";
    CountryCode2["TT"] = "TT";
    CountryCode2["TA"] = "TA";
    CountryCode2["TN"] = "TN";
    CountryCode2["TR"] = "TR";
    CountryCode2["TM"] = "TM";
    CountryCode2["TC"] = "TC";
    CountryCode2["TV"] = "TV";
    CountryCode2["UG"] = "UG";
    CountryCode2["UA"] = "UA";
    CountryCode2["AE"] = "AE";
    CountryCode2["GB"] = "GB";
    CountryCode2["US"] = "US";
    CountryCode2["UM"] = "UM";
    CountryCode2["UY"] = "UY";
    CountryCode2["UZ"] = "UZ";
    CountryCode2["VU"] = "VU";
    CountryCode2["VE"] = "VE";
    CountryCode2["VN"] = "VN";
    CountryCode2["VG"] = "VG";
    CountryCode2["WF"] = "WF";
    CountryCode2["EH"] = "EH";
    CountryCode2["YE"] = "YE";
    CountryCode2["ZM"] = "ZM";
    CountryCode2["ZW"] = "ZW";
    CountryCode2["ZZ"] = "ZZ";
    return CountryCode2;
  })(CountryCode || {});
  var CropRegion = /* @__PURE__ */ ((CropRegion2) => {
    CropRegion2["CENTER"] = "CENTER";
    CropRegion2["TOP"] = "TOP";
    CropRegion2["BOTTOM"] = "BOTTOM";
    CropRegion2["LEFT"] = "LEFT";
    CropRegion2["RIGHT"] = "RIGHT";
    return CropRegion2;
  })(CropRegion || {});
  var CurrencyCode = /* @__PURE__ */ ((CurrencyCode2) => {
    CurrencyCode2["USD"] = "USD";
    CurrencyCode2["EUR"] = "EUR";
    CurrencyCode2["GBP"] = "GBP";
    CurrencyCode2["CAD"] = "CAD";
    CurrencyCode2["AFN"] = "AFN";
    CurrencyCode2["ALL"] = "ALL";
    CurrencyCode2["DZD"] = "DZD";
    CurrencyCode2["AOA"] = "AOA";
    CurrencyCode2["ARS"] = "ARS";
    CurrencyCode2["AMD"] = "AMD";
    CurrencyCode2["AWG"] = "AWG";
    CurrencyCode2["AUD"] = "AUD";
    CurrencyCode2["BBD"] = "BBD";
    CurrencyCode2["AZN"] = "AZN";
    CurrencyCode2["BDT"] = "BDT";
    CurrencyCode2["BSD"] = "BSD";
    CurrencyCode2["BHD"] = "BHD";
    CurrencyCode2["BIF"] = "BIF";
    CurrencyCode2["BZD"] = "BZD";
    CurrencyCode2["BMD"] = "BMD";
    CurrencyCode2["BTN"] = "BTN";
    CurrencyCode2["BAM"] = "BAM";
    CurrencyCode2["BRL"] = "BRL";
    CurrencyCode2["BOB"] = "BOB";
    CurrencyCode2["BWP"] = "BWP";
    CurrencyCode2["BND"] = "BND";
    CurrencyCode2["BGN"] = "BGN";
    CurrencyCode2["MMK"] = "MMK";
    CurrencyCode2["KHR"] = "KHR";
    CurrencyCode2["CVE"] = "CVE";
    CurrencyCode2["KYD"] = "KYD";
    CurrencyCode2["XAF"] = "XAF";
    CurrencyCode2["CLP"] = "CLP";
    CurrencyCode2["CNY"] = "CNY";
    CurrencyCode2["COP"] = "COP";
    CurrencyCode2["KMF"] = "KMF";
    CurrencyCode2["CDF"] = "CDF";
    CurrencyCode2["CRC"] = "CRC";
    CurrencyCode2["HRK"] = "HRK";
    CurrencyCode2["CZK"] = "CZK";
    CurrencyCode2["DKK"] = "DKK";
    CurrencyCode2["DOP"] = "DOP";
    CurrencyCode2["XCD"] = "XCD";
    CurrencyCode2["EGP"] = "EGP";
    CurrencyCode2["ETB"] = "ETB";
    CurrencyCode2["XPF"] = "XPF";
    CurrencyCode2["FJD"] = "FJD";
    CurrencyCode2["GMD"] = "GMD";
    CurrencyCode2["GHS"] = "GHS";
    CurrencyCode2["GTQ"] = "GTQ";
    CurrencyCode2["GYD"] = "GYD";
    CurrencyCode2["GEL"] = "GEL";
    CurrencyCode2["HTG"] = "HTG";
    CurrencyCode2["HNL"] = "HNL";
    CurrencyCode2["HKD"] = "HKD";
    CurrencyCode2["HUF"] = "HUF";
    CurrencyCode2["ISK"] = "ISK";
    CurrencyCode2["INR"] = "INR";
    CurrencyCode2["IDR"] = "IDR";
    CurrencyCode2["ILS"] = "ILS";
    CurrencyCode2["IQD"] = "IQD";
    CurrencyCode2["JMD"] = "JMD";
    CurrencyCode2["JPY"] = "JPY";
    CurrencyCode2["JEP"] = "JEP";
    CurrencyCode2["JOD"] = "JOD";
    CurrencyCode2["KZT"] = "KZT";
    CurrencyCode2["KES"] = "KES";
    CurrencyCode2["KWD"] = "KWD";
    CurrencyCode2["KGS"] = "KGS";
    CurrencyCode2["LAK"] = "LAK";
    CurrencyCode2["LVL"] = "LVL";
    CurrencyCode2["LBP"] = "LBP";
    CurrencyCode2["LSL"] = "LSL";
    CurrencyCode2["LRD"] = "LRD";
    CurrencyCode2["LTL"] = "LTL";
    CurrencyCode2["MGA"] = "MGA";
    CurrencyCode2["MKD"] = "MKD";
    CurrencyCode2["MOP"] = "MOP";
    CurrencyCode2["MWK"] = "MWK";
    CurrencyCode2["MVR"] = "MVR";
    CurrencyCode2["MXN"] = "MXN";
    CurrencyCode2["MYR"] = "MYR";
    CurrencyCode2["MUR"] = "MUR";
    CurrencyCode2["MDL"] = "MDL";
    CurrencyCode2["MAD"] = "MAD";
    CurrencyCode2["MNT"] = "MNT";
    CurrencyCode2["MZN"] = "MZN";
    CurrencyCode2["NAD"] = "NAD";
    CurrencyCode2["NPR"] = "NPR";
    CurrencyCode2["ANG"] = "ANG";
    CurrencyCode2["NZD"] = "NZD";
    CurrencyCode2["NIO"] = "NIO";
    CurrencyCode2["NGN"] = "NGN";
    CurrencyCode2["NOK"] = "NOK";
    CurrencyCode2["OMR"] = "OMR";
    CurrencyCode2["PAB"] = "PAB";
    CurrencyCode2["PKR"] = "PKR";
    CurrencyCode2["PGK"] = "PGK";
    CurrencyCode2["PYG"] = "PYG";
    CurrencyCode2["PEN"] = "PEN";
    CurrencyCode2["PHP"] = "PHP";
    CurrencyCode2["PLN"] = "PLN";
    CurrencyCode2["QAR"] = "QAR";
    CurrencyCode2["RON"] = "RON";
    CurrencyCode2["RUB"] = "RUB";
    CurrencyCode2["RWF"] = "RWF";
    CurrencyCode2["WST"] = "WST";
    CurrencyCode2["SAR"] = "SAR";
    CurrencyCode2["RSD"] = "RSD";
    CurrencyCode2["SCR"] = "SCR";
    CurrencyCode2["SGD"] = "SGD";
    CurrencyCode2["SDG"] = "SDG";
    CurrencyCode2["SYP"] = "SYP";
    CurrencyCode2["ZAR"] = "ZAR";
    CurrencyCode2["KRW"] = "KRW";
    CurrencyCode2["SSP"] = "SSP";
    CurrencyCode2["SBD"] = "SBD";
    CurrencyCode2["LKR"] = "LKR";
    CurrencyCode2["SRD"] = "SRD";
    CurrencyCode2["SZL"] = "SZL";
    CurrencyCode2["SEK"] = "SEK";
    CurrencyCode2["CHF"] = "CHF";
    CurrencyCode2["TWD"] = "TWD";
    CurrencyCode2["THB"] = "THB";
    CurrencyCode2["TZS"] = "TZS";
    CurrencyCode2["TTD"] = "TTD";
    CurrencyCode2["TND"] = "TND";
    CurrencyCode2["TRY"] = "TRY";
    CurrencyCode2["TMT"] = "TMT";
    CurrencyCode2["UGX"] = "UGX";
    CurrencyCode2["UAH"] = "UAH";
    CurrencyCode2["AED"] = "AED";
    CurrencyCode2["UYU"] = "UYU";
    CurrencyCode2["UZS"] = "UZS";
    CurrencyCode2["VUV"] = "VUV";
    CurrencyCode2["VND"] = "VND";
    CurrencyCode2["XOF"] = "XOF";
    CurrencyCode2["YER"] = "YER";
    CurrencyCode2["ZMW"] = "ZMW";
    CurrencyCode2["BYN"] = "BYN";
    CurrencyCode2["BYR"] = "BYR";
    CurrencyCode2["DJF"] = "DJF";
    CurrencyCode2["ERN"] = "ERN";
    CurrencyCode2["FKP"] = "FKP";
    CurrencyCode2["GIP"] = "GIP";
    CurrencyCode2["GNF"] = "GNF";
    CurrencyCode2["IRR"] = "IRR";
    CurrencyCode2["KID"] = "KID";
    CurrencyCode2["LYD"] = "LYD";
    CurrencyCode2["MRU"] = "MRU";
    CurrencyCode2["SLL"] = "SLL";
    CurrencyCode2["SHP"] = "SHP";
    CurrencyCode2["SOS"] = "SOS";
    CurrencyCode2["STD"] = "STD";
    CurrencyCode2["TJS"] = "TJS";
    CurrencyCode2["TOP"] = "TOP";
    CurrencyCode2["VEF"] = "VEF";
    CurrencyCode2["VES"] = "VES";
    CurrencyCode2["XXX"] = "XXX";
    return CurrencyCode2;
  })(CurrencyCode || {});
  var CustomerErrorCode = /* @__PURE__ */ ((CustomerErrorCode2) => {
    CustomerErrorCode2["BLANK"] = "BLANK";
    CustomerErrorCode2["INVALID"] = "INVALID";
    CustomerErrorCode2["TAKEN"] = "TAKEN";
    CustomerErrorCode2["TOO_LONG"] = "TOO_LONG";
    CustomerErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    CustomerErrorCode2["UNIDENTIFIED_CUSTOMER"] = "UNIDENTIFIED_CUSTOMER";
    CustomerErrorCode2["CUSTOMER_DISABLED"] = "CUSTOMER_DISABLED";
    CustomerErrorCode2["PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE"] = "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE";
    CustomerErrorCode2["CONTAINS_HTML_TAGS"] = "CONTAINS_HTML_TAGS";
    CustomerErrorCode2["CONTAINS_URL"] = "CONTAINS_URL";
    CustomerErrorCode2["TOKEN_INVALID"] = "TOKEN_INVALID";
    CustomerErrorCode2["ALREADY_ENABLED"] = "ALREADY_ENABLED";
    CustomerErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    CustomerErrorCode2["BAD_DOMAIN"] = "BAD_DOMAIN";
    CustomerErrorCode2["INVALID_MULTIPASS_REQUEST"] = "INVALID_MULTIPASS_REQUEST";
    return CustomerErrorCode2;
  })(CustomerErrorCode || {});
  var DigitalWallet = /* @__PURE__ */ ((DigitalWallet2) => {
    DigitalWallet2["APPLE_PAY"] = "APPLE_PAY";
    DigitalWallet2["ANDROID_PAY"] = "ANDROID_PAY";
    DigitalWallet2["GOOGLE_PAY"] = "GOOGLE_PAY";
    DigitalWallet2["SHOPIFY_PAY"] = "SHOPIFY_PAY";
    return DigitalWallet2;
  })(DigitalWallet || {});
  var DiscountApplicationAllocationMethod = /* @__PURE__ */ ((DiscountApplicationAllocationMethod2) => {
    DiscountApplicationAllocationMethod2["ACROSS"] = "ACROSS";
    DiscountApplicationAllocationMethod2["EACH"] = "EACH";
    DiscountApplicationAllocationMethod2["ONE"] = "ONE";
    return DiscountApplicationAllocationMethod2;
  })(DiscountApplicationAllocationMethod || {});
  var DiscountApplicationTargetSelection = /* @__PURE__ */ ((DiscountApplicationTargetSelection2) => {
    DiscountApplicationTargetSelection2["ALL"] = "ALL";
    DiscountApplicationTargetSelection2["ENTITLED"] = "ENTITLED";
    DiscountApplicationTargetSelection2["EXPLICIT"] = "EXPLICIT";
    return DiscountApplicationTargetSelection2;
  })(DiscountApplicationTargetSelection || {});
  var DiscountApplicationTargetType = /* @__PURE__ */ ((DiscountApplicationTargetType2) => {
    DiscountApplicationTargetType2["LINE_ITEM"] = "LINE_ITEM";
    DiscountApplicationTargetType2["SHIPPING_LINE"] = "SHIPPING_LINE";
    return DiscountApplicationTargetType2;
  })(DiscountApplicationTargetType || {});
  var FilterType = /* @__PURE__ */ ((FilterType2) => {
    FilterType2["LIST"] = "LIST";
    FilterType2["PRICE_RANGE"] = "PRICE_RANGE";
    return FilterType2;
  })(FilterType || {});
  var ImageContentType = /* @__PURE__ */ ((ImageContentType2) => {
    ImageContentType2["PNG"] = "PNG";
    ImageContentType2["JPG"] = "JPG";
    ImageContentType2["WEBP"] = "WEBP";
    return ImageContentType2;
  })(ImageContentType || {});
  var LocationSortKeys = /* @__PURE__ */ ((LocationSortKeys2) => {
    LocationSortKeys2["ID"] = "ID";
    LocationSortKeys2["NAME"] = "NAME";
    LocationSortKeys2["CITY"] = "CITY";
    LocationSortKeys2["DISTANCE"] = "DISTANCE";
    return LocationSortKeys2;
  })(LocationSortKeys || {});
  var MediaContentType = /* @__PURE__ */ ((MediaContentType2) => {
    MediaContentType2["EXTERNAL_VIDEO"] = "EXTERNAL_VIDEO";
    MediaContentType2["IMAGE"] = "IMAGE";
    MediaContentType2["MODEL_3D"] = "MODEL_3D";
    MediaContentType2["VIDEO"] = "VIDEO";
    return MediaContentType2;
  })(MediaContentType || {});
  var MediaHost = /* @__PURE__ */ ((MediaHost2) => {
    MediaHost2["YOUTUBE"] = "YOUTUBE";
    MediaHost2["VIMEO"] = "VIMEO";
    return MediaHost2;
  })(MediaHost || {});
  var MetafieldValueType = /* @__PURE__ */ ((MetafieldValueType2) => {
    MetafieldValueType2["STRING"] = "STRING";
    MetafieldValueType2["INTEGER"] = "INTEGER";
    MetafieldValueType2["JSON_STRING"] = "JSON_STRING";
    MetafieldValueType2["BOOLEAN"] = "BOOLEAN";
    return MetafieldValueType2;
  })(MetafieldValueType || {});
  var OrderCancelReason = /* @__PURE__ */ ((OrderCancelReason2) => {
    OrderCancelReason2["CUSTOMER"] = "CUSTOMER";
    OrderCancelReason2["DECLINED"] = "DECLINED";
    OrderCancelReason2["FRAUD"] = "FRAUD";
    OrderCancelReason2["INVENTORY"] = "INVENTORY";
    OrderCancelReason2["OTHER"] = "OTHER";
    return OrderCancelReason2;
  })(OrderCancelReason || {});
  var OrderFinancialStatus = /* @__PURE__ */ ((OrderFinancialStatus2) => {
    OrderFinancialStatus2["PENDING"] = "PENDING";
    OrderFinancialStatus2["AUTHORIZED"] = "AUTHORIZED";
    OrderFinancialStatus2["PARTIALLY_PAID"] = "PARTIALLY_PAID";
    OrderFinancialStatus2["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
    OrderFinancialStatus2["VOIDED"] = "VOIDED";
    OrderFinancialStatus2["PAID"] = "PAID";
    OrderFinancialStatus2["REFUNDED"] = "REFUNDED";
    return OrderFinancialStatus2;
  })(OrderFinancialStatus || {});
  var OrderFulfillmentStatus = /* @__PURE__ */ ((OrderFulfillmentStatus2) => {
    OrderFulfillmentStatus2["UNFULFILLED"] = "UNFULFILLED";
    OrderFulfillmentStatus2["PARTIALLY_FULFILLED"] = "PARTIALLY_FULFILLED";
    OrderFulfillmentStatus2["FULFILLED"] = "FULFILLED";
    OrderFulfillmentStatus2["RESTOCKED"] = "RESTOCKED";
    OrderFulfillmentStatus2["PENDING_FULFILLMENT"] = "PENDING_FULFILLMENT";
    OrderFulfillmentStatus2["OPEN"] = "OPEN";
    OrderFulfillmentStatus2["IN_PROGRESS"] = "IN_PROGRESS";
    OrderFulfillmentStatus2["ON_HOLD"] = "ON_HOLD";
    OrderFulfillmentStatus2["SCHEDULED"] = "SCHEDULED";
    return OrderFulfillmentStatus2;
  })(OrderFulfillmentStatus || {});
  var OrderSortKeys = /* @__PURE__ */ ((OrderSortKeys2) => {
    OrderSortKeys2["PROCESSED_AT"] = "PROCESSED_AT";
    OrderSortKeys2["TOTAL_PRICE"] = "TOTAL_PRICE";
    OrderSortKeys2["ID"] = "ID";
    OrderSortKeys2["RELEVANCE"] = "RELEVANCE";
    return OrderSortKeys2;
  })(OrderSortKeys || {});
  var PageSortKeys = /* @__PURE__ */ ((PageSortKeys2) => {
    PageSortKeys2["TITLE"] = "TITLE";
    PageSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    PageSortKeys2["ID"] = "ID";
    PageSortKeys2["RELEVANCE"] = "RELEVANCE";
    return PageSortKeys2;
  })(PageSortKeys || {});
  var PaymentTokenType = /* @__PURE__ */ ((PaymentTokenType2) => {
    PaymentTokenType2["APPLE_PAY"] = "APPLE_PAY";
    PaymentTokenType2["VAULT"] = "VAULT";
    PaymentTokenType2["SHOPIFY_PAY"] = "SHOPIFY_PAY";
    PaymentTokenType2["GOOGLE_PAY"] = "GOOGLE_PAY";
    PaymentTokenType2["STRIPE_VAULT_TOKEN"] = "STRIPE_VAULT_TOKEN";
    return PaymentTokenType2;
  })(PaymentTokenType || {});
  var ProductCollectionSortKeys = /* @__PURE__ */ ((ProductCollectionSortKeys2) => {
    ProductCollectionSortKeys2["TITLE"] = "TITLE";
    ProductCollectionSortKeys2["PRICE"] = "PRICE";
    ProductCollectionSortKeys2["BEST_SELLING"] = "BEST_SELLING";
    ProductCollectionSortKeys2["CREATED"] = "CREATED";
    ProductCollectionSortKeys2["ID"] = "ID";
    ProductCollectionSortKeys2["MANUAL"] = "MANUAL";
    ProductCollectionSortKeys2["COLLECTION_DEFAULT"] = "COLLECTION_DEFAULT";
    ProductCollectionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProductCollectionSortKeys2;
  })(ProductCollectionSortKeys || {});
  var ProductImageSortKeys = /* @__PURE__ */ ((ProductImageSortKeys2) => {
    ProductImageSortKeys2["CREATED_AT"] = "CREATED_AT";
    ProductImageSortKeys2["POSITION"] = "POSITION";
    ProductImageSortKeys2["ID"] = "ID";
    ProductImageSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProductImageSortKeys2;
  })(ProductImageSortKeys || {});
  var ProductMediaSortKeys = /* @__PURE__ */ ((ProductMediaSortKeys2) => {
    ProductMediaSortKeys2["POSITION"] = "POSITION";
    ProductMediaSortKeys2["ID"] = "ID";
    ProductMediaSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProductMediaSortKeys2;
  })(ProductMediaSortKeys || {});
  var ProductSortKeys = /* @__PURE__ */ ((ProductSortKeys2) => {
    ProductSortKeys2["TITLE"] = "TITLE";
    ProductSortKeys2["PRODUCT_TYPE"] = "PRODUCT_TYPE";
    ProductSortKeys2["VENDOR"] = "VENDOR";
    ProductSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    ProductSortKeys2["CREATED_AT"] = "CREATED_AT";
    ProductSortKeys2["BEST_SELLING"] = "BEST_SELLING";
    ProductSortKeys2["PRICE"] = "PRICE";
    ProductSortKeys2["ID"] = "ID";
    ProductSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProductSortKeys2;
  })(ProductSortKeys || {});
  var ProductVariantSortKeys = /* @__PURE__ */ ((ProductVariantSortKeys2) => {
    ProductVariantSortKeys2["TITLE"] = "TITLE";
    ProductVariantSortKeys2["SKU"] = "SKU";
    ProductVariantSortKeys2["POSITION"] = "POSITION";
    ProductVariantSortKeys2["ID"] = "ID";
    ProductVariantSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProductVariantSortKeys2;
  })(ProductVariantSortKeys || {});
  var TransactionKind = /* @__PURE__ */ ((TransactionKind2) => {
    TransactionKind2["SALE"] = "SALE";
    TransactionKind2["CAPTURE"] = "CAPTURE";
    TransactionKind2["AUTHORIZATION"] = "AUTHORIZATION";
    TransactionKind2["EMV_AUTHORIZATION"] = "EMV_AUTHORIZATION";
    TransactionKind2["CHANGE"] = "CHANGE";
    return TransactionKind2;
  })(TransactionKind || {});
  var TransactionStatus = /* @__PURE__ */ ((TransactionStatus2) => {
    TransactionStatus2["PENDING"] = "PENDING";
    TransactionStatus2["SUCCESS"] = "SUCCESS";
    TransactionStatus2["FAILURE"] = "FAILURE";
    TransactionStatus2["ERROR"] = "ERROR";
    return TransactionStatus2;
  })(TransactionStatus || {});
  var UnitPriceMeasurementMeasuredType = /* @__PURE__ */ ((UnitPriceMeasurementMeasuredType2) => {
    UnitPriceMeasurementMeasuredType2["VOLUME"] = "VOLUME";
    UnitPriceMeasurementMeasuredType2["WEIGHT"] = "WEIGHT";
    UnitPriceMeasurementMeasuredType2["LENGTH"] = "LENGTH";
    UnitPriceMeasurementMeasuredType2["AREA"] = "AREA";
    return UnitPriceMeasurementMeasuredType2;
  })(UnitPriceMeasurementMeasuredType || {});
  var UnitPriceMeasurementMeasuredUnit = /* @__PURE__ */ ((UnitPriceMeasurementMeasuredUnit2) => {
    UnitPriceMeasurementMeasuredUnit2["ML"] = "ML";
    UnitPriceMeasurementMeasuredUnit2["CL"] = "CL";
    UnitPriceMeasurementMeasuredUnit2["L"] = "L";
    UnitPriceMeasurementMeasuredUnit2["M3"] = "M3";
    UnitPriceMeasurementMeasuredUnit2["MG"] = "MG";
    UnitPriceMeasurementMeasuredUnit2["G"] = "G";
    UnitPriceMeasurementMeasuredUnit2["KG"] = "KG";
    UnitPriceMeasurementMeasuredUnit2["MM"] = "MM";
    UnitPriceMeasurementMeasuredUnit2["CM"] = "CM";
    UnitPriceMeasurementMeasuredUnit2["M"] = "M";
    UnitPriceMeasurementMeasuredUnit2["M2"] = "M2";
    return UnitPriceMeasurementMeasuredUnit2;
  })(UnitPriceMeasurementMeasuredUnit || {});
  var UnitSystem = /* @__PURE__ */ ((UnitSystem2) => {
    UnitSystem2["IMPERIAL_SYSTEM"] = "IMPERIAL_SYSTEM";
    UnitSystem2["METRIC_SYSTEM"] = "METRIC_SYSTEM";
    return UnitSystem2;
  })(UnitSystem || {});
  var WeightUnit = /* @__PURE__ */ ((WeightUnit2) => {
    WeightUnit2["KILOGRAMS"] = "KILOGRAMS";
    WeightUnit2["GRAMS"] = "GRAMS";
    WeightUnit2["POUNDS"] = "POUNDS";
    WeightUnit2["OUNCES"] = "OUNCES";
    return WeightUnit2;
  })(WeightUnit || {});
})();
