ServerEvents.recipes((event) => {
    // Standardizes the gears for a recipe
    function standardizeGears(ingot, gear) {
        const ingotTag = `#forge:ingots/${ingot}`;

        // Remove crafting recipes
        event.remove({ output: gear, type: "minecraft:crafting_shaped" });

        // Add metal press recipes
        if (
            !event.containsRecipe({
                output: gear,
                type: "immersiveengineering:metal_press"
            })
        ) {
            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 2400,
                input: {
                    base_ingredient: {
                        tag: `forge:ingots/${ingot}`
                    },
                    count: 4
                },
                mold: "immersiveengineering:mold_gear",
                result: {
                    item: gear
                }
            });
        }

        // Add thermal recipes
        if (!event.containsRecipe({ output: gear, type: "thermal:press" })) {
            event.recipes.thermal
                .press(gear, [`4x ${ingotTag}`, "thermal:press_gear_die"])
                .energy(2400);
        }
    }

    standardizeGears("compressed_iron", "pneumaticcraft:compressed_iron_gear");

    // Thermal ingots
    [
        "iron",
        "gold",
        "copper",
        "netherite",
        "tin",
        "lead",
        "silver",
        "nickel",
        "steel",
        "bronze",
        "electrum",
        "invar",
        "constantan",
        "signalum",
        "lumium",
        "enderium",
        "rose_gold"
    ].forEach((ingot) => standardizeGears(ingot, `thermal:${ingot}_gear`));

    // Thermal endergy
    ["prismalium", "melodium", "stellarium"].forEach((ingot) =>
        standardizeGears(ingot, `thermalendergy:${ingot}_gear`)
    );

    // Thermal extra
    ["soul_infused", "shellite", "twinite", "dragonsteel"].forEach((ingot) =>
        standardizeGears(ingot, `thermal_extra:${ingot}_gear`)
    );

    // Get rid of the gem gears
    ["lapis", "diamond", "emerald", "quartz"].forEach((gem) =>
        event.remove({
            output: `thermal:${gem}_gear`
        })
    );
});
