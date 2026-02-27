ServerEvents.recipes((event) => {
    // Remove washer
    event.remove({ output: "mekanism:chemical_washer" });

    // Remove purification chamber
    event.remove({ output: "mekanism:purification_chamber" });
    event.remove({ output: "mekanism:basic_purifying_factory" });
    event.remove({ output: "mekanism:advanced_purifying_factory" });
    event.remove({ output: "mekanism:elite_purifying_factory" });
    event.remove({ output: "mekanism:ultimate_purifying_factory" });

    // Fuelwood heater
    event.remove({ output: "mekanism:fuelwood_heater" });

    event.shaped("mekanism:fuelwood_heater", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/compressed_iron",
        B: "actuallyadditions:powered_furnace",
        C: "#forge:gears/cinderslime",
        D: "pneumaticcraft:vortex_tube",
        E: "create:blaze_burner",
    });
});
