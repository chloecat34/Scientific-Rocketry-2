ServerEvents.recipes((event) => {
    // Adds an ingot casting recipe in the blast chiller
    function chillerIngotCasting(item, fluid, amount, energy) {
        energy = energy === undefined ? 4800 : energy;

        event.recipes.thermal.chiller(item, [Fluid.of(fluid, amount), "tconstruct:ingot_cast"]).energy(energy);
    }

    function chillerGemCasting(item, fluid, amount, energy) {
        energy = energy === undefined ? 4800 : energy;

        event.recipes.thermal.chiller(item, [Fluid.of(fluid, amount), "tconstruct:gem_cast"]).energy(energy);
    }

    function chillerBlockCasting(item, fluid, amount, energy) {
        energy = energy === undefined ? 4800 * 9 : energy;

        event.recipes.thermal.chiller(item, Fluid.of(fluid, amount)).energy(energy);
    }

    function crucibleMelting(item, fluid, fluidAmount, energy) {
        energy = energy === undefined ? 8000 : energy;

        event.recipes.thermal.crucible(Fluid.of(fluid, fluidAmount), item).energy(energy);
    }

    // Melting times are 0.25 seconds per unit
    const addTinkersMelterRecipe = (item, fluid, fluidAmount, time, temperature) => {
        event.custom({
            type: "tconstruct:melting",
            ingredient: {
                item: item,
            },
            result: {
                amount: fluidAmount,
                fluid: fluid,
            },
            temperature: temperature,
            time: time,
        });
    };

    const addBothMelterRecipes = (item, fluid, fluidAmount, time, temperature, energy) => {
        addTinkersMelterRecipe(item, fluid, fluidAmount, time, temperature);
        crucibleMelting(item, fluid, fluidAmount, energy);
    };

    const addTinkersBlockCastingRecipe = (item, fluid, fluidAmount, time) => {
        event.custom({
            type: "tconstruct:casting_basin",
            cooling_time: time,
            fluid: {
                amount: fluidAmount,
                fluid: fluid,
            },
            result: {
                item: item,
            },
        });
    };

    const addTinkersIngotCastingRecipe = (item, fluid, time) => {
        event.custom({
            type: "tconstruct:casting_table",
            cast: {
                tag: "tconstruct:casts/multi_use/ingot",
            },
            cooling_time: time,
            fluid: {
                amount: 90,
                fluid: fluid,
            },
            result: {
                item: item,
            },
        });

        event.custom({
            type: "tconstruct:casting_table",
            cast: {
                tag: "tconstruct:casts/single_use/ingot",
            },
            cooling_time: time,
            fluid: {
                amount: 90,
                fluid: fluid,
            },
            result: {
                item: item,
            },
        });
    };

    const addTinkersGemCastingRecipe = (item, fluid, time) => {
        event.custom({
            type: "tconstruct:casting_table",
            cast: {
                tag: "tconstruct:casts/multi_use/gem",
            },
            cooling_time: time,
            fluid: {
                amount: 100,
                fluid: fluid,
            },
            result: {
                item: item,
            },
        });

        event.custom({
            type: "tconstruct:casting_table",
            cast: {
                tag: "tconstruct:casts/single_use/gem",
            },
            cooling_time: time,
            fluid: {
                amount: 100,
                fluid: fluid,
            },
            result: {
                item: item,
            },
        });
    };

    const addTinkersNuggetCastingRecipe = (item, fluid, time) => {
        event.custom({
            type: "tconstruct:casting_table",
            cast: {
                tag: "tconstruct:casts/multi_use/nugget",
            },
            cooling_time: time,
            fluid: {
                amount: 10,
                fluid: fluid,
            },
            result: {
                item: item,
            },
        });

        event.custom({
            type: "tconstruct:casting_table",
            cast: {
                tag: "tconstruct:casts/single_use/nugget",
            },
            cooling_time: time,
            fluid: {
                amount: 10,
                fluid: fluid,
            },
            result: {
                item: item,
            },
        });
    };

    // Solidify molten plastic
    event.recipes.thermal.chiller("pneumaticcraft:plastic", Fluid.of("pneumaticcraft:plastic", 500)).energy(2400);

    // Molten clay
    crucibleMelting("minecraft:clay_ball", "tconstruct:molten_clay", 250, 2000);
    crucibleMelting("minecraft:clay", "tconstruct:molten_clay", 1000, 8000);
    crucibleMelting("#minecraft:decorated_pot_ingredients", "tconstruct:molten_clay", 250, 2000);
    crucibleMelting("minecraft:bricks", "tconstruct:molten_clay", 1000, 8000);
    crucibleMelting("#minecraft:terracotta", "tconstruct:molten_clay", 1000, 8000);
    chillerIngotCasting("minecraft:brick", "tconstruct:molten_clay", 250);
    chillerBlockCasting("minecraft:terracotta", "tconstruct:molten_clay", 1000, 8000);

    // Molten glass
    crucibleMelting("#forge:glass/silica", "tconstruct:molten_glass", 1000, 2000);
    crucibleMelting("minecraft:glass_bottle", "tconstruct:molten_glass", 1000, 2000);
    crucibleMelting("#forge:glass_panes/silica", "tconstruct:molten_glass", 250, 1000);
    crucibleMelting("#minecraft:smelts_to_glass", "tconstruct:molten_glass", 1000, 4000);
    crucibleMelting("#tconstruct:casts/single_use/blank", "tconstruct:molten_glass", 250, 2000);
    chillerBlockCasting("tconstruct:clear_glass", "tconstruct:molten_glass", 1000, 4000);

    // Molten obsidian (can't melt obsidian bc it turns into lava)
    chillerBlockCasting("minecraft:obsidian", "tconstruct:molten_obsidian", 1000, 8000);

    // Molten emerald
    crucibleMelting("minecraft:emerald", "tconstruct:molten_emerald", 100, 4800);
    crucibleMelting("#forge:storage_blocks/emerald", "tconstruct:molten_emerald", 900, 4800 * 9);
    chillerGemCasting("minecraft:emerald", "tconstruct:molten_emerald", 100, 4800);
    chillerBlockCasting("minecraft:emerald_block", "tconstruct:molten_emerald", 900, 4800 * 9);

    // Molten quartz
    crucibleMelting("minecraft:quartz", "tconstruct:molten_quartz", 100, 4800);
    crucibleMelting("#forge:storage_blocks/quartz", "tconstruct:molten_quartz", 400, 4800 * 4);
    chillerGemCasting("minecraft:quartz", "tconstruct:molten_quartz", 100, 4800);
    chillerBlockCasting("minecraft:quartz_block", "tconstruct:molten_quartz", 400, 4800 * 4);

    // Molten amethyst
    crucibleMelting("minecraft:amethyst_shard", "tconstruct:molten_amethyst", 100, 4800);
    crucibleMelting("#forge:storage_blocks/amethyst", "tconstruct:molten_amethyst", 400, 4800 * 4);
    chillerGemCasting("minecraft:amethyst_shard", "tconstruct:molten_amethyst", 100, 4800);
    chillerBlockCasting("minecraft:amethyst_block", "tconstruct:molten_amethyst", 400, 4800 * 4);

    // Molten diamond
    crucibleMelting("minecraft:diamond", "tconstruct:molten_diamond", 100, 4800);
    crucibleMelting("#forge:storage_blocks/diamond", "tconstruct:molten_diamond", 900, 4800 * 9);
    chillerGemCasting("minecraft:diamond", "tconstruct:molten_diamond", 100, 4800);
    chillerBlockCasting("minecraft:diamond_block", "tconstruct:molten_diamond", 900, 4800 * 9);

    // Molten debris
    crucibleMelting("minecraft:netherite_scrap", "tconstruct:molten_debris", 90, 4800);
    crucibleMelting("tconstruct:debris_nugget", "tconstruct:molten_debris", 10, 600);

    // Molten iron
    crucibleMelting("#forge:ingots/iron", "tconstruct:molten_iron", 90, 4800);
    crucibleMelting("#forge:nuggets/iron", "tconstruct:molten_iron", 10, 600);
    crucibleMelting("#forge:storage_blocks/iron", "tconstruct:molten_iron", 810, 4800 * 9);
    crucibleMelting("#forge:coins/iron", "tconstruct:molten_iron", 30, 1600);
    crucibleMelting("#forge:gears/iron", "tconstruct:molten_iron", 360, 4800 * 4);
    crucibleMelting("#forge:plates/iron", "tconstruct:molten_iron", 90, 4800);
    crucibleMelting("#forge:rods/iron", "tconstruct:molten_iron", 45, 2400);
    addBothMelterRecipes("createaddition:iron_wire", "tconstruct:molten_iron", 45, 15, 800, 2400);
    crucibleMelting("#forge:sheetmetals/iron", "tconstruct:molten_iron", 180, 4800);
    chillerBlockCasting("minecraft:iron_block", "tconstruct:molten_iron", 810, 4800 * 9);

    // Molten gold
    crucibleMelting("#forge:ingots/gold", "tconstruct:molten_gold", 90, 4800);
    crucibleMelting("#forge:nuggets/gold", "tconstruct:molten_gold", 10, 600);
    crucibleMelting("#forge:storage_blocks/gold", "tconstruct:molten_gold", 810, 4800 * 9);
    crucibleMelting("#forge:coins/gold", "tconstruct:molten_gold", 30, 1600);
    crucibleMelting("#forge:gears/gold", "tconstruct:molten_gold", 360, 4800 * 4);
    crucibleMelting("#forge:plates/gold", "tconstruct:molten_gold", 90, 4800);
    addBothMelterRecipes("createaddition:gold_rod", "tconstruct:molten_gold", 45, 14, 700, 2400);
    addBothMelterRecipes("createaddition:gold_wire", "tconstruct:molten_gold", 45, 14, 700, 2400);
    crucibleMelting("#forge:sheetmetals/gold", "tconstruct:molten_gold", 180, 4800);
    chillerBlockCasting("minecraft:gold_block", "tconstruct:molten_gold", 810, 4800 * 9);

    // Molten copper
    crucibleMelting("#forge:ingots/copper", "tconstruct:molten_copper", 90, 4800);
    crucibleMelting("#forge:nuggets/copper", "tconstruct:molten_copper", 10, 600);
    crucibleMelting("#forge:storage_blocks/copper", "tconstruct:molten_copper", 810, 4800 * 9);
    crucibleMelting("#forge:coins/copper", "tconstruct:molten_copper", 30, 1600);
    crucibleMelting("#forge:gears/copper", "tconstruct:molten_copper", 360, 4800 * 4);
    crucibleMelting("#forge:plates/copper", "tconstruct:molten_copper", 90, 4800);
    addBothMelterRecipes("createaddition:copper_rod", "tconstruct:molten_copper", 45, 18, 500, 2400);
    crucibleMelting("#forge:wires/copper", "tconstruct:molten_copper", 45, 2400);
    crucibleMelting("#forge:sheetmetals/copper", "tconstruct:molten_copper", 180, 4800);
    chillerBlockCasting("minecraft:copper_block", "tconstruct:molten_copper", 810, 4800 * 9);

    // Molten cobalt
    crucibleMelting("#forge:ingots/cobalt", "tconstruct:molten_cobalt", 90, 4800);
    crucibleMelting("#forge:nuggets/cobalt", "tconstruct:molten_cobalt", 10, 600);
    crucibleMelting("#forge:storage_blocks/cobalt", "tconstruct:molten_cobalt", 810, 4800 * 9);
    addBothMelterRecipes("kubejs:cobalt_gear", "tconstruct:molten_cobalt", 360, 135, 950, 4800 * 4);
    addBothMelterRecipes("kubejs:cobalt_plate", "tconstruct:molten_cobalt", 90, 64, 950, 4800);
    chillerBlockCasting("tconstruct:cobalt_block", "tconstruct:molten_cobalt", 810, 4800 * 9);

    // Molten slimesteel
    crucibleMelting("#forge:ingots/slimesteel", "tconstruct:molten_slimesteel", 90, 4800);
    crucibleMelting("#forge:nuggets/slimesteel", "tconstruct:molten_slimesteel", 10, 600);
    crucibleMelting("#forge:storage_blocks/slimesteel", "tconstruct:molten_slimesteel", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:slimesteel_block", "tconstruct:molten_slimesteel", 810, 4800 * 9);
    addBothMelterRecipes("kubejs:slimesteel_plate", "tconstruct:molten_slimesteel", 90, 60, 900, 4800);
    addBothMelterRecipes("kubejs:slimesteel_gear", "tconstruct:molten_slimesteel", 360, 136, 900, 4800 * 4);

    // Molten amethyst bronze
    crucibleMelting("#forge:ingots/amethyst_bronze", "tconstruct:molten_amethyst_bronze", 90, 4800);
    crucibleMelting("#forge:nuggets/amethyst_bronze", "tconstruct:molten_amethyst_bronze", 10, 600);
    crucibleMelting("#forge:storage_blocks/amethyst_bronze", "tconstruct:molten_amethyst_bronze", 810, 4800 * 9);
    addBothMelterRecipes("kubejs:amethyst_bronze_plate", "tconstruct:molten_amethyst_bronze", 90, 60, 820, 4800);
    addBothMelterRecipes("kubejs:amethyst_bronze_gear", "tconstruct:molten_amethyst_bronze", 360, 130, 820, 4800 * 4);
    chillerBlockCasting("tconstruct:amethyst_bronze_block", "tconstruct:molten_amethyst_bronze", 810, 4800 * 9);

    // Molten rose gold
    crucibleMelting("#forge:ingots/rose_gold", "tconstruct:molten_rose_gold", 90, 4800);
    crucibleMelting("#forge:nuggets/rose_gold", "tconstruct:molten_rose_gold", 10, 600);
    crucibleMelting("#forge:storage_blocks/rose_gold", "tconstruct:molten_rose_gold", 810, 4800 * 9);
    crucibleMelting("#forge:coins/rose_gold", "tconstruct:molten_rose_gold", 30, 1600);
    crucibleMelting("#forge:gears/rose_gold", "tconstruct:molten_rose_gold", 360, 4800 * 4);
    crucibleMelting("#forge:plates/rose_gold", "tconstruct:molten_rose_gold", 90, 4800);
    chillerBlockCasting("thermal:rose_gold_block", "tconstruct:molten_rose_gold", 810, 4800 * 9);

    // Replace Create recipe for rose gold
    event.remove({ output: "thermal:rose_gold_ingot", type: "create:mixing" });
    event.remove({
        output: "tconstruct:rose_gold_ingot",
        type: "create:mixing",
    });
    event.remove({
        id: "thermal:compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot",
    });
    event.recipes.createMixing("2x thermal:rose_gold_ingot", ["#forge:ingots/copper", "#forge:ingots/gold"]).heated();

    // Molten pigiron
    crucibleMelting("#forge:ingots/pig_iron", "tconstruct:molten_pig_iron", 90, 4800);
    crucibleMelting("#forge:nuggets/pig_iron", "tconstruct:molten_pig_iron", 10, 600);
    crucibleMelting("#forge:storage_blocks/pig_iron", "tconstruct:molten_pig_iron", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:pig_iron_block", "tconstruct:molten_pig_iron", 810, 4800 * 9);

    // Pigiron changes
    event.remove({
        output: "tconstruct:pig_iron_ingot",
        type: "create:mixing",
    });
    event.remove({
        output: "tconstruct:pig_iron_ingot",
        type: "thermal:smelter",
    });

    event.recipes
        .createMixing("2x tconstruct:pig_iron_ingot", [
            "#forge:ingots/iron",
            "2x #forge:slimeball/blood",
            Fluid.of("minecraft:milk", 250),
        ])
        .heated();
    // event.recipes.thermal.smelter("2x tconsstruct:pig_iron_ingot", ["#forge:ingots/iron", "#forge:slimeball/blood", "industrialforegoing:pink_slime"]).energy(4800);

    // Coagulated blood
    event.custom({
        type: "tconstruct:casting_table",
        result: {
            item: "kubejs:coagulated_blood",
        },
        fluid: {
            amount: 250,
            fluid: "tconstruct:meat_soup",
        },
        cooling_time: 40,
    });

    event.recipes.thermal
        .chiller("kubejs:coagulated_blood", [Fluid.of("tconstruct:meat_soup", 250), "thermal:chiller_ball_cast"])
        .energy(4800);

    crucibleMelting("kubejs:coagulated_blood", "tconstruct:meat_soup", 250, 4800);

    addTinkersMelterRecipe("minecraft:rotten_flesh", "tconstruct:meat_soup", 50, 20, 200);
    crucibleMelting("minecraft:rotten_flesh", "tconstruct:meat_soup", 50, 4800);

    // Molten manyullyn
    crucibleMelting("#forge:ingots/manyullyn", "tconstruct:molten_manyullyn", 90, 4800);
    crucibleMelting("#forge:nuggets/manyullyn", "tconstruct:molten_manyullyn", 10, 600);
    crucibleMelting("#forge:storage_blocks/manyullyn", "tconstruct:molten_manyullyn", 810, 4800 * 9);
    addBothMelterRecipes("kubejs:manyullyn_plate", "tconstruct:molten_manyullyn", 90, 72, 1200, 4800);
    addBothMelterRecipes("kubejs:manyullyn_gear", "tconstruct:molten_manyullyn", 360, 160, 1200, 4800 * 4);
    addBothMelterRecipes("kubejs:manyullyn_sheetmetal", "tconstruct:molten_manyullyn", 180, 100, 1200, 4800 * 2);
    addBothMelterRecipes("kubejs:manyullyn_heavy_plating", "tconstruct:molten_manyullyn", 720, 300, 1200, 4800 * 8);
    chillerBlockCasting("tconstruct:manyullyn_block", "tconstruct:molten_manyullyn", 810, 4800 * 9);

    // Molten hepatizon
    crucibleMelting("#forge:ingots/hepatizon", "tconstruct:molten_hepatizon", 90, 4800);
    crucibleMelting("#forge:nuggets/hepatizon", "tconstruct:molten_hepatizon", 10, 600);
    crucibleMelting("#forge:storage_blocks/hepatizon", "tconstruct:molten_hepatizon", 810, 4800 * 9);
    addBothMelterRecipes("kubejs:hepatizon_plate", "tconstruct:molten_hepatizon", 90, 76, 1400, 4800);
    addBothMelterRecipes("kubejs:hepatizon_sheetmetal", "tconstruct:molten_hepatizon", 180, 100, 1400, 4800 * 2);
    addBothMelterRecipes("kubejs:hepatizon_gear", "tconstruct:molten_hepatizon", 360, 172, 1400, 4800 * 4);
    addBothMelterRecipes("kubejs:hepatizon_heavy_plating", "tconstruct:molten_hepatizon", 720, 300, 1400, 4800 * 8);
    chillerBlockCasting("tconstruct:hepatizon_block", "tconstruct:molten_hepatizon", 810, 4800 * 9);

    // Molten queen's slime
    crucibleMelting("#forge:ingots/queens_slime", "tconstruct:molten_queens_slime", 90, 4800);
    crucibleMelting("#forge:nuggets/queens_slime", "tconstruct:molten_queens_slime", 10, 600);
    crucibleMelting("#forge:storage_blocks/queens_slime", "tconstruct:molten_queens_slime", 810, 4800 * 9);
    addBothMelterRecipes("kubejs:queens_slime_plate", "tconstruct:molten_queens_slime", 90, 68, 1150, 4800);
    addBothMelterRecipes("kubejs:queens_slime_gear", "tconstruct:molten_queens_slime", 360, 160, 1150, 4800 * 4);
    chillerBlockCasting("tconstruct:queens_slime_block", "tconstruct:molten_queens_slime", 810, 4800 * 9);

    // Molten cinderslime
    crucibleMelting("#forge:ingots/cinderslime", "tconstruct:molten_cinderslime", 90, 4800);
    crucibleMelting("#forge:nuggets/cinderslime", "tconstruct:molten_cinderslime", 10, 600);
    crucibleMelting("#forge:storage_blocks/cinderslime", "tconstruct:molten_cinderslime", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:cinderslime_block", "tconstruct:molten_cinderslime", 810, 4800 * 9);
    chillerIngotCasting("#forge:ingots/cinderslime", "tconstruct:molten_cinderslime", 90, 4800);
    addBothMelterRecipes("kubejs:cinderslime_plate", "tconstruct:molten_cinderslime", 90, 68, 1050, 4800);
    addBothMelterRecipes("kubejs:cinderslime_gear", "tconstruct:molten_cinderslime", 360, 160, 1050, 4800 * 4);

    // Molten netherite
    crucibleMelting("#forge:ingots/netherite", "tconstruct:molten_netherite", 90, 4800);
    crucibleMelting("#forge:nuggets/netherite", "tconstruct:molten_netherite", 10, 600);
    crucibleMelting("#forge:storage_blocks/netherite", "tconstruct:molten_netherite", 810, 4800 * 9);
    crucibleMelting("#forge:coins/netherite", "tconstruct:molten_netherite", 30, 1600);
    crucibleMelting("#forge:gears/netherite", "tconstruct:molten_netherite", 360, 4800 * 4);
    crucibleMelting("#forge:plates/netherite", "tconstruct:molten_netherite", 90, 4800);
    chillerBlockCasting("minecraft:netherite_block", "tconstruct:molten_netherite", 810, 4800 * 9);

    // Knightslime recipes
    addBothMelterRecipes("tconstruct:knightslime_ingot", "tconstruct:molten_knightslime", 90, 72, 1200, 4800);
    addBothMelterRecipes("tconstruct:knightslime_block", "tconstruct:molten_knightslime", 810, 216, 1200, 4800 * 9);
    addBothMelterRecipes("tconstruct:knightslime_nugget", "tconstruct:molten_knightslime", 10, 24, 1200, 600);
    chillerBlockCasting("tconstruct:knightslime_block", "tconstruct:molten_knightslime", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("tconstruct:knightslime_block", "tconstruct:molten_knightslime", 810, 160);
    addTinkersIngotCastingRecipe("tconstruct:knightslime_ingot", "tconstruct:molten_knightslime", 90, 50);
    addTinkersNuggetCastingRecipe("tconstruct:knightslime_nugget", "tconstruct:molten_knightslime", 10, 10);
    addBothMelterRecipes("kubejs:knightslime_plate", "tconstruct:molten_knightslime", 90, 72, 1200, 4800);
    addBothMelterRecipes("kubejs:knightslime_gear", "tconstruct:molten_knightslime", 360, 176, 1200, 4800 * 4);
    addBothMelterRecipes("kubejs:knightslime_sheetmetal", "tconstruct:molten_knightslime", 180, 100, 1200, 4800 * 2);
    addBothMelterRecipes("kubejs:knightslime_heavy_plating", "tconstruct:molten_knightslime", 720, 300, 1200, 4800 * 8);

    // Soulsteel recipes
    addBothMelterRecipes("tconstruct:soulsteel_ingot", "tconstruct:molten_soulsteel", 90, 72, 1200, 4800);
    addBothMelterRecipes("tconstruct:soulsteel_block", "tconstruct:molten_soulsteel", 810, 216, 1200, 4800 * 9);
    addBothMelterRecipes("tconstruct:soulsteel_nugget", "tconstruct:molten_soulsteel", 10, 24, 1200, 600);
    chillerBlockCasting("tconstruct:soulsteel_block", "tconstruct:molten_soulsteel", 810, 4800 * 9);
    chillerIngotCasting("tconstruct:soulsteel_ingot", "tconstruct:molten_soulsteel", 90, 4800);
    addTinkersBlockCastingRecipe("tconstruct:soulsteel_block", "tconstruct:molten_soulsteel", 810, 160);
    addTinkersIngotCastingRecipe("tconstruct:soulsteel_ingot", "tconstruct:molten_soulsteel", 90, 50);
    addTinkersNuggetCastingRecipe("tconstruct:soulsteel_nugget", "tconstruct:molten_soulsteel", 10, 10);

    // Molten tin
    crucibleMelting("#forge:ingots/tin", "tconstruct:molten_tin", 90, 4800);
    crucibleMelting("#forge:nuggets/tin", "tconstruct:molten_tin", 10, 600);
    crucibleMelting("#forge:storage_blocks/tin", "tconstruct:molten_tin", 810, 4800 * 9);
    crucibleMelting("#forge:coins/tin", "tconstruct:molten_tin", 30, 1600);
    crucibleMelting("#forge:gears/tin", "tconstruct:molten_tin", 360, 4800 * 4);
    crucibleMelting("#forge:plates/tin", "tconstruct:molten_tin", 90, 4800);
    chillerBlockCasting("thermal:tin_block", "tconstruct:molten_tin", 810, 4800 * 9);

    // Molten aluminum
    crucibleMelting("#forge:ingots/aluminum", "tconstruct:molten_aluminum", 90, 4800);
    crucibleMelting("#forge:nuggets/aluminum", "tconstruct:molten_aluminum", 10, 600);
    crucibleMelting("#forge:storage_blocks/aluminum", "tconstruct:molten_aluminum", 810, 4800 * 9);
    crucibleMelting("#forge:plates/aluminum", "tconstruct:molten_aluminum", 90, 4800);
    crucibleMelting("#forge:gears/aluminum", "tconstruct:molten_aluminum", 360, 4800 * 4);
    crucibleMelting("#forge:rods/aluminum", "tconstruct:molten_aluminum", 45, 2400);
    crucibleMelting("#forge:wires/aluminum", "tconstruct:molten_aluminum", 45, 2400);
    crucibleMelting("#forge:sheetmetals/aluminum", "tconstruct:molten_aluminum", 180, 4800);

    addBothMelterRecipes("kubejs:aluminum_heavy_plating", "tconstruct:molten_aluminum", 720, 300, 425, 4800 * 8);
    addBothMelterRecipes(
        "immersiveengineering:alu_scaffolding_standard",
        "tconstruct:molten_aluminum",
        135,
        56,
        425,
        7200
    );
    addBothMelterRecipes(
        "immersiveengineering:alu_scaffolding_grate_top",
        "tconstruct:molten_aluminum",
        135,
        56,
        425,
        7200
    );
    addBothMelterRecipes(
        "immersiveengineering:alu_scaffolding_wooden_top",
        "tconstruct:molten_aluminum",
        135,
        56,
        425,
        7200
    );
    chillerBlockCasting("immersiveengineering:storage_aluminum", "tconstruct:molten_aluminum", 810, 4800 * 9);

    // Molten lead
    crucibleMelting("#forge:ingots/lead", "tconstruct:molten_lead", 90, 4800);
    crucibleMelting("#forge:nuggets/lead", "tconstruct:molten_lead", 10, 600);
    crucibleMelting("#forge:storage_blocks/lead", "tconstruct:molten_lead", 810, 4800 * 9);
    crucibleMelting("#forge:coins/lead", "tconstruct:molten_lead", 30, 1600);
    crucibleMelting("#forge:gears/lead", "tconstruct:molten_lead", 360, 4800 * 4);
    crucibleMelting("#forge:plates/lead", "tconstruct:molten_lead", 90, 4800);
    crucibleMelting("#forge:wires/lead", "tconstruct:molten_lead", 45, 2400);
    crucibleMelting("#forge:sheetmetals/lead", "tconstruct:molten_lead", 180, 4800);
    chillerBlockCasting("thermal:lead_block", "tconstruct:molten_lead", 810, 4800 * 9);

    // Molten silver
    crucibleMelting("#forge:ingots/silver", "tconstruct:molten_silver", 90, 4800);
    crucibleMelting("#forge:nuggets/silver", "tconstruct:molten_silver", 10, 600);
    crucibleMelting("#forge:storage_blocks/silver", "tconstruct:molten_silver", 810, 4800 * 9);
    crucibleMelting("#forge:coins/silver", "tconstruct:molten_silver", 30, 1600);
    crucibleMelting("#forge:gears/silver", "tconstruct:molten_silver", 360, 4800 * 4);
    crucibleMelting("#forge:plates/silver", "tconstruct:molten_silver", 90, 4800);
    crucibleMelting("#forge:sheetmetals/silver", "tconstruct:molten_silver", 180, 4800);
    chillerBlockCasting("thermal:silver_block", "tconstruct:molten_silver", 810, 4800 * 9);

    // Molten nickel
    crucibleMelting("#forge:ingots/nickel", "tconstruct:molten_nickel", 90, 4800);
    crucibleMelting("#forge:nuggets/nickel", "tconstruct:molten_nickel", 10, 600);
    crucibleMelting("#forge:storage_blocks/nickel", "tconstruct:molten_nickel", 810, 4800 * 9);
    crucibleMelting("#forge:coins/nickel", "tconstruct:molten_nickel", 30, 1600);
    crucibleMelting("#forge:gears/nickel", "tconstruct:molten_nickel", 360, 4800 * 4);
    crucibleMelting("#forge:plates/nickel", "tconstruct:molten_nickel", 90, 4800);
    crucibleMelting("#forge:sheetmetals/nickel", "tconstruct:molten_nickel", 180, 4800);
    chillerBlockCasting("thermal:nickel_block", "tconstruct:molten_nickel", 810, 4800 * 9);

    // Molten zinc
    crucibleMelting("#forge:ingots/zinc", "tconstruct:molten_zinc", 90, 4800);
    crucibleMelting("#forge:nuggets/zinc", "tconstruct:molten_zinc", 10, 600);
    crucibleMelting("#forge:storage_blocks/zinc", "tconstruct:molten_zinc", 810, 4800 * 9);
    crucibleMelting("#forge:plates/zinc", "tconstruct:molten_zinc", 90, 4800);
    addBothMelterRecipes("kubejs:zinc_rod", "tconstruct:molten_zinc", 45, 14, 420, 2400);
    chillerIngotCasting("#forge:ingots/zinc", "tconstruct:molten_zinc", 90, 4800);
    chillerBlockCasting("create:zinc_block", "tconstruct:molten_zinc", 810, 4800 * 9);

    // Molten osmium
    crucibleMelting("#forge:ingots/osmium", "tconstruct:molten_osmium", 90, 4800);
    crucibleMelting("#forge:nuggets/osmium", "tconstruct:molten_osmium", 10, 600);
    crucibleMelting("#forge:storage_blocks/osmium", "tconstruct:molten_osmium", 810, 4800 * 9);
    chillerIngotCasting("#forge:ingots/osmium", "tconstruct:molten_osmium", 90, 4800);
    chillerBlockCasting("mekanism:block_osmium", "tconstruct:molten_osmium", 810, 4800 * 9);

    // Molten uranium
    crucibleMelting("#forge:ingots/uranium", "tconstruct:molten_uranium", 90, 4800);
    crucibleMelting("#forge:nuggets/uranium", "tconstruct:molten_uranium", 10, 600);
    crucibleMelting("#forge:storage_blocks/uranium", "tconstruct:molten_uranium", 810, 4800 * 9);
    crucibleMelting("#forge:plates/uranium", "tconstruct:molten_uranium", 90, 4800);
    crucibleMelting("#forge:sheetmetals/uranium", "tconstruct:molten_uranium", 180, 4800);
    chillerIngotCasting("immersiveengineering:ingot_uranium", "tconstruct:molten_uranium", 90, 4800);
    chillerBlockCasting("immersiveengineering:storage_uranium", "tconstruct:molten_uranium", 810, 4800 * 9);

    // Molten brass
    crucibleMelting("#forge:ingots/brass", "tconstruct:molten_brass", 90, 4800);
    crucibleMelting("#forge:nuggets/brass", "tconstruct:molten_brass", 10, 600);
    crucibleMelting("#forge:storage_blocks/brass", "tconstruct:molten_brass", 810, 4800 * 9);
    crucibleMelting("#forge:gears/brass", "tconstruct:molten_brass", 360, 4800 * 4);
    addBothMelterRecipes("createaddition:brass_rod", "tconstruct:molten_brass", 45, 16, 605, 2400);
    crucibleMelting("#forge:plates/brass", "tconstruct:molten_brass", 90, 4800);
    chillerIngotCasting("#forge:ingots/brass", "tconstruct:molten_brass", 90, 4800);
    chillerBlockCasting("create:brass_block", "tconstruct:molten_brass", 810, 4800 * 9);

    // Molten glowing brass
    addBothMelterRecipes("kubejs:glowing_brass_ingot", "kubejs:molten_glowing_brass", 90, 52, 605, 4800);
    addBothMelterRecipes("kubejs:glowing_brass_nugget", "kubejs:molten_glowing_brass", 10, 16, 605, 600);
    addBothMelterRecipes("kubejs:glowing_brass_block", "kubejs:molten_glowing_brass", 810, 160, 605, 4800 * 9);
    addBothMelterRecipes("kubejs:glowing_brass_gear", "kubejs:molten_glowing_brass", 360, 104, 605, 4800 * 4);
    addBothMelterRecipes("kubejs:glowing_brass_plate", "kubejs:molten_glowing_brass", 90, 52, 605, 4800);
    chillerIngotCasting("#forge:ingots/glowing_brass", "kubejs:molten_glowing_brass", 90, 4800);
    chillerBlockCasting("kubejs:glowing_brass_block", "kubejs:molten_glowing_brass", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:glowing_brass_block", "kubejs:molten_glowing_brass", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:glowing_brass_ingot", "kubejs:molten_glowing_brass", 50);
    addTinkersNuggetCastingRecipe("kubejs:glowing_brass_nugget", "kubejs:molten_glowing_brass", 10);

    // Glowing brass smeltery recipe
    event.custom({
        type: "tconstruct:alloy",
        inputs: [
            {
                amount: 90,
                tag: "forge:molten_brass",
            },

            {
                amount: 250,
                tag: "forge:glowstone",
            },
        ],
        result: {
            amount: 90,
            fluid: "kubejs:molten_glowing_brass",
        },
        temperature: 700,
    });

    // Molten electrum
    crucibleMelting("#forge:ingots/electrum", "tconstruct:molten_electrum", 90, 4800);
    crucibleMelting("#forge:nuggets/electrum", "tconstruct:molten_electrum", 10, 600);
    crucibleMelting("#forge:storage_blocks/electrum", "tconstruct:molten_electrum", 810, 4800 * 9);
    crucibleMelting("#forge:coins/electrum", "tconstruct:molten_electrum", 30, 1600);
    crucibleMelting("#forge:gears/electrum", "tconstruct:molten_electrum", 360, 4800 * 4);
    crucibleMelting("#forge:plates/electrum", "tconstruct:molten_electrum", 90, 4800);
    crucibleMelting("#forge:wires/electrum", "tconstruct:molten_electrum", 45, 2400);
    addBothMelterRecipes("createaddition:electrum_rod", "tconstruct:molten_electrum", 45, 14, 760, 2400);
    crucibleMelting("#forge:sheetmetals/electrum", "tconstruct:molten_electrum", 180, 4800);
    chillerBlockCasting("thermal:electrum_block", "tconstruct:molten_electrum", 810, 4800 * 9);

    // Molten invar
    crucibleMelting("#forge:ingots/invar", "tconstruct:molten_invar", 90, 4800);
    crucibleMelting("#forge:nuggets/invar", "tconstruct:molten_invar", 10, 600);
    crucibleMelting("#forge:storage_blocks/invar", "tconstruct:molten_invar", 810, 4800 * 9);
    crucibleMelting("#forge:coins/invar", "tconstruct:molten_invar", 30, 1600);
    crucibleMelting("#forge:gears/invar", "tconstruct:molten_invar", 360, 4800 * 4);
    crucibleMelting("#forge:plates/invar", "tconstruct:molten_invar", 90, 4800);
    chillerBlockCasting("thermal:invar_block", "tconstruct:molten_invar", 810, 4800 * 9);

    event.recipes.createMixing("3x thermal:invar_ingot", ["2x #forge:ingots/iron", "#forge:ingots/nickel"]).heated();

    // Molten constantan
    crucibleMelting("#forge:ingots/constantan", "tconstruct:molten_constantan", 90, 4800);
    crucibleMelting("#forge:nuggets/constantan", "tconstruct:molten_constantan", 10, 600);
    crucibleMelting("#forge:storage_blocks/constantan", "tconstruct:molten_constantan", 810, 4800 * 9);
    crucibleMelting("#forge:coins/constantan", "tconstruct:molten_constantan", 30, 1600);
    crucibleMelting("#forge:gears/constantan", "tconstruct:molten_constantan", 360, 4800 * 4);
    crucibleMelting("#forge:plates/constantan", "tconstruct:molten_constantan", 90, 4800);
    crucibleMelting("#forge:sheetmetals/constantan", "tconstruct:molten_constantan", 180, 4800);
    chillerBlockCasting("thermal:constantan_block", "tconstruct:molten_constantan", 810, 4800 * 9);

    // Molten steel
    crucibleMelting("#forge:ingots/steel", "tconstruct:molten_steel", 90, 4800);
    crucibleMelting("#forge:nuggets/steel", "tconstruct:molten_steel", 10, 600);
    crucibleMelting("#forge:storage_blocks/steel", "tconstruct:molten_steel", 810, 4800 * 9);
    crucibleMelting("#forge:coins/steel", "tconstruct:molten_steel", 30, 1600);
    crucibleMelting("#forge:gears/steel", "tconstruct:molten_steel", 360, 4800 * 4);
    crucibleMelting("#forge:plates/steel", "tconstruct:molten_steel", 90, 4800);
    crucibleMelting("#forge:wires/steel", "tconstruct:molten_steel", 45, 2400);
    crucibleMelting("#forge:rods/steel", "tconstruct:molten_steel", 45, 2400);
    crucibleMelting("#forge:sheetmetals/steel", "tconstruct:molten_steel", 180, 4800);
    chillerBlockCasting("thermal:steel_block", "tconstruct:molten_steel", 810, 4800 * 9);
    addBothMelterRecipes(
        "immersiveengineering:steel_scaffolding_standard",
        "tconstruct:molten_steel",
        135,
        76,
        950,
        7200
    );
    addBothMelterRecipes(
        "immersiveengineering:steel_scaffolding_grate_top",
        "tconstruct:molten_steel",
        135,
        76,
        950,
        7200
    );
    addBothMelterRecipes(
        "immersiveengineering:steel_scaffolding_wooden_top",
        "tconstruct:molten_steel",
        135,
        76,
        950,
        7200
    );

    // Molten enderium
    crucibleMelting("#forge:ingots/enderium", "tconstruct:molten_enderium", 90, 4800);
    crucibleMelting("#forge:nuggets/enderium", "tconstruct:molten_enderium", 10, 600);
    crucibleMelting("#forge:storage_blocks/enderium", "tconstruct:molten_enderium", 810, 4800 * 9);
    crucibleMelting("#forge:coins/enderium", "tconstruct:molten_enderium", 30, 1600);
    crucibleMelting("#forge:gears/enderium", "tconstruct:molten_enderium", 360, 4800 * 4);
    crucibleMelting("#forge:plates/enderium", "tconstruct:molten_enderium", 90, 4800);
    chillerIngotCasting("#forge:ingots/enderium", "tconstruct:molten_enderium", 90, 4800);
    chillerBlockCasting("thermal:enderium_block", "tconstruct:molten_enderium", 810, 4800 * 9);

    // Molten lumium
    crucibleMelting("#forge:ingots/lumium", "tconstruct:molten_lumium", 90, 4800);
    crucibleMelting("#forge:nuggets/lumium", "tconstruct:molten_lumium", 10, 600);
    crucibleMelting("#forge:storage_blocks/lumium", "tconstruct:molten_lumium", 810, 4800 * 9);
    crucibleMelting("#forge:coins/lumium", "tconstruct:molten_lumium", 30, 1600);
    crucibleMelting("#forge:gears/lumium", "tconstruct:molten_lumium", 360, 4800 * 4);
    crucibleMelting("#forge:plates/lumium", "tconstruct:molten_lumium", 90, 4800);
    chillerIngotCasting("#forge:ingots/lumium", "tconstruct:molten_lumium", 90, 4800);
    chillerBlockCasting("thermal:lumium_block", "tconstruct:molten_lumium", 810, 4800 * 9);

    // Molten signalum
    crucibleMelting("#forge:ingots/signalum", "tconstruct:molten_signalum", 90, 4800);
    crucibleMelting("#forge:nuggets/signalum", "tconstruct:molten_signalum", 10, 600);
    crucibleMelting("#forge:storage_blocks/signalum", "tconstruct:molten_signalum", 810, 4800 * 9);
    crucibleMelting("#forge:coins/signalum", "tconstruct:molten_signalum", 30, 1600);
    crucibleMelting("#forge:gears/signalum", "tconstruct:molten_signalum", 360, 4800 * 4);
    crucibleMelting("#forge:plates/signalum", "tconstruct:molten_signalum", 90, 4800);
    chillerIngotCasting("#forge:ingots/signalum", "tconstruct:molten_signalum", 90, 4800);
    chillerBlockCasting("thermal:signalum_block", "tconstruct:molten_signalum", 810, 4800 * 9);

    // Molten bronze
    crucibleMelting("#forge:ingots/bronze", "tconstruct:molten_bronze", 90, 4800);
    crucibleMelting("#forge:nuggets/bronze", "tconstruct:molten_bronze", 10, 600);
    crucibleMelting("#forge:storage_blocks/bronze", "tconstruct:molten_bronze", 810, 4800 * 9);
    crucibleMelting("#forge:coins/bronze", "tconstruct:molten_bronze", 30, 1600);
    crucibleMelting("#forge:gears/bronze", "tconstruct:molten_bronze", 360, 4800 * 4);
    crucibleMelting("#forge:plates/bronze", "tconstruct:molten_bronze", 90, 4800);
    chillerBlockCasting("thermal:bronze_block", "tconstruct:molten_bronze", 810, 4800 * 9);

    event.recipes.createMixing("4x thermal:bronze_ingot", ["3x #forge:ingots/copper", "#forge:ingots/tin"]).heated();

    // Molten refined glowstone
    crucibleMelting("#forge:ingots/refined_glowstone", "tconstruct:molten_refined_glowstone", 90, 4800);
    crucibleMelting("#forge:nuggets/refined_glowstone", "tconstruct:molten_refined_glowstone", 10, 600);
    crucibleMelting("#forge:storage_blocks/refined_glowstone", "tconstruct:molten_refined_glowstone", 810, 4800 * 9);
    chillerIngotCasting("#forge:ingots/refined_glowstone", "tconstruct:molten_refined_glowstone", 90, 4800);
    chillerBlockCasting("mekanism:block_refined_glowstone", "tconstruct:molten_refined_glowstone", 810, 4800 * 9);

    // Molten refined obsidian
    crucibleMelting("#forge:ingots/refined_obsidian", "tconstruct:molten_refined_obsidian", 90, 4800);
    crucibleMelting("#forge:nuggets/refined_obsidian", "tconstruct:molten_refined_obsidian", 10, 600);
    crucibleMelting("#forge:storage_blocks/refined_obsidian", "tconstruct:molten_refined_obsidian", 810, 4800 * 9);
    chillerIngotCasting("#forge:ingots/refined_obsidian", "tconstruct:molten_refined_obsidian", 90, 4800);
    chillerBlockCasting("mekanism:block_refined_obsidian", "tconstruct:molten_refined_obsidian", 810, 4800 * 9);

    // Venom
    crucibleMelting("tconstruct:spider_head", "tconstruct:venom", 500, 9600);
    crucibleMelting("tconstruct:cave_spider_head", "tconstruct:venom", 500, 9600);
    crucibleMelting("minecraft:spider_eye", "tconstruct:venom", 50, 4800);
    crucibleMelting("minecraft:fermented_spider_eye", "tconstruct:venom", 100, 4800);

    // Slime
    crucibleMelting("minecraft:slime_ball", "tconstruct:earth_slime", 250, 4800);
    crucibleMelting("minecraft:slime_block", "tconstruct:earth_slime", 2250, 4800 * 9);
    crucibleMelting("tconstruct:earth_congealed_slime", "tconstruct:earth_slime", 1000, 4800 * 4);
    crucibleMelting("tconstruct:earth_slime_crystal", "tconstruct:earth_slime", 250, 4800);
    crucibleMelting("tconstruct:earth_slime_crystal_block", "tconstruct:earth_slime", 1000, 4800 * 4);
    crucibleMelting("tconstruct:earth_slime_sapling", "tconstruct:earth_slime", 250, 4800);
    event.recipes.thermal
        .chiller("minecraft:slime_ball", [Fluid.of("tconstruct:earth_slime", 250), "thermal:chiller_ball_cast"])
        .energy(4800);
    event.recipes.thermal
        .chiller("tconstruct:earth_congealed_slime", [Fluid.of("tconstruct:earth_slime", 1000)])
        .energy(4800 * 4);

    // Skyslime
    crucibleMelting("tconstruct:sky_slime_ball", "tconstruct:sky_slime", 250, 4800);
    crucibleMelting("tconstruct:sky_slime", "tconstruct:sky_slime", 2250, 4800 * 9);
    crucibleMelting("tconstruct:sky_congealed_slime", "tconstruct:sky_slime", 1000, 4800 * 4);
    crucibleMelting("tconstruct:sky_slime_crystal", "tconstruct:sky_slime", 250, 4800);
    crucibleMelting("tconstruct:sky_slime_crystal_block", "tconstruct:sky_slime", 1000, 4800 * 4);
    crucibleMelting("tconstruct:sky_slime_sapling", "tconstruct:sky_slime", 250, 4800);
    event.recipes.thermal
        .chiller("tconstruct:sky_slime_ball", [Fluid.of("tconstruct:sky_slime", 250), "thermal:chiller_ball_cast"])
        .energy(4800);
    event.recipes.thermal
        .chiller("tconstruct:sky_congealed_slime", [Fluid.of("tconstruct:sky_slime", 1000)])
        .energy(4800 * 4);

    // Enderslime
    crucibleMelting("tconstruct:ender_slime_ball", "tconstruct:ender_slime", 250, 4800);
    crucibleMelting("tconstruct:ender_slime", "tconstruct:ender_slime", 2250, 4800 * 9);
    crucibleMelting("tconstruct:ender_congealed_slime", "tconstruct:ender_slime", 1000, 4800 * 4);
    crucibleMelting("tconstruct:ender_slime_crystal", "tconstruct:ender_slime", 250, 4800);
    crucibleMelting("tconstruct:ender_slime_crystal_block", "tconstruct:ender_slime", 1000, 4800 * 4);
    crucibleMelting("tconstruct:ender_slime_sapling", "tconstruct:ender_slime", 250, 4800);
    event.recipes.thermal
        .chiller("tconstruct:ender_slime_ball", [Fluid.of("tconstruct:ender_slime", 250), "thermal:chiller_ball_cast"])
        .energy(4800);
    event.recipes.thermal
        .chiller("tconstruct:ender_congealed_slime", [Fluid.of("tconstruct:ender_slime", 1000)])
        .energy(4800 * 4);

    // Magma
    event.recipes.remove({
        output: "minecraft:lava",
        input: "minecraft:magma_block",
    });
    crucibleMelting("minecraft:magma_cream", "tconstruct:magma", 250, 4800);
    event.recipes.thermal
        .chiller("minecraft:magma_cream", [Fluid.of("tconstruct:magma", 250), "thermal:chiller_ball_cast"])
        .energy(4800);
    event.recipes.thermal.chiller("minecraft:magma_block", [Fluid.of("tconstruct:magma", 1000)]).energy(4800 * 4);

    // Seared stone
    crucibleMelting("tconstruct:seared_brick", "tconstruct:seared_stone", 250, 4800);
    crucibleMelting("tconstruct:seared_bricks", "tconstruct:seared_stone", 1000, 4800 * 4);
    crucibleMelting("tconstruct:seared_stone", "tconstruct:seared_stone", 1000, 4800 * 4);
    crucibleMelting("tconstruct:grout", "tconstruct:seared_stone", 500, 4800);

    chillerIngotCasting("tconstruct:seared_brick", "tconstruct:seared_stone", 250, 4800);
    chillerBlockCasting("tconstruct:seared_stone", "tconstruct:seared_stone", 1000, 4800 * 4);

    // Scorched stone
    crucibleMelting("tconstruct:scorched_brick", "tconstruct:scorched_stone", 250, 4800);
    crucibleMelting("tconstruct:scorched_bricks", "tconstruct:scorched_stone", 1000, 4800 * 4);
    crucibleMelting("tconstruct:scorched_stone", "tconstruct:scorched_stone", 1000, 4800 * 4);

    chillerIngotCasting("tconstruct:scorched_brick", "tconstruct:scorched_stone", 250, 4800);
    chillerBlockCasting("tconstruct:scorched_stone", "tconstruct:scorched_stone", 1000, 4800 * 4);

    // Liquid soul
    crucibleMelting("minecraft:soul_sand", "tconstruct:liquid_soul", 1000, 4000);
    crucibleMelting("minecraft:soul_soil", "tconstruct:liquid_soul", 1000, 4000);
    crucibleMelting("tconstruct:soul_glass", "tconstruct:liquid_soul", 1000, 4000);
    crucibleMelting("tconstruct:soul_glass_pane", "tconstruct:liquid_soul", 250, 1000);
    chillerBlockCasting("tconstruct:soul_glass", "tconstruct:liquid_soul", 1000, 4000);

    // Blazing blood
    addBothMelterRecipes("minecraft:blaze_rod", "tconstruct:blazing_blood", 100, 40, 1000, 4800);

    // Destabilized redstone
    addTinkersMelterRecipe("minecraft:redstone", "thermal:redstone", 100, 80, 900);
    addTinkersMelterRecipe("minecraft:redstone_block", "thermal:redstone", 900, 3200, 900);

    // Energized glowstone
    addTinkersMelterRecipe("minecraft:glowstone_dust", "thermal:glowstone", 250, 80, 900);
    addTinkersMelterRecipe("minecraft:glowstone", "thermal:glowstone", 1000, 3200, 900);

    // Resonant ender
    crucibleMelting("minecraft:ender_eye", "thermal:ender", 250, 20000);
    crucibleMelting("tconstruct:enderman_head", "thermal:ender", 500, 40000);
    crucibleMelting("minecraft:dragon_head", "thermal:ender", 1000, 80000);

    // Phenolic resin
    event.recipes.thermal
        .chiller("immersiveengineering:plate_duroplast", [
            Fluid.of("immersiveengineering:phenolic_resin", 250),
            "kubejs:chiller_plate_cast",
        ])
        .energy(2400);
    event.recipes.thermal
        .chiller("immersiveengineering:duroplast", [Fluid.of("immersiveengineering:phenolic_resin", 1000)])
        .energy(4800);

    // Molten platinum
    crucibleMelting("#forge:ingots/platinum", "tconstruct:molten_platinum", 90, 4800);
    crucibleMelting("#forge:nuggets/platinum", "tconstruct:molten_platinum", 10, 600);
    crucibleMelting("#forge:storage_blocks/platinum", "tconstruct:molten_platinum", 810, 4800 * 9);
    addBothMelterRecipes("kubejs:platinum_gear", "tconstruct:molten_platinum", 360, 135, 970, 4800 * 4);
    addBothMelterRecipes("kubejs:platinum_plate", "tconstruct:molten_platinum", 90, 64, 970, 4800);
    chillerIngotCasting("#forge:ingots/platinum", "tconstruct:molten_platinum", 90, 4800);
    chillerBlockCasting("kubejs:platinum_block", "tconstruct:molten_platinum", 810, 4800 * 9);

    // Ichor
    addBothMelterRecipes("tconstruct:ichor_slime_ball", "tconstruct:ichor", 250, 32, 70, 4800);
    addBothMelterRecipes("tconstruct:ichor_slime", "tconstruct:ichor", 2250, 92, 70, 4800 * 9);
    addBothMelterRecipes("tconstruct:ichor_congealed_slime", "tconstruct:ichor", 1000, 64, 70, 4800 * 4);
    addBothMelterRecipes("tconstruct:ichor_slime_crystal", "tconstruct:ichor", 250, 32, 70, 4800);
    addBothMelterRecipes("tconstruct:ichor_slime_crystal_block", "tconstruct:ichor", 1000, 64, 70, 4800 * 4);
    addTinkersMelterRecipe("tconstruct:ichor_slime_crystal_cluster", "tconstruct:ichor", 1000, 78, 70);
    addTinkersMelterRecipe("tconstruct:large_ichor_slime_crystal_bud", "tconstruct:ichor", 750, 64, 70);
    addTinkersMelterRecipe("tconstruct:medium_ichor_slime_crystal_bud", "tconstruct:ichor", 500, 48, 70);
    addTinkersMelterRecipe("tconstruct:small_ichor_slime_crystal_bud", "tconstruct:ichor", 250, 32, 70);
    event.recipes.thermal
        .chiller("tconstruct:ichor_slime_ball", [Fluid.of("tconstruct:ichor", 250), "thermal:chiller_ball_cast"])
        .energy(4800);
    event.recipes.thermal
        .chiller("tconstruct:ichor_congealed_slime", [Fluid.of("tconstruct:ichor", 1000)])
        .energy(4800 * 4);

    // Remove melting ichor stuff into blazing blood
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/ball" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/block" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/bud_cluster" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/bud_large" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/bud_medium" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/bud_small" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/congealed" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/crystal" });
    event.remove({ id: "tconstruct:smeltery/melting/slime/ichor/crystal_block" });

    // Molten sulfur
    addBothMelterRecipes("thermal:sulfur", "kubejs:molten_sulfur", 250, 40, 300, 4800);
    addBothMelterRecipes("thermal:sulfur_dust", "kubejs:molten_sulfur", 250, 40, 300, 4800);
    addBothMelterRecipes("thermal:sulfur_block", "kubejs:molten_sulfur", 2250, 160, 300, 4800 * 9);

    // Molten electrotine
    addBothMelterRecipes("kubejs:electrotine", "kubejs:molten_electrotine", 100, 80, 900, 4800);
    addBothMelterRecipes("kubejs:electrotine_block", "kubejs:molten_electrotine", 900, 250, 900, 4800 * 9);
    chillerBlockCasting("kubejs:electrotine_block", "kubejs:molten_electrotine", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:electrotine_block", "kubejs:molten_electrotine", 900, 160);

    // Thermal casting table recipes
    addTinkersBlockCastingRecipe("minecraft:redstone_block", "thermal:redstone", 900, 160);
    addTinkersBlockCastingRecipe("minecraft:glowstone", "thermal:glowstone", 1000, 160);

    // Molten vibrant alloy
    addBothMelterRecipes("kubejs:vibrant_alloy_ingot", "kubejs:molten_vibrant_alloy", 90, 60, 900, 4800);
    addBothMelterRecipes("kubejs:vibrant_alloy_plate", "kubejs:molten_vibrant_alloy", 90, 60, 900, 4800);
    addBothMelterRecipes("kubejs:vibrant_alloy_nugget", "kubejs:molten_vibrant_alloy", 10, 20, 900, 600);
    addBothMelterRecipes("kubejs:vibrant_alloy_gear", "kubejs:molten_vibrant_alloy", 360, 120, 900, 4800 * 4);
    addBothMelterRecipes("kubejs:vibrant_alloy_block", "kubejs:molten_vibrant_alloy", 810, 200, 900, 4800 * 9);
    addBothMelterRecipes("kubejs:vibrant_alloy_wire", "kubejs:molten_vibrant_alloy", 45, 15, 900, 2400);
    chillerIngotCasting("#forge:ingots/vibrant_alloy", "kubejs:molten_vibrant_alloy", 90, 4800);
    chillerBlockCasting("kubejs:vibrant_alloy_block", "kubejs:molten_vibrant_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:vibrant_alloy_block", "kubejs:molten_vibrant_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:vibrant_alloy_ingot", "kubejs:molten_vibrant_alloy", 50);
    addTinkersNuggetCastingRecipe("kubejs:vibrant_alloy_nugget", "kubejs:molten_vibrant_alloy", 10);

    // Molten pulsating alloy
    addBothMelterRecipes("kubejs:pulsating_alloy_ingot", "kubejs:molten_pulsating_alloy", 90, 60, 700, 4800);
    addBothMelterRecipes("kubejs:pulsating_alloy_plate", "kubejs:molten_pulsating_alloy", 90, 60, 700, 4800);
    addBothMelterRecipes("kubejs:pulsating_alloy_nugget", "kubejs:molten_pulsating_alloy", 10, 20, 700, 600);
    addBothMelterRecipes("kubejs:pulsating_alloy_gear", "kubejs:molten_pulsating_alloy", 360, 120, 700, 4800 * 4);
    addBothMelterRecipes("kubejs:pulsating_alloy_block", "kubejs:molten_pulsating_alloy", 810, 200, 700, 4800 * 9);
    chillerIngotCasting("#forge:ingots/pulsating_alloy", "kubejs:molten_pulsating_alloy", 90, 4800);
    chillerBlockCasting("kubejs:pulsating_alloy_block", "kubejs:molten_pulsating_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:pulsating_alloy_block", "kubejs:molten_pulsating_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:pulsating_alloy_ingot", "kubejs:molten_pulsating_alloy", 50);
    addTinkersNuggetCastingRecipe("kubejs:pulsating_alloy_nugget", "kubejs:molten_pulsating_alloy", 10);

    // Molten compressed steel
    addBothMelterRecipes("pneumaticcraft:ingot_iron_compressed", "kubejs:molten_compressed_iron", 90, 60, 1200, 4800);
    addBothMelterRecipes("kubejs:compressed_iron_plate", "kubejs:molten_compressed_iron", 90, 60, 1200, 4800);
    addBothMelterRecipes("kubejs:compressed_iron_rod", "kubejs:molten_compressed_iron", 45, 15, 1200, 2400);
    addBothMelterRecipes(
        "pneumaticcraft:compressed_iron_gear",
        "kubejs:molten_compressed_iron",
        360,
        120,
        1200,
        4800 * 4
    );
    addBothMelterRecipes(
        "pneumaticcraft:compressed_iron_block",
        "kubejs:molten_compressed_iron",
        810,
        200,
        1200,
        4800 * 9
    );
    addBothMelterRecipes(
        "kubejs:compressed_iron_sheetmetal",
        "kubejs:molten_compressed_iron",
        180,
        100,
        1200,
        4800 * 2
    );
    chillerIngotCasting("#forge:ingots/compressed_iron", "kubejs:molten_compressed_iron", 90, 4800);
    chillerBlockCasting("pneumaticcraft:compressed_iron_block", "kubejs:molten_compressed_iron", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("pneumaticcraft:compressed_iron_block", "kubejs:molten_compressed_iron", 810, 160);
    addTinkersIngotCastingRecipe("pneumaticcraft:ingot_iron_compressed", "kubejs:molten_compressed_iron", 50);

    // Molten
    addBothMelterRecipes("actuallyadditions:restonia_crystal", "kubejs:molten_restonia", 100, 80, 1200, 4800);
    addBothMelterRecipes(
        "actuallyadditions:restonia_crystal_block",
        "kubejs:molten_restonia",
        900,
        280,
        1200,
        4800 * 9
    );
    chillerGemCasting("actuallyadditions:restonia_crystal", "kubejs:molten_restonia", 100, 4800);
    chillerBlockCasting("actuallyadditions:restonia_crystal_block", "kubejs:molten_restonia", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("actuallyadditions:restonia_crystal_block", "kubejs:molten_restonia", 900, 160);
    addTinkersGemCastingRecipe("actuallyadditions:restonia_crystal", "kubejs:molten_restonia", 100, 50);

    // Molten palis
    addBothMelterRecipes("actuallyadditions:palis_crystal", "kubejs:molten_palis", 100, 80, 1200, 4800);
    addBothMelterRecipes("actuallyadditions:palis_crystal_block", "kubejs:molten_palis", 900, 280, 1200, 4800 * 9);
    chillerGemCasting("actuallyadditions:palis_crystal", "kubejs:molten_palis", 100, 4800);
    chillerBlockCasting("actuallyadditions:palis_crystal_block", "kubejs:molten_palis", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("actuallyadditions:palis_crystal_block", "kubejs:molten_palis", 900, 160);
    addTinkersGemCastingRecipe("actuallyadditions:palis_crystal", "kubejs:molten_palis", 100, 50);

    // Molten enori
    addBothMelterRecipes("actuallyadditions:enori_crystal", "kubejs:molten_enori", 100, 80, 1200, 4800);
    addBothMelterRecipes("actuallyadditions:enori_crystal_block", "kubejs:molten_enori", 900, 280, 1200, 4800 * 9);
    chillerGemCasting("actuallyadditions:enori_crystal", "kubejs:molten_enori", 100, 4800);
    chillerBlockCasting("actuallyadditions:enori_crystal_block", "kubejs:molten_enori", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("actuallyadditions:enori_crystal_block", "kubejs:molten_enori", 900, 160);
    addTinkersGemCastingRecipe("actuallyadditions:enori_crystal", "kubejs:molten_enori", 100, 50);

    // Molten void
    addBothMelterRecipes("actuallyadditions:void_crystal", "kubejs:molten_void", 100, 80, 1200, 4800);
    addBothMelterRecipes("actuallyadditions:void_crystal_block", "kubejs:molten_void", 900, 280, 1200, 4800 * 9);
    chillerGemCasting("actuallyadditions:void_crystal", "kubejs:molten_void", 100, 4800);
    chillerBlockCasting("actuallyadditions:void_crystal_block", "kubejs:molten_void", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("actuallyadditions:void_crystal_block", "kubejs:molten_void", 900, 160);
    addTinkersGemCastingRecipe("actuallyadditions:void_crystal", "kubejs:molten_void", 100, 50);

    // Molten diamatine
    addBothMelterRecipes("actuallyadditions:diamatine_crystal", "kubejs:molten_diamatine", 100, 80, 1200, 4800);
    addBothMelterRecipes(
        "actuallyadditions:diamatine_crystal_block",
        "kubejs:molten_diamatine",
        900,
        280,
        1200,
        4800 * 9
    );
    chillerGemCasting("actuallyadditions:diamatine_crystal", "kubejs:molten_diamatine", 100, 4800);
    chillerBlockCasting("actuallyadditions:diamatine_crystal_block", "kubejs:molten_diamatine", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("actuallyadditions:diamatine_crystal_block", "kubejs:molten_diamatine", 900, 160);
    addTinkersGemCastingRecipe("actuallyadditions:diamatine_crystal", "kubejs:molten_diamatine", 100, 50);

    // Molten emeradic
    addBothMelterRecipes("actuallyadditions:emeradic_crystal", "kubejs:molten_emeradic", 100, 80, 1200, 4800);
    addBothMelterRecipes(
        "actuallyadditions:emeradic_crystal_block",
        "kubejs:molten_emeradic",
        900,
        280,
        1200,
        4800 * 9
    );
    chillerGemCasting("actuallyadditions:emeradic_crystal", "kubejs:molten_emeradic", 100, 4800);
    chillerBlockCasting("actuallyadditions:emeradic_crystal_block", "kubejs:molten_emeradic", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("actuallyadditions:emeradic_crystal_block", "kubejs:molten_emeradic", 900, 160);
    addTinkersGemCastingRecipe("actuallyadditions:emeradic_crystal", "kubejs:molten_emeradic", 100, 50);

    // Molten glod
    addBothMelterRecipes("kubejs:glod_crystal", "kubejs:molten_glod", 100, 80, 1200, 4800);
    addBothMelterRecipes("kubejs:glod_crystal_block", "kubejs:molten_glod", 900, 280, 1200, 4800 * 9);
    chillerGemCasting("kubejs:glod_crystal", "kubejs:molten_glod", 100, 4800);
    chillerBlockCasting("kubejs:glod_crystal_block", "kubejs:molten_glod", 900, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:glod_crystal_block", "kubejs:molten_glod", 900, 160);
    addTinkersGemCastingRecipe("kubejs:glod_crystal", "kubejs:molten_glod", 100, 50);

    // Molten red alloy
    addBothMelterRecipes("kubejs:red_alloy_ingot", "kubejs:molten_red_alloy", 90, 48, 600, 4800);
    addBothMelterRecipes("kubejs:red_alloy_nugget", "kubejs:molten_red_alloy", 10, 16, 600, 600);
    addBothMelterRecipes("kubejs:red_alloy_block", "kubejs:molten_red_alloy", 810, 160, 600, 4800 * 9);
    addBothMelterRecipes("kubejs:red_alloy_plate", "kubejs:molten_red_alloy", 90, 48, 600, 4800);
    addBothMelterRecipes("kubejs:red_alloy_gear", "kubejs:molten_red_alloy", 360, 96, 600, 4800 * 4);
    addBothMelterRecipes("kubejs:red_alloy_wire", "kubejs:molten_red_alloy", 45, 12, 600, 2400);
    chillerIngotCasting("kubejs:red_alloy_ingot", "kubejs:molten_red_alloy", 90, 4800);
    chillerBlockCasting("kubejs:red_alloy_block", "kubejs:molten_red_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:red_alloy_block", "kubejs:molten_red_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:red_alloy_ingot", "kubejs:molten_red_alloy", 50);
    addTinkersNuggetCastingRecipe("kubejs:red_alloy_nugget", "kubejs:molten_red_alloy", 50);

    // Molten blue alloy
    addBothMelterRecipes("kubejs:blue_alloy_ingot", "kubejs:molten_blue_alloy", 90, 48, 600, 4800);
    addBothMelterRecipes("kubejs:blue_alloy_nugget", "kubejs:molten_blue_alloy", 10, 16, 600, 600);
    addBothMelterRecipes("kubejs:blue_alloy_block", "kubejs:molten_blue_alloy", 810, 160, 600, 4800 * 9);
    addBothMelterRecipes("kubejs:blue_alloy_plate", "kubejs:molten_blue_alloy", 90, 48, 600, 4800);
    addBothMelterRecipes("kubejs:blue_alloy_gear", "kubejs:molten_blue_alloy", 360, 96, 600, 4800 * 4);
    chillerIngotCasting("kubejs:blue_alloy_ingot", "kubejs:molten_blue_alloy", 90, 4800);
    chillerBlockCasting("kubejs:blue_alloy_block", "kubejs:molten_blue_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:blue_alloy_block", "kubejs:molten_blue_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:blue_alloy_ingot", "kubejs:molten_blue_alloy", 50);
    addTinkersNuggetCastingRecipe("kubejs:blue_alloy_nugget", "kubejs:molten_blue_alloy", 50);

    // Molten purple alloy
    addBothMelterRecipes("kubejs:purple_alloy_ingot", "kubejs:molten_purple_alloy", 90, 48, 1200, 4800);
    addBothMelterRecipes("kubejs:purple_alloy_nugget", "kubejs:molten_purple_alloy", 10, 16, 1200, 600);
    addBothMelterRecipes("kubejs:purple_alloy_block", "kubejs:molten_purple_alloy", 810, 160, 1200, 4800 * 9);
    addBothMelterRecipes("kubejs:purple_alloy_plate", "kubejs:molten_purple_alloy", 90, 48, 1200, 4800);
    addBothMelterRecipes("kubejs:purple_alloy_gear", "kubejs:molten_purple_alloy", 360, 96, 1200, 4800 * 4);
    addBothMelterRecipes("kubejs:purple_alloy_wire", "kubejs:molten_purple_alloy", 45, 12, 1200, 2400);
    chillerIngotCasting("kubejs:purple_alloy_ingot", "kubejs:molten_purple_alloy", 90, 4800);
    chillerBlockCasting("kubejs:purple_alloy_block", "kubejs:molten_purple_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:purple_alloy_block", "kubejs:molten_purple_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:purple_alloy_ingot", "kubejs:molten_purple_alloy", 50);
    addTinkersNuggetCastingRecipe("kubejs:purple_alloy_nugget", "kubejs:molten_purple_alloy", 50);

    // Molten redstone alloy
    addBothMelterRecipes("kubejs:redstone_alloy_ingot", "kubejs:molten_redstone_alloy", 90, 60, 800, 4800);
    addBothMelterRecipes("kubejs:redstone_alloy_nugget", "kubejs:molten_redstone_alloy", 10, 20, 800, 600);
    addBothMelterRecipes("kubejs:redstone_alloy_block", "kubejs:molten_redstone_alloy", 810, 180, 800, 4800 * 9);
    addBothMelterRecipes("kubejs:redstone_alloy_plate", "kubejs:molten_redstone_alloy", 90, 60, 800, 4800);
    addBothMelterRecipes("kubejs:redstone_alloy_gear", "kubejs:molten_redstone_alloy", 360, 120, 800, 4800 * 4);
    chillerIngotCasting("kubejs:redstone_alloy_ingot", "kubejs:molten_redstone_alloy", 90, 4800);
    chillerBlockCasting("kubejs:redstone_alloy_block", "kubejs:molten_redstone_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:redstone_alloy_block", "kubejs:molten_redstone_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:redstone_alloy_ingot", "kubejs:molten_redstone_alloy", 50);
    addTinkersNuggetCastingRecipe("kubejs:redstone_alloy_nugget", "kubejs:molten_redstone_alloy", 50);

    // Molten electrical steel
    addBothMelterRecipes("kubejs:electrical_steel_ingot", "kubejs:molten_electrical_steel", 90, 60, 1100, 4800);
    addBothMelterRecipes("kubejs:electrical_steel_nugget", "kubejs:molten_electrical_steel", 10, 20, 1100, 600);
    addBothMelterRecipes("kubejs:electrical_steel_block", "kubejs:molten_electrical_steel", 810, 180, 1100, 4800 * 9);
    addBothMelterRecipes("kubejs:electrical_steel_plate", "kubejs:molten_electrical_steel", 90, 60, 1100, 4800);
    addBothMelterRecipes("kubejs:electrical_steel_gear", "kubejs:molten_electrical_steel", 360, 120, 1100, 4800 * 4);
    addBothMelterRecipes("kubejs:electrical_steel_sheetmetal", "kubejs:molten_electrical_steel", 180, 90, 1100, 9600);
    addBothMelterRecipes("kubejs:electrical_steel_heavy_plating", "kubejs:molten_electrical_steel", 720, 160, 1100, 4800 * 8);
    chillerIngotCasting("kubejs:electrical_steel_ingot", "kubejs:molten_electrical_steel", 90, 4800);
    chillerBlockCasting("kubejs:electrical_steel_block", "kubejs:molten_electrical_steel", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:electrical_steel_block", "kubejs:molten_electrical_steel", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:electrical_steel_ingot", "kubejs:molten_electrical_steel", 50);
    addTinkersNuggetCastingRecipe("kubejs:electrical_steel_nugget", "kubejs:molten_electrical_steel", 50);

    // Molten energetic alloy
    addBothMelterRecipes("kubejs:energetic_alloy_ingot", "kubejs:molten_energetic_alloy", 90, 60, 850, 4800);
    addBothMelterRecipes("kubejs:energetic_alloy_plate", "kubejs:molten_energetic_alloy", 90, 60, 850, 4800);
    addBothMelterRecipes("kubejs:energetic_alloy_nugget", "kubejs:molten_energetic_alloy", 10, 20, 850, 600);
    addBothMelterRecipes("kubejs:energetic_alloy_gear", "kubejs:molten_energetic_alloy", 360, 120, 850, 4800 * 4);
    addBothMelterRecipes("kubejs:energetic_alloy_block", "kubejs:molten_energetic_alloy", 810, 200, 850, 4800 * 9);
    addBothMelterRecipes("kubejs:energetic_alloy_wire", "kubejs:molten_energetic_alloy", 45, 15, 850, 2400);
    chillerIngotCasting("#forge:ingots/energetic_alloy", "kubejs:molten_energetic_alloy", 90, 4800);
    chillerBlockCasting("kubejs:energetic_alloy_block", "kubejs:molten_energetic_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:energetic_alloy_block", "kubejs:molten_energetic_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:energetic_alloy_ingot", "kubejs:molten_energetic_alloy", 50);
    addTinkersNuggetCastingRecipe("kubejs:energetic_alloy_nugget", "kubejs:molten_energetic_alloy", 10);

    // Molten ardite
    addBothMelterRecipes("kubejs:ardite_ingot", "kubejs:molten_ardite", 90, 60, 950, 4800);
    addBothMelterRecipes("kubejs:ardite_plate", "kubejs:molten_ardite", 90, 60, 950, 4800);
    addBothMelterRecipes("kubejs:ardite_nugget", "kubejs:molten_ardite", 10, 20, 950, 600);
    addBothMelterRecipes("kubejs:ardite_gear", "kubejs:molten_ardite", 360, 120, 950, 4800 * 4);
    addBothMelterRecipes("kubejs:ardite_block", "kubejs:molten_ardite", 810, 200, 950, 4800 * 9);
    chillerIngotCasting("#forge:ingots/ardite", "kubejs:molten_ardite", 90, 4800);
    chillerBlockCasting("kubejs:ardite_block", "kubejs:molten_ardite", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:ardite_block", "kubejs:molten_ardite", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:ardite_ingot", "kubejs:molten_ardite", 50);
    addTinkersNuggetCastingRecipe("kubejs:ardite_nugget", "kubejs:molten_ardite", 10);

    // Molten stainless steel
    addBothMelterRecipes("kubejs:stainless_steel_ingot", "kubejs:molten_stainless_steel", 90, 60, 1400, 4800);
    addBothMelterRecipes("kubejs:stainless_steel_nugget", "kubejs:molten_stainless_steel", 10, 20, 1400, 600);
    addBothMelterRecipes("kubejs:stainless_steel_block", "kubejs:molten_stainless_steel", 810, 180, 1400, 4800 * 9);
    addBothMelterRecipes("kubejs:stainless_steel_plate", "kubejs:molten_stainless_steel", 90, 60, 1400, 4800);
    addBothMelterRecipes("kubejs:stainless_steel_gear", "kubejs:molten_stainless_steel", 360, 120, 1400, 4800 * 4);
    addBothMelterRecipes("kubejs:stainless_steel_rod", "kubejs:molten_stainless_steel", 45, 16, 1400, 2400);
    addBothMelterRecipes("kubejs:stainless_steel_sheetmetal", "kubejs:molten_stainless_steel", 180, 90, 1400, 4800 * 2);
    chillerIngotCasting("kubejs:stainless_steel_ingot", "kubejs:molten_stainless_steel", 90, 4800);
    chillerBlockCasting("kubejs:stainless_steel_block", "kubejs:molten_stainless_steel", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:stainless_steel_block", "kubejs:molten_stainless_steel", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:stainless_steel_ingot", "kubejs:molten_stainless_steel", 50);
    addTinkersNuggetCastingRecipe("kubejs:stainless_steel_nugget", "kubejs:molten_stainless_steel", 10);

    // Molten andesite alloy
    addBothMelterRecipes("create:andesite_alloy", "kubejs:molten_andesite_alloy", 90, 44, 500, 4800);
    addBothMelterRecipes("create:andesite_alloy_block", "kubejs:molten_andesite_alloy", 90, 132, 500, 4800 * 9);
    chillerIngotCasting("create:andesite_alloy", "kubejs:molten_andesite_alloy", 90, 4800);
    chillerBlockCasting("create:andesite_alloy_block", "kubejs:molten_andesite_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("create:andesite_alloy_block", "kubejs:molten_andesite_alloy", 810, 160);
    addTinkersIngotCastingRecipe("create:andesite_alloy", "kubejs:molten_andesite_alloy", 90, 50);

    // Molten knightmetal
    crucibleMelting("#forge:ingots/knightmetal", "tconstruct:molten_knightmetal", 90, 4800);
    crucibleMelting("#forge:nuggets/knightmetal", "tconstruct:molten_knightmetal", 10, 600);
    crucibleMelting("#forge:storage_blocks/knightmetal", "tconstruct:molten_knightmetal", 810, 4800 * 9);
    chillerIngotCasting("#forge:ingots/knightmetal", "tconstruct:molten_knightmetal", 90, 4800);
    chillerBlockCasting("#forge:storage_blocks/knightmetal", "tconstruct:molten_knightmetal", 810, 4800 * 9);

    // Andesite alloy smeltery recipe
    event.custom({
        type: "tconstruct:alloy",
        inputs: [
            {
                amount: 1000,
                tag: "forge:molten_andesite",
            },

            {
                amount: 90,
                tag: "forge:molten_zinc",
            },
        ],
        result: {
            amount: 90,
            fluid: "kubejs:molten_andesite_alloy",
        },
        temperature: 700,
    });

    // Molten andesite
    addBothMelterRecipes("minecraft:andesite", "kubejs:molten_andesite", 1000, 132, 600, 19200);
    chillerBlockCasting("minecraft:andesite", "kubejs:molten_andesite", 1000, 8000);
    addTinkersBlockCastingRecipe("minecraft:andesite", "kubejs:molten_andesite", 1000, 100);
});
