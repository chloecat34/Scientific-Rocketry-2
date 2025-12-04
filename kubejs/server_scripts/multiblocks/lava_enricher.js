ServerEvents.recipes((event) => {
    // Multiblock recipes
    event.recipes.gtceu
        .lava_enricher("blazing_blood")
        .inputFluids("minecraft:lava 250", "tconstruct:ichor 250")
        .outputFluids("tconstruct:blazing_blood 250")
        .duration(100);
});
