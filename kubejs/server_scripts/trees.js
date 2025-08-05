ServerEvents.recipes((event) => {
    // Replace IF fluid extractor recipes
    event.remove({ type: "industrialforegoing:fluid_extractor" });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "minecraft:oak_log",
        },
        output: '{Amount:2,FluidName:"thermal:resin"}',
        result: "minecraft:stripped_oak_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "minecraft:acacia_log",
        },
        output: '{Amount:2,FluidName:"thermal:resin"}',
        result: "minecraft:stripped_acacia_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "minecraft:cherry_log",
        },
        output: '{Amount:2,FluidName:"thermal:resin"}',
        result: "minecraft:stripped_cherry_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "minecraft:spruce_log",
        },
        output: '{Amount:4,FluidName:"thermal:resin"}',
        result: "minecraft:stripped_spruce_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "minecraft:birch_log",
        },
        output: '{Amount:2,FluidName:"thermal:sap"}',
        result: "minecraft:stripped_birch_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "minecraft:dark_oak_log",
        },
        output: '{Amount:3,FluidName:"thermal:sap"}',
        result: "minecraft:stripped_dark_oak_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "minecraft:jungle_log",
        },
        output: '{Amount:2,FluidName:"thermal:latex"}',
        result: "minecraft:stripped_jungle_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "thermal:rubberwood_log",
        },
        output: '{Amount:4,FluidName:"thermal:latex"}',
        result: "thermal:stripped_rubberwood_log",
    });

    // Slime trees
    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "tconstruct:greenheart_log",
        },
        output: '{Amount:4,FluidName:"tconstruct:earth_slime"}',
        result: "tconstruct:stripped_greenheart_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "tconstruct:skyroot_log",
        },
        output: '{Amount:4,FluidName:"tconstruct:sky_slime"}',
        result: "tconstruct:stripped_skyroot_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "tconstruct:enderbark_log",
        },
        output: '{Amount:4,FluidName:"tconstruct:ender_slime"}',
        result: "tconstruct:stripped_enderbark_log",
    });

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "tconstruct:bloodshroom_log",
        },
        output: '{Amount:4,FluidName:"tconstruct:ichor"}',
        result: "tconstruct:stripped_bloodshroom_log",
    });
});
