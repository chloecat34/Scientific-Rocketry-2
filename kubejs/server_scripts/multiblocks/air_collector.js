MMEvents.createStructures((event) => {
    event
        .create("mm:air_collector")
        .controllerId("mm:air_collector")
        .name("Air Collector")
        .layout((a) => {
            a.layer(["AAAAAAA", "AGGGGGA", "AGGGGGA", "AGGGGGA", "AGGGGGA", "AGGGGGA", "AAAAAAA"])
                .layer(["ADDDDDA", "D     D", "D     D", "D     D", "D     D", "D     D", "ADDDDDA"])
                .layer(["AEE1EEA", "E     E", "E     E", "F     2", "E     E", "E     E", "AFFCFFA"])
                .layer(["ADDDDDA", "D     D", "D     D", "D     D", "D     D", "D     D", "ADDDDDA"])
                .layer(["AAAAAAA", "ABBBBBA", "ABBBBBA", "ABBBBBA", "ABBBBBA", "ABBBBBA", "AAAAAAA"])
                .key("A", {
                    block: "immersiveengineering:steel_scaffolding_standard",
                })
                .key("B", {
                    block: "immersiveengineering:sheetmetal_steel",
                })
                .key("D", {
                    block: "immersiveengineering:sheetmetal_aluminum",
                })
                .key("E", {
                    block: "thermal:obsidian_glass",
                })
                .key("F", {
                    block: "immersiveengineering:light_engineering",
                })
                .key("G", {
                    block: "kubejs:air_filter_casing",
                })
                .key("1", {
                    port: "mm:air_collector_energy",
                    input: true,
                })
                .key("2", {
                    port: "mm:air_collector_fluid",
                    input: false,
                });
        });
});

ServerEvents.recipes((event) => {
    // Air collector
    event.recipes.createMechanicalCrafting("mm:air_collector", ["AABAA", "ACDCA", "BEFEB", "ACGCA", "AABAA"], {
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

    // Fluid output
    event.shaped("mm:air_collector_fluid_output", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "#thermal:glass/hardened",
        C: "#forge:gears/slimesteel",
        D: "pneumaticcraft:medium_tank",
    });

    // Energy input
    event.shaped("mm:air_collector_energy_input", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "immersiveengineering:component_electronic_adv",
        C: "actuallyadditions:enori_crystal",
        D: "immersiveengineering:capacitor_hv",
    });
});
