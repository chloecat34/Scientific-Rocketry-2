ServerEvents.recipes((event) => {
    // Scanner
    event.remove({ output: "scannable:scanner" });

    event.shaped("scannable:scanner", ["A A", "BCB", "ADA"], {
        A: "#forge:plates/steel",
        B: "minecraft:iron_bars",
        C: "#forge:gears/red_alloy",
        D: "create:electron_tube",
    });

    // Scanner module
    event.remove({ output: "scannable:blank_module" });

    event.shaped("scannable:blank_module", ["AAA", "BCB", "BDB"], {
        A: "#forge:plates/queens_slime",
        B: "#forge:clay",
        C: "#forge:dusts/glowstone",
        D: "#forge:gears/electrum",
    });

    // Range module
    event.remove({ output: "scannable:range_module"});

    event.shapeless("scannable:range_module", ["scannable:blank_module", "#forge:plates/vibrant_alloy"])
});
