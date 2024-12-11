ServerEvents.recipes((event) => {
    // Remove andesite alloy recipe with iron
    event.remove({ output: "create:andesite_alloy", input: "#forge:nuggets/iron" });

    // Replace andesite alloy in induction smelter
    event.recipes.thermal.smelter("create:andesite_alloy", ["minecraft:andesite", "#forge:nuggets/zinc"], 0, 3200);
});
