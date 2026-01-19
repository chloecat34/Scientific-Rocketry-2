ServerEvents.recipes((event) => {
    // Heavy plates
    ["aluminum", "hepatizon", "manyullyn", "electrical_steel", "knightslime"].forEach((material) => {
        event.custom({
            type: "pneumaticcraft:pressure_chamber",
            inputs: [
                {
                    type: "pneumaticcraft:stacked_item",
                    tag: `forge:sheetmetals/${material}`,
                    count: 4,
                },
                {
                    item: "immersiveengineering:gunpowder_barrel",
                },
            ],
            pressure: 4.5,
            results: [
                {
                    item: `kubejs:${material}_heavy_plating`,
                },
            ],
        });

        // Thermal recipe
        event.recipes.thermal.press(`kubejs:${material}_heavy_plating`, [`4x #forge:sheetmetals/${material}`, "immersiveengineering:gunpowder_barrel"]).energy(48000);
    });
});
