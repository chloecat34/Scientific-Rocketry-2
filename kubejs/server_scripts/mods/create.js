ServerEvents.recipes((event) => {
    // Remove andesite alloy recipe with iron
    event.remove({
        output: "create:andesite_alloy",
        input: "#forge:nuggets/iron",
    });
    event.remove({
        output: "create:andesite_alloy",
        type: "minecraft:crafting_shaped",
    });

    // Replace andesite alloy in induction smelter
    event.recipes.thermal.smelter("create:andesite_alloy", ["minecraft:andesite", "#forge:nuggets/zinc"], 0, 3200);

    // Batching recipe
    event.recipes.thermal.smelter("9x create:andesite_alloy", ["9x minecraft:andesite", "#forge:ingots/zinc"], 0, 32000);

    event.recipes.create.mixing("9x create:andesite_alloy", ["9x minecraft:andesite", "#forge:ingots/zinc"]).heated();

    // Water wheel
    event.remove({ output: "create:water_wheel" });

    event.shaped("create:water_wheel", ["ABA", "BCB", "ABA"], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:large_cogwheel",
    });

    // Large water wheel
    event.remove({ output: "create:large_water_wheel" });

    event.shaped("create:large_water_wheel", ["ABA", "BCB", "ABA"], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:water_wheel",
    });

    // Basin
    event.remove({ output: "create:basin" });

    event.shaped("create:basin", ["ABA", "AAA"], {
        A: "create:andesite_alloy",
        B: "minecraft:cauldron",
    });

    // Rose quartz
    event.remove({
        output: "create:rose_quartz",
        type: "minecraft:crafting_shapeless",
    });

    event.recipes.createFilling("create:rose_quartz", ["#forge:gems/quartz", Fluid.of("thermal:redstone", 400)]);
    event.recipes.thermal
        .bottler("create:rose_quartz", ["#forge:gems/quartz", Fluid.of("thermal:redstone", 400)])
        .energy(8000);

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 400,
            tag: "forge:redstone",
        },
        inputs: [
            {
                tag: "forge:gems/quartz",
            },
        ],
        results: [
            {
                item: "create:rose_quartz",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 400,
            fluid: "thermal:redstone",
        },
        item_input: {
            tag: "forge:gems/quartz",
        },
        item_output: {
            count: 1,
            item: "create:rose_quartz",
        },
        pressure: 2,
        temperature: {
            min_temp: 273,
        },
    });

    // Blaze burner
    event.remove({ output: "create:empty_blaze_burner" });

    event.shaped("create:empty_blaze_burner", [" A ", "ABA", " A "], {
        A: "#forge:plates/ardite",
        B: "minecraft:netherrack",
    });

    // Mechanical crafter
    event.remove({ output: "create:mechanical_crafter" });

    event.shaped("3x create:mechanical_crafter", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/brass",
        B: "create:electron_tube",
        C: "minecraft:crafting_table",
        D: "create:brass_casing",
        E: "create:precision_mechanism",
    });

    // Brass casing
    event.remove({ output: "create:brass_casing" });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood",
            },

            {
                tag: "forge:plates/brass",
            },
        ],
        results: [
            {
                item: "create:brass_casing",
            },
        ],
    });

    event.recipes.mekanism.combining("create:brass_casing", "#forge:treated_wood", "#forge:plates/brass");

    // Copper casing
    event.remove({ output: "create:copper_casing" });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:stripped_logs",
            },

            {
                tag: "forge:plates/copper",
            },
        ],
        results: [
            {
                item: "create:copper_casing",
            },
        ],
    });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood",
            },

            {
                tag: "forge:plates/copper",
            },
        ],
        results: [
            {
                item: "create:copper_casing",
            },
        ],
    });

    event.recipes.mekanism.combining("create:copper_casing", "#forge:treated_wood", "#forge:plates/copper");

    // Andesite casing
    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood",
            },

            {
                item: "create:andesite_alloy",
            },
        ],
        results: [
            {
                item: "create:andesite_casing",
            },
        ],
    });

    event.recipes.mekanism.combining("create:andesite_casing", "#forge:treated_wood", "create:andesite_alloy");

    // Train casing
    event.recipes.mekanism.combining("create:railway_casing", "create:brass_casing", "create:sturdy_sheet");

    // Compressed steel casing
    event.remove({ output: "compressedcreativity:compressed_iron_casing" });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                item: "create:railway_casing",
            },

            {
                tag: "forge:plates/compressed_iron",
            },
        ],
        results: [
            {
                item: "compressedcreativity:compressed_iron_casing",
            },
        ],
    });

    event.recipes.mekanism.combining(
        "compressedcreativity:compressed_iron_casing",
        "create:railway_casing",
        "#forge:plates/compressed_iron"
    );

    // Crushing wheels
    event.remove({ output: "create:crushing_wheel" });

    event.recipes.createMechanicalCrafting("2x create:crushing_wheel", [" AAA ", "ABCBA", "ACDCA", "ABCBA", " AAA "], {
        A: "create:sturdy_sheet",
        B: "create:andesite_alloy",
        C: "create:brass_casing",
        D: "#forge:storage_blocks/andesite_alloy",
    });

    // Precision mechanism
    event.remove({ output: "create:precision_mechanism" });

    event.recipes
        .createSequencedAssembly([Item.of("create:precision_mechanism")], "#forge:plates/brass", [
            event.recipes.createDeploying("create:incomplete_precision_mechanism", [
                "create:incomplete_precision_mechanism",
                "create:cogwheel",
            ]),
            event.recipes.createDeploying("create:incomplete_precision_mechanism", [
                "create:incomplete_precision_mechanism",
                "create:large_cogwheel",
            ]),
            event.recipes.createDeploying("create:incomplete_precision_mechanism", [
                "create:incomplete_precision_mechanism",
                "minecraft:iron_nugget",
            ]),
        ])
        .transitionalItem("create:incomplete_precision_mechanism")
        .loops(3);

    // Blaze cake
    event.remove({ output: "create:blaze_cake" });

    event.recipes.createFilling("create:blaze_cake", [
        "create:blaze_cake_base",
        Fluid.of("tconstruct:blazing_blood", 250),
    ]);
    event.recipes.thermal
        .bottler("create:blaze_cake", ["create:blaze_cake_base", Fluid.of("tconstruct:blazing_blood", 250)])
        .energy(4800);

    // Copper backtank
    event.replaceInput(
        {
            output: "create:copper_backtank",
        },
        "#forge:ingots/copper",
        "#forge:plates/copper"
    );

    // Mechanical belt alt recipe
    event.shaped("2x create:belt_connector", ["AAA", "AAA"], {
        A: "thermal:cured_rubber",
    });

    // Remove the weird missing tinker's bronze recipe
    event.remove([{ input: "#c:glass_blocks", type: "create:mixing" }]);

    // Hose pulley
    event.remove({ output: "create:hose_pulley" });
    event.shaped("create:hose_pulley", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/steel",
        B: "create:copper_casing",
        C: "#forge:gears/bronze",
        D: "minecraft:dried_kelp_block",
        E: "create:mechanical_pump",
    });

    // Steam engine, could use manyullyn
    event.remove({ output: "create:steam_engine" });
    event.shaped("create:steam_engine", ["ADA", "BCB", "AEA"], {
        A: "#forge:plates/steel",
        B: "#forge:plates/manyullyn",
        C: "#forge:gears/manyullyn",
        D: "kubejs:heat_mechanism",
        E: "#forge:storage_blocks/constantan",
    });

    // Heat mechanism
    event.recipes
        .createSequencedAssembly([Item.of("kubejs:heat_mechanism")], "immersiveengineering:component_steel", [
            event.recipes.createDeploying("kubejs:incomplete_heat_mechanism", [
                "kubejs:incomplete_heat_mechanism",
                "#forge:plates/invar",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_heat_mechanism", [
                "kubejs:incomplete_heat_mechanism",
                "create:sturdy_sheet",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_heat_mechanism", [
                "kubejs:incomplete_heat_mechanism",
                "#forge:plates/hepatizon",
            ]),
        ])
        .transitionalItem("kubejs:incomplete_heat_mechanism")
        .loops(4);

    // Item drain
    event.remove({ output: "create:item_drain" });
    event.shaped("create:item_drain", ["A", "B"], {
        A: "minecraft:bucket",
        B: "create:copper_casing",
    });

    // Rolling mill
    event.remove({ output: "createaddition:rolling_mill" });
    event.shaped("createaddition:rolling_mill", ["ABA", "CDC", "CEC"], {
        A: "#forge:plates/steel",
        B: "create:shaft",
        C: "create:andesite_alloy",
        D: "#forge:gears/iron",
        E: "create:andesite_casing",
    });

    // Windmill
    event.replaceInput({ output: "create:white_sail" }, "#forge:rods/wooden", "immersiveengineering:stick_treated");
    event.replaceInput({ output: "create:windmill_bearing" }, "#minecraft:wooden_slabs", "#forge:treated_wood_slab");

    // Mechanical drill
    event.replaceInput({ output: "create:mechanical_drill" }, "#forge:ingots/iron", "#forge:plates/iron");

    // Sturdy sheet thermal recipe
    event.recipes.thermal
        .bottler("create:sturdy_sheet", ["#forge:dusts/obsidian", Fluid.of("minecraft:lava", 500)])
        .energy(9600);

    // Blaze cake thermal recipe
    event.recipes.thermal
        .smelter("create:blaze_cake_base", ["minecraft:egg", "minecraft:sugar", "create:cinder_flour"])
        .energy(4800);

    // Nugget of experience
    let xpTypes = [
        "industrialforegoing:essence",
        "pneumaticcraft:memory_essence",
        "cofh_core:experience",
        "sophisticatedcore:xp_still",
        "mob_grinding_utils:fluid_xp",
    ];

    xpTypes.forEach((xp) => {
        event.recipes.createCompacting(["create:experience_nugget"], [Fluid.of(xp, 60)]);
        event.recipes.thermal.chiller("create:experience_nugget", [Fluid.of(xp, 60)]).energy(2400);
    });

    event.recipes.thermal
        .crucible(Fluid.of("pneumaticcraft:memory_essence", 60), "create:experience_nugget")
        .energy(2400);

    // Straw
    event.remove({ output: "createaddition:straw" });

    event.recipes.shaped("createaddition:straw", ["AA", " A", " A"], {
        A: "pneumaticcraft:plastic",
    });

    // Capacitor
    event.remove({ output: "createaddition:capacitor" });

    event.recipes.shaped("createaddition:capacitor", ["A", "B", "C"], {
        A: "create:electron_tube",
        B: "#forge:plates/steel",
        C: "#forge:plates/red_alloy",
    });

    // Alternator
    event.remove({ output: "createaddition:alternator" });

    event.recipes.createMechanicalCrafting("createaddition:alternator", ["  A  ", " ABA ", "ACDCA", " AEA "], {
        A: "#forge:plates/steel",
        B: "immersiveengineering:coil_mv",
        C: "immersiveengineering:rs_engineering",
        D: "#forge:rods/steel",
        E: "createaddition:capacitor",
    });

    // Electric motor
    event.remove({ output: "createaddition:electric_motor" });

    event.recipes.createMechanicalCrafting("createaddition:electric_motor", ["  A  ", " ABA ", "ACDCA", " AEA "], {
        A: "#forge:plates/aluminum",
        B: "immersiveengineering:coil_hv",
        C: "immersiveengineering:heavy_engineering",
        D: "#forge:rods/aluminum",
        E: "immersiveengineering:component_electronic_adv",
    });

    // Accumulator
    event.remove({ output: "createaddition:modular_accumulator" });

    event.recipes.createMechanicalCrafting("createaddition:modular_accumulator", ["  A  ", " ABA ", "ACDCA", " AEA "], {
        A: "#forge:plates/brass",
        B: "immersiveengineering:coil_mv",
        C: "immersiveengineering:rs_engineering",
        D: "#forge:rods/copper",
        E: "createaddition:capacitor",
    });

    // Spool
    event.remove({ output: "createaddition:spool" });

    event.recipes.shaped("4x createaddition:spool", ["A", "B", "A"], {
        A: "#forge:plates/zinc",
        B: "#forge:rods/zinc",
    });

    // Sequenced pulse generator
    event.replaceInput({}, "create_connected:control_chip", "create:precision_mechanism");

    // Blaze burner filling
    event.recipes.create.filling("create:blaze_burner", [
        "create:empty_blaze_burner",
        Fluid.of("tconstruct:blazing_blood", 1000),
    ]);

    event.custom({
        type: "tconstruct:casting_basin",
        cast: {
            item: "create:empty_blaze_burner",
        },
        cast_consumed: true,
        cooling_time: 80,
        fluid: {
            amount: 1000,
            fluid: "tconstruct:blazing_blood",
        },
        result: "create:blaze_burner",
    });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "tconstruct:blazing_blood",
        },
        item_input: {
            item: "create:empty_blaze_burner",
        },
        item_output: {
            count: 1,
            item: "create:blaze_burner",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 273,
        },
    });

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 1000,
            tag: "forge:blazing_blood",
        },
        inputs: [
            {
                item: "create:empty_blaze_burner",
            },
        ],
        results: [
            {
                item: "create:blaze_burner",
            },
        ],
    });

    event.recipes.thermal
        .bottler("create:blaze_burner", ["create:empty_blaze_burner", Fluid.of("tconstruct:blazing_blood", 1000)])
        .energy(9600);

    event.recipes.mekanism.combining("create:blaze_burner", "create:empty_blaze_burner", "powah:crystal_blazing");

    // Redstone link should take amethyst bronze plates, so it can use a metal component while also using amethyst
    event.remove({ output: "create:transmitter" });

    event.recipes.shaped("create:transmitter", [" A ", "BBB", " C "], {
        A: "minecraft:lightning_rod",
        B: "#forge:plates/amethyst_bronze",
        C: "#forge:dusts/redstone",
    });

    // Empty fan catalyst
    event.replaceInput({ output: "create_connected:empty_fan_catalyst" }, "#forge:ingots/brass", "#forge:plates/brass");

    // Remove dust recipes from create in the fluid encapsulator
    event.remove({ input: "create:cinder_flour", type: "thermal:bottler" });

    // Jetpack
    event.remove({ output: "create_jetpack:jetpack" });

    event.recipes.createMechanicalCrafting("create_jetpack:jetpack", [" ABA ", "ACDCA", "AEFEA", " E E "], {
        A: "#forge:plates/aluminum",
        B: "create:shaft",
        C: "create:precision_mechanism",
        D: "pneumaticcraft:air_canister",
        E: "create:smart_chute",
        F: "create:blaze_burner",
    });

    // Netherite jetpack
    event.remove({ id: "create_jetpack:netherite_jetpack" });

    // Fluid tank
    event.remove({ output: "create:fluid_tank" });

    event.shaped("create:fluid_tank", [" A ", "ABA", " A "], {
        A: "#forge:plates/copper",
        B: "#forge:barrels/wooden",
    });

    // Item vault
    event.remove({ id: "create:crafting/kinetics/item_vault" });

    event.shaped("create:item_vault", [" A ", "ABA", " A "], {
        A: "#forge:plates/iron",
        B: "#forge:barrels/wooden",
    });

    // Electron tube
    event.replaceInput({ output: "create:electron_tube" }, "#forge:plates/iron", "#forge:plates/glowing_brass");
});
