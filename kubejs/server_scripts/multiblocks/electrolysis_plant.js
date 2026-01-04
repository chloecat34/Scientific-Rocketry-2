ServerEvents.recipes((event) => {
    // Basic electrolysis recipes
    event.recipes.gtceu
        .electrolysis_plant("electrolyze_water")
        .inputFluids("minecraft:water 1000")
        .outputFluids("mekanism:hydrogen 2000", "mekanism:oxygen 1000")
        .duration(200)
        .EUt(128);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_salt_water")
        .inputFluids("kubejs:salt_water 1000")
        .outputFluids("mekanism:hydrogen 1000", "mekanism:chlorine 1000")
        .duration(200)
        .EUt(128);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_sulfur_dioxide")
        .inputFluids("mekanism:sulfur_dioxide 1000")
        .outputFluids("mekanism:oxygen 2000")
        .itemOutputs("thermal:sulfur_dust")
        .duration(50)
        .EUt(64);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_carbon_monoxide")
        .inputFluids("kubejs:carbon_monoxide 1000")
        .outputFluids("mekanism:oxygen 1000")
        .itemOutputs("kubejs:carbon_dust")
        .duration(50)
        .EUt(64);
});
