ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .industrial_chemical_reactor("chem_nitrogen_dioxide_main")
        .inputFluids("kubejs:nitrogen 1000", "mekanism:oxygen 2000")
        .outputFluids("kubejs:nitrogen_dioxide 1000")
        .duration(100)
        .EUt(64);

    event.recipes.gtceu
        .industrial_chemical_reactor("chem_nitric_acid")
        .inputFluids("kubejs:nitrogen_dioxide 3000", "minecraft:water 1000")
        .outputFluids("kubejs:nitric_acid 2000", "kubejs:nitric_oxide 1000")
        .duration(200)
        .EUt(96);

    event.recipes.gtceu
        .industrial_chemical_reactor("chem_nitric_oxide_to_dioxide")
        .inputFluids("kubejs:nitric_oxide 1000", "mekanism:oxygen 1000")
        .outputFluids("kubejs:nitrogen_dioxide 1000")
        .duration(75)
        .EUt(48);

    // Industrial chemical reactor
    // event.recipes.createMechanicalCrafting(
    //     "gtceu:industrial_chemical_reactor",
    //     ["AABAA", "ACDCA", "BEFEB", "AGHGA", "AABAA"],
    //     {
    //         A: "#forge:sheetmetals/compressed_iron",
    //         B: "#forge:heavy_platings/hepatizon",
    //         C: "pneumaticcraft:medium_tank",
    //         D: "pneumaticcraft:turbine_rotor",
    //         E: "createaddition:electric_motor",
    //         F: "actuallyadditions:iron_casing",
    //         G: "#forge:gears/purple_alloy",
    //         H: "compressedcreativity:rotational_compressor",
    //     }
    // );
});
