ServerEvents.recipes((event) => {
    // Multiblock recipes
    event.recipes.gtceu
        .lava_enriching("blazing_blood")
        .inputFluids("minecraft:lava 250", "tconstruct:ichor 250")
        .outputFluids("tconstruct:blazing_blood 250")
        .duration(100);

    // Lava enricher controller
    event.shaped("gtceu:lava_enricher", ["ABA", "CDC", "ABA"], {
        A: "tconstruct:scorched_bricks",
        B: "tconstruct:scorched_soul_glass",
        C: "create:precision_mechanism",
        D: "#forge:gears/cobalt",
    });
});
