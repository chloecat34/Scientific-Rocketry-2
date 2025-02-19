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
        ["#forge:ingots/copper", "immersiveengineering:wire_copper"],
        ["#forge:ingots/electrum", "immersiveengineering:wire_electrum"],
        ["#forge:ingots/aluminum", "immersiveengineering:wire_aluminum"],
        ["#forge:ingots/steel", "immersiveengineering:wire_steel"],
        ["#forge:ingots/lead", "immersiveengineering:wire_lead"],
        ["#forge:ingots/iron", "createaddition:iron_wire"],
        ["#forge:ingots/gold", "createaddition:gold_wire"]
    ].forEach(entry => {
        const [ingot, wire] = entry;

        event.recipes.thermal
            .press(`2x ${wire}`, [ingot, "kubejs:wire_die"])
            .energy(2400);
    })
});