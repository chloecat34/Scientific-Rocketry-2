ServerEvents.recipes((event) => {
    // Disable air compressors
    event.remove({ output: "pneumaticcraft:air_compressor" });
    event.remove({ output: "pneumaticcraft:advanced_air_compressor" });

    // Reinforced stone
    event.remove({ id: "pneumaticcraft:reinforced_stone" });

    event.custom({
        type: "tconstruct:casting_basin",
        cast: {
            item: "immersiveengineering:concrete_leaded",
        },
        cast_consumed: true,
        cooling_time: 80,
        fluid: {
            amount: 45,
            fluid: "kubejs:molten_compressed_iron",
        },
        result: "pneumaticcraft:reinforced_stone",
    });

    event.recipes.createFilling("pneumaticcraft:reinforced_stone", [
        "immersiveengineering:concrete_leaded",
        Fluid.of("kubejs:molten_compressed_iron", 45),
    ]);

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
            fluid: "actuallyadditions:canola_oil"
        }
    });

    event.custom({
        type: "pneumaticcraft:fuel_quality",
        air_per_bucket: 400000,
        burn_rate: 0.75,
        fluid: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:refined_canola_oil"
        }
    });

    event.custom({
        type: "pneumaticcraft:fuel_quality",
        air_per_bucket: 1000000,
        burn_rate: 1,
        fluid: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:crystallized_oil"
        }
    });

    event.custom({
        type: "pneumaticcraft:fuel_quality",
        air_per_bucket: 2000000,
        burn_rate: 1.5,
        fluid: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:empowered_oil"
        }
    });
});
