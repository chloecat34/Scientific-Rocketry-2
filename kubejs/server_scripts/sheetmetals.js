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
        "electrical_steel",
        "knightslime"
    ].forEach((material) => {
        event.remove({ output: `immersiveengineering:sheetmetal_${material}` });

        event.shaped(`4x #forge:sheetmetals/${material}`, ["ABA", "B B", "ABA"], {
            A: `#forge:plates/${material}`, B: `#forge:ingots/${material}`
        });

        // Add sheetmetal die recipe
        event.recipes.thermal
            .press(`#forge:sheetmetals/${material}`, [`2x #forge:ingots/${material}`, "kubejs:sheetmetal_die"])
            .energy(2400);
    });
});
