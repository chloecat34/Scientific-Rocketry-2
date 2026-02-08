ServerEvents.recipes((event) => {
    // Disable air compressors
    event.remove({ output: "pneumaticcraft:air_compressor" });
    event.remove({ output: "pneumaticcraft:advanced_air_compressor" });
    event.remove({ output: "pneumaticcraft:manual_compressor" });

    // Reinforced stone
    event.remove({ id: "pneumaticcraft:reinforced_stone" });

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 45,
            tag: "forge:molten_compressed_iron",
        },
        inputs: [
            {
                item: "immersiveengineering:concrete_leaded",
            },
        ],
        results: [
            {
                item: "pneumaticcraft:reinforced_stone",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 30,
            fluid: "kubejs:molten_compressed_iron",
        },
        item_input: {
            item: "immersiveengineering:concrete_leaded",
        },
        item_output: {
            count: 1,
            item: "pneumaticcraft:reinforced_stone",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 273,
        },
    });

    event.recipes.thermal
        .bottler("4x pneumaticcraft:reinforced_stone", [
            "4x immersiveengineering:concrete_leaded",
            Fluid.of("kubejs:molten_compressed_iron", 90),
        ])
        .energy(9600);

    // Liquid fuels
    event.custom({
        type: "pneumaticcraft:fuel_quality",
        air_per_bucket: 250000,
        burn_rate: 0.5,
        fluid: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:canola_oil",
        },
    });

    event.custom({
        type: "pneumaticcraft:fuel_quality",
        air_per_bucket: 400000,
        burn_rate: 0.75,
        fluid: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:refined_canola_oil",
        },
    });

    event.custom({
        type: "pneumaticcraft:fuel_quality",
        air_per_bucket: 1000000,
        burn_rate: 1,
        fluid: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:crystallized_oil",
        },
    });

    event.custom({
        type: "pneumaticcraft:fuel_quality",
        air_per_bucket: 2000000,
        burn_rate: 1.5,
        fluid: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:empowered_oil",
        },
    });

    // Pressure tube
    event.remove({ output: "pneumaticcraft:pressure_tube" });

    event.shaped("6x pneumaticcraft:pressure_tube", ["ABA"], {
        A: "#forge:plates/compressed_iron",
        B: "#thermal:glass/hardened",
    });

    // Rotational compressor
    event.remove({ output: "compressedcreativity:rotational_compressor" });

    event.shaped("compressedcreativity:rotational_compressor", ["ABA", "CDC", "EFE"], {
        A: "#forge:plates/aluminum",
        B: "create:propeller",
        C: "pneumaticcraft:pressure_tube",
        D: "compressedcreativity:compressed_iron_casing",
        E: "create:precision_mechanism",
        F: "immersiveengineering:generator",
    });

    // Liquid compressor
    event.remove({ output: "pneumaticcraft:liquid_compressor" });

    event.shaped("pneumaticcraft:liquid_compressor", ["ABA", "CDC", "EFE"], {
        A: "#forge:plates/aluminum",
        B: "pneumaticcraft:small_tank",
        C: "pneumaticcraft:pressure_tube",
        D: "compressedcreativity:compressed_iron_casing",
        E: "kubejs:heat_mechanism",
        F: "immersiveengineering:generator",
    });

    // Small fluid tank
    event.remove({ output: "pneumaticcraft:small_tank" });

    event.shaped("pneumaticcraft:small_tank", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/compressed_iron",
        B: "thermal:cured_rubber",
        C: "minecraft:iron_bars",
        D: "#thermal:glass/hardened",
    });

    // Pressure chamber glass
    event.replaceInput(
        { output: "pneumaticcraft:pressure_chamber_glass" },
        "#c:glass_blocks",
        "#thermal:glass/hardened"
    );

    // Pressure chamber valve
    event.remove({ output: "pneumaticcraft:pressure_chamber_valve" });

    event.shaped("2x pneumaticcraft:pressure_chamber_valve", [" A ", "ABA", " A "], {
        A: "pneumaticcraft:pressure_chamber_wall",
        B: "pneumaticcraft:pressure_tube",
    });

    // Pressure chamber interface
    event.remove({ output: "pneumaticcraft:pressure_chamber_interface" });

    event.shaped("2x pneumaticcraft:pressure_chamber_interface", [" A ", "ABA", " A "], {
        A: "pneumaticcraft:pressure_chamber_wall",
        B: "pneumaticcraft:omnidirectional_hopper",
    });

    // Omnidirectional hopper
    event.replaceInput(
        { output: "pneumaticcraft:omnidirectional_hopper" },
        "#forge:ingots/compressed_iron",
        "#forge:plates/compressed_iron"
    );

    // TPP
    event.remove({ output: "pneumaticcraft:thermopneumatic_processing_plant" });

    event.shaped("pneumaticcraft:thermopneumatic_processing_plant", ["AAA", "BCB", "ADA"], {
        A: "pneumaticcraft:reinforced_stone_slab",
        B: "pneumaticcraft:small_tank",
        C: "pneumaticcraft:pressure_tube",
        D: "immersiveengineering:radiator",
    });

    // Refinery controller
    event.remove({ output: "pneumaticcraft:refinery" });

    event.shaped("pneumaticcraft:refinery", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/cinderslime",
        B: "#forge:gears/cinderslime",
        C: "pneumaticcraft:small_tank",
        D: "actuallyadditions:restonia_crystal_block",
        E: "immersiveengineering:radiator",
    });

    // Refinery output
    event.remove({ output: "pneumaticcraft:refinery_output" });

    event.shaped("pneumaticcraft:refinery_output", ["ABA", "CDC", "ABA"], {
        A: "pneumaticcraft:reinforced_stone_slab",
        B: "#forge:plates/cinderslime",
        C: "#thermal:glass/hardened",
        D: "pneumaticcraft:small_tank",
    });

    // Thermal lagging
    event.remove({ output: "pneumaticcraft:thermal_lagging" });

    event.shaped("6x pneumaticcraft:thermal_lagging", ["ABA", "BCB", "ABA"], {
        A: "thermal:black_rockwool",
        B: "thermal:cured_rubber",
        C: "actuallyadditions:void_crystal_block",
    });

    // Vortex tube
    event.remove({ output: "pneumaticcraft:vortex_tube" });

    event.shaped("pneumaticcraft:vortex_tube", ["ABA", "CDE", "ABA"], {
        A: "#forge:plates/compressed_iron",
        B: "pneumaticcraft:heat_pipe",
        C: "#forge:ingots/slimesteel",
        D: "immersiveengineering:radiator",
        E: "#forge:ingots/cinderslime",
    });

    // Heat sink
    event.remove({ output: "pneumaticcraft:heat_sink" });

    event.shaped("pneumaticcraft:heat_sink", ["AAA", "BCB"], {
        A: "minecraft:iron_bars",
        B: "#forge:plates/compressed_iron",
        C: "#forge:gears/slimesteel",
    });

    // Heat frame
    event.remove({ output: "pneumaticcraft:heat_frame" });

    event.shaped("pneumaticcraft:heat_frame", ["AAA", "BCB", "DDD"], {
        A: "#forge:plates/compressed_iron",
        B: "kubejs:heat_mechanism",
        C: "#forge:gears/knightslime",
        D: "#forge:storage_blocks/compressed_iron",
    });

    // Turbine rotor
    event.remove({ output: "pneumaticcraft:turbine_blade" });
    event.remove({ output: "pneumaticcraft:turbine_rotor" });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                item: "thermal:redstone_servo",
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "pneumaticcraft:plastic",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                tag: "forge:rods/compressed_iron",
                count: 3,
            },
        ],
        pressure: 4.0,
        results: [
            {
                item: "pneumaticcraft:turbine_blade",
            },
        ],
    });

    event.shaped("pneumaticcraft:turbine_rotor", [" A ", " B ", "A A"], {
        A: "pneumaticcraft:turbine_blade",
        B: "#forge:rods/compressed_iron",
    });

    // Fluid mixer
    event.remove({ output: "pneumaticcraft:fluid_mixer" });

    event.shaped("pneumaticcraft:fluid_mixer", ["ABA", "CDC", "BEB"], {
        A: "actuallyadditions:basic_coil",
        B: "pneumaticcraft:small_tank",
        C: "compressedcreativity:compressed_iron_casing",
        D: "pneumaticcraft:turbine_rotor",
        E: "pneumaticcraft:pressure_tube",
    });

    // Liquid hopper
    event.replaceInput(
        { output: "pneumaticcraft:liquid_hopper" },
        "minecraft:hopper",
        "pneumaticcraft:omnidirectional_hopper"
    );

    // Air canister
    event.remove({ output: "pneumaticcraft:air_canister" });

    event.shaped("pneumaticcraft:air_canister", ["ABA", "CDC", "CDC"], {
        A: "thermal:cured_rubber",
        B: "pneumaticcraft:pressure_tube",
        C: "#forge:plates/compressed_iron",
        D: "actuallyadditions:restonia_crystal",
    });

    // Brass coated lapis
    event.remove({ output: "compressedcreativity:brass_gilded_lapis_lazuli" });
    event.remove({ output: "compressedcreativity:brass_coated_upgrade_matrix" });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 180,
            fluid: "tconstruct:molten_brass",
        },
        item_input: {
            item: "pneumaticcraft:upgrade_matrix",
        },
        item_output: {
            count: 1,
            item: "compressedcreativity:brass_coated_upgrade_matrix",
        },
        pressure: 3.0,
        temperature: {
            min_temp: 573,
        },
    });

    // Upgrade matrix fluid transposer
    event.recipes.thermal
        .bottler("2x pneumaticcraft:upgrade_matrix", ["#forge:plates/blue_alloy", Fluid.of("minecraft:water", 1000)])
        .energy(8000);

    event.recipes.thermal
        .bottler("compressedcreativity:brass_coated_upgrade_matrix", [
            "pneumaticcraft:upgrade_matrix",
            Fluid.of("tconstruct:molten_brass", 180),
        ])
        .energy(12000);

    // Capacitor/transistor
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                item: "pneumaticcraft:plastic",
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "kubejs:energetic_alloy_wire",
                count: 2,
            },
            {
                item: "actuallyadditions:palis_crystal",
            },
            {
                item: "createaddition:capacitor",
            },
        ],
        pressure: 2.0,
        results: [
            {
                item: "pneumaticcraft:capacitor",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                item: "pneumaticcraft:plastic",
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "kubejs:vibrant_alloy_wire",
                count: 2,
            },
            {
                item: "actuallyadditions:restonia_crystal",
            },
            {
                item: "immersiveengineering:electron_tube",
            },
        ],
        pressure: 2.0,
        results: [
            {
                item: "pneumaticcraft:transistor",
            },
        ],
    });

    // Lubricant thermal
    event.recipes.thermal
        .brewer(Fluid.of("pneumaticcraft:lubricant", 1000), [
            Fluid.of("pneumaticcraft:biodiesel", 1000),
            "minecraft:redstone",
        ])
        .energy(8000);

    event.recipes.thermal
        .brewer(Fluid.of("pneumaticcraft:lubricant", 1000), [
            Fluid.of("immersiveengineering:biodiesel", 1000),
            "minecraft:redstone",
        ])
        .energy(8000);

    event.recipes.thermal
        .brewer(Fluid.of("pneumaticcraft:lubricant", 1000), [
            Fluid.of("pneumaticcraft:diesel", 1000),
            "minecraft:redstone",
        ])
        .energy(8000);

    // Liquid plastic
    event.recipes.thermal
        .brewer(Fluid.of("pneumaticcraft:plastic", 1000), [Fluid.of("pneumaticcraft:lpg", 100), "#minecraft:coals"])
        .energy(8000);

    event.recipes.thermal
        .brewer(Fluid.of("pneumaticcraft:plastic", 1000), [
            Fluid.of("immersiveengineering:biodiesel", 100),
            "#minecraft:coals",
        ])
        .energy(8000);

    event.recipes.thermal
        .brewer(Fluid.of("pneumaticcraft:plastic", 1000), [
            Fluid.of("pneumaticcraft:biodiesel", 100),
            "#minecraft:coals",
        ])
        .energy(8000);

    // Medium fluid tank
    event.remove({ output: "pneumaticcraft:medium_tank" });

    event.shaped("pneumaticcraft:medium_tank", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "pneumaticcraft:small_tank",
        C: "pneumaticcraft:plastic",
        D: "#forge:gears/blue_alloy",
    });

    // Engine rotor
    event.replaceInput({ output: "compressedcreativity:engine_rotor" }, "create:shaft", "create:propeller");

    // Compressed air engine
    event.remove({ output: "compressedcreativity:compressed_air_engine" });

    event.shaped("compressedcreativity:compressed_air_engine", ["ABA", "CDC", "AEA"], {
        A: "#forge:sheetmetals/hepatizon",
        B: "compressedcreativity:engine_rotor",
        C: "pneumaticcraft:pressure_tube",
        D: "createaddition:electric_motor",
        E: "kubejs:compressed_mechanism",
    });

    // Compressed mechanism
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 720,
            fluid: "kubejs:molten_compressed_iron",
        },
        item_input: {
            item: "kubejs:heat_mechanism",
        },
        item_output: {
            count: 1,
            item: "kubejs:compressed_mechanism",
        },
        pressure: 4.0,
        temperature: {
            min_temp: 1273,
        },
    });

    // Air blower
    event.remove({ output: "compressedcreativity:air_blower" });

    event.shaped("compressedcreativity:air_blower", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/copper",
        B: "create:encased_fan",
        C: "pneumaticcraft:pressure_tube",
        D: "create:copper_casing",
        E: "#forge:gears/brass",
    });

    // Industrial air blower
    event.remove({ output: "compressedcreativity:industrial_air_blower" });

    event.shaped("compressedcreativity:industrial_air_blower", ["ABA", "CDC", "EFE"], {
        A: "#forge:plates/compressed_iron",
        B: "compressedcreativity:air_blower",
        C: "pneumaticcraft:reinforced_pressure_tube",
        D: "compressedcreativity:compressed_iron_casing",
        E: "#forge:gears/compressed_iron",
        F: "kubejs:compressed_mechanism",
    });

    // GPS Tool
    event.remove({ id: "pneumaticcraft:gps_tool" });

    event.shaped("pneumaticcraft:gps_tool", [" A ", "BCB", "BDB"], {
        A: "create:transmitter",
        B: "pneumaticcraft:plastic",
        C: "#thermal:glass/hardened",
        D: "#forge:gems/diamond",
    });

    // Amadron tablet
    event.remove({ output: "pneumaticcraft:amadron_tablet" });

    event.shaped("pneumaticcraft:amadron_tablet", ["AAA", "BCB", "BDB"], {
        A: "actuallyadditions:emeradic_crystal",
        B: "#forge:plates/stainless_steel",
        C: "pneumaticcraft:gps_tool",
        D: "pneumaticcraft:air_canister",
    });

    // UV Light Box
    event.remove({ output: "pneumaticcraft:uv_light_box" });

    event.shaped("pneumaticcraft:uv_light_box", ["AAA", "BCB", "DED"], {
        A: "minecraft:redstone_lamp",
        B: "kubejs:compressed_mechanism",
        C: "pneumaticcraft:pcb_blueprint",
        D: "#forge:plates/stainless_steel",
        E: "#forge:gears/stainless_steel",
    });

    // Charging station
    event.remove({ output: "pneumaticcraft:charging_station" });

    event.shaped("pneumaticcraft:charging_station", ["  A", "BCB", "DDD"], {
        A: "pneumaticcraft:pressure_tube",
        B: "actuallyadditions:restonia_crystal",
        C: "immersiveengineering:charging_station",
        D: "pneumaticcraft:reinforced_stone_slab",
    });

    // Etching tank
    event.remove({ output: "pneumaticcraft:etching_tank" });

    event.shaped("pneumaticcraft:etching_tank", ["ABA", "CDC", "EEE"], {
        A: "kubejs:compressed_mechanism",
        B: "#thermal:glass/hardened",
        C: "pneumaticcraft:reinforced_brick_wall",
        D: "pneumaticcraft:medium_tank",
        E: "#forge:heavy_platings/stainless_steel",
    });

    // Change failed pcb reprocessing
    event.remove({ id: "pneumaticcraft:empty_pcb_from_failed_pcb" });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 250,
            fluid: "immersiveengineering:redstone_acid",
        },
        item_input: {
            item: "pneumaticcraft:failed_pcb",
        },
        item_output: {
            item: "pneumaticcraft:empty_pcb",
        },
        pressure: 2.0,
    });

    event.recipes.thermal
        .bottler("pneumaticcraft:empty_pcb", [
            "pneumaticcraft:failed_pcb",
            Fluid.of("immersiveengineering:redstone_acid", 250),
        ])
        .energy(6400);

    // Finished PCBs
    event.remove({ output: "pneumaticcraft:printed_circuit_board" });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                item: "pneumaticcraft:unassembled_pcb",
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "pneumaticcraft:capacitor",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "pneumaticcraft:transistor",
                count: 2,
            },
            {
                item: "kubejs:purple_alloy_coil",
            },
            {
                item: "thermal:redstone_servo",
            },
        ],
        pressure: 4.0,
        results: [
            {
                item: "pneumaticcraft:printed_circuit_board",
                count: 1,
            },
        ],
    });

    // Mechanical visor upgrade
    event.replaceInput(
        { output: "compressedcreativity:mechanical_visor_upgrade" },
        "#compressedcreativity:upgrade_components",
        "compressedcreativity:brass_coated_upgrade_matrix"
    );

    // Pressure gauge
    event.replaceInput(
        { output: "pneumaticcraft:pressure_gauge" },
        "#forge:ingots/copper",
        "#forge:ingots/redstone_alloy"
    );

    // Module expansion card
    event.remove({ output: "pneumaticcraft:module_expansion_card" });

    event.shaped("pneumaticcraft:module_expansion_card", ["ABA", "BCB", "ABA"], {
        A: "actuallyadditions:restonia_crystal",
        B: "pneumaticcraft:plastic",
        C: "immersiveengineering:circuit_board",
    });

    event.shaped("4x pneumaticcraft:module_expansion_card", ["ABA", "BCB", "ABA"], {
        A: "actuallyadditions:restonia_crystal",
        B: "pneumaticcraft:plastic",
        C: "pneumaticcraft:printed_circuit_board",
    });

    // Security upgrade
    event.remove({ output: "pneumaticcraft:security_upgrade" });

    event.shaped("pneumaticcraft:security_upgrade", ["ABA", "BCB", "ABA"], {
        A: "pneumaticcraft:upgrade_matrix",
        B: "create:sturdy_sheet",
        C: "pneumaticcraft:safety_tube_module",
    });

    // Volume upgrade
    event.replaceInput(
        { output: "pneumaticcraft:volume_upgrade" },
        "#pneumaticcraft:upgrade_components",
        "pneumaticcraft:upgrade_matrix"
    );

    event.replaceInput(
        { output: "pneumaticcraft:volume_upgrade" },
        "#forge:ingots/compressed_iron",
        "#forge:plates/aluminum"
    );

    // Armor upgrade
    event.remove({ output: "pneumaticcraft:armor_upgrade" });

    event.shaped("pneumaticcraft:armor_upgrade", ["ABA", "BCB", "ABA"], {
        A: "pneumaticcraft:upgrade_matrix",
        B: "#forge:plates/stainless_steel",
        C: "#forge:heavy_platings/knightslime",
    });
});
