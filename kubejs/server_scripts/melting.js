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

    // Slimesteel recipes
    event.remove({ output: "tconstruct:slimesteel_ingot", type: "create:mixing" });
    event.remove({ output: "tconstruct:slimesteel_ingot", type: "thermal:smelter" });

    event.recipes.createMixing("2x tconstruct:slimesteel_ingot", ["#forge:ingots/steel", "tconstruct:seared_brick", Fluid.of("tconstruct:sky_slime", 250)]).heated();
    event.recipes.thermal.smelter("2x tconstruct:slimesteel_ingot", ["#forge:ingots/steel", "tconstruct:seared_brick", "tconstruct:sky_slime_ball"]).energy(9600);

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
    event.remove({ output: "tconstruct:rose_gold_ingot", type: "create:mixing" });
    event.recipes.createMixing("2x thermal:rose_gold_ingot", ["#forge:ingots/copper", "#forge:ingots/gold"]).heated();

    // Molten pigiron
    crucibleMelting("#forge:ingots/pig_iron", "tconstruct:molten_pig_iron", 90, 4800);
    crucibleMelting("#forge:nuggets/pig_iron", "tconstruct:molten_pig_iron", 10, 600);
    crucibleMelting("#forge:storage_blocks/pig_iron", "tconstruct:molten_pig_iron", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:pig_iron_block", "tconstruct:molten_pig_iron", 810, 4800 * 9);

    // Pigiron changes
    event.remove({ output: "tconstruct:pig_iron_ingot", type: "create:mixing" });
    event.remove({ output: "tconstruct:pig_iron_ingot", type: "thermal:smelter" });

    event.recipes.createMixing("2x tconstruct:pig_iron_ingot", ["#forge:ingots/iron", "2x #forge:slimeball/blood", Fluid.of("minecraft:milk", 250)]).heated();
    // event.recipes.thermal.smelter("2x tconsstruct:pig_iron_ingot", ["#forge:ingots/iron", "#forge:slimeball/blood", "industrialforegoing:pink_slime"]).energy(4800);

    // Coagulated blood
    event.custom({
        type: "tconstruct:casting_table",
        result: {
            item: "kubejs:coagulated_blood"
        },
        fluid: {
            amount: 250,
            fluid: "tconstruct:meat_soup"
        },
        cooling_time: 40
    });

    event.recipes.thermal.chiller("kubejs:coagulated_blood", [Fluid.of("tconstruct:meat_soup", 250), "thermal:chiller_ball_cast"]).energy(4800);

    // Molten manyullyn
    crucibleMelting("#forge:ingots/manyullyn", "tconstruct:molten_manyullyn", 90, 4800);
    crucibleMelting("#forge:nuggets/manyullyn", "tconstruct:molten_manyullyn", 10, 600);
    crucibleMelting("#forge:storage_blocks/manyullyn", "tconstruct:molten_manyullyn", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:manyullyn_block", "tconstruct:molten_manyullyn", 810, 4800 * 9);

    // Molten hepatizon
    crucibleMelting("#forge:ingots/hepatizon", "tconstruct:molten_hepatizon", 90, 4800);
    crucibleMelting("#forge:nuggets/hepatizon", "tconstruct:molten_hepatizon", 10, 600);
    crucibleMelting("#forge:storage_blocks/hepatizon", "tconstruct:molten_hepatizon", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:hepatizon_block", "tconstruct:molten_hepatizon", 810, 4800 * 9);

    // Hepatizon recipe
    event.remove({ output: "tconstruct:hepatizon_ingot", type: "create:mixing" });
    event.remove({ output: "tconstruct:hepatizon_ingot", type: "thermal:smelter" });

    event.recipes.createMixing("2x tconstruct:hepatizon_ingot", ["2x #forge:ingots/amethyst_bronze", "#forge:ingots/cobalt", "2x create:polished_rose_quartz"]).superheated();
    event.recipes.thermal.smelter("2x tconstruct:hepatizon_ingot", ["2x #forge:ingots/amethyst_bronze", "#forge:ingots/cobalt", "2x create:polished_rose_quartz"]).energy(16000);

    // Molten queen's slime
    crucibleMelting("#forge:ingots/queens_slime", "tconstruct:molten_queens_slime", 90, 4800);
    crucibleMelting("#forge:nuggets/queens_slime", "tconstruct:molten_queens_slime", 10, 600);
    crucibleMelting("#forge:storage_blocks/queens_slime", "tconstruct:molten_queens_slime", 810, 4800 * 9);
    chillerBlockCasting("tconstruct:queens_slime_block", "tconstruct:molten_queens_slime", 810, 4800 * 9);

    // Queen's slime recipe
    event.remove({ output: "tconstruct:queens_slime_ingot", type: "create:mixing" });
    event.remove({ output: "tconstruct:queens_slime_ingot", type: "thermal:smelter" });

    event.recipes.createMixing("2x tconstruct:queens_slime_ingot", ["#forge:ingots/cobalt", "#forge:ingots/rose_gold", Fluid.of("kubejs:ichorslime", 250)]).superheated();
    event.recipes.thermal.smelter("2x tconstruct:queens_slime_ingot", ["#forge:ingots/cobalt", "#forge:ingots/rose_gold", "tconstruct:ichor_slime_ball"]).energy(16000);

    // Molten netherite
    crucibleMelting("#forge:ingots/netherite", "tconstruct:molten_netherite", 90, 4800);
    crucibleMelting("#forge:nuggets/netherite", "tconstruct:molten_netherite", 10, 600);
    crucibleMelting("#forge:storage_blocks/netherite", "tconstruct:molten_netherite", 810, 4800 * 9);
    crucibleMelting("#forge:coins/netherite", "tconstruct:molten_netherite", 30, 1600);
    crucibleMelting("#forge:gears/netherite", "tconstruct:molten_netherite", 360, 4800 * 4);
    crucibleMelting("#forge:plates/netherite", "tconstruct:molten_netherite", 90, 4800);
    chillerBlockCasting("minecraft:netherite_block", "tconstruct:molten_netherite", 810, 4800 * 9);

    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": "tconstruct:slimesteel_ingot"
            },

            {
                "item": "tconstruct:hepatizon_ingot"
            },

            {
                "item": "tconstruct:queens_slime_ingot"
            },

            {
                "item": "kubejs:knightslime_ingot"
            }
        ],
        "energy": 102400,
        "input": { "base_ingredient": { "tag": "forge:ingots/manyullyn" }, "count": 1 },
        "results": [{ "base_ingredient": { "tag": "forge:ingots/netherite" }, "count": 1 }],
        "time": 100
    })

    // Netherite recipe
    event.remove({ output: "minecraft:netherite_ingot", input: "minecraft:netherite_scrap" });
    event.remove({ output: "#forge:dusts/netherite", input: "minecraft:netherite_scrap" });

    // Knightslime recipes
    event.recipes.createMixing("2x kubejs:knightslime_ingot", ["#forge:ingots/steel", "#forge:ingots/netherite_scrap", Fluid.of("tconstruct:ender_slime", 250)]).superheated();
    event.recipes.thermal.smelter("2x kubejs:knightslime_ingot", ["#forge:ingots/steel", "#forge:ingots/netherite_scrap", "tconstruct:ender_slime_ball"]).energy(16000);

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

    // Enderium recipes
    event.remove({ output: "thermal:enderium_ingot", input: "thermal:diamond_dust", type: "thermal:smelter" });

    // Molten lumium
    crucibleMelting("#forge:ingots/lumium", "tconstruct:molten_lumium", 90, 4800);
    crucibleMelting("#forge:nuggets/lumium", "tconstruct:molten_lumium", 10, 600);
    crucibleMelting("#forge:storage_blocks/lumium", "tconstruct:molten_lumium", 810, 4800 * 9);
    crucibleMelting("#forge:coins/lumium", "tconstruct:molten_lumium", 30, 1600);
    crucibleMelting("#forge:gears/lumium", "tconstruct:molten_lumium", 360, 4800 * 4);
    crucibleMelting("#forge:plates/lumium", "tconstruct:molten_lumium", 90, 4800);
    chillerIngotCasting("#forge:ingots/lumium", "tconstruct:molten_lumium", 90, 4800);
    chillerBlockCasting("thermal:lumium_block", "tconstruct:molten_lumium", 810, 4800 * 9);

    // Lumium recipes
    event.remove({ output: "thermal:lumium_ingot", input: "#forge:dusts/glowstone", type: "thermal:smelter" });

    // Molten signalum
    crucibleMelting("#forge:ingots/signalum", "tconstruct:molten_signalum", 90, 4800);
    crucibleMelting("#forge:nuggets/signalum", "tconstruct:molten_signalum", 10, 600);
    crucibleMelting("#forge:storage_blocks/signalum", "tconstruct:molten_signalum", 810, 4800 * 9);
    crucibleMelting("#forge:coins/signalum", "tconstruct:molten_signalum", 30, 1600);
    crucibleMelting("#forge:gears/signalum", "tconstruct:molten_signalum", 360, 4800 * 4);
    crucibleMelting("#forge:plates/signalum", "tconstruct:molten_signalum", 90, 4800);
    chillerIngotCasting("#forge:ingots/signalum", "tconstruct:molten_signalum", 90, 4800);
    chillerBlockCasting("thermal:signalum_block", "tconstruct:molten_signalum", 810, 4800 * 9);

    // Signalum recipes
    event.remove({ output: "thermal:signalum_ingot", input: "#forge:dusts/redstone", type: "thermal:smelter" });

    // Molten bronze
    crucibleMelting("#forge:ingots/bronze", "tconstruct:molten_bronze", 90, 4800);
    crucibleMelting("#forge:nuggets/bronze", "tconstruct:molten_bronze", 10, 600);
    crucibleMelting("#forge:storage_blocks/bronze", "tconstruct:molten_bronze", 810, 4800 * 9);
    crucibleMelting("#forge:coins/bronze", "tconstruct:molten_bronze", 30, 1600);
    crucibleMelting("#forge:gears/bronze", "tconstruct:molten_bronze", 360, 4800 * 4);
    crucibleMelting("#forge:plates/bronze", "tconstruct:molten_bronze", 90, 4800);
    chillerBlockCasting("thermal:bronze_block", "tconstruct:molten_bronze", 810, 4800 * 9);

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
});