(() => {
  // zeus-admin/zeus/const.ts
  var AllTypesProps = {
    ARN: `scalar.ARN`,
    Abandonment: {
      productsAddedToCart: {},
      productsViewed: {}
    },
    AbandonmentAbandonmentType: "enum",
    AbandonmentEmailState: "enum",
    AbandonmentEmailStateUpdateUserErrorCode: "enum",
    AppDeveloperType: "enum",
    AppInstallation: {
      allSubscriptions: {
        sortKey: "AppSubscriptionSortKeys"
      },
      credits: {
        sortKey: "AppTransactionSortKeys"
      },
      metafield: {},
      metafields: {},
      oneTimePurchases: {
        sortKey: "AppTransactionSortKeys"
      },
      privateMetafield: {},
      privateMetafields: {},
      revenueAttributionRecords: {
        sortKey: "AppRevenueAttributionRecordSortKeys"
      }
    },
    AppInstallationCategory: "enum",
    AppInstallationPrivacy: "enum",
    AppInstallationSortKeys: "enum",
    AppPlanInput: {
      appUsagePricingDetails: "AppUsagePricingInput",
      appRecurringPricingDetails: "AppRecurringPricingInput"
    },
    AppPricingInterval: "enum",
    AppPublicCategory: "enum",
    AppPurchaseStatus: "enum",
    AppRecurringPricingInput: {
      interval: "AppPricingInterval",
      price: "MoneyInput",
      discount: "AppSubscriptionDiscountInput"
    },
    AppRevenueAttributionRecordCreateUserErrorCode: "enum",
    AppRevenueAttributionRecordDeleteUserErrorCode: "enum",
    AppRevenueAttributionRecordInput: {
      capturedAt: "DateTime",
      amount: "MoneyInput",
      type: "AppRevenueAttributionType"
    },
    AppRevenueAttributionRecordSortKeys: "enum",
    AppRevenueAttributionType: "enum",
    AppSubscriptionDiscountInput: {
      value: "AppSubscriptionDiscountValueInput"
    },
    AppSubscriptionDiscountValueInput: {
      amount: "Decimal"
    },
    AppSubscriptionLineItem: {
      usageRecords: {
        sortKey: "AppUsageRecordSortKeys"
      }
    },
    AppSubscriptionLineItemInput: {
      plan: "AppPlanInput"
    },
    AppSubscriptionReplacementBehavior: "enum",
    AppSubscriptionSortKeys: "enum",
    AppSubscriptionStatus: "enum",
    AppSubscriptionTrialExtendUserErrorCode: "enum",
    AppTransactionSortKeys: "enum",
    AppUsagePricingInput: {
      cappedAmount: "MoneyInput"
    },
    AppUsageRecordSortKeys: "enum",
    AttributeInput: {},
    AutomaticDiscountSortKeys: "enum",
    BadgeType: "enum",
    BillingAttemptUserErrorCode: "enum",
    BulkMutationErrorCode: "enum",
    BulkOperationErrorCode: "enum",
    BulkOperationStatus: "enum",
    BulkOperationType: "enum",
    BulkProductResourceFeedbackCreateUserErrorCode: "enum",
    BusinessCustomerErrorCode: "enum",
    BuyerExperienceConfigurationInput: {},
    CalculatedOrder: {
      addedDiscountApplications: {},
      addedLineItems: {},
      lineItems: {},
      stagedChanges: {}
    },
    Channel: {
      collectionPublicationsV3: {},
      collections: {},
      hasCollection: {},
      productPublications: {},
      productPublicationsV3: {},
      products: {}
    },
    CheckoutProfileSortKeys: "enum",
    CodeDiscountSortKeys: "enum",
    Collection: {
      description: {},
      hasProduct: {},
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      privateMetafield: {},
      privateMetafields: {},
      products: {
        sortKey: "ProductCollectionSortKeys"
      },
      publicationCount: {},
      publications: {},
      publishedOnChannel: {},
      publishedOnPublication: {},
      resourcePublications: {},
      resourcePublicationsV2: {},
      translations: {},
      unpublishedChannels: {},
      unpublishedPublications: {}
    },
    CollectionAddProductsV2UserErrorCode: "enum",
    CollectionDeleteInput: {},
    CollectionInput: {
      image: "ImageInput",
      privateMetafields: "PrivateMetafieldInput",
      ruleSet: "CollectionRuleSetInput",
      sortOrder: "CollectionSortOrder",
      metafields: "MetafieldInput",
      seo: "SEOInput"
    },
    CollectionPublicationInput: {},
    CollectionPublishInput: {
      collectionPublications: "CollectionPublicationInput"
    },
    CollectionRuleColumn: "enum",
    CollectionRuleInput: {
      column: "CollectionRuleColumn",
      relation: "CollectionRuleRelation"
    },
    CollectionRuleRelation: "enum",
    CollectionRuleSetInput: {
      rules: "CollectionRuleInput"
    },
    CollectionSortKeys: "enum",
    CollectionSortOrder: "enum",
    CollectionUnpublishInput: {
      collectionPublications: "CollectionPublicationInput"
    },
    Company: {
      contactRoles: {
        sortKey: "CompanyContactRoleSortKeys"
      },
      contacts: {
        sortKey: "CompanyContactSortKeys"
      },
      draftOrders: {
        sortKey: "DraftOrderSortKeys"
      },
      events: {
        sortKey: "EventSortKeys"
      },
      locations: {
        sortKey: "CompanyLocationSortKeys"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      orders: {
        sortKey: "OrderSortKeys"
      },
      privateMetafield: {},
      privateMetafields: {}
    },
    CompanyAddress: {
      formattedAddress: {}
    },
    CompanyAddressInput: {
      countryCode: "CountryCode"
    },
    CompanyAddressType: "enum",
    CompanyContact: {
      draftOrders: {
        sortKey: "DraftOrderSortKeys"
      },
      orders: {
        sortKey: "OrderSortKeys"
      },
      roleAssignments: {
        sortKey: "CompanyContactRoleAssignmentSortKeys"
      }
    },
    CompanyContactInput: {},
    CompanyContactRoleAssign: {},
    CompanyContactRoleAssignmentSortKeys: "enum",
    CompanyContactRoleSortKeys: "enum",
    CompanyContactSortKeys: "enum",
    CompanyCreateInput: {
      company: "CompanyInput",
      companyContact: "CompanyContactInput",
      companyLocation: "CompanyLocationInput"
    },
    CompanyInput: {
      customerSince: "DateTime"
    },
    CompanyLocation: {
      draftOrders: {
        sortKey: "DraftOrderSortKeys"
      },
      events: {
        sortKey: "EventSortKeys"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      orders: {
        sortKey: "OrderSortKeys"
      },
      privateMetafield: {},
      privateMetafields: {},
      roleAssignments: {
        sortKey: "CompanyContactRoleAssignmentSortKeys"
      }
    },
    CompanyLocationInput: {
      buyerExperienceConfiguration: "BuyerExperienceConfigurationInput",
      billingAddress: "CompanyAddressInput",
      shippingAddress: "CompanyAddressInput",
      taxExemptions: "TaxExemption"
    },
    CompanyLocationRoleAssign: {},
    CompanyLocationSortKeys: "enum",
    CompanyLocationUpdateInput: {
      buyerExperienceConfiguration: "BuyerExperienceConfigurationInput"
    },
    CompanySortKeys: "enum",
    ContextualPricingContext: {
      country: "CountryCode"
    },
    CountryCode: "enum",
    CountryHarmonizedSystemCodeInput: {
      countryCode: "CountryCode"
    },
    CreateMediaInput: {
      mediaContentType: "MediaContentType"
    },
    CropRegion: "enum",
    CurrencyCode: "enum",
    CustomShippingPackageInput: {
      weight: "WeightInput",
      dimensions: "ObjectDimensionsInput",
      type: "ShippingPackageType"
    },
    Customer: {
      addresses: {},
      events: {
        sortKey: "EventSortKeys"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      orders: {
        sortKey: "OrderSortKeys"
      },
      paymentMethods: {},
      privateMetafield: {},
      privateMetafields: {},
      subscriptionContracts: {}
    },
    CustomerConsentCollectedFrom: "enum",
    CustomerDeleteInput: {},
    CustomerEmailAddressMarketingState: "enum",
    CustomerEmailAddressOpenTrackingLevel: "enum",
    CustomerEmailMarketingConsentInput: {
      marketingOptInLevel: "CustomerMarketingOptInLevel",
      marketingState: "CustomerEmailMarketingState",
      consentUpdatedAt: "DateTime"
    },
    CustomerEmailMarketingConsentUpdateInput: {
      emailMarketingConsent: "CustomerEmailMarketingConsentInput"
    },
    CustomerEmailMarketingConsentUpdateUserErrorCode: "enum",
    CustomerEmailMarketingState: "enum",
    CustomerInput: {
      addresses: "MailingAddressInput",
      metafields: "MetafieldInput",
      privateMetafields: "PrivateMetafieldInput",
      emailMarketingConsent: "CustomerEmailMarketingConsentInput",
      smsMarketingConsent: "CustomerSmsMarketingConsentInput",
      taxExemptions: "TaxExemption"
    },
    CustomerJourneySummary: {
      moments: {}
    },
    CustomerMarketingOptInLevel: "enum",
    CustomerPaymentMethod: {
      subscriptionContracts: {}
    },
    CustomerPaymentMethodGetUpdateUrlUserErrorCode: "enum",
    CustomerPaymentMethodRemoteInput: {
      stripePaymentMethod: "RemoteStripePaymentMethodInput",
      authorizeNetCustomerPaymentProfile: "RemoteAuthorizeNetCustomerPaymentProfileInput",
      braintreePaymentMethod: "RemoteBraintreePaymentMethodInput"
    },
    CustomerPaymentMethodRemoteUserErrorCode: "enum",
    CustomerPaymentMethodRevocationReason: "enum",
    CustomerPaymentMethodUserErrorCode: "enum",
    CustomerPredictedSpendTier: "enum",
    CustomerProductSubscriberStatus: "enum",
    CustomerSavedSearchSortKeys: "enum",
    CustomerSegmentMembersQueryInput: {},
    CustomerSegmentMembersQueryUserErrorCode: "enum",
    CustomerSmsMarketingConsentErrorCode: "enum",
    CustomerSmsMarketingConsentInput: {
      marketingOptInLevel: "CustomerMarketingOptInLevel",
      marketingState: "CustomerSmsMarketingState",
      consentUpdatedAt: "DateTime"
    },
    CustomerSmsMarketingConsentUpdateInput: {
      smsMarketingConsent: "CustomerSmsMarketingConsentInput"
    },
    CustomerSmsMarketingState: "enum",
    CustomerSortKeys: "enum",
    CustomerState: "enum",
    Date: `scalar.Date`,
    DateTime: `scalar.DateTime`,
    DayOfTheWeek: "enum",
    Decimal: `scalar.Decimal`,
    DelegateAccessTokenCreateUserErrorCode: "enum",
    DelegateAccessTokenInput: {},
    DeletionEventSortKeys: "enum",
    DeletionEventSubjectType: "enum",
    DeliveryCarrierService: {
      availableServicesForCountries: {
        countryCodes: "CountryCode"
      }
    },
    DeliveryConditionField: "enum",
    DeliveryConditionOperator: "enum",
    DeliveryCountryInput: {
      code: "CountryCode",
      provinces: "DeliveryProvinceInput"
    },
    DeliveryLegacyModeBlockedReason: "enum",
    DeliveryLocalPickupTime: "enum",
    DeliveryLocationGroup: {
      locations: {
        sortKey: "LocationSortKeys"
      }
    },
    DeliveryLocationGroupZone: {
      methodDefinitions: {
        type: "DeliveryMethodDefinitionType",
        sortKey: "MethodDefinitionSortKeys"
      }
    },
    DeliveryLocationGroupZoneInput: {
      countries: "DeliveryCountryInput",
      methodDefinitionsToCreate: "DeliveryMethodDefinitionInput",
      methodDefinitionsToUpdate: "DeliveryMethodDefinitionInput"
    },
    DeliveryLocationLocalPickupEnableInput: {
      pickupTime: "DeliveryLocalPickupTime"
    },
    DeliveryLocationLocalPickupSettingsErrorCode: "enum",
    DeliveryMethodDefinitionInput: {
      rateDefinition: "DeliveryRateDefinitionInput",
      participant: "DeliveryParticipantInput",
      weightConditionsToCreate: "DeliveryWeightConditionInput",
      priceConditionsToCreate: "DeliveryPriceConditionInput",
      conditionsToUpdate: "DeliveryUpdateConditionInput"
    },
    DeliveryMethodDefinitionType: "enum",
    DeliveryMethodType: "enum",
    DeliveryParticipantInput: {
      fixedFee: "MoneyInput",
      participantServices: "DeliveryParticipantServiceInput"
    },
    DeliveryParticipantServiceInput: {},
    DeliveryPriceConditionInput: {
      criteria: "MoneyInput",
      operator: "DeliveryConditionOperator"
    },
    DeliveryProfile: {
      profileItems: {},
      profileLocationGroups: {},
      sellingPlanGroups: {},
      unassignedLocationsPaginated: {}
    },
    DeliveryProfileInput: {
      profileLocationGroups: "DeliveryProfileLocationGroupInput",
      locationGroupsToCreate: "DeliveryProfileLocationGroupInput",
      locationGroupsToUpdate: "DeliveryProfileLocationGroupInput"
    },
    DeliveryProfileItem: {
      variants: {}
    },
    DeliveryProfileLocationGroup: {
      locationGroupZones: {}
    },
    DeliveryProfileLocationGroupInput: {
      zonesToCreate: "DeliveryLocationGroupZoneInput",
      zonesToUpdate: "DeliveryLocationGroupZoneInput"
    },
    DeliveryProvinceInput: {},
    DeliveryRateDefinitionInput: {
      price: "MoneyInput"
    },
    DeliverySettingInput: {},
    DeliveryUpdateConditionInput: {
      field: "DeliveryConditionField",
      operator: "DeliveryConditionOperator"
    },
    DeliveryWeightConditionInput: {
      criteria: "WeightInput",
      operator: "DeliveryConditionOperator"
    },
    DigitalWallet: "enum",
    DiscountAmountInput: {
      amount: "Decimal"
    },
    DiscountApplicationAllocationMethod: "enum",
    DiscountApplicationLevel: "enum",
    DiscountApplicationTargetSelection: "enum",
    DiscountApplicationTargetType: "enum",
    DiscountAutomaticAppInput: {
      combinesWith: "DiscountCombinesWithInput",
      startsAt: "DateTime",
      endsAt: "DateTime",
      metafields: "MetafieldInput"
    },
    DiscountAutomaticBasicInput: {
      combinesWith: "DiscountCombinesWithInput",
      startsAt: "DateTime",
      endsAt: "DateTime",
      minimumRequirement: "DiscountMinimumRequirementInput",
      customerGets: "DiscountCustomerGetsInput"
    },
    DiscountAutomaticBxgy: {
      events: {
        sortKey: "EventSortKeys"
      }
    },
    DiscountAutomaticBxgyInput: {
      combinesWith: "DiscountCombinesWithInput",
      startsAt: "DateTime",
      endsAt: "DateTime",
      usesPerOrderLimit: "UnsignedInt64",
      customerBuys: "DiscountCustomerBuysInput",
      customerGets: "DiscountCustomerGetsInput"
    },
    DiscountAutomaticNode: {
      events: {
        sortKey: "EventSortKeys"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      privateMetafield: {},
      privateMetafields: {}
    },
    DiscountClass: "enum",
    DiscountCodeApp: {
      codes: {
        sortKey: "DiscountCodeSortKeys"
      }
    },
    DiscountCodeAppInput: {
      combinesWith: "DiscountCombinesWithInput",
      startsAt: "DateTime",
      endsAt: "DateTime",
      customerSelection: "DiscountCustomerSelectionInput",
      metafields: "MetafieldInput"
    },
    DiscountCodeBasic: {
      codes: {
        sortKey: "DiscountCodeSortKeys"
      }
    },
    DiscountCodeBasicInput: {
      combinesWith: "DiscountCombinesWithInput",
      startsAt: "DateTime",
      endsAt: "DateTime",
      minimumRequirement: "DiscountMinimumRequirementInput",
      customerGets: "DiscountCustomerGetsInput",
      customerSelection: "DiscountCustomerSelectionInput"
    },
    DiscountCodeBxgy: {
      codes: {
        sortKey: "DiscountCodeSortKeys"
      }
    },
    DiscountCodeBxgyInput: {
      combinesWith: "DiscountCombinesWithInput",
      startsAt: "DateTime",
      endsAt: "DateTime",
      customerBuys: "DiscountCustomerBuysInput",
      customerGets: "DiscountCustomerGetsInput",
      customerSelection: "DiscountCustomerSelectionInput"
    },
    DiscountCodeFreeShipping: {
      codes: {
        sortKey: "DiscountCodeSortKeys"
      }
    },
    DiscountCodeFreeShippingInput: {
      combinesWith: "DiscountCombinesWithInput",
      startsAt: "DateTime",
      endsAt: "DateTime",
      minimumRequirement: "DiscountMinimumRequirementInput",
      customerSelection: "DiscountCustomerSelectionInput",
      destination: "DiscountShippingDestinationSelectionInput",
      maximumShippingPrice: "Decimal"
    },
    DiscountCodeNode: {
      events: {
        sortKey: "EventSortKeys"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      privateMetafield: {},
      privateMetafields: {}
    },
    DiscountCodeSortKeys: "enum",
    DiscountCollections: {
      collections: {}
    },
    DiscountCollectionsInput: {},
    DiscountCombinesWithInput: {},
    DiscountCountriesInput: {
      add: "CountryCode",
      remove: "CountryCode"
    },
    DiscountCustomerBuysInput: {
      value: "DiscountCustomerBuysValueInput",
      items: "DiscountItemsInput"
    },
    DiscountCustomerBuysValueInput: {
      quantity: "UnsignedInt64",
      amount: "Decimal"
    },
    DiscountCustomerGetsInput: {
      value: "DiscountCustomerGetsValueInput",
      items: "DiscountItemsInput"
    },
    DiscountCustomerGetsValueInput: {
      discountOnQuantity: "DiscountOnQuantityInput",
      discountAmount: "DiscountAmountInput"
    },
    DiscountCustomerSegmentsInput: {},
    DiscountCustomerSelectionInput: {
      customers: "DiscountCustomersInput",
      customerSegments: "DiscountCustomerSegmentsInput"
    },
    DiscountCustomersInput: {},
    DiscountEffectInput: {},
    DiscountErrorCode: "enum",
    DiscountItemsInput: {
      products: "DiscountProductsInput",
      collections: "DiscountCollectionsInput"
    },
    DiscountMinimumQuantityInput: {
      greaterThanOrEqualToQuantity: "UnsignedInt64"
    },
    DiscountMinimumRequirementInput: {
      quantity: "DiscountMinimumQuantityInput",
      subtotal: "DiscountMinimumSubtotalInput"
    },
    DiscountMinimumSubtotalInput: {
      greaterThanOrEqualToSubtotal: "Decimal"
    },
    DiscountNode: {
      events: {
        sortKey: "EventSortKeys"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      privateMetafield: {},
      privateMetafields: {}
    },
    DiscountOnQuantityInput: {
      quantity: "UnsignedInt64",
      effect: "DiscountEffectInput"
    },
    DiscountProducts: {
      productVariants: {},
      products: {}
    },
    DiscountProductsInput: {},
    DiscountRedeemCodeBulkCreation: {
      codes: {}
    },
    DiscountRedeemCodeInput: {},
    DiscountShareableUrlTargetType: "enum",
    DiscountShippingDestinationSelectionInput: {
      countries: "DiscountCountriesInput"
    },
    DiscountSortKeys: "enum",
    DiscountStatus: "enum",
    DiscountTargetType: "enum",
    DiscountType: "enum",
    DisputeEvidenceUpdateUserErrorCode: "enum",
    DisputeStatus: "enum",
    DisputeType: "enum",
    DraftOrder: {
      events: {
        sortKey: "EventSortKeys"
      },
      lineItems: {},
      localizationExtensions: {
        countryCodes: "CountryCode",
        purposes: "LocalizationExtensionPurpose"
      },
      metafield: {},
      metafields: {},
      privateMetafield: {},
      privateMetafields: {}
    },
    DraftOrderAppliedDiscountInput: {
      amount: "Money",
      valueType: "DraftOrderAppliedDiscountType"
    },
    DraftOrderAppliedDiscountType: "enum",
    DraftOrderDeleteInput: {},
    DraftOrderInput: {
      appliedDiscount: "DraftOrderAppliedDiscountInput",
      billingAddress: "MailingAddressInput",
      customAttributes: "AttributeInput",
      lineItems: "DraftOrderLineItemInput",
      metafields: "MetafieldInput",
      privateMetafields: "PrivateMetafieldInput",
      localizationExtensions: "LocalizationExtensionInput",
      shippingAddress: "MailingAddressInput",
      shippingLine: "ShippingLineInput",
      reserveInventoryUntil: "DateTime",
      presentmentCurrencyCode: "CurrencyCode",
      marketRegionCountryCode: "CountryCode",
      paymentTerms: "PaymentTermsInput",
      purchasingEntity: "PurchasingEntityInput"
    },
    DraftOrderLineItemInput: {
      appliedDiscount: "DraftOrderAppliedDiscountInput",
      customAttributes: "AttributeInput",
      originalUnitPrice: "Money",
      weight: "WeightInput"
    },
    DraftOrderSortKeys: "enum",
    DraftOrderStatus: "enum",
    EmailInput: {},
    ErrorsWebPixelUserErrorCode: "enum",
    EventBridgeWebhookSubscriptionInput: {
      arn: "ARN",
      format: "WebhookSubscriptionFormat"
    },
    EventSortKeys: "enum",
    FileContentType: "enum",
    FileCreateInput: {
      contentType: "FileContentType"
    },
    FileErrorCode: "enum",
    FileSortKeys: "enum",
    FileStatus: "enum",
    FileUpdateInput: {},
    FilesErrorCode: "enum",
    FormattedString: `scalar.FormattedString`,
    Fulfillment: {
      events: {
        sortKey: "FulfillmentEventSortKeys"
      },
      fulfillmentLineItems: {},
      fulfillmentOrders: {},
      trackingInfo: {}
    },
    FulfillmentDisplayStatus: "enum",
    FulfillmentEventInput: {
      estimatedDeliveryAt: "DateTime",
      happenedAt: "DateTime",
      status: "FulfillmentEventStatus"
    },
    FulfillmentEventSortKeys: "enum",
    FulfillmentEventStatus: "enum",
    FulfillmentHoldReason: "enum",
    FulfillmentOrder: {
      fulfillments: {},
      lineItems: {},
      locationsForMove: {},
      merchantRequests: {
        kind: "FulfillmentOrderMerchantRequestKind"
      }
    },
    FulfillmentOrderAction: "enum",
    FulfillmentOrderAssignmentStatus: "enum",
    FulfillmentOrderHoldInput: {
      reason: "FulfillmentHoldReason"
    },
    FulfillmentOrderHoldUserErrorCode: "enum",
    FulfillmentOrderLineItemInput: {},
    FulfillmentOrderLineItemsInput: {
      fulfillmentOrderLineItems: "FulfillmentOrderLineItemInput"
    },
    FulfillmentOrderLineItemsPreparedForPickupInput: {
      lineItemsByFulfillmentOrder: "PreparedFulfillmentOrderLineItemsInput"
    },
    FulfillmentOrderLineItemsPreparedForPickupUserErrorCode: "enum",
    FulfillmentOrderMerchantRequestKind: "enum",
    FulfillmentOrderRejectionReason: "enum",
    FulfillmentOrderReleaseHoldUserErrorCode: "enum",
    FulfillmentOrderRequestStatus: "enum",
    FulfillmentOrderRescheduleUserErrorCode: "enum",
    FulfillmentOrderSortKeys: "enum",
    FulfillmentOrderStatus: "enum",
    FulfillmentOrdersReleaseHoldsUserErrorCode: "enum",
    FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode: "enum",
    FulfillmentOriginAddressInput: {},
    FulfillmentServiceType: "enum",
    FulfillmentStatus: "enum",
    FulfillmentTrackingInput: {
      url: "URL",
      urls: "URL"
    },
    FulfillmentV2Input: {
      trackingInfo: "FulfillmentTrackingInput",
      lineItemsByFulfillmentOrder: "FulfillmentOrderLineItemsInput",
      originAddress: "FulfillmentOriginAddressInput"
    },
    GiftCardCreateInput: {
      initialValue: "Decimal",
      expiresOn: "Date"
    },
    GiftCardErrorCode: "enum",
    GiftCardSortKeys: "enum",
    GiftCardUpdateInput: {
      expiresOn: "Date"
    },
    HTML: `scalar.HTML`,
    HasEvents: {
      events: {
        sortKey: "EventSortKeys"
      }
    },
    HasLocalizationExtensions: {
      localizationExtensions: {
        countryCodes: "CountryCode",
        purposes: "LocalizationExtensionPurpose"
      }
    },
    HasMetafieldDefinitions: {
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      }
    },
    HasMetafields: {
      metafield: {},
      metafields: {},
      privateMetafield: {},
      privateMetafields: {}
    },
    HasPublishedTranslations: {
      translations: {}
    },
    Image: {
      metafield: {},
      metafields: {},
      privateMetafield: {},
      privateMetafields: {},
      transformedSrc: {
        crop: "CropRegion",
        preferredContentType: "ImageContentType"
      },
      url: {
        transform: "ImageTransformInput"
      }
    },
    ImageContentType: "enum",
    ImageInput: {},
    ImageTransformInput: {
      crop: "CropRegion",
      preferredContentType: "ImageContentType"
    },
    IncomingRequestLineItemInput: {},
    InventoryAdjustItemInput: {},
    InventoryAdjustQuantitiesInput: {
      changes: "InventoryChangeInput"
    },
    InventoryAdjustQuantitiesUserErrorCode: "enum",
    InventoryAdjustQuantityInput: {},
    InventoryAdjustmentGroup: {
      changes: {}
    },
    InventoryBulkToggleActivationInput: {},
    InventoryBulkToggleActivationUserErrorCode: "enum",
    InventoryChangeInput: {},
    InventoryItem: {
      countryHarmonizedSystemCodes: {},
      inventoryLevel: {},
      inventoryLevels: {}
    },
    InventoryItemInput: {
      cost: "Decimal"
    },
    InventoryItemUpdateInput: {
      cost: "Decimal",
      countryCodeOfOrigin: "CountryCode",
      countryHarmonizedSystemCodes: "CountryHarmonizedSystemCodeInput"
    },
    InventoryLevel: {
      quantities: {}
    },
    InventoryLevelInput: {},
    InventoryMoveQuantitiesInput: {
      changes: "InventoryMoveQuantityChange"
    },
    InventoryMoveQuantitiesUserErrorCode: "enum",
    InventoryMoveQuantityChange: {
      from: "InventoryMoveQuantityTerminalInput",
      to: "InventoryMoveQuantityTerminalInput"
    },
    InventoryMoveQuantityTerminalInput: {},
    InventorySetOnHandQuantitiesInput: {
      setQuantities: "InventorySetQuantityInput"
    },
    InventorySetOnHandQuantitiesUserErrorCode: "enum",
    InventorySetQuantityInput: {},
    JSON: `scalar.JSON`,
    LengthUnit: "enum",
    LineItem: {
      taxLines: {}
    },
    LineItemMutable: {
      taxLines: {}
    },
    Link: {
      translations: {}
    },
    LocalizationExtensionInput: {
      key: "LocalizationExtensionKey"
    },
    LocalizationExtensionKey: "enum",
    LocalizationExtensionPurpose: "enum",
    Location: {
      inventoryLevel: {},
      inventoryLevels: {},
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      privateMetafield: {},
      privateMetafields: {}
    },
    LocationActivateUserErrorCode: "enum",
    LocationAddAddressInput: {
      countryCode: "CountryCode"
    },
    LocationAddInput: {
      address: "LocationAddAddressInput"
    },
    LocationAddUserErrorCode: "enum",
    LocationDeactivateUserErrorCode: "enum",
    LocationDeleteUserErrorCode: "enum",
    LocationEditAddressInput: {
      countryCode: "CountryCode"
    },
    LocationEditInput: {
      address: "LocationEditAddressInput"
    },
    LocationEditUserErrorCode: "enum",
    LocationSortKeys: "enum",
    MailingAddress: {
      formatted: {}
    },
    MailingAddressInput: {
      countryCode: "CountryCode"
    },
    Market: {
      regions: {}
    },
    MarketCreateInput: {
      regions: "MarketRegionCreateInput"
    },
    MarketCurrencySettingsUpdateInput: {
      baseCurrency: "CurrencyCode"
    },
    MarketCurrencySettingsUserErrorCode: "enum",
    MarketLocalizableResource: {
      marketLocalizations: {}
    },
    MarketLocalizableResourceType: "enum",
    MarketLocalizationRegisterInput: {},
    MarketRegionCreateInput: {
      countryCode: "CountryCode"
    },
    MarketUpdateInput: {},
    MarketUserErrorCode: "enum",
    MarketWebPresenceCreateInput: {},
    MarketWebPresenceUpdateInput: {},
    MarketingActivityBudgetInput: {
      budgetType: "MarketingBudgetBudgetType",
      total: "MoneyInput"
    },
    MarketingActivityCreateExternalInput: {
      utm: "UTMInput",
      budget: "MarketingActivityBudgetInput",
      adSpend: "MoneyInput",
      remoteUrl: "URL",
      remotePreviewImageUrl: "URL",
      tactic: "MarketingTactic",
      channel: "MarketingChannel",
      scheduledStart: "DateTime",
      scheduledEnd: "DateTime",
      start: "DateTime",
      end: "DateTime"
    },
    MarketingActivityCreateInput: {
      utm: "UTMInput",
      status: "MarketingActivityStatus",
      budget: "MarketingActivityBudgetInput"
    },
    MarketingActivityExtensionAppErrorCode: "enum",
    MarketingActivitySortKeys: "enum",
    MarketingActivityStatus: "enum",
    MarketingActivityStatusBadgeType: "enum",
    MarketingActivityUpdateExternalInput: {
      utm: "UTMInput",
      budget: "MarketingActivityBudgetInput",
      adSpend: "MoneyInput",
      remoteUrl: "URL",
      remotePreviewImageUrl: "URL",
      tactic: "MarketingTactic",
      channel: "MarketingChannel",
      scheduledStart: "DateTime",
      scheduledEnd: "DateTime",
      start: "DateTime",
      end: "DateTime"
    },
    MarketingActivityUpdateInput: {
      budget: "MarketingActivityBudgetInput",
      status: "MarketingActivityStatus",
      targetStatus: "MarketingActivityStatus",
      utm: "UTMInput",
      errors: "JSON"
    },
    MarketingActivityUserErrorCode: "enum",
    MarketingBudgetBudgetType: "enum",
    MarketingChannel: "enum",
    MarketingEngagementInput: {
      occurredOn: "Date",
      adSpend: "MoneyInput",
      utcOffset: "UtcOffset",
      fetchedAt: "DateTime"
    },
    MarketingEventSortKeys: "enum",
    MarketingTactic: "enum",
    MediaContentType: "enum",
    MediaErrorCode: "enum",
    MediaHost: "enum",
    MediaPreviewImageStatus: "enum",
    MediaStatus: "enum",
    MediaUserErrorCode: "enum",
    MediaWarningCode: "enum",
    MerchandiseDiscountClass: "enum",
    Metafield: {
      references: {}
    },
    MetafieldAccessInput: {
      admin: "MetafieldAdminAccess"
    },
    MetafieldAdminAccess: "enum",
    MetafieldDefinition: {
      metafields: {
        validationStatus: "MetafieldValidationStatus"
      },
      metafieldsCount: {
        validationStatus: "MetafieldValidationStatus"
      }
    },
    MetafieldDefinitionCreateUserErrorCode: "enum",
    MetafieldDefinitionDeleteUserErrorCode: "enum",
    MetafieldDefinitionInput: {
      ownerType: "MetafieldOwnerType",
      validations: "MetafieldDefinitionValidationInput",
      access: "MetafieldAccessInput"
    },
    MetafieldDefinitionPinUserErrorCode: "enum",
    MetafieldDefinitionPinnedStatus: "enum",
    MetafieldDefinitionSortKeys: "enum",
    MetafieldDefinitionUnpinUserErrorCode: "enum",
    MetafieldDefinitionUpdateInput: {
      ownerType: "MetafieldOwnerType",
      access: "MetafieldAccessInput"
    },
    MetafieldDefinitionUpdateUserErrorCode: "enum",
    MetafieldDefinitionValidationInput: {},
    MetafieldDefinitionValidationStatus: "enum",
    MetafieldDeleteInput: {},
    MetafieldInput: {},
    MetafieldOwnerType: "enum",
    MetafieldStorefrontVisibilityInput: {
      ownerType: "MetafieldOwnerType"
    },
    MetafieldValidationStatus: "enum",
    MetafieldValueType: "enum",
    MetafieldsSetInput: {},
    MetafieldsSetUserErrorCode: "enum",
    Metaobject: {
      field: {},
      referencedBy: {}
    },
    MetaobjectAccessInput: {
      admin: "MetaobjectAdminAccess",
      storefront: "MetaobjectStorefrontAccess"
    },
    MetaobjectAdminAccess: "enum",
    MetaobjectBulkDeleteWhereCondition: {},
    MetaobjectCapabilityCreateInput: {
      publishable: "MetaobjectCapabilityPublishableInput"
    },
    MetaobjectCapabilityDataInput: {
      publishable: "MetaobjectCapabilityDataPublishableInput"
    },
    MetaobjectCapabilityDataPublishableInput: {
      status: "MetaobjectStatus"
    },
    MetaobjectCapabilityPublishableInput: {},
    MetaobjectCapabilityUpdateInput: {
      publishable: "MetaobjectCapabilityPublishableInput"
    },
    MetaobjectCreateInput: {
      fields: "MetaobjectFieldInput",
      capabilities: "MetaobjectCapabilityDataInput"
    },
    MetaobjectDefinition: {
      metaobjects: {}
    },
    MetaobjectDefinitionCreateInput: {
      fieldDefinitions: "MetaobjectFieldDefinitionCreateInput",
      access: "MetaobjectAccessInput",
      capabilities: "MetaobjectCapabilityCreateInput"
    },
    MetaobjectDefinitionUpdateInput: {
      fieldDefinitions: "MetaobjectFieldDefinitionOperationInput",
      access: "MetaobjectAccessInput",
      capabilities: "MetaobjectCapabilityUpdateInput"
    },
    MetaobjectField: {
      references: {}
    },
    MetaobjectFieldDefinitionCreateInput: {
      validations: "MetafieldDefinitionValidationInput"
    },
    MetaobjectFieldDefinitionDeleteInput: {},
    MetaobjectFieldDefinitionOperationInput: {
      create: "MetaobjectFieldDefinitionCreateInput",
      update: "MetaobjectFieldDefinitionUpdateInput",
      delete: "MetaobjectFieldDefinitionDeleteInput"
    },
    MetaobjectFieldDefinitionUpdateInput: {
      validations: "MetafieldDefinitionValidationInput"
    },
    MetaobjectFieldInput: {},
    MetaobjectHandleInput: {},
    MetaobjectStatus: "enum",
    MetaobjectStorefrontAccess: "enum",
    MetaobjectUpdateInput: {
      fields: "MetaobjectFieldInput",
      capabilities: "MetaobjectCapabilityDataInput"
    },
    MetaobjectUpsertInput: {
      fields: "MetaobjectFieldInput",
      capabilities: "MetaobjectCapabilityDataInput"
    },
    MetaobjectUserErrorCode: "enum",
    MethodDefinitionSortKeys: "enum",
    Money: `scalar.Money`,
    MoneyInput: {
      amount: "Decimal",
      currencyCode: "CurrencyCode"
    },
    MoveInput: {
      newPosition: "UnsignedInt64"
    },
    Mutation: {
      abandonmentEmailStateUpdate: {
        emailState: "AbandonmentEmailState",
        emailSentAt: "DateTime"
      },
      appCreditCreate: {
        amount: "MoneyInput"
      },
      appPurchaseOneTimeCreate: {
        price: "MoneyInput",
        returnUrl: "URL"
      },
      appRevenueAttributionRecordCreate: {
        appRevenueAttributionRecord: "AppRevenueAttributionRecordInput"
      },
      appRevenueAttributionRecordDelete: {},
      appSubscriptionCancel: {},
      appSubscriptionCreate: {
        lineItems: "AppSubscriptionLineItemInput",
        returnUrl: "URL",
        replacementBehavior: "AppSubscriptionReplacementBehavior"
      },
      appSubscriptionLineItemUpdate: {
        cappedAmount: "MoneyInput"
      },
      appSubscriptionTrialExtend: {},
      appUsageRecordCreate: {
        price: "MoneyInput"
      },
      bulkOperationCancel: {},
      bulkOperationRunMutation: {},
      bulkOperationRunQuery: {},
      bulkProductResourceFeedbackCreate: {
        feedbackInput: "ProductResourceFeedbackInput"
      },
      collectionAddProducts: {},
      collectionAddProductsV2: {},
      collectionCreate: {
        input: "CollectionInput"
      },
      collectionDelete: {
        input: "CollectionDeleteInput"
      },
      collectionPublish: {
        input: "CollectionPublishInput"
      },
      collectionRemoveProducts: {},
      collectionReorderProducts: {
        moves: "MoveInput"
      },
      collectionUnpublish: {
        input: "CollectionUnpublishInput"
      },
      collectionUpdate: {
        input: "CollectionInput"
      },
      companiesDelete: {},
      companyAddressDelete: {},
      companyAssignCustomerAsContact: {},
      companyAssignMainContact: {},
      companyContactAssignRole: {},
      companyContactAssignRoles: {
        rolesToAssign: "CompanyContactRoleAssign"
      },
      companyContactCreate: {
        input: "CompanyContactInput"
      },
      companyContactDelete: {},
      companyContactRevokeRole: {},
      companyContactRevokeRoles: {},
      companyContactUpdate: {
        input: "CompanyContactInput"
      },
      companyContactsDelete: {},
      companyCreate: {
        input: "CompanyCreateInput"
      },
      companyDelete: {},
      companyLocationAssignAddress: {
        address: "CompanyAddressInput",
        addressTypes: "CompanyAddressType"
      },
      companyLocationAssignRoles: {
        rolesToAssign: "CompanyLocationRoleAssign"
      },
      companyLocationAssignTaxExemptions: {
        taxExemptions: "TaxExemption"
      },
      companyLocationCreate: {
        input: "CompanyLocationInput"
      },
      companyLocationCreateTaxRegistration: {},
      companyLocationDelete: {},
      companyLocationRevokeRoles: {},
      companyLocationRevokeTaxExemptions: {
        taxExemptions: "TaxExemption"
      },
      companyLocationRevokeTaxRegistration: {},
      companyLocationUpdate: {
        input: "CompanyLocationUpdateInput"
      },
      companyLocationsDelete: {},
      companyRevokeMainContact: {},
      companyUpdate: {
        input: "CompanyInput"
      },
      customerAddTaxExemptions: {
        taxExemptions: "TaxExemption"
      },
      customerCreate: {
        input: "CustomerInput"
      },
      customerDelete: {
        input: "CustomerDeleteInput"
      },
      customerEmailMarketingConsentUpdate: {
        input: "CustomerEmailMarketingConsentUpdateInput"
      },
      customerGenerateAccountActivationUrl: {},
      customerPaymentMethodCreditCardCreate: {
        billingAddress: "MailingAddressInput"
      },
      customerPaymentMethodCreditCardUpdate: {
        billingAddress: "MailingAddressInput"
      },
      customerPaymentMethodGetUpdateUrl: {},
      customerPaymentMethodPaypalBillingAgreementCreate: {
        billingAddress: "MailingAddressInput"
      },
      customerPaymentMethodPaypalBillingAgreementUpdate: {
        billingAddress: "MailingAddressInput"
      },
      customerPaymentMethodRemoteCreate: {
        remoteReference: "CustomerPaymentMethodRemoteInput"
      },
      customerPaymentMethodRemoteCreditCardCreate: {},
      customerPaymentMethodRevoke: {},
      customerPaymentMethodSendUpdateEmail: {
        email: "EmailInput"
      },
      customerRemoveTaxExemptions: {
        taxExemptions: "TaxExemption"
      },
      customerReplaceTaxExemptions: {
        taxExemptions: "TaxExemption"
      },
      customerSegmentMembersQueryCreate: {
        input: "CustomerSegmentMembersQueryInput"
      },
      customerSmsMarketingConsentUpdate: {
        input: "CustomerSmsMarketingConsentUpdateInput"
      },
      customerUpdate: {
        input: "CustomerInput"
      },
      customerUpdateDefaultAddress: {},
      delegateAccessTokenCreate: {
        input: "DelegateAccessTokenInput"
      },
      deliveryProfileCreate: {
        profile: "DeliveryProfileInput"
      },
      deliveryProfileRemove: {},
      deliveryProfileUpdate: {
        profile: "DeliveryProfileInput"
      },
      deliverySettingUpdate: {
        setting: "DeliverySettingInput"
      },
      deliveryShippingOriginAssign: {},
      discountAutomaticActivate: {},
      discountAutomaticAppCreate: {
        automaticAppDiscount: "DiscountAutomaticAppInput"
      },
      discountAutomaticAppUpdate: {
        automaticAppDiscount: "DiscountAutomaticAppInput"
      },
      discountAutomaticBasicCreate: {
        automaticBasicDiscount: "DiscountAutomaticBasicInput"
      },
      discountAutomaticBasicUpdate: {
        automaticBasicDiscount: "DiscountAutomaticBasicInput"
      },
      discountAutomaticBulkDelete: {},
      discountAutomaticBxgyCreate: {
        automaticBxgyDiscount: "DiscountAutomaticBxgyInput"
      },
      discountAutomaticBxgyUpdate: {
        automaticBxgyDiscount: "DiscountAutomaticBxgyInput"
      },
      discountAutomaticDeactivate: {},
      discountAutomaticDelete: {},
      discountCodeActivate: {},
      discountCodeAppCreate: {
        codeAppDiscount: "DiscountCodeAppInput"
      },
      discountCodeAppUpdate: {
        codeAppDiscount: "DiscountCodeAppInput"
      },
      discountCodeBasicCreate: {
        basicCodeDiscount: "DiscountCodeBasicInput"
      },
      discountCodeBasicUpdate: {
        basicCodeDiscount: "DiscountCodeBasicInput"
      },
      discountCodeBulkActivate: {},
      discountCodeBulkDeactivate: {},
      discountCodeBulkDelete: {},
      discountCodeBxgyCreate: {
        bxgyCodeDiscount: "DiscountCodeBxgyInput"
      },
      discountCodeBxgyUpdate: {
        bxgyCodeDiscount: "DiscountCodeBxgyInput"
      },
      discountCodeDeactivate: {},
      discountCodeDelete: {},
      discountCodeFreeShippingCreate: {
        freeShippingCodeDiscount: "DiscountCodeFreeShippingInput"
      },
      discountCodeFreeShippingUpdate: {
        freeShippingCodeDiscount: "DiscountCodeFreeShippingInput"
      },
      discountCodeRedeemCodeBulkDelete: {},
      discountRedeemCodeBulkAdd: {
        codes: "DiscountRedeemCodeInput"
      },
      disputeEvidenceUpdate: {
        input: "ShopifyPaymentsDisputeEvidenceUpdateInput"
      },
      draftOrderBulkAddTags: {},
      draftOrderBulkDelete: {},
      draftOrderBulkRemoveTags: {},
      draftOrderCalculate: {
        input: "DraftOrderInput"
      },
      draftOrderComplete: {},
      draftOrderCreate: {
        input: "DraftOrderInput"
      },
      draftOrderCreateFromOrder: {},
      draftOrderCreateMerchantCheckout: {},
      draftOrderDelete: {
        input: "DraftOrderDeleteInput"
      },
      draftOrderDuplicate: {},
      draftOrderInvoicePreview: {
        email: "EmailInput"
      },
      draftOrderInvoiceSend: {
        email: "EmailInput"
      },
      draftOrderUpdate: {
        input: "DraftOrderInput"
      },
      eventBridgeWebhookSubscriptionCreate: {
        topic: "WebhookSubscriptionTopic",
        webhookSubscription: "EventBridgeWebhookSubscriptionInput"
      },
      eventBridgeWebhookSubscriptionUpdate: {
        webhookSubscription: "EventBridgeWebhookSubscriptionInput"
      },
      fileCreate: {
        files: "FileCreateInput"
      },
      fileDelete: {},
      fileUpdate: {
        files: "FileUpdateInput"
      },
      flowTriggerReceive: {},
      fulfillmentCancel: {},
      fulfillmentCreateV2: {
        fulfillment: "FulfillmentV2Input"
      },
      fulfillmentEventCreate: {
        fulfillmentEvent: "FulfillmentEventInput"
      },
      fulfillmentOrderAcceptCancellationRequest: {},
      fulfillmentOrderAcceptFulfillmentRequest: {},
      fulfillmentOrderCancel: {},
      fulfillmentOrderClose: {},
      fulfillmentOrderHold: {
        fulfillmentHold: "FulfillmentOrderHoldInput"
      },
      fulfillmentOrderLineItemsPreparedForPickup: {
        input: "FulfillmentOrderLineItemsPreparedForPickupInput"
      },
      fulfillmentOrderMove: {},
      fulfillmentOrderOpen: {},
      fulfillmentOrderRejectCancellationRequest: {},
      fulfillmentOrderRejectFulfillmentRequest: {
        reason: "FulfillmentOrderRejectionReason",
        lineItems: "IncomingRequestLineItemInput"
      },
      fulfillmentOrderReleaseHold: {},
      fulfillmentOrderReschedule: {
        fulfillAt: "DateTime"
      },
      fulfillmentOrderSubmitCancellationRequest: {},
      fulfillmentOrderSubmitFulfillmentRequest: {
        fulfillmentOrderLineItems: "FulfillmentOrderLineItemInput"
      },
      fulfillmentOrdersReleaseHolds: {},
      fulfillmentOrdersSetFulfillmentDeadline: {
        fulfillmentDeadline: "DateTime"
      },
      fulfillmentServiceCreate: {
        callbackUrl: "URL"
      },
      fulfillmentServiceDelete: {},
      fulfillmentServiceUpdate: {
        callbackUrl: "URL"
      },
      fulfillmentTrackingInfoUpdateV2: {
        trackingInfoInput: "FulfillmentTrackingInput"
      },
      giftCardCreate: {
        input: "GiftCardCreateInput"
      },
      giftCardDisable: {},
      giftCardUpdate: {
        input: "GiftCardUpdateInput"
      },
      inventoryActivate: {},
      inventoryAdjustQuantities: {
        input: "InventoryAdjustQuantitiesInput"
      },
      inventoryAdjustQuantity: {
        input: "InventoryAdjustQuantityInput"
      },
      inventoryBulkAdjustQuantityAtLocation: {
        inventoryItemAdjustments: "InventoryAdjustItemInput"
      },
      inventoryBulkToggleActivation: {
        inventoryItemUpdates: "InventoryBulkToggleActivationInput"
      },
      inventoryDeactivate: {},
      inventoryItemUpdate: {
        input: "InventoryItemUpdateInput"
      },
      inventoryMoveQuantities: {
        input: "InventoryMoveQuantitiesInput"
      },
      inventorySetOnHandQuantities: {
        input: "InventorySetOnHandQuantitiesInput"
      },
      locationActivate: {},
      locationAdd: {
        input: "LocationAddInput"
      },
      locationDeactivate: {},
      locationDelete: {},
      locationEdit: {
        input: "LocationEditInput"
      },
      locationLocalPickupDisable: {},
      locationLocalPickupEnable: {
        localPickupSettings: "DeliveryLocationLocalPickupEnableInput"
      },
      marketCreate: {
        input: "MarketCreateInput"
      },
      marketCurrencySettingsUpdate: {
        input: "MarketCurrencySettingsUpdateInput"
      },
      marketDelete: {},
      marketLocalizationsRegister: {
        marketLocalizations: "MarketLocalizationRegisterInput"
      },
      marketLocalizationsRemove: {},
      marketRegionDelete: {},
      marketRegionsCreate: {
        regions: "MarketRegionCreateInput"
      },
      marketUpdate: {
        input: "MarketUpdateInput"
      },
      marketWebPresenceCreate: {
        webPresence: "MarketWebPresenceCreateInput"
      },
      marketWebPresenceDelete: {},
      marketWebPresenceUpdate: {
        webPresence: "MarketWebPresenceUpdateInput"
      },
      marketingActivityCreate: {
        input: "MarketingActivityCreateInput"
      },
      marketingActivityCreateExternal: {
        input: "MarketingActivityCreateExternalInput"
      },
      marketingActivityUpdate: {
        input: "MarketingActivityUpdateInput"
      },
      marketingActivityUpdateExternal: {
        input: "MarketingActivityUpdateExternalInput",
        utm: "UTMInput"
      },
      marketingEngagementCreate: {
        marketingEngagement: "MarketingEngagementInput"
      },
      metafieldDefinitionCreate: {
        definition: "MetafieldDefinitionInput"
      },
      metafieldDefinitionDelete: {},
      metafieldDefinitionPin: {},
      metafieldDefinitionUnpin: {},
      metafieldDefinitionUpdate: {
        definition: "MetafieldDefinitionUpdateInput"
      },
      metafieldDelete: {
        input: "MetafieldDeleteInput"
      },
      metafieldStorefrontVisibilityCreate: {
        input: "MetafieldStorefrontVisibilityInput"
      },
      metafieldStorefrontVisibilityDelete: {},
      metafieldsSet: {
        metafields: "MetafieldsSetInput"
      },
      metaobjectBulkDelete: {
        where: "MetaobjectBulkDeleteWhereCondition"
      },
      metaobjectCreate: {
        metaobject: "MetaobjectCreateInput"
      },
      metaobjectDefinitionCreate: {
        definition: "MetaobjectDefinitionCreateInput"
      },
      metaobjectDefinitionDelete: {},
      metaobjectDefinitionUpdate: {
        definition: "MetaobjectDefinitionUpdateInput"
      },
      metaobjectDelete: {},
      metaobjectUpdate: {
        metaobject: "MetaobjectUpdateInput"
      },
      metaobjectUpsert: {
        handle: "MetaobjectHandleInput",
        metaobject: "MetaobjectUpsertInput"
      },
      orderCapture: {
        input: "OrderCaptureInput"
      },
      orderClose: {
        input: "OrderCloseInput"
      },
      orderCreateMandatePayment: {},
      orderEditAddCustomItem: {
        price: "MoneyInput"
      },
      orderEditAddLineItemDiscount: {
        discount: "OrderEditAppliedDiscountInput"
      },
      orderEditAddVariant: {},
      orderEditBegin: {},
      orderEditCommit: {},
      orderEditRemoveLineItemDiscount: {},
      orderEditSetQuantity: {},
      orderInvoiceSend: {
        email: "EmailInput"
      },
      orderMarkAsPaid: {
        input: "OrderMarkAsPaidInput"
      },
      orderOpen: {
        input: "OrderOpenInput"
      },
      orderUpdate: {
        input: "OrderInput"
      },
      paymentReminderSend: {},
      paymentTermsCreate: {
        paymentTermsAttributes: "PaymentTermsCreateInput"
      },
      paymentTermsDelete: {
        input: "PaymentTermsDeleteInput"
      },
      paymentTermsUpdate: {
        input: "PaymentTermsUpdateInput"
      },
      priceListCreate: {
        input: "PriceListCreateInput"
      },
      priceListDelete: {},
      priceListFixedPricesAdd: {
        prices: "PriceListPriceInput"
      },
      priceListFixedPricesDelete: {},
      priceListUpdate: {
        input: "PriceListUpdateInput"
      },
      priceRuleActivate: {},
      priceRuleCreate: {
        priceRule: "PriceRuleInput",
        priceRuleDiscountCode: "PriceRuleDiscountCodeInput"
      },
      priceRuleDeactivate: {},
      priceRuleDelete: {},
      priceRuleDiscountCodeCreate: {},
      priceRuleDiscountCodeUpdate: {},
      priceRuleUpdate: {
        priceRule: "PriceRuleInput",
        priceRuleDiscountCode: "PriceRuleDiscountCodeInput"
      },
      privateMetafieldDelete: {
        input: "PrivateMetafieldDeleteInput"
      },
      privateMetafieldUpsert: {
        input: "PrivateMetafieldInput"
      },
      productAppendImages: {
        input: "ProductAppendImagesInput"
      },
      productChangeStatus: {
        status: "ProductStatus"
      },
      productCreate: {
        input: "ProductInput",
        media: "CreateMediaInput"
      },
      productCreateMedia: {
        media: "CreateMediaInput"
      },
      productDelete: {
        input: "ProductDeleteInput"
      },
      productDeleteAsync: {},
      productDeleteImages: {},
      productDeleteMedia: {},
      productDuplicate: {
        newStatus: "ProductStatus"
      },
      productDuplicateAsync: {
        input: "ProductDuplicateAsyncInput"
      },
      productImageUpdate: {
        image: "ImageInput"
      },
      productJoinSellingPlanGroups: {},
      productLeaveSellingPlanGroups: {},
      productPublish: {
        input: "ProductPublishInput"
      },
      productReorderImages: {
        moves: "MoveInput"
      },
      productReorderMedia: {
        moves: "MoveInput"
      },
      productUnpublish: {
        input: "ProductUnpublishInput"
      },
      productUpdate: {
        input: "ProductInput"
      },
      productUpdateMedia: {
        media: "UpdateMediaInput"
      },
      productVariantAppendMedia: {
        variantMedia: "ProductVariantAppendMediaInput"
      },
      productVariantCreate: {
        input: "ProductVariantInput"
      },
      productVariantDelete: {},
      productVariantDetachMedia: {
        variantMedia: "ProductVariantDetachMediaInput"
      },
      productVariantJoinSellingPlanGroups: {},
      productVariantLeaveSellingPlanGroups: {},
      productVariantUpdate: {
        input: "ProductVariantInput"
      },
      productVariantsBulkCreate: {
        variants: "ProductVariantsBulkInput"
      },
      productVariantsBulkDelete: {},
      productVariantsBulkReorder: {
        positions: "ProductVariantPositionInput"
      },
      productVariantsBulkUpdate: {
        variants: "ProductVariantsBulkInput"
      },
      pubSubWebhookSubscriptionCreate: {
        topic: "WebhookSubscriptionTopic",
        webhookSubscription: "PubSubWebhookSubscriptionInput"
      },
      pubSubWebhookSubscriptionUpdate: {
        webhookSubscription: "PubSubWebhookSubscriptionInput"
      },
      publishablePublish: {
        input: "PublicationInput"
      },
      publishablePublishToCurrentChannel: {},
      publishableUnpublish: {
        input: "PublicationInput"
      },
      publishableUnpublishToCurrentChannel: {},
      refundCreate: {
        input: "RefundInput"
      },
      returnApproveRequest: {
        input: "ReturnApproveRequestInput"
      },
      returnCancel: {},
      returnClose: {},
      returnCreate: {
        returnInput: "ReturnInput"
      },
      returnDeclineRequest: {
        input: "ReturnDeclineRequestInput"
      },
      returnRefund: {
        returnRefundInput: "ReturnRefundInput"
      },
      returnReopen: {},
      returnRequest: {
        input: "ReturnRequestInput"
      },
      reverseDeliveryCreateWithShipping: {
        reverseDeliveryLineItems: "ReverseDeliveryLineItemInput",
        trackingInput: "ReverseDeliveryTrackingInput",
        labelInput: "ReverseDeliveryLabelInput"
      },
      reverseDeliveryDispose: {
        dispositionInputs: "ReverseDeliveryDisposeInput"
      },
      reverseDeliveryShippingUpdate: {
        trackingInput: "ReverseDeliveryTrackingInput",
        labelInput: "ReverseDeliveryLabelInput"
      },
      reverseFulfillmentOrderDispose: {
        dispositionInputs: "ReverseFulfillmentOrderDisposeInput"
      },
      savedSearchCreate: {
        input: "SavedSearchCreateInput"
      },
      savedSearchDelete: {
        input: "SavedSearchDeleteInput"
      },
      savedSearchUpdate: {
        input: "SavedSearchUpdateInput"
      },
      scriptTagCreate: {
        input: "ScriptTagInput"
      },
      scriptTagDelete: {},
      scriptTagUpdate: {
        input: "ScriptTagInput"
      },
      segmentCreate: {},
      segmentDelete: {},
      segmentUpdate: {},
      sellingPlanGroupAddProductVariants: {},
      sellingPlanGroupAddProducts: {},
      sellingPlanGroupCreate: {
        input: "SellingPlanGroupInput",
        resources: "SellingPlanGroupResourceInput"
      },
      sellingPlanGroupDelete: {},
      sellingPlanGroupRemoveProductVariants: {},
      sellingPlanGroupRemoveProducts: {},
      sellingPlanGroupUpdate: {
        input: "SellingPlanGroupInput"
      },
      shippingPackageDelete: {},
      shippingPackageMakeDefault: {},
      shippingPackageUpdate: {
        shippingPackage: "CustomShippingPackageInput"
      },
      shopLocaleDisable: {},
      shopLocaleEnable: {},
      shopLocaleUpdate: {
        shopLocale: "ShopLocaleInput"
      },
      shopPolicyUpdate: {
        shopPolicy: "ShopPolicyInput"
      },
      shopResourceFeedbackCreate: {
        input: "ResourceFeedbackCreateInput"
      },
      stagedUploadTargetGenerate: {
        input: "StagedUploadTargetGenerateInput"
      },
      stagedUploadTargetsGenerate: {
        input: "StageImageInput"
      },
      stagedUploadsCreate: {
        input: "StagedUploadInput"
      },
      standardMetafieldDefinitionEnable: {
        ownerType: "MetafieldOwnerType"
      },
      standardMetaobjectDefinitionEnable: {},
      storefrontAccessTokenCreate: {
        input: "StorefrontAccessTokenInput"
      },
      storefrontAccessTokenDelete: {
        input: "StorefrontAccessTokenDeleteInput"
      },
      subscriptionBillingAttemptCreate: {
        subscriptionBillingAttemptInput: "SubscriptionBillingAttemptInput"
      },
      subscriptionBillingCycleContractDraftCommit: {},
      subscriptionBillingCycleContractDraftConcatenate: {
        concatenatedBillingCycleContracts: "SubscriptionBillingCycleInput"
      },
      subscriptionBillingCycleContractEdit: {
        billingCycleInput: "SubscriptionBillingCycleInput"
      },
      subscriptionBillingCycleEditDelete: {
        billingCycleInput: "SubscriptionBillingCycleInput"
      },
      subscriptionBillingCycleEditsDelete: {
        targetSelection: "SubscriptionBillingCyclesTargetSelection"
      },
      subscriptionBillingCycleScheduleEdit: {
        billingCycleInput: "SubscriptionBillingCycleInput",
        input: "SubscriptionBillingCycleScheduleEditInput"
      },
      subscriptionContractCreate: {
        input: "SubscriptionContractCreateInput"
      },
      subscriptionContractSetNextBillingDate: {
        date: "DateTime"
      },
      subscriptionContractUpdate: {},
      subscriptionDraftCommit: {},
      subscriptionDraftDiscountAdd: {
        input: "SubscriptionManualDiscountInput"
      },
      subscriptionDraftDiscountCodeApply: {},
      subscriptionDraftDiscountRemove: {},
      subscriptionDraftDiscountUpdate: {
        input: "SubscriptionManualDiscountInput"
      },
      subscriptionDraftFreeShippingDiscountAdd: {
        input: "SubscriptionFreeShippingDiscountInput"
      },
      subscriptionDraftFreeShippingDiscountUpdate: {
        input: "SubscriptionFreeShippingDiscountInput"
      },
      subscriptionDraftLineAdd: {
        input: "SubscriptionLineInput"
      },
      subscriptionDraftLineRemove: {},
      subscriptionDraftLineUpdate: {
        input: "SubscriptionLineUpdateInput"
      },
      subscriptionDraftUpdate: {
        input: "SubscriptionDraftInput"
      },
      tagsAdd: {},
      tagsRemove: {},
      translationsRegister: {
        translations: "TranslationInput"
      },
      translationsRemove: {},
      urlRedirectBulkDeleteByIds: {},
      urlRedirectBulkDeleteBySavedSearch: {},
      urlRedirectBulkDeleteBySearch: {},
      urlRedirectCreate: {
        urlRedirect: "UrlRedirectInput"
      },
      urlRedirectDelete: {},
      urlRedirectImportCreate: {
        url: "URL"
      },
      urlRedirectImportSubmit: {},
      urlRedirectUpdate: {
        urlRedirect: "UrlRedirectInput"
      },
      webPixelCreate: {
        webPixel: "WebPixelInput"
      },
      webPixelDelete: {},
      webPixelUpdate: {
        webPixel: "WebPixelInput"
      },
      webhookSubscriptionCreate: {
        topic: "WebhookSubscriptionTopic",
        webhookSubscription: "WebhookSubscriptionInput"
      },
      webhookSubscriptionDelete: {},
      webhookSubscriptionUpdate: {
        webhookSubscription: "WebhookSubscriptionInput"
      }
    },
    ObjectDimensionsInput: {
      unit: "LengthUnit"
    },
    OnlineStoreArticle: {
      translations: {}
    },
    OnlineStoreBlog: {
      translations: {}
    },
    OnlineStorePage: {
      translations: {}
    },
    Order: {
      agreements: {},
      discountApplications: {},
      events: {
        sortKey: "EventSortKeys"
      },
      fulfillmentOrders: {},
      fulfillments: {},
      lineItems: {},
      lineItemsMutable: {},
      localizationExtensions: {
        countryCodes: "CountryCode",
        purposes: "LocalizationExtensionPurpose"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      nonFulfillableLineItems: {},
      privateMetafield: {},
      privateMetafields: {},
      refunds: {},
      returns: {},
      risks: {},
      shippingLines: {},
      suggestedRefund: {
        shippingAmount: "Money",
        refundLineItems: "RefundLineItemInput",
        refundDuties: "RefundDutyInput"
      },
      transactions: {}
    },
    OrderActionType: "enum",
    OrderAgreement: {
      sales: {}
    },
    OrderCancelReason: "enum",
    OrderCaptureInput: {
      amount: "Money",
      currency: "CurrencyCode"
    },
    OrderCloseInput: {},
    OrderCreateMandatePaymentUserErrorCode: "enum",
    OrderDisplayFinancialStatus: "enum",
    OrderDisplayFulfillmentStatus: "enum",
    OrderEditAgreement: {
      sales: {}
    },
    OrderEditAppliedDiscountInput: {
      fixedValue: "MoneyInput"
    },
    OrderInput: {
      shippingAddress: "MailingAddressInput",
      customAttributes: "AttributeInput",
      metafields: "MetafieldInput",
      localizationExtensions: "LocalizationExtensionInput"
    },
    OrderInvoiceSendUserErrorCode: "enum",
    OrderMarkAsPaidInput: {},
    OrderOpenInput: {},
    OrderPaymentStatusResult: "enum",
    OrderRiskLevel: "enum",
    OrderSortKeys: "enum",
    OrderTransactionErrorCode: "enum",
    OrderTransactionInput: {
      amount: "Money",
      kind: "OrderTransactionKind"
    },
    OrderTransactionKind: "enum",
    OrderTransactionStatus: "enum",
    ParseErrorCode: "enum",
    PaymentMethods: "enum",
    PaymentReminderSendUserErrorCode: "enum",
    PaymentScheduleInput: {
      issuedAt: "DateTime",
      dueAt: "DateTime"
    },
    PaymentTerms: {
      paymentSchedules: {}
    },
    PaymentTermsCreateInput: {
      paymentSchedules: "PaymentScheduleInput"
    },
    PaymentTermsCreateUserErrorCode: "enum",
    PaymentTermsDeleteInput: {},
    PaymentTermsDeleteUserErrorCode: "enum",
    PaymentTermsInput: {
      paymentSchedules: "PaymentScheduleInput"
    },
    PaymentTermsType: "enum",
    PaymentTermsUpdateInput: {
      paymentTermsAttributes: "PaymentTermsInput"
    },
    PaymentTermsUpdateUserErrorCode: "enum",
    PaypalExpressSubscriptionsGatewayStatus: "enum",
    PreparedFulfillmentOrderLineItemsInput: {},
    PriceList: {
      prices: {
        originType: "PriceListPriceOriginType"
      }
    },
    PriceListAdjustmentInput: {
      type: "PriceListAdjustmentType"
    },
    PriceListAdjustmentType: "enum",
    PriceListContext: {
      country: "CountryCode"
    },
    PriceListContextRuleInput: {},
    PriceListCreateInput: {
      currency: "CurrencyCode",
      parent: "PriceListParentCreateInput",
      contextRule: "PriceListContextRuleInput"
    },
    PriceListParentCreateInput: {
      adjustment: "PriceListAdjustmentInput"
    },
    PriceListParentUpdateInput: {
      adjustment: "PriceListAdjustmentInput"
    },
    PriceListPriceInput: {
      price: "MoneyInput",
      compareAtPrice: "MoneyInput"
    },
    PriceListPriceOriginType: "enum",
    PriceListPriceUserErrorCode: "enum",
    PriceListSortKeys: "enum",
    PriceListUpdateInput: {
      currency: "CurrencyCode",
      contextRule: "PriceListContextRuleInput",
      parent: "PriceListParentUpdateInput"
    },
    PriceListUserErrorCode: "enum",
    PriceRule: {
      discountCodes: {
        sortKey: "DiscountCodeSortKeys"
      },
      events: {
        sortKey: "EventSortKeys"
      }
    },
    PriceRuleAllocationMethod: "enum",
    PriceRuleCustomerSelection: {
      customers: {
        sortKey: "CustomerSortKeys"
      }
    },
    PriceRuleCustomerSelectionInput: {},
    PriceRuleDiscountCodeInput: {},
    PriceRuleEntitlementToPrerequisiteQuantityRatioInput: {},
    PriceRuleErrorCode: "enum",
    PriceRuleFeature: "enum",
    PriceRuleInput: {
      combinesWith: "DiscountCombinesWithInput",
      validityPeriod: "PriceRuleValidityPeriodInput",
      customerSelection: "PriceRuleCustomerSelectionInput",
      allocationMethod: "PriceRuleAllocationMethod",
      value: "PriceRuleValueInput",
      target: "PriceRuleTarget",
      prerequisiteSubtotalRange: "PriceRuleMoneyRangeInput",
      prerequisiteQuantityRange: "PriceRuleQuantityRangeInput",
      prerequisiteShippingPriceRange: "PriceRuleMoneyRangeInput",
      itemEntitlements: "PriceRuleItemEntitlementsInput",
      itemPrerequisites: "PriceRuleItemPrerequisitesInput",
      shippingEntitlements: "PriceRuleShippingEntitlementsInput",
      prerequisiteToEntitlementQuantityRatio: "PriceRulePrerequisiteToEntitlementQuantityRatioInput"
    },
    PriceRuleItemEntitlements: {
      collections: {},
      productVariants: {},
      products: {}
    },
    PriceRuleItemEntitlementsInput: {},
    PriceRuleItemPrerequisitesInput: {},
    PriceRuleLineItemPrerequisites: {
      collections: {},
      productVariants: {},
      products: {}
    },
    PriceRuleMoneyRangeInput: {
      lessThan: "Money",
      lessThanOrEqualTo: "Money",
      greaterThan: "Money",
      greaterThanOrEqualTo: "Money"
    },
    PriceRulePrerequisiteToEntitlementQuantityRatioInput: {},
    PriceRuleQuantityRangeInput: {},
    PriceRuleShareableUrlTargetType: "enum",
    PriceRuleShippingEntitlementsInput: {
      countryCodes: "CountryCode"
    },
    PriceRuleSortKeys: "enum",
    PriceRuleStatus: "enum",
    PriceRuleTarget: "enum",
    PriceRuleTrait: "enum",
    PriceRuleValidityPeriodInput: {
      start: "DateTime",
      end: "DateTime"
    },
    PriceRuleValueInput: {
      fixedAmountValue: "Money"
    },
    PrivateMetafieldDeleteInput: {},
    PrivateMetafieldInput: {
      valueInput: "PrivateMetafieldValueInput"
    },
    PrivateMetafieldValueInput: {
      valueType: "PrivateMetafieldValueType"
    },
    PrivateMetafieldValueType: "enum",
    Product: {
      collections: {
        sortKey: "CollectionSortKeys"
      },
      contextualPricing: {
        context: "ContextualPricingContext"
      },
      description: {},
      images: {
        sortKey: "ProductImageSortKeys"
      },
      inCollection: {},
      media: {
        sortKey: "ProductMediaSortKeys"
      },
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      options: {},
      privateMetafield: {},
      privateMetafields: {},
      productPublications: {},
      publicationCount: {},
      publications: {},
      publishedOnChannel: {},
      publishedOnPublication: {},
      resourcePublications: {},
      resourcePublicationsV2: {},
      sellingPlanGroups: {},
      translations: {},
      unpublishedChannels: {},
      unpublishedPublications: {},
      variants: {
        sortKey: "ProductVariantSortKeys"
      }
    },
    ProductAppendImagesInput: {
      images: "ImageInput"
    },
    ProductCategoryInput: {},
    ProductChangeStatusUserErrorCode: "enum",
    ProductCollectionSortKeys: "enum",
    ProductDeleteInput: {},
    ProductDeleteUserErrorCode: "enum",
    ProductDuplicateAsyncInput: {
      newStatus: "ProductStatus"
    },
    ProductDuplicateUserErrorCode: "enum",
    ProductImageSortKeys: "enum",
    ProductInput: {
      seo: "SEOInput",
      standardizedProductType: "StandardizedProductTypeInput",
      productCategory: "ProductCategoryInput",
      images: "ImageInput",
      metafields: "MetafieldInput",
      privateMetafields: "PrivateMetafieldInput",
      variants: "ProductVariantInput",
      status: "ProductStatus"
    },
    ProductMediaSortKeys: "enum",
    ProductOption: {
      translations: {}
    },
    ProductPublicationInput: {
      publishDate: "DateTime"
    },
    ProductPublishInput: {
      productPublications: "ProductPublicationInput"
    },
    ProductResourceFeedbackInput: {
      state: "ResourceFeedbackState",
      feedbackGeneratedAt: "DateTime",
      productUpdatedAt: "DateTime"
    },
    ProductSortKeys: "enum",
    ProductStatus: "enum",
    ProductUnpublishInput: {
      productPublications: "ProductPublicationInput"
    },
    ProductVariant: {
      contextualPricing: {
        context: "ContextualPricingContext"
      },
      media: {},
      metafield: {},
      metafieldDefinitions: {
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafields: {},
      presentmentPrices: {
        presentmentCurrencies: "CurrencyCode"
      },
      privateMetafield: {},
      privateMetafields: {},
      sellingPlanGroups: {},
      translations: {}
    },
    ProductVariantAppendMediaInput: {},
    ProductVariantDetachMediaInput: {},
    ProductVariantInput: {
      compareAtPrice: "Money",
      inventoryPolicy: "ProductVariantInventoryPolicy",
      inventoryQuantities: "InventoryLevelInput",
      inventoryItem: "InventoryItemInput",
      metafields: "MetafieldInput",
      privateMetafields: "PrivateMetafieldInput",
      price: "Money",
      weightUnit: "WeightUnit"
    },
    ProductVariantInventoryManagement: "enum",
    ProductVariantInventoryPolicy: "enum",
    ProductVariantPositionInput: {},
    ProductVariantSortKeys: "enum",
    ProductVariantsBulkCreateUserErrorCode: "enum",
    ProductVariantsBulkDeleteUserErrorCode: "enum",
    ProductVariantsBulkInput: {
      compareAtPrice: "Money",
      inventoryPolicy: "ProductVariantInventoryPolicy",
      inventoryQuantities: "InventoryLevelInput",
      inventoryItem: "InventoryItemInput",
      metafields: "MetafieldInput",
      privateMetafields: "PrivateMetafieldInput",
      price: "Money",
      weightUnit: "WeightUnit"
    },
    ProductVariantsBulkReorderUserErrorCode: "enum",
    ProductVariantsBulkUpdateUserErrorCode: "enum",
    ProfileItemSortKeys: "enum",
    PubSubWebhookSubscriptionCreateUserErrorCode: "enum",
    PubSubWebhookSubscriptionInput: {
      format: "WebhookSubscriptionFormat"
    },
    PubSubWebhookSubscriptionUpdateUserErrorCode: "enum",
    Publication: {
      collectionPublicationsV3: {},
      collections: {},
      hasCollection: {},
      productPublicationsV3: {},
      products: {}
    },
    PublicationInput: {
      publishDate: "DateTime"
    },
    Publishable: {
      publicationCount: {},
      publishedOnChannel: {},
      publishedOnPublication: {},
      resourcePublications: {},
      resourcePublicationsV2: {},
      unpublishedChannels: {},
      unpublishedPublications: {}
    },
    PurchasingCompanyInput: {},
    PurchasingEntityInput: {
      purchasingCompany: "PurchasingCompanyInput"
    },
    QueryRoot: {
      abandonment: {},
      abandonmentByAbandonedCheckoutId: {},
      app: {},
      appByHandle: {},
      appByKey: {},
      appDiscountType: {},
      appInstallation: {},
      appInstallations: {
        sortKey: "AppInstallationSortKeys",
        category: "AppInstallationCategory",
        privacy: "AppInstallationPrivacy"
      },
      automaticDiscount: {},
      automaticDiscountNode: {},
      automaticDiscountNodes: {
        sortKey: "AutomaticDiscountSortKeys"
      },
      automaticDiscountSavedSearches: {},
      automaticDiscounts: {
        sortKey: "AutomaticDiscountSortKeys"
      },
      carrierService: {},
      channel: {},
      channels: {},
      checkoutProfile: {},
      checkoutProfiles: {
        sortKey: "CheckoutProfileSortKeys"
      },
      codeDiscountNode: {},
      codeDiscountNodeByCode: {},
      codeDiscountNodes: {
        sortKey: "CodeDiscountSortKeys"
      },
      codeDiscountSavedSearches: {},
      collection: {},
      collectionByHandle: {},
      collectionSavedSearches: {},
      collections: {
        sortKey: "CollectionSortKeys"
      },
      companies: {
        sortKey: "CompanySortKeys"
      },
      company: {},
      companyContact: {},
      companyContactRole: {},
      companyLocation: {},
      companyLocations: {
        sortKey: "CompanyLocationSortKeys"
      },
      currentBulkOperation: {
        type: "BulkOperationType"
      },
      customer: {},
      customerPaymentMethod: {},
      customerSegmentMembers: {},
      customerSegmentMembersQuery: {},
      customerSegmentMembership: {},
      customers: {
        sortKey: "CustomerSortKeys"
      },
      deletionEvents: {
        subjectTypes: "DeletionEventSubjectType",
        sortKey: "DeletionEventSortKeys"
      },
      deliveryProfile: {},
      deliveryProfiles: {},
      discountCodeCount: {},
      discountNode: {},
      discountNodes: {
        sortKey: "DiscountSortKeys"
      },
      discountRedeemCodeBulkCreation: {},
      discountRedeemCodeSavedSearches: {
        sortKey: "DiscountCodeSortKeys"
      },
      dispute: {},
      disputeEvidence: {},
      domain: {},
      draftOrder: {},
      draftOrderSavedSearches: {},
      draftOrderTag: {},
      draftOrders: {
        sortKey: "DraftOrderSortKeys"
      },
      fileSavedSearches: {},
      files: {
        sortKey: "FileSortKeys"
      },
      fulfillment: {},
      fulfillmentOrder: {},
      fulfillmentOrders: {
        sortKey: "FulfillmentOrderSortKeys"
      },
      fulfillmentService: {},
      giftCard: {},
      giftCards: {
        sortKey: "GiftCardSortKeys"
      },
      giftCardsCount: {},
      inventoryItem: {},
      inventoryItems: {},
      inventoryLevel: {},
      job: {},
      location: {},
      locations: {
        sortKey: "LocationSortKeys"
      },
      locationsAvailableForDeliveryProfilesConnection: {},
      manualHoldsFulfillmentOrders: {},
      market: {},
      marketByGeography: {
        countryCode: "CountryCode"
      },
      marketLocalizableResource: {},
      marketLocalizableResources: {
        resourceType: "MarketLocalizableResourceType"
      },
      marketLocalizableResourcesByIds: {},
      marketingActivities: {
        utm: "UTMInput",
        sortKey: "MarketingActivitySortKeys"
      },
      marketingActivity: {},
      marketingEvent: {},
      marketingEvents: {
        sortKey: "MarketingEventSortKeys"
      },
      markets: {},
      metafield: {},
      metafieldDefinition: {},
      metafieldDefinitions: {
        ownerType: "MetafieldOwnerType",
        pinnedStatus: "MetafieldDefinitionPinnedStatus",
        sortKey: "MetafieldDefinitionSortKeys"
      },
      metafieldStorefrontVisibilities: {},
      metafieldStorefrontVisibility: {},
      metaobject: {},
      metaobjectByHandle: {
        handle: "MetaobjectHandleInput"
      },
      metaobjectDefinition: {},
      metaobjectDefinitionByType: {},
      metaobjectDefinitions: {},
      metaobjects: {},
      node: {},
      nodes: {},
      order: {},
      orderPaymentStatus: {},
      orderSavedSearches: {},
      orders: {
        sortKey: "OrderSortKeys"
      },
      paymentTermsTemplates: {
        paymentTermsType: "PaymentTermsType"
      },
      priceList: {},
      priceLists: {
        matchRule: "PriceListContext",
        sortKey: "PriceListSortKeys"
      },
      priceRule: {},
      priceRuleSavedSearches: {},
      priceRules: {
        sortKey: "PriceRuleSortKeys"
      },
      privateMetafield: {},
      privateMetafields: {},
      product: {},
      productByHandle: {},
      productResourceFeedback: {},
      productSavedSearches: {},
      productVariant: {},
      productVariants: {
        sortKey: "ProductVariantSortKeys"
      },
      products: {
        sortKey: "ProductSortKeys"
      },
      publication: {},
      publications: {},
      refund: {},
      return: {},
      returnableFulfillment: {},
      returnableFulfillments: {},
      reverseDelivery: {},
      reverseFulfillmentOrder: {},
      scriptTag: {},
      scriptTags: {
        src: "URL"
      },
      segment: {},
      segmentFilterSuggestions: {},
      segmentFilters: {},
      segmentMigrations: {},
      segmentValueSuggestions: {},
      segments: {
        sortKey: "SegmentSortKeys"
      },
      sellingPlanGroup: {},
      sellingPlanGroups: {
        sortKey: "SellingPlanGroupSortKeys"
      },
      shopLocales: {},
      shopifyqlQuery: {},
      staffMember: {},
      standardMetafieldDefinitionTemplates: {},
      subscriptionBillingAttempt: {},
      subscriptionBillingCycle: {
        billingCycleInput: "SubscriptionBillingCycleInput"
      },
      subscriptionBillingCycles: {
        billingCyclesDateRangeSelector: "SubscriptionBillingCyclesDateRangeSelector",
        billingCyclesIndexRangeSelector: "SubscriptionBillingCyclesIndexRangeSelector",
        sortKey: "SubscriptionBillingCyclesSortKeys"
      },
      subscriptionContract: {},
      subscriptionContracts: {},
      subscriptionDraft: {},
      tenderTransactions: {},
      translatableResource: {},
      translatableResources: {
        resourceType: "TranslatableResourceType"
      },
      translatableResourcesByIds: {},
      urlRedirect: {},
      urlRedirectImport: {},
      urlRedirectSavedSearches: {},
      urlRedirects: {
        sortKey: "UrlRedirectSortKeys"
      },
      webPixel: {},
      webhookSubscription: {},
      webhookSubscriptions: {
        sortKey: "WebhookSubscriptionSortKeys",
        callbackUrl: "URL",
        format: "WebhookSubscriptionFormat",
        topics: "WebhookSubscriptionTopic"
      }
    },
    Refund: {
      refundLineItems: {},
      transactions: {}
    },
    RefundAgreement: {
      sales: {}
    },
    RefundDutyInput: {
      refundType: "RefundDutyRefundType"
    },
    RefundDutyRefundType: "enum",
    RefundInput: {
      currency: "CurrencyCode",
      shipping: "ShippingRefundInput",
      refundLineItems: "RefundLineItemInput",
      refundDuties: "RefundDutyInput",
      transactions: "OrderTransactionInput"
    },
    RefundLineItemInput: {
      restockType: "RefundLineItemRestockType"
    },
    RefundLineItemRestockType: "enum",
    RefundShippingInput: {
      shippingRefundAmount: "MoneyInput"
    },
    RemoteAuthorizeNetCustomerPaymentProfileInput: {},
    RemoteBraintreePaymentMethodInput: {},
    RemoteStripePaymentMethodInput: {},
    ResourceAlertIcon: "enum",
    ResourceAlertSeverity: "enum",
    ResourceFeedbackCreateInput: {
      feedbackGeneratedAt: "DateTime",
      state: "ResourceFeedbackState"
    },
    ResourceFeedbackState: "enum",
    Return: {
      refunds: {},
      returnLineItems: {},
      reverseFulfillmentOrders: {},
      suggestedRefund: {
        returnRefundLineItems: "ReturnRefundLineItemInput",
        refundShipping: "RefundShippingInput",
        refundDuties: "RefundDutyInput"
      }
    },
    ReturnApproveRequestInput: {},
    ReturnDeclineReason: "enum",
    ReturnDeclineRequestInput: {
      declineReason: "ReturnDeclineReason"
    },
    ReturnErrorCode: "enum",
    ReturnInput: {
      returnLineItems: "ReturnLineItemInput",
      requestedAt: "DateTime"
    },
    ReturnLineItemInput: {
      returnReason: "ReturnReason"
    },
    ReturnReason: "enum",
    ReturnRefundInput: {
      returnRefundLineItems: "ReturnRefundLineItemInput",
      refundShipping: "RefundShippingInput",
      refundDuties: "RefundDutyInput",
      orderTransactions: "ReturnRefundOrderTransactionInput"
    },
    ReturnRefundLineItemInput: {},
    ReturnRefundOrderTransactionInput: {
      transactionAmount: "MoneyInput"
    },
    ReturnRequestInput: {
      returnLineItems: "ReturnRequestLineItemInput"
    },
    ReturnRequestLineItemInput: {
      returnReason: "ReturnReason"
    },
    ReturnStatus: "enum",
    ReturnableFulfillment: {
      returnableFulfillmentLineItems: {}
    },
    ReverseDelivery: {
      reverseDeliveryLineItems: {}
    },
    ReverseDeliveryDisposeInput: {
      dispositionType: "ReverseFulfillmentOrderDispositionType"
    },
    ReverseDeliveryLabelInput: {
      fileUrl: "URL"
    },
    ReverseDeliveryLineItemInput: {},
    ReverseDeliveryTrackingInput: {
      url: "URL"
    },
    ReverseFulfillmentOrder: {
      lineItems: {},
      reverseDeliveries: {}
    },
    ReverseFulfillmentOrderDisposeInput: {
      dispositionType: "ReverseFulfillmentOrderDispositionType"
    },
    ReverseFulfillmentOrderDispositionType: "enum",
    ReverseFulfillmentOrderStatus: "enum",
    ReverseFulfillmentOrderThirdPartyConfirmationStatus: "enum",
    SEOInput: {},
    SaleActionType: "enum",
    SaleLineType: "enum",
    SalesAgreement: {
      sales: {}
    },
    SavedSearchCreateInput: {
      resourceType: "SearchResultType"
    },
    SavedSearchDeleteInput: {},
    SavedSearchUpdateInput: {},
    ScriptTagDisplayScope: "enum",
    ScriptTagInput: {
      src: "URL",
      displayScope: "ScriptTagDisplayScope"
    },
    SearchResultType: "enum",
    SegmentAssociationFilter: {
      values: {}
    },
    SegmentEnumFilter: {
      values: {}
    },
    SegmentEventFilter: {
      values: {}
    },
    SegmentSortKeys: "enum",
    SegmentStatistics: {
      attributeStatistics: {}
    },
    SegmentStringFilter: {
      values: {}
    },
    SellingPlanAnchorInput: {
      type: "SellingPlanAnchorType"
    },
    SellingPlanAnchorType: "enum",
    SellingPlanBillingPolicyInput: {
      fixed: "SellingPlanFixedBillingPolicyInput",
      recurring: "SellingPlanRecurringBillingPolicyInput"
    },
    SellingPlanCategory: "enum",
    SellingPlanCheckoutChargeInput: {
      type: "SellingPlanCheckoutChargeType",
      value: "SellingPlanCheckoutChargeValueInput"
    },
    SellingPlanCheckoutChargeType: "enum",
    SellingPlanCheckoutChargeValueInput: {
      fixedValue: "Decimal"
    },
    SellingPlanDeliveryPolicyInput: {
      fixed: "SellingPlanFixedDeliveryPolicyInput",
      recurring: "SellingPlanRecurringDeliveryPolicyInput"
    },
    SellingPlanFixedBillingPolicyInput: {
      remainingBalanceChargeTrigger: "SellingPlanRemainingBalanceChargeTrigger",
      remainingBalanceChargeExactTime: "DateTime",
      checkoutCharge: "SellingPlanCheckoutChargeInput"
    },
    SellingPlanFixedDeliveryPolicyInput: {
      anchors: "SellingPlanAnchorInput",
      fulfillmentTrigger: "SellingPlanFulfillmentTrigger",
      fulfillmentExactTime: "DateTime",
      intent: "SellingPlanFixedDeliveryPolicyIntent",
      preAnchorBehavior: "SellingPlanFixedDeliveryPolicyPreAnchorBehavior"
    },
    SellingPlanFixedDeliveryPolicyIntent: "enum",
    SellingPlanFixedDeliveryPolicyPreAnchorBehavior: "enum",
    SellingPlanFixedPricingPolicyInput: {
      adjustmentType: "SellingPlanPricingPolicyAdjustmentType",
      adjustmentValue: "SellingPlanPricingPolicyValueInput"
    },
    SellingPlanFulfillmentTrigger: "enum",
    SellingPlanGroup: {
      appliesToProduct: {},
      appliesToProductVariant: {},
      appliesToProductVariants: {},
      productVariantCount: {},
      productVariants: {},
      products: {},
      sellingPlans: {}
    },
    SellingPlanGroupInput: {
      sellingPlansToCreate: "SellingPlanInput",
      sellingPlansToUpdate: "SellingPlanInput"
    },
    SellingPlanGroupResourceInput: {},
    SellingPlanGroupSortKeys: "enum",
    SellingPlanGroupUserErrorCode: "enum",
    SellingPlanInput: {
      billingPolicy: "SellingPlanBillingPolicyInput",
      deliveryPolicy: "SellingPlanDeliveryPolicyInput",
      inventoryPolicy: "SellingPlanInventoryPolicyInput",
      pricingPolicies: "SellingPlanPricingPolicyInput",
      category: "SellingPlanCategory"
    },
    SellingPlanInterval: "enum",
    SellingPlanInventoryPolicyInput: {
      reserve: "SellingPlanReserve"
    },
    SellingPlanPricingPolicyAdjustmentType: "enum",
    SellingPlanPricingPolicyInput: {
      recurring: "SellingPlanRecurringPricingPolicyInput",
      fixed: "SellingPlanFixedPricingPolicyInput"
    },
    SellingPlanPricingPolicyValueInput: {
      fixedValue: "Decimal"
    },
    SellingPlanRecurringBillingPolicyInput: {
      interval: "SellingPlanInterval",
      anchors: "SellingPlanAnchorInput"
    },
    SellingPlanRecurringDeliveryPolicyInput: {
      interval: "SellingPlanInterval",
      anchors: "SellingPlanAnchorInput",
      intent: "SellingPlanRecurringDeliveryPolicyIntent",
      preAnchorBehavior: "SellingPlanRecurringDeliveryPolicyPreAnchorBehavior"
    },
    SellingPlanRecurringDeliveryPolicyIntent: "enum",
    SellingPlanRecurringDeliveryPolicyPreAnchorBehavior: "enum",
    SellingPlanRecurringPricingPolicyInput: {
      adjustmentType: "SellingPlanPricingPolicyAdjustmentType",
      adjustmentValue: "SellingPlanPricingPolicyValueInput"
    },
    SellingPlanRemainingBalanceChargeTrigger: "enum",
    SellingPlanReserve: "enum",
    ShippingDiscountClass: "enum",
    ShippingLineInput: {
      price: "Money"
    },
    ShippingPackageType: "enum",
    ShippingRefundInput: {
      amount: "Money"
    },
    Shop: {
      assignedFulfillmentOrders: {
        assignmentStatus: "FulfillmentOrderAssignmentStatus",
        sortKey: "FulfillmentOrderSortKeys"
      },
      availableChannelApps: {},
      channels: {},
      collectionByHandle: {},
      collectionSavedSearches: {},
      collections: {
        sortKey: "CollectionSortKeys"
      },
      currencySettings: {},
      customerSavedSearches: {
        sortKey: "CustomerSavedSearchSortKeys"
      },
      customerTags: {},
      customers: {
        sortKey: "CustomerSortKeys"
      },
      draftOrderSavedSearches: {},
      draftOrderTags: {},
      draftOrders: {
        sortKey: "DraftOrderSortKeys"
      },
      fulfillmentOrders: {
        sortKey: "FulfillmentOrderSortKeys"
      },
      inventoryItems: {},
      locations: {
        sortKey: "LocationSortKeys"
      },
      marketingEvents: {
        sortKey: "MarketingEventSortKeys"
      },
      metafield: {},
      metafields: {},
      orderSavedSearches: {},
      orderTags: {
        sort: "ShopTagSort"
      },
      orders: {
        sortKey: "OrderSortKeys"
      },
      priceRuleSavedSearches: {},
      priceRules: {
        sortKey: "PriceRuleSortKeys"
      },
      privateMetafield: {},
      privateMetafields: {},
      productByHandle: {},
      productImages: {
        sortKey: "ProductImageSortKeys"
      },
      productSavedSearches: {},
      productTags: {},
      productTypes: {},
      productVariants: {
        sortKey: "ProductVariantSortKeys"
      },
      productVendors: {},
      products: {
        sortKey: "ProductSortKeys"
      },
      search: {
        types: "SearchResultType"
      },
      staffMembers: {},
      storefrontAccessTokens: {},
      translations: {},
      uploadedImagesByIds: {}
    },
    ShopAddress: {
      formatted: {}
    },
    ShopBranding: "enum",
    ShopCustomerAccountsSetting: "enum",
    ShopLocaleInput: {},
    ShopPolicy: {
      translations: {}
    },
    ShopPolicyErrorCode: "enum",
    ShopPolicyInput: {
      type: "ShopPolicyType"
    },
    ShopPolicyType: "enum",
    ShopResourceFeedbackCreateUserErrorCode: "enum",
    ShopTagSort: "enum",
    ShopifyPaymentsAccount: {
      bankAccounts: {},
      disputes: {},
      payouts: {
        transactionType: "ShopifyPaymentsPayoutTransactionType"
      }
    },
    ShopifyPaymentsBankAccount: {
      payouts: {
        transactionType: "ShopifyPaymentsPayoutTransactionType"
      }
    },
    ShopifyPaymentsBankAccountStatus: "enum",
    ShopifyPaymentsDisputeEvidenceFileType: "enum",
    ShopifyPaymentsDisputeEvidenceUpdateInput: {
      shippingAddress: "MailingAddressInput",
      cancellationPolicyFile: "ShopifyPaymentsDisputeFileUploadUpdateInput",
      customerCommunicationFile: "ShopifyPaymentsDisputeFileUploadUpdateInput",
      refundPolicyFile: "ShopifyPaymentsDisputeFileUploadUpdateInput",
      shippingDocumentationFile: "ShopifyPaymentsDisputeFileUploadUpdateInput",
      uncategorizedFile: "ShopifyPaymentsDisputeFileUploadUpdateInput",
      serviceDocumentationFile: "ShopifyPaymentsDisputeFileUploadUpdateInput"
    },
    ShopifyPaymentsDisputeFileUploadUpdateInput: {},
    ShopifyPaymentsDisputeReason: "enum",
    ShopifyPaymentsPayoutInterval: "enum",
    ShopifyPaymentsPayoutStatus: "enum",
    ShopifyPaymentsPayoutTransactionType: "enum",
    ShopifyPaymentsVerificationDocumentType: "enum",
    ShopifyPaymentsVerificationStatus: "enum",
    StaffMember: {
      avatar: {
        fallback: "StaffMemberDefaultImage"
      }
    },
    StaffMemberDefaultImage: "enum",
    StaffMemberPermission: "enum",
    StageImageInput: {
      resource: "StagedUploadTargetGenerateUploadResource",
      httpMethod: "StagedUploadHttpMethodType"
    },
    StagedUploadHttpMethodType: "enum",
    StagedUploadInput: {
      resource: "StagedUploadTargetGenerateUploadResource",
      httpMethod: "StagedUploadHttpMethodType",
      fileSize: "UnsignedInt64"
    },
    StagedUploadTargetGenerateInput: {
      resource: "StagedUploadTargetGenerateUploadResource",
      httpMethod: "StagedUploadHttpMethodType",
      fileSize: "UnsignedInt64"
    },
    StagedUploadTargetGenerateUploadResource: "enum",
    StandardMetafieldDefinitionEnableUserErrorCode: "enum",
    StandardizedProductTypeInput: {},
    StorefrontAccessTokenDeleteInput: {},
    StorefrontAccessTokenInput: {},
    StorefrontID: `scalar.StorefrontID`,
    SubscriptionBillingAttemptErrorCode: "enum",
    SubscriptionBillingAttemptInput: {
      originTime: "DateTime",
      billingCycleSelector: "SubscriptionBillingCycleSelector"
    },
    SubscriptionBillingCycle: {
      billingAttempts: {}
    },
    SubscriptionBillingCycleBillingCycleStatus: "enum",
    SubscriptionBillingCycleEditedContract: {
      billingCycles: {
        sortKey: "SubscriptionBillingCyclesSortKeys"
      },
      customerPaymentMethod: {},
      discounts: {},
      lines: {},
      orders: {}
    },
    SubscriptionBillingCycleErrorCode: "enum",
    SubscriptionBillingCycleInput: {
      selector: "SubscriptionBillingCycleSelector"
    },
    SubscriptionBillingCycleScheduleEditInput: {
      billingDate: "DateTime",
      reason: "SubscriptionBillingCycleScheduleEditInputScheduleEditReason"
    },
    SubscriptionBillingCycleScheduleEditInputScheduleEditReason: "enum",
    SubscriptionBillingCycleSelector: {
      date: "DateTime"
    },
    SubscriptionBillingCyclesDateRangeSelector: {
      startDate: "DateTime",
      endDate: "DateTime"
    },
    SubscriptionBillingCyclesIndexRangeSelector: {},
    SubscriptionBillingCyclesSortKeys: "enum",
    SubscriptionBillingCyclesTargetSelection: "enum",
    SubscriptionBillingPolicyInput: {
      interval: "SellingPlanInterval",
      anchors: "SellingPlanAnchorInput"
    },
    SubscriptionContract: {
      billingAttempts: {},
      customerPaymentMethod: {},
      discounts: {},
      lines: {},
      orders: {}
    },
    SubscriptionContractBase: {
      customerPaymentMethod: {},
      discounts: {},
      lines: {},
      orders: {}
    },
    SubscriptionContractCreateInput: {
      nextBillingDate: "DateTime",
      currencyCode: "CurrencyCode",
      contract: "SubscriptionDraftInput"
    },
    SubscriptionContractErrorCode: "enum",
    SubscriptionContractLastPaymentStatus: "enum",
    SubscriptionContractSubscriptionStatus: "enum",
    SubscriptionDeliveryMethodInput: {
      shipping: "SubscriptionDeliveryMethodShippingInput",
      localDelivery: "SubscriptionDeliveryMethodLocalDeliveryInput",
      pickup: "SubscriptionDeliveryMethodPickupInput"
    },
    SubscriptionDeliveryMethodLocalDeliveryInput: {
      address: "MailingAddressInput",
      localDeliveryOption: "SubscriptionDeliveryMethodLocalDeliveryOptionInput"
    },
    SubscriptionDeliveryMethodLocalDeliveryOptionInput: {},
    SubscriptionDeliveryMethodPickupInput: {
      pickupOption: "SubscriptionDeliveryMethodPickupOptionInput"
    },
    SubscriptionDeliveryMethodPickupOptionInput: {},
    SubscriptionDeliveryMethodShippingInput: {
      address: "MailingAddressInput",
      shippingOption: "SubscriptionDeliveryMethodShippingOptionInput"
    },
    SubscriptionDeliveryMethodShippingOptionInput: {},
    SubscriptionDeliveryPolicyInput: {
      interval: "SellingPlanInterval",
      anchors: "SellingPlanAnchorInput"
    },
    SubscriptionDiscountEntitledLines: {
      lines: {}
    },
    SubscriptionDiscountRejectionReason: "enum",
    SubscriptionDraft: {
      concatenatedBillingCycles: {
        sortKey: "SubscriptionBillingCyclesSortKeys"
      },
      customerPaymentMethod: {},
      deliveryOptions: {
        deliveryAddress: "MailingAddressInput"
      },
      discounts: {},
      discountsAdded: {},
      discountsRemoved: {},
      discountsUpdated: {},
      lines: {},
      linesAdded: {},
      linesRemoved: {},
      shippingOptions: {
        deliveryAddress: "MailingAddressInput"
      }
    },
    SubscriptionDraftErrorCode: "enum",
    SubscriptionDraftInput: {
      status: "SubscriptionContractSubscriptionStatus",
      nextBillingDate: "DateTime",
      billingPolicy: "SubscriptionBillingPolicyInput",
      deliveryPolicy: "SubscriptionDeliveryPolicyInput",
      deliveryPrice: "Decimal",
      deliveryMethod: "SubscriptionDeliveryMethodInput",
      customAttributes: "AttributeInput"
    },
    SubscriptionFreeShippingDiscountInput: {},
    SubscriptionLineInput: {
      currentPrice: "Decimal",
      customAttributes: "AttributeInput",
      pricingPolicy: "SubscriptionPricingPolicyInput"
    },
    SubscriptionLineUpdateInput: {
      currentPrice: "Decimal",
      customAttributes: "AttributeInput",
      pricingPolicy: "SubscriptionPricingPolicyInput"
    },
    SubscriptionManualDiscountEntitledLinesInput: {
      lines: "SubscriptionManualDiscountLinesInput"
    },
    SubscriptionManualDiscountFixedAmountInput: {},
    SubscriptionManualDiscountInput: {
      value: "SubscriptionManualDiscountValueInput",
      entitledLines: "SubscriptionManualDiscountEntitledLinesInput"
    },
    SubscriptionManualDiscountLinesInput: {},
    SubscriptionManualDiscountValueInput: {
      fixedAmount: "SubscriptionManualDiscountFixedAmountInput"
    },
    SubscriptionPricingPolicyCycleDiscountsInput: {
      adjustmentType: "SellingPlanPricingPolicyAdjustmentType",
      adjustmentValue: "SellingPlanPricingPolicyValueInput",
      computedPrice: "Decimal"
    },
    SubscriptionPricingPolicyInput: {
      basePrice: "Decimal",
      cycleDiscounts: "SubscriptionPricingPolicyCycleDiscountsInput"
    },
    SuggestedOrderTransactionKind: "enum",
    TaxExemption: "enum",
    TranslatableResource: {
      translations: {}
    },
    TranslatableResourceType: "enum",
    TranslationErrorCode: "enum",
    TranslationInput: {},
    URL: `scalar.URL`,
    UTMInput: {},
    UnitSystem: "enum",
    UnsignedInt64: `scalar.UnsignedInt64`,
    UpdateMediaInput: {},
    UrlRedirectBulkDeleteByIdsUserErrorCode: "enum",
    UrlRedirectBulkDeleteBySavedSearchUserErrorCode: "enum",
    UrlRedirectBulkDeleteBySearchUserErrorCode: "enum",
    UrlRedirectErrorCode: "enum",
    UrlRedirectImportErrorCode: "enum",
    UrlRedirectInput: {},
    UrlRedirectSortKeys: "enum",
    UtcOffset: `scalar.UtcOffset`,
    VisualizationType: "enum",
    WebPixelInput: {
      settings: "JSON"
    },
    WebhookSubscriptionFormat: "enum",
    WebhookSubscriptionInput: {
      callbackUrl: "URL",
      format: "WebhookSubscriptionFormat"
    },
    WebhookSubscriptionSortKeys: "enum",
    WebhookSubscriptionTopic: "enum",
    WeightInput: {
      unit: "WeightUnit"
    },
    WeightUnit: "enum"
  };
  var ReturnTypes = {
    accessRestricted: {
      reason: "String"
    },
    ARN: `scalar.ARN`,
    AbandonedCheckout: {
      abandonedCheckoutUrl: "URL",
      defaultCursor: "String",
      id: "ID",
      lineItemsQuantity: "Int",
      totalPriceSet: "MoneyBag"
    },
    Abandonment: {
      abandonedCheckoutPayload: "AbandonedCheckout",
      abandonmentType: "AbandonmentAbandonmentType",
      app: "App",
      createdAt: "DateTime",
      customer: "Customer",
      customerHasNoOrderSinceAbandonment: "Boolean",
      daysSinceLastAbandonmentEmail: "Int",
      emailSentAt: "DateTime",
      emailState: "AbandonmentEmailState",
      hoursSinceLastAbandonedCheckout: "Float",
      id: "ID",
      inventoryAvailable: "Boolean",
      isFromOnlineStore: "Boolean",
      isFromShopApp: "Boolean",
      isFromShopPay: "Boolean",
      isMostSignificantAbandonment: "Boolean",
      lastBrowseAbandonmentDate: "DateTime",
      lastCartAbandonmentDate: "DateTime",
      lastCheckoutAbandonmentDate: "DateTime",
      mostRecentStep: "AbandonmentAbandonmentType",
      productsAddedToCart: "CustomerVisitProductInfoConnection",
      productsViewed: "CustomerVisitProductInfoConnection",
      visitStartedAt: "DateTime"
    },
    AbandonmentEmailStateUpdatePayload: {
      abandonment: "Abandonment",
      userErrors: "AbandonmentEmailStateUpdateUserError"
    },
    AbandonmentEmailStateUpdateUserError: {
      code: "AbandonmentEmailStateUpdateUserErrorCode",
      field: "String",
      message: "String"
    },
    AccessScope: {
      description: "String",
      handle: "String"
    },
    AdjustmentSale: {
      actionType: "SaleActionType",
      id: "ID",
      lineType: "SaleLineType",
      quantity: "Int",
      taxes: "SaleTax",
      totalAmount: "MoneyBag",
      totalDiscountAmountAfterTaxes: "MoneyBag",
      totalDiscountAmountBeforeTaxes: "MoneyBag",
      totalTaxAmount: "MoneyBag"
    },
    AllDiscountItems: {
      allItems: "Boolean"
    },
    ApiVersion: {
      displayName: "String",
      handle: "String",
      supported: "Boolean"
    },
    App: {
      apiKey: "String",
      appStoreAppUrl: "URL",
      appStoreDeveloperUrl: "URL",
      availableAccessScopes: "AccessScope",
      banner: "Image",
      description: "String",
      developerName: "String",
      developerType: "AppDeveloperType",
      developerUrl: "URL",
      embedded: "Boolean",
      failedRequirements: "FailedRequirement",
      features: "String",
      feedback: "AppFeedback",
      handle: "String",
      icon: "Image",
      id: "ID",
      installUrl: "URL",
      installation: "AppInstallation",
      isPostPurchaseAppInUse: "Boolean",
      launchUrl: "URL",
      navigationItems: "NavigationItem",
      previouslyInstalled: "Boolean",
      pricingDetails: "String",
      pricingDetailsSummary: "String",
      privacyPolicyUrl: "URL",
      publicCategory: "AppPublicCategory",
      published: "Boolean",
      requestedAccessScopes: "AccessScope",
      screenshots: "Image",
      shopifyDeveloped: "Boolean",
      title: "String",
      uninstallMessage: "String",
      uninstallUrl: "URL",
      webhookApiVersion: "String"
    },
    AppConnection: {
      edges: "AppEdge",
      nodes: "App",
      pageInfo: "PageInfo"
    },
    AppCredit: {
      amount: "MoneyV2",
      createdAt: "DateTime",
      description: "String",
      id: "ID",
      test: "Boolean"
    },
    AppCreditConnection: {
      edges: "AppCreditEdge",
      nodes: "AppCredit",
      pageInfo: "PageInfo"
    },
    AppCreditCreatePayload: {
      appCredit: "AppCredit",
      userErrors: "UserError"
    },
    AppCreditEdge: {
      cursor: "String",
      node: "AppCredit"
    },
    AppDiscountType: {
      app: "App",
      appBridge: "FunctionsAppBridge",
      appKey: "String",
      description: "String",
      discountClass: "DiscountClass",
      functionId: "String",
      targetType: "DiscountApplicationTargetType",
      title: "String"
    },
    AppEdge: {
      cursor: "String",
      node: "App"
    },
    AppFeedback: {
      app: "App",
      link: "Link",
      messages: "UserError"
    },
    AppInstallation: {
      accessScopes: "AccessScope",
      activeSubscriptions: "AppSubscription",
      allSubscriptions: "AppSubscriptionConnection",
      app: "App",
      channel: "Channel",
      credits: "AppCreditConnection",
      id: "ID",
      launchUrl: "URL",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      oneTimePurchases: "AppPurchaseOneTimeConnection",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      publication: "Publication",
      revenueAttributionRecords: "AppRevenueAttributionRecordConnection",
      subscriptions: "AppSubscription",
      uninstallUrl: "URL"
    },
    AppInstallationConnection: {
      edges: "AppInstallationEdge",
      nodes: "AppInstallation",
      pageInfo: "PageInfo"
    },
    AppInstallationEdge: {
      cursor: "String",
      node: "AppInstallation"
    },
    AppPlanV2: {
      pricingDetails: "AppPricingDetails"
    },
    AppPricingDetails: {
      "...on AppRecurringPricing": "AppRecurringPricing",
      "...on AppUsagePricing": "AppUsagePricing"
    },
    AppPurchase: {
      "...on AppPurchaseOneTime": "AppPurchaseOneTime",
      createdAt: "DateTime",
      name: "String",
      price: "MoneyV2",
      status: "AppPurchaseStatus",
      test: "Boolean"
    },
    AppPurchaseOneTime: {
      createdAt: "DateTime",
      id: "ID",
      name: "String",
      price: "MoneyV2",
      status: "AppPurchaseStatus",
      test: "Boolean"
    },
    AppPurchaseOneTimeConnection: {
      edges: "AppPurchaseOneTimeEdge",
      nodes: "AppPurchaseOneTime",
      pageInfo: "PageInfo"
    },
    AppPurchaseOneTimeCreatePayload: {
      appPurchaseOneTime: "AppPurchaseOneTime",
      confirmationUrl: "URL",
      userErrors: "UserError"
    },
    AppPurchaseOneTimeEdge: {
      cursor: "String",
      node: "AppPurchaseOneTime"
    },
    AppRecurringPricing: {
      discount: "AppSubscriptionDiscount",
      interval: "AppPricingInterval",
      price: "MoneyV2"
    },
    AppRevenueAttributionRecord: {
      amount: "MoneyV2",
      capturedAt: "DateTime",
      createdAt: "DateTime",
      id: "ID",
      idempotencyKey: "String",
      test: "Boolean",
      type: "AppRevenueAttributionType"
    },
    AppRevenueAttributionRecordConnection: {
      edges: "AppRevenueAttributionRecordEdge",
      nodes: "AppRevenueAttributionRecord",
      pageInfo: "PageInfo"
    },
    AppRevenueAttributionRecordCreatePayload: {
      appRevenueAttributionRecord: "AppRevenueAttributionRecord",
      userErrors: "AppRevenueAttributionRecordCreateUserError"
    },
    AppRevenueAttributionRecordCreateUserError: {
      code: "AppRevenueAttributionRecordCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    AppRevenueAttributionRecordDeletePayload: {
      deletedId: "ID",
      userErrors: "AppRevenueAttributionRecordDeleteUserError"
    },
    AppRevenueAttributionRecordDeleteUserError: {
      code: "AppRevenueAttributionRecordDeleteUserErrorCode",
      field: "String",
      message: "String"
    },
    AppRevenueAttributionRecordEdge: {
      cursor: "String",
      node: "AppRevenueAttributionRecord"
    },
    AppSubscription: {
      createdAt: "DateTime",
      currentPeriodEnd: "DateTime",
      id: "ID",
      lineItems: "AppSubscriptionLineItem",
      name: "String",
      returnUrl: "URL",
      status: "AppSubscriptionStatus",
      test: "Boolean",
      trialDays: "Int"
    },
    AppSubscriptionCancelPayload: {
      appSubscription: "AppSubscription",
      userErrors: "UserError"
    },
    AppSubscriptionConnection: {
      edges: "AppSubscriptionEdge",
      nodes: "AppSubscription",
      pageInfo: "PageInfo"
    },
    AppSubscriptionCreatePayload: {
      appSubscription: "AppSubscription",
      confirmationUrl: "URL",
      userErrors: "UserError"
    },
    AppSubscriptionDiscount: {
      durationLimitInIntervals: "Int",
      priceAfterDiscount: "MoneyV2",
      remainingDurationInIntervals: "Int",
      value: "AppSubscriptionDiscountValue"
    },
    AppSubscriptionDiscountAmount: {
      amount: "MoneyV2"
    },
    AppSubscriptionDiscountPercentage: {
      percentage: "Float"
    },
    AppSubscriptionDiscountValue: {
      "...on AppSubscriptionDiscountAmount": "AppSubscriptionDiscountAmount",
      "...on AppSubscriptionDiscountPercentage": "AppSubscriptionDiscountPercentage"
    },
    AppSubscriptionEdge: {
      cursor: "String",
      node: "AppSubscription"
    },
    AppSubscriptionLineItem: {
      id: "ID",
      plan: "AppPlanV2",
      usageRecords: "AppUsageRecordConnection"
    },
    AppSubscriptionLineItemUpdatePayload: {
      appSubscription: "AppSubscription",
      confirmationUrl: "URL",
      userErrors: "UserError"
    },
    AppSubscriptionTrialExtendPayload: {
      appSubscription: "AppSubscription",
      userErrors: "AppSubscriptionTrialExtendUserError"
    },
    AppSubscriptionTrialExtendUserError: {
      code: "AppSubscriptionTrialExtendUserErrorCode",
      field: "String",
      message: "String"
    },
    AppUsagePricing: {
      balanceUsed: "MoneyV2",
      cappedAmount: "MoneyV2",
      interval: "AppPricingInterval",
      terms: "String"
    },
    AppUsageRecord: {
      createdAt: "DateTime",
      description: "String",
      id: "ID",
      price: "MoneyV2",
      subscriptionLineItem: "AppSubscriptionLineItem"
    },
    AppUsageRecordConnection: {
      edges: "AppUsageRecordEdge",
      nodes: "AppUsageRecord",
      pageInfo: "PageInfo"
    },
    AppUsageRecordCreatePayload: {
      appUsageRecord: "AppUsageRecord",
      userErrors: "UserError"
    },
    AppUsageRecordEdge: {
      cursor: "String",
      node: "AppUsageRecord"
    },
    Attribute: {
      key: "String",
      value: "String"
    },
    AutomaticDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      index: "Int",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      title: "String",
      value: "PricingValue"
    },
    AvailableChannelDefinitionsByChannel: {
      channelDefinitions: "ChannelDefinition",
      channelName: "String"
    },
    BasicEvent: {
      appTitle: "String",
      attributeToApp: "Boolean",
      attributeToUser: "Boolean",
      createdAt: "DateTime",
      criticalAlert: "Boolean",
      id: "ID",
      message: "FormattedString"
    },
    BillingAttemptUserError: {
      code: "BillingAttemptUserErrorCode",
      field: "String",
      message: "String"
    },
    BulkMutationUserError: {
      code: "BulkMutationErrorCode",
      field: "String",
      message: "String"
    },
    BulkOperation: {
      completedAt: "DateTime",
      createdAt: "DateTime",
      errorCode: "BulkOperationErrorCode",
      fileSize: "UnsignedInt64",
      id: "ID",
      objectCount: "UnsignedInt64",
      partialDataUrl: "URL",
      query: "String",
      rootObjectCount: "UnsignedInt64",
      status: "BulkOperationStatus",
      type: "BulkOperationType",
      url: "URL"
    },
    BulkOperationCancelPayload: {
      bulkOperation: "BulkOperation",
      userErrors: "UserError"
    },
    BulkOperationRunMutationPayload: {
      bulkOperation: "BulkOperation",
      userErrors: "BulkMutationUserError"
    },
    BulkOperationRunQueryPayload: {
      bulkOperation: "BulkOperation",
      userErrors: "UserError"
    },
    BulkProductResourceFeedbackCreatePayload: {
      feedback: "ProductResourceFeedback",
      userErrors: "BulkProductResourceFeedbackCreateUserError"
    },
    BulkProductResourceFeedbackCreateUserError: {
      code: "BulkProductResourceFeedbackCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    BusinessCustomerUserError: {
      code: "BusinessCustomerErrorCode",
      field: "String",
      message: "String"
    },
    BuyerExperienceConfiguration: {
      checkoutToDraft: "Boolean",
      payNowOnly: "Boolean",
      paymentTermsTemplate: "PaymentTermsTemplate"
    },
    CalculatedAutomaticDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      appliedTo: "DiscountApplicationLevel",
      description: "String",
      id: "ID",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    CalculatedDiscountAllocation: {
      allocatedAmountSet: "MoneyBag",
      discountApplication: "CalculatedDiscountApplication"
    },
    CalculatedDiscountApplication: {
      "...on CalculatedAutomaticDiscountApplication": "CalculatedAutomaticDiscountApplication",
      "...on CalculatedDiscountCodeApplication": "CalculatedDiscountCodeApplication",
      "...on CalculatedManualDiscountApplication": "CalculatedManualDiscountApplication",
      "...on CalculatedScriptDiscountApplication": "CalculatedScriptDiscountApplication",
      allocationMethod: "DiscountApplicationAllocationMethod",
      appliedTo: "DiscountApplicationLevel",
      description: "String",
      id: "ID",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    CalculatedDiscountApplicationConnection: {
      edges: "CalculatedDiscountApplicationEdge",
      nodes: "CalculatedDiscountApplication",
      pageInfo: "PageInfo"
    },
    CalculatedDiscountApplicationEdge: {
      cursor: "String",
      node: "CalculatedDiscountApplication"
    },
    CalculatedDiscountCodeApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      appliedTo: "DiscountApplicationLevel",
      code: "String",
      description: "String",
      id: "ID",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    CalculatedDraftOrder: {
      appliedDiscount: "DraftOrderAppliedDiscount",
      availableShippingRates: "ShippingRate",
      billingAddressMatchesShippingAddress: "Boolean",
      currencyCode: "CurrencyCode",
      customer: "Customer",
      lineItems: "CalculatedDraftOrderLineItem",
      lineItemsSubtotalPrice: "MoneyBag",
      marketName: "String",
      marketRegionCountryCode: "CountryCode",
      phone: "String",
      presentmentCurrencyCode: "CurrencyCode",
      purchasingEntity: "PurchasingEntity",
      shippingLine: "ShippingLine",
      subtotalPrice: "Money",
      subtotalPriceSet: "MoneyBag",
      taxLines: "TaxLine",
      totalDiscountsSet: "MoneyBag",
      totalLineItemsPriceSet: "MoneyBag",
      totalPrice: "Money",
      totalPriceSet: "MoneyBag",
      totalShippingPrice: "Money",
      totalShippingPriceSet: "MoneyBag",
      totalTax: "Money",
      totalTaxSet: "MoneyBag"
    },
    CalculatedDraftOrderLineItem: {
      appliedDiscount: "DraftOrderAppliedDiscount",
      custom: "Boolean",
      customAttributes: "Attribute",
      customAttributesV2: "TypedAttribute",
      discountedTotal: "MoneyV2",
      discountedTotalSet: "MoneyBag",
      discountedUnitPrice: "MoneyV2",
      discountedUnitPriceSet: "MoneyBag",
      fulfillmentService: "FulfillmentService",
      image: "Image",
      isGiftCard: "Boolean",
      name: "String",
      originalTotal: "MoneyV2",
      originalTotalSet: "MoneyBag",
      originalUnitPrice: "MoneyV2",
      originalUnitPriceSet: "MoneyBag",
      product: "Product",
      quantity: "Int",
      requiresShipping: "Boolean",
      sku: "String",
      taxable: "Boolean",
      title: "String",
      totalDiscount: "MoneyV2",
      totalDiscountSet: "MoneyBag",
      variant: "ProductVariant",
      variantTitle: "String",
      vendor: "String",
      weight: "Weight"
    },
    CalculatedLineItem: {
      calculatedDiscountAllocations: "CalculatedDiscountAllocation",
      customAttributes: "Attribute",
      discountAllocations: "DiscountAllocation",
      discountedUnitPriceSet: "MoneyBag",
      editableQuantity: "Int",
      editableQuantityBeforeChanges: "Int",
      editableSubtotalSet: "MoneyBag",
      hasStagedLineItemDiscount: "Boolean",
      id: "ID",
      image: "Image",
      originalUnitPriceSet: "MoneyBag",
      quantity: "Int",
      restockable: "Boolean",
      restocking: "Boolean",
      sku: "String",
      stagedChanges: "OrderStagedChange",
      title: "String",
      uneditableSubtotalSet: "MoneyBag",
      variant: "ProductVariant",
      variantTitle: "String"
    },
    CalculatedLineItemConnection: {
      edges: "CalculatedLineItemEdge",
      nodes: "CalculatedLineItem",
      pageInfo: "PageInfo"
    },
    CalculatedLineItemEdge: {
      cursor: "String",
      node: "CalculatedLineItem"
    },
    CalculatedManualDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      appliedTo: "DiscountApplicationLevel",
      description: "String",
      id: "ID",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    CalculatedOrder: {
      addedDiscountApplications: "CalculatedDiscountApplicationConnection",
      addedLineItems: "CalculatedLineItemConnection",
      cartDiscountAmountSet: "MoneyBag",
      committed: "Boolean",
      id: "ID",
      lineItems: "CalculatedLineItemConnection",
      notificationPreviewHtml: "HTML",
      notificationPreviewTitle: "String",
      order: "Order",
      originalOrder: "Order",
      stagedChanges: "OrderStagedChangeConnection",
      subtotalLineItemsQuantity: "Int",
      subtotalPriceSet: "MoneyBag",
      taxLines: "TaxLine",
      totalOutstandingSet: "MoneyBag",
      totalPriceSet: "MoneyBag"
    },
    CalculatedScriptDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      appliedTo: "DiscountApplicationLevel",
      description: "String",
      id: "ID",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    CardPaymentDetails: {
      avsResultCode: "String",
      bin: "String",
      company: "String",
      cvvResultCode: "String",
      expirationMonth: "Int",
      expirationYear: "Int",
      name: "String",
      number: "String",
      wallet: "DigitalWallet"
    },
    Channel: {
      app: "App",
      collectionPublicationsV3: "ResourcePublicationConnection",
      collections: "CollectionConnection",
      handle: "String",
      hasCollection: "Boolean",
      id: "ID",
      name: "String",
      navigationItems: "NavigationItem",
      overviewPath: "URL",
      productPublications: "ProductPublicationConnection",
      productPublicationsV3: "ResourcePublicationConnection",
      products: "ProductConnection",
      supportsFuturePublishing: "Boolean"
    },
    ChannelConnection: {
      edges: "ChannelEdge",
      nodes: "Channel",
      pageInfo: "PageInfo"
    },
    ChannelDefinition: {
      channelName: "String",
      handle: "String",
      id: "ID",
      subChannelName: "String",
      svgIcon: "String"
    },
    ChannelEdge: {
      cursor: "String",
      node: "Channel"
    },
    ChannelInformation: {
      app: "App",
      channelDefinition: "ChannelDefinition",
      channelId: "ID",
      id: "ID"
    },
    CheckoutProfile: {
      createdAt: "DateTime",
      editedAt: "DateTime",
      id: "ID",
      isPublished: "Boolean",
      name: "String",
      updatedAt: "DateTime"
    },
    CheckoutProfileConnection: {
      edges: "CheckoutProfileEdge",
      nodes: "CheckoutProfile",
      pageInfo: "PageInfo"
    },
    CheckoutProfileEdge: {
      cursor: "String",
      node: "CheckoutProfile"
    },
    Collection: {
      availablePublicationCount: "Int",
      description: "String",
      descriptionHtml: "HTML",
      feedback: "ResourceFeedback",
      handle: "String",
      hasProduct: "Boolean",
      id: "ID",
      image: "Image",
      legacyResourceId: "UnsignedInt64",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      products: "ProductConnection",
      productsCount: "Int",
      publicationCount: "Int",
      publications: "CollectionPublicationConnection",
      publishedOnChannel: "Boolean",
      publishedOnCurrentChannel: "Boolean",
      publishedOnCurrentPublication: "Boolean",
      publishedOnPublication: "Boolean",
      resourcePublications: "ResourcePublicationConnection",
      resourcePublicationsV2: "ResourcePublicationV2Connection",
      ruleSet: "CollectionRuleSet",
      seo: "SEO",
      sortOrder: "CollectionSortOrder",
      storefrontId: "StorefrontID",
      templateSuffix: "String",
      title: "String",
      translations: "PublishedTranslation",
      unpublishedChannels: "ChannelConnection",
      unpublishedPublications: "PublicationConnection",
      updatedAt: "DateTime"
    },
    CollectionAddProductsPayload: {
      collection: "Collection",
      userErrors: "UserError"
    },
    CollectionAddProductsV2Payload: {
      job: "Job",
      userErrors: "CollectionAddProductsV2UserError"
    },
    CollectionAddProductsV2UserError: {
      code: "CollectionAddProductsV2UserErrorCode",
      field: "String",
      message: "String"
    },
    CollectionConnection: {
      edges: "CollectionEdge",
      nodes: "Collection",
      pageInfo: "PageInfo"
    },
    CollectionCreatePayload: {
      collection: "Collection",
      userErrors: "UserError"
    },
    CollectionDeletePayload: {
      deletedCollectionId: "ID",
      shop: "Shop",
      userErrors: "UserError"
    },
    CollectionEdge: {
      cursor: "String",
      node: "Collection"
    },
    CollectionPublication: {
      channel: "Channel",
      collection: "Collection",
      isPublished: "Boolean",
      publication: "Publication",
      publishDate: "DateTime"
    },
    CollectionPublicationConnection: {
      edges: "CollectionPublicationEdge",
      nodes: "CollectionPublication",
      pageInfo: "PageInfo"
    },
    CollectionPublicationEdge: {
      cursor: "String",
      node: "CollectionPublication"
    },
    CollectionPublishPayload: {
      collection: "Collection",
      collectionPublications: "CollectionPublication",
      shop: "Shop",
      userErrors: "UserError"
    },
    CollectionRemoveProductsPayload: {
      job: "Job",
      userErrors: "UserError"
    },
    CollectionReorderProductsPayload: {
      job: "Job",
      userErrors: "UserError"
    },
    CollectionRule: {
      column: "CollectionRuleColumn",
      condition: "String",
      conditionObject: "CollectionRuleConditionObject",
      relation: "CollectionRuleRelation"
    },
    CollectionRuleConditionObject: {
      "...on CollectionRuleMetafieldCondition": "CollectionRuleMetafieldCondition",
      "...on CollectionRuleProductCategoryCondition": "CollectionRuleProductCategoryCondition",
      "...on CollectionRuleTextCondition": "CollectionRuleTextCondition"
    },
    CollectionRuleConditions: {
      allowedRelations: "CollectionRuleRelation",
      defaultRelation: "CollectionRuleRelation",
      ruleObject: "CollectionRuleConditionsRuleObject",
      ruleType: "CollectionRuleColumn"
    },
    CollectionRuleConditionsRuleObject: {
      "...on CollectionRuleMetafieldCondition": "CollectionRuleMetafieldCondition"
    },
    CollectionRuleMetafieldCondition: {
      metafieldDefinition: "MetafieldDefinition"
    },
    CollectionRuleProductCategoryCondition: {
      value: "ProductTaxonomyNode"
    },
    CollectionRuleSet: {
      appliedDisjunctively: "Boolean",
      rules: "CollectionRule"
    },
    CollectionRuleTextCondition: {
      value: "String"
    },
    CollectionUnpublishPayload: {
      collection: "Collection",
      shop: "Shop",
      userErrors: "UserError"
    },
    CollectionUpdatePayload: {
      collection: "Collection",
      job: "Job",
      userErrors: "UserError"
    },
    CommentEvent: {
      appTitle: "String",
      attachments: "CommentEventAttachment",
      attributeToApp: "Boolean",
      attributeToUser: "Boolean",
      author: "StaffMember",
      canDelete: "Boolean",
      canEdit: "Boolean",
      createdAt: "DateTime",
      criticalAlert: "Boolean",
      edited: "Boolean",
      embed: "CommentEventEmbed",
      id: "ID",
      message: "FormattedString",
      rawMessage: "String",
      subject: "CommentEventSubject"
    },
    CommentEventAttachment: {
      fileExtension: "String",
      id: "ID",
      image: "Image",
      name: "String",
      size: "Int",
      url: "URL"
    },
    CommentEventEmbed: {
      "...on Customer": "Customer",
      "...on DraftOrder": "DraftOrder",
      "...on Order": "Order",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant"
    },
    CommentEventSubject: {
      "...on Company": "Company",
      "...on CompanyLocation": "CompanyLocation",
      "...on Customer": "Customer",
      "...on DraftOrder": "DraftOrder",
      "...on Order": "Order",
      "...on PriceRule": "PriceRule",
      hasTimelineComment: "Boolean",
      id: "ID"
    },
    CompaniesDeletePayload: {
      deletedCompanyIds: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    Company: {
      contactCount: "Int",
      contactRoles: "CompanyContactRoleConnection",
      contacts: "CompanyContactConnection",
      createdAt: "DateTime",
      customerSince: "DateTime",
      defaultCursor: "String",
      defaultRole: "CompanyContactRole",
      draftOrders: "DraftOrderConnection",
      events: "EventConnection",
      externalId: "String",
      hasTimelineComment: "Boolean",
      id: "ID",
      lifetimeDuration: "String",
      locationCount: "Int",
      locations: "CompanyLocationConnection",
      mainContact: "CompanyContact",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      name: "String",
      note: "String",
      orderCount: "Int",
      orders: "OrderConnection",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      totalSpent: "MoneyV2",
      updatedAt: "DateTime"
    },
    CompanyAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      companyName: "String",
      country: "String",
      countryCode: "CountryCode",
      createdAt: "DateTime",
      formattedAddress: "String",
      formattedArea: "String",
      id: "ID",
      phone: "String",
      province: "String",
      recipient: "String",
      updatedAt: "DateTime",
      zip: "String",
      zoneCode: "String"
    },
    CompanyAddressDeletePayload: {
      deletedAddressId: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyAssignCustomerAsContactPayload: {
      companyContact: "CompanyContact",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyAssignMainContactPayload: {
      company: "Company",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyConnection: {
      edges: "CompanyEdge",
      nodes: "Company",
      pageInfo: "PageInfo"
    },
    CompanyContact: {
      company: "Company",
      createdAt: "DateTime",
      customer: "Customer",
      draftOrders: "DraftOrderConnection",
      id: "ID",
      isMainContact: "Boolean",
      lifetimeDuration: "String",
      locale: "String",
      orders: "OrderConnection",
      roleAssignments: "CompanyContactRoleAssignmentConnection",
      title: "String",
      updatedAt: "DateTime"
    },
    CompanyContactAssignRolePayload: {
      companyContactRoleAssignment: "CompanyContactRoleAssignment",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyContactAssignRolesPayload: {
      roleAssignments: "CompanyContactRoleAssignment",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyContactConnection: {
      edges: "CompanyContactEdge",
      nodes: "CompanyContact",
      pageInfo: "PageInfo"
    },
    CompanyContactCreatePayload: {
      companyContact: "CompanyContact",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyContactDeletePayload: {
      deletedCompanyContactId: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyContactEdge: {
      cursor: "String",
      node: "CompanyContact"
    },
    CompanyContactRevokeRolePayload: {
      revokedCompanyContactRoleAssignmentId: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyContactRevokeRolesPayload: {
      revokedRoleAssignmentIds: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyContactRole: {
      id: "ID",
      name: "String",
      note: "String"
    },
    CompanyContactRoleAssignment: {
      company: "Company",
      companyContact: "CompanyContact",
      companyLocation: "CompanyLocation",
      createdAt: "DateTime",
      id: "ID",
      role: "CompanyContactRole",
      updatedAt: "DateTime"
    },
    CompanyContactRoleAssignmentConnection: {
      edges: "CompanyContactRoleAssignmentEdge",
      nodes: "CompanyContactRoleAssignment",
      pageInfo: "PageInfo"
    },
    CompanyContactRoleAssignmentEdge: {
      cursor: "String",
      node: "CompanyContactRoleAssignment"
    },
    CompanyContactRoleConnection: {
      edges: "CompanyContactRoleEdge",
      nodes: "CompanyContactRole",
      pageInfo: "PageInfo"
    },
    CompanyContactRoleEdge: {
      cursor: "String",
      node: "CompanyContactRole"
    },
    CompanyContactUpdatePayload: {
      companyContact: "CompanyContact",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyContactsDeletePayload: {
      deletedCompanyContactIds: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyCreatePayload: {
      company: "Company",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyDeletePayload: {
      deletedCompanyId: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyEdge: {
      cursor: "String",
      node: "Company"
    },
    CompanyLocation: {
      billingAddress: "CompanyAddress",
      buyerExperienceConfiguration: "BuyerExperienceConfiguration",
      company: "Company",
      createdAt: "DateTime",
      currency: "CurrencyCode",
      defaultCursor: "String",
      draftOrders: "DraftOrderConnection",
      events: "EventConnection",
      externalId: "String",
      hasTimelineComment: "Boolean",
      id: "ID",
      locale: "String",
      market: "Market",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      name: "String",
      note: "String",
      orderCount: "Int",
      orders: "OrderConnection",
      phone: "String",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      roleAssignments: "CompanyContactRoleAssignmentConnection",
      shippingAddress: "CompanyAddress",
      taxExemptions: "TaxExemption",
      taxRegistrationId: "String",
      totalSpent: "MoneyV2",
      updatedAt: "DateTime"
    },
    CompanyLocationAssignAddressPayload: {
      addresses: "CompanyAddress",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationAssignRolesPayload: {
      roleAssignments: "CompanyContactRoleAssignment",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationAssignTaxExemptionsPayload: {
      companyLocation: "CompanyLocation",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationConnection: {
      edges: "CompanyLocationEdge",
      nodes: "CompanyLocation",
      pageInfo: "PageInfo"
    },
    CompanyLocationCreatePayload: {
      companyLocation: "CompanyLocation",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationCreateTaxRegistrationPayload: {
      companyLocation: "CompanyLocation",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationDeletePayload: {
      deletedCompanyLocationId: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationEdge: {
      cursor: "String",
      node: "CompanyLocation"
    },
    CompanyLocationRevokeRolesPayload: {
      revokedRoleAssignmentIds: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationRevokeTaxExemptionsPayload: {
      companyLocation: "CompanyLocation",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationRevokeTaxRegistrationPayload: {
      companyLocation: "CompanyLocation",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationUpdatePayload: {
      companyLocation: "CompanyLocation",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyLocationsDeletePayload: {
      deletedCompanyLocationIds: "ID",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyRevokeMainContactPayload: {
      company: "Company",
      userErrors: "BusinessCustomerUserError"
    },
    CompanyUpdatePayload: {
      company: "Company",
      userErrors: "BusinessCustomerUserError"
    },
    CountriesInShippingZones: {
      countryCodes: "CountryCode",
      includeRestOfWorld: "Boolean"
    },
    CountryHarmonizedSystemCode: {
      countryCode: "CountryCode",
      harmonizedSystemCode: "String"
    },
    CountryHarmonizedSystemCodeConnection: {
      edges: "CountryHarmonizedSystemCodeEdge",
      nodes: "CountryHarmonizedSystemCode",
      pageInfo: "PageInfo"
    },
    CountryHarmonizedSystemCodeEdge: {
      cursor: "String",
      node: "CountryHarmonizedSystemCode"
    },
    CurrencyFormats: {
      moneyFormat: "FormattedString",
      moneyInEmailsFormat: "String",
      moneyWithCurrencyFormat: "FormattedString",
      moneyWithCurrencyInEmailsFormat: "String"
    },
    CurrencySetting: {
      currencyCode: "CurrencyCode",
      currencyName: "String",
      enabled: "Boolean",
      rateUpdatedAt: "DateTime"
    },
    CurrencySettingConnection: {
      edges: "CurrencySettingEdge",
      nodes: "CurrencySetting",
      pageInfo: "PageInfo"
    },
    CurrencySettingEdge: {
      cursor: "String",
      node: "CurrencySetting"
    },
    Customer: {
      acceptsMarketing: "Boolean",
      acceptsMarketingUpdatedAt: "DateTime",
      addresses: "MailingAddress",
      amountSpent: "MoneyV2",
      averageOrderAmount: "Money",
      averageOrderAmountV2: "MoneyV2",
      canDelete: "Boolean",
      companyContactProfiles: "CompanyContact",
      createdAt: "DateTime",
      defaultAddress: "MailingAddress",
      displayName: "String",
      email: "String",
      emailMarketingConsent: "CustomerEmailMarketingConsentState",
      events: "EventConnection",
      firstName: "String",
      hasTimelineComment: "Boolean",
      id: "ID",
      image: "Image",
      lastName: "String",
      lastOrder: "Order",
      legacyResourceId: "UnsignedInt64",
      lifetimeDuration: "String",
      locale: "String",
      market: "Market",
      marketingOptInLevel: "CustomerMarketingOptInLevel",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      multipassIdentifier: "String",
      note: "String",
      numberOfOrders: "UnsignedInt64",
      orders: "OrderConnection",
      paymentMethods: "CustomerPaymentMethodConnection",
      phone: "String",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      productSubscriberStatus: "CustomerProductSubscriberStatus",
      smsMarketingConsent: "CustomerSmsMarketingConsentState",
      state: "CustomerState",
      statistics: "CustomerStatistics",
      subscriptionContracts: "SubscriptionContractConnection",
      tags: "String",
      taxExempt: "Boolean",
      taxExemptions: "TaxExemption",
      unsubscribeUrl: "URL",
      updatedAt: "DateTime",
      validEmailAddress: "Boolean",
      verifiedEmail: "Boolean"
    },
    CustomerAddTaxExemptionsPayload: {
      customer: "Customer",
      userErrors: "UserError"
    },
    CustomerConnection: {
      edges: "CustomerEdge",
      nodes: "Customer",
      pageInfo: "PageInfo"
    },
    CustomerCreatePayload: {
      customer: "Customer",
      userErrors: "UserError"
    },
    CustomerCreditCard: {
      billingAddress: "CustomerCreditCardBillingAddress",
      brand: "String",
      expiresSoon: "Boolean",
      expiryMonth: "Int",
      expiryYear: "Int",
      firstDigits: "String",
      isRevocable: "Boolean",
      lastDigits: "String",
      maskedNumber: "String",
      name: "String",
      source: "String",
      virtualLastDigits: "String"
    },
    CustomerCreditCardBillingAddress: {
      address1: "String",
      city: "String",
      country: "String",
      countryCode: "CountryCode",
      firstName: "String",
      lastName: "String",
      province: "String",
      provinceCode: "String",
      zip: "String"
    },
    CustomerDeletePayload: {
      deletedCustomerId: "ID",
      shop: "Shop",
      userErrors: "UserError"
    },
    CustomerEdge: {
      cursor: "String",
      node: "Customer"
    },
    CustomerEmailAddress: {
      emailAddress: "String",
      marketingState: "CustomerEmailAddressMarketingState",
      marketingUnsubscribeUrl: "URL",
      openTrackingLevel: "CustomerEmailAddressOpenTrackingLevel",
      openTrackingUrl: "URL"
    },
    CustomerEmailMarketingConsentState: {
      consentUpdatedAt: "DateTime",
      marketingOptInLevel: "CustomerMarketingOptInLevel",
      marketingState: "CustomerEmailMarketingState"
    },
    CustomerEmailMarketingConsentUpdatePayload: {
      customer: "Customer",
      userErrors: "CustomerEmailMarketingConsentUpdateUserError"
    },
    CustomerEmailMarketingConsentUpdateUserError: {
      code: "CustomerEmailMarketingConsentUpdateUserErrorCode",
      field: "String",
      message: "String"
    },
    CustomerGenerateAccountActivationUrlPayload: {
      accountActivationUrl: "URL",
      userErrors: "UserError"
    },
    CustomerJourney: {
      customerOrderIndex: "Int",
      daysToConversion: "Int",
      firstVisit: "CustomerVisit",
      lastVisit: "CustomerVisit",
      moments: "CustomerMoment"
    },
    CustomerJourneySummary: {
      customerOrderIndex: "Int",
      daysToConversion: "Int",
      firstVisit: "CustomerVisit",
      lastVisit: "CustomerVisit",
      moments: "CustomerMomentConnection",
      momentsCount: "Int",
      ready: "Boolean"
    },
    CustomerMoment: {
      "...on CustomerVisit": "CustomerVisit",
      occurredAt: "DateTime"
    },
    CustomerMomentConnection: {
      edges: "CustomerMomentEdge",
      nodes: "CustomerMoment",
      pageInfo: "PageInfo"
    },
    CustomerMomentEdge: {
      cursor: "String",
      node: "CustomerMoment"
    },
    CustomerPaymentInstrument: {
      "...on CustomerCreditCard": "CustomerCreditCard",
      "...on CustomerPaypalBillingAgreement": "CustomerPaypalBillingAgreement",
      "...on CustomerShopPayAgreement": "CustomerShopPayAgreement"
    },
    CustomerPaymentInstrumentBillingAddress: {
      address1: "String",
      city: "String",
      country: "String",
      countryCode: "CountryCode",
      name: "String",
      province: "String",
      provinceCode: "String",
      zip: "String"
    },
    CustomerPaymentMethod: {
      customer: "Customer",
      id: "ID",
      instrument: "CustomerPaymentInstrument",
      revokedAt: "DateTime",
      revokedReason: "CustomerPaymentMethodRevocationReason",
      subscriptionContracts: "SubscriptionContractConnection"
    },
    CustomerPaymentMethodConnection: {
      edges: "CustomerPaymentMethodEdge",
      nodes: "CustomerPaymentMethod",
      pageInfo: "PageInfo"
    },
    CustomerPaymentMethodCreditCardCreatePayload: {
      customerPaymentMethod: "CustomerPaymentMethod",
      userErrors: "UserError"
    },
    CustomerPaymentMethodCreditCardUpdatePayload: {
      customerPaymentMethod: "CustomerPaymentMethod",
      userErrors: "UserError"
    },
    CustomerPaymentMethodEdge: {
      cursor: "String",
      node: "CustomerPaymentMethod"
    },
    CustomerPaymentMethodGetUpdateUrlPayload: {
      updatePaymentMethodUrl: "URL",
      userErrors: "CustomerPaymentMethodGetUpdateUrlUserError"
    },
    CustomerPaymentMethodGetUpdateUrlUserError: {
      code: "CustomerPaymentMethodGetUpdateUrlUserErrorCode",
      field: "String",
      message: "String"
    },
    CustomerPaymentMethodPaypalBillingAgreementCreatePayload: {
      customerPaymentMethod: "CustomerPaymentMethod",
      userErrors: "CustomerPaymentMethodUserError"
    },
    CustomerPaymentMethodPaypalBillingAgreementUpdatePayload: {
      customerPaymentMethod: "CustomerPaymentMethod",
      userErrors: "CustomerPaymentMethodUserError"
    },
    CustomerPaymentMethodRemoteCreatePayload: {
      customerPaymentMethod: "CustomerPaymentMethod",
      userErrors: "CustomerPaymentMethodRemoteUserError"
    },
    CustomerPaymentMethodRemoteCreditCardCreatePayload: {
      customerPaymentMethod: "CustomerPaymentMethod",
      userErrors: "CustomerPaymentMethodUserError"
    },
    CustomerPaymentMethodRemoteUserError: {
      code: "CustomerPaymentMethodRemoteUserErrorCode",
      field: "String",
      message: "String"
    },
    CustomerPaymentMethodRevokePayload: {
      revokedCustomerPaymentMethodId: "ID",
      userErrors: "UserError"
    },
    CustomerPaymentMethodSendUpdateEmailPayload: {
      customer: "Customer",
      userErrors: "UserError"
    },
    CustomerPaymentMethodUserError: {
      code: "CustomerPaymentMethodUserErrorCode",
      field: "String",
      message: "String"
    },
    CustomerPaypalBillingAgreement: {
      billingAddress: "CustomerPaymentInstrumentBillingAddress",
      inactive: "Boolean",
      isRevocable: "Boolean",
      paypalAccountEmail: "String"
    },
    CustomerPhoneNumber: {
      marketingState: "CustomerSmsMarketingState",
      phoneNumber: "String"
    },
    CustomerRemoveTaxExemptionsPayload: {
      customer: "Customer",
      userErrors: "UserError"
    },
    CustomerReplaceTaxExemptionsPayload: {
      customer: "Customer",
      userErrors: "UserError"
    },
    CustomerSegmentMember: {
      amountSpent: "MoneyV2",
      defaultAddress: "MailingAddress",
      defaultEmailAddress: "CustomerEmailAddress",
      defaultPhoneNumber: "CustomerPhoneNumber",
      displayName: "String",
      firstName: "String",
      id: "ID",
      lastName: "String",
      lastOrderId: "ID",
      note: "String",
      numberOfOrders: "UnsignedInt64"
    },
    CustomerSegmentMemberConnection: {
      edges: "CustomerSegmentMemberEdge",
      pageInfo: "PageInfo",
      statistics: "SegmentStatistics"
    },
    CustomerSegmentMemberEdge: {
      cursor: "String",
      node: "CustomerSegmentMember"
    },
    CustomerSegmentMembersQuery: {
      currentCount: "Int",
      done: "Boolean",
      id: "ID"
    },
    CustomerSegmentMembersQueryCreatePayload: {
      customerSegmentMembersQuery: "CustomerSegmentMembersQuery",
      userErrors: "CustomerSegmentMembersQueryUserError"
    },
    CustomerSegmentMembersQueryUserError: {
      code: "CustomerSegmentMembersQueryUserErrorCode",
      field: "String",
      message: "String"
    },
    CustomerShopPayAgreement: {
      expiresSoon: "Boolean",
      expiryMonth: "Int",
      expiryYear: "Int",
      inactive: "Boolean",
      isRevocable: "Boolean",
      lastDigits: "String",
      maskedNumber: "String",
      name: "String"
    },
    CustomerSmsMarketingConsentError: {
      code: "CustomerSmsMarketingConsentErrorCode",
      field: "String",
      message: "String"
    },
    CustomerSmsMarketingConsentState: {
      consentCollectedFrom: "CustomerConsentCollectedFrom",
      consentUpdatedAt: "DateTime",
      marketingOptInLevel: "CustomerMarketingOptInLevel",
      marketingState: "CustomerSmsMarketingState"
    },
    CustomerSmsMarketingConsentUpdatePayload: {
      customer: "Customer",
      userErrors: "CustomerSmsMarketingConsentError"
    },
    CustomerStatistics: {
      predictedSpendTier: "CustomerPredictedSpendTier"
    },
    CustomerUpdateDefaultAddressPayload: {
      customer: "Customer",
      userErrors: "UserError"
    },
    CustomerUpdatePayload: {
      customer: "Customer",
      userErrors: "UserError"
    },
    CustomerVisit: {
      id: "ID",
      landingPage: "URL",
      landingPageHtml: "HTML",
      marketingEvent: "MarketingEvent",
      occurredAt: "DateTime",
      referralCode: "String",
      referralInfoHtml: "FormattedString",
      referrerUrl: "URL",
      source: "String",
      sourceDescription: "String",
      sourceType: "MarketingTactic",
      utmParameters: "UTMParameters"
    },
    CustomerVisitProductInfo: {
      product: "Product",
      quantity: "Int",
      variant: "ProductVariant"
    },
    CustomerVisitProductInfoConnection: {
      edges: "CustomerVisitProductInfoEdge",
      nodes: "CustomerVisitProductInfo",
      pageInfo: "PageInfo"
    },
    CustomerVisitProductInfoEdge: {
      cursor: "String",
      node: "CustomerVisitProductInfo"
    },
    Date: `scalar.Date`,
    DateTime: `scalar.DateTime`,
    Decimal: `scalar.Decimal`,
    DelegateAccessToken: {
      accessScopes: "String",
      accessToken: "String",
      createdAt: "DateTime"
    },
    DelegateAccessTokenCreatePayload: {
      delegateAccessToken: "DelegateAccessToken",
      shop: "Shop",
      userErrors: "DelegateAccessTokenCreateUserError"
    },
    DelegateAccessTokenCreateUserError: {
      code: "DelegateAccessTokenCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    DeletionEvent: {
      occurredAt: "DateTime",
      subjectId: "ID",
      subjectType: "DeletionEventSubjectType"
    },
    DeletionEventConnection: {
      edges: "DeletionEventEdge",
      nodes: "DeletionEvent",
      pageInfo: "PageInfo"
    },
    DeletionEventEdge: {
      cursor: "String",
      node: "DeletionEvent"
    },
    DeliveryAvailableService: {
      countries: "DeliveryCountryCodesOrRestOfWorld",
      name: "String"
    },
    DeliveryCarrierService: {
      availableServicesForCountries: "DeliveryAvailableService",
      formattedName: "String",
      icon: "Image",
      id: "ID",
      name: "String"
    },
    DeliveryCarrierServiceAndLocations: {
      carrierService: "DeliveryCarrierService",
      locations: "Location"
    },
    DeliveryCondition: {
      conditionCriteria: "DeliveryConditionCriteria",
      field: "DeliveryConditionField",
      id: "ID",
      operator: "DeliveryConditionOperator"
    },
    DeliveryConditionCriteria: {
      "...on MoneyV2": "MoneyV2",
      "...on Weight": "Weight"
    },
    DeliveryCountry: {
      code: "DeliveryCountryCodeOrRestOfWorld",
      id: "ID",
      name: "String",
      provinces: "DeliveryProvince",
      translatedName: "String"
    },
    DeliveryCountryAndZone: {
      country: "DeliveryCountry",
      zone: "String"
    },
    DeliveryCountryCodeOrRestOfWorld: {
      countryCode: "CountryCode",
      restOfWorld: "Boolean"
    },
    DeliveryCountryCodesOrRestOfWorld: {
      countryCodes: "CountryCode",
      restOfWorld: "Boolean"
    },
    DeliveryLegacyModeBlocked: {
      blocked: "Boolean",
      reasons: "DeliveryLegacyModeBlockedReason"
    },
    DeliveryLocalPickupSettings: {
      instructions: "String",
      pickupTime: "DeliveryLocalPickupTime"
    },
    DeliveryLocationGroup: {
      id: "ID",
      locations: "LocationConnection",
      locationsCount: "Int"
    },
    DeliveryLocationGroupZone: {
      methodDefinitionCounts: "DeliveryMethodDefinitionCounts",
      methodDefinitions: "DeliveryMethodDefinitionConnection",
      zone: "DeliveryZone"
    },
    DeliveryLocationGroupZoneConnection: {
      edges: "DeliveryLocationGroupZoneEdge",
      nodes: "DeliveryLocationGroupZone",
      pageInfo: "PageInfo"
    },
    DeliveryLocationGroupZoneEdge: {
      cursor: "String",
      node: "DeliveryLocationGroupZone"
    },
    DeliveryLocationLocalPickupSettingsError: {
      code: "DeliveryLocationLocalPickupSettingsErrorCode",
      field: "String",
      message: "String"
    },
    DeliveryMethod: {
      id: "ID",
      maxDeliveryDateTime: "DateTime",
      methodType: "DeliveryMethodType",
      minDeliveryDateTime: "DateTime"
    },
    DeliveryMethodDefinition: {
      active: "Boolean",
      description: "String",
      id: "ID",
      methodConditions: "DeliveryCondition",
      name: "String",
      rateProvider: "DeliveryRateProvider"
    },
    DeliveryMethodDefinitionConnection: {
      edges: "DeliveryMethodDefinitionEdge",
      nodes: "DeliveryMethodDefinition",
      pageInfo: "PageInfo"
    },
    DeliveryMethodDefinitionCounts: {
      participantDefinitionsCount: "Int",
      rateDefinitionsCount: "Int"
    },
    DeliveryMethodDefinitionEdge: {
      cursor: "String",
      node: "DeliveryMethodDefinition"
    },
    DeliveryParticipant: {
      adaptToNewServicesFlag: "Boolean",
      carrierService: "DeliveryCarrierService",
      fixedFee: "MoneyV2",
      id: "ID",
      participantServices: "DeliveryParticipantService",
      percentageOfRateFee: "Float"
    },
    DeliveryParticipantService: {
      active: "Boolean",
      name: "String"
    },
    DeliveryProductVariantsCount: {
      capped: "Boolean",
      count: "Int"
    },
    DeliveryProfile: {
      activeMethodDefinitionsCount: "Int",
      default: "Boolean",
      id: "ID",
      legacyMode: "Boolean",
      locationsWithoutRatesCount: "Int",
      name: "String",
      originLocationCount: "Int",
      productVariantsCount: "Int",
      productVariantsCountV2: "DeliveryProductVariantsCount",
      profileItems: "DeliveryProfileItemConnection",
      profileLocationGroups: "DeliveryProfileLocationGroup",
      sellingPlanGroups: "SellingPlanGroupConnection",
      unassignedLocations: "Location",
      unassignedLocationsPaginated: "LocationConnection",
      zoneCountryCount: "Int"
    },
    DeliveryProfileConnection: {
      edges: "DeliveryProfileEdge",
      nodes: "DeliveryProfile",
      pageInfo: "PageInfo"
    },
    DeliveryProfileEdge: {
      cursor: "String",
      node: "DeliveryProfile"
    },
    DeliveryProfileItem: {
      id: "ID",
      product: "Product",
      variants: "ProductVariantConnection"
    },
    DeliveryProfileItemConnection: {
      edges: "DeliveryProfileItemEdge",
      nodes: "DeliveryProfileItem",
      pageInfo: "PageInfo"
    },
    DeliveryProfileItemEdge: {
      cursor: "String",
      node: "DeliveryProfileItem"
    },
    DeliveryProfileLocationGroup: {
      countriesInAnyZone: "DeliveryCountryAndZone",
      locationGroup: "DeliveryLocationGroup",
      locationGroupZones: "DeliveryLocationGroupZoneConnection"
    },
    DeliveryProvince: {
      code: "String",
      id: "ID",
      name: "String",
      translatedName: "String"
    },
    DeliveryRateDefinition: {
      id: "ID",
      price: "MoneyV2"
    },
    DeliveryRateProvider: {
      "...on DeliveryParticipant": "DeliveryParticipant",
      "...on DeliveryRateDefinition": "DeliveryRateDefinition"
    },
    DeliverySetting: {
      legacyModeBlocked: "DeliveryLegacyModeBlocked",
      legacyModeProfiles: "Boolean"
    },
    DeliverySettingUpdatePayload: {
      setting: "DeliverySetting",
      userErrors: "UserError"
    },
    DeliveryShippingOriginAssignPayload: {
      userErrors: "UserError"
    },
    DeliveryZone: {
      countries: "DeliveryCountry",
      id: "ID",
      name: "String"
    },
    Discount: {
      "...on DiscountAutomaticApp": "DiscountAutomaticApp",
      "...on DiscountAutomaticBasic": "DiscountAutomaticBasic",
      "...on DiscountAutomaticBxgy": "DiscountAutomaticBxgy",
      "...on DiscountCodeApp": "DiscountCodeApp",
      "...on DiscountCodeBasic": "DiscountCodeBasic",
      "...on DiscountCodeBxgy": "DiscountCodeBxgy",
      "...on DiscountCodeFreeShipping": "DiscountCodeFreeShipping"
    },
    DiscountAllocation: {
      allocatedAmount: "MoneyV2",
      allocatedAmountSet: "MoneyBag",
      discountApplication: "DiscountApplication"
    },
    DiscountAmount: {
      amount: "MoneyV2",
      appliesOnEachItem: "Boolean"
    },
    DiscountApplication: {
      "...on AutomaticDiscountApplication": "AutomaticDiscountApplication",
      "...on DiscountCodeApplication": "DiscountCodeApplication",
      "...on ManualDiscountApplication": "ManualDiscountApplication",
      "...on ScriptDiscountApplication": "ScriptDiscountApplication",
      allocationMethod: "DiscountApplicationAllocationMethod",
      index: "Int",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    DiscountApplicationConnection: {
      edges: "DiscountApplicationEdge",
      nodes: "DiscountApplication",
      pageInfo: "PageInfo"
    },
    DiscountApplicationEdge: {
      cursor: "String",
      node: "DiscountApplication"
    },
    DiscountAutomatic: {
      "...on DiscountAutomaticApp": "DiscountAutomaticApp",
      "...on DiscountAutomaticBasic": "DiscountAutomaticBasic",
      "...on DiscountAutomaticBxgy": "DiscountAutomaticBxgy"
    },
    DiscountAutomaticActivatePayload: {
      automaticDiscountNode: "DiscountAutomaticNode",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticApp: {
      appDiscountType: "AppDiscountType",
      asyncUsageCount: "Int",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      discountClass: "DiscountClass",
      discountId: "ID",
      endsAt: "DateTime",
      errorHistory: "FunctionsErrorHistory",
      startsAt: "DateTime",
      status: "DiscountStatus",
      title: "String",
      updatedAt: "DateTime"
    },
    DiscountAutomaticAppCreatePayload: {
      automaticAppDiscount: "DiscountAutomaticApp",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticAppUpdatePayload: {
      automaticAppDiscount: "DiscountAutomaticApp",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticBasic: {
      asyncUsageCount: "Int",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      customerGets: "DiscountCustomerGets",
      discountClass: "MerchandiseDiscountClass",
      endsAt: "DateTime",
      minimumRequirement: "DiscountMinimumRequirement",
      shortSummary: "String",
      startsAt: "DateTime",
      status: "DiscountStatus",
      summary: "String",
      title: "String",
      usageCount: "Int"
    },
    DiscountAutomaticBasicCreatePayload: {
      automaticDiscountNode: "DiscountAutomaticNode",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticBasicUpdatePayload: {
      automaticDiscountNode: "DiscountAutomaticNode",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticBulkDeletePayload: {
      job: "Job",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticBxgy: {
      asyncUsageCount: "Int",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      customerBuys: "DiscountCustomerBuys",
      customerGets: "DiscountCustomerGets",
      discountClass: "MerchandiseDiscountClass",
      endsAt: "DateTime",
      events: "EventConnection",
      id: "ID",
      startsAt: "DateTime",
      status: "DiscountStatus",
      summary: "String",
      title: "String",
      usageCount: "Int",
      usesPerOrderLimit: "Int"
    },
    DiscountAutomaticBxgyCreatePayload: {
      automaticDiscountNode: "DiscountAutomaticNode",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticBxgyUpdatePayload: {
      automaticDiscountNode: "DiscountAutomaticNode",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticConnection: {
      edges: "DiscountAutomaticEdge",
      nodes: "DiscountAutomatic",
      pageInfo: "PageInfo"
    },
    DiscountAutomaticDeactivatePayload: {
      automaticDiscountNode: "DiscountAutomaticNode",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticDeletePayload: {
      deletedAutomaticDiscountId: "ID",
      userErrors: "DiscountUserError"
    },
    DiscountAutomaticEdge: {
      cursor: "String",
      node: "DiscountAutomatic"
    },
    DiscountAutomaticNode: {
      automaticDiscount: "DiscountAutomatic",
      events: "EventConnection",
      id: "ID",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection"
    },
    DiscountAutomaticNodeConnection: {
      edges: "DiscountAutomaticNodeEdge",
      nodes: "DiscountAutomaticNode",
      pageInfo: "PageInfo"
    },
    DiscountAutomaticNodeEdge: {
      cursor: "String",
      node: "DiscountAutomaticNode"
    },
    DiscountCode: {
      "...on DiscountCodeApp": "DiscountCodeApp",
      "...on DiscountCodeBasic": "DiscountCodeBasic",
      "...on DiscountCodeBxgy": "DiscountCodeBxgy",
      "...on DiscountCodeFreeShipping": "DiscountCodeFreeShipping"
    },
    DiscountCodeActivatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeApp: {
      appDiscountType: "AppDiscountType",
      appliesOncePerCustomer: "Boolean",
      asyncUsageCount: "Int",
      codeCount: "Int",
      codes: "DiscountRedeemCodeConnection",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      customerSelection: "DiscountCustomerSelection",
      discountClass: "DiscountClass",
      discountId: "ID",
      endsAt: "DateTime",
      errorHistory: "FunctionsErrorHistory",
      hasTimelineComment: "Boolean",
      recurringCycleLimit: "Int",
      shareableUrls: "DiscountShareableUrl",
      startsAt: "DateTime",
      status: "DiscountStatus",
      title: "String",
      totalSales: "MoneyV2",
      usageLimit: "Int"
    },
    DiscountCodeAppCreatePayload: {
      codeAppDiscount: "DiscountCodeApp",
      userErrors: "DiscountUserError"
    },
    DiscountCodeAppUpdatePayload: {
      codeAppDiscount: "DiscountCodeApp",
      userErrors: "DiscountUserError"
    },
    DiscountCodeApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      code: "String",
      index: "Int",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      value: "PricingValue"
    },
    DiscountCodeBasic: {
      appliesOncePerCustomer: "Boolean",
      asyncUsageCount: "Int",
      codeCount: "Int",
      codes: "DiscountRedeemCodeConnection",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      customerGets: "DiscountCustomerGets",
      customerSelection: "DiscountCustomerSelection",
      discountClass: "MerchandiseDiscountClass",
      endsAt: "DateTime",
      hasTimelineComment: "Boolean",
      minimumRequirement: "DiscountMinimumRequirement",
      recurringCycleLimit: "Int",
      shareableUrls: "DiscountShareableUrl",
      shortSummary: "String",
      startsAt: "DateTime",
      status: "DiscountStatus",
      summary: "String",
      title: "String",
      totalSales: "MoneyV2",
      usageLimit: "Int"
    },
    DiscountCodeBasicCreatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeBasicUpdatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeBulkActivatePayload: {
      job: "Job",
      userErrors: "DiscountUserError"
    },
    DiscountCodeBulkDeactivatePayload: {
      job: "Job",
      userErrors: "DiscountUserError"
    },
    DiscountCodeBulkDeletePayload: {
      job: "Job",
      userErrors: "DiscountUserError"
    },
    DiscountCodeBxgy: {
      appliesOncePerCustomer: "Boolean",
      asyncUsageCount: "Int",
      codeCount: "Int",
      codes: "DiscountRedeemCodeConnection",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      customerBuys: "DiscountCustomerBuys",
      customerGets: "DiscountCustomerGets",
      customerSelection: "DiscountCustomerSelection",
      discountClass: "MerchandiseDiscountClass",
      endsAt: "DateTime",
      hasTimelineComment: "Boolean",
      shareableUrls: "DiscountShareableUrl",
      startsAt: "DateTime",
      status: "DiscountStatus",
      summary: "String",
      title: "String",
      totalSales: "MoneyV2",
      usageLimit: "Int",
      usesPerOrderLimit: "Int"
    },
    DiscountCodeBxgyCreatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeBxgyUpdatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeDeactivatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeDeletePayload: {
      deletedCodeDiscountId: "ID",
      userErrors: "DiscountUserError"
    },
    DiscountCodeFreeShipping: {
      appliesOnOneTimePurchase: "Boolean",
      appliesOnSubscription: "Boolean",
      appliesOncePerCustomer: "Boolean",
      asyncUsageCount: "Int",
      codeCount: "Int",
      codes: "DiscountRedeemCodeConnection",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      customerSelection: "DiscountCustomerSelection",
      destinationSelection: "DiscountShippingDestinationSelection",
      discountClass: "ShippingDiscountClass",
      endsAt: "DateTime",
      hasTimelineComment: "Boolean",
      maximumShippingPrice: "MoneyV2",
      minimumRequirement: "DiscountMinimumRequirement",
      recurringCycleLimit: "Int",
      shareableUrls: "DiscountShareableUrl",
      shortSummary: "String",
      startsAt: "DateTime",
      status: "DiscountStatus",
      summary: "String",
      title: "String",
      totalSales: "MoneyV2",
      usageLimit: "Int"
    },
    DiscountCodeFreeShippingCreatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeFreeShippingUpdatePayload: {
      codeDiscountNode: "DiscountCodeNode",
      userErrors: "DiscountUserError"
    },
    DiscountCodeNode: {
      codeDiscount: "DiscountCode",
      events: "EventConnection",
      id: "ID",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection"
    },
    DiscountCodeNodeConnection: {
      edges: "DiscountCodeNodeEdge",
      nodes: "DiscountCodeNode",
      pageInfo: "PageInfo"
    },
    DiscountCodeNodeEdge: {
      cursor: "String",
      node: "DiscountCodeNode"
    },
    DiscountCodeRedeemCodeBulkDeletePayload: {
      job: "Job",
      userErrors: "DiscountUserError"
    },
    DiscountCollections: {
      collections: "CollectionConnection"
    },
    DiscountCombinesWith: {
      orderDiscounts: "Boolean",
      productDiscounts: "Boolean",
      shippingDiscounts: "Boolean"
    },
    DiscountCountries: {
      countries: "CountryCode",
      includeRestOfWorld: "Boolean"
    },
    DiscountCountryAll: {
      allCountries: "Boolean"
    },
    DiscountCustomerAll: {
      allCustomers: "Boolean"
    },
    DiscountCustomerBuys: {
      items: "DiscountItems",
      value: "DiscountCustomerBuysValue"
    },
    DiscountCustomerBuysValue: {
      "...on DiscountPurchaseAmount": "DiscountPurchaseAmount",
      "...on DiscountQuantity": "DiscountQuantity"
    },
    DiscountCustomerGets: {
      appliesOnOneTimePurchase: "Boolean",
      appliesOnSubscription: "Boolean",
      items: "DiscountItems",
      value: "DiscountCustomerGetsValue"
    },
    DiscountCustomerGetsValue: {
      "...on DiscountAmount": "DiscountAmount",
      "...on DiscountOnQuantity": "DiscountOnQuantity",
      "...on DiscountPercentage": "DiscountPercentage"
    },
    DiscountCustomerSegments: {
      segments: "Segment"
    },
    DiscountCustomerSelection: {
      "...on DiscountCustomerAll": "DiscountCustomerAll",
      "...on DiscountCustomerSegments": "DiscountCustomerSegments",
      "...on DiscountCustomers": "DiscountCustomers"
    },
    DiscountCustomers: {
      customers: "Customer"
    },
    DiscountEffect: {
      "...on DiscountPercentage": "DiscountPercentage"
    },
    DiscountItems: {
      "...on AllDiscountItems": "AllDiscountItems",
      "...on DiscountCollections": "DiscountCollections",
      "...on DiscountProducts": "DiscountProducts"
    },
    DiscountMinimumQuantity: {
      greaterThanOrEqualToQuantity: "UnsignedInt64"
    },
    DiscountMinimumRequirement: {
      "...on DiscountMinimumQuantity": "DiscountMinimumQuantity",
      "...on DiscountMinimumSubtotal": "DiscountMinimumSubtotal"
    },
    DiscountMinimumSubtotal: {
      greaterThanOrEqualToSubtotal: "MoneyV2"
    },
    DiscountNode: {
      discount: "Discount",
      events: "EventConnection",
      id: "ID",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection"
    },
    DiscountNodeConnection: {
      edges: "DiscountNodeEdge",
      nodes: "DiscountNode",
      pageInfo: "PageInfo"
    },
    DiscountNodeEdge: {
      cursor: "String",
      node: "DiscountNode"
    },
    DiscountOnQuantity: {
      effect: "DiscountEffect",
      quantity: "DiscountQuantity"
    },
    DiscountPercentage: {
      percentage: "Float"
    },
    DiscountProducts: {
      productVariants: "ProductVariantConnection",
      products: "ProductConnection"
    },
    DiscountPurchaseAmount: {
      amount: "Decimal"
    },
    DiscountQuantity: {
      quantity: "UnsignedInt64"
    },
    DiscountRedeemCode: {
      asyncUsageCount: "Int",
      code: "String",
      createdBy: "App",
      id: "ID"
    },
    DiscountRedeemCodeBulkAddPayload: {
      bulkCreation: "DiscountRedeemCodeBulkCreation",
      userErrors: "DiscountUserError"
    },
    DiscountRedeemCodeBulkCreation: {
      codes: "DiscountRedeemCodeBulkCreationCodeConnection",
      codesCount: "Int",
      createdAt: "DateTime",
      discountCode: "DiscountCodeNode",
      done: "Boolean",
      failedCount: "Int",
      id: "ID",
      importedCount: "Int"
    },
    DiscountRedeemCodeBulkCreationCode: {
      code: "String",
      discountRedeemCode: "DiscountRedeemCode",
      errors: "DiscountUserError"
    },
    DiscountRedeemCodeBulkCreationCodeConnection: {
      edges: "DiscountRedeemCodeBulkCreationCodeEdge",
      nodes: "DiscountRedeemCodeBulkCreationCode",
      pageInfo: "PageInfo"
    },
    DiscountRedeemCodeBulkCreationCodeEdge: {
      cursor: "String",
      node: "DiscountRedeemCodeBulkCreationCode"
    },
    DiscountRedeemCodeConnection: {
      edges: "DiscountRedeemCodeEdge",
      nodes: "DiscountRedeemCode",
      pageInfo: "PageInfo"
    },
    DiscountRedeemCodeEdge: {
      cursor: "String",
      node: "DiscountRedeemCode"
    },
    DiscountShareableUrl: {
      targetItemImage: "Image",
      targetType: "DiscountShareableUrlTargetType",
      title: "String",
      url: "URL"
    },
    DiscountShippingDestinationSelection: {
      "...on DiscountCountries": "DiscountCountries",
      "...on DiscountCountryAll": "DiscountCountryAll"
    },
    DiscountUserError: {
      code: "DiscountErrorCode",
      extraInfo: "String",
      field: "String",
      message: "String"
    },
    DisplayableError: {
      "...on AbandonmentEmailStateUpdateUserError": "AbandonmentEmailStateUpdateUserError",
      "...on AppRevenueAttributionRecordCreateUserError": "AppRevenueAttributionRecordCreateUserError",
      "...on AppRevenueAttributionRecordDeleteUserError": "AppRevenueAttributionRecordDeleteUserError",
      "...on AppSubscriptionTrialExtendUserError": "AppSubscriptionTrialExtendUserError",
      "...on BillingAttemptUserError": "BillingAttemptUserError",
      "...on BulkMutationUserError": "BulkMutationUserError",
      "...on BulkProductResourceFeedbackCreateUserError": "BulkProductResourceFeedbackCreateUserError",
      "...on BusinessCustomerUserError": "BusinessCustomerUserError",
      "...on CollectionAddProductsV2UserError": "CollectionAddProductsV2UserError",
      "...on CustomerEmailMarketingConsentUpdateUserError": "CustomerEmailMarketingConsentUpdateUserError",
      "...on CustomerPaymentMethodGetUpdateUrlUserError": "CustomerPaymentMethodGetUpdateUrlUserError",
      "...on CustomerPaymentMethodRemoteUserError": "CustomerPaymentMethodRemoteUserError",
      "...on CustomerPaymentMethodUserError": "CustomerPaymentMethodUserError",
      "...on CustomerSegmentMembersQueryUserError": "CustomerSegmentMembersQueryUserError",
      "...on CustomerSmsMarketingConsentError": "CustomerSmsMarketingConsentError",
      "...on DelegateAccessTokenCreateUserError": "DelegateAccessTokenCreateUserError",
      "...on DeliveryLocationLocalPickupSettingsError": "DeliveryLocationLocalPickupSettingsError",
      "...on DiscountUserError": "DiscountUserError",
      "...on DisputeEvidenceUpdateUserError": "DisputeEvidenceUpdateUserError",
      "...on ErrorsWebPixelUserError": "ErrorsWebPixelUserError",
      "...on FilesUserError": "FilesUserError",
      "...on FulfillmentOrderHoldUserError": "FulfillmentOrderHoldUserError",
      "...on FulfillmentOrderLineItemsPreparedForPickupUserError": "FulfillmentOrderLineItemsPreparedForPickupUserError",
      "...on FulfillmentOrderReleaseHoldUserError": "FulfillmentOrderReleaseHoldUserError",
      "...on FulfillmentOrderRescheduleUserError": "FulfillmentOrderRescheduleUserError",
      "...on FulfillmentOrdersReleaseHoldsUserError": "FulfillmentOrdersReleaseHoldsUserError",
      "...on FulfillmentOrdersSetFulfillmentDeadlineUserError": "FulfillmentOrdersSetFulfillmentDeadlineUserError",
      "...on GiftCardUserError": "GiftCardUserError",
      "...on InventoryAdjustQuantitiesUserError": "InventoryAdjustQuantitiesUserError",
      "...on InventoryBulkToggleActivationUserError": "InventoryBulkToggleActivationUserError",
      "...on InventoryMoveQuantitiesUserError": "InventoryMoveQuantitiesUserError",
      "...on InventorySetOnHandQuantitiesUserError": "InventorySetOnHandQuantitiesUserError",
      "...on LocationActivateUserError": "LocationActivateUserError",
      "...on LocationAddUserError": "LocationAddUserError",
      "...on LocationDeactivateUserError": "LocationDeactivateUserError",
      "...on LocationDeleteUserError": "LocationDeleteUserError",
      "...on LocationEditUserError": "LocationEditUserError",
      "...on MarketCurrencySettingsUserError": "MarketCurrencySettingsUserError",
      "...on MarketUserError": "MarketUserError",
      "...on MarketingActivityUserError": "MarketingActivityUserError",
      "...on MediaUserError": "MediaUserError",
      "...on MetafieldDefinitionCreateUserError": "MetafieldDefinitionCreateUserError",
      "...on MetafieldDefinitionDeleteUserError": "MetafieldDefinitionDeleteUserError",
      "...on MetafieldDefinitionPinUserError": "MetafieldDefinitionPinUserError",
      "...on MetafieldDefinitionUnpinUserError": "MetafieldDefinitionUnpinUserError",
      "...on MetafieldDefinitionUpdateUserError": "MetafieldDefinitionUpdateUserError",
      "...on MetafieldsSetUserError": "MetafieldsSetUserError",
      "...on MetaobjectUserError": "MetaobjectUserError",
      "...on OrderCreateMandatePaymentUserError": "OrderCreateMandatePaymentUserError",
      "...on OrderInvoiceSendUserError": "OrderInvoiceSendUserError",
      "...on PaymentReminderSendUserError": "PaymentReminderSendUserError",
      "...on PaymentTermsCreateUserError": "PaymentTermsCreateUserError",
      "...on PaymentTermsDeleteUserError": "PaymentTermsDeleteUserError",
      "...on PaymentTermsUpdateUserError": "PaymentTermsUpdateUserError",
      "...on PriceListPriceUserError": "PriceListPriceUserError",
      "...on PriceListUserError": "PriceListUserError",
      "...on PriceRuleUserError": "PriceRuleUserError",
      "...on ProductChangeStatusUserError": "ProductChangeStatusUserError",
      "...on ProductDeleteUserError": "ProductDeleteUserError",
      "...on ProductDuplicateUserError": "ProductDuplicateUserError",
      "...on ProductVariantsBulkCreateUserError": "ProductVariantsBulkCreateUserError",
      "...on ProductVariantsBulkDeleteUserError": "ProductVariantsBulkDeleteUserError",
      "...on ProductVariantsBulkReorderUserError": "ProductVariantsBulkReorderUserError",
      "...on ProductVariantsBulkUpdateUserError": "ProductVariantsBulkUpdateUserError",
      "...on PubSubWebhookSubscriptionCreateUserError": "PubSubWebhookSubscriptionCreateUserError",
      "...on PubSubWebhookSubscriptionUpdateUserError": "PubSubWebhookSubscriptionUpdateUserError",
      "...on ReturnUserError": "ReturnUserError",
      "...on SellingPlanGroupUserError": "SellingPlanGroupUserError",
      "...on ShopPolicyUserError": "ShopPolicyUserError",
      "...on ShopResourceFeedbackCreateUserError": "ShopResourceFeedbackCreateUserError",
      "...on StandardMetafieldDefinitionEnableUserError": "StandardMetafieldDefinitionEnableUserError",
      "...on SubscriptionBillingCycleUserError": "SubscriptionBillingCycleUserError",
      "...on SubscriptionContractUserError": "SubscriptionContractUserError",
      "...on SubscriptionDraftUserError": "SubscriptionDraftUserError",
      "...on TranslationUserError": "TranslationUserError",
      "...on UrlRedirectBulkDeleteByIdsUserError": "UrlRedirectBulkDeleteByIdsUserError",
      "...on UrlRedirectBulkDeleteBySavedSearchUserError": "UrlRedirectBulkDeleteBySavedSearchUserError",
      "...on UrlRedirectBulkDeleteBySearchUserError": "UrlRedirectBulkDeleteBySearchUserError",
      "...on UrlRedirectImportUserError": "UrlRedirectImportUserError",
      "...on UrlRedirectUserError": "UrlRedirectUserError",
      "...on UserError": "UserError",
      field: "String",
      message: "String"
    },
    DisputeEvidenceUpdatePayload: {
      disputeEvidence: "ShopifyPaymentsDisputeEvidence",
      userErrors: "DisputeEvidenceUpdateUserError"
    },
    DisputeEvidenceUpdateUserError: {
      code: "DisputeEvidenceUpdateUserErrorCode",
      field: "String",
      message: "String"
    },
    Domain: {
      host: "String",
      id: "ID",
      localization: "DomainLocalization",
      marketWebPresence: "MarketWebPresence",
      sslEnabled: "Boolean",
      url: "URL"
    },
    DomainLocalization: {
      alternateLocales: "String",
      country: "String",
      defaultLocale: "String"
    },
    DraftOrder: {
      appliedDiscount: "DraftOrderAppliedDiscount",
      billingAddress: "MailingAddress",
      billingAddressMatchesShippingAddress: "Boolean",
      completedAt: "DateTime",
      createdAt: "DateTime",
      currencyCode: "CurrencyCode",
      customAttributes: "Attribute",
      customer: "Customer",
      defaultCursor: "String",
      email: "String",
      events: "EventConnection",
      hasTimelineComment: "Boolean",
      id: "ID",
      invoiceEmailTemplateSubject: "String",
      invoiceSentAt: "DateTime",
      invoiceUrl: "URL",
      legacyResourceId: "UnsignedInt64",
      lineItems: "DraftOrderLineItemConnection",
      lineItemsSubtotalPrice: "MoneyBag",
      localizationExtensions: "LocalizationExtensionConnection",
      marketName: "String",
      marketRegionCountryCode: "CountryCode",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      name: "String",
      note2: "String",
      order: "Order",
      paymentTerms: "PaymentTerms",
      phone: "String",
      presentmentCurrencyCode: "CurrencyCode",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      purchasingEntity: "PurchasingEntity",
      ready: "Boolean",
      reserveInventoryUntil: "DateTime",
      shippingAddress: "MailingAddress",
      shippingLine: "ShippingLine",
      status: "DraftOrderStatus",
      subtotalPrice: "Money",
      subtotalPriceSet: "MoneyBag",
      tags: "String",
      taxExempt: "Boolean",
      taxLines: "TaxLine",
      taxesIncluded: "Boolean",
      totalDiscountsSet: "MoneyBag",
      totalLineItemsPriceSet: "MoneyBag",
      totalPrice: "Money",
      totalPriceSet: "MoneyBag",
      totalShippingPrice: "Money",
      totalShippingPriceSet: "MoneyBag",
      totalTax: "Money",
      totalTaxSet: "MoneyBag",
      totalWeight: "UnsignedInt64",
      updatedAt: "DateTime",
      visibleToCustomer: "Boolean"
    },
    DraftOrderAppliedDiscount: {
      amount: "Money",
      amountSet: "MoneyBag",
      amountV2: "MoneyV2",
      description: "String",
      title: "String",
      value: "Float",
      valueType: "DraftOrderAppliedDiscountType"
    },
    DraftOrderBulkAddTagsPayload: {
      job: "Job",
      userErrors: "UserError"
    },
    DraftOrderBulkDeletePayload: {
      job: "Job",
      userErrors: "UserError"
    },
    DraftOrderBulkRemoveTagsPayload: {
      job: "Job",
      userErrors: "UserError"
    },
    DraftOrderCalculatePayload: {
      calculatedDraftOrder: "CalculatedDraftOrder",
      userErrors: "UserError"
    },
    DraftOrderCompletePayload: {
      draftOrder: "DraftOrder",
      userErrors: "UserError"
    },
    DraftOrderConnection: {
      edges: "DraftOrderEdge",
      nodes: "DraftOrder",
      pageInfo: "PageInfo"
    },
    DraftOrderCreateFromOrderPayload: {
      draftOrder: "DraftOrder",
      userErrors: "UserError"
    },
    DraftOrderCreateMerchantCheckoutPayload: {
      userErrors: "UserError"
    },
    DraftOrderCreatePayload: {
      draftOrder: "DraftOrder",
      userErrors: "UserError"
    },
    DraftOrderDeletePayload: {
      deletedId: "ID",
      userErrors: "UserError"
    },
    DraftOrderDuplicatePayload: {
      draftOrder: "DraftOrder",
      userErrors: "UserError"
    },
    DraftOrderEdge: {
      cursor: "String",
      node: "DraftOrder"
    },
    DraftOrderInvoicePreviewPayload: {
      previewHtml: "HTML",
      previewSubject: "HTML",
      userErrors: "UserError"
    },
    DraftOrderInvoiceSendPayload: {
      draftOrder: "DraftOrder",
      userErrors: "UserError"
    },
    DraftOrderLineItem: {
      appliedDiscount: "DraftOrderAppliedDiscount",
      custom: "Boolean",
      customAttributes: "Attribute",
      customAttributesV2: "TypedAttribute",
      discountedTotal: "Money",
      discountedTotalSet: "MoneyBag",
      discountedUnitPrice: "Money",
      discountedUnitPriceSet: "MoneyBag",
      fulfillmentService: "FulfillmentService",
      grams: "Int",
      id: "ID",
      image: "Image",
      isGiftCard: "Boolean",
      name: "String",
      originalTotal: "Money",
      originalTotalSet: "MoneyBag",
      originalUnitPrice: "Money",
      originalUnitPriceSet: "MoneyBag",
      product: "Product",
      quantity: "Int",
      requiresShipping: "Boolean",
      sku: "String",
      taxLines: "TaxLine",
      taxable: "Boolean",
      title: "String",
      totalDiscount: "Money",
      totalDiscountSet: "MoneyBag",
      variant: "ProductVariant",
      variantTitle: "String",
      vendor: "String",
      weight: "Weight"
    },
    DraftOrderLineItemConnection: {
      edges: "DraftOrderLineItemEdge",
      nodes: "DraftOrderLineItem",
      pageInfo: "PageInfo"
    },
    DraftOrderLineItemEdge: {
      cursor: "String",
      node: "DraftOrderLineItem"
    },
    DraftOrderTag: {
      handle: "String",
      id: "ID",
      title: "String"
    },
    DraftOrderUpdatePayload: {
      draftOrder: "DraftOrder",
      userErrors: "UserError"
    },
    Duty: {
      countryCodeOfOrigin: "CountryCode",
      harmonizedSystemCode: "String",
      id: "ID",
      price: "MoneyBag",
      taxLines: "TaxLine"
    },
    DutySale: {
      actionType: "SaleActionType",
      duty: "Duty",
      id: "ID",
      lineType: "SaleLineType",
      quantity: "Int",
      taxes: "SaleTax",
      totalAmount: "MoneyBag",
      totalDiscountAmountAfterTaxes: "MoneyBag",
      totalDiscountAmountBeforeTaxes: "MoneyBag",
      totalTaxAmount: "MoneyBag"
    },
    EditableProperty: {
      locked: "Boolean",
      reason: "FormattedString"
    },
    ErrorPosition: {
      character: "Int",
      line: "Int"
    },
    ErrorsWebPixelUserError: {
      code: "ErrorsWebPixelUserErrorCode",
      field: "String",
      message: "String"
    },
    Event: {
      "...on BasicEvent": "BasicEvent",
      "...on CommentEvent": "CommentEvent",
      appTitle: "String",
      attributeToApp: "Boolean",
      attributeToUser: "Boolean",
      createdAt: "DateTime",
      criticalAlert: "Boolean",
      id: "ID",
      message: "FormattedString"
    },
    EventBridgeWebhookSubscriptionCreatePayload: {
      userErrors: "UserError",
      webhookSubscription: "WebhookSubscription"
    },
    EventBridgeWebhookSubscriptionUpdatePayload: {
      userErrors: "UserError",
      webhookSubscription: "WebhookSubscription"
    },
    EventConnection: {
      edges: "EventEdge",
      nodes: "Event",
      pageInfo: "PageInfo"
    },
    EventEdge: {
      cursor: "String",
      node: "Event"
    },
    ExternalVideo: {
      alt: "String",
      embedUrl: "URL",
      embeddedUrl: "URL",
      host: "MediaHost",
      id: "ID",
      mediaContentType: "MediaContentType",
      mediaErrors: "MediaError",
      mediaWarnings: "MediaWarning",
      originUrl: "URL",
      preview: "MediaPreviewImage",
      status: "MediaStatus"
    },
    FailedRequirement: {
      action: "NavigationItem",
      message: "String"
    },
    File: {
      "...on GenericFile": "GenericFile",
      "...on MediaImage": "MediaImage",
      "...on Video": "Video",
      alt: "String",
      createdAt: "DateTime",
      fileErrors: "FileError",
      fileStatus: "FileStatus",
      preview: "MediaPreviewImage"
    },
    FileConnection: {
      edges: "FileEdge",
      nodes: "File",
      pageInfo: "PageInfo"
    },
    FileCreatePayload: {
      files: "File",
      userErrors: "FilesUserError"
    },
    FileDeletePayload: {
      deletedFileIds: "ID",
      userErrors: "FilesUserError"
    },
    FileEdge: {
      cursor: "String",
      node: "File"
    },
    FileError: {
      code: "FileErrorCode",
      details: "String",
      message: "String"
    },
    FileUpdatePayload: {
      files: "File",
      userErrors: "FilesUserError"
    },
    FilesUserError: {
      code: "FilesErrorCode",
      field: "String",
      message: "String"
    },
    FilterOption: {
      label: "String",
      value: "String"
    },
    FlowTriggerReceivePayload: {
      userErrors: "UserError"
    },
    FormattedString: `scalar.FormattedString`,
    Fulfillment: {
      createdAt: "DateTime",
      deliveredAt: "DateTime",
      displayStatus: "FulfillmentDisplayStatus",
      estimatedDeliveryAt: "DateTime",
      events: "FulfillmentEventConnection",
      fulfillmentLineItems: "FulfillmentLineItemConnection",
      fulfillmentOrders: "FulfillmentOrderConnection",
      id: "ID",
      inTransitAt: "DateTime",
      legacyResourceId: "UnsignedInt64",
      location: "Location",
      name: "String",
      order: "Order",
      originAddress: "FulfillmentOriginAddress",
      requiresShipping: "Boolean",
      service: "FulfillmentService",
      status: "FulfillmentStatus",
      totalQuantity: "Int",
      trackingInfo: "FulfillmentTrackingInfo",
      updatedAt: "DateTime"
    },
    FulfillmentCancelPayload: {
      fulfillment: "Fulfillment",
      userErrors: "UserError"
    },
    FulfillmentConnection: {
      edges: "FulfillmentEdge",
      nodes: "Fulfillment",
      pageInfo: "PageInfo"
    },
    FulfillmentCreateV2Payload: {
      fulfillment: "Fulfillment",
      userErrors: "UserError"
    },
    FulfillmentEdge: {
      cursor: "String",
      node: "Fulfillment"
    },
    FulfillmentEvent: {
      address1: "String",
      city: "String",
      country: "String",
      estimatedDeliveryAt: "DateTime",
      happenedAt: "DateTime",
      id: "ID",
      latitude: "Float",
      longitude: "Float",
      message: "String",
      province: "String",
      status: "FulfillmentEventStatus",
      zip: "String"
    },
    FulfillmentEventConnection: {
      edges: "FulfillmentEventEdge",
      nodes: "FulfillmentEvent",
      pageInfo: "PageInfo"
    },
    FulfillmentEventCreatePayload: {
      fulfillmentEvent: "FulfillmentEvent",
      userErrors: "UserError"
    },
    FulfillmentEventEdge: {
      cursor: "String",
      node: "FulfillmentEvent"
    },
    FulfillmentHold: {
      reason: "FulfillmentHoldReason",
      reasonNotes: "String"
    },
    FulfillmentLineItem: {
      discountedTotal: "Money",
      discountedTotalSet: "MoneyBag",
      id: "ID",
      lineItem: "LineItem",
      originalTotal: "Money",
      originalTotalSet: "MoneyBag",
      quantity: "Int"
    },
    FulfillmentLineItemConnection: {
      edges: "FulfillmentLineItemEdge",
      nodes: "FulfillmentLineItem",
      pageInfo: "PageInfo"
    },
    FulfillmentLineItemEdge: {
      cursor: "String",
      node: "FulfillmentLineItem"
    },
    FulfillmentOrder: {
      assignedLocation: "FulfillmentOrderAssignedLocation",
      createdAt: "DateTime",
      deliveryMethod: "DeliveryMethod",
      destination: "FulfillmentOrderDestination",
      fulfillAt: "DateTime",
      fulfillBy: "DateTime",
      fulfillmentHolds: "FulfillmentHold",
      fulfillments: "FulfillmentConnection",
      id: "ID",
      internationalDuties: "FulfillmentOrderInternationalDuties",
      lineItems: "FulfillmentOrderLineItemConnection",
      locationsForMove: "FulfillmentOrderLocationForMoveConnection",
      merchantRequests: "FulfillmentOrderMerchantRequestConnection",
      order: "Order",
      requestStatus: "FulfillmentOrderRequestStatus",
      status: "FulfillmentOrderStatus",
      supportedActions: "FulfillmentOrderSupportedAction",
      updatedAt: "DateTime"
    },
    FulfillmentOrderAcceptCancellationRequestPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderAcceptFulfillmentRequestPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderAssignedLocation: {
      address1: "String",
      address2: "String",
      city: "String",
      countryCode: "CountryCode",
      location: "Location",
      name: "String",
      phone: "String",
      province: "String",
      zip: "String"
    },
    FulfillmentOrderCancelPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      replacementFulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderClosePayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderConnection: {
      edges: "FulfillmentOrderEdge",
      nodes: "FulfillmentOrder",
      pageInfo: "PageInfo"
    },
    FulfillmentOrderDestination: {
      address1: "String",
      address2: "String",
      city: "String",
      company: "String",
      countryCode: "CountryCode",
      email: "String",
      firstName: "String",
      id: "ID",
      lastName: "String",
      phone: "String",
      province: "String",
      zip: "String"
    },
    FulfillmentOrderEdge: {
      cursor: "String",
      node: "FulfillmentOrder"
    },
    FulfillmentOrderHoldPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "FulfillmentOrderHoldUserError"
    },
    FulfillmentOrderHoldUserError: {
      code: "FulfillmentOrderHoldUserErrorCode",
      field: "String",
      message: "String"
    },
    FulfillmentOrderInternationalDuties: {
      incoterm: "String"
    },
    FulfillmentOrderLineItem: {
      id: "ID",
      image: "Image",
      lineItem: "LineItem",
      originalUnitPriceSet: "MoneyBag",
      productTitle: "String",
      remainingQuantity: "Int",
      requiresShipping: "Boolean",
      sku: "String",
      totalQuantity: "Int",
      variantTitle: "String",
      vendor: "String",
      warnings: "FulfillmentOrderLineItemWarning",
      weight: "Weight"
    },
    FulfillmentOrderLineItemConnection: {
      edges: "FulfillmentOrderLineItemEdge",
      nodes: "FulfillmentOrderLineItem",
      pageInfo: "PageInfo"
    },
    FulfillmentOrderLineItemEdge: {
      cursor: "String",
      node: "FulfillmentOrderLineItem"
    },
    FulfillmentOrderLineItemWarning: {
      description: "String",
      title: "String"
    },
    FulfillmentOrderLineItemsPreparedForPickupPayload: {
      userErrors: "FulfillmentOrderLineItemsPreparedForPickupUserError"
    },
    FulfillmentOrderLineItemsPreparedForPickupUserError: {
      code: "FulfillmentOrderLineItemsPreparedForPickupUserErrorCode",
      field: "String",
      message: "String"
    },
    FulfillmentOrderLocationForMove: {
      location: "Location",
      message: "String",
      movable: "Boolean"
    },
    FulfillmentOrderLocationForMoveConnection: {
      edges: "FulfillmentOrderLocationForMoveEdge",
      nodes: "FulfillmentOrderLocationForMove",
      pageInfo: "PageInfo"
    },
    FulfillmentOrderLocationForMoveEdge: {
      cursor: "String",
      node: "FulfillmentOrderLocationForMove"
    },
    FulfillmentOrderMerchantRequest: {
      fulfillmentOrder: "FulfillmentOrder",
      id: "ID",
      kind: "FulfillmentOrderMerchantRequestKind",
      message: "String",
      requestOptions: "JSON",
      responseData: "JSON",
      sentAt: "DateTime"
    },
    FulfillmentOrderMerchantRequestConnection: {
      edges: "FulfillmentOrderMerchantRequestEdge",
      nodes: "FulfillmentOrderMerchantRequest",
      pageInfo: "PageInfo"
    },
    FulfillmentOrderMerchantRequestEdge: {
      cursor: "String",
      node: "FulfillmentOrderMerchantRequest"
    },
    FulfillmentOrderMovePayload: {
      movedFulfillmentOrder: "FulfillmentOrder",
      originalFulfillmentOrder: "FulfillmentOrder",
      remainingFulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderOpenPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderRejectCancellationRequestPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderRejectFulfillmentRequestPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderReleaseHoldPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "FulfillmentOrderReleaseHoldUserError"
    },
    FulfillmentOrderReleaseHoldUserError: {
      code: "FulfillmentOrderReleaseHoldUserErrorCode",
      field: "String",
      message: "String"
    },
    FulfillmentOrderReschedulePayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "FulfillmentOrderRescheduleUserError"
    },
    FulfillmentOrderRescheduleUserError: {
      code: "FulfillmentOrderRescheduleUserErrorCode",
      field: "String",
      message: "String"
    },
    FulfillmentOrderSubmitCancellationRequestPayload: {
      fulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderSubmitFulfillmentRequestPayload: {
      originalFulfillmentOrder: "FulfillmentOrder",
      submittedFulfillmentOrder: "FulfillmentOrder",
      unsubmittedFulfillmentOrder: "FulfillmentOrder",
      userErrors: "UserError"
    },
    FulfillmentOrderSupportedAction: {
      action: "FulfillmentOrderAction",
      externalUrl: "URL"
    },
    FulfillmentOrdersReleaseHoldsPayload: {
      job: "Job",
      userErrors: "FulfillmentOrdersReleaseHoldsUserError"
    },
    FulfillmentOrdersReleaseHoldsUserError: {
      code: "FulfillmentOrdersReleaseHoldsUserErrorCode",
      field: "String",
      message: "String"
    },
    FulfillmentOrdersSetFulfillmentDeadlinePayload: {
      success: "Boolean",
      userErrors: "FulfillmentOrdersSetFulfillmentDeadlineUserError"
    },
    FulfillmentOrdersSetFulfillmentDeadlineUserError: {
      code: "FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode",
      field: "String",
      message: "String"
    },
    FulfillmentOriginAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      countryCode: "String",
      provinceCode: "String",
      zip: "String"
    },
    FulfillmentService: {
      callbackUrl: "URL",
      fulfillmentOrdersOptIn: "Boolean",
      handle: "String",
      id: "ID",
      inventoryManagement: "Boolean",
      location: "Location",
      permitsSkuSharing: "Boolean",
      productBased: "Boolean",
      serviceName: "String",
      shippingMethods: "ShippingMethod",
      type: "FulfillmentServiceType"
    },
    FulfillmentServiceCreatePayload: {
      fulfillmentService: "FulfillmentService",
      userErrors: "UserError"
    },
    FulfillmentServiceDeletePayload: {
      deletedId: "ID",
      userErrors: "UserError"
    },
    FulfillmentServiceUpdatePayload: {
      fulfillmentService: "FulfillmentService",
      userErrors: "UserError"
    },
    FulfillmentTrackingInfo: {
      company: "String",
      number: "String",
      url: "URL"
    },
    FulfillmentTrackingInfoUpdateV2Payload: {
      fulfillment: "Fulfillment",
      userErrors: "UserError"
    },
    FunctionsAppBridge: {
      createPath: "String",
      detailsPath: "String"
    },
    FunctionsErrorHistory: {
      errorsFirstOccurredAt: "DateTime",
      firstOccurredAt: "DateTime",
      hasBeenSharedSinceLastError: "Boolean",
      hasSharedRecentErrors: "Boolean"
    },
    GenericFile: {
      alt: "String",
      createdAt: "DateTime",
      fileErrors: "FileError",
      fileStatus: "FileStatus",
      id: "ID",
      mimeType: "String",
      originalFileSize: "Int",
      preview: "MediaPreviewImage",
      url: "URL"
    },
    GiftCard: {
      balance: "MoneyV2",
      createdAt: "DateTime",
      customer: "Customer",
      disabledAt: "DateTime",
      enabled: "Boolean",
      expiresOn: "Date",
      id: "ID",
      initialValue: "MoneyV2",
      lastCharacters: "String",
      maskedCode: "String",
      note: "String",
      order: "Order"
    },
    GiftCardConnection: {
      edges: "GiftCardEdge",
      nodes: "GiftCard",
      pageInfo: "PageInfo"
    },
    GiftCardCreatePayload: {
      giftCard: "GiftCard",
      giftCardCode: "String",
      userErrors: "GiftCardUserError"
    },
    GiftCardDisablePayload: {
      giftCard: "GiftCard",
      userErrors: "UserError"
    },
    GiftCardEdge: {
      cursor: "String",
      node: "GiftCard"
    },
    GiftCardSale: {
      actionType: "SaleActionType",
      id: "ID",
      lineItem: "LineItem",
      lineType: "SaleLineType",
      quantity: "Int",
      taxes: "SaleTax",
      totalAmount: "MoneyBag",
      totalDiscountAmountAfterTaxes: "MoneyBag",
      totalDiscountAmountBeforeTaxes: "MoneyBag",
      totalTaxAmount: "MoneyBag"
    },
    GiftCardUpdatePayload: {
      giftCard: "GiftCard",
      userErrors: "UserError"
    },
    GiftCardUserError: {
      code: "GiftCardErrorCode",
      field: "String",
      message: "String"
    },
    HTML: `scalar.HTML`,
    HasEvents: {
      "...on Company": "Company",
      "...on CompanyLocation": "CompanyLocation",
      "...on Customer": "Customer",
      "...on DiscountAutomaticBxgy": "DiscountAutomaticBxgy",
      "...on DiscountAutomaticNode": "DiscountAutomaticNode",
      "...on DiscountCodeNode": "DiscountCodeNode",
      "...on DiscountNode": "DiscountNode",
      "...on DraftOrder": "DraftOrder",
      "...on Order": "Order",
      "...on PriceRule": "PriceRule",
      events: "EventConnection"
    },
    HasLocalizationExtensions: {
      "...on DraftOrder": "DraftOrder",
      "...on Order": "Order",
      localizationExtensions: "LocalizationExtensionConnection"
    },
    HasMetafieldDefinitions: {
      "...on Collection": "Collection",
      "...on Company": "Company",
      "...on CompanyLocation": "CompanyLocation",
      "...on Customer": "Customer",
      "...on DiscountAutomaticNode": "DiscountAutomaticNode",
      "...on DiscountCodeNode": "DiscountCodeNode",
      "...on DiscountNode": "DiscountNode",
      "...on Location": "Location",
      "...on Order": "Order",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      metafieldDefinitions: "MetafieldDefinitionConnection"
    },
    HasMetafields: {
      "...on AppInstallation": "AppInstallation",
      "...on Collection": "Collection",
      "...on Company": "Company",
      "...on CompanyLocation": "CompanyLocation",
      "...on Customer": "Customer",
      "...on DiscountAutomaticNode": "DiscountAutomaticNode",
      "...on DiscountCodeNode": "DiscountCodeNode",
      "...on DiscountNode": "DiscountNode",
      "...on DraftOrder": "DraftOrder",
      "...on Image": "Image",
      "...on Location": "Location",
      "...on Order": "Order",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      "...on Shop": "Shop",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection"
    },
    HasPublishedTranslations: {
      "...on Collection": "Collection",
      "...on Link": "Link",
      "...on OnlineStoreArticle": "OnlineStoreArticle",
      "...on OnlineStoreBlog": "OnlineStoreBlog",
      "...on OnlineStorePage": "OnlineStorePage",
      "...on Product": "Product",
      "...on ProductOption": "ProductOption",
      "...on ProductVariant": "ProductVariant",
      "...on Shop": "Shop",
      "...on ShopPolicy": "ShopPolicy",
      translations: "PublishedTranslation"
    },
    Image: {
      altText: "String",
      height: "Int",
      id: "ID",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      originalSrc: "URL",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      src: "URL",
      transformedSrc: "URL",
      url: "URL",
      width: "Int"
    },
    ImageConnection: {
      edges: "ImageEdge",
      nodes: "Image",
      pageInfo: "PageInfo"
    },
    ImageEdge: {
      cursor: "String",
      node: "Image"
    },
    ImageUploadParameter: {
      name: "String",
      value: "String"
    },
    InventoryActivatePayload: {
      inventoryLevel: "InventoryLevel",
      userErrors: "UserError"
    },
    InventoryAdjustQuantitiesPayload: {
      inventoryAdjustmentGroup: "InventoryAdjustmentGroup",
      userErrors: "InventoryAdjustQuantitiesUserError"
    },
    InventoryAdjustQuantitiesUserError: {
      code: "InventoryAdjustQuantitiesUserErrorCode",
      field: "String",
      message: "String"
    },
    InventoryAdjustQuantityPayload: {
      inventoryLevel: "InventoryLevel",
      userErrors: "UserError"
    },
    InventoryAdjustmentGroup: {
      app: "App",
      changes: "InventoryChange",
      createdAt: "DateTime",
      id: "ID",
      reason: "String",
      referenceDocumentUri: "String",
      staffMember: "StaffMember"
    },
    InventoryBulkAdjustQuantityAtLocationPayload: {
      inventoryLevels: "InventoryLevel",
      userErrors: "UserError"
    },
    InventoryBulkToggleActivationPayload: {
      inventoryItem: "InventoryItem",
      inventoryLevels: "InventoryLevel",
      userErrors: "InventoryBulkToggleActivationUserError"
    },
    InventoryBulkToggleActivationUserError: {
      code: "InventoryBulkToggleActivationUserErrorCode",
      field: "String",
      message: "String"
    },
    InventoryChange: {
      delta: "Int",
      item: "InventoryItem",
      ledgerDocumentUri: "String",
      location: "Location",
      name: "String",
      quantityAfterChange: "Int"
    },
    InventoryDeactivatePayload: {
      userErrors: "UserError"
    },
    InventoryItem: {
      countryCodeOfOrigin: "CountryCode",
      countryHarmonizedSystemCodes: "CountryHarmonizedSystemCodeConnection",
      createdAt: "DateTime",
      duplicateSkuCount: "Int",
      harmonizedSystemCode: "String",
      id: "ID",
      inventoryHistoryUrl: "URL",
      inventoryLevel: "InventoryLevel",
      inventoryLevels: "InventoryLevelConnection",
      legacyResourceId: "UnsignedInt64",
      locationsCount: "Int",
      provinceCodeOfOrigin: "String",
      requiresShipping: "Boolean",
      sku: "String",
      tracked: "Boolean",
      trackedEditable: "EditableProperty",
      unitCost: "MoneyV2",
      updatedAt: "DateTime",
      variant: "ProductVariant"
    },
    InventoryItemConnection: {
      edges: "InventoryItemEdge",
      nodes: "InventoryItem",
      pageInfo: "PageInfo"
    },
    InventoryItemEdge: {
      cursor: "String",
      node: "InventoryItem"
    },
    InventoryItemUpdatePayload: {
      inventoryItem: "InventoryItem",
      userErrors: "UserError"
    },
    InventoryLevel: {
      available: "Int",
      canDeactivate: "Boolean",
      createdAt: "DateTime",
      deactivationAlert: "String",
      deactivationAlertHtml: "FormattedString",
      id: "ID",
      incoming: "Int",
      item: "InventoryItem",
      location: "Location",
      quantities: "InventoryQuantity",
      updatedAt: "DateTime"
    },
    InventoryLevelConnection: {
      edges: "InventoryLevelEdge",
      nodes: "InventoryLevel",
      pageInfo: "PageInfo"
    },
    InventoryLevelEdge: {
      cursor: "String",
      node: "InventoryLevel"
    },
    InventoryMoveQuantitiesPayload: {
      inventoryAdjustmentGroup: "InventoryAdjustmentGroup",
      userErrors: "InventoryMoveQuantitiesUserError"
    },
    InventoryMoveQuantitiesUserError: {
      code: "InventoryMoveQuantitiesUserErrorCode",
      field: "String",
      message: "String"
    },
    InventoryProperties: {
      quantityNames: "InventoryQuantityName"
    },
    InventoryQuantity: {
      name: "String",
      quantity: "Int",
      updatedAt: "DateTime"
    },
    InventoryQuantityName: {
      belongsTo: "String",
      comprises: "String",
      displayName: "String",
      isInUse: "Boolean",
      name: "String"
    },
    InventorySetOnHandQuantitiesPayload: {
      inventoryAdjustmentGroup: "InventoryAdjustmentGroup",
      userErrors: "InventorySetOnHandQuantitiesUserError"
    },
    InventorySetOnHandQuantitiesUserError: {
      code: "InventorySetOnHandQuantitiesUserErrorCode",
      field: "String",
      message: "String"
    },
    JSON: `scalar.JSON`,
    Job: {
      done: "Boolean",
      id: "ID",
      query: "QueryRoot"
    },
    JobResult: {
      "...on CustomerSegmentMembersQuery": "CustomerSegmentMembersQuery",
      done: "Boolean",
      id: "ID"
    },
    LegacyInteroperability: {
      "...on Customer": "Customer",
      "...on DraftOrder": "DraftOrder",
      "...on Fulfillment": "Fulfillment",
      "...on InventoryItem": "InventoryItem",
      "...on Location": "Location",
      "...on MarketingEvent": "MarketingEvent",
      "...on Metafield": "Metafield",
      "...on MetafieldStorefrontVisibility": "MetafieldStorefrontVisibility",
      "...on Order": "Order",
      "...on PriceRule": "PriceRule",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      "...on Refund": "Refund",
      "...on SavedSearch": "SavedSearch",
      "...on ScriptTag": "ScriptTag",
      "...on ShopifyPaymentsDispute": "ShopifyPaymentsDispute",
      "...on ShopifyPaymentsPayout": "ShopifyPaymentsPayout",
      "...on WebhookSubscription": "WebhookSubscription",
      legacyResourceId: "UnsignedInt64"
    },
    LimitedPendingOrderCount: {
      atMax: "Boolean",
      count: "Int"
    },
    LineItem: {
      canRestock: "Boolean",
      contract: "SubscriptionContract",
      currentQuantity: "Int",
      customAttributes: "Attribute",
      discountAllocations: "DiscountAllocation",
      discountedTotal: "Money",
      discountedTotalSet: "MoneyBag",
      discountedUnitPrice: "Money",
      discountedUnitPriceSet: "MoneyBag",
      duties: "Duty",
      fulfillableQuantity: "Int",
      fulfillmentService: "FulfillmentService",
      fulfillmentStatus: "String",
      id: "ID",
      image: "Image",
      merchantEditable: "Boolean",
      name: "String",
      nonFulfillableQuantity: "Int",
      originalTotal: "Money",
      originalTotalSet: "MoneyBag",
      originalUnitPrice: "Money",
      originalUnitPriceSet: "MoneyBag",
      product: "Product",
      quantity: "Int",
      refundableQuantity: "Int",
      requiresShipping: "Boolean",
      restockable: "Boolean",
      sellingPlan: "LineItemSellingPlan",
      sku: "String",
      staffMember: "StaffMember",
      taxLines: "TaxLine",
      taxable: "Boolean",
      title: "String",
      totalDiscount: "Money",
      totalDiscountSet: "MoneyBag",
      unfulfilledDiscountedTotal: "Money",
      unfulfilledDiscountedTotalSet: "MoneyBag",
      unfulfilledOriginalTotal: "Money",
      unfulfilledOriginalTotalSet: "MoneyBag",
      unfulfilledQuantity: "Int",
      variant: "ProductVariant",
      variantTitle: "String",
      vendor: "String"
    },
    LineItemConnection: {
      edges: "LineItemEdge",
      nodes: "LineItem",
      pageInfo: "PageInfo"
    },
    LineItemEdge: {
      cursor: "String",
      node: "LineItem"
    },
    LineItemMutable: {
      canRestock: "Boolean",
      customAttributes: "Attribute",
      discountAllocations: "DiscountAllocation",
      discountedTotal: "Money",
      discountedTotalSet: "MoneyBag",
      discountedUnitPrice: "Money",
      discountedUnitPriceSet: "MoneyBag",
      fulfillableQuantity: "Int",
      fulfillmentService: "FulfillmentService",
      fulfillmentStatus: "String",
      id: "ID",
      image: "Image",
      merchantEditable: "Boolean",
      name: "String",
      nonFulfillableQuantity: "Int",
      originalTotal: "Money",
      originalTotalSet: "MoneyBag",
      originalUnitPrice: "Money",
      originalUnitPriceSet: "MoneyBag",
      product: "Product",
      quantity: "Int",
      refundableQuantity: "Int",
      requiresShipping: "Boolean",
      restockable: "Boolean",
      sku: "String",
      staffMember: "StaffMember",
      taxLines: "TaxLine",
      taxable: "Boolean",
      title: "String",
      totalDiscount: "Money",
      totalDiscountSet: "MoneyBag",
      unfulfilledDiscountedTotal: "Money",
      unfulfilledDiscountedTotalSet: "MoneyBag",
      unfulfilledOriginalTotal: "Money",
      unfulfilledOriginalTotalSet: "MoneyBag",
      unfulfilledQuantity: "Int",
      variant: "ProductVariant",
      variantTitle: "String",
      vendor: "String"
    },
    LineItemMutableConnection: {
      edges: "LineItemMutableEdge",
      nodes: "LineItemMutable",
      pageInfo: "PageInfo"
    },
    LineItemMutableEdge: {
      cursor: "String",
      node: "LineItemMutable"
    },
    LineItemSellingPlan: {
      name: "String",
      sellingPlanId: "ID"
    },
    Link: {
      label: "String",
      translations: "PublishedTranslation",
      url: "URL"
    },
    Locale: {
      isoCode: "String",
      name: "String"
    },
    LocalizationExtension: {
      countryCode: "CountryCode",
      key: "LocalizationExtensionKey",
      purpose: "LocalizationExtensionPurpose",
      title: "String",
      value: "String"
    },
    LocalizationExtensionConnection: {
      edges: "LocalizationExtensionEdge",
      nodes: "LocalizationExtension",
      pageInfo: "PageInfo"
    },
    LocalizationExtensionEdge: {
      cursor: "String",
      node: "LocalizationExtension"
    },
    Location: {
      activatable: "Boolean",
      address: "LocationAddress",
      addressVerified: "Boolean",
      deactivatable: "Boolean",
      deactivatedAt: "String",
      deletable: "Boolean",
      fulfillmentService: "FulfillmentService",
      fulfillsOnlineOrders: "Boolean",
      hasActiveInventory: "Boolean",
      hasUnfulfilledOrders: "Boolean",
      id: "ID",
      inventoryLevel: "InventoryLevel",
      inventoryLevels: "InventoryLevelConnection",
      isActive: "Boolean",
      isPrimary: "Boolean",
      legacyResourceId: "UnsignedInt64",
      localPickupSettingsV2: "DeliveryLocalPickupSettings",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      name: "String",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      shipsInventory: "Boolean",
      suggestedAddresses: "LocationSuggestedAddress"
    },
    LocationActivatePayload: {
      location: "Location",
      locationActivateUserErrors: "LocationActivateUserError"
    },
    LocationActivateUserError: {
      code: "LocationActivateUserErrorCode",
      field: "String",
      message: "String"
    },
    LocationAddPayload: {
      location: "Location",
      userErrors: "LocationAddUserError"
    },
    LocationAddUserError: {
      code: "LocationAddUserErrorCode",
      field: "String",
      message: "String"
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
      nodes: "Location",
      pageInfo: "PageInfo"
    },
    LocationDeactivatePayload: {
      location: "Location",
      locationDeactivateUserErrors: "LocationDeactivateUserError"
    },
    LocationDeactivateUserError: {
      code: "LocationDeactivateUserErrorCode",
      field: "String",
      message: "String"
    },
    LocationDeletePayload: {
      deletedLocationId: "ID",
      locationDeleteUserErrors: "LocationDeleteUserError"
    },
    LocationDeleteUserError: {
      code: "LocationDeleteUserErrorCode",
      field: "String",
      message: "String"
    },
    LocationEdge: {
      cursor: "String",
      node: "Location"
    },
    LocationEditPayload: {
      location: "Location",
      userErrors: "LocationEditUserError"
    },
    LocationEditUserError: {
      code: "LocationEditUserErrorCode",
      field: "String",
      message: "String"
    },
    LocationLocalPickupDisablePayload: {
      locationId: "ID",
      userErrors: "DeliveryLocationLocalPickupSettingsError"
    },
    LocationLocalPickupEnablePayload: {
      localPickupSettings: "DeliveryLocalPickupSettings",
      userErrors: "DeliveryLocationLocalPickupSettingsError"
    },
    LocationSuggestedAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      country: "String",
      countryCode: "CountryCode",
      formatted: "String",
      province: "String",
      provinceCode: "String",
      zip: "String"
    },
    MailingAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      company: "String",
      coordinatesValidated: "Boolean",
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
    ManualDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      description: "String",
      index: "Int",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      title: "String",
      value: "PricingValue"
    },
    Market: {
      currencySettings: "MarketCurrencySettings",
      enabled: "Boolean",
      id: "ID",
      name: "String",
      priceList: "PriceList",
      primary: "Boolean",
      regions: "MarketRegionConnection",
      webPresence: "MarketWebPresence"
    },
    MarketConnection: {
      edges: "MarketEdge",
      nodes: "Market",
      pageInfo: "PageInfo"
    },
    MarketCreatePayload: {
      market: "Market",
      userErrors: "MarketUserError"
    },
    MarketCurrencySettings: {
      baseCurrency: "CurrencySetting",
      localCurrencies: "Boolean"
    },
    MarketCurrencySettingsUpdatePayload: {
      market: "Market",
      userErrors: "MarketCurrencySettingsUserError"
    },
    MarketCurrencySettingsUserError: {
      code: "MarketCurrencySettingsUserErrorCode",
      field: "String",
      message: "String"
    },
    MarketDeletePayload: {
      deletedId: "ID",
      userErrors: "MarketUserError"
    },
    MarketEdge: {
      cursor: "String",
      node: "Market"
    },
    MarketLocalizableContent: {
      digest: "String",
      key: "String",
      value: "String"
    },
    MarketLocalizableResource: {
      marketLocalizableContent: "MarketLocalizableContent",
      marketLocalizations: "MarketLocalization",
      resourceId: "ID"
    },
    MarketLocalizableResourceConnection: {
      edges: "MarketLocalizableResourceEdge",
      nodes: "MarketLocalizableResource",
      pageInfo: "PageInfo"
    },
    MarketLocalizableResourceEdge: {
      cursor: "String",
      node: "MarketLocalizableResource"
    },
    MarketLocalization: {
      key: "String",
      market: "Market",
      outdated: "Boolean",
      updatedAt: "DateTime",
      value: "String"
    },
    MarketLocalizationsRegisterPayload: {
      marketLocalizations: "MarketLocalization",
      userErrors: "TranslationUserError"
    },
    MarketLocalizationsRemovePayload: {
      marketLocalizations: "MarketLocalization",
      userErrors: "TranslationUserError"
    },
    MarketRegion: {
      "...on MarketRegionCountry": "MarketRegionCountry",
      id: "ID",
      name: "String"
    },
    MarketRegionConnection: {
      edges: "MarketRegionEdge",
      nodes: "MarketRegion",
      pageInfo: "PageInfo"
    },
    MarketRegionCountry: {
      code: "CountryCode",
      id: "ID",
      name: "String"
    },
    MarketRegionDeletePayload: {
      deletedId: "ID",
      market: "Market",
      userErrors: "MarketUserError"
    },
    MarketRegionEdge: {
      cursor: "String",
      node: "MarketRegion"
    },
    MarketRegionsCreatePayload: {
      market: "Market",
      userErrors: "MarketUserError"
    },
    MarketUpdatePayload: {
      market: "Market",
      userErrors: "MarketUserError"
    },
    MarketUserError: {
      code: "MarketUserErrorCode",
      field: "String",
      message: "String"
    },
    MarketWebPresence: {
      alternateLocales: "String",
      defaultLocale: "String",
      domain: "Domain",
      id: "ID",
      market: "Market",
      rootUrls: "MarketWebPresenceRootUrl",
      subfolderSuffix: "String"
    },
    MarketWebPresenceCreatePayload: {
      market: "Market",
      userErrors: "MarketUserError"
    },
    MarketWebPresenceDeletePayload: {
      deletedId: "ID",
      market: "Market",
      userErrors: "MarketUserError"
    },
    MarketWebPresenceRootUrl: {
      locale: "String",
      url: "URL"
    },
    MarketWebPresenceUpdatePayload: {
      market: "Market",
      userErrors: "MarketUserError"
    },
    MarketingActivity: {
      activityListUrl: "URL",
      adSpend: "MoneyV2",
      app: "App",
      appErrors: "MarketingActivityExtensionAppErrors",
      budget: "MarketingBudget",
      createdAt: "DateTime",
      formData: "String",
      id: "ID",
      inMainWorkflowVersion: "Boolean",
      marketingChannel: "MarketingChannel",
      marketingEvent: "MarketingEvent",
      sourceAndMedium: "String",
      status: "MarketingActivityStatus",
      statusBadgeType: "MarketingActivityStatusBadgeType",
      statusBadgeTypeV2: "BadgeType",
      statusLabel: "String",
      statusTransitionedAt: "DateTime",
      tactic: "MarketingTactic",
      targetStatus: "MarketingActivityStatus",
      title: "String",
      updatedAt: "DateTime",
      utmParameters: "UTMParameters"
    },
    MarketingActivityConnection: {
      edges: "MarketingActivityEdge",
      nodes: "MarketingActivity",
      pageInfo: "PageInfo"
    },
    MarketingActivityCreateExternalPayload: {
      marketingActivity: "MarketingActivity",
      userErrors: "MarketingActivityUserError"
    },
    MarketingActivityCreatePayload: {
      marketingActivity: "MarketingActivity",
      redirectPath: "String",
      userErrors: "UserError"
    },
    MarketingActivityEdge: {
      cursor: "String",
      node: "MarketingActivity"
    },
    MarketingActivityExtensionAppErrors: {
      code: "MarketingActivityExtensionAppErrorCode",
      userErrors: "UserError"
    },
    MarketingActivityUpdateExternalPayload: {
      marketingActivity: "MarketingActivity",
      userErrors: "MarketingActivityUserError"
    },
    MarketingActivityUpdatePayload: {
      marketingActivity: "MarketingActivity",
      redirectPath: "String",
      userErrors: "UserError"
    },
    MarketingActivityUserError: {
      code: "MarketingActivityUserErrorCode",
      field: "String",
      message: "String"
    },
    MarketingBudget: {
      budgetType: "MarketingBudgetBudgetType",
      total: "MoneyV2"
    },
    MarketingEngagement: {
      adSpend: "MoneyV2",
      clicksCount: "Int",
      commentsCount: "Int",
      complaintsCount: "Int",
      failsCount: "Int",
      favoritesCount: "Int",
      fetchedAt: "DateTime",
      impressionsCount: "Int",
      isCumulative: "Boolean",
      marketingActivity: "MarketingActivity",
      occurredOn: "Date",
      sendsCount: "Int",
      sharesCount: "Int",
      uniqueClicksCount: "Int",
      uniqueViewsCount: "Int",
      unsubscribesCount: "Int",
      utcOffset: "UtcOffset",
      viewsCount: "Int"
    },
    MarketingEngagementCreatePayload: {
      marketingEngagement: "MarketingEngagement",
      userErrors: "UserError"
    },
    MarketingEvent: {
      app: "App",
      channel: "MarketingChannel",
      description: "String",
      endedAt: "DateTime",
      id: "ID",
      legacyResourceId: "UnsignedInt64",
      manageUrl: "URL",
      previewUrl: "URL",
      remoteId: "String",
      scheduledToEndAt: "DateTime",
      sourceAndMedium: "String",
      startedAt: "DateTime",
      targetTypeDisplayText: "String",
      type: "MarketingTactic",
      utmCampaign: "String",
      utmMedium: "String",
      utmSource: "String"
    },
    MarketingEventConnection: {
      edges: "MarketingEventEdge",
      nodes: "MarketingEvent",
      pageInfo: "PageInfo"
    },
    MarketingEventEdge: {
      cursor: "String",
      node: "MarketingEvent"
    },
    Media: {
      "...on ExternalVideo": "ExternalVideo",
      "...on MediaImage": "MediaImage",
      "...on Model3d": "Model3d",
      "...on Video": "Video",
      alt: "String",
      mediaContentType: "MediaContentType",
      mediaErrors: "MediaError",
      mediaWarnings: "MediaWarning",
      preview: "MediaPreviewImage",
      status: "MediaStatus"
    },
    MediaConnection: {
      edges: "MediaEdge",
      nodes: "Media",
      pageInfo: "PageInfo"
    },
    MediaEdge: {
      cursor: "String",
      node: "Media"
    },
    MediaError: {
      code: "MediaErrorCode",
      details: "String",
      message: "String"
    },
    MediaImage: {
      alt: "String",
      createdAt: "DateTime",
      fileErrors: "FileError",
      fileStatus: "FileStatus",
      id: "ID",
      image: "Image",
      mediaContentType: "MediaContentType",
      mediaErrors: "MediaError",
      mediaWarnings: "MediaWarning",
      mimeType: "String",
      originalSource: "MediaImageOriginalSource",
      preview: "MediaPreviewImage",
      status: "MediaStatus"
    },
    MediaImageOriginalSource: {
      fileSize: "Int"
    },
    MediaPreviewImage: {
      image: "Image",
      status: "MediaPreviewImageStatus"
    },
    MediaUserError: {
      code: "MediaUserErrorCode",
      field: "String",
      message: "String"
    },
    MediaWarning: {
      code: "MediaWarningCode",
      message: "String"
    },
    MerchantApprovalSignals: {
      identityVerified: "Boolean",
      verifiedByShopify: "Boolean"
    },
    Metafield: {
      createdAt: "DateTime",
      definition: "MetafieldDefinition",
      description: "String",
      id: "ID",
      key: "String",
      legacyResourceId: "UnsignedInt64",
      namespace: "String",
      owner: "HasMetafields",
      ownerType: "MetafieldOwnerType",
      reference: "MetafieldReference",
      references: "MetafieldReferenceConnection",
      type: "String",
      updatedAt: "DateTime",
      value: "String"
    },
    MetafieldAccess: {
      admin: "MetafieldAdminAccess"
    },
    MetafieldConnection: {
      edges: "MetafieldEdge",
      nodes: "Metafield",
      pageInfo: "PageInfo"
    },
    MetafieldDefinition: {
      access: "MetafieldAccess",
      description: "String",
      id: "ID",
      key: "String",
      metafields: "MetafieldConnection",
      metafieldsCount: "Int",
      name: "String",
      namespace: "String",
      ownerType: "MetafieldOwnerType",
      pinnedPosition: "Int",
      standardTemplate: "StandardMetafieldDefinitionTemplate",
      type: "MetafieldDefinitionType",
      useAsCollectionCondition: "Boolean",
      validationStatus: "MetafieldDefinitionValidationStatus",
      validations: "MetafieldDefinitionValidation",
      visibleToStorefrontApi: "Boolean"
    },
    MetafieldDefinitionConnection: {
      edges: "MetafieldDefinitionEdge",
      nodes: "MetafieldDefinition",
      pageInfo: "PageInfo"
    },
    MetafieldDefinitionCreatePayload: {
      createdDefinition: "MetafieldDefinition",
      userErrors: "MetafieldDefinitionCreateUserError"
    },
    MetafieldDefinitionCreateUserError: {
      code: "MetafieldDefinitionCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    MetafieldDefinitionDeletePayload: {
      deletedDefinitionId: "ID",
      userErrors: "MetafieldDefinitionDeleteUserError"
    },
    MetafieldDefinitionDeleteUserError: {
      code: "MetafieldDefinitionDeleteUserErrorCode",
      field: "String",
      message: "String"
    },
    MetafieldDefinitionEdge: {
      cursor: "String",
      node: "MetafieldDefinition"
    },
    MetafieldDefinitionPinPayload: {
      pinnedDefinition: "MetafieldDefinition",
      userErrors: "MetafieldDefinitionPinUserError"
    },
    MetafieldDefinitionPinUserError: {
      code: "MetafieldDefinitionPinUserErrorCode",
      field: "String",
      message: "String"
    },
    MetafieldDefinitionSupportedValidation: {
      name: "String",
      type: "String"
    },
    MetafieldDefinitionType: {
      category: "String",
      name: "String",
      supportedValidations: "MetafieldDefinitionSupportedValidation",
      supportsDefinitionMigrations: "Boolean",
      valueType: "MetafieldValueType"
    },
    MetafieldDefinitionUnpinPayload: {
      unpinnedDefinition: "MetafieldDefinition",
      userErrors: "MetafieldDefinitionUnpinUserError"
    },
    MetafieldDefinitionUnpinUserError: {
      code: "MetafieldDefinitionUnpinUserErrorCode",
      field: "String",
      message: "String"
    },
    MetafieldDefinitionUpdatePayload: {
      updatedDefinition: "MetafieldDefinition",
      userErrors: "MetafieldDefinitionUpdateUserError"
    },
    MetafieldDefinitionUpdateUserError: {
      code: "MetafieldDefinitionUpdateUserErrorCode",
      field: "String",
      message: "String"
    },
    MetafieldDefinitionValidation: {
      name: "String",
      type: "String",
      value: "String"
    },
    MetafieldDeletePayload: {
      deletedId: "ID",
      userErrors: "UserError"
    },
    MetafieldEdge: {
      cursor: "String",
      node: "Metafield"
    },
    MetafieldReference: {
      "...on Collection": "Collection",
      "...on GenericFile": "GenericFile",
      "...on MediaImage": "MediaImage",
      "...on Metaobject": "Metaobject",
      "...on OnlineStorePage": "OnlineStorePage",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      "...on Video": "Video"
    },
    MetafieldReferenceConnection: {
      edges: "MetafieldReferenceEdge",
      nodes: "MetafieldReference",
      pageInfo: "PageInfo"
    },
    MetafieldReferenceEdge: {
      cursor: "String",
      node: "MetafieldReference"
    },
    MetafieldReferencer: {
      "...on AppInstallation": "AppInstallation",
      "...on Collection": "Collection",
      "...on Customer": "Customer",
      "...on DiscountAutomaticNode": "DiscountAutomaticNode",
      "...on DiscountCodeNode": "DiscountCodeNode",
      "...on DiscountNode": "DiscountNode",
      "...on DraftOrder": "DraftOrder",
      "...on FulfillmentOrder": "FulfillmentOrder",
      "...on Location": "Location",
      "...on Metaobject": "Metaobject",
      "...on OnlineStoreArticle": "OnlineStoreArticle",
      "...on OnlineStoreBlog": "OnlineStoreBlog",
      "...on OnlineStorePage": "OnlineStorePage",
      "...on Order": "Order",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      "...on Shop": "Shop"
    },
    MetafieldRelation: {
      key: "String",
      name: "String",
      namespace: "String",
      referencer: "MetafieldReferencer",
      target: "MetafieldReference"
    },
    MetafieldRelationConnection: {
      edges: "MetafieldRelationEdge",
      nodes: "MetafieldRelation",
      pageInfo: "PageInfo"
    },
    MetafieldRelationEdge: {
      cursor: "String",
      node: "MetafieldRelation"
    },
    MetafieldStorefrontVisibility: {
      createdAt: "DateTime",
      id: "ID",
      key: "String",
      legacyResourceId: "UnsignedInt64",
      namespace: "String",
      ownerType: "MetafieldOwnerType",
      updatedAt: "DateTime"
    },
    MetafieldStorefrontVisibilityConnection: {
      edges: "MetafieldStorefrontVisibilityEdge",
      nodes: "MetafieldStorefrontVisibility",
      pageInfo: "PageInfo"
    },
    MetafieldStorefrontVisibilityCreatePayload: {
      metafieldStorefrontVisibility: "MetafieldStorefrontVisibility",
      userErrors: "UserError"
    },
    MetafieldStorefrontVisibilityDeletePayload: {
      deletedMetafieldStorefrontVisibilityId: "ID",
      userErrors: "UserError"
    },
    MetafieldStorefrontVisibilityEdge: {
      cursor: "String",
      node: "MetafieldStorefrontVisibility"
    },
    MetafieldsSetPayload: {
      metafields: "Metafield",
      userErrors: "MetafieldsSetUserError"
    },
    MetafieldsSetUserError: {
      code: "MetafieldsSetUserErrorCode",
      elementIndex: "Int",
      field: "String",
      message: "String"
    },
    Metaobject: {
      capabilities: "MetaobjectCapabilityData",
      definition: "MetaobjectDefinition",
      displayName: "String",
      field: "MetaobjectField",
      fields: "MetaobjectField",
      handle: "String",
      id: "ID",
      referencedBy: "MetafieldRelationConnection",
      staffMember: "StaffMember",
      type: "String",
      updatedAt: "DateTime"
    },
    MetaobjectAccess: {
      admin: "MetaobjectAdminAccess",
      storefront: "MetaobjectStorefrontAccess"
    },
    MetaobjectBulkDeletePayload: {
      job: "Job",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectCapabilities: {
      publishable: "MetaobjectCapabilitiesPublishable"
    },
    MetaobjectCapabilitiesPublishable: {
      enabled: "Boolean"
    },
    MetaobjectCapabilityData: {
      publishable: "MetaobjectCapabilityDataPublishable"
    },
    MetaobjectCapabilityDataPublishable: {
      status: "MetaobjectStatus"
    },
    MetaobjectConnection: {
      edges: "MetaobjectEdge",
      nodes: "Metaobject",
      pageInfo: "PageInfo"
    },
    MetaobjectCreatePayload: {
      metaobject: "Metaobject",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectDefinition: {
      access: "MetaobjectAccess",
      capabilities: "MetaobjectCapabilities",
      description: "String",
      displayNameKey: "String",
      fieldDefinitions: "MetaobjectFieldDefinition",
      id: "ID",
      metaobjects: "MetaobjectConnection",
      metaobjectsCount: "Int",
      name: "String",
      type: "String"
    },
    MetaobjectDefinitionConnection: {
      edges: "MetaobjectDefinitionEdge",
      nodes: "MetaobjectDefinition",
      pageInfo: "PageInfo"
    },
    MetaobjectDefinitionCreatePayload: {
      metaobjectDefinition: "MetaobjectDefinition",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectDefinitionDeletePayload: {
      deletedId: "ID",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectDefinitionEdge: {
      cursor: "String",
      node: "MetaobjectDefinition"
    },
    MetaobjectDefinitionUpdatePayload: {
      metaobjectDefinition: "MetaobjectDefinition",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectDeletePayload: {
      deletedId: "ID",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectEdge: {
      cursor: "String",
      node: "Metaobject"
    },
    MetaobjectField: {
      definition: "MetaobjectFieldDefinition",
      key: "String",
      reference: "MetafieldReference",
      references: "MetafieldReferenceConnection",
      type: "String",
      value: "String"
    },
    MetaobjectFieldDefinition: {
      description: "String",
      key: "String",
      name: "String",
      required: "Boolean",
      type: "MetafieldDefinitionType",
      validations: "MetafieldDefinitionValidation"
    },
    MetaobjectUpdatePayload: {
      metaobject: "Metaobject",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectUpsertPayload: {
      metaobject: "Metaobject",
      userErrors: "MetaobjectUserError"
    },
    MetaobjectUserError: {
      code: "MetaobjectUserErrorCode",
      elementIndex: "Int",
      elementKey: "String",
      field: "String",
      message: "String"
    },
    Model3d: {
      alt: "String",
      boundingBox: "Model3dBoundingBox",
      filename: "String",
      id: "ID",
      mediaContentType: "MediaContentType",
      mediaErrors: "MediaError",
      mediaWarnings: "MediaWarning",
      originalSource: "Model3dSource",
      preview: "MediaPreviewImage",
      sources: "Model3dSource",
      status: "MediaStatus"
    },
    Model3dBoundingBox: {
      size: "Vector3"
    },
    Model3dSource: {
      filesize: "Int",
      format: "String",
      mimeType: "String",
      url: "String"
    },
    Money: `scalar.Money`,
    MoneyBag: {
      presentmentMoney: "MoneyV2",
      shopMoney: "MoneyV2"
    },
    MoneyV2: {
      amount: "Decimal",
      currencyCode: "CurrencyCode"
    },
    Mutation: {
      abandonmentEmailStateUpdate: "AbandonmentEmailStateUpdatePayload",
      appCreditCreate: "AppCreditCreatePayload",
      appPurchaseOneTimeCreate: "AppPurchaseOneTimeCreatePayload",
      appRevenueAttributionRecordCreate: "AppRevenueAttributionRecordCreatePayload",
      appRevenueAttributionRecordDelete: "AppRevenueAttributionRecordDeletePayload",
      appSubscriptionCancel: "AppSubscriptionCancelPayload",
      appSubscriptionCreate: "AppSubscriptionCreatePayload",
      appSubscriptionLineItemUpdate: "AppSubscriptionLineItemUpdatePayload",
      appSubscriptionTrialExtend: "AppSubscriptionTrialExtendPayload",
      appUsageRecordCreate: "AppUsageRecordCreatePayload",
      bulkOperationCancel: "BulkOperationCancelPayload",
      bulkOperationRunMutation: "BulkOperationRunMutationPayload",
      bulkOperationRunQuery: "BulkOperationRunQueryPayload",
      bulkProductResourceFeedbackCreate: "BulkProductResourceFeedbackCreatePayload",
      collectionAddProducts: "CollectionAddProductsPayload",
      collectionAddProductsV2: "CollectionAddProductsV2Payload",
      collectionCreate: "CollectionCreatePayload",
      collectionDelete: "CollectionDeletePayload",
      collectionPublish: "CollectionPublishPayload",
      collectionRemoveProducts: "CollectionRemoveProductsPayload",
      collectionReorderProducts: "CollectionReorderProductsPayload",
      collectionUnpublish: "CollectionUnpublishPayload",
      collectionUpdate: "CollectionUpdatePayload",
      companiesDelete: "CompaniesDeletePayload",
      companyAddressDelete: "CompanyAddressDeletePayload",
      companyAssignCustomerAsContact: "CompanyAssignCustomerAsContactPayload",
      companyAssignMainContact: "CompanyAssignMainContactPayload",
      companyContactAssignRole: "CompanyContactAssignRolePayload",
      companyContactAssignRoles: "CompanyContactAssignRolesPayload",
      companyContactCreate: "CompanyContactCreatePayload",
      companyContactDelete: "CompanyContactDeletePayload",
      companyContactRevokeRole: "CompanyContactRevokeRolePayload",
      companyContactRevokeRoles: "CompanyContactRevokeRolesPayload",
      companyContactUpdate: "CompanyContactUpdatePayload",
      companyContactsDelete: "CompanyContactsDeletePayload",
      companyCreate: "CompanyCreatePayload",
      companyDelete: "CompanyDeletePayload",
      companyLocationAssignAddress: "CompanyLocationAssignAddressPayload",
      companyLocationAssignRoles: "CompanyLocationAssignRolesPayload",
      companyLocationAssignTaxExemptions: "CompanyLocationAssignTaxExemptionsPayload",
      companyLocationCreate: "CompanyLocationCreatePayload",
      companyLocationCreateTaxRegistration: "CompanyLocationCreateTaxRegistrationPayload",
      companyLocationDelete: "CompanyLocationDeletePayload",
      companyLocationRevokeRoles: "CompanyLocationRevokeRolesPayload",
      companyLocationRevokeTaxExemptions: "CompanyLocationRevokeTaxExemptionsPayload",
      companyLocationRevokeTaxRegistration: "CompanyLocationRevokeTaxRegistrationPayload",
      companyLocationUpdate: "CompanyLocationUpdatePayload",
      companyLocationsDelete: "CompanyLocationsDeletePayload",
      companyRevokeMainContact: "CompanyRevokeMainContactPayload",
      companyUpdate: "CompanyUpdatePayload",
      customerAddTaxExemptions: "CustomerAddTaxExemptionsPayload",
      customerCreate: "CustomerCreatePayload",
      customerDelete: "CustomerDeletePayload",
      customerEmailMarketingConsentUpdate: "CustomerEmailMarketingConsentUpdatePayload",
      customerGenerateAccountActivationUrl: "CustomerGenerateAccountActivationUrlPayload",
      customerPaymentMethodCreditCardCreate: "CustomerPaymentMethodCreditCardCreatePayload",
      customerPaymentMethodCreditCardUpdate: "CustomerPaymentMethodCreditCardUpdatePayload",
      customerPaymentMethodGetUpdateUrl: "CustomerPaymentMethodGetUpdateUrlPayload",
      customerPaymentMethodPaypalBillingAgreementCreate: "CustomerPaymentMethodPaypalBillingAgreementCreatePayload",
      customerPaymentMethodPaypalBillingAgreementUpdate: "CustomerPaymentMethodPaypalBillingAgreementUpdatePayload",
      customerPaymentMethodRemoteCreate: "CustomerPaymentMethodRemoteCreatePayload",
      customerPaymentMethodRemoteCreditCardCreate: "CustomerPaymentMethodRemoteCreditCardCreatePayload",
      customerPaymentMethodRevoke: "CustomerPaymentMethodRevokePayload",
      customerPaymentMethodSendUpdateEmail: "CustomerPaymentMethodSendUpdateEmailPayload",
      customerRemoveTaxExemptions: "CustomerRemoveTaxExemptionsPayload",
      customerReplaceTaxExemptions: "CustomerReplaceTaxExemptionsPayload",
      customerSegmentMembersQueryCreate: "CustomerSegmentMembersQueryCreatePayload",
      customerSmsMarketingConsentUpdate: "CustomerSmsMarketingConsentUpdatePayload",
      customerUpdate: "CustomerUpdatePayload",
      customerUpdateDefaultAddress: "CustomerUpdateDefaultAddressPayload",
      delegateAccessTokenCreate: "DelegateAccessTokenCreatePayload",
      deliveryProfileCreate: "deliveryProfileCreatePayload",
      deliveryProfileRemove: "deliveryProfileRemovePayload",
      deliveryProfileUpdate: "deliveryProfileUpdatePayload",
      deliverySettingUpdate: "DeliverySettingUpdatePayload",
      deliveryShippingOriginAssign: "DeliveryShippingOriginAssignPayload",
      discountAutomaticActivate: "DiscountAutomaticActivatePayload",
      discountAutomaticAppCreate: "DiscountAutomaticAppCreatePayload",
      discountAutomaticAppUpdate: "DiscountAutomaticAppUpdatePayload",
      discountAutomaticBasicCreate: "DiscountAutomaticBasicCreatePayload",
      discountAutomaticBasicUpdate: "DiscountAutomaticBasicUpdatePayload",
      discountAutomaticBulkDelete: "DiscountAutomaticBulkDeletePayload",
      discountAutomaticBxgyCreate: "DiscountAutomaticBxgyCreatePayload",
      discountAutomaticBxgyUpdate: "DiscountAutomaticBxgyUpdatePayload",
      discountAutomaticDeactivate: "DiscountAutomaticDeactivatePayload",
      discountAutomaticDelete: "DiscountAutomaticDeletePayload",
      discountCodeActivate: "DiscountCodeActivatePayload",
      discountCodeAppCreate: "DiscountCodeAppCreatePayload",
      discountCodeAppUpdate: "DiscountCodeAppUpdatePayload",
      discountCodeBasicCreate: "DiscountCodeBasicCreatePayload",
      discountCodeBasicUpdate: "DiscountCodeBasicUpdatePayload",
      discountCodeBulkActivate: "DiscountCodeBulkActivatePayload",
      discountCodeBulkDeactivate: "DiscountCodeBulkDeactivatePayload",
      discountCodeBulkDelete: "DiscountCodeBulkDeletePayload",
      discountCodeBxgyCreate: "DiscountCodeBxgyCreatePayload",
      discountCodeBxgyUpdate: "DiscountCodeBxgyUpdatePayload",
      discountCodeDeactivate: "DiscountCodeDeactivatePayload",
      discountCodeDelete: "DiscountCodeDeletePayload",
      discountCodeFreeShippingCreate: "DiscountCodeFreeShippingCreatePayload",
      discountCodeFreeShippingUpdate: "DiscountCodeFreeShippingUpdatePayload",
      discountCodeRedeemCodeBulkDelete: "DiscountCodeRedeemCodeBulkDeletePayload",
      discountRedeemCodeBulkAdd: "DiscountRedeemCodeBulkAddPayload",
      disputeEvidenceUpdate: "DisputeEvidenceUpdatePayload",
      draftOrderBulkAddTags: "DraftOrderBulkAddTagsPayload",
      draftOrderBulkDelete: "DraftOrderBulkDeletePayload",
      draftOrderBulkRemoveTags: "DraftOrderBulkRemoveTagsPayload",
      draftOrderCalculate: "DraftOrderCalculatePayload",
      draftOrderComplete: "DraftOrderCompletePayload",
      draftOrderCreate: "DraftOrderCreatePayload",
      draftOrderCreateFromOrder: "DraftOrderCreateFromOrderPayload",
      draftOrderCreateMerchantCheckout: "DraftOrderCreateMerchantCheckoutPayload",
      draftOrderDelete: "DraftOrderDeletePayload",
      draftOrderDuplicate: "DraftOrderDuplicatePayload",
      draftOrderInvoicePreview: "DraftOrderInvoicePreviewPayload",
      draftOrderInvoiceSend: "DraftOrderInvoiceSendPayload",
      draftOrderUpdate: "DraftOrderUpdatePayload",
      eventBridgeWebhookSubscriptionCreate: "EventBridgeWebhookSubscriptionCreatePayload",
      eventBridgeWebhookSubscriptionUpdate: "EventBridgeWebhookSubscriptionUpdatePayload",
      fileCreate: "FileCreatePayload",
      fileDelete: "FileDeletePayload",
      fileUpdate: "FileUpdatePayload",
      flowTriggerReceive: "FlowTriggerReceivePayload",
      fulfillmentCancel: "FulfillmentCancelPayload",
      fulfillmentCreateV2: "FulfillmentCreateV2Payload",
      fulfillmentEventCreate: "FulfillmentEventCreatePayload",
      fulfillmentOrderAcceptCancellationRequest: "FulfillmentOrderAcceptCancellationRequestPayload",
      fulfillmentOrderAcceptFulfillmentRequest: "FulfillmentOrderAcceptFulfillmentRequestPayload",
      fulfillmentOrderCancel: "FulfillmentOrderCancelPayload",
      fulfillmentOrderClose: "FulfillmentOrderClosePayload",
      fulfillmentOrderHold: "FulfillmentOrderHoldPayload",
      fulfillmentOrderLineItemsPreparedForPickup: "FulfillmentOrderLineItemsPreparedForPickupPayload",
      fulfillmentOrderMove: "FulfillmentOrderMovePayload",
      fulfillmentOrderOpen: "FulfillmentOrderOpenPayload",
      fulfillmentOrderRejectCancellationRequest: "FulfillmentOrderRejectCancellationRequestPayload",
      fulfillmentOrderRejectFulfillmentRequest: "FulfillmentOrderRejectFulfillmentRequestPayload",
      fulfillmentOrderReleaseHold: "FulfillmentOrderReleaseHoldPayload",
      fulfillmentOrderReschedule: "FulfillmentOrderReschedulePayload",
      fulfillmentOrderSubmitCancellationRequest: "FulfillmentOrderSubmitCancellationRequestPayload",
      fulfillmentOrderSubmitFulfillmentRequest: "FulfillmentOrderSubmitFulfillmentRequestPayload",
      fulfillmentOrdersReleaseHolds: "FulfillmentOrdersReleaseHoldsPayload",
      fulfillmentOrdersSetFulfillmentDeadline: "FulfillmentOrdersSetFulfillmentDeadlinePayload",
      fulfillmentServiceCreate: "FulfillmentServiceCreatePayload",
      fulfillmentServiceDelete: "FulfillmentServiceDeletePayload",
      fulfillmentServiceUpdate: "FulfillmentServiceUpdatePayload",
      fulfillmentTrackingInfoUpdateV2: "FulfillmentTrackingInfoUpdateV2Payload",
      giftCardCreate: "GiftCardCreatePayload",
      giftCardDisable: "GiftCardDisablePayload",
      giftCardUpdate: "GiftCardUpdatePayload",
      inventoryActivate: "InventoryActivatePayload",
      inventoryAdjustQuantities: "InventoryAdjustQuantitiesPayload",
      inventoryAdjustQuantity: "InventoryAdjustQuantityPayload",
      inventoryBulkAdjustQuantityAtLocation: "InventoryBulkAdjustQuantityAtLocationPayload",
      inventoryBulkToggleActivation: "InventoryBulkToggleActivationPayload",
      inventoryDeactivate: "InventoryDeactivatePayload",
      inventoryItemUpdate: "InventoryItemUpdatePayload",
      inventoryMoveQuantities: "InventoryMoveQuantitiesPayload",
      inventorySetOnHandQuantities: "InventorySetOnHandQuantitiesPayload",
      locationActivate: "LocationActivatePayload",
      locationAdd: "LocationAddPayload",
      locationDeactivate: "LocationDeactivatePayload",
      locationDelete: "LocationDeletePayload",
      locationEdit: "LocationEditPayload",
      locationLocalPickupDisable: "LocationLocalPickupDisablePayload",
      locationLocalPickupEnable: "LocationLocalPickupEnablePayload",
      marketCreate: "MarketCreatePayload",
      marketCurrencySettingsUpdate: "MarketCurrencySettingsUpdatePayload",
      marketDelete: "MarketDeletePayload",
      marketLocalizationsRegister: "MarketLocalizationsRegisterPayload",
      marketLocalizationsRemove: "MarketLocalizationsRemovePayload",
      marketRegionDelete: "MarketRegionDeletePayload",
      marketRegionsCreate: "MarketRegionsCreatePayload",
      marketUpdate: "MarketUpdatePayload",
      marketWebPresenceCreate: "MarketWebPresenceCreatePayload",
      marketWebPresenceDelete: "MarketWebPresenceDeletePayload",
      marketWebPresenceUpdate: "MarketWebPresenceUpdatePayload",
      marketingActivityCreate: "MarketingActivityCreatePayload",
      marketingActivityCreateExternal: "MarketingActivityCreateExternalPayload",
      marketingActivityUpdate: "MarketingActivityUpdatePayload",
      marketingActivityUpdateExternal: "MarketingActivityUpdateExternalPayload",
      marketingEngagementCreate: "MarketingEngagementCreatePayload",
      metafieldDefinitionCreate: "MetafieldDefinitionCreatePayload",
      metafieldDefinitionDelete: "MetafieldDefinitionDeletePayload",
      metafieldDefinitionPin: "MetafieldDefinitionPinPayload",
      metafieldDefinitionUnpin: "MetafieldDefinitionUnpinPayload",
      metafieldDefinitionUpdate: "MetafieldDefinitionUpdatePayload",
      metafieldDelete: "MetafieldDeletePayload",
      metafieldStorefrontVisibilityCreate: "MetafieldStorefrontVisibilityCreatePayload",
      metafieldStorefrontVisibilityDelete: "MetafieldStorefrontVisibilityDeletePayload",
      metafieldsSet: "MetafieldsSetPayload",
      metaobjectBulkDelete: "MetaobjectBulkDeletePayload",
      metaobjectCreate: "MetaobjectCreatePayload",
      metaobjectDefinitionCreate: "MetaobjectDefinitionCreatePayload",
      metaobjectDefinitionDelete: "MetaobjectDefinitionDeletePayload",
      metaobjectDefinitionUpdate: "MetaobjectDefinitionUpdatePayload",
      metaobjectDelete: "MetaobjectDeletePayload",
      metaobjectUpdate: "MetaobjectUpdatePayload",
      metaobjectUpsert: "MetaobjectUpsertPayload",
      orderCapture: "OrderCapturePayload",
      orderClose: "OrderClosePayload",
      orderCreateMandatePayment: "OrderCreateMandatePaymentPayload",
      orderEditAddCustomItem: "OrderEditAddCustomItemPayload",
      orderEditAddLineItemDiscount: "OrderEditAddLineItemDiscountPayload",
      orderEditAddVariant: "OrderEditAddVariantPayload",
      orderEditBegin: "OrderEditBeginPayload",
      orderEditCommit: "OrderEditCommitPayload",
      orderEditRemoveLineItemDiscount: "OrderEditRemoveLineItemDiscountPayload",
      orderEditSetQuantity: "OrderEditSetQuantityPayload",
      orderInvoiceSend: "OrderInvoiceSendPayload",
      orderMarkAsPaid: "OrderMarkAsPaidPayload",
      orderOpen: "OrderOpenPayload",
      orderUpdate: "OrderUpdatePayload",
      paymentReminderSend: "PaymentReminderSendPayload",
      paymentTermsCreate: "PaymentTermsCreatePayload",
      paymentTermsDelete: "PaymentTermsDeletePayload",
      paymentTermsUpdate: "PaymentTermsUpdatePayload",
      priceListCreate: "PriceListCreatePayload",
      priceListDelete: "PriceListDeletePayload",
      priceListFixedPricesAdd: "PriceListFixedPricesAddPayload",
      priceListFixedPricesDelete: "PriceListFixedPricesDeletePayload",
      priceListUpdate: "PriceListUpdatePayload",
      priceRuleActivate: "PriceRuleActivatePayload",
      priceRuleCreate: "PriceRuleCreatePayload",
      priceRuleDeactivate: "PriceRuleDeactivatePayload",
      priceRuleDelete: "PriceRuleDeletePayload",
      priceRuleDiscountCodeCreate: "PriceRuleDiscountCodeCreatePayload",
      priceRuleDiscountCodeUpdate: "PriceRuleDiscountCodeUpdatePayload",
      priceRuleUpdate: "PriceRuleUpdatePayload",
      privateMetafieldDelete: "PrivateMetafieldDeletePayload",
      privateMetafieldUpsert: "PrivateMetafieldUpsertPayload",
      productAppendImages: "ProductAppendImagesPayload",
      productChangeStatus: "ProductChangeStatusPayload",
      productCreate: "ProductCreatePayload",
      productCreateMedia: "ProductCreateMediaPayload",
      productDelete: "ProductDeletePayload",
      productDeleteAsync: "ProductDeleteAsyncPayload",
      productDeleteImages: "ProductDeleteImagesPayload",
      productDeleteMedia: "ProductDeleteMediaPayload",
      productDuplicate: "ProductDuplicatePayload",
      productDuplicateAsync: "ProductDuplicateAsyncPayload",
      productImageUpdate: "ProductImageUpdatePayload",
      productJoinSellingPlanGroups: "ProductJoinSellingPlanGroupsPayload",
      productLeaveSellingPlanGroups: "ProductLeaveSellingPlanGroupsPayload",
      productPublish: "ProductPublishPayload",
      productReorderImages: "ProductReorderImagesPayload",
      productReorderMedia: "ProductReorderMediaPayload",
      productUnpublish: "ProductUnpublishPayload",
      productUpdate: "ProductUpdatePayload",
      productUpdateMedia: "ProductUpdateMediaPayload",
      productVariantAppendMedia: "ProductVariantAppendMediaPayload",
      productVariantCreate: "ProductVariantCreatePayload",
      productVariantDelete: "ProductVariantDeletePayload",
      productVariantDetachMedia: "ProductVariantDetachMediaPayload",
      productVariantJoinSellingPlanGroups: "ProductVariantJoinSellingPlanGroupsPayload",
      productVariantLeaveSellingPlanGroups: "ProductVariantLeaveSellingPlanGroupsPayload",
      productVariantUpdate: "ProductVariantUpdatePayload",
      productVariantsBulkCreate: "ProductVariantsBulkCreatePayload",
      productVariantsBulkDelete: "ProductVariantsBulkDeletePayload",
      productVariantsBulkReorder: "ProductVariantsBulkReorderPayload",
      productVariantsBulkUpdate: "ProductVariantsBulkUpdatePayload",
      pubSubWebhookSubscriptionCreate: "PubSubWebhookSubscriptionCreatePayload",
      pubSubWebhookSubscriptionUpdate: "PubSubWebhookSubscriptionUpdatePayload",
      publishablePublish: "PublishablePublishPayload",
      publishablePublishToCurrentChannel: "PublishablePublishToCurrentChannelPayload",
      publishableUnpublish: "PublishableUnpublishPayload",
      publishableUnpublishToCurrentChannel: "PublishableUnpublishToCurrentChannelPayload",
      refundCreate: "RefundCreatePayload",
      returnApproveRequest: "ReturnApproveRequestPayload",
      returnCancel: "ReturnCancelPayload",
      returnClose: "ReturnClosePayload",
      returnCreate: "ReturnCreatePayload",
      returnDeclineRequest: "ReturnDeclineRequestPayload",
      returnRefund: "ReturnRefundPayload",
      returnReopen: "ReturnReopenPayload",
      returnRequest: "ReturnRequestPayload",
      reverseDeliveryCreateWithShipping: "ReverseDeliveryCreateWithShippingPayload",
      reverseDeliveryDispose: "ReverseDeliveryDisposePayload",
      reverseDeliveryShippingUpdate: "ReverseDeliveryShippingUpdatePayload",
      reverseFulfillmentOrderDispose: "ReverseFulfillmentOrderDisposePayload",
      savedSearchCreate: "SavedSearchCreatePayload",
      savedSearchDelete: "SavedSearchDeletePayload",
      savedSearchUpdate: "SavedSearchUpdatePayload",
      scriptTagCreate: "ScriptTagCreatePayload",
      scriptTagDelete: "ScriptTagDeletePayload",
      scriptTagUpdate: "ScriptTagUpdatePayload",
      segmentCreate: "SegmentCreatePayload",
      segmentDelete: "SegmentDeletePayload",
      segmentUpdate: "SegmentUpdatePayload",
      sellingPlanGroupAddProductVariants: "SellingPlanGroupAddProductVariantsPayload",
      sellingPlanGroupAddProducts: "SellingPlanGroupAddProductsPayload",
      sellingPlanGroupCreate: "SellingPlanGroupCreatePayload",
      sellingPlanGroupDelete: "SellingPlanGroupDeletePayload",
      sellingPlanGroupRemoveProductVariants: "SellingPlanGroupRemoveProductVariantsPayload",
      sellingPlanGroupRemoveProducts: "SellingPlanGroupRemoveProductsPayload",
      sellingPlanGroupUpdate: "SellingPlanGroupUpdatePayload",
      shippingPackageDelete: "ShippingPackageDeletePayload",
      shippingPackageMakeDefault: "ShippingPackageMakeDefaultPayload",
      shippingPackageUpdate: "ShippingPackageUpdatePayload",
      shopLocaleDisable: "ShopLocaleDisablePayload",
      shopLocaleEnable: "ShopLocaleEnablePayload",
      shopLocaleUpdate: "ShopLocaleUpdatePayload",
      shopPolicyUpdate: "ShopPolicyUpdatePayload",
      shopResourceFeedbackCreate: "ShopResourceFeedbackCreatePayload",
      stagedUploadTargetGenerate: "StagedUploadTargetGeneratePayload",
      stagedUploadTargetsGenerate: "StagedUploadTargetsGeneratePayload",
      stagedUploadsCreate: "StagedUploadsCreatePayload",
      standardMetafieldDefinitionEnable: "StandardMetafieldDefinitionEnablePayload",
      standardMetaobjectDefinitionEnable: "StandardMetaobjectDefinitionEnablePayload",
      storefrontAccessTokenCreate: "StorefrontAccessTokenCreatePayload",
      storefrontAccessTokenDelete: "StorefrontAccessTokenDeletePayload",
      subscriptionBillingAttemptCreate: "SubscriptionBillingAttemptCreatePayload",
      subscriptionBillingCycleContractDraftCommit: "SubscriptionBillingCycleContractDraftCommitPayload",
      subscriptionBillingCycleContractDraftConcatenate: "SubscriptionBillingCycleContractDraftConcatenatePayload",
      subscriptionBillingCycleContractEdit: "SubscriptionBillingCycleContractEditPayload",
      subscriptionBillingCycleEditDelete: "SubscriptionBillingCycleEditDeletePayload",
      subscriptionBillingCycleEditsDelete: "SubscriptionBillingCycleEditsDeletePayload",
      subscriptionBillingCycleScheduleEdit: "SubscriptionBillingCycleScheduleEditPayload",
      subscriptionContractCreate: "SubscriptionContractCreatePayload",
      subscriptionContractSetNextBillingDate: "SubscriptionContractSetNextBillingDatePayload",
      subscriptionContractUpdate: "SubscriptionContractUpdatePayload",
      subscriptionDraftCommit: "SubscriptionDraftCommitPayload",
      subscriptionDraftDiscountAdd: "SubscriptionDraftDiscountAddPayload",
      subscriptionDraftDiscountCodeApply: "SubscriptionDraftDiscountCodeApplyPayload",
      subscriptionDraftDiscountRemove: "SubscriptionDraftDiscountRemovePayload",
      subscriptionDraftDiscountUpdate: "SubscriptionDraftDiscountUpdatePayload",
      subscriptionDraftFreeShippingDiscountAdd: "SubscriptionDraftFreeShippingDiscountAddPayload",
      subscriptionDraftFreeShippingDiscountUpdate: "SubscriptionDraftFreeShippingDiscountUpdatePayload",
      subscriptionDraftLineAdd: "SubscriptionDraftLineAddPayload",
      subscriptionDraftLineRemove: "SubscriptionDraftLineRemovePayload",
      subscriptionDraftLineUpdate: "SubscriptionDraftLineUpdatePayload",
      subscriptionDraftUpdate: "SubscriptionDraftUpdatePayload",
      tagsAdd: "TagsAddPayload",
      tagsRemove: "TagsRemovePayload",
      translationsRegister: "TranslationsRegisterPayload",
      translationsRemove: "TranslationsRemovePayload",
      urlRedirectBulkDeleteAll: "UrlRedirectBulkDeleteAllPayload",
      urlRedirectBulkDeleteByIds: "UrlRedirectBulkDeleteByIdsPayload",
      urlRedirectBulkDeleteBySavedSearch: "UrlRedirectBulkDeleteBySavedSearchPayload",
      urlRedirectBulkDeleteBySearch: "UrlRedirectBulkDeleteBySearchPayload",
      urlRedirectCreate: "UrlRedirectCreatePayload",
      urlRedirectDelete: "UrlRedirectDeletePayload",
      urlRedirectImportCreate: "UrlRedirectImportCreatePayload",
      urlRedirectImportSubmit: "UrlRedirectImportSubmitPayload",
      urlRedirectUpdate: "UrlRedirectUpdatePayload",
      webPixelCreate: "WebPixelCreatePayload",
      webPixelDelete: "WebPixelDeletePayload",
      webPixelUpdate: "WebPixelUpdatePayload",
      webhookSubscriptionCreate: "WebhookSubscriptionCreatePayload",
      webhookSubscriptionDelete: "WebhookSubscriptionDeletePayload",
      webhookSubscriptionUpdate: "WebhookSubscriptionUpdatePayload"
    },
    MutationsStagedUploadTargetGenerateUploadParameter: {
      name: "String",
      value: "String"
    },
    Navigable: {
      "...on AbandonedCheckout": "AbandonedCheckout",
      "...on Company": "Company",
      "...on CompanyLocation": "CompanyLocation",
      "...on DraftOrder": "DraftOrder",
      "...on OnlineStoreArticle": "OnlineStoreArticle",
      "...on OnlineStorePage": "OnlineStorePage",
      "...on Product": "Product",
      "...on ProductVariant": "ProductVariant",
      defaultCursor: "String"
    },
    NavigationItem: {
      id: "String",
      title: "String",
      url: "URL"
    },
    Node: {
      "...on AbandonedCheckout": "AbandonedCheckout",
      "...on Abandonment": "Abandonment",
      "...on App": "App",
      "...on AppCredit": "AppCredit",
      "...on AppInstallation": "AppInstallation",
      "...on AppPurchaseOneTime": "AppPurchaseOneTime",
      "...on AppRevenueAttributionRecord": "AppRevenueAttributionRecord",
      "...on AppSubscription": "AppSubscription",
      "...on AppUsageRecord": "AppUsageRecord",
      "...on BasicEvent": "BasicEvent",
      "...on BulkOperation": "BulkOperation",
      "...on CalculatedOrder": "CalculatedOrder",
      "...on Channel": "Channel",
      "...on ChannelDefinition": "ChannelDefinition",
      "...on ChannelInformation": "ChannelInformation",
      "...on CheckoutProfile": "CheckoutProfile",
      "...on Collection": "Collection",
      "...on CommentEvent": "CommentEvent",
      "...on Company": "Company",
      "...on CompanyAddress": "CompanyAddress",
      "...on CompanyContact": "CompanyContact",
      "...on CompanyContactRole": "CompanyContactRole",
      "...on CompanyContactRoleAssignment": "CompanyContactRoleAssignment",
      "...on CompanyLocation": "CompanyLocation",
      "...on Customer": "Customer",
      "...on CustomerPaymentMethod": "CustomerPaymentMethod",
      "...on CustomerSegmentMembersQuery": "CustomerSegmentMembersQuery",
      "...on CustomerVisit": "CustomerVisit",
      "...on DeliveryCarrierService": "DeliveryCarrierService",
      "...on DeliveryCondition": "DeliveryCondition",
      "...on DeliveryCountry": "DeliveryCountry",
      "...on DeliveryLocationGroup": "DeliveryLocationGroup",
      "...on DeliveryMethod": "DeliveryMethod",
      "...on DeliveryMethodDefinition": "DeliveryMethodDefinition",
      "...on DeliveryParticipant": "DeliveryParticipant",
      "...on DeliveryProfile": "DeliveryProfile",
      "...on DeliveryProfileItem": "DeliveryProfileItem",
      "...on DeliveryProvince": "DeliveryProvince",
      "...on DeliveryRateDefinition": "DeliveryRateDefinition",
      "...on DeliveryZone": "DeliveryZone",
      "...on DiscountAutomaticBxgy": "DiscountAutomaticBxgy",
      "...on DiscountAutomaticNode": "DiscountAutomaticNode",
      "...on DiscountCodeNode": "DiscountCodeNode",
      "...on DiscountNode": "DiscountNode",
      "...on DiscountRedeemCodeBulkCreation": "DiscountRedeemCodeBulkCreation",
      "...on Domain": "Domain",
      "...on DraftOrder": "DraftOrder",
      "...on DraftOrderLineItem": "DraftOrderLineItem",
      "...on DraftOrderTag": "DraftOrderTag",
      "...on Duty": "Duty",
      "...on ExternalVideo": "ExternalVideo",
      "...on Fulfillment": "Fulfillment",
      "...on FulfillmentEvent": "FulfillmentEvent",
      "...on FulfillmentLineItem": "FulfillmentLineItem",
      "...on FulfillmentOrder": "FulfillmentOrder",
      "...on FulfillmentOrderDestination": "FulfillmentOrderDestination",
      "...on FulfillmentOrderLineItem": "FulfillmentOrderLineItem",
      "...on FulfillmentOrderMerchantRequest": "FulfillmentOrderMerchantRequest",
      "...on GenericFile": "GenericFile",
      "...on GiftCard": "GiftCard",
      "...on InventoryAdjustmentGroup": "InventoryAdjustmentGroup",
      "...on InventoryItem": "InventoryItem",
      "...on InventoryLevel": "InventoryLevel",
      "...on LineItem": "LineItem",
      "...on LineItemMutable": "LineItemMutable",
      "...on Location": "Location",
      "...on MailingAddress": "MailingAddress",
      "...on Market": "Market",
      "...on MarketRegionCountry": "MarketRegionCountry",
      "...on MarketWebPresence": "MarketWebPresence",
      "...on MarketingActivity": "MarketingActivity",
      "...on MarketingEvent": "MarketingEvent",
      "...on MediaImage": "MediaImage",
      "...on Metafield": "Metafield",
      "...on MetafieldDefinition": "MetafieldDefinition",
      "...on MetafieldStorefrontVisibility": "MetafieldStorefrontVisibility",
      "...on Metaobject": "Metaobject",
      "...on MetaobjectDefinition": "MetaobjectDefinition",
      "...on Model3d": "Model3d",
      "...on OnlineStoreArticle": "OnlineStoreArticle",
      "...on OnlineStoreBlog": "OnlineStoreBlog",
      "...on OnlineStorePage": "OnlineStorePage",
      "...on Order": "Order",
      "...on OrderDisputeSummary": "OrderDisputeSummary",
      "...on OrderTransaction": "OrderTransaction",
      "...on PaymentMandate": "PaymentMandate",
      "...on PaymentSchedule": "PaymentSchedule",
      "...on PaymentTerms": "PaymentTerms",
      "...on PaymentTermsTemplate": "PaymentTermsTemplate",
      "...on PriceList": "PriceList",
      "...on PriceRule": "PriceRule",
      "...on PriceRuleDiscountCode": "PriceRuleDiscountCode",
      "...on PrivateMetafield": "PrivateMetafield",
      "...on Product": "Product",
      "...on ProductOption": "ProductOption",
      "...on ProductTaxonomyNode": "ProductTaxonomyNode",
      "...on ProductVariant": "ProductVariant",
      "...on Publication": "Publication",
      "...on Refund": "Refund",
      "...on Return": "Return",
      "...on ReturnLineItem": "ReturnLineItem",
      "...on ReturnableFulfillment": "ReturnableFulfillment",
      "...on ReverseDelivery": "ReverseDelivery",
      "...on ReverseDeliveryLineItem": "ReverseDeliveryLineItem",
      "...on ReverseFulfillmentOrder": "ReverseFulfillmentOrder",
      "...on ReverseFulfillmentOrderDisposition": "ReverseFulfillmentOrderDisposition",
      "...on ReverseFulfillmentOrderLineItem": "ReverseFulfillmentOrderLineItem",
      "...on SavedSearch": "SavedSearch",
      "...on ScriptTag": "ScriptTag",
      "...on Segment": "Segment",
      "...on SellingPlan": "SellingPlan",
      "...on SellingPlanGroup": "SellingPlanGroup",
      "...on Shop": "Shop",
      "...on ShopAddress": "ShopAddress",
      "...on ShopPolicy": "ShopPolicy",
      "...on ShopifyPaymentsAccount": "ShopifyPaymentsAccount",
      "...on ShopifyPaymentsBankAccount": "ShopifyPaymentsBankAccount",
      "...on ShopifyPaymentsDispute": "ShopifyPaymentsDispute",
      "...on ShopifyPaymentsDisputeEvidence": "ShopifyPaymentsDisputeEvidence",
      "...on ShopifyPaymentsDisputeFileUpload": "ShopifyPaymentsDisputeFileUpload",
      "...on ShopifyPaymentsDisputeFulfillment": "ShopifyPaymentsDisputeFulfillment",
      "...on ShopifyPaymentsPayout": "ShopifyPaymentsPayout",
      "...on ShopifyPaymentsVerification": "ShopifyPaymentsVerification",
      "...on StaffMember": "StaffMember",
      "...on StandardMetafieldDefinitionTemplate": "StandardMetafieldDefinitionTemplate",
      "...on StorefrontAccessToken": "StorefrontAccessToken",
      "...on SubscriptionBillingAttempt": "SubscriptionBillingAttempt",
      "...on SubscriptionContract": "SubscriptionContract",
      "...on SubscriptionDraft": "SubscriptionDraft",
      "...on TenderTransaction": "TenderTransaction",
      "...on TransactionFee": "TransactionFee",
      "...on UrlRedirect": "UrlRedirect",
      "...on UrlRedirectImport": "UrlRedirectImport",
      "...on Video": "Video",
      "...on WebPixel": "WebPixel",
      "...on WebhookSubscription": "WebhookSubscription",
      id: "ID"
    },
    OnlineStoreArticle: {
      defaultCursor: "String",
      id: "ID",
      translations: "PublishedTranslation"
    },
    OnlineStoreBlog: {
      id: "ID",
      translations: "PublishedTranslation"
    },
    OnlineStorePage: {
      defaultCursor: "String",
      id: "ID",
      translations: "PublishedTranslation"
    },
    OnlineStorePreviewable: {
      "...on Product": "Product",
      onlineStorePreviewUrl: "URL"
    },
    Order: {
      agreements: "SalesAgreementConnection",
      alerts: "ResourceAlert",
      app: "OrderApp",
      billingAddress: "MailingAddress",
      billingAddressMatchesShippingAddress: "Boolean",
      canMarkAsPaid: "Boolean",
      canNotifyCustomer: "Boolean",
      cancelReason: "OrderCancelReason",
      cancelledAt: "DateTime",
      capturable: "Boolean",
      cartDiscountAmount: "Money",
      cartDiscountAmountSet: "MoneyBag",
      channel: "Channel",
      channelInformation: "ChannelInformation",
      clientIp: "String",
      closed: "Boolean",
      closedAt: "DateTime",
      confirmed: "Boolean",
      createdAt: "DateTime",
      currencyCode: "CurrencyCode",
      currentCartDiscountAmountSet: "MoneyBag",
      currentSubtotalLineItemsQuantity: "Int",
      currentSubtotalPriceSet: "MoneyBag",
      currentTaxLines: "TaxLine",
      currentTotalDiscountsSet: "MoneyBag",
      currentTotalDutiesSet: "MoneyBag",
      currentTotalPriceSet: "MoneyBag",
      currentTotalTaxSet: "MoneyBag",
      currentTotalWeight: "UnsignedInt64",
      customAttributes: "Attribute",
      customer: "Customer",
      customerAcceptsMarketing: "Boolean",
      customerJourney: "CustomerJourney",
      customerJourneySummary: "CustomerJourneySummary",
      customerLocale: "String",
      discountApplications: "DiscountApplicationConnection",
      discountCode: "String",
      discountCodes: "String",
      displayAddress: "MailingAddress",
      displayFinancialStatus: "OrderDisplayFinancialStatus",
      displayFulfillmentStatus: "OrderDisplayFulfillmentStatus",
      disputes: "OrderDisputeSummary",
      edited: "Boolean",
      email: "String",
      estimatedTaxes: "Boolean",
      events: "EventConnection",
      fulfillable: "Boolean",
      fulfillmentOrders: "FulfillmentOrderConnection",
      fulfillments: "Fulfillment",
      fullyPaid: "Boolean",
      hasTimelineComment: "Boolean",
      id: "ID",
      landingPageDisplayText: "String",
      landingPageUrl: "URL",
      legacyResourceId: "UnsignedInt64",
      lineItems: "LineItemConnection",
      lineItemsMutable: "LineItemMutableConnection",
      localizationExtensions: "LocalizationExtensionConnection",
      location: "String",
      merchantEditable: "Boolean",
      merchantEditableErrors: "String",
      merchantOfRecordApp: "OrderApp",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      name: "String",
      netPayment: "Money",
      netPaymentSet: "MoneyBag",
      nonFulfillableLineItems: "LineItemConnection",
      note: "String",
      originalTotalDutiesSet: "MoneyBag",
      originalTotalPriceSet: "MoneyBag",
      paymentCollectionDetails: "OrderPaymentCollectionDetails",
      paymentGatewayNames: "String",
      paymentTerms: "PaymentTerms",
      phone: "String",
      physicalLocation: "Location",
      presentmentCurrencyCode: "CurrencyCode",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      processedAt: "DateTime",
      publication: "Publication",
      purchasingEntity: "PurchasingEntity",
      referralCode: "String",
      referrerDisplayText: "String",
      referrerUrl: "URL",
      refundDiscrepancySet: "MoneyBag",
      refundable: "Boolean",
      refunds: "Refund",
      registeredSourceUrl: "URL",
      requiresShipping: "Boolean",
      restockable: "Boolean",
      returns: "ReturnConnection",
      riskLevel: "OrderRiskLevel",
      risks: "OrderRisk",
      shippingAddress: "MailingAddress",
      shippingLine: "ShippingLine",
      shippingLines: "ShippingLineConnection",
      sourceIdentifier: "String",
      subtotalLineItemsQuantity: "Int",
      subtotalPrice: "Money",
      subtotalPriceSet: "MoneyBag",
      suggestedRefund: "SuggestedRefund",
      tags: "String",
      taxLines: "TaxLine",
      taxesIncluded: "Boolean",
      test: "Boolean",
      totalCapturable: "Money",
      totalCapturableSet: "MoneyBag",
      totalDiscounts: "Money",
      totalDiscountsSet: "MoneyBag",
      totalOutstandingSet: "MoneyBag",
      totalPrice: "Money",
      totalPriceSet: "MoneyBag",
      totalReceived: "Money",
      totalReceivedSet: "MoneyBag",
      totalRefunded: "Money",
      totalRefundedSet: "MoneyBag",
      totalRefundedShippingSet: "MoneyBag",
      totalShippingPrice: "Money",
      totalShippingPriceSet: "MoneyBag",
      totalTax: "Money",
      totalTaxSet: "MoneyBag",
      totalTipReceived: "MoneyV2",
      totalTipReceivedSet: "MoneyBag",
      totalWeight: "UnsignedInt64",
      transactions: "OrderTransaction",
      unpaid: "Boolean",
      updatedAt: "DateTime"
    },
    OrderAgreement: {
      app: "App",
      happenedAt: "DateTime",
      id: "ID",
      order: "Order",
      reason: "OrderActionType",
      sales: "SaleConnection",
      user: "StaffMember"
    },
    OrderApp: {
      icon: "Image",
      id: "ID",
      name: "String"
    },
    OrderCapturePayload: {
      transaction: "OrderTransaction",
      userErrors: "UserError"
    },
    OrderClosePayload: {
      order: "Order",
      userErrors: "UserError"
    },
    OrderConnection: {
      edges: "OrderEdge",
      nodes: "Order",
      pageInfo: "PageInfo"
    },
    OrderCreateMandatePaymentPayload: {
      job: "Job",
      paymentReferenceId: "String",
      userErrors: "OrderCreateMandatePaymentUserError"
    },
    OrderCreateMandatePaymentUserError: {
      code: "OrderCreateMandatePaymentUserErrorCode",
      field: "String",
      message: "String"
    },
    OrderDisputeSummary: {
      id: "ID",
      initiatedAs: "DisputeType",
      status: "DisputeStatus"
    },
    OrderEdge: {
      cursor: "String",
      node: "Order"
    },
    OrderEditAddCustomItemPayload: {
      calculatedLineItem: "CalculatedLineItem",
      calculatedOrder: "CalculatedOrder",
      userErrors: "UserError"
    },
    OrderEditAddLineItemDiscountPayload: {
      addedDiscountStagedChange: "OrderStagedChangeAddLineItemDiscount",
      calculatedLineItem: "CalculatedLineItem",
      calculatedOrder: "CalculatedOrder",
      userErrors: "UserError"
    },
    OrderEditAddVariantPayload: {
      calculatedLineItem: "CalculatedLineItem",
      calculatedOrder: "CalculatedOrder",
      userErrors: "UserError"
    },
    OrderEditAgreement: {
      app: "App",
      happenedAt: "DateTime",
      id: "ID",
      reason: "OrderActionType",
      sales: "SaleConnection",
      user: "StaffMember"
    },
    OrderEditBeginPayload: {
      calculatedOrder: "CalculatedOrder",
      userErrors: "UserError"
    },
    OrderEditCommitPayload: {
      order: "Order",
      userErrors: "UserError"
    },
    OrderEditRemoveLineItemDiscountPayload: {
      calculatedLineItem: "CalculatedLineItem",
      calculatedOrder: "CalculatedOrder",
      userErrors: "UserError"
    },
    OrderEditSetQuantityPayload: {
      calculatedLineItem: "CalculatedLineItem",
      calculatedOrder: "CalculatedOrder",
      userErrors: "UserError"
    },
    OrderInvoiceSendPayload: {
      order: "Order",
      userErrors: "OrderInvoiceSendUserError"
    },
    OrderInvoiceSendUserError: {
      code: "OrderInvoiceSendUserErrorCode",
      field: "String",
      message: "String"
    },
    OrderMarkAsPaidPayload: {
      order: "Order",
      userErrors: "UserError"
    },
    OrderOpenPayload: {
      order: "Order",
      userErrors: "UserError"
    },
    OrderPaymentCollectionDetails: {
      additionalPaymentCollectionUrl: "URL",
      vaultedPaymentMethods: "PaymentMandate"
    },
    OrderPaymentStatus: {
      errorMessage: "String",
      paymentReferenceId: "String",
      status: "OrderPaymentStatusResult",
      translatedErrorMessage: "String"
    },
    OrderRisk: {
      display: "Boolean",
      level: "OrderRiskLevel",
      message: "String"
    },
    OrderStagedChange: {
      "...on OrderStagedChangeAddCustomItem": "OrderStagedChangeAddCustomItem",
      "...on OrderStagedChangeAddLineItemDiscount": "OrderStagedChangeAddLineItemDiscount",
      "...on OrderStagedChangeAddShippingLine": "OrderStagedChangeAddShippingLine",
      "...on OrderStagedChangeAddVariant": "OrderStagedChangeAddVariant",
      "...on OrderStagedChangeDecrementItem": "OrderStagedChangeDecrementItem",
      "...on OrderStagedChangeIncrementItem": "OrderStagedChangeIncrementItem"
    },
    OrderStagedChangeAddCustomItem: {
      originalUnitPrice: "MoneyV2",
      quantity: "Int",
      title: "String"
    },
    OrderStagedChangeAddLineItemDiscount: {
      description: "String",
      id: "ID",
      value: "PricingValue"
    },
    OrderStagedChangeAddShippingLine: {
      phone: "String",
      presentmentTitle: "String",
      price: "MoneyV2",
      title: "String"
    },
    OrderStagedChangeAddVariant: {
      quantity: "Int",
      variant: "ProductVariant"
    },
    OrderStagedChangeConnection: {
      edges: "OrderStagedChangeEdge",
      nodes: "OrderStagedChange",
      pageInfo: "PageInfo"
    },
    OrderStagedChangeDecrementItem: {
      delta: "Int",
      lineItem: "LineItem",
      restock: "Boolean"
    },
    OrderStagedChangeEdge: {
      cursor: "String",
      node: "OrderStagedChange"
    },
    OrderStagedChangeIncrementItem: {
      delta: "Int",
      lineItem: "LineItem"
    },
    OrderTransaction: {
      accountNumber: "String",
      amount: "Money",
      amountSet: "MoneyBag",
      amountV2: "MoneyV2",
      authorizationCode: "String",
      authorizationExpiresAt: "DateTime",
      createdAt: "DateTime",
      errorCode: "OrderTransactionErrorCode",
      fees: "TransactionFee",
      formattedGateway: "String",
      gateway: "String",
      id: "ID",
      kind: "OrderTransactionKind",
      manuallyCapturable: "Boolean",
      maximumRefundable: "Money",
      maximumRefundableV2: "MoneyV2",
      order: "Order",
      parentTransaction: "OrderTransaction",
      paymentDetails: "PaymentDetails",
      paymentIcon: "Image",
      paymentId: "String",
      paymentMethod: "PaymentMethods",
      processedAt: "DateTime",
      receipt: "String",
      receiptJson: "JSON",
      settlementCurrency: "CurrencyCode",
      settlementCurrencyRate: "Decimal",
      shopifyPaymentsSet: "ShopifyPaymentsTransactionSet",
      status: "OrderTransactionStatus",
      test: "Boolean",
      totalUnsettled: "Money",
      totalUnsettledSet: "MoneyBag",
      totalUnsettledV2: "MoneyV2",
      user: "StaffMember"
    },
    OrderTransactionConnection: {
      edges: "OrderTransactionEdge",
      nodes: "OrderTransaction",
      pageInfo: "PageInfo"
    },
    OrderTransactionEdge: {
      cursor: "String",
      node: "OrderTransaction"
    },
    OrderUpdatePayload: {
      order: "Order",
      userErrors: "UserError"
    },
    PageInfo: {
      endCursor: "String",
      hasNextPage: "Boolean",
      hasPreviousPage: "Boolean",
      startCursor: "String"
    },
    ParseError: {
      code: "ParseErrorCode",
      message: "String",
      range: "ParseErrorRange"
    },
    ParseErrorRange: {
      end: "ErrorPosition",
      start: "ErrorPosition"
    },
    PaymentDetails: {
      "...on CardPaymentDetails": "CardPaymentDetails"
    },
    PaymentInstrument: {
      "...on VaultCreditCard": "VaultCreditCard",
      "...on VaultPaypalBillingAgreement": "VaultPaypalBillingAgreement"
    },
    PaymentMandate: {
      id: "ID",
      paymentInstrument: "PaymentInstrument"
    },
    PaymentReminderSendPayload: {
      success: "Boolean",
      userErrors: "PaymentReminderSendUserError"
    },
    PaymentReminderSendUserError: {
      code: "PaymentReminderSendUserErrorCode",
      field: "String",
      message: "String"
    },
    PaymentSchedule: {
      amount: "MoneyV2",
      completedAt: "DateTime",
      dueAt: "DateTime",
      id: "ID",
      issuedAt: "DateTime",
      paymentTerms: "PaymentTerms"
    },
    PaymentScheduleConnection: {
      edges: "PaymentScheduleEdge",
      nodes: "PaymentSchedule",
      pageInfo: "PageInfo"
    },
    PaymentScheduleEdge: {
      cursor: "String",
      node: "PaymentSchedule"
    },
    PaymentSettings: {
      supportedDigitalWallets: "DigitalWallet"
    },
    PaymentTerms: {
      draftOrder: "DraftOrder",
      dueInDays: "Int",
      id: "ID",
      order: "Order",
      overdue: "Boolean",
      paymentSchedules: "PaymentScheduleConnection",
      paymentTermsName: "String",
      paymentTermsType: "PaymentTermsType",
      translatedName: "String"
    },
    PaymentTermsCreatePayload: {
      paymentTerms: "PaymentTerms",
      userErrors: "PaymentTermsCreateUserError"
    },
    PaymentTermsCreateUserError: {
      code: "PaymentTermsCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    PaymentTermsDeletePayload: {
      deletedId: "ID",
      userErrors: "PaymentTermsDeleteUserError"
    },
    PaymentTermsDeleteUserError: {
      code: "PaymentTermsDeleteUserErrorCode",
      field: "String",
      message: "String"
    },
    PaymentTermsTemplate: {
      description: "String",
      dueInDays: "Int",
      id: "ID",
      name: "String",
      paymentTermsType: "PaymentTermsType",
      translatedName: "String"
    },
    PaymentTermsUpdatePayload: {
      paymentTerms: "PaymentTerms",
      userErrors: "PaymentTermsUpdateUserError"
    },
    PaymentTermsUpdateUserError: {
      code: "PaymentTermsUpdateUserErrorCode",
      field: "String",
      message: "String"
    },
    PolarisVizDataPoint: {
      key: "String",
      value: "String"
    },
    PolarisVizDataSeries: {
      data: "PolarisVizDataPoint",
      isComparison: "Boolean",
      name: "String"
    },
    PolarisVizResponse: {
      data: "PolarisVizDataSeries",
      parseErrors: "ParseError",
      tableData: "TableData",
      vizType: "VisualizationType"
    },
    PriceList: {
      contextRule: "PriceListContextRule",
      currency: "CurrencyCode",
      id: "ID",
      name: "String",
      parent: "PriceListParent",
      prices: "PriceListPriceConnection"
    },
    PriceListAdjustment: {
      type: "PriceListAdjustmentType",
      value: "Float"
    },
    PriceListConnection: {
      edges: "PriceListEdge",
      nodes: "PriceList",
      pageInfo: "PageInfo"
    },
    PriceListContextRule: {
      countries: "CountryCode",
      market: "Market"
    },
    PriceListCreatePayload: {
      priceList: "PriceList",
      userErrors: "PriceListUserError"
    },
    PriceListDeletePayload: {
      deletedId: "ID",
      userErrors: "PriceListUserError"
    },
    PriceListEdge: {
      cursor: "String",
      node: "PriceList"
    },
    PriceListFixedPricesAddPayload: {
      prices: "PriceListPrice",
      userErrors: "PriceListPriceUserError"
    },
    PriceListFixedPricesDeletePayload: {
      deletedFixedPriceVariantIds: "ID",
      userErrors: "PriceListPriceUserError"
    },
    PriceListParent: {
      adjustment: "PriceListAdjustment"
    },
    PriceListPrice: {
      compareAtPrice: "MoneyV2",
      originType: "PriceListPriceOriginType",
      price: "MoneyV2",
      variant: "ProductVariant"
    },
    PriceListPriceConnection: {
      edges: "PriceListPriceEdge",
      nodes: "PriceListPrice",
      pageInfo: "PageInfo"
    },
    PriceListPriceEdge: {
      cursor: "String",
      node: "PriceListPrice"
    },
    PriceListPriceUserError: {
      code: "PriceListPriceUserErrorCode",
      field: "String",
      message: "String"
    },
    PriceListUpdatePayload: {
      priceList: "PriceList",
      userErrors: "PriceListUserError"
    },
    PriceListUserError: {
      code: "PriceListUserErrorCode",
      field: "String",
      message: "String"
    },
    PriceRule: {
      allocationLimit: "Int",
      allocationMethod: "PriceRuleAllocationMethod",
      app: "App",
      combinesWith: "DiscountCombinesWith",
      createdAt: "DateTime",
      customerSelection: "PriceRuleCustomerSelection",
      discountClass: "DiscountClass",
      discountCodes: "PriceRuleDiscountCodeConnection",
      discountCodesCount: "Int",
      endsAt: "DateTime",
      entitlementToPrerequisiteQuantityRatio: "PriceRuleEntitlementToPrerequisiteQuantityRatio",
      events: "EventConnection",
      features: "PriceRuleFeature",
      hasTimelineComment: "Boolean",
      id: "ID",
      itemEntitlements: "PriceRuleItemEntitlements",
      itemPrerequisites: "PriceRuleLineItemPrerequisites",
      legacyResourceId: "UnsignedInt64",
      oncePerCustomer: "Boolean",
      prerequisiteQuantityRange: "PriceRuleQuantityRange",
      prerequisiteShippingPriceRange: "PriceRuleMoneyRange",
      prerequisiteSubtotalRange: "PriceRuleMoneyRange",
      prerequisiteToEntitlementQuantityRatio: "PriceRulePrerequisiteToEntitlementQuantityRatio",
      shareableUrls: "PriceRuleShareableUrl",
      shippingEntitlements: "PriceRuleShippingLineEntitlements",
      startsAt: "DateTime",
      status: "PriceRuleStatus",
      summary: "String",
      target: "PriceRuleTarget",
      title: "String",
      totalSales: "MoneyV2",
      traits: "PriceRuleTrait",
      usageCount: "Int",
      usageLimit: "Int",
      validityPeriod: "PriceRuleValidityPeriod",
      value: "PriceRuleValue",
      valueV2: "PricingValue"
    },
    PriceRuleActivatePayload: {
      priceRule: "PriceRule",
      priceRuleUserErrors: "PriceRuleUserError",
      userErrors: "UserError"
    },
    PriceRuleConnection: {
      edges: "PriceRuleEdge",
      nodes: "PriceRule",
      pageInfo: "PageInfo"
    },
    PriceRuleCreatePayload: {
      priceRule: "PriceRule",
      priceRuleDiscountCode: "PriceRuleDiscountCode",
      priceRuleUserErrors: "PriceRuleUserError",
      userErrors: "UserError"
    },
    PriceRuleCustomerSelection: {
      customers: "CustomerConnection",
      forAllCustomers: "Boolean",
      segments: "Segment"
    },
    PriceRuleDeactivatePayload: {
      priceRule: "PriceRule",
      priceRuleUserErrors: "PriceRuleUserError",
      userErrors: "UserError"
    },
    PriceRuleDeletePayload: {
      deletedPriceRuleId: "ID",
      priceRuleUserErrors: "PriceRuleUserError",
      shop: "Shop",
      userErrors: "UserError"
    },
    PriceRuleDiscountCode: {
      app: "App",
      code: "String",
      id: "ID",
      usageCount: "Int"
    },
    PriceRuleDiscountCodeConnection: {
      edges: "PriceRuleDiscountCodeEdge",
      nodes: "PriceRuleDiscountCode",
      pageInfo: "PageInfo"
    },
    PriceRuleDiscountCodeCreatePayload: {
      priceRule: "PriceRule",
      priceRuleDiscountCode: "PriceRuleDiscountCode",
      priceRuleUserErrors: "PriceRuleUserError",
      userErrors: "UserError"
    },
    PriceRuleDiscountCodeEdge: {
      cursor: "String",
      node: "PriceRuleDiscountCode"
    },
    PriceRuleDiscountCodeUpdatePayload: {
      priceRule: "PriceRule",
      priceRuleDiscountCode: "PriceRuleDiscountCode",
      priceRuleUserErrors: "PriceRuleUserError",
      userErrors: "UserError"
    },
    PriceRuleEdge: {
      cursor: "String",
      node: "PriceRule"
    },
    PriceRuleEntitlementToPrerequisiteQuantityRatio: {
      entitlementQuantity: "Int",
      prerequisiteQuantity: "Int"
    },
    PriceRuleFixedAmountValue: {
      amount: "Money"
    },
    PriceRuleItemEntitlements: {
      collections: "CollectionConnection",
      productVariants: "ProductVariantConnection",
      products: "ProductConnection",
      targetAllLineItems: "Boolean"
    },
    PriceRuleLineItemPrerequisites: {
      collections: "CollectionConnection",
      productVariants: "ProductVariantConnection",
      products: "ProductConnection"
    },
    PriceRuleMoneyRange: {
      greaterThan: "Money",
      greaterThanOrEqualTo: "Money",
      lessThan: "Money",
      lessThanOrEqualTo: "Money"
    },
    PriceRulePercentValue: {
      percentage: "Float"
    },
    PriceRulePrerequisiteToEntitlementQuantityRatio: {
      entitlementQuantity: "Int",
      prerequisiteQuantity: "Int"
    },
    PriceRuleQuantityRange: {
      greaterThan: "Int",
      greaterThanOrEqualTo: "Int",
      lessThan: "Int",
      lessThanOrEqualTo: "Int"
    },
    PriceRuleShareableUrl: {
      targetItemImage: "Image",
      targetType: "PriceRuleShareableUrlTargetType",
      title: "String",
      url: "URL"
    },
    PriceRuleShippingLineEntitlements: {
      countryCodes: "CountryCode",
      includeRestOfWorld: "Boolean",
      targetAllShippingLines: "Boolean"
    },
    PriceRuleUpdatePayload: {
      priceRule: "PriceRule",
      priceRuleDiscountCode: "PriceRuleDiscountCode",
      priceRuleUserErrors: "PriceRuleUserError",
      userErrors: "UserError"
    },
    PriceRuleUserError: {
      code: "PriceRuleErrorCode",
      field: "String",
      message: "String"
    },
    PriceRuleValidityPeriod: {
      end: "DateTime",
      start: "DateTime"
    },
    PriceRuleValue: {
      "...on PriceRuleFixedAmountValue": "PriceRuleFixedAmountValue",
      "...on PriceRulePercentValue": "PriceRulePercentValue"
    },
    PricingPercentageValue: {
      percentage: "Float"
    },
    PricingValue: {
      "...on MoneyV2": "MoneyV2",
      "...on PricingPercentageValue": "PricingPercentageValue"
    },
    PrivateMetafield: {
      createdAt: "DateTime",
      id: "ID",
      key: "String",
      namespace: "String",
      updatedAt: "DateTime",
      value: "String",
      valueType: "PrivateMetafieldValueType"
    },
    PrivateMetafieldConnection: {
      edges: "PrivateMetafieldEdge",
      nodes: "PrivateMetafield",
      pageInfo: "PageInfo"
    },
    PrivateMetafieldDeletePayload: {
      deletedPrivateMetafieldId: "ID",
      userErrors: "UserError"
    },
    PrivateMetafieldEdge: {
      cursor: "String",
      node: "PrivateMetafield"
    },
    PrivateMetafieldUpsertPayload: {
      privateMetafield: "PrivateMetafield",
      userErrors: "UserError"
    },
    Product: {
      availablePublicationCount: "Int",
      bodyHtml: "String",
      collections: "CollectionConnection",
      contextualPricing: "ProductContextualPricing",
      createdAt: "DateTime",
      customProductType: "String",
      defaultCursor: "String",
      description: "String",
      descriptionHtml: "HTML",
      descriptionPlainSummary: "String",
      featuredImage: "Image",
      featuredMedia: "Media",
      feedback: "ResourceFeedback",
      giftCardTemplateSuffix: "String",
      handle: "String",
      hasOnlyDefaultVariant: "Boolean",
      hasOutOfStockVariants: "Boolean",
      id: "ID",
      images: "ImageConnection",
      inCollection: "Boolean",
      isGiftCard: "Boolean",
      legacyResourceId: "UnsignedInt64",
      media: "MediaConnection",
      mediaCount: "Int",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      onlineStorePreviewUrl: "URL",
      onlineStoreUrl: "URL",
      options: "ProductOption",
      priceRange: "ProductPriceRange",
      priceRangeV2: "ProductPriceRangeV2",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      productCategory: "ProductCategory",
      productPublications: "ProductPublicationConnection",
      productType: "String",
      publicationCount: "Int",
      publications: "ProductPublicationConnection",
      publishedAt: "DateTime",
      publishedOnChannel: "Boolean",
      publishedOnCurrentChannel: "Boolean",
      publishedOnCurrentPublication: "Boolean",
      publishedOnPublication: "Boolean",
      requiresSellingPlan: "Boolean",
      resourcePublicationOnCurrentPublication: "ResourcePublicationV2",
      resourcePublications: "ResourcePublicationConnection",
      resourcePublicationsV2: "ResourcePublicationV2Connection",
      sellingPlanGroupCount: "Int",
      sellingPlanGroups: "SellingPlanGroupConnection",
      seo: "SEO",
      standardizedProductType: "StandardizedProductType",
      status: "ProductStatus",
      storefrontId: "StorefrontID",
      tags: "String",
      templateSuffix: "String",
      title: "String",
      totalInventory: "Int",
      totalVariants: "Int",
      tracksInventory: "Boolean",
      translations: "PublishedTranslation",
      unpublishedChannels: "ChannelConnection",
      unpublishedPublications: "PublicationConnection",
      updatedAt: "DateTime",
      variants: "ProductVariantConnection",
      vendor: "String"
    },
    ProductAppendImagesPayload: {
      newImages: "Image",
      product: "Product",
      userErrors: "UserError"
    },
    ProductCategory: {
      productTaxonomyNode: "ProductTaxonomyNode"
    },
    ProductChangeStatusPayload: {
      product: "Product",
      userErrors: "ProductChangeStatusUserError"
    },
    ProductChangeStatusUserError: {
      code: "ProductChangeStatusUserErrorCode",
      field: "String",
      message: "String"
    },
    ProductConnection: {
      edges: "ProductEdge",
      nodes: "Product",
      pageInfo: "PageInfo"
    },
    ProductContextualPricing: {
      maxVariantPricing: "ProductVariantContextualPricing",
      minVariantPricing: "ProductVariantContextualPricing",
      priceRange: "ProductPriceRangeV2"
    },
    ProductCreateMediaPayload: {
      media: "Media",
      mediaUserErrors: "MediaUserError",
      product: "Product",
      userErrors: "UserError"
    },
    ProductCreatePayload: {
      product: "Product",
      shop: "Shop",
      userErrors: "UserError"
    },
    ProductDeleteAsyncPayload: {
      deleteProductId: "ID",
      job: "Job",
      userErrors: "ProductDeleteUserError"
    },
    ProductDeleteImagesPayload: {
      deletedImageIds: "ID",
      product: "Product",
      userErrors: "UserError"
    },
    ProductDeleteMediaPayload: {
      deletedMediaIds: "ID",
      deletedProductImageIds: "ID",
      mediaUserErrors: "MediaUserError",
      product: "Product",
      userErrors: "UserError"
    },
    ProductDeletePayload: {
      deletedProductId: "ID",
      shop: "Shop",
      userErrors: "UserError"
    },
    ProductDeleteUserError: {
      code: "ProductDeleteUserErrorCode",
      field: "String",
      message: "String"
    },
    ProductDuplicateAsyncPayload: {
      duplicatedProductId: "ID",
      job: "Job",
      userErrors: "ProductDuplicateUserError"
    },
    ProductDuplicatePayload: {
      imageJob: "Job",
      newProduct: "Product",
      shop: "Shop",
      userErrors: "UserError"
    },
    ProductDuplicateUserError: {
      code: "ProductDuplicateUserErrorCode",
      field: "String",
      message: "String"
    },
    ProductEdge: {
      cursor: "String",
      node: "Product"
    },
    ProductImageUpdatePayload: {
      image: "Image",
      userErrors: "UserError"
    },
    ProductJoinSellingPlanGroupsPayload: {
      product: "Product",
      userErrors: "SellingPlanGroupUserError"
    },
    ProductLeaveSellingPlanGroupsPayload: {
      product: "Product",
      userErrors: "SellingPlanGroupUserError"
    },
    ProductOption: {
      id: "ID",
      name: "String",
      position: "Int",
      translations: "PublishedTranslation",
      values: "String"
    },
    ProductPriceRange: {
      maxVariantPrice: "MoneyV2",
      minVariantPrice: "MoneyV2"
    },
    ProductPriceRangeV2: {
      maxVariantPrice: "MoneyV2",
      minVariantPrice: "MoneyV2"
    },
    ProductPublication: {
      channel: "Channel",
      isPublished: "Boolean",
      product: "Product",
      publishDate: "DateTime"
    },
    ProductPublicationConnection: {
      edges: "ProductPublicationEdge",
      nodes: "ProductPublication",
      pageInfo: "PageInfo"
    },
    ProductPublicationEdge: {
      cursor: "String",
      node: "ProductPublication"
    },
    ProductPublishPayload: {
      product: "Product",
      productPublications: "ProductPublication",
      shop: "Shop",
      userErrors: "UserError"
    },
    ProductReorderImagesPayload: {
      job: "Job",
      userErrors: "UserError"
    },
    ProductReorderMediaPayload: {
      job: "Job",
      mediaUserErrors: "MediaUserError",
      userErrors: "UserError"
    },
    ProductResourceFeedback: {
      feedbackGeneratedAt: "DateTime",
      messages: "String",
      productId: "ID",
      productUpdatedAt: "DateTime",
      state: "ResourceFeedbackState"
    },
    ProductSale: {
      actionType: "SaleActionType",
      id: "ID",
      lineItem: "LineItem",
      lineType: "SaleLineType",
      quantity: "Int",
      taxes: "SaleTax",
      totalAmount: "MoneyBag",
      totalDiscountAmountAfterTaxes: "MoneyBag",
      totalDiscountAmountBeforeTaxes: "MoneyBag",
      totalTaxAmount: "MoneyBag"
    },
    ProductTaxonomyNode: {
      fullName: "String",
      id: "ID",
      isLeaf: "Boolean",
      isRoot: "Boolean",
      name: "String"
    },
    ProductUnpublishPayload: {
      product: "Product",
      shop: "Shop",
      userErrors: "UserError"
    },
    ProductUpdateMediaPayload: {
      media: "Media",
      mediaUserErrors: "MediaUserError",
      product: "Product",
      userErrors: "UserError"
    },
    ProductUpdatePayload: {
      product: "Product",
      userErrors: "UserError"
    },
    ProductVariant: {
      availableForSale: "Boolean",
      barcode: "String",
      compareAtPrice: "Money",
      contextualPricing: "ProductVariantContextualPricing",
      createdAt: "DateTime",
      defaultCursor: "String",
      deliveryProfile: "DeliveryProfile",
      displayName: "String",
      fulfillmentService: "FulfillmentService",
      fulfillmentServiceEditable: "EditableProperty",
      harmonizedSystemCode: "String",
      id: "ID",
      image: "Image",
      inventoryItem: "InventoryItem",
      inventoryManagement: "ProductVariantInventoryManagement",
      inventoryPolicy: "ProductVariantInventoryPolicy",
      inventoryQuantity: "Int",
      legacyResourceId: "UnsignedInt64",
      media: "MediaConnection",
      metafield: "Metafield",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafields: "MetafieldConnection",
      position: "Int",
      presentmentPrices: "ProductVariantPricePairConnection",
      price: "Money",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      product: "Product",
      requiresShipping: "Boolean",
      selectedOptions: "SelectedOption",
      sellableOnlineQuantity: "Int",
      sellingPlanGroupCount: "Int",
      sellingPlanGroups: "SellingPlanGroupConnection",
      sku: "String",
      storefrontId: "StorefrontID",
      taxCode: "String",
      taxable: "Boolean",
      title: "String",
      translations: "PublishedTranslation",
      updatedAt: "DateTime",
      weight: "Float",
      weightUnit: "WeightUnit"
    },
    ProductVariantAppendMediaPayload: {
      product: "Product",
      productVariants: "ProductVariant",
      userErrors: "MediaUserError"
    },
    ProductVariantConnection: {
      edges: "ProductVariantEdge",
      nodes: "ProductVariant",
      pageInfo: "PageInfo"
    },
    ProductVariantContextualPricing: {
      compareAtPrice: "MoneyV2",
      price: "MoneyV2"
    },
    ProductVariantCreatePayload: {
      product: "Product",
      productVariant: "ProductVariant",
      userErrors: "UserError"
    },
    ProductVariantDeletePayload: {
      deletedProductVariantId: "ID",
      product: "Product",
      userErrors: "UserError"
    },
    ProductVariantDetachMediaPayload: {
      product: "Product",
      productVariants: "ProductVariant",
      userErrors: "MediaUserError"
    },
    ProductVariantEdge: {
      cursor: "String",
      node: "ProductVariant"
    },
    ProductVariantJoinSellingPlanGroupsPayload: {
      productVariant: "ProductVariant",
      userErrors: "SellingPlanGroupUserError"
    },
    ProductVariantLeaveSellingPlanGroupsPayload: {
      productVariant: "ProductVariant",
      userErrors: "SellingPlanGroupUserError"
    },
    ProductVariantPricePair: {
      compareAtPrice: "MoneyV2",
      price: "MoneyV2"
    },
    ProductVariantPricePairConnection: {
      edges: "ProductVariantPricePairEdge",
      nodes: "ProductVariantPricePair",
      pageInfo: "PageInfo"
    },
    ProductVariantPricePairEdge: {
      cursor: "String",
      node: "ProductVariantPricePair"
    },
    ProductVariantUpdatePayload: {
      product: "Product",
      productVariant: "ProductVariant",
      userErrors: "UserError"
    },
    ProductVariantsBulkCreatePayload: {
      product: "Product",
      productVariants: "ProductVariant",
      userErrors: "ProductVariantsBulkCreateUserError"
    },
    ProductVariantsBulkCreateUserError: {
      code: "ProductVariantsBulkCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    ProductVariantsBulkDeletePayload: {
      product: "Product",
      userErrors: "ProductVariantsBulkDeleteUserError"
    },
    ProductVariantsBulkDeleteUserError: {
      code: "ProductVariantsBulkDeleteUserErrorCode",
      field: "String",
      message: "String"
    },
    ProductVariantsBulkReorderPayload: {
      product: "Product",
      userErrors: "ProductVariantsBulkReorderUserError"
    },
    ProductVariantsBulkReorderUserError: {
      code: "ProductVariantsBulkReorderUserErrorCode",
      field: "String",
      message: "String"
    },
    ProductVariantsBulkUpdatePayload: {
      product: "Product",
      productVariants: "ProductVariant",
      userErrors: "ProductVariantsBulkUpdateUserError"
    },
    ProductVariantsBulkUpdateUserError: {
      code: "ProductVariantsBulkUpdateUserErrorCode",
      field: "String",
      message: "String"
    },
    PubSubWebhookSubscriptionCreatePayload: {
      userErrors: "PubSubWebhookSubscriptionCreateUserError",
      webhookSubscription: "WebhookSubscription"
    },
    PubSubWebhookSubscriptionCreateUserError: {
      code: "PubSubWebhookSubscriptionCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    PubSubWebhookSubscriptionUpdatePayload: {
      userErrors: "PubSubWebhookSubscriptionUpdateUserError",
      webhookSubscription: "WebhookSubscription"
    },
    PubSubWebhookSubscriptionUpdateUserError: {
      code: "PubSubWebhookSubscriptionUpdateUserErrorCode",
      field: "String",
      message: "String"
    },
    Publication: {
      app: "App",
      collectionPublicationsV3: "ResourcePublicationConnection",
      collections: "CollectionConnection",
      hasCollection: "Boolean",
      id: "ID",
      name: "String",
      productPublicationsV3: "ResourcePublicationConnection",
      products: "ProductConnection",
      supportsFuturePublishing: "Boolean"
    },
    PublicationConnection: {
      edges: "PublicationEdge",
      nodes: "Publication",
      pageInfo: "PageInfo"
    },
    PublicationEdge: {
      cursor: "String",
      node: "Publication"
    },
    Publishable: {
      "...on Collection": "Collection",
      "...on Product": "Product",
      availablePublicationCount: "Int",
      publicationCount: "Int",
      publishedOnChannel: "Boolean",
      publishedOnCurrentChannel: "Boolean",
      publishedOnCurrentPublication: "Boolean",
      publishedOnPublication: "Boolean",
      resourcePublications: "ResourcePublicationConnection",
      resourcePublicationsV2: "ResourcePublicationV2Connection",
      unpublishedChannels: "ChannelConnection",
      unpublishedPublications: "PublicationConnection"
    },
    PublishablePublishPayload: {
      publishable: "Publishable",
      shop: "Shop",
      userErrors: "UserError"
    },
    PublishablePublishToCurrentChannelPayload: {
      publishable: "Publishable",
      shop: "Shop",
      userErrors: "UserError"
    },
    PublishableUnpublishPayload: {
      publishable: "Publishable",
      shop: "Shop",
      userErrors: "UserError"
    },
    PublishableUnpublishToCurrentChannelPayload: {
      publishable: "Publishable",
      shop: "Shop",
      userErrors: "UserError"
    },
    PublishedTranslation: {
      key: "String",
      locale: "String",
      marketId: "ID",
      value: "String"
    },
    PurchasingCompany: {
      company: "Company",
      contact: "CompanyContact",
      location: "CompanyLocation"
    },
    PurchasingEntity: {
      "...on Customer": "Customer",
      "...on PurchasingCompany": "PurchasingCompany"
    },
    QueryRoot: {
      abandonment: "Abandonment",
      abandonmentByAbandonedCheckoutId: "Abandonment",
      app: "App",
      appByHandle: "App",
      appByKey: "App",
      appDiscountType: "AppDiscountType",
      appDiscountTypes: "AppDiscountType",
      appInstallation: "AppInstallation",
      appInstallations: "AppInstallationConnection",
      automaticDiscount: "DiscountAutomatic",
      automaticDiscountNode: "DiscountAutomaticNode",
      automaticDiscountNodes: "DiscountAutomaticNodeConnection",
      automaticDiscountSavedSearches: "SavedSearchConnection",
      automaticDiscounts: "DiscountAutomaticConnection",
      availableCarrierServices: "DeliveryCarrierServiceAndLocations",
      availableLocales: "Locale",
      carrierService: "DeliveryCarrierService",
      channel: "Channel",
      channels: "ChannelConnection",
      checkoutProfile: "CheckoutProfile",
      checkoutProfiles: "CheckoutProfileConnection",
      codeDiscountNode: "DiscountCodeNode",
      codeDiscountNodeByCode: "DiscountCodeNode",
      codeDiscountNodes: "DiscountCodeNodeConnection",
      codeDiscountSavedSearches: "SavedSearchConnection",
      collection: "Collection",
      collectionByHandle: "Collection",
      collectionRulesConditions: "CollectionRuleConditions",
      collectionSavedSearches: "SavedSearchConnection",
      collections: "CollectionConnection",
      companies: "CompanyConnection",
      company: "Company",
      companyContact: "CompanyContact",
      companyContactRole: "CompanyContactRole",
      companyCount: "Int",
      companyLocation: "CompanyLocation",
      companyLocations: "CompanyLocationConnection",
      currentAppInstallation: "AppInstallation",
      currentBulkOperation: "BulkOperation",
      customer: "Customer",
      customerPaymentMethod: "CustomerPaymentMethod",
      customerSegmentMembers: "CustomerSegmentMemberConnection",
      customerSegmentMembersQuery: "CustomerSegmentMembersQuery",
      customerSegmentMembership: "SegmentMembershipResponse",
      customers: "CustomerConnection",
      deletionEvents: "DeletionEventConnection",
      deliveryProfile: "DeliveryProfile",
      deliveryProfiles: "DeliveryProfileConnection",
      deliverySettings: "DeliverySetting",
      discountCodeCount: "Int",
      discountNode: "DiscountNode",
      discountNodes: "DiscountNodeConnection",
      discountRedeemCodeBulkCreation: "DiscountRedeemCodeBulkCreation",
      discountRedeemCodeSavedSearches: "SavedSearchConnection",
      dispute: "ShopifyPaymentsDispute",
      disputeEvidence: "ShopifyPaymentsDisputeEvidence",
      domain: "Domain",
      draftOrder: "DraftOrder",
      draftOrderSavedSearches: "SavedSearchConnection",
      draftOrderTag: "DraftOrderTag",
      draftOrders: "DraftOrderConnection",
      fileSavedSearches: "SavedSearchConnection",
      files: "FileConnection",
      fulfillment: "Fulfillment",
      fulfillmentOrder: "FulfillmentOrder",
      fulfillmentOrders: "FulfillmentOrderConnection",
      fulfillmentService: "FulfillmentService",
      giftCard: "GiftCard",
      giftCards: "GiftCardConnection",
      giftCardsCount: "UnsignedInt64",
      inventoryItem: "InventoryItem",
      inventoryItems: "InventoryItemConnection",
      inventoryLevel: "InventoryLevel",
      inventoryProperties: "InventoryProperties",
      job: "Job",
      location: "Location",
      locations: "LocationConnection",
      locationsAvailableForDeliveryProfiles: "Location",
      locationsAvailableForDeliveryProfilesConnection: "LocationConnection",
      manualHoldsFulfillmentOrders: "FulfillmentOrderConnection",
      market: "Market",
      marketByGeography: "Market",
      marketLocalizableResource: "MarketLocalizableResource",
      marketLocalizableResources: "MarketLocalizableResourceConnection",
      marketLocalizableResourcesByIds: "MarketLocalizableResourceConnection",
      marketingActivities: "MarketingActivityConnection",
      marketingActivity: "MarketingActivity",
      marketingEvent: "MarketingEvent",
      marketingEvents: "MarketingEventConnection",
      markets: "MarketConnection",
      metafield: "Metafield",
      metafieldDefinition: "MetafieldDefinition",
      metafieldDefinitionTypes: "MetafieldDefinitionType",
      metafieldDefinitions: "MetafieldDefinitionConnection",
      metafieldStorefrontVisibilities: "MetafieldStorefrontVisibilityConnection",
      metafieldStorefrontVisibility: "MetafieldStorefrontVisibility",
      metaobject: "Metaobject",
      metaobjectByHandle: "Metaobject",
      metaobjectDefinition: "MetaobjectDefinition",
      metaobjectDefinitionByType: "MetaobjectDefinition",
      metaobjectDefinitions: "MetaobjectDefinitionConnection",
      metaobjects: "MetaobjectConnection",
      node: "Node",
      nodes: "Node",
      order: "Order",
      orderPaymentStatus: "OrderPaymentStatus",
      orderSavedSearches: "SavedSearchConnection",
      orders: "OrderConnection",
      paymentTermsTemplates: "PaymentTermsTemplate",
      priceList: "PriceList",
      priceLists: "PriceListConnection",
      priceRule: "PriceRule",
      priceRuleSavedSearches: "SavedSearchConnection",
      priceRules: "PriceRuleConnection",
      primaryMarket: "Market",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      product: "Product",
      productByHandle: "Product",
      productResourceFeedback: "ProductResourceFeedback",
      productSavedSearches: "SavedSearchConnection",
      productVariant: "ProductVariant",
      productVariants: "ProductVariantConnection",
      products: "ProductConnection",
      publicApiVersions: "ApiVersion",
      publication: "Publication",
      publications: "PublicationConnection",
      refund: "Refund",
      return: "Return",
      returnableFulfillment: "ReturnableFulfillment",
      returnableFulfillments: "ReturnableFulfillmentConnection",
      reverseDelivery: "ReverseDelivery",
      reverseFulfillmentOrder: "ReverseFulfillmentOrder",
      scriptTag: "ScriptTag",
      scriptTags: "ScriptTagConnection",
      segment: "Segment",
      segmentCount: "Int",
      segmentFilterSuggestions: "SegmentFilterConnection",
      segmentFilters: "SegmentFilterConnection",
      segmentMigrations: "SegmentMigrationConnection",
      segmentValueSuggestions: "SegmentValueConnection",
      segments: "SegmentConnection",
      sellingPlanGroup: "SellingPlanGroup",
      sellingPlanGroups: "SellingPlanGroupConnection",
      shop: "Shop",
      shopLocales: "ShopLocale",
      shopifyPaymentsAccount: "ShopifyPaymentsAccount",
      shopifyqlQuery: "ShopifyqlResponse",
      staffMember: "StaffMember",
      standardMetafieldDefinitionTemplates: "StandardMetafieldDefinitionTemplateConnection",
      subscriptionBillingAttempt: "SubscriptionBillingAttempt",
      subscriptionBillingCycle: "SubscriptionBillingCycle",
      subscriptionBillingCycles: "SubscriptionBillingCycleConnection",
      subscriptionContract: "SubscriptionContract",
      subscriptionContracts: "SubscriptionContractConnection",
      subscriptionDraft: "SubscriptionDraft",
      tenderTransactions: "TenderTransactionConnection",
      translatableResource: "TranslatableResource",
      translatableResources: "TranslatableResourceConnection",
      translatableResourcesByIds: "TranslatableResourceConnection",
      urlRedirect: "UrlRedirect",
      urlRedirectImport: "UrlRedirectImport",
      urlRedirectSavedSearches: "SavedSearchConnection",
      urlRedirects: "UrlRedirectConnection",
      webPixel: "WebPixel",
      webhookSubscription: "WebhookSubscription",
      webhookSubscriptions: "WebhookSubscriptionConnection"
    },
    Refund: {
      createdAt: "DateTime",
      duties: "RefundDuty",
      id: "ID",
      legacyResourceId: "UnsignedInt64",
      note: "String",
      order: "Order",
      refundLineItems: "RefundLineItemConnection",
      return: "Return",
      staffMember: "StaffMember",
      totalRefunded: "MoneyV2",
      totalRefundedSet: "MoneyBag",
      transactions: "OrderTransactionConnection",
      updatedAt: "DateTime"
    },
    RefundAgreement: {
      app: "App",
      happenedAt: "DateTime",
      id: "ID",
      reason: "OrderActionType",
      refund: "Refund",
      sales: "SaleConnection",
      user: "StaffMember"
    },
    RefundConnection: {
      edges: "RefundEdge",
      nodes: "Refund",
      pageInfo: "PageInfo"
    },
    RefundCreatePayload: {
      order: "Order",
      refund: "Refund",
      userErrors: "UserError"
    },
    RefundDuty: {
      amountSet: "MoneyBag",
      originalDuty: "Duty"
    },
    RefundEdge: {
      cursor: "String",
      node: "Refund"
    },
    RefundLineItem: {
      lineItem: "LineItem",
      location: "Location",
      price: "Money",
      priceSet: "MoneyBag",
      quantity: "Int",
      restockType: "RefundLineItemRestockType",
      restocked: "Boolean",
      subtotal: "Money",
      subtotalSet: "MoneyBag",
      totalTax: "Money",
      totalTaxSet: "MoneyBag"
    },
    RefundLineItemConnection: {
      edges: "RefundLineItemEdge",
      nodes: "RefundLineItem",
      pageInfo: "PageInfo"
    },
    RefundLineItemEdge: {
      cursor: "String",
      node: "RefundLineItem"
    },
    ResourceAlert: {
      actions: "ResourceAlertAction",
      content: "HTML",
      dismissibleHandle: "String",
      icon: "ResourceAlertIcon",
      severity: "ResourceAlertSeverity",
      title: "String"
    },
    ResourceAlertAction: {
      primary: "Boolean",
      show: "String",
      title: "String",
      url: "URL"
    },
    ResourceFeedback: {
      appFeedback: "AppFeedback",
      details: "AppFeedback",
      summary: "String"
    },
    ResourceLimit: {
      available: "Boolean",
      quantityAvailable: "Int",
      quantityLimit: "Int",
      quantityUsed: "Int"
    },
    ResourcePublication: {
      channel: "Channel",
      isPublished: "Boolean",
      publication: "Publication",
      publishDate: "DateTime",
      publishable: "Publishable"
    },
    ResourcePublicationConnection: {
      edges: "ResourcePublicationEdge",
      nodes: "ResourcePublication",
      pageInfo: "PageInfo"
    },
    ResourcePublicationEdge: {
      cursor: "String",
      node: "ResourcePublication"
    },
    ResourcePublicationV2: {
      isPublished: "Boolean",
      publication: "Publication",
      publishDate: "DateTime",
      publishable: "Publishable"
    },
    ResourcePublicationV2Connection: {
      edges: "ResourcePublicationV2Edge",
      nodes: "ResourcePublicationV2",
      pageInfo: "PageInfo"
    },
    ResourcePublicationV2Edge: {
      cursor: "String",
      node: "ResourcePublicationV2"
    },
    Return: {
      decline: "ReturnDecline",
      id: "ID",
      name: "String",
      order: "Order",
      refunds: "RefundConnection",
      returnLineItems: "ReturnLineItemConnection",
      reverseFulfillmentOrders: "ReverseFulfillmentOrderConnection",
      status: "ReturnStatus",
      suggestedRefund: "SuggestedReturnRefund",
      totalQuantity: "Int"
    },
    ReturnApproveRequestPayload: {
      return: "Return",
      userErrors: "ReturnUserError"
    },
    ReturnCancelPayload: {
      return: "Return",
      userErrors: "ReturnUserError"
    },
    ReturnClosePayload: {
      return: "Return",
      userErrors: "ReturnUserError"
    },
    ReturnConnection: {
      edges: "ReturnEdge",
      nodes: "Return",
      pageInfo: "PageInfo"
    },
    ReturnCreatePayload: {
      return: "Return",
      userErrors: "ReturnUserError"
    },
    ReturnDecline: {
      note: "String",
      reason: "ReturnDeclineReason"
    },
    ReturnDeclineRequestPayload: {
      return: "Return",
      userErrors: "ReturnUserError"
    },
    ReturnEdge: {
      cursor: "String",
      node: "Return"
    },
    ReturnLineItem: {
      customerNote: "String",
      fulfillmentLineItem: "FulfillmentLineItem",
      id: "ID",
      quantity: "Int",
      refundableQuantity: "Int",
      refundedQuantity: "Int",
      returnReason: "ReturnReason",
      returnReasonNote: "String",
      totalWeight: "Weight",
      withCodeDiscountedTotalPriceSet: "MoneyBag"
    },
    ReturnLineItemConnection: {
      edges: "ReturnLineItemEdge",
      nodes: "ReturnLineItem",
      pageInfo: "PageInfo"
    },
    ReturnLineItemEdge: {
      cursor: "String",
      node: "ReturnLineItem"
    },
    ReturnRefundPayload: {
      refund: "Refund",
      userErrors: "ReturnUserError"
    },
    ReturnReopenPayload: {
      return: "Return",
      userErrors: "ReturnUserError"
    },
    ReturnRequestPayload: {
      return: "Return",
      userErrors: "ReturnUserError"
    },
    ReturnUserError: {
      code: "ReturnErrorCode",
      field: "String",
      message: "String"
    },
    ReturnableFulfillment: {
      fulfillment: "Fulfillment",
      id: "ID",
      returnableFulfillmentLineItems: "ReturnableFulfillmentLineItemConnection"
    },
    ReturnableFulfillmentConnection: {
      edges: "ReturnableFulfillmentEdge",
      nodes: "ReturnableFulfillment",
      pageInfo: "PageInfo"
    },
    ReturnableFulfillmentEdge: {
      cursor: "String",
      node: "ReturnableFulfillment"
    },
    ReturnableFulfillmentLineItem: {
      fulfillmentLineItem: "FulfillmentLineItem",
      quantity: "Int"
    },
    ReturnableFulfillmentLineItemConnection: {
      edges: "ReturnableFulfillmentLineItemEdge",
      nodes: "ReturnableFulfillmentLineItem",
      pageInfo: "PageInfo"
    },
    ReturnableFulfillmentLineItemEdge: {
      cursor: "String",
      node: "ReturnableFulfillmentLineItem"
    },
    ReverseDelivery: {
      deliverable: "ReverseDeliveryDeliverable",
      id: "ID",
      reverseDeliveryLineItems: "ReverseDeliveryLineItemConnection",
      reverseFulfillmentOrder: "ReverseFulfillmentOrder"
    },
    ReverseDeliveryConnection: {
      edges: "ReverseDeliveryEdge",
      nodes: "ReverseDelivery",
      pageInfo: "PageInfo"
    },
    ReverseDeliveryCreateWithShippingPayload: {
      reverseDelivery: "ReverseDelivery",
      userErrors: "ReturnUserError"
    },
    ReverseDeliveryDeliverable: {
      "...on ReverseDeliveryShippingDeliverable": "ReverseDeliveryShippingDeliverable"
    },
    ReverseDeliveryDisposePayload: {
      reverseDeliveryLineItems: "ReverseDeliveryLineItem",
      userErrors: "ReturnUserError"
    },
    ReverseDeliveryEdge: {
      cursor: "String",
      node: "ReverseDelivery"
    },
    ReverseDeliveryLabelV2: {
      createdAt: "DateTime",
      publicFileUrl: "URL",
      updatedAt: "DateTime"
    },
    ReverseDeliveryLineItem: {
      dispositions: "ReverseFulfillmentOrderDisposition",
      id: "ID",
      quantity: "Int",
      reverseFulfillmentOrderLineItem: "ReverseFulfillmentOrderLineItem"
    },
    ReverseDeliveryLineItemConnection: {
      edges: "ReverseDeliveryLineItemEdge",
      nodes: "ReverseDeliveryLineItem",
      pageInfo: "PageInfo"
    },
    ReverseDeliveryLineItemEdge: {
      cursor: "String",
      node: "ReverseDeliveryLineItem"
    },
    ReverseDeliveryShippingDeliverable: {
      label: "ReverseDeliveryLabelV2",
      tracking: "ReverseDeliveryTrackingV2"
    },
    ReverseDeliveryShippingUpdatePayload: {
      reverseDelivery: "ReverseDelivery",
      userErrors: "ReturnUserError"
    },
    ReverseDeliveryTrackingV2: {
      carrierName: "String",
      number: "String",
      url: "URL"
    },
    ReverseFulfillmentOrder: {
      id: "ID",
      lineItems: "ReverseFulfillmentOrderLineItemConnection",
      order: "Order",
      reverseDeliveries: "ReverseDeliveryConnection",
      status: "ReverseFulfillmentOrderStatus",
      thirdPartyConfirmation: "ReverseFulfillmentOrderThirdPartyConfirmation"
    },
    ReverseFulfillmentOrderConnection: {
      edges: "ReverseFulfillmentOrderEdge",
      nodes: "ReverseFulfillmentOrder",
      pageInfo: "PageInfo"
    },
    ReverseFulfillmentOrderDisposePayload: {
      reverseFulfillmentOrderLineItems: "ReverseFulfillmentOrderLineItem",
      userErrors: "ReturnUserError"
    },
    ReverseFulfillmentOrderDisposition: {
      id: "ID",
      location: "Location",
      quantity: "Int",
      type: "ReverseFulfillmentOrderDispositionType"
    },
    ReverseFulfillmentOrderEdge: {
      cursor: "String",
      node: "ReverseFulfillmentOrder"
    },
    ReverseFulfillmentOrderLineItem: {
      dispositions: "ReverseFulfillmentOrderDisposition",
      fulfillmentLineItem: "FulfillmentLineItem",
      id: "ID",
      totalQuantity: "Int"
    },
    ReverseFulfillmentOrderLineItemConnection: {
      edges: "ReverseFulfillmentOrderLineItemEdge",
      nodes: "ReverseFulfillmentOrderLineItem",
      pageInfo: "PageInfo"
    },
    ReverseFulfillmentOrderLineItemEdge: {
      cursor: "String",
      node: "ReverseFulfillmentOrderLineItem"
    },
    ReverseFulfillmentOrderThirdPartyConfirmation: {
      status: "ReverseFulfillmentOrderThirdPartyConfirmationStatus"
    },
    SEO: {
      description: "String",
      title: "String"
    },
    Sale: {
      "...on AdjustmentSale": "AdjustmentSale",
      "...on DutySale": "DutySale",
      "...on GiftCardSale": "GiftCardSale",
      "...on ProductSale": "ProductSale",
      "...on ShippingLineSale": "ShippingLineSale",
      "...on TipSale": "TipSale",
      actionType: "SaleActionType",
      id: "ID",
      lineType: "SaleLineType",
      quantity: "Int",
      taxes: "SaleTax",
      totalAmount: "MoneyBag",
      totalDiscountAmountAfterTaxes: "MoneyBag",
      totalDiscountAmountBeforeTaxes: "MoneyBag",
      totalTaxAmount: "MoneyBag"
    },
    SaleConnection: {
      edges: "SaleEdge",
      nodes: "Sale",
      pageInfo: "PageInfo"
    },
    SaleEdge: {
      cursor: "String",
      node: "Sale"
    },
    SaleTax: {
      amount: "MoneyBag",
      id: "ID",
      taxLine: "TaxLine"
    },
    SalesAgreement: {
      "...on OrderAgreement": "OrderAgreement",
      "...on OrderEditAgreement": "OrderEditAgreement",
      "...on RefundAgreement": "RefundAgreement",
      app: "App",
      happenedAt: "DateTime",
      id: "ID",
      reason: "OrderActionType",
      sales: "SaleConnection",
      user: "StaffMember"
    },
    SalesAgreementConnection: {
      edges: "SalesAgreementEdge",
      nodes: "SalesAgreement",
      pageInfo: "PageInfo"
    },
    SalesAgreementEdge: {
      cursor: "String",
      node: "SalesAgreement"
    },
    SavedSearch: {
      filters: "SearchFilter",
      id: "ID",
      legacyResourceId: "UnsignedInt64",
      name: "String",
      query: "String",
      resourceType: "SearchResultType",
      searchTerms: "String"
    },
    SavedSearchConnection: {
      edges: "SavedSearchEdge",
      nodes: "SavedSearch",
      pageInfo: "PageInfo"
    },
    SavedSearchCreatePayload: {
      savedSearch: "SavedSearch",
      userErrors: "UserError"
    },
    SavedSearchDeletePayload: {
      deletedSavedSearchId: "ID",
      shop: "Shop",
      userErrors: "UserError"
    },
    SavedSearchEdge: {
      cursor: "String",
      node: "SavedSearch"
    },
    SavedSearchUpdatePayload: {
      savedSearch: "SavedSearch",
      userErrors: "UserError"
    },
    ScriptDiscountApplication: {
      allocationMethod: "DiscountApplicationAllocationMethod",
      description: "String",
      index: "Int",
      targetSelection: "DiscountApplicationTargetSelection",
      targetType: "DiscountApplicationTargetType",
      title: "String",
      value: "PricingValue"
    },
    ScriptTag: {
      cache: "Boolean",
      createdAt: "DateTime",
      displayScope: "ScriptTagDisplayScope",
      id: "ID",
      legacyResourceId: "UnsignedInt64",
      src: "URL",
      updatedAt: "DateTime"
    },
    ScriptTagConnection: {
      edges: "ScriptTagEdge",
      nodes: "ScriptTag",
      pageInfo: "PageInfo"
    },
    ScriptTagCreatePayload: {
      scriptTag: "ScriptTag",
      userErrors: "UserError"
    },
    ScriptTagDeletePayload: {
      deletedScriptTagId: "ID",
      userErrors: "UserError"
    },
    ScriptTagEdge: {
      cursor: "String",
      node: "ScriptTag"
    },
    ScriptTagUpdatePayload: {
      scriptTag: "ScriptTag",
      userErrors: "UserError"
    },
    SearchFilter: {
      key: "String",
      value: "String"
    },
    SearchFilterOptions: {
      productAvailability: "FilterOption"
    },
    SearchResult: {
      description: "String",
      image: "Image",
      reference: "Node",
      title: "String",
      url: "URL"
    },
    SearchResultConnection: {
      edges: "SearchResultEdge",
      pageInfo: "PageInfo",
      resultsAfterCount: "Int"
    },
    SearchResultEdge: {
      cursor: "String",
      node: "SearchResult"
    },
    Segment: {
      creationDate: "DateTime",
      id: "ID",
      lastEditDate: "DateTime",
      name: "String",
      query: "String"
    },
    SegmentAssociationFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String",
      values: "SegmentAssociationFilterValueConnection"
    },
    SegmentAssociationFilterValue: {
      localizedName: "String",
      queryName: "String"
    },
    SegmentAssociationFilterValueConnection: {
      edges: "SegmentAssociationFilterValueEdge",
      nodes: "SegmentAssociationFilterValue",
      pageInfo: "PageInfo"
    },
    SegmentAssociationFilterValueEdge: {
      cursor: "String",
      node: "SegmentAssociationFilterValue"
    },
    SegmentAttributeStatistics: {
      average: "Float",
      sum: "Float"
    },
    SegmentBooleanFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String"
    },
    SegmentConnection: {
      edges: "SegmentEdge",
      nodes: "Segment",
      pageInfo: "PageInfo"
    },
    SegmentCreatePayload: {
      segment: "Segment",
      userErrors: "UserError"
    },
    SegmentDateFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String"
    },
    SegmentDeletePayload: {
      deletedSegmentId: "ID",
      userErrors: "UserError"
    },
    SegmentEdge: {
      cursor: "String",
      node: "Segment"
    },
    SegmentEnumFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String",
      values: "SegmentEnumFilterValueConnection"
    },
    SegmentEnumFilterValue: {
      localizedName: "String",
      queryName: "String"
    },
    SegmentEnumFilterValueConnection: {
      edges: "SegmentEnumFilterValueEdge",
      nodes: "SegmentEnumFilterValue",
      pageInfo: "PageInfo"
    },
    SegmentEnumFilterValueEdge: {
      cursor: "String",
      node: "SegmentEnumFilterValue"
    },
    SegmentEventFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      parameters: "SegmentEventFilterParameter",
      queryName: "String",
      returnValueType: "String",
      values: "SegmentEventFilterValueConnection"
    },
    SegmentEventFilterParameter: {
      localizedDescription: "String",
      localizedName: "String",
      optional: "Boolean",
      parameterType: "String",
      queryName: "String"
    },
    SegmentEventFilterValue: {
      localizedName: "String",
      queryName: "String"
    },
    SegmentEventFilterValueConnection: {
      edges: "SegmentEventFilterValueEdge",
      nodes: "SegmentEventFilterValue",
      pageInfo: "PageInfo"
    },
    SegmentEventFilterValueEdge: {
      cursor: "String",
      node: "SegmentEventFilterValue"
    },
    SegmentFilter: {
      "...on SegmentAssociationFilter": "SegmentAssociationFilter",
      "...on SegmentBooleanFilter": "SegmentBooleanFilter",
      "...on SegmentDateFilter": "SegmentDateFilter",
      "...on SegmentEnumFilter": "SegmentEnumFilter",
      "...on SegmentEventFilter": "SegmentEventFilter",
      "...on SegmentFloatFilter": "SegmentFloatFilter",
      "...on SegmentIntegerFilter": "SegmentIntegerFilter",
      "...on SegmentStringFilter": "SegmentStringFilter",
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String"
    },
    SegmentFilterConnection: {
      edges: "SegmentFilterEdge",
      nodes: "SegmentFilter",
      pageInfo: "PageInfo"
    },
    SegmentFilterEdge: {
      cursor: "String",
      node: "SegmentFilter"
    },
    SegmentFloatFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String"
    },
    SegmentIntegerFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String"
    },
    SegmentMembership: {
      isMember: "Boolean",
      segmentId: "ID"
    },
    SegmentMembershipResponse: {
      memberships: "SegmentMembership"
    },
    SegmentMigration: {
      id: "ID",
      savedSearchId: "ID",
      segmentId: "ID"
    },
    SegmentMigrationConnection: {
      edges: "SegmentMigrationEdge",
      nodes: "SegmentMigration",
      pageInfo: "PageInfo"
    },
    SegmentMigrationEdge: {
      cursor: "String",
      node: "SegmentMigration"
    },
    SegmentStatistics: {
      attributeStatistics: "SegmentAttributeStatistics",
      totalCount: "Int"
    },
    SegmentStringFilter: {
      localizedName: "String",
      multiValue: "Boolean",
      queryName: "String",
      values: "SegmentStringFilterValueConnection"
    },
    SegmentStringFilterValue: {
      localizedName: "String",
      queryName: "String"
    },
    SegmentStringFilterValueConnection: {
      edges: "SegmentStringFilterValueEdge",
      nodes: "SegmentStringFilterValue",
      pageInfo: "PageInfo"
    },
    SegmentStringFilterValueEdge: {
      cursor: "String",
      node: "SegmentStringFilterValue"
    },
    SegmentUpdatePayload: {
      segment: "Segment",
      userErrors: "UserError"
    },
    SegmentValue: {
      localizedValue: "String",
      queryName: "String"
    },
    SegmentValueConnection: {
      edges: "SegmentValueEdge",
      nodes: "SegmentValue",
      pageInfo: "PageInfo"
    },
    SegmentValueEdge: {
      cursor: "String",
      node: "SegmentValue"
    },
    SelectedOption: {
      name: "String",
      value: "String"
    },
    SellingPlan: {
      billingPolicy: "SellingPlanBillingPolicy",
      category: "SellingPlanCategory",
      createdAt: "DateTime",
      deliveryPolicy: "SellingPlanDeliveryPolicy",
      description: "String",
      id: "ID",
      inventoryPolicy: "SellingPlanInventoryPolicy",
      name: "String",
      options: "String",
      position: "Int",
      pricingPolicies: "SellingPlanPricingPolicy"
    },
    SellingPlanAnchor: {
      cutoffDay: "Int",
      day: "Int",
      month: "Int",
      type: "SellingPlanAnchorType"
    },
    SellingPlanBillingPolicy: {
      "...on SellingPlanFixedBillingPolicy": "SellingPlanFixedBillingPolicy",
      "...on SellingPlanRecurringBillingPolicy": "SellingPlanRecurringBillingPolicy"
    },
    SellingPlanCheckoutCharge: {
      type: "SellingPlanCheckoutChargeType",
      value: "SellingPlanCheckoutChargeValue"
    },
    SellingPlanCheckoutChargePercentageValue: {
      percentage: "Float"
    },
    SellingPlanCheckoutChargeValue: {
      "...on MoneyV2": "MoneyV2",
      "...on SellingPlanCheckoutChargePercentageValue": "SellingPlanCheckoutChargePercentageValue"
    },
    SellingPlanConnection: {
      edges: "SellingPlanEdge",
      nodes: "SellingPlan",
      pageInfo: "PageInfo"
    },
    SellingPlanDeliveryPolicy: {
      "...on SellingPlanFixedDeliveryPolicy": "SellingPlanFixedDeliveryPolicy",
      "...on SellingPlanRecurringDeliveryPolicy": "SellingPlanRecurringDeliveryPolicy"
    },
    SellingPlanEdge: {
      cursor: "String",
      node: "SellingPlan"
    },
    SellingPlanFixedBillingPolicy: {
      checkoutCharge: "SellingPlanCheckoutCharge",
      remainingBalanceChargeExactTime: "DateTime",
      remainingBalanceChargeTimeAfterCheckout: "String",
      remainingBalanceChargeTrigger: "SellingPlanRemainingBalanceChargeTrigger"
    },
    SellingPlanFixedDeliveryPolicy: {
      anchors: "SellingPlanAnchor",
      cutoff: "Int",
      fulfillmentExactTime: "DateTime",
      fulfillmentTrigger: "SellingPlanFulfillmentTrigger",
      intent: "SellingPlanFixedDeliveryPolicyIntent",
      preAnchorBehavior: "SellingPlanFixedDeliveryPolicyPreAnchorBehavior"
    },
    SellingPlanFixedPricingPolicy: {
      adjustmentType: "SellingPlanPricingPolicyAdjustmentType",
      adjustmentValue: "SellingPlanPricingPolicyAdjustmentValue",
      createdAt: "DateTime"
    },
    SellingPlanGroup: {
      appId: "String",
      appliesToProduct: "Boolean",
      appliesToProductVariant: "Boolean",
      appliesToProductVariants: "Boolean",
      createdAt: "DateTime",
      description: "String",
      id: "ID",
      merchantCode: "String",
      name: "String",
      options: "String",
      position: "Int",
      productCount: "Int",
      productVariantCount: "Int",
      productVariants: "ProductVariantConnection",
      products: "ProductConnection",
      sellingPlans: "SellingPlanConnection",
      summary: "String"
    },
    SellingPlanGroupAddProductVariantsPayload: {
      sellingPlanGroup: "SellingPlanGroup",
      userErrors: "SellingPlanGroupUserError"
    },
    SellingPlanGroupAddProductsPayload: {
      sellingPlanGroup: "SellingPlanGroup",
      userErrors: "SellingPlanGroupUserError"
    },
    SellingPlanGroupConnection: {
      edges: "SellingPlanGroupEdge",
      nodes: "SellingPlanGroup",
      pageInfo: "PageInfo"
    },
    SellingPlanGroupCreatePayload: {
      sellingPlanGroup: "SellingPlanGroup",
      userErrors: "SellingPlanGroupUserError"
    },
    SellingPlanGroupDeletePayload: {
      deletedSellingPlanGroupId: "ID",
      userErrors: "SellingPlanGroupUserError"
    },
    SellingPlanGroupEdge: {
      cursor: "String",
      node: "SellingPlanGroup"
    },
    SellingPlanGroupRemoveProductVariantsPayload: {
      removedProductVariantIds: "ID",
      userErrors: "SellingPlanGroupUserError"
    },
    SellingPlanGroupRemoveProductsPayload: {
      removedProductIds: "ID",
      userErrors: "SellingPlanGroupUserError"
    },
    SellingPlanGroupUpdatePayload: {
      deletedSellingPlanIds: "ID",
      sellingPlanGroup: "SellingPlanGroup",
      userErrors: "SellingPlanGroupUserError"
    },
    SellingPlanGroupUserError: {
      code: "SellingPlanGroupUserErrorCode",
      field: "String",
      message: "String"
    },
    SellingPlanInventoryPolicy: {
      reserve: "SellingPlanReserve"
    },
    SellingPlanPricingPolicy: {
      "...on SellingPlanFixedPricingPolicy": "SellingPlanFixedPricingPolicy",
      "...on SellingPlanRecurringPricingPolicy": "SellingPlanRecurringPricingPolicy"
    },
    SellingPlanPricingPolicyAdjustmentValue: {
      "...on MoneyV2": "MoneyV2",
      "...on SellingPlanPricingPolicyPercentageValue": "SellingPlanPricingPolicyPercentageValue"
    },
    SellingPlanPricingPolicyBase: {
      "...on SellingPlanFixedPricingPolicy": "SellingPlanFixedPricingPolicy",
      "...on SellingPlanRecurringPricingPolicy": "SellingPlanRecurringPricingPolicy",
      adjustmentType: "SellingPlanPricingPolicyAdjustmentType",
      adjustmentValue: "SellingPlanPricingPolicyAdjustmentValue"
    },
    SellingPlanPricingPolicyPercentageValue: {
      percentage: "Float"
    },
    SellingPlanRecurringBillingPolicy: {
      anchors: "SellingPlanAnchor",
      createdAt: "DateTime",
      interval: "SellingPlanInterval",
      intervalCount: "Int",
      maxCycles: "Int",
      minCycles: "Int"
    },
    SellingPlanRecurringDeliveryPolicy: {
      anchors: "SellingPlanAnchor",
      createdAt: "DateTime",
      cutoff: "Int",
      intent: "SellingPlanRecurringDeliveryPolicyIntent",
      interval: "SellingPlanInterval",
      intervalCount: "Int",
      preAnchorBehavior: "SellingPlanRecurringDeliveryPolicyPreAnchorBehavior"
    },
    SellingPlanRecurringPricingPolicy: {
      adjustmentType: "SellingPlanPricingPolicyAdjustmentType",
      adjustmentValue: "SellingPlanPricingPolicyAdjustmentValue",
      afterCycle: "Int",
      createdAt: "DateTime"
    },
    ShippingLine: {
      carrierIdentifier: "String",
      code: "String",
      custom: "Boolean",
      deliveryCategory: "String",
      discountAllocations: "DiscountAllocation",
      discountedPrice: "MoneyV2",
      discountedPriceSet: "MoneyBag",
      id: "ID",
      originalPrice: "MoneyV2",
      originalPriceSet: "MoneyBag",
      phone: "String",
      price: "Money",
      requestedFulfillmentService: "FulfillmentService",
      shippingRateHandle: "String",
      source: "String",
      taxLines: "TaxLine",
      title: "String"
    },
    ShippingLineConnection: {
      edges: "ShippingLineEdge",
      nodes: "ShippingLine",
      pageInfo: "PageInfo"
    },
    ShippingLineEdge: {
      cursor: "String",
      node: "ShippingLine"
    },
    ShippingLineSale: {
      actionType: "SaleActionType",
      id: "ID",
      lineType: "SaleLineType",
      quantity: "Int",
      shippingLine: "ShippingLine",
      taxes: "SaleTax",
      totalAmount: "MoneyBag",
      totalDiscountAmountAfterTaxes: "MoneyBag",
      totalDiscountAmountBeforeTaxes: "MoneyBag",
      totalTaxAmount: "MoneyBag"
    },
    ShippingMethod: {
      code: "String",
      label: "String"
    },
    ShippingPackageDeletePayload: {
      deletedId: "ID",
      userErrors: "UserError"
    },
    ShippingPackageMakeDefaultPayload: {
      userErrors: "UserError"
    },
    ShippingPackageUpdatePayload: {
      userErrors: "UserError"
    },
    ShippingRate: {
      handle: "String",
      price: "MoneyV2",
      title: "String"
    },
    ShippingRefund: {
      amount: "Money",
      amountSet: "MoneyBag",
      maximumRefundable: "Money",
      maximumRefundableSet: "MoneyBag",
      tax: "Money",
      taxSet: "MoneyBag"
    },
    Shop: {
      alerts: "ShopAlert",
      allProductCategories: "ProductCategory",
      analyticsToken: "String",
      assignedFulfillmentOrders: "FulfillmentOrderConnection",
      availableChannelApps: "AppConnection",
      billingAddress: "ShopAddress",
      channelCount: "Int",
      channelDefinitionsForInstalledChannels: "AvailableChannelDefinitionsByChannel",
      channels: "ChannelConnection",
      checkoutApiSupported: "Boolean",
      collectionByHandle: "Collection",
      collectionSavedSearches: "SavedSearchConnection",
      collections: "CollectionConnection",
      contactEmail: "String",
      countriesInShippingZones: "CountriesInShippingZones",
      currencyCode: "CurrencyCode",
      currencyFormats: "CurrencyFormats",
      currencySettings: "CurrencySettingConnection",
      customerAccounts: "ShopCustomerAccountsSetting",
      customerSavedSearches: "SavedSearchConnection",
      customerTags: "StringConnection",
      customers: "CustomerConnection",
      description: "String",
      domains: "Domain",
      draftOrderSavedSearches: "SavedSearchConnection",
      draftOrderTags: "StringConnection",
      draftOrders: "DraftOrderConnection",
      email: "String",
      enabledPresentmentCurrencies: "CurrencyCode",
      features: "ShopFeatures",
      fulfillmentOrders: "FulfillmentOrderConnection",
      fulfillmentServices: "FulfillmentService",
      ianaTimezone: "String",
      id: "ID",
      inventoryItems: "InventoryItemConnection",
      limitedPendingOrderCount: "LimitedPendingOrderCount",
      locations: "LocationConnection",
      marketingEvents: "MarketingEventConnection",
      merchantApprovalSignals: "MerchantApprovalSignals",
      metafield: "Metafield",
      metafields: "MetafieldConnection",
      myshopifyDomain: "String",
      name: "String",
      navigationSettings: "NavigationItem",
      orderNumberFormatPrefix: "String",
      orderNumberFormatSuffix: "String",
      orderSavedSearches: "SavedSearchConnection",
      orderTags: "StringConnection",
      orders: "OrderConnection",
      paymentSettings: "PaymentSettings",
      pendingOrderCount: "Int",
      plan: "ShopPlan",
      priceRuleSavedSearches: "SavedSearchConnection",
      priceRules: "PriceRuleConnection",
      primaryDomain: "Domain",
      privateMetafield: "PrivateMetafield",
      privateMetafields: "PrivateMetafieldConnection",
      productByHandle: "Product",
      productImages: "ImageConnection",
      productSavedSearches: "SavedSearchConnection",
      productTags: "StringConnection",
      productTypes: "StringConnection",
      productVariants: "ProductVariantConnection",
      productVendors: "StringConnection",
      products: "ProductConnection",
      publicationCount: "Int",
      resourceLimits: "ShopResourceLimits",
      richTextEditorUrl: "URL",
      search: "SearchResultConnection",
      searchFilters: "SearchFilterOptions",
      setupRequired: "Boolean",
      shipsToCountries: "CountryCode",
      shopPolicies: "ShopPolicy",
      shopifyPaymentsAccount: "ShopifyPaymentsAccount",
      staffMembers: "StaffMemberConnection",
      storefrontAccessTokens: "StorefrontAccessTokenConnection",
      storefrontUrl: "URL",
      taxShipping: "Boolean",
      taxesIncluded: "Boolean",
      timezoneAbbreviation: "String",
      timezoneOffset: "String",
      timezoneOffsetMinutes: "Int",
      transactionalSmsDisabled: "Boolean",
      translations: "PublishedTranslation",
      unitSystem: "UnitSystem",
      uploadedImagesByIds: "Image",
      url: "URL",
      weightUnit: "WeightUnit"
    },
    ShopAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      company: "String",
      coordinatesValidated: "Boolean",
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
    ShopAlert: {
      action: "ShopAlertAction",
      description: "String"
    },
    ShopAlertAction: {
      title: "String",
      url: "URL"
    },
    ShopFeatures: {
      avalaraAvatax: "Boolean",
      branding: "ShopBranding",
      captcha: "Boolean",
      captchaExternalDomains: "Boolean",
      deliveryProfiles: "Boolean",
      dynamicRemarketing: "Boolean",
      eligibleForSubscriptionMigration: "Boolean",
      eligibleForSubscriptions: "Boolean",
      giftCards: "Boolean",
      harmonizedSystemCode: "Boolean",
      internationalDomains: "Boolean",
      internationalPriceOverrides: "Boolean",
      internationalPriceRules: "Boolean",
      legacySubscriptionGatewayEnabled: "Boolean",
      liveView: "Boolean",
      multiLocation: "Boolean",
      onboardingVisual: "Boolean",
      paypalExpressSubscriptionGatewayStatus: "PaypalExpressSubscriptionsGatewayStatus",
      reports: "Boolean",
      sellsSubscriptions: "Boolean",
      shopifyPlus: "Boolean",
      showMetrics: "Boolean",
      storefront: "Boolean",
      usingShopifyBalance: "Boolean"
    },
    ShopLocale: {
      locale: "String",
      marketWebPresences: "MarketWebPresence",
      name: "String",
      primary: "Boolean",
      published: "Boolean"
    },
    ShopLocaleDisablePayload: {
      locale: "String",
      userErrors: "UserError"
    },
    ShopLocaleEnablePayload: {
      shopLocale: "ShopLocale",
      userErrors: "UserError"
    },
    ShopLocaleUpdatePayload: {
      shopLocale: "ShopLocale",
      userErrors: "UserError"
    },
    ShopPlan: {
      displayName: "String",
      partnerDevelopment: "Boolean",
      shopifyPlus: "Boolean"
    },
    ShopPolicy: {
      body: "HTML",
      id: "ID",
      translations: "PublishedTranslation",
      type: "ShopPolicyType",
      url: "URL"
    },
    ShopPolicyUpdatePayload: {
      shopPolicy: "ShopPolicy",
      userErrors: "ShopPolicyUserError"
    },
    ShopPolicyUserError: {
      code: "ShopPolicyErrorCode",
      field: "String",
      message: "String"
    },
    ShopResourceFeedbackCreatePayload: {
      feedback: "AppFeedback",
      userErrors: "ShopResourceFeedbackCreateUserError"
    },
    ShopResourceFeedbackCreateUserError: {
      code: "ShopResourceFeedbackCreateUserErrorCode",
      field: "String",
      message: "String"
    },
    ShopResourceLimits: {
      locationLimit: "Int",
      maxProductOptions: "Int",
      maxProductVariants: "Int",
      redirectLimitReached: "Boolean",
      skuResourceLimits: "ResourceLimit"
    },
    ShopifyPaymentsAccount: {
      activated: "Boolean",
      balance: "MoneyV2",
      bankAccounts: "ShopifyPaymentsBankAccountConnection",
      chargeStatementDescriptor: "String",
      chargeStatementDescriptors: "ShopifyPaymentsChargeStatementDescriptor",
      country: "String",
      defaultCurrency: "CurrencyCode",
      disputes: "ShopifyPaymentsDisputeConnection",
      fraudSettings: "ShopifyPaymentsFraudSettings",
      id: "ID",
      notificationSettings: "ShopifyPaymentsNotificationSettings",
      onboardable: "Boolean",
      payoutSchedule: "ShopifyPaymentsPayoutSchedule",
      payoutStatementDescriptor: "String",
      payouts: "ShopifyPaymentsPayoutConnection",
      permittedVerificationDocuments: "ShopifyPaymentsVerificationDocument",
      verifications: "ShopifyPaymentsVerification"
    },
    ShopifyPaymentsBankAccount: {
      accountNumber: "String",
      accountNumberLastDigits: "String",
      bankName: "String",
      country: "CountryCode",
      createdAt: "DateTime",
      currency: "CurrencyCode",
      id: "ID",
      payouts: "ShopifyPaymentsPayoutConnection",
      routingNumber: "String",
      status: "ShopifyPaymentsBankAccountStatus"
    },
    ShopifyPaymentsBankAccountConnection: {
      edges: "ShopifyPaymentsBankAccountEdge",
      nodes: "ShopifyPaymentsBankAccount",
      pageInfo: "PageInfo"
    },
    ShopifyPaymentsBankAccountEdge: {
      cursor: "String",
      node: "ShopifyPaymentsBankAccount"
    },
    ShopifyPaymentsChargeStatementDescriptor: {
      "...on ShopifyPaymentsDefaultChargeStatementDescriptor": "ShopifyPaymentsDefaultChargeStatementDescriptor",
      "...on ShopifyPaymentsJpChargeStatementDescriptor": "ShopifyPaymentsJpChargeStatementDescriptor",
      default: "String",
      prefix: "String"
    },
    ShopifyPaymentsDefaultChargeStatementDescriptor: {
      default: "String",
      prefix: "String"
    },
    ShopifyPaymentsDispute: {
      amount: "MoneyV2",
      evidenceDueBy: "Date",
      evidenceSentOn: "Date",
      finalizedOn: "Date",
      id: "ID",
      initiatedAt: "DateTime",
      legacyResourceId: "UnsignedInt64",
      order: "Order",
      reasonDetails: "ShopifyPaymentsDisputeReasonDetails",
      status: "DisputeStatus",
      type: "DisputeType"
    },
    ShopifyPaymentsDisputeConnection: {
      edges: "ShopifyPaymentsDisputeEdge",
      nodes: "ShopifyPaymentsDispute",
      pageInfo: "PageInfo"
    },
    ShopifyPaymentsDisputeEdge: {
      cursor: "String",
      node: "ShopifyPaymentsDispute"
    },
    ShopifyPaymentsDisputeEvidence: {
      accessActivityLog: "String",
      billingAddress: "MailingAddress",
      cancellationPolicyDisclosure: "String",
      cancellationPolicyFile: "ShopifyPaymentsDisputeFileUpload",
      cancellationRebuttal: "String",
      customerCommunicationFile: "ShopifyPaymentsDisputeFileUpload",
      customerEmailAddress: "String",
      customerFirstName: "String",
      customerLastName: "String",
      customerPurchaseIp: "String",
      dispute: "ShopifyPaymentsDispute",
      disputeFileUploads: "ShopifyPaymentsDisputeFileUpload",
      fulfillments: "ShopifyPaymentsDisputeFulfillment",
      id: "ID",
      productDescription: "String",
      refundPolicyDisclosure: "String",
      refundPolicyFile: "ShopifyPaymentsDisputeFileUpload",
      refundRefusalExplanation: "String",
      serviceDocumentationFile: "ShopifyPaymentsDisputeFileUpload",
      shippingAddress: "MailingAddress",
      shippingDocumentationFile: "ShopifyPaymentsDisputeFileUpload",
      submitted: "Boolean",
      uncategorizedFile: "ShopifyPaymentsDisputeFileUpload",
      uncategorizedText: "String"
    },
    ShopifyPaymentsDisputeFileUpload: {
      disputeEvidenceType: "ShopifyPaymentsDisputeEvidenceFileType",
      fileSize: "Int",
      fileType: "String",
      id: "ID",
      originalFileName: "String",
      url: "URL"
    },
    ShopifyPaymentsDisputeFulfillment: {
      id: "ID",
      shippingCarrier: "String",
      shippingDate: "Date",
      shippingTrackingNumber: "String"
    },
    ShopifyPaymentsDisputeReasonDetails: {
      networkReasonCode: "String",
      reason: "ShopifyPaymentsDisputeReason"
    },
    ShopifyPaymentsExtendedAuthorization: {
      extendedAuthorizationExpiresAt: "DateTime",
      standardAuthorizationExpiresAt: "DateTime"
    },
    ShopifyPaymentsFraudSettings: {
      declineChargeOnAvsFailure: "Boolean",
      declineChargeOnCvcFailure: "Boolean"
    },
    ShopifyPaymentsJpChargeStatementDescriptor: {
      default: "String",
      kana: "String",
      kanji: "String",
      prefix: "String"
    },
    ShopifyPaymentsNotificationSettings: {
      payouts: "Boolean"
    },
    ShopifyPaymentsPayout: {
      bankAccount: "ShopifyPaymentsBankAccount",
      gross: "MoneyV2",
      id: "ID",
      issuedAt: "DateTime",
      legacyResourceId: "UnsignedInt64",
      net: "MoneyV2",
      status: "ShopifyPaymentsPayoutStatus",
      summary: "ShopifyPaymentsPayoutSummary",
      transactionType: "ShopifyPaymentsPayoutTransactionType"
    },
    ShopifyPaymentsPayoutConnection: {
      edges: "ShopifyPaymentsPayoutEdge",
      nodes: "ShopifyPaymentsPayout",
      pageInfo: "PageInfo"
    },
    ShopifyPaymentsPayoutEdge: {
      cursor: "String",
      node: "ShopifyPaymentsPayout"
    },
    ShopifyPaymentsPayoutSchedule: {
      interval: "ShopifyPaymentsPayoutInterval",
      monthlyAnchor: "Int",
      weeklyAnchor: "DayOfTheWeek"
    },
    ShopifyPaymentsPayoutSummary: {
      adjustmentsFee: "MoneyV2",
      adjustmentsGross: "MoneyV2",
      chargesFee: "MoneyV2",
      chargesGross: "MoneyV2",
      refundsFee: "MoneyV2",
      refundsFeeGross: "MoneyV2",
      reservedFundsFee: "MoneyV2",
      reservedFundsGross: "MoneyV2",
      retriedPayoutsFee: "MoneyV2",
      retriedPayoutsGross: "MoneyV2"
    },
    ShopifyPaymentsRefundSet: {
      acquirerReferenceNumber: "String"
    },
    ShopifyPaymentsTransactionSet: {
      extendedAuthorizationSet: "ShopifyPaymentsExtendedAuthorization",
      refundSet: "ShopifyPaymentsRefundSet"
    },
    ShopifyPaymentsVerification: {
      id: "ID",
      status: "ShopifyPaymentsVerificationStatus",
      subject: "ShopifyPaymentsVerificationSubject"
    },
    ShopifyPaymentsVerificationDocument: {
      backRequired: "Boolean",
      frontRequired: "Boolean",
      type: "ShopifyPaymentsVerificationDocumentType"
    },
    ShopifyPaymentsVerificationSubject: {
      familyName: "String",
      givenName: "String"
    },
    ShopifyqlResponse: {
      "...on PolarisVizResponse": "PolarisVizResponse",
      "...on TableResponse": "TableResponse",
      parseErrors: "ParseError",
      tableData: "TableData"
    },
    StaffMember: {
      active: "Boolean",
      avatar: "Image",
      email: "String",
      exists: "Boolean",
      firstName: "String",
      id: "ID",
      initials: "String",
      isShopOwner: "Boolean",
      lastName: "String",
      locale: "String",
      name: "String",
      phone: "String",
      privateData: "StaffMemberPrivateData"
    },
    StaffMemberConnection: {
      edges: "StaffMemberEdge",
      nodes: "StaffMember",
      pageInfo: "PageInfo"
    },
    StaffMemberEdge: {
      cursor: "String",
      node: "StaffMember"
    },
    StaffMemberPrivateData: {
      accountSettingsUrl: "URL",
      createdAt: "DateTime",
      permissions: "StaffMemberPermission"
    },
    StagedMediaUploadTarget: {
      parameters: "StagedUploadParameter",
      resourceUrl: "URL",
      url: "URL"
    },
    StagedUploadParameter: {
      name: "String",
      value: "String"
    },
    StagedUploadTarget: {
      parameters: "ImageUploadParameter",
      url: "String"
    },
    StagedUploadTargetGeneratePayload: {
      parameters: "MutationsStagedUploadTargetGenerateUploadParameter",
      url: "String",
      userErrors: "UserError"
    },
    StagedUploadTargetsGeneratePayload: {
      urls: "StagedUploadTarget",
      userErrors: "UserError"
    },
    StagedUploadsCreatePayload: {
      stagedTargets: "StagedMediaUploadTarget",
      userErrors: "UserError"
    },
    StandardMetafieldDefinitionEnablePayload: {
      createdDefinition: "MetafieldDefinition",
      userErrors: "StandardMetafieldDefinitionEnableUserError"
    },
    StandardMetafieldDefinitionEnableUserError: {
      code: "StandardMetafieldDefinitionEnableUserErrorCode",
      field: "String",
      message: "String"
    },
    StandardMetafieldDefinitionTemplate: {
      description: "String",
      id: "ID",
      key: "String",
      name: "String",
      namespace: "String",
      ownerTypes: "MetafieldOwnerType",
      type: "MetafieldDefinitionType",
      validations: "MetafieldDefinitionValidation",
      visibleToStorefrontApi: "Boolean"
    },
    StandardMetafieldDefinitionTemplateConnection: {
      edges: "StandardMetafieldDefinitionTemplateEdge",
      nodes: "StandardMetafieldDefinitionTemplate",
      pageInfo: "PageInfo"
    },
    StandardMetafieldDefinitionTemplateEdge: {
      cursor: "String",
      node: "StandardMetafieldDefinitionTemplate"
    },
    StandardMetaobjectDefinitionEnablePayload: {
      metaobjectDefinition: "MetaobjectDefinition",
      userErrors: "MetaobjectUserError"
    },
    StandardizedProductType: {
      productTaxonomyNode: "ProductTaxonomyNode"
    },
    StorefrontAccessToken: {
      accessScopes: "AccessScope",
      accessToken: "String",
      createdAt: "DateTime",
      id: "ID",
      title: "String",
      updatedAt: "DateTime"
    },
    StorefrontAccessTokenConnection: {
      edges: "StorefrontAccessTokenEdge",
      nodes: "StorefrontAccessToken",
      pageInfo: "PageInfo"
    },
    StorefrontAccessTokenCreatePayload: {
      shop: "Shop",
      storefrontAccessToken: "StorefrontAccessToken",
      userErrors: "UserError"
    },
    StorefrontAccessTokenDeletePayload: {
      deletedStorefrontAccessTokenId: "ID",
      userErrors: "UserError"
    },
    StorefrontAccessTokenEdge: {
      cursor: "String",
      node: "StorefrontAccessToken"
    },
    StorefrontID: `scalar.StorefrontID`,
    StringConnection: {
      edges: "StringEdge",
      pageInfo: "PageInfo"
    },
    StringEdge: {
      cursor: "String",
      node: "String"
    },
    SubscriptionAppliedCodeDiscount: {
      id: "ID",
      redeemCode: "String",
      rejectionReason: "SubscriptionDiscountRejectionReason"
    },
    SubscriptionBillingAttempt: {
      completedAt: "DateTime",
      createdAt: "DateTime",
      errorCode: "SubscriptionBillingAttemptErrorCode",
      errorMessage: "String",
      id: "ID",
      idempotencyKey: "String",
      nextActionUrl: "URL",
      order: "Order",
      originTime: "DateTime",
      ready: "Boolean",
      subscriptionContract: "SubscriptionContract"
    },
    SubscriptionBillingAttemptConnection: {
      edges: "SubscriptionBillingAttemptEdge",
      nodes: "SubscriptionBillingAttempt",
      pageInfo: "PageInfo"
    },
    SubscriptionBillingAttemptCreatePayload: {
      subscriptionBillingAttempt: "SubscriptionBillingAttempt",
      userErrors: "BillingAttemptUserError"
    },
    SubscriptionBillingAttemptEdge: {
      cursor: "String",
      node: "SubscriptionBillingAttempt"
    },
    SubscriptionBillingCycle: {
      billingAttemptExpectedDate: "DateTime",
      billingAttempts: "SubscriptionBillingAttemptConnection",
      cycleEndAt: "DateTime",
      cycleIndex: "Int",
      cycleStartAt: "DateTime",
      edited: "Boolean",
      editedContract: "SubscriptionBillingCycleEditedContract",
      skipped: "Boolean",
      sourceContract: "SubscriptionContract",
      status: "SubscriptionBillingCycleBillingCycleStatus"
    },
    SubscriptionBillingCycleConnection: {
      edges: "SubscriptionBillingCycleEdge",
      nodes: "SubscriptionBillingCycle",
      pageInfo: "PageInfo"
    },
    SubscriptionBillingCycleContractDraftCommitPayload: {
      contract: "SubscriptionBillingCycleEditedContract",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionBillingCycleContractDraftConcatenatePayload: {
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionBillingCycleContractEditPayload: {
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionBillingCycleEdge: {
      cursor: "String",
      node: "SubscriptionBillingCycle"
    },
    SubscriptionBillingCycleEditDeletePayload: {
      billingCycles: "SubscriptionBillingCycle",
      userErrors: "SubscriptionBillingCycleUserError"
    },
    SubscriptionBillingCycleEditedContract: {
      app: "App",
      appAdminUrl: "URL",
      billingCycles: "SubscriptionBillingCycleConnection",
      createdAt: "DateTime",
      currencyCode: "CurrencyCode",
      customAttributes: "Attribute",
      customer: "Customer",
      customerPaymentMethod: "CustomerPaymentMethod",
      deliveryMethod: "SubscriptionDeliveryMethod",
      deliveryPrice: "MoneyV2",
      discounts: "SubscriptionManualDiscountConnection",
      lineCount: "Int",
      lines: "SubscriptionLineConnection",
      note: "String",
      orders: "OrderConnection",
      updatedAt: "DateTime"
    },
    SubscriptionBillingCycleEditsDeletePayload: {
      billingCycles: "SubscriptionBillingCycle",
      userErrors: "SubscriptionBillingCycleUserError"
    },
    SubscriptionBillingCycleScheduleEditPayload: {
      billingCycle: "SubscriptionBillingCycle",
      userErrors: "SubscriptionBillingCycleUserError"
    },
    SubscriptionBillingCycleUserError: {
      code: "SubscriptionBillingCycleErrorCode",
      field: "String",
      message: "String"
    },
    SubscriptionBillingPolicy: {
      anchors: "SellingPlanAnchor",
      interval: "SellingPlanInterval",
      intervalCount: "Int",
      maxCycles: "Int",
      minCycles: "Int"
    },
    SubscriptionContract: {
      app: "App",
      appAdminUrl: "URL",
      billingAttempts: "SubscriptionBillingAttemptConnection",
      billingPolicy: "SubscriptionBillingPolicy",
      createdAt: "DateTime",
      currencyCode: "CurrencyCode",
      customAttributes: "Attribute",
      customer: "Customer",
      customerPaymentMethod: "CustomerPaymentMethod",
      deliveryMethod: "SubscriptionDeliveryMethod",
      deliveryPolicy: "SubscriptionDeliveryPolicy",
      deliveryPrice: "MoneyV2",
      discounts: "SubscriptionManualDiscountConnection",
      id: "ID",
      lastPaymentStatus: "SubscriptionContractLastPaymentStatus",
      lineCount: "Int",
      lines: "SubscriptionLineConnection",
      nextBillingDate: "DateTime",
      note: "String",
      orders: "OrderConnection",
      originOrder: "Order",
      status: "SubscriptionContractSubscriptionStatus",
      updatedAt: "DateTime"
    },
    SubscriptionContractBase: {
      "...on SubscriptionBillingCycleEditedContract": "SubscriptionBillingCycleEditedContract",
      "...on SubscriptionContract": "SubscriptionContract",
      app: "App",
      appAdminUrl: "URL",
      currencyCode: "CurrencyCode",
      customAttributes: "Attribute",
      customer: "Customer",
      customerPaymentMethod: "CustomerPaymentMethod",
      deliveryMethod: "SubscriptionDeliveryMethod",
      deliveryPrice: "MoneyV2",
      discounts: "SubscriptionManualDiscountConnection",
      lineCount: "Int",
      lines: "SubscriptionLineConnection",
      note: "String",
      orders: "OrderConnection",
      updatedAt: "DateTime"
    },
    SubscriptionContractConnection: {
      edges: "SubscriptionContractEdge",
      nodes: "SubscriptionContract",
      pageInfo: "PageInfo"
    },
    SubscriptionContractCreatePayload: {
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionContractEdge: {
      cursor: "String",
      node: "SubscriptionContract"
    },
    SubscriptionContractSetNextBillingDatePayload: {
      contract: "SubscriptionContract",
      userErrors: "SubscriptionContractUserError"
    },
    SubscriptionContractUpdatePayload: {
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionContractUserError: {
      code: "SubscriptionContractErrorCode",
      field: "String",
      message: "String"
    },
    SubscriptionCyclePriceAdjustment: {
      adjustmentType: "SellingPlanPricingPolicyAdjustmentType",
      adjustmentValue: "SellingPlanPricingPolicyAdjustmentValue",
      afterCycle: "Int",
      computedPrice: "MoneyV2"
    },
    SubscriptionDeliveryMethod: {
      "...on SubscriptionDeliveryMethodLocalDelivery": "SubscriptionDeliveryMethodLocalDelivery",
      "...on SubscriptionDeliveryMethodPickup": "SubscriptionDeliveryMethodPickup",
      "...on SubscriptionDeliveryMethodShipping": "SubscriptionDeliveryMethodShipping"
    },
    SubscriptionDeliveryMethodLocalDelivery: {
      address: "SubscriptionMailingAddress",
      localDeliveryOption: "SubscriptionDeliveryMethodLocalDeliveryOption"
    },
    SubscriptionDeliveryMethodLocalDeliveryOption: {
      code: "String",
      description: "String",
      instructions: "String",
      phone: "String",
      presentmentTitle: "String",
      title: "String"
    },
    SubscriptionDeliveryMethodPickup: {
      pickupOption: "SubscriptionDeliveryMethodPickupOption"
    },
    SubscriptionDeliveryMethodPickupOption: {
      code: "String",
      description: "String",
      location: "Location",
      presentmentTitle: "String",
      title: "String"
    },
    SubscriptionDeliveryMethodShipping: {
      address: "SubscriptionMailingAddress",
      shippingOption: "SubscriptionDeliveryMethodShippingOption"
    },
    SubscriptionDeliveryMethodShippingOption: {
      carrierService: "DeliveryCarrierService",
      code: "String",
      description: "String",
      presentmentTitle: "String",
      title: "String"
    },
    SubscriptionDeliveryOption: {
      "...on SubscriptionLocalDeliveryOption": "SubscriptionLocalDeliveryOption",
      "...on SubscriptionPickupOption": "SubscriptionPickupOption",
      "...on SubscriptionShippingOption": "SubscriptionShippingOption"
    },
    SubscriptionDeliveryOptionResult: {
      "...on SubscriptionDeliveryOptionResultFailure": "SubscriptionDeliveryOptionResultFailure",
      "...on SubscriptionDeliveryOptionResultSuccess": "SubscriptionDeliveryOptionResultSuccess"
    },
    SubscriptionDeliveryOptionResultFailure: {
      message: "String"
    },
    SubscriptionDeliveryOptionResultSuccess: {
      deliveryOptions: "SubscriptionDeliveryOption"
    },
    SubscriptionDeliveryPolicy: {
      anchors: "SellingPlanAnchor",
      interval: "SellingPlanInterval",
      intervalCount: "Int"
    },
    SubscriptionDiscount: {
      "...on SubscriptionAppliedCodeDiscount": "SubscriptionAppliedCodeDiscount",
      "...on SubscriptionManualDiscount": "SubscriptionManualDiscount"
    },
    SubscriptionDiscountAllocation: {
      amount: "MoneyV2",
      discount: "SubscriptionDiscount"
    },
    SubscriptionDiscountConnection: {
      edges: "SubscriptionDiscountEdge",
      nodes: "SubscriptionDiscount",
      pageInfo: "PageInfo"
    },
    SubscriptionDiscountEdge: {
      cursor: "String",
      node: "SubscriptionDiscount"
    },
    SubscriptionDiscountEntitledLines: {
      all: "Boolean",
      lines: "SubscriptionLineConnection"
    },
    SubscriptionDiscountFixedAmountValue: {
      amount: "MoneyV2",
      appliesOnEachItem: "Boolean"
    },
    SubscriptionDiscountPercentageValue: {
      percentage: "Int"
    },
    SubscriptionDiscountValue: {
      "...on SubscriptionDiscountFixedAmountValue": "SubscriptionDiscountFixedAmountValue",
      "...on SubscriptionDiscountPercentageValue": "SubscriptionDiscountPercentageValue"
    },
    SubscriptionDraft: {
      billingCycle: "SubscriptionBillingCycle",
      billingPolicy: "SubscriptionBillingPolicy",
      concatenatedBillingCycles: "SubscriptionBillingCycleConnection",
      currencyCode: "CurrencyCode",
      customAttributes: "Attribute",
      customer: "Customer",
      customerPaymentMethod: "CustomerPaymentMethod",
      deliveryMethod: "SubscriptionDeliveryMethod",
      deliveryOptions: "SubscriptionDeliveryOptionResult",
      deliveryPolicy: "SubscriptionDeliveryPolicy",
      deliveryPrice: "MoneyV2",
      discounts: "SubscriptionDiscountConnection",
      discountsAdded: "SubscriptionDiscountConnection",
      discountsRemoved: "SubscriptionDiscountConnection",
      discountsUpdated: "SubscriptionDiscountConnection",
      id: "ID",
      lines: "SubscriptionLineConnection",
      linesAdded: "SubscriptionLineConnection",
      linesRemoved: "SubscriptionLineConnection",
      nextBillingDate: "DateTime",
      note: "String",
      originalContract: "SubscriptionContract",
      shippingOptions: "SubscriptionShippingOptionResult",
      status: "SubscriptionContractSubscriptionStatus"
    },
    SubscriptionDraftCommitPayload: {
      contract: "SubscriptionContract",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftDiscountAddPayload: {
      discountAdded: "SubscriptionManualDiscount",
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftDiscountCodeApplyPayload: {
      appliedDiscount: "SubscriptionAppliedCodeDiscount",
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftDiscountRemovePayload: {
      discountRemoved: "SubscriptionDiscount",
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftDiscountUpdatePayload: {
      discountUpdated: "SubscriptionManualDiscount",
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftFreeShippingDiscountAddPayload: {
      discountAdded: "SubscriptionManualDiscount",
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftFreeShippingDiscountUpdatePayload: {
      discountUpdated: "SubscriptionManualDiscount",
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftLineAddPayload: {
      draft: "SubscriptionDraft",
      lineAdded: "SubscriptionLine",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftLineRemovePayload: {
      discountsUpdated: "SubscriptionManualDiscount",
      draft: "SubscriptionDraft",
      lineRemoved: "SubscriptionLine",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftLineUpdatePayload: {
      draft: "SubscriptionDraft",
      lineUpdated: "SubscriptionLine",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftUpdatePayload: {
      draft: "SubscriptionDraft",
      userErrors: "SubscriptionDraftUserError"
    },
    SubscriptionDraftUserError: {
      code: "SubscriptionDraftErrorCode",
      field: "String",
      message: "String"
    },
    SubscriptionLine: {
      currentPrice: "MoneyV2",
      customAttributes: "Attribute",
      discountAllocations: "SubscriptionDiscountAllocation",
      id: "ID",
      lineDiscountedPrice: "MoneyV2",
      pricingPolicy: "SubscriptionPricingPolicy",
      productId: "ID",
      quantity: "Int",
      requiresShipping: "Boolean",
      sellingPlanId: "ID",
      sellingPlanName: "String",
      sku: "String",
      taxable: "Boolean",
      title: "String",
      variantId: "ID",
      variantImage: "Image",
      variantTitle: "String"
    },
    SubscriptionLineConnection: {
      edges: "SubscriptionLineEdge",
      nodes: "SubscriptionLine",
      pageInfo: "PageInfo"
    },
    SubscriptionLineEdge: {
      cursor: "String",
      node: "SubscriptionLine"
    },
    SubscriptionLocalDeliveryOption: {
      code: "String",
      description: "String",
      phoneRequired: "Boolean",
      presentmentTitle: "String",
      price: "MoneyV2",
      title: "String"
    },
    SubscriptionMailingAddress: {
      address1: "String",
      address2: "String",
      city: "String",
      company: "String",
      country: "String",
      countryCode: "CountryCode",
      firstName: "String",
      lastName: "String",
      name: "String",
      phone: "String",
      province: "String",
      provinceCode: "String",
      zip: "String"
    },
    SubscriptionManualDiscount: {
      entitledLines: "SubscriptionDiscountEntitledLines",
      id: "ID",
      recurringCycleLimit: "Int",
      rejectionReason: "SubscriptionDiscountRejectionReason",
      targetType: "DiscountTargetType",
      title: "String",
      type: "DiscountType",
      usageCount: "Int",
      value: "SubscriptionDiscountValue"
    },
    SubscriptionManualDiscountConnection: {
      edges: "SubscriptionManualDiscountEdge",
      nodes: "SubscriptionManualDiscount",
      pageInfo: "PageInfo"
    },
    SubscriptionManualDiscountEdge: {
      cursor: "String",
      node: "SubscriptionManualDiscount"
    },
    SubscriptionPickupOption: {
      code: "String",
      description: "String",
      location: "Location",
      phoneRequired: "Boolean",
      pickupTime: "String",
      presentmentTitle: "String",
      price: "MoneyV2",
      title: "String"
    },
    SubscriptionPricingPolicy: {
      basePrice: "MoneyV2",
      cycleDiscounts: "SubscriptionCyclePriceAdjustment"
    },
    SubscriptionShippingOption: {
      carrierService: "DeliveryCarrierService",
      code: "String",
      description: "String",
      phoneRequired: "Boolean",
      presentmentTitle: "String",
      price: "MoneyV2",
      title: "String"
    },
    SubscriptionShippingOptionResult: {
      "...on SubscriptionShippingOptionResultFailure": "SubscriptionShippingOptionResultFailure",
      "...on SubscriptionShippingOptionResultSuccess": "SubscriptionShippingOptionResultSuccess"
    },
    SubscriptionShippingOptionResultFailure: {
      message: "String"
    },
    SubscriptionShippingOptionResultSuccess: {
      shippingOptions: "SubscriptionShippingOption"
    },
    SuggestedOrderTransaction: {
      accountNumber: "String",
      amount: "Money",
      amountSet: "MoneyBag",
      formattedGateway: "String",
      gateway: "String",
      kind: "SuggestedOrderTransactionKind",
      maximumRefundable: "Money",
      maximumRefundableSet: "MoneyBag",
      parentTransaction: "OrderTransaction"
    },
    SuggestedRefund: {
      amount: "Money",
      amountSet: "MoneyBag",
      discountedSubtotalSet: "MoneyBag",
      maximumRefundable: "Money",
      maximumRefundableSet: "MoneyBag",
      refundDuties: "RefundDuty",
      refundLineItems: "RefundLineItem",
      shipping: "ShippingRefund",
      subtotal: "Money",
      subtotalSet: "MoneyBag",
      suggestedTransactions: "SuggestedOrderTransaction",
      totalCartDiscountAmountSet: "MoneyBag",
      totalDutiesSet: "MoneyBag",
      totalTaxSet: "MoneyBag",
      totalTaxes: "Money"
    },
    SuggestedReturnRefund: {
      amount: "MoneyBag",
      discountedSubtotal: "MoneyBag",
      maximumRefundable: "MoneyBag",
      refundDuties: "RefundDuty",
      shipping: "ShippingRefund",
      subtotal: "MoneyBag",
      suggestedTransactions: "SuggestedOrderTransaction",
      totalCartDiscountAmount: "MoneyBag",
      totalDuties: "MoneyBag",
      totalTax: "MoneyBag"
    },
    TableData: {
      columns: "TableDataColumn",
      rowData: "String",
      unformattedData: "JSON"
    },
    TableDataColumn: {
      dataType: "String",
      displayName: "String",
      name: "String"
    },
    TableResponse: {
      parseErrors: "ParseError",
      tableData: "TableData"
    },
    TagsAddPayload: {
      node: "Node",
      userErrors: "UserError"
    },
    TagsRemovePayload: {
      node: "Node",
      userErrors: "UserError"
    },
    TaxLine: {
      channelLiable: "Boolean",
      price: "Money",
      priceSet: "MoneyBag",
      rate: "Float",
      ratePercentage: "Float",
      title: "String"
    },
    TenderTransaction: {
      amount: "MoneyV2",
      id: "ID",
      paymentMethod: "String",
      processedAt: "DateTime",
      remoteReference: "String",
      test: "Boolean",
      transactionDetails: "TenderTransactionDetails",
      user: "StaffMember"
    },
    TenderTransactionConnection: {
      edges: "TenderTransactionEdge",
      nodes: "TenderTransaction",
      pageInfo: "PageInfo"
    },
    TenderTransactionCreditCardDetails: {
      creditCardCompany: "String",
      creditCardNumber: "String"
    },
    TenderTransactionDetails: {
      "...on TenderTransactionCreditCardDetails": "TenderTransactionCreditCardDetails"
    },
    TenderTransactionEdge: {
      cursor: "String",
      node: "TenderTransaction"
    },
    TipSale: {
      actionType: "SaleActionType",
      id: "ID",
      lineItem: "LineItem",
      lineType: "SaleLineType",
      quantity: "Int",
      taxes: "SaleTax",
      totalAmount: "MoneyBag",
      totalDiscountAmountAfterTaxes: "MoneyBag",
      totalDiscountAmountBeforeTaxes: "MoneyBag",
      totalTaxAmount: "MoneyBag"
    },
    TransactionFee: {
      amount: "MoneyV2",
      flatFee: "MoneyV2",
      flatFeeName: "String",
      id: "ID",
      rate: "Decimal",
      rateName: "String",
      taxAmount: "MoneyV2",
      type: "String"
    },
    TranslatableContent: {
      digest: "String",
      key: "String",
      locale: "String",
      value: "String"
    },
    TranslatableResource: {
      resourceId: "ID",
      translatableContent: "TranslatableContent",
      translations: "Translation"
    },
    TranslatableResourceConnection: {
      edges: "TranslatableResourceEdge",
      nodes: "TranslatableResource",
      pageInfo: "PageInfo"
    },
    TranslatableResourceEdge: {
      cursor: "String",
      node: "TranslatableResource"
    },
    Translation: {
      key: "String",
      locale: "String",
      market: "Market",
      outdated: "Boolean",
      updatedAt: "DateTime",
      value: "String"
    },
    TranslationUserError: {
      code: "TranslationErrorCode",
      field: "String",
      message: "String"
    },
    TranslationsRegisterPayload: {
      translations: "Translation",
      userErrors: "TranslationUserError"
    },
    TranslationsRemovePayload: {
      translations: "Translation",
      userErrors: "TranslationUserError"
    },
    TypedAttribute: {
      key: "String",
      value: "String"
    },
    URL: `scalar.URL`,
    UTMParameters: {
      campaign: "String",
      content: "String",
      medium: "String",
      source: "String",
      term: "String"
    },
    UnsignedInt64: `scalar.UnsignedInt64`,
    UrlRedirect: {
      id: "ID",
      path: "String",
      target: "String"
    },
    UrlRedirectBulkDeleteAllPayload: {
      job: "Job",
      userErrors: "UserError"
    },
    UrlRedirectBulkDeleteByIdsPayload: {
      job: "Job",
      userErrors: "UrlRedirectBulkDeleteByIdsUserError"
    },
    UrlRedirectBulkDeleteByIdsUserError: {
      code: "UrlRedirectBulkDeleteByIdsUserErrorCode",
      field: "String",
      message: "String"
    },
    UrlRedirectBulkDeleteBySavedSearchPayload: {
      job: "Job",
      userErrors: "UrlRedirectBulkDeleteBySavedSearchUserError"
    },
    UrlRedirectBulkDeleteBySavedSearchUserError: {
      code: "UrlRedirectBulkDeleteBySavedSearchUserErrorCode",
      field: "String",
      message: "String"
    },
    UrlRedirectBulkDeleteBySearchPayload: {
      job: "Job",
      userErrors: "UrlRedirectBulkDeleteBySearchUserError"
    },
    UrlRedirectBulkDeleteBySearchUserError: {
      code: "UrlRedirectBulkDeleteBySearchUserErrorCode",
      field: "String",
      message: "String"
    },
    UrlRedirectConnection: {
      edges: "UrlRedirectEdge",
      nodes: "UrlRedirect",
      pageInfo: "PageInfo"
    },
    UrlRedirectCreatePayload: {
      urlRedirect: "UrlRedirect",
      userErrors: "UrlRedirectUserError"
    },
    UrlRedirectDeletePayload: {
      deletedUrlRedirectId: "ID",
      userErrors: "UrlRedirectUserError"
    },
    UrlRedirectEdge: {
      cursor: "String",
      node: "UrlRedirect"
    },
    UrlRedirectImport: {
      count: "Int",
      createdCount: "Int",
      failedCount: "Int",
      finished: "Boolean",
      finishedAt: "DateTime",
      id: "ID",
      previewRedirects: "UrlRedirectImportPreview",
      updatedCount: "Int"
    },
    UrlRedirectImportCreatePayload: {
      urlRedirectImport: "UrlRedirectImport",
      userErrors: "UrlRedirectImportUserError"
    },
    UrlRedirectImportPreview: {
      path: "String",
      target: "String"
    },
    UrlRedirectImportSubmitPayload: {
      job: "Job",
      userErrors: "UrlRedirectImportUserError"
    },
    UrlRedirectImportUserError: {
      code: "UrlRedirectImportErrorCode",
      field: "String",
      message: "String"
    },
    UrlRedirectUpdatePayload: {
      urlRedirect: "UrlRedirect",
      userErrors: "UrlRedirectUserError"
    },
    UrlRedirectUserError: {
      code: "UrlRedirectErrorCode",
      field: "String",
      message: "String"
    },
    UserError: {
      field: "String",
      message: "String"
    },
    UtcOffset: `scalar.UtcOffset`,
    VaultCreditCard: {
      billingAddress: "CustomerCreditCardBillingAddress",
      brand: "String",
      expired: "Boolean",
      expiryMonth: "Int",
      expiryYear: "Int",
      lastDigits: "String",
      name: "String"
    },
    VaultPaypalBillingAgreement: {
      inactive: "Boolean",
      name: "String",
      paypalAccountEmail: "String"
    },
    Vector3: {
      x: "Float",
      y: "Float",
      z: "Float"
    },
    Video: {
      alt: "String",
      createdAt: "DateTime",
      duration: "Int",
      fileErrors: "FileError",
      fileStatus: "FileStatus",
      filename: "String",
      id: "ID",
      mediaContentType: "MediaContentType",
      mediaErrors: "MediaError",
      mediaWarnings: "MediaWarning",
      originalSource: "VideoSource",
      preview: "MediaPreviewImage",
      sources: "VideoSource",
      status: "MediaStatus"
    },
    VideoSource: {
      fileSize: "Int",
      format: "String",
      height: "Int",
      mimeType: "String",
      url: "String",
      width: "Int"
    },
    WebPixel: {
      id: "ID",
      settings: "JSON"
    },
    WebPixelCreatePayload: {
      userErrors: "ErrorsWebPixelUserError",
      webPixel: "WebPixel"
    },
    WebPixelDeletePayload: {
      deletedWebPixelId: "ID",
      userErrors: "ErrorsWebPixelUserError"
    },
    WebPixelUpdatePayload: {
      userErrors: "ErrorsWebPixelUserError",
      webPixel: "WebPixel"
    },
    WebhookEventBridgeEndpoint: {
      arn: "ARN"
    },
    WebhookHttpEndpoint: {
      callbackUrl: "URL"
    },
    WebhookPubSubEndpoint: {
      pubSubProject: "String",
      pubSubTopic: "String"
    },
    WebhookSubscription: {
      callbackUrl: "URL",
      createdAt: "DateTime",
      endpoint: "WebhookSubscriptionEndpoint",
      format: "WebhookSubscriptionFormat",
      id: "ID",
      includeFields: "String",
      legacyResourceId: "UnsignedInt64",
      metafieldNamespaces: "String",
      privateMetafieldNamespaces: "String",
      topic: "WebhookSubscriptionTopic",
      updatedAt: "DateTime"
    },
    WebhookSubscriptionConnection: {
      edges: "WebhookSubscriptionEdge",
      nodes: "WebhookSubscription",
      pageInfo: "PageInfo"
    },
    WebhookSubscriptionCreatePayload: {
      userErrors: "UserError",
      webhookSubscription: "WebhookSubscription"
    },
    WebhookSubscriptionDeletePayload: {
      deletedWebhookSubscriptionId: "ID",
      userErrors: "UserError"
    },
    WebhookSubscriptionEdge: {
      cursor: "String",
      node: "WebhookSubscription"
    },
    WebhookSubscriptionEndpoint: {
      "...on WebhookEventBridgeEndpoint": "WebhookEventBridgeEndpoint",
      "...on WebhookHttpEndpoint": "WebhookHttpEndpoint",
      "...on WebhookPubSubEndpoint": "WebhookPubSubEndpoint"
    },
    WebhookSubscriptionUpdatePayload: {
      userErrors: "UserError",
      webhookSubscription: "WebhookSubscription"
    },
    Weight: {
      unit: "WeightUnit",
      value: "Float"
    },
    deliveryProfileCreatePayload: {
      profile: "DeliveryProfile",
      userErrors: "UserError"
    },
    deliveryProfileRemovePayload: {
      job: "Job",
      userErrors: "UserError"
    },
    deliveryProfileUpdatePayload: {
      profile: "DeliveryProfile",
      userErrors: "UserError"
    }
  };
  var Ops = {
    mutation: "Mutation",
    query: "QueryRoot"
  };

  // zeus-admin/zeus/index.ts
  var HOST = "https://darkien.myshopify.com/admin/api/2023-01/graphql.json";
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
  var AbandonmentAbandonmentType = /* @__PURE__ */ ((AbandonmentAbandonmentType2) => {
    AbandonmentAbandonmentType2["BROWSE"] = "BROWSE";
    AbandonmentAbandonmentType2["CART"] = "CART";
    AbandonmentAbandonmentType2["CHECKOUT"] = "CHECKOUT";
    return AbandonmentAbandonmentType2;
  })(AbandonmentAbandonmentType || {});
  var AbandonmentEmailState = /* @__PURE__ */ ((AbandonmentEmailState2) => {
    AbandonmentEmailState2["NOT_SENT"] = "NOT_SENT";
    AbandonmentEmailState2["SENT"] = "SENT";
    AbandonmentEmailState2["SCHEDULED"] = "SCHEDULED";
    return AbandonmentEmailState2;
  })(AbandonmentEmailState || {});
  var AbandonmentEmailStateUpdateUserErrorCode = /* @__PURE__ */ ((AbandonmentEmailStateUpdateUserErrorCode2) => {
    AbandonmentEmailStateUpdateUserErrorCode2["ABANDONMENT_NOT_FOUND"] = "ABANDONMENT_NOT_FOUND";
    return AbandonmentEmailStateUpdateUserErrorCode2;
  })(AbandonmentEmailStateUpdateUserErrorCode || {});
  var AppDeveloperType = /* @__PURE__ */ ((AppDeveloperType2) => {
    AppDeveloperType2["SHOPIFY"] = "SHOPIFY";
    AppDeveloperType2["PARTNER"] = "PARTNER";
    AppDeveloperType2["MERCHANT"] = "MERCHANT";
    AppDeveloperType2["UNKNOWN"] = "UNKNOWN";
    return AppDeveloperType2;
  })(AppDeveloperType || {});
  var AppInstallationCategory = /* @__PURE__ */ ((AppInstallationCategory2) => {
    AppInstallationCategory2["CHANNEL"] = "CHANNEL";
    AppInstallationCategory2["POS_EMBEDDED"] = "POS_EMBEDDED";
    return AppInstallationCategory2;
  })(AppInstallationCategory || {});
  var AppInstallationPrivacy = /* @__PURE__ */ ((AppInstallationPrivacy2) => {
    AppInstallationPrivacy2["PUBLIC"] = "PUBLIC";
    AppInstallationPrivacy2["PRIVATE"] = "PRIVATE";
    return AppInstallationPrivacy2;
  })(AppInstallationPrivacy || {});
  var AppInstallationSortKeys = /* @__PURE__ */ ((AppInstallationSortKeys2) => {
    AppInstallationSortKeys2["INSTALLED_AT"] = "INSTALLED_AT";
    AppInstallationSortKeys2["APP_TITLE"] = "APP_TITLE";
    AppInstallationSortKeys2["ID"] = "ID";
    AppInstallationSortKeys2["RELEVANCE"] = "RELEVANCE";
    return AppInstallationSortKeys2;
  })(AppInstallationSortKeys || {});
  var AppPricingInterval = /* @__PURE__ */ ((AppPricingInterval2) => {
    AppPricingInterval2["ANNUAL"] = "ANNUAL";
    AppPricingInterval2["EVERY_30_DAYS"] = "EVERY_30_DAYS";
    return AppPricingInterval2;
  })(AppPricingInterval || {});
  var AppPublicCategory = /* @__PURE__ */ ((AppPublicCategory2) => {
    AppPublicCategory2["PRIVATE"] = "PRIVATE";
    AppPublicCategory2["PUBLIC"] = "PUBLIC";
    AppPublicCategory2["CUSTOM"] = "CUSTOM";
    AppPublicCategory2["OTHER"] = "OTHER";
    return AppPublicCategory2;
  })(AppPublicCategory || {});
  var AppPurchaseStatus = /* @__PURE__ */ ((AppPurchaseStatus2) => {
    AppPurchaseStatus2["ACCEPTED"] = "ACCEPTED";
    AppPurchaseStatus2["ACTIVE"] = "ACTIVE";
    AppPurchaseStatus2["DECLINED"] = "DECLINED";
    AppPurchaseStatus2["EXPIRED"] = "EXPIRED";
    AppPurchaseStatus2["PENDING"] = "PENDING";
    return AppPurchaseStatus2;
  })(AppPurchaseStatus || {});
  var AppRevenueAttributionRecordCreateUserErrorCode = /* @__PURE__ */ ((AppRevenueAttributionRecordCreateUserErrorCode2) => {
    AppRevenueAttributionRecordCreateUserErrorCode2["INVALID"] = "INVALID";
    AppRevenueAttributionRecordCreateUserErrorCode2["TAKEN"] = "TAKEN";
    return AppRevenueAttributionRecordCreateUserErrorCode2;
  })(AppRevenueAttributionRecordCreateUserErrorCode || {});
  var AppRevenueAttributionRecordDeleteUserErrorCode = /* @__PURE__ */ ((AppRevenueAttributionRecordDeleteUserErrorCode2) => {
    AppRevenueAttributionRecordDeleteUserErrorCode2["INVALID"] = "INVALID";
    return AppRevenueAttributionRecordDeleteUserErrorCode2;
  })(AppRevenueAttributionRecordDeleteUserErrorCode || {});
  var AppRevenueAttributionRecordSortKeys = /* @__PURE__ */ ((AppRevenueAttributionRecordSortKeys2) => {
    AppRevenueAttributionRecordSortKeys2["CREATED_AT"] = "CREATED_AT";
    AppRevenueAttributionRecordSortKeys2["ID"] = "ID";
    AppRevenueAttributionRecordSortKeys2["RELEVANCE"] = "RELEVANCE";
    return AppRevenueAttributionRecordSortKeys2;
  })(AppRevenueAttributionRecordSortKeys || {});
  var AppRevenueAttributionType = /* @__PURE__ */ ((AppRevenueAttributionType2) => {
    AppRevenueAttributionType2["APPLICATION_PURCHASE"] = "APPLICATION_PURCHASE";
    AppRevenueAttributionType2["APPLICATION_SUBSCRIPTION"] = "APPLICATION_SUBSCRIPTION";
    AppRevenueAttributionType2["APPLICATION_USAGE"] = "APPLICATION_USAGE";
    AppRevenueAttributionType2["OTHER"] = "OTHER";
    return AppRevenueAttributionType2;
  })(AppRevenueAttributionType || {});
  var AppSubscriptionReplacementBehavior = /* @__PURE__ */ ((AppSubscriptionReplacementBehavior2) => {
    AppSubscriptionReplacementBehavior2["APPLY_IMMEDIATELY"] = "APPLY_IMMEDIATELY";
    AppSubscriptionReplacementBehavior2["APPLY_ON_NEXT_BILLING_CYCLE"] = "APPLY_ON_NEXT_BILLING_CYCLE";
    AppSubscriptionReplacementBehavior2["STANDARD"] = "STANDARD";
    return AppSubscriptionReplacementBehavior2;
  })(AppSubscriptionReplacementBehavior || {});
  var AppSubscriptionSortKeys = /* @__PURE__ */ ((AppSubscriptionSortKeys2) => {
    AppSubscriptionSortKeys2["CREATED_AT"] = "CREATED_AT";
    AppSubscriptionSortKeys2["ID"] = "ID";
    AppSubscriptionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return AppSubscriptionSortKeys2;
  })(AppSubscriptionSortKeys || {});
  var AppSubscriptionStatus = /* @__PURE__ */ ((AppSubscriptionStatus2) => {
    AppSubscriptionStatus2["PENDING"] = "PENDING";
    AppSubscriptionStatus2["ACCEPTED"] = "ACCEPTED";
    AppSubscriptionStatus2["ACTIVE"] = "ACTIVE";
    AppSubscriptionStatus2["DECLINED"] = "DECLINED";
    AppSubscriptionStatus2["EXPIRED"] = "EXPIRED";
    AppSubscriptionStatus2["FROZEN"] = "FROZEN";
    AppSubscriptionStatus2["CANCELLED"] = "CANCELLED";
    return AppSubscriptionStatus2;
  })(AppSubscriptionStatus || {});
  var AppSubscriptionTrialExtendUserErrorCode = /* @__PURE__ */ ((AppSubscriptionTrialExtendUserErrorCode2) => {
    AppSubscriptionTrialExtendUserErrorCode2["SUBSCRIPTION_NOT_FOUND"] = "SUBSCRIPTION_NOT_FOUND";
    AppSubscriptionTrialExtendUserErrorCode2["TRIAL_NOT_ACTIVE"] = "TRIAL_NOT_ACTIVE";
    AppSubscriptionTrialExtendUserErrorCode2["SUBSCRIPTION_NOT_ACTIVE"] = "SUBSCRIPTION_NOT_ACTIVE";
    return AppSubscriptionTrialExtendUserErrorCode2;
  })(AppSubscriptionTrialExtendUserErrorCode || {});
  var AppTransactionSortKeys = /* @__PURE__ */ ((AppTransactionSortKeys2) => {
    AppTransactionSortKeys2["CREATED_AT"] = "CREATED_AT";
    AppTransactionSortKeys2["ID"] = "ID";
    AppTransactionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return AppTransactionSortKeys2;
  })(AppTransactionSortKeys || {});
  var AppUsageRecordSortKeys = /* @__PURE__ */ ((AppUsageRecordSortKeys2) => {
    AppUsageRecordSortKeys2["CREATED_AT"] = "CREATED_AT";
    AppUsageRecordSortKeys2["ID"] = "ID";
    AppUsageRecordSortKeys2["RELEVANCE"] = "RELEVANCE";
    return AppUsageRecordSortKeys2;
  })(AppUsageRecordSortKeys || {});
  var AutomaticDiscountSortKeys = /* @__PURE__ */ ((AutomaticDiscountSortKeys2) => {
    AutomaticDiscountSortKeys2["CREATED_AT"] = "CREATED_AT";
    AutomaticDiscountSortKeys2["ID"] = "ID";
    AutomaticDiscountSortKeys2["RELEVANCE"] = "RELEVANCE";
    return AutomaticDiscountSortKeys2;
  })(AutomaticDiscountSortKeys || {});
  var BadgeType = /* @__PURE__ */ ((BadgeType2) => {
    BadgeType2["DEFAULT"] = "DEFAULT";
    BadgeType2["SUCCESS"] = "SUCCESS";
    BadgeType2["ATTENTION"] = "ATTENTION";
    BadgeType2["WARNING"] = "WARNING";
    BadgeType2["INFO"] = "INFO";
    return BadgeType2;
  })(BadgeType || {});
  var BillingAttemptUserErrorCode = /* @__PURE__ */ ((BillingAttemptUserErrorCode2) => {
    BillingAttemptUserErrorCode2["INVALID"] = "INVALID";
    BillingAttemptUserErrorCode2["BLANK"] = "BLANK";
    BillingAttemptUserErrorCode2["CONTRACT_NOT_FOUND"] = "CONTRACT_NOT_FOUND";
    BillingAttemptUserErrorCode2["ORIGIN_TIME_BEFORE_CONTRACT_CREATION"] = "ORIGIN_TIME_BEFORE_CONTRACT_CREATION";
    BillingAttemptUserErrorCode2["UPCOMING_CYCLE_LIMIT_EXCEEDED"] = "UPCOMING_CYCLE_LIMIT_EXCEEDED";
    BillingAttemptUserErrorCode2["CYCLE_INDEX_OUT_OF_RANGE"] = "CYCLE_INDEX_OUT_OF_RANGE";
    BillingAttemptUserErrorCode2["CYCLE_START_DATE_OUT_OF_RANGE"] = "CYCLE_START_DATE_OUT_OF_RANGE";
    BillingAttemptUserErrorCode2["ORIGIN_TIME_OUT_OF_RANGE"] = "ORIGIN_TIME_OUT_OF_RANGE";
    return BillingAttemptUserErrorCode2;
  })(BillingAttemptUserErrorCode || {});
  var BulkMutationErrorCode = /* @__PURE__ */ ((BulkMutationErrorCode2) => {
    BulkMutationErrorCode2["OPERATION_IN_PROGRESS"] = "OPERATION_IN_PROGRESS";
    BulkMutationErrorCode2["INVALID_MUTATION"] = "INVALID_MUTATION";
    BulkMutationErrorCode2["INVALID_STAGED_UPLOAD_FILE"] = "INVALID_STAGED_UPLOAD_FILE";
    BulkMutationErrorCode2["NO_SUCH_FILE"] = "NO_SUCH_FILE";
    BulkMutationErrorCode2["INTERNAL_FILE_SERVER_ERROR"] = "INTERNAL_FILE_SERVER_ERROR";
    return BulkMutationErrorCode2;
  })(BulkMutationErrorCode || {});
  var BulkOperationErrorCode = /* @__PURE__ */ ((BulkOperationErrorCode2) => {
    BulkOperationErrorCode2["ACCESS_DENIED"] = "ACCESS_DENIED";
    BulkOperationErrorCode2["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    BulkOperationErrorCode2["TIMEOUT"] = "TIMEOUT";
    return BulkOperationErrorCode2;
  })(BulkOperationErrorCode || {});
  var BulkOperationStatus = /* @__PURE__ */ ((BulkOperationStatus2) => {
    BulkOperationStatus2["CANCELED"] = "CANCELED";
    BulkOperationStatus2["CANCELING"] = "CANCELING";
    BulkOperationStatus2["COMPLETED"] = "COMPLETED";
    BulkOperationStatus2["CREATED"] = "CREATED";
    BulkOperationStatus2["EXPIRED"] = "EXPIRED";
    BulkOperationStatus2["FAILED"] = "FAILED";
    BulkOperationStatus2["RUNNING"] = "RUNNING";
    return BulkOperationStatus2;
  })(BulkOperationStatus || {});
  var BulkOperationType = /* @__PURE__ */ ((BulkOperationType2) => {
    BulkOperationType2["QUERY"] = "QUERY";
    BulkOperationType2["MUTATION"] = "MUTATION";
    return BulkOperationType2;
  })(BulkOperationType || {});
  var BulkProductResourceFeedbackCreateUserErrorCode = /* @__PURE__ */ ((BulkProductResourceFeedbackCreateUserErrorCode2) => {
    BulkProductResourceFeedbackCreateUserErrorCode2["MAXIMUM_FEEDBACK_LIMIT_EXCEEDED"] = "MAXIMUM_FEEDBACK_LIMIT_EXCEEDED";
    BulkProductResourceFeedbackCreateUserErrorCode2["OUTDATED_FEEDBACK"] = "OUTDATED_FEEDBACK";
    BulkProductResourceFeedbackCreateUserErrorCode2["PRODUCT_NOT_FOUND"] = "PRODUCT_NOT_FOUND";
    BulkProductResourceFeedbackCreateUserErrorCode2["INVALID"] = "INVALID";
    BulkProductResourceFeedbackCreateUserErrorCode2["BLANK"] = "BLANK";
    BulkProductResourceFeedbackCreateUserErrorCode2["PRESENT"] = "PRESENT";
    BulkProductResourceFeedbackCreateUserErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    return BulkProductResourceFeedbackCreateUserErrorCode2;
  })(BulkProductResourceFeedbackCreateUserErrorCode || {});
  var BusinessCustomerErrorCode = /* @__PURE__ */ ((BusinessCustomerErrorCode2) => {
    BusinessCustomerErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    BusinessCustomerErrorCode2["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
    BusinessCustomerErrorCode2["FAILED_TO_DELETE"] = "FAILED_TO_DELETE";
    BusinessCustomerErrorCode2["REQUIRED"] = "REQUIRED";
    BusinessCustomerErrorCode2["NO_INPUT"] = "NO_INPUT";
    BusinessCustomerErrorCode2["INVALID_INPUT"] = "INVALID_INPUT";
    BusinessCustomerErrorCode2["UNEXPECTED_TYPE"] = "UNEXPECTED_TYPE";
    BusinessCustomerErrorCode2["TOO_LONG"] = "TOO_LONG";
    BusinessCustomerErrorCode2["LIMIT_REACHED"] = "LIMIT_REACHED";
    BusinessCustomerErrorCode2["INVALID"] = "INVALID";
    BusinessCustomerErrorCode2["BLANK"] = "BLANK";
    BusinessCustomerErrorCode2["TAKEN"] = "TAKEN";
    return BusinessCustomerErrorCode2;
  })(BusinessCustomerErrorCode || {});
  var CheckoutProfileSortKeys = /* @__PURE__ */ ((CheckoutProfileSortKeys2) => {
    CheckoutProfileSortKeys2["CREATED_AT"] = "CREATED_AT";
    CheckoutProfileSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CheckoutProfileSortKeys2["EDITED_AT"] = "EDITED_AT";
    CheckoutProfileSortKeys2["IS_PUBLISHED"] = "IS_PUBLISHED";
    CheckoutProfileSortKeys2["ID"] = "ID";
    CheckoutProfileSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CheckoutProfileSortKeys2;
  })(CheckoutProfileSortKeys || {});
  var CodeDiscountSortKeys = /* @__PURE__ */ ((CodeDiscountSortKeys2) => {
    CodeDiscountSortKeys2["STARTS_AT"] = "STARTS_AT";
    CodeDiscountSortKeys2["ENDS_AT"] = "ENDS_AT";
    CodeDiscountSortKeys2["TITLE"] = "TITLE";
    CodeDiscountSortKeys2["CREATED_AT"] = "CREATED_AT";
    CodeDiscountSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CodeDiscountSortKeys2["ID"] = "ID";
    CodeDiscountSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CodeDiscountSortKeys2;
  })(CodeDiscountSortKeys || {});
  var CollectionAddProductsV2UserErrorCode = /* @__PURE__ */ ((CollectionAddProductsV2UserErrorCode2) => {
    CollectionAddProductsV2UserErrorCode2["CANT_ADD_TO_SMART_COLLECTION"] = "CANT_ADD_TO_SMART_COLLECTION";
    CollectionAddProductsV2UserErrorCode2["COLLECTION_DOES_NOT_EXIST"] = "COLLECTION_DOES_NOT_EXIST";
    return CollectionAddProductsV2UserErrorCode2;
  })(CollectionAddProductsV2UserErrorCode || {});
  var CollectionRuleColumn = /* @__PURE__ */ ((CollectionRuleColumn2) => {
    CollectionRuleColumn2["TAG"] = "TAG";
    CollectionRuleColumn2["TITLE"] = "TITLE";
    CollectionRuleColumn2["TYPE"] = "TYPE";
    CollectionRuleColumn2["PRODUCT_TAXONOMY_NODE_ID"] = "PRODUCT_TAXONOMY_NODE_ID";
    CollectionRuleColumn2["VENDOR"] = "VENDOR";
    CollectionRuleColumn2["VARIANT_PRICE"] = "VARIANT_PRICE";
    CollectionRuleColumn2["IS_PRICE_REDUCED"] = "IS_PRICE_REDUCED";
    CollectionRuleColumn2["VARIANT_COMPARE_AT_PRICE"] = "VARIANT_COMPARE_AT_PRICE";
    CollectionRuleColumn2["VARIANT_WEIGHT"] = "VARIANT_WEIGHT";
    CollectionRuleColumn2["VARIANT_INVENTORY"] = "VARIANT_INVENTORY";
    CollectionRuleColumn2["VARIANT_TITLE"] = "VARIANT_TITLE";
    CollectionRuleColumn2["PRODUCT_METAFIELD_DEFINITION"] = "PRODUCT_METAFIELD_DEFINITION";
    CollectionRuleColumn2["VARIANT_METAFIELD_DEFINITION"] = "VARIANT_METAFIELD_DEFINITION";
    return CollectionRuleColumn2;
  })(CollectionRuleColumn || {});
  var CollectionRuleRelation = /* @__PURE__ */ ((CollectionRuleRelation2) => {
    CollectionRuleRelation2["CONTAINS"] = "CONTAINS";
    CollectionRuleRelation2["ENDS_WITH"] = "ENDS_WITH";
    CollectionRuleRelation2["EQUALS"] = "EQUALS";
    CollectionRuleRelation2["GREATER_THAN"] = "GREATER_THAN";
    CollectionRuleRelation2["IS_NOT_SET"] = "IS_NOT_SET";
    CollectionRuleRelation2["IS_SET"] = "IS_SET";
    CollectionRuleRelation2["LESS_THAN"] = "LESS_THAN";
    CollectionRuleRelation2["NOT_CONTAINS"] = "NOT_CONTAINS";
    CollectionRuleRelation2["NOT_EQUALS"] = "NOT_EQUALS";
    CollectionRuleRelation2["STARTS_WITH"] = "STARTS_WITH";
    return CollectionRuleRelation2;
  })(CollectionRuleRelation || {});
  var CollectionSortKeys = /* @__PURE__ */ ((CollectionSortKeys2) => {
    CollectionSortKeys2["TITLE"] = "TITLE";
    CollectionSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CollectionSortKeys2["ID"] = "ID";
    CollectionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CollectionSortKeys2;
  })(CollectionSortKeys || {});
  var CollectionSortOrder = /* @__PURE__ */ ((CollectionSortOrder2) => {
    CollectionSortOrder2["ALPHA_ASC"] = "ALPHA_ASC";
    CollectionSortOrder2["ALPHA_DESC"] = "ALPHA_DESC";
    CollectionSortOrder2["BEST_SELLING"] = "BEST_SELLING";
    CollectionSortOrder2["CREATED"] = "CREATED";
    CollectionSortOrder2["CREATED_DESC"] = "CREATED_DESC";
    CollectionSortOrder2["MANUAL"] = "MANUAL";
    CollectionSortOrder2["PRICE_ASC"] = "PRICE_ASC";
    CollectionSortOrder2["PRICE_DESC"] = "PRICE_DESC";
    return CollectionSortOrder2;
  })(CollectionSortOrder || {});
  var CompanyAddressType = /* @__PURE__ */ ((CompanyAddressType2) => {
    CompanyAddressType2["BILLING"] = "BILLING";
    CompanyAddressType2["SHIPPING"] = "SHIPPING";
    return CompanyAddressType2;
  })(CompanyAddressType || {});
  var CompanyContactRoleAssignmentSortKeys = /* @__PURE__ */ ((CompanyContactRoleAssignmentSortKeys2) => {
    CompanyContactRoleAssignmentSortKeys2["CREATED_AT"] = "CREATED_AT";
    CompanyContactRoleAssignmentSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CompanyContactRoleAssignmentSortKeys2["LOCATION_NAME"] = "LOCATION_NAME";
    CompanyContactRoleAssignmentSortKeys2["ID"] = "ID";
    CompanyContactRoleAssignmentSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CompanyContactRoleAssignmentSortKeys2;
  })(CompanyContactRoleAssignmentSortKeys || {});
  var CompanyContactRoleSortKeys = /* @__PURE__ */ ((CompanyContactRoleSortKeys2) => {
    CompanyContactRoleSortKeys2["CREATED_AT"] = "CREATED_AT";
    CompanyContactRoleSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CompanyContactRoleSortKeys2["ID"] = "ID";
    CompanyContactRoleSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CompanyContactRoleSortKeys2;
  })(CompanyContactRoleSortKeys || {});
  var CompanyContactSortKeys = /* @__PURE__ */ ((CompanyContactSortKeys2) => {
    CompanyContactSortKeys2["CREATED_AT"] = "CREATED_AT";
    CompanyContactSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CompanyContactSortKeys2["TITLE"] = "TITLE";
    CompanyContactSortKeys2["COMPANY_ID"] = "COMPANY_ID";
    CompanyContactSortKeys2["NAME"] = "NAME";
    CompanyContactSortKeys2["EMAIL"] = "EMAIL";
    CompanyContactSortKeys2["NAME_EMAIL"] = "NAME_EMAIL";
    CompanyContactSortKeys2["ID"] = "ID";
    CompanyContactSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CompanyContactSortKeys2;
  })(CompanyContactSortKeys || {});
  var CompanyLocationSortKeys = /* @__PURE__ */ ((CompanyLocationSortKeys2) => {
    CompanyLocationSortKeys2["CREATED_AT"] = "CREATED_AT";
    CompanyLocationSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CompanyLocationSortKeys2["NAME"] = "NAME";
    CompanyLocationSortKeys2["COMPANY_ID"] = "COMPANY_ID";
    CompanyLocationSortKeys2["COMPANY_AND_LOCATION_NAME"] = "COMPANY_AND_LOCATION_NAME";
    CompanyLocationSortKeys2["ID"] = "ID";
    CompanyLocationSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CompanyLocationSortKeys2;
  })(CompanyLocationSortKeys || {});
  var CompanySortKeys = /* @__PURE__ */ ((CompanySortKeys2) => {
    CompanySortKeys2["CREATED_AT"] = "CREATED_AT";
    CompanySortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CompanySortKeys2["SINCE_DATE"] = "SINCE_DATE";
    CompanySortKeys2["NAME"] = "NAME";
    CompanySortKeys2["ORDER_COUNT"] = "ORDER_COUNT";
    CompanySortKeys2["TOTAL_SPENT"] = "TOTAL_SPENT";
    CompanySortKeys2["ID"] = "ID";
    CompanySortKeys2["RELEVANCE"] = "RELEVANCE";
    return CompanySortKeys2;
  })(CompanySortKeys || {});
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
    CurrencyCode2["STN"] = "STN";
    CurrencyCode2["TJS"] = "TJS";
    CurrencyCode2["TOP"] = "TOP";
    CurrencyCode2["VED"] = "VED";
    CurrencyCode2["VEF"] = "VEF";
    CurrencyCode2["VES"] = "VES";
    CurrencyCode2["XXX"] = "XXX";
    return CurrencyCode2;
  })(CurrencyCode || {});
  var CustomerConsentCollectedFrom = /* @__PURE__ */ ((CustomerConsentCollectedFrom2) => {
    CustomerConsentCollectedFrom2["SHOPIFY"] = "SHOPIFY";
    CustomerConsentCollectedFrom2["OTHER"] = "OTHER";
    return CustomerConsentCollectedFrom2;
  })(CustomerConsentCollectedFrom || {});
  var CustomerEmailAddressMarketingState = /* @__PURE__ */ ((CustomerEmailAddressMarketingState2) => {
    CustomerEmailAddressMarketingState2["INVALID"] = "INVALID";
    CustomerEmailAddressMarketingState2["NOT_SUBSCRIBED"] = "NOT_SUBSCRIBED";
    CustomerEmailAddressMarketingState2["PENDING"] = "PENDING";
    CustomerEmailAddressMarketingState2["SUBSCRIBED"] = "SUBSCRIBED";
    CustomerEmailAddressMarketingState2["UNSUBSCRIBED"] = "UNSUBSCRIBED";
    return CustomerEmailAddressMarketingState2;
  })(CustomerEmailAddressMarketingState || {});
  var CustomerEmailAddressOpenTrackingLevel = /* @__PURE__ */ ((CustomerEmailAddressOpenTrackingLevel2) => {
    CustomerEmailAddressOpenTrackingLevel2["UNKNOWN"] = "UNKNOWN";
    CustomerEmailAddressOpenTrackingLevel2["OPTED_IN"] = "OPTED_IN";
    CustomerEmailAddressOpenTrackingLevel2["OPTED_OUT"] = "OPTED_OUT";
    return CustomerEmailAddressOpenTrackingLevel2;
  })(CustomerEmailAddressOpenTrackingLevel || {});
  var CustomerEmailMarketingConsentUpdateUserErrorCode = /* @__PURE__ */ ((CustomerEmailMarketingConsentUpdateUserErrorCode2) => {
    CustomerEmailMarketingConsentUpdateUserErrorCode2["INVALID"] = "INVALID";
    CustomerEmailMarketingConsentUpdateUserErrorCode2["INCLUSION"] = "INCLUSION";
    CustomerEmailMarketingConsentUpdateUserErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    CustomerEmailMarketingConsentUpdateUserErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    return CustomerEmailMarketingConsentUpdateUserErrorCode2;
  })(CustomerEmailMarketingConsentUpdateUserErrorCode || {});
  var CustomerEmailMarketingState = /* @__PURE__ */ ((CustomerEmailMarketingState2) => {
    CustomerEmailMarketingState2["NOT_SUBSCRIBED"] = "NOT_SUBSCRIBED";
    CustomerEmailMarketingState2["PENDING"] = "PENDING";
    CustomerEmailMarketingState2["SUBSCRIBED"] = "SUBSCRIBED";
    CustomerEmailMarketingState2["UNSUBSCRIBED"] = "UNSUBSCRIBED";
    CustomerEmailMarketingState2["REDACTED"] = "REDACTED";
    CustomerEmailMarketingState2["INVALID"] = "INVALID";
    return CustomerEmailMarketingState2;
  })(CustomerEmailMarketingState || {});
  var CustomerMarketingOptInLevel = /* @__PURE__ */ ((CustomerMarketingOptInLevel2) => {
    CustomerMarketingOptInLevel2["SINGLE_OPT_IN"] = "SINGLE_OPT_IN";
    CustomerMarketingOptInLevel2["CONFIRMED_OPT_IN"] = "CONFIRMED_OPT_IN";
    CustomerMarketingOptInLevel2["UNKNOWN"] = "UNKNOWN";
    return CustomerMarketingOptInLevel2;
  })(CustomerMarketingOptInLevel || {});
  var CustomerPaymentMethodGetUpdateUrlUserErrorCode = /* @__PURE__ */ ((CustomerPaymentMethodGetUpdateUrlUserErrorCode2) => {
    CustomerPaymentMethodGetUpdateUrlUserErrorCode2["PAYMENT_METHOD_DOES_NOT_EXIST"] = "PAYMENT_METHOD_DOES_NOT_EXIST";
    CustomerPaymentMethodGetUpdateUrlUserErrorCode2["INVALID_INSTRUMENT"] = "INVALID_INSTRUMENT";
    CustomerPaymentMethodGetUpdateUrlUserErrorCode2["TOO_MANY_REQUESTS"] = "TOO_MANY_REQUESTS";
    CustomerPaymentMethodGetUpdateUrlUserErrorCode2["CUSTOMER_DOES_NOT_EXIST"] = "CUSTOMER_DOES_NOT_EXIST";
    return CustomerPaymentMethodGetUpdateUrlUserErrorCode2;
  })(CustomerPaymentMethodGetUpdateUrlUserErrorCode || {});
  var CustomerPaymentMethodRemoteUserErrorCode = /* @__PURE__ */ ((CustomerPaymentMethodRemoteUserErrorCode2) => {
    CustomerPaymentMethodRemoteUserErrorCode2["INVALID"] = "INVALID";
    CustomerPaymentMethodRemoteUserErrorCode2["PRESENT"] = "PRESENT";
    CustomerPaymentMethodRemoteUserErrorCode2["TAKEN"] = "TAKEN";
    CustomerPaymentMethodRemoteUserErrorCode2["EXACTLY_ONE_REMOTE_REFERENCE_REQUIRED"] = "EXACTLY_ONE_REMOTE_REFERENCE_REQUIRED";
    CustomerPaymentMethodRemoteUserErrorCode2["AUTHORIZE_NET_NOT_ENABLED_FOR_SUBSCRIPTIONS"] = "AUTHORIZE_NET_NOT_ENABLED_FOR_SUBSCRIPTIONS";
    CustomerPaymentMethodRemoteUserErrorCode2["BRAINTREE_NOT_ENABLED_FOR_SUBSCRIPTIONS"] = "BRAINTREE_NOT_ENABLED_FOR_SUBSCRIPTIONS";
    return CustomerPaymentMethodRemoteUserErrorCode2;
  })(CustomerPaymentMethodRemoteUserErrorCode || {});
  var CustomerPaymentMethodRevocationReason = /* @__PURE__ */ ((CustomerPaymentMethodRevocationReason2) => {
    CustomerPaymentMethodRevocationReason2["AUTHORIZE_NET_GATEWAY_NOT_ENABLED"] = "AUTHORIZE_NET_GATEWAY_NOT_ENABLED";
    CustomerPaymentMethodRevocationReason2["AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD"] = "AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD";
    CustomerPaymentMethodRevocationReason2["FAILED_TO_UPDATE_CREDIT_CARD"] = "FAILED_TO_UPDATE_CREDIT_CARD";
    CustomerPaymentMethodRevocationReason2["STRIPE_API_AUTHENTICATION_ERROR"] = "STRIPE_API_AUTHENTICATION_ERROR";
    CustomerPaymentMethodRevocationReason2["STRIPE_API_INVALID_REQUEST_ERROR"] = "STRIPE_API_INVALID_REQUEST_ERROR";
    CustomerPaymentMethodRevocationReason2["STRIPE_GATEWAY_NOT_ENABLED"] = "STRIPE_GATEWAY_NOT_ENABLED";
    CustomerPaymentMethodRevocationReason2["STRIPE_RETURNED_NO_PAYMENT_METHOD"] = "STRIPE_RETURNED_NO_PAYMENT_METHOD";
    CustomerPaymentMethodRevocationReason2["STRIPE_PAYMENT_METHOD_NOT_CARD"] = "STRIPE_PAYMENT_METHOD_NOT_CARD";
    CustomerPaymentMethodRevocationReason2["BRAINTREE_API_AUTHENTICATION_ERROR"] = "BRAINTREE_API_AUTHENTICATION_ERROR";
    CustomerPaymentMethodRevocationReason2["BRAINTREE_GATEWAY_NOT_ENABLED"] = "BRAINTREE_GATEWAY_NOT_ENABLED";
    CustomerPaymentMethodRevocationReason2["BRAINTREE_RETURNED_NO_PAYMENT_METHOD"] = "BRAINTREE_RETURNED_NO_PAYMENT_METHOD";
    CustomerPaymentMethodRevocationReason2["BRAINTREE_PAYMENT_METHOD_NOT_CARD"] = "BRAINTREE_PAYMENT_METHOD_NOT_CARD";
    CustomerPaymentMethodRevocationReason2["MANUALLY_REVOKED"] = "MANUALLY_REVOKED";
    CustomerPaymentMethodRevocationReason2["MERGED"] = "MERGED";
    return CustomerPaymentMethodRevocationReason2;
  })(CustomerPaymentMethodRevocationReason || {});
  var CustomerPaymentMethodUserErrorCode = /* @__PURE__ */ ((CustomerPaymentMethodUserErrorCode2) => {
    CustomerPaymentMethodUserErrorCode2["INVALID"] = "INVALID";
    CustomerPaymentMethodUserErrorCode2["PRESENT"] = "PRESENT";
    CustomerPaymentMethodUserErrorCode2["TAKEN"] = "TAKEN";
    return CustomerPaymentMethodUserErrorCode2;
  })(CustomerPaymentMethodUserErrorCode || {});
  var CustomerPredictedSpendTier = /* @__PURE__ */ ((CustomerPredictedSpendTier2) => {
    CustomerPredictedSpendTier2["HIGH"] = "HIGH";
    CustomerPredictedSpendTier2["MEDIUM"] = "MEDIUM";
    CustomerPredictedSpendTier2["LOW"] = "LOW";
    return CustomerPredictedSpendTier2;
  })(CustomerPredictedSpendTier || {});
  var CustomerProductSubscriberStatus = /* @__PURE__ */ ((CustomerProductSubscriberStatus2) => {
    CustomerProductSubscriberStatus2["ACTIVE"] = "ACTIVE";
    CustomerProductSubscriberStatus2["CANCELLED"] = "CANCELLED";
    CustomerProductSubscriberStatus2["EXPIRED"] = "EXPIRED";
    CustomerProductSubscriberStatus2["FAILED"] = "FAILED";
    CustomerProductSubscriberStatus2["NEVER_SUBSCRIBED"] = "NEVER_SUBSCRIBED";
    CustomerProductSubscriberStatus2["PAUSED"] = "PAUSED";
    return CustomerProductSubscriberStatus2;
  })(CustomerProductSubscriberStatus || {});
  var CustomerSavedSearchSortKeys = /* @__PURE__ */ ((CustomerSavedSearchSortKeys2) => {
    CustomerSavedSearchSortKeys2["NAME"] = "NAME";
    CustomerSavedSearchSortKeys2["ID"] = "ID";
    CustomerSavedSearchSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CustomerSavedSearchSortKeys2;
  })(CustomerSavedSearchSortKeys || {});
  var CustomerSegmentMembersQueryUserErrorCode = /* @__PURE__ */ ((CustomerSegmentMembersQueryUserErrorCode2) => {
    CustomerSegmentMembersQueryUserErrorCode2["INVALID"] = "INVALID";
    return CustomerSegmentMembersQueryUserErrorCode2;
  })(CustomerSegmentMembersQueryUserErrorCode || {});
  var CustomerSmsMarketingConsentErrorCode = /* @__PURE__ */ ((CustomerSmsMarketingConsentErrorCode2) => {
    CustomerSmsMarketingConsentErrorCode2["INVALID"] = "INVALID";
    CustomerSmsMarketingConsentErrorCode2["INCLUSION"] = "INCLUSION";
    CustomerSmsMarketingConsentErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    CustomerSmsMarketingConsentErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    return CustomerSmsMarketingConsentErrorCode2;
  })(CustomerSmsMarketingConsentErrorCode || {});
  var CustomerSmsMarketingState = /* @__PURE__ */ ((CustomerSmsMarketingState2) => {
    CustomerSmsMarketingState2["NOT_SUBSCRIBED"] = "NOT_SUBSCRIBED";
    CustomerSmsMarketingState2["PENDING"] = "PENDING";
    CustomerSmsMarketingState2["SUBSCRIBED"] = "SUBSCRIBED";
    CustomerSmsMarketingState2["UNSUBSCRIBED"] = "UNSUBSCRIBED";
    CustomerSmsMarketingState2["REDACTED"] = "REDACTED";
    return CustomerSmsMarketingState2;
  })(CustomerSmsMarketingState || {});
  var CustomerSortKeys = /* @__PURE__ */ ((CustomerSortKeys2) => {
    CustomerSortKeys2["CREATED_AT"] = "CREATED_AT";
    CustomerSortKeys2["NAME"] = "NAME";
    CustomerSortKeys2["LOCATION"] = "LOCATION";
    CustomerSortKeys2["ORDERS_COUNT"] = "ORDERS_COUNT";
    CustomerSortKeys2["LAST_ORDER_DATE"] = "LAST_ORDER_DATE";
    CustomerSortKeys2["TOTAL_SPENT"] = "TOTAL_SPENT";
    CustomerSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    CustomerSortKeys2["ID"] = "ID";
    CustomerSortKeys2["RELEVANCE"] = "RELEVANCE";
    return CustomerSortKeys2;
  })(CustomerSortKeys || {});
  var CustomerState = /* @__PURE__ */ ((CustomerState2) => {
    CustomerState2["DECLINED"] = "DECLINED";
    CustomerState2["DISABLED"] = "DISABLED";
    CustomerState2["ENABLED"] = "ENABLED";
    CustomerState2["INVITED"] = "INVITED";
    return CustomerState2;
  })(CustomerState || {});
  var DayOfTheWeek = /* @__PURE__ */ ((DayOfTheWeek2) => {
    DayOfTheWeek2["MONDAY"] = "MONDAY";
    DayOfTheWeek2["TUESDAY"] = "TUESDAY";
    DayOfTheWeek2["WEDNESDAY"] = "WEDNESDAY";
    DayOfTheWeek2["THURSDAY"] = "THURSDAY";
    DayOfTheWeek2["FRIDAY"] = "FRIDAY";
    DayOfTheWeek2["SATURDAY"] = "SATURDAY";
    DayOfTheWeek2["SUNDAY"] = "SUNDAY";
    return DayOfTheWeek2;
  })(DayOfTheWeek || {});
  var DelegateAccessTokenCreateUserErrorCode = /* @__PURE__ */ ((DelegateAccessTokenCreateUserErrorCode2) => {
    DelegateAccessTokenCreateUserErrorCode2["EMPTY_ACCESS_SCOPE"] = "EMPTY_ACCESS_SCOPE";
    DelegateAccessTokenCreateUserErrorCode2["DELEGATE_ACCESS_TOKEN"] = "DELEGATE_ACCESS_TOKEN";
    DelegateAccessTokenCreateUserErrorCode2["NEGATIVE_EXPIRES_IN"] = "NEGATIVE_EXPIRES_IN";
    DelegateAccessTokenCreateUserErrorCode2["EXPIRES_AFTER_PARENT"] = "EXPIRES_AFTER_PARENT";
    DelegateAccessTokenCreateUserErrorCode2["REFRESH_TOKEN"] = "REFRESH_TOKEN";
    DelegateAccessTokenCreateUserErrorCode2["PERSISTENCE_FAILED"] = "PERSISTENCE_FAILED";
    DelegateAccessTokenCreateUserErrorCode2["UNKNOWN_SCOPES"] = "UNKNOWN_SCOPES";
    return DelegateAccessTokenCreateUserErrorCode2;
  })(DelegateAccessTokenCreateUserErrorCode || {});
  var DeletionEventSortKeys = /* @__PURE__ */ ((DeletionEventSortKeys2) => {
    DeletionEventSortKeys2["CREATED_AT"] = "CREATED_AT";
    DeletionEventSortKeys2["ID"] = "ID";
    DeletionEventSortKeys2["RELEVANCE"] = "RELEVANCE";
    return DeletionEventSortKeys2;
  })(DeletionEventSortKeys || {});
  var DeletionEventSubjectType = /* @__PURE__ */ ((DeletionEventSubjectType2) => {
    DeletionEventSubjectType2["COLLECTION"] = "COLLECTION";
    DeletionEventSubjectType2["PRODUCT"] = "PRODUCT";
    return DeletionEventSubjectType2;
  })(DeletionEventSubjectType || {});
  var DeliveryConditionField = /* @__PURE__ */ ((DeliveryConditionField2) => {
    DeliveryConditionField2["TOTAL_WEIGHT"] = "TOTAL_WEIGHT";
    DeliveryConditionField2["TOTAL_PRICE"] = "TOTAL_PRICE";
    return DeliveryConditionField2;
  })(DeliveryConditionField || {});
  var DeliveryConditionOperator = /* @__PURE__ */ ((DeliveryConditionOperator2) => {
    DeliveryConditionOperator2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    DeliveryConditionOperator2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    return DeliveryConditionOperator2;
  })(DeliveryConditionOperator || {});
  var DeliveryLegacyModeBlockedReason = /* @__PURE__ */ ((DeliveryLegacyModeBlockedReason2) => {
    DeliveryLegacyModeBlockedReason2["MULTI_LOCATION_DISABLED"] = "MULTI_LOCATION_DISABLED";
    DeliveryLegacyModeBlockedReason2["NO_LOCATIONS_FULFILLING_ONLINE_ORDERS"] = "NO_LOCATIONS_FULFILLING_ONLINE_ORDERS";
    return DeliveryLegacyModeBlockedReason2;
  })(DeliveryLegacyModeBlockedReason || {});
  var DeliveryLocalPickupTime = /* @__PURE__ */ ((DeliveryLocalPickupTime2) => {
    DeliveryLocalPickupTime2["ONE_HOUR"] = "ONE_HOUR";
    DeliveryLocalPickupTime2["TWO_HOURS"] = "TWO_HOURS";
    DeliveryLocalPickupTime2["FOUR_HOURS"] = "FOUR_HOURS";
    DeliveryLocalPickupTime2["TWENTY_FOUR_HOURS"] = "TWENTY_FOUR_HOURS";
    DeliveryLocalPickupTime2["TWO_TO_FOUR_DAYS"] = "TWO_TO_FOUR_DAYS";
    DeliveryLocalPickupTime2["FIVE_OR_MORE_DAYS"] = "FIVE_OR_MORE_DAYS";
    return DeliveryLocalPickupTime2;
  })(DeliveryLocalPickupTime || {});
  var DeliveryLocationLocalPickupSettingsErrorCode = /* @__PURE__ */ ((DeliveryLocationLocalPickupSettingsErrorCode2) => {
    DeliveryLocationLocalPickupSettingsErrorCode2["ACTIVE_LOCATION_NOT_FOUND"] = "ACTIVE_LOCATION_NOT_FOUND";
    DeliveryLocationLocalPickupSettingsErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    return DeliveryLocationLocalPickupSettingsErrorCode2;
  })(DeliveryLocationLocalPickupSettingsErrorCode || {});
  var DeliveryMethodDefinitionType = /* @__PURE__ */ ((DeliveryMethodDefinitionType2) => {
    DeliveryMethodDefinitionType2["MERCHANT"] = "MERCHANT";
    DeliveryMethodDefinitionType2["PARTICIPANT"] = "PARTICIPANT";
    return DeliveryMethodDefinitionType2;
  })(DeliveryMethodDefinitionType || {});
  var DeliveryMethodType = /* @__PURE__ */ ((DeliveryMethodType2) => {
    DeliveryMethodType2["SHIPPING"] = "SHIPPING";
    DeliveryMethodType2["PICK_UP"] = "PICK_UP";
    DeliveryMethodType2["NONE"] = "NONE";
    DeliveryMethodType2["RETAIL"] = "RETAIL";
    DeliveryMethodType2["LOCAL"] = "LOCAL";
    return DeliveryMethodType2;
  })(DeliveryMethodType || {});
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
  var DiscountApplicationLevel = /* @__PURE__ */ ((DiscountApplicationLevel2) => {
    DiscountApplicationLevel2["ORDER"] = "ORDER";
    DiscountApplicationLevel2["LINE"] = "LINE";
    return DiscountApplicationLevel2;
  })(DiscountApplicationLevel || {});
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
  var DiscountClass = /* @__PURE__ */ ((DiscountClass2) => {
    DiscountClass2["PRODUCT"] = "PRODUCT";
    DiscountClass2["ORDER"] = "ORDER";
    DiscountClass2["SHIPPING"] = "SHIPPING";
    return DiscountClass2;
  })(DiscountClass || {});
  var DiscountCodeSortKeys = /* @__PURE__ */ ((DiscountCodeSortKeys2) => {
    DiscountCodeSortKeys2["CODE"] = "CODE";
    DiscountCodeSortKeys2["CREATED_AT"] = "CREATED_AT";
    DiscountCodeSortKeys2["ID"] = "ID";
    DiscountCodeSortKeys2["RELEVANCE"] = "RELEVANCE";
    return DiscountCodeSortKeys2;
  })(DiscountCodeSortKeys || {});
  var DiscountErrorCode = /* @__PURE__ */ ((DiscountErrorCode2) => {
    DiscountErrorCode2["BLANK"] = "BLANK";
    DiscountErrorCode2["PRESENT"] = "PRESENT";
    DiscountErrorCode2["EQUAL_TO"] = "EQUAL_TO";
    DiscountErrorCode2["GREATER_THAN"] = "GREATER_THAN";
    DiscountErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    DiscountErrorCode2["INVALID"] = "INVALID";
    DiscountErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    DiscountErrorCode2["LESS_THAN"] = "LESS_THAN";
    DiscountErrorCode2["TAKEN"] = "TAKEN";
    DiscountErrorCode2["TOO_LONG"] = "TOO_LONG";
    DiscountErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    DiscountErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    DiscountErrorCode2["TOO_MANY_ARGUMENTS"] = "TOO_MANY_ARGUMENTS";
    DiscountErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    DiscountErrorCode2["VALUE_OUTSIDE_RANGE"] = "VALUE_OUTSIDE_RANGE";
    DiscountErrorCode2["ACTIVE_PERIOD_OVERLAP"] = "ACTIVE_PERIOD_OVERLAP";
    DiscountErrorCode2["EXCEEDED_MAX"] = "EXCEEDED_MAX";
    DiscountErrorCode2["MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT"] = "MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT";
    DiscountErrorCode2["CONFLICT"] = "CONFLICT";
    DiscountErrorCode2["IMPLICIT_DUPLICATE"] = "IMPLICIT_DUPLICATE";
    DiscountErrorCode2["DUPLICATE"] = "DUPLICATE";
    DiscountErrorCode2["INCLUSION"] = "INCLUSION";
    DiscountErrorCode2["INVALID_COMBINES_WITH_FOR_DISCOUNT_CLASS"] = "INVALID_COMBINES_WITH_FOR_DISCOUNT_CLASS";
    DiscountErrorCode2["INVALID_DISCOUNT_CLASS_FOR_PRICE_RULE"] = "INVALID_DISCOUNT_CLASS_FOR_PRICE_RULE";
    DiscountErrorCode2["MAX_APP_DISCOUNTS"] = "MAX_APP_DISCOUNTS";
    return DiscountErrorCode2;
  })(DiscountErrorCode || {});
  var DiscountShareableUrlTargetType = /* @__PURE__ */ ((DiscountShareableUrlTargetType2) => {
    DiscountShareableUrlTargetType2["HOME"] = "HOME";
    DiscountShareableUrlTargetType2["PRODUCT"] = "PRODUCT";
    DiscountShareableUrlTargetType2["COLLECTION"] = "COLLECTION";
    return DiscountShareableUrlTargetType2;
  })(DiscountShareableUrlTargetType || {});
  var DiscountSortKeys = /* @__PURE__ */ ((DiscountSortKeys2) => {
    DiscountSortKeys2["STARTS_AT"] = "STARTS_AT";
    DiscountSortKeys2["ENDS_AT"] = "ENDS_AT";
    DiscountSortKeys2["TITLE"] = "TITLE";
    DiscountSortKeys2["CREATED_AT"] = "CREATED_AT";
    DiscountSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    DiscountSortKeys2["ID"] = "ID";
    DiscountSortKeys2["RELEVANCE"] = "RELEVANCE";
    return DiscountSortKeys2;
  })(DiscountSortKeys || {});
  var DiscountStatus = /* @__PURE__ */ ((DiscountStatus2) => {
    DiscountStatus2["ACTIVE"] = "ACTIVE";
    DiscountStatus2["EXPIRED"] = "EXPIRED";
    DiscountStatus2["SCHEDULED"] = "SCHEDULED";
    return DiscountStatus2;
  })(DiscountStatus || {});
  var DiscountTargetType = /* @__PURE__ */ ((DiscountTargetType2) => {
    DiscountTargetType2["LINE_ITEM"] = "LINE_ITEM";
    DiscountTargetType2["SHIPPING_LINE"] = "SHIPPING_LINE";
    return DiscountTargetType2;
  })(DiscountTargetType || {});
  var DiscountType = /* @__PURE__ */ ((DiscountType2) => {
    DiscountType2["MANUAL"] = "MANUAL";
    DiscountType2["CODE_DISCOUNT"] = "CODE_DISCOUNT";
    return DiscountType2;
  })(DiscountType || {});
  var DisputeEvidenceUpdateUserErrorCode = /* @__PURE__ */ ((DisputeEvidenceUpdateUserErrorCode2) => {
    DisputeEvidenceUpdateUserErrorCode2["DISPUTE_EVIDENCE_NOT_FOUND"] = "DISPUTE_EVIDENCE_NOT_FOUND";
    DisputeEvidenceUpdateUserErrorCode2["EVIDENCE_ALREADY_ACCEPTED"] = "EVIDENCE_ALREADY_ACCEPTED";
    DisputeEvidenceUpdateUserErrorCode2["EVIDENCE_PAST_DUE_DATE"] = "EVIDENCE_PAST_DUE_DATE";
    DisputeEvidenceUpdateUserErrorCode2["FILES_SIZE_EXCEEDED_LIMIT"] = "FILES_SIZE_EXCEEDED_LIMIT";
    DisputeEvidenceUpdateUserErrorCode2["TOO_LARGE"] = "TOO_LARGE";
    DisputeEvidenceUpdateUserErrorCode2["INVALID"] = "INVALID";
    return DisputeEvidenceUpdateUserErrorCode2;
  })(DisputeEvidenceUpdateUserErrorCode || {});
  var DisputeStatus = /* @__PURE__ */ ((DisputeStatus2) => {
    DisputeStatus2["NEEDS_RESPONSE"] = "NEEDS_RESPONSE";
    DisputeStatus2["UNDER_REVIEW"] = "UNDER_REVIEW";
    DisputeStatus2["CHARGE_REFUNDED"] = "CHARGE_REFUNDED";
    DisputeStatus2["ACCEPTED"] = "ACCEPTED";
    DisputeStatus2["WON"] = "WON";
    DisputeStatus2["LOST"] = "LOST";
    return DisputeStatus2;
  })(DisputeStatus || {});
  var DisputeType = /* @__PURE__ */ ((DisputeType2) => {
    DisputeType2["CHARGEBACK"] = "CHARGEBACK";
    DisputeType2["INQUIRY"] = "INQUIRY";
    return DisputeType2;
  })(DisputeType || {});
  var DraftOrderAppliedDiscountType = /* @__PURE__ */ ((DraftOrderAppliedDiscountType2) => {
    DraftOrderAppliedDiscountType2["FIXED_AMOUNT"] = "FIXED_AMOUNT";
    DraftOrderAppliedDiscountType2["PERCENTAGE"] = "PERCENTAGE";
    return DraftOrderAppliedDiscountType2;
  })(DraftOrderAppliedDiscountType || {});
  var DraftOrderSortKeys = /* @__PURE__ */ ((DraftOrderSortKeys2) => {
    DraftOrderSortKeys2["NUMBER"] = "NUMBER";
    DraftOrderSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    DraftOrderSortKeys2["STATUS"] = "STATUS";
    DraftOrderSortKeys2["TOTAL_PRICE"] = "TOTAL_PRICE";
    DraftOrderSortKeys2["CUSTOMER_NAME"] = "CUSTOMER_NAME";
    DraftOrderSortKeys2["ID"] = "ID";
    DraftOrderSortKeys2["RELEVANCE"] = "RELEVANCE";
    return DraftOrderSortKeys2;
  })(DraftOrderSortKeys || {});
  var DraftOrderStatus = /* @__PURE__ */ ((DraftOrderStatus2) => {
    DraftOrderStatus2["COMPLETED"] = "COMPLETED";
    DraftOrderStatus2["INVOICE_SENT"] = "INVOICE_SENT";
    DraftOrderStatus2["OPEN"] = "OPEN";
    return DraftOrderStatus2;
  })(DraftOrderStatus || {});
  var ErrorsWebPixelUserErrorCode = /* @__PURE__ */ ((ErrorsWebPixelUserErrorCode2) => {
    ErrorsWebPixelUserErrorCode2["BLANK"] = "BLANK";
    ErrorsWebPixelUserErrorCode2["TAKEN"] = "TAKEN";
    ErrorsWebPixelUserErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    ErrorsWebPixelUserErrorCode2["INVALID_SETTINGS"] = "INVALID_SETTINGS";
    ErrorsWebPixelUserErrorCode2["UNABLE_TO_DELETE"] = "UNABLE_TO_DELETE";
    return ErrorsWebPixelUserErrorCode2;
  })(ErrorsWebPixelUserErrorCode || {});
  var EventSortKeys = /* @__PURE__ */ ((EventSortKeys2) => {
    EventSortKeys2["CREATED_AT"] = "CREATED_AT";
    EventSortKeys2["ID"] = "ID";
    EventSortKeys2["RELEVANCE"] = "RELEVANCE";
    return EventSortKeys2;
  })(EventSortKeys || {});
  var FileContentType = /* @__PURE__ */ ((FileContentType2) => {
    FileContentType2["IMAGE"] = "IMAGE";
    FileContentType2["FILE"] = "FILE";
    FileContentType2["VIDEO"] = "VIDEO";
    return FileContentType2;
  })(FileContentType || {});
  var FileErrorCode = /* @__PURE__ */ ((FileErrorCode2) => {
    FileErrorCode2["UNKNOWN"] = "UNKNOWN";
    FileErrorCode2["INVALID_SIGNED_URL"] = "INVALID_SIGNED_URL";
    FileErrorCode2["IMAGE_DOWNLOAD_FAILURE"] = "IMAGE_DOWNLOAD_FAILURE";
    FileErrorCode2["IMAGE_PROCESSING_FAILURE"] = "IMAGE_PROCESSING_FAILURE";
    FileErrorCode2["MEDIA_TIMEOUT_ERROR"] = "MEDIA_TIMEOUT_ERROR";
    FileErrorCode2["EXTERNAL_VIDEO_NOT_FOUND"] = "EXTERNAL_VIDEO_NOT_FOUND";
    FileErrorCode2["EXTERNAL_VIDEO_UNLISTED"] = "EXTERNAL_VIDEO_UNLISTED";
    FileErrorCode2["EXTERNAL_VIDEO_INVALID_ASPECT_RATIO"] = "EXTERNAL_VIDEO_INVALID_ASPECT_RATIO";
    FileErrorCode2["EXTERNAL_VIDEO_EMBED_DISABLED"] = "EXTERNAL_VIDEO_EMBED_DISABLED";
    FileErrorCode2["EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING"] = "EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING";
    FileErrorCode2["GENERIC_FILE_DOWNLOAD_FAILURE"] = "GENERIC_FILE_DOWNLOAD_FAILURE";
    FileErrorCode2["GENERIC_FILE_INVALID_SIZE"] = "GENERIC_FILE_INVALID_SIZE";
    FileErrorCode2["VIDEO_METADATA_READ_ERROR"] = "VIDEO_METADATA_READ_ERROR";
    FileErrorCode2["VIDEO_INVALID_FILETYPE_ERROR"] = "VIDEO_INVALID_FILETYPE_ERROR";
    FileErrorCode2["VIDEO_MIN_WIDTH_ERROR"] = "VIDEO_MIN_WIDTH_ERROR";
    FileErrorCode2["VIDEO_MAX_WIDTH_ERROR"] = "VIDEO_MAX_WIDTH_ERROR";
    FileErrorCode2["VIDEO_MIN_HEIGHT_ERROR"] = "VIDEO_MIN_HEIGHT_ERROR";
    FileErrorCode2["VIDEO_MAX_HEIGHT_ERROR"] = "VIDEO_MAX_HEIGHT_ERROR";
    FileErrorCode2["VIDEO_MIN_DURATION_ERROR"] = "VIDEO_MIN_DURATION_ERROR";
    FileErrorCode2["VIDEO_MAX_DURATION_ERROR"] = "VIDEO_MAX_DURATION_ERROR";
    FileErrorCode2["VIDEO_VALIDATION_ERROR"] = "VIDEO_VALIDATION_ERROR";
    FileErrorCode2["MODEL3D_VALIDATION_ERROR"] = "MODEL3D_VALIDATION_ERROR";
    FileErrorCode2["MODEL3D_THUMBNAIL_GENERATION_ERROR"] = "MODEL3D_THUMBNAIL_GENERATION_ERROR";
    FileErrorCode2["MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR"] = "MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR";
    FileErrorCode2["MODEL3D_GLB_OUTPUT_CREATION_ERROR"] = "MODEL3D_GLB_OUTPUT_CREATION_ERROR";
    FileErrorCode2["MODEL3D_PROCESSING_FAILURE"] = "MODEL3D_PROCESSING_FAILURE";
    FileErrorCode2["UNSUPPORTED_IMAGE_FILE_TYPE"] = "UNSUPPORTED_IMAGE_FILE_TYPE";
    FileErrorCode2["INVALID_IMAGE_FILE_SIZE"] = "INVALID_IMAGE_FILE_SIZE";
    FileErrorCode2["INVALID_IMAGE_ASPECT_RATIO"] = "INVALID_IMAGE_ASPECT_RATIO";
    FileErrorCode2["INVALID_IMAGE_RESOLUTION"] = "INVALID_IMAGE_RESOLUTION";
    FileErrorCode2["FILE_STORAGE_LIMIT_EXCEEDED"] = "FILE_STORAGE_LIMIT_EXCEEDED";
    return FileErrorCode2;
  })(FileErrorCode || {});
  var FileSortKeys = /* @__PURE__ */ ((FileSortKeys2) => {
    FileSortKeys2["FILENAME"] = "FILENAME";
    FileSortKeys2["ORIGINAL_UPLOAD_SIZE"] = "ORIGINAL_UPLOAD_SIZE";
    FileSortKeys2["CREATED_AT"] = "CREATED_AT";
    FileSortKeys2["ID"] = "ID";
    FileSortKeys2["RELEVANCE"] = "RELEVANCE";
    return FileSortKeys2;
  })(FileSortKeys || {});
  var FileStatus = /* @__PURE__ */ ((FileStatus2) => {
    FileStatus2["UPLOADED"] = "UPLOADED";
    FileStatus2["PROCESSING"] = "PROCESSING";
    FileStatus2["READY"] = "READY";
    FileStatus2["FAILED"] = "FAILED";
    return FileStatus2;
  })(FileStatus || {});
  var FilesErrorCode = /* @__PURE__ */ ((FilesErrorCode2) => {
    FilesErrorCode2["INVALID"] = "INVALID";
    FilesErrorCode2["FILE_DOES_NOT_EXIST"] = "FILE_DOES_NOT_EXIST";
    FilesErrorCode2["FILE_LOCKED"] = "FILE_LOCKED";
    FilesErrorCode2["TOO_MANY_ARGUMENTS"] = "TOO_MANY_ARGUMENTS";
    FilesErrorCode2["BLANK_SEARCH"] = "BLANK_SEARCH";
    FilesErrorCode2["MISSING_ARGUMENTS"] = "MISSING_ARGUMENTS";
    FilesErrorCode2["INVALID_QUERY"] = "INVALID_QUERY";
    FilesErrorCode2["UNACCEPTABLE_UNVERIFIED_TRIAL_ASSET"] = "UNACCEPTABLE_UNVERIFIED_TRIAL_ASSET";
    FilesErrorCode2["UNACCEPTABLE_ASSET"] = "UNACCEPTABLE_ASSET";
    FilesErrorCode2["UNACCEPTABLE_TRIAL_ASSET"] = "UNACCEPTABLE_TRIAL_ASSET";
    FilesErrorCode2["ALT_VALUE_LIMIT_EXCEEDED"] = "ALT_VALUE_LIMIT_EXCEEDED";
    FilesErrorCode2["NON_IMAGE_MEDIA_PER_SHOP_LIMIT_EXCEEDED"] = "NON_IMAGE_MEDIA_PER_SHOP_LIMIT_EXCEEDED";
    return FilesErrorCode2;
  })(FilesErrorCode || {});
  var FulfillmentDisplayStatus = /* @__PURE__ */ ((FulfillmentDisplayStatus2) => {
    FulfillmentDisplayStatus2["ATTEMPTED_DELIVERY"] = "ATTEMPTED_DELIVERY";
    FulfillmentDisplayStatus2["CANCELED"] = "CANCELED";
    FulfillmentDisplayStatus2["CONFIRMED"] = "CONFIRMED";
    FulfillmentDisplayStatus2["DELIVERED"] = "DELIVERED";
    FulfillmentDisplayStatus2["FAILURE"] = "FAILURE";
    FulfillmentDisplayStatus2["FULFILLED"] = "FULFILLED";
    FulfillmentDisplayStatus2["IN_TRANSIT"] = "IN_TRANSIT";
    FulfillmentDisplayStatus2["LABEL_PRINTED"] = "LABEL_PRINTED";
    FulfillmentDisplayStatus2["LABEL_PURCHASED"] = "LABEL_PURCHASED";
    FulfillmentDisplayStatus2["LABEL_VOIDED"] = "LABEL_VOIDED";
    FulfillmentDisplayStatus2["MARKED_AS_FULFILLED"] = "MARKED_AS_FULFILLED";
    FulfillmentDisplayStatus2["NOT_DELIVERED"] = "NOT_DELIVERED";
    FulfillmentDisplayStatus2["OUT_FOR_DELIVERY"] = "OUT_FOR_DELIVERY";
    FulfillmentDisplayStatus2["READY_FOR_PICKUP"] = "READY_FOR_PICKUP";
    FulfillmentDisplayStatus2["PICKED_UP"] = "PICKED_UP";
    FulfillmentDisplayStatus2["SUBMITTED"] = "SUBMITTED";
    return FulfillmentDisplayStatus2;
  })(FulfillmentDisplayStatus || {});
  var FulfillmentEventSortKeys = /* @__PURE__ */ ((FulfillmentEventSortKeys2) => {
    FulfillmentEventSortKeys2["HAPPENED_AT"] = "HAPPENED_AT";
    FulfillmentEventSortKeys2["ID"] = "ID";
    FulfillmentEventSortKeys2["RELEVANCE"] = "RELEVANCE";
    return FulfillmentEventSortKeys2;
  })(FulfillmentEventSortKeys || {});
  var FulfillmentEventStatus = /* @__PURE__ */ ((FulfillmentEventStatus2) => {
    FulfillmentEventStatus2["LABEL_PURCHASED"] = "LABEL_PURCHASED";
    FulfillmentEventStatus2["LABEL_PRINTED"] = "LABEL_PRINTED";
    FulfillmentEventStatus2["READY_FOR_PICKUP"] = "READY_FOR_PICKUP";
    FulfillmentEventStatus2["CONFIRMED"] = "CONFIRMED";
    FulfillmentEventStatus2["IN_TRANSIT"] = "IN_TRANSIT";
    FulfillmentEventStatus2["OUT_FOR_DELIVERY"] = "OUT_FOR_DELIVERY";
    FulfillmentEventStatus2["ATTEMPTED_DELIVERY"] = "ATTEMPTED_DELIVERY";
    FulfillmentEventStatus2["DELIVERED"] = "DELIVERED";
    FulfillmentEventStatus2["FAILURE"] = "FAILURE";
    return FulfillmentEventStatus2;
  })(FulfillmentEventStatus || {});
  var FulfillmentHoldReason = /* @__PURE__ */ ((FulfillmentHoldReason2) => {
    FulfillmentHoldReason2["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    FulfillmentHoldReason2["HIGH_RISK_OF_FRAUD"] = "HIGH_RISK_OF_FRAUD";
    FulfillmentHoldReason2["INCORRECT_ADDRESS"] = "INCORRECT_ADDRESS";
    FulfillmentHoldReason2["INVENTORY_OUT_OF_STOCK"] = "INVENTORY_OUT_OF_STOCK";
    FulfillmentHoldReason2["UNKNOWN_DELIVERY_DATE"] = "UNKNOWN_DELIVERY_DATE";
    FulfillmentHoldReason2["OTHER"] = "OTHER";
    return FulfillmentHoldReason2;
  })(FulfillmentHoldReason || {});
  var FulfillmentOrderAction = /* @__PURE__ */ ((FulfillmentOrderAction2) => {
    FulfillmentOrderAction2["CREATE_FULFILLMENT"] = "CREATE_FULFILLMENT";
    FulfillmentOrderAction2["REQUEST_FULFILLMENT"] = "REQUEST_FULFILLMENT";
    FulfillmentOrderAction2["CANCEL_FULFILLMENT_ORDER"] = "CANCEL_FULFILLMENT_ORDER";
    FulfillmentOrderAction2["MOVE"] = "MOVE";
    FulfillmentOrderAction2["REQUEST_CANCELLATION"] = "REQUEST_CANCELLATION";
    FulfillmentOrderAction2["MARK_AS_OPEN"] = "MARK_AS_OPEN";
    FulfillmentOrderAction2["RELEASE_HOLD"] = "RELEASE_HOLD";
    FulfillmentOrderAction2["HOLD"] = "HOLD";
    FulfillmentOrderAction2["EXTERNAL"] = "EXTERNAL";
    return FulfillmentOrderAction2;
  })(FulfillmentOrderAction || {});
  var FulfillmentOrderAssignmentStatus = /* @__PURE__ */ ((FulfillmentOrderAssignmentStatus2) => {
    FulfillmentOrderAssignmentStatus2["CANCELLATION_REQUESTED"] = "CANCELLATION_REQUESTED";
    FulfillmentOrderAssignmentStatus2["FULFILLMENT_REQUESTED"] = "FULFILLMENT_REQUESTED";
    FulfillmentOrderAssignmentStatus2["FULFILLMENT_ACCEPTED"] = "FULFILLMENT_ACCEPTED";
    return FulfillmentOrderAssignmentStatus2;
  })(FulfillmentOrderAssignmentStatus || {});
  var FulfillmentOrderHoldUserErrorCode = /* @__PURE__ */ ((FulfillmentOrderHoldUserErrorCode2) => {
    FulfillmentOrderHoldUserErrorCode2["FULFILLMENT_ORDER_NOT_FOUND"] = "FULFILLMENT_ORDER_NOT_FOUND";
    FulfillmentOrderHoldUserErrorCode2["TAKEN"] = "TAKEN";
    return FulfillmentOrderHoldUserErrorCode2;
  })(FulfillmentOrderHoldUserErrorCode || {});
  var FulfillmentOrderLineItemsPreparedForPickupUserErrorCode = /* @__PURE__ */ ((FulfillmentOrderLineItemsPreparedForPickupUserErrorCode2) => {
    FulfillmentOrderLineItemsPreparedForPickupUserErrorCode2["NO_LINE_ITEMS_TO_PREPARE_FOR_FULFILLMENT_ORDER"] = "NO_LINE_ITEMS_TO_PREPARE_FOR_FULFILLMENT_ORDER";
    FulfillmentOrderLineItemsPreparedForPickupUserErrorCode2["FULFILLMENT_ORDER_CHANGED"] = "FULFILLMENT_ORDER_CHANGED";
    FulfillmentOrderLineItemsPreparedForPickupUserErrorCode2["FULFILLMENT_ORDER_INVALID"] = "FULFILLMENT_ORDER_INVALID";
    return FulfillmentOrderLineItemsPreparedForPickupUserErrorCode2;
  })(FulfillmentOrderLineItemsPreparedForPickupUserErrorCode || {});
  var FulfillmentOrderMerchantRequestKind = /* @__PURE__ */ ((FulfillmentOrderMerchantRequestKind2) => {
    FulfillmentOrderMerchantRequestKind2["FULFILLMENT_REQUEST"] = "FULFILLMENT_REQUEST";
    FulfillmentOrderMerchantRequestKind2["CANCELLATION_REQUEST"] = "CANCELLATION_REQUEST";
    return FulfillmentOrderMerchantRequestKind2;
  })(FulfillmentOrderMerchantRequestKind || {});
  var FulfillmentOrderRejectionReason = /* @__PURE__ */ ((FulfillmentOrderRejectionReason2) => {
    FulfillmentOrderRejectionReason2["INCORRECT_ADDRESS"] = "INCORRECT_ADDRESS";
    FulfillmentOrderRejectionReason2["INVENTORY_OUT_OF_STOCK"] = "INVENTORY_OUT_OF_STOCK";
    FulfillmentOrderRejectionReason2["INELIGIBLE_PRODUCT"] = "INELIGIBLE_PRODUCT";
    FulfillmentOrderRejectionReason2["UNDELIVERABLE_DESTINATION"] = "UNDELIVERABLE_DESTINATION";
    FulfillmentOrderRejectionReason2["OTHER"] = "OTHER";
    return FulfillmentOrderRejectionReason2;
  })(FulfillmentOrderRejectionReason || {});
  var FulfillmentOrderReleaseHoldUserErrorCode = /* @__PURE__ */ ((FulfillmentOrderReleaseHoldUserErrorCode2) => {
    FulfillmentOrderReleaseHoldUserErrorCode2["FULFILLMENT_ORDER_NOT_FOUND"] = "FULFILLMENT_ORDER_NOT_FOUND";
    return FulfillmentOrderReleaseHoldUserErrorCode2;
  })(FulfillmentOrderReleaseHoldUserErrorCode || {});
  var FulfillmentOrderRequestStatus = /* @__PURE__ */ ((FulfillmentOrderRequestStatus2) => {
    FulfillmentOrderRequestStatus2["UNSUBMITTED"] = "UNSUBMITTED";
    FulfillmentOrderRequestStatus2["SUBMITTED"] = "SUBMITTED";
    FulfillmentOrderRequestStatus2["ACCEPTED"] = "ACCEPTED";
    FulfillmentOrderRequestStatus2["REJECTED"] = "REJECTED";
    FulfillmentOrderRequestStatus2["CANCELLATION_REQUESTED"] = "CANCELLATION_REQUESTED";
    FulfillmentOrderRequestStatus2["CANCELLATION_ACCEPTED"] = "CANCELLATION_ACCEPTED";
    FulfillmentOrderRequestStatus2["CANCELLATION_REJECTED"] = "CANCELLATION_REJECTED";
    FulfillmentOrderRequestStatus2["CLOSED"] = "CLOSED";
    return FulfillmentOrderRequestStatus2;
  })(FulfillmentOrderRequestStatus || {});
  var FulfillmentOrderRescheduleUserErrorCode = /* @__PURE__ */ ((FulfillmentOrderRescheduleUserErrorCode2) => {
    FulfillmentOrderRescheduleUserErrorCode2["FULFILLMENT_ORDER_NOT_FOUND"] = "FULFILLMENT_ORDER_NOT_FOUND";
    return FulfillmentOrderRescheduleUserErrorCode2;
  })(FulfillmentOrderRescheduleUserErrorCode || {});
  var FulfillmentOrderSortKeys = /* @__PURE__ */ ((FulfillmentOrderSortKeys2) => {
    FulfillmentOrderSortKeys2["ID"] = "ID";
    FulfillmentOrderSortKeys2["RELEVANCE"] = "RELEVANCE";
    return FulfillmentOrderSortKeys2;
  })(FulfillmentOrderSortKeys || {});
  var FulfillmentOrderStatus = /* @__PURE__ */ ((FulfillmentOrderStatus2) => {
    FulfillmentOrderStatus2["OPEN"] = "OPEN";
    FulfillmentOrderStatus2["IN_PROGRESS"] = "IN_PROGRESS";
    FulfillmentOrderStatus2["CANCELLED"] = "CANCELLED";
    FulfillmentOrderStatus2["INCOMPLETE"] = "INCOMPLETE";
    FulfillmentOrderStatus2["CLOSED"] = "CLOSED";
    FulfillmentOrderStatus2["SCHEDULED"] = "SCHEDULED";
    FulfillmentOrderStatus2["ON_HOLD"] = "ON_HOLD";
    return FulfillmentOrderStatus2;
  })(FulfillmentOrderStatus || {});
  var FulfillmentOrdersReleaseHoldsUserErrorCode = /* @__PURE__ */ ((FulfillmentOrdersReleaseHoldsUserErrorCode2) => {
    FulfillmentOrdersReleaseHoldsUserErrorCode2["FAILED_TO_CREATE_JOB"] = "FAILED_TO_CREATE_JOB";
    return FulfillmentOrdersReleaseHoldsUserErrorCode2;
  })(FulfillmentOrdersReleaseHoldsUserErrorCode || {});
  var FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode = /* @__PURE__ */ ((FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode2) => {
    FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode2["FULFILLMENT_ORDERS_NOT_FOUND"] = "FULFILLMENT_ORDERS_NOT_FOUND";
    return FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode2;
  })(FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode || {});
  var FulfillmentServiceType = /* @__PURE__ */ ((FulfillmentServiceType2) => {
    FulfillmentServiceType2["GIFT_CARD"] = "GIFT_CARD";
    FulfillmentServiceType2["MANUAL"] = "MANUAL";
    FulfillmentServiceType2["THIRD_PARTY"] = "THIRD_PARTY";
    return FulfillmentServiceType2;
  })(FulfillmentServiceType || {});
  var FulfillmentStatus = /* @__PURE__ */ ((FulfillmentStatus2) => {
    FulfillmentStatus2["PENDING"] = "PENDING";
    FulfillmentStatus2["OPEN"] = "OPEN";
    FulfillmentStatus2["SUCCESS"] = "SUCCESS";
    FulfillmentStatus2["CANCELLED"] = "CANCELLED";
    FulfillmentStatus2["ERROR"] = "ERROR";
    FulfillmentStatus2["FAILURE"] = "FAILURE";
    return FulfillmentStatus2;
  })(FulfillmentStatus || {});
  var GiftCardErrorCode = /* @__PURE__ */ ((GiftCardErrorCode2) => {
    GiftCardErrorCode2["TOO_LONG"] = "TOO_LONG";
    GiftCardErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    GiftCardErrorCode2["TAKEN"] = "TAKEN";
    GiftCardErrorCode2["INVALID"] = "INVALID";
    GiftCardErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    GiftCardErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    GiftCardErrorCode2["GREATER_THAN"] = "GREATER_THAN";
    return GiftCardErrorCode2;
  })(GiftCardErrorCode || {});
  var GiftCardSortKeys = /* @__PURE__ */ ((GiftCardSortKeys2) => {
    GiftCardSortKeys2["CREATED_AT"] = "CREATED_AT";
    GiftCardSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    GiftCardSortKeys2["CUSTOMER_NAME"] = "CUSTOMER_NAME";
    GiftCardSortKeys2["CODE"] = "CODE";
    GiftCardSortKeys2["BALANCE"] = "BALANCE";
    GiftCardSortKeys2["AMOUNT_SPENT"] = "AMOUNT_SPENT";
    GiftCardSortKeys2["INITIAL_VALUE"] = "INITIAL_VALUE";
    GiftCardSortKeys2["DISABLED_AT"] = "DISABLED_AT";
    GiftCardSortKeys2["EXPIRES_ON"] = "EXPIRES_ON";
    GiftCardSortKeys2["ID"] = "ID";
    GiftCardSortKeys2["RELEVANCE"] = "RELEVANCE";
    return GiftCardSortKeys2;
  })(GiftCardSortKeys || {});
  var ImageContentType = /* @__PURE__ */ ((ImageContentType2) => {
    ImageContentType2["PNG"] = "PNG";
    ImageContentType2["JPG"] = "JPG";
    ImageContentType2["WEBP"] = "WEBP";
    return ImageContentType2;
  })(ImageContentType || {});
  var InventoryAdjustQuantitiesUserErrorCode = /* @__PURE__ */ ((InventoryAdjustQuantitiesUserErrorCode2) => {
    InventoryAdjustQuantitiesUserErrorCode2["INTERNAL_LEDGER_DOCUMENT"] = "INTERNAL_LEDGER_DOCUMENT";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_AVAILABLE_DOCUMENT"] = "INVALID_AVAILABLE_DOCUMENT";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_INVENTORY_ITEM"] = "INVALID_INVENTORY_ITEM";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_LEDGER_DOCUMENT"] = "INVALID_LEDGER_DOCUMENT";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_LOCATION"] = "INVALID_LOCATION";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_QUANTITY_DOCUMENT"] = "INVALID_QUANTITY_DOCUMENT";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_QUANTITY_NAME"] = "INVALID_QUANTITY_NAME";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_QUANTITY_TOO_LOW"] = "INVALID_QUANTITY_TOO_LOW";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_QUANTITY_TOO_HIGH"] = "INVALID_QUANTITY_TOO_HIGH";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_REASON"] = "INVALID_REASON";
    InventoryAdjustQuantitiesUserErrorCode2["INVALID_REFERENCE_DOCUMENT"] = "INVALID_REFERENCE_DOCUMENT";
    InventoryAdjustQuantitiesUserErrorCode2["ADJUST_QUANTITIES_FAILED"] = "ADJUST_QUANTITIES_FAILED";
    InventoryAdjustQuantitiesUserErrorCode2["MAX_ONE_LEDGER_DOCUMENT"] = "MAX_ONE_LEDGER_DOCUMENT";
    return InventoryAdjustQuantitiesUserErrorCode2;
  })(InventoryAdjustQuantitiesUserErrorCode || {});
  var InventoryBulkToggleActivationUserErrorCode = /* @__PURE__ */ ((InventoryBulkToggleActivationUserErrorCode2) => {
    InventoryBulkToggleActivationUserErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    InventoryBulkToggleActivationUserErrorCode2["CANNOT_DEACTIVATE_FROM_ONLY_LOCATION"] = "CANNOT_DEACTIVATE_FROM_ONLY_LOCATION";
    InventoryBulkToggleActivationUserErrorCode2["COMMITTED_AND_INCOMING_INVENTORY_AT_LOCATION"] = "COMMITTED_AND_INCOMING_INVENTORY_AT_LOCATION";
    InventoryBulkToggleActivationUserErrorCode2["INCOMING_INVENTORY_AT_LOCATION"] = "INCOMING_INVENTORY_AT_LOCATION";
    InventoryBulkToggleActivationUserErrorCode2["COMMITTED_INVENTORY_AT_LOCATION"] = "COMMITTED_INVENTORY_AT_LOCATION";
    InventoryBulkToggleActivationUserErrorCode2["FAILED_TO_UNSTOCK_FROM_LOCATION"] = "FAILED_TO_UNSTOCK_FROM_LOCATION";
    InventoryBulkToggleActivationUserErrorCode2["INVENTORY_MANAGED_BY_3RD_PARTY"] = "INVENTORY_MANAGED_BY_3RD_PARTY";
    InventoryBulkToggleActivationUserErrorCode2["INVENTORY_MANAGED_BY_SHOPIFY"] = "INVENTORY_MANAGED_BY_SHOPIFY";
    InventoryBulkToggleActivationUserErrorCode2["FAILED_TO_STOCK_AT_LOCATION"] = "FAILED_TO_STOCK_AT_LOCATION";
    InventoryBulkToggleActivationUserErrorCode2["MISSING_SKU"] = "MISSING_SKU";
    InventoryBulkToggleActivationUserErrorCode2["LOCATION_NOT_FOUND"] = "LOCATION_NOT_FOUND";
    InventoryBulkToggleActivationUserErrorCode2["INVENTORY_ITEM_NOT_FOUND"] = "INVENTORY_ITEM_NOT_FOUND";
    return InventoryBulkToggleActivationUserErrorCode2;
  })(InventoryBulkToggleActivationUserErrorCode || {});
  var InventoryMoveQuantitiesUserErrorCode = /* @__PURE__ */ ((InventoryMoveQuantitiesUserErrorCode2) => {
    InventoryMoveQuantitiesUserErrorCode2["INTERNAL_LEDGER_DOCUMENT"] = "INTERNAL_LEDGER_DOCUMENT";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_AVAILABLE_DOCUMENT"] = "INVALID_AVAILABLE_DOCUMENT";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_INVENTORY_ITEM"] = "INVALID_INVENTORY_ITEM";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_LEDGER_DOCUMENT"] = "INVALID_LEDGER_DOCUMENT";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_LOCATION"] = "INVALID_LOCATION";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_QUANTITY_DOCUMENT"] = "INVALID_QUANTITY_DOCUMENT";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_QUANTITY_NAME"] = "INVALID_QUANTITY_NAME";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_QUANTITY_NEGATIVE"] = "INVALID_QUANTITY_NEGATIVE";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_QUANTITY_TOO_HIGH"] = "INVALID_QUANTITY_TOO_HIGH";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_REASON"] = "INVALID_REASON";
    InventoryMoveQuantitiesUserErrorCode2["INVALID_REFERENCE_DOCUMENT"] = "INVALID_REFERENCE_DOCUMENT";
    InventoryMoveQuantitiesUserErrorCode2["MOVE_QUANTITIES_FAILED"] = "MOVE_QUANTITIES_FAILED";
    InventoryMoveQuantitiesUserErrorCode2["DIFFERENT_LOCATIONS"] = "DIFFERENT_LOCATIONS";
    InventoryMoveQuantitiesUserErrorCode2["SAME_QUANTITY_NAME"] = "SAME_QUANTITY_NAME";
    InventoryMoveQuantitiesUserErrorCode2["MAXIMUM_LEDGER_DOCUMENT_URIS"] = "MAXIMUM_LEDGER_DOCUMENT_URIS";
    return InventoryMoveQuantitiesUserErrorCode2;
  })(InventoryMoveQuantitiesUserErrorCode || {});
  var InventorySetOnHandQuantitiesUserErrorCode = /* @__PURE__ */ ((InventorySetOnHandQuantitiesUserErrorCode2) => {
    InventorySetOnHandQuantitiesUserErrorCode2["INVALID_INVENTORY_ITEM"] = "INVALID_INVENTORY_ITEM";
    InventorySetOnHandQuantitiesUserErrorCode2["INVALID_LOCATION"] = "INVALID_LOCATION";
    InventorySetOnHandQuantitiesUserErrorCode2["INVALID_QUANTITY_NEGATIVE"] = "INVALID_QUANTITY_NEGATIVE";
    InventorySetOnHandQuantitiesUserErrorCode2["INVALID_QUANTITY_TOO_HIGH"] = "INVALID_QUANTITY_TOO_HIGH";
    InventorySetOnHandQuantitiesUserErrorCode2["INVALID_REASON"] = "INVALID_REASON";
    InventorySetOnHandQuantitiesUserErrorCode2["INVALID_REFERENCE_DOCUMENT"] = "INVALID_REFERENCE_DOCUMENT";
    InventorySetOnHandQuantitiesUserErrorCode2["SET_ON_HAND_QUANTITIES_FAILED"] = "SET_ON_HAND_QUANTITIES_FAILED";
    return InventorySetOnHandQuantitiesUserErrorCode2;
  })(InventorySetOnHandQuantitiesUserErrorCode || {});
  var LengthUnit = /* @__PURE__ */ ((LengthUnit2) => {
    LengthUnit2["MILLIMETERS"] = "MILLIMETERS";
    LengthUnit2["CENTIMETERS"] = "CENTIMETERS";
    LengthUnit2["METERS"] = "METERS";
    LengthUnit2["INCHES"] = "INCHES";
    LengthUnit2["FEET"] = "FEET";
    LengthUnit2["YARDS"] = "YARDS";
    return LengthUnit2;
  })(LengthUnit || {});
  var LocalizationExtensionKey = /* @__PURE__ */ ((LocalizationExtensionKey2) => {
    LocalizationExtensionKey2["TAX_CREDENTIAL_BR"] = "TAX_CREDENTIAL_BR";
    LocalizationExtensionKey2["SHIPPING_CREDENTIAL_BR"] = "SHIPPING_CREDENTIAL_BR";
    LocalizationExtensionKey2["SHIPPING_CREDENTIAL_CN"] = "SHIPPING_CREDENTIAL_CN";
    LocalizationExtensionKey2["TAX_CREDENTIAL_IT"] = "TAX_CREDENTIAL_IT";
    LocalizationExtensionKey2["TAX_EMAIL_IT"] = "TAX_EMAIL_IT";
    LocalizationExtensionKey2["SHIPPING_CREDENTIAL_KR"] = "SHIPPING_CREDENTIAL_KR";
    return LocalizationExtensionKey2;
  })(LocalizationExtensionKey || {});
  var LocalizationExtensionPurpose = /* @__PURE__ */ ((LocalizationExtensionPurpose2) => {
    LocalizationExtensionPurpose2["SHIPPING"] = "SHIPPING";
    LocalizationExtensionPurpose2["TAX"] = "TAX";
    return LocalizationExtensionPurpose2;
  })(LocalizationExtensionPurpose || {});
  var LocationActivateUserErrorCode = /* @__PURE__ */ ((LocationActivateUserErrorCode2) => {
    LocationActivateUserErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    LocationActivateUserErrorCode2["LOCATION_LIMIT"] = "LOCATION_LIMIT";
    LocationActivateUserErrorCode2["HAS_ONGOING_RELOCATION"] = "HAS_ONGOING_RELOCATION";
    LocationActivateUserErrorCode2["LOCATION_NOT_FOUND"] = "LOCATION_NOT_FOUND";
    LocationActivateUserErrorCode2["HAS_NON_UNIQUE_NAME"] = "HAS_NON_UNIQUE_NAME";
    return LocationActivateUserErrorCode2;
  })(LocationActivateUserErrorCode || {});
  var LocationAddUserErrorCode = /* @__PURE__ */ ((LocationAddUserErrorCode2) => {
    LocationAddUserErrorCode2["INVALID"] = "INVALID";
    LocationAddUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    LocationAddUserErrorCode2["TAKEN"] = "TAKEN";
    LocationAddUserErrorCode2["BLANK"] = "BLANK";
    LocationAddUserErrorCode2["INVALID_US_ZIPCODE"] = "INVALID_US_ZIPCODE";
    LocationAddUserErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    return LocationAddUserErrorCode2;
  })(LocationAddUserErrorCode || {});
  var LocationDeactivateUserErrorCode = /* @__PURE__ */ ((LocationDeactivateUserErrorCode2) => {
    LocationDeactivateUserErrorCode2["LOCATION_NOT_FOUND"] = "LOCATION_NOT_FOUND";
    LocationDeactivateUserErrorCode2["PERMANENTLY_BLOCKED_FROM_DEACTIVATION_ERROR"] = "PERMANENTLY_BLOCKED_FROM_DEACTIVATION_ERROR";
    LocationDeactivateUserErrorCode2["TEMPORARILY_BLOCKED_FROM_DEACTIVATION_ERROR"] = "TEMPORARILY_BLOCKED_FROM_DEACTIVATION_ERROR";
    LocationDeactivateUserErrorCode2["HAS_ACTIVE_RETAIL_SUBSCRIPTIONS"] = "HAS_ACTIVE_RETAIL_SUBSCRIPTIONS";
    LocationDeactivateUserErrorCode2["DESTINATION_LOCATION_IS_THE_SAME_LOCATION"] = "DESTINATION_LOCATION_IS_THE_SAME_LOCATION";
    LocationDeactivateUserErrorCode2["DESTINATION_LOCATION_NOT_FOUND_OR_INACTIVE"] = "DESTINATION_LOCATION_NOT_FOUND_OR_INACTIVE";
    LocationDeactivateUserErrorCode2["HAS_ACTIVE_INVENTORY_ERROR"] = "HAS_ACTIVE_INVENTORY_ERROR";
    LocationDeactivateUserErrorCode2["HAS_FULFILLMENT_ORDERS_ERROR"] = "HAS_FULFILLMENT_ORDERS_ERROR";
    LocationDeactivateUserErrorCode2["HAS_OPEN_TRANSFERS_ERROR"] = "HAS_OPEN_TRANSFERS_ERROR";
    LocationDeactivateUserErrorCode2["HAS_INCOMING_MOVEMENTS_ERROR"] = "HAS_INCOMING_MOVEMENTS_ERROR";
    LocationDeactivateUserErrorCode2["HAS_OPEN_PURCHASE_ORDERS_ERROR"] = "HAS_OPEN_PURCHASE_ORDERS_ERROR";
    LocationDeactivateUserErrorCode2["FAILED_TO_RELOCATE_ACTIVE_INVENTORIES"] = "FAILED_TO_RELOCATE_ACTIVE_INVENTORIES";
    LocationDeactivateUserErrorCode2["FAILED_TO_RELOCATE_OPEN_TRANSFERS"] = "FAILED_TO_RELOCATE_OPEN_TRANSFERS";
    LocationDeactivateUserErrorCode2["FAILED_TO_RELOCATE_OPEN_PURCHASE_ORDERS"] = "FAILED_TO_RELOCATE_OPEN_PURCHASE_ORDERS";
    LocationDeactivateUserErrorCode2["FAILED_TO_RELOCATE_INCOMING_MOVEMENTS"] = "FAILED_TO_RELOCATE_INCOMING_MOVEMENTS";
    LocationDeactivateUserErrorCode2["CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT"] = "CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT";
    return LocationDeactivateUserErrorCode2;
  })(LocationDeactivateUserErrorCode || {});
  var LocationDeleteUserErrorCode = /* @__PURE__ */ ((LocationDeleteUserErrorCode2) => {
    LocationDeleteUserErrorCode2["LOCATION_NOT_FOUND"] = "LOCATION_NOT_FOUND";
    LocationDeleteUserErrorCode2["LOCATION_IS_ACTIVE"] = "LOCATION_IS_ACTIVE";
    LocationDeleteUserErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    LocationDeleteUserErrorCode2["LOCATION_HAS_INVENTORY"] = "LOCATION_HAS_INVENTORY";
    LocationDeleteUserErrorCode2["LOCATION_HAS_PENDING_ORDERS"] = "LOCATION_HAS_PENDING_ORDERS";
    LocationDeleteUserErrorCode2["LOCATION_HAS_ACTIVE_RETAIL_SUBSCRIPTION"] = "LOCATION_HAS_ACTIVE_RETAIL_SUBSCRIPTION";
    return LocationDeleteUserErrorCode2;
  })(LocationDeleteUserErrorCode || {});
  var LocationEditUserErrorCode = /* @__PURE__ */ ((LocationEditUserErrorCode2) => {
    LocationEditUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    LocationEditUserErrorCode2["BLANK"] = "BLANK";
    LocationEditUserErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    LocationEditUserErrorCode2["INVALID"] = "INVALID";
    LocationEditUserErrorCode2["TAKEN"] = "TAKEN";
    LocationEditUserErrorCode2["INVALID_US_ZIPCODE"] = "INVALID_US_ZIPCODE";
    LocationEditUserErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    LocationEditUserErrorCode2["CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT"] = "CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT";
    return LocationEditUserErrorCode2;
  })(LocationEditUserErrorCode || {});
  var LocationSortKeys = /* @__PURE__ */ ((LocationSortKeys2) => {
    LocationSortKeys2["NAME"] = "NAME";
    LocationSortKeys2["ID"] = "ID";
    LocationSortKeys2["RELEVANCE"] = "RELEVANCE";
    return LocationSortKeys2;
  })(LocationSortKeys || {});
  var MarketCurrencySettingsUserErrorCode = /* @__PURE__ */ ((MarketCurrencySettingsUserErrorCode2) => {
    MarketCurrencySettingsUserErrorCode2["MARKET_NOT_FOUND"] = "MARKET_NOT_FOUND";
    MarketCurrencySettingsUserErrorCode2["MANAGED_MARKET"] = "MANAGED_MARKET";
    MarketCurrencySettingsUserErrorCode2["MULTIPLE_CURRENCIES_NOT_SUPPORTED"] = "MULTIPLE_CURRENCIES_NOT_SUPPORTED";
    MarketCurrencySettingsUserErrorCode2["NO_LOCAL_CURRENCIES_ON_SINGLE_COUNTRY_MARKET"] = "NO_LOCAL_CURRENCIES_ON_SINGLE_COUNTRY_MARKET";
    MarketCurrencySettingsUserErrorCode2["UNSUPPORTED_CURRENCY"] = "UNSUPPORTED_CURRENCY";
    MarketCurrencySettingsUserErrorCode2["PRIMARY_MARKET_USES_SHOP_CURRENCY"] = "PRIMARY_MARKET_USES_SHOP_CURRENCY";
    return MarketCurrencySettingsUserErrorCode2;
  })(MarketCurrencySettingsUserErrorCode || {});
  var MarketLocalizableResourceType = /* @__PURE__ */ ((MarketLocalizableResourceType2) => {
    MarketLocalizableResourceType2["METAFIELD"] = "METAFIELD";
    return MarketLocalizableResourceType2;
  })(MarketLocalizableResourceType || {});
  var MarketUserErrorCode = /* @__PURE__ */ ((MarketUserErrorCode2) => {
    MarketUserErrorCode2["INVALID"] = "INVALID";
    MarketUserErrorCode2["TAKEN"] = "TAKEN";
    MarketUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    MarketUserErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    MarketUserErrorCode2["BLANK"] = "BLANK";
    MarketUserErrorCode2["MARKET_NOT_FOUND"] = "MARKET_NOT_FOUND";
    MarketUserErrorCode2["REGION_NOT_FOUND"] = "REGION_NOT_FOUND";
    MarketUserErrorCode2["WEB_PRESENCE_NOT_FOUND"] = "WEB_PRESENCE_NOT_FOUND";
    MarketUserErrorCode2["CANNOT_ADD_REGIONS_TO_PRIMARY_MARKET"] = "CANNOT_ADD_REGIONS_TO_PRIMARY_MARKET";
    MarketUserErrorCode2["CANNOT_DELETE_ONLY_REGION"] = "CANNOT_DELETE_ONLY_REGION";
    MarketUserErrorCode2["REQUIRES_EXACTLY_ONE_OPTION"] = "REQUIRES_EXACTLY_ONE_OPTION";
    MarketUserErrorCode2["CANNOT_DELETE_PRIMARY_MARKET"] = "CANNOT_DELETE_PRIMARY_MARKET";
    MarketUserErrorCode2["DOMAIN_NOT_FOUND"] = "DOMAIN_NOT_FOUND";
    MarketUserErrorCode2["SUBFOLDER_SUFFIX_MUST_CONTAIN_ONLY_LETTERS"] = "SUBFOLDER_SUFFIX_MUST_CONTAIN_ONLY_LETTERS";
    MarketUserErrorCode2["NO_LANGUAGES"] = "NO_LANGUAGES";
    MarketUserErrorCode2["DUPLICATE_LANGUAGES"] = "DUPLICATE_LANGUAGES";
    MarketUserErrorCode2["REGION_SPECIFIC_LANGUAGE"] = "REGION_SPECIFIC_LANGUAGE";
    MarketUserErrorCode2["SUBFOLDER_NOT_ALLOWED_FOR_CCTLD_DOMAINS"] = "SUBFOLDER_NOT_ALLOWED_FOR_CCTLD_DOMAINS";
    MarketUserErrorCode2["CANNOT_HAVE_SUBFOLDER_AND_DOMAIN"] = "CANNOT_HAVE_SUBFOLDER_AND_DOMAIN";
    MarketUserErrorCode2["CANNOT_ADD_WEB_PRESENCE_TO_PRIMARY_MARKET"] = "CANNOT_ADD_WEB_PRESENCE_TO_PRIMARY_MARKET";
    MarketUserErrorCode2["REQUIRES_DOMAIN_OR_SUBFOLDER"] = "REQUIRES_DOMAIN_OR_SUBFOLDER";
    MarketUserErrorCode2["PRIMARY_MARKET_MUST_USE_PRIMARY_DOMAIN"] = "PRIMARY_MARKET_MUST_USE_PRIMARY_DOMAIN";
    MarketUserErrorCode2["CANNOT_DELETE_PRIMARY_MARKET_WEB_PRESENCE"] = "CANNOT_DELETE_PRIMARY_MARKET_WEB_PRESENCE";
    MarketUserErrorCode2["SHOP_REACHED_MARKETS_LIMIT"] = "SHOP_REACHED_MARKETS_LIMIT";
    MarketUserErrorCode2["CANNOT_DISABLE_PRIMARY_MARKET"] = "CANNOT_DISABLE_PRIMARY_MARKET";
    MarketUserErrorCode2["UNPUBLISHED_LANGUAGE"] = "UNPUBLISHED_LANGUAGE";
    MarketUserErrorCode2["DISABLED_LANGUAGE"] = "DISABLED_LANGUAGE";
    MarketUserErrorCode2["CANNOT_SET_DEFAULT_LOCALE_TO_NULL"] = "CANNOT_SET_DEFAULT_LOCALE_TO_NULL";
    MarketUserErrorCode2["UNSUPPORTED_COUNTRY_REGION"] = "UNSUPPORTED_COUNTRY_REGION";
    MarketUserErrorCode2["CANNOT_ADD_CUSTOMER_DOMAIN"] = "CANNOT_ADD_CUSTOMER_DOMAIN";
    return MarketUserErrorCode2;
  })(MarketUserErrorCode || {});
  var MarketingActivityExtensionAppErrorCode = /* @__PURE__ */ ((MarketingActivityExtensionAppErrorCode2) => {
    MarketingActivityExtensionAppErrorCode2["NOT_ONBOARDED_ERROR"] = "NOT_ONBOARDED_ERROR";
    MarketingActivityExtensionAppErrorCode2["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    MarketingActivityExtensionAppErrorCode2["API_ERROR"] = "API_ERROR";
    MarketingActivityExtensionAppErrorCode2["PLATFORM_ERROR"] = "PLATFORM_ERROR";
    MarketingActivityExtensionAppErrorCode2["INSTALL_REQUIRED_ERROR"] = "INSTALL_REQUIRED_ERROR";
    return MarketingActivityExtensionAppErrorCode2;
  })(MarketingActivityExtensionAppErrorCode || {});
  var MarketingActivitySortKeys = /* @__PURE__ */ ((MarketingActivitySortKeys2) => {
    MarketingActivitySortKeys2["TITLE"] = "TITLE";
    MarketingActivitySortKeys2["CREATED_AT"] = "CREATED_AT";
    MarketingActivitySortKeys2["ID"] = "ID";
    MarketingActivitySortKeys2["RELEVANCE"] = "RELEVANCE";
    return MarketingActivitySortKeys2;
  })(MarketingActivitySortKeys || {});
  var MarketingActivityStatus = /* @__PURE__ */ ((MarketingActivityStatus2) => {
    MarketingActivityStatus2["ACTIVE"] = "ACTIVE";
    MarketingActivityStatus2["DELETED"] = "DELETED";
    MarketingActivityStatus2["DELETED_EXTERNALLY"] = "DELETED_EXTERNALLY";
    MarketingActivityStatus2["DISCONNECTED"] = "DISCONNECTED";
    MarketingActivityStatus2["DRAFT"] = "DRAFT";
    MarketingActivityStatus2["FAILED"] = "FAILED";
    MarketingActivityStatus2["INACTIVE"] = "INACTIVE";
    MarketingActivityStatus2["PAUSED"] = "PAUSED";
    MarketingActivityStatus2["PENDING"] = "PENDING";
    MarketingActivityStatus2["SCHEDULED"] = "SCHEDULED";
    MarketingActivityStatus2["UNDEFINED"] = "UNDEFINED";
    return MarketingActivityStatus2;
  })(MarketingActivityStatus || {});
  var MarketingActivityStatusBadgeType = /* @__PURE__ */ ((MarketingActivityStatusBadgeType2) => {
    MarketingActivityStatusBadgeType2["DEFAULT"] = "DEFAULT";
    MarketingActivityStatusBadgeType2["SUCCESS"] = "SUCCESS";
    MarketingActivityStatusBadgeType2["ATTENTION"] = "ATTENTION";
    MarketingActivityStatusBadgeType2["WARNING"] = "WARNING";
    MarketingActivityStatusBadgeType2["INFO"] = "INFO";
    return MarketingActivityStatusBadgeType2;
  })(MarketingActivityStatusBadgeType || {});
  var MarketingActivityUserErrorCode = /* @__PURE__ */ ((MarketingActivityUserErrorCode2) => {
    MarketingActivityUserErrorCode2["INVALID"] = "INVALID";
    MarketingActivityUserErrorCode2["TAKEN"] = "TAKEN";
    return MarketingActivityUserErrorCode2;
  })(MarketingActivityUserErrorCode || {});
  var MarketingBudgetBudgetType = /* @__PURE__ */ ((MarketingBudgetBudgetType2) => {
    MarketingBudgetBudgetType2["DAILY"] = "DAILY";
    MarketingBudgetBudgetType2["LIFETIME"] = "LIFETIME";
    return MarketingBudgetBudgetType2;
  })(MarketingBudgetBudgetType || {});
  var MarketingChannel = /* @__PURE__ */ ((MarketingChannel2) => {
    MarketingChannel2["SEARCH"] = "SEARCH";
    MarketingChannel2["DISPLAY"] = "DISPLAY";
    MarketingChannel2["SOCIAL"] = "SOCIAL";
    MarketingChannel2["EMAIL"] = "EMAIL";
    MarketingChannel2["REFERRAL"] = "REFERRAL";
    return MarketingChannel2;
  })(MarketingChannel || {});
  var MarketingEventSortKeys = /* @__PURE__ */ ((MarketingEventSortKeys2) => {
    MarketingEventSortKeys2["STARTED_AT"] = "STARTED_AT";
    MarketingEventSortKeys2["ID"] = "ID";
    MarketingEventSortKeys2["RELEVANCE"] = "RELEVANCE";
    return MarketingEventSortKeys2;
  })(MarketingEventSortKeys || {});
  var MarketingTactic = /* @__PURE__ */ ((MarketingTactic2) => {
    MarketingTactic2["ABANDONED_CART"] = "ABANDONED_CART";
    MarketingTactic2["AD"] = "AD";
    MarketingTactic2["AFFILIATE"] = "AFFILIATE";
    MarketingTactic2["LINK"] = "LINK";
    MarketingTactic2["LOYALTY"] = "LOYALTY";
    MarketingTactic2["MESSAGE"] = "MESSAGE";
    MarketingTactic2["NEWSLETTER"] = "NEWSLETTER";
    MarketingTactic2["NOTIFICATION"] = "NOTIFICATION";
    MarketingTactic2["POST"] = "POST";
    MarketingTactic2["RETARGETING"] = "RETARGETING";
    MarketingTactic2["TRANSACTIONAL"] = "TRANSACTIONAL";
    MarketingTactic2["SEO"] = "SEO";
    MarketingTactic2["DIRECT"] = "DIRECT";
    MarketingTactic2["STOREFRONT_APP"] = "STOREFRONT_APP";
    MarketingTactic2["DISPLAY"] = "DISPLAY";
    MarketingTactic2["SEARCH"] = "SEARCH";
    MarketingTactic2["FOLLOW_UP"] = "FOLLOW_UP";
    MarketingTactic2["RECEIPT"] = "RECEIPT";
    return MarketingTactic2;
  })(MarketingTactic || {});
  var MediaContentType = /* @__PURE__ */ ((MediaContentType2) => {
    MediaContentType2["VIDEO"] = "VIDEO";
    MediaContentType2["EXTERNAL_VIDEO"] = "EXTERNAL_VIDEO";
    MediaContentType2["MODEL_3D"] = "MODEL_3D";
    MediaContentType2["IMAGE"] = "IMAGE";
    return MediaContentType2;
  })(MediaContentType || {});
  var MediaErrorCode = /* @__PURE__ */ ((MediaErrorCode2) => {
    MediaErrorCode2["UNKNOWN"] = "UNKNOWN";
    MediaErrorCode2["INVALID_SIGNED_URL"] = "INVALID_SIGNED_URL";
    MediaErrorCode2["IMAGE_DOWNLOAD_FAILURE"] = "IMAGE_DOWNLOAD_FAILURE";
    MediaErrorCode2["IMAGE_PROCESSING_FAILURE"] = "IMAGE_PROCESSING_FAILURE";
    MediaErrorCode2["MEDIA_TIMEOUT_ERROR"] = "MEDIA_TIMEOUT_ERROR";
    MediaErrorCode2["EXTERNAL_VIDEO_NOT_FOUND"] = "EXTERNAL_VIDEO_NOT_FOUND";
    MediaErrorCode2["EXTERNAL_VIDEO_UNLISTED"] = "EXTERNAL_VIDEO_UNLISTED";
    MediaErrorCode2["EXTERNAL_VIDEO_INVALID_ASPECT_RATIO"] = "EXTERNAL_VIDEO_INVALID_ASPECT_RATIO";
    MediaErrorCode2["EXTERNAL_VIDEO_EMBED_DISABLED"] = "EXTERNAL_VIDEO_EMBED_DISABLED";
    MediaErrorCode2["EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING"] = "EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING";
    MediaErrorCode2["GENERIC_FILE_DOWNLOAD_FAILURE"] = "GENERIC_FILE_DOWNLOAD_FAILURE";
    MediaErrorCode2["GENERIC_FILE_INVALID_SIZE"] = "GENERIC_FILE_INVALID_SIZE";
    MediaErrorCode2["VIDEO_METADATA_READ_ERROR"] = "VIDEO_METADATA_READ_ERROR";
    MediaErrorCode2["VIDEO_INVALID_FILETYPE_ERROR"] = "VIDEO_INVALID_FILETYPE_ERROR";
    MediaErrorCode2["VIDEO_MIN_WIDTH_ERROR"] = "VIDEO_MIN_WIDTH_ERROR";
    MediaErrorCode2["VIDEO_MAX_WIDTH_ERROR"] = "VIDEO_MAX_WIDTH_ERROR";
    MediaErrorCode2["VIDEO_MIN_HEIGHT_ERROR"] = "VIDEO_MIN_HEIGHT_ERROR";
    MediaErrorCode2["VIDEO_MAX_HEIGHT_ERROR"] = "VIDEO_MAX_HEIGHT_ERROR";
    MediaErrorCode2["VIDEO_MIN_DURATION_ERROR"] = "VIDEO_MIN_DURATION_ERROR";
    MediaErrorCode2["VIDEO_MAX_DURATION_ERROR"] = "VIDEO_MAX_DURATION_ERROR";
    MediaErrorCode2["VIDEO_VALIDATION_ERROR"] = "VIDEO_VALIDATION_ERROR";
    MediaErrorCode2["MODEL3D_VALIDATION_ERROR"] = "MODEL3D_VALIDATION_ERROR";
    MediaErrorCode2["MODEL3D_THUMBNAIL_GENERATION_ERROR"] = "MODEL3D_THUMBNAIL_GENERATION_ERROR";
    MediaErrorCode2["MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR"] = "MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR";
    MediaErrorCode2["MODEL3D_GLB_OUTPUT_CREATION_ERROR"] = "MODEL3D_GLB_OUTPUT_CREATION_ERROR";
    MediaErrorCode2["MODEL3D_PROCESSING_FAILURE"] = "MODEL3D_PROCESSING_FAILURE";
    MediaErrorCode2["UNSUPPORTED_IMAGE_FILE_TYPE"] = "UNSUPPORTED_IMAGE_FILE_TYPE";
    MediaErrorCode2["INVALID_IMAGE_FILE_SIZE"] = "INVALID_IMAGE_FILE_SIZE";
    MediaErrorCode2["INVALID_IMAGE_ASPECT_RATIO"] = "INVALID_IMAGE_ASPECT_RATIO";
    MediaErrorCode2["INVALID_IMAGE_RESOLUTION"] = "INVALID_IMAGE_RESOLUTION";
    MediaErrorCode2["FILE_STORAGE_LIMIT_EXCEEDED"] = "FILE_STORAGE_LIMIT_EXCEEDED";
    return MediaErrorCode2;
  })(MediaErrorCode || {});
  var MediaHost = /* @__PURE__ */ ((MediaHost2) => {
    MediaHost2["YOUTUBE"] = "YOUTUBE";
    MediaHost2["VIMEO"] = "VIMEO";
    return MediaHost2;
  })(MediaHost || {});
  var MediaPreviewImageStatus = /* @__PURE__ */ ((MediaPreviewImageStatus2) => {
    MediaPreviewImageStatus2["UPLOADED"] = "UPLOADED";
    MediaPreviewImageStatus2["PROCESSING"] = "PROCESSING";
    MediaPreviewImageStatus2["READY"] = "READY";
    MediaPreviewImageStatus2["FAILED"] = "FAILED";
    return MediaPreviewImageStatus2;
  })(MediaPreviewImageStatus || {});
  var MediaStatus = /* @__PURE__ */ ((MediaStatus2) => {
    MediaStatus2["UPLOADED"] = "UPLOADED";
    MediaStatus2["PROCESSING"] = "PROCESSING";
    MediaStatus2["READY"] = "READY";
    MediaStatus2["FAILED"] = "FAILED";
    return MediaStatus2;
  })(MediaStatus || {});
  var MediaUserErrorCode = /* @__PURE__ */ ((MediaUserErrorCode2) => {
    MediaUserErrorCode2["INVALID"] = "INVALID";
    MediaUserErrorCode2["BLANK"] = "BLANK";
    MediaUserErrorCode2["VIDEO_VALIDATION_ERROR"] = "VIDEO_VALIDATION_ERROR";
    MediaUserErrorCode2["MODEL3D_VALIDATION_ERROR"] = "MODEL3D_VALIDATION_ERROR";
    MediaUserErrorCode2["VIDEO_THROTTLE_EXCEEDED"] = "VIDEO_THROTTLE_EXCEEDED";
    MediaUserErrorCode2["MODEL3D_THROTTLE_EXCEEDED"] = "MODEL3D_THROTTLE_EXCEEDED";
    MediaUserErrorCode2["PRODUCT_MEDIA_LIMIT_EXCEEDED"] = "PRODUCT_MEDIA_LIMIT_EXCEEDED";
    MediaUserErrorCode2["SHOP_MEDIA_LIMIT_EXCEEDED"] = "SHOP_MEDIA_LIMIT_EXCEEDED";
    MediaUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    MediaUserErrorCode2["MEDIA_DOES_NOT_EXIST"] = "MEDIA_DOES_NOT_EXIST";
    MediaUserErrorCode2["MEDIA_DOES_NOT_EXIST_ON_PRODUCT"] = "MEDIA_DOES_NOT_EXIST_ON_PRODUCT";
    MediaUserErrorCode2["TOO_MANY_MEDIA_PER_INPUT_PAIR"] = "TOO_MANY_MEDIA_PER_INPUT_PAIR";
    MediaUserErrorCode2["MAXIMUM_VARIANT_MEDIA_PAIRS_EXCEEDED"] = "MAXIMUM_VARIANT_MEDIA_PAIRS_EXCEEDED";
    MediaUserErrorCode2["INVALID_MEDIA_TYPE"] = "INVALID_MEDIA_TYPE";
    MediaUserErrorCode2["PRODUCT_VARIANT_SPECIFIED_MULTIPLE_TIMES"] = "PRODUCT_VARIANT_SPECIFIED_MULTIPLE_TIMES";
    MediaUserErrorCode2["PRODUCT_VARIANT_DOES_NOT_EXIST_ON_PRODUCT"] = "PRODUCT_VARIANT_DOES_NOT_EXIST_ON_PRODUCT";
    MediaUserErrorCode2["NON_READY_MEDIA"] = "NON_READY_MEDIA";
    MediaUserErrorCode2["PRODUCT_VARIANT_ALREADY_HAS_MEDIA"] = "PRODUCT_VARIANT_ALREADY_HAS_MEDIA";
    MediaUserErrorCode2["MEDIA_IS_NOT_ATTACHED_TO_VARIANT"] = "MEDIA_IS_NOT_ATTACHED_TO_VARIANT";
    MediaUserErrorCode2["MEDIA_CANNOT_BE_MODIFIED"] = "MEDIA_CANNOT_BE_MODIFIED";
    return MediaUserErrorCode2;
  })(MediaUserErrorCode || {});
  var MediaWarningCode = /* @__PURE__ */ ((MediaWarningCode2) => {
    MediaWarningCode2["MODEL_SMALL_PHYSICAL_SIZE"] = "MODEL_SMALL_PHYSICAL_SIZE";
    MediaWarningCode2["MODEL_LARGE_PHYSICAL_SIZE"] = "MODEL_LARGE_PHYSICAL_SIZE";
    return MediaWarningCode2;
  })(MediaWarningCode || {});
  var MerchandiseDiscountClass = /* @__PURE__ */ ((MerchandiseDiscountClass2) => {
    MerchandiseDiscountClass2["PRODUCT"] = "PRODUCT";
    MerchandiseDiscountClass2["ORDER"] = "ORDER";
    return MerchandiseDiscountClass2;
  })(MerchandiseDiscountClass || {});
  var MetafieldAdminAccess = /* @__PURE__ */ ((MetafieldAdminAccess2) => {
    MetafieldAdminAccess2["PRIVATE"] = "PRIVATE";
    MetafieldAdminAccess2["MERCHANT_READ"] = "MERCHANT_READ";
    MetafieldAdminAccess2["MERCHANT_READ_WRITE"] = "MERCHANT_READ_WRITE";
    return MetafieldAdminAccess2;
  })(MetafieldAdminAccess || {});
  var MetafieldDefinitionCreateUserErrorCode = /* @__PURE__ */ ((MetafieldDefinitionCreateUserErrorCode2) => {
    MetafieldDefinitionCreateUserErrorCode2["INVALID"] = "INVALID";
    MetafieldDefinitionCreateUserErrorCode2["INCLUSION"] = "INCLUSION";
    MetafieldDefinitionCreateUserErrorCode2["PRESENT"] = "PRESENT";
    MetafieldDefinitionCreateUserErrorCode2["TAKEN"] = "TAKEN";
    MetafieldDefinitionCreateUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    MetafieldDefinitionCreateUserErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    MetafieldDefinitionCreateUserErrorCode2["RESOURCE_TYPE_LIMIT_EXCEEDED"] = "RESOURCE_TYPE_LIMIT_EXCEEDED";
    MetafieldDefinitionCreateUserErrorCode2["LIMIT_EXCEEDED"] = "LIMIT_EXCEEDED";
    MetafieldDefinitionCreateUserErrorCode2["INVALID_OPTION"] = "INVALID_OPTION";
    MetafieldDefinitionCreateUserErrorCode2["DUPLICATE_OPTION"] = "DUPLICATE_OPTION";
    MetafieldDefinitionCreateUserErrorCode2["RESERVED_NAMESPACE_KEY"] = "RESERVED_NAMESPACE_KEY";
    MetafieldDefinitionCreateUserErrorCode2["PINNED_LIMIT_REACHED"] = "PINNED_LIMIT_REACHED";
    MetafieldDefinitionCreateUserErrorCode2["UNSTRUCTURED_ALREADY_EXISTS"] = "UNSTRUCTURED_ALREADY_EXISTS";
    MetafieldDefinitionCreateUserErrorCode2["INVALID_CHARACTER"] = "INVALID_CHARACTER";
    MetafieldDefinitionCreateUserErrorCode2["TYPE_NOT_ALLOWED_FOR_CONDITIONS"] = "TYPE_NOT_ALLOWED_FOR_CONDITIONS";
    MetafieldDefinitionCreateUserErrorCode2["OWNER_TYPE_LIMIT_EXCEEDED_FOR_AUTOMATED_COLLECTIONS"] = "OWNER_TYPE_LIMIT_EXCEEDED_FOR_AUTOMATED_COLLECTIONS";
    return MetafieldDefinitionCreateUserErrorCode2;
  })(MetafieldDefinitionCreateUserErrorCode || {});
  var MetafieldDefinitionDeleteUserErrorCode = /* @__PURE__ */ ((MetafieldDefinitionDeleteUserErrorCode2) => {
    MetafieldDefinitionDeleteUserErrorCode2["PRESENT"] = "PRESENT";
    MetafieldDefinitionDeleteUserErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    MetafieldDefinitionDeleteUserErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    MetafieldDefinitionDeleteUserErrorCode2["REFERENCE_TYPE_DELETION_ERROR"] = "REFERENCE_TYPE_DELETION_ERROR";
    MetafieldDefinitionDeleteUserErrorCode2["METAFIELD_DEFINITION_IN_USE"] = "METAFIELD_DEFINITION_IN_USE";
    MetafieldDefinitionDeleteUserErrorCode2["DISALLOWED_OWNER_TYPE"] = "DISALLOWED_OWNER_TYPE";
    return MetafieldDefinitionDeleteUserErrorCode2;
  })(MetafieldDefinitionDeleteUserErrorCode || {});
  var MetafieldDefinitionPinUserErrorCode = /* @__PURE__ */ ((MetafieldDefinitionPinUserErrorCode2) => {
    MetafieldDefinitionPinUserErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    MetafieldDefinitionPinUserErrorCode2["PINNED_LIMIT_REACHED"] = "PINNED_LIMIT_REACHED";
    MetafieldDefinitionPinUserErrorCode2["ALREADY_PINNED"] = "ALREADY_PINNED";
    MetafieldDefinitionPinUserErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    MetafieldDefinitionPinUserErrorCode2["DISALLOWED_OWNER_TYPE"] = "DISALLOWED_OWNER_TYPE";
    return MetafieldDefinitionPinUserErrorCode2;
  })(MetafieldDefinitionPinUserErrorCode || {});
  var MetafieldDefinitionPinnedStatus = /* @__PURE__ */ ((MetafieldDefinitionPinnedStatus2) => {
    MetafieldDefinitionPinnedStatus2["ANY"] = "ANY";
    MetafieldDefinitionPinnedStatus2["PINNED"] = "PINNED";
    MetafieldDefinitionPinnedStatus2["UNPINNED"] = "UNPINNED";
    return MetafieldDefinitionPinnedStatus2;
  })(MetafieldDefinitionPinnedStatus || {});
  var MetafieldDefinitionSortKeys = /* @__PURE__ */ ((MetafieldDefinitionSortKeys2) => {
    MetafieldDefinitionSortKeys2["ID"] = "ID";
    MetafieldDefinitionSortKeys2["NAME"] = "NAME";
    MetafieldDefinitionSortKeys2["PINNED_POSITION"] = "PINNED_POSITION";
    MetafieldDefinitionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return MetafieldDefinitionSortKeys2;
  })(MetafieldDefinitionSortKeys || {});
  var MetafieldDefinitionUnpinUserErrorCode = /* @__PURE__ */ ((MetafieldDefinitionUnpinUserErrorCode2) => {
    MetafieldDefinitionUnpinUserErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    MetafieldDefinitionUnpinUserErrorCode2["NOT_PINNED"] = "NOT_PINNED";
    MetafieldDefinitionUnpinUserErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    MetafieldDefinitionUnpinUserErrorCode2["DISALLOWED_OWNER_TYPE"] = "DISALLOWED_OWNER_TYPE";
    return MetafieldDefinitionUnpinUserErrorCode2;
  })(MetafieldDefinitionUnpinUserErrorCode || {});
  var MetafieldDefinitionUpdateUserErrorCode = /* @__PURE__ */ ((MetafieldDefinitionUpdateUserErrorCode2) => {
    MetafieldDefinitionUpdateUserErrorCode2["PRESENT"] = "PRESENT";
    MetafieldDefinitionUpdateUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    MetafieldDefinitionUpdateUserErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    MetafieldDefinitionUpdateUserErrorCode2["INVALID_INPUT"] = "INVALID_INPUT";
    MetafieldDefinitionUpdateUserErrorCode2["PINNED_LIMIT_REACHED"] = "PINNED_LIMIT_REACHED";
    MetafieldDefinitionUpdateUserErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    MetafieldDefinitionUpdateUserErrorCode2["TYPE_NOT_ALLOWED_FOR_CONDITIONS"] = "TYPE_NOT_ALLOWED_FOR_CONDITIONS";
    MetafieldDefinitionUpdateUserErrorCode2["METAFIELD_DEFINITION_IN_USE"] = "METAFIELD_DEFINITION_IN_USE";
    MetafieldDefinitionUpdateUserErrorCode2["OWNER_TYPE_LIMIT_EXCEEDED_FOR_AUTOMATED_COLLECTIONS"] = "OWNER_TYPE_LIMIT_EXCEEDED_FOR_AUTOMATED_COLLECTIONS";
    return MetafieldDefinitionUpdateUserErrorCode2;
  })(MetafieldDefinitionUpdateUserErrorCode || {});
  var MetafieldDefinitionValidationStatus = /* @__PURE__ */ ((MetafieldDefinitionValidationStatus2) => {
    MetafieldDefinitionValidationStatus2["ALL_VALID"] = "ALL_VALID";
    MetafieldDefinitionValidationStatus2["IN_PROGRESS"] = "IN_PROGRESS";
    MetafieldDefinitionValidationStatus2["SOME_INVALID"] = "SOME_INVALID";
    return MetafieldDefinitionValidationStatus2;
  })(MetafieldDefinitionValidationStatus || {});
  var MetafieldOwnerType = /* @__PURE__ */ ((MetafieldOwnerType2) => {
    MetafieldOwnerType2["API_PERMISSION"] = "API_PERMISSION";
    MetafieldOwnerType2["ARTICLE"] = "ARTICLE";
    MetafieldOwnerType2["BLOG"] = "BLOG";
    MetafieldOwnerType2["COLLECTION"] = "COLLECTION";
    MetafieldOwnerType2["COMPANY"] = "COMPANY";
    MetafieldOwnerType2["COMPANY_LOCATION"] = "COMPANY_LOCATION";
    MetafieldOwnerType2["CUSTOMER"] = "CUSTOMER";
    MetafieldOwnerType2["DISCOUNT"] = "DISCOUNT";
    MetafieldOwnerType2["DRAFTORDER"] = "DRAFTORDER";
    MetafieldOwnerType2["LOCATION"] = "LOCATION";
    MetafieldOwnerType2["ORDER"] = "ORDER";
    MetafieldOwnerType2["PAGE"] = "PAGE";
    MetafieldOwnerType2["PRODUCT"] = "PRODUCT";
    MetafieldOwnerType2["PRODUCTIMAGE"] = "PRODUCTIMAGE";
    MetafieldOwnerType2["PRODUCTVARIANT"] = "PRODUCTVARIANT";
    MetafieldOwnerType2["SHOP"] = "SHOP";
    return MetafieldOwnerType2;
  })(MetafieldOwnerType || {});
  var MetafieldValidationStatus = /* @__PURE__ */ ((MetafieldValidationStatus2) => {
    MetafieldValidationStatus2["ANY"] = "ANY";
    MetafieldValidationStatus2["VALID"] = "VALID";
    MetafieldValidationStatus2["INVALID"] = "INVALID";
    return MetafieldValidationStatus2;
  })(MetafieldValidationStatus || {});
  var MetafieldValueType = /* @__PURE__ */ ((MetafieldValueType2) => {
    MetafieldValueType2["STRING"] = "STRING";
    MetafieldValueType2["INTEGER"] = "INTEGER";
    MetafieldValueType2["JSON_STRING"] = "JSON_STRING";
    MetafieldValueType2["BOOLEAN"] = "BOOLEAN";
    return MetafieldValueType2;
  })(MetafieldValueType || {});
  var MetafieldsSetUserErrorCode = /* @__PURE__ */ ((MetafieldsSetUserErrorCode2) => {
    MetafieldsSetUserErrorCode2["BLANK"] = "BLANK";
    MetafieldsSetUserErrorCode2["INCLUSION"] = "INCLUSION";
    MetafieldsSetUserErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    MetafieldsSetUserErrorCode2["PRESENT"] = "PRESENT";
    MetafieldsSetUserErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    MetafieldsSetUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    MetafieldsSetUserErrorCode2["INVALID_VALUE"] = "INVALID_VALUE";
    MetafieldsSetUserErrorCode2["INVALID_TYPE"] = "INVALID_TYPE";
    MetafieldsSetUserErrorCode2["APP_NOT_AUTHORIZED"] = "APP_NOT_AUTHORIZED";
    return MetafieldsSetUserErrorCode2;
  })(MetafieldsSetUserErrorCode || {});
  var MetaobjectAdminAccess = /* @__PURE__ */ ((MetaobjectAdminAccess2) => {
    MetaobjectAdminAccess2["PRIVATE"] = "PRIVATE";
    MetaobjectAdminAccess2["MERCHANT_READ"] = "MERCHANT_READ";
    MetaobjectAdminAccess2["MERCHANT_READ_WRITE"] = "MERCHANT_READ_WRITE";
    MetaobjectAdminAccess2["PUBLIC_READ"] = "PUBLIC_READ";
    MetaobjectAdminAccess2["PUBLIC_READ_WRITE"] = "PUBLIC_READ_WRITE";
    return MetaobjectAdminAccess2;
  })(MetaobjectAdminAccess || {});
  var MetaobjectStatus = /* @__PURE__ */ ((MetaobjectStatus2) => {
    MetaobjectStatus2["DRAFT"] = "DRAFT";
    MetaobjectStatus2["ACTIVE"] = "ACTIVE";
    return MetaobjectStatus2;
  })(MetaobjectStatus || {});
  var MetaobjectStorefrontAccess = /* @__PURE__ */ ((MetaobjectStorefrontAccess2) => {
    MetaobjectStorefrontAccess2["NONE"] = "NONE";
    MetaobjectStorefrontAccess2["PUBLIC_READ"] = "PUBLIC_READ";
    return MetaobjectStorefrontAccess2;
  })(MetaobjectStorefrontAccess || {});
  var MetaobjectUserErrorCode = /* @__PURE__ */ ((MetaobjectUserErrorCode2) => {
    MetaobjectUserErrorCode2["INVALID"] = "INVALID";
    MetaobjectUserErrorCode2["INCLUSION"] = "INCLUSION";
    MetaobjectUserErrorCode2["TAKEN"] = "TAKEN";
    MetaobjectUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    MetaobjectUserErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    MetaobjectUserErrorCode2["PRESENT"] = "PRESENT";
    MetaobjectUserErrorCode2["BLANK"] = "BLANK";
    MetaobjectUserErrorCode2["INVALID_TYPE"] = "INVALID_TYPE";
    MetaobjectUserErrorCode2["INVALID_VALUE"] = "INVALID_VALUE";
    MetaobjectUserErrorCode2["INVALID_OPTION"] = "INVALID_OPTION";
    MetaobjectUserErrorCode2["DUPLICATE_FIELD_INPUT"] = "DUPLICATE_FIELD_INPUT";
    MetaobjectUserErrorCode2["UNDEFINED_OBJECT_TYPE"] = "UNDEFINED_OBJECT_TYPE";
    MetaobjectUserErrorCode2["UNDEFINED_OBJECT_FIELD"] = "UNDEFINED_OBJECT_FIELD";
    MetaobjectUserErrorCode2["OBJECT_FIELD_TAKEN"] = "OBJECT_FIELD_TAKEN";
    MetaobjectUserErrorCode2["OBJECT_FIELD_REQUIRED"] = "OBJECT_FIELD_REQUIRED";
    MetaobjectUserErrorCode2["RECORD_NOT_FOUND"] = "RECORD_NOT_FOUND";
    MetaobjectUserErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    MetaobjectUserErrorCode2["MAX_DEFINITIONS_EXCEEDED"] = "MAX_DEFINITIONS_EXCEEDED";
    MetaobjectUserErrorCode2["MAX_OBJECTS_EXCEEDED"] = "MAX_OBJECTS_EXCEEDED";
    MetaobjectUserErrorCode2["IMMUTABLE"] = "IMMUTABLE";
    MetaobjectUserErrorCode2["NOT_AUTHORIZED"] = "NOT_AUTHORIZED";
    MetaobjectUserErrorCode2["RESERVED_NAME"] = "RESERVED_NAME";
    MetaobjectUserErrorCode2["CAPABILITY_NOT_ENABLED"] = "CAPABILITY_NOT_ENABLED";
    return MetaobjectUserErrorCode2;
  })(MetaobjectUserErrorCode || {});
  var MethodDefinitionSortKeys = /* @__PURE__ */ ((MethodDefinitionSortKeys2) => {
    MethodDefinitionSortKeys2["RATE_PROVIDER_TYPE"] = "RATE_PROVIDER_TYPE";
    MethodDefinitionSortKeys2["ID"] = "ID";
    MethodDefinitionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return MethodDefinitionSortKeys2;
  })(MethodDefinitionSortKeys || {});
  var OrderActionType = /* @__PURE__ */ ((OrderActionType2) => {
    OrderActionType2["ORDER"] = "ORDER";
    OrderActionType2["ORDER_EDIT"] = "ORDER_EDIT";
    OrderActionType2["REFUND"] = "REFUND";
    OrderActionType2["UNKNOWN"] = "UNKNOWN";
    return OrderActionType2;
  })(OrderActionType || {});
  var OrderCancelReason = /* @__PURE__ */ ((OrderCancelReason2) => {
    OrderCancelReason2["CUSTOMER"] = "CUSTOMER";
    OrderCancelReason2["DECLINED"] = "DECLINED";
    OrderCancelReason2["FRAUD"] = "FRAUD";
    OrderCancelReason2["INVENTORY"] = "INVENTORY";
    OrderCancelReason2["OTHER"] = "OTHER";
    return OrderCancelReason2;
  })(OrderCancelReason || {});
  var OrderCreateMandatePaymentUserErrorCode = /* @__PURE__ */ ((OrderCreateMandatePaymentUserErrorCode2) => {
    OrderCreateMandatePaymentUserErrorCode2["ORDER_MANDATE_PAYMENT_ERROR_CODE"] = "ORDER_MANDATE_PAYMENT_ERROR_CODE";
    return OrderCreateMandatePaymentUserErrorCode2;
  })(OrderCreateMandatePaymentUserErrorCode || {});
  var OrderDisplayFinancialStatus = /* @__PURE__ */ ((OrderDisplayFinancialStatus2) => {
    OrderDisplayFinancialStatus2["PENDING"] = "PENDING";
    OrderDisplayFinancialStatus2["AUTHORIZED"] = "AUTHORIZED";
    OrderDisplayFinancialStatus2["PARTIALLY_PAID"] = "PARTIALLY_PAID";
    OrderDisplayFinancialStatus2["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
    OrderDisplayFinancialStatus2["VOIDED"] = "VOIDED";
    OrderDisplayFinancialStatus2["PAID"] = "PAID";
    OrderDisplayFinancialStatus2["REFUNDED"] = "REFUNDED";
    OrderDisplayFinancialStatus2["EXPIRED"] = "EXPIRED";
    return OrderDisplayFinancialStatus2;
  })(OrderDisplayFinancialStatus || {});
  var OrderDisplayFulfillmentStatus = /* @__PURE__ */ ((OrderDisplayFulfillmentStatus2) => {
    OrderDisplayFulfillmentStatus2["UNFULFILLED"] = "UNFULFILLED";
    OrderDisplayFulfillmentStatus2["PARTIALLY_FULFILLED"] = "PARTIALLY_FULFILLED";
    OrderDisplayFulfillmentStatus2["FULFILLED"] = "FULFILLED";
    OrderDisplayFulfillmentStatus2["RESTOCKED"] = "RESTOCKED";
    OrderDisplayFulfillmentStatus2["PENDING_FULFILLMENT"] = "PENDING_FULFILLMENT";
    OrderDisplayFulfillmentStatus2["OPEN"] = "OPEN";
    OrderDisplayFulfillmentStatus2["IN_PROGRESS"] = "IN_PROGRESS";
    OrderDisplayFulfillmentStatus2["ON_HOLD"] = "ON_HOLD";
    OrderDisplayFulfillmentStatus2["SCHEDULED"] = "SCHEDULED";
    return OrderDisplayFulfillmentStatus2;
  })(OrderDisplayFulfillmentStatus || {});
  var OrderInvoiceSendUserErrorCode = /* @__PURE__ */ ((OrderInvoiceSendUserErrorCode2) => {
    OrderInvoiceSendUserErrorCode2["ORDER_INVOICE_SEND_UNSUCCESSFUL"] = "ORDER_INVOICE_SEND_UNSUCCESSFUL";
    return OrderInvoiceSendUserErrorCode2;
  })(OrderInvoiceSendUserErrorCode || {});
  var OrderPaymentStatusResult = /* @__PURE__ */ ((OrderPaymentStatusResult2) => {
    OrderPaymentStatusResult2["SUCCESS"] = "SUCCESS";
    OrderPaymentStatusResult2["AUTHORIZED"] = "AUTHORIZED";
    OrderPaymentStatusResult2["VOIDED"] = "VOIDED";
    OrderPaymentStatusResult2["REFUNDED"] = "REFUNDED";
    OrderPaymentStatusResult2["CAPTURED"] = "CAPTURED";
    OrderPaymentStatusResult2["PURCHASED"] = "PURCHASED";
    OrderPaymentStatusResult2["ERROR"] = "ERROR";
    OrderPaymentStatusResult2["PROCESSING"] = "PROCESSING";
    OrderPaymentStatusResult2["REDIRECT_REQUIRED"] = "REDIRECT_REQUIRED";
    OrderPaymentStatusResult2["RETRYABLE"] = "RETRYABLE";
    OrderPaymentStatusResult2["UNKNOWN"] = "UNKNOWN";
    return OrderPaymentStatusResult2;
  })(OrderPaymentStatusResult || {});
  var OrderRiskLevel = /* @__PURE__ */ ((OrderRiskLevel2) => {
    OrderRiskLevel2["LOW"] = "LOW";
    OrderRiskLevel2["MEDIUM"] = "MEDIUM";
    OrderRiskLevel2["HIGH"] = "HIGH";
    return OrderRiskLevel2;
  })(OrderRiskLevel || {});
  var OrderSortKeys = /* @__PURE__ */ ((OrderSortKeys2) => {
    OrderSortKeys2["CREATED_AT"] = "CREATED_AT";
    OrderSortKeys2["CUSTOMER_NAME"] = "CUSTOMER_NAME";
    OrderSortKeys2["DESTINATION"] = "DESTINATION";
    OrderSortKeys2["FINANCIAL_STATUS"] = "FINANCIAL_STATUS";
    OrderSortKeys2["FULFILLMENT_STATUS"] = "FULFILLMENT_STATUS";
    OrderSortKeys2["ORDER_NUMBER"] = "ORDER_NUMBER";
    OrderSortKeys2["PROCESSED_AT"] = "PROCESSED_AT";
    OrderSortKeys2["TOTAL_PRICE"] = "TOTAL_PRICE";
    OrderSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    OrderSortKeys2["ID"] = "ID";
    OrderSortKeys2["RELEVANCE"] = "RELEVANCE";
    return OrderSortKeys2;
  })(OrderSortKeys || {});
  var OrderTransactionErrorCode = /* @__PURE__ */ ((OrderTransactionErrorCode2) => {
    OrderTransactionErrorCode2["INCORRECT_NUMBER"] = "INCORRECT_NUMBER";
    OrderTransactionErrorCode2["INVALID_NUMBER"] = "INVALID_NUMBER";
    OrderTransactionErrorCode2["INVALID_EXPIRY_DATE"] = "INVALID_EXPIRY_DATE";
    OrderTransactionErrorCode2["INVALID_CVC"] = "INVALID_CVC";
    OrderTransactionErrorCode2["EXPIRED_CARD"] = "EXPIRED_CARD";
    OrderTransactionErrorCode2["INCORRECT_CVC"] = "INCORRECT_CVC";
    OrderTransactionErrorCode2["INCORRECT_ZIP"] = "INCORRECT_ZIP";
    OrderTransactionErrorCode2["INCORRECT_ADDRESS"] = "INCORRECT_ADDRESS";
    OrderTransactionErrorCode2["INCORRECT_PIN"] = "INCORRECT_PIN";
    OrderTransactionErrorCode2["CARD_DECLINED"] = "CARD_DECLINED";
    OrderTransactionErrorCode2["PROCESSING_ERROR"] = "PROCESSING_ERROR";
    OrderTransactionErrorCode2["CALL_ISSUER"] = "CALL_ISSUER";
    OrderTransactionErrorCode2["PICK_UP_CARD"] = "PICK_UP_CARD";
    OrderTransactionErrorCode2["CONFIG_ERROR"] = "CONFIG_ERROR";
    OrderTransactionErrorCode2["TEST_MODE_LIVE_CARD"] = "TEST_MODE_LIVE_CARD";
    OrderTransactionErrorCode2["UNSUPPORTED_FEATURE"] = "UNSUPPORTED_FEATURE";
    OrderTransactionErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    OrderTransactionErrorCode2["INVALID_COUNTRY"] = "INVALID_COUNTRY";
    OrderTransactionErrorCode2["INVALID_AMOUNT"] = "INVALID_AMOUNT";
    OrderTransactionErrorCode2["PAYMENT_METHOD_UNAVAILABLE"] = "PAYMENT_METHOD_UNAVAILABLE";
    OrderTransactionErrorCode2["AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD"] = "AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD";
    OrderTransactionErrorCode2["AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED"] = "AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED";
    OrderTransactionErrorCode2["AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED"] = "AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED";
    OrderTransactionErrorCode2["AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED"] = "AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED";
    OrderTransactionErrorCode2["AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED"] = "AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED";
    OrderTransactionErrorCode2["AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED"] = "AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED";
    OrderTransactionErrorCode2["AMAZON_PAYMENTS_STALE"] = "AMAZON_PAYMENTS_STALE";
    return OrderTransactionErrorCode2;
  })(OrderTransactionErrorCode || {});
  var OrderTransactionKind = /* @__PURE__ */ ((OrderTransactionKind2) => {
    OrderTransactionKind2["SALE"] = "SALE";
    OrderTransactionKind2["CAPTURE"] = "CAPTURE";
    OrderTransactionKind2["AUTHORIZATION"] = "AUTHORIZATION";
    OrderTransactionKind2["VOID"] = "VOID";
    OrderTransactionKind2["REFUND"] = "REFUND";
    OrderTransactionKind2["CHANGE"] = "CHANGE";
    OrderTransactionKind2["EMV_AUTHORIZATION"] = "EMV_AUTHORIZATION";
    OrderTransactionKind2["SUGGESTED_REFUND"] = "SUGGESTED_REFUND";
    return OrderTransactionKind2;
  })(OrderTransactionKind || {});
  var OrderTransactionStatus = /* @__PURE__ */ ((OrderTransactionStatus2) => {
    OrderTransactionStatus2["SUCCESS"] = "SUCCESS";
    OrderTransactionStatus2["FAILURE"] = "FAILURE";
    OrderTransactionStatus2["PENDING"] = "PENDING";
    OrderTransactionStatus2["ERROR"] = "ERROR";
    OrderTransactionStatus2["AWAITING_RESPONSE"] = "AWAITING_RESPONSE";
    OrderTransactionStatus2["UNKNOWN"] = "UNKNOWN";
    return OrderTransactionStatus2;
  })(OrderTransactionStatus || {});
  var ParseErrorCode = /* @__PURE__ */ ((ParseErrorCode2) => {
    ParseErrorCode2["SYNTAX_NOT_RECOGNIZED"] = "SYNTAX_NOT_RECOGNIZED";
    ParseErrorCode2["SEMANTICALLY_INVALID"] = "SEMANTICALLY_INVALID";
    ParseErrorCode2["TABLE_NOT_FOUND"] = "TABLE_NOT_FOUND";
    ParseErrorCode2["COLUMN_NOT_FOUND"] = "COLUMN_NOT_FOUND";
    ParseErrorCode2["VALUE_NOT_PARSABLE"] = "VALUE_NOT_PARSABLE";
    ParseErrorCode2["DATE_NOT_PARSABLE"] = "DATE_NOT_PARSABLE";
    ParseErrorCode2["DATE_TIME_NOT_PARSABLE"] = "DATE_TIME_NOT_PARSABLE";
    ParseErrorCode2["DATE_INTERVAL_NOT_FOUND"] = "DATE_INTERVAL_NOT_FOUND";
    ParseErrorCode2["NAMED_DATE_NOT_FOUND"] = "NAMED_DATE_NOT_FOUND";
    ParseErrorCode2["SORT_FIELD_NOT_FOUND"] = "SORT_FIELD_NOT_FOUND";
    ParseErrorCode2["LIMIT_INVALID"] = "LIMIT_INVALID";
    ParseErrorCode2["VISUALIZE_CHART_TYPE_NOT_FOUND"] = "VISUALIZE_CHART_TYPE_NOT_FOUND";
    ParseErrorCode2["FUNCTION_MODIFIER_NOT_FOUND"] = "FUNCTION_MODIFIER_NOT_FOUND";
    ParseErrorCode2["FUNCTION_ARGUMENTS_NOT_FOUND"] = "FUNCTION_ARGUMENTS_NOT_FOUND";
    ParseErrorCode2["FUNCTION_EXCESS_ARGUMENTS"] = "FUNCTION_EXCESS_ARGUMENTS";
    ParseErrorCode2["FROM_NOT_FOUND"] = "FROM_NOT_FOUND";
    ParseErrorCode2["PRESENTMENT_NOT_FOUND"] = "PRESENTMENT_NOT_FOUND";
    ParseErrorCode2["EXCESS_PRESENTMENTS"] = "EXCESS_PRESENTMENTS";
    ParseErrorCode2["FUNCTION_INCOMPATIBLE_TYPES"] = "FUNCTION_INCOMPATIBLE_TYPES";
    ParseErrorCode2["VISUALIZE_EXCESS_PROJECTIONS"] = "VISUALIZE_EXCESS_PROJECTIONS";
    ParseErrorCode2["UNKNOWN"] = "UNKNOWN";
    ParseErrorCode2["OPERATOR_INCOMPATIBLE_TYPES"] = "OPERATOR_INCOMPATIBLE_TYPES";
    ParseErrorCode2["VISUALIZE_INCOMPATIBLE_TYPES"] = "VISUALIZE_INCOMPATIBLE_TYPES";
    ParseErrorCode2["VISUALIZE_GROUP_BY_NOT_FOUND"] = "VISUALIZE_GROUP_BY_NOT_FOUND";
    ParseErrorCode2["VISUALIZE_GROUP_BY_MIXED_BACKFILL"] = "VISUALIZE_GROUP_BY_MIXED_BACKFILL";
    ParseErrorCode2["MIXED_AGGREGATE_AND_NON_AGGREGATE"] = "MIXED_AGGREGATE_AND_NON_AGGREGATE";
    ParseErrorCode2["FUNCTION_NESTED_AGGREGATE"] = "FUNCTION_NESTED_AGGREGATE";
    ParseErrorCode2["TIME_FUNCTION_NOT_FOUND"] = "TIME_FUNCTION_NOT_FOUND";
    ParseErrorCode2["LIST_MIXED_ARGUMENT_TYPES"] = "LIST_MIXED_ARGUMENT_TYPES";
    ParseErrorCode2["EXCESS_GROUP_BY_ALL"] = "EXCESS_GROUP_BY_ALL";
    ParseErrorCode2["GROUP_BY_ALL_DATE_RANGE_NOT_FOUND"] = "GROUP_BY_ALL_DATE_RANGE_NOT_FOUND";
    ParseErrorCode2["EXCESS_PERIODS"] = "EXCESS_PERIODS";
    ParseErrorCode2["SYNTAX_INVALID_TOKEN"] = "SYNTAX_INVALID_TOKEN";
    ParseErrorCode2["SYNTAX_NO_VIABLE_ALTERNATIVE"] = "SYNTAX_NO_VIABLE_ALTERNATIVE";
    ParseErrorCode2["COMPARE_TO_WITHOUT_DURING"] = "COMPARE_TO_WITHOUT_DURING";
    ParseErrorCode2["COMPARE_TO_INVALID_PERIOD"] = "COMPARE_TO_INVALID_PERIOD";
    ParseErrorCode2["COMPARE_TO_INCOMPATIBLE_PERIOD"] = "COMPARE_TO_INCOMPATIBLE_PERIOD";
    ParseErrorCode2["GROUP_BY_EXCESS_PROJECTIONS"] = "GROUP_BY_EXCESS_PROJECTIONS";
    ParseErrorCode2["UNBACKFILLED_TIME_GROUP_BY_COMPARISON"] = "UNBACKFILLED_TIME_GROUP_BY_COMPARISON";
    ParseErrorCode2["COMPARISON_WITH_NON_AGGREGATE_FIELDS"] = "COMPARISON_WITH_NON_AGGREGATE_FIELDS";
    ParseErrorCode2["REQUIRED_GROUP_BY_NOT_FOUND"] = "REQUIRED_GROUP_BY_NOT_FOUND";
    ParseErrorCode2["SYNTAX_INPUT_MISMATCH"] = "SYNTAX_INPUT_MISMATCH";
    ParseErrorCode2["SYNTAX_UNWANTED_TOKEN"] = "SYNTAX_UNWANTED_TOKEN";
    ParseErrorCode2["SYNTAX_MISSING_TOKEN"] = "SYNTAX_MISSING_TOKEN";
    ParseErrorCode2["VISUALIZE_TYPE_NOT_FOUND"] = "VISUALIZE_TYPE_NOT_FOUND";
    ParseErrorCode2["FUNCTION_NOT_FOUND"] = "FUNCTION_NOT_FOUND";
    ParseErrorCode2["FUNCTION_MODIFIER_INVALID"] = "FUNCTION_MODIFIER_INVALID";
    ParseErrorCode2["VISUALIZE_BY_OR_OVER_NOT_FOUND"] = "VISUALIZE_BY_OR_OVER_NOT_FOUND";
    ParseErrorCode2["VISUALIZE_CONTAINS_BY_AND_OVER"] = "VISUALIZE_CONTAINS_BY_AND_OVER";
    ParseErrorCode2["BINARY_EXPRESSION_INCOMPATIBLE_TYPES"] = "BINARY_EXPRESSION_INCOMPATIBLE_TYPES";
    ParseErrorCode2["VISUALIZE_EXCESS_PROJECTIONS_ALPHA"] = "VISUALIZE_EXCESS_PROJECTIONS_ALPHA";
    return ParseErrorCode2;
  })(ParseErrorCode || {});
  var PaymentMethods = /* @__PURE__ */ ((PaymentMethods2) => {
    PaymentMethods2["VISA"] = "VISA";
    PaymentMethods2["MASTERCARD"] = "MASTERCARD";
    PaymentMethods2["DISCOVER"] = "DISCOVER";
    PaymentMethods2["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
    PaymentMethods2["DINERS_CLUB"] = "DINERS_CLUB";
    PaymentMethods2["JCB"] = "JCB";
    PaymentMethods2["UNIONPAY"] = "UNIONPAY";
    PaymentMethods2["ELO"] = "ELO";
    PaymentMethods2["DANKORT"] = "DANKORT";
    PaymentMethods2["MAESTRO"] = "MAESTRO";
    PaymentMethods2["FORBRUGSFORENINGEN"] = "FORBRUGSFORENINGEN";
    PaymentMethods2["PAYPAL"] = "PAYPAL";
    PaymentMethods2["BOGUS"] = "BOGUS";
    PaymentMethods2["BITCOIN"] = "BITCOIN";
    PaymentMethods2["LITECOIN"] = "LITECOIN";
    PaymentMethods2["DOGECOIN"] = "DOGECOIN";
    PaymentMethods2["INTERAC"] = "INTERAC";
    PaymentMethods2["EFTPOS"] = "EFTPOS";
    return PaymentMethods2;
  })(PaymentMethods || {});
  var PaymentReminderSendUserErrorCode = /* @__PURE__ */ ((PaymentReminderSendUserErrorCode2) => {
    PaymentReminderSendUserErrorCode2["PAYMENT_REMINDER_SEND_UNSUCCESSFUL"] = "PAYMENT_REMINDER_SEND_UNSUCCESSFUL";
    return PaymentReminderSendUserErrorCode2;
  })(PaymentReminderSendUserErrorCode || {});
  var PaymentTermsCreateUserErrorCode = /* @__PURE__ */ ((PaymentTermsCreateUserErrorCode2) => {
    PaymentTermsCreateUserErrorCode2["PAYMENT_TERMS_CREATION_UNSUCCESSFUL"] = "PAYMENT_TERMS_CREATION_UNSUCCESSFUL";
    return PaymentTermsCreateUserErrorCode2;
  })(PaymentTermsCreateUserErrorCode || {});
  var PaymentTermsDeleteUserErrorCode = /* @__PURE__ */ ((PaymentTermsDeleteUserErrorCode2) => {
    PaymentTermsDeleteUserErrorCode2["PAYMENT_TERMS_DELETE_UNSUCCESSFUL"] = "PAYMENT_TERMS_DELETE_UNSUCCESSFUL";
    return PaymentTermsDeleteUserErrorCode2;
  })(PaymentTermsDeleteUserErrorCode || {});
  var PaymentTermsType = /* @__PURE__ */ ((PaymentTermsType2) => {
    PaymentTermsType2["RECEIPT"] = "RECEIPT";
    PaymentTermsType2["NET"] = "NET";
    PaymentTermsType2["FIXED"] = "FIXED";
    PaymentTermsType2["FULFILLMENT"] = "FULFILLMENT";
    PaymentTermsType2["UNKNOWN"] = "UNKNOWN";
    return PaymentTermsType2;
  })(PaymentTermsType || {});
  var PaymentTermsUpdateUserErrorCode = /* @__PURE__ */ ((PaymentTermsUpdateUserErrorCode2) => {
    PaymentTermsUpdateUserErrorCode2["PAYMENT_TERMS_UPDATE_UNSUCCESSFUL"] = "PAYMENT_TERMS_UPDATE_UNSUCCESSFUL";
    return PaymentTermsUpdateUserErrorCode2;
  })(PaymentTermsUpdateUserErrorCode || {});
  var PaypalExpressSubscriptionsGatewayStatus = /* @__PURE__ */ ((PaypalExpressSubscriptionsGatewayStatus2) => {
    PaypalExpressSubscriptionsGatewayStatus2["ENABLED"] = "ENABLED";
    PaypalExpressSubscriptionsGatewayStatus2["DISABLED"] = "DISABLED";
    PaypalExpressSubscriptionsGatewayStatus2["PENDING"] = "PENDING";
    return PaypalExpressSubscriptionsGatewayStatus2;
  })(PaypalExpressSubscriptionsGatewayStatus || {});
  var PriceListAdjustmentType = /* @__PURE__ */ ((PriceListAdjustmentType2) => {
    PriceListAdjustmentType2["PERCENTAGE_DECREASE"] = "PERCENTAGE_DECREASE";
    PriceListAdjustmentType2["PERCENTAGE_INCREASE"] = "PERCENTAGE_INCREASE";
    return PriceListAdjustmentType2;
  })(PriceListAdjustmentType || {});
  var PriceListPriceOriginType = /* @__PURE__ */ ((PriceListPriceOriginType2) => {
    PriceListPriceOriginType2["FIXED"] = "FIXED";
    PriceListPriceOriginType2["RELATIVE"] = "RELATIVE";
    return PriceListPriceOriginType2;
  })(PriceListPriceOriginType || {});
  var PriceListPriceUserErrorCode = /* @__PURE__ */ ((PriceListPriceUserErrorCode2) => {
    PriceListPriceUserErrorCode2["BLANK"] = "BLANK";
    PriceListPriceUserErrorCode2["PRICE_LIST_NOT_FOUND"] = "PRICE_LIST_NOT_FOUND";
    PriceListPriceUserErrorCode2["PRICE_LIST_CURRENCY_MISMATCH"] = "PRICE_LIST_CURRENCY_MISMATCH";
    PriceListPriceUserErrorCode2["VARIANT_NOT_FOUND"] = "VARIANT_NOT_FOUND";
    PriceListPriceUserErrorCode2["PRICE_NOT_FIXED"] = "PRICE_NOT_FIXED";
    return PriceListPriceUserErrorCode2;
  })(PriceListPriceUserErrorCode || {});
  var PriceListSortKeys = /* @__PURE__ */ ((PriceListSortKeys2) => {
    PriceListSortKeys2["NAME"] = "NAME";
    PriceListSortKeys2["ID"] = "ID";
    PriceListSortKeys2["RELEVANCE"] = "RELEVANCE";
    return PriceListSortKeys2;
  })(PriceListSortKeys || {});
  var PriceListUserErrorCode = /* @__PURE__ */ ((PriceListUserErrorCode2) => {
    PriceListUserErrorCode2["TAKEN"] = "TAKEN";
    PriceListUserErrorCode2["PRICE_LIST_NOT_FOUND"] = "PRICE_LIST_NOT_FOUND";
    PriceListUserErrorCode2["CONTEXT_RULE_LIMIT_REACHED"] = "CONTEXT_RULE_LIMIT_REACHED";
    PriceListUserErrorCode2["CONTEXT_RULE_COUNTRIES_LIMIT"] = "CONTEXT_RULE_COUNTRIES_LIMIT";
    PriceListUserErrorCode2["CURRENCY_COUNTRY_MISMATCH"] = "CURRENCY_COUNTRY_MISMATCH";
    PriceListUserErrorCode2["COUNTRY_CURRENCY_MISMATCH"] = "COUNTRY_CURRENCY_MISMATCH";
    PriceListUserErrorCode2["CURRENCY_MARKET_MISMATCH"] = "CURRENCY_MARKET_MISMATCH";
    PriceListUserErrorCode2["MARKET_CURRENCY_MISMATCH"] = "MARKET_CURRENCY_MISMATCH";
    PriceListUserErrorCode2["INVALID_ADJUSTMENT_VALUE"] = "INVALID_ADJUSTMENT_VALUE";
    PriceListUserErrorCode2["CONTEXT_RULE_COUNTRY_TAKEN"] = "CONTEXT_RULE_COUNTRY_TAKEN";
    PriceListUserErrorCode2["CONTEXT_RULE_LIMIT_ONE_OPTION"] = "CONTEXT_RULE_LIMIT_ONE_OPTION";
    PriceListUserErrorCode2["CONTEXT_RULE_MARKET_NOT_FOUND"] = "CONTEXT_RULE_MARKET_NOT_FOUND";
    PriceListUserErrorCode2["CONTEXT_RULE_MARKET_TAKEN"] = "CONTEXT_RULE_MARKET_TAKEN";
    PriceListUserErrorCode2["CURRENCY_NOT_SUPPORTED"] = "CURRENCY_NOT_SUPPORTED";
    PriceListUserErrorCode2["PRICE_LIST_NOT_ALLOWED_FOR_PRIMARY_MARKET"] = "PRICE_LIST_NOT_ALLOWED_FOR_PRIMARY_MARKET";
    return PriceListUserErrorCode2;
  })(PriceListUserErrorCode || {});
  var PriceRuleAllocationMethod = /* @__PURE__ */ ((PriceRuleAllocationMethod2) => {
    PriceRuleAllocationMethod2["EACH"] = "EACH";
    PriceRuleAllocationMethod2["ACROSS"] = "ACROSS";
    return PriceRuleAllocationMethod2;
  })(PriceRuleAllocationMethod || {});
  var PriceRuleErrorCode = /* @__PURE__ */ ((PriceRuleErrorCode2) => {
    PriceRuleErrorCode2["BLANK"] = "BLANK";
    PriceRuleErrorCode2["EQUAL_TO"] = "EQUAL_TO";
    PriceRuleErrorCode2["GREATER_THAN"] = "GREATER_THAN";
    PriceRuleErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    PriceRuleErrorCode2["INVALID"] = "INVALID";
    PriceRuleErrorCode2["LESS_THAN"] = "LESS_THAN";
    PriceRuleErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    PriceRuleErrorCode2["TAKEN"] = "TAKEN";
    PriceRuleErrorCode2["TOO_LONG"] = "TOO_LONG";
    PriceRuleErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    PriceRuleErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    PriceRuleErrorCode2["TOO_MANY_ARGUMENTS"] = "TOO_MANY_ARGUMENTS";
    PriceRuleErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    PriceRuleErrorCode2["EXCEEDED_MAX"] = "EXCEEDED_MAX";
    PriceRuleErrorCode2["PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO"] = "PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO";
    PriceRuleErrorCode2["PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO"] = "PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO";
    PriceRuleErrorCode2["PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE"] = "PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE";
    PriceRuleErrorCode2["SHOP_EXCEEDED_MAX_PRICE_RULES"] = "SHOP_EXCEEDED_MAX_PRICE_RULES";
    PriceRuleErrorCode2["END_DATE_BEFORE_START_DATE"] = "END_DATE_BEFORE_START_DATE";
    PriceRuleErrorCode2["PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE"] = "PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE";
    PriceRuleErrorCode2["PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT"] = "PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT";
    PriceRuleErrorCode2["ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION"] = "ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION";
    PriceRuleErrorCode2["APPLIES_ON_NOTHING"] = "APPLIES_ON_NOTHING";
    PriceRuleErrorCode2["MULTIPLE_RECURRING_CYCLE_LIMIT_FOR_NON_SUBSCRIPTION_ITEMS"] = "MULTIPLE_RECURRING_CYCLE_LIMIT_FOR_NON_SUBSCRIPTION_ITEMS";
    PriceRuleErrorCode2["BOGO_INVALID_TARGET_SELECTION"] = "BOGO_INVALID_TARGET_SELECTION";
    PriceRuleErrorCode2["BOGO_INVALID_TARGET_TYPE"] = "BOGO_INVALID_TARGET_TYPE";
    PriceRuleErrorCode2["BOGO_INVALID_VALUE_TYPE"] = "BOGO_INVALID_VALUE_TYPE";
    PriceRuleErrorCode2["DISCOUNT_CODE_DUPLICATE"] = "DISCOUNT_CODE_DUPLICATE";
    PriceRuleErrorCode2["BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED"] = "BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED";
    PriceRuleErrorCode2["CUSTOMER_SAVED_SEARCH_DUPLICATE"] = "CUSTOMER_SAVED_SEARCH_DUPLICATE";
    PriceRuleErrorCode2["CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX"] = "CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX";
    PriceRuleErrorCode2["CUSTOMER_SAVED_SEARCH_INVALID"] = "CUSTOMER_SAVED_SEARCH_INVALID";
    PriceRuleErrorCode2["CUSTOMER_PREREQUISITES_EXCEEDED_MAX"] = "CUSTOMER_PREREQUISITES_EXCEEDED_MAX";
    PriceRuleErrorCode2["CUSTOMER_PREREQUISITES_INVALID_SELECTION"] = "CUSTOMER_PREREQUISITES_INVALID_SELECTION";
    PriceRuleErrorCode2["CUSTOMER_PREREQUISITE_DUPLICATE"] = "CUSTOMER_PREREQUISITE_DUPLICATE";
    PriceRuleErrorCode2["CUSTOMER_PREREQUISITES_MISSING"] = "CUSTOMER_PREREQUISITES_MISSING";
    PriceRuleErrorCode2["BOTH_CUSTOMER_AND_SEGMENT_PREREQUISITES_SELECTED"] = "BOTH_CUSTOMER_AND_SEGMENT_PREREQUISITES_SELECTED";
    PriceRuleErrorCode2["BOTH_SAVED_SEARCH_AND_SEGMENT_PREREQUISITES_SELECTED"] = "BOTH_SAVED_SEARCH_AND_SEGMENT_PREREQUISITES_SELECTED";
    PriceRuleErrorCode2["CUSTOMER_SEGMENT_EXCEEDED_MAX"] = "CUSTOMER_SEGMENT_EXCEEDED_MAX";
    PriceRuleErrorCode2["CUSTOMER_SEGMENT_INVALID"] = "CUSTOMER_SEGMENT_INVALID";
    PriceRuleErrorCode2["CUSTOMER_SEGMENT_PREREQUISITE_DUPLICATE"] = "CUSTOMER_SEGMENT_PREREQUISITE_DUPLICATE";
    PriceRuleErrorCode2["CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS"] = "CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_DUPLICATE_COLLECTION"] = "ITEM_PREREQUISITES_DUPLICATE_COLLECTION";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_DUPLICATE_PRODUCT"] = "ITEM_PREREQUISITES_DUPLICATE_PRODUCT";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_DUPLICATE_VARIANT"] = "ITEM_PREREQUISITES_DUPLICATE_VARIANT";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_EXCEEDED_MAX"] = "ITEM_PREREQUISITES_EXCEEDED_MAX";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_INVALID_COLLECTION"] = "ITEM_PREREQUISITES_INVALID_COLLECTION";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_INVALID_TYPE"] = "ITEM_PREREQUISITES_INVALID_TYPE";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_INVALID_PRODUCT"] = "ITEM_PREREQUISITES_INVALID_PRODUCT";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_INVALID_VARIANT"] = "ITEM_PREREQUISITES_INVALID_VARIANT";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_MUST_BE_EMPTY"] = "ITEM_PREREQUISITES_MUST_BE_EMPTY";
    PriceRuleErrorCode2["ITEM_PREREQUISITES_MISSING"] = "ITEM_PREREQUISITES_MISSING";
    PriceRuleErrorCode2["CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS"] = "CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION"] = "ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT"] = "ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_DUPLICATE_VARIANT"] = "ITEM_ENTITLEMENTS_DUPLICATE_VARIANT";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT";
    PriceRuleErrorCode2["ITEM_ENTITLEMENT_INVALID_TYPE"] = "ITEM_ENTITLEMENT_INVALID_TYPE";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_INVALID_COLLECTION"] = "ITEM_ENTITLEMENTS_INVALID_COLLECTION";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_INVALID_PRODUCT"] = "ITEM_ENTITLEMENTS_INVALID_PRODUCT";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_INVALID_VARIANT"] = "ITEM_ENTITLEMENTS_INVALID_VARIANT";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION"] = "ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION";
    PriceRuleErrorCode2["ITEM_ENTITLEMENTS_MISSING"] = "ITEM_ENTITLEMENTS_MISSING";
    PriceRuleErrorCode2["VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT"] = "VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT";
    PriceRuleErrorCode2["SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY"] = "SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY";
    PriceRuleErrorCode2["SHIPPING_ENTITLEMENTS_EXCEEDED_MAX"] = "SHIPPING_ENTITLEMENTS_EXCEEDED_MAX";
    PriceRuleErrorCode2["SHIPPING_ENTITLEMENTS_INVALID_COUNTRY"] = "SHIPPING_ENTITLEMENTS_INVALID_COUNTRY";
    PriceRuleErrorCode2["SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION"] = "SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION";
    PriceRuleErrorCode2["SHIPPING_ENTITLEMENTS_MISSING"] = "SHIPPING_ENTITLEMENTS_MISSING";
    PriceRuleErrorCode2["SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE"] = "SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE";
    PriceRuleErrorCode2["INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE"] = "INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE";
    PriceRuleErrorCode2["INVALID_COMBINES_WITH_FOR_DISCOUNT_CLASS"] = "INVALID_COMBINES_WITH_FOR_DISCOUNT_CLASS";
    PriceRuleErrorCode2["INVALID_DISCOUNT_CLASS_FOR_PRICE_RULE"] = "INVALID_DISCOUNT_CLASS_FOR_PRICE_RULE";
    return PriceRuleErrorCode2;
  })(PriceRuleErrorCode || {});
  var PriceRuleFeature = /* @__PURE__ */ ((PriceRuleFeature2) => {
    PriceRuleFeature2["BUY_ONE_GET_ONE"] = "BUY_ONE_GET_ONE";
    PriceRuleFeature2["BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT"] = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT";
    PriceRuleFeature2["BULK"] = "BULK";
    PriceRuleFeature2["SPECIFIC_CUSTOMERS"] = "SPECIFIC_CUSTOMERS";
    PriceRuleFeature2["QUANTITY_DISCOUNTS"] = "QUANTITY_DISCOUNTS";
    return PriceRuleFeature2;
  })(PriceRuleFeature || {});
  var PriceRuleShareableUrlTargetType = /* @__PURE__ */ ((PriceRuleShareableUrlTargetType2) => {
    PriceRuleShareableUrlTargetType2["HOME"] = "HOME";
    PriceRuleShareableUrlTargetType2["PRODUCT"] = "PRODUCT";
    PriceRuleShareableUrlTargetType2["COLLECTION"] = "COLLECTION";
    return PriceRuleShareableUrlTargetType2;
  })(PriceRuleShareableUrlTargetType || {});
  var PriceRuleSortKeys = /* @__PURE__ */ ((PriceRuleSortKeys2) => {
    PriceRuleSortKeys2["STARTS_AT"] = "STARTS_AT";
    PriceRuleSortKeys2["ENDS_AT"] = "ENDS_AT";
    PriceRuleSortKeys2["TITLE"] = "TITLE";
    PriceRuleSortKeys2["CREATED_AT"] = "CREATED_AT";
    PriceRuleSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    PriceRuleSortKeys2["ID"] = "ID";
    PriceRuleSortKeys2["RELEVANCE"] = "RELEVANCE";
    return PriceRuleSortKeys2;
  })(PriceRuleSortKeys || {});
  var PriceRuleStatus = /* @__PURE__ */ ((PriceRuleStatus2) => {
    PriceRuleStatus2["ACTIVE"] = "ACTIVE";
    PriceRuleStatus2["EXPIRED"] = "EXPIRED";
    PriceRuleStatus2["SCHEDULED"] = "SCHEDULED";
    return PriceRuleStatus2;
  })(PriceRuleStatus || {});
  var PriceRuleTarget = /* @__PURE__ */ ((PriceRuleTarget2) => {
    PriceRuleTarget2["LINE_ITEM"] = "LINE_ITEM";
    PriceRuleTarget2["SHIPPING_LINE"] = "SHIPPING_LINE";
    return PriceRuleTarget2;
  })(PriceRuleTarget || {});
  var PriceRuleTrait = /* @__PURE__ */ ((PriceRuleTrait2) => {
    PriceRuleTrait2["BUY_ONE_GET_ONE"] = "BUY_ONE_GET_ONE";
    PriceRuleTrait2["BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT"] = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT";
    PriceRuleTrait2["BULK"] = "BULK";
    PriceRuleTrait2["SPECIFIC_CUSTOMERS"] = "SPECIFIC_CUSTOMERS";
    PriceRuleTrait2["QUANTITY_DISCOUNTS"] = "QUANTITY_DISCOUNTS";
    return PriceRuleTrait2;
  })(PriceRuleTrait || {});
  var PrivateMetafieldValueType = /* @__PURE__ */ ((PrivateMetafieldValueType2) => {
    PrivateMetafieldValueType2["STRING"] = "STRING";
    PrivateMetafieldValueType2["INTEGER"] = "INTEGER";
    PrivateMetafieldValueType2["JSON_STRING"] = "JSON_STRING";
    return PrivateMetafieldValueType2;
  })(PrivateMetafieldValueType || {});
  var ProductChangeStatusUserErrorCode = /* @__PURE__ */ ((ProductChangeStatusUserErrorCode2) => {
    ProductChangeStatusUserErrorCode2["PRODUCT_NOT_FOUND"] = "PRODUCT_NOT_FOUND";
    return ProductChangeStatusUserErrorCode2;
  })(ProductChangeStatusUserErrorCode || {});
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
  var ProductDeleteUserErrorCode = /* @__PURE__ */ ((ProductDeleteUserErrorCode2) => {
    ProductDeleteUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    ProductDeleteUserErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    return ProductDeleteUserErrorCode2;
  })(ProductDeleteUserErrorCode || {});
  var ProductDuplicateUserErrorCode = /* @__PURE__ */ ((ProductDuplicateUserErrorCode2) => {
    ProductDuplicateUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    ProductDuplicateUserErrorCode2["EMPTY_VARIANT"] = "EMPTY_VARIANT";
    ProductDuplicateUserErrorCode2["EMPTY_TITLE"] = "EMPTY_TITLE";
    ProductDuplicateUserErrorCode2["GENERIC_ERROR"] = "GENERIC_ERROR";
    ProductDuplicateUserErrorCode2["FAILED_TO_SAVE"] = "FAILED_TO_SAVE";
    return ProductDuplicateUserErrorCode2;
  })(ProductDuplicateUserErrorCode || {});
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
    ProductSortKeys2["INVENTORY_TOTAL"] = "INVENTORY_TOTAL";
    ProductSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    ProductSortKeys2["CREATED_AT"] = "CREATED_AT";
    ProductSortKeys2["PUBLISHED_AT"] = "PUBLISHED_AT";
    ProductSortKeys2["ID"] = "ID";
    ProductSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProductSortKeys2;
  })(ProductSortKeys || {});
  var ProductStatus = /* @__PURE__ */ ((ProductStatus2) => {
    ProductStatus2["ACTIVE"] = "ACTIVE";
    ProductStatus2["ARCHIVED"] = "ARCHIVED";
    ProductStatus2["DRAFT"] = "DRAFT";
    return ProductStatus2;
  })(ProductStatus || {});
  var ProductVariantInventoryManagement = /* @__PURE__ */ ((ProductVariantInventoryManagement2) => {
    ProductVariantInventoryManagement2["SHOPIFY"] = "SHOPIFY";
    ProductVariantInventoryManagement2["NOT_MANAGED"] = "NOT_MANAGED";
    ProductVariantInventoryManagement2["FULFILLMENT_SERVICE"] = "FULFILLMENT_SERVICE";
    return ProductVariantInventoryManagement2;
  })(ProductVariantInventoryManagement || {});
  var ProductVariantInventoryPolicy = /* @__PURE__ */ ((ProductVariantInventoryPolicy2) => {
    ProductVariantInventoryPolicy2["DENY"] = "DENY";
    ProductVariantInventoryPolicy2["CONTINUE"] = "CONTINUE";
    return ProductVariantInventoryPolicy2;
  })(ProductVariantInventoryPolicy || {});
  var ProductVariantSortKeys = /* @__PURE__ */ ((ProductVariantSortKeys2) => {
    ProductVariantSortKeys2["TITLE"] = "TITLE";
    ProductVariantSortKeys2["NAME"] = "NAME";
    ProductVariantSortKeys2["SKU"] = "SKU";
    ProductVariantSortKeys2["INVENTORY_QUANTITY"] = "INVENTORY_QUANTITY";
    ProductVariantSortKeys2["INVENTORY_MANAGEMENT"] = "INVENTORY_MANAGEMENT";
    ProductVariantSortKeys2["INVENTORY_LEVELS_AVAILABLE"] = "INVENTORY_LEVELS_AVAILABLE";
    ProductVariantSortKeys2["INVENTORY_POLICY"] = "INVENTORY_POLICY";
    ProductVariantSortKeys2["FULL_TITLE"] = "FULL_TITLE";
    ProductVariantSortKeys2["POPULAR"] = "POPULAR";
    ProductVariantSortKeys2["POSITION"] = "POSITION";
    ProductVariantSortKeys2["ID"] = "ID";
    ProductVariantSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProductVariantSortKeys2;
  })(ProductVariantSortKeys || {});
  var ProductVariantsBulkCreateUserErrorCode = /* @__PURE__ */ ((ProductVariantsBulkCreateUserErrorCode2) => {
    ProductVariantsBulkCreateUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    ProductVariantsBulkCreateUserErrorCode2["NO_KEY_ON_CREATE"] = "NO_KEY_ON_CREATE";
    ProductVariantsBulkCreateUserErrorCode2["VARIANT_ALREADY_EXISTS"] = "VARIANT_ALREADY_EXISTS";
    ProductVariantsBulkCreateUserErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    ProductVariantsBulkCreateUserErrorCode2["NEED_TO_ADD_OPTION_VALUES"] = "NEED_TO_ADD_OPTION_VALUES";
    ProductVariantsBulkCreateUserErrorCode2["OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS"] = "OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS";
    ProductVariantsBulkCreateUserErrorCode2["TOO_MANY_INVENTORY_LOCATIONS"] = "TOO_MANY_INVENTORY_LOCATIONS";
    ProductVariantsBulkCreateUserErrorCode2["SUBSCRIPTION_VIOLATION"] = "SUBSCRIPTION_VIOLATION";
    ProductVariantsBulkCreateUserErrorCode2["VARIANT_ALREADY_EXISTS_CHANGE_OPTION_VALUE"] = "VARIANT_ALREADY_EXISTS_CHANGE_OPTION_VALUE";
    ProductVariantsBulkCreateUserErrorCode2["TRACKED_VARIANT_LOCATION_NOT_FOUND"] = "TRACKED_VARIANT_LOCATION_NOT_FOUND";
    ProductVariantsBulkCreateUserErrorCode2["MUST_BE_FOR_THIS_PRODUCT"] = "MUST_BE_FOR_THIS_PRODUCT";
    ProductVariantsBulkCreateUserErrorCode2["NOT_DEFINED_FOR_SHOP"] = "NOT_DEFINED_FOR_SHOP";
    ProductVariantsBulkCreateUserErrorCode2["INVALID"] = "INVALID";
    ProductVariantsBulkCreateUserErrorCode2["NEGATIVE_PRICE_VALUE"] = "NEGATIVE_PRICE_VALUE";
    return ProductVariantsBulkCreateUserErrorCode2;
  })(ProductVariantsBulkCreateUserErrorCode || {});
  var ProductVariantsBulkDeleteUserErrorCode = /* @__PURE__ */ ((ProductVariantsBulkDeleteUserErrorCode2) => {
    ProductVariantsBulkDeleteUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    ProductVariantsBulkDeleteUserErrorCode2["CANNOT_DELETE_LAST_VARIANT"] = "CANNOT_DELETE_LAST_VARIANT";
    ProductVariantsBulkDeleteUserErrorCode2["AT_LEAST_ONE_VARIANT_DOES_NOT_BELONG_TO_THE_PRODUCT"] = "AT_LEAST_ONE_VARIANT_DOES_NOT_BELONG_TO_THE_PRODUCT";
    return ProductVariantsBulkDeleteUserErrorCode2;
  })(ProductVariantsBulkDeleteUserErrorCode || {});
  var ProductVariantsBulkReorderUserErrorCode = /* @__PURE__ */ ((ProductVariantsBulkReorderUserErrorCode2) => {
    ProductVariantsBulkReorderUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    ProductVariantsBulkReorderUserErrorCode2["MISSING_VARIANT"] = "MISSING_VARIANT";
    ProductVariantsBulkReorderUserErrorCode2["INVALID_POSITION"] = "INVALID_POSITION";
    ProductVariantsBulkReorderUserErrorCode2["DUPLICATED_VARIANT_ID"] = "DUPLICATED_VARIANT_ID";
    return ProductVariantsBulkReorderUserErrorCode2;
  })(ProductVariantsBulkReorderUserErrorCode || {});
  var ProductVariantsBulkUpdateUserErrorCode = /* @__PURE__ */ ((ProductVariantsBulkUpdateUserErrorCode2) => {
    ProductVariantsBulkUpdateUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    ProductVariantsBulkUpdateUserErrorCode2["PRODUCT_VARIANT_ID_MISSING"] = "PRODUCT_VARIANT_ID_MISSING";
    ProductVariantsBulkUpdateUserErrorCode2["PRODUCT_VARIANT_DOES_NOT_EXIST"] = "PRODUCT_VARIANT_DOES_NOT_EXIST";
    ProductVariantsBulkUpdateUserErrorCode2["NO_INVENTORY_QUANTITIES_ON_VARIANTS_UPDATE"] = "NO_INVENTORY_QUANTITIES_ON_VARIANTS_UPDATE";
    ProductVariantsBulkUpdateUserErrorCode2["VARIANT_ALREADY_EXISTS"] = "VARIANT_ALREADY_EXISTS";
    ProductVariantsBulkUpdateUserErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    ProductVariantsBulkUpdateUserErrorCode2["NEED_TO_ADD_OPTION_VALUES"] = "NEED_TO_ADD_OPTION_VALUES";
    ProductVariantsBulkUpdateUserErrorCode2["OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS"] = "OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS";
    ProductVariantsBulkUpdateUserErrorCode2["SUBSCRIPTION_VIOLATION"] = "SUBSCRIPTION_VIOLATION";
    ProductVariantsBulkUpdateUserErrorCode2["NO_INVENTORY_QUANTITES_DURING_UPDATE"] = "NO_INVENTORY_QUANTITES_DURING_UPDATE";
    ProductVariantsBulkUpdateUserErrorCode2["NEGATIVE_PRICE_VALUE"] = "NEGATIVE_PRICE_VALUE";
    return ProductVariantsBulkUpdateUserErrorCode2;
  })(ProductVariantsBulkUpdateUserErrorCode || {});
  var ProfileItemSortKeys = /* @__PURE__ */ ((ProfileItemSortKeys2) => {
    ProfileItemSortKeys2["TITLE"] = "TITLE";
    ProfileItemSortKeys2["PRODUCT_TYPE"] = "PRODUCT_TYPE";
    ProfileItemSortKeys2["VENDOR"] = "VENDOR";
    ProfileItemSortKeys2["INVENTORY_TOTAL"] = "INVENTORY_TOTAL";
    ProfileItemSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    ProfileItemSortKeys2["CREATED_AT"] = "CREATED_AT";
    ProfileItemSortKeys2["PUBLISHED_AT"] = "PUBLISHED_AT";
    ProfileItemSortKeys2["ID"] = "ID";
    ProfileItemSortKeys2["RELEVANCE"] = "RELEVANCE";
    return ProfileItemSortKeys2;
  })(ProfileItemSortKeys || {});
  var PubSubWebhookSubscriptionCreateUserErrorCode = /* @__PURE__ */ ((PubSubWebhookSubscriptionCreateUserErrorCode2) => {
    PubSubWebhookSubscriptionCreateUserErrorCode2["INVALID_PARAMETERS"] = "INVALID_PARAMETERS";
    return PubSubWebhookSubscriptionCreateUserErrorCode2;
  })(PubSubWebhookSubscriptionCreateUserErrorCode || {});
  var PubSubWebhookSubscriptionUpdateUserErrorCode = /* @__PURE__ */ ((PubSubWebhookSubscriptionUpdateUserErrorCode2) => {
    PubSubWebhookSubscriptionUpdateUserErrorCode2["INVALID_PARAMETERS"] = "INVALID_PARAMETERS";
    return PubSubWebhookSubscriptionUpdateUserErrorCode2;
  })(PubSubWebhookSubscriptionUpdateUserErrorCode || {});
  var RefundDutyRefundType = /* @__PURE__ */ ((RefundDutyRefundType2) => {
    RefundDutyRefundType2["PROPORTIONAL"] = "PROPORTIONAL";
    RefundDutyRefundType2["FULL"] = "FULL";
    return RefundDutyRefundType2;
  })(RefundDutyRefundType || {});
  var RefundLineItemRestockType = /* @__PURE__ */ ((RefundLineItemRestockType2) => {
    RefundLineItemRestockType2["RETURN"] = "RETURN";
    RefundLineItemRestockType2["CANCEL"] = "CANCEL";
    RefundLineItemRestockType2["LEGACY_RESTOCK"] = "LEGACY_RESTOCK";
    RefundLineItemRestockType2["NO_RESTOCK"] = "NO_RESTOCK";
    return RefundLineItemRestockType2;
  })(RefundLineItemRestockType || {});
  var ResourceAlertIcon = /* @__PURE__ */ ((ResourceAlertIcon2) => {
    ResourceAlertIcon2["CHECKMARK_CIRCLE"] = "CHECKMARK_CIRCLE";
    ResourceAlertIcon2["INFORMATION_CIRCLE"] = "INFORMATION_CIRCLE";
    return ResourceAlertIcon2;
  })(ResourceAlertIcon || {});
  var ResourceAlertSeverity = /* @__PURE__ */ ((ResourceAlertSeverity2) => {
    ResourceAlertSeverity2["DEFAULT"] = "DEFAULT";
    ResourceAlertSeverity2["INFO"] = "INFO";
    ResourceAlertSeverity2["WARNING"] = "WARNING";
    ResourceAlertSeverity2["SUCCESS"] = "SUCCESS";
    ResourceAlertSeverity2["CRITICAL"] = "CRITICAL";
    ResourceAlertSeverity2["ERROR"] = "ERROR";
    return ResourceAlertSeverity2;
  })(ResourceAlertSeverity || {});
  var ResourceFeedbackState = /* @__PURE__ */ ((ResourceFeedbackState2) => {
    ResourceFeedbackState2["ACCEPTED"] = "ACCEPTED";
    ResourceFeedbackState2["REQUIRES_ACTION"] = "REQUIRES_ACTION";
    return ResourceFeedbackState2;
  })(ResourceFeedbackState || {});
  var ReturnDeclineReason = /* @__PURE__ */ ((ReturnDeclineReason2) => {
    ReturnDeclineReason2["RETURN_PERIOD_ENDED"] = "RETURN_PERIOD_ENDED";
    ReturnDeclineReason2["FINAL_SALE"] = "FINAL_SALE";
    ReturnDeclineReason2["OTHER"] = "OTHER";
    return ReturnDeclineReason2;
  })(ReturnDeclineReason || {});
  var ReturnErrorCode = /* @__PURE__ */ ((ReturnErrorCode2) => {
    ReturnErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ReturnErrorCode2["TOO_MANY_ARGUMENTS"] = "TOO_MANY_ARGUMENTS";
    ReturnErrorCode2["BLANK"] = "BLANK";
    ReturnErrorCode2["EQUAL_TO"] = "EQUAL_TO";
    ReturnErrorCode2["GREATER_THAN"] = "GREATER_THAN";
    ReturnErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    ReturnErrorCode2["INCLUSION"] = "INCLUSION";
    ReturnErrorCode2["INVALID"] = "INVALID";
    ReturnErrorCode2["LESS_THAN"] = "LESS_THAN";
    ReturnErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    ReturnErrorCode2["NOT_A_NUMBER"] = "NOT_A_NUMBER";
    ReturnErrorCode2["PRESENT"] = "PRESENT";
    ReturnErrorCode2["TAKEN"] = "TAKEN";
    ReturnErrorCode2["TOO_BIG"] = "TOO_BIG";
    ReturnErrorCode2["TOO_LONG"] = "TOO_LONG";
    ReturnErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    ReturnErrorCode2["WRONG_LENGTH"] = "WRONG_LENGTH";
    ReturnErrorCode2["ALREADY_EXISTS"] = "ALREADY_EXISTS";
    ReturnErrorCode2["CREATION_FAILED"] = "CREATION_FAILED";
    ReturnErrorCode2["NOT_EDITABLE"] = "NOT_EDITABLE";
    ReturnErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    ReturnErrorCode2["INVALID_STATE"] = "INVALID_STATE";
    ReturnErrorCode2["FEATURE_NOT_ENABLED"] = "FEATURE_NOT_ENABLED";
    ReturnErrorCode2["NOTIFICATION_FAILED"] = "NOTIFICATION_FAILED";
    return ReturnErrorCode2;
  })(ReturnErrorCode || {});
  var ReturnReason = /* @__PURE__ */ ((ReturnReason2) => {
    ReturnReason2["SIZE_TOO_SMALL"] = "SIZE_TOO_SMALL";
    ReturnReason2["SIZE_TOO_LARGE"] = "SIZE_TOO_LARGE";
    ReturnReason2["UNWANTED"] = "UNWANTED";
    ReturnReason2["NOT_AS_DESCRIBED"] = "NOT_AS_DESCRIBED";
    ReturnReason2["WRONG_ITEM"] = "WRONG_ITEM";
    ReturnReason2["DEFECTIVE"] = "DEFECTIVE";
    ReturnReason2["STYLE"] = "STYLE";
    ReturnReason2["COLOR"] = "COLOR";
    ReturnReason2["OTHER"] = "OTHER";
    ReturnReason2["UNKNOWN"] = "UNKNOWN";
    return ReturnReason2;
  })(ReturnReason || {});
  var ReturnStatus = /* @__PURE__ */ ((ReturnStatus2) => {
    ReturnStatus2["CANCELED"] = "CANCELED";
    ReturnStatus2["CLOSED"] = "CLOSED";
    ReturnStatus2["OPEN"] = "OPEN";
    ReturnStatus2["REQUESTED"] = "REQUESTED";
    ReturnStatus2["DECLINED"] = "DECLINED";
    return ReturnStatus2;
  })(ReturnStatus || {});
  var ReverseFulfillmentOrderDispositionType = /* @__PURE__ */ ((ReverseFulfillmentOrderDispositionType2) => {
    ReverseFulfillmentOrderDispositionType2["RESTOCKED"] = "RESTOCKED";
    ReverseFulfillmentOrderDispositionType2["PROCESSING_REQUIRED"] = "PROCESSING_REQUIRED";
    ReverseFulfillmentOrderDispositionType2["NOT_RESTOCKED"] = "NOT_RESTOCKED";
    ReverseFulfillmentOrderDispositionType2["MISSING"] = "MISSING";
    return ReverseFulfillmentOrderDispositionType2;
  })(ReverseFulfillmentOrderDispositionType || {});
  var ReverseFulfillmentOrderStatus = /* @__PURE__ */ ((ReverseFulfillmentOrderStatus2) => {
    ReverseFulfillmentOrderStatus2["CANCELED"] = "CANCELED";
    ReverseFulfillmentOrderStatus2["CLOSED"] = "CLOSED";
    ReverseFulfillmentOrderStatus2["OPEN"] = "OPEN";
    return ReverseFulfillmentOrderStatus2;
  })(ReverseFulfillmentOrderStatus || {});
  var ReverseFulfillmentOrderThirdPartyConfirmationStatus = /* @__PURE__ */ ((ReverseFulfillmentOrderThirdPartyConfirmationStatus2) => {
    ReverseFulfillmentOrderThirdPartyConfirmationStatus2["ACCEPTED"] = "ACCEPTED";
    ReverseFulfillmentOrderThirdPartyConfirmationStatus2["CANCEL_ACCEPTED"] = "CANCEL_ACCEPTED";
    ReverseFulfillmentOrderThirdPartyConfirmationStatus2["CANCEL_REJECTED"] = "CANCEL_REJECTED";
    ReverseFulfillmentOrderThirdPartyConfirmationStatus2["PENDING_ACCEPTANCE"] = "PENDING_ACCEPTANCE";
    ReverseFulfillmentOrderThirdPartyConfirmationStatus2["PENDING_CANCELATION"] = "PENDING_CANCELATION";
    ReverseFulfillmentOrderThirdPartyConfirmationStatus2["REJECTED"] = "REJECTED";
    return ReverseFulfillmentOrderThirdPartyConfirmationStatus2;
  })(ReverseFulfillmentOrderThirdPartyConfirmationStatus || {});
  var SaleActionType = /* @__PURE__ */ ((SaleActionType2) => {
    SaleActionType2["ORDER"] = "ORDER";
    SaleActionType2["RETURN"] = "RETURN";
    SaleActionType2["UPDATE"] = "UPDATE";
    SaleActionType2["UNKNOWN"] = "UNKNOWN";
    return SaleActionType2;
  })(SaleActionType || {});
  var SaleLineType = /* @__PURE__ */ ((SaleLineType2) => {
    SaleLineType2["PRODUCT"] = "PRODUCT";
    SaleLineType2["TIP"] = "TIP";
    SaleLineType2["GIFT_CARD"] = "GIFT_CARD";
    SaleLineType2["SHIPPING"] = "SHIPPING";
    SaleLineType2["DUTY"] = "DUTY";
    SaleLineType2["UNKNOWN"] = "UNKNOWN";
    SaleLineType2["ADJUSTMENT"] = "ADJUSTMENT";
    return SaleLineType2;
  })(SaleLineType || {});
  var ScriptTagDisplayScope = /* @__PURE__ */ ((ScriptTagDisplayScope2) => {
    ScriptTagDisplayScope2["ALL"] = "ALL";
    ScriptTagDisplayScope2["ORDER_STATUS"] = "ORDER_STATUS";
    ScriptTagDisplayScope2["ONLINE_STORE"] = "ONLINE_STORE";
    return ScriptTagDisplayScope2;
  })(ScriptTagDisplayScope || {});
  var SearchResultType = /* @__PURE__ */ ((SearchResultType2) => {
    SearchResultType2["CUSTOMER"] = "CUSTOMER";
    SearchResultType2["DRAFT_ORDER"] = "DRAFT_ORDER";
    SearchResultType2["PRODUCT"] = "PRODUCT";
    SearchResultType2["COLLECTION"] = "COLLECTION";
    SearchResultType2["FILE"] = "FILE";
    SearchResultType2["ONLINE_STORE_PAGE"] = "ONLINE_STORE_PAGE";
    SearchResultType2["ONLINE_STORE_BLOG"] = "ONLINE_STORE_BLOG";
    SearchResultType2["ONLINE_STORE_ARTICLE"] = "ONLINE_STORE_ARTICLE";
    SearchResultType2["URL_REDIRECT"] = "URL_REDIRECT";
    SearchResultType2["PRICE_RULE"] = "PRICE_RULE";
    SearchResultType2["DISCOUNT_REDEEM_CODE"] = "DISCOUNT_REDEEM_CODE";
    SearchResultType2["ORDER"] = "ORDER";
    return SearchResultType2;
  })(SearchResultType || {});
  var SegmentSortKeys = /* @__PURE__ */ ((SegmentSortKeys2) => {
    SegmentSortKeys2["CREATION_DATE"] = "CREATION_DATE";
    SegmentSortKeys2["LAST_EDIT_DATE"] = "LAST_EDIT_DATE";
    SegmentSortKeys2["ID"] = "ID";
    SegmentSortKeys2["RELEVANCE"] = "RELEVANCE";
    return SegmentSortKeys2;
  })(SegmentSortKeys || {});
  var SellingPlanAnchorType = /* @__PURE__ */ ((SellingPlanAnchorType2) => {
    SellingPlanAnchorType2["WEEKDAY"] = "WEEKDAY";
    SellingPlanAnchorType2["MONTHDAY"] = "MONTHDAY";
    SellingPlanAnchorType2["YEARDAY"] = "YEARDAY";
    return SellingPlanAnchorType2;
  })(SellingPlanAnchorType || {});
  var SellingPlanCategory = /* @__PURE__ */ ((SellingPlanCategory2) => {
    SellingPlanCategory2["OTHER"] = "OTHER";
    SellingPlanCategory2["PRE_ORDER"] = "PRE_ORDER";
    SellingPlanCategory2["SUBSCRIPTION"] = "SUBSCRIPTION";
    SellingPlanCategory2["TRY_BEFORE_YOU_BUY"] = "TRY_BEFORE_YOU_BUY";
    return SellingPlanCategory2;
  })(SellingPlanCategory || {});
  var SellingPlanCheckoutChargeType = /* @__PURE__ */ ((SellingPlanCheckoutChargeType2) => {
    SellingPlanCheckoutChargeType2["PERCENTAGE"] = "PERCENTAGE";
    SellingPlanCheckoutChargeType2["PRICE"] = "PRICE";
    return SellingPlanCheckoutChargeType2;
  })(SellingPlanCheckoutChargeType || {});
  var SellingPlanFixedDeliveryPolicyIntent = /* @__PURE__ */ ((SellingPlanFixedDeliveryPolicyIntent2) => {
    SellingPlanFixedDeliveryPolicyIntent2["FULFILLMENT_BEGIN"] = "FULFILLMENT_BEGIN";
    return SellingPlanFixedDeliveryPolicyIntent2;
  })(SellingPlanFixedDeliveryPolicyIntent || {});
  var SellingPlanFixedDeliveryPolicyPreAnchorBehavior = /* @__PURE__ */ ((SellingPlanFixedDeliveryPolicyPreAnchorBehavior2) => {
    SellingPlanFixedDeliveryPolicyPreAnchorBehavior2["ASAP"] = "ASAP";
    SellingPlanFixedDeliveryPolicyPreAnchorBehavior2["NEXT"] = "NEXT";
    return SellingPlanFixedDeliveryPolicyPreAnchorBehavior2;
  })(SellingPlanFixedDeliveryPolicyPreAnchorBehavior || {});
  var SellingPlanFulfillmentTrigger = /* @__PURE__ */ ((SellingPlanFulfillmentTrigger2) => {
    SellingPlanFulfillmentTrigger2["ANCHOR"] = "ANCHOR";
    SellingPlanFulfillmentTrigger2["ASAP"] = "ASAP";
    SellingPlanFulfillmentTrigger2["EXACT_TIME"] = "EXACT_TIME";
    SellingPlanFulfillmentTrigger2["UNKNOWN"] = "UNKNOWN";
    return SellingPlanFulfillmentTrigger2;
  })(SellingPlanFulfillmentTrigger || {});
  var SellingPlanGroupSortKeys = /* @__PURE__ */ ((SellingPlanGroupSortKeys2) => {
    SellingPlanGroupSortKeys2["NAME"] = "NAME";
    SellingPlanGroupSortKeys2["UPDATED_AT"] = "UPDATED_AT";
    SellingPlanGroupSortKeys2["CREATED_AT"] = "CREATED_AT";
    SellingPlanGroupSortKeys2["ID"] = "ID";
    SellingPlanGroupSortKeys2["RELEVANCE"] = "RELEVANCE";
    return SellingPlanGroupSortKeys2;
  })(SellingPlanGroupSortKeys || {});
  var SellingPlanGroupUserErrorCode = /* @__PURE__ */ ((SellingPlanGroupUserErrorCode2) => {
    SellingPlanGroupUserErrorCode2["BLANK"] = "BLANK";
    SellingPlanGroupUserErrorCode2["EQUAL_TO"] = "EQUAL_TO";
    SellingPlanGroupUserErrorCode2["GREATER_THAN"] = "GREATER_THAN";
    SellingPlanGroupUserErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    SellingPlanGroupUserErrorCode2["INCLUSION"] = "INCLUSION";
    SellingPlanGroupUserErrorCode2["INVALID"] = "INVALID";
    SellingPlanGroupUserErrorCode2["LESS_THAN"] = "LESS_THAN";
    SellingPlanGroupUserErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    SellingPlanGroupUserErrorCode2["NOT_A_NUMBER"] = "NOT_A_NUMBER";
    SellingPlanGroupUserErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    SellingPlanGroupUserErrorCode2["PRESENT"] = "PRESENT";
    SellingPlanGroupUserErrorCode2["TAKEN"] = "TAKEN";
    SellingPlanGroupUserErrorCode2["TOO_BIG"] = "TOO_BIG";
    SellingPlanGroupUserErrorCode2["TOO_LONG"] = "TOO_LONG";
    SellingPlanGroupUserErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    SellingPlanGroupUserErrorCode2["WRONG_LENGTH"] = "WRONG_LENGTH";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_COUNT_UPPER_BOUND"] = "SELLING_PLAN_COUNT_UPPER_BOUND";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_COUNT_LOWER_BOUND"] = "SELLING_PLAN_COUNT_LOWER_BOUND";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_MAX_CYCLES_MUST_BE_GREATER_THAN_MIN_CYCLES"] = "SELLING_PLAN_MAX_CYCLES_MUST_BE_GREATER_THAN_MIN_CYCLES";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_BILLING_AND_DELIVERY_POLICY_ANCHORS_MUST_BE_EQUAL"] = "SELLING_PLAN_BILLING_AND_DELIVERY_POLICY_ANCHORS_MUST_BE_EQUAL";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_BILLING_CYCLE_MUST_BE_A_MULTIPLE_OF_DELIVERY_CYCLE"] = "SELLING_PLAN_BILLING_CYCLE_MUST_BE_A_MULTIPLE_OF_DELIVERY_CYCLE";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_PRICING_POLICIES_MUST_CONTAIN_A_FIXED_PRICING_POLICY"] = "SELLING_PLAN_PRICING_POLICIES_MUST_CONTAIN_A_FIXED_PRICING_POLICY";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_MISSING_OPTION2_LABEL_ON_PARENT_GROUP"] = "SELLING_PLAN_MISSING_OPTION2_LABEL_ON_PARENT_GROUP";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_MISSING_OPTION3_LABEL_ON_PARENT_GROUP"] = "SELLING_PLAN_MISSING_OPTION3_LABEL_ON_PARENT_GROUP";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_OPTION2_REQUIRED_AS_DEFINED_ON_PARENT_GROUP"] = "SELLING_PLAN_OPTION2_REQUIRED_AS_DEFINED_ON_PARENT_GROUP";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_OPTION3_REQUIRED_AS_DEFINED_ON_PARENT_GROUP"] = "SELLING_PLAN_OPTION3_REQUIRED_AS_DEFINED_ON_PARENT_GROUP";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_PRICING_POLICIES_LIMIT"] = "SELLING_PLAN_PRICING_POLICIES_LIMIT";
    SellingPlanGroupUserErrorCode2["RESOURCE_LIST_CONTAINS_INVALID_IDS"] = "RESOURCE_LIST_CONTAINS_INVALID_IDS";
    SellingPlanGroupUserErrorCode2["PRODUCT_VARIANT_DOES_NOT_EXIST"] = "PRODUCT_VARIANT_DOES_NOT_EXIST";
    SellingPlanGroupUserErrorCode2["PRODUCT_DOES_NOT_EXIST"] = "PRODUCT_DOES_NOT_EXIST";
    SellingPlanGroupUserErrorCode2["GROUP_DOES_NOT_EXIST"] = "GROUP_DOES_NOT_EXIST";
    SellingPlanGroupUserErrorCode2["GROUP_COULD_NOT_BE_DELETED"] = "GROUP_COULD_NOT_BE_DELETED";
    SellingPlanGroupUserErrorCode2["ERROR_ADDING_RESOURCE_TO_GROUP"] = "ERROR_ADDING_RESOURCE_TO_GROUP";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_DELIVERY_POLICY_MISSING"] = "SELLING_PLAN_DELIVERY_POLICY_MISSING";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_BILLING_POLICY_MISSING"] = "SELLING_PLAN_BILLING_POLICY_MISSING";
    SellingPlanGroupUserErrorCode2["PLAN_DOES_NOT_EXIST"] = "PLAN_DOES_NOT_EXIST";
    SellingPlanGroupUserErrorCode2["PLAN_ID_MUST_BE_SPECIFIED_TO_UPDATE"] = "PLAN_ID_MUST_BE_SPECIFIED_TO_UPDATE";
    SellingPlanGroupUserErrorCode2["ONLY_NEED_ONE_BILLING_POLICY_TYPE"] = "ONLY_NEED_ONE_BILLING_POLICY_TYPE";
    SellingPlanGroupUserErrorCode2["ONLY_NEED_ONE_DELIVERY_POLICY_TYPE"] = "ONLY_NEED_ONE_DELIVERY_POLICY_TYPE";
    SellingPlanGroupUserErrorCode2["ONLY_NEED_ONE_PRICING_POLICY_TYPE"] = "ONLY_NEED_ONE_PRICING_POLICY_TYPE";
    SellingPlanGroupUserErrorCode2["BILLING_AND_DELIVERY_POLICY_TYPES_MUST_BE_THE_SAME"] = "BILLING_AND_DELIVERY_POLICY_TYPES_MUST_BE_THE_SAME";
    SellingPlanGroupUserErrorCode2["ONLY_NEED_ONE_PRICING_POLICY_VALUE"] = "ONLY_NEED_ONE_PRICING_POLICY_VALUE";
    SellingPlanGroupUserErrorCode2["PRICING_POLICY_ADJUSTMENT_VALUE_AND_TYPE_MUST_MATCH"] = "PRICING_POLICY_ADJUSTMENT_VALUE_AND_TYPE_MUST_MATCH";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_DUPLICATE_NAME"] = "SELLING_PLAN_DUPLICATE_NAME";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_DUPLICATE_OPTIONS"] = "SELLING_PLAN_DUPLICATE_OPTIONS";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_FIXED_PRICING_POLICIES_LIMIT"] = "SELLING_PLAN_FIXED_PRICING_POLICIES_LIMIT";
    SellingPlanGroupUserErrorCode2["REMAINING_BALANCE_CHARGE_EXACT_TIME_REQUIRED"] = "REMAINING_BALANCE_CHARGE_EXACT_TIME_REQUIRED";
    SellingPlanGroupUserErrorCode2["CHECKOUT_CHARGE_VALUE_AND_TYPE_MUST_MATCH"] = "CHECKOUT_CHARGE_VALUE_AND_TYPE_MUST_MATCH";
    SellingPlanGroupUserErrorCode2["ONLY_NEED_ONE_CHECKOUT_CHARGE_VALUE"] = "ONLY_NEED_ONE_CHECKOUT_CHARGE_VALUE";
    SellingPlanGroupUserErrorCode2["REMAINING_BALANCE_CHARGE_EXACT_TIME_NOT_ALLOWED"] = "REMAINING_BALANCE_CHARGE_EXACT_TIME_NOT_ALLOWED";
    SellingPlanGroupUserErrorCode2["REMAINING_BALANCE_CHARGE_TIME_AFTER_CHECKOUT_MUST_BE_GREATER_THAN_ZERO"] = "REMAINING_BALANCE_CHARGE_TIME_AFTER_CHECKOUT_MUST_BE_GREATER_THAN_ZERO";
    SellingPlanGroupUserErrorCode2["REMAINING_BALANCE_CHARGE_TRIGGER_ON_FULL_CHECKOUT"] = "REMAINING_BALANCE_CHARGE_TRIGGER_ON_FULL_CHECKOUT";
    SellingPlanGroupUserErrorCode2["REMAINING_BALANCE_CHARGE_TRIGGER_NO_REMAINING_BALANCE_ON_PARTIAL_PERCENTAGE_CHECKOUT_CHARGE"] = "REMAINING_BALANCE_CHARGE_TRIGGER_NO_REMAINING_BALANCE_ON_PARTIAL_PERCENTAGE_CHECKOUT_CHARGE";
    SellingPlanGroupUserErrorCode2["REMAINING_BALANCE_CHARGE_TRIGGER_NO_REMAINING_BALANCE_ON_PRICE_CHECKOUT_CHARGE"] = "REMAINING_BALANCE_CHARGE_TRIGGER_NO_REMAINING_BALANCE_ON_PRICE_CHECKOUT_CHARGE";
    SellingPlanGroupUserErrorCode2["FULFILLMENT_EXACT_TIME_REQUIRED"] = "FULFILLMENT_EXACT_TIME_REQUIRED";
    SellingPlanGroupUserErrorCode2["FULFILLMENT_EXACT_TIME_NOT_ALLOWED"] = "FULFILLMENT_EXACT_TIME_NOT_ALLOWED";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_ANCHORS_NOT_ALLOWED"] = "SELLING_PLAN_ANCHORS_NOT_ALLOWED";
    SellingPlanGroupUserErrorCode2["SELLING_PLAN_ANCHORS_REQUIRED"] = "SELLING_PLAN_ANCHORS_REQUIRED";
    SellingPlanGroupUserErrorCode2["ONLY_ONE_OF_FIXED_OR_RECURRING_BILLING"] = "ONLY_ONE_OF_FIXED_OR_RECURRING_BILLING";
    SellingPlanGroupUserErrorCode2["ONLY_ONE_OF_FIXED_OR_RECURRING_DELIVERY"] = "ONLY_ONE_OF_FIXED_OR_RECURRING_DELIVERY";
    return SellingPlanGroupUserErrorCode2;
  })(SellingPlanGroupUserErrorCode || {});
  var SellingPlanInterval = /* @__PURE__ */ ((SellingPlanInterval2) => {
    SellingPlanInterval2["DAY"] = "DAY";
    SellingPlanInterval2["WEEK"] = "WEEK";
    SellingPlanInterval2["MONTH"] = "MONTH";
    SellingPlanInterval2["YEAR"] = "YEAR";
    return SellingPlanInterval2;
  })(SellingPlanInterval || {});
  var SellingPlanPricingPolicyAdjustmentType = /* @__PURE__ */ ((SellingPlanPricingPolicyAdjustmentType2) => {
    SellingPlanPricingPolicyAdjustmentType2["PERCENTAGE"] = "PERCENTAGE";
    SellingPlanPricingPolicyAdjustmentType2["FIXED_AMOUNT"] = "FIXED_AMOUNT";
    SellingPlanPricingPolicyAdjustmentType2["PRICE"] = "PRICE";
    return SellingPlanPricingPolicyAdjustmentType2;
  })(SellingPlanPricingPolicyAdjustmentType || {});
  var SellingPlanRecurringDeliveryPolicyIntent = /* @__PURE__ */ ((SellingPlanRecurringDeliveryPolicyIntent2) => {
    SellingPlanRecurringDeliveryPolicyIntent2["FULFILLMENT_BEGIN"] = "FULFILLMENT_BEGIN";
    return SellingPlanRecurringDeliveryPolicyIntent2;
  })(SellingPlanRecurringDeliveryPolicyIntent || {});
  var SellingPlanRecurringDeliveryPolicyPreAnchorBehavior = /* @__PURE__ */ ((SellingPlanRecurringDeliveryPolicyPreAnchorBehavior2) => {
    SellingPlanRecurringDeliveryPolicyPreAnchorBehavior2["ASAP"] = "ASAP";
    SellingPlanRecurringDeliveryPolicyPreAnchorBehavior2["NEXT"] = "NEXT";
    return SellingPlanRecurringDeliveryPolicyPreAnchorBehavior2;
  })(SellingPlanRecurringDeliveryPolicyPreAnchorBehavior || {});
  var SellingPlanRemainingBalanceChargeTrigger = /* @__PURE__ */ ((SellingPlanRemainingBalanceChargeTrigger2) => {
    SellingPlanRemainingBalanceChargeTrigger2["NO_REMAINING_BALANCE"] = "NO_REMAINING_BALANCE";
    SellingPlanRemainingBalanceChargeTrigger2["EXACT_TIME"] = "EXACT_TIME";
    SellingPlanRemainingBalanceChargeTrigger2["TIME_AFTER_CHECKOUT"] = "TIME_AFTER_CHECKOUT";
    return SellingPlanRemainingBalanceChargeTrigger2;
  })(SellingPlanRemainingBalanceChargeTrigger || {});
  var SellingPlanReserve = /* @__PURE__ */ ((SellingPlanReserve2) => {
    SellingPlanReserve2["ON_FULFILLMENT"] = "ON_FULFILLMENT";
    SellingPlanReserve2["ON_SALE"] = "ON_SALE";
    return SellingPlanReserve2;
  })(SellingPlanReserve || {});
  var ShippingDiscountClass = /* @__PURE__ */ ((ShippingDiscountClass2) => {
    ShippingDiscountClass2["SHIPPING"] = "SHIPPING";
    return ShippingDiscountClass2;
  })(ShippingDiscountClass || {});
  var ShippingPackageType = /* @__PURE__ */ ((ShippingPackageType2) => {
    ShippingPackageType2["BOX"] = "BOX";
    ShippingPackageType2["FLAT_RATE"] = "FLAT_RATE";
    ShippingPackageType2["ENVELOPE"] = "ENVELOPE";
    ShippingPackageType2["SOFT_PACK"] = "SOFT_PACK";
    return ShippingPackageType2;
  })(ShippingPackageType || {});
  var ShopBranding = /* @__PURE__ */ ((ShopBranding2) => {
    ShopBranding2["SHOPIFY_GOLD"] = "SHOPIFY_GOLD";
    ShopBranding2["SHOPIFY_PLUS"] = "SHOPIFY_PLUS";
    ShopBranding2["ROGERS"] = "ROGERS";
    ShopBranding2["SHOPIFY"] = "SHOPIFY";
    return ShopBranding2;
  })(ShopBranding || {});
  var ShopCustomerAccountsSetting = /* @__PURE__ */ ((ShopCustomerAccountsSetting2) => {
    ShopCustomerAccountsSetting2["REQUIRED"] = "REQUIRED";
    ShopCustomerAccountsSetting2["OPTIONAL"] = "OPTIONAL";
    ShopCustomerAccountsSetting2["DISABLED"] = "DISABLED";
    return ShopCustomerAccountsSetting2;
  })(ShopCustomerAccountsSetting || {});
  var ShopPolicyErrorCode = /* @__PURE__ */ ((ShopPolicyErrorCode2) => {
    ShopPolicyErrorCode2["TOO_BIG"] = "TOO_BIG";
    return ShopPolicyErrorCode2;
  })(ShopPolicyErrorCode || {});
  var ShopPolicyType = /* @__PURE__ */ ((ShopPolicyType2) => {
    ShopPolicyType2["REFUND_POLICY"] = "REFUND_POLICY";
    ShopPolicyType2["SHIPPING_POLICY"] = "SHIPPING_POLICY";
    ShopPolicyType2["PRIVACY_POLICY"] = "PRIVACY_POLICY";
    ShopPolicyType2["TERMS_OF_SERVICE"] = "TERMS_OF_SERVICE";
    ShopPolicyType2["TERMS_OF_SALE"] = "TERMS_OF_SALE";
    ShopPolicyType2["LEGAL_NOTICE"] = "LEGAL_NOTICE";
    ShopPolicyType2["SUBSCRIPTION_POLICY"] = "SUBSCRIPTION_POLICY";
    ShopPolicyType2["CONTACT_INFORMATION"] = "CONTACT_INFORMATION";
    return ShopPolicyType2;
  })(ShopPolicyType || {});
  var ShopResourceFeedbackCreateUserErrorCode = /* @__PURE__ */ ((ShopResourceFeedbackCreateUserErrorCode2) => {
    ShopResourceFeedbackCreateUserErrorCode2["OUTDATED_FEEDBACK"] = "OUTDATED_FEEDBACK";
    ShopResourceFeedbackCreateUserErrorCode2["INVALID"] = "INVALID";
    ShopResourceFeedbackCreateUserErrorCode2["BLANK"] = "BLANK";
    ShopResourceFeedbackCreateUserErrorCode2["PRESENT"] = "PRESENT";
    return ShopResourceFeedbackCreateUserErrorCode2;
  })(ShopResourceFeedbackCreateUserErrorCode || {});
  var ShopTagSort = /* @__PURE__ */ ((ShopTagSort2) => {
    ShopTagSort2["ALPHABETICAL"] = "ALPHABETICAL";
    ShopTagSort2["POPULAR"] = "POPULAR";
    return ShopTagSort2;
  })(ShopTagSort || {});
  var ShopifyPaymentsBankAccountStatus = /* @__PURE__ */ ((ShopifyPaymentsBankAccountStatus2) => {
    ShopifyPaymentsBankAccountStatus2["NEW"] = "NEW";
    ShopifyPaymentsBankAccountStatus2["VALIDATED"] = "VALIDATED";
    ShopifyPaymentsBankAccountStatus2["VERIFIED"] = "VERIFIED";
    ShopifyPaymentsBankAccountStatus2["ERRORED"] = "ERRORED";
    return ShopifyPaymentsBankAccountStatus2;
  })(ShopifyPaymentsBankAccountStatus || {});
  var ShopifyPaymentsDisputeEvidenceFileType = /* @__PURE__ */ ((ShopifyPaymentsDisputeEvidenceFileType2) => {
    ShopifyPaymentsDisputeEvidenceFileType2["CUSTOMER_COMMUNICATION_FILE"] = "CUSTOMER_COMMUNICATION_FILE";
    ShopifyPaymentsDisputeEvidenceFileType2["REFUND_POLICY_FILE"] = "REFUND_POLICY_FILE";
    ShopifyPaymentsDisputeEvidenceFileType2["CANCELLATION_POLICY_FILE"] = "CANCELLATION_POLICY_FILE";
    ShopifyPaymentsDisputeEvidenceFileType2["UNCATEGORIZED_FILE"] = "UNCATEGORIZED_FILE";
    ShopifyPaymentsDisputeEvidenceFileType2["SHIPPING_DOCUMENTATION_FILE"] = "SHIPPING_DOCUMENTATION_FILE";
    ShopifyPaymentsDisputeEvidenceFileType2["SERVICE_DOCUMENTATION_FILE"] = "SERVICE_DOCUMENTATION_FILE";
    return ShopifyPaymentsDisputeEvidenceFileType2;
  })(ShopifyPaymentsDisputeEvidenceFileType || {});
  var ShopifyPaymentsDisputeReason = /* @__PURE__ */ ((ShopifyPaymentsDisputeReason2) => {
    ShopifyPaymentsDisputeReason2["FRAUDULENT"] = "FRAUDULENT";
    ShopifyPaymentsDisputeReason2["GENERAL"] = "GENERAL";
    ShopifyPaymentsDisputeReason2["UNRECOGNIZED"] = "UNRECOGNIZED";
    ShopifyPaymentsDisputeReason2["DUPLICATE"] = "DUPLICATE";
    ShopifyPaymentsDisputeReason2["SUBSCRIPTION_CANCELLED"] = "SUBSCRIPTION_CANCELLED";
    ShopifyPaymentsDisputeReason2["PRODUCT_UNACCEPTABLE"] = "PRODUCT_UNACCEPTABLE";
    ShopifyPaymentsDisputeReason2["PRODUCT_NOT_RECEIVED"] = "PRODUCT_NOT_RECEIVED";
    ShopifyPaymentsDisputeReason2["CREDIT_NOT_PROCESSED"] = "CREDIT_NOT_PROCESSED";
    ShopifyPaymentsDisputeReason2["INCORRECT_ACCOUNT_DETAILS"] = "INCORRECT_ACCOUNT_DETAILS";
    ShopifyPaymentsDisputeReason2["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    ShopifyPaymentsDisputeReason2["BANK_CANNOT_PROCESS"] = "BANK_CANNOT_PROCESS";
    ShopifyPaymentsDisputeReason2["DEBIT_NOT_AUTHORIZED"] = "DEBIT_NOT_AUTHORIZED";
    ShopifyPaymentsDisputeReason2["CUSTOMER_INITIATED"] = "CUSTOMER_INITIATED";
    return ShopifyPaymentsDisputeReason2;
  })(ShopifyPaymentsDisputeReason || {});
  var ShopifyPaymentsPayoutInterval = /* @__PURE__ */ ((ShopifyPaymentsPayoutInterval2) => {
    ShopifyPaymentsPayoutInterval2["DAILY"] = "DAILY";
    ShopifyPaymentsPayoutInterval2["WEEKLY"] = "WEEKLY";
    ShopifyPaymentsPayoutInterval2["MONTHLY"] = "MONTHLY";
    ShopifyPaymentsPayoutInterval2["MANUAL"] = "MANUAL";
    return ShopifyPaymentsPayoutInterval2;
  })(ShopifyPaymentsPayoutInterval || {});
  var ShopifyPaymentsPayoutStatus = /* @__PURE__ */ ((ShopifyPaymentsPayoutStatus2) => {
    ShopifyPaymentsPayoutStatus2["SCHEDULED"] = "SCHEDULED";
    ShopifyPaymentsPayoutStatus2["IN_TRANSIT"] = "IN_TRANSIT";
    ShopifyPaymentsPayoutStatus2["PAID"] = "PAID";
    ShopifyPaymentsPayoutStatus2["FAILED"] = "FAILED";
    ShopifyPaymentsPayoutStatus2["CANCELED"] = "CANCELED";
    return ShopifyPaymentsPayoutStatus2;
  })(ShopifyPaymentsPayoutStatus || {});
  var ShopifyPaymentsPayoutTransactionType = /* @__PURE__ */ ((ShopifyPaymentsPayoutTransactionType2) => {
    ShopifyPaymentsPayoutTransactionType2["DEPOSIT"] = "DEPOSIT";
    ShopifyPaymentsPayoutTransactionType2["WITHDRAWAL"] = "WITHDRAWAL";
    return ShopifyPaymentsPayoutTransactionType2;
  })(ShopifyPaymentsPayoutTransactionType || {});
  var ShopifyPaymentsVerificationDocumentType = /* @__PURE__ */ ((ShopifyPaymentsVerificationDocumentType2) => {
    ShopifyPaymentsVerificationDocumentType2["DRIVERS_LICENSE"] = "DRIVERS_LICENSE";
    ShopifyPaymentsVerificationDocumentType2["GOVERNMENT_IDENTIFICATION"] = "GOVERNMENT_IDENTIFICATION";
    ShopifyPaymentsVerificationDocumentType2["PASSPORT"] = "PASSPORT";
    return ShopifyPaymentsVerificationDocumentType2;
  })(ShopifyPaymentsVerificationDocumentType || {});
  var ShopifyPaymentsVerificationStatus = /* @__PURE__ */ ((ShopifyPaymentsVerificationStatus2) => {
    ShopifyPaymentsVerificationStatus2["VERIFIED"] = "VERIFIED";
    ShopifyPaymentsVerificationStatus2["UNVERIFIED"] = "UNVERIFIED";
    ShopifyPaymentsVerificationStatus2["PENDING"] = "PENDING";
    return ShopifyPaymentsVerificationStatus2;
  })(ShopifyPaymentsVerificationStatus || {});
  var StaffMemberDefaultImage = /* @__PURE__ */ ((StaffMemberDefaultImage2) => {
    StaffMemberDefaultImage2["DEFAULT"] = "DEFAULT";
    StaffMemberDefaultImage2["TRANSPARENT"] = "TRANSPARENT";
    StaffMemberDefaultImage2["NOT_FOUND"] = "NOT_FOUND";
    return StaffMemberDefaultImage2;
  })(StaffMemberDefaultImage || {});
  var StaffMemberPermission = /* @__PURE__ */ ((StaffMemberPermission2) => {
    StaffMemberPermission2["APPLICATIONS"] = "APPLICATIONS";
    StaffMemberPermission2["CHANNELS"] = "CHANNELS";
    StaffMemberPermission2["CUSTOMERS"] = "CUSTOMERS";
    StaffMemberPermission2["DASHBOARD"] = "DASHBOARD";
    StaffMemberPermission2["DOMAINS"] = "DOMAINS";
    StaffMemberPermission2["DRAFT_ORDERS"] = "DRAFT_ORDERS";
    StaffMemberPermission2["EDIT_ORDERS"] = "EDIT_ORDERS";
    StaffMemberPermission2["FULL"] = "FULL";
    StaffMemberPermission2["GIFT_CARDS"] = "GIFT_CARDS";
    StaffMemberPermission2["LINKS"] = "LINKS";
    StaffMemberPermission2["LOCATIONS"] = "LOCATIONS";
    StaffMemberPermission2["MARKETING"] = "MARKETING";
    StaffMemberPermission2["MARKETING_SECTION"] = "MARKETING_SECTION";
    StaffMemberPermission2["ORDERS"] = "ORDERS";
    StaffMemberPermission2["OVERVIEWS"] = "OVERVIEWS";
    StaffMemberPermission2["PAGES"] = "PAGES";
    StaffMemberPermission2["PAY_ORDERS_BY_VAULTED_CARD"] = "PAY_ORDERS_BY_VAULTED_CARD";
    StaffMemberPermission2["PREFERENCES"] = "PREFERENCES";
    StaffMemberPermission2["PRODUCTS"] = "PRODUCTS";
    StaffMemberPermission2["REPORTS"] = "REPORTS";
    StaffMemberPermission2["THEMES"] = "THEMES";
    StaffMemberPermission2["TRANSLATIONS"] = "TRANSLATIONS";
    return StaffMemberPermission2;
  })(StaffMemberPermission || {});
  var StagedUploadHttpMethodType = /* @__PURE__ */ ((StagedUploadHttpMethodType2) => {
    StagedUploadHttpMethodType2["POST"] = "POST";
    StagedUploadHttpMethodType2["PUT"] = "PUT";
    return StagedUploadHttpMethodType2;
  })(StagedUploadHttpMethodType || {});
  var StagedUploadTargetGenerateUploadResource = /* @__PURE__ */ ((StagedUploadTargetGenerateUploadResource2) => {
    StagedUploadTargetGenerateUploadResource2["COLLECTION_IMAGE"] = "COLLECTION_IMAGE";
    StagedUploadTargetGenerateUploadResource2["FILE"] = "FILE";
    StagedUploadTargetGenerateUploadResource2["IMAGE"] = "IMAGE";
    StagedUploadTargetGenerateUploadResource2["MODEL_3D"] = "MODEL_3D";
    StagedUploadTargetGenerateUploadResource2["PRODUCT_IMAGE"] = "PRODUCT_IMAGE";
    StagedUploadTargetGenerateUploadResource2["SHOP_IMAGE"] = "SHOP_IMAGE";
    StagedUploadTargetGenerateUploadResource2["VIDEO"] = "VIDEO";
    StagedUploadTargetGenerateUploadResource2["BULK_MUTATION_VARIABLES"] = "BULK_MUTATION_VARIABLES";
    StagedUploadTargetGenerateUploadResource2["RETURN_LABEL"] = "RETURN_LABEL";
    StagedUploadTargetGenerateUploadResource2["URL_REDIRECT_IMPORT"] = "URL_REDIRECT_IMPORT";
    return StagedUploadTargetGenerateUploadResource2;
  })(StagedUploadTargetGenerateUploadResource || {});
  var StandardMetafieldDefinitionEnableUserErrorCode = /* @__PURE__ */ ((StandardMetafieldDefinitionEnableUserErrorCode2) => {
    StandardMetafieldDefinitionEnableUserErrorCode2["INVALID"] = "INVALID";
    StandardMetafieldDefinitionEnableUserErrorCode2["TAKEN"] = "TAKEN";
    StandardMetafieldDefinitionEnableUserErrorCode2["TEMPLATE_NOT_FOUND"] = "TEMPLATE_NOT_FOUND";
    StandardMetafieldDefinitionEnableUserErrorCode2["LIMIT_EXCEEDED"] = "LIMIT_EXCEEDED";
    StandardMetafieldDefinitionEnableUserErrorCode2["UNSTRUCTURED_ALREADY_EXISTS"] = "UNSTRUCTURED_ALREADY_EXISTS";
    StandardMetafieldDefinitionEnableUserErrorCode2["TYPE_NOT_ALLOWED_FOR_CONDITIONS"] = "TYPE_NOT_ALLOWED_FOR_CONDITIONS";
    return StandardMetafieldDefinitionEnableUserErrorCode2;
  })(StandardMetafieldDefinitionEnableUserErrorCode || {});
  var SubscriptionBillingAttemptErrorCode = /* @__PURE__ */ ((SubscriptionBillingAttemptErrorCode2) => {
    SubscriptionBillingAttemptErrorCode2["PAYMENT_METHOD_NOT_FOUND"] = "PAYMENT_METHOD_NOT_FOUND";
    SubscriptionBillingAttemptErrorCode2["PAYMENT_PROVIDER_IS_NOT_ENABLED"] = "PAYMENT_PROVIDER_IS_NOT_ENABLED";
    SubscriptionBillingAttemptErrorCode2["INVALID_PAYMENT_METHOD"] = "INVALID_PAYMENT_METHOD";
    SubscriptionBillingAttemptErrorCode2["UNEXPECTED_ERROR"] = "UNEXPECTED_ERROR";
    SubscriptionBillingAttemptErrorCode2["EXPIRED_PAYMENT_METHOD"] = "EXPIRED_PAYMENT_METHOD";
    SubscriptionBillingAttemptErrorCode2["PAYMENT_METHOD_DECLINED"] = "PAYMENT_METHOD_DECLINED";
    SubscriptionBillingAttemptErrorCode2["AUTHENTICATION_ERROR"] = "AUTHENTICATION_ERROR";
    SubscriptionBillingAttemptErrorCode2["TEST_MODE"] = "TEST_MODE";
    SubscriptionBillingAttemptErrorCode2["BUYER_CANCELED_PAYMENT_METHOD"] = "BUYER_CANCELED_PAYMENT_METHOD";
    SubscriptionBillingAttemptErrorCode2["CUSTOMER_NOT_FOUND"] = "CUSTOMER_NOT_FOUND";
    SubscriptionBillingAttemptErrorCode2["CUSTOMER_INVALID"] = "CUSTOMER_INVALID";
    SubscriptionBillingAttemptErrorCode2["INVALID_SHIPPING_ADDRESS"] = "INVALID_SHIPPING_ADDRESS";
    SubscriptionBillingAttemptErrorCode2["INVALID_CUSTOMER_BILLING_AGREEMENT"] = "INVALID_CUSTOMER_BILLING_AGREEMENT";
    SubscriptionBillingAttemptErrorCode2["INVOICE_ALREADY_PAID"] = "INVOICE_ALREADY_PAID";
    SubscriptionBillingAttemptErrorCode2["PAYMENT_METHOD_INCOMPATIBLE_WITH_GATEWAY_CONFIG"] = "PAYMENT_METHOD_INCOMPATIBLE_WITH_GATEWAY_CONFIG";
    SubscriptionBillingAttemptErrorCode2["AMOUNT_TOO_SMALL"] = "AMOUNT_TOO_SMALL";
    SubscriptionBillingAttemptErrorCode2["INVENTORY_ALLOCATIONS_NOT_FOUND"] = "INVENTORY_ALLOCATIONS_NOT_FOUND";
    return SubscriptionBillingAttemptErrorCode2;
  })(SubscriptionBillingAttemptErrorCode || {});
  var SubscriptionBillingCycleBillingCycleStatus = /* @__PURE__ */ ((SubscriptionBillingCycleBillingCycleStatus2) => {
    SubscriptionBillingCycleBillingCycleStatus2["BILLED"] = "BILLED";
    SubscriptionBillingCycleBillingCycleStatus2["UNBILLED"] = "UNBILLED";
    return SubscriptionBillingCycleBillingCycleStatus2;
  })(SubscriptionBillingCycleBillingCycleStatus || {});
  var SubscriptionBillingCycleErrorCode = /* @__PURE__ */ ((SubscriptionBillingCycleErrorCode2) => {
    SubscriptionBillingCycleErrorCode2["INVALID"] = "INVALID";
    SubscriptionBillingCycleErrorCode2["CYCLE_NOT_FOUND"] = "CYCLE_NOT_FOUND";
    SubscriptionBillingCycleErrorCode2["NO_CYCLE_EDITS"] = "NO_CYCLE_EDITS";
    SubscriptionBillingCycleErrorCode2["INVALID_CYCLE_INDEX"] = "INVALID_CYCLE_INDEX";
    SubscriptionBillingCycleErrorCode2["INVALID_DATE"] = "INVALID_DATE";
    SubscriptionBillingCycleErrorCode2["EMPTY_BILLING_CYCLE_EDIT_SCHEDULE_INPUT"] = "EMPTY_BILLING_CYCLE_EDIT_SCHEDULE_INPUT";
    SubscriptionBillingCycleErrorCode2["BILLING_DATE_SET_ON_SKIPPED"] = "BILLING_DATE_SET_ON_SKIPPED";
    SubscriptionBillingCycleErrorCode2["OUT_OF_BOUNDS"] = "OUT_OF_BOUNDS";
    SubscriptionBillingCycleErrorCode2["UPCOMING_CYCLE_LIMIT_EXCEEDED"] = "UPCOMING_CYCLE_LIMIT_EXCEEDED";
    SubscriptionBillingCycleErrorCode2["CYCLE_INDEX_OUT_OF_RANGE"] = "CYCLE_INDEX_OUT_OF_RANGE";
    SubscriptionBillingCycleErrorCode2["CYCLE_START_DATE_OUT_OF_RANGE"] = "CYCLE_START_DATE_OUT_OF_RANGE";
    SubscriptionBillingCycleErrorCode2["INCOMPLETE_BILLING_ATTEMPTS"] = "INCOMPLETE_BILLING_ATTEMPTS";
    return SubscriptionBillingCycleErrorCode2;
  })(SubscriptionBillingCycleErrorCode || {});
  var SubscriptionBillingCycleScheduleEditInputScheduleEditReason = /* @__PURE__ */ ((SubscriptionBillingCycleScheduleEditInputScheduleEditReason2) => {
    SubscriptionBillingCycleScheduleEditInputScheduleEditReason2["BUYER_INITIATED"] = "BUYER_INITIATED";
    SubscriptionBillingCycleScheduleEditInputScheduleEditReason2["MERCHANT_INITIATED"] = "MERCHANT_INITIATED";
    SubscriptionBillingCycleScheduleEditInputScheduleEditReason2["DEV_INITIATED"] = "DEV_INITIATED";
    return SubscriptionBillingCycleScheduleEditInputScheduleEditReason2;
  })(SubscriptionBillingCycleScheduleEditInputScheduleEditReason || {});
  var SubscriptionBillingCyclesSortKeys = /* @__PURE__ */ ((SubscriptionBillingCyclesSortKeys2) => {
    SubscriptionBillingCyclesSortKeys2["CYCLE_INDEX"] = "CYCLE_INDEX";
    SubscriptionBillingCyclesSortKeys2["ID"] = "ID";
    SubscriptionBillingCyclesSortKeys2["RELEVANCE"] = "RELEVANCE";
    return SubscriptionBillingCyclesSortKeys2;
  })(SubscriptionBillingCyclesSortKeys || {});
  var SubscriptionBillingCyclesTargetSelection = /* @__PURE__ */ ((SubscriptionBillingCyclesTargetSelection2) => {
    SubscriptionBillingCyclesTargetSelection2["ALL"] = "ALL";
    return SubscriptionBillingCyclesTargetSelection2;
  })(SubscriptionBillingCyclesTargetSelection || {});
  var SubscriptionContractErrorCode = /* @__PURE__ */ ((SubscriptionContractErrorCode2) => {
    SubscriptionContractErrorCode2["INVALID"] = "INVALID";
    return SubscriptionContractErrorCode2;
  })(SubscriptionContractErrorCode || {});
  var SubscriptionContractLastPaymentStatus = /* @__PURE__ */ ((SubscriptionContractLastPaymentStatus2) => {
    SubscriptionContractLastPaymentStatus2["SUCCEEDED"] = "SUCCEEDED";
    SubscriptionContractLastPaymentStatus2["FAILED"] = "FAILED";
    return SubscriptionContractLastPaymentStatus2;
  })(SubscriptionContractLastPaymentStatus || {});
  var SubscriptionContractSubscriptionStatus = /* @__PURE__ */ ((SubscriptionContractSubscriptionStatus2) => {
    SubscriptionContractSubscriptionStatus2["ACTIVE"] = "ACTIVE";
    SubscriptionContractSubscriptionStatus2["PAUSED"] = "PAUSED";
    SubscriptionContractSubscriptionStatus2["CANCELLED"] = "CANCELLED";
    SubscriptionContractSubscriptionStatus2["EXPIRED"] = "EXPIRED";
    SubscriptionContractSubscriptionStatus2["FAILED"] = "FAILED";
    return SubscriptionContractSubscriptionStatus2;
  })(SubscriptionContractSubscriptionStatus || {});
  var SubscriptionDiscountRejectionReason = /* @__PURE__ */ ((SubscriptionDiscountRejectionReason2) => {
    SubscriptionDiscountRejectionReason2["NOT_FOUND"] = "NOT_FOUND";
    SubscriptionDiscountRejectionReason2["NO_ENTITLED_LINE_ITEMS"] = "NO_ENTITLED_LINE_ITEMS";
    SubscriptionDiscountRejectionReason2["QUANTITY_NOT_IN_RANGE"] = "QUANTITY_NOT_IN_RANGE";
    SubscriptionDiscountRejectionReason2["PURCHASE_NOT_IN_RANGE"] = "PURCHASE_NOT_IN_RANGE";
    SubscriptionDiscountRejectionReason2["CUSTOMER_NOT_ELIGIBLE"] = "CUSTOMER_NOT_ELIGIBLE";
    SubscriptionDiscountRejectionReason2["USAGE_LIMIT_REACHED"] = "USAGE_LIMIT_REACHED";
    SubscriptionDiscountRejectionReason2["CUSTOMER_USAGE_LIMIT_REACHED"] = "CUSTOMER_USAGE_LIMIT_REACHED";
    SubscriptionDiscountRejectionReason2["CURRENTLY_INACTIVE"] = "CURRENTLY_INACTIVE";
    SubscriptionDiscountRejectionReason2["NO_ENTITLED_SHIPPING_LINES"] = "NO_ENTITLED_SHIPPING_LINES";
    SubscriptionDiscountRejectionReason2["INCOMPATIBLE_PURCHASE_TYPE"] = "INCOMPATIBLE_PURCHASE_TYPE";
    SubscriptionDiscountRejectionReason2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    return SubscriptionDiscountRejectionReason2;
  })(SubscriptionDiscountRejectionReason || {});
  var SubscriptionDraftErrorCode = /* @__PURE__ */ ((SubscriptionDraftErrorCode2) => {
    SubscriptionDraftErrorCode2["ALREADY_REMOVED"] = "ALREADY_REMOVED";
    SubscriptionDraftErrorCode2["PRESENCE"] = "PRESENCE";
    SubscriptionDraftErrorCode2["COMMITTED"] = "COMMITTED";
    SubscriptionDraftErrorCode2["NOT_IN_RANGE"] = "NOT_IN_RANGE";
    SubscriptionDraftErrorCode2["NOT_AN_INTEGER"] = "NOT_AN_INTEGER";
    SubscriptionDraftErrorCode2["SELLING_PLAN_MAX_CYCLES_MUST_BE_GREATER_THAN_MIN_CYCLES"] = "SELLING_PLAN_MAX_CYCLES_MUST_BE_GREATER_THAN_MIN_CYCLES";
    SubscriptionDraftErrorCode2["DELIVERY_MUST_BE_MULTIPLE_OF_BILLING"] = "DELIVERY_MUST_BE_MULTIPLE_OF_BILLING";
    SubscriptionDraftErrorCode2["INVALID_BILLING_DATE"] = "INVALID_BILLING_DATE";
    SubscriptionDraftErrorCode2["INVALID_NOTE_LENGTH"] = "INVALID_NOTE_LENGTH";
    SubscriptionDraftErrorCode2["INVALID_LINES"] = "INVALID_LINES";
    SubscriptionDraftErrorCode2["NO_ENTITLED_LINES"] = "NO_ENTITLED_LINES";
    SubscriptionDraftErrorCode2["CUSTOMER_DOES_NOT_EXIST"] = "CUSTOMER_DOES_NOT_EXIST";
    SubscriptionDraftErrorCode2["CUSTOMER_MISMATCH"] = "CUSTOMER_MISMATCH";
    SubscriptionDraftErrorCode2["DELIVERY_METHOD_REQUIRED"] = "DELIVERY_METHOD_REQUIRED";
    SubscriptionDraftErrorCode2["CYCLE_DISCOUNTS_UNIQUE_AFTER_CYCLE"] = "CYCLE_DISCOUNTS_UNIQUE_AFTER_CYCLE";
    SubscriptionDraftErrorCode2["INVALID_ADJUSTMENT_TYPE"] = "INVALID_ADJUSTMENT_TYPE";
    SubscriptionDraftErrorCode2["INVALID_ADJUSTMENT_VALUE"] = "INVALID_ADJUSTMENT_VALUE";
    SubscriptionDraftErrorCode2["STALE_CONTRACT"] = "STALE_CONTRACT";
    SubscriptionDraftErrorCode2["CURRENCY_NOT_ENABLED"] = "CURRENCY_NOT_ENABLED";
    SubscriptionDraftErrorCode2["HAS_FUTURE_EDITS"] = "HAS_FUTURE_EDITS";
    SubscriptionDraftErrorCode2["BILLING_CYCLE_PRESENT"] = "BILLING_CYCLE_PRESENT";
    SubscriptionDraftErrorCode2["BILLING_CYCLE_ABSENT"] = "BILLING_CYCLE_ABSENT";
    SubscriptionDraftErrorCode2["BILLING_CYCLE_CONTRACT_DRAFT_DELIVERY_POLICY_INVALID"] = "BILLING_CYCLE_CONTRACT_DRAFT_DELIVERY_POLICY_INVALID";
    SubscriptionDraftErrorCode2["BILLING_CYCLE_CONTRACT_DRAFT_BILLING_POLICY_INVALID"] = "BILLING_CYCLE_CONTRACT_DRAFT_BILLING_POLICY_INVALID";
    SubscriptionDraftErrorCode2["CONCATENATION_BILLING_CYCLE_CONTRACT_DRAFT_REQUIRED"] = "CONCATENATION_BILLING_CYCLE_CONTRACT_DRAFT_REQUIRED";
    SubscriptionDraftErrorCode2["DUPLICATE_CONCATENATED_CONTRACTS"] = "DUPLICATE_CONCATENATED_CONTRACTS";
    SubscriptionDraftErrorCode2["UPCOMING_CYCLE_LIMIT_EXCEEDED"] = "UPCOMING_CYCLE_LIMIT_EXCEEDED";
    SubscriptionDraftErrorCode2["CYCLE_INDEX_OUT_OF_RANGE"] = "CYCLE_INDEX_OUT_OF_RANGE";
    SubscriptionDraftErrorCode2["CYCLE_START_DATE_OUT_OF_RANGE"] = "CYCLE_START_DATE_OUT_OF_RANGE";
    SubscriptionDraftErrorCode2["CYCLE_SELECTOR_VALIDATE_ONE_OF"] = "CYCLE_SELECTOR_VALIDATE_ONE_OF";
    SubscriptionDraftErrorCode2["EXCEEDED_MAX_CONCATENATED_CONTRACTS"] = "EXCEEDED_MAX_CONCATENATED_CONTRACTS";
    SubscriptionDraftErrorCode2["INVALID"] = "INVALID";
    SubscriptionDraftErrorCode2["BLANK"] = "BLANK";
    SubscriptionDraftErrorCode2["GREATER_THAN"] = "GREATER_THAN";
    SubscriptionDraftErrorCode2["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
    SubscriptionDraftErrorCode2["LESS_THAN"] = "LESS_THAN";
    SubscriptionDraftErrorCode2["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
    SubscriptionDraftErrorCode2["TOO_LONG"] = "TOO_LONG";
    SubscriptionDraftErrorCode2["TOO_SHORT"] = "TOO_SHORT";
    return SubscriptionDraftErrorCode2;
  })(SubscriptionDraftErrorCode || {});
  var SuggestedOrderTransactionKind = /* @__PURE__ */ ((SuggestedOrderTransactionKind2) => {
    SuggestedOrderTransactionKind2["SUGGESTED_REFUND"] = "SUGGESTED_REFUND";
    return SuggestedOrderTransactionKind2;
  })(SuggestedOrderTransactionKind || {});
  var TaxExemption = /* @__PURE__ */ ((TaxExemption2) => {
    TaxExemption2["CA_STATUS_CARD_EXEMPTION"] = "CA_STATUS_CARD_EXEMPTION";
    TaxExemption2["CA_BC_RESELLER_EXEMPTION"] = "CA_BC_RESELLER_EXEMPTION";
    TaxExemption2["CA_MB_RESELLER_EXEMPTION"] = "CA_MB_RESELLER_EXEMPTION";
    TaxExemption2["CA_SK_RESELLER_EXEMPTION"] = "CA_SK_RESELLER_EXEMPTION";
    TaxExemption2["CA_DIPLOMAT_EXEMPTION"] = "CA_DIPLOMAT_EXEMPTION";
    TaxExemption2["CA_BC_COMMERCIAL_FISHERY_EXEMPTION"] = "CA_BC_COMMERCIAL_FISHERY_EXEMPTION";
    TaxExemption2["CA_MB_COMMERCIAL_FISHERY_EXEMPTION"] = "CA_MB_COMMERCIAL_FISHERY_EXEMPTION";
    TaxExemption2["CA_NS_COMMERCIAL_FISHERY_EXEMPTION"] = "CA_NS_COMMERCIAL_FISHERY_EXEMPTION";
    TaxExemption2["CA_PE_COMMERCIAL_FISHERY_EXEMPTION"] = "CA_PE_COMMERCIAL_FISHERY_EXEMPTION";
    TaxExemption2["CA_SK_COMMERCIAL_FISHERY_EXEMPTION"] = "CA_SK_COMMERCIAL_FISHERY_EXEMPTION";
    TaxExemption2["CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION"] = "CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION";
    TaxExemption2["CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION"] = "CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION";
    TaxExemption2["CA_BC_SUB_CONTRACTOR_EXEMPTION"] = "CA_BC_SUB_CONTRACTOR_EXEMPTION";
    TaxExemption2["CA_SK_SUB_CONTRACTOR_EXEMPTION"] = "CA_SK_SUB_CONTRACTOR_EXEMPTION";
    TaxExemption2["CA_BC_CONTRACTOR_EXEMPTION"] = "CA_BC_CONTRACTOR_EXEMPTION";
    TaxExemption2["CA_SK_CONTRACTOR_EXEMPTION"] = "CA_SK_CONTRACTOR_EXEMPTION";
    TaxExemption2["CA_ON_PURCHASE_EXEMPTION"] = "CA_ON_PURCHASE_EXEMPTION";
    TaxExemption2["CA_MB_FARMER_EXEMPTION"] = "CA_MB_FARMER_EXEMPTION";
    TaxExemption2["CA_NS_FARMER_EXEMPTION"] = "CA_NS_FARMER_EXEMPTION";
    TaxExemption2["CA_SK_FARMER_EXEMPTION"] = "CA_SK_FARMER_EXEMPTION";
    TaxExemption2["EU_REVERSE_CHARGE_EXEMPTION_RULE"] = "EU_REVERSE_CHARGE_EXEMPTION_RULE";
    TaxExemption2["US_AL_RESELLER_EXEMPTION"] = "US_AL_RESELLER_EXEMPTION";
    TaxExemption2["US_AK_RESELLER_EXEMPTION"] = "US_AK_RESELLER_EXEMPTION";
    TaxExemption2["US_AZ_RESELLER_EXEMPTION"] = "US_AZ_RESELLER_EXEMPTION";
    TaxExemption2["US_AR_RESELLER_EXEMPTION"] = "US_AR_RESELLER_EXEMPTION";
    TaxExemption2["US_CA_RESELLER_EXEMPTION"] = "US_CA_RESELLER_EXEMPTION";
    TaxExemption2["US_CO_RESELLER_EXEMPTION"] = "US_CO_RESELLER_EXEMPTION";
    TaxExemption2["US_CT_RESELLER_EXEMPTION"] = "US_CT_RESELLER_EXEMPTION";
    TaxExemption2["US_DE_RESELLER_EXEMPTION"] = "US_DE_RESELLER_EXEMPTION";
    TaxExemption2["US_FL_RESELLER_EXEMPTION"] = "US_FL_RESELLER_EXEMPTION";
    TaxExemption2["US_GA_RESELLER_EXEMPTION"] = "US_GA_RESELLER_EXEMPTION";
    TaxExemption2["US_HI_RESELLER_EXEMPTION"] = "US_HI_RESELLER_EXEMPTION";
    TaxExemption2["US_ID_RESELLER_EXEMPTION"] = "US_ID_RESELLER_EXEMPTION";
    TaxExemption2["US_IL_RESELLER_EXEMPTION"] = "US_IL_RESELLER_EXEMPTION";
    TaxExemption2["US_IN_RESELLER_EXEMPTION"] = "US_IN_RESELLER_EXEMPTION";
    TaxExemption2["US_IA_RESELLER_EXEMPTION"] = "US_IA_RESELLER_EXEMPTION";
    TaxExemption2["US_KS_RESELLER_EXEMPTION"] = "US_KS_RESELLER_EXEMPTION";
    TaxExemption2["US_KY_RESELLER_EXEMPTION"] = "US_KY_RESELLER_EXEMPTION";
    TaxExemption2["US_LA_RESELLER_EXEMPTION"] = "US_LA_RESELLER_EXEMPTION";
    TaxExemption2["US_ME_RESELLER_EXEMPTION"] = "US_ME_RESELLER_EXEMPTION";
    TaxExemption2["US_MD_RESELLER_EXEMPTION"] = "US_MD_RESELLER_EXEMPTION";
    TaxExemption2["US_MA_RESELLER_EXEMPTION"] = "US_MA_RESELLER_EXEMPTION";
    TaxExemption2["US_MI_RESELLER_EXEMPTION"] = "US_MI_RESELLER_EXEMPTION";
    TaxExemption2["US_MN_RESELLER_EXEMPTION"] = "US_MN_RESELLER_EXEMPTION";
    TaxExemption2["US_MS_RESELLER_EXEMPTION"] = "US_MS_RESELLER_EXEMPTION";
    TaxExemption2["US_MO_RESELLER_EXEMPTION"] = "US_MO_RESELLER_EXEMPTION";
    TaxExemption2["US_MT_RESELLER_EXEMPTION"] = "US_MT_RESELLER_EXEMPTION";
    TaxExemption2["US_NE_RESELLER_EXEMPTION"] = "US_NE_RESELLER_EXEMPTION";
    TaxExemption2["US_NV_RESELLER_EXEMPTION"] = "US_NV_RESELLER_EXEMPTION";
    TaxExemption2["US_NH_RESELLER_EXEMPTION"] = "US_NH_RESELLER_EXEMPTION";
    TaxExemption2["US_NJ_RESELLER_EXEMPTION"] = "US_NJ_RESELLER_EXEMPTION";
    TaxExemption2["US_NM_RESELLER_EXEMPTION"] = "US_NM_RESELLER_EXEMPTION";
    TaxExemption2["US_NY_RESELLER_EXEMPTION"] = "US_NY_RESELLER_EXEMPTION";
    TaxExemption2["US_NC_RESELLER_EXEMPTION"] = "US_NC_RESELLER_EXEMPTION";
    TaxExemption2["US_ND_RESELLER_EXEMPTION"] = "US_ND_RESELLER_EXEMPTION";
    TaxExemption2["US_OH_RESELLER_EXEMPTION"] = "US_OH_RESELLER_EXEMPTION";
    TaxExemption2["US_OK_RESELLER_EXEMPTION"] = "US_OK_RESELLER_EXEMPTION";
    TaxExemption2["US_OR_RESELLER_EXEMPTION"] = "US_OR_RESELLER_EXEMPTION";
    TaxExemption2["US_PA_RESELLER_EXEMPTION"] = "US_PA_RESELLER_EXEMPTION";
    TaxExemption2["US_RI_RESELLER_EXEMPTION"] = "US_RI_RESELLER_EXEMPTION";
    TaxExemption2["US_SC_RESELLER_EXEMPTION"] = "US_SC_RESELLER_EXEMPTION";
    TaxExemption2["US_SD_RESELLER_EXEMPTION"] = "US_SD_RESELLER_EXEMPTION";
    TaxExemption2["US_TN_RESELLER_EXEMPTION"] = "US_TN_RESELLER_EXEMPTION";
    TaxExemption2["US_TX_RESELLER_EXEMPTION"] = "US_TX_RESELLER_EXEMPTION";
    TaxExemption2["US_UT_RESELLER_EXEMPTION"] = "US_UT_RESELLER_EXEMPTION";
    TaxExemption2["US_VT_RESELLER_EXEMPTION"] = "US_VT_RESELLER_EXEMPTION";
    TaxExemption2["US_VA_RESELLER_EXEMPTION"] = "US_VA_RESELLER_EXEMPTION";
    TaxExemption2["US_WA_RESELLER_EXEMPTION"] = "US_WA_RESELLER_EXEMPTION";
    TaxExemption2["US_WV_RESELLER_EXEMPTION"] = "US_WV_RESELLER_EXEMPTION";
    TaxExemption2["US_WI_RESELLER_EXEMPTION"] = "US_WI_RESELLER_EXEMPTION";
    TaxExemption2["US_WY_RESELLER_EXEMPTION"] = "US_WY_RESELLER_EXEMPTION";
    TaxExemption2["US_DC_RESELLER_EXEMPTION"] = "US_DC_RESELLER_EXEMPTION";
    return TaxExemption2;
  })(TaxExemption || {});
  var TranslatableResourceType = /* @__PURE__ */ ((TranslatableResourceType2) => {
    TranslatableResourceType2["COLLECTION"] = "COLLECTION";
    TranslatableResourceType2["DELIVERY_METHOD_DEFINITION"] = "DELIVERY_METHOD_DEFINITION";
    TranslatableResourceType2["EMAIL_TEMPLATE"] = "EMAIL_TEMPLATE";
    TranslatableResourceType2["LINK"] = "LINK";
    TranslatableResourceType2["METAFIELD"] = "METAFIELD";
    TranslatableResourceType2["ONLINE_STORE_ARTICLE"] = "ONLINE_STORE_ARTICLE";
    TranslatableResourceType2["ONLINE_STORE_BLOG"] = "ONLINE_STORE_BLOG";
    TranslatableResourceType2["ONLINE_STORE_MENU"] = "ONLINE_STORE_MENU";
    TranslatableResourceType2["ONLINE_STORE_PAGE"] = "ONLINE_STORE_PAGE";
    TranslatableResourceType2["ONLINE_STORE_THEME"] = "ONLINE_STORE_THEME";
    TranslatableResourceType2["PACKING_SLIP_TEMPLATE"] = "PACKING_SLIP_TEMPLATE";
    TranslatableResourceType2["PAYMENT_GATEWAY"] = "PAYMENT_GATEWAY";
    TranslatableResourceType2["PRODUCT"] = "PRODUCT";
    TranslatableResourceType2["PRODUCT_OPTION"] = "PRODUCT_OPTION";
    TranslatableResourceType2["PRODUCT_VARIANT"] = "PRODUCT_VARIANT";
    TranslatableResourceType2["SELLING_PLAN"] = "SELLING_PLAN";
    TranslatableResourceType2["SELLING_PLAN_GROUP"] = "SELLING_PLAN_GROUP";
    TranslatableResourceType2["SHOP"] = "SHOP";
    TranslatableResourceType2["SHOP_POLICY"] = "SHOP_POLICY";
    return TranslatableResourceType2;
  })(TranslatableResourceType || {});
  var TranslationErrorCode = /* @__PURE__ */ ((TranslationErrorCode2) => {
    TranslationErrorCode2["BLANK"] = "BLANK";
    TranslationErrorCode2["INVALID"] = "INVALID";
    TranslationErrorCode2["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
    TranslationErrorCode2["TOO_MANY_KEYS_FOR_RESOURCE"] = "TOO_MANY_KEYS_FOR_RESOURCE";
    TranslationErrorCode2["INVALID_KEY_FOR_MODEL"] = "INVALID_KEY_FOR_MODEL";
    TranslationErrorCode2["FAILS_RESOURCE_VALIDATION"] = "FAILS_RESOURCE_VALIDATION";
    TranslationErrorCode2["INVALID_TRANSLATABLE_CONTENT"] = "INVALID_TRANSLATABLE_CONTENT";
    TranslationErrorCode2["INVALID_MARKET_LOCALIZABLE_CONTENT"] = "INVALID_MARKET_LOCALIZABLE_CONTENT";
    TranslationErrorCode2["INVALID_LOCALE_FOR_SHOP"] = "INVALID_LOCALE_FOR_SHOP";
    TranslationErrorCode2["INVALID_CODE"] = "INVALID_CODE";
    TranslationErrorCode2["INVALID_FORMAT"] = "INVALID_FORMAT";
    TranslationErrorCode2["MARKET_CUSTOM_CONTENT_NOT_ALLOWED"] = "MARKET_CUSTOM_CONTENT_NOT_ALLOWED";
    TranslationErrorCode2["MARKET_DOES_NOT_EXIST"] = "MARKET_DOES_NOT_EXIST";
    TranslationErrorCode2["MARKET_LOCALE_CREATION_FAILED"] = "MARKET_LOCALE_CREATION_FAILED";
    TranslationErrorCode2["RESOURCE_NOT_MARKET_CUSTOMIZABLE"] = "RESOURCE_NOT_MARKET_CUSTOMIZABLE";
    TranslationErrorCode2["INVALID_LOCALE_FOR_MARKET"] = "INVALID_LOCALE_FOR_MARKET";
    return TranslationErrorCode2;
  })(TranslationErrorCode || {});
  var UnitSystem = /* @__PURE__ */ ((UnitSystem2) => {
    UnitSystem2["IMPERIAL_SYSTEM"] = "IMPERIAL_SYSTEM";
    UnitSystem2["METRIC_SYSTEM"] = "METRIC_SYSTEM";
    return UnitSystem2;
  })(UnitSystem || {});
  var UrlRedirectBulkDeleteByIdsUserErrorCode = /* @__PURE__ */ ((UrlRedirectBulkDeleteByIdsUserErrorCode2) => {
    UrlRedirectBulkDeleteByIdsUserErrorCode2["IDS_EMPTY"] = "IDS_EMPTY";
    return UrlRedirectBulkDeleteByIdsUserErrorCode2;
  })(UrlRedirectBulkDeleteByIdsUserErrorCode || {});
  var UrlRedirectBulkDeleteBySavedSearchUserErrorCode = /* @__PURE__ */ ((UrlRedirectBulkDeleteBySavedSearchUserErrorCode2) => {
    UrlRedirectBulkDeleteBySavedSearchUserErrorCode2["SAVED_SEARCH_NOT_FOUND"] = "SAVED_SEARCH_NOT_FOUND";
    UrlRedirectBulkDeleteBySavedSearchUserErrorCode2["INVALID_SAVED_SEARCH_QUERY"] = "INVALID_SAVED_SEARCH_QUERY";
    return UrlRedirectBulkDeleteBySavedSearchUserErrorCode2;
  })(UrlRedirectBulkDeleteBySavedSearchUserErrorCode || {});
  var UrlRedirectBulkDeleteBySearchUserErrorCode = /* @__PURE__ */ ((UrlRedirectBulkDeleteBySearchUserErrorCode2) => {
    UrlRedirectBulkDeleteBySearchUserErrorCode2["INVALID_SEARCH_ARGUMENT"] = "INVALID_SEARCH_ARGUMENT";
    return UrlRedirectBulkDeleteBySearchUserErrorCode2;
  })(UrlRedirectBulkDeleteBySearchUserErrorCode || {});
  var UrlRedirectErrorCode = /* @__PURE__ */ ((UrlRedirectErrorCode2) => {
    UrlRedirectErrorCode2["DOES_NOT_EXIST"] = "DOES_NOT_EXIST";
    UrlRedirectErrorCode2["CREATE_FAILED"] = "CREATE_FAILED";
    UrlRedirectErrorCode2["UPDATE_FAILED"] = "UPDATE_FAILED";
    UrlRedirectErrorCode2["DELETE_FAILED"] = "DELETE_FAILED";
    return UrlRedirectErrorCode2;
  })(UrlRedirectErrorCode || {});
  var UrlRedirectImportErrorCode = /* @__PURE__ */ ((UrlRedirectImportErrorCode2) => {
    UrlRedirectImportErrorCode2["FILE_DOES_NOT_EXIST"] = "FILE_DOES_NOT_EXIST";
    UrlRedirectImportErrorCode2["NOT_FOUND"] = "NOT_FOUND";
    UrlRedirectImportErrorCode2["ALREADY_IMPORTED"] = "ALREADY_IMPORTED";
    UrlRedirectImportErrorCode2["IN_PROGRESS"] = "IN_PROGRESS";
    return UrlRedirectImportErrorCode2;
  })(UrlRedirectImportErrorCode || {});
  var UrlRedirectSortKeys = /* @__PURE__ */ ((UrlRedirectSortKeys2) => {
    UrlRedirectSortKeys2["RELEVANCE"] = "RELEVANCE";
    UrlRedirectSortKeys2["PATH"] = "PATH";
    UrlRedirectSortKeys2["ID"] = "ID";
    return UrlRedirectSortKeys2;
  })(UrlRedirectSortKeys || {});
  var VisualizationType = /* @__PURE__ */ ((VisualizationType2) => {
    VisualizationType2["LINE"] = "LINE";
    VisualizationType2["BAR"] = "BAR";
    return VisualizationType2;
  })(VisualizationType || {});
  var WebhookSubscriptionFormat = /* @__PURE__ */ ((WebhookSubscriptionFormat2) => {
    WebhookSubscriptionFormat2["JSON"] = "JSON";
    WebhookSubscriptionFormat2["XML"] = "XML";
    return WebhookSubscriptionFormat2;
  })(WebhookSubscriptionFormat || {});
  var WebhookSubscriptionSortKeys = /* @__PURE__ */ ((WebhookSubscriptionSortKeys2) => {
    WebhookSubscriptionSortKeys2["CREATED_AT"] = "CREATED_AT";
    WebhookSubscriptionSortKeys2["ID"] = "ID";
    WebhookSubscriptionSortKeys2["RELEVANCE"] = "RELEVANCE";
    return WebhookSubscriptionSortKeys2;
  })(WebhookSubscriptionSortKeys || {});
  var WebhookSubscriptionTopic = /* @__PURE__ */ ((WebhookSubscriptionTopic2) => {
    WebhookSubscriptionTopic2["APP_UNINSTALLED"] = "APP_UNINSTALLED";
    WebhookSubscriptionTopic2["CARTS_CREATE"] = "CARTS_CREATE";
    WebhookSubscriptionTopic2["CARTS_UPDATE"] = "CARTS_UPDATE";
    WebhookSubscriptionTopic2["CHANNELS_DELETE"] = "CHANNELS_DELETE";
    WebhookSubscriptionTopic2["CHECKOUTS_CREATE"] = "CHECKOUTS_CREATE";
    WebhookSubscriptionTopic2["CHECKOUTS_DELETE"] = "CHECKOUTS_DELETE";
    WebhookSubscriptionTopic2["CHECKOUTS_UPDATE"] = "CHECKOUTS_UPDATE";
    WebhookSubscriptionTopic2["CUSTOMER_PAYMENT_METHODS_CREATE"] = "CUSTOMER_PAYMENT_METHODS_CREATE";
    WebhookSubscriptionTopic2["CUSTOMER_PAYMENT_METHODS_UPDATE"] = "CUSTOMER_PAYMENT_METHODS_UPDATE";
    WebhookSubscriptionTopic2["CUSTOMER_PAYMENT_METHODS_REVOKE"] = "CUSTOMER_PAYMENT_METHODS_REVOKE";
    WebhookSubscriptionTopic2["COLLECTION_LISTINGS_ADD"] = "COLLECTION_LISTINGS_ADD";
    WebhookSubscriptionTopic2["COLLECTION_LISTINGS_REMOVE"] = "COLLECTION_LISTINGS_REMOVE";
    WebhookSubscriptionTopic2["COLLECTION_LISTINGS_UPDATE"] = "COLLECTION_LISTINGS_UPDATE";
    WebhookSubscriptionTopic2["COLLECTION_PUBLICATIONS_CREATE"] = "COLLECTION_PUBLICATIONS_CREATE";
    WebhookSubscriptionTopic2["COLLECTION_PUBLICATIONS_DELETE"] = "COLLECTION_PUBLICATIONS_DELETE";
    WebhookSubscriptionTopic2["COLLECTION_PUBLICATIONS_UPDATE"] = "COLLECTION_PUBLICATIONS_UPDATE";
    WebhookSubscriptionTopic2["COLLECTIONS_CREATE"] = "COLLECTIONS_CREATE";
    WebhookSubscriptionTopic2["COLLECTIONS_DELETE"] = "COLLECTIONS_DELETE";
    WebhookSubscriptionTopic2["COLLECTIONS_UPDATE"] = "COLLECTIONS_UPDATE";
    WebhookSubscriptionTopic2["CUSTOMER_GROUPS_CREATE"] = "CUSTOMER_GROUPS_CREATE";
    WebhookSubscriptionTopic2["CUSTOMER_GROUPS_DELETE"] = "CUSTOMER_GROUPS_DELETE";
    WebhookSubscriptionTopic2["CUSTOMER_GROUPS_UPDATE"] = "CUSTOMER_GROUPS_UPDATE";
    WebhookSubscriptionTopic2["CUSTOMERS_CREATE"] = "CUSTOMERS_CREATE";
    WebhookSubscriptionTopic2["CUSTOMERS_DELETE"] = "CUSTOMERS_DELETE";
    WebhookSubscriptionTopic2["CUSTOMERS_DISABLE"] = "CUSTOMERS_DISABLE";
    WebhookSubscriptionTopic2["CUSTOMERS_ENABLE"] = "CUSTOMERS_ENABLE";
    WebhookSubscriptionTopic2["CUSTOMERS_UPDATE"] = "CUSTOMERS_UPDATE";
    WebhookSubscriptionTopic2["CUSTOMERS_MARKETING_CONSENT_UPDATE"] = "CUSTOMERS_MARKETING_CONSENT_UPDATE";
    WebhookSubscriptionTopic2["DISPUTES_CREATE"] = "DISPUTES_CREATE";
    WebhookSubscriptionTopic2["DISPUTES_UPDATE"] = "DISPUTES_UPDATE";
    WebhookSubscriptionTopic2["DRAFT_ORDERS_CREATE"] = "DRAFT_ORDERS_CREATE";
    WebhookSubscriptionTopic2["DRAFT_ORDERS_DELETE"] = "DRAFT_ORDERS_DELETE";
    WebhookSubscriptionTopic2["DRAFT_ORDERS_UPDATE"] = "DRAFT_ORDERS_UPDATE";
    WebhookSubscriptionTopic2["FULFILLMENT_EVENTS_CREATE"] = "FULFILLMENT_EVENTS_CREATE";
    WebhookSubscriptionTopic2["FULFILLMENT_EVENTS_DELETE"] = "FULFILLMENT_EVENTS_DELETE";
    WebhookSubscriptionTopic2["FULFILLMENTS_CREATE"] = "FULFILLMENTS_CREATE";
    WebhookSubscriptionTopic2["FULFILLMENTS_UPDATE"] = "FULFILLMENTS_UPDATE";
    WebhookSubscriptionTopic2["ATTRIBUTED_SESSIONS_FIRST"] = "ATTRIBUTED_SESSIONS_FIRST";
    WebhookSubscriptionTopic2["ATTRIBUTED_SESSIONS_LAST"] = "ATTRIBUTED_SESSIONS_LAST";
    WebhookSubscriptionTopic2["ORDER_TRANSACTIONS_CREATE"] = "ORDER_TRANSACTIONS_CREATE";
    WebhookSubscriptionTopic2["ORDERS_CANCELLED"] = "ORDERS_CANCELLED";
    WebhookSubscriptionTopic2["ORDERS_CREATE"] = "ORDERS_CREATE";
    WebhookSubscriptionTopic2["ORDERS_DELETE"] = "ORDERS_DELETE";
    WebhookSubscriptionTopic2["ORDERS_EDITED"] = "ORDERS_EDITED";
    WebhookSubscriptionTopic2["ORDERS_FULFILLED"] = "ORDERS_FULFILLED";
    WebhookSubscriptionTopic2["ORDERS_PAID"] = "ORDERS_PAID";
    WebhookSubscriptionTopic2["ORDERS_PARTIALLY_FULFILLED"] = "ORDERS_PARTIALLY_FULFILLED";
    WebhookSubscriptionTopic2["ORDERS_UPDATED"] = "ORDERS_UPDATED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_MOVED"] = "FULFILLMENT_ORDERS_MOVED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_HOLD_RELEASED"] = "FULFILLMENT_ORDERS_HOLD_RELEASED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY"] = "FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE"] = "FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_CANCELLED"] = "FULFILLMENT_ORDERS_CANCELLED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE"] = "FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED"] = "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED"] = "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED"] = "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED"] = "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED"] = "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED"] = "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY"] = "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_PLACED_ON_HOLD"] = "FULFILLMENT_ORDERS_PLACED_ON_HOLD";
    WebhookSubscriptionTopic2["PRODUCT_LISTINGS_ADD"] = "PRODUCT_LISTINGS_ADD";
    WebhookSubscriptionTopic2["PRODUCT_LISTINGS_REMOVE"] = "PRODUCT_LISTINGS_REMOVE";
    WebhookSubscriptionTopic2["PRODUCT_LISTINGS_UPDATE"] = "PRODUCT_LISTINGS_UPDATE";
    WebhookSubscriptionTopic2["SCHEDULED_PRODUCT_LISTINGS_ADD"] = "SCHEDULED_PRODUCT_LISTINGS_ADD";
    WebhookSubscriptionTopic2["SCHEDULED_PRODUCT_LISTINGS_UPDATE"] = "SCHEDULED_PRODUCT_LISTINGS_UPDATE";
    WebhookSubscriptionTopic2["SCHEDULED_PRODUCT_LISTINGS_REMOVE"] = "SCHEDULED_PRODUCT_LISTINGS_REMOVE";
    WebhookSubscriptionTopic2["PRODUCT_PUBLICATIONS_CREATE"] = "PRODUCT_PUBLICATIONS_CREATE";
    WebhookSubscriptionTopic2["PRODUCT_PUBLICATIONS_DELETE"] = "PRODUCT_PUBLICATIONS_DELETE";
    WebhookSubscriptionTopic2["PRODUCT_PUBLICATIONS_UPDATE"] = "PRODUCT_PUBLICATIONS_UPDATE";
    WebhookSubscriptionTopic2["PRODUCTS_CREATE"] = "PRODUCTS_CREATE";
    WebhookSubscriptionTopic2["PRODUCTS_DELETE"] = "PRODUCTS_DELETE";
    WebhookSubscriptionTopic2["PRODUCTS_UPDATE"] = "PRODUCTS_UPDATE";
    WebhookSubscriptionTopic2["REFUNDS_CREATE"] = "REFUNDS_CREATE";
    WebhookSubscriptionTopic2["SEGMENTS_CREATE"] = "SEGMENTS_CREATE";
    WebhookSubscriptionTopic2["SEGMENTS_DELETE"] = "SEGMENTS_DELETE";
    WebhookSubscriptionTopic2["SEGMENTS_UPDATE"] = "SEGMENTS_UPDATE";
    WebhookSubscriptionTopic2["SHIPPING_ADDRESSES_CREATE"] = "SHIPPING_ADDRESSES_CREATE";
    WebhookSubscriptionTopic2["SHIPPING_ADDRESSES_UPDATE"] = "SHIPPING_ADDRESSES_UPDATE";
    WebhookSubscriptionTopic2["SHOP_UPDATE"] = "SHOP_UPDATE";
    WebhookSubscriptionTopic2["TAX_SERVICES_CREATE"] = "TAX_SERVICES_CREATE";
    WebhookSubscriptionTopic2["TAX_SERVICES_UPDATE"] = "TAX_SERVICES_UPDATE";
    WebhookSubscriptionTopic2["THEMES_CREATE"] = "THEMES_CREATE";
    WebhookSubscriptionTopic2["THEMES_DELETE"] = "THEMES_DELETE";
    WebhookSubscriptionTopic2["THEMES_PUBLISH"] = "THEMES_PUBLISH";
    WebhookSubscriptionTopic2["THEMES_UPDATE"] = "THEMES_UPDATE";
    WebhookSubscriptionTopic2["VARIANTS_IN_STOCK"] = "VARIANTS_IN_STOCK";
    WebhookSubscriptionTopic2["VARIANTS_OUT_OF_STOCK"] = "VARIANTS_OUT_OF_STOCK";
    WebhookSubscriptionTopic2["INVENTORY_LEVELS_CONNECT"] = "INVENTORY_LEVELS_CONNECT";
    WebhookSubscriptionTopic2["INVENTORY_LEVELS_UPDATE"] = "INVENTORY_LEVELS_UPDATE";
    WebhookSubscriptionTopic2["INVENTORY_LEVELS_DISCONNECT"] = "INVENTORY_LEVELS_DISCONNECT";
    WebhookSubscriptionTopic2["INVENTORY_ITEMS_CREATE"] = "INVENTORY_ITEMS_CREATE";
    WebhookSubscriptionTopic2["INVENTORY_ITEMS_UPDATE"] = "INVENTORY_ITEMS_UPDATE";
    WebhookSubscriptionTopic2["INVENTORY_ITEMS_DELETE"] = "INVENTORY_ITEMS_DELETE";
    WebhookSubscriptionTopic2["LOCATIONS_ACTIVATE"] = "LOCATIONS_ACTIVATE";
    WebhookSubscriptionTopic2["LOCATIONS_DEACTIVATE"] = "LOCATIONS_DEACTIVATE";
    WebhookSubscriptionTopic2["LOCATIONS_CREATE"] = "LOCATIONS_CREATE";
    WebhookSubscriptionTopic2["LOCATIONS_UPDATE"] = "LOCATIONS_UPDATE";
    WebhookSubscriptionTopic2["LOCATIONS_DELETE"] = "LOCATIONS_DELETE";
    WebhookSubscriptionTopic2["TENDER_TRANSACTIONS_CREATE"] = "TENDER_TRANSACTIONS_CREATE";
    WebhookSubscriptionTopic2["APP_PURCHASES_ONE_TIME_UPDATE"] = "APP_PURCHASES_ONE_TIME_UPDATE";
    WebhookSubscriptionTopic2["APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT"] = "APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT";
    WebhookSubscriptionTopic2["APP_SUBSCRIPTIONS_UPDATE"] = "APP_SUBSCRIPTIONS_UPDATE";
    WebhookSubscriptionTopic2["LOCALES_CREATE"] = "LOCALES_CREATE";
    WebhookSubscriptionTopic2["LOCALES_UPDATE"] = "LOCALES_UPDATE";
    WebhookSubscriptionTopic2["DOMAINS_CREATE"] = "DOMAINS_CREATE";
    WebhookSubscriptionTopic2["DOMAINS_UPDATE"] = "DOMAINS_UPDATE";
    WebhookSubscriptionTopic2["DOMAINS_DESTROY"] = "DOMAINS_DESTROY";
    WebhookSubscriptionTopic2["SUBSCRIPTION_CONTRACTS_CREATE"] = "SUBSCRIPTION_CONTRACTS_CREATE";
    WebhookSubscriptionTopic2["SUBSCRIPTION_CONTRACTS_UPDATE"] = "SUBSCRIPTION_CONTRACTS_UPDATE";
    WebhookSubscriptionTopic2["SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE"] = "SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE";
    WebhookSubscriptionTopic2["SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE"] = "SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE";
    WebhookSubscriptionTopic2["SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE"] = "SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE";
    WebhookSubscriptionTopic2["PROFILES_CREATE"] = "PROFILES_CREATE";
    WebhookSubscriptionTopic2["PROFILES_UPDATE"] = "PROFILES_UPDATE";
    WebhookSubscriptionTopic2["PROFILES_DELETE"] = "PROFILES_DELETE";
    WebhookSubscriptionTopic2["SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS"] = "SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS";
    WebhookSubscriptionTopic2["SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE"] = "SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE";
    WebhookSubscriptionTopic2["SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED"] = "SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED";
    WebhookSubscriptionTopic2["RETURNS_CANCEL"] = "RETURNS_CANCEL";
    WebhookSubscriptionTopic2["RETURNS_CLOSE"] = "RETURNS_CLOSE";
    WebhookSubscriptionTopic2["RETURNS_REOPEN"] = "RETURNS_REOPEN";
    WebhookSubscriptionTopic2["RETURNS_REQUEST"] = "RETURNS_REQUEST";
    WebhookSubscriptionTopic2["RETURNS_APPROVE"] = "RETURNS_APPROVE";
    WebhookSubscriptionTopic2["RETURNS_DECLINE"] = "RETURNS_DECLINE";
    WebhookSubscriptionTopic2["REVERSE_DELIVERIES_ATTACH_DELIVERABLE"] = "REVERSE_DELIVERIES_ATTACH_DELIVERABLE";
    WebhookSubscriptionTopic2["REVERSE_FULFILLMENT_ORDERS_DISPOSE"] = "REVERSE_FULFILLMENT_ORDERS_DISPOSE";
    WebhookSubscriptionTopic2["PAYMENT_TERMS_CREATE"] = "PAYMENT_TERMS_CREATE";
    WebhookSubscriptionTopic2["PAYMENT_TERMS_DELETE"] = "PAYMENT_TERMS_DELETE";
    WebhookSubscriptionTopic2["PAYMENT_TERMS_UPDATE"] = "PAYMENT_TERMS_UPDATE";
    WebhookSubscriptionTopic2["PAYMENT_SCHEDULES_DUE"] = "PAYMENT_SCHEDULES_DUE";
    WebhookSubscriptionTopic2["SELLING_PLAN_GROUPS_CREATE"] = "SELLING_PLAN_GROUPS_CREATE";
    WebhookSubscriptionTopic2["SELLING_PLAN_GROUPS_UPDATE"] = "SELLING_PLAN_GROUPS_UPDATE";
    WebhookSubscriptionTopic2["SELLING_PLAN_GROUPS_DELETE"] = "SELLING_PLAN_GROUPS_DELETE";
    WebhookSubscriptionTopic2["BULK_OPERATIONS_FINISH"] = "BULK_OPERATIONS_FINISH";
    WebhookSubscriptionTopic2["MARKETS_CREATE"] = "MARKETS_CREATE";
    WebhookSubscriptionTopic2["MARKETS_UPDATE"] = "MARKETS_UPDATE";
    WebhookSubscriptionTopic2["MARKETS_DELETE"] = "MARKETS_DELETE";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_RESCHEDULED"] = "FULFILLMENT_ORDERS_RESCHEDULED";
    WebhookSubscriptionTopic2["AUDIT_EVENTS_ADMIN_API_ACTIVITY"] = "AUDIT_EVENTS_ADMIN_API_ACTIVITY";
    WebhookSubscriptionTopic2["FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP"] = "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP";
    return WebhookSubscriptionTopic2;
  })(WebhookSubscriptionTopic || {});
  var WeightUnit = /* @__PURE__ */ ((WeightUnit2) => {
    WeightUnit2["KILOGRAMS"] = "KILOGRAMS";
    WeightUnit2["GRAMS"] = "GRAMS";
    WeightUnit2["POUNDS"] = "POUNDS";
    WeightUnit2["OUNCES"] = "OUNCES";
    return WeightUnit2;
  })(WeightUnit || {});
})();
