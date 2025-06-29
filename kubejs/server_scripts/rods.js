ServerEvents.recipes((event) => {
    // Remove rod recipes
    [
        "immersiveengineering:stick_iron",
        "immersiveengineering:stick_steel",
        "immersiveengineering:stick_aluminum",
    ].forEach((rod) => {
        event.remove({ output: rod, type: "minecraft:crafting_shaped" });
    });

    // Add press recipes
    [
        ["#forge:ingots/iron", "immersiveengineering:stick_iron"],
        ["#forge:ingots/steel", "immersiveengineering:stick_steel"],
        ["#forge:ingots/aluminum", "immersiveengineering:stick_aluminum"],
        ["#forge:ingots/copper", "createaddition:copper_rod"],
        ["#forge:ingots/gold", "createaddition:gold_rod"],
        ["#forge:ingots/electrum", "createaddition:electrum_rod"],
        ["#forge:ingots/brass", "createaddition:brass_rod"],
        ["#forge:ingots/zinc", "kubejs:zinc_rod", true],
    ].forEach((entry) => {
        const [ingot, rod, createRecipe] = entry;

        event.recipes.thermal
            .press(`2x ${rod}`, [ingot, "kubejs:rod_die"])
            .energy(2400);

        if (createRecipe) {
            event.custom({
                type: "createaddition:rolling",
                input: {
                    tag: ingot.slice(1, ingot.length),
                },
                result: {
                    item: rod,
                    count: 2,
                },
            });
        }
    });
});
