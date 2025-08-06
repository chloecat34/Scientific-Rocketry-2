ServerEvents.recipes((event) => {
    // Furnace
    event.remove({ output: "minecraft:furnace" });

    event.shaped("minecraft:furnace", ["AAA", "ABA", "AAA"], {
        A: "#forge:cobblestone",
        B: "minecraft:coal",
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
    event.shaped("8x minecraft:iron_bars", ["AAA", "AAA"], {
        A: "#forge:rods/iron",
    });

    // Hopper recipe
    event.remove({ output: "minecraft:hopper" });

    event.shaped("minecraft:hopper", ["A A", "ABA", " A "], {
        A: "#forge:plates/iron",
        B: "#forge:chests/wooden",
    });

    // Remove thermal amethyst cluster recipe
    event.remove({
        id: "thermal:machines/crystallizer/crystallizer_amethyst_cluster",
    });

    // Piston
    event.remove({ output: "minecraft:piston" });

    event.shaped("minecraft:piston", ["AAA", "BCB", "BDB"], {
        A: "#forge:treated_wood",
        B: "minecraft:smooth_stone",
        C: "#forge:plates/iron",
        D: "#forge:ingots/red_alloy",
    });

    // Ender eye
    event.remove({ output: "minecraft:ender_eye" });

    event.recipes.create.filling("minecraft:ender_eye", [
        "minecraft:ender_pearl",
        Fluid.of("tconstruct:blazing_blood", 100),
    ]);
    event.recipes.thermal
        .bottler("minecraft:ender_eye", ["minecraft:ender_pearl", Fluid.of("tconstruct:blazing_blood", 100)])
        .energy(4800);

    // Gunpowder recipe with coal
    event.shapeless("4x minecraft:gunpowder", [
        "minecraft:coal",
        "#forge:gems/niter",
        "#forge:gems/niter",
        "#forge:gems/sulfur",
    ]);
});
