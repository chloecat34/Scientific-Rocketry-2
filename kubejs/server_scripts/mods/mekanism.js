ServerEvents.recipes((event) => {
    // Remove washer
    event.remove({ output: "mekanism:chemical_washer" });

    // Remove purification chamber
    event.remove({ output: "mekanism:purification_chamber" });
    event.remove({ output: "mekanism:basic_purifying_factory" });
    event.remove({ output: "mekanism:advanced_purifying_factory" });
    event.remove({ output: "mekanism:elite_purifying_factory" });
    event.remove({ output: "mekanism:ultimate_purifying_factory" });
});
