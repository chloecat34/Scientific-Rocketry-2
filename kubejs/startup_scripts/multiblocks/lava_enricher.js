GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("lava_enriching")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(0, 0, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) //
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
        .create("lava_enricher", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("lava_enriching")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("AAAAA", "AB1BA", "ABBBA", "AAAAA")
                .aisle("AAAAA", "BDDDB", "BDDDB", "AFFFA")
                .aisle("AAAAA", "1DED1", "BDEDB", "AFFFA")
                .aisle("AAAAA", "BDDDB", "BDDDB", "AFFFA")
                .aisle("AAAAA", "ABCBA", "ABBBA", "AAAAA")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks("tconstruct:scorched_bricks"))
                .where("B", Predicates.blocks("create:cut_scorchia_bricks"))
                .where("D", Predicates.blocks("minecraft:magma_block"))
                .where("E", Predicates.blocks("tconstruct:ichor_slime"))
                .where("F", Predicates.blocks("tconstruct:scorched_glass"))
                .where(
                    "1",
                    Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                        .or(Predicates.blocks("create:cut_scorchia_bricks"))
                )
                .build()
        )
        .workableCasingModel(
            "create:block/palettes/stone_types/brick/scorchia_cut_brick",
            "gtceu:block/multiblock/assembly_line"
        );
});
