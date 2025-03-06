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

    // Kubejs
    ["platinum"].forEach(ingot => standardizeGears(ingot, `kubejs:${ingot}_gear`));

    // Get rid of the gem gears
    ["lapis", "diamond", "emerald", "quartz"].forEach((gem) =>
        event.remove({
            output: `thermal:${gem}_gear`
        })
    );

    // Custom gear recipes (designed to not be used long-term)
    function mechcraftGears(gear, plate) {
        event.recipes.createMechanicalCrafting(gear, [
            " A ",
            "ABA",
            " A "
        ], {
            A: plate,
            B: "#forge:rods/iron"
        });
    }

    [
        "compressed_iron",
        "netherite",
        "tin",
        "lead",
        "silver",
        "nickel",
        "steel",
        "rose_gold",
        "bronze",
        "electrum",
        "invar",
        "constantan",
        "signalum",
        "lumium",
        "enderium",
        "prismalium",
        "melodium",
        "stellarium",
        "soul_infused",
        "shellite",
        "twinite",
        "dragonsteel",
        "platinum",
        "copper"
    ].forEach(ingot => {
        mechcraftGears(`#forge:gears/${ingot}`, `#forge:plates/${ingot}`)
    });

    mechcraftGears("thermal:iron_gear", "#forge:plates/iron");
    mechcraftGears("thermal:gold_gear", "#forge:plates/gold");
});
