ServerEvents.recipes((event) => {
    // Sheetmetals
    [
        "copper",
        "aluminum",
        "lead",
        "silver",
        "nickel",
        "uranium",
        "constantan",
        "electrum",
        "steel",
        "iron",
        "gold",
        "hepatizon",
        "manyullyn",
        "compressed_iron",
        "stainless_steel",
    ].forEach((material) => {
        event.remove({ output: `immersiveengineering:sheetmetal_${material}` });

        event.shaped(`2x #forge:sheetmetals/${material}`, [" A ", "A A", " A "], {
            A: `#forge:plates/${material}`,
        });

        // Add sheetmetal die recipe
        event.recipes.thermal
            .press(`#forge:sheetmetals/${material}`, [`2x #forge:ingots/${material}`, "kubejs:sheetmetal_die"])
            .energy(2400);
    });
});
