ServerEvents.recipes((event) => {
    // Wooden hook
    event.replaceInput({ output: "rehooked:wood_chain" }, "#forge:rods/wooden", "#forge:rods/treated_wood");
    event.replaceInput({ output: "rehooked:wood_hook" }, "#forge:rods/wooden", "#forge:rods/treated_wood");

    // Iron hook
    event.replaceInput({ output: "rehooked:iron_hook" }, "#forge:ingots/iron", "#forge:plates/steel");

    // Diamond hook
    event.remove({ output: "rehooked:diamond_hook" });

    event.shaped("rehooked:diamond_hook", ["ABC", " DB", "E A"], {
        A: "#forge:gems/diamond",
        B: "#forge:plates/aluminum",
        C: "minecraft:diamond_pickaxe",
        D: "rehooked:iron_hook",
        E: "rehooked:diamond_chain",
    });

    // Red hook
    event.remove({ output: "rehooked:red_hook" });

    event.shaped("rehooked:red_hook", ["AAA", "ABA", "AAA"], {
        A: "actuallyadditions:restonia_crystal",
        B: "rehooked:diamond_hook",
    });

    // Blazing hook
    event.remove({ output: "rehooked:blaze_hook" });

    event.recipes.create.mechanical_crafting("rehooked:blaze_hook", ["  A  ", " BCB ", "DCECD", " BCB ", "  B  "], {
        A: "create:blaze_cake",
        B: "#forge:plates/stainless_steel",
        C: "minecraft:blaze_rod",
        D: "actuallyadditions:advanced_coil",
        E: "rehooked:diamond_hook",
    });

    // Ender hook
    event.remove({ output: "rehooked:ender_hook" });

    event.recipes.create.mechanical_crafting("rehooked:ender_hook", ["  A  ", " BCB ", "DCECD", " BCB ", "  B  "], {
        A: "actuallyadditions:emeradic_crystal_block",
        B: "#forge:plates/stainless_steel",
        C: "kubejs:vibrant_crystal",
        D: "actuallyadditions:advanced_coil",
        E: "rehooked:diamond_hook",
    });
});
