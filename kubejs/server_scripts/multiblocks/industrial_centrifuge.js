ServerEvents.recipes((event) => {
    // Air centrifuging
    event.recipes.gtceu
        .industrial_centrifuge("centrifuge_air")
        .inputFluids("kubejs:air 10000")
        .outputFluids("kubejs:nitrogen 4000", "mekanism:oxygen 1000")
        .duration(200)
        .EUt(128);

    event.recipes.gtceu
        .industrial_centrifuge("centrifuge_nether_air")
        .inputFluids("kubejs:nether_air 10000")
        .outputFluids("kubejs:carbon_monoxide 4000", "mekanism:sulfur_dioxide 1000")
        .duration(200)
        .EUt(128);

    // Industrial centrifuge
    event.shaped("kubejs:industrial_centrifuge_core", ["ABA", "CDC", "AEA"], {
        A: "#forge:sheetmetals/manyullyn",
        B: "#forge:gears/knightslime",
        C: "kubejs:compressed_mechanism",
        D: "#forge:heavy_platings/manyullyn",
        E: "compressedcreativity:compressed_air_engine",
    });

    event.shaped("4x kubejs:industrial_centrifuge_wall", ["ABA", "CDC", "ABA"], {
        A: "#forge:sheetmetals/compressed_iron",
        B: "pneumaticcraft:reinforced_bricks",
        C: "#forge:heavy_platings/aluminum",
        D: "#forge:gears/aluminum",
    });

    event.recipes.createMechanicalCrafting(
        "gtceu:industrial_centrifuge",
        ["AABAA", "ACDCA", "BEFEB", "AGHGA", "AABAA"],
        {
            A: "#forge:sheetmetals/compressed_iron",
            B: "#forge:heavy_platings/hepatizon",
            C: "pneumaticcraft:medium_tank",
            D: "pneumaticcraft:turbine_rotor",
            E: "createaddition:electric_motor",
            F: "actuallyadditions:iron_casing",
            G: "#forge:gears/purple_alloy",
            H: "compressedcreativity:rotational_compressor",
        }
    );
});
