/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	ARN: `scalar.ARN` as const,
	Abandonment:{
		productsAddedToCart:{

		},
		productsViewed:{

		}
	},
	AbandonmentAbandonmentType: "enum" as const,
	AbandonmentEmailState: "enum" as const,
	AbandonmentEmailStateUpdateUserErrorCode: "enum" as const,
	AppDeveloperType: "enum" as const,
	AppInstallation:{
		allSubscriptions:{
			sortKey:"AppSubscriptionSortKeys"
		},
		credits:{
			sortKey:"AppTransactionSortKeys"
		},
		metafield:{

		},
		metafields:{

		},
		oneTimePurchases:{
			sortKey:"AppTransactionSortKeys"
		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		revenueAttributionRecords:{
			sortKey:"AppRevenueAttributionRecordSortKeys"
		}
	},
	AppInstallationCategory: "enum" as const,
	AppInstallationPrivacy: "enum" as const,
	AppInstallationSortKeys: "enum" as const,
	AppPlanInput:{
		appUsagePricingDetails:"AppUsagePricingInput",
		appRecurringPricingDetails:"AppRecurringPricingInput"
	},
	AppPricingInterval: "enum" as const,
	AppPublicCategory: "enum" as const,
	AppPurchaseStatus: "enum" as const,
	AppRecurringPricingInput:{
		interval:"AppPricingInterval",
		price:"MoneyInput",
		discount:"AppSubscriptionDiscountInput"
	},
	AppRevenueAttributionRecordCreateUserErrorCode: "enum" as const,
	AppRevenueAttributionRecordDeleteUserErrorCode: "enum" as const,
	AppRevenueAttributionRecordInput:{
		capturedAt:"DateTime",
		amount:"MoneyInput",
		type:"AppRevenueAttributionType"
	},
	AppRevenueAttributionRecordSortKeys: "enum" as const,
	AppRevenueAttributionType: "enum" as const,
	AppSubscriptionDiscountInput:{
		value:"AppSubscriptionDiscountValueInput"
	},
	AppSubscriptionDiscountValueInput:{
		amount:"Decimal"
	},
	AppSubscriptionLineItem:{
		usageRecords:{
			sortKey:"AppUsageRecordSortKeys"
		}
	},
	AppSubscriptionLineItemInput:{
		plan:"AppPlanInput"
	},
	AppSubscriptionReplacementBehavior: "enum" as const,
	AppSubscriptionSortKeys: "enum" as const,
	AppSubscriptionStatus: "enum" as const,
	AppSubscriptionTrialExtendUserErrorCode: "enum" as const,
	AppTransactionSortKeys: "enum" as const,
	AppUsagePricingInput:{
		cappedAmount:"MoneyInput"
	},
	AppUsageRecordSortKeys: "enum" as const,
	AttributeInput:{

	},
	AutomaticDiscountSortKeys: "enum" as const,
	BadgeType: "enum" as const,
	BillingAttemptUserErrorCode: "enum" as const,
	BulkMutationErrorCode: "enum" as const,
	BulkOperationErrorCode: "enum" as const,
	BulkOperationStatus: "enum" as const,
	BulkOperationType: "enum" as const,
	BulkProductResourceFeedbackCreateUserErrorCode: "enum" as const,
	BusinessCustomerErrorCode: "enum" as const,
	BuyerExperienceConfigurationInput:{

	},
	CalculatedOrder:{
		addedDiscountApplications:{

		},
		addedLineItems:{

		},
		lineItems:{

		},
		stagedChanges:{

		}
	},
	Channel:{
		collectionPublicationsV3:{

		},
		collections:{

		},
		hasCollection:{

		},
		productPublications:{

		},
		productPublicationsV3:{

		},
		products:{

		}
	},
	CheckoutProfileSortKeys: "enum" as const,
	CodeDiscountSortKeys: "enum" as const,
	Collection:{
		description:{

		},
		hasProduct:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		products:{
			sortKey:"ProductCollectionSortKeys"
		},
		publicationCount:{

		},
		publications:{

		},
		publishedOnChannel:{

		},
		publishedOnPublication:{

		},
		resourcePublications:{

		},
		resourcePublicationsV2:{

		},
		translations:{

		},
		unpublishedChannels:{

		},
		unpublishedPublications:{

		}
	},
	CollectionAddProductsV2UserErrorCode: "enum" as const,
	CollectionDeleteInput:{

	},
	CollectionInput:{
		image:"ImageInput",
		privateMetafields:"PrivateMetafieldInput",
		ruleSet:"CollectionRuleSetInput",
		sortOrder:"CollectionSortOrder",
		metafields:"MetafieldInput",
		seo:"SEOInput"
	},
	CollectionPublicationInput:{

	},
	CollectionPublishInput:{
		collectionPublications:"CollectionPublicationInput"
	},
	CollectionRuleColumn: "enum" as const,
	CollectionRuleInput:{
		column:"CollectionRuleColumn",
		relation:"CollectionRuleRelation"
	},
	CollectionRuleRelation: "enum" as const,
	CollectionRuleSetInput:{
		rules:"CollectionRuleInput"
	},
	CollectionSortKeys: "enum" as const,
	CollectionSortOrder: "enum" as const,
	CollectionUnpublishInput:{
		collectionPublications:"CollectionPublicationInput"
	},
	Company:{
		contactRoles:{
			sortKey:"CompanyContactRoleSortKeys"
		},
		contacts:{
			sortKey:"CompanyContactSortKeys"
		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		events:{
			sortKey:"EventSortKeys"
		},
		locations:{
			sortKey:"CompanyLocationSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		privateMetafield:{

		},
		privateMetafields:{

		}
	},
	CompanyAddress:{
		formattedAddress:{

		}
	},
	CompanyAddressInput:{
		countryCode:"CountryCode"
	},
	CompanyAddressType: "enum" as const,
	CompanyContact:{
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		roleAssignments:{
			sortKey:"CompanyContactRoleAssignmentSortKeys"
		}
	},
	CompanyContactInput:{

	},
	CompanyContactRoleAssign:{

	},
	CompanyContactRoleAssignmentSortKeys: "enum" as const,
	CompanyContactRoleSortKeys: "enum" as const,
	CompanyContactSortKeys: "enum" as const,
	CompanyCreateInput:{
		company:"CompanyInput",
		companyContact:"CompanyContactInput",
		companyLocation:"CompanyLocationInput"
	},
	CompanyInput:{
		customerSince:"DateTime"
	},
	CompanyLocation:{
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		roleAssignments:{
			sortKey:"CompanyContactRoleAssignmentSortKeys"
		}
	},
	CompanyLocationInput:{
		buyerExperienceConfiguration:"BuyerExperienceConfigurationInput",
		billingAddress:"CompanyAddressInput",
		shippingAddress:"CompanyAddressInput",
		taxExemptions:"TaxExemption"
	},
	CompanyLocationRoleAssign:{

	},
	CompanyLocationSortKeys: "enum" as const,
	CompanyLocationUpdateInput:{
		buyerExperienceConfiguration:"BuyerExperienceConfigurationInput"
	},
	CompanySortKeys: "enum" as const,
	ContextualPricingContext:{
		country:"CountryCode"
	},
	CountryCode: "enum" as const,
	CountryHarmonizedSystemCodeInput:{
		countryCode:"CountryCode"
	},
	CreateMediaInput:{
		mediaContentType:"MediaContentType"
	},
	CropRegion: "enum" as const,
	CurrencyCode: "enum" as const,
	CustomShippingPackageInput:{
		weight:"WeightInput",
		dimensions:"ObjectDimensionsInput",
		type:"ShippingPackageType"
	},
	Customer:{
		addresses:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		paymentMethods:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		subscriptionContracts:{

		}
	},
	CustomerConsentCollectedFrom: "enum" as const,
	CustomerDeleteInput:{

	},
	CustomerEmailAddressMarketingState: "enum" as const,
	CustomerEmailAddressOpenTrackingLevel: "enum" as const,
	CustomerEmailMarketingConsentInput:{
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerEmailMarketingState",
		consentUpdatedAt:"DateTime"
	},
	CustomerEmailMarketingConsentUpdateInput:{
		emailMarketingConsent:"CustomerEmailMarketingConsentInput"
	},
	CustomerEmailMarketingConsentUpdateUserErrorCode: "enum" as const,
	CustomerEmailMarketingState: "enum" as const,
	CustomerInput:{
		addresses:"MailingAddressInput",
		metafields:"MetafieldInput",
		privateMetafields:"PrivateMetafieldInput",
		emailMarketingConsent:"CustomerEmailMarketingConsentInput",
		smsMarketingConsent:"CustomerSmsMarketingConsentInput",
		taxExemptions:"TaxExemption"
	},
	CustomerJourneySummary:{
		moments:{

		}
	},
	CustomerMarketingOptInLevel: "enum" as const,
	CustomerPaymentMethod:{
		subscriptionContracts:{

		}
	},
	CustomerPaymentMethodGetUpdateUrlUserErrorCode: "enum" as const,
	CustomerPaymentMethodRemoteInput:{
		stripePaymentMethod:"RemoteStripePaymentMethodInput",
		authorizeNetCustomerPaymentProfile:"RemoteAuthorizeNetCustomerPaymentProfileInput",
		braintreePaymentMethod:"RemoteBraintreePaymentMethodInput"
	},
	CustomerPaymentMethodRemoteUserErrorCode: "enum" as const,
	CustomerPaymentMethodRevocationReason: "enum" as const,
	CustomerPaymentMethodUserErrorCode: "enum" as const,
	CustomerPredictedSpendTier: "enum" as const,
	CustomerProductSubscriberStatus: "enum" as const,
	CustomerSavedSearchSortKeys: "enum" as const,
	CustomerSegmentMembersQueryInput:{

	},
	CustomerSegmentMembersQueryUserErrorCode: "enum" as const,
	CustomerSmsMarketingConsentErrorCode: "enum" as const,
	CustomerSmsMarketingConsentInput:{
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerSmsMarketingState",
		consentUpdatedAt:"DateTime"
	},
	CustomerSmsMarketingConsentUpdateInput:{
		smsMarketingConsent:"CustomerSmsMarketingConsentInput"
	},
	CustomerSmsMarketingState: "enum" as const,
	CustomerSortKeys: "enum" as const,
	CustomerState: "enum" as const,
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
	DayOfTheWeek: "enum" as const,
	Decimal: `scalar.Decimal` as const,
	DelegateAccessTokenCreateUserErrorCode: "enum" as const,
	DelegateAccessTokenInput:{

	},
	DeletionEventSortKeys: "enum" as const,
	DeletionEventSubjectType: "enum" as const,
	DeliveryCarrierService:{
		availableServicesForCountries:{
			countryCodes:"CountryCode"
		}
	},
	DeliveryConditionField: "enum" as const,
	DeliveryConditionOperator: "enum" as const,
	DeliveryCountryInput:{
		code:"CountryCode",
		provinces:"DeliveryProvinceInput"
	},
	DeliveryLegacyModeBlockedReason: "enum" as const,
	DeliveryLocalPickupTime: "enum" as const,
	DeliveryLocationGroup:{
		locations:{
			sortKey:"LocationSortKeys"
		}
	},
	DeliveryLocationGroupZone:{
		methodDefinitions:{
			type:"DeliveryMethodDefinitionType",
			sortKey:"MethodDefinitionSortKeys"
		}
	},
	DeliveryLocationGroupZoneInput:{
		countries:"DeliveryCountryInput",
		methodDefinitionsToCreate:"DeliveryMethodDefinitionInput",
		methodDefinitionsToUpdate:"DeliveryMethodDefinitionInput"
	},
	DeliveryLocationLocalPickupEnableInput:{
		pickupTime:"DeliveryLocalPickupTime"
	},
	DeliveryLocationLocalPickupSettingsErrorCode: "enum" as const,
	DeliveryMethodDefinitionInput:{
		rateDefinition:"DeliveryRateDefinitionInput",
		participant:"DeliveryParticipantInput",
		weightConditionsToCreate:"DeliveryWeightConditionInput",
		priceConditionsToCreate:"DeliveryPriceConditionInput",
		conditionsToUpdate:"DeliveryUpdateConditionInput"
	},
	DeliveryMethodDefinitionType: "enum" as const,
	DeliveryMethodType: "enum" as const,
	DeliveryParticipantInput:{
		fixedFee:"MoneyInput",
		participantServices:"DeliveryParticipantServiceInput"
	},
	DeliveryParticipantServiceInput:{

	},
	DeliveryPriceConditionInput:{
		criteria:"MoneyInput",
		operator:"DeliveryConditionOperator"
	},
	DeliveryProfile:{
		profileItems:{

		},
		profileLocationGroups:{

		},
		sellingPlanGroups:{

		},
		unassignedLocationsPaginated:{

		}
	},
	DeliveryProfileInput:{
		profileLocationGroups:"DeliveryProfileLocationGroupInput",
		locationGroupsToCreate:"DeliveryProfileLocationGroupInput",
		locationGroupsToUpdate:"DeliveryProfileLocationGroupInput"
	},
	DeliveryProfileItem:{
		variants:{

		}
	},
	DeliveryProfileLocationGroup:{
		locationGroupZones:{

		}
	},
	DeliveryProfileLocationGroupInput:{
		zonesToCreate:"DeliveryLocationGroupZoneInput",
		zonesToUpdate:"DeliveryLocationGroupZoneInput"
	},
	DeliveryProvinceInput:{

	},
	DeliveryRateDefinitionInput:{
		price:"MoneyInput"
	},
	DeliverySettingInput:{

	},
	DeliveryUpdateConditionInput:{
		field:"DeliveryConditionField",
		operator:"DeliveryConditionOperator"
	},
	DeliveryWeightConditionInput:{
		criteria:"WeightInput",
		operator:"DeliveryConditionOperator"
	},
	DigitalWallet: "enum" as const,
	DiscountAmountInput:{
		amount:"Decimal"
	},
	DiscountApplicationAllocationMethod: "enum" as const,
	DiscountApplicationLevel: "enum" as const,
	DiscountApplicationTargetSelection: "enum" as const,
	DiscountApplicationTargetType: "enum" as const,
	DiscountAutomaticAppInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		metafields:"MetafieldInput"
	},
	DiscountAutomaticBasicInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		minimumRequirement:"DiscountMinimumRequirementInput",
		customerGets:"DiscountCustomerGetsInput"
	},
	DiscountAutomaticBxgy:{
		events:{
			sortKey:"EventSortKeys"
		}
	},
	DiscountAutomaticBxgyInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		usesPerOrderLimit:"UnsignedInt64",
		customerBuys:"DiscountCustomerBuysInput",
		customerGets:"DiscountCustomerGetsInput"
	},
	DiscountAutomaticNode:{
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		}
	},
	DiscountClass: "enum" as const,
	DiscountCodeApp:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeAppInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		customerSelection:"DiscountCustomerSelectionInput",
		metafields:"MetafieldInput"
	},
	DiscountCodeBasic:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeBasicInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		minimumRequirement:"DiscountMinimumRequirementInput",
		customerGets:"DiscountCustomerGetsInput",
		customerSelection:"DiscountCustomerSelectionInput"
	},
	DiscountCodeBxgy:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeBxgyInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		customerBuys:"DiscountCustomerBuysInput",
		customerGets:"DiscountCustomerGetsInput",
		customerSelection:"DiscountCustomerSelectionInput"
	},
	DiscountCodeFreeShipping:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeFreeShippingInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		minimumRequirement:"DiscountMinimumRequirementInput",
		customerSelection:"DiscountCustomerSelectionInput",
		destination:"DiscountShippingDestinationSelectionInput",
		maximumShippingPrice:"Decimal"
	},
	DiscountCodeNode:{
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		}
	},
	DiscountCodeSortKeys: "enum" as const,
	DiscountCollections:{
		collections:{

		}
	},
	DiscountCollectionsInput:{

	},
	DiscountCombinesWithInput:{

	},
	DiscountCountriesInput:{
		add:"CountryCode",
		remove:"CountryCode"
	},
	DiscountCustomerBuysInput:{
		value:"DiscountCustomerBuysValueInput",
		items:"DiscountItemsInput"
	},
	DiscountCustomerBuysValueInput:{
		quantity:"UnsignedInt64",
		amount:"Decimal"
	},
	DiscountCustomerGetsInput:{
		value:"DiscountCustomerGetsValueInput",
		items:"DiscountItemsInput"
	},
	DiscountCustomerGetsValueInput:{
		discountOnQuantity:"DiscountOnQuantityInput",
		discountAmount:"DiscountAmountInput"
	},
	DiscountCustomerSegmentsInput:{

	},
	DiscountCustomerSelectionInput:{
		customers:"DiscountCustomersInput",
		customerSegments:"DiscountCustomerSegmentsInput"
	},
	DiscountCustomersInput:{

	},
	DiscountEffectInput:{

	},
	DiscountErrorCode: "enum" as const,
	DiscountItemsInput:{
		products:"DiscountProductsInput",
		collections:"DiscountCollectionsInput"
	},
	DiscountMinimumQuantityInput:{
		greaterThanOrEqualToQuantity:"UnsignedInt64"
	},
	DiscountMinimumRequirementInput:{
		quantity:"DiscountMinimumQuantityInput",
		subtotal:"DiscountMinimumSubtotalInput"
	},
	DiscountMinimumSubtotalInput:{
		greaterThanOrEqualToSubtotal:"Decimal"
	},
	DiscountNode:{
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		}
	},
	DiscountOnQuantityInput:{
		quantity:"UnsignedInt64",
		effect:"DiscountEffectInput"
	},
	DiscountProducts:{
		productVariants:{

		},
		products:{

		}
	},
	DiscountProductsInput:{

	},
	DiscountRedeemCodeBulkCreation:{
		codes:{

		}
	},
	DiscountRedeemCodeInput:{

	},
	DiscountShareableUrlTargetType: "enum" as const,
	DiscountShippingDestinationSelectionInput:{
		countries:"DiscountCountriesInput"
	},
	DiscountSortKeys: "enum" as const,
	DiscountStatus: "enum" as const,
	DiscountTargetType: "enum" as const,
	DiscountType: "enum" as const,
	DisputeEvidenceUpdateUserErrorCode: "enum" as const,
	DisputeStatus: "enum" as const,
	DisputeType: "enum" as const,
	DraftOrder:{
		events:{
			sortKey:"EventSortKeys"
		},
		lineItems:{

		},
		localizationExtensions:{
			countryCodes:"CountryCode",
			purposes:"LocalizationExtensionPurpose"
		},
		metafield:{

		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		}
	},
	DraftOrderAppliedDiscountInput:{
		amount:"Money",
		valueType:"DraftOrderAppliedDiscountType"
	},
	DraftOrderAppliedDiscountType: "enum" as const,
	DraftOrderDeleteInput:{

	},
	DraftOrderInput:{
		appliedDiscount:"DraftOrderAppliedDiscountInput",
		billingAddress:"MailingAddressInput",
		customAttributes:"AttributeInput",
		lineItems:"DraftOrderLineItemInput",
		metafields:"MetafieldInput",
		privateMetafields:"PrivateMetafieldInput",
		localizationExtensions:"LocalizationExtensionInput",
		shippingAddress:"MailingAddressInput",
		shippingLine:"ShippingLineInput",
		reserveInventoryUntil:"DateTime",
		presentmentCurrencyCode:"CurrencyCode",
		marketRegionCountryCode:"CountryCode",
		paymentTerms:"PaymentTermsInput",
		purchasingEntity:"PurchasingEntityInput"
	},
	DraftOrderLineItemInput:{
		appliedDiscount:"DraftOrderAppliedDiscountInput",
		customAttributes:"AttributeInput",
		originalUnitPrice:"Money",
		weight:"WeightInput"
	},
	DraftOrderSortKeys: "enum" as const,
	DraftOrderStatus: "enum" as const,
	EmailInput:{

	},
	ErrorsWebPixelUserErrorCode: "enum" as const,
	EventBridgeWebhookSubscriptionInput:{
		arn:"ARN",
		format:"WebhookSubscriptionFormat"
	},
	EventSortKeys: "enum" as const,
	FileContentType: "enum" as const,
	FileCreateInput:{
		contentType:"FileContentType"
	},
	FileErrorCode: "enum" as const,
	FileSortKeys: "enum" as const,
	FileStatus: "enum" as const,
	FileUpdateInput:{

	},
	FilesErrorCode: "enum" as const,
	FormattedString: `scalar.FormattedString` as const,
	Fulfillment:{
		events:{
			sortKey:"FulfillmentEventSortKeys"
		},
		fulfillmentLineItems:{

		},
		fulfillmentOrders:{

		},
		trackingInfo:{

		}
	},
	FulfillmentDisplayStatus: "enum" as const,
	FulfillmentEventInput:{
		estimatedDeliveryAt:"DateTime",
		happenedAt:"DateTime",
		status:"FulfillmentEventStatus"
	},
	FulfillmentEventSortKeys: "enum" as const,
	FulfillmentEventStatus: "enum" as const,
	FulfillmentHoldReason: "enum" as const,
	FulfillmentOrder:{
		fulfillments:{

		},
		lineItems:{

		},
		locationsForMove:{

		},
		merchantRequests:{
			kind:"FulfillmentOrderMerchantRequestKind"
		}
	},
	FulfillmentOrderAction: "enum" as const,
	FulfillmentOrderAssignmentStatus: "enum" as const,
	FulfillmentOrderHoldInput:{
		reason:"FulfillmentHoldReason"
	},
	FulfillmentOrderHoldUserErrorCode: "enum" as const,
	FulfillmentOrderLineItemInput:{

	},
	FulfillmentOrderLineItemsInput:{
		fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
	},
	FulfillmentOrderLineItemsPreparedForPickupInput:{
		lineItemsByFulfillmentOrder:"PreparedFulfillmentOrderLineItemsInput"
	},
	FulfillmentOrderLineItemsPreparedForPickupUserErrorCode: "enum" as const,
	FulfillmentOrderMerchantRequestKind: "enum" as const,
	FulfillmentOrderRejectionReason: "enum" as const,
	FulfillmentOrderReleaseHoldUserErrorCode: "enum" as const,
	FulfillmentOrderRequestStatus: "enum" as const,
	FulfillmentOrderRescheduleUserErrorCode: "enum" as const,
	FulfillmentOrderSortKeys: "enum" as const,
	FulfillmentOrderStatus: "enum" as const,
	FulfillmentOrdersReleaseHoldsUserErrorCode: "enum" as const,
	FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode: "enum" as const,
	FulfillmentOriginAddressInput:{

	},
	FulfillmentServiceType: "enum" as const,
	FulfillmentStatus: "enum" as const,
	FulfillmentTrackingInput:{
		url:"URL",
		urls:"URL"
	},
	FulfillmentV2Input:{
		trackingInfo:"FulfillmentTrackingInput",
		lineItemsByFulfillmentOrder:"FulfillmentOrderLineItemsInput",
		originAddress:"FulfillmentOriginAddressInput"
	},
	GiftCardCreateInput:{
		initialValue:"Decimal",
		expiresOn:"Date"
	},
	GiftCardErrorCode: "enum" as const,
	GiftCardSortKeys: "enum" as const,
	GiftCardUpdateInput:{
		expiresOn:"Date"
	},
	HTML: `scalar.HTML` as const,
	HasEvents:{
		events:{
			sortKey:"EventSortKeys"
		}
	},
	HasLocalizationExtensions:{
		localizationExtensions:{
			countryCodes:"CountryCode",
			purposes:"LocalizationExtensionPurpose"
		}
	},
	HasMetafieldDefinitions:{
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		}
	},
	HasMetafields:{
		metafield:{

		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		}
	},
	HasPublishedTranslations:{
		translations:{

		}
	},
	Image:{
		metafield:{

		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		transformedSrc:{
			crop:"CropRegion",
			preferredContentType:"ImageContentType"
		},
		url:{
			transform:"ImageTransformInput"
		}
	},
	ImageContentType: "enum" as const,
	ImageInput:{

	},
	ImageTransformInput:{
		crop:"CropRegion",
		preferredContentType:"ImageContentType"
	},
	IncomingRequestLineItemInput:{

	},
	InventoryAdjustItemInput:{

	},
	InventoryAdjustQuantitiesInput:{
		changes:"InventoryChangeInput"
	},
	InventoryAdjustQuantitiesUserErrorCode: "enum" as const,
	InventoryAdjustQuantityInput:{

	},
	InventoryAdjustmentGroup:{
		changes:{

		}
	},
	InventoryBulkToggleActivationInput:{

	},
	InventoryBulkToggleActivationUserErrorCode: "enum" as const,
	InventoryChangeInput:{

	},
	InventoryItem:{
		countryHarmonizedSystemCodes:{

		},
		inventoryLevel:{

		},
		inventoryLevels:{

		}
	},
	InventoryItemInput:{
		cost:"Decimal"
	},
	InventoryItemUpdateInput:{
		cost:"Decimal",
		countryCodeOfOrigin:"CountryCode",
		countryHarmonizedSystemCodes:"CountryHarmonizedSystemCodeInput"
	},
	InventoryLevel:{
		quantities:{

		}
	},
	InventoryLevelInput:{

	},
	InventoryMoveQuantitiesInput:{
		changes:"InventoryMoveQuantityChange"
	},
	InventoryMoveQuantitiesUserErrorCode: "enum" as const,
	InventoryMoveQuantityChange:{
		from:"InventoryMoveQuantityTerminalInput",
		to:"InventoryMoveQuantityTerminalInput"
	},
	InventoryMoveQuantityTerminalInput:{

	},
	InventorySetOnHandQuantitiesInput:{
		setQuantities:"InventorySetQuantityInput"
	},
	InventorySetOnHandQuantitiesUserErrorCode: "enum" as const,
	InventorySetQuantityInput:{

	},
	JSON: `scalar.JSON` as const,
	LengthUnit: "enum" as const,
	LineItem:{
		taxLines:{

		}
	},
	LineItemMutable:{
		taxLines:{

		}
	},
	Link:{
		translations:{

		}
	},
	LocalizationExtensionInput:{
		key:"LocalizationExtensionKey"
	},
	LocalizationExtensionKey: "enum" as const,
	LocalizationExtensionPurpose: "enum" as const,
	Location:{
		inventoryLevel:{

		},
		inventoryLevels:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		}
	},
	LocationActivateUserErrorCode: "enum" as const,
	LocationAddAddressInput:{
		countryCode:"CountryCode"
	},
	LocationAddInput:{
		address:"LocationAddAddressInput"
	},
	LocationAddUserErrorCode: "enum" as const,
	LocationDeactivateUserErrorCode: "enum" as const,
	LocationDeleteUserErrorCode: "enum" as const,
	LocationEditAddressInput:{
		countryCode:"CountryCode"
	},
	LocationEditInput:{
		address:"LocationEditAddressInput"
	},
	LocationEditUserErrorCode: "enum" as const,
	LocationSortKeys: "enum" as const,
	MailingAddress:{
		formatted:{

		}
	},
	MailingAddressInput:{
		countryCode:"CountryCode"
	},
	Market:{
		regions:{

		}
	},
	MarketCreateInput:{
		regions:"MarketRegionCreateInput"
	},
	MarketCurrencySettingsUpdateInput:{
		baseCurrency:"CurrencyCode"
	},
	MarketCurrencySettingsUserErrorCode: "enum" as const,
	MarketLocalizableResource:{
		marketLocalizations:{

		}
	},
	MarketLocalizableResourceType: "enum" as const,
	MarketLocalizationRegisterInput:{

	},
	MarketRegionCreateInput:{
		countryCode:"CountryCode"
	},
	MarketUpdateInput:{

	},
	MarketUserErrorCode: "enum" as const,
	MarketWebPresenceCreateInput:{

	},
	MarketWebPresenceUpdateInput:{

	},
	MarketingActivityBudgetInput:{
		budgetType:"MarketingBudgetBudgetType",
		total:"MoneyInput"
	},
	MarketingActivityCreateExternalInput:{
		utm:"UTMInput",
		budget:"MarketingActivityBudgetInput",
		adSpend:"MoneyInput",
		remoteUrl:"URL",
		remotePreviewImageUrl:"URL",
		tactic:"MarketingTactic",
		channel:"MarketingChannel",
		scheduledStart:"DateTime",
		scheduledEnd:"DateTime",
		start:"DateTime",
		end:"DateTime"
	},
	MarketingActivityCreateInput:{
		utm:"UTMInput",
		status:"MarketingActivityStatus",
		budget:"MarketingActivityBudgetInput"
	},
	MarketingActivityExtensionAppErrorCode: "enum" as const,
	MarketingActivitySortKeys: "enum" as const,
	MarketingActivityStatus: "enum" as const,
	MarketingActivityStatusBadgeType: "enum" as const,
	MarketingActivityUpdateExternalInput:{
		utm:"UTMInput",
		budget:"MarketingActivityBudgetInput",
		adSpend:"MoneyInput",
		remoteUrl:"URL",
		remotePreviewImageUrl:"URL",
		tactic:"MarketingTactic",
		channel:"MarketingChannel",
		scheduledStart:"DateTime",
		scheduledEnd:"DateTime",
		start:"DateTime",
		end:"DateTime"
	},
	MarketingActivityUpdateInput:{
		budget:"MarketingActivityBudgetInput",
		status:"MarketingActivityStatus",
		targetStatus:"MarketingActivityStatus",
		utm:"UTMInput",
		errors:"JSON"
	},
	MarketingActivityUserErrorCode: "enum" as const,
	MarketingBudgetBudgetType: "enum" as const,
	MarketingChannel: "enum" as const,
	MarketingEngagementInput:{
		occurredOn:"Date",
		adSpend:"MoneyInput",
		utcOffset:"UtcOffset",
		fetchedAt:"DateTime"
	},
	MarketingEventSortKeys: "enum" as const,
	MarketingTactic: "enum" as const,
	MediaContentType: "enum" as const,
	MediaErrorCode: "enum" as const,
	MediaHost: "enum" as const,
	MediaPreviewImageStatus: "enum" as const,
	MediaStatus: "enum" as const,
	MediaUserErrorCode: "enum" as const,
	MediaWarningCode: "enum" as const,
	MerchandiseDiscountClass: "enum" as const,
	Metafield:{
		references:{

		}
	},
	MetafieldAccessInput:{
		admin:"MetafieldAdminAccess"
	},
	MetafieldAdminAccess: "enum" as const,
	MetafieldDefinition:{
		metafields:{
			validationStatus:"MetafieldValidationStatus"
		},
		metafieldsCount:{
			validationStatus:"MetafieldValidationStatus"
		}
	},
	MetafieldDefinitionCreateUserErrorCode: "enum" as const,
	MetafieldDefinitionDeleteUserErrorCode: "enum" as const,
	MetafieldDefinitionInput:{
		ownerType:"MetafieldOwnerType",
		validations:"MetafieldDefinitionValidationInput",
		access:"MetafieldAccessInput"
	},
	MetafieldDefinitionPinUserErrorCode: "enum" as const,
	MetafieldDefinitionPinnedStatus: "enum" as const,
	MetafieldDefinitionSortKeys: "enum" as const,
	MetafieldDefinitionUnpinUserErrorCode: "enum" as const,
	MetafieldDefinitionUpdateInput:{
		ownerType:"MetafieldOwnerType",
		access:"MetafieldAccessInput"
	},
	MetafieldDefinitionUpdateUserErrorCode: "enum" as const,
	MetafieldDefinitionValidationInput:{

	},
	MetafieldDefinitionValidationStatus: "enum" as const,
	MetafieldDeleteInput:{

	},
	MetafieldInput:{

	},
	MetafieldOwnerType: "enum" as const,
	MetafieldStorefrontVisibilityInput:{
		ownerType:"MetafieldOwnerType"
	},
	MetafieldValidationStatus: "enum" as const,
	MetafieldValueType: "enum" as const,
	MetafieldsSetInput:{

	},
	MetafieldsSetUserErrorCode: "enum" as const,
	Metaobject:{
		field:{

		},
		referencedBy:{

		}
	},
	MetaobjectAccessInput:{
		admin:"MetaobjectAdminAccess",
		storefront:"MetaobjectStorefrontAccess"
	},
	MetaobjectAdminAccess: "enum" as const,
	MetaobjectBulkDeleteWhereCondition:{

	},
	MetaobjectCapabilityCreateInput:{
		publishable:"MetaobjectCapabilityPublishableInput"
	},
	MetaobjectCapabilityDataInput:{
		publishable:"MetaobjectCapabilityDataPublishableInput"
	},
	MetaobjectCapabilityDataPublishableInput:{
		status:"MetaobjectStatus"
	},
	MetaobjectCapabilityPublishableInput:{

	},
	MetaobjectCapabilityUpdateInput:{
		publishable:"MetaobjectCapabilityPublishableInput"
	},
	MetaobjectCreateInput:{
		fields:"MetaobjectFieldInput",
		capabilities:"MetaobjectCapabilityDataInput"
	},
	MetaobjectDefinition:{
		metaobjects:{

		}
	},
	MetaobjectDefinitionCreateInput:{
		fieldDefinitions:"MetaobjectFieldDefinitionCreateInput",
		access:"MetaobjectAccessInput",
		capabilities:"MetaobjectCapabilityCreateInput"
	},
	MetaobjectDefinitionUpdateInput:{
		fieldDefinitions:"MetaobjectFieldDefinitionOperationInput",
		access:"MetaobjectAccessInput",
		capabilities:"MetaobjectCapabilityUpdateInput"
	},
	MetaobjectField:{
		references:{

		}
	},
	MetaobjectFieldDefinitionCreateInput:{
		validations:"MetafieldDefinitionValidationInput"
	},
	MetaobjectFieldDefinitionDeleteInput:{

	},
	MetaobjectFieldDefinitionOperationInput:{
		create:"MetaobjectFieldDefinitionCreateInput",
		update:"MetaobjectFieldDefinitionUpdateInput",
		delete:"MetaobjectFieldDefinitionDeleteInput"
	},
	MetaobjectFieldDefinitionUpdateInput:{
		validations:"MetafieldDefinitionValidationInput"
	},
	MetaobjectFieldInput:{

	},
	MetaobjectHandleInput:{

	},
	MetaobjectStatus: "enum" as const,
	MetaobjectStorefrontAccess: "enum" as const,
	MetaobjectUpdateInput:{
		fields:"MetaobjectFieldInput",
		capabilities:"MetaobjectCapabilityDataInput"
	},
	MetaobjectUpsertInput:{
		fields:"MetaobjectFieldInput",
		capabilities:"MetaobjectCapabilityDataInput"
	},
	MetaobjectUserErrorCode: "enum" as const,
	MethodDefinitionSortKeys: "enum" as const,
	Money: `scalar.Money` as const,
	MoneyInput:{
		amount:"Decimal",
		currencyCode:"CurrencyCode"
	},
	MoveInput:{
		newPosition:"UnsignedInt64"
	},
	Mutation:{
		abandonmentEmailStateUpdate:{
			emailState:"AbandonmentEmailState",
			emailSentAt:"DateTime"
		},
		appCreditCreate:{
			amount:"MoneyInput"
		},
		appPurchaseOneTimeCreate:{
			price:"MoneyInput",
			returnUrl:"URL"
		},
		appRevenueAttributionRecordCreate:{
			appRevenueAttributionRecord:"AppRevenueAttributionRecordInput"
		},
		appRevenueAttributionRecordDelete:{

		},
		appSubscriptionCancel:{

		},
		appSubscriptionCreate:{
			lineItems:"AppSubscriptionLineItemInput",
			returnUrl:"URL",
			replacementBehavior:"AppSubscriptionReplacementBehavior"
		},
		appSubscriptionLineItemUpdate:{
			cappedAmount:"MoneyInput"
		},
		appSubscriptionTrialExtend:{

		},
		appUsageRecordCreate:{
			price:"MoneyInput"
		},
		bulkOperationCancel:{

		},
		bulkOperationRunMutation:{

		},
		bulkOperationRunQuery:{

		},
		bulkProductResourceFeedbackCreate:{
			feedbackInput:"ProductResourceFeedbackInput"
		},
		collectionAddProducts:{

		},
		collectionAddProductsV2:{

		},
		collectionCreate:{
			input:"CollectionInput"
		},
		collectionDelete:{
			input:"CollectionDeleteInput"
		},
		collectionPublish:{
			input:"CollectionPublishInput"
		},
		collectionRemoveProducts:{

		},
		collectionReorderProducts:{
			moves:"MoveInput"
		},
		collectionUnpublish:{
			input:"CollectionUnpublishInput"
		},
		collectionUpdate:{
			input:"CollectionInput"
		},
		companiesDelete:{

		},
		companyAddressDelete:{

		},
		companyAssignCustomerAsContact:{

		},
		companyAssignMainContact:{

		},
		companyContactAssignRole:{

		},
		companyContactAssignRoles:{
			rolesToAssign:"CompanyContactRoleAssign"
		},
		companyContactCreate:{
			input:"CompanyContactInput"
		},
		companyContactDelete:{

		},
		companyContactRevokeRole:{

		},
		companyContactRevokeRoles:{

		},
		companyContactUpdate:{
			input:"CompanyContactInput"
		},
		companyContactsDelete:{

		},
		companyCreate:{
			input:"CompanyCreateInput"
		},
		companyDelete:{

		},
		companyLocationAssignAddress:{
			address:"CompanyAddressInput",
			addressTypes:"CompanyAddressType"
		},
		companyLocationAssignRoles:{
			rolesToAssign:"CompanyLocationRoleAssign"
		},
		companyLocationAssignTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		companyLocationCreate:{
			input:"CompanyLocationInput"
		},
		companyLocationCreateTaxRegistration:{

		},
		companyLocationDelete:{

		},
		companyLocationRevokeRoles:{

		},
		companyLocationRevokeTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		companyLocationRevokeTaxRegistration:{

		},
		companyLocationUpdate:{
			input:"CompanyLocationUpdateInput"
		},
		companyLocationsDelete:{

		},
		companyRevokeMainContact:{

		},
		companyUpdate:{
			input:"CompanyInput"
		},
		customerAddTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		customerCreate:{
			input:"CustomerInput"
		},
		customerDelete:{
			input:"CustomerDeleteInput"
		},
		customerEmailMarketingConsentUpdate:{
			input:"CustomerEmailMarketingConsentUpdateInput"
		},
		customerGenerateAccountActivationUrl:{

		},
		customerPaymentMethodCreditCardCreate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodCreditCardUpdate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodGetUpdateUrl:{

		},
		customerPaymentMethodPaypalBillingAgreementCreate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodPaypalBillingAgreementUpdate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodRemoteCreate:{
			remoteReference:"CustomerPaymentMethodRemoteInput"
		},
		customerPaymentMethodRemoteCreditCardCreate:{

		},
		customerPaymentMethodRevoke:{

		},
		customerPaymentMethodSendUpdateEmail:{
			email:"EmailInput"
		},
		customerRemoveTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		customerReplaceTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		customerSegmentMembersQueryCreate:{
			input:"CustomerSegmentMembersQueryInput"
		},
		customerSmsMarketingConsentUpdate:{
			input:"CustomerSmsMarketingConsentUpdateInput"
		},
		customerUpdate:{
			input:"CustomerInput"
		},
		customerUpdateDefaultAddress:{

		},
		delegateAccessTokenCreate:{
			input:"DelegateAccessTokenInput"
		},
		deliveryProfileCreate:{
			profile:"DeliveryProfileInput"
		},
		deliveryProfileRemove:{

		},
		deliveryProfileUpdate:{
			profile:"DeliveryProfileInput"
		},
		deliverySettingUpdate:{
			setting:"DeliverySettingInput"
		},
		deliveryShippingOriginAssign:{

		},
		discountAutomaticActivate:{

		},
		discountAutomaticAppCreate:{
			automaticAppDiscount:"DiscountAutomaticAppInput"
		},
		discountAutomaticAppUpdate:{
			automaticAppDiscount:"DiscountAutomaticAppInput"
		},
		discountAutomaticBasicCreate:{
			automaticBasicDiscount:"DiscountAutomaticBasicInput"
		},
		discountAutomaticBasicUpdate:{
			automaticBasicDiscount:"DiscountAutomaticBasicInput"
		},
		discountAutomaticBulkDelete:{

		},
		discountAutomaticBxgyCreate:{
			automaticBxgyDiscount:"DiscountAutomaticBxgyInput"
		},
		discountAutomaticBxgyUpdate:{
			automaticBxgyDiscount:"DiscountAutomaticBxgyInput"
		},
		discountAutomaticDeactivate:{

		},
		discountAutomaticDelete:{

		},
		discountCodeActivate:{

		},
		discountCodeAppCreate:{
			codeAppDiscount:"DiscountCodeAppInput"
		},
		discountCodeAppUpdate:{
			codeAppDiscount:"DiscountCodeAppInput"
		},
		discountCodeBasicCreate:{
			basicCodeDiscount:"DiscountCodeBasicInput"
		},
		discountCodeBasicUpdate:{
			basicCodeDiscount:"DiscountCodeBasicInput"
		},
		discountCodeBulkActivate:{

		},
		discountCodeBulkDeactivate:{

		},
		discountCodeBulkDelete:{

		},
		discountCodeBxgyCreate:{
			bxgyCodeDiscount:"DiscountCodeBxgyInput"
		},
		discountCodeBxgyUpdate:{
			bxgyCodeDiscount:"DiscountCodeBxgyInput"
		},
		discountCodeDeactivate:{

		},
		discountCodeDelete:{

		},
		discountCodeFreeShippingCreate:{
			freeShippingCodeDiscount:"DiscountCodeFreeShippingInput"
		},
		discountCodeFreeShippingUpdate:{
			freeShippingCodeDiscount:"DiscountCodeFreeShippingInput"
		},
		discountCodeRedeemCodeBulkDelete:{

		},
		discountRedeemCodeBulkAdd:{
			codes:"DiscountRedeemCodeInput"
		},
		disputeEvidenceUpdate:{
			input:"ShopifyPaymentsDisputeEvidenceUpdateInput"
		},
		draftOrderBulkAddTags:{

		},
		draftOrderBulkDelete:{

		},
		draftOrderBulkRemoveTags:{

		},
		draftOrderCalculate:{
			input:"DraftOrderInput"
		},
		draftOrderComplete:{

		},
		draftOrderCreate:{
			input:"DraftOrderInput"
		},
		draftOrderCreateFromOrder:{

		},
		draftOrderCreateMerchantCheckout:{

		},
		draftOrderDelete:{
			input:"DraftOrderDeleteInput"
		},
		draftOrderDuplicate:{

		},
		draftOrderInvoicePreview:{
			email:"EmailInput"
		},
		draftOrderInvoiceSend:{
			email:"EmailInput"
		},
		draftOrderUpdate:{
			input:"DraftOrderInput"
		},
		eventBridgeWebhookSubscriptionCreate:{
			topic:"WebhookSubscriptionTopic",
			webhookSubscription:"EventBridgeWebhookSubscriptionInput"
		},
		eventBridgeWebhookSubscriptionUpdate:{
			webhookSubscription:"EventBridgeWebhookSubscriptionInput"
		},
		fileCreate:{
			files:"FileCreateInput"
		},
		fileDelete:{

		},
		fileUpdate:{
			files:"FileUpdateInput"
		},
		flowTriggerReceive:{

		},
		fulfillmentCancel:{

		},
		fulfillmentCreateV2:{
			fulfillment:"FulfillmentV2Input"
		},
		fulfillmentEventCreate:{
			fulfillmentEvent:"FulfillmentEventInput"
		},
		fulfillmentOrderAcceptCancellationRequest:{

		},
		fulfillmentOrderAcceptFulfillmentRequest:{

		},
		fulfillmentOrderCancel:{

		},
		fulfillmentOrderClose:{

		},
		fulfillmentOrderHold:{
			fulfillmentHold:"FulfillmentOrderHoldInput"
		},
		fulfillmentOrderLineItemsPreparedForPickup:{
			input:"FulfillmentOrderLineItemsPreparedForPickupInput"
		},
		fulfillmentOrderMove:{

		},
		fulfillmentOrderOpen:{

		},
		fulfillmentOrderRejectCancellationRequest:{

		},
		fulfillmentOrderRejectFulfillmentRequest:{
			reason:"FulfillmentOrderRejectionReason",
			lineItems:"IncomingRequestLineItemInput"
		},
		fulfillmentOrderReleaseHold:{

		},
		fulfillmentOrderReschedule:{
			fulfillAt:"DateTime"
		},
		fulfillmentOrderSubmitCancellationRequest:{

		},
		fulfillmentOrderSubmitFulfillmentRequest:{
			fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
		},
		fulfillmentOrdersReleaseHolds:{

		},
		fulfillmentOrdersSetFulfillmentDeadline:{
			fulfillmentDeadline:"DateTime"
		},
		fulfillmentServiceCreate:{
			callbackUrl:"URL"
		},
		fulfillmentServiceDelete:{

		},
		fulfillmentServiceUpdate:{
			callbackUrl:"URL"
		},
		fulfillmentTrackingInfoUpdateV2:{
			trackingInfoInput:"FulfillmentTrackingInput"
		},
		giftCardCreate:{
			input:"GiftCardCreateInput"
		},
		giftCardDisable:{

		},
		giftCardUpdate:{
			input:"GiftCardUpdateInput"
		},
		inventoryActivate:{

		},
		inventoryAdjustQuantities:{
			input:"InventoryAdjustQuantitiesInput"
		},
		inventoryAdjustQuantity:{
			input:"InventoryAdjustQuantityInput"
		},
		inventoryBulkAdjustQuantityAtLocation:{
			inventoryItemAdjustments:"InventoryAdjustItemInput"
		},
		inventoryBulkToggleActivation:{
			inventoryItemUpdates:"InventoryBulkToggleActivationInput"
		},
		inventoryDeactivate:{

		},
		inventoryItemUpdate:{
			input:"InventoryItemUpdateInput"
		},
		inventoryMoveQuantities:{
			input:"InventoryMoveQuantitiesInput"
		},
		inventorySetOnHandQuantities:{
			input:"InventorySetOnHandQuantitiesInput"
		},
		locationActivate:{

		},
		locationAdd:{
			input:"LocationAddInput"
		},
		locationDeactivate:{

		},
		locationDelete:{

		},
		locationEdit:{
			input:"LocationEditInput"
		},
		locationLocalPickupDisable:{

		},
		locationLocalPickupEnable:{
			localPickupSettings:"DeliveryLocationLocalPickupEnableInput"
		},
		marketCreate:{
			input:"MarketCreateInput"
		},
		marketCurrencySettingsUpdate:{
			input:"MarketCurrencySettingsUpdateInput"
		},
		marketDelete:{

		},
		marketLocalizationsRegister:{
			marketLocalizations:"MarketLocalizationRegisterInput"
		},
		marketLocalizationsRemove:{

		},
		marketRegionDelete:{

		},
		marketRegionsCreate:{
			regions:"MarketRegionCreateInput"
		},
		marketUpdate:{
			input:"MarketUpdateInput"
		},
		marketWebPresenceCreate:{
			webPresence:"MarketWebPresenceCreateInput"
		},
		marketWebPresenceDelete:{

		},
		marketWebPresenceUpdate:{
			webPresence:"MarketWebPresenceUpdateInput"
		},
		marketingActivityCreate:{
			input:"MarketingActivityCreateInput"
		},
		marketingActivityCreateExternal:{
			input:"MarketingActivityCreateExternalInput"
		},
		marketingActivityUpdate:{
			input:"MarketingActivityUpdateInput"
		},
		marketingActivityUpdateExternal:{
			input:"MarketingActivityUpdateExternalInput",
			utm:"UTMInput"
		},
		marketingEngagementCreate:{
			marketingEngagement:"MarketingEngagementInput"
		},
		metafieldDefinitionCreate:{
			definition:"MetafieldDefinitionInput"
		},
		metafieldDefinitionDelete:{

		},
		metafieldDefinitionPin:{

		},
		metafieldDefinitionUnpin:{

		},
		metafieldDefinitionUpdate:{
			definition:"MetafieldDefinitionUpdateInput"
		},
		metafieldDelete:{
			input:"MetafieldDeleteInput"
		},
		metafieldStorefrontVisibilityCreate:{
			input:"MetafieldStorefrontVisibilityInput"
		},
		metafieldStorefrontVisibilityDelete:{

		},
		metafieldsSet:{
			metafields:"MetafieldsSetInput"
		},
		metaobjectBulkDelete:{
			where:"MetaobjectBulkDeleteWhereCondition"
		},
		metaobjectCreate:{
			metaobject:"MetaobjectCreateInput"
		},
		metaobjectDefinitionCreate:{
			definition:"MetaobjectDefinitionCreateInput"
		},
		metaobjectDefinitionDelete:{

		},
		metaobjectDefinitionUpdate:{
			definition:"MetaobjectDefinitionUpdateInput"
		},
		metaobjectDelete:{

		},
		metaobjectUpdate:{
			metaobject:"MetaobjectUpdateInput"
		},
		metaobjectUpsert:{
			handle:"MetaobjectHandleInput",
			metaobject:"MetaobjectUpsertInput"
		},
		orderCapture:{
			input:"OrderCaptureInput"
		},
		orderClose:{
			input:"OrderCloseInput"
		},
		orderCreateMandatePayment:{

		},
		orderEditAddCustomItem:{
			price:"MoneyInput"
		},
		orderEditAddLineItemDiscount:{
			discount:"OrderEditAppliedDiscountInput"
		},
		orderEditAddVariant:{

		},
		orderEditBegin:{

		},
		orderEditCommit:{

		},
		orderEditRemoveLineItemDiscount:{

		},
		orderEditSetQuantity:{

		},
		orderInvoiceSend:{
			email:"EmailInput"
		},
		orderMarkAsPaid:{
			input:"OrderMarkAsPaidInput"
		},
		orderOpen:{
			input:"OrderOpenInput"
		},
		orderUpdate:{
			input:"OrderInput"
		},
		paymentReminderSend:{

		},
		paymentTermsCreate:{
			paymentTermsAttributes:"PaymentTermsCreateInput"
		},
		paymentTermsDelete:{
			input:"PaymentTermsDeleteInput"
		},
		paymentTermsUpdate:{
			input:"PaymentTermsUpdateInput"
		},
		priceListCreate:{
			input:"PriceListCreateInput"
		},
		priceListDelete:{

		},
		priceListFixedPricesAdd:{
			prices:"PriceListPriceInput"
		},
		priceListFixedPricesDelete:{

		},
		priceListUpdate:{
			input:"PriceListUpdateInput"
		},
		priceRuleActivate:{

		},
		priceRuleCreate:{
			priceRule:"PriceRuleInput",
			priceRuleDiscountCode:"PriceRuleDiscountCodeInput"
		},
		priceRuleDeactivate:{

		},
		priceRuleDelete:{

		},
		priceRuleDiscountCodeCreate:{

		},
		priceRuleDiscountCodeUpdate:{

		},
		priceRuleUpdate:{
			priceRule:"PriceRuleInput",
			priceRuleDiscountCode:"PriceRuleDiscountCodeInput"
		},
		privateMetafieldDelete:{
			input:"PrivateMetafieldDeleteInput"
		},
		privateMetafieldUpsert:{
			input:"PrivateMetafieldInput"
		},
		productAppendImages:{
			input:"ProductAppendImagesInput"
		},
		productChangeStatus:{
			status:"ProductStatus"
		},
		productCreate:{
			input:"ProductInput",
			media:"CreateMediaInput"
		},
		productCreateMedia:{
			media:"CreateMediaInput"
		},
		productDelete:{
			input:"ProductDeleteInput"
		},
		productDeleteAsync:{

		},
		productDeleteImages:{

		},
		productDeleteMedia:{

		},
		productDuplicate:{
			newStatus:"ProductStatus"
		},
		productDuplicateAsync:{
			input:"ProductDuplicateAsyncInput"
		},
		productImageUpdate:{
			image:"ImageInput"
		},
		productJoinSellingPlanGroups:{

		},
		productLeaveSellingPlanGroups:{

		},
		productPublish:{
			input:"ProductPublishInput"
		},
		productReorderImages:{
			moves:"MoveInput"
		},
		productReorderMedia:{
			moves:"MoveInput"
		},
		productUnpublish:{
			input:"ProductUnpublishInput"
		},
		productUpdate:{
			input:"ProductInput"
		},
		productUpdateMedia:{
			media:"UpdateMediaInput"
		},
		productVariantAppendMedia:{
			variantMedia:"ProductVariantAppendMediaInput"
		},
		productVariantCreate:{
			input:"ProductVariantInput"
		},
		productVariantDelete:{

		},
		productVariantDetachMedia:{
			variantMedia:"ProductVariantDetachMediaInput"
		},
		productVariantJoinSellingPlanGroups:{

		},
		productVariantLeaveSellingPlanGroups:{

		},
		productVariantUpdate:{
			input:"ProductVariantInput"
		},
		productVariantsBulkCreate:{
			variants:"ProductVariantsBulkInput"
		},
		productVariantsBulkDelete:{

		},
		productVariantsBulkReorder:{
			positions:"ProductVariantPositionInput"
		},
		productVariantsBulkUpdate:{
			variants:"ProductVariantsBulkInput"
		},
		pubSubWebhookSubscriptionCreate:{
			topic:"WebhookSubscriptionTopic",
			webhookSubscription:"PubSubWebhookSubscriptionInput"
		},
		pubSubWebhookSubscriptionUpdate:{
			webhookSubscription:"PubSubWebhookSubscriptionInput"
		},
		publishablePublish:{
			input:"PublicationInput"
		},
		publishablePublishToCurrentChannel:{

		},
		publishableUnpublish:{
			input:"PublicationInput"
		},
		publishableUnpublishToCurrentChannel:{

		},
		refundCreate:{
			input:"RefundInput"
		},
		returnApproveRequest:{
			input:"ReturnApproveRequestInput"
		},
		returnCancel:{

		},
		returnClose:{

		},
		returnCreate:{
			returnInput:"ReturnInput"
		},
		returnDeclineRequest:{
			input:"ReturnDeclineRequestInput"
		},
		returnRefund:{
			returnRefundInput:"ReturnRefundInput"
		},
		returnReopen:{

		},
		returnRequest:{
			input:"ReturnRequestInput"
		},
		reverseDeliveryCreateWithShipping:{
			reverseDeliveryLineItems:"ReverseDeliveryLineItemInput",
			trackingInput:"ReverseDeliveryTrackingInput",
			labelInput:"ReverseDeliveryLabelInput"
		},
		reverseDeliveryDispose:{
			dispositionInputs:"ReverseDeliveryDisposeInput"
		},
		reverseDeliveryShippingUpdate:{
			trackingInput:"ReverseDeliveryTrackingInput",
			labelInput:"ReverseDeliveryLabelInput"
		},
		reverseFulfillmentOrderDispose:{
			dispositionInputs:"ReverseFulfillmentOrderDisposeInput"
		},
		savedSearchCreate:{
			input:"SavedSearchCreateInput"
		},
		savedSearchDelete:{
			input:"SavedSearchDeleteInput"
		},
		savedSearchUpdate:{
			input:"SavedSearchUpdateInput"
		},
		scriptTagCreate:{
			input:"ScriptTagInput"
		},
		scriptTagDelete:{

		},
		scriptTagUpdate:{
			input:"ScriptTagInput"
		},
		segmentCreate:{

		},
		segmentDelete:{

		},
		segmentUpdate:{

		},
		sellingPlanGroupAddProductVariants:{

		},
		sellingPlanGroupAddProducts:{

		},
		sellingPlanGroupCreate:{
			input:"SellingPlanGroupInput",
			resources:"SellingPlanGroupResourceInput"
		},
		sellingPlanGroupDelete:{

		},
		sellingPlanGroupRemoveProductVariants:{

		},
		sellingPlanGroupRemoveProducts:{

		},
		sellingPlanGroupUpdate:{
			input:"SellingPlanGroupInput"
		},
		shippingPackageDelete:{

		},
		shippingPackageMakeDefault:{

		},
		shippingPackageUpdate:{
			shippingPackage:"CustomShippingPackageInput"
		},
		shopLocaleDisable:{

		},
		shopLocaleEnable:{

		},
		shopLocaleUpdate:{
			shopLocale:"ShopLocaleInput"
		},
		shopPolicyUpdate:{
			shopPolicy:"ShopPolicyInput"
		},
		shopResourceFeedbackCreate:{
			input:"ResourceFeedbackCreateInput"
		},
		stagedUploadTargetGenerate:{
			input:"StagedUploadTargetGenerateInput"
		},
		stagedUploadTargetsGenerate:{
			input:"StageImageInput"
		},
		stagedUploadsCreate:{
			input:"StagedUploadInput"
		},
		standardMetafieldDefinitionEnable:{
			ownerType:"MetafieldOwnerType"
		},
		standardMetaobjectDefinitionEnable:{

		},
		storefrontAccessTokenCreate:{
			input:"StorefrontAccessTokenInput"
		},
		storefrontAccessTokenDelete:{
			input:"StorefrontAccessTokenDeleteInput"
		},
		subscriptionBillingAttemptCreate:{
			subscriptionBillingAttemptInput:"SubscriptionBillingAttemptInput"
		},
		subscriptionBillingCycleContractDraftCommit:{

		},
		subscriptionBillingCycleContractDraftConcatenate:{
			concatenatedBillingCycleContracts:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleContractEdit:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleEditDelete:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleEditsDelete:{
			targetSelection:"SubscriptionBillingCyclesTargetSelection"
		},
		subscriptionBillingCycleScheduleEdit:{
			billingCycleInput:"SubscriptionBillingCycleInput",
			input:"SubscriptionBillingCycleScheduleEditInput"
		},
		subscriptionContractCreate:{
			input:"SubscriptionContractCreateInput"
		},
		subscriptionContractSetNextBillingDate:{
			date:"DateTime"
		},
		subscriptionContractUpdate:{

		},
		subscriptionDraftCommit:{

		},
		subscriptionDraftDiscountAdd:{
			input:"SubscriptionManualDiscountInput"
		},
		subscriptionDraftDiscountCodeApply:{

		},
		subscriptionDraftDiscountRemove:{

		},
		subscriptionDraftDiscountUpdate:{
			input:"SubscriptionManualDiscountInput"
		},
		subscriptionDraftFreeShippingDiscountAdd:{
			input:"SubscriptionFreeShippingDiscountInput"
		},
		subscriptionDraftFreeShippingDiscountUpdate:{
			input:"SubscriptionFreeShippingDiscountInput"
		},
		subscriptionDraftLineAdd:{
			input:"SubscriptionLineInput"
		},
		subscriptionDraftLineRemove:{

		},
		subscriptionDraftLineUpdate:{
			input:"SubscriptionLineUpdateInput"
		},
		subscriptionDraftUpdate:{
			input:"SubscriptionDraftInput"
		},
		tagsAdd:{

		},
		tagsRemove:{

		},
		translationsRegister:{
			translations:"TranslationInput"
		},
		translationsRemove:{

		},
		urlRedirectBulkDeleteByIds:{

		},
		urlRedirectBulkDeleteBySavedSearch:{

		},
		urlRedirectBulkDeleteBySearch:{

		},
		urlRedirectCreate:{
			urlRedirect:"UrlRedirectInput"
		},
		urlRedirectDelete:{

		},
		urlRedirectImportCreate:{
			url:"URL"
		},
		urlRedirectImportSubmit:{

		},
		urlRedirectUpdate:{
			urlRedirect:"UrlRedirectInput"
		},
		webPixelCreate:{
			webPixel:"WebPixelInput"
		},
		webPixelDelete:{

		},
		webPixelUpdate:{
			webPixel:"WebPixelInput"
		},
		webhookSubscriptionCreate:{
			topic:"WebhookSubscriptionTopic",
			webhookSubscription:"WebhookSubscriptionInput"
		},
		webhookSubscriptionDelete:{

		},
		webhookSubscriptionUpdate:{
			webhookSubscription:"WebhookSubscriptionInput"
		}
	},
	ObjectDimensionsInput:{
		unit:"LengthUnit"
	},
	OnlineStoreArticle:{
		translations:{

		}
	},
	OnlineStoreBlog:{
		translations:{

		}
	},
	OnlineStorePage:{
		translations:{

		}
	},
	Order:{
		agreements:{

		},
		discountApplications:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		fulfillmentOrders:{

		},
		fulfillments:{

		},
		lineItems:{

		},
		lineItemsMutable:{

		},
		localizationExtensions:{
			countryCodes:"CountryCode",
			purposes:"LocalizationExtensionPurpose"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		nonFulfillableLineItems:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		refunds:{

		},
		returns:{

		},
		risks:{

		},
		shippingLines:{

		},
		suggestedRefund:{
			shippingAmount:"Money",
			refundLineItems:"RefundLineItemInput",
			refundDuties:"RefundDutyInput"
		},
		transactions:{

		}
	},
	OrderActionType: "enum" as const,
	OrderAgreement:{
		sales:{

		}
	},
	OrderCancelReason: "enum" as const,
	OrderCaptureInput:{
		amount:"Money",
		currency:"CurrencyCode"
	},
	OrderCloseInput:{

	},
	OrderCreateMandatePaymentUserErrorCode: "enum" as const,
	OrderDisplayFinancialStatus: "enum" as const,
	OrderDisplayFulfillmentStatus: "enum" as const,
	OrderEditAgreement:{
		sales:{

		}
	},
	OrderEditAppliedDiscountInput:{
		fixedValue:"MoneyInput"
	},
	OrderInput:{
		shippingAddress:"MailingAddressInput",
		customAttributes:"AttributeInput",
		metafields:"MetafieldInput",
		localizationExtensions:"LocalizationExtensionInput"
	},
	OrderInvoiceSendUserErrorCode: "enum" as const,
	OrderMarkAsPaidInput:{

	},
	OrderOpenInput:{

	},
	OrderPaymentStatusResult: "enum" as const,
	OrderRiskLevel: "enum" as const,
	OrderSortKeys: "enum" as const,
	OrderTransactionErrorCode: "enum" as const,
	OrderTransactionInput:{
		amount:"Money",
		kind:"OrderTransactionKind"
	},
	OrderTransactionKind: "enum" as const,
	OrderTransactionStatus: "enum" as const,
	ParseErrorCode: "enum" as const,
	PaymentMethods: "enum" as const,
	PaymentReminderSendUserErrorCode: "enum" as const,
	PaymentScheduleInput:{
		issuedAt:"DateTime",
		dueAt:"DateTime"
	},
	PaymentTerms:{
		paymentSchedules:{

		}
	},
	PaymentTermsCreateInput:{
		paymentSchedules:"PaymentScheduleInput"
	},
	PaymentTermsCreateUserErrorCode: "enum" as const,
	PaymentTermsDeleteInput:{

	},
	PaymentTermsDeleteUserErrorCode: "enum" as const,
	PaymentTermsInput:{
		paymentSchedules:"PaymentScheduleInput"
	},
	PaymentTermsType: "enum" as const,
	PaymentTermsUpdateInput:{
		paymentTermsAttributes:"PaymentTermsInput"
	},
	PaymentTermsUpdateUserErrorCode: "enum" as const,
	PaypalExpressSubscriptionsGatewayStatus: "enum" as const,
	PreparedFulfillmentOrderLineItemsInput:{

	},
	PriceList:{
		prices:{
			originType:"PriceListPriceOriginType"
		}
	},
	PriceListAdjustmentInput:{
		type:"PriceListAdjustmentType"
	},
	PriceListAdjustmentType: "enum" as const,
	PriceListContext:{
		country:"CountryCode"
	},
	PriceListContextRuleInput:{

	},
	PriceListCreateInput:{
		currency:"CurrencyCode",
		parent:"PriceListParentCreateInput",
		contextRule:"PriceListContextRuleInput"
	},
	PriceListParentCreateInput:{
		adjustment:"PriceListAdjustmentInput"
	},
	PriceListParentUpdateInput:{
		adjustment:"PriceListAdjustmentInput"
	},
	PriceListPriceInput:{
		price:"MoneyInput",
		compareAtPrice:"MoneyInput"
	},
	PriceListPriceOriginType: "enum" as const,
	PriceListPriceUserErrorCode: "enum" as const,
	PriceListSortKeys: "enum" as const,
	PriceListUpdateInput:{
		currency:"CurrencyCode",
		contextRule:"PriceListContextRuleInput",
		parent:"PriceListParentUpdateInput"
	},
	PriceListUserErrorCode: "enum" as const,
	PriceRule:{
		discountCodes:{
			sortKey:"DiscountCodeSortKeys"
		},
		events:{
			sortKey:"EventSortKeys"
		}
	},
	PriceRuleAllocationMethod: "enum" as const,
	PriceRuleCustomerSelection:{
		customers:{
			sortKey:"CustomerSortKeys"
		}
	},
	PriceRuleCustomerSelectionInput:{

	},
	PriceRuleDiscountCodeInput:{

	},
	PriceRuleEntitlementToPrerequisiteQuantityRatioInput:{

	},
	PriceRuleErrorCode: "enum" as const,
	PriceRuleFeature: "enum" as const,
	PriceRuleInput:{
		combinesWith:"DiscountCombinesWithInput",
		validityPeriod:"PriceRuleValidityPeriodInput",
		customerSelection:"PriceRuleCustomerSelectionInput",
		allocationMethod:"PriceRuleAllocationMethod",
		value:"PriceRuleValueInput",
		target:"PriceRuleTarget",
		prerequisiteSubtotalRange:"PriceRuleMoneyRangeInput",
		prerequisiteQuantityRange:"PriceRuleQuantityRangeInput",
		prerequisiteShippingPriceRange:"PriceRuleMoneyRangeInput",
		itemEntitlements:"PriceRuleItemEntitlementsInput",
		itemPrerequisites:"PriceRuleItemPrerequisitesInput",
		shippingEntitlements:"PriceRuleShippingEntitlementsInput",
		prerequisiteToEntitlementQuantityRatio:"PriceRulePrerequisiteToEntitlementQuantityRatioInput"
	},
	PriceRuleItemEntitlements:{
		collections:{

		},
		productVariants:{

		},
		products:{

		}
	},
	PriceRuleItemEntitlementsInput:{

	},
	PriceRuleItemPrerequisitesInput:{

	},
	PriceRuleLineItemPrerequisites:{
		collections:{

		},
		productVariants:{

		},
		products:{

		}
	},
	PriceRuleMoneyRangeInput:{
		lessThan:"Money",
		lessThanOrEqualTo:"Money",
		greaterThan:"Money",
		greaterThanOrEqualTo:"Money"
	},
	PriceRulePrerequisiteToEntitlementQuantityRatioInput:{

	},
	PriceRuleQuantityRangeInput:{

	},
	PriceRuleShareableUrlTargetType: "enum" as const,
	PriceRuleShippingEntitlementsInput:{
		countryCodes:"CountryCode"
	},
	PriceRuleSortKeys: "enum" as const,
	PriceRuleStatus: "enum" as const,
	PriceRuleTarget: "enum" as const,
	PriceRuleTrait: "enum" as const,
	PriceRuleValidityPeriodInput:{
		start:"DateTime",
		end:"DateTime"
	},
	PriceRuleValueInput:{
		fixedAmountValue:"Money"
	},
	PrivateMetafieldDeleteInput:{

	},
	PrivateMetafieldInput:{
		valueInput:"PrivateMetafieldValueInput"
	},
	PrivateMetafieldValueInput:{
		valueType:"PrivateMetafieldValueType"
	},
	PrivateMetafieldValueType: "enum" as const,
	Product:{
		collections:{
			sortKey:"CollectionSortKeys"
		},
		contextualPricing:{
			context:"ContextualPricingContext"
		},
		description:{

		},
		images:{
			sortKey:"ProductImageSortKeys"
		},
		inCollection:{

		},
		media:{
			sortKey:"ProductMediaSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		options:{

		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		productPublications:{

		},
		publicationCount:{

		},
		publications:{

		},
		publishedOnChannel:{

		},
		publishedOnPublication:{

		},
		resourcePublications:{

		},
		resourcePublicationsV2:{

		},
		sellingPlanGroups:{

		},
		translations:{

		},
		unpublishedChannels:{

		},
		unpublishedPublications:{

		},
		variants:{
			sortKey:"ProductVariantSortKeys"
		}
	},
	ProductAppendImagesInput:{
		images:"ImageInput"
	},
	ProductCategoryInput:{

	},
	ProductChangeStatusUserErrorCode: "enum" as const,
	ProductCollectionSortKeys: "enum" as const,
	ProductDeleteInput:{

	},
	ProductDeleteUserErrorCode: "enum" as const,
	ProductDuplicateAsyncInput:{
		newStatus:"ProductStatus"
	},
	ProductDuplicateUserErrorCode: "enum" as const,
	ProductImageSortKeys: "enum" as const,
	ProductInput:{
		seo:"SEOInput",
		standardizedProductType:"StandardizedProductTypeInput",
		productCategory:"ProductCategoryInput",
		images:"ImageInput",
		metafields:"MetafieldInput",
		privateMetafields:"PrivateMetafieldInput",
		variants:"ProductVariantInput",
		status:"ProductStatus"
	},
	ProductMediaSortKeys: "enum" as const,
	ProductOption:{
		translations:{

		}
	},
	ProductPublicationInput:{
		publishDate:"DateTime"
	},
	ProductPublishInput:{
		productPublications:"ProductPublicationInput"
	},
	ProductResourceFeedbackInput:{
		state:"ResourceFeedbackState",
		feedbackGeneratedAt:"DateTime",
		productUpdatedAt:"DateTime"
	},
	ProductSortKeys: "enum" as const,
	ProductStatus: "enum" as const,
	ProductUnpublishInput:{
		productPublications:"ProductPublicationInput"
	},
	ProductVariant:{
		contextualPricing:{
			context:"ContextualPricingContext"
		},
		media:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		presentmentPrices:{
			presentmentCurrencies:"CurrencyCode"
		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		sellingPlanGroups:{

		},
		translations:{

		}
	},
	ProductVariantAppendMediaInput:{

	},
	ProductVariantDetachMediaInput:{

	},
	ProductVariantInput:{
		compareAtPrice:"Money",
		inventoryPolicy:"ProductVariantInventoryPolicy",
		inventoryQuantities:"InventoryLevelInput",
		inventoryItem:"InventoryItemInput",
		metafields:"MetafieldInput",
		privateMetafields:"PrivateMetafieldInput",
		price:"Money",
		weightUnit:"WeightUnit"
	},
	ProductVariantInventoryManagement: "enum" as const,
	ProductVariantInventoryPolicy: "enum" as const,
	ProductVariantPositionInput:{

	},
	ProductVariantSortKeys: "enum" as const,
	ProductVariantsBulkCreateUserErrorCode: "enum" as const,
	ProductVariantsBulkDeleteUserErrorCode: "enum" as const,
	ProductVariantsBulkInput:{
		compareAtPrice:"Money",
		inventoryPolicy:"ProductVariantInventoryPolicy",
		inventoryQuantities:"InventoryLevelInput",
		inventoryItem:"InventoryItemInput",
		metafields:"MetafieldInput",
		privateMetafields:"PrivateMetafieldInput",
		price:"Money",
		weightUnit:"WeightUnit"
	},
	ProductVariantsBulkReorderUserErrorCode: "enum" as const,
	ProductVariantsBulkUpdateUserErrorCode: "enum" as const,
	ProfileItemSortKeys: "enum" as const,
	PubSubWebhookSubscriptionCreateUserErrorCode: "enum" as const,
	PubSubWebhookSubscriptionInput:{
		format:"WebhookSubscriptionFormat"
	},
	PubSubWebhookSubscriptionUpdateUserErrorCode: "enum" as const,
	Publication:{
		collectionPublicationsV3:{

		},
		collections:{

		},
		hasCollection:{

		},
		productPublicationsV3:{

		},
		products:{

		}
	},
	PublicationInput:{
		publishDate:"DateTime"
	},
	Publishable:{
		publicationCount:{

		},
		publishedOnChannel:{

		},
		publishedOnPublication:{

		},
		resourcePublications:{

		},
		resourcePublicationsV2:{

		},
		unpublishedChannels:{

		},
		unpublishedPublications:{

		}
	},
	PurchasingCompanyInput:{

	},
	PurchasingEntityInput:{
		purchasingCompany:"PurchasingCompanyInput"
	},
	QueryRoot:{
		abandonment:{

		},
		abandonmentByAbandonedCheckoutId:{

		},
		app:{

		},
		appByHandle:{

		},
		appByKey:{

		},
		appDiscountType:{

		},
		appInstallation:{

		},
		appInstallations:{
			sortKey:"AppInstallationSortKeys",
			category:"AppInstallationCategory",
			privacy:"AppInstallationPrivacy"
		},
		automaticDiscount:{

		},
		automaticDiscountNode:{

		},
		automaticDiscountNodes:{
			sortKey:"AutomaticDiscountSortKeys"
		},
		automaticDiscountSavedSearches:{

		},
		automaticDiscounts:{
			sortKey:"AutomaticDiscountSortKeys"
		},
		carrierService:{

		},
		channel:{

		},
		channels:{

		},
		checkoutProfile:{

		},
		checkoutProfiles:{
			sortKey:"CheckoutProfileSortKeys"
		},
		codeDiscountNode:{

		},
		codeDiscountNodeByCode:{

		},
		codeDiscountNodes:{
			sortKey:"CodeDiscountSortKeys"
		},
		codeDiscountSavedSearches:{

		},
		collection:{

		},
		collectionByHandle:{

		},
		collectionSavedSearches:{

		},
		collections:{
			sortKey:"CollectionSortKeys"
		},
		companies:{
			sortKey:"CompanySortKeys"
		},
		company:{

		},
		companyContact:{

		},
		companyContactRole:{

		},
		companyLocation:{

		},
		companyLocations:{
			sortKey:"CompanyLocationSortKeys"
		},
		currentBulkOperation:{
			type:"BulkOperationType"
		},
		customer:{

		},
		customerPaymentMethod:{

		},
		customerSegmentMembers:{

		},
		customerSegmentMembersQuery:{

		},
		customerSegmentMembership:{

		},
		customers:{
			sortKey:"CustomerSortKeys"
		},
		deletionEvents:{
			subjectTypes:"DeletionEventSubjectType",
			sortKey:"DeletionEventSortKeys"
		},
		deliveryProfile:{

		},
		deliveryProfiles:{

		},
		discountCodeCount:{

		},
		discountNode:{

		},
		discountNodes:{
			sortKey:"DiscountSortKeys"
		},
		discountRedeemCodeBulkCreation:{

		},
		discountRedeemCodeSavedSearches:{
			sortKey:"DiscountCodeSortKeys"
		},
		dispute:{

		},
		disputeEvidence:{

		},
		domain:{

		},
		draftOrder:{

		},
		draftOrderSavedSearches:{

		},
		draftOrderTag:{

		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		fileSavedSearches:{

		},
		files:{
			sortKey:"FileSortKeys"
		},
		fulfillment:{

		},
		fulfillmentOrder:{

		},
		fulfillmentOrders:{
			sortKey:"FulfillmentOrderSortKeys"
		},
		fulfillmentService:{

		},
		giftCard:{

		},
		giftCards:{
			sortKey:"GiftCardSortKeys"
		},
		giftCardsCount:{

		},
		inventoryItem:{

		},
		inventoryItems:{

		},
		inventoryLevel:{

		},
		job:{

		},
		location:{

		},
		locations:{
			sortKey:"LocationSortKeys"
		},
		locationsAvailableForDeliveryProfilesConnection:{

		},
		manualHoldsFulfillmentOrders:{

		},
		market:{

		},
		marketByGeography:{
			countryCode:"CountryCode"
		},
		marketLocalizableResource:{

		},
		marketLocalizableResources:{
			resourceType:"MarketLocalizableResourceType"
		},
		marketLocalizableResourcesByIds:{

		},
		marketingActivities:{
			utm:"UTMInput",
			sortKey:"MarketingActivitySortKeys"
		},
		marketingActivity:{

		},
		marketingEvent:{

		},
		marketingEvents:{
			sortKey:"MarketingEventSortKeys"
		},
		markets:{

		},
		metafield:{

		},
		metafieldDefinition:{

		},
		metafieldDefinitions:{
			ownerType:"MetafieldOwnerType",
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafieldStorefrontVisibilities:{

		},
		metafieldStorefrontVisibility:{

		},
		metaobject:{

		},
		metaobjectByHandle:{
			handle:"MetaobjectHandleInput"
		},
		metaobjectDefinition:{

		},
		metaobjectDefinitionByType:{

		},
		metaobjectDefinitions:{

		},
		metaobjects:{

		},
		node:{

		},
		nodes:{

		},
		order:{

		},
		orderPaymentStatus:{

		},
		orderSavedSearches:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		paymentTermsTemplates:{
			paymentTermsType:"PaymentTermsType"
		},
		priceList:{

		},
		priceLists:{
			matchRule:"PriceListContext",
			sortKey:"PriceListSortKeys"
		},
		priceRule:{

		},
		priceRuleSavedSearches:{

		},
		priceRules:{
			sortKey:"PriceRuleSortKeys"
		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		product:{

		},
		productByHandle:{

		},
		productResourceFeedback:{

		},
		productSavedSearches:{

		},
		productVariant:{

		},
		productVariants:{
			sortKey:"ProductVariantSortKeys"
		},
		products:{
			sortKey:"ProductSortKeys"
		},
		publication:{

		},
		publications:{

		},
		refund:{

		},
		return:{

		},
		returnableFulfillment:{

		},
		returnableFulfillments:{

		},
		reverseDelivery:{

		},
		reverseFulfillmentOrder:{

		},
		scriptTag:{

		},
		scriptTags:{
			src:"URL"
		},
		segment:{

		},
		segmentFilterSuggestions:{

		},
		segmentFilters:{

		},
		segmentMigrations:{

		},
		segmentValueSuggestions:{

		},
		segments:{
			sortKey:"SegmentSortKeys"
		},
		sellingPlanGroup:{

		},
		sellingPlanGroups:{
			sortKey:"SellingPlanGroupSortKeys"
		},
		shopLocales:{

		},
		shopifyqlQuery:{

		},
		staffMember:{

		},
		standardMetafieldDefinitionTemplates:{

		},
		subscriptionBillingAttempt:{

		},
		subscriptionBillingCycle:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycles:{
			billingCyclesDateRangeSelector:"SubscriptionBillingCyclesDateRangeSelector",
			billingCyclesIndexRangeSelector:"SubscriptionBillingCyclesIndexRangeSelector",
			sortKey:"SubscriptionBillingCyclesSortKeys"
		},
		subscriptionContract:{

		},
		subscriptionContracts:{

		},
		subscriptionDraft:{

		},
		tenderTransactions:{

		},
		translatableResource:{

		},
		translatableResources:{
			resourceType:"TranslatableResourceType"
		},
		translatableResourcesByIds:{

		},
		urlRedirect:{

		},
		urlRedirectImport:{

		},
		urlRedirectSavedSearches:{

		},
		urlRedirects:{
			sortKey:"UrlRedirectSortKeys"
		},
		webPixel:{

		},
		webhookSubscription:{

		},
		webhookSubscriptions:{
			sortKey:"WebhookSubscriptionSortKeys",
			callbackUrl:"URL",
			format:"WebhookSubscriptionFormat",
			topics:"WebhookSubscriptionTopic"
		}
	},
	Refund:{
		refundLineItems:{

		},
		transactions:{

		}
	},
	RefundAgreement:{
		sales:{

		}
	},
	RefundDutyInput:{
		refundType:"RefundDutyRefundType"
	},
	RefundDutyRefundType: "enum" as const,
	RefundInput:{
		currency:"CurrencyCode",
		shipping:"ShippingRefundInput",
		refundLineItems:"RefundLineItemInput",
		refundDuties:"RefundDutyInput",
		transactions:"OrderTransactionInput"
	},
	RefundLineItemInput:{
		restockType:"RefundLineItemRestockType"
	},
	RefundLineItemRestockType: "enum" as const,
	RefundShippingInput:{
		shippingRefundAmount:"MoneyInput"
	},
	RemoteAuthorizeNetCustomerPaymentProfileInput:{

	},
	RemoteBraintreePaymentMethodInput:{

	},
	RemoteStripePaymentMethodInput:{

	},
	ResourceAlertIcon: "enum" as const,
	ResourceAlertSeverity: "enum" as const,
	ResourceFeedbackCreateInput:{
		feedbackGeneratedAt:"DateTime",
		state:"ResourceFeedbackState"
	},
	ResourceFeedbackState: "enum" as const,
	Return:{
		refunds:{

		},
		returnLineItems:{

		},
		reverseFulfillmentOrders:{

		},
		suggestedRefund:{
			returnRefundLineItems:"ReturnRefundLineItemInput",
			refundShipping:"RefundShippingInput",
			refundDuties:"RefundDutyInput"
		}
	},
	ReturnApproveRequestInput:{

	},
	ReturnDeclineReason: "enum" as const,
	ReturnDeclineRequestInput:{
		declineReason:"ReturnDeclineReason"
	},
	ReturnErrorCode: "enum" as const,
	ReturnInput:{
		returnLineItems:"ReturnLineItemInput",
		requestedAt:"DateTime"
	},
	ReturnLineItemInput:{
		returnReason:"ReturnReason"
	},
	ReturnReason: "enum" as const,
	ReturnRefundInput:{
		returnRefundLineItems:"ReturnRefundLineItemInput",
		refundShipping:"RefundShippingInput",
		refundDuties:"RefundDutyInput",
		orderTransactions:"ReturnRefundOrderTransactionInput"
	},
	ReturnRefundLineItemInput:{

	},
	ReturnRefundOrderTransactionInput:{
		transactionAmount:"MoneyInput"
	},
	ReturnRequestInput:{
		returnLineItems:"ReturnRequestLineItemInput"
	},
	ReturnRequestLineItemInput:{
		returnReason:"ReturnReason"
	},
	ReturnStatus: "enum" as const,
	ReturnableFulfillment:{
		returnableFulfillmentLineItems:{

		}
	},
	ReverseDelivery:{
		reverseDeliveryLineItems:{

		}
	},
	ReverseDeliveryDisposeInput:{
		dispositionType:"ReverseFulfillmentOrderDispositionType"
	},
	ReverseDeliveryLabelInput:{
		fileUrl:"URL"
	},
	ReverseDeliveryLineItemInput:{

	},
	ReverseDeliveryTrackingInput:{
		url:"URL"
	},
	ReverseFulfillmentOrder:{
		lineItems:{

		},
		reverseDeliveries:{

		}
	},
	ReverseFulfillmentOrderDisposeInput:{
		dispositionType:"ReverseFulfillmentOrderDispositionType"
	},
	ReverseFulfillmentOrderDispositionType: "enum" as const,
	ReverseFulfillmentOrderStatus: "enum" as const,
	ReverseFulfillmentOrderThirdPartyConfirmationStatus: "enum" as const,
	SEOInput:{

	},
	SaleActionType: "enum" as const,
	SaleLineType: "enum" as const,
	SalesAgreement:{
		sales:{

		}
	},
	SavedSearchCreateInput:{
		resourceType:"SearchResultType"
	},
	SavedSearchDeleteInput:{

	},
	SavedSearchUpdateInput:{

	},
	ScriptTagDisplayScope: "enum" as const,
	ScriptTagInput:{
		src:"URL",
		displayScope:"ScriptTagDisplayScope"
	},
	SearchResultType: "enum" as const,
	SegmentAssociationFilter:{
		values:{

		}
	},
	SegmentEnumFilter:{
		values:{

		}
	},
	SegmentEventFilter:{
		values:{

		}
	},
	SegmentSortKeys: "enum" as const,
	SegmentStatistics:{
		attributeStatistics:{

		}
	},
	SegmentStringFilter:{
		values:{

		}
	},
	SellingPlanAnchorInput:{
		type:"SellingPlanAnchorType"
	},
	SellingPlanAnchorType: "enum" as const,
	SellingPlanBillingPolicyInput:{
		fixed:"SellingPlanFixedBillingPolicyInput",
		recurring:"SellingPlanRecurringBillingPolicyInput"
	},
	SellingPlanCategory: "enum" as const,
	SellingPlanCheckoutChargeInput:{
		type:"SellingPlanCheckoutChargeType",
		value:"SellingPlanCheckoutChargeValueInput"
	},
	SellingPlanCheckoutChargeType: "enum" as const,
	SellingPlanCheckoutChargeValueInput:{
		fixedValue:"Decimal"
	},
	SellingPlanDeliveryPolicyInput:{
		fixed:"SellingPlanFixedDeliveryPolicyInput",
		recurring:"SellingPlanRecurringDeliveryPolicyInput"
	},
	SellingPlanFixedBillingPolicyInput:{
		remainingBalanceChargeTrigger:"SellingPlanRemainingBalanceChargeTrigger",
		remainingBalanceChargeExactTime:"DateTime",
		checkoutCharge:"SellingPlanCheckoutChargeInput"
	},
	SellingPlanFixedDeliveryPolicyInput:{
		anchors:"SellingPlanAnchorInput",
		fulfillmentTrigger:"SellingPlanFulfillmentTrigger",
		fulfillmentExactTime:"DateTime",
		intent:"SellingPlanFixedDeliveryPolicyIntent",
		preAnchorBehavior:"SellingPlanFixedDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanFixedDeliveryPolicyIntent: "enum" as const,
	SellingPlanFixedDeliveryPolicyPreAnchorBehavior: "enum" as const,
	SellingPlanFixedPricingPolicyInput:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyValueInput"
	},
	SellingPlanFulfillmentTrigger: "enum" as const,
	SellingPlanGroup:{
		appliesToProduct:{

		},
		appliesToProductVariant:{

		},
		appliesToProductVariants:{

		},
		productVariantCount:{

		},
		productVariants:{

		},
		products:{

		},
		sellingPlans:{

		}
	},
	SellingPlanGroupInput:{
		sellingPlansToCreate:"SellingPlanInput",
		sellingPlansToUpdate:"SellingPlanInput"
	},
	SellingPlanGroupResourceInput:{

	},
	SellingPlanGroupSortKeys: "enum" as const,
	SellingPlanGroupUserErrorCode: "enum" as const,
	SellingPlanInput:{
		billingPolicy:"SellingPlanBillingPolicyInput",
		deliveryPolicy:"SellingPlanDeliveryPolicyInput",
		inventoryPolicy:"SellingPlanInventoryPolicyInput",
		pricingPolicies:"SellingPlanPricingPolicyInput",
		category:"SellingPlanCategory"
	},
	SellingPlanInterval: "enum" as const,
	SellingPlanInventoryPolicyInput:{
		reserve:"SellingPlanReserve"
	},
	SellingPlanPricingPolicyAdjustmentType: "enum" as const,
	SellingPlanPricingPolicyInput:{
		recurring:"SellingPlanRecurringPricingPolicyInput",
		fixed:"SellingPlanFixedPricingPolicyInput"
	},
	SellingPlanPricingPolicyValueInput:{
		fixedValue:"Decimal"
	},
	SellingPlanRecurringBillingPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput"
	},
	SellingPlanRecurringDeliveryPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput",
		intent:"SellingPlanRecurringDeliveryPolicyIntent",
		preAnchorBehavior:"SellingPlanRecurringDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanRecurringDeliveryPolicyIntent: "enum" as const,
	SellingPlanRecurringDeliveryPolicyPreAnchorBehavior: "enum" as const,
	SellingPlanRecurringPricingPolicyInput:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyValueInput"
	},
	SellingPlanRemainingBalanceChargeTrigger: "enum" as const,
	SellingPlanReserve: "enum" as const,
	ShippingDiscountClass: "enum" as const,
	ShippingLineInput:{
		price:"Money"
	},
	ShippingPackageType: "enum" as const,
	ShippingRefundInput:{
		amount:"Money"
	},
	Shop:{
		assignedFulfillmentOrders:{
			assignmentStatus:"FulfillmentOrderAssignmentStatus",
			sortKey:"FulfillmentOrderSortKeys"
		},
		availableChannelApps:{

		},
		channels:{

		},
		collectionByHandle:{

		},
		collectionSavedSearches:{

		},
		collections:{
			sortKey:"CollectionSortKeys"
		},
		currencySettings:{

		},
		customerSavedSearches:{
			sortKey:"CustomerSavedSearchSortKeys"
		},
		customerTags:{

		},
		customers:{
			sortKey:"CustomerSortKeys"
		},
		draftOrderSavedSearches:{

		},
		draftOrderTags:{

		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		fulfillmentOrders:{
			sortKey:"FulfillmentOrderSortKeys"
		},
		inventoryItems:{

		},
		locations:{
			sortKey:"LocationSortKeys"
		},
		marketingEvents:{
			sortKey:"MarketingEventSortKeys"
		},
		metafield:{

		},
		metafields:{

		},
		orderSavedSearches:{

		},
		orderTags:{
			sort:"ShopTagSort"
		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		priceRuleSavedSearches:{

		},
		priceRules:{
			sortKey:"PriceRuleSortKeys"
		},
		privateMetafield:{

		},
		privateMetafields:{

		},
		productByHandle:{

		},
		productImages:{
			sortKey:"ProductImageSortKeys"
		},
		productSavedSearches:{

		},
		productTags:{

		},
		productTypes:{

		},
		productVariants:{
			sortKey:"ProductVariantSortKeys"
		},
		productVendors:{

		},
		products:{
			sortKey:"ProductSortKeys"
		},
		search:{
			types:"SearchResultType"
		},
		staffMembers:{

		},
		storefrontAccessTokens:{

		},
		translations:{

		},
		uploadedImagesByIds:{

		}
	},
	ShopAddress:{
		formatted:{

		}
	},
	ShopBranding: "enum" as const,
	ShopCustomerAccountsSetting: "enum" as const,
	ShopLocaleInput:{

	},
	ShopPolicy:{
		translations:{

		}
	},
	ShopPolicyErrorCode: "enum" as const,
	ShopPolicyInput:{
		type:"ShopPolicyType"
	},
	ShopPolicyType: "enum" as const,
	ShopResourceFeedbackCreateUserErrorCode: "enum" as const,
	ShopTagSort: "enum" as const,
	ShopifyPaymentsAccount:{
		bankAccounts:{

		},
		disputes:{

		},
		payouts:{
			transactionType:"ShopifyPaymentsPayoutTransactionType"
		}
	},
	ShopifyPaymentsBankAccount:{
		payouts:{
			transactionType:"ShopifyPaymentsPayoutTransactionType"
		}
	},
	ShopifyPaymentsBankAccountStatus: "enum" as const,
	ShopifyPaymentsDisputeEvidenceFileType: "enum" as const,
	ShopifyPaymentsDisputeEvidenceUpdateInput:{
		shippingAddress:"MailingAddressInput",
		cancellationPolicyFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		customerCommunicationFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		refundPolicyFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		shippingDocumentationFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		uncategorizedFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		serviceDocumentationFile:"ShopifyPaymentsDisputeFileUploadUpdateInput"
	},
	ShopifyPaymentsDisputeFileUploadUpdateInput:{

	},
	ShopifyPaymentsDisputeReason: "enum" as const,
	ShopifyPaymentsPayoutInterval: "enum" as const,
	ShopifyPaymentsPayoutStatus: "enum" as const,
	ShopifyPaymentsPayoutTransactionType: "enum" as const,
	ShopifyPaymentsVerificationDocumentType: "enum" as const,
	ShopifyPaymentsVerificationStatus: "enum" as const,
	StaffMember:{
		avatar:{
			fallback:"StaffMemberDefaultImage"
		}
	},
	StaffMemberDefaultImage: "enum" as const,
	StaffMemberPermission: "enum" as const,
	StageImageInput:{
		resource:"StagedUploadTargetGenerateUploadResource",
		httpMethod:"StagedUploadHttpMethodType"
	},
	StagedUploadHttpMethodType: "enum" as const,
	StagedUploadInput:{
		resource:"StagedUploadTargetGenerateUploadResource",
		httpMethod:"StagedUploadHttpMethodType",
		fileSize:"UnsignedInt64"
	},
	StagedUploadTargetGenerateInput:{
		resource:"StagedUploadTargetGenerateUploadResource",
		httpMethod:"StagedUploadHttpMethodType",
		fileSize:"UnsignedInt64"
	},
	StagedUploadTargetGenerateUploadResource: "enum" as const,
	StandardMetafieldDefinitionEnableUserErrorCode: "enum" as const,
	StandardizedProductTypeInput:{

	},
	StorefrontAccessTokenDeleteInput:{

	},
	StorefrontAccessTokenInput:{

	},
	StorefrontID: `scalar.StorefrontID` as const,
	SubscriptionBillingAttemptErrorCode: "enum" as const,
	SubscriptionBillingAttemptInput:{
		originTime:"DateTime",
		billingCycleSelector:"SubscriptionBillingCycleSelector"
	},
	SubscriptionBillingCycle:{
		billingAttempts:{

		}
	},
	SubscriptionBillingCycleBillingCycleStatus: "enum" as const,
	SubscriptionBillingCycleEditedContract:{
		billingCycles:{
			sortKey:"SubscriptionBillingCyclesSortKeys"
		},
		customerPaymentMethod:{

		},
		discounts:{

		},
		lines:{

		},
		orders:{

		}
	},
	SubscriptionBillingCycleErrorCode: "enum" as const,
	SubscriptionBillingCycleInput:{
		selector:"SubscriptionBillingCycleSelector"
	},
	SubscriptionBillingCycleScheduleEditInput:{
		billingDate:"DateTime",
		reason:"SubscriptionBillingCycleScheduleEditInputScheduleEditReason"
	},
	SubscriptionBillingCycleScheduleEditInputScheduleEditReason: "enum" as const,
	SubscriptionBillingCycleSelector:{
		date:"DateTime"
	},
	SubscriptionBillingCyclesDateRangeSelector:{
		startDate:"DateTime",
		endDate:"DateTime"
	},
	SubscriptionBillingCyclesIndexRangeSelector:{

	},
	SubscriptionBillingCyclesSortKeys: "enum" as const,
	SubscriptionBillingCyclesTargetSelection: "enum" as const,
	SubscriptionBillingPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput"
	},
	SubscriptionContract:{
		billingAttempts:{

		},
		customerPaymentMethod:{

		},
		discounts:{

		},
		lines:{

		},
		orders:{

		}
	},
	SubscriptionContractBase:{
		customerPaymentMethod:{

		},
		discounts:{

		},
		lines:{

		},
		orders:{

		}
	},
	SubscriptionContractCreateInput:{
		nextBillingDate:"DateTime",
		currencyCode:"CurrencyCode",
		contract:"SubscriptionDraftInput"
	},
	SubscriptionContractErrorCode: "enum" as const,
	SubscriptionContractLastPaymentStatus: "enum" as const,
	SubscriptionContractSubscriptionStatus: "enum" as const,
	SubscriptionDeliveryMethodInput:{
		shipping:"SubscriptionDeliveryMethodShippingInput",
		localDelivery:"SubscriptionDeliveryMethodLocalDeliveryInput",
		pickup:"SubscriptionDeliveryMethodPickupInput"
	},
	SubscriptionDeliveryMethodLocalDeliveryInput:{
		address:"MailingAddressInput",
		localDeliveryOption:"SubscriptionDeliveryMethodLocalDeliveryOptionInput"
	},
	SubscriptionDeliveryMethodLocalDeliveryOptionInput:{

	},
	SubscriptionDeliveryMethodPickupInput:{
		pickupOption:"SubscriptionDeliveryMethodPickupOptionInput"
	},
	SubscriptionDeliveryMethodPickupOptionInput:{

	},
	SubscriptionDeliveryMethodShippingInput:{
		address:"MailingAddressInput",
		shippingOption:"SubscriptionDeliveryMethodShippingOptionInput"
	},
	SubscriptionDeliveryMethodShippingOptionInput:{

	},
	SubscriptionDeliveryPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput"
	},
	SubscriptionDiscountEntitledLines:{
		lines:{

		}
	},
	SubscriptionDiscountRejectionReason: "enum" as const,
	SubscriptionDraft:{
		concatenatedBillingCycles:{
			sortKey:"SubscriptionBillingCyclesSortKeys"
		},
		customerPaymentMethod:{

		},
		deliveryOptions:{
			deliveryAddress:"MailingAddressInput"
		},
		discounts:{

		},
		discountsAdded:{

		},
		discountsRemoved:{

		},
		discountsUpdated:{

		},
		lines:{

		},
		linesAdded:{

		},
		linesRemoved:{

		},
		shippingOptions:{
			deliveryAddress:"MailingAddressInput"
		}
	},
	SubscriptionDraftErrorCode: "enum" as const,
	SubscriptionDraftInput:{
		status:"SubscriptionContractSubscriptionStatus",
		nextBillingDate:"DateTime",
		billingPolicy:"SubscriptionBillingPolicyInput",
		deliveryPolicy:"SubscriptionDeliveryPolicyInput",
		deliveryPrice:"Decimal",
		deliveryMethod:"SubscriptionDeliveryMethodInput",
		customAttributes:"AttributeInput"
	},
	SubscriptionFreeShippingDiscountInput:{

	},
	SubscriptionLineInput:{
		currentPrice:"Decimal",
		customAttributes:"AttributeInput",
		pricingPolicy:"SubscriptionPricingPolicyInput"
	},
	SubscriptionLineUpdateInput:{
		currentPrice:"Decimal",
		customAttributes:"AttributeInput",
		pricingPolicy:"SubscriptionPricingPolicyInput"
	},
	SubscriptionManualDiscountEntitledLinesInput:{
		lines:"SubscriptionManualDiscountLinesInput"
	},
	SubscriptionManualDiscountFixedAmountInput:{

	},
	SubscriptionManualDiscountInput:{
		value:"SubscriptionManualDiscountValueInput",
		entitledLines:"SubscriptionManualDiscountEntitledLinesInput"
	},
	SubscriptionManualDiscountLinesInput:{

	},
	SubscriptionManualDiscountValueInput:{
		fixedAmount:"SubscriptionManualDiscountFixedAmountInput"
	},
	SubscriptionPricingPolicyCycleDiscountsInput:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyValueInput",
		computedPrice:"Decimal"
	},
	SubscriptionPricingPolicyInput:{
		basePrice:"Decimal",
		cycleDiscounts:"SubscriptionPricingPolicyCycleDiscountsInput"
	},
	SuggestedOrderTransactionKind: "enum" as const,
	TaxExemption: "enum" as const,
	TranslatableResource:{
		translations:{

		}
	},
	TranslatableResourceType: "enum" as const,
	TranslationErrorCode: "enum" as const,
	TranslationInput:{

	},
	URL: `scalar.URL` as const,
	UTMInput:{

	},
	UnitSystem: "enum" as const,
	UnsignedInt64: `scalar.UnsignedInt64` as const,
	UpdateMediaInput:{

	},
	UrlRedirectBulkDeleteByIdsUserErrorCode: "enum" as const,
	UrlRedirectBulkDeleteBySavedSearchUserErrorCode: "enum" as const,
	UrlRedirectBulkDeleteBySearchUserErrorCode: "enum" as const,
	UrlRedirectErrorCode: "enum" as const,
	UrlRedirectImportErrorCode: "enum" as const,
	UrlRedirectInput:{

	},
	UrlRedirectSortKeys: "enum" as const,
	UtcOffset: `scalar.UtcOffset` as const,
	VisualizationType: "enum" as const,
	WebPixelInput:{
		settings:"JSON"
	},
	WebhookSubscriptionFormat: "enum" as const,
	WebhookSubscriptionInput:{
		callbackUrl:"URL",
		format:"WebhookSubscriptionFormat"
	},
	WebhookSubscriptionSortKeys: "enum" as const,
	WebhookSubscriptionTopic: "enum" as const,
	WeightInput:{
		unit:"WeightUnit"
	},
	WeightUnit: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	accessRestricted:{
		reason:"String"
	},
	ARN: `scalar.ARN` as const,
	AbandonedCheckout:{
		abandonedCheckoutUrl:"URL",
		defaultCursor:"String",
		id:"ID",
		lineItemsQuantity:"Int",
		totalPriceSet:"MoneyBag"
	},
	Abandonment:{
		abandonedCheckoutPayload:"AbandonedCheckout",
		abandonmentType:"AbandonmentAbandonmentType",
		app:"App",
		createdAt:"DateTime",
		customer:"Customer",
		customerHasNoOrderSinceAbandonment:"Boolean",
		daysSinceLastAbandonmentEmail:"Int",
		emailSentAt:"DateTime",
		emailState:"AbandonmentEmailState",
		hoursSinceLastAbandonedCheckout:"Float",
		id:"ID",
		inventoryAvailable:"Boolean",
		isFromOnlineStore:"Boolean",
		isFromShopApp:"Boolean",
		isFromShopPay:"Boolean",
		isMostSignificantAbandonment:"Boolean",
		lastBrowseAbandonmentDate:"DateTime",
		lastCartAbandonmentDate:"DateTime",
		lastCheckoutAbandonmentDate:"DateTime",
		mostRecentStep:"AbandonmentAbandonmentType",
		productsAddedToCart:"CustomerVisitProductInfoConnection",
		productsViewed:"CustomerVisitProductInfoConnection",
		visitStartedAt:"DateTime"
	},
	AbandonmentEmailStateUpdatePayload:{
		abandonment:"Abandonment",
		userErrors:"AbandonmentEmailStateUpdateUserError"
	},
	AbandonmentEmailStateUpdateUserError:{
		code:"AbandonmentEmailStateUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	AccessScope:{
		description:"String",
		handle:"String"
	},
	AdjustmentSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	AllDiscountItems:{
		allItems:"Boolean"
	},
	ApiVersion:{
		displayName:"String",
		handle:"String",
		supported:"Boolean"
	},
	App:{
		apiKey:"String",
		appStoreAppUrl:"URL",
		appStoreDeveloperUrl:"URL",
		availableAccessScopes:"AccessScope",
		banner:"Image",
		description:"String",
		developerName:"String",
		developerType:"AppDeveloperType",
		developerUrl:"URL",
		embedded:"Boolean",
		failedRequirements:"FailedRequirement",
		features:"String",
		feedback:"AppFeedback",
		handle:"String",
		icon:"Image",
		id:"ID",
		installUrl:"URL",
		installation:"AppInstallation",
		isPostPurchaseAppInUse:"Boolean",
		launchUrl:"URL",
		navigationItems:"NavigationItem",
		previouslyInstalled:"Boolean",
		pricingDetails:"String",
		pricingDetailsSummary:"String",
		privacyPolicyUrl:"URL",
		publicCategory:"AppPublicCategory",
		published:"Boolean",
		requestedAccessScopes:"AccessScope",
		screenshots:"Image",
		shopifyDeveloped:"Boolean",
		title:"String",
		uninstallMessage:"String",
		uninstallUrl:"URL",
		webhookApiVersion:"String"
	},
	AppConnection:{
		edges:"AppEdge",
		nodes:"App",
		pageInfo:"PageInfo"
	},
	AppCredit:{
		amount:"MoneyV2",
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		test:"Boolean"
	},
	AppCreditConnection:{
		edges:"AppCreditEdge",
		nodes:"AppCredit",
		pageInfo:"PageInfo"
	},
	AppCreditCreatePayload:{
		appCredit:"AppCredit",
		userErrors:"UserError"
	},
	AppCreditEdge:{
		cursor:"String",
		node:"AppCredit"
	},
	AppDiscountType:{
		app:"App",
		appBridge:"FunctionsAppBridge",
		appKey:"String",
		description:"String",
		discountClass:"DiscountClass",
		functionId:"String",
		targetType:"DiscountApplicationTargetType",
		title:"String"
	},
	AppEdge:{
		cursor:"String",
		node:"App"
	},
	AppFeedback:{
		app:"App",
		link:"Link",
		messages:"UserError"
	},
	AppInstallation:{
		accessScopes:"AccessScope",
		activeSubscriptions:"AppSubscription",
		allSubscriptions:"AppSubscriptionConnection",
		app:"App",
		channel:"Channel",
		credits:"AppCreditConnection",
		id:"ID",
		launchUrl:"URL",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		oneTimePurchases:"AppPurchaseOneTimeConnection",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		publication:"Publication",
		revenueAttributionRecords:"AppRevenueAttributionRecordConnection",
		subscriptions:"AppSubscription",
		uninstallUrl:"URL"
	},
	AppInstallationConnection:{
		edges:"AppInstallationEdge",
		nodes:"AppInstallation",
		pageInfo:"PageInfo"
	},
	AppInstallationEdge:{
		cursor:"String",
		node:"AppInstallation"
	},
	AppPlanV2:{
		pricingDetails:"AppPricingDetails"
	},
	AppPricingDetails:{
		"...on AppRecurringPricing":"AppRecurringPricing",
		"...on AppUsagePricing":"AppUsagePricing"
	},
	AppPurchase:{
		"...on AppPurchaseOneTime": "AppPurchaseOneTime",
		createdAt:"DateTime",
		name:"String",
		price:"MoneyV2",
		status:"AppPurchaseStatus",
		test:"Boolean"
	},
	AppPurchaseOneTime:{
		createdAt:"DateTime",
		id:"ID",
		name:"String",
		price:"MoneyV2",
		status:"AppPurchaseStatus",
		test:"Boolean"
	},
	AppPurchaseOneTimeConnection:{
		edges:"AppPurchaseOneTimeEdge",
		nodes:"AppPurchaseOneTime",
		pageInfo:"PageInfo"
	},
	AppPurchaseOneTimeCreatePayload:{
		appPurchaseOneTime:"AppPurchaseOneTime",
		confirmationUrl:"URL",
		userErrors:"UserError"
	},
	AppPurchaseOneTimeEdge:{
		cursor:"String",
		node:"AppPurchaseOneTime"
	},
	AppRecurringPricing:{
		discount:"AppSubscriptionDiscount",
		interval:"AppPricingInterval",
		price:"MoneyV2"
	},
	AppRevenueAttributionRecord:{
		amount:"MoneyV2",
		capturedAt:"DateTime",
		createdAt:"DateTime",
		id:"ID",
		idempotencyKey:"String",
		test:"Boolean",
		type:"AppRevenueAttributionType"
	},
	AppRevenueAttributionRecordConnection:{
		edges:"AppRevenueAttributionRecordEdge",
		nodes:"AppRevenueAttributionRecord",
		pageInfo:"PageInfo"
	},
	AppRevenueAttributionRecordCreatePayload:{
		appRevenueAttributionRecord:"AppRevenueAttributionRecord",
		userErrors:"AppRevenueAttributionRecordCreateUserError"
	},
	AppRevenueAttributionRecordCreateUserError:{
		code:"AppRevenueAttributionRecordCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	AppRevenueAttributionRecordDeletePayload:{
		deletedId:"ID",
		userErrors:"AppRevenueAttributionRecordDeleteUserError"
	},
	AppRevenueAttributionRecordDeleteUserError:{
		code:"AppRevenueAttributionRecordDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	AppRevenueAttributionRecordEdge:{
		cursor:"String",
		node:"AppRevenueAttributionRecord"
	},
	AppSubscription:{
		createdAt:"DateTime",
		currentPeriodEnd:"DateTime",
		id:"ID",
		lineItems:"AppSubscriptionLineItem",
		name:"String",
		returnUrl:"URL",
		status:"AppSubscriptionStatus",
		test:"Boolean",
		trialDays:"Int"
	},
	AppSubscriptionCancelPayload:{
		appSubscription:"AppSubscription",
		userErrors:"UserError"
	},
	AppSubscriptionConnection:{
		edges:"AppSubscriptionEdge",
		nodes:"AppSubscription",
		pageInfo:"PageInfo"
	},
	AppSubscriptionCreatePayload:{
		appSubscription:"AppSubscription",
		confirmationUrl:"URL",
		userErrors:"UserError"
	},
	AppSubscriptionDiscount:{
		durationLimitInIntervals:"Int",
		priceAfterDiscount:"MoneyV2",
		remainingDurationInIntervals:"Int",
		value:"AppSubscriptionDiscountValue"
	},
	AppSubscriptionDiscountAmount:{
		amount:"MoneyV2"
	},
	AppSubscriptionDiscountPercentage:{
		percentage:"Float"
	},
	AppSubscriptionDiscountValue:{
		"...on AppSubscriptionDiscountAmount":"AppSubscriptionDiscountAmount",
		"...on AppSubscriptionDiscountPercentage":"AppSubscriptionDiscountPercentage"
	},
	AppSubscriptionEdge:{
		cursor:"String",
		node:"AppSubscription"
	},
	AppSubscriptionLineItem:{
		id:"ID",
		plan:"AppPlanV2",
		usageRecords:"AppUsageRecordConnection"
	},
	AppSubscriptionLineItemUpdatePayload:{
		appSubscription:"AppSubscription",
		confirmationUrl:"URL",
		userErrors:"UserError"
	},
	AppSubscriptionTrialExtendPayload:{
		appSubscription:"AppSubscription",
		userErrors:"AppSubscriptionTrialExtendUserError"
	},
	AppSubscriptionTrialExtendUserError:{
		code:"AppSubscriptionTrialExtendUserErrorCode",
		field:"String",
		message:"String"
	},
	AppUsagePricing:{
		balanceUsed:"MoneyV2",
		cappedAmount:"MoneyV2",
		interval:"AppPricingInterval",
		terms:"String"
	},
	AppUsageRecord:{
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		price:"MoneyV2",
		subscriptionLineItem:"AppSubscriptionLineItem"
	},
	AppUsageRecordConnection:{
		edges:"AppUsageRecordEdge",
		nodes:"AppUsageRecord",
		pageInfo:"PageInfo"
	},
	AppUsageRecordCreatePayload:{
		appUsageRecord:"AppUsageRecord",
		userErrors:"UserError"
	},
	AppUsageRecordEdge:{
		cursor:"String",
		node:"AppUsageRecord"
	},
	Attribute:{
		key:"String",
		value:"String"
	},
	AutomaticDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		title:"String",
		value:"PricingValue"
	},
	AvailableChannelDefinitionsByChannel:{
		channelDefinitions:"ChannelDefinition",
		channelName:"String"
	},
	BasicEvent:{
		appTitle:"String",
		attributeToApp:"Boolean",
		attributeToUser:"Boolean",
		createdAt:"DateTime",
		criticalAlert:"Boolean",
		id:"ID",
		message:"FormattedString"
	},
	BillingAttemptUserError:{
		code:"BillingAttemptUserErrorCode",
		field:"String",
		message:"String"
	},
	BulkMutationUserError:{
		code:"BulkMutationErrorCode",
		field:"String",
		message:"String"
	},
	BulkOperation:{
		completedAt:"DateTime",
		createdAt:"DateTime",
		errorCode:"BulkOperationErrorCode",
		fileSize:"UnsignedInt64",
		id:"ID",
		objectCount:"UnsignedInt64",
		partialDataUrl:"URL",
		query:"String",
		rootObjectCount:"UnsignedInt64",
		status:"BulkOperationStatus",
		type:"BulkOperationType",
		url:"URL"
	},
	BulkOperationCancelPayload:{
		bulkOperation:"BulkOperation",
		userErrors:"UserError"
	},
	BulkOperationRunMutationPayload:{
		bulkOperation:"BulkOperation",
		userErrors:"BulkMutationUserError"
	},
	BulkOperationRunQueryPayload:{
		bulkOperation:"BulkOperation",
		userErrors:"UserError"
	},
	BulkProductResourceFeedbackCreatePayload:{
		feedback:"ProductResourceFeedback",
		userErrors:"BulkProductResourceFeedbackCreateUserError"
	},
	BulkProductResourceFeedbackCreateUserError:{
		code:"BulkProductResourceFeedbackCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	BusinessCustomerUserError:{
		code:"BusinessCustomerErrorCode",
		field:"String",
		message:"String"
	},
	BuyerExperienceConfiguration:{
		checkoutToDraft:"Boolean",
		payNowOnly:"Boolean",
		paymentTermsTemplate:"PaymentTermsTemplate"
	},
	CalculatedAutomaticDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedDiscountAllocation:{
		allocatedAmountSet:"MoneyBag",
		discountApplication:"CalculatedDiscountApplication"
	},
	CalculatedDiscountApplication:{
		"...on CalculatedAutomaticDiscountApplication": "CalculatedAutomaticDiscountApplication",
		"...on CalculatedDiscountCodeApplication": "CalculatedDiscountCodeApplication",
		"...on CalculatedManualDiscountApplication": "CalculatedManualDiscountApplication",
		"...on CalculatedScriptDiscountApplication": "CalculatedScriptDiscountApplication",
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedDiscountApplicationConnection:{
		edges:"CalculatedDiscountApplicationEdge",
		nodes:"CalculatedDiscountApplication",
		pageInfo:"PageInfo"
	},
	CalculatedDiscountApplicationEdge:{
		cursor:"String",
		node:"CalculatedDiscountApplication"
	},
	CalculatedDiscountCodeApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		code:"String",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedDraftOrder:{
		appliedDiscount:"DraftOrderAppliedDiscount",
		availableShippingRates:"ShippingRate",
		billingAddressMatchesShippingAddress:"Boolean",
		currencyCode:"CurrencyCode",
		customer:"Customer",
		lineItems:"CalculatedDraftOrderLineItem",
		lineItemsSubtotalPrice:"MoneyBag",
		marketName:"String",
		marketRegionCountryCode:"CountryCode",
		phone:"String",
		presentmentCurrencyCode:"CurrencyCode",
		purchasingEntity:"PurchasingEntity",
		shippingLine:"ShippingLine",
		subtotalPrice:"Money",
		subtotalPriceSet:"MoneyBag",
		taxLines:"TaxLine",
		totalDiscountsSet:"MoneyBag",
		totalLineItemsPriceSet:"MoneyBag",
		totalPrice:"Money",
		totalPriceSet:"MoneyBag",
		totalShippingPrice:"Money",
		totalShippingPriceSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag"
	},
	CalculatedDraftOrderLineItem:{
		appliedDiscount:"DraftOrderAppliedDiscount",
		custom:"Boolean",
		customAttributes:"Attribute",
		customAttributesV2:"TypedAttribute",
		discountedTotal:"MoneyV2",
		discountedTotalSet:"MoneyBag",
		discountedUnitPrice:"MoneyV2",
		discountedUnitPriceSet:"MoneyBag",
		fulfillmentService:"FulfillmentService",
		image:"Image",
		isGiftCard:"Boolean",
		name:"String",
		originalTotal:"MoneyV2",
		originalTotalSet:"MoneyBag",
		originalUnitPrice:"MoneyV2",
		originalUnitPriceSet:"MoneyBag",
		product:"Product",
		quantity:"Int",
		requiresShipping:"Boolean",
		sku:"String",
		taxable:"Boolean",
		title:"String",
		totalDiscount:"MoneyV2",
		totalDiscountSet:"MoneyBag",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String",
		weight:"Weight"
	},
	CalculatedLineItem:{
		calculatedDiscountAllocations:"CalculatedDiscountAllocation",
		customAttributes:"Attribute",
		discountAllocations:"DiscountAllocation",
		discountedUnitPriceSet:"MoneyBag",
		editableQuantity:"Int",
		editableQuantityBeforeChanges:"Int",
		editableSubtotalSet:"MoneyBag",
		hasStagedLineItemDiscount:"Boolean",
		id:"ID",
		image:"Image",
		originalUnitPriceSet:"MoneyBag",
		quantity:"Int",
		restockable:"Boolean",
		restocking:"Boolean",
		sku:"String",
		stagedChanges:"OrderStagedChange",
		title:"String",
		uneditableSubtotalSet:"MoneyBag",
		variant:"ProductVariant",
		variantTitle:"String"
	},
	CalculatedLineItemConnection:{
		edges:"CalculatedLineItemEdge",
		nodes:"CalculatedLineItem",
		pageInfo:"PageInfo"
	},
	CalculatedLineItemEdge:{
		cursor:"String",
		node:"CalculatedLineItem"
	},
	CalculatedManualDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedOrder:{
		addedDiscountApplications:"CalculatedDiscountApplicationConnection",
		addedLineItems:"CalculatedLineItemConnection",
		cartDiscountAmountSet:"MoneyBag",
		committed:"Boolean",
		id:"ID",
		lineItems:"CalculatedLineItemConnection",
		notificationPreviewHtml:"HTML",
		notificationPreviewTitle:"String",
		order:"Order",
		originalOrder:"Order",
		stagedChanges:"OrderStagedChangeConnection",
		subtotalLineItemsQuantity:"Int",
		subtotalPriceSet:"MoneyBag",
		taxLines:"TaxLine",
		totalOutstandingSet:"MoneyBag",
		totalPriceSet:"MoneyBag"
	},
	CalculatedScriptDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CardPaymentDetails:{
		avsResultCode:"String",
		bin:"String",
		company:"String",
		cvvResultCode:"String",
		expirationMonth:"Int",
		expirationYear:"Int",
		name:"String",
		number:"String",
		wallet:"DigitalWallet"
	},
	Channel:{
		app:"App",
		collectionPublicationsV3:"ResourcePublicationConnection",
		collections:"CollectionConnection",
		handle:"String",
		hasCollection:"Boolean",
		id:"ID",
		name:"String",
		navigationItems:"NavigationItem",
		overviewPath:"URL",
		productPublications:"ProductPublicationConnection",
		productPublicationsV3:"ResourcePublicationConnection",
		products:"ProductConnection",
		supportsFuturePublishing:"Boolean"
	},
	ChannelConnection:{
		edges:"ChannelEdge",
		nodes:"Channel",
		pageInfo:"PageInfo"
	},
	ChannelDefinition:{
		channelName:"String",
		handle:"String",
		id:"ID",
		subChannelName:"String",
		svgIcon:"String"
	},
	ChannelEdge:{
		cursor:"String",
		node:"Channel"
	},
	ChannelInformation:{
		app:"App",
		channelDefinition:"ChannelDefinition",
		channelId:"ID",
		id:"ID"
	},
	CheckoutProfile:{
		createdAt:"DateTime",
		editedAt:"DateTime",
		id:"ID",
		isPublished:"Boolean",
		name:"String",
		updatedAt:"DateTime"
	},
	CheckoutProfileConnection:{
		edges:"CheckoutProfileEdge",
		nodes:"CheckoutProfile",
		pageInfo:"PageInfo"
	},
	CheckoutProfileEdge:{
		cursor:"String",
		node:"CheckoutProfile"
	},
	Collection:{
		availablePublicationCount:"Int",
		description:"String",
		descriptionHtml:"HTML",
		feedback:"ResourceFeedback",
		handle:"String",
		hasProduct:"Boolean",
		id:"ID",
		image:"Image",
		legacyResourceId:"UnsignedInt64",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		products:"ProductConnection",
		productsCount:"Int",
		publicationCount:"Int",
		publications:"CollectionPublicationConnection",
		publishedOnChannel:"Boolean",
		publishedOnCurrentChannel:"Boolean",
		publishedOnCurrentPublication:"Boolean",
		publishedOnPublication:"Boolean",
		resourcePublications:"ResourcePublicationConnection",
		resourcePublicationsV2:"ResourcePublicationV2Connection",
		ruleSet:"CollectionRuleSet",
		seo:"SEO",
		sortOrder:"CollectionSortOrder",
		storefrontId:"StorefrontID",
		templateSuffix:"String",
		title:"String",
		translations:"PublishedTranslation",
		unpublishedChannels:"ChannelConnection",
		unpublishedPublications:"PublicationConnection",
		updatedAt:"DateTime"
	},
	CollectionAddProductsPayload:{
		collection:"Collection",
		userErrors:"UserError"
	},
	CollectionAddProductsV2Payload:{
		job:"Job",
		userErrors:"CollectionAddProductsV2UserError"
	},
	CollectionAddProductsV2UserError:{
		code:"CollectionAddProductsV2UserErrorCode",
		field:"String",
		message:"String"
	},
	CollectionConnection:{
		edges:"CollectionEdge",
		nodes:"Collection",
		pageInfo:"PageInfo"
	},
	CollectionCreatePayload:{
		collection:"Collection",
		userErrors:"UserError"
	},
	CollectionDeletePayload:{
		deletedCollectionId:"ID",
		shop:"Shop",
		userErrors:"UserError"
	},
	CollectionEdge:{
		cursor:"String",
		node:"Collection"
	},
	CollectionPublication:{
		channel:"Channel",
		collection:"Collection",
		isPublished:"Boolean",
		publication:"Publication",
		publishDate:"DateTime"
	},
	CollectionPublicationConnection:{
		edges:"CollectionPublicationEdge",
		nodes:"CollectionPublication",
		pageInfo:"PageInfo"
	},
	CollectionPublicationEdge:{
		cursor:"String",
		node:"CollectionPublication"
	},
	CollectionPublishPayload:{
		collection:"Collection",
		collectionPublications:"CollectionPublication",
		shop:"Shop",
		userErrors:"UserError"
	},
	CollectionRemoveProductsPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	CollectionReorderProductsPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	CollectionRule:{
		column:"CollectionRuleColumn",
		condition:"String",
		conditionObject:"CollectionRuleConditionObject",
		relation:"CollectionRuleRelation"
	},
	CollectionRuleConditionObject:{
		"...on CollectionRuleMetafieldCondition":"CollectionRuleMetafieldCondition",
		"...on CollectionRuleProductCategoryCondition":"CollectionRuleProductCategoryCondition",
		"...on CollectionRuleTextCondition":"CollectionRuleTextCondition"
	},
	CollectionRuleConditions:{
		allowedRelations:"CollectionRuleRelation",
		defaultRelation:"CollectionRuleRelation",
		ruleObject:"CollectionRuleConditionsRuleObject",
		ruleType:"CollectionRuleColumn"
	},
	CollectionRuleConditionsRuleObject:{
		"...on CollectionRuleMetafieldCondition":"CollectionRuleMetafieldCondition"
	},
	CollectionRuleMetafieldCondition:{
		metafieldDefinition:"MetafieldDefinition"
	},
	CollectionRuleProductCategoryCondition:{
		value:"ProductTaxonomyNode"
	},
	CollectionRuleSet:{
		appliedDisjunctively:"Boolean",
		rules:"CollectionRule"
	},
	CollectionRuleTextCondition:{
		value:"String"
	},
	CollectionUnpublishPayload:{
		collection:"Collection",
		shop:"Shop",
		userErrors:"UserError"
	},
	CollectionUpdatePayload:{
		collection:"Collection",
		job:"Job",
		userErrors:"UserError"
	},
	CommentEvent:{
		appTitle:"String",
		attachments:"CommentEventAttachment",
		attributeToApp:"Boolean",
		attributeToUser:"Boolean",
		author:"StaffMember",
		canDelete:"Boolean",
		canEdit:"Boolean",
		createdAt:"DateTime",
		criticalAlert:"Boolean",
		edited:"Boolean",
		embed:"CommentEventEmbed",
		id:"ID",
		message:"FormattedString",
		rawMessage:"String",
		subject:"CommentEventSubject"
	},
	CommentEventAttachment:{
		fileExtension:"String",
		id:"ID",
		image:"Image",
		name:"String",
		size:"Int",
		url:"URL"
	},
	CommentEventEmbed:{
		"...on Customer":"Customer",
		"...on DraftOrder":"DraftOrder",
		"...on Order":"Order",
		"...on Product":"Product",
		"...on ProductVariant":"ProductVariant"
	},
	CommentEventSubject:{
		"...on Company": "Company",
		"...on CompanyLocation": "CompanyLocation",
		"...on Customer": "Customer",
		"...on DraftOrder": "DraftOrder",
		"...on Order": "Order",
		"...on PriceRule": "PriceRule",
		hasTimelineComment:"Boolean",
		id:"ID"
	},
	CompaniesDeletePayload:{
		deletedCompanyIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	Company:{
		contactCount:"Int",
		contactRoles:"CompanyContactRoleConnection",
		contacts:"CompanyContactConnection",
		createdAt:"DateTime",
		customerSince:"DateTime",
		defaultCursor:"String",
		defaultRole:"CompanyContactRole",
		draftOrders:"DraftOrderConnection",
		events:"EventConnection",
		externalId:"String",
		hasTimelineComment:"Boolean",
		id:"ID",
		lifetimeDuration:"String",
		locationCount:"Int",
		locations:"CompanyLocationConnection",
		mainContact:"CompanyContact",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		note:"String",
		orderCount:"Int",
		orders:"OrderConnection",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		totalSpent:"MoneyV2",
		updatedAt:"DateTime"
	},
	CompanyAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		companyName:"String",
		country:"String",
		countryCode:"CountryCode",
		createdAt:"DateTime",
		formattedAddress:"String",
		formattedArea:"String",
		id:"ID",
		phone:"String",
		province:"String",
		recipient:"String",
		updatedAt:"DateTime",
		zip:"String",
		zoneCode:"String"
	},
	CompanyAddressDeletePayload:{
		deletedAddressId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyAssignCustomerAsContactPayload:{
		companyContact:"CompanyContact",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyAssignMainContactPayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyConnection:{
		edges:"CompanyEdge",
		nodes:"Company",
		pageInfo:"PageInfo"
	},
	CompanyContact:{
		company:"Company",
		createdAt:"DateTime",
		customer:"Customer",
		draftOrders:"DraftOrderConnection",
		id:"ID",
		isMainContact:"Boolean",
		lifetimeDuration:"String",
		locale:"String",
		orders:"OrderConnection",
		roleAssignments:"CompanyContactRoleAssignmentConnection",
		title:"String",
		updatedAt:"DateTime"
	},
	CompanyContactAssignRolePayload:{
		companyContactRoleAssignment:"CompanyContactRoleAssignment",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactAssignRolesPayload:{
		roleAssignments:"CompanyContactRoleAssignment",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactConnection:{
		edges:"CompanyContactEdge",
		nodes:"CompanyContact",
		pageInfo:"PageInfo"
	},
	CompanyContactCreatePayload:{
		companyContact:"CompanyContact",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactDeletePayload:{
		deletedCompanyContactId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactEdge:{
		cursor:"String",
		node:"CompanyContact"
	},
	CompanyContactRevokeRolePayload:{
		revokedCompanyContactRoleAssignmentId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactRevokeRolesPayload:{
		revokedRoleAssignmentIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactRole:{
		id:"ID",
		name:"String",
		note:"String"
	},
	CompanyContactRoleAssignment:{
		company:"Company",
		companyContact:"CompanyContact",
		companyLocation:"CompanyLocation",
		createdAt:"DateTime",
		id:"ID",
		role:"CompanyContactRole",
		updatedAt:"DateTime"
	},
	CompanyContactRoleAssignmentConnection:{
		edges:"CompanyContactRoleAssignmentEdge",
		nodes:"CompanyContactRoleAssignment",
		pageInfo:"PageInfo"
	},
	CompanyContactRoleAssignmentEdge:{
		cursor:"String",
		node:"CompanyContactRoleAssignment"
	},
	CompanyContactRoleConnection:{
		edges:"CompanyContactRoleEdge",
		nodes:"CompanyContactRole",
		pageInfo:"PageInfo"
	},
	CompanyContactRoleEdge:{
		cursor:"String",
		node:"CompanyContactRole"
	},
	CompanyContactUpdatePayload:{
		companyContact:"CompanyContact",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactsDeletePayload:{
		deletedCompanyContactIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyCreatePayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyDeletePayload:{
		deletedCompanyId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyEdge:{
		cursor:"String",
		node:"Company"
	},
	CompanyLocation:{
		billingAddress:"CompanyAddress",
		buyerExperienceConfiguration:"BuyerExperienceConfiguration",
		company:"Company",
		createdAt:"DateTime",
		currency:"CurrencyCode",
		defaultCursor:"String",
		draftOrders:"DraftOrderConnection",
		events:"EventConnection",
		externalId:"String",
		hasTimelineComment:"Boolean",
		id:"ID",
		locale:"String",
		market:"Market",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		note:"String",
		orderCount:"Int",
		orders:"OrderConnection",
		phone:"String",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		roleAssignments:"CompanyContactRoleAssignmentConnection",
		shippingAddress:"CompanyAddress",
		taxExemptions:"TaxExemption",
		taxRegistrationId:"String",
		totalSpent:"MoneyV2",
		updatedAt:"DateTime"
	},
	CompanyLocationAssignAddressPayload:{
		addresses:"CompanyAddress",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationAssignRolesPayload:{
		roleAssignments:"CompanyContactRoleAssignment",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationAssignTaxExemptionsPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationConnection:{
		edges:"CompanyLocationEdge",
		nodes:"CompanyLocation",
		pageInfo:"PageInfo"
	},
	CompanyLocationCreatePayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationCreateTaxRegistrationPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationDeletePayload:{
		deletedCompanyLocationId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationEdge:{
		cursor:"String",
		node:"CompanyLocation"
	},
	CompanyLocationRevokeRolesPayload:{
		revokedRoleAssignmentIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationRevokeTaxExemptionsPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationRevokeTaxRegistrationPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationUpdatePayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationsDeletePayload:{
		deletedCompanyLocationIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyRevokeMainContactPayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyUpdatePayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	CountriesInShippingZones:{
		countryCodes:"CountryCode",
		includeRestOfWorld:"Boolean"
	},
	CountryHarmonizedSystemCode:{
		countryCode:"CountryCode",
		harmonizedSystemCode:"String"
	},
	CountryHarmonizedSystemCodeConnection:{
		edges:"CountryHarmonizedSystemCodeEdge",
		nodes:"CountryHarmonizedSystemCode",
		pageInfo:"PageInfo"
	},
	CountryHarmonizedSystemCodeEdge:{
		cursor:"String",
		node:"CountryHarmonizedSystemCode"
	},
	CurrencyFormats:{
		moneyFormat:"FormattedString",
		moneyInEmailsFormat:"String",
		moneyWithCurrencyFormat:"FormattedString",
		moneyWithCurrencyInEmailsFormat:"String"
	},
	CurrencySetting:{
		currencyCode:"CurrencyCode",
		currencyName:"String",
		enabled:"Boolean",
		rateUpdatedAt:"DateTime"
	},
	CurrencySettingConnection:{
		edges:"CurrencySettingEdge",
		nodes:"CurrencySetting",
		pageInfo:"PageInfo"
	},
	CurrencySettingEdge:{
		cursor:"String",
		node:"CurrencySetting"
	},
	Customer:{
		acceptsMarketing:"Boolean",
		acceptsMarketingUpdatedAt:"DateTime",
		addresses:"MailingAddress",
		amountSpent:"MoneyV2",
		averageOrderAmount:"Money",
		averageOrderAmountV2:"MoneyV2",
		canDelete:"Boolean",
		companyContactProfiles:"CompanyContact",
		createdAt:"DateTime",
		defaultAddress:"MailingAddress",
		displayName:"String",
		email:"String",
		emailMarketingConsent:"CustomerEmailMarketingConsentState",
		events:"EventConnection",
		firstName:"String",
		hasTimelineComment:"Boolean",
		id:"ID",
		image:"Image",
		lastName:"String",
		lastOrder:"Order",
		legacyResourceId:"UnsignedInt64",
		lifetimeDuration:"String",
		locale:"String",
		market:"Market",
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		multipassIdentifier:"String",
		note:"String",
		numberOfOrders:"UnsignedInt64",
		orders:"OrderConnection",
		paymentMethods:"CustomerPaymentMethodConnection",
		phone:"String",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		productSubscriberStatus:"CustomerProductSubscriberStatus",
		smsMarketingConsent:"CustomerSmsMarketingConsentState",
		state:"CustomerState",
		statistics:"CustomerStatistics",
		subscriptionContracts:"SubscriptionContractConnection",
		tags:"String",
		taxExempt:"Boolean",
		taxExemptions:"TaxExemption",
		unsubscribeUrl:"URL",
		updatedAt:"DateTime",
		validEmailAddress:"Boolean",
		verifiedEmail:"Boolean"
	},
	CustomerAddTaxExemptionsPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerConnection:{
		edges:"CustomerEdge",
		nodes:"Customer",
		pageInfo:"PageInfo"
	},
	CustomerCreatePayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerCreditCard:{
		billingAddress:"CustomerCreditCardBillingAddress",
		brand:"String",
		expiresSoon:"Boolean",
		expiryMonth:"Int",
		expiryYear:"Int",
		firstDigits:"String",
		isRevocable:"Boolean",
		lastDigits:"String",
		maskedNumber:"String",
		name:"String",
		source:"String",
		virtualLastDigits:"String"
	},
	CustomerCreditCardBillingAddress:{
		address1:"String",
		city:"String",
		country:"String",
		countryCode:"CountryCode",
		firstName:"String",
		lastName:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	CustomerDeletePayload:{
		deletedCustomerId:"ID",
		shop:"Shop",
		userErrors:"UserError"
	},
	CustomerEdge:{
		cursor:"String",
		node:"Customer"
	},
	CustomerEmailAddress:{
		emailAddress:"String",
		marketingState:"CustomerEmailAddressMarketingState",
		marketingUnsubscribeUrl:"URL",
		openTrackingLevel:"CustomerEmailAddressOpenTrackingLevel",
		openTrackingUrl:"URL"
	},
	CustomerEmailMarketingConsentState:{
		consentUpdatedAt:"DateTime",
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerEmailMarketingState"
	},
	CustomerEmailMarketingConsentUpdatePayload:{
		customer:"Customer",
		userErrors:"CustomerEmailMarketingConsentUpdateUserError"
	},
	CustomerEmailMarketingConsentUpdateUserError:{
		code:"CustomerEmailMarketingConsentUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerGenerateAccountActivationUrlPayload:{
		accountActivationUrl:"URL",
		userErrors:"UserError"
	},
	CustomerJourney:{
		customerOrderIndex:"Int",
		daysToConversion:"Int",
		firstVisit:"CustomerVisit",
		lastVisit:"CustomerVisit",
		moments:"CustomerMoment"
	},
	CustomerJourneySummary:{
		customerOrderIndex:"Int",
		daysToConversion:"Int",
		firstVisit:"CustomerVisit",
		lastVisit:"CustomerVisit",
		moments:"CustomerMomentConnection",
		momentsCount:"Int",
		ready:"Boolean"
	},
	CustomerMoment:{
		"...on CustomerVisit": "CustomerVisit",
		occurredAt:"DateTime"
	},
	CustomerMomentConnection:{
		edges:"CustomerMomentEdge",
		nodes:"CustomerMoment",
		pageInfo:"PageInfo"
	},
	CustomerMomentEdge:{
		cursor:"String",
		node:"CustomerMoment"
	},
	CustomerPaymentInstrument:{
		"...on CustomerCreditCard":"CustomerCreditCard",
		"...on CustomerPaypalBillingAgreement":"CustomerPaypalBillingAgreement",
		"...on CustomerShopPayAgreement":"CustomerShopPayAgreement"
	},
	CustomerPaymentInstrumentBillingAddress:{
		address1:"String",
		city:"String",
		country:"String",
		countryCode:"CountryCode",
		name:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	CustomerPaymentMethod:{
		customer:"Customer",
		id:"ID",
		instrument:"CustomerPaymentInstrument",
		revokedAt:"DateTime",
		revokedReason:"CustomerPaymentMethodRevocationReason",
		subscriptionContracts:"SubscriptionContractConnection"
	},
	CustomerPaymentMethodConnection:{
		edges:"CustomerPaymentMethodEdge",
		nodes:"CustomerPaymentMethod",
		pageInfo:"PageInfo"
	},
	CustomerPaymentMethodCreditCardCreatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"UserError"
	},
	CustomerPaymentMethodCreditCardUpdatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"UserError"
	},
	CustomerPaymentMethodEdge:{
		cursor:"String",
		node:"CustomerPaymentMethod"
	},
	CustomerPaymentMethodGetUpdateUrlPayload:{
		updatePaymentMethodUrl:"URL",
		userErrors:"CustomerPaymentMethodGetUpdateUrlUserError"
	},
	CustomerPaymentMethodGetUpdateUrlUserError:{
		code:"CustomerPaymentMethodGetUpdateUrlUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaymentMethodPaypalBillingAgreementCreatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodUserError"
	},
	CustomerPaymentMethodPaypalBillingAgreementUpdatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodUserError"
	},
	CustomerPaymentMethodRemoteCreatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodRemoteUserError"
	},
	CustomerPaymentMethodRemoteCreditCardCreatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodUserError"
	},
	CustomerPaymentMethodRemoteUserError:{
		code:"CustomerPaymentMethodRemoteUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaymentMethodRevokePayload:{
		revokedCustomerPaymentMethodId:"ID",
		userErrors:"UserError"
	},
	CustomerPaymentMethodSendUpdateEmailPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerPaymentMethodUserError:{
		code:"CustomerPaymentMethodUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaypalBillingAgreement:{
		billingAddress:"CustomerPaymentInstrumentBillingAddress",
		inactive:"Boolean",
		isRevocable:"Boolean",
		paypalAccountEmail:"String"
	},
	CustomerPhoneNumber:{
		marketingState:"CustomerSmsMarketingState",
		phoneNumber:"String"
	},
	CustomerRemoveTaxExemptionsPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerReplaceTaxExemptionsPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerSegmentMember:{
		amountSpent:"MoneyV2",
		defaultAddress:"MailingAddress",
		defaultEmailAddress:"CustomerEmailAddress",
		defaultPhoneNumber:"CustomerPhoneNumber",
		displayName:"String",
		firstName:"String",
		id:"ID",
		lastName:"String",
		lastOrderId:"ID",
		note:"String",
		numberOfOrders:"UnsignedInt64"
	},
	CustomerSegmentMemberConnection:{
		edges:"CustomerSegmentMemberEdge",
		pageInfo:"PageInfo",
		statistics:"SegmentStatistics"
	},
	CustomerSegmentMemberEdge:{
		cursor:"String",
		node:"CustomerSegmentMember"
	},
	CustomerSegmentMembersQuery:{
		currentCount:"Int",
		done:"Boolean",
		id:"ID"
	},
	CustomerSegmentMembersQueryCreatePayload:{
		customerSegmentMembersQuery:"CustomerSegmentMembersQuery",
		userErrors:"CustomerSegmentMembersQueryUserError"
	},
	CustomerSegmentMembersQueryUserError:{
		code:"CustomerSegmentMembersQueryUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerShopPayAgreement:{
		expiresSoon:"Boolean",
		expiryMonth:"Int",
		expiryYear:"Int",
		inactive:"Boolean",
		isRevocable:"Boolean",
		lastDigits:"String",
		maskedNumber:"String",
		name:"String"
	},
	CustomerSmsMarketingConsentError:{
		code:"CustomerSmsMarketingConsentErrorCode",
		field:"String",
		message:"String"
	},
	CustomerSmsMarketingConsentState:{
		consentCollectedFrom:"CustomerConsentCollectedFrom",
		consentUpdatedAt:"DateTime",
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerSmsMarketingState"
	},
	CustomerSmsMarketingConsentUpdatePayload:{
		customer:"Customer",
		userErrors:"CustomerSmsMarketingConsentError"
	},
	CustomerStatistics:{
		predictedSpendTier:"CustomerPredictedSpendTier"
	},
	CustomerUpdateDefaultAddressPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerUpdatePayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerVisit:{
		id:"ID",
		landingPage:"URL",
		landingPageHtml:"HTML",
		marketingEvent:"MarketingEvent",
		occurredAt:"DateTime",
		referralCode:"String",
		referralInfoHtml:"FormattedString",
		referrerUrl:"URL",
		source:"String",
		sourceDescription:"String",
		sourceType:"MarketingTactic",
		utmParameters:"UTMParameters"
	},
	CustomerVisitProductInfo:{
		product:"Product",
		quantity:"Int",
		variant:"ProductVariant"
	},
	CustomerVisitProductInfoConnection:{
		edges:"CustomerVisitProductInfoEdge",
		nodes:"CustomerVisitProductInfo",
		pageInfo:"PageInfo"
	},
	CustomerVisitProductInfoEdge:{
		cursor:"String",
		node:"CustomerVisitProductInfo"
	},
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
	Decimal: `scalar.Decimal` as const,
	DelegateAccessToken:{
		accessScopes:"String",
		accessToken:"String",
		createdAt:"DateTime"
	},
	DelegateAccessTokenCreatePayload:{
		delegateAccessToken:"DelegateAccessToken",
		shop:"Shop",
		userErrors:"DelegateAccessTokenCreateUserError"
	},
	DelegateAccessTokenCreateUserError:{
		code:"DelegateAccessTokenCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	DeletionEvent:{
		occurredAt:"DateTime",
		subjectId:"ID",
		subjectType:"DeletionEventSubjectType"
	},
	DeletionEventConnection:{
		edges:"DeletionEventEdge",
		nodes:"DeletionEvent",
		pageInfo:"PageInfo"
	},
	DeletionEventEdge:{
		cursor:"String",
		node:"DeletionEvent"
	},
	DeliveryAvailableService:{
		countries:"DeliveryCountryCodesOrRestOfWorld",
		name:"String"
	},
	DeliveryCarrierService:{
		availableServicesForCountries:"DeliveryAvailableService",
		formattedName:"String",
		icon:"Image",
		id:"ID",
		name:"String"
	},
	DeliveryCarrierServiceAndLocations:{
		carrierService:"DeliveryCarrierService",
		locations:"Location"
	},
	DeliveryCondition:{
		conditionCriteria:"DeliveryConditionCriteria",
		field:"DeliveryConditionField",
		id:"ID",
		operator:"DeliveryConditionOperator"
	},
	DeliveryConditionCriteria:{
		"...on MoneyV2":"MoneyV2",
		"...on Weight":"Weight"
	},
	DeliveryCountry:{
		code:"DeliveryCountryCodeOrRestOfWorld",
		id:"ID",
		name:"String",
		provinces:"DeliveryProvince",
		translatedName:"String"
	},
	DeliveryCountryAndZone:{
		country:"DeliveryCountry",
		zone:"String"
	},
	DeliveryCountryCodeOrRestOfWorld:{
		countryCode:"CountryCode",
		restOfWorld:"Boolean"
	},
	DeliveryCountryCodesOrRestOfWorld:{
		countryCodes:"CountryCode",
		restOfWorld:"Boolean"
	},
	DeliveryLegacyModeBlocked:{
		blocked:"Boolean",
		reasons:"DeliveryLegacyModeBlockedReason"
	},
	DeliveryLocalPickupSettings:{
		instructions:"String",
		pickupTime:"DeliveryLocalPickupTime"
	},
	DeliveryLocationGroup:{
		id:"ID",
		locations:"LocationConnection",
		locationsCount:"Int"
	},
	DeliveryLocationGroupZone:{
		methodDefinitionCounts:"DeliveryMethodDefinitionCounts",
		methodDefinitions:"DeliveryMethodDefinitionConnection",
		zone:"DeliveryZone"
	},
	DeliveryLocationGroupZoneConnection:{
		edges:"DeliveryLocationGroupZoneEdge",
		nodes:"DeliveryLocationGroupZone",
		pageInfo:"PageInfo"
	},
	DeliveryLocationGroupZoneEdge:{
		cursor:"String",
		node:"DeliveryLocationGroupZone"
	},
	DeliveryLocationLocalPickupSettingsError:{
		code:"DeliveryLocationLocalPickupSettingsErrorCode",
		field:"String",
		message:"String"
	},
	DeliveryMethod:{
		id:"ID",
		maxDeliveryDateTime:"DateTime",
		methodType:"DeliveryMethodType",
		minDeliveryDateTime:"DateTime"
	},
	DeliveryMethodDefinition:{
		active:"Boolean",
		description:"String",
		id:"ID",
		methodConditions:"DeliveryCondition",
		name:"String",
		rateProvider:"DeliveryRateProvider"
	},
	DeliveryMethodDefinitionConnection:{
		edges:"DeliveryMethodDefinitionEdge",
		nodes:"DeliveryMethodDefinition",
		pageInfo:"PageInfo"
	},
	DeliveryMethodDefinitionCounts:{
		participantDefinitionsCount:"Int",
		rateDefinitionsCount:"Int"
	},
	DeliveryMethodDefinitionEdge:{
		cursor:"String",
		node:"DeliveryMethodDefinition"
	},
	DeliveryParticipant:{
		adaptToNewServicesFlag:"Boolean",
		carrierService:"DeliveryCarrierService",
		fixedFee:"MoneyV2",
		id:"ID",
		participantServices:"DeliveryParticipantService",
		percentageOfRateFee:"Float"
	},
	DeliveryParticipantService:{
		active:"Boolean",
		name:"String"
	},
	DeliveryProductVariantsCount:{
		capped:"Boolean",
		count:"Int"
	},
	DeliveryProfile:{
		activeMethodDefinitionsCount:"Int",
		default:"Boolean",
		id:"ID",
		legacyMode:"Boolean",
		locationsWithoutRatesCount:"Int",
		name:"String",
		originLocationCount:"Int",
		productVariantsCount:"Int",
		productVariantsCountV2:"DeliveryProductVariantsCount",
		profileItems:"DeliveryProfileItemConnection",
		profileLocationGroups:"DeliveryProfileLocationGroup",
		sellingPlanGroups:"SellingPlanGroupConnection",
		unassignedLocations:"Location",
		unassignedLocationsPaginated:"LocationConnection",
		zoneCountryCount:"Int"
	},
	DeliveryProfileConnection:{
		edges:"DeliveryProfileEdge",
		nodes:"DeliveryProfile",
		pageInfo:"PageInfo"
	},
	DeliveryProfileEdge:{
		cursor:"String",
		node:"DeliveryProfile"
	},
	DeliveryProfileItem:{
		id:"ID",
		product:"Product",
		variants:"ProductVariantConnection"
	},
	DeliveryProfileItemConnection:{
		edges:"DeliveryProfileItemEdge",
		nodes:"DeliveryProfileItem",
		pageInfo:"PageInfo"
	},
	DeliveryProfileItemEdge:{
		cursor:"String",
		node:"DeliveryProfileItem"
	},
	DeliveryProfileLocationGroup:{
		countriesInAnyZone:"DeliveryCountryAndZone",
		locationGroup:"DeliveryLocationGroup",
		locationGroupZones:"DeliveryLocationGroupZoneConnection"
	},
	DeliveryProvince:{
		code:"String",
		id:"ID",
		name:"String",
		translatedName:"String"
	},
	DeliveryRateDefinition:{
		id:"ID",
		price:"MoneyV2"
	},
	DeliveryRateProvider:{
		"...on DeliveryParticipant":"DeliveryParticipant",
		"...on DeliveryRateDefinition":"DeliveryRateDefinition"
	},
	DeliverySetting:{
		legacyModeBlocked:"DeliveryLegacyModeBlocked",
		legacyModeProfiles:"Boolean"
	},
	DeliverySettingUpdatePayload:{
		setting:"DeliverySetting",
		userErrors:"UserError"
	},
	DeliveryShippingOriginAssignPayload:{
		userErrors:"UserError"
	},
	DeliveryZone:{
		countries:"DeliveryCountry",
		id:"ID",
		name:"String"
	},
	Discount:{
		"...on DiscountAutomaticApp":"DiscountAutomaticApp",
		"...on DiscountAutomaticBasic":"DiscountAutomaticBasic",
		"...on DiscountAutomaticBxgy":"DiscountAutomaticBxgy",
		"...on DiscountCodeApp":"DiscountCodeApp",
		"...on DiscountCodeBasic":"DiscountCodeBasic",
		"...on DiscountCodeBxgy":"DiscountCodeBxgy",
		"...on DiscountCodeFreeShipping":"DiscountCodeFreeShipping"
	},
	DiscountAllocation:{
		allocatedAmount:"MoneyV2",
		allocatedAmountSet:"MoneyBag",
		discountApplication:"DiscountApplication"
	},
	DiscountAmount:{
		amount:"MoneyV2",
		appliesOnEachItem:"Boolean"
	},
	DiscountApplication:{
		"...on AutomaticDiscountApplication": "AutomaticDiscountApplication",
		"...on DiscountCodeApplication": "DiscountCodeApplication",
		"...on ManualDiscountApplication": "ManualDiscountApplication",
		"...on ScriptDiscountApplication": "ScriptDiscountApplication",
		allocationMethod:"DiscountApplicationAllocationMethod",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	DiscountApplicationConnection:{
		edges:"DiscountApplicationEdge",
		nodes:"DiscountApplication",
		pageInfo:"PageInfo"
	},
	DiscountApplicationEdge:{
		cursor:"String",
		node:"DiscountApplication"
	},
	DiscountAutomatic:{
		"...on DiscountAutomaticApp":"DiscountAutomaticApp",
		"...on DiscountAutomaticBasic":"DiscountAutomaticBasic",
		"...on DiscountAutomaticBxgy":"DiscountAutomaticBxgy"
	},
	DiscountAutomaticActivatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticApp:{
		appDiscountType:"AppDiscountType",
		asyncUsageCount:"Int",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		discountClass:"DiscountClass",
		discountId:"ID",
		endsAt:"DateTime",
		errorHistory:"FunctionsErrorHistory",
		startsAt:"DateTime",
		status:"DiscountStatus",
		title:"String",
		updatedAt:"DateTime"
	},
	DiscountAutomaticAppCreatePayload:{
		automaticAppDiscount:"DiscountAutomaticApp",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticAppUpdatePayload:{
		automaticAppDiscount:"DiscountAutomaticApp",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBasic:{
		asyncUsageCount:"Int",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerGets:"DiscountCustomerGets",
		discountClass:"MerchandiseDiscountClass",
		endsAt:"DateTime",
		minimumRequirement:"DiscountMinimumRequirement",
		shortSummary:"String",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		usageCount:"Int"
	},
	DiscountAutomaticBasicCreatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBasicUpdatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBulkDeletePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBxgy:{
		asyncUsageCount:"Int",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerBuys:"DiscountCustomerBuys",
		customerGets:"DiscountCustomerGets",
		discountClass:"MerchandiseDiscountClass",
		endsAt:"DateTime",
		events:"EventConnection",
		id:"ID",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		usageCount:"Int",
		usesPerOrderLimit:"Int"
	},
	DiscountAutomaticBxgyCreatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBxgyUpdatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticConnection:{
		edges:"DiscountAutomaticEdge",
		nodes:"DiscountAutomatic",
		pageInfo:"PageInfo"
	},
	DiscountAutomaticDeactivatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticDeletePayload:{
		deletedAutomaticDiscountId:"ID",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticEdge:{
		cursor:"String",
		node:"DiscountAutomatic"
	},
	DiscountAutomaticNode:{
		automaticDiscount:"DiscountAutomatic",
		events:"EventConnection",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection"
	},
	DiscountAutomaticNodeConnection:{
		edges:"DiscountAutomaticNodeEdge",
		nodes:"DiscountAutomaticNode",
		pageInfo:"PageInfo"
	},
	DiscountAutomaticNodeEdge:{
		cursor:"String",
		node:"DiscountAutomaticNode"
	},
	DiscountCode:{
		"...on DiscountCodeApp":"DiscountCodeApp",
		"...on DiscountCodeBasic":"DiscountCodeBasic",
		"...on DiscountCodeBxgy":"DiscountCodeBxgy",
		"...on DiscountCodeFreeShipping":"DiscountCodeFreeShipping"
	},
	DiscountCodeActivatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeApp:{
		appDiscountType:"AppDiscountType",
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codeCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerSelection:"DiscountCustomerSelection",
		discountClass:"DiscountClass",
		discountId:"ID",
		endsAt:"DateTime",
		errorHistory:"FunctionsErrorHistory",
		hasTimelineComment:"Boolean",
		recurringCycleLimit:"Int",
		shareableUrls:"DiscountShareableUrl",
		startsAt:"DateTime",
		status:"DiscountStatus",
		title:"String",
		totalSales:"MoneyV2",
		usageLimit:"Int"
	},
	DiscountCodeAppCreatePayload:{
		codeAppDiscount:"DiscountCodeApp",
		userErrors:"DiscountUserError"
	},
	DiscountCodeAppUpdatePayload:{
		codeAppDiscount:"DiscountCodeApp",
		userErrors:"DiscountUserError"
	},
	DiscountCodeApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		code:"String",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	DiscountCodeBasic:{
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codeCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerGets:"DiscountCustomerGets",
		customerSelection:"DiscountCustomerSelection",
		discountClass:"MerchandiseDiscountClass",
		endsAt:"DateTime",
		hasTimelineComment:"Boolean",
		minimumRequirement:"DiscountMinimumRequirement",
		recurringCycleLimit:"Int",
		shareableUrls:"DiscountShareableUrl",
		shortSummary:"String",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		totalSales:"MoneyV2",
		usageLimit:"Int"
	},
	DiscountCodeBasicCreatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBasicUpdatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBulkActivatePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBulkDeactivatePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBulkDeletePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBxgy:{
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codeCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerBuys:"DiscountCustomerBuys",
		customerGets:"DiscountCustomerGets",
		customerSelection:"DiscountCustomerSelection",
		discountClass:"MerchandiseDiscountClass",
		endsAt:"DateTime",
		hasTimelineComment:"Boolean",
		shareableUrls:"DiscountShareableUrl",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		totalSales:"MoneyV2",
		usageLimit:"Int",
		usesPerOrderLimit:"Int"
	},
	DiscountCodeBxgyCreatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBxgyUpdatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeDeactivatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeDeletePayload:{
		deletedCodeDiscountId:"ID",
		userErrors:"DiscountUserError"
	},
	DiscountCodeFreeShipping:{
		appliesOnOneTimePurchase:"Boolean",
		appliesOnSubscription:"Boolean",
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codeCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerSelection:"DiscountCustomerSelection",
		destinationSelection:"DiscountShippingDestinationSelection",
		discountClass:"ShippingDiscountClass",
		endsAt:"DateTime",
		hasTimelineComment:"Boolean",
		maximumShippingPrice:"MoneyV2",
		minimumRequirement:"DiscountMinimumRequirement",
		recurringCycleLimit:"Int",
		shareableUrls:"DiscountShareableUrl",
		shortSummary:"String",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		totalSales:"MoneyV2",
		usageLimit:"Int"
	},
	DiscountCodeFreeShippingCreatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeFreeShippingUpdatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeNode:{
		codeDiscount:"DiscountCode",
		events:"EventConnection",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection"
	},
	DiscountCodeNodeConnection:{
		edges:"DiscountCodeNodeEdge",
		nodes:"DiscountCodeNode",
		pageInfo:"PageInfo"
	},
	DiscountCodeNodeEdge:{
		cursor:"String",
		node:"DiscountCodeNode"
	},
	DiscountCodeRedeemCodeBulkDeletePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCollections:{
		collections:"CollectionConnection"
	},
	DiscountCombinesWith:{
		orderDiscounts:"Boolean",
		productDiscounts:"Boolean",
		shippingDiscounts:"Boolean"
	},
	DiscountCountries:{
		countries:"CountryCode",
		includeRestOfWorld:"Boolean"
	},
	DiscountCountryAll:{
		allCountries:"Boolean"
	},
	DiscountCustomerAll:{
		allCustomers:"Boolean"
	},
	DiscountCustomerBuys:{
		items:"DiscountItems",
		value:"DiscountCustomerBuysValue"
	},
	DiscountCustomerBuysValue:{
		"...on DiscountPurchaseAmount":"DiscountPurchaseAmount",
		"...on DiscountQuantity":"DiscountQuantity"
	},
	DiscountCustomerGets:{
		appliesOnOneTimePurchase:"Boolean",
		appliesOnSubscription:"Boolean",
		items:"DiscountItems",
		value:"DiscountCustomerGetsValue"
	},
	DiscountCustomerGetsValue:{
		"...on DiscountAmount":"DiscountAmount",
		"...on DiscountOnQuantity":"DiscountOnQuantity",
		"...on DiscountPercentage":"DiscountPercentage"
	},
	DiscountCustomerSegments:{
		segments:"Segment"
	},
	DiscountCustomerSelection:{
		"...on DiscountCustomerAll":"DiscountCustomerAll",
		"...on DiscountCustomerSegments":"DiscountCustomerSegments",
		"...on DiscountCustomers":"DiscountCustomers"
	},
	DiscountCustomers:{
		customers:"Customer"
	},
	DiscountEffect:{
		"...on DiscountPercentage":"DiscountPercentage"
	},
	DiscountItems:{
		"...on AllDiscountItems":"AllDiscountItems",
		"...on DiscountCollections":"DiscountCollections",
		"...on DiscountProducts":"DiscountProducts"
	},
	DiscountMinimumQuantity:{
		greaterThanOrEqualToQuantity:"UnsignedInt64"
	},
	DiscountMinimumRequirement:{
		"...on DiscountMinimumQuantity":"DiscountMinimumQuantity",
		"...on DiscountMinimumSubtotal":"DiscountMinimumSubtotal"
	},
	DiscountMinimumSubtotal:{
		greaterThanOrEqualToSubtotal:"MoneyV2"
	},
	DiscountNode:{
		discount:"Discount",
		events:"EventConnection",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection"
	},
	DiscountNodeConnection:{
		edges:"DiscountNodeEdge",
		nodes:"DiscountNode",
		pageInfo:"PageInfo"
	},
	DiscountNodeEdge:{
		cursor:"String",
		node:"DiscountNode"
	},
	DiscountOnQuantity:{
		effect:"DiscountEffect",
		quantity:"DiscountQuantity"
	},
	DiscountPercentage:{
		percentage:"Float"
	},
	DiscountProducts:{
		productVariants:"ProductVariantConnection",
		products:"ProductConnection"
	},
	DiscountPurchaseAmount:{
		amount:"Decimal"
	},
	DiscountQuantity:{
		quantity:"UnsignedInt64"
	},
	DiscountRedeemCode:{
		asyncUsageCount:"Int",
		code:"String",
		createdBy:"App",
		id:"ID"
	},
	DiscountRedeemCodeBulkAddPayload:{
		bulkCreation:"DiscountRedeemCodeBulkCreation",
		userErrors:"DiscountUserError"
	},
	DiscountRedeemCodeBulkCreation:{
		codes:"DiscountRedeemCodeBulkCreationCodeConnection",
		codesCount:"Int",
		createdAt:"DateTime",
		discountCode:"DiscountCodeNode",
		done:"Boolean",
		failedCount:"Int",
		id:"ID",
		importedCount:"Int"
	},
	DiscountRedeemCodeBulkCreationCode:{
		code:"String",
		discountRedeemCode:"DiscountRedeemCode",
		errors:"DiscountUserError"
	},
	DiscountRedeemCodeBulkCreationCodeConnection:{
		edges:"DiscountRedeemCodeBulkCreationCodeEdge",
		nodes:"DiscountRedeemCodeBulkCreationCode",
		pageInfo:"PageInfo"
	},
	DiscountRedeemCodeBulkCreationCodeEdge:{
		cursor:"String",
		node:"DiscountRedeemCodeBulkCreationCode"
	},
	DiscountRedeemCodeConnection:{
		edges:"DiscountRedeemCodeEdge",
		nodes:"DiscountRedeemCode",
		pageInfo:"PageInfo"
	},
	DiscountRedeemCodeEdge:{
		cursor:"String",
		node:"DiscountRedeemCode"
	},
	DiscountShareableUrl:{
		targetItemImage:"Image",
		targetType:"DiscountShareableUrlTargetType",
		title:"String",
		url:"URL"
	},
	DiscountShippingDestinationSelection:{
		"...on DiscountCountries":"DiscountCountries",
		"...on DiscountCountryAll":"DiscountCountryAll"
	},
	DiscountUserError:{
		code:"DiscountErrorCode",
		extraInfo:"String",
		field:"String",
		message:"String"
	},
	DisplayableError:{
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
		field:"String",
		message:"String"
	},
	DisputeEvidenceUpdatePayload:{
		disputeEvidence:"ShopifyPaymentsDisputeEvidence",
		userErrors:"DisputeEvidenceUpdateUserError"
	},
	DisputeEvidenceUpdateUserError:{
		code:"DisputeEvidenceUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	Domain:{
		host:"String",
		id:"ID",
		localization:"DomainLocalization",
		marketWebPresence:"MarketWebPresence",
		sslEnabled:"Boolean",
		url:"URL"
	},
	DomainLocalization:{
		alternateLocales:"String",
		country:"String",
		defaultLocale:"String"
	},
	DraftOrder:{
		appliedDiscount:"DraftOrderAppliedDiscount",
		billingAddress:"MailingAddress",
		billingAddressMatchesShippingAddress:"Boolean",
		completedAt:"DateTime",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		defaultCursor:"String",
		email:"String",
		events:"EventConnection",
		hasTimelineComment:"Boolean",
		id:"ID",
		invoiceEmailTemplateSubject:"String",
		invoiceSentAt:"DateTime",
		invoiceUrl:"URL",
		legacyResourceId:"UnsignedInt64",
		lineItems:"DraftOrderLineItemConnection",
		lineItemsSubtotalPrice:"MoneyBag",
		localizationExtensions:"LocalizationExtensionConnection",
		marketName:"String",
		marketRegionCountryCode:"CountryCode",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		name:"String",
		note2:"String",
		order:"Order",
		paymentTerms:"PaymentTerms",
		phone:"String",
		presentmentCurrencyCode:"CurrencyCode",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		purchasingEntity:"PurchasingEntity",
		ready:"Boolean",
		reserveInventoryUntil:"DateTime",
		shippingAddress:"MailingAddress",
		shippingLine:"ShippingLine",
		status:"DraftOrderStatus",
		subtotalPrice:"Money",
		subtotalPriceSet:"MoneyBag",
		tags:"String",
		taxExempt:"Boolean",
		taxLines:"TaxLine",
		taxesIncluded:"Boolean",
		totalDiscountsSet:"MoneyBag",
		totalLineItemsPriceSet:"MoneyBag",
		totalPrice:"Money",
		totalPriceSet:"MoneyBag",
		totalShippingPrice:"Money",
		totalShippingPriceSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag",
		totalWeight:"UnsignedInt64",
		updatedAt:"DateTime",
		visibleToCustomer:"Boolean"
	},
	DraftOrderAppliedDiscount:{
		amount:"Money",
		amountSet:"MoneyBag",
		amountV2:"MoneyV2",
		description:"String",
		title:"String",
		value:"Float",
		valueType:"DraftOrderAppliedDiscountType"
	},
	DraftOrderBulkAddTagsPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	DraftOrderBulkDeletePayload:{
		job:"Job",
		userErrors:"UserError"
	},
	DraftOrderBulkRemoveTagsPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	DraftOrderCalculatePayload:{
		calculatedDraftOrder:"CalculatedDraftOrder",
		userErrors:"UserError"
	},
	DraftOrderCompletePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderConnection:{
		edges:"DraftOrderEdge",
		nodes:"DraftOrder",
		pageInfo:"PageInfo"
	},
	DraftOrderCreateFromOrderPayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderCreateMerchantCheckoutPayload:{
		userErrors:"UserError"
	},
	DraftOrderCreatePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderDeletePayload:{
		deletedId:"ID",
		userErrors:"UserError"
	},
	DraftOrderDuplicatePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderEdge:{
		cursor:"String",
		node:"DraftOrder"
	},
	DraftOrderInvoicePreviewPayload:{
		previewHtml:"HTML",
		previewSubject:"HTML",
		userErrors:"UserError"
	},
	DraftOrderInvoiceSendPayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderLineItem:{
		appliedDiscount:"DraftOrderAppliedDiscount",
		custom:"Boolean",
		customAttributes:"Attribute",
		customAttributesV2:"TypedAttribute",
		discountedTotal:"Money",
		discountedTotalSet:"MoneyBag",
		discountedUnitPrice:"Money",
		discountedUnitPriceSet:"MoneyBag",
		fulfillmentService:"FulfillmentService",
		grams:"Int",
		id:"ID",
		image:"Image",
		isGiftCard:"Boolean",
		name:"String",
		originalTotal:"Money",
		originalTotalSet:"MoneyBag",
		originalUnitPrice:"Money",
		originalUnitPriceSet:"MoneyBag",
		product:"Product",
		quantity:"Int",
		requiresShipping:"Boolean",
		sku:"String",
		taxLines:"TaxLine",
		taxable:"Boolean",
		title:"String",
		totalDiscount:"Money",
		totalDiscountSet:"MoneyBag",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String",
		weight:"Weight"
	},
	DraftOrderLineItemConnection:{
		edges:"DraftOrderLineItemEdge",
		nodes:"DraftOrderLineItem",
		pageInfo:"PageInfo"
	},
	DraftOrderLineItemEdge:{
		cursor:"String",
		node:"DraftOrderLineItem"
	},
	DraftOrderTag:{
		handle:"String",
		id:"ID",
		title:"String"
	},
	DraftOrderUpdatePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	Duty:{
		countryCodeOfOrigin:"CountryCode",
		harmonizedSystemCode:"String",
		id:"ID",
		price:"MoneyBag",
		taxLines:"TaxLine"
	},
	DutySale:{
		actionType:"SaleActionType",
		duty:"Duty",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	EditableProperty:{
		locked:"Boolean",
		reason:"FormattedString"
	},
	ErrorPosition:{
		character:"Int",
		line:"Int"
	},
	ErrorsWebPixelUserError:{
		code:"ErrorsWebPixelUserErrorCode",
		field:"String",
		message:"String"
	},
	Event:{
		"...on BasicEvent": "BasicEvent",
		"...on CommentEvent": "CommentEvent",
		appTitle:"String",
		attributeToApp:"Boolean",
		attributeToUser:"Boolean",
		createdAt:"DateTime",
		criticalAlert:"Boolean",
		id:"ID",
		message:"FormattedString"
	},
	EventBridgeWebhookSubscriptionCreatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	EventBridgeWebhookSubscriptionUpdatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	EventConnection:{
		edges:"EventEdge",
		nodes:"Event",
		pageInfo:"PageInfo"
	},
	EventEdge:{
		cursor:"String",
		node:"Event"
	},
	ExternalVideo:{
		alt:"String",
		embedUrl:"URL",
		embeddedUrl:"URL",
		host:"MediaHost",
		id:"ID",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		originUrl:"URL",
		preview:"MediaPreviewImage",
		status:"MediaStatus"
	},
	FailedRequirement:{
		action:"NavigationItem",
		message:"String"
	},
	File:{
		"...on GenericFile": "GenericFile",
		"...on MediaImage": "MediaImage",
		"...on Video": "Video",
		alt:"String",
		createdAt:"DateTime",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		preview:"MediaPreviewImage"
	},
	FileConnection:{
		edges:"FileEdge",
		nodes:"File",
		pageInfo:"PageInfo"
	},
	FileCreatePayload:{
		files:"File",
		userErrors:"FilesUserError"
	},
	FileDeletePayload:{
		deletedFileIds:"ID",
		userErrors:"FilesUserError"
	},
	FileEdge:{
		cursor:"String",
		node:"File"
	},
	FileError:{
		code:"FileErrorCode",
		details:"String",
		message:"String"
	},
	FileUpdatePayload:{
		files:"File",
		userErrors:"FilesUserError"
	},
	FilesUserError:{
		code:"FilesErrorCode",
		field:"String",
		message:"String"
	},
	FilterOption:{
		label:"String",
		value:"String"
	},
	FlowTriggerReceivePayload:{
		userErrors:"UserError"
	},
	FormattedString: `scalar.FormattedString` as const,
	Fulfillment:{
		createdAt:"DateTime",
		deliveredAt:"DateTime",
		displayStatus:"FulfillmentDisplayStatus",
		estimatedDeliveryAt:"DateTime",
		events:"FulfillmentEventConnection",
		fulfillmentLineItems:"FulfillmentLineItemConnection",
		fulfillmentOrders:"FulfillmentOrderConnection",
		id:"ID",
		inTransitAt:"DateTime",
		legacyResourceId:"UnsignedInt64",
		location:"Location",
		name:"String",
		order:"Order",
		originAddress:"FulfillmentOriginAddress",
		requiresShipping:"Boolean",
		service:"FulfillmentService",
		status:"FulfillmentStatus",
		totalQuantity:"Int",
		trackingInfo:"FulfillmentTrackingInfo",
		updatedAt:"DateTime"
	},
	FulfillmentCancelPayload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FulfillmentConnection:{
		edges:"FulfillmentEdge",
		nodes:"Fulfillment",
		pageInfo:"PageInfo"
	},
	FulfillmentCreateV2Payload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FulfillmentEdge:{
		cursor:"String",
		node:"Fulfillment"
	},
	FulfillmentEvent:{
		address1:"String",
		city:"String",
		country:"String",
		estimatedDeliveryAt:"DateTime",
		happenedAt:"DateTime",
		id:"ID",
		latitude:"Float",
		longitude:"Float",
		message:"String",
		province:"String",
		status:"FulfillmentEventStatus",
		zip:"String"
	},
	FulfillmentEventConnection:{
		edges:"FulfillmentEventEdge",
		nodes:"FulfillmentEvent",
		pageInfo:"PageInfo"
	},
	FulfillmentEventCreatePayload:{
		fulfillmentEvent:"FulfillmentEvent",
		userErrors:"UserError"
	},
	FulfillmentEventEdge:{
		cursor:"String",
		node:"FulfillmentEvent"
	},
	FulfillmentHold:{
		reason:"FulfillmentHoldReason",
		reasonNotes:"String"
	},
	FulfillmentLineItem:{
		discountedTotal:"Money",
		discountedTotalSet:"MoneyBag",
		id:"ID",
		lineItem:"LineItem",
		originalTotal:"Money",
		originalTotalSet:"MoneyBag",
		quantity:"Int"
	},
	FulfillmentLineItemConnection:{
		edges:"FulfillmentLineItemEdge",
		nodes:"FulfillmentLineItem",
		pageInfo:"PageInfo"
	},
	FulfillmentLineItemEdge:{
		cursor:"String",
		node:"FulfillmentLineItem"
	},
	FulfillmentOrder:{
		assignedLocation:"FulfillmentOrderAssignedLocation",
		createdAt:"DateTime",
		deliveryMethod:"DeliveryMethod",
		destination:"FulfillmentOrderDestination",
		fulfillAt:"DateTime",
		fulfillBy:"DateTime",
		fulfillmentHolds:"FulfillmentHold",
		fulfillments:"FulfillmentConnection",
		id:"ID",
		internationalDuties:"FulfillmentOrderInternationalDuties",
		lineItems:"FulfillmentOrderLineItemConnection",
		locationsForMove:"FulfillmentOrderLocationForMoveConnection",
		merchantRequests:"FulfillmentOrderMerchantRequestConnection",
		order:"Order",
		requestStatus:"FulfillmentOrderRequestStatus",
		status:"FulfillmentOrderStatus",
		supportedActions:"FulfillmentOrderSupportedAction",
		updatedAt:"DateTime"
	},
	FulfillmentOrderAcceptCancellationRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderAcceptFulfillmentRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderAssignedLocation:{
		address1:"String",
		address2:"String",
		city:"String",
		countryCode:"CountryCode",
		location:"Location",
		name:"String",
		phone:"String",
		province:"String",
		zip:"String"
	},
	FulfillmentOrderCancelPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		replacementFulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderClosePayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderConnection:{
		edges:"FulfillmentOrderEdge",
		nodes:"FulfillmentOrder",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderDestination:{
		address1:"String",
		address2:"String",
		city:"String",
		company:"String",
		countryCode:"CountryCode",
		email:"String",
		firstName:"String",
		id:"ID",
		lastName:"String",
		phone:"String",
		province:"String",
		zip:"String"
	},
	FulfillmentOrderEdge:{
		cursor:"String",
		node:"FulfillmentOrder"
	},
	FulfillmentOrderHoldPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"FulfillmentOrderHoldUserError"
	},
	FulfillmentOrderHoldUserError:{
		code:"FulfillmentOrderHoldUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderInternationalDuties:{
		incoterm:"String"
	},
	FulfillmentOrderLineItem:{
		id:"ID",
		image:"Image",
		lineItem:"LineItem",
		originalUnitPriceSet:"MoneyBag",
		productTitle:"String",
		remainingQuantity:"Int",
		requiresShipping:"Boolean",
		sku:"String",
		totalQuantity:"Int",
		variantTitle:"String",
		vendor:"String",
		warnings:"FulfillmentOrderLineItemWarning",
		weight:"Weight"
	},
	FulfillmentOrderLineItemConnection:{
		edges:"FulfillmentOrderLineItemEdge",
		nodes:"FulfillmentOrderLineItem",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderLineItemEdge:{
		cursor:"String",
		node:"FulfillmentOrderLineItem"
	},
	FulfillmentOrderLineItemWarning:{
		description:"String",
		title:"String"
	},
	FulfillmentOrderLineItemsPreparedForPickupPayload:{
		userErrors:"FulfillmentOrderLineItemsPreparedForPickupUserError"
	},
	FulfillmentOrderLineItemsPreparedForPickupUserError:{
		code:"FulfillmentOrderLineItemsPreparedForPickupUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderLocationForMove:{
		location:"Location",
		message:"String",
		movable:"Boolean"
	},
	FulfillmentOrderLocationForMoveConnection:{
		edges:"FulfillmentOrderLocationForMoveEdge",
		nodes:"FulfillmentOrderLocationForMove",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderLocationForMoveEdge:{
		cursor:"String",
		node:"FulfillmentOrderLocationForMove"
	},
	FulfillmentOrderMerchantRequest:{
		fulfillmentOrder:"FulfillmentOrder",
		id:"ID",
		kind:"FulfillmentOrderMerchantRequestKind",
		message:"String",
		requestOptions:"JSON",
		responseData:"JSON",
		sentAt:"DateTime"
	},
	FulfillmentOrderMerchantRequestConnection:{
		edges:"FulfillmentOrderMerchantRequestEdge",
		nodes:"FulfillmentOrderMerchantRequest",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderMerchantRequestEdge:{
		cursor:"String",
		node:"FulfillmentOrderMerchantRequest"
	},
	FulfillmentOrderMovePayload:{
		movedFulfillmentOrder:"FulfillmentOrder",
		originalFulfillmentOrder:"FulfillmentOrder",
		remainingFulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderOpenPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderRejectCancellationRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderRejectFulfillmentRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderReleaseHoldPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"FulfillmentOrderReleaseHoldUserError"
	},
	FulfillmentOrderReleaseHoldUserError:{
		code:"FulfillmentOrderReleaseHoldUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderReschedulePayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"FulfillmentOrderRescheduleUserError"
	},
	FulfillmentOrderRescheduleUserError:{
		code:"FulfillmentOrderRescheduleUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderSubmitCancellationRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderSubmitFulfillmentRequestPayload:{
		originalFulfillmentOrder:"FulfillmentOrder",
		submittedFulfillmentOrder:"FulfillmentOrder",
		unsubmittedFulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderSupportedAction:{
		action:"FulfillmentOrderAction",
		externalUrl:"URL"
	},
	FulfillmentOrdersReleaseHoldsPayload:{
		job:"Job",
		userErrors:"FulfillmentOrdersReleaseHoldsUserError"
	},
	FulfillmentOrdersReleaseHoldsUserError:{
		code:"FulfillmentOrdersReleaseHoldsUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrdersSetFulfillmentDeadlinePayload:{
		success:"Boolean",
		userErrors:"FulfillmentOrdersSetFulfillmentDeadlineUserError"
	},
	FulfillmentOrdersSetFulfillmentDeadlineUserError:{
		code:"FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOriginAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		countryCode:"String",
		provinceCode:"String",
		zip:"String"
	},
	FulfillmentService:{
		callbackUrl:"URL",
		fulfillmentOrdersOptIn:"Boolean",
		handle:"String",
		id:"ID",
		inventoryManagement:"Boolean",
		location:"Location",
		permitsSkuSharing:"Boolean",
		productBased:"Boolean",
		serviceName:"String",
		shippingMethods:"ShippingMethod",
		type:"FulfillmentServiceType"
	},
	FulfillmentServiceCreatePayload:{
		fulfillmentService:"FulfillmentService",
		userErrors:"UserError"
	},
	FulfillmentServiceDeletePayload:{
		deletedId:"ID",
		userErrors:"UserError"
	},
	FulfillmentServiceUpdatePayload:{
		fulfillmentService:"FulfillmentService",
		userErrors:"UserError"
	},
	FulfillmentTrackingInfo:{
		company:"String",
		number:"String",
		url:"URL"
	},
	FulfillmentTrackingInfoUpdateV2Payload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FunctionsAppBridge:{
		createPath:"String",
		detailsPath:"String"
	},
	FunctionsErrorHistory:{
		errorsFirstOccurredAt:"DateTime",
		firstOccurredAt:"DateTime",
		hasBeenSharedSinceLastError:"Boolean",
		hasSharedRecentErrors:"Boolean"
	},
	GenericFile:{
		alt:"String",
		createdAt:"DateTime",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		id:"ID",
		mimeType:"String",
		originalFileSize:"Int",
		preview:"MediaPreviewImage",
		url:"URL"
	},
	GiftCard:{
		balance:"MoneyV2",
		createdAt:"DateTime",
		customer:"Customer",
		disabledAt:"DateTime",
		enabled:"Boolean",
		expiresOn:"Date",
		id:"ID",
		initialValue:"MoneyV2",
		lastCharacters:"String",
		maskedCode:"String",
		note:"String",
		order:"Order"
	},
	GiftCardConnection:{
		edges:"GiftCardEdge",
		nodes:"GiftCard",
		pageInfo:"PageInfo"
	},
	GiftCardCreatePayload:{
		giftCard:"GiftCard",
		giftCardCode:"String",
		userErrors:"GiftCardUserError"
	},
	GiftCardDisablePayload:{
		giftCard:"GiftCard",
		userErrors:"UserError"
	},
	GiftCardEdge:{
		cursor:"String",
		node:"GiftCard"
	},
	GiftCardSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineItem:"LineItem",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	GiftCardUpdatePayload:{
		giftCard:"GiftCard",
		userErrors:"UserError"
	},
	GiftCardUserError:{
		code:"GiftCardErrorCode",
		field:"String",
		message:"String"
	},
	HTML: `scalar.HTML` as const,
	HasEvents:{
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
		events:"EventConnection"
	},
	HasLocalizationExtensions:{
		"...on DraftOrder": "DraftOrder",
		"...on Order": "Order",
		localizationExtensions:"LocalizationExtensionConnection"
	},
	HasMetafieldDefinitions:{
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
		metafieldDefinitions:"MetafieldDefinitionConnection"
	},
	HasMetafields:{
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
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection"
	},
	HasPublishedTranslations:{
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
		translations:"PublishedTranslation"
	},
	Image:{
		altText:"String",
		height:"Int",
		id:"ID",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		originalSrc:"URL",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		src:"URL",
		transformedSrc:"URL",
		url:"URL",
		width:"Int"
	},
	ImageConnection:{
		edges:"ImageEdge",
		nodes:"Image",
		pageInfo:"PageInfo"
	},
	ImageEdge:{
		cursor:"String",
		node:"Image"
	},
	ImageUploadParameter:{
		name:"String",
		value:"String"
	},
	InventoryActivatePayload:{
		inventoryLevel:"InventoryLevel",
		userErrors:"UserError"
	},
	InventoryAdjustQuantitiesPayload:{
		inventoryAdjustmentGroup:"InventoryAdjustmentGroup",
		userErrors:"InventoryAdjustQuantitiesUserError"
	},
	InventoryAdjustQuantitiesUserError:{
		code:"InventoryAdjustQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryAdjustQuantityPayload:{
		inventoryLevel:"InventoryLevel",
		userErrors:"UserError"
	},
	InventoryAdjustmentGroup:{
		app:"App",
		changes:"InventoryChange",
		createdAt:"DateTime",
		id:"ID",
		reason:"String",
		referenceDocumentUri:"String",
		staffMember:"StaffMember"
	},
	InventoryBulkAdjustQuantityAtLocationPayload:{
		inventoryLevels:"InventoryLevel",
		userErrors:"UserError"
	},
	InventoryBulkToggleActivationPayload:{
		inventoryItem:"InventoryItem",
		inventoryLevels:"InventoryLevel",
		userErrors:"InventoryBulkToggleActivationUserError"
	},
	InventoryBulkToggleActivationUserError:{
		code:"InventoryBulkToggleActivationUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryChange:{
		delta:"Int",
		item:"InventoryItem",
		ledgerDocumentUri:"String",
		location:"Location",
		name:"String",
		quantityAfterChange:"Int"
	},
	InventoryDeactivatePayload:{
		userErrors:"UserError"
	},
	InventoryItem:{
		countryCodeOfOrigin:"CountryCode",
		countryHarmonizedSystemCodes:"CountryHarmonizedSystemCodeConnection",
		createdAt:"DateTime",
		duplicateSkuCount:"Int",
		harmonizedSystemCode:"String",
		id:"ID",
		inventoryHistoryUrl:"URL",
		inventoryLevel:"InventoryLevel",
		inventoryLevels:"InventoryLevelConnection",
		legacyResourceId:"UnsignedInt64",
		locationsCount:"Int",
		provinceCodeOfOrigin:"String",
		requiresShipping:"Boolean",
		sku:"String",
		tracked:"Boolean",
		trackedEditable:"EditableProperty",
		unitCost:"MoneyV2",
		updatedAt:"DateTime",
		variant:"ProductVariant"
	},
	InventoryItemConnection:{
		edges:"InventoryItemEdge",
		nodes:"InventoryItem",
		pageInfo:"PageInfo"
	},
	InventoryItemEdge:{
		cursor:"String",
		node:"InventoryItem"
	},
	InventoryItemUpdatePayload:{
		inventoryItem:"InventoryItem",
		userErrors:"UserError"
	},
	InventoryLevel:{
		available:"Int",
		canDeactivate:"Boolean",
		createdAt:"DateTime",
		deactivationAlert:"String",
		deactivationAlertHtml:"FormattedString",
		id:"ID",
		incoming:"Int",
		item:"InventoryItem",
		location:"Location",
		quantities:"InventoryQuantity",
		updatedAt:"DateTime"
	},
	InventoryLevelConnection:{
		edges:"InventoryLevelEdge",
		nodes:"InventoryLevel",
		pageInfo:"PageInfo"
	},
	InventoryLevelEdge:{
		cursor:"String",
		node:"InventoryLevel"
	},
	InventoryMoveQuantitiesPayload:{
		inventoryAdjustmentGroup:"InventoryAdjustmentGroup",
		userErrors:"InventoryMoveQuantitiesUserError"
	},
	InventoryMoveQuantitiesUserError:{
		code:"InventoryMoveQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryProperties:{
		quantityNames:"InventoryQuantityName"
	},
	InventoryQuantity:{
		name:"String",
		quantity:"Int",
		updatedAt:"DateTime"
	},
	InventoryQuantityName:{
		belongsTo:"String",
		comprises:"String",
		displayName:"String",
		isInUse:"Boolean",
		name:"String"
	},
	InventorySetOnHandQuantitiesPayload:{
		inventoryAdjustmentGroup:"InventoryAdjustmentGroup",
		userErrors:"InventorySetOnHandQuantitiesUserError"
	},
	InventorySetOnHandQuantitiesUserError:{
		code:"InventorySetOnHandQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	JSON: `scalar.JSON` as const,
	Job:{
		done:"Boolean",
		id:"ID",
		query:"QueryRoot"
	},
	JobResult:{
		"...on CustomerSegmentMembersQuery": "CustomerSegmentMembersQuery",
		done:"Boolean",
		id:"ID"
	},
	LegacyInteroperability:{
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
		legacyResourceId:"UnsignedInt64"
	},
	LimitedPendingOrderCount:{
		atMax:"Boolean",
		count:"Int"
	},
	LineItem:{
		canRestock:"Boolean",
		contract:"SubscriptionContract",
		currentQuantity:"Int",
		customAttributes:"Attribute",
		discountAllocations:"DiscountAllocation",
		discountedTotal:"Money",
		discountedTotalSet:"MoneyBag",
		discountedUnitPrice:"Money",
		discountedUnitPriceSet:"MoneyBag",
		duties:"Duty",
		fulfillableQuantity:"Int",
		fulfillmentService:"FulfillmentService",
		fulfillmentStatus:"String",
		id:"ID",
		image:"Image",
		merchantEditable:"Boolean",
		name:"String",
		nonFulfillableQuantity:"Int",
		originalTotal:"Money",
		originalTotalSet:"MoneyBag",
		originalUnitPrice:"Money",
		originalUnitPriceSet:"MoneyBag",
		product:"Product",
		quantity:"Int",
		refundableQuantity:"Int",
		requiresShipping:"Boolean",
		restockable:"Boolean",
		sellingPlan:"LineItemSellingPlan",
		sku:"String",
		staffMember:"StaffMember",
		taxLines:"TaxLine",
		taxable:"Boolean",
		title:"String",
		totalDiscount:"Money",
		totalDiscountSet:"MoneyBag",
		unfulfilledDiscountedTotal:"Money",
		unfulfilledDiscountedTotalSet:"MoneyBag",
		unfulfilledOriginalTotal:"Money",
		unfulfilledOriginalTotalSet:"MoneyBag",
		unfulfilledQuantity:"Int",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String"
	},
	LineItemConnection:{
		edges:"LineItemEdge",
		nodes:"LineItem",
		pageInfo:"PageInfo"
	},
	LineItemEdge:{
		cursor:"String",
		node:"LineItem"
	},
	LineItemMutable:{
		canRestock:"Boolean",
		customAttributes:"Attribute",
		discountAllocations:"DiscountAllocation",
		discountedTotal:"Money",
		discountedTotalSet:"MoneyBag",
		discountedUnitPrice:"Money",
		discountedUnitPriceSet:"MoneyBag",
		fulfillableQuantity:"Int",
		fulfillmentService:"FulfillmentService",
		fulfillmentStatus:"String",
		id:"ID",
		image:"Image",
		merchantEditable:"Boolean",
		name:"String",
		nonFulfillableQuantity:"Int",
		originalTotal:"Money",
		originalTotalSet:"MoneyBag",
		originalUnitPrice:"Money",
		originalUnitPriceSet:"MoneyBag",
		product:"Product",
		quantity:"Int",
		refundableQuantity:"Int",
		requiresShipping:"Boolean",
		restockable:"Boolean",
		sku:"String",
		staffMember:"StaffMember",
		taxLines:"TaxLine",
		taxable:"Boolean",
		title:"String",
		totalDiscount:"Money",
		totalDiscountSet:"MoneyBag",
		unfulfilledDiscountedTotal:"Money",
		unfulfilledDiscountedTotalSet:"MoneyBag",
		unfulfilledOriginalTotal:"Money",
		unfulfilledOriginalTotalSet:"MoneyBag",
		unfulfilledQuantity:"Int",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String"
	},
	LineItemMutableConnection:{
		edges:"LineItemMutableEdge",
		nodes:"LineItemMutable",
		pageInfo:"PageInfo"
	},
	LineItemMutableEdge:{
		cursor:"String",
		node:"LineItemMutable"
	},
	LineItemSellingPlan:{
		name:"String",
		sellingPlanId:"ID"
	},
	Link:{
		label:"String",
		translations:"PublishedTranslation",
		url:"URL"
	},
	Locale:{
		isoCode:"String",
		name:"String"
	},
	LocalizationExtension:{
		countryCode:"CountryCode",
		key:"LocalizationExtensionKey",
		purpose:"LocalizationExtensionPurpose",
		title:"String",
		value:"String"
	},
	LocalizationExtensionConnection:{
		edges:"LocalizationExtensionEdge",
		nodes:"LocalizationExtension",
		pageInfo:"PageInfo"
	},
	LocalizationExtensionEdge:{
		cursor:"String",
		node:"LocalizationExtension"
	},
	Location:{
		activatable:"Boolean",
		address:"LocationAddress",
		addressVerified:"Boolean",
		deactivatable:"Boolean",
		deactivatedAt:"String",
		deletable:"Boolean",
		fulfillmentService:"FulfillmentService",
		fulfillsOnlineOrders:"Boolean",
		hasActiveInventory:"Boolean",
		hasUnfulfilledOrders:"Boolean",
		id:"ID",
		inventoryLevel:"InventoryLevel",
		inventoryLevels:"InventoryLevelConnection",
		isActive:"Boolean",
		isPrimary:"Boolean",
		legacyResourceId:"UnsignedInt64",
		localPickupSettingsV2:"DeliveryLocalPickupSettings",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		shipsInventory:"Boolean",
		suggestedAddresses:"LocationSuggestedAddress"
	},
	LocationActivatePayload:{
		location:"Location",
		locationActivateUserErrors:"LocationActivateUserError"
	},
	LocationActivateUserError:{
		code:"LocationActivateUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationAddPayload:{
		location:"Location",
		userErrors:"LocationAddUserError"
	},
	LocationAddUserError:{
		code:"LocationAddUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		country:"String",
		countryCode:"String",
		formatted:"String",
		latitude:"Float",
		longitude:"Float",
		phone:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	LocationConnection:{
		edges:"LocationEdge",
		nodes:"Location",
		pageInfo:"PageInfo"
	},
	LocationDeactivatePayload:{
		location:"Location",
		locationDeactivateUserErrors:"LocationDeactivateUserError"
	},
	LocationDeactivateUserError:{
		code:"LocationDeactivateUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationDeletePayload:{
		deletedLocationId:"ID",
		locationDeleteUserErrors:"LocationDeleteUserError"
	},
	LocationDeleteUserError:{
		code:"LocationDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationEdge:{
		cursor:"String",
		node:"Location"
	},
	LocationEditPayload:{
		location:"Location",
		userErrors:"LocationEditUserError"
	},
	LocationEditUserError:{
		code:"LocationEditUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationLocalPickupDisablePayload:{
		locationId:"ID",
		userErrors:"DeliveryLocationLocalPickupSettingsError"
	},
	LocationLocalPickupEnablePayload:{
		localPickupSettings:"DeliveryLocalPickupSettings",
		userErrors:"DeliveryLocationLocalPickupSettingsError"
	},
	LocationSuggestedAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		country:"String",
		countryCode:"CountryCode",
		formatted:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	MailingAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		company:"String",
		coordinatesValidated:"Boolean",
		country:"String",
		countryCode:"String",
		countryCodeV2:"CountryCode",
		firstName:"String",
		formatted:"String",
		formattedArea:"String",
		id:"ID",
		lastName:"String",
		latitude:"Float",
		longitude:"Float",
		name:"String",
		phone:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	ManualDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		description:"String",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		title:"String",
		value:"PricingValue"
	},
	Market:{
		currencySettings:"MarketCurrencySettings",
		enabled:"Boolean",
		id:"ID",
		name:"String",
		priceList:"PriceList",
		primary:"Boolean",
		regions:"MarketRegionConnection",
		webPresence:"MarketWebPresence"
	},
	MarketConnection:{
		edges:"MarketEdge",
		nodes:"Market",
		pageInfo:"PageInfo"
	},
	MarketCreatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketCurrencySettings:{
		baseCurrency:"CurrencySetting",
		localCurrencies:"Boolean"
	},
	MarketCurrencySettingsUpdatePayload:{
		market:"Market",
		userErrors:"MarketCurrencySettingsUserError"
	},
	MarketCurrencySettingsUserError:{
		code:"MarketCurrencySettingsUserErrorCode",
		field:"String",
		message:"String"
	},
	MarketDeletePayload:{
		deletedId:"ID",
		userErrors:"MarketUserError"
	},
	MarketEdge:{
		cursor:"String",
		node:"Market"
	},
	MarketLocalizableContent:{
		digest:"String",
		key:"String",
		value:"String"
	},
	MarketLocalizableResource:{
		marketLocalizableContent:"MarketLocalizableContent",
		marketLocalizations:"MarketLocalization",
		resourceId:"ID"
	},
	MarketLocalizableResourceConnection:{
		edges:"MarketLocalizableResourceEdge",
		nodes:"MarketLocalizableResource",
		pageInfo:"PageInfo"
	},
	MarketLocalizableResourceEdge:{
		cursor:"String",
		node:"MarketLocalizableResource"
	},
	MarketLocalization:{
		key:"String",
		market:"Market",
		outdated:"Boolean",
		updatedAt:"DateTime",
		value:"String"
	},
	MarketLocalizationsRegisterPayload:{
		marketLocalizations:"MarketLocalization",
		userErrors:"TranslationUserError"
	},
	MarketLocalizationsRemovePayload:{
		marketLocalizations:"MarketLocalization",
		userErrors:"TranslationUserError"
	},
	MarketRegion:{
		"...on MarketRegionCountry": "MarketRegionCountry",
		id:"ID",
		name:"String"
	},
	MarketRegionConnection:{
		edges:"MarketRegionEdge",
		nodes:"MarketRegion",
		pageInfo:"PageInfo"
	},
	MarketRegionCountry:{
		code:"CountryCode",
		id:"ID",
		name:"String"
	},
	MarketRegionDeletePayload:{
		deletedId:"ID",
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketRegionEdge:{
		cursor:"String",
		node:"MarketRegion"
	},
	MarketRegionsCreatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketUpdatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketUserError:{
		code:"MarketUserErrorCode",
		field:"String",
		message:"String"
	},
	MarketWebPresence:{
		alternateLocales:"String",
		defaultLocale:"String",
		domain:"Domain",
		id:"ID",
		market:"Market",
		rootUrls:"MarketWebPresenceRootUrl",
		subfolderSuffix:"String"
	},
	MarketWebPresenceCreatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketWebPresenceDeletePayload:{
		deletedId:"ID",
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketWebPresenceRootUrl:{
		locale:"String",
		url:"URL"
	},
	MarketWebPresenceUpdatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketingActivity:{
		activityListUrl:"URL",
		adSpend:"MoneyV2",
		app:"App",
		appErrors:"MarketingActivityExtensionAppErrors",
		budget:"MarketingBudget",
		createdAt:"DateTime",
		formData:"String",
		id:"ID",
		inMainWorkflowVersion:"Boolean",
		marketingChannel:"MarketingChannel",
		marketingEvent:"MarketingEvent",
		sourceAndMedium:"String",
		status:"MarketingActivityStatus",
		statusBadgeType:"MarketingActivityStatusBadgeType",
		statusBadgeTypeV2:"BadgeType",
		statusLabel:"String",
		statusTransitionedAt:"DateTime",
		tactic:"MarketingTactic",
		targetStatus:"MarketingActivityStatus",
		title:"String",
		updatedAt:"DateTime",
		utmParameters:"UTMParameters"
	},
	MarketingActivityConnection:{
		edges:"MarketingActivityEdge",
		nodes:"MarketingActivity",
		pageInfo:"PageInfo"
	},
	MarketingActivityCreateExternalPayload:{
		marketingActivity:"MarketingActivity",
		userErrors:"MarketingActivityUserError"
	},
	MarketingActivityCreatePayload:{
		marketingActivity:"MarketingActivity",
		redirectPath:"String",
		userErrors:"UserError"
	},
	MarketingActivityEdge:{
		cursor:"String",
		node:"MarketingActivity"
	},
	MarketingActivityExtensionAppErrors:{
		code:"MarketingActivityExtensionAppErrorCode",
		userErrors:"UserError"
	},
	MarketingActivityUpdateExternalPayload:{
		marketingActivity:"MarketingActivity",
		userErrors:"MarketingActivityUserError"
	},
	MarketingActivityUpdatePayload:{
		marketingActivity:"MarketingActivity",
		redirectPath:"String",
		userErrors:"UserError"
	},
	MarketingActivityUserError:{
		code:"MarketingActivityUserErrorCode",
		field:"String",
		message:"String"
	},
	MarketingBudget:{
		budgetType:"MarketingBudgetBudgetType",
		total:"MoneyV2"
	},
	MarketingEngagement:{
		adSpend:"MoneyV2",
		clicksCount:"Int",
		commentsCount:"Int",
		complaintsCount:"Int",
		failsCount:"Int",
		favoritesCount:"Int",
		fetchedAt:"DateTime",
		impressionsCount:"Int",
		isCumulative:"Boolean",
		marketingActivity:"MarketingActivity",
		occurredOn:"Date",
		sendsCount:"Int",
		sharesCount:"Int",
		uniqueClicksCount:"Int",
		uniqueViewsCount:"Int",
		unsubscribesCount:"Int",
		utcOffset:"UtcOffset",
		viewsCount:"Int"
	},
	MarketingEngagementCreatePayload:{
		marketingEngagement:"MarketingEngagement",
		userErrors:"UserError"
	},
	MarketingEvent:{
		app:"App",
		channel:"MarketingChannel",
		description:"String",
		endedAt:"DateTime",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		manageUrl:"URL",
		previewUrl:"URL",
		remoteId:"String",
		scheduledToEndAt:"DateTime",
		sourceAndMedium:"String",
		startedAt:"DateTime",
		targetTypeDisplayText:"String",
		type:"MarketingTactic",
		utmCampaign:"String",
		utmMedium:"String",
		utmSource:"String"
	},
	MarketingEventConnection:{
		edges:"MarketingEventEdge",
		nodes:"MarketingEvent",
		pageInfo:"PageInfo"
	},
	MarketingEventEdge:{
		cursor:"String",
		node:"MarketingEvent"
	},
	Media:{
		"...on ExternalVideo": "ExternalVideo",
		"...on MediaImage": "MediaImage",
		"...on Model3d": "Model3d",
		"...on Video": "Video",
		alt:"String",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		preview:"MediaPreviewImage",
		status:"MediaStatus"
	},
	MediaConnection:{
		edges:"MediaEdge",
		nodes:"Media",
		pageInfo:"PageInfo"
	},
	MediaEdge:{
		cursor:"String",
		node:"Media"
	},
	MediaError:{
		code:"MediaErrorCode",
		details:"String",
		message:"String"
	},
	MediaImage:{
		alt:"String",
		createdAt:"DateTime",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		id:"ID",
		image:"Image",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		mimeType:"String",
		originalSource:"MediaImageOriginalSource",
		preview:"MediaPreviewImage",
		status:"MediaStatus"
	},
	MediaImageOriginalSource:{
		fileSize:"Int"
	},
	MediaPreviewImage:{
		image:"Image",
		status:"MediaPreviewImageStatus"
	},
	MediaUserError:{
		code:"MediaUserErrorCode",
		field:"String",
		message:"String"
	},
	MediaWarning:{
		code:"MediaWarningCode",
		message:"String"
	},
	MerchantApprovalSignals:{
		identityVerified:"Boolean",
		verifiedByShopify:"Boolean"
	},
	Metafield:{
		createdAt:"DateTime",
		definition:"MetafieldDefinition",
		description:"String",
		id:"ID",
		key:"String",
		legacyResourceId:"UnsignedInt64",
		namespace:"String",
		owner:"HasMetafields",
		ownerType:"MetafieldOwnerType",
		reference:"MetafieldReference",
		references:"MetafieldReferenceConnection",
		type:"String",
		updatedAt:"DateTime",
		value:"String"
	},
	MetafieldAccess:{
		admin:"MetafieldAdminAccess"
	},
	MetafieldConnection:{
		edges:"MetafieldEdge",
		nodes:"Metafield",
		pageInfo:"PageInfo"
	},
	MetafieldDefinition:{
		access:"MetafieldAccess",
		description:"String",
		id:"ID",
		key:"String",
		metafields:"MetafieldConnection",
		metafieldsCount:"Int",
		name:"String",
		namespace:"String",
		ownerType:"MetafieldOwnerType",
		pinnedPosition:"Int",
		standardTemplate:"StandardMetafieldDefinitionTemplate",
		type:"MetafieldDefinitionType",
		useAsCollectionCondition:"Boolean",
		validationStatus:"MetafieldDefinitionValidationStatus",
		validations:"MetafieldDefinitionValidation",
		visibleToStorefrontApi:"Boolean"
	},
	MetafieldDefinitionConnection:{
		edges:"MetafieldDefinitionEdge",
		nodes:"MetafieldDefinition",
		pageInfo:"PageInfo"
	},
	MetafieldDefinitionCreatePayload:{
		createdDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionCreateUserError"
	},
	MetafieldDefinitionCreateUserError:{
		code:"MetafieldDefinitionCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionDeletePayload:{
		deletedDefinitionId:"ID",
		userErrors:"MetafieldDefinitionDeleteUserError"
	},
	MetafieldDefinitionDeleteUserError:{
		code:"MetafieldDefinitionDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionEdge:{
		cursor:"String",
		node:"MetafieldDefinition"
	},
	MetafieldDefinitionPinPayload:{
		pinnedDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionPinUserError"
	},
	MetafieldDefinitionPinUserError:{
		code:"MetafieldDefinitionPinUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionSupportedValidation:{
		name:"String",
		type:"String"
	},
	MetafieldDefinitionType:{
		category:"String",
		name:"String",
		supportedValidations:"MetafieldDefinitionSupportedValidation",
		supportsDefinitionMigrations:"Boolean",
		valueType:"MetafieldValueType"
	},
	MetafieldDefinitionUnpinPayload:{
		unpinnedDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionUnpinUserError"
	},
	MetafieldDefinitionUnpinUserError:{
		code:"MetafieldDefinitionUnpinUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionUpdatePayload:{
		updatedDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionUpdateUserError"
	},
	MetafieldDefinitionUpdateUserError:{
		code:"MetafieldDefinitionUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionValidation:{
		name:"String",
		type:"String",
		value:"String"
	},
	MetafieldDeletePayload:{
		deletedId:"ID",
		userErrors:"UserError"
	},
	MetafieldEdge:{
		cursor:"String",
		node:"Metafield"
	},
	MetafieldReference:{
		"...on Collection":"Collection",
		"...on GenericFile":"GenericFile",
		"...on MediaImage":"MediaImage",
		"...on Metaobject":"Metaobject",
		"...on OnlineStorePage":"OnlineStorePage",
		"...on Product":"Product",
		"...on ProductVariant":"ProductVariant",
		"...on Video":"Video"
	},
	MetafieldReferenceConnection:{
		edges:"MetafieldReferenceEdge",
		nodes:"MetafieldReference",
		pageInfo:"PageInfo"
	},
	MetafieldReferenceEdge:{
		cursor:"String",
		node:"MetafieldReference"
	},
	MetafieldReferencer:{
		"...on AppInstallation":"AppInstallation",
		"...on Collection":"Collection",
		"...on Customer":"Customer",
		"...on DiscountAutomaticNode":"DiscountAutomaticNode",
		"...on DiscountCodeNode":"DiscountCodeNode",
		"...on DiscountNode":"DiscountNode",
		"...on DraftOrder":"DraftOrder",
		"...on FulfillmentOrder":"FulfillmentOrder",
		"...on Location":"Location",
		"...on Metaobject":"Metaobject",
		"...on OnlineStoreArticle":"OnlineStoreArticle",
		"...on OnlineStoreBlog":"OnlineStoreBlog",
		"...on OnlineStorePage":"OnlineStorePage",
		"...on Order":"Order",
		"...on Product":"Product",
		"...on ProductVariant":"ProductVariant",
		"...on Shop":"Shop"
	},
	MetafieldRelation:{
		key:"String",
		name:"String",
		namespace:"String",
		referencer:"MetafieldReferencer",
		target:"MetafieldReference"
	},
	MetafieldRelationConnection:{
		edges:"MetafieldRelationEdge",
		nodes:"MetafieldRelation",
		pageInfo:"PageInfo"
	},
	MetafieldRelationEdge:{
		cursor:"String",
		node:"MetafieldRelation"
	},
	MetafieldStorefrontVisibility:{
		createdAt:"DateTime",
		id:"ID",
		key:"String",
		legacyResourceId:"UnsignedInt64",
		namespace:"String",
		ownerType:"MetafieldOwnerType",
		updatedAt:"DateTime"
	},
	MetafieldStorefrontVisibilityConnection:{
		edges:"MetafieldStorefrontVisibilityEdge",
		nodes:"MetafieldStorefrontVisibility",
		pageInfo:"PageInfo"
	},
	MetafieldStorefrontVisibilityCreatePayload:{
		metafieldStorefrontVisibility:"MetafieldStorefrontVisibility",
		userErrors:"UserError"
	},
	MetafieldStorefrontVisibilityDeletePayload:{
		deletedMetafieldStorefrontVisibilityId:"ID",
		userErrors:"UserError"
	},
	MetafieldStorefrontVisibilityEdge:{
		cursor:"String",
		node:"MetafieldStorefrontVisibility"
	},
	MetafieldsSetPayload:{
		metafields:"Metafield",
		userErrors:"MetafieldsSetUserError"
	},
	MetafieldsSetUserError:{
		code:"MetafieldsSetUserErrorCode",
		elementIndex:"Int",
		field:"String",
		message:"String"
	},
	Metaobject:{
		capabilities:"MetaobjectCapabilityData",
		definition:"MetaobjectDefinition",
		displayName:"String",
		field:"MetaobjectField",
		fields:"MetaobjectField",
		handle:"String",
		id:"ID",
		referencedBy:"MetafieldRelationConnection",
		staffMember:"StaffMember",
		type:"String",
		updatedAt:"DateTime"
	},
	MetaobjectAccess:{
		admin:"MetaobjectAdminAccess",
		storefront:"MetaobjectStorefrontAccess"
	},
	MetaobjectBulkDeletePayload:{
		job:"Job",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectCapabilities:{
		publishable:"MetaobjectCapabilitiesPublishable"
	},
	MetaobjectCapabilitiesPublishable:{
		enabled:"Boolean"
	},
	MetaobjectCapabilityData:{
		publishable:"MetaobjectCapabilityDataPublishable"
	},
	MetaobjectCapabilityDataPublishable:{
		status:"MetaobjectStatus"
	},
	MetaobjectConnection:{
		edges:"MetaobjectEdge",
		nodes:"Metaobject",
		pageInfo:"PageInfo"
	},
	MetaobjectCreatePayload:{
		metaobject:"Metaobject",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDefinition:{
		access:"MetaobjectAccess",
		capabilities:"MetaobjectCapabilities",
		description:"String",
		displayNameKey:"String",
		fieldDefinitions:"MetaobjectFieldDefinition",
		id:"ID",
		metaobjects:"MetaobjectConnection",
		metaobjectsCount:"Int",
		name:"String",
		type:"String"
	},
	MetaobjectDefinitionConnection:{
		edges:"MetaobjectDefinitionEdge",
		nodes:"MetaobjectDefinition",
		pageInfo:"PageInfo"
	},
	MetaobjectDefinitionCreatePayload:{
		metaobjectDefinition:"MetaobjectDefinition",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDefinitionDeletePayload:{
		deletedId:"ID",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDefinitionEdge:{
		cursor:"String",
		node:"MetaobjectDefinition"
	},
	MetaobjectDefinitionUpdatePayload:{
		metaobjectDefinition:"MetaobjectDefinition",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDeletePayload:{
		deletedId:"ID",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectEdge:{
		cursor:"String",
		node:"Metaobject"
	},
	MetaobjectField:{
		definition:"MetaobjectFieldDefinition",
		key:"String",
		reference:"MetafieldReference",
		references:"MetafieldReferenceConnection",
		type:"String",
		value:"String"
	},
	MetaobjectFieldDefinition:{
		description:"String",
		key:"String",
		name:"String",
		required:"Boolean",
		type:"MetafieldDefinitionType",
		validations:"MetafieldDefinitionValidation"
	},
	MetaobjectUpdatePayload:{
		metaobject:"Metaobject",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectUpsertPayload:{
		metaobject:"Metaobject",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectUserError:{
		code:"MetaobjectUserErrorCode",
		elementIndex:"Int",
		elementKey:"String",
		field:"String",
		message:"String"
	},
	Model3d:{
		alt:"String",
		boundingBox:"Model3dBoundingBox",
		filename:"String",
		id:"ID",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		originalSource:"Model3dSource",
		preview:"MediaPreviewImage",
		sources:"Model3dSource",
		status:"MediaStatus"
	},
	Model3dBoundingBox:{
		size:"Vector3"
	},
	Model3dSource:{
		filesize:"Int",
		format:"String",
		mimeType:"String",
		url:"String"
	},
	Money: `scalar.Money` as const,
	MoneyBag:{
		presentmentMoney:"MoneyV2",
		shopMoney:"MoneyV2"
	},
	MoneyV2:{
		amount:"Decimal",
		currencyCode:"CurrencyCode"
	},
	Mutation:{
		abandonmentEmailStateUpdate:"AbandonmentEmailStateUpdatePayload",
		appCreditCreate:"AppCreditCreatePayload",
		appPurchaseOneTimeCreate:"AppPurchaseOneTimeCreatePayload",
		appRevenueAttributionRecordCreate:"AppRevenueAttributionRecordCreatePayload",
		appRevenueAttributionRecordDelete:"AppRevenueAttributionRecordDeletePayload",
		appSubscriptionCancel:"AppSubscriptionCancelPayload",
		appSubscriptionCreate:"AppSubscriptionCreatePayload",
		appSubscriptionLineItemUpdate:"AppSubscriptionLineItemUpdatePayload",
		appSubscriptionTrialExtend:"AppSubscriptionTrialExtendPayload",
		appUsageRecordCreate:"AppUsageRecordCreatePayload",
		bulkOperationCancel:"BulkOperationCancelPayload",
		bulkOperationRunMutation:"BulkOperationRunMutationPayload",
		bulkOperationRunQuery:"BulkOperationRunQueryPayload",
		bulkProductResourceFeedbackCreate:"BulkProductResourceFeedbackCreatePayload",
		collectionAddProducts:"CollectionAddProductsPayload",
		collectionAddProductsV2:"CollectionAddProductsV2Payload",
		collectionCreate:"CollectionCreatePayload",
		collectionDelete:"CollectionDeletePayload",
		collectionPublish:"CollectionPublishPayload",
		collectionRemoveProducts:"CollectionRemoveProductsPayload",
		collectionReorderProducts:"CollectionReorderProductsPayload",
		collectionUnpublish:"CollectionUnpublishPayload",
		collectionUpdate:"CollectionUpdatePayload",
		companiesDelete:"CompaniesDeletePayload",
		companyAddressDelete:"CompanyAddressDeletePayload",
		companyAssignCustomerAsContact:"CompanyAssignCustomerAsContactPayload",
		companyAssignMainContact:"CompanyAssignMainContactPayload",
		companyContactAssignRole:"CompanyContactAssignRolePayload",
		companyContactAssignRoles:"CompanyContactAssignRolesPayload",
		companyContactCreate:"CompanyContactCreatePayload",
		companyContactDelete:"CompanyContactDeletePayload",
		companyContactRevokeRole:"CompanyContactRevokeRolePayload",
		companyContactRevokeRoles:"CompanyContactRevokeRolesPayload",
		companyContactUpdate:"CompanyContactUpdatePayload",
		companyContactsDelete:"CompanyContactsDeletePayload",
		companyCreate:"CompanyCreatePayload",
		companyDelete:"CompanyDeletePayload",
		companyLocationAssignAddress:"CompanyLocationAssignAddressPayload",
		companyLocationAssignRoles:"CompanyLocationAssignRolesPayload",
		companyLocationAssignTaxExemptions:"CompanyLocationAssignTaxExemptionsPayload",
		companyLocationCreate:"CompanyLocationCreatePayload",
		companyLocationCreateTaxRegistration:"CompanyLocationCreateTaxRegistrationPayload",
		companyLocationDelete:"CompanyLocationDeletePayload",
		companyLocationRevokeRoles:"CompanyLocationRevokeRolesPayload",
		companyLocationRevokeTaxExemptions:"CompanyLocationRevokeTaxExemptionsPayload",
		companyLocationRevokeTaxRegistration:"CompanyLocationRevokeTaxRegistrationPayload",
		companyLocationUpdate:"CompanyLocationUpdatePayload",
		companyLocationsDelete:"CompanyLocationsDeletePayload",
		companyRevokeMainContact:"CompanyRevokeMainContactPayload",
		companyUpdate:"CompanyUpdatePayload",
		customerAddTaxExemptions:"CustomerAddTaxExemptionsPayload",
		customerCreate:"CustomerCreatePayload",
		customerDelete:"CustomerDeletePayload",
		customerEmailMarketingConsentUpdate:"CustomerEmailMarketingConsentUpdatePayload",
		customerGenerateAccountActivationUrl:"CustomerGenerateAccountActivationUrlPayload",
		customerPaymentMethodCreditCardCreate:"CustomerPaymentMethodCreditCardCreatePayload",
		customerPaymentMethodCreditCardUpdate:"CustomerPaymentMethodCreditCardUpdatePayload",
		customerPaymentMethodGetUpdateUrl:"CustomerPaymentMethodGetUpdateUrlPayload",
		customerPaymentMethodPaypalBillingAgreementCreate:"CustomerPaymentMethodPaypalBillingAgreementCreatePayload",
		customerPaymentMethodPaypalBillingAgreementUpdate:"CustomerPaymentMethodPaypalBillingAgreementUpdatePayload",
		customerPaymentMethodRemoteCreate:"CustomerPaymentMethodRemoteCreatePayload",
		customerPaymentMethodRemoteCreditCardCreate:"CustomerPaymentMethodRemoteCreditCardCreatePayload",
		customerPaymentMethodRevoke:"CustomerPaymentMethodRevokePayload",
		customerPaymentMethodSendUpdateEmail:"CustomerPaymentMethodSendUpdateEmailPayload",
		customerRemoveTaxExemptions:"CustomerRemoveTaxExemptionsPayload",
		customerReplaceTaxExemptions:"CustomerReplaceTaxExemptionsPayload",
		customerSegmentMembersQueryCreate:"CustomerSegmentMembersQueryCreatePayload",
		customerSmsMarketingConsentUpdate:"CustomerSmsMarketingConsentUpdatePayload",
		customerUpdate:"CustomerUpdatePayload",
		customerUpdateDefaultAddress:"CustomerUpdateDefaultAddressPayload",
		delegateAccessTokenCreate:"DelegateAccessTokenCreatePayload",
		deliveryProfileCreate:"deliveryProfileCreatePayload",
		deliveryProfileRemove:"deliveryProfileRemovePayload",
		deliveryProfileUpdate:"deliveryProfileUpdatePayload",
		deliverySettingUpdate:"DeliverySettingUpdatePayload",
		deliveryShippingOriginAssign:"DeliveryShippingOriginAssignPayload",
		discountAutomaticActivate:"DiscountAutomaticActivatePayload",
		discountAutomaticAppCreate:"DiscountAutomaticAppCreatePayload",
		discountAutomaticAppUpdate:"DiscountAutomaticAppUpdatePayload",
		discountAutomaticBasicCreate:"DiscountAutomaticBasicCreatePayload",
		discountAutomaticBasicUpdate:"DiscountAutomaticBasicUpdatePayload",
		discountAutomaticBulkDelete:"DiscountAutomaticBulkDeletePayload",
		discountAutomaticBxgyCreate:"DiscountAutomaticBxgyCreatePayload",
		discountAutomaticBxgyUpdate:"DiscountAutomaticBxgyUpdatePayload",
		discountAutomaticDeactivate:"DiscountAutomaticDeactivatePayload",
		discountAutomaticDelete:"DiscountAutomaticDeletePayload",
		discountCodeActivate:"DiscountCodeActivatePayload",
		discountCodeAppCreate:"DiscountCodeAppCreatePayload",
		discountCodeAppUpdate:"DiscountCodeAppUpdatePayload",
		discountCodeBasicCreate:"DiscountCodeBasicCreatePayload",
		discountCodeBasicUpdate:"DiscountCodeBasicUpdatePayload",
		discountCodeBulkActivate:"DiscountCodeBulkActivatePayload",
		discountCodeBulkDeactivate:"DiscountCodeBulkDeactivatePayload",
		discountCodeBulkDelete:"DiscountCodeBulkDeletePayload",
		discountCodeBxgyCreate:"DiscountCodeBxgyCreatePayload",
		discountCodeBxgyUpdate:"DiscountCodeBxgyUpdatePayload",
		discountCodeDeactivate:"DiscountCodeDeactivatePayload",
		discountCodeDelete:"DiscountCodeDeletePayload",
		discountCodeFreeShippingCreate:"DiscountCodeFreeShippingCreatePayload",
		discountCodeFreeShippingUpdate:"DiscountCodeFreeShippingUpdatePayload",
		discountCodeRedeemCodeBulkDelete:"DiscountCodeRedeemCodeBulkDeletePayload",
		discountRedeemCodeBulkAdd:"DiscountRedeemCodeBulkAddPayload",
		disputeEvidenceUpdate:"DisputeEvidenceUpdatePayload",
		draftOrderBulkAddTags:"DraftOrderBulkAddTagsPayload",
		draftOrderBulkDelete:"DraftOrderBulkDeletePayload",
		draftOrderBulkRemoveTags:"DraftOrderBulkRemoveTagsPayload",
		draftOrderCalculate:"DraftOrderCalculatePayload",
		draftOrderComplete:"DraftOrderCompletePayload",
		draftOrderCreate:"DraftOrderCreatePayload",
		draftOrderCreateFromOrder:"DraftOrderCreateFromOrderPayload",
		draftOrderCreateMerchantCheckout:"DraftOrderCreateMerchantCheckoutPayload",
		draftOrderDelete:"DraftOrderDeletePayload",
		draftOrderDuplicate:"DraftOrderDuplicatePayload",
		draftOrderInvoicePreview:"DraftOrderInvoicePreviewPayload",
		draftOrderInvoiceSend:"DraftOrderInvoiceSendPayload",
		draftOrderUpdate:"DraftOrderUpdatePayload",
		eventBridgeWebhookSubscriptionCreate:"EventBridgeWebhookSubscriptionCreatePayload",
		eventBridgeWebhookSubscriptionUpdate:"EventBridgeWebhookSubscriptionUpdatePayload",
		fileCreate:"FileCreatePayload",
		fileDelete:"FileDeletePayload",
		fileUpdate:"FileUpdatePayload",
		flowTriggerReceive:"FlowTriggerReceivePayload",
		fulfillmentCancel:"FulfillmentCancelPayload",
		fulfillmentCreateV2:"FulfillmentCreateV2Payload",
		fulfillmentEventCreate:"FulfillmentEventCreatePayload",
		fulfillmentOrderAcceptCancellationRequest:"FulfillmentOrderAcceptCancellationRequestPayload",
		fulfillmentOrderAcceptFulfillmentRequest:"FulfillmentOrderAcceptFulfillmentRequestPayload",
		fulfillmentOrderCancel:"FulfillmentOrderCancelPayload",
		fulfillmentOrderClose:"FulfillmentOrderClosePayload",
		fulfillmentOrderHold:"FulfillmentOrderHoldPayload",
		fulfillmentOrderLineItemsPreparedForPickup:"FulfillmentOrderLineItemsPreparedForPickupPayload",
		fulfillmentOrderMove:"FulfillmentOrderMovePayload",
		fulfillmentOrderOpen:"FulfillmentOrderOpenPayload",
		fulfillmentOrderRejectCancellationRequest:"FulfillmentOrderRejectCancellationRequestPayload",
		fulfillmentOrderRejectFulfillmentRequest:"FulfillmentOrderRejectFulfillmentRequestPayload",
		fulfillmentOrderReleaseHold:"FulfillmentOrderReleaseHoldPayload",
		fulfillmentOrderReschedule:"FulfillmentOrderReschedulePayload",
		fulfillmentOrderSubmitCancellationRequest:"FulfillmentOrderSubmitCancellationRequestPayload",
		fulfillmentOrderSubmitFulfillmentRequest:"FulfillmentOrderSubmitFulfillmentRequestPayload",
		fulfillmentOrdersReleaseHolds:"FulfillmentOrdersReleaseHoldsPayload",
		fulfillmentOrdersSetFulfillmentDeadline:"FulfillmentOrdersSetFulfillmentDeadlinePayload",
		fulfillmentServiceCreate:"FulfillmentServiceCreatePayload",
		fulfillmentServiceDelete:"FulfillmentServiceDeletePayload",
		fulfillmentServiceUpdate:"FulfillmentServiceUpdatePayload",
		fulfillmentTrackingInfoUpdateV2:"FulfillmentTrackingInfoUpdateV2Payload",
		giftCardCreate:"GiftCardCreatePayload",
		giftCardDisable:"GiftCardDisablePayload",
		giftCardUpdate:"GiftCardUpdatePayload",
		inventoryActivate:"InventoryActivatePayload",
		inventoryAdjustQuantities:"InventoryAdjustQuantitiesPayload",
		inventoryAdjustQuantity:"InventoryAdjustQuantityPayload",
		inventoryBulkAdjustQuantityAtLocation:"InventoryBulkAdjustQuantityAtLocationPayload",
		inventoryBulkToggleActivation:"InventoryBulkToggleActivationPayload",
		inventoryDeactivate:"InventoryDeactivatePayload",
		inventoryItemUpdate:"InventoryItemUpdatePayload",
		inventoryMoveQuantities:"InventoryMoveQuantitiesPayload",
		inventorySetOnHandQuantities:"InventorySetOnHandQuantitiesPayload",
		locationActivate:"LocationActivatePayload",
		locationAdd:"LocationAddPayload",
		locationDeactivate:"LocationDeactivatePayload",
		locationDelete:"LocationDeletePayload",
		locationEdit:"LocationEditPayload",
		locationLocalPickupDisable:"LocationLocalPickupDisablePayload",
		locationLocalPickupEnable:"LocationLocalPickupEnablePayload",
		marketCreate:"MarketCreatePayload",
		marketCurrencySettingsUpdate:"MarketCurrencySettingsUpdatePayload",
		marketDelete:"MarketDeletePayload",
		marketLocalizationsRegister:"MarketLocalizationsRegisterPayload",
		marketLocalizationsRemove:"MarketLocalizationsRemovePayload",
		marketRegionDelete:"MarketRegionDeletePayload",
		marketRegionsCreate:"MarketRegionsCreatePayload",
		marketUpdate:"MarketUpdatePayload",
		marketWebPresenceCreate:"MarketWebPresenceCreatePayload",
		marketWebPresenceDelete:"MarketWebPresenceDeletePayload",
		marketWebPresenceUpdate:"MarketWebPresenceUpdatePayload",
		marketingActivityCreate:"MarketingActivityCreatePayload",
		marketingActivityCreateExternal:"MarketingActivityCreateExternalPayload",
		marketingActivityUpdate:"MarketingActivityUpdatePayload",
		marketingActivityUpdateExternal:"MarketingActivityUpdateExternalPayload",
		marketingEngagementCreate:"MarketingEngagementCreatePayload",
		metafieldDefinitionCreate:"MetafieldDefinitionCreatePayload",
		metafieldDefinitionDelete:"MetafieldDefinitionDeletePayload",
		metafieldDefinitionPin:"MetafieldDefinitionPinPayload",
		metafieldDefinitionUnpin:"MetafieldDefinitionUnpinPayload",
		metafieldDefinitionUpdate:"MetafieldDefinitionUpdatePayload",
		metafieldDelete:"MetafieldDeletePayload",
		metafieldStorefrontVisibilityCreate:"MetafieldStorefrontVisibilityCreatePayload",
		metafieldStorefrontVisibilityDelete:"MetafieldStorefrontVisibilityDeletePayload",
		metafieldsSet:"MetafieldsSetPayload",
		metaobjectBulkDelete:"MetaobjectBulkDeletePayload",
		metaobjectCreate:"MetaobjectCreatePayload",
		metaobjectDefinitionCreate:"MetaobjectDefinitionCreatePayload",
		metaobjectDefinitionDelete:"MetaobjectDefinitionDeletePayload",
		metaobjectDefinitionUpdate:"MetaobjectDefinitionUpdatePayload",
		metaobjectDelete:"MetaobjectDeletePayload",
		metaobjectUpdate:"MetaobjectUpdatePayload",
		metaobjectUpsert:"MetaobjectUpsertPayload",
		orderCapture:"OrderCapturePayload",
		orderClose:"OrderClosePayload",
		orderCreateMandatePayment:"OrderCreateMandatePaymentPayload",
		orderEditAddCustomItem:"OrderEditAddCustomItemPayload",
		orderEditAddLineItemDiscount:"OrderEditAddLineItemDiscountPayload",
		orderEditAddVariant:"OrderEditAddVariantPayload",
		orderEditBegin:"OrderEditBeginPayload",
		orderEditCommit:"OrderEditCommitPayload",
		orderEditRemoveLineItemDiscount:"OrderEditRemoveLineItemDiscountPayload",
		orderEditSetQuantity:"OrderEditSetQuantityPayload",
		orderInvoiceSend:"OrderInvoiceSendPayload",
		orderMarkAsPaid:"OrderMarkAsPaidPayload",
		orderOpen:"OrderOpenPayload",
		orderUpdate:"OrderUpdatePayload",
		paymentReminderSend:"PaymentReminderSendPayload",
		paymentTermsCreate:"PaymentTermsCreatePayload",
		paymentTermsDelete:"PaymentTermsDeletePayload",
		paymentTermsUpdate:"PaymentTermsUpdatePayload",
		priceListCreate:"PriceListCreatePayload",
		priceListDelete:"PriceListDeletePayload",
		priceListFixedPricesAdd:"PriceListFixedPricesAddPayload",
		priceListFixedPricesDelete:"PriceListFixedPricesDeletePayload",
		priceListUpdate:"PriceListUpdatePayload",
		priceRuleActivate:"PriceRuleActivatePayload",
		priceRuleCreate:"PriceRuleCreatePayload",
		priceRuleDeactivate:"PriceRuleDeactivatePayload",
		priceRuleDelete:"PriceRuleDeletePayload",
		priceRuleDiscountCodeCreate:"PriceRuleDiscountCodeCreatePayload",
		priceRuleDiscountCodeUpdate:"PriceRuleDiscountCodeUpdatePayload",
		priceRuleUpdate:"PriceRuleUpdatePayload",
		privateMetafieldDelete:"PrivateMetafieldDeletePayload",
		privateMetafieldUpsert:"PrivateMetafieldUpsertPayload",
		productAppendImages:"ProductAppendImagesPayload",
		productChangeStatus:"ProductChangeStatusPayload",
		productCreate:"ProductCreatePayload",
		productCreateMedia:"ProductCreateMediaPayload",
		productDelete:"ProductDeletePayload",
		productDeleteAsync:"ProductDeleteAsyncPayload",
		productDeleteImages:"ProductDeleteImagesPayload",
		productDeleteMedia:"ProductDeleteMediaPayload",
		productDuplicate:"ProductDuplicatePayload",
		productDuplicateAsync:"ProductDuplicateAsyncPayload",
		productImageUpdate:"ProductImageUpdatePayload",
		productJoinSellingPlanGroups:"ProductJoinSellingPlanGroupsPayload",
		productLeaveSellingPlanGroups:"ProductLeaveSellingPlanGroupsPayload",
		productPublish:"ProductPublishPayload",
		productReorderImages:"ProductReorderImagesPayload",
		productReorderMedia:"ProductReorderMediaPayload",
		productUnpublish:"ProductUnpublishPayload",
		productUpdate:"ProductUpdatePayload",
		productUpdateMedia:"ProductUpdateMediaPayload",
		productVariantAppendMedia:"ProductVariantAppendMediaPayload",
		productVariantCreate:"ProductVariantCreatePayload",
		productVariantDelete:"ProductVariantDeletePayload",
		productVariantDetachMedia:"ProductVariantDetachMediaPayload",
		productVariantJoinSellingPlanGroups:"ProductVariantJoinSellingPlanGroupsPayload",
		productVariantLeaveSellingPlanGroups:"ProductVariantLeaveSellingPlanGroupsPayload",
		productVariantUpdate:"ProductVariantUpdatePayload",
		productVariantsBulkCreate:"ProductVariantsBulkCreatePayload",
		productVariantsBulkDelete:"ProductVariantsBulkDeletePayload",
		productVariantsBulkReorder:"ProductVariantsBulkReorderPayload",
		productVariantsBulkUpdate:"ProductVariantsBulkUpdatePayload",
		pubSubWebhookSubscriptionCreate:"PubSubWebhookSubscriptionCreatePayload",
		pubSubWebhookSubscriptionUpdate:"PubSubWebhookSubscriptionUpdatePayload",
		publishablePublish:"PublishablePublishPayload",
		publishablePublishToCurrentChannel:"PublishablePublishToCurrentChannelPayload",
		publishableUnpublish:"PublishableUnpublishPayload",
		publishableUnpublishToCurrentChannel:"PublishableUnpublishToCurrentChannelPayload",
		refundCreate:"RefundCreatePayload",
		returnApproveRequest:"ReturnApproveRequestPayload",
		returnCancel:"ReturnCancelPayload",
		returnClose:"ReturnClosePayload",
		returnCreate:"ReturnCreatePayload",
		returnDeclineRequest:"ReturnDeclineRequestPayload",
		returnRefund:"ReturnRefundPayload",
		returnReopen:"ReturnReopenPayload",
		returnRequest:"ReturnRequestPayload",
		reverseDeliveryCreateWithShipping:"ReverseDeliveryCreateWithShippingPayload",
		reverseDeliveryDispose:"ReverseDeliveryDisposePayload",
		reverseDeliveryShippingUpdate:"ReverseDeliveryShippingUpdatePayload",
		reverseFulfillmentOrderDispose:"ReverseFulfillmentOrderDisposePayload",
		savedSearchCreate:"SavedSearchCreatePayload",
		savedSearchDelete:"SavedSearchDeletePayload",
		savedSearchUpdate:"SavedSearchUpdatePayload",
		scriptTagCreate:"ScriptTagCreatePayload",
		scriptTagDelete:"ScriptTagDeletePayload",
		scriptTagUpdate:"ScriptTagUpdatePayload",
		segmentCreate:"SegmentCreatePayload",
		segmentDelete:"SegmentDeletePayload",
		segmentUpdate:"SegmentUpdatePayload",
		sellingPlanGroupAddProductVariants:"SellingPlanGroupAddProductVariantsPayload",
		sellingPlanGroupAddProducts:"SellingPlanGroupAddProductsPayload",
		sellingPlanGroupCreate:"SellingPlanGroupCreatePayload",
		sellingPlanGroupDelete:"SellingPlanGroupDeletePayload",
		sellingPlanGroupRemoveProductVariants:"SellingPlanGroupRemoveProductVariantsPayload",
		sellingPlanGroupRemoveProducts:"SellingPlanGroupRemoveProductsPayload",
		sellingPlanGroupUpdate:"SellingPlanGroupUpdatePayload",
		shippingPackageDelete:"ShippingPackageDeletePayload",
		shippingPackageMakeDefault:"ShippingPackageMakeDefaultPayload",
		shippingPackageUpdate:"ShippingPackageUpdatePayload",
		shopLocaleDisable:"ShopLocaleDisablePayload",
		shopLocaleEnable:"ShopLocaleEnablePayload",
		shopLocaleUpdate:"ShopLocaleUpdatePayload",
		shopPolicyUpdate:"ShopPolicyUpdatePayload",
		shopResourceFeedbackCreate:"ShopResourceFeedbackCreatePayload",
		stagedUploadTargetGenerate:"StagedUploadTargetGeneratePayload",
		stagedUploadTargetsGenerate:"StagedUploadTargetsGeneratePayload",
		stagedUploadsCreate:"StagedUploadsCreatePayload",
		standardMetafieldDefinitionEnable:"StandardMetafieldDefinitionEnablePayload",
		standardMetaobjectDefinitionEnable:"StandardMetaobjectDefinitionEnablePayload",
		storefrontAccessTokenCreate:"StorefrontAccessTokenCreatePayload",
		storefrontAccessTokenDelete:"StorefrontAccessTokenDeletePayload",
		subscriptionBillingAttemptCreate:"SubscriptionBillingAttemptCreatePayload",
		subscriptionBillingCycleContractDraftCommit:"SubscriptionBillingCycleContractDraftCommitPayload",
		subscriptionBillingCycleContractDraftConcatenate:"SubscriptionBillingCycleContractDraftConcatenatePayload",
		subscriptionBillingCycleContractEdit:"SubscriptionBillingCycleContractEditPayload",
		subscriptionBillingCycleEditDelete:"SubscriptionBillingCycleEditDeletePayload",
		subscriptionBillingCycleEditsDelete:"SubscriptionBillingCycleEditsDeletePayload",
		subscriptionBillingCycleScheduleEdit:"SubscriptionBillingCycleScheduleEditPayload",
		subscriptionContractCreate:"SubscriptionContractCreatePayload",
		subscriptionContractSetNextBillingDate:"SubscriptionContractSetNextBillingDatePayload",
		subscriptionContractUpdate:"SubscriptionContractUpdatePayload",
		subscriptionDraftCommit:"SubscriptionDraftCommitPayload",
		subscriptionDraftDiscountAdd:"SubscriptionDraftDiscountAddPayload",
		subscriptionDraftDiscountCodeApply:"SubscriptionDraftDiscountCodeApplyPayload",
		subscriptionDraftDiscountRemove:"SubscriptionDraftDiscountRemovePayload",
		subscriptionDraftDiscountUpdate:"SubscriptionDraftDiscountUpdatePayload",
		subscriptionDraftFreeShippingDiscountAdd:"SubscriptionDraftFreeShippingDiscountAddPayload",
		subscriptionDraftFreeShippingDiscountUpdate:"SubscriptionDraftFreeShippingDiscountUpdatePayload",
		subscriptionDraftLineAdd:"SubscriptionDraftLineAddPayload",
		subscriptionDraftLineRemove:"SubscriptionDraftLineRemovePayload",
		subscriptionDraftLineUpdate:"SubscriptionDraftLineUpdatePayload",
		subscriptionDraftUpdate:"SubscriptionDraftUpdatePayload",
		tagsAdd:"TagsAddPayload",
		tagsRemove:"TagsRemovePayload",
		translationsRegister:"TranslationsRegisterPayload",
		translationsRemove:"TranslationsRemovePayload",
		urlRedirectBulkDeleteAll:"UrlRedirectBulkDeleteAllPayload",
		urlRedirectBulkDeleteByIds:"UrlRedirectBulkDeleteByIdsPayload",
		urlRedirectBulkDeleteBySavedSearch:"UrlRedirectBulkDeleteBySavedSearchPayload",
		urlRedirectBulkDeleteBySearch:"UrlRedirectBulkDeleteBySearchPayload",
		urlRedirectCreate:"UrlRedirectCreatePayload",
		urlRedirectDelete:"UrlRedirectDeletePayload",
		urlRedirectImportCreate:"UrlRedirectImportCreatePayload",
		urlRedirectImportSubmit:"UrlRedirectImportSubmitPayload",
		urlRedirectUpdate:"UrlRedirectUpdatePayload",
		webPixelCreate:"WebPixelCreatePayload",
		webPixelDelete:"WebPixelDeletePayload",
		webPixelUpdate:"WebPixelUpdatePayload",
		webhookSubscriptionCreate:"WebhookSubscriptionCreatePayload",
		webhookSubscriptionDelete:"WebhookSubscriptionDeletePayload",
		webhookSubscriptionUpdate:"WebhookSubscriptionUpdatePayload"
	},
	MutationsStagedUploadTargetGenerateUploadParameter:{
		name:"String",
		value:"String"
	},
	Navigable:{
		"...on AbandonedCheckout": "AbandonedCheckout",
		"...on Company": "Company",
		"...on CompanyLocation": "CompanyLocation",
		"...on DraftOrder": "DraftOrder",
		"...on OnlineStoreArticle": "OnlineStoreArticle",
		"...on OnlineStorePage": "OnlineStorePage",
		"...on Product": "Product",
		"...on ProductVariant": "ProductVariant",
		defaultCursor:"String"
	},
	NavigationItem:{
		id:"String",
		title:"String",
		url:"URL"
	},
	Node:{
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
		id:"ID"
	},
	OnlineStoreArticle:{
		defaultCursor:"String",
		id:"ID",
		translations:"PublishedTranslation"
	},
	OnlineStoreBlog:{
		id:"ID",
		translations:"PublishedTranslation"
	},
	OnlineStorePage:{
		defaultCursor:"String",
		id:"ID",
		translations:"PublishedTranslation"
	},
	OnlineStorePreviewable:{
		"...on Product": "Product",
		onlineStorePreviewUrl:"URL"
	},
	Order:{
		agreements:"SalesAgreementConnection",
		alerts:"ResourceAlert",
		app:"OrderApp",
		billingAddress:"MailingAddress",
		billingAddressMatchesShippingAddress:"Boolean",
		canMarkAsPaid:"Boolean",
		canNotifyCustomer:"Boolean",
		cancelReason:"OrderCancelReason",
		cancelledAt:"DateTime",
		capturable:"Boolean",
		cartDiscountAmount:"Money",
		cartDiscountAmountSet:"MoneyBag",
		channel:"Channel",
		channelInformation:"ChannelInformation",
		clientIp:"String",
		closed:"Boolean",
		closedAt:"DateTime",
		confirmed:"Boolean",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		currentCartDiscountAmountSet:"MoneyBag",
		currentSubtotalLineItemsQuantity:"Int",
		currentSubtotalPriceSet:"MoneyBag",
		currentTaxLines:"TaxLine",
		currentTotalDiscountsSet:"MoneyBag",
		currentTotalDutiesSet:"MoneyBag",
		currentTotalPriceSet:"MoneyBag",
		currentTotalTaxSet:"MoneyBag",
		currentTotalWeight:"UnsignedInt64",
		customAttributes:"Attribute",
		customer:"Customer",
		customerAcceptsMarketing:"Boolean",
		customerJourney:"CustomerJourney",
		customerJourneySummary:"CustomerJourneySummary",
		customerLocale:"String",
		discountApplications:"DiscountApplicationConnection",
		discountCode:"String",
		discountCodes:"String",
		displayAddress:"MailingAddress",
		displayFinancialStatus:"OrderDisplayFinancialStatus",
		displayFulfillmentStatus:"OrderDisplayFulfillmentStatus",
		disputes:"OrderDisputeSummary",
		edited:"Boolean",
		email:"String",
		estimatedTaxes:"Boolean",
		events:"EventConnection",
		fulfillable:"Boolean",
		fulfillmentOrders:"FulfillmentOrderConnection",
		fulfillments:"Fulfillment",
		fullyPaid:"Boolean",
		hasTimelineComment:"Boolean",
		id:"ID",
		landingPageDisplayText:"String",
		landingPageUrl:"URL",
		legacyResourceId:"UnsignedInt64",
		lineItems:"LineItemConnection",
		lineItemsMutable:"LineItemMutableConnection",
		localizationExtensions:"LocalizationExtensionConnection",
		location:"String",
		merchantEditable:"Boolean",
		merchantEditableErrors:"String",
		merchantOfRecordApp:"OrderApp",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		netPayment:"Money",
		netPaymentSet:"MoneyBag",
		nonFulfillableLineItems:"LineItemConnection",
		note:"String",
		originalTotalDutiesSet:"MoneyBag",
		originalTotalPriceSet:"MoneyBag",
		paymentCollectionDetails:"OrderPaymentCollectionDetails",
		paymentGatewayNames:"String",
		paymentTerms:"PaymentTerms",
		phone:"String",
		physicalLocation:"Location",
		presentmentCurrencyCode:"CurrencyCode",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		processedAt:"DateTime",
		publication:"Publication",
		purchasingEntity:"PurchasingEntity",
		referralCode:"String",
		referrerDisplayText:"String",
		referrerUrl:"URL",
		refundDiscrepancySet:"MoneyBag",
		refundable:"Boolean",
		refunds:"Refund",
		registeredSourceUrl:"URL",
		requiresShipping:"Boolean",
		restockable:"Boolean",
		returns:"ReturnConnection",
		riskLevel:"OrderRiskLevel",
		risks:"OrderRisk",
		shippingAddress:"MailingAddress",
		shippingLine:"ShippingLine",
		shippingLines:"ShippingLineConnection",
		sourceIdentifier:"String",
		subtotalLineItemsQuantity:"Int",
		subtotalPrice:"Money",
		subtotalPriceSet:"MoneyBag",
		suggestedRefund:"SuggestedRefund",
		tags:"String",
		taxLines:"TaxLine",
		taxesIncluded:"Boolean",
		test:"Boolean",
		totalCapturable:"Money",
		totalCapturableSet:"MoneyBag",
		totalDiscounts:"Money",
		totalDiscountsSet:"MoneyBag",
		totalOutstandingSet:"MoneyBag",
		totalPrice:"Money",
		totalPriceSet:"MoneyBag",
		totalReceived:"Money",
		totalReceivedSet:"MoneyBag",
		totalRefunded:"Money",
		totalRefundedSet:"MoneyBag",
		totalRefundedShippingSet:"MoneyBag",
		totalShippingPrice:"Money",
		totalShippingPriceSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag",
		totalTipReceived:"MoneyV2",
		totalTipReceivedSet:"MoneyBag",
		totalWeight:"UnsignedInt64",
		transactions:"OrderTransaction",
		unpaid:"Boolean",
		updatedAt:"DateTime"
	},
	OrderAgreement:{
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		order:"Order",
		reason:"OrderActionType",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	OrderApp:{
		icon:"Image",
		id:"ID",
		name:"String"
	},
	OrderCapturePayload:{
		transaction:"OrderTransaction",
		userErrors:"UserError"
	},
	OrderClosePayload:{
		order:"Order",
		userErrors:"UserError"
	},
	OrderConnection:{
		edges:"OrderEdge",
		nodes:"Order",
		pageInfo:"PageInfo"
	},
	OrderCreateMandatePaymentPayload:{
		job:"Job",
		paymentReferenceId:"String",
		userErrors:"OrderCreateMandatePaymentUserError"
	},
	OrderCreateMandatePaymentUserError:{
		code:"OrderCreateMandatePaymentUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderDisputeSummary:{
		id:"ID",
		initiatedAs:"DisputeType",
		status:"DisputeStatus"
	},
	OrderEdge:{
		cursor:"String",
		node:"Order"
	},
	OrderEditAddCustomItemPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		userErrors:"UserError"
	},
	OrderEditAddLineItemDiscountPayload:{
		addedDiscountStagedChange:"OrderStagedChangeAddLineItemDiscount",
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		userErrors:"UserError"
	},
	OrderEditAddVariantPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		userErrors:"UserError"
	},
	OrderEditAgreement:{
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		reason:"OrderActionType",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	OrderEditBeginPayload:{
		calculatedOrder:"CalculatedOrder",
		userErrors:"UserError"
	},
	OrderEditCommitPayload:{
		order:"Order",
		userErrors:"UserError"
	},
	OrderEditRemoveLineItemDiscountPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		userErrors:"UserError"
	},
	OrderEditSetQuantityPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		userErrors:"UserError"
	},
	OrderInvoiceSendPayload:{
		order:"Order",
		userErrors:"OrderInvoiceSendUserError"
	},
	OrderInvoiceSendUserError:{
		code:"OrderInvoiceSendUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderMarkAsPaidPayload:{
		order:"Order",
		userErrors:"UserError"
	},
	OrderOpenPayload:{
		order:"Order",
		userErrors:"UserError"
	},
	OrderPaymentCollectionDetails:{
		additionalPaymentCollectionUrl:"URL",
		vaultedPaymentMethods:"PaymentMandate"
	},
	OrderPaymentStatus:{
		errorMessage:"String",
		paymentReferenceId:"String",
		status:"OrderPaymentStatusResult",
		translatedErrorMessage:"String"
	},
	OrderRisk:{
		display:"Boolean",
		level:"OrderRiskLevel",
		message:"String"
	},
	OrderStagedChange:{
		"...on OrderStagedChangeAddCustomItem":"OrderStagedChangeAddCustomItem",
		"...on OrderStagedChangeAddLineItemDiscount":"OrderStagedChangeAddLineItemDiscount",
		"...on OrderStagedChangeAddShippingLine":"OrderStagedChangeAddShippingLine",
		"...on OrderStagedChangeAddVariant":"OrderStagedChangeAddVariant",
		"...on OrderStagedChangeDecrementItem":"OrderStagedChangeDecrementItem",
		"...on OrderStagedChangeIncrementItem":"OrderStagedChangeIncrementItem"
	},
	OrderStagedChangeAddCustomItem:{
		originalUnitPrice:"MoneyV2",
		quantity:"Int",
		title:"String"
	},
	OrderStagedChangeAddLineItemDiscount:{
		description:"String",
		id:"ID",
		value:"PricingValue"
	},
	OrderStagedChangeAddShippingLine:{
		phone:"String",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	OrderStagedChangeAddVariant:{
		quantity:"Int",
		variant:"ProductVariant"
	},
	OrderStagedChangeConnection:{
		edges:"OrderStagedChangeEdge",
		nodes:"OrderStagedChange",
		pageInfo:"PageInfo"
	},
	OrderStagedChangeDecrementItem:{
		delta:"Int",
		lineItem:"LineItem",
		restock:"Boolean"
	},
	OrderStagedChangeEdge:{
		cursor:"String",
		node:"OrderStagedChange"
	},
	OrderStagedChangeIncrementItem:{
		delta:"Int",
		lineItem:"LineItem"
	},
	OrderTransaction:{
		accountNumber:"String",
		amount:"Money",
		amountSet:"MoneyBag",
		amountV2:"MoneyV2",
		authorizationCode:"String",
		authorizationExpiresAt:"DateTime",
		createdAt:"DateTime",
		errorCode:"OrderTransactionErrorCode",
		fees:"TransactionFee",
		formattedGateway:"String",
		gateway:"String",
		id:"ID",
		kind:"OrderTransactionKind",
		manuallyCapturable:"Boolean",
		maximumRefundable:"Money",
		maximumRefundableV2:"MoneyV2",
		order:"Order",
		parentTransaction:"OrderTransaction",
		paymentDetails:"PaymentDetails",
		paymentIcon:"Image",
		paymentId:"String",
		paymentMethod:"PaymentMethods",
		processedAt:"DateTime",
		receipt:"String",
		receiptJson:"JSON",
		settlementCurrency:"CurrencyCode",
		settlementCurrencyRate:"Decimal",
		shopifyPaymentsSet:"ShopifyPaymentsTransactionSet",
		status:"OrderTransactionStatus",
		test:"Boolean",
		totalUnsettled:"Money",
		totalUnsettledSet:"MoneyBag",
		totalUnsettledV2:"MoneyV2",
		user:"StaffMember"
	},
	OrderTransactionConnection:{
		edges:"OrderTransactionEdge",
		nodes:"OrderTransaction",
		pageInfo:"PageInfo"
	},
	OrderTransactionEdge:{
		cursor:"String",
		node:"OrderTransaction"
	},
	OrderUpdatePayload:{
		order:"Order",
		userErrors:"UserError"
	},
	PageInfo:{
		endCursor:"String",
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String"
	},
	ParseError:{
		code:"ParseErrorCode",
		message:"String",
		range:"ParseErrorRange"
	},
	ParseErrorRange:{
		end:"ErrorPosition",
		start:"ErrorPosition"
	},
	PaymentDetails:{
		"...on CardPaymentDetails":"CardPaymentDetails"
	},
	PaymentInstrument:{
		"...on VaultCreditCard":"VaultCreditCard",
		"...on VaultPaypalBillingAgreement":"VaultPaypalBillingAgreement"
	},
	PaymentMandate:{
		id:"ID",
		paymentInstrument:"PaymentInstrument"
	},
	PaymentReminderSendPayload:{
		success:"Boolean",
		userErrors:"PaymentReminderSendUserError"
	},
	PaymentReminderSendUserError:{
		code:"PaymentReminderSendUserErrorCode",
		field:"String",
		message:"String"
	},
	PaymentSchedule:{
		amount:"MoneyV2",
		completedAt:"DateTime",
		dueAt:"DateTime",
		id:"ID",
		issuedAt:"DateTime",
		paymentTerms:"PaymentTerms"
	},
	PaymentScheduleConnection:{
		edges:"PaymentScheduleEdge",
		nodes:"PaymentSchedule",
		pageInfo:"PageInfo"
	},
	PaymentScheduleEdge:{
		cursor:"String",
		node:"PaymentSchedule"
	},
	PaymentSettings:{
		supportedDigitalWallets:"DigitalWallet"
	},
	PaymentTerms:{
		draftOrder:"DraftOrder",
		dueInDays:"Int",
		id:"ID",
		order:"Order",
		overdue:"Boolean",
		paymentSchedules:"PaymentScheduleConnection",
		paymentTermsName:"String",
		paymentTermsType:"PaymentTermsType",
		translatedName:"String"
	},
	PaymentTermsCreatePayload:{
		paymentTerms:"PaymentTerms",
		userErrors:"PaymentTermsCreateUserError"
	},
	PaymentTermsCreateUserError:{
		code:"PaymentTermsCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	PaymentTermsDeletePayload:{
		deletedId:"ID",
		userErrors:"PaymentTermsDeleteUserError"
	},
	PaymentTermsDeleteUserError:{
		code:"PaymentTermsDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	PaymentTermsTemplate:{
		description:"String",
		dueInDays:"Int",
		id:"ID",
		name:"String",
		paymentTermsType:"PaymentTermsType",
		translatedName:"String"
	},
	PaymentTermsUpdatePayload:{
		paymentTerms:"PaymentTerms",
		userErrors:"PaymentTermsUpdateUserError"
	},
	PaymentTermsUpdateUserError:{
		code:"PaymentTermsUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	PolarisVizDataPoint:{
		key:"String",
		value:"String"
	},
	PolarisVizDataSeries:{
		data:"PolarisVizDataPoint",
		isComparison:"Boolean",
		name:"String"
	},
	PolarisVizResponse:{
		data:"PolarisVizDataSeries",
		parseErrors:"ParseError",
		tableData:"TableData",
		vizType:"VisualizationType"
	},
	PriceList:{
		contextRule:"PriceListContextRule",
		currency:"CurrencyCode",
		id:"ID",
		name:"String",
		parent:"PriceListParent",
		prices:"PriceListPriceConnection"
	},
	PriceListAdjustment:{
		type:"PriceListAdjustmentType",
		value:"Float"
	},
	PriceListConnection:{
		edges:"PriceListEdge",
		nodes:"PriceList",
		pageInfo:"PageInfo"
	},
	PriceListContextRule:{
		countries:"CountryCode",
		market:"Market"
	},
	PriceListCreatePayload:{
		priceList:"PriceList",
		userErrors:"PriceListUserError"
	},
	PriceListDeletePayload:{
		deletedId:"ID",
		userErrors:"PriceListUserError"
	},
	PriceListEdge:{
		cursor:"String",
		node:"PriceList"
	},
	PriceListFixedPricesAddPayload:{
		prices:"PriceListPrice",
		userErrors:"PriceListPriceUserError"
	},
	PriceListFixedPricesDeletePayload:{
		deletedFixedPriceVariantIds:"ID",
		userErrors:"PriceListPriceUserError"
	},
	PriceListParent:{
		adjustment:"PriceListAdjustment"
	},
	PriceListPrice:{
		compareAtPrice:"MoneyV2",
		originType:"PriceListPriceOriginType",
		price:"MoneyV2",
		variant:"ProductVariant"
	},
	PriceListPriceConnection:{
		edges:"PriceListPriceEdge",
		nodes:"PriceListPrice",
		pageInfo:"PageInfo"
	},
	PriceListPriceEdge:{
		cursor:"String",
		node:"PriceListPrice"
	},
	PriceListPriceUserError:{
		code:"PriceListPriceUserErrorCode",
		field:"String",
		message:"String"
	},
	PriceListUpdatePayload:{
		priceList:"PriceList",
		userErrors:"PriceListUserError"
	},
	PriceListUserError:{
		code:"PriceListUserErrorCode",
		field:"String",
		message:"String"
	},
	PriceRule:{
		allocationLimit:"Int",
		allocationMethod:"PriceRuleAllocationMethod",
		app:"App",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerSelection:"PriceRuleCustomerSelection",
		discountClass:"DiscountClass",
		discountCodes:"PriceRuleDiscountCodeConnection",
		discountCodesCount:"Int",
		endsAt:"DateTime",
		entitlementToPrerequisiteQuantityRatio:"PriceRuleEntitlementToPrerequisiteQuantityRatio",
		events:"EventConnection",
		features:"PriceRuleFeature",
		hasTimelineComment:"Boolean",
		id:"ID",
		itemEntitlements:"PriceRuleItemEntitlements",
		itemPrerequisites:"PriceRuleLineItemPrerequisites",
		legacyResourceId:"UnsignedInt64",
		oncePerCustomer:"Boolean",
		prerequisiteQuantityRange:"PriceRuleQuantityRange",
		prerequisiteShippingPriceRange:"PriceRuleMoneyRange",
		prerequisiteSubtotalRange:"PriceRuleMoneyRange",
		prerequisiteToEntitlementQuantityRatio:"PriceRulePrerequisiteToEntitlementQuantityRatio",
		shareableUrls:"PriceRuleShareableUrl",
		shippingEntitlements:"PriceRuleShippingLineEntitlements",
		startsAt:"DateTime",
		status:"PriceRuleStatus",
		summary:"String",
		target:"PriceRuleTarget",
		title:"String",
		totalSales:"MoneyV2",
		traits:"PriceRuleTrait",
		usageCount:"Int",
		usageLimit:"Int",
		validityPeriod:"PriceRuleValidityPeriod",
		value:"PriceRuleValue",
		valueV2:"PricingValue"
	},
	PriceRuleActivatePayload:{
		priceRule:"PriceRule",
		priceRuleUserErrors:"PriceRuleUserError",
		userErrors:"UserError"
	},
	PriceRuleConnection:{
		edges:"PriceRuleEdge",
		nodes:"PriceRule",
		pageInfo:"PageInfo"
	},
	PriceRuleCreatePayload:{
		priceRule:"PriceRule",
		priceRuleDiscountCode:"PriceRuleDiscountCode",
		priceRuleUserErrors:"PriceRuleUserError",
		userErrors:"UserError"
	},
	PriceRuleCustomerSelection:{
		customers:"CustomerConnection",
		forAllCustomers:"Boolean",
		segments:"Segment"
	},
	PriceRuleDeactivatePayload:{
		priceRule:"PriceRule",
		priceRuleUserErrors:"PriceRuleUserError",
		userErrors:"UserError"
	},
	PriceRuleDeletePayload:{
		deletedPriceRuleId:"ID",
		priceRuleUserErrors:"PriceRuleUserError",
		shop:"Shop",
		userErrors:"UserError"
	},
	PriceRuleDiscountCode:{
		app:"App",
		code:"String",
		id:"ID",
		usageCount:"Int"
	},
	PriceRuleDiscountCodeConnection:{
		edges:"PriceRuleDiscountCodeEdge",
		nodes:"PriceRuleDiscountCode",
		pageInfo:"PageInfo"
	},
	PriceRuleDiscountCodeCreatePayload:{
		priceRule:"PriceRule",
		priceRuleDiscountCode:"PriceRuleDiscountCode",
		priceRuleUserErrors:"PriceRuleUserError",
		userErrors:"UserError"
	},
	PriceRuleDiscountCodeEdge:{
		cursor:"String",
		node:"PriceRuleDiscountCode"
	},
	PriceRuleDiscountCodeUpdatePayload:{
		priceRule:"PriceRule",
		priceRuleDiscountCode:"PriceRuleDiscountCode",
		priceRuleUserErrors:"PriceRuleUserError",
		userErrors:"UserError"
	},
	PriceRuleEdge:{
		cursor:"String",
		node:"PriceRule"
	},
	PriceRuleEntitlementToPrerequisiteQuantityRatio:{
		entitlementQuantity:"Int",
		prerequisiteQuantity:"Int"
	},
	PriceRuleFixedAmountValue:{
		amount:"Money"
	},
	PriceRuleItemEntitlements:{
		collections:"CollectionConnection",
		productVariants:"ProductVariantConnection",
		products:"ProductConnection",
		targetAllLineItems:"Boolean"
	},
	PriceRuleLineItemPrerequisites:{
		collections:"CollectionConnection",
		productVariants:"ProductVariantConnection",
		products:"ProductConnection"
	},
	PriceRuleMoneyRange:{
		greaterThan:"Money",
		greaterThanOrEqualTo:"Money",
		lessThan:"Money",
		lessThanOrEqualTo:"Money"
	},
	PriceRulePercentValue:{
		percentage:"Float"
	},
	PriceRulePrerequisiteToEntitlementQuantityRatio:{
		entitlementQuantity:"Int",
		prerequisiteQuantity:"Int"
	},
	PriceRuleQuantityRange:{
		greaterThan:"Int",
		greaterThanOrEqualTo:"Int",
		lessThan:"Int",
		lessThanOrEqualTo:"Int"
	},
	PriceRuleShareableUrl:{
		targetItemImage:"Image",
		targetType:"PriceRuleShareableUrlTargetType",
		title:"String",
		url:"URL"
	},
	PriceRuleShippingLineEntitlements:{
		countryCodes:"CountryCode",
		includeRestOfWorld:"Boolean",
		targetAllShippingLines:"Boolean"
	},
	PriceRuleUpdatePayload:{
		priceRule:"PriceRule",
		priceRuleDiscountCode:"PriceRuleDiscountCode",
		priceRuleUserErrors:"PriceRuleUserError",
		userErrors:"UserError"
	},
	PriceRuleUserError:{
		code:"PriceRuleErrorCode",
		field:"String",
		message:"String"
	},
	PriceRuleValidityPeriod:{
		end:"DateTime",
		start:"DateTime"
	},
	PriceRuleValue:{
		"...on PriceRuleFixedAmountValue":"PriceRuleFixedAmountValue",
		"...on PriceRulePercentValue":"PriceRulePercentValue"
	},
	PricingPercentageValue:{
		percentage:"Float"
	},
	PricingValue:{
		"...on MoneyV2":"MoneyV2",
		"...on PricingPercentageValue":"PricingPercentageValue"
	},
	PrivateMetafield:{
		createdAt:"DateTime",
		id:"ID",
		key:"String",
		namespace:"String",
		updatedAt:"DateTime",
		value:"String",
		valueType:"PrivateMetafieldValueType"
	},
	PrivateMetafieldConnection:{
		edges:"PrivateMetafieldEdge",
		nodes:"PrivateMetafield",
		pageInfo:"PageInfo"
	},
	PrivateMetafieldDeletePayload:{
		deletedPrivateMetafieldId:"ID",
		userErrors:"UserError"
	},
	PrivateMetafieldEdge:{
		cursor:"String",
		node:"PrivateMetafield"
	},
	PrivateMetafieldUpsertPayload:{
		privateMetafield:"PrivateMetafield",
		userErrors:"UserError"
	},
	Product:{
		availablePublicationCount:"Int",
		bodyHtml:"String",
		collections:"CollectionConnection",
		contextualPricing:"ProductContextualPricing",
		createdAt:"DateTime",
		customProductType:"String",
		defaultCursor:"String",
		description:"String",
		descriptionHtml:"HTML",
		descriptionPlainSummary:"String",
		featuredImage:"Image",
		featuredMedia:"Media",
		feedback:"ResourceFeedback",
		giftCardTemplateSuffix:"String",
		handle:"String",
		hasOnlyDefaultVariant:"Boolean",
		hasOutOfStockVariants:"Boolean",
		id:"ID",
		images:"ImageConnection",
		inCollection:"Boolean",
		isGiftCard:"Boolean",
		legacyResourceId:"UnsignedInt64",
		media:"MediaConnection",
		mediaCount:"Int",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		onlineStorePreviewUrl:"URL",
		onlineStoreUrl:"URL",
		options:"ProductOption",
		priceRange:"ProductPriceRange",
		priceRangeV2:"ProductPriceRangeV2",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		productCategory:"ProductCategory",
		productPublications:"ProductPublicationConnection",
		productType:"String",
		publicationCount:"Int",
		publications:"ProductPublicationConnection",
		publishedAt:"DateTime",
		publishedOnChannel:"Boolean",
		publishedOnCurrentChannel:"Boolean",
		publishedOnCurrentPublication:"Boolean",
		publishedOnPublication:"Boolean",
		requiresSellingPlan:"Boolean",
		resourcePublicationOnCurrentPublication:"ResourcePublicationV2",
		resourcePublications:"ResourcePublicationConnection",
		resourcePublicationsV2:"ResourcePublicationV2Connection",
		sellingPlanGroupCount:"Int",
		sellingPlanGroups:"SellingPlanGroupConnection",
		seo:"SEO",
		standardizedProductType:"StandardizedProductType",
		status:"ProductStatus",
		storefrontId:"StorefrontID",
		tags:"String",
		templateSuffix:"String",
		title:"String",
		totalInventory:"Int",
		totalVariants:"Int",
		tracksInventory:"Boolean",
		translations:"PublishedTranslation",
		unpublishedChannels:"ChannelConnection",
		unpublishedPublications:"PublicationConnection",
		updatedAt:"DateTime",
		variants:"ProductVariantConnection",
		vendor:"String"
	},
	ProductAppendImagesPayload:{
		newImages:"Image",
		product:"Product",
		userErrors:"UserError"
	},
	ProductCategory:{
		productTaxonomyNode:"ProductTaxonomyNode"
	},
	ProductChangeStatusPayload:{
		product:"Product",
		userErrors:"ProductChangeStatusUserError"
	},
	ProductChangeStatusUserError:{
		code:"ProductChangeStatusUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductConnection:{
		edges:"ProductEdge",
		nodes:"Product",
		pageInfo:"PageInfo"
	},
	ProductContextualPricing:{
		maxVariantPricing:"ProductVariantContextualPricing",
		minVariantPricing:"ProductVariantContextualPricing",
		priceRange:"ProductPriceRangeV2"
	},
	ProductCreateMediaPayload:{
		media:"Media",
		mediaUserErrors:"MediaUserError",
		product:"Product",
		userErrors:"UserError"
	},
	ProductCreatePayload:{
		product:"Product",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductDeleteAsyncPayload:{
		deleteProductId:"ID",
		job:"Job",
		userErrors:"ProductDeleteUserError"
	},
	ProductDeleteImagesPayload:{
		deletedImageIds:"ID",
		product:"Product",
		userErrors:"UserError"
	},
	ProductDeleteMediaPayload:{
		deletedMediaIds:"ID",
		deletedProductImageIds:"ID",
		mediaUserErrors:"MediaUserError",
		product:"Product",
		userErrors:"UserError"
	},
	ProductDeletePayload:{
		deletedProductId:"ID",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductDeleteUserError:{
		code:"ProductDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductDuplicateAsyncPayload:{
		duplicatedProductId:"ID",
		job:"Job",
		userErrors:"ProductDuplicateUserError"
	},
	ProductDuplicatePayload:{
		imageJob:"Job",
		newProduct:"Product",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductDuplicateUserError:{
		code:"ProductDuplicateUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductEdge:{
		cursor:"String",
		node:"Product"
	},
	ProductImageUpdatePayload:{
		image:"Image",
		userErrors:"UserError"
	},
	ProductJoinSellingPlanGroupsPayload:{
		product:"Product",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductLeaveSellingPlanGroupsPayload:{
		product:"Product",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductOption:{
		id:"ID",
		name:"String",
		position:"Int",
		translations:"PublishedTranslation",
		values:"String"
	},
	ProductPriceRange:{
		maxVariantPrice:"MoneyV2",
		minVariantPrice:"MoneyV2"
	},
	ProductPriceRangeV2:{
		maxVariantPrice:"MoneyV2",
		minVariantPrice:"MoneyV2"
	},
	ProductPublication:{
		channel:"Channel",
		isPublished:"Boolean",
		product:"Product",
		publishDate:"DateTime"
	},
	ProductPublicationConnection:{
		edges:"ProductPublicationEdge",
		nodes:"ProductPublication",
		pageInfo:"PageInfo"
	},
	ProductPublicationEdge:{
		cursor:"String",
		node:"ProductPublication"
	},
	ProductPublishPayload:{
		product:"Product",
		productPublications:"ProductPublication",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductReorderImagesPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	ProductReorderMediaPayload:{
		job:"Job",
		mediaUserErrors:"MediaUserError",
		userErrors:"UserError"
	},
	ProductResourceFeedback:{
		feedbackGeneratedAt:"DateTime",
		messages:"String",
		productId:"ID",
		productUpdatedAt:"DateTime",
		state:"ResourceFeedbackState"
	},
	ProductSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineItem:"LineItem",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	ProductTaxonomyNode:{
		fullName:"String",
		id:"ID",
		isLeaf:"Boolean",
		isRoot:"Boolean",
		name:"String"
	},
	ProductUnpublishPayload:{
		product:"Product",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductUpdateMediaPayload:{
		media:"Media",
		mediaUserErrors:"MediaUserError",
		product:"Product",
		userErrors:"UserError"
	},
	ProductUpdatePayload:{
		product:"Product",
		userErrors:"UserError"
	},
	ProductVariant:{
		availableForSale:"Boolean",
		barcode:"String",
		compareAtPrice:"Money",
		contextualPricing:"ProductVariantContextualPricing",
		createdAt:"DateTime",
		defaultCursor:"String",
		deliveryProfile:"DeliveryProfile",
		displayName:"String",
		fulfillmentService:"FulfillmentService",
		fulfillmentServiceEditable:"EditableProperty",
		harmonizedSystemCode:"String",
		id:"ID",
		image:"Image",
		inventoryItem:"InventoryItem",
		inventoryManagement:"ProductVariantInventoryManagement",
		inventoryPolicy:"ProductVariantInventoryPolicy",
		inventoryQuantity:"Int",
		legacyResourceId:"UnsignedInt64",
		media:"MediaConnection",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		position:"Int",
		presentmentPrices:"ProductVariantPricePairConnection",
		price:"Money",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		product:"Product",
		requiresShipping:"Boolean",
		selectedOptions:"SelectedOption",
		sellableOnlineQuantity:"Int",
		sellingPlanGroupCount:"Int",
		sellingPlanGroups:"SellingPlanGroupConnection",
		sku:"String",
		storefrontId:"StorefrontID",
		taxCode:"String",
		taxable:"Boolean",
		title:"String",
		translations:"PublishedTranslation",
		updatedAt:"DateTime",
		weight:"Float",
		weightUnit:"WeightUnit"
	},
	ProductVariantAppendMediaPayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"MediaUserError"
	},
	ProductVariantConnection:{
		edges:"ProductVariantEdge",
		nodes:"ProductVariant",
		pageInfo:"PageInfo"
	},
	ProductVariantContextualPricing:{
		compareAtPrice:"MoneyV2",
		price:"MoneyV2"
	},
	ProductVariantCreatePayload:{
		product:"Product",
		productVariant:"ProductVariant",
		userErrors:"UserError"
	},
	ProductVariantDeletePayload:{
		deletedProductVariantId:"ID",
		product:"Product",
		userErrors:"UserError"
	},
	ProductVariantDetachMediaPayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"MediaUserError"
	},
	ProductVariantEdge:{
		cursor:"String",
		node:"ProductVariant"
	},
	ProductVariantJoinSellingPlanGroupsPayload:{
		productVariant:"ProductVariant",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductVariantLeaveSellingPlanGroupsPayload:{
		productVariant:"ProductVariant",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductVariantPricePair:{
		compareAtPrice:"MoneyV2",
		price:"MoneyV2"
	},
	ProductVariantPricePairConnection:{
		edges:"ProductVariantPricePairEdge",
		nodes:"ProductVariantPricePair",
		pageInfo:"PageInfo"
	},
	ProductVariantPricePairEdge:{
		cursor:"String",
		node:"ProductVariantPricePair"
	},
	ProductVariantUpdatePayload:{
		product:"Product",
		productVariant:"ProductVariant",
		userErrors:"UserError"
	},
	ProductVariantsBulkCreatePayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"ProductVariantsBulkCreateUserError"
	},
	ProductVariantsBulkCreateUserError:{
		code:"ProductVariantsBulkCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductVariantsBulkDeletePayload:{
		product:"Product",
		userErrors:"ProductVariantsBulkDeleteUserError"
	},
	ProductVariantsBulkDeleteUserError:{
		code:"ProductVariantsBulkDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductVariantsBulkReorderPayload:{
		product:"Product",
		userErrors:"ProductVariantsBulkReorderUserError"
	},
	ProductVariantsBulkReorderUserError:{
		code:"ProductVariantsBulkReorderUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductVariantsBulkUpdatePayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"ProductVariantsBulkUpdateUserError"
	},
	ProductVariantsBulkUpdateUserError:{
		code:"ProductVariantsBulkUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	PubSubWebhookSubscriptionCreatePayload:{
		userErrors:"PubSubWebhookSubscriptionCreateUserError",
		webhookSubscription:"WebhookSubscription"
	},
	PubSubWebhookSubscriptionCreateUserError:{
		code:"PubSubWebhookSubscriptionCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	PubSubWebhookSubscriptionUpdatePayload:{
		userErrors:"PubSubWebhookSubscriptionUpdateUserError",
		webhookSubscription:"WebhookSubscription"
	},
	PubSubWebhookSubscriptionUpdateUserError:{
		code:"PubSubWebhookSubscriptionUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	Publication:{
		app:"App",
		collectionPublicationsV3:"ResourcePublicationConnection",
		collections:"CollectionConnection",
		hasCollection:"Boolean",
		id:"ID",
		name:"String",
		productPublicationsV3:"ResourcePublicationConnection",
		products:"ProductConnection",
		supportsFuturePublishing:"Boolean"
	},
	PublicationConnection:{
		edges:"PublicationEdge",
		nodes:"Publication",
		pageInfo:"PageInfo"
	},
	PublicationEdge:{
		cursor:"String",
		node:"Publication"
	},
	Publishable:{
		"...on Collection": "Collection",
		"...on Product": "Product",
		availablePublicationCount:"Int",
		publicationCount:"Int",
		publishedOnChannel:"Boolean",
		publishedOnCurrentChannel:"Boolean",
		publishedOnCurrentPublication:"Boolean",
		publishedOnPublication:"Boolean",
		resourcePublications:"ResourcePublicationConnection",
		resourcePublicationsV2:"ResourcePublicationV2Connection",
		unpublishedChannels:"ChannelConnection",
		unpublishedPublications:"PublicationConnection"
	},
	PublishablePublishPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PublishablePublishToCurrentChannelPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PublishableUnpublishPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PublishableUnpublishToCurrentChannelPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PublishedTranslation:{
		key:"String",
		locale:"String",
		marketId:"ID",
		value:"String"
	},
	PurchasingCompany:{
		company:"Company",
		contact:"CompanyContact",
		location:"CompanyLocation"
	},
	PurchasingEntity:{
		"...on Customer":"Customer",
		"...on PurchasingCompany":"PurchasingCompany"
	},
	QueryRoot:{
		abandonment:"Abandonment",
		abandonmentByAbandonedCheckoutId:"Abandonment",
		app:"App",
		appByHandle:"App",
		appByKey:"App",
		appDiscountType:"AppDiscountType",
		appDiscountTypes:"AppDiscountType",
		appInstallation:"AppInstallation",
		appInstallations:"AppInstallationConnection",
		automaticDiscount:"DiscountAutomatic",
		automaticDiscountNode:"DiscountAutomaticNode",
		automaticDiscountNodes:"DiscountAutomaticNodeConnection",
		automaticDiscountSavedSearches:"SavedSearchConnection",
		automaticDiscounts:"DiscountAutomaticConnection",
		availableCarrierServices:"DeliveryCarrierServiceAndLocations",
		availableLocales:"Locale",
		carrierService:"DeliveryCarrierService",
		channel:"Channel",
		channels:"ChannelConnection",
		checkoutProfile:"CheckoutProfile",
		checkoutProfiles:"CheckoutProfileConnection",
		codeDiscountNode:"DiscountCodeNode",
		codeDiscountNodeByCode:"DiscountCodeNode",
		codeDiscountNodes:"DiscountCodeNodeConnection",
		codeDiscountSavedSearches:"SavedSearchConnection",
		collection:"Collection",
		collectionByHandle:"Collection",
		collectionRulesConditions:"CollectionRuleConditions",
		collectionSavedSearches:"SavedSearchConnection",
		collections:"CollectionConnection",
		companies:"CompanyConnection",
		company:"Company",
		companyContact:"CompanyContact",
		companyContactRole:"CompanyContactRole",
		companyCount:"Int",
		companyLocation:"CompanyLocation",
		companyLocations:"CompanyLocationConnection",
		currentAppInstallation:"AppInstallation",
		currentBulkOperation:"BulkOperation",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		customerSegmentMembers:"CustomerSegmentMemberConnection",
		customerSegmentMembersQuery:"CustomerSegmentMembersQuery",
		customerSegmentMembership:"SegmentMembershipResponse",
		customers:"CustomerConnection",
		deletionEvents:"DeletionEventConnection",
		deliveryProfile:"DeliveryProfile",
		deliveryProfiles:"DeliveryProfileConnection",
		deliverySettings:"DeliverySetting",
		discountCodeCount:"Int",
		discountNode:"DiscountNode",
		discountNodes:"DiscountNodeConnection",
		discountRedeemCodeBulkCreation:"DiscountRedeemCodeBulkCreation",
		discountRedeemCodeSavedSearches:"SavedSearchConnection",
		dispute:"ShopifyPaymentsDispute",
		disputeEvidence:"ShopifyPaymentsDisputeEvidence",
		domain:"Domain",
		draftOrder:"DraftOrder",
		draftOrderSavedSearches:"SavedSearchConnection",
		draftOrderTag:"DraftOrderTag",
		draftOrders:"DraftOrderConnection",
		fileSavedSearches:"SavedSearchConnection",
		files:"FileConnection",
		fulfillment:"Fulfillment",
		fulfillmentOrder:"FulfillmentOrder",
		fulfillmentOrders:"FulfillmentOrderConnection",
		fulfillmentService:"FulfillmentService",
		giftCard:"GiftCard",
		giftCards:"GiftCardConnection",
		giftCardsCount:"UnsignedInt64",
		inventoryItem:"InventoryItem",
		inventoryItems:"InventoryItemConnection",
		inventoryLevel:"InventoryLevel",
		inventoryProperties:"InventoryProperties",
		job:"Job",
		location:"Location",
		locations:"LocationConnection",
		locationsAvailableForDeliveryProfiles:"Location",
		locationsAvailableForDeliveryProfilesConnection:"LocationConnection",
		manualHoldsFulfillmentOrders:"FulfillmentOrderConnection",
		market:"Market",
		marketByGeography:"Market",
		marketLocalizableResource:"MarketLocalizableResource",
		marketLocalizableResources:"MarketLocalizableResourceConnection",
		marketLocalizableResourcesByIds:"MarketLocalizableResourceConnection",
		marketingActivities:"MarketingActivityConnection",
		marketingActivity:"MarketingActivity",
		marketingEvent:"MarketingEvent",
		marketingEvents:"MarketingEventConnection",
		markets:"MarketConnection",
		metafield:"Metafield",
		metafieldDefinition:"MetafieldDefinition",
		metafieldDefinitionTypes:"MetafieldDefinitionType",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafieldStorefrontVisibilities:"MetafieldStorefrontVisibilityConnection",
		metafieldStorefrontVisibility:"MetafieldStorefrontVisibility",
		metaobject:"Metaobject",
		metaobjectByHandle:"Metaobject",
		metaobjectDefinition:"MetaobjectDefinition",
		metaobjectDefinitionByType:"MetaobjectDefinition",
		metaobjectDefinitions:"MetaobjectDefinitionConnection",
		metaobjects:"MetaobjectConnection",
		node:"Node",
		nodes:"Node",
		order:"Order",
		orderPaymentStatus:"OrderPaymentStatus",
		orderSavedSearches:"SavedSearchConnection",
		orders:"OrderConnection",
		paymentTermsTemplates:"PaymentTermsTemplate",
		priceList:"PriceList",
		priceLists:"PriceListConnection",
		priceRule:"PriceRule",
		priceRuleSavedSearches:"SavedSearchConnection",
		priceRules:"PriceRuleConnection",
		primaryMarket:"Market",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		product:"Product",
		productByHandle:"Product",
		productResourceFeedback:"ProductResourceFeedback",
		productSavedSearches:"SavedSearchConnection",
		productVariant:"ProductVariant",
		productVariants:"ProductVariantConnection",
		products:"ProductConnection",
		publicApiVersions:"ApiVersion",
		publication:"Publication",
		publications:"PublicationConnection",
		refund:"Refund",
		return:"Return",
		returnableFulfillment:"ReturnableFulfillment",
		returnableFulfillments:"ReturnableFulfillmentConnection",
		reverseDelivery:"ReverseDelivery",
		reverseFulfillmentOrder:"ReverseFulfillmentOrder",
		scriptTag:"ScriptTag",
		scriptTags:"ScriptTagConnection",
		segment:"Segment",
		segmentCount:"Int",
		segmentFilterSuggestions:"SegmentFilterConnection",
		segmentFilters:"SegmentFilterConnection",
		segmentMigrations:"SegmentMigrationConnection",
		segmentValueSuggestions:"SegmentValueConnection",
		segments:"SegmentConnection",
		sellingPlanGroup:"SellingPlanGroup",
		sellingPlanGroups:"SellingPlanGroupConnection",
		shop:"Shop",
		shopLocales:"ShopLocale",
		shopifyPaymentsAccount:"ShopifyPaymentsAccount",
		shopifyqlQuery:"ShopifyqlResponse",
		staffMember:"StaffMember",
		standardMetafieldDefinitionTemplates:"StandardMetafieldDefinitionTemplateConnection",
		subscriptionBillingAttempt:"SubscriptionBillingAttempt",
		subscriptionBillingCycle:"SubscriptionBillingCycle",
		subscriptionBillingCycles:"SubscriptionBillingCycleConnection",
		subscriptionContract:"SubscriptionContract",
		subscriptionContracts:"SubscriptionContractConnection",
		subscriptionDraft:"SubscriptionDraft",
		tenderTransactions:"TenderTransactionConnection",
		translatableResource:"TranslatableResource",
		translatableResources:"TranslatableResourceConnection",
		translatableResourcesByIds:"TranslatableResourceConnection",
		urlRedirect:"UrlRedirect",
		urlRedirectImport:"UrlRedirectImport",
		urlRedirectSavedSearches:"SavedSearchConnection",
		urlRedirects:"UrlRedirectConnection",
		webPixel:"WebPixel",
		webhookSubscription:"WebhookSubscription",
		webhookSubscriptions:"WebhookSubscriptionConnection"
	},
	Refund:{
		createdAt:"DateTime",
		duties:"RefundDuty",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		note:"String",
		order:"Order",
		refundLineItems:"RefundLineItemConnection",
		return:"Return",
		staffMember:"StaffMember",
		totalRefunded:"MoneyV2",
		totalRefundedSet:"MoneyBag",
		transactions:"OrderTransactionConnection",
		updatedAt:"DateTime"
	},
	RefundAgreement:{
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		reason:"OrderActionType",
		refund:"Refund",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	RefundConnection:{
		edges:"RefundEdge",
		nodes:"Refund",
		pageInfo:"PageInfo"
	},
	RefundCreatePayload:{
		order:"Order",
		refund:"Refund",
		userErrors:"UserError"
	},
	RefundDuty:{
		amountSet:"MoneyBag",
		originalDuty:"Duty"
	},
	RefundEdge:{
		cursor:"String",
		node:"Refund"
	},
	RefundLineItem:{
		lineItem:"LineItem",
		location:"Location",
		price:"Money",
		priceSet:"MoneyBag",
		quantity:"Int",
		restockType:"RefundLineItemRestockType",
		restocked:"Boolean",
		subtotal:"Money",
		subtotalSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag"
	},
	RefundLineItemConnection:{
		edges:"RefundLineItemEdge",
		nodes:"RefundLineItem",
		pageInfo:"PageInfo"
	},
	RefundLineItemEdge:{
		cursor:"String",
		node:"RefundLineItem"
	},
	ResourceAlert:{
		actions:"ResourceAlertAction",
		content:"HTML",
		dismissibleHandle:"String",
		icon:"ResourceAlertIcon",
		severity:"ResourceAlertSeverity",
		title:"String"
	},
	ResourceAlertAction:{
		primary:"Boolean",
		show:"String",
		title:"String",
		url:"URL"
	},
	ResourceFeedback:{
		appFeedback:"AppFeedback",
		details:"AppFeedback",
		summary:"String"
	},
	ResourceLimit:{
		available:"Boolean",
		quantityAvailable:"Int",
		quantityLimit:"Int",
		quantityUsed:"Int"
	},
	ResourcePublication:{
		channel:"Channel",
		isPublished:"Boolean",
		publication:"Publication",
		publishDate:"DateTime",
		publishable:"Publishable"
	},
	ResourcePublicationConnection:{
		edges:"ResourcePublicationEdge",
		nodes:"ResourcePublication",
		pageInfo:"PageInfo"
	},
	ResourcePublicationEdge:{
		cursor:"String",
		node:"ResourcePublication"
	},
	ResourcePublicationV2:{
		isPublished:"Boolean",
		publication:"Publication",
		publishDate:"DateTime",
		publishable:"Publishable"
	},
	ResourcePublicationV2Connection:{
		edges:"ResourcePublicationV2Edge",
		nodes:"ResourcePublicationV2",
		pageInfo:"PageInfo"
	},
	ResourcePublicationV2Edge:{
		cursor:"String",
		node:"ResourcePublicationV2"
	},
	Return:{
		decline:"ReturnDecline",
		id:"ID",
		name:"String",
		order:"Order",
		refunds:"RefundConnection",
		returnLineItems:"ReturnLineItemConnection",
		reverseFulfillmentOrders:"ReverseFulfillmentOrderConnection",
		status:"ReturnStatus",
		suggestedRefund:"SuggestedReturnRefund",
		totalQuantity:"Int"
	},
	ReturnApproveRequestPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnCancelPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnClosePayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnConnection:{
		edges:"ReturnEdge",
		nodes:"Return",
		pageInfo:"PageInfo"
	},
	ReturnCreatePayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnDecline:{
		note:"String",
		reason:"ReturnDeclineReason"
	},
	ReturnDeclineRequestPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnEdge:{
		cursor:"String",
		node:"Return"
	},
	ReturnLineItem:{
		customerNote:"String",
		fulfillmentLineItem:"FulfillmentLineItem",
		id:"ID",
		quantity:"Int",
		refundableQuantity:"Int",
		refundedQuantity:"Int",
		returnReason:"ReturnReason",
		returnReasonNote:"String",
		totalWeight:"Weight",
		withCodeDiscountedTotalPriceSet:"MoneyBag"
	},
	ReturnLineItemConnection:{
		edges:"ReturnLineItemEdge",
		nodes:"ReturnLineItem",
		pageInfo:"PageInfo"
	},
	ReturnLineItemEdge:{
		cursor:"String",
		node:"ReturnLineItem"
	},
	ReturnRefundPayload:{
		refund:"Refund",
		userErrors:"ReturnUserError"
	},
	ReturnReopenPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnRequestPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnUserError:{
		code:"ReturnErrorCode",
		field:"String",
		message:"String"
	},
	ReturnableFulfillment:{
		fulfillment:"Fulfillment",
		id:"ID",
		returnableFulfillmentLineItems:"ReturnableFulfillmentLineItemConnection"
	},
	ReturnableFulfillmentConnection:{
		edges:"ReturnableFulfillmentEdge",
		nodes:"ReturnableFulfillment",
		pageInfo:"PageInfo"
	},
	ReturnableFulfillmentEdge:{
		cursor:"String",
		node:"ReturnableFulfillment"
	},
	ReturnableFulfillmentLineItem:{
		fulfillmentLineItem:"FulfillmentLineItem",
		quantity:"Int"
	},
	ReturnableFulfillmentLineItemConnection:{
		edges:"ReturnableFulfillmentLineItemEdge",
		nodes:"ReturnableFulfillmentLineItem",
		pageInfo:"PageInfo"
	},
	ReturnableFulfillmentLineItemEdge:{
		cursor:"String",
		node:"ReturnableFulfillmentLineItem"
	},
	ReverseDelivery:{
		deliverable:"ReverseDeliveryDeliverable",
		id:"ID",
		reverseDeliveryLineItems:"ReverseDeliveryLineItemConnection",
		reverseFulfillmentOrder:"ReverseFulfillmentOrder"
	},
	ReverseDeliveryConnection:{
		edges:"ReverseDeliveryEdge",
		nodes:"ReverseDelivery",
		pageInfo:"PageInfo"
	},
	ReverseDeliveryCreateWithShippingPayload:{
		reverseDelivery:"ReverseDelivery",
		userErrors:"ReturnUserError"
	},
	ReverseDeliveryDeliverable:{
		"...on ReverseDeliveryShippingDeliverable":"ReverseDeliveryShippingDeliverable"
	},
	ReverseDeliveryDisposePayload:{
		reverseDeliveryLineItems:"ReverseDeliveryLineItem",
		userErrors:"ReturnUserError"
	},
	ReverseDeliveryEdge:{
		cursor:"String",
		node:"ReverseDelivery"
	},
	ReverseDeliveryLabelV2:{
		createdAt:"DateTime",
		publicFileUrl:"URL",
		updatedAt:"DateTime"
	},
	ReverseDeliveryLineItem:{
		dispositions:"ReverseFulfillmentOrderDisposition",
		id:"ID",
		quantity:"Int",
		reverseFulfillmentOrderLineItem:"ReverseFulfillmentOrderLineItem"
	},
	ReverseDeliveryLineItemConnection:{
		edges:"ReverseDeliveryLineItemEdge",
		nodes:"ReverseDeliveryLineItem",
		pageInfo:"PageInfo"
	},
	ReverseDeliveryLineItemEdge:{
		cursor:"String",
		node:"ReverseDeliveryLineItem"
	},
	ReverseDeliveryShippingDeliverable:{
		label:"ReverseDeliveryLabelV2",
		tracking:"ReverseDeliveryTrackingV2"
	},
	ReverseDeliveryShippingUpdatePayload:{
		reverseDelivery:"ReverseDelivery",
		userErrors:"ReturnUserError"
	},
	ReverseDeliveryTrackingV2:{
		carrierName:"String",
		number:"String",
		url:"URL"
	},
	ReverseFulfillmentOrder:{
		id:"ID",
		lineItems:"ReverseFulfillmentOrderLineItemConnection",
		order:"Order",
		reverseDeliveries:"ReverseDeliveryConnection",
		status:"ReverseFulfillmentOrderStatus",
		thirdPartyConfirmation:"ReverseFulfillmentOrderThirdPartyConfirmation"
	},
	ReverseFulfillmentOrderConnection:{
		edges:"ReverseFulfillmentOrderEdge",
		nodes:"ReverseFulfillmentOrder",
		pageInfo:"PageInfo"
	},
	ReverseFulfillmentOrderDisposePayload:{
		reverseFulfillmentOrderLineItems:"ReverseFulfillmentOrderLineItem",
		userErrors:"ReturnUserError"
	},
	ReverseFulfillmentOrderDisposition:{
		id:"ID",
		location:"Location",
		quantity:"Int",
		type:"ReverseFulfillmentOrderDispositionType"
	},
	ReverseFulfillmentOrderEdge:{
		cursor:"String",
		node:"ReverseFulfillmentOrder"
	},
	ReverseFulfillmentOrderLineItem:{
		dispositions:"ReverseFulfillmentOrderDisposition",
		fulfillmentLineItem:"FulfillmentLineItem",
		id:"ID",
		totalQuantity:"Int"
	},
	ReverseFulfillmentOrderLineItemConnection:{
		edges:"ReverseFulfillmentOrderLineItemEdge",
		nodes:"ReverseFulfillmentOrderLineItem",
		pageInfo:"PageInfo"
	},
	ReverseFulfillmentOrderLineItemEdge:{
		cursor:"String",
		node:"ReverseFulfillmentOrderLineItem"
	},
	ReverseFulfillmentOrderThirdPartyConfirmation:{
		status:"ReverseFulfillmentOrderThirdPartyConfirmationStatus"
	},
	SEO:{
		description:"String",
		title:"String"
	},
	Sale:{
		"...on AdjustmentSale": "AdjustmentSale",
		"...on DutySale": "DutySale",
		"...on GiftCardSale": "GiftCardSale",
		"...on ProductSale": "ProductSale",
		"...on ShippingLineSale": "ShippingLineSale",
		"...on TipSale": "TipSale",
		actionType:"SaleActionType",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	SaleConnection:{
		edges:"SaleEdge",
		nodes:"Sale",
		pageInfo:"PageInfo"
	},
	SaleEdge:{
		cursor:"String",
		node:"Sale"
	},
	SaleTax:{
		amount:"MoneyBag",
		id:"ID",
		taxLine:"TaxLine"
	},
	SalesAgreement:{
		"...on OrderAgreement": "OrderAgreement",
		"...on OrderEditAgreement": "OrderEditAgreement",
		"...on RefundAgreement": "RefundAgreement",
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		reason:"OrderActionType",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	SalesAgreementConnection:{
		edges:"SalesAgreementEdge",
		nodes:"SalesAgreement",
		pageInfo:"PageInfo"
	},
	SalesAgreementEdge:{
		cursor:"String",
		node:"SalesAgreement"
	},
	SavedSearch:{
		filters:"SearchFilter",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		name:"String",
		query:"String",
		resourceType:"SearchResultType",
		searchTerms:"String"
	},
	SavedSearchConnection:{
		edges:"SavedSearchEdge",
		nodes:"SavedSearch",
		pageInfo:"PageInfo"
	},
	SavedSearchCreatePayload:{
		savedSearch:"SavedSearch",
		userErrors:"UserError"
	},
	SavedSearchDeletePayload:{
		deletedSavedSearchId:"ID",
		shop:"Shop",
		userErrors:"UserError"
	},
	SavedSearchEdge:{
		cursor:"String",
		node:"SavedSearch"
	},
	SavedSearchUpdatePayload:{
		savedSearch:"SavedSearch",
		userErrors:"UserError"
	},
	ScriptDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		description:"String",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		title:"String",
		value:"PricingValue"
	},
	ScriptTag:{
		cache:"Boolean",
		createdAt:"DateTime",
		displayScope:"ScriptTagDisplayScope",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		src:"URL",
		updatedAt:"DateTime"
	},
	ScriptTagConnection:{
		edges:"ScriptTagEdge",
		nodes:"ScriptTag",
		pageInfo:"PageInfo"
	},
	ScriptTagCreatePayload:{
		scriptTag:"ScriptTag",
		userErrors:"UserError"
	},
	ScriptTagDeletePayload:{
		deletedScriptTagId:"ID",
		userErrors:"UserError"
	},
	ScriptTagEdge:{
		cursor:"String",
		node:"ScriptTag"
	},
	ScriptTagUpdatePayload:{
		scriptTag:"ScriptTag",
		userErrors:"UserError"
	},
	SearchFilter:{
		key:"String",
		value:"String"
	},
	SearchFilterOptions:{
		productAvailability:"FilterOption"
	},
	SearchResult:{
		description:"String",
		image:"Image",
		reference:"Node",
		title:"String",
		url:"URL"
	},
	SearchResultConnection:{
		edges:"SearchResultEdge",
		pageInfo:"PageInfo",
		resultsAfterCount:"Int"
	},
	SearchResultEdge:{
		cursor:"String",
		node:"SearchResult"
	},
	Segment:{
		creationDate:"DateTime",
		id:"ID",
		lastEditDate:"DateTime",
		name:"String",
		query:"String"
	},
	SegmentAssociationFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String",
		values:"SegmentAssociationFilterValueConnection"
	},
	SegmentAssociationFilterValue:{
		localizedName:"String",
		queryName:"String"
	},
	SegmentAssociationFilterValueConnection:{
		edges:"SegmentAssociationFilterValueEdge",
		nodes:"SegmentAssociationFilterValue",
		pageInfo:"PageInfo"
	},
	SegmentAssociationFilterValueEdge:{
		cursor:"String",
		node:"SegmentAssociationFilterValue"
	},
	SegmentAttributeStatistics:{
		average:"Float",
		sum:"Float"
	},
	SegmentBooleanFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentConnection:{
		edges:"SegmentEdge",
		nodes:"Segment",
		pageInfo:"PageInfo"
	},
	SegmentCreatePayload:{
		segment:"Segment",
		userErrors:"UserError"
	},
	SegmentDateFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentDeletePayload:{
		deletedSegmentId:"ID",
		userErrors:"UserError"
	},
	SegmentEdge:{
		cursor:"String",
		node:"Segment"
	},
	SegmentEnumFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String",
		values:"SegmentEnumFilterValueConnection"
	},
	SegmentEnumFilterValue:{
		localizedName:"String",
		queryName:"String"
	},
	SegmentEnumFilterValueConnection:{
		edges:"SegmentEnumFilterValueEdge",
		nodes:"SegmentEnumFilterValue",
		pageInfo:"PageInfo"
	},
	SegmentEnumFilterValueEdge:{
		cursor:"String",
		node:"SegmentEnumFilterValue"
	},
	SegmentEventFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		parameters:"SegmentEventFilterParameter",
		queryName:"String",
		returnValueType:"String",
		values:"SegmentEventFilterValueConnection"
	},
	SegmentEventFilterParameter:{
		localizedDescription:"String",
		localizedName:"String",
		optional:"Boolean",
		parameterType:"String",
		queryName:"String"
	},
	SegmentEventFilterValue:{
		localizedName:"String",
		queryName:"String"
	},
	SegmentEventFilterValueConnection:{
		edges:"SegmentEventFilterValueEdge",
		nodes:"SegmentEventFilterValue",
		pageInfo:"PageInfo"
	},
	SegmentEventFilterValueEdge:{
		cursor:"String",
		node:"SegmentEventFilterValue"
	},
	SegmentFilter:{
		"...on SegmentAssociationFilter": "SegmentAssociationFilter",
		"...on SegmentBooleanFilter": "SegmentBooleanFilter",
		"...on SegmentDateFilter": "SegmentDateFilter",
		"...on SegmentEnumFilter": "SegmentEnumFilter",
		"...on SegmentEventFilter": "SegmentEventFilter",
		"...on SegmentFloatFilter": "SegmentFloatFilter",
		"...on SegmentIntegerFilter": "SegmentIntegerFilter",
		"...on SegmentStringFilter": "SegmentStringFilter",
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentFilterConnection:{
		edges:"SegmentFilterEdge",
		nodes:"SegmentFilter",
		pageInfo:"PageInfo"
	},
	SegmentFilterEdge:{
		cursor:"String",
		node:"SegmentFilter"
	},
	SegmentFloatFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentIntegerFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentMembership:{
		isMember:"Boolean",
		segmentId:"ID"
	},
	SegmentMembershipResponse:{
		memberships:"SegmentMembership"
	},
	SegmentMigration:{
		id:"ID",
		savedSearchId:"ID",
		segmentId:"ID"
	},
	SegmentMigrationConnection:{
		edges:"SegmentMigrationEdge",
		nodes:"SegmentMigration",
		pageInfo:"PageInfo"
	},
	SegmentMigrationEdge:{
		cursor:"String",
		node:"SegmentMigration"
	},
	SegmentStatistics:{
		attributeStatistics:"SegmentAttributeStatistics",
		totalCount:"Int"
	},
	SegmentStringFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String",
		values:"SegmentStringFilterValueConnection"
	},
	SegmentStringFilterValue:{
		localizedName:"String",
		queryName:"String"
	},
	SegmentStringFilterValueConnection:{
		edges:"SegmentStringFilterValueEdge",
		nodes:"SegmentStringFilterValue",
		pageInfo:"PageInfo"
	},
	SegmentStringFilterValueEdge:{
		cursor:"String",
		node:"SegmentStringFilterValue"
	},
	SegmentUpdatePayload:{
		segment:"Segment",
		userErrors:"UserError"
	},
	SegmentValue:{
		localizedValue:"String",
		queryName:"String"
	},
	SegmentValueConnection:{
		edges:"SegmentValueEdge",
		nodes:"SegmentValue",
		pageInfo:"PageInfo"
	},
	SegmentValueEdge:{
		cursor:"String",
		node:"SegmentValue"
	},
	SelectedOption:{
		name:"String",
		value:"String"
	},
	SellingPlan:{
		billingPolicy:"SellingPlanBillingPolicy",
		category:"SellingPlanCategory",
		createdAt:"DateTime",
		deliveryPolicy:"SellingPlanDeliveryPolicy",
		description:"String",
		id:"ID",
		inventoryPolicy:"SellingPlanInventoryPolicy",
		name:"String",
		options:"String",
		position:"Int",
		pricingPolicies:"SellingPlanPricingPolicy"
	},
	SellingPlanAnchor:{
		cutoffDay:"Int",
		day:"Int",
		month:"Int",
		type:"SellingPlanAnchorType"
	},
	SellingPlanBillingPolicy:{
		"...on SellingPlanFixedBillingPolicy":"SellingPlanFixedBillingPolicy",
		"...on SellingPlanRecurringBillingPolicy":"SellingPlanRecurringBillingPolicy"
	},
	SellingPlanCheckoutCharge:{
		type:"SellingPlanCheckoutChargeType",
		value:"SellingPlanCheckoutChargeValue"
	},
	SellingPlanCheckoutChargePercentageValue:{
		percentage:"Float"
	},
	SellingPlanCheckoutChargeValue:{
		"...on MoneyV2":"MoneyV2",
		"...on SellingPlanCheckoutChargePercentageValue":"SellingPlanCheckoutChargePercentageValue"
	},
	SellingPlanConnection:{
		edges:"SellingPlanEdge",
		nodes:"SellingPlan",
		pageInfo:"PageInfo"
	},
	SellingPlanDeliveryPolicy:{
		"...on SellingPlanFixedDeliveryPolicy":"SellingPlanFixedDeliveryPolicy",
		"...on SellingPlanRecurringDeliveryPolicy":"SellingPlanRecurringDeliveryPolicy"
	},
	SellingPlanEdge:{
		cursor:"String",
		node:"SellingPlan"
	},
	SellingPlanFixedBillingPolicy:{
		checkoutCharge:"SellingPlanCheckoutCharge",
		remainingBalanceChargeExactTime:"DateTime",
		remainingBalanceChargeTimeAfterCheckout:"String",
		remainingBalanceChargeTrigger:"SellingPlanRemainingBalanceChargeTrigger"
	},
	SellingPlanFixedDeliveryPolicy:{
		anchors:"SellingPlanAnchor",
		cutoff:"Int",
		fulfillmentExactTime:"DateTime",
		fulfillmentTrigger:"SellingPlanFulfillmentTrigger",
		intent:"SellingPlanFixedDeliveryPolicyIntent",
		preAnchorBehavior:"SellingPlanFixedDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanFixedPricingPolicy:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue",
		createdAt:"DateTime"
	},
	SellingPlanGroup:{
		appId:"String",
		appliesToProduct:"Boolean",
		appliesToProductVariant:"Boolean",
		appliesToProductVariants:"Boolean",
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		merchantCode:"String",
		name:"String",
		options:"String",
		position:"Int",
		productCount:"Int",
		productVariantCount:"Int",
		productVariants:"ProductVariantConnection",
		products:"ProductConnection",
		sellingPlans:"SellingPlanConnection",
		summary:"String"
	},
	SellingPlanGroupAddProductVariantsPayload:{
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupAddProductsPayload:{
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupConnection:{
		edges:"SellingPlanGroupEdge",
		nodes:"SellingPlanGroup",
		pageInfo:"PageInfo"
	},
	SellingPlanGroupCreatePayload:{
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupDeletePayload:{
		deletedSellingPlanGroupId:"ID",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupEdge:{
		cursor:"String",
		node:"SellingPlanGroup"
	},
	SellingPlanGroupRemoveProductVariantsPayload:{
		removedProductVariantIds:"ID",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupRemoveProductsPayload:{
		removedProductIds:"ID",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupUpdatePayload:{
		deletedSellingPlanIds:"ID",
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupUserError:{
		code:"SellingPlanGroupUserErrorCode",
		field:"String",
		message:"String"
	},
	SellingPlanInventoryPolicy:{
		reserve:"SellingPlanReserve"
	},
	SellingPlanPricingPolicy:{
		"...on SellingPlanFixedPricingPolicy":"SellingPlanFixedPricingPolicy",
		"...on SellingPlanRecurringPricingPolicy":"SellingPlanRecurringPricingPolicy"
	},
	SellingPlanPricingPolicyAdjustmentValue:{
		"...on MoneyV2":"MoneyV2",
		"...on SellingPlanPricingPolicyPercentageValue":"SellingPlanPricingPolicyPercentageValue"
	},
	SellingPlanPricingPolicyBase:{
		"...on SellingPlanFixedPricingPolicy": "SellingPlanFixedPricingPolicy",
		"...on SellingPlanRecurringPricingPolicy": "SellingPlanRecurringPricingPolicy",
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue"
	},
	SellingPlanPricingPolicyPercentageValue:{
		percentage:"Float"
	},
	SellingPlanRecurringBillingPolicy:{
		anchors:"SellingPlanAnchor",
		createdAt:"DateTime",
		interval:"SellingPlanInterval",
		intervalCount:"Int",
		maxCycles:"Int",
		minCycles:"Int"
	},
	SellingPlanRecurringDeliveryPolicy:{
		anchors:"SellingPlanAnchor",
		createdAt:"DateTime",
		cutoff:"Int",
		intent:"SellingPlanRecurringDeliveryPolicyIntent",
		interval:"SellingPlanInterval",
		intervalCount:"Int",
		preAnchorBehavior:"SellingPlanRecurringDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanRecurringPricingPolicy:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue",
		afterCycle:"Int",
		createdAt:"DateTime"
	},
	ShippingLine:{
		carrierIdentifier:"String",
		code:"String",
		custom:"Boolean",
		deliveryCategory:"String",
		discountAllocations:"DiscountAllocation",
		discountedPrice:"MoneyV2",
		discountedPriceSet:"MoneyBag",
		id:"ID",
		originalPrice:"MoneyV2",
		originalPriceSet:"MoneyBag",
		phone:"String",
		price:"Money",
		requestedFulfillmentService:"FulfillmentService",
		shippingRateHandle:"String",
		source:"String",
		taxLines:"TaxLine",
		title:"String"
	},
	ShippingLineConnection:{
		edges:"ShippingLineEdge",
		nodes:"ShippingLine",
		pageInfo:"PageInfo"
	},
	ShippingLineEdge:{
		cursor:"String",
		node:"ShippingLine"
	},
	ShippingLineSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		shippingLine:"ShippingLine",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	ShippingMethod:{
		code:"String",
		label:"String"
	},
	ShippingPackageDeletePayload:{
		deletedId:"ID",
		userErrors:"UserError"
	},
	ShippingPackageMakeDefaultPayload:{
		userErrors:"UserError"
	},
	ShippingPackageUpdatePayload:{
		userErrors:"UserError"
	},
	ShippingRate:{
		handle:"String",
		price:"MoneyV2",
		title:"String"
	},
	ShippingRefund:{
		amount:"Money",
		amountSet:"MoneyBag",
		maximumRefundable:"Money",
		maximumRefundableSet:"MoneyBag",
		tax:"Money",
		taxSet:"MoneyBag"
	},
	Shop:{
		alerts:"ShopAlert",
		allProductCategories:"ProductCategory",
		analyticsToken:"String",
		assignedFulfillmentOrders:"FulfillmentOrderConnection",
		availableChannelApps:"AppConnection",
		billingAddress:"ShopAddress",
		channelCount:"Int",
		channelDefinitionsForInstalledChannels:"AvailableChannelDefinitionsByChannel",
		channels:"ChannelConnection",
		checkoutApiSupported:"Boolean",
		collectionByHandle:"Collection",
		collectionSavedSearches:"SavedSearchConnection",
		collections:"CollectionConnection",
		contactEmail:"String",
		countriesInShippingZones:"CountriesInShippingZones",
		currencyCode:"CurrencyCode",
		currencyFormats:"CurrencyFormats",
		currencySettings:"CurrencySettingConnection",
		customerAccounts:"ShopCustomerAccountsSetting",
		customerSavedSearches:"SavedSearchConnection",
		customerTags:"StringConnection",
		customers:"CustomerConnection",
		description:"String",
		domains:"Domain",
		draftOrderSavedSearches:"SavedSearchConnection",
		draftOrderTags:"StringConnection",
		draftOrders:"DraftOrderConnection",
		email:"String",
		enabledPresentmentCurrencies:"CurrencyCode",
		features:"ShopFeatures",
		fulfillmentOrders:"FulfillmentOrderConnection",
		fulfillmentServices:"FulfillmentService",
		ianaTimezone:"String",
		id:"ID",
		inventoryItems:"InventoryItemConnection",
		limitedPendingOrderCount:"LimitedPendingOrderCount",
		locations:"LocationConnection",
		marketingEvents:"MarketingEventConnection",
		merchantApprovalSignals:"MerchantApprovalSignals",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		myshopifyDomain:"String",
		name:"String",
		navigationSettings:"NavigationItem",
		orderNumberFormatPrefix:"String",
		orderNumberFormatSuffix:"String",
		orderSavedSearches:"SavedSearchConnection",
		orderTags:"StringConnection",
		orders:"OrderConnection",
		paymentSettings:"PaymentSettings",
		pendingOrderCount:"Int",
		plan:"ShopPlan",
		priceRuleSavedSearches:"SavedSearchConnection",
		priceRules:"PriceRuleConnection",
		primaryDomain:"Domain",
		privateMetafield:"PrivateMetafield",
		privateMetafields:"PrivateMetafieldConnection",
		productByHandle:"Product",
		productImages:"ImageConnection",
		productSavedSearches:"SavedSearchConnection",
		productTags:"StringConnection",
		productTypes:"StringConnection",
		productVariants:"ProductVariantConnection",
		productVendors:"StringConnection",
		products:"ProductConnection",
		publicationCount:"Int",
		resourceLimits:"ShopResourceLimits",
		richTextEditorUrl:"URL",
		search:"SearchResultConnection",
		searchFilters:"SearchFilterOptions",
		setupRequired:"Boolean",
		shipsToCountries:"CountryCode",
		shopPolicies:"ShopPolicy",
		shopifyPaymentsAccount:"ShopifyPaymentsAccount",
		staffMembers:"StaffMemberConnection",
		storefrontAccessTokens:"StorefrontAccessTokenConnection",
		storefrontUrl:"URL",
		taxShipping:"Boolean",
		taxesIncluded:"Boolean",
		timezoneAbbreviation:"String",
		timezoneOffset:"String",
		timezoneOffsetMinutes:"Int",
		transactionalSmsDisabled:"Boolean",
		translations:"PublishedTranslation",
		unitSystem:"UnitSystem",
		uploadedImagesByIds:"Image",
		url:"URL",
		weightUnit:"WeightUnit"
	},
	ShopAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		company:"String",
		coordinatesValidated:"Boolean",
		country:"String",
		countryCode:"String",
		countryCodeV2:"CountryCode",
		firstName:"String",
		formatted:"String",
		formattedArea:"String",
		id:"ID",
		lastName:"String",
		latitude:"Float",
		longitude:"Float",
		name:"String",
		phone:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	ShopAlert:{
		action:"ShopAlertAction",
		description:"String"
	},
	ShopAlertAction:{
		title:"String",
		url:"URL"
	},
	ShopFeatures:{
		avalaraAvatax:"Boolean",
		branding:"ShopBranding",
		captcha:"Boolean",
		captchaExternalDomains:"Boolean",
		deliveryProfiles:"Boolean",
		dynamicRemarketing:"Boolean",
		eligibleForSubscriptionMigration:"Boolean",
		eligibleForSubscriptions:"Boolean",
		giftCards:"Boolean",
		harmonizedSystemCode:"Boolean",
		internationalDomains:"Boolean",
		internationalPriceOverrides:"Boolean",
		internationalPriceRules:"Boolean",
		legacySubscriptionGatewayEnabled:"Boolean",
		liveView:"Boolean",
		multiLocation:"Boolean",
		onboardingVisual:"Boolean",
		paypalExpressSubscriptionGatewayStatus:"PaypalExpressSubscriptionsGatewayStatus",
		reports:"Boolean",
		sellsSubscriptions:"Boolean",
		shopifyPlus:"Boolean",
		showMetrics:"Boolean",
		storefront:"Boolean",
		usingShopifyBalance:"Boolean"
	},
	ShopLocale:{
		locale:"String",
		marketWebPresences:"MarketWebPresence",
		name:"String",
		primary:"Boolean",
		published:"Boolean"
	},
	ShopLocaleDisablePayload:{
		locale:"String",
		userErrors:"UserError"
	},
	ShopLocaleEnablePayload:{
		shopLocale:"ShopLocale",
		userErrors:"UserError"
	},
	ShopLocaleUpdatePayload:{
		shopLocale:"ShopLocale",
		userErrors:"UserError"
	},
	ShopPlan:{
		displayName:"String",
		partnerDevelopment:"Boolean",
		shopifyPlus:"Boolean"
	},
	ShopPolicy:{
		body:"HTML",
		id:"ID",
		translations:"PublishedTranslation",
		type:"ShopPolicyType",
		url:"URL"
	},
	ShopPolicyUpdatePayload:{
		shopPolicy:"ShopPolicy",
		userErrors:"ShopPolicyUserError"
	},
	ShopPolicyUserError:{
		code:"ShopPolicyErrorCode",
		field:"String",
		message:"String"
	},
	ShopResourceFeedbackCreatePayload:{
		feedback:"AppFeedback",
		userErrors:"ShopResourceFeedbackCreateUserError"
	},
	ShopResourceFeedbackCreateUserError:{
		code:"ShopResourceFeedbackCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ShopResourceLimits:{
		locationLimit:"Int",
		maxProductOptions:"Int",
		maxProductVariants:"Int",
		redirectLimitReached:"Boolean",
		skuResourceLimits:"ResourceLimit"
	},
	ShopifyPaymentsAccount:{
		activated:"Boolean",
		balance:"MoneyV2",
		bankAccounts:"ShopifyPaymentsBankAccountConnection",
		chargeStatementDescriptor:"String",
		chargeStatementDescriptors:"ShopifyPaymentsChargeStatementDescriptor",
		country:"String",
		defaultCurrency:"CurrencyCode",
		disputes:"ShopifyPaymentsDisputeConnection",
		fraudSettings:"ShopifyPaymentsFraudSettings",
		id:"ID",
		notificationSettings:"ShopifyPaymentsNotificationSettings",
		onboardable:"Boolean",
		payoutSchedule:"ShopifyPaymentsPayoutSchedule",
		payoutStatementDescriptor:"String",
		payouts:"ShopifyPaymentsPayoutConnection",
		permittedVerificationDocuments:"ShopifyPaymentsVerificationDocument",
		verifications:"ShopifyPaymentsVerification"
	},
	ShopifyPaymentsBankAccount:{
		accountNumber:"String",
		accountNumberLastDigits:"String",
		bankName:"String",
		country:"CountryCode",
		createdAt:"DateTime",
		currency:"CurrencyCode",
		id:"ID",
		payouts:"ShopifyPaymentsPayoutConnection",
		routingNumber:"String",
		status:"ShopifyPaymentsBankAccountStatus"
	},
	ShopifyPaymentsBankAccountConnection:{
		edges:"ShopifyPaymentsBankAccountEdge",
		nodes:"ShopifyPaymentsBankAccount",
		pageInfo:"PageInfo"
	},
	ShopifyPaymentsBankAccountEdge:{
		cursor:"String",
		node:"ShopifyPaymentsBankAccount"
	},
	ShopifyPaymentsChargeStatementDescriptor:{
		"...on ShopifyPaymentsDefaultChargeStatementDescriptor": "ShopifyPaymentsDefaultChargeStatementDescriptor",
		"...on ShopifyPaymentsJpChargeStatementDescriptor": "ShopifyPaymentsJpChargeStatementDescriptor",
		default:"String",
		prefix:"String"
	},
	ShopifyPaymentsDefaultChargeStatementDescriptor:{
		default:"String",
		prefix:"String"
	},
	ShopifyPaymentsDispute:{
		amount:"MoneyV2",
		evidenceDueBy:"Date",
		evidenceSentOn:"Date",
		finalizedOn:"Date",
		id:"ID",
		initiatedAt:"DateTime",
		legacyResourceId:"UnsignedInt64",
		order:"Order",
		reasonDetails:"ShopifyPaymentsDisputeReasonDetails",
		status:"DisputeStatus",
		type:"DisputeType"
	},
	ShopifyPaymentsDisputeConnection:{
		edges:"ShopifyPaymentsDisputeEdge",
		nodes:"ShopifyPaymentsDispute",
		pageInfo:"PageInfo"
	},
	ShopifyPaymentsDisputeEdge:{
		cursor:"String",
		node:"ShopifyPaymentsDispute"
	},
	ShopifyPaymentsDisputeEvidence:{
		accessActivityLog:"String",
		billingAddress:"MailingAddress",
		cancellationPolicyDisclosure:"String",
		cancellationPolicyFile:"ShopifyPaymentsDisputeFileUpload",
		cancellationRebuttal:"String",
		customerCommunicationFile:"ShopifyPaymentsDisputeFileUpload",
		customerEmailAddress:"String",
		customerFirstName:"String",
		customerLastName:"String",
		customerPurchaseIp:"String",
		dispute:"ShopifyPaymentsDispute",
		disputeFileUploads:"ShopifyPaymentsDisputeFileUpload",
		fulfillments:"ShopifyPaymentsDisputeFulfillment",
		id:"ID",
		productDescription:"String",
		refundPolicyDisclosure:"String",
		refundPolicyFile:"ShopifyPaymentsDisputeFileUpload",
		refundRefusalExplanation:"String",
		serviceDocumentationFile:"ShopifyPaymentsDisputeFileUpload",
		shippingAddress:"MailingAddress",
		shippingDocumentationFile:"ShopifyPaymentsDisputeFileUpload",
		submitted:"Boolean",
		uncategorizedFile:"ShopifyPaymentsDisputeFileUpload",
		uncategorizedText:"String"
	},
	ShopifyPaymentsDisputeFileUpload:{
		disputeEvidenceType:"ShopifyPaymentsDisputeEvidenceFileType",
		fileSize:"Int",
		fileType:"String",
		id:"ID",
		originalFileName:"String",
		url:"URL"
	},
	ShopifyPaymentsDisputeFulfillment:{
		id:"ID",
		shippingCarrier:"String",
		shippingDate:"Date",
		shippingTrackingNumber:"String"
	},
	ShopifyPaymentsDisputeReasonDetails:{
		networkReasonCode:"String",
		reason:"ShopifyPaymentsDisputeReason"
	},
	ShopifyPaymentsExtendedAuthorization:{
		extendedAuthorizationExpiresAt:"DateTime",
		standardAuthorizationExpiresAt:"DateTime"
	},
	ShopifyPaymentsFraudSettings:{
		declineChargeOnAvsFailure:"Boolean",
		declineChargeOnCvcFailure:"Boolean"
	},
	ShopifyPaymentsJpChargeStatementDescriptor:{
		default:"String",
		kana:"String",
		kanji:"String",
		prefix:"String"
	},
	ShopifyPaymentsNotificationSettings:{
		payouts:"Boolean"
	},
	ShopifyPaymentsPayout:{
		bankAccount:"ShopifyPaymentsBankAccount",
		gross:"MoneyV2",
		id:"ID",
		issuedAt:"DateTime",
		legacyResourceId:"UnsignedInt64",
		net:"MoneyV2",
		status:"ShopifyPaymentsPayoutStatus",
		summary:"ShopifyPaymentsPayoutSummary",
		transactionType:"ShopifyPaymentsPayoutTransactionType"
	},
	ShopifyPaymentsPayoutConnection:{
		edges:"ShopifyPaymentsPayoutEdge",
		nodes:"ShopifyPaymentsPayout",
		pageInfo:"PageInfo"
	},
	ShopifyPaymentsPayoutEdge:{
		cursor:"String",
		node:"ShopifyPaymentsPayout"
	},
	ShopifyPaymentsPayoutSchedule:{
		interval:"ShopifyPaymentsPayoutInterval",
		monthlyAnchor:"Int",
		weeklyAnchor:"DayOfTheWeek"
	},
	ShopifyPaymentsPayoutSummary:{
		adjustmentsFee:"MoneyV2",
		adjustmentsGross:"MoneyV2",
		chargesFee:"MoneyV2",
		chargesGross:"MoneyV2",
		refundsFee:"MoneyV2",
		refundsFeeGross:"MoneyV2",
		reservedFundsFee:"MoneyV2",
		reservedFundsGross:"MoneyV2",
		retriedPayoutsFee:"MoneyV2",
		retriedPayoutsGross:"MoneyV2"
	},
	ShopifyPaymentsRefundSet:{
		acquirerReferenceNumber:"String"
	},
	ShopifyPaymentsTransactionSet:{
		extendedAuthorizationSet:"ShopifyPaymentsExtendedAuthorization",
		refundSet:"ShopifyPaymentsRefundSet"
	},
	ShopifyPaymentsVerification:{
		id:"ID",
		status:"ShopifyPaymentsVerificationStatus",
		subject:"ShopifyPaymentsVerificationSubject"
	},
	ShopifyPaymentsVerificationDocument:{
		backRequired:"Boolean",
		frontRequired:"Boolean",
		type:"ShopifyPaymentsVerificationDocumentType"
	},
	ShopifyPaymentsVerificationSubject:{
		familyName:"String",
		givenName:"String"
	},
	ShopifyqlResponse:{
		"...on PolarisVizResponse": "PolarisVizResponse",
		"...on TableResponse": "TableResponse",
		parseErrors:"ParseError",
		tableData:"TableData"
	},
	StaffMember:{
		active:"Boolean",
		avatar:"Image",
		email:"String",
		exists:"Boolean",
		firstName:"String",
		id:"ID",
		initials:"String",
		isShopOwner:"Boolean",
		lastName:"String",
		locale:"String",
		name:"String",
		phone:"String",
		privateData:"StaffMemberPrivateData"
	},
	StaffMemberConnection:{
		edges:"StaffMemberEdge",
		nodes:"StaffMember",
		pageInfo:"PageInfo"
	},
	StaffMemberEdge:{
		cursor:"String",
		node:"StaffMember"
	},
	StaffMemberPrivateData:{
		accountSettingsUrl:"URL",
		createdAt:"DateTime",
		permissions:"StaffMemberPermission"
	},
	StagedMediaUploadTarget:{
		parameters:"StagedUploadParameter",
		resourceUrl:"URL",
		url:"URL"
	},
	StagedUploadParameter:{
		name:"String",
		value:"String"
	},
	StagedUploadTarget:{
		parameters:"ImageUploadParameter",
		url:"String"
	},
	StagedUploadTargetGeneratePayload:{
		parameters:"MutationsStagedUploadTargetGenerateUploadParameter",
		url:"String",
		userErrors:"UserError"
	},
	StagedUploadTargetsGeneratePayload:{
		urls:"StagedUploadTarget",
		userErrors:"UserError"
	},
	StagedUploadsCreatePayload:{
		stagedTargets:"StagedMediaUploadTarget",
		userErrors:"UserError"
	},
	StandardMetafieldDefinitionEnablePayload:{
		createdDefinition:"MetafieldDefinition",
		userErrors:"StandardMetafieldDefinitionEnableUserError"
	},
	StandardMetafieldDefinitionEnableUserError:{
		code:"StandardMetafieldDefinitionEnableUserErrorCode",
		field:"String",
		message:"String"
	},
	StandardMetafieldDefinitionTemplate:{
		description:"String",
		id:"ID",
		key:"String",
		name:"String",
		namespace:"String",
		ownerTypes:"MetafieldOwnerType",
		type:"MetafieldDefinitionType",
		validations:"MetafieldDefinitionValidation",
		visibleToStorefrontApi:"Boolean"
	},
	StandardMetafieldDefinitionTemplateConnection:{
		edges:"StandardMetafieldDefinitionTemplateEdge",
		nodes:"StandardMetafieldDefinitionTemplate",
		pageInfo:"PageInfo"
	},
	StandardMetafieldDefinitionTemplateEdge:{
		cursor:"String",
		node:"StandardMetafieldDefinitionTemplate"
	},
	StandardMetaobjectDefinitionEnablePayload:{
		metaobjectDefinition:"MetaobjectDefinition",
		userErrors:"MetaobjectUserError"
	},
	StandardizedProductType:{
		productTaxonomyNode:"ProductTaxonomyNode"
	},
	StorefrontAccessToken:{
		accessScopes:"AccessScope",
		accessToken:"String",
		createdAt:"DateTime",
		id:"ID",
		title:"String",
		updatedAt:"DateTime"
	},
	StorefrontAccessTokenConnection:{
		edges:"StorefrontAccessTokenEdge",
		nodes:"StorefrontAccessToken",
		pageInfo:"PageInfo"
	},
	StorefrontAccessTokenCreatePayload:{
		shop:"Shop",
		storefrontAccessToken:"StorefrontAccessToken",
		userErrors:"UserError"
	},
	StorefrontAccessTokenDeletePayload:{
		deletedStorefrontAccessTokenId:"ID",
		userErrors:"UserError"
	},
	StorefrontAccessTokenEdge:{
		cursor:"String",
		node:"StorefrontAccessToken"
	},
	StorefrontID: `scalar.StorefrontID` as const,
	StringConnection:{
		edges:"StringEdge",
		pageInfo:"PageInfo"
	},
	StringEdge:{
		cursor:"String",
		node:"String"
	},
	SubscriptionAppliedCodeDiscount:{
		id:"ID",
		redeemCode:"String",
		rejectionReason:"SubscriptionDiscountRejectionReason"
	},
	SubscriptionBillingAttempt:{
		completedAt:"DateTime",
		createdAt:"DateTime",
		errorCode:"SubscriptionBillingAttemptErrorCode",
		errorMessage:"String",
		id:"ID",
		idempotencyKey:"String",
		nextActionUrl:"URL",
		order:"Order",
		originTime:"DateTime",
		ready:"Boolean",
		subscriptionContract:"SubscriptionContract"
	},
	SubscriptionBillingAttemptConnection:{
		edges:"SubscriptionBillingAttemptEdge",
		nodes:"SubscriptionBillingAttempt",
		pageInfo:"PageInfo"
	},
	SubscriptionBillingAttemptCreatePayload:{
		subscriptionBillingAttempt:"SubscriptionBillingAttempt",
		userErrors:"BillingAttemptUserError"
	},
	SubscriptionBillingAttemptEdge:{
		cursor:"String",
		node:"SubscriptionBillingAttempt"
	},
	SubscriptionBillingCycle:{
		billingAttemptExpectedDate:"DateTime",
		billingAttempts:"SubscriptionBillingAttemptConnection",
		cycleEndAt:"DateTime",
		cycleIndex:"Int",
		cycleStartAt:"DateTime",
		edited:"Boolean",
		editedContract:"SubscriptionBillingCycleEditedContract",
		skipped:"Boolean",
		sourceContract:"SubscriptionContract",
		status:"SubscriptionBillingCycleBillingCycleStatus"
	},
	SubscriptionBillingCycleConnection:{
		edges:"SubscriptionBillingCycleEdge",
		nodes:"SubscriptionBillingCycle",
		pageInfo:"PageInfo"
	},
	SubscriptionBillingCycleContractDraftCommitPayload:{
		contract:"SubscriptionBillingCycleEditedContract",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionBillingCycleContractDraftConcatenatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionBillingCycleContractEditPayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionBillingCycleEdge:{
		cursor:"String",
		node:"SubscriptionBillingCycle"
	},
	SubscriptionBillingCycleEditDeletePayload:{
		billingCycles:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleUserError"
	},
	SubscriptionBillingCycleEditedContract:{
		app:"App",
		appAdminUrl:"URL",
		billingCycles:"SubscriptionBillingCycleConnection",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionManualDiscountConnection",
		lineCount:"Int",
		lines:"SubscriptionLineConnection",
		note:"String",
		orders:"OrderConnection",
		updatedAt:"DateTime"
	},
	SubscriptionBillingCycleEditsDeletePayload:{
		billingCycles:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleUserError"
	},
	SubscriptionBillingCycleScheduleEditPayload:{
		billingCycle:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleUserError"
	},
	SubscriptionBillingCycleUserError:{
		code:"SubscriptionBillingCycleErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionBillingPolicy:{
		anchors:"SellingPlanAnchor",
		interval:"SellingPlanInterval",
		intervalCount:"Int",
		maxCycles:"Int",
		minCycles:"Int"
	},
	SubscriptionContract:{
		app:"App",
		appAdminUrl:"URL",
		billingAttempts:"SubscriptionBillingAttemptConnection",
		billingPolicy:"SubscriptionBillingPolicy",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryPolicy:"SubscriptionDeliveryPolicy",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionManualDiscountConnection",
		id:"ID",
		lastPaymentStatus:"SubscriptionContractLastPaymentStatus",
		lineCount:"Int",
		lines:"SubscriptionLineConnection",
		nextBillingDate:"DateTime",
		note:"String",
		orders:"OrderConnection",
		originOrder:"Order",
		status:"SubscriptionContractSubscriptionStatus",
		updatedAt:"DateTime"
	},
	SubscriptionContractBase:{
		"...on SubscriptionBillingCycleEditedContract": "SubscriptionBillingCycleEditedContract",
		"...on SubscriptionContract": "SubscriptionContract",
		app:"App",
		appAdminUrl:"URL",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionManualDiscountConnection",
		lineCount:"Int",
		lines:"SubscriptionLineConnection",
		note:"String",
		orders:"OrderConnection",
		updatedAt:"DateTime"
	},
	SubscriptionContractConnection:{
		edges:"SubscriptionContractEdge",
		nodes:"SubscriptionContract",
		pageInfo:"PageInfo"
	},
	SubscriptionContractCreatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionContractEdge:{
		cursor:"String",
		node:"SubscriptionContract"
	},
	SubscriptionContractSetNextBillingDatePayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionContractUserError"
	},
	SubscriptionContractUpdatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionContractUserError:{
		code:"SubscriptionContractErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionCyclePriceAdjustment:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue",
		afterCycle:"Int",
		computedPrice:"MoneyV2"
	},
	SubscriptionDeliveryMethod:{
		"...on SubscriptionDeliveryMethodLocalDelivery":"SubscriptionDeliveryMethodLocalDelivery",
		"...on SubscriptionDeliveryMethodPickup":"SubscriptionDeliveryMethodPickup",
		"...on SubscriptionDeliveryMethodShipping":"SubscriptionDeliveryMethodShipping"
	},
	SubscriptionDeliveryMethodLocalDelivery:{
		address:"SubscriptionMailingAddress",
		localDeliveryOption:"SubscriptionDeliveryMethodLocalDeliveryOption"
	},
	SubscriptionDeliveryMethodLocalDeliveryOption:{
		code:"String",
		description:"String",
		instructions:"String",
		phone:"String",
		presentmentTitle:"String",
		title:"String"
	},
	SubscriptionDeliveryMethodPickup:{
		pickupOption:"SubscriptionDeliveryMethodPickupOption"
	},
	SubscriptionDeliveryMethodPickupOption:{
		code:"String",
		description:"String",
		location:"Location",
		presentmentTitle:"String",
		title:"String"
	},
	SubscriptionDeliveryMethodShipping:{
		address:"SubscriptionMailingAddress",
		shippingOption:"SubscriptionDeliveryMethodShippingOption"
	},
	SubscriptionDeliveryMethodShippingOption:{
		carrierService:"DeliveryCarrierService",
		code:"String",
		description:"String",
		presentmentTitle:"String",
		title:"String"
	},
	SubscriptionDeliveryOption:{
		"...on SubscriptionLocalDeliveryOption":"SubscriptionLocalDeliveryOption",
		"...on SubscriptionPickupOption":"SubscriptionPickupOption",
		"...on SubscriptionShippingOption":"SubscriptionShippingOption"
	},
	SubscriptionDeliveryOptionResult:{
		"...on SubscriptionDeliveryOptionResultFailure":"SubscriptionDeliveryOptionResultFailure",
		"...on SubscriptionDeliveryOptionResultSuccess":"SubscriptionDeliveryOptionResultSuccess"
	},
	SubscriptionDeliveryOptionResultFailure:{
		message:"String"
	},
	SubscriptionDeliveryOptionResultSuccess:{
		deliveryOptions:"SubscriptionDeliveryOption"
	},
	SubscriptionDeliveryPolicy:{
		anchors:"SellingPlanAnchor",
		interval:"SellingPlanInterval",
		intervalCount:"Int"
	},
	SubscriptionDiscount:{
		"...on SubscriptionAppliedCodeDiscount":"SubscriptionAppliedCodeDiscount",
		"...on SubscriptionManualDiscount":"SubscriptionManualDiscount"
	},
	SubscriptionDiscountAllocation:{
		amount:"MoneyV2",
		discount:"SubscriptionDiscount"
	},
	SubscriptionDiscountConnection:{
		edges:"SubscriptionDiscountEdge",
		nodes:"SubscriptionDiscount",
		pageInfo:"PageInfo"
	},
	SubscriptionDiscountEdge:{
		cursor:"String",
		node:"SubscriptionDiscount"
	},
	SubscriptionDiscountEntitledLines:{
		all:"Boolean",
		lines:"SubscriptionLineConnection"
	},
	SubscriptionDiscountFixedAmountValue:{
		amount:"MoneyV2",
		appliesOnEachItem:"Boolean"
	},
	SubscriptionDiscountPercentageValue:{
		percentage:"Int"
	},
	SubscriptionDiscountValue:{
		"...on SubscriptionDiscountFixedAmountValue":"SubscriptionDiscountFixedAmountValue",
		"...on SubscriptionDiscountPercentageValue":"SubscriptionDiscountPercentageValue"
	},
	SubscriptionDraft:{
		billingCycle:"SubscriptionBillingCycle",
		billingPolicy:"SubscriptionBillingPolicy",
		concatenatedBillingCycles:"SubscriptionBillingCycleConnection",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryOptions:"SubscriptionDeliveryOptionResult",
		deliveryPolicy:"SubscriptionDeliveryPolicy",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionDiscountConnection",
		discountsAdded:"SubscriptionDiscountConnection",
		discountsRemoved:"SubscriptionDiscountConnection",
		discountsUpdated:"SubscriptionDiscountConnection",
		id:"ID",
		lines:"SubscriptionLineConnection",
		linesAdded:"SubscriptionLineConnection",
		linesRemoved:"SubscriptionLineConnection",
		nextBillingDate:"DateTime",
		note:"String",
		originalContract:"SubscriptionContract",
		shippingOptions:"SubscriptionShippingOptionResult",
		status:"SubscriptionContractSubscriptionStatus"
	},
	SubscriptionDraftCommitPayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountAddPayload:{
		discountAdded:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountCodeApplyPayload:{
		appliedDiscount:"SubscriptionAppliedCodeDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountRemovePayload:{
		discountRemoved:"SubscriptionDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountUpdatePayload:{
		discountUpdated:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftFreeShippingDiscountAddPayload:{
		discountAdded:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftFreeShippingDiscountUpdatePayload:{
		discountUpdated:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftLineAddPayload:{
		draft:"SubscriptionDraft",
		lineAdded:"SubscriptionLine",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftLineRemovePayload:{
		discountsUpdated:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		lineRemoved:"SubscriptionLine",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftLineUpdatePayload:{
		draft:"SubscriptionDraft",
		lineUpdated:"SubscriptionLine",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftUpdatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftUserError:{
		code:"SubscriptionDraftErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionLine:{
		currentPrice:"MoneyV2",
		customAttributes:"Attribute",
		discountAllocations:"SubscriptionDiscountAllocation",
		id:"ID",
		lineDiscountedPrice:"MoneyV2",
		pricingPolicy:"SubscriptionPricingPolicy",
		productId:"ID",
		quantity:"Int",
		requiresShipping:"Boolean",
		sellingPlanId:"ID",
		sellingPlanName:"String",
		sku:"String",
		taxable:"Boolean",
		title:"String",
		variantId:"ID",
		variantImage:"Image",
		variantTitle:"String"
	},
	SubscriptionLineConnection:{
		edges:"SubscriptionLineEdge",
		nodes:"SubscriptionLine",
		pageInfo:"PageInfo"
	},
	SubscriptionLineEdge:{
		cursor:"String",
		node:"SubscriptionLine"
	},
	SubscriptionLocalDeliveryOption:{
		code:"String",
		description:"String",
		phoneRequired:"Boolean",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	SubscriptionMailingAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		company:"String",
		country:"String",
		countryCode:"CountryCode",
		firstName:"String",
		lastName:"String",
		name:"String",
		phone:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	SubscriptionManualDiscount:{
		entitledLines:"SubscriptionDiscountEntitledLines",
		id:"ID",
		recurringCycleLimit:"Int",
		rejectionReason:"SubscriptionDiscountRejectionReason",
		targetType:"DiscountTargetType",
		title:"String",
		type:"DiscountType",
		usageCount:"Int",
		value:"SubscriptionDiscountValue"
	},
	SubscriptionManualDiscountConnection:{
		edges:"SubscriptionManualDiscountEdge",
		nodes:"SubscriptionManualDiscount",
		pageInfo:"PageInfo"
	},
	SubscriptionManualDiscountEdge:{
		cursor:"String",
		node:"SubscriptionManualDiscount"
	},
	SubscriptionPickupOption:{
		code:"String",
		description:"String",
		location:"Location",
		phoneRequired:"Boolean",
		pickupTime:"String",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	SubscriptionPricingPolicy:{
		basePrice:"MoneyV2",
		cycleDiscounts:"SubscriptionCyclePriceAdjustment"
	},
	SubscriptionShippingOption:{
		carrierService:"DeliveryCarrierService",
		code:"String",
		description:"String",
		phoneRequired:"Boolean",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	SubscriptionShippingOptionResult:{
		"...on SubscriptionShippingOptionResultFailure":"SubscriptionShippingOptionResultFailure",
		"...on SubscriptionShippingOptionResultSuccess":"SubscriptionShippingOptionResultSuccess"
	},
	SubscriptionShippingOptionResultFailure:{
		message:"String"
	},
	SubscriptionShippingOptionResultSuccess:{
		shippingOptions:"SubscriptionShippingOption"
	},
	SuggestedOrderTransaction:{
		accountNumber:"String",
		amount:"Money",
		amountSet:"MoneyBag",
		formattedGateway:"String",
		gateway:"String",
		kind:"SuggestedOrderTransactionKind",
		maximumRefundable:"Money",
		maximumRefundableSet:"MoneyBag",
		parentTransaction:"OrderTransaction"
	},
	SuggestedRefund:{
		amount:"Money",
		amountSet:"MoneyBag",
		discountedSubtotalSet:"MoneyBag",
		maximumRefundable:"Money",
		maximumRefundableSet:"MoneyBag",
		refundDuties:"RefundDuty",
		refundLineItems:"RefundLineItem",
		shipping:"ShippingRefund",
		subtotal:"Money",
		subtotalSet:"MoneyBag",
		suggestedTransactions:"SuggestedOrderTransaction",
		totalCartDiscountAmountSet:"MoneyBag",
		totalDutiesSet:"MoneyBag",
		totalTaxSet:"MoneyBag",
		totalTaxes:"Money"
	},
	SuggestedReturnRefund:{
		amount:"MoneyBag",
		discountedSubtotal:"MoneyBag",
		maximumRefundable:"MoneyBag",
		refundDuties:"RefundDuty",
		shipping:"ShippingRefund",
		subtotal:"MoneyBag",
		suggestedTransactions:"SuggestedOrderTransaction",
		totalCartDiscountAmount:"MoneyBag",
		totalDuties:"MoneyBag",
		totalTax:"MoneyBag"
	},
	TableData:{
		columns:"TableDataColumn",
		rowData:"String",
		unformattedData:"JSON"
	},
	TableDataColumn:{
		dataType:"String",
		displayName:"String",
		name:"String"
	},
	TableResponse:{
		parseErrors:"ParseError",
		tableData:"TableData"
	},
	TagsAddPayload:{
		node:"Node",
		userErrors:"UserError"
	},
	TagsRemovePayload:{
		node:"Node",
		userErrors:"UserError"
	},
	TaxLine:{
		channelLiable:"Boolean",
		price:"Money",
		priceSet:"MoneyBag",
		rate:"Float",
		ratePercentage:"Float",
		title:"String"
	},
	TenderTransaction:{
		amount:"MoneyV2",
		id:"ID",
		paymentMethod:"String",
		processedAt:"DateTime",
		remoteReference:"String",
		test:"Boolean",
		transactionDetails:"TenderTransactionDetails",
		user:"StaffMember"
	},
	TenderTransactionConnection:{
		edges:"TenderTransactionEdge",
		nodes:"TenderTransaction",
		pageInfo:"PageInfo"
	},
	TenderTransactionCreditCardDetails:{
		creditCardCompany:"String",
		creditCardNumber:"String"
	},
	TenderTransactionDetails:{
		"...on TenderTransactionCreditCardDetails":"TenderTransactionCreditCardDetails"
	},
	TenderTransactionEdge:{
		cursor:"String",
		node:"TenderTransaction"
	},
	TipSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineItem:"LineItem",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	TransactionFee:{
		amount:"MoneyV2",
		flatFee:"MoneyV2",
		flatFeeName:"String",
		id:"ID",
		rate:"Decimal",
		rateName:"String",
		taxAmount:"MoneyV2",
		type:"String"
	},
	TranslatableContent:{
		digest:"String",
		key:"String",
		locale:"String",
		value:"String"
	},
	TranslatableResource:{
		resourceId:"ID",
		translatableContent:"TranslatableContent",
		translations:"Translation"
	},
	TranslatableResourceConnection:{
		edges:"TranslatableResourceEdge",
		nodes:"TranslatableResource",
		pageInfo:"PageInfo"
	},
	TranslatableResourceEdge:{
		cursor:"String",
		node:"TranslatableResource"
	},
	Translation:{
		key:"String",
		locale:"String",
		market:"Market",
		outdated:"Boolean",
		updatedAt:"DateTime",
		value:"String"
	},
	TranslationUserError:{
		code:"TranslationErrorCode",
		field:"String",
		message:"String"
	},
	TranslationsRegisterPayload:{
		translations:"Translation",
		userErrors:"TranslationUserError"
	},
	TranslationsRemovePayload:{
		translations:"Translation",
		userErrors:"TranslationUserError"
	},
	TypedAttribute:{
		key:"String",
		value:"String"
	},
	URL: `scalar.URL` as const,
	UTMParameters:{
		campaign:"String",
		content:"String",
		medium:"String",
		source:"String",
		term:"String"
	},
	UnsignedInt64: `scalar.UnsignedInt64` as const,
	UrlRedirect:{
		id:"ID",
		path:"String",
		target:"String"
	},
	UrlRedirectBulkDeleteAllPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	UrlRedirectBulkDeleteByIdsPayload:{
		job:"Job",
		userErrors:"UrlRedirectBulkDeleteByIdsUserError"
	},
	UrlRedirectBulkDeleteByIdsUserError:{
		code:"UrlRedirectBulkDeleteByIdsUserErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectBulkDeleteBySavedSearchPayload:{
		job:"Job",
		userErrors:"UrlRedirectBulkDeleteBySavedSearchUserError"
	},
	UrlRedirectBulkDeleteBySavedSearchUserError:{
		code:"UrlRedirectBulkDeleteBySavedSearchUserErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectBulkDeleteBySearchPayload:{
		job:"Job",
		userErrors:"UrlRedirectBulkDeleteBySearchUserError"
	},
	UrlRedirectBulkDeleteBySearchUserError:{
		code:"UrlRedirectBulkDeleteBySearchUserErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectConnection:{
		edges:"UrlRedirectEdge",
		nodes:"UrlRedirect",
		pageInfo:"PageInfo"
	},
	UrlRedirectCreatePayload:{
		urlRedirect:"UrlRedirect",
		userErrors:"UrlRedirectUserError"
	},
	UrlRedirectDeletePayload:{
		deletedUrlRedirectId:"ID",
		userErrors:"UrlRedirectUserError"
	},
	UrlRedirectEdge:{
		cursor:"String",
		node:"UrlRedirect"
	},
	UrlRedirectImport:{
		count:"Int",
		createdCount:"Int",
		failedCount:"Int",
		finished:"Boolean",
		finishedAt:"DateTime",
		id:"ID",
		previewRedirects:"UrlRedirectImportPreview",
		updatedCount:"Int"
	},
	UrlRedirectImportCreatePayload:{
		urlRedirectImport:"UrlRedirectImport",
		userErrors:"UrlRedirectImportUserError"
	},
	UrlRedirectImportPreview:{
		path:"String",
		target:"String"
	},
	UrlRedirectImportSubmitPayload:{
		job:"Job",
		userErrors:"UrlRedirectImportUserError"
	},
	UrlRedirectImportUserError:{
		code:"UrlRedirectImportErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectUpdatePayload:{
		urlRedirect:"UrlRedirect",
		userErrors:"UrlRedirectUserError"
	},
	UrlRedirectUserError:{
		code:"UrlRedirectErrorCode",
		field:"String",
		message:"String"
	},
	UserError:{
		field:"String",
		message:"String"
	},
	UtcOffset: `scalar.UtcOffset` as const,
	VaultCreditCard:{
		billingAddress:"CustomerCreditCardBillingAddress",
		brand:"String",
		expired:"Boolean",
		expiryMonth:"Int",
		expiryYear:"Int",
		lastDigits:"String",
		name:"String"
	},
	VaultPaypalBillingAgreement:{
		inactive:"Boolean",
		name:"String",
		paypalAccountEmail:"String"
	},
	Vector3:{
		x:"Float",
		y:"Float",
		z:"Float"
	},
	Video:{
		alt:"String",
		createdAt:"DateTime",
		duration:"Int",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		filename:"String",
		id:"ID",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		originalSource:"VideoSource",
		preview:"MediaPreviewImage",
		sources:"VideoSource",
		status:"MediaStatus"
	},
	VideoSource:{
		fileSize:"Int",
		format:"String",
		height:"Int",
		mimeType:"String",
		url:"String",
		width:"Int"
	},
	WebPixel:{
		id:"ID",
		settings:"JSON"
	},
	WebPixelCreatePayload:{
		userErrors:"ErrorsWebPixelUserError",
		webPixel:"WebPixel"
	},
	WebPixelDeletePayload:{
		deletedWebPixelId:"ID",
		userErrors:"ErrorsWebPixelUserError"
	},
	WebPixelUpdatePayload:{
		userErrors:"ErrorsWebPixelUserError",
		webPixel:"WebPixel"
	},
	WebhookEventBridgeEndpoint:{
		arn:"ARN"
	},
	WebhookHttpEndpoint:{
		callbackUrl:"URL"
	},
	WebhookPubSubEndpoint:{
		pubSubProject:"String",
		pubSubTopic:"String"
	},
	WebhookSubscription:{
		callbackUrl:"URL",
		createdAt:"DateTime",
		endpoint:"WebhookSubscriptionEndpoint",
		format:"WebhookSubscriptionFormat",
		id:"ID",
		includeFields:"String",
		legacyResourceId:"UnsignedInt64",
		metafieldNamespaces:"String",
		privateMetafieldNamespaces:"String",
		topic:"WebhookSubscriptionTopic",
		updatedAt:"DateTime"
	},
	WebhookSubscriptionConnection:{
		edges:"WebhookSubscriptionEdge",
		nodes:"WebhookSubscription",
		pageInfo:"PageInfo"
	},
	WebhookSubscriptionCreatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	WebhookSubscriptionDeletePayload:{
		deletedWebhookSubscriptionId:"ID",
		userErrors:"UserError"
	},
	WebhookSubscriptionEdge:{
		cursor:"String",
		node:"WebhookSubscription"
	},
	WebhookSubscriptionEndpoint:{
		"...on WebhookEventBridgeEndpoint":"WebhookEventBridgeEndpoint",
		"...on WebhookHttpEndpoint":"WebhookHttpEndpoint",
		"...on WebhookPubSubEndpoint":"WebhookPubSubEndpoint"
	},
	WebhookSubscriptionUpdatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	Weight:{
		unit:"WeightUnit",
		value:"Float"
	},
	deliveryProfileCreatePayload:{
		profile:"DeliveryProfile",
		userErrors:"UserError"
	},
	deliveryProfileRemovePayload:{
		job:"Job",
		userErrors:"UserError"
	},
	deliveryProfileUpdatePayload:{
		profile:"DeliveryProfile",
		userErrors:"UserError"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "QueryRoot" as const
}