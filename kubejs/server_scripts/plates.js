ServerEvents.recipes((event) => {
    // Standardizes the plates for a recipe
    function standardizePlates(ingot, plate) {
        const ingotTag = `#forge:ingots/${ingot}`;

        // Remove engineer's hammer recipes
        event.remove({ output: plate, type: "minecraft:crafting_shapeless" });

        // Add mechanical press recipe if it does not exist
        if (!event.containsRecipe({ output: plate, type: "create:pressing" })) {
            event.recipes.create.pressing(plate, ingotTag);
        }

        // Add metal press recipes
        if (
            !event.containsRecipe({
                output: plate,
                type: "immersiveengineering:metal_press",
            })
        ) {
            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 2400,
                input: {
                    tag: `forge:ingots/${ingot}`,
                },
                mold: "immersiveengineering:mold_plate",
                result: {
                    item: plate,
                },
            });
        }

        // Add thermal recipes
        if (!event.containsRecipe({ output: plate, type: "thermal:press" })) {
            event.recipes.thermal.press(plate, ingotTag).energy(2400);
        }
    }

    // Get rid of extra steel plate recipe
    event.remove({ output: "thermal:steel_plate", type: "create:pressing" });

    // Thermal plates
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
        "rose_gold",
    ].forEach((ingot) => standardizePlates(ingot, `thermal:${ingot}_plate`));

    // Thermal endergy plates
    ["prismalium", "melodium", "stellarium"].forEach((ingot) =>
        standardizePlates(ingot, `thermalendergy:${ingot}_plate`)
    );

    // IE plates
    ["aluminum", "uranium"].forEach((ingot) =>
        standardizePlates(ingot, `immersiveengineering:plate_${ingot}`)
    );

    // Ad Astra plates
    ["desh", "ostrum", "calorite"].forEach((ingot) =>
        standardizePlates(ingot, `ad_astra:${ingot}_plate`)
    );

    standardizePlates("brass", "create:brass_sheet");
    standardizePlates("zinc", "createaddition:zinc_sheet");

    // Kubejs metals
    [
        "platinum",
        "compressed_iron",
        "cobalt",
        "manyullyn",
        "red_alloy",
        "energetic_alloy",
        "vibrant_alloy",
        "electrical_steel",
        "redstone_alloy",
        "blue_alloy",
        "purple_alloy",
        "pulsating_alloy",
        "ardite"
    ].forEach((ingot) => standardizePlates(ingot, `kubejs:${ingot}_plate`));
});
