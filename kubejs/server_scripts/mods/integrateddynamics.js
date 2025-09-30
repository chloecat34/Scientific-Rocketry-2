ServerEvents.recipes((event) => {
    // Disable drying basin + squeezer
    event.remove({ output: "integrateddynamics:drying_basin" });
    event.remove({ output: "integrateddynamics:squeezer" });
    event.remove({ output: "integrateddynamics:mechanical_drying_basin" });
    event.remove({ output: "integrateddynamics:mechanical_squeezer" });

    event.remove({ type: "integrateddynamics:squeezer" });
    event.remove({ type: "integrateddynamics:mechanical_squeezer" });
    event.remove({ type: "integrateddynamics:drying_basin" });
    event.remove({ type: "integrateddynamics:mechanical_drying_basin" });

    // Menril resin to menril
    // Menril blocks require a maximum temperature, while menril glass needs a higher temperature
    // Menril blocks could use the Fluid Mixer with skyslime instead like what E6E does.
    event.custom({
        type: "pneumaticcraft:fluid_mixer",
        input1: {
            type: "pneumaticcraft:fluid",
            amount: 750,
            fluid: "integrateddynamics:menril_resin",
        },
        input2: {
            type: "pneumaticcraft:fluid",
            amount: 250,
            fluid: "tconstruct:sky_slime",
        },
        item_output: {
            item: "integrateddynamics:crystalized_menril_block",
        },
        pressure: 2.0,
        time: 200,
    });

    // Menril glass
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "integrateddynamics:menril_resin",
        },
        item_input: {
            item: "thermal:obsidian_glass",
        },
        item_output: {
            count: 1,
            item: "integratedterminals:menril_glass",
        },
        pressure: 4.0,
        temperature: {
            min_temp: 773,
        },
    });

    // Disable integrated tunnels energy transport
    event.remove({ output: "integratedtunnels:part_interface_energy" });
    event.remove({ output: "integratedtunnels:part_interface_filter_energy" });
    event.remove({ output: "integratedtunnels:part_importer_energy" });
    event.remove({ output: "integratedtunnels:part_exporter_energy" });
    event.remove({ output: "integratedtunnels:part_importer_world_energy" });
    event.remove({ output: "integratedtunnels:part_exporter_world_energy" });

    // ID cable
    event.remove({ output: "integrateddynamics:cable" });

    event.recipes
        .createSequencedAssembly([Item.of("integrateddynamics:cable", 2)], "prettypipes:pipe", [
            event.recipes.createCutting("kubejs:incomplete_logic_cable", "kubejs:incomplete_logic_cable"),
            event.recipes.createFilling("kubejs:incomplete_logic_cable", [
                "kubejs:incomplete_logic_cable",
                Fluid.of("kubejs:molten_restonia", 100),
            ]),
            event.recipes.createFilling("kubejs:incomplete_logic_cable", [
                "kubejs:incomplete_logic_cable",
                Fluid.of("integrateddynamics:menril_resin", 250),
            ]),
        ])
        .transitionalItem("kubejs:incomplete_logic_cable")
        .loops(1);
});
