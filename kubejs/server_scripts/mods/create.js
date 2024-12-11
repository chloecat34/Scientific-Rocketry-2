ServerEvents.recipes((event) => {
    // Remove andesite alloy recipe with iron
    event.remove({ output: "create:andesite_alloy", input: "#forge:nuggets/iron" });

    // Replace andesite alloy in induction smelter
    event.recipes.thermal.smelter("create:andesite_alloy", ["minecraft:andesite", "#forge:nuggets/zinc"], 0, 3200);

    // Water wheel
    event.remove({ output: "create:water_wheel" });

    event.shaped("create:water_wheel", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:large_cogwheel"
    });

    // Large water wheel
    event.remove({ output: "create:large_water_wheel" });

    event.shaped("create:large_water_wheel", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:water_wheel"
    });

    // Basin
    event.remove({ output: "create:basin" });

    event.shaped("create:basin", [
        "ABA",
        "AAA"
    ], {
        A: "create:andesite_alloy",
        B: "minecraft:cauldron"
    });

    // Whisk
    event.remove({ output: "create:whisk" });

    event.recipes.createCompacting("create:whisk", [
        "5x #forge:plates/iron",
        "2x create:andesite_alloy"
    ]);
});
