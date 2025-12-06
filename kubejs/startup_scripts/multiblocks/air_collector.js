GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("air_collecting")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 0, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) //
        .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
        .create("air_collector", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("air_collecting")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("AAAAAAA", "ADDDDDA", "AFF1FFA", "ADDDDDA", "AAAAAAA")
                .aisle("ABBBBBA", "D     D", "F     F", "D     D", "AGGGGGA")
                .aisle("ABBBBBA", "D     D", "F     F", "D     D", "AGGGGGA")
                .aisle("ABBBBBA", "D     D", "1     1", "D     D", "AGGGGGA")
                .aisle("ABBBBBA", "D     D", "F     F", "D     D", "AGGGGGA")
                .aisle("ABBBBBA", "D     D", "F     F", "D     D", "AGGGGGA")
                .aisle("AAAAAAA", "ADDDDDA", "AEECEEA", "ADDDDDA", "AAAAAAA")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks("immersiveengineering:steel_scaffolding_standard"))
                .where("B", Predicates.blocks("immersiveengineering:sheetmetal_steel"))
                .where("D", Predicates.blocks("immersiveengineering:sheetmetal_aluminum"))
                .where("E", Predicates.blocks("immersiveengineering:light_engineering"))
                .where("F", Predicates.blocks("thermal:obsidian_glass"))
                .where("G", Predicates.blocks("kubejs:air_filter_casing"))
                .where(
                    "1",
                    Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                        .or(Predicates.blocks("immersiveengineering:light_engineering"))
                )
                .build()
        )
        .workableCasingModel(
            "immersiveengineering:block/metal/sheetmetal_aluminum",
            "gtceu:block/multiblock/assembly_line"
        );
});
