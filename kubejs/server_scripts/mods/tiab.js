ServerEvents.recipes((event) => {
    // Time in a bottle
    event.remove({ output: "tiab:time_in_a_bottle" });

    event.shaped("tiab:time_in_a_bottle", ["AAA", "BCB", "DED"], {
        A: "#forge:plates/glowing_brass",
        B: "minecraft:emerald",
        C: "create:precision_mechanism",
        D: "#forge:plates/amethyst_bronze",
        E: "minecraft:glass_bottle",
    });
});
