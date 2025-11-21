MMEvents.createStructures((event) => {
    event
        .create("mm:fluid_drilling_rig")
        .controllerId("mm:fluid_drilling_rig")
        .name("Fluid Drilling Rig")
        .layout((a) => {
            a.layer(["     ", "     ", "  A  ", "     ", "     "]);
            a.layer(["     ", "     ", "  A  ", "     ", "     "]);
            a.layer(["     ", "     ", "  A  ", "     ", "     "]);
            a.layer(["     ", "  A  ", " ABA ", "  A  ", "     "]);
            a.layer(["     ", "  A  ", " ABA ", "  A  ", "     "]);
            a.layer(["     ", "  A  ", " ABA ", "  A  ", "     "]);
            a.layer(["DDDDD", "DBBBD", "DBEBD", "DBBBD", "DDDDD"]);
            a.layer(["AAAAA", "ABBBA", "ABBBA", "ABBBA", "AEEEA"]);
            a.layer(["EBBBE", "B   B", "1   2", "B   B", "E3CBE"]);
            a.layer(["AAAAA", "ABBBA", "ABEBA", "ABBBA", "AEEEA"]);
            a.layer(["A   A", "     ", "  F  ", "     ", "A   A"]);
            a.layer(["A   A", "     ", "  F  ", "     ", "A   A"]);
            a.layer(["A   A", "     ", "  F  ", "     ", "A   A"])
                .key("A", {
                    block: "immersiveengineering:steel_scaffolding_standard",
                })
                .key("B", {
                    block: "immersiveengineering:sheetmetal_steel",
                })
                .key("D", {
                    block: "immersiveengineering:slab_sheetmetal_steel",
                })
                .key("E", {
                    block: "immersiveengineering:heavy_engineering",
                })
                .key("F", {
                    block: "pneumaticcraft:drill_pipe",
                })
                .key("1", {
                    port: "mm:fluid_drilling_rig_fluid",
                    input: false,
                })
                .key("2", {
                    port: "mm:fluid_drilling_rig_energy",
                    input: true,
                })
                .key("3", {
                    port: "mm:fluid_drilling_rig_item",
                    input: true,
                });
        });
});

ServerEvents.recipes((event) => {
    // Fluid drilling rig controller
    event.recipes.createMechanicalCrafting("mm:fluid_drilling_rig", ["AABAA", "ACDCA", "BEFEB", "ACDCA", "AABAA"], {
        A: "#forge:sheetmetals/steel",
        B: "immersiveengineering:heavy_engineering",
        C: "#forge:plates/knightslime",
        D: "compressedcreativity:compressed_iron_casing",
        E: "pneumaticcraft:gas_lift",
        F: "pneumaticcraft:small_tank",
    });

    // Item input
    event.shaped("mm:fluid_drilling_rig_item_input", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "immersiveengineering:insulating_glass",
        C: "immersiveengineering:crate",
    });

    // Fluid output
    event.shaped("mm:fluid_drilling_rig_fluid_output", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "immersiveengineering:fluid_pump",
        C: "#forge:gears/aluminum",
        D: "immersiveengineering:metal_barrel",
    });

    // Energy input
    event.shaped("mm:fluid_drilling_rig_energy_input", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "immersiveengineering:component_electronic",
        C: "immersiveengineering:wirecoil_steel",
        D: "immersiveengineering:capacitor_mv",
    });
});
