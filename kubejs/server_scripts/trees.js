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

    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "integrateddynamics:menril_log",
        },
        output: '{Amount:4,FluidName:"integrateddynamics:menril_resin"}',
        result: "integrateddynamics:menril_log_stripped",
    });

    // Insolator recipes for saplings
    event.recipes.thermal
        .insolator(
            [
                "6x integrateddynamics:menril_log",
                Item.of("integrateddynamics:menril_sapling").withChance(0.1),
                Item.of("integrateddynamics:menril_berries").withChance(0.5),
            ],
            ["integrateddynamics:menril_sapling", Fluid.of("minecraft:water", 1000)]
        )
        .energy(60000);

    // BYG logs
    [
        "aspen",
        "baobab",
        "blue_enchanted",
        "cika",
        "cypress",
        "ebony",
        "fir",
        "green_enchanted",
        "holly",
        "ironwood",
        "jacaranda",
        "mahogany",
        "maple",
        "palm",
        "pine",
        "rainbow_eucalyptus",
        "redwood",
        "skyris",
        "white_mangrove",
        "willow",
        "witch_hazel",
        "zelkova",
        "palo_verde",
    ].forEach((wood) => {
        const sapling = `biomeswevegone:${wood}_sapling`;
        const log = `biomeswevegone:${wood}_log`;

        event.recipes.thermal
            .insolator([`6x ${log}`, Item.of(sapling).withChance(0.1)], [sapling, Fluid.of("minecraft:water", 1000)])
            .energy(60000);
    });

    [
        ["white_sakura", "sakura"],
        ["yellow_sakura", "sakura"],
        ["araucaria", "pine"],
        ["brown_zelkova", "zelkova"],
        ["indigo_jacaranda", "jacaranda"],
        ["red_maple", "maple"],
        ["silver_maple", "maple"],
    ].forEach((items) => {
        const sapling = `biomeswevegone:${items[0]}_sapling`;
        const log = `biomeswevegone:${items[1]}_log`;

        event.recipes.thermal
            .insolator([`6x ${log}`, Item.of(sapling).withChance(0.1)], [sapling, Fluid.of("minecraft:water", 1000)])
            .energy(60000);
    });

    [
        ["blue_spruce", "minecraft:spruce_log"],
        ["brown_birch", "minecraft:birch_log"],
        ["brown_oak", "minecraft:oak_log"],
        ["orange_oak", "minecraft:oak_log"],
        ["orange_birch", "minecraft:birch_log"],
        ["orange_spruce", "minecraft:spruce_log"],
        ["orchard", "minecraft:oak_log"],
        ["red_birch", "minecraft:birch_log"],
        ["red_oak", "minecraft:oak_log"],
        ["red_spruce", "minecraft:spruce_log"],
        ["yellow_birch", "minecraft:birch_log"],
        ["yellow_spruce", "minecraft:spruce_log"],
    ].forEach((items) => {
        const sapling = `biomeswevegone:${items[0]}_sapling`;
        const log = items[1];

        event.recipes.thermal
            .insolator([`6x ${log}`, Item.of(sapling).withChance(0.1)], [sapling, Fluid.of("minecraft:water", 1000)])
            .energy(60000);
    });
});
