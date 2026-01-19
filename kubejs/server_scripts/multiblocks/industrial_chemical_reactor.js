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
    event.recipes.createMechanicalCrafting(
        "gtceu:industrial_chemical_reactor",
        ["AABAA", "ACDCA", "EFGFE", "ACDCA", "AABAA"],
        {
            A: "#forge:sheetmetals/hepatizon",
            B: "actuallyadditions:enori_crystal_block",
            C: "actuallyadditions:iron_casing",
            D: "pneumaticcraft:medium_tank",
            E: "#forge:heavy_platings/knightslime",
            F: "kubejs:compressed_mechanism",
            G: "pneumaticcraft:fluid_mixer",
        }
    );
});
