GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("electrolysis_plant")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(0, 2, 1, 2)
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
                .aisle("A     A", "A     A", "A     A", "A     A", "A     A")
                .aisle("A     A", "AAAAAAA", "1A111A1", "AAAAAAA", "A     A")
                .aisle("A     A", "AAAAAAA", "1BBDBB1", "AAAAAAA", "A     A")
                .aisle("A     A", "AAAAAAA", "1A1C1A1", "AAAAAAA", "A     A")
                .aisle("A     A", "A     A", "A     A", "A     A", "A     A")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks("kubejs:nonconducting_casing"))
                .where("B", Predicates.blocks("kubejs:restonia_conducting_block"))
                .where("D", Predicates.blocks("kubejs:electrolysis_core"))
                .where(
                    "1",
                    Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                        .or(Predicates.blocks("kubejs:nonconducting_casing"))
                )
                .build()
        )
        .workableCasingModel("kubejs:block/nonconducting_casing", "gtceu:block/multiblock/assembly_line");
});
