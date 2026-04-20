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

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_restonia",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_enori",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_palis",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_void",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_diamatine",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_emeradic",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_glod",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_red_alloy",
        temperature: 900,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_blue_alloy",
        temperature: 900,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });


    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_purple_alloy",
        temperature: 1500,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_redstone_alloy",
        temperature: 1100,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_electrical_steel",
        temperature: 1400,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_energetic_alloy",
        temperature: 1150,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_ardite",
        temperature: 1250,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_stainless_steel",
        temperature: 1700,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_glowing_brass",
        temperature: 905,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_andesite_alloy",
        temperature: 800,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_andesite",
        temperature: 900,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_manganese",
        temperature: 900,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_titanium",
        temperature: 2000,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });

    event.custom({
        type: "pneumaticcraft:heat_properties",
        fluid: "kubejs:molten_mithril",
        temperature: 1600,
        thermalResistance: 100,
        heatCapacity: 10000,
        transformCold: {
            block: "minecraft:obsidian"
        }
    });
});
