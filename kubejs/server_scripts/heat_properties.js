ServerEvents.recipes((event) => {
    // Resonant ender below freezing
    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "thermal:ender",
        temperature: 233,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:blue_ice",
        },
    });

    // Molten materials (add 300 from tinkers temperature)
    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_sulfur",
        temperature: 600,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_electrotine",
        temperature: 1200,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_vibrant_alloy",
        temperature: 1200,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_pulsating_alloy",
        temperature: 1000,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_compressed_iron",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });
});
