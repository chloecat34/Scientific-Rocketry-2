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

    event.recipes.gtceu
        .industrial_chemical_reactor("chem_sulfur_dioxide")
        .itemInputs("thermal:sulfur_dust")
        .inputFluids("mekanism:oxygen 2000")
        .outputFluids("mekanism:sulfur_dioxide 1000")
        .duration(100)
        .EUt(64);

    event.recipes.gtceu
        .industrial_chemical_reactor("chem_sulfur_trioxide")
        .inputFluids("mekanism:sulfur_dioxide 1000", "mekanism:oxygen 1000")
        .outputFluids("mekanism:sulfur_trioxide 1000")
        .duration(50)
        .EUt(48);

    event.recipes.gtceu
        .industrial_chemical_reactor("chem_sulfuric_acid")
        .inputFluids("mekanism:sulfur_trioxide 1000", "minecraft:water 1000")
        .outputFluids("mekanism:sulfuric_acid 1000")
        .duration(80)
        .EUt(60);

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
