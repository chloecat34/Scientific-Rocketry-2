GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("fluid_drilling")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 0, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
        .create("fluid_drilling_rig", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("fluid_drilling")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("A   A", "A   A", "A   A", "AAAAA", "E111E", "AAAAA", "FFFFF", "     ", "     ", "     ", "     ", "     ", "     ")
                .aisle("     ", "     ", "     ", "ADDDA", "1   1", "ADDDA", "FDDDF", "  A  ", "  A  ", "  A  ", "     ", "     ", "     ")
                .aisle("  B  ", "  B  ", "  B  ", "ADEDA", "1   1", "ADDDA", "FDEDF", " ADA ", " ADA ", " ADA ", "  A  ", "  A  ", "  A  ")
                .aisle("     ", "     ", "     ", "ADDDA", "1   1", "ADDDA", "FDDDF", "  A  ", "  A  ", "  A  ", "     ", "     ", "     ")
                .aisle("A   A", "A   A", "A   A", "AEEEA", "E1C1E", "AEEEA", "FFFFF", "     ", "     ", "     ", "     ", "     ", "     ")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.blocks("immersiveengineering:steel_scaffolding_standard"))
                .where("B", Predicates.blocks("pneumaticcraft:drill_pipe"))
                .where("D", Predicates.blocks("immersiveengineering:sheetmetal_steel"))
                .where("E", Predicates.blocks("immersiveengineering:heavy_engineering"))
                .where("F", Predicates.blocks("immersiveengineering:slab_sheetmetal_steel"))
                .where(
                    "1",
                    Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                        .or(Predicates.blocks("immersiveengineering:sheetmetal_steel"))
                )
                .build()
        )
        .workableCasingModel(
            "immersiveengineering:block/metal/sheetmetal_steel",
            "gtceu:block/multiblock/assembly_line"
        );
});
