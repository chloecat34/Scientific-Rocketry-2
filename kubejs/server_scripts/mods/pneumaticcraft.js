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
        C: "actuallyadditions:void_crystal_block"
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
    event.remove({ output: "pneumaticcraft:heat_frame"});

    event.shaped("pneumaticcraft:heat_frame", ["AAA", "BCB", "DDD"], {
        A: "#forge:plates/compressed_iron",
        B: "kubejs:heat_mechanism",
        C: "#forge:gears/knightslime",
        D: "#forge:storage_blocks/compressed_iron"
    })
});
