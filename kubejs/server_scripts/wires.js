ServerEvents.recipes((event) => {
    // Remove wire recipes
    [
        "immersiveengineering:wire_copper",
        "immersiveengineering:wire_electrum",
        "immersiveengineering:wire_lead",
        "immersiveengineering:wire_steel",
        "immersiveengineering:wire_aluminum"
    ].forEach(rod => {
        event.remove({ output: rod, type: "minecraft:crafting_shapeless" });
    });

    // Add press recipes
    [
        ["#forge:plates/copper", "immersiveengineering:wire_copper"],
        ["#forge:plates/electrum", "immersiveengineering:wire_electrum"],
        ["#forge:plates/aluminum", "immersiveengineering:wire_aluminum"],
        ["#forge:plates/steel", "immersiveengineering:wire_steel"],
        ["#forge:plates/lead", "immersiveengineering:wire_lead"],
        ["#forge:plates/iron", "createaddition:iron_wire"],
        ["#forge:plates/gold", "createaddition:gold_wire"],
        ["#forge:plates/red_alloy", "kubejs:red_alloy_wire"],
        ["#forge:plates/energetic_alloy", "kubejs:energetic_alloy_wire"],
        ["#forge:plates/vibrant_alloy", "kubejs:vibrant_alloy_wire"]
    ].forEach(entry => {
        const [plate, wire] = entry;

        event.recipes.thermal
            .press(`2x ${wire}`, [plate, "kubejs:wire_die"])
            .energy(2400);

        if (
            !event.containsRecipe({
                output: wire,
                count: 2,
                type: "immersiveengineering:metal_press"
            })
        ) {
            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 2400,
                input: {
                    base_ingredient: {
                        tag: plate.slice(1, plate.length)
                    },
                    count: 1
                },
                mold: "immersiveengineering:mold_wire",
                result: {
                    item: wire,
                    count: 2
                }
            });

            event.custom({
                type: "createaddition:rolling",
                input: {
                    tag: plate.slice(1, plate.length)
                },
                result: {
                    item: wire,
                    count: 2
                }
            });
        }
    });
});