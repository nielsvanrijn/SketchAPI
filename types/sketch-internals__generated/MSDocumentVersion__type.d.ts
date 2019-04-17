declare enum MSDocumentVersion {
  MSDocumentUnknownVersion = -1,
  MSDocumentEarlyVersion = 0,
  MSDocument211to212Version = 2,
  MSDocument213to214Version = 3,
  MSDocument220Version = 4,
  MSDocument221Version = 8,
  MSDocument222to223Version = 9,
  MSDocument224to23Version = 10,
  MSDocumentFirstComaVersion = 14,
  MSDocumentAKArrayRenamedVersion = 16,
  MSDocumentDontStoreDefaultsAndOptimiseColors = 17,
  MSDocumentArchiveColorsAsDoubles = 18,
  MSDocumentMigrationTest = 19,
  MSDocumentSymbols = 20,
  MSDocumentDontSyncFlagOnText = 21,
  MSDocumentRemovedSliceContainers = 22,
  MSDocumentAddedExportOptions = 23,
  MSDocumentUnifiedTextStyleSymbols = 24,
  MSDocumentMigrateArtboardAssociatedSlice = 25,
  MSDocumentMergeLayerContainers = 26,
  MSDocumentColorControlsLoadingFix = 27,
  MSDocumentAddedWindingRule = 28,
  MSDocumentClearStylesOnArtboards = 29,
  MSDocumentOriginalObjectIDOnLayers = 30,
  MSDocumentDeprecateAdaptableColor = 31,
  MSDocumentNoiseAsSeparateFill = 32,
  MSDocumentImageCollection = 33,
  MSDocumentExportableLayers = 34,
  MSDocumentStripUnsupportedAttributes = 35,
  MSDocumentMergeStraightAndRoundedCornerEnums = 36,
  MSDocumentSplitGridAndLayout = 37,
  MSDocumentStructuredFile = 40,
  MSDocumentPatternsUsesImageCollection = 41,
  MSDocumentPatternsImagePropertyRemoved = 42,
  MSDocumentImageNameRemoved = 43,
  MSDocumentDontEncodeArchivedColor = 44,
  MSDocumentTextHeightIsClippedProperty = 45,
  MSDocumentNewLineSpacingBehaviour = 46,
  MSDocumentPersistentLayerListFolding = 47,
  MSDocumentDefaultStyleIncludesPatternImages = 48,
  MSDocumentArtisticStrokeRemoved = 49,
  MSDocumentDecorationsRemoved = 50,
  MSDocumentAddedLayerUserInfo = 51,
  MSDocumentArrowMoveToStyle = 52,
  MSDocumentColorControlsHue = 53,
  MSDocumentLocalAssets = 54,
  MSDocumentImagesStoredInLocalAssets = 55,
  MSDocumentSaveImmutableVariants = 56,
  MSDocumentSaveImageWrappersThemselves = 57,
  MSDocumentArtboardsOnFullPixels = 58,
  MSDocumentRemoveHasDashPatternProperty = 59,
  MSDocumentNineSliceScaleAdded = 60,
  MSDocumentFillReplacesImage = 61,
  MSDocumentNineSliceScaleBugFix = 62,
  MSDocumentSharedStylesOnInappropriateLayersBugFix = 63,
  MSDocumentRestoreImmutableVariants = 70,
  MSDocumentCloudShareIDSupport = 71,
  MSDocumentRenameSharedLayerToSymbol = 72,
  MSDocumentRenamedExportSizeToExportFormat = 73,
  MSDocumentRetinaCanvasAndDefaultZoomValueRemoved = 74,
  MSDocumentImageCollectionDeprecated = 75,
  MSDocumentImageCollectionCleared = 76,
  MSDocumentConsistentBaselineTypesetter = 77,
  MSDocumentTextLayerGlyphBounds = 78,
  MSDocumentSymbolsAsArtboards = 79,
  MSDocumentCloudExport = 80,
  MSDocumentRemoveNSTextStorage = 81,
  MSDocumentRemoveNSFontFromMSTextStyle = 82,
  MSDocumentHistoryBasedUndoIntroduced = 83,
  MSDocumentDataUserInfoAdded = 84,
  MSDocumentRepairSymbolOverrideMissingRootDictionary = 85,
  MSDocumentReplaceMSArray = 86,
  MSDocumentLayerResizing = 87,
  MSDocumentZippedJSON = 88,
  MSDocumentShapeLayerPointRadiusType = 89,
  MSDocumentRemoveGridIndex = 90,
  MSDocumentResizingMask = 91,
  MSDocumentDuplicateIDFix = 92,
  MSDocumentVerticalAlignmentAsComaProperty = 93,
  MSDocumentSmoothPointRadiusBehaviour = 94,
  MSDocumentColorManagementThatDidntShip = 95,
  MSDocumentColorManagementForReal = 96,
  MSDocumentOverrideValues = 97,
  MSDocumentRefactorBCTextBehaviour = 98,
  MSDocumentMSAttributedStringJSON = 99,
  MSDocumentRemoveShapePathClass = 100,
  MSDocumentPersistentArtboardPresets = 101,
  MSDocumentForeignStyles = 102,
  MSDocumentUseGenericDocumentMetadataKey = 103,
  MSDocumentRefactorWindingRule = 104,
  MSDocumentFancyArrowHeads = 105,
  MSDocumentPlusLigherPlusDarkerBlendModes = 106,
  MSDocumentBackgroundBlurSaturation = 107,
  MSDocumentNestedBooleanOperations = 110,
  MSDocumentZoomBlurCoordinateSystem = 111,
  MSDocumentMoveSharedStyleID = 112,
  MSDocumentLocalizeDefaultExportPreset = 113,
  MSDocumentAddOverrideProperties = 114,
  MSDocumentWrappedColorAndGradientAssets = 115,
  MSDocumentNoiseAsPattern = 116,
  MSDocumentLocalizedColorPresets = 117,
  MSDocumentPresetsAsZippedJSON = 118,
  MSDocumentNextVersion,
  MSDocumentCurrentVersion,
  MSDocumentCompatibilityVersion,
  MSDocumentNewestVersionRequiringMigration,
}
