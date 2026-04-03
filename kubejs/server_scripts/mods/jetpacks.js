ServerEvents.recipes((event) => {
    // Coils
    event.remove({ output: "ironjetpacks:basic_coil" });
    event.remove({ output: "ironjetpacks:advanced_coil" });
    event.remove({ output: "ironjetpacks:elite_coil" });
    event.remove({ output: "ironjetpacks:ultimate_coil" });

    // Vibrant alloy jetpack
    event.remove({ output: "ironjetpacks:strap" });

    event.shaped("ironjetpacks:strap", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "#forge:plates/vibrant_alloy",
        C: "kubejs:treated_leather",
        D: "create_jetpack:netherite_jetpack",
    });

    event.shaped("kubejs:vibrant_alloy_energy_cell", ["ABC", "BDB", "CBA"], {
        A: "#forge:plates/vibrant_alloy",
        B: "powah:energy_cable_hardened",
        C: "kubejs:vibrant_alloy_coil",
        D: "immersiveengineering:capacitor_hv",
    });

    event.shaped("kubejs:vibrant_alloy_thruster", ["ABA", "ACA", "DED"], {
        A: "#forge:plates/vibrant_alloy",
        B: "kubejs:heat_mechanism",
        C: "kubejs:vibrant_alloy_energy_cell",
        D: "immersiveengineering:generator",
        E: "create:blaze_burner",
    });

    event.recipes
        .createCompacting("kubejs:vibrant_alloy_capacitor", [
            "kubejs:vibrant_alloy_energy_cell",
            "kubejs:vibrant_alloy_energy_cell",
            "8x immersiveengineering:component_electronic_adv",
            Fluid.of("kubejs:molten_vibrant_alloy", 1000),
        ])
        .superheated();

    event.recipes.createMechanicalCrafting(
        Item.of("ironjetpacks:jetpack", '{ Id: "ironjetpacks:vibrant_alloy" }').weakNBT(),
        [" A   A ", "ABA ABA", "ABACABA", "ADAEADA", "ABFCFBA", "ABA ABA", "GHG GHG"],
        {
            A: "#forge:plates/vibrant_alloy",
            B: "#immersiveengineering:scaffoldings/aluminum",
            C: "kubejs:vibrant_alloy_coil",
            D: "#forge:sheetmetals/aluminum",
            E: "ironjetpacks:strap",
            F: "kubejs:vibrant_alloy_capacitor",
            G: "immersiveengineering:radiator",
            H: "kubejs:vibrant_alloy_thruster",
        }
    );

    // Stainless steel jetpack
    event.shaped("kubejs:stainless_steel_energy_cell", ["ABA", "CDC", "EFE"], {
        A: "actuallyadditions:emeradic_crystal",
        B: "#forge:heavy_platings/stainless_steel",
        C: "kubejs:purple_alloy_coil",
        D: "kubejs:vibrant_alloy_energy_cell",
        E: "#forge:plates/stainless_steel",
        F: "pneumaticcraft:printed_circuit_board",
    });

    event.shaped("kubejs:stainless_steel_thruster", ["ABA", "ACA", "DED"], {
        A: "#forge:plates/stainless_steel",
        B: "kubejs:compressed_mechanism",
        C: "kubejs:vibrant_alloy_thruster",
        D: "immersiveengineering:generator",
        E: "pneumaticcraft:thermal_compressor",
    });

    event.recipes.industrialforegoing.dissolution_chamber(
        [
            "#forge:plates/stainless_steel",
            "kubejs:vibrant_alloy_capacitor",
            "#forge:plates/stainless_steel",
            "kubejs:stainless_steel_energy_cell",
            "kubejs:stainless_steel_energy_cell",
            "#forge:plates/stainless_steel",
            "pneumaticcraft:printed_circuit_board",
            "#forge:plates/stainless_steel",
        ],
        Fluid.of("kubejs:molten_diamatine", 1000),
        "kubejs:stainless_steel_capacitor",
        500
    );

    // I hate that the idea of a "crafting jetpack" makes sense here, wtf iron jetpacks???
    event.shapeless("kubejs:vibrant_alloy_crafting_jetpack", [Item.of("ironjetpacks:jetpack", '{ Id: "ironjetpacks:vibrant_alloy" }').weakNBT()]);
    event.shapeless(Item.of("ironjetpacks:jetpack", '{ Id: "ironjetpacks:vibrant_alloy" }'), ["kubejs:vibrant_alloy_crafting_jetpack"]);

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                item: "kubejs:vibrant_alloy_crafting_jetpack"
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "kubejs:stainless_steel_sheetmetal",
                count: 12,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "pneumaticcraft:printed_circuit_board",
                count: 4,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "kubejs:stainless_steel_capacitor",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "actuallyadditions:advanced_coil",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "kubejs:stainless_steel_thruster",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "pneumaticcraft:advanced_liquid_compressor",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "pneumaticcraft:heat_sink",
                count: 4,
            },
        ],
        pressure: 4.5,
        results: [
            {
                item: "ironjetpacks:jetpack",
                nbt: { Id: "ironjetpacks:stainless_steel"}
            },
        ],
    });
});
