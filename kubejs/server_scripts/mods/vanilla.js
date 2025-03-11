ServerEvents.recipes((event) => {
    // Furnace
    event.remove({ output: "minecraft:furnace" });

    event.shaped("minecraft:furnace", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "#forge:cobblestone",
        B: "minecraft:coal"
    });

    // Bucket
    event.replaceInput({ output: "minecraft:bucket" }, "minecraft:iron_ingot", "#forge:plates/iron");

    // Cauldron
    event.replaceInput({ output: "minecraft:cauldron" }, "minecraft:iron_ingot", "#forge:plates/iron");

    // Remove extra gunpowder recipe
    event.remove({ id: "immersiveengineering:crafting/gunpowder_from_dusts" });
});
