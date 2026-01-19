GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("industrial_chemical_reactor")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.BEAKER_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) //
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
        .create("industrial_chemical_reactor", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("industrial_chemical_reactor")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("AABBBAA", "AA111AA", "AABBBAA")
                .aisle("AA111AA", "1ADDDA1", "AA111AA")
                .aisle("AABBBAA", "AA1C1AA", "AABBBAA")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks("kubejs:knightslime_sheetmetal"))
                .where("B", Predicates.blocks("compressedcreativity:compressed_iron_casing"))
                .where("D", Predicates.blocks("immersiveengineering:heavy_engineering"))
                .where(
                    "1",
                    Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                        .or(Predicates.blocks("kubejs:hepatizon_sheetmetal"))
                )
                .build()
        )
        .workableCasingModel("kubejs:block/hepatizon_sheetmetal", "gtceu:block/multiblock/large_chemical_reactor");
});
