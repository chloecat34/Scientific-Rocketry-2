ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .air_collecting("air")
        .notConsumable("minecraft:stone")
        .outputFluids("kubejs:air 1000")
        .dimension("minecraft:overworld")
        .duration(20)
        .EUt(64);

    event.recipes.gtceu
        .air_collecting("nether_air")
        .notConsumable("minecraft:netherrack")
        .outputFluids("kubejs:nether_air 1000")
        .dimension("minecraft:the_nether")
        .duration(20)
        .EUt(64);

    // Air collector
    event.recipes.createMechanicalCrafting("gtceu:air_collector", ["AABAA", "ACDCA", "BEFEB", "ACGCA", "AABAA"], {
        A: "#forge:sheetmetals/aluminum",
        B: "pneumaticcraft:pressure_chamber_glass",
        C: "pneumaticcraft:air_grate_module",
        D: "immersiveengineering:light_engineering",
        E: "pneumaticcraft:medium_tank",
        F: "#forge:gears/compressed_iron",
        G: "compressedcreativity:rotational_compressor",
    });

    // Air filter casing
    event.shaped("2x kubejs:air_filter_casing", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "#immersiveengineering:scaffoldings/aluminum",
        C: "pneumaticcraft:air_grate_module",
        D: "pneumaticcraft:turbine_rotor",
    });
});
