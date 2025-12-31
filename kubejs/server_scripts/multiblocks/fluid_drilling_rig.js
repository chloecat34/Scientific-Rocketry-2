ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .fluid_drilling("water_drilling")
        .notConsumable("create:mechanical_pump")
        .outputFluids("minecraft:water 10000")
        .dimension("minecraft:overworld")
        .duration(10)
        .EUt(128);

    event.recipes.gtceu
        .fluid_drilling("lava_drilling")
        .notConsumable("create:hose_pulley")
        .outputFluids("minecraft:lava 500")
        .dimension("minecraft:the_nether")
        .duration(10)
        .EUt(128);

    event.recipes.gtceu
        .fluid_drilling("crude_oil_drilling")
        .notConsumable("pneumaticcraft:gas_lift")
        .outputFluids("pneumaticcraft:oil 100")
        .dimension("minecraft:overworld")
        .duration(10)
        .EUt(128);

    event.recipes.gtceu
        .fluid_drilling(`salt_water_drilling`)
        .notConsumable("immersiveengineering:fluid_pump")
        .outputFluids("kubejs:salt_water 500")
        .dimension("minecraft:overworld")
        .biome("minecraft:is_ocean")
        .duration(10)
        .EUt(128);

    // Fluid drilling rig controller
    event.recipes.createMechanicalCrafting("gtceu:fluid_drilling_rig", ["AABAA", "ACDCA", "BEFEB", "ACDCA", "AABAA"], {
        A: "#forge:sheetmetals/steel",
        B: "immersiveengineering:heavy_engineering",
        C: "#forge:plates/knightslime",
        D: "compressedcreativity:compressed_iron_casing",
        E: "pneumaticcraft:gas_lift",
        F: "pneumaticcraft:small_tank",
    });
});
