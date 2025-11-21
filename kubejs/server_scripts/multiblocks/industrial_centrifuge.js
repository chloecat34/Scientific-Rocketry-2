MMEvents.createStructures((event) => {
    event
        .create("mm:industrial_centrifuge")
        .controllerId("mm:industrial_centrifuge")
        .name("Industrial Centrifuge")
        .layout((a) => {
            a.layer(["AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA"])
                .layer(["ADDDA", "D   D", "D E D", "D   D", "ADDDA"])
                .layer(["ADDDA", "D   D", "D E 3", "D   D", "ADDDA"])
                .layer(["AFFFA", "F   F", "F E F", "F   F", "AFCFA"])
                .layer(["AD1DA", "D   D", "2 E 3", "D   D", "ADDDA"])
                .layer(["ADDDA", "D   D", "D E D", "D   D", "ADDDA"])
                .layer(["AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA"])
                .key("A", {
                    block: "kubejs:hepatizon_sheetmetal",
                })
                .key("B", {
                    block: "compressedcreativity:compressed_iron_casing",
                })
                .key("D", {
                    block: "kubejs:industrial_centrifuge_wall",
                })
                .key("E", {
                    block: "kubejs:industrial_centrifuge_core",
                })
                .key("F", {
                    block: "immersiveengineering:heavy_engineering",
                })
                .key("1", {
                    port: "mm:industrial_centrifuge_energy",
                    input: true,
                })
                .key("2", {
                    port: "mm:industrial_centrifuge_fluid",
                    input: true,
                })
                .key("3", {
                    port: "mm:industrial_centrifuge_fluid",
                    input: false,
                });
        });
});

MMEvents.createProcesses((event) => {
    event
        .create("mm:centrifuge_air")
        .structureId("mm:industrial_centrifuge")
        .ticks(800)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "kubejs:air",
                amount: 10000,
            },
        })
        .input({
            type: "mm:input/consume",
            per_tick: true,
            ingredient: {
                type: "mm:energy",
                amount: 512,
            },
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "kubejs:nitrogen",
                amount: 4000,
            },
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "mekanism:oxygen",
                amount: 1000,
            },
        });
});

ServerEvents.recipes((event) => {
    // Industrial centrifuge
    event.shaped("kubejs:industrial_centrifuge_core", ["ABA", "CDC", "AEA"], {
        A: "#forge:sheetmetals/manyullyn",
        B: "#forge:gears/knightslime",
        C: "#forge:plates/knightslime",
        D: "pneumaticcraft:turbine_rotor",
        E: "create:precision_mechanism",
    });

    event.shaped("4x kubejs:industrial_centrifuge_wall", ["ABA", "CDC", "ABA"], {
        A: "#forge:sheetmetals/compressed_iron",
        B: "pneumaticcraft:reinforced_bricks",
        C: "#forge:heavy_platings/aluminum",
        D: "#forge:gears/aluminum",
    });

    event.recipes.createMechanicalCrafting("mm:industrial_centrifuge", ["AABAA", "ACDCA", "BEFEB", "AGHGA", "AABAA"], {
        A: "#forge:sheetmetals/compressed_iron",
        B: "#forge:heavy_platings/hepatizon",
        C: "pneumaticcraft:medium_tank",
        D: "pneumaticcraft:turbine_rotor",
        E: "createaddition:electric_motor",
        F: "actuallyadditions:iron_casing",
        G: "#forge:gears/purple_alloy",
        H: "compressedcreativity:rotational_compressor",
    });

    // Hatches
    event.shaped("mm:industrial_centrifuge_energy_input", ["ABA", "CDC", "ABA"], {
        A: "#forge:sheetmetals/compressed_iron",
        B: "#forge:heavy_platings/hepatizon",
        C: "kubejs:heat_mechanism",
        D: "immersiveengineering:capacitor_hv",
    });

    event.shaped("mm:industrial_centrifuge_fluid_input", ["ABA", "CDC", "ABA"], {
        A: "#forge:sheetmetals/compressed_iron",
        B: "#forge:heavy_platings/manyullyn",
        C: "#forge:gears/knightslime",
        D: "pneumaticcraft:medium_tank",
    });

    event.shapeless("mm:industrial_centrifuge_fluid_input", ["mm:industrial_centrifuge_fluid_output"]);
    event.shapeless("mm:industrial_centrifuge_fluid_output", ["mm:industrial_centrifuge_fluid_input"]);
});
