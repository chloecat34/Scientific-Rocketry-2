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

    // Remove mek paper recipe, use sugar cane or the IE one instead
    event.remove({ id: "mekanism:paper" });
    event.recipes.createMixing("minecraft:paper", ["2x #forge:sawdust", Fluid.of("minecraft:water", 500)]);

    // Iron bars
    event.remove({ id: "minecraft:iron_bars" });
    event.shaped("8x minecraft:iron_bars", [
        "AAA",
        "AAA"
    ], {
        A: "#forge:rods/iron"
    });

    // Hopper recipe
    event.remove({ output: "minecraft:hopper" });

    event.shaped("minecraft:hopper", [
        "A A",
        "ABA",
        " A "
    ], {
        A: "#forge:plates/iron",
        B: "#forge:chests/wooden"
    });
});
