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
    })
});
