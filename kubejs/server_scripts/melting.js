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
            type: "tconstruct:casting_basin",
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
            type: "tconstruct:casting_basin",
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

    const addTinkersNuggetCastingRecipe = (item, fluid, time) => {
        event.custom({
            type: "tconstruct:casting_basin",
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
            type: "tconstruct:casting_basin",
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

    // Remove molten slime + amethyst
    event.remove({ output: "minecraft:slime_ball", type: "create:compacting" });
    event.remove({ output: Fluid.of("estrogen:molten_amethyst", 250) });

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
    crucibleMelting("#forge:wires/iron", "tconstruct:molten_iron", 45, 2400);
    crucibleMelting("#forge:sheetmetals/iron", "tconstruct:molten_iron", 90, 4800);
    chillerBlockCasting("minecraft:iron_block", "tconstruct:molten_iron", 810, 4800 * 9);

    // Molten gold
    crucibleMelting("#forge:ingots/gold", "tconstruct:molten_gold", 90, 4800);
    crucibleMelting("#forge:nuggets/gold", "tconstruct:molten_gold", 10, 600);
    crucibleMelting("#forge:storage_blocks/gold", "tconstruct:molten_gold", 810, 4800 * 9);
    crucibleMelting("#forge:coins/gold", "tconstruct:molten_gold", 30, 1600);
    crucibleMelting("#forge:gears/gold", "tconstruct:molten_gold", 360, 4800 * 4);
    crucibleMelting("#forge:plates/gold", "tconstruct:molten_gold", 90, 4800);
    crucibleMelting("#forge:rods/gold", "tconstruct:molten_gold", 45, 2400);
    crucibleMelting("#forge:wires/gold", "tconstruct:molten_gold", 45, 2400);
    crucibleMelting("#forge:sheetmetals/gold", "tconstruct:molten_gold", 90, 4800);
    chillerBlockCasting("minecraft:gold_block", "tconstruct:molten_gold", 810, 4800 * 9);

    // Molten copper
    crucibleMelting("#forge:ingots/copper", "tconstruct:molten_copper", 90, 4800);
    crucibleMelting("#forge:nuggets/copper", "tconstruct:molten_copper", 10, 600);
    crucibleMelting("#forge:storage_blocks/copper", "tconstruct:molten_copper", 810, 4800 * 9);
    crucibleMelting("#forge:coins/copper", "tconstruct:molten_copper", 30, 1600);
    crucibleMelting("#forge:gears/copper", "tconstruct:molten_copper", 360, 4800 * 4);
    crucibleMelting("#forge:plates/copper", "tconstruct:molten_copper", 90, 4800);
    crucibleMelting("#forge:rods/copper", "tconstruct:molten_copper", 45, 2400);
    crucibleMelting("#forge:wires/copper", "tconstruct:molten_copper", 45, 2400);
    crucibleMelting("#forge:sheetmetals/copper", "tconstruct:molten_copper", 90, 4800);
    chillerBlockCasting("minecraft:copper_block", "tconstruct:molten_copper", 810, 4800 * 9);

    // Molten cobalt
    crucibleMelting("#forge:ingots/cobalt", "tconstruct:molten_cobalt", 90, 4800);
    crucibleMelting("#forge:nuggets/cobalt", "tconstruct:molten_cobalt", 10, 600);
    crucibleMelting("#forge:storage_blocks/cobalt", "tconstruct:molten_cobalt", 810, 4800 * 9);
    crucibleMelting("#forge:gears/cobalt", "tconstruct:molten_cobalt", 360, 4800 * 4);
    crucibleMelting("#forge:plates/cobalt", "tconstruct:molten_cobalt", 90, 4800);
    chillerBlockCasting("tconstruct:cobalt_block", "tconstruct:molten_cobalt", 810, 4800 * 9);

    // Molten slimesteel
    crucibleMelting("#forge:ingots/slimesteel", "tconstruct:molten_slimesteel", 90, 4800);
    crucibleMelting("#forge:nuggets/slimesteel", "tconstruct:molten_slimesteel", 10, 600);
    crucibleMelting("#forge:storage_blocks/slimesteel", "tconstruct:molten_slimesteel", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:slimesteel_block", "tconstruct:molten_slimesteel", 810, 4800 * 9);

    // Molten amethyst bronze
    crucibleMelting("#forge:ingots/amethyst_bronze", "tconstruct:molten_amethyst_bronze", 90, 4800);
    crucibleMelting("#forge:nuggets/amethyst_bronze", "tconstruct:molten_amethyst_bronze", 10, 600);
    crucibleMelting("#forge:storage_blocks/amethyst_bronze", "tconstruct:molten_amethyst_bronze", 810, 4800 * 9);
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
    crucibleMelting("#forge:plates/manyullyn", "tconstruct:molten_manyullyn", 90, 4800);
    crucibleMelting("#forge:gears/manyullyn", "tconstruct:molten_manyullyn", 360, 4800 * 4);
    chillerBlockCasting("tconstruct:manyullyn_block", "tconstruct:molten_manyullyn", 810, 4800 * 9);

    // Molten hepatizon
    crucibleMelting("#forge:ingots/hepatizon", "tconstruct:molten_hepatizon", 90, 4800);
    crucibleMelting("#forge:nuggets/hepatizon", "tconstruct:molten_hepatizon", 10, 600);
    crucibleMelting("#forge:storage_blocks/hepatizon", "tconstruct:molten_hepatizon", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:hepatizon_block", "tconstruct:molten_hepatizon", 810, 4800 * 9);

    // Molten queen's slime
    crucibleMelting("#forge:ingots/queens_slime", "tconstruct:molten_queens_slime", 90, 4800);
    crucibleMelting("#forge:nuggets/queens_slime", "tconstruct:molten_queens_slime", 10, 600);
    crucibleMelting("#forge:storage_blocks/queens_slime", "tconstruct:molten_queens_slime", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:queens_slime_block", "tconstruct:molten_queens_slime", 810, 4800 * 9);

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
    crucibleMelting("#forge:rods/aluminum", "tconstruct:molten_aluminum", 45, 2400);
    crucibleMelting("#forge:wires/aluminum", "tconstruct:molten_aluminum", 45, 2400);
    crucibleMelting("#forge:sheetmetals/aluminum", "tconstruct:molten_aluminum", 90, 4800);
    chillerBlockCasting("immersiveengineering:storage_aluminum", "tconstruct:molten_aluminum", 810, 4800 * 9);

    // Molten lead
    crucibleMelting("#forge:ingots/lead", "tconstruct:molten_lead", 90, 4800);
    crucibleMelting("#forge:nuggets/lead", "tconstruct:molten_lead", 10, 600);
    crucibleMelting("#forge:storage_blocks/lead", "tconstruct:molten_lead", 810, 4800 * 9);
    crucibleMelting("#forge:coins/lead", "tconstruct:molten_lead", 30, 1600);
    crucibleMelting("#forge:gears/lead", "tconstruct:molten_lead", 360, 4800 * 4);
    crucibleMelting("#forge:plates/lead", "tconstruct:molten_lead", 90, 4800);
    crucibleMelting("#forge:wires/lead", "tconstruct:molten_lead", 45, 2400);
    crucibleMelting("#forge:sheetmetals/lead", "tconstruct:molten_lead", 90, 4800);
    chillerBlockCasting("thermal:lead_block", "tconstruct:molten_lead", 810, 4800 * 9);

    // Molten silver
    crucibleMelting("#forge:ingots/silver", "tconstruct:molten_silver", 90, 4800);
    crucibleMelting("#forge:nuggets/silver", "tconstruct:molten_silver", 10, 600);
    crucibleMelting("#forge:storage_blocks/silver", "tconstruct:molten_silver", 810, 4800 * 9);
    crucibleMelting("#forge:coins/silver", "tconstruct:molten_silver", 30, 1600);
    crucibleMelting("#forge:gears/silver", "tconstruct:molten_silver", 360, 4800 * 4);
    crucibleMelting("#forge:plates/silver", "tconstruct:molten_silver", 90, 4800);
    crucibleMelting("#forge:sheetmetals/silver", "tconstruct:molten_silver", 90, 4800);
    chillerBlockCasting("thermal:silver_block", "tconstruct:molten_silver", 810, 4800 * 9);

    // Molten nickel
    crucibleMelting("#forge:ingots/nickel", "tconstruct:molten_nickel", 90, 4800);
    crucibleMelting("#forge:nuggets/nickel", "tconstruct:molten_nickel", 10, 600);
    crucibleMelting("#forge:storage_blocks/nickel", "tconstruct:molten_nickel", 810, 4800 * 9);
    crucibleMelting("#forge:coins/nickel", "tconstruct:molten_nickel", 30, 1600);
    crucibleMelting("#forge:gears/nickel", "tconstruct:molten_nickel", 360, 4800 * 4);
    crucibleMelting("#forge:plates/nickel", "tconstruct:molten_nickel", 90, 4800);
    crucibleMelting("#forge:sheetmetals/nickel", "tconstruct:molten_nickel", 90, 4800);
    chillerBlockCasting("thermal:nickel_block", "tconstruct:molten_nickel", 810, 4800 * 9);

    // Molten zinc
    crucibleMelting("#forge:ingots/zinc", "tconstruct:molten_zinc", 90, 4800);
    crucibleMelting("#forge:nuggets/zinc", "tconstruct:molten_zinc", 10, 600);
    crucibleMelting("#forge:storage_blocks/zinc", "tconstruct:molten_zinc", 810, 4800 * 9);
    crucibleMelting("#forge:plates/zinc", "tconstruct:molten_zinc", 90, 4800);
    crucibleMelting("#forge:rods/zinc", "tconstruct:molten_zinc", 45, 2400);
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
    crucibleMelting("#forge:sheetmetals/uranium", "tconstruct:molten_uranium", 90, 4800);
    chillerIngotCasting("immersiveengineering:ingot_uranium", "tconstruct:molten_uranium", 90, 4800);
    chillerBlockCasting("immersiveengineering:storage_uranium", "tconstruct:molten_uranium", 810, 4800 * 9);

    // Molten brass
    crucibleMelting("#forge:ingots/brass", "tconstruct:molten_brass", 90, 4800);
    crucibleMelting("#forge:nuggets/brass", "tconstruct:molten_brass", 10, 600);
    crucibleMelting("#forge:storage_blocks/brass", "tconstruct:molten_brass", 810, 4800 * 9);
    crucibleMelting("#forge:rods/brass", "tconstruct:molten_brass", 45, 2400);
    crucibleMelting("#forge:plates/brass", "tconstruct:molten_brass", 90, 4800);
    chillerIngotCasting("#forge:ingots/brass", "tconstruct:molten_brass", 90, 4800);
    chillerBlockCasting("create:brass_block", "tconstruct:molten_brass", 810, 4800 * 9);

    // Molten electrum
    crucibleMelting("#forge:ingots/electrum", "tconstruct:molten_electrum", 90, 4800);
    crucibleMelting("#forge:nuggets/electrum", "tconstruct:molten_electrum", 10, 600);
    crucibleMelting("#forge:storage_blocks/electrum", "tconstruct:molten_electrum", 810, 4800 * 9);
    crucibleMelting("#forge:coins/electrum", "tconstruct:molten_electrum", 30, 1600);
    crucibleMelting("#forge:gears/electrum", "tconstruct:molten_electrum", 360, 4800 * 4);
    crucibleMelting("#forge:plates/electrum", "tconstruct:molten_electrum", 90, 4800);
    crucibleMelting("#forge:wires/electrum", "tconstruct:molten_electrum", 45, 2400);
    crucibleMelting("#forge:sheetmetals/electrum", "tconstruct:molten_electrum", 90, 4800);
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
    crucibleMelting("#forge:sheetmetals/constantan", "tconstruct:molten_constantan", 90, 4800);
    chillerBlockCasting("thermal:constantan_block", "tconstruct:molten_constantan", 810, 4800 * 9);

    // Molten steel
    crucibleMelting("#forge:ingots/steel", "tconstruct:molten_steel", 90, 4800);
    crucibleMelting("#forge:nuggets/steel", "tconstruct:molten_steel", 10, 600);
    crucibleMelting("#forge:storage_blocks/steel", "tconstruct:molten_steel", 810, 4800 * 9);
    crucibleMelting("#forge:coins/steel", "tconstruct:molten_steel", 30, 1600);
    crucibleMelting("#forge:gears/steel", "tconstruct:molten_steel", 360, 4800 * 4);
    crucibleMelting("#forge:plates/steel", "tconstruct:molten_steel", 90, 4800);
    crucibleMelting("#forge:wires/steel", "tconstruct:molten_steel", 45, 2400);
    crucibleMelting("#forge:sheetmetals/steel", "tconstruct:molten_steel", 90, 4800);
    chillerBlockCasting("thermal:steel_block", "tconstruct:molten_steel", 810, 4800 * 9);

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
    crucibleMelting("minecraft:magma_block", "tconstruct:magma", 1000, 4800 * 4);
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
    crucibleMelting("tconstruct:nether_grout", "tconstruct:scorched_stone", 500, 4800);

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
    crucibleMelting("#forge:gears/platinum", "tconstruct:molten_platinum", 360, 4800 * 4);
    crucibleMelting("#forge:plates/platinum", "tconstruct:molten_platinum", 90, 4800);
    chillerIngotCasting("#forge:ingots/platinum", "tconstruct:molten_platinum", 90, 4800);
    chillerBlockCasting("kubejs:platinum_block", "tconstruct:molten_platinum", 810, 4800 * 9);

    // Ichorslime
    addBothMelterRecipes("tconstruct:ichor_slime_ball", "kubejs:ichorslime", 250, 32, 70, 4800);
    addBothMelterRecipes("tconstruct:ichor_slime", "kubejs:ichorslime", 2250, 92, 70, 4800 * 9);
    addBothMelterRecipes("tconstruct:ichor_congealed_slime", "kubejs:ichorslime", 1000, 64, 70, 4800 * 4);
    addBothMelterRecipes("tconstruct:ichor_slime_crystal", "kubejs:ichorslime", 250, 32, 70, 4800);
    addBothMelterRecipes("tconstruct:ichor_slime_crystal_block", "kubejs:ichorslime", 1000, 64, 70, 4800 * 4);
    addTinkersMelterRecipe("tconstruct:ichor_slime_crystal_cluster", "kubejs:ichorslime", 1000, 78, 70);
    addTinkersMelterRecipe("tconstruct:large_ichor_slime_crystal_bud", "kubejs:ichorslime", 750, 64, 70);
    addTinkersMelterRecipe("tconstruct:medium_ichor_slime_crystal_bud", "kubejs:ichorslime", 500, 48, 70);
    addTinkersMelterRecipe("tconstruct:small_ichor_slime_crystal_bud", "kubejs:ichorslime", 250, 32, 70);
    event.recipes.thermal
        .chiller("tconstruct:ichor_slime_ball", [Fluid.of("kubejs:ichorslime", 250), "thermal:chiller_ball_cast"])
        .energy(4800);
    event.recipes.thermal
        .chiller("tconstruct:ichor_congealed_slime", [Fluid.of("kubejs:ichorslime", 1000)])
        .energy(4800 * 4);

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
    chillerIngotCasting("#forge:ingots/vibrant_alloy", "kubejs:molten_vibrant_alloy", 90, 4800);
    chillerBlockCasting("kubejs:vibrant_alloy_block", "kubejs:molten_vibrant_alloy", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("kubejs:vibrant_alloy_block", "kubejs:molten_vibrant_alloy", 810, 160);
    addTinkersIngotCastingRecipe("kubejs:vibrant_alloy_ingot", "kubejs:molten_vibrant_alloy", 50);
    addTinkersIngotCastingRecipe("kubejs:vibrant_alloy_nugget", "kubejs:molten_vibrant_alloy", 10);

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
    addTinkersIngotCastingRecipe("kubejs:pulsating_alloy_nugget", "kubejs:molten_pulsating_alloy", 10);

    // Molten compressed steel
    addBothMelterRecipes("pneumaticcraft:ingot_iron_compressed", "kubejs:molten_compressed_iron", 90, 60, 1200, 4800);
    addBothMelterRecipes("kubejs:compressed_iron_plate", "kubejs:molten_compressed_iron", 90, 60, 1200, 4800);
    addBothMelterRecipes("pneumaticcraft:compressed_iron_gear", "kubejs:molten_compressed_iron", 360, 120, 1200, 4800 * 4);
    addBothMelterRecipes("pneumaticcraft:compressed_iron_block", "kubejs:molten_compressed_iron", 810, 200, 1200, 4800 * 9);
    chillerIngotCasting("#forge:ingots/compressed_iron", "kubejs:molten_compressed_iron", 90, 4800);
    chillerBlockCasting("pneumaticcraft:compressed_iron_block", "kubejs:molten_compressed_iron", 810, 4800 * 9);
    addTinkersBlockCastingRecipe("pneumaticcraft:compressed_iron_block", "kubejs:molten_compressed_iron", 810, 160);
    addTinkersIngotCastingRecipe("pneumaticcraft:ingot_iron_compressed", "kubejs:molten_compressed_iron", 50);
});
