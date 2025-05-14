ServerEvents.recipes((event) => {
    // Remove andesite alloy recipe with iron
    event.remove({ output: "create:andesite_alloy", input: "#forge:nuggets/iron" });
	event.remove({ output: "create:andesite_alloy", type: "minecraft:crafting_shaped" });

    // Replace andesite alloy in induction smelter
    event.recipes.thermal.smelter("create:andesite_alloy", ["minecraft:andesite", "#forge:nuggets/zinc"], 0, 3200);

    // Water wheel
    event.remove({ output: "create:water_wheel" });

    event.shaped("create:water_wheel", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:large_cogwheel"
    });

    // Large water wheel
    event.remove({ output: "create:large_water_wheel" });

    event.shaped("create:large_water_wheel", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:water_wheel"
    });

    // Basin
    event.remove({ output: "create:basin" });

    event.shaped("create:basin", [
        "ABA",
        "AAA"
    ], {
        A: "create:andesite_alloy",
        B: "minecraft:cauldron"
    });

    // Rose quartz
    event.remove({ output: "create:rose_quartz", type: "minecraft:crafting_shapeless" });

    event.recipes.createFilling("create:rose_quartz", ["#forge:gems/quartz", Fluid.of("thermal:redstone", 400)]);
    event.recipes.thermal.bottler("create:rose_quartz", ["#forge:gems/quartz", Fluid.of("thermal:redstone", 400)]).energy(8000);

    // Blaze burner
    event.remove({ output: "create:empty_blaze_burner" });

    event.shaped("create:empty_blaze_burner", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "#forge:plates/cobalt",
        B: "minecraft:netherrack"
    });

    // Mechanical crafter
    event.remove({ output: "create:mechanical_crafter" });

    event.shaped("3x create:mechanical_crafter", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "#forge:plates/brass",
        B: "create:electron_tube",
        C: "minecraft:crafting_table",
        D: "create:brass_casing",
        E: "create:precision_mechanism"
    });

    // Brass casing
    event.remove({ output: "create:brass_casing" });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood"
            },

            {
                tag: "forge:plates/brass"
            }
        ],
        results: [
            {
                item: "create:brass_casing"
            }
        ]
    });

    event.recipes.mekanism.combining("create:brass_casing", "#forge:treated_wood", "#forge:plates/brass");

    // Copper casing
    event.remove({ output: "create:copper_casing" });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:stripped_logs"
            },

            {
                tag: "forge:plates/copper"
            }
        ],
        results: [
            {
                item: "create:copper_casing"
            }
        ]
    });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood"
            },

            {
                tag: "forge:plates/copper"
            }
        ],
        results: [
            {
                item: "create:copper_casing"
            }
        ]
    });

    event.recipes.mekanism.combining("create:copper_casing", "#forge:treated_wood", "#forge:plates/copper");

    // Andesite casing
    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood"
            },

            {
                item: "create:andesite_alloy"
            }
        ],
        results: [
            {
                item: "create:andesite_casing"
            }
        ]
    });

    event.recipes.mekanism.combining("create:andesite_casing", "#forge:treated_wood", "create:andesite_alloy");

    // Train casing
    event.recipes.mekanism.combining("create:railway_casing", "create:brass_casing", "create:sturdy_sheet");

    // Crushing wheels
    event.remove({ output: "create:crushing_wheel" });

    event.recipes.createMechanicalCrafting("2x create:crushing_wheel", [
        " AAA ",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        " AAA "
    ], {
        A: "create:sturdy_sheet",
        B: "create:andesite_alloy",
        C: "create:brass_casing",
        D: "#forge:storage_blocks/andesite_alloy"
    });

    // Precision mechanism
    event.remove({ output: "create:precision_mechanism" });

    event.recipes.createSequencedAssembly([
        Item.of("create:precision_mechanism")
    ], "#forge:plates/electrum", [
        event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:cogwheel"]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:large_cogwheel"]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "minecraft:iron_nugget"])
    ]).transitionalItem("create:incomplete_precision_mechanism").loops(3);

    // Blaze cake
    event.remove({ output: "create:blaze_cake" });

    event.recipes.createFilling("create:blaze_cake", ["create:blaze_cake_base", Fluid.of("tconstruct:blazing_blood", 250)]);
    event.recipes.thermal.bottler("create:blaze_cake", ["create:blaze_cake_base", Fluid.of("tconstruct:blazing_blood", 250)]).energy(4800);

    // Copper backtank
    event.replaceInput({
        output: "create:copper_backtank"
    }, "#forge:ingots/copper", "#forge:plates/copper");

    // Mechanical belt alt recipe
    event.shaped("2x create:belt_connector", [
        "AAA",
        "AAA"
    ], {
        "A": "thermal:cured_rubber"
    });

    // Remove the weird missing tinker's bronze recipe
    event.remove([{ input: "#c:glass_blocks", type: "create:mixing" }]);

    // Hose pulley
    event.remove({ output: "create:hose_pulley" });
    event.shaped("create:hose_pulley", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        "A": "#forge:plates/steel",
        "B": "create:copper_casing",
        "C": "#forge:gears/bronze",
        "D": "minecraft:dried_kelp_block",
        "E": "create:mechanical_pump"
    });

    // Steam engine, could use manyullyn
    event.remove({ output: "create:steam_engine" });
    event.shaped("create:steam_engine", [
        "ADA",
        "BCB",
        "AEA"
    ], {
        "A": "#forge:plates/steel",
        "B": "#forge:plates/manyullyn",
        "C": "#forge:gears/manyullyn",
        "D": "kubejs:heat_mechanism",
        "E": "#forge:storage_blocks/constantan"
    });

    // Heat mechanism
    event.recipes.createSequencedAssembly([
        Item.of("kubejs:heat_mechanism")
    ], "immersiveengineering:component_steel", [
        event.recipes.createDeploying("kubejs:incomplete_heat_mechanism", ["kubejs:incomplete_heat_mechanism", "#forge:plates/invar"]),
        event.recipes.createDeploying("kubejs:incomplete_heat_mechanism", ["kubejs:incomplete_heat_mechanism", "create:sturdy_sheet"]),
        event.recipes.createDeploying("kubejs:incomplete_heat_mechanism", ["kubejs:incomplete_heat_mechanism", "#forge:plates/invar"])
    ]).transitionalItem("kubejs:incomplete_heat_mechanism").loops(4);

    // Item drain
    event.remove({ output: "create:item_drain" });
    event.shaped("create:item_drain", [
        "A",
        "B"
    ], {
        "A": "minecraft:bucket",
        "B": "create:copper_casing"
    });

    // Rolling mill
    event.remove({ output: "createaddition:rolling_mill" });
    event.shaped("createaddition:rolling_mill", [
        "ABA",
        "CDC",
        "CEC"
    ], {
        "A": "#forge:plates/steel",
        "B": "create:shaft",
        "C": "create:andesite_alloy",
        "D": "#forge:gears/iron",
        "E": "create:andesite_casing"
    });

    // Windmill
    event.replaceInput({output: "create:white_sail"}, "#forge:rods/wooden", "immersiveengineering:stick_treated");
    event.replaceInput({output: "create:windmill_bearing"}, "#minecraft:wooden_slabs", "#forge:treated_wood_slab");

    // Mechanical drill
    event.replaceInput({output: "create:mechanical_drill"}, "#forge:ingots/iron", "#forge:plates/iron");

    // Sturdy sheet thermal recipe
    event.recipes.thermal.bottler("create:sturdy_sheet", ["#forge:dusts/obsidian", Fluid.of("minecraft:lava", 500)]).energy(9600);

    // Blaze cake thermal recipe
    event.recipes.thermal.smelter("create:blaze_cake_base", ["minecraft:egg", "minecraft:sugar", "create:cinder_flour"]).energy(4800);

    // Nugget of experience
    let xpTypes = ["industrialforegoing:essence", "pneumaticcraft:memory_essence", "cofh_core:experience", "sophisticatedcore:xp_still", "mob_grinding_utils:fluid_xp"];

    xpTypes.forEach(xp => {
        event.recipes.createCompacting(["create:experience_nugget"], [Fluid.of(xp, 60)]);
        event.recipes.thermal.chiller("create:experience_nugget", [Fluid.of(xp, 60)]).energy(2400);
    });

    event.recipes.thermal.crucible(Fluid.of("pneumaticcraft:memory_essence", 60), "create:experience_nugget").energy(2400);

    // Straw
    event.remove({ output: "createaddition:straw" });

    event.recipes.shaped("createaddition:straw", [
        "AA",
        " A",
        " A"
    ], {
        "A": "pneumaticcraft:plastic"
    });

    // Capacitor
    event.remove({ output: "createaddition:capacitor" });

    event.recipes.shaped("createaddition:capacitor", [
        "A",
        "B",
        "C"
    ], {
        "A": "create:electron_tube",
        "B": "#forge:plates/steel",
        "C": "#forge:plates/red_alloy"
    });

    // Alternator
    event.remove({ output: "createaddition:alternator" });

    event.recipes.createMechanicalCrafting("createaddition:alternator", [
        "  A  ",
        " ABA ",
        "ACDCA",
        " AEA "
    ], {
        "A": "#forge:plates/steel",
        "B": "immersiveengineering:coil_mv",
        "C": "immersiveengineering:rs_engineering",
        "D": "#forge:rods/steel",
        "E": "createaddition:capacitor"
    });

    // Electric motor
    event.remove({ output: "createaddition:electric_motor" });

    event.recipes.createMechanicalCrafting("createaddition:electric_motor", [
        "  A  ",
        " ABA ",
        "ACDCA",
        " AEA "
    ], {
        "A": "#forge:plates/aluminum",
        "B": "immersiveengineering:coil_hv",
        "C": "immersiveengineering:heavy_engineering",
        "D": "#forge:rods/aluminum",
        "E": "immersiveengineering:component_electronic_adv"
    });

    // Accumulator
    event.remove({ output: "createaddition:modular_accumulator" });

    event.recipes.createMechanicalCrafting("createaddition:modular_accumulator", [
        "  A  ",
        " ABA ",
        "ACDCA",
        " AEA "
    ], {
        "A": "#forge:plates/brass",
        "B": "immersiveengineering:coil_mv",
        "C": "immersiveengineering:rs_engineering",
        "D": "#forge:rods/copper",
        "E": "createaddition:capacitor"
    });
});
