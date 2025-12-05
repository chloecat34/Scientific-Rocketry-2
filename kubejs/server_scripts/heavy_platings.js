ServerEvents.recipes((event) => {
    // Heavy plates
    ["aluminum", "hepatizon", "manyullyn"].forEach((material) => {
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
    });
});
