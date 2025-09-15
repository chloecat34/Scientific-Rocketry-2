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
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "integrateddynamics:menril_resin",
        },
        item_output: {
            count: 1,
            item: "integrateddynamics:crystalized_menril_block",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 273,
            max_temp: 373,
        },
    });

    event.recipes.thermal.chiller("integrateddynamics:crystalized_menril_block", Fluid.of("integrateddynamics:menril_resin", 1000)).energy(4800);
    event.recipes.thermal.crucible(Fluid.of("integrateddynamics:menril_resin", 1000), "integrateddynamics:crystalized_menril_block").energy(9600);
});
