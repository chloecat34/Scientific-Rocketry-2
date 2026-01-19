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
        .electrolysis_plant("electrolyze_sulfur_trioxide")
        .inputFluids("mekanism:sulfur_trioxide 1000")
        .outputFluids("mekanism:oxygen 3000")
        .itemOutputs("thermal:sulfur_dust")
        .duration(60)
        .EUt(64);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_sulfuric_acid")
        .inputFluids("mekanism:sulfuric_acid 1000")
        .outputFluids("mekanism:hydrogen 2000", "mekanism:oxygen 4000")
        .itemOutputs("thermal:sulfur_dust")
        .duration(80)
        .EUt(64);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_carbon_monoxide")
        .inputFluids("kubejs:carbon_monoxide 1000")
        .outputFluids("mekanism:oxygen 1000")
        .itemOutputs("kubejs:carbon_dust")
        .duration(50)
        .EUt(64);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_nitrogen_dioxide")
        .inputFluids("kubejs:nitrogen_dioxide 1000")
        .outputFluids("kubejs:nitrogen 1000", "mekanism:oxygen 2000")
        .duration(75)
        .EUt(64);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_nitric_oxide")
        .inputFluids("kubejs:nitric_oxide 1000")
        .outputFluids("kubejs:nitrogen 1000", "mekanism:oxygen 1000")
        .duration(75)
        .EUt(64);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_nitric_acid")
        .inputFluids("kubejs:nitric_acid 1000")
        .outputFluids("kubejs:nitrogen 1000", "mekanism:hydrogen 1000", "mekanism:oxygen 3000")
        .duration(75)
        .EUt(64);

    event.recipes.gtceu
        .electrolysis_plant("electrolyze_ruby_slurry")
        .inputFluids("kubejs:ruby_slurry 1000")
        .outputFluids("tconstruct:molten_chromium 90", "tconstruct:molten_aluminum 180", "mekanism:oxygen 3000")
        .duration(400)
        .EUt(128);

    // Nonconducting casing
    event.recipes.shaped("4x kubejs:nonconducting_casing", ["ABA", "CDC", "ABA"], {
        A: "thermal:cured_rubber",
        B: "actuallyadditions:void_crystal",
        C: "#forge:sheetmetals/compressed_iron",
        D: "#forge:gears/invar",
    });

    // Restonia conducting block
    event.recipes.shaped("kubejs:restonia_conducting_block", ["ABA", "CCC", "ABA"], {
        A: "actuallyadditions:restonia_crystal",
        B: "#forge:sheetmetals/compressed_iron",
        C: "kubejs:vibrant_alloy_coil",
    });

    // Electrolysis core
    event.recipes
        .createSequencedAssembly([Item.of("kubejs:electrolysis_core")], "kubejs:restonia_conducting_block", [
            event.recipes.createFilling("kubejs:incomplete_electrolysis_core", [
                "kubejs:incomplete_electrolysis_core",
                Fluid.of("kubejs:molten_restonia", 1000),
            ]),
            event.recipes.createDeploying("kubejs:incomplete_electrolysis_core", [
                "kubejs:incomplete_electrolysis_core",
                "immersiveengineering:tesla_coil",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_electrolysis_core", [
                "kubejs:incomplete_electrolysis_core",
                "actuallyadditions:advanced_coil",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_electrolysis_core", [
                "kubejs:incomplete_electrolysis_core",
                "actuallyadditions:advanced_coil",
            ]),
        ])
        .transitionalItem("kubejs:incomplete_electrolysis_core")
        .loops(2);

    // Electrolysis plant controller
    event.recipes.createMechanicalCrafting(
        "gtceu:electrolysis_plant",
        ["AAAAA", "BCDCB", "EFGFE", "BCDCB", "AAAAA"],
        {
            A: "#forge:sheetmetals/compressed_iron",
            B: "powah:energy_cable_hardened",
            C: "#forge:heavy_platings/electrical_steel",
            D: "actuallyadditions:emeradic_crystal",
            E: "kubejs:purple_alloy_coil_block",
            F: "pneumaticcraft:medium_tank",
            G: "actuallyadditions:atomic_reconstructor",
        }
    );
});
