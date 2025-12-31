GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("electrolysis_plant")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(0, 1, 1, 2)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) //
        .setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
        .create("electrolysis_plant", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("electrolysis_plant")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("AAAAA", "ADDDA", "AD1DA", "AFFFA", "AD1DA", "ADDDA", "AAAAA")
                .aisle("ABBBA", "D   D", "D   D", "F   F", "D   D", "D   D", "ABBBA")
                .aisle("ABBBA", "D E D", "1 E 1", "F E F", "1 E 1", "D E D", "ABBBA")
                .aisle("ABBBA", "D   D", "D   D", "F   F", "D   D", "D   D", "ABBBA")
                .aisle("AAAAA", "ADDDA", "ADDDA", "AFCFA", "ADDDA", "ADDDA", "AAAAA")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks("kubejs:hepatizon_sheetmetal"))
                .where("B", Predicates.blocks("compressedcreativity:compressed_iron_casing"))
                .where("D", Predicates.blocks("kubejs:industrial_centrifuge_wall"))
                .where("E", Predicates.blocks("kubejs:industrial_centrifuge_core"))
                .where("F", Predicates.blocks("immersiveengineering:heavy_engineering"))
                .where(
                    "1",
                    Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                        .or(Predicates.blocks("kubejs:nonconducting_casing"))
                )
                .build()
        )
        .workableCasingModel("kubejs:block/industrial_centrifuge_wall", "gtceu:block/multiblock/assembly_line");
});
