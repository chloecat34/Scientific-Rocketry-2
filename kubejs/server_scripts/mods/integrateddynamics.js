ServerEvents.recipes((event) => {
    // Disable drying basin + squeezer
    event.remove({ output: "integrateddynamics:drying_basin" });
    event.remove({ output: "integrateddynamics:squeezer" });
    event.remove({ output: "integrateddynamics:mechanical_drying_basin" });
    event.remove({ output: "integrateddynamics:mechanical_squeezer" });

    event.remove({ type: "integrateddynamics:squeezer" });
    event.remove({ type: "integrateddynamics:mechanical_squeezer" });
    event.remove({ type: "integrateddynamics:drying_basin" });
    event.remove({ type: "integrateddynamics:mechanical_drying_basin" });

    // Menril resin to menril
    // Menril blocks require a maximum temperature, while menril glass needs a higher temperature
    // Menril blocks could use the Fluid Mixer with skyslime instead like what E6E does.
    event.custom({
        type: "pneumaticcraft:fluid_mixer",
        input1: {
            type: "pneumaticcraft:fluid",
            amount: 750,
            fluid: "integrateddynamics:menril_resin",
        },
        input2: {
            type: "pneumaticcraft:fluid",
            amount: 250,
            fluid: "tconstruct:sky_slime",
        },
        item_output: {
            item: "integrateddynamics:crystalized_menril_block",
        },
        pressure: 2.0,
        time: 200,
    });

    // Menril glass
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "integrateddynamics:menril_resin",
        },
        item_input: {
            item: "thermal:obsidian_glass",
        },
        item_output: {
            count: 1,
            item: "integratedterminals:menril_glass",
        },
        pressure: 4.0,
        temperature: {
            min_temp: 773,
        },
    });

    event.recipes.thermal
        .bottler("integratedterminals:menril_glass", [
            "thermal:obsidian_glass",
            Fluid.of("integrateddynamics:menril_resin", 1000),
        ])
        .energy(12000);

    // Mendesite
    event.custom({
        type: "pneumaticcraft:fluid_mixer",
        input1: {
            type: "pneumaticcraft:fluid",
            amount: 500,
            fluid: "integrateddynamics:menril_resin",
        },
        input2: {
            type: "pneumaticcraft:fluid",
            amount: 90,
            fluid: "kubejs:molten_andesite_alloy",
        },
        item_output: {
            item: "integratedscripting:mendesite",
        },
        pressure: 2.0,
        time: 200,
    });

    // Disable integrated tunnels energy transport
    event.remove({ output: "integratedtunnels:part_interface_energy" });
    event.remove({ output: "integratedtunnels:part_interface_filter_energy" });
    event.remove({ output: "integratedtunnels:part_importer_energy" });
    event.remove({ output: "integratedtunnels:part_exporter_energy" });
    event.remove({ output: "integratedtunnels:part_importer_world_energy" });
    event.remove({ output: "integratedtunnels:part_exporter_world_energy" });

    // ID cable
    event.remove({ output: "integrateddynamics:cable" });

    event.recipes
        .createSequencedAssembly([Item.of("integrateddynamics:cable", 2)], "prettypipes:pipe", [
            event.recipes.createCutting("kubejs:incomplete_logic_cable", "kubejs:incomplete_logic_cable"),
            event.recipes.createFilling("kubejs:incomplete_logic_cable", [
                "kubejs:incomplete_logic_cable",
                Fluid.of("kubejs:molten_restonia", 100),
            ]),
            event.recipes.createFilling("kubejs:incomplete_logic_cable", [
                "kubejs:incomplete_logic_cable",
                Fluid.of("integrateddynamics:menril_resin", 250),
            ]),
        ])
        .transitionalItem("kubejs:incomplete_logic_cable")
        .loops(1);

    // Variable card
    event.remove({ output: "integrateddynamics:variable" });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                item: "pneumaticcraft:upgrade_matrix",
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "integrateddynamics:crystalized_menril_chunk",
                count: 4,
            },
            {
                item: "immersiveengineering:component_electronic",
            },
        ],
        pressure: 3.0,
        results: [
            {
                item: "integrateddynamics:variable",
                count: 6,
            },
        ],
    });

    // Variable transformers
    event.remove({ output: "integrateddynamics:variable_transformer_input" });
    event.remove({ output: "integrateddynamics:variable_transformer_output" });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                type: "pneumaticcraft:stacked_item",
                item: "integrateddynamics:variable",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "integrateddynamics:crystalized_menril_chunk",
                count: 2,
            },
            {
                item: "kubejs:queens_slime_gear",
            },
        ],
        pressure: 3.0,
        results: [
            {
                item: "integrateddynamics:variable_transformer_input",
                count: 4,
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                type: "pneumaticcraft:stacked_item",
                item: "integrateddynamics:variable",
                count: 2,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "integrateddynamics:crystalized_menril_chunk",
                count: 2,
            },
            {
                item: "kubejs:slimesteel_gear",
            },
        ],
        pressure: 3.0,
        results: [
            {
                item: "integrateddynamics:variable_transformer_output",
                count: 4,
            },
        ],
    });

    // Item interface
    event.remove({ output: "integratedtunnels:part_interface_item" });

    event.shaped("2x integratedtunnels:part_interface_item", ["ABA", "AAA"], {
        A: "integrateddynamics:crystalized_menril_chunk",
        B: "create:item_vault",
    });

    // Fluid interface
    event.remove({ output: "integratedtunnels:part_interface_fluid" });

    event.shaped("2x integratedtunnels:part_interface_fluid", ["ABA", "AAA"], {
        A: "integrateddynamics:crystalized_menril_chunk",
        B: "create:fluid_tank",
    });

    // Filtering interfaces
    event.replaceInput(
        { output: "integratedtunnels:part_interface_filter_item" },
        "minecraft:hopper",
        "create:brass_funnel"
    );

    event.replaceInput(
        { output: "integratedtunnels:part_interface_filter_fluid" },
        "minecraft:hopper",
        "create:smart_fluid_pipe"
    );

    // Energy battery
    event.remove({ id: "integrateddynamics:crafting/energy_battery" });

    event.shaped(Item.of("integrateddynamics:energy_battery", "{energy:0}"), ["ABA", "CDC", "ABA"], {
        A: "integrateddynamics:crystalized_menril_chunk",
        B: "integrateddynamics:crystalized_menril_block",
        C: "integratedterminals:menril_glass",
        D: "immersiveengineering:capacitor_hv",
    });

    // Generator
    event.remove({ output: "integrateddynamics:coal_generator" });

    event.shaped("integrateddynamics:coal_generator", ["ABA", "CDC", "AEA"], {
        A: "integrateddynamics:crystalized_menril_chunk",
        B: "actuallyadditions:restonia_crystal",
        C: "actuallyadditions:basic_coil",
        D: "integrateddynamics:energy_battery",
        E: "immersiveengineering:generator",
    });

    // Logic programmer
    event.remove({ id: "integrateddynamics:crafting/logic_programmer" });

    event.recipes.createMechanicalCrafting(
        "integrateddynamics:logic_programmer",
        ["ABCBA", "BDEFB", "CGHGC", "BFIDB", "ABCBA"],
        {
            A: "integrateddynamics:crystalized_menril_block",
            B: "integrateddynamics:crystalized_menril_chunk",
            C: "integratedterminals:menril_glass",
            D: "pneumaticcraft:capacitor",
            E: "actuallyadditions:palis_crystal_block",
            F: "pneumaticcraft:transistor",
            G: "#forge:gears/pulsating_alloy",
            H: "immersiveengineering:logic_unit",
            I: "immersiveengineering:component_electronic_adv",
        }
    );

    // Variable store
    event.remove({ output: "integrateddynamics:variablestore" });

    event.shaped("integrateddynamics:variablestore", ["ABA", "CDC", "ABA"], {
        A: "integrateddynamics:crystalized_menril_chunk",
        B: "integrateddynamics:crystalized_menril_block",
        C: "integrateddynamics:variable",
        D: "sophisticatedstorage:basic_to_gold_tier_upgrade",
    });

    // Static light panel
    event.remove({ output: "integrateddynamics:part_static_light_panel" });

    event.shaped("integrateddynamics:part_static_light_panel", [" AB", "ACD", " AB"], {
        A: "integrateddynamics:crystalized_menril_chunk",
        B: "#forge:plates/glowing_brass",
        C: "integrateddynamics:variable_transformer_output",
        D: "immersiveengineering:electron_tube",
    });

    // Display panel
    event.remove({ output: "integrateddynamics:part_display_panel" });

    event.shaped("integrateddynamics:part_display_panel", ["ABA", "CDC", "ABA"], {
        A: "actuallyadditions:palis_crystal",
        B: "integrateddynamics:menril_berries",
        C: "integrateddynamics:part_static_light_panel",
        D: "integrateddynamics:variable_transformer_output",
    });

    // Storage terminal
    event.remove({ output: "integratedterminals:part_terminal_storage" });

    event.shaped("integratedterminals:part_terminal_storage", ["ABA", "CDE", "AFA"], {
        A: "#forge:plates/energetic_alloy",
        B: "integratedterminals:menril_glass",
        C: "integrateddynamics:variable_transformer_output",
        D: "integrateddynamics:part_display_panel",
        E: "integrateddynamics:variable_transformer_input",
        F: "prettypipes:item_terminal",
    });

    // Crafting job terminal
    event.remove({ output: "integratedterminals:part_terminal_crafting_job" });

    event.shaped("integratedterminals:part_terminal_crafting_job", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/aluminum",
        B: "integratedterminals:menril_glass",
        C: "#forge:gears/glowing_brass",
        D: "integrateddynamics:part_display_panel",
        E: "prettypipes:crafting_terminal",
    });

    // Portable storage terminal
    event.remove({ output: "integratedterminals:terminal_storage_portable" });

    event.shaped("integratedterminals:terminal_storage_portable", ["ABA", "CDC", "AEA"], {
        A: "integrateddynamics:crystalized_chorus_chunk",
        B: "integratedterminals:chorus_glass",
        C: "integrateddynamics:logic_director",
        D: "integratedterminals:part_terminal_storage",
        E: "ae2:fluix_pearl",
    });

    // Disable proto chorus
    event.remove({ output: "integrateddynamics:proto_chorus" });

    // Scripting terminal
    event.remove({ output: "integratedscripting:part_terminal_scripting" });

    event.shaped("integratedscripting:part_terminal_scripting", ["ABA", "CDE", "AFA"], {
        A: "#forge:plates/redstone_alloy",
        B: "integratedscripting:mendesite",
        C: "integrateddynamics:variable_transformer_output",
        D: "integrateddynamics:part_display_panel",
        E: "integrateddynamics:variable_transformer_input",
        F: "integratedscripting:scripting_disk",
    });

    // Block reader
    event.remove({ output: "integrateddynamics:part_block_reader" });

    event.shaped("integrateddynamics:part_block_reader", [" A ", "BCB", " A "], {
        A: "integratedscripting:mendesite",
        B: "tconstruct:seared_brick",
        C: "integrateddynamics:variable_transformer_input",
    });

    // Entity reader
    event.remove({ output: "integrateddynamics:part_entity_reader" });

    event.shaped("integrateddynamics:part_entity_reader", [" A ", "BCB", " A "], {
        A: "#forge:foods/meat/raw",
        B: "kubejs:treated_leather",
        C: "integrateddynamics:variable_transformer_input",
    });

    // Entity writer
    event.remove({ output: "integrateddynamics:part_entity_writer" });

    event.shaped("integrateddynamics:part_entity_writer", [" A ", "BCB", " A "], {
        A: "#forge:foods/meat/raw",
        B: "kubejs:treated_leather",
        C: "integrateddynamics:variable_transformer_output",
    });

    // Extra-dimensional reader
    event.remove({ output: "integrateddynamics:part_extradimensional_reader" });

    event.shaped("integrateddynamics:part_extradimensional_reader", [" A ", "BCB", " A "], {
        A: "kubejs:pulsating_crystal",
        B: "kubejs:vibrant_crystal",
        C: "integrateddynamics:variable_transformer_input",
    });

    // Fluid reader
    event.remove({ output: "integrateddynamics:part_fluid_reader" });

    event.shaped("integrateddynamics:part_fluid_reader", [" A ", "BCB", " A "], {
        A: "create:fluid_tank",
        B: "minecraft:bucket",
        C: "integrateddynamics:variable_transformer_input",
    });

    // Inventory reader
    event.remove({ output: "integrateddynamics:part_inventory_reader" });

    event.shaped("integrateddynamics:part_inventory_reader", [" A ", "ABA", " A "], {
        A: "create:item_vault",
        B: "integrateddynamics:variable_transformer_input",
    });

    // Inventory writer
    event.remove({ output: "integrateddynamics:part_inventory_writer" });

    event.shaped("integrateddynamics:part_inventory_writer", [" A ", "ABA", " A "], {
        A: "create:item_vault",
        B: "integrateddynamics:variable_transformer_output",
    });

    // Machine reader
    event.remove({ output: "integrateddynamics:part_machine_reader" });

    event.shaped("integrateddynamics:part_machine_reader", [" A ", "BCB", " A "], {
        A: "create:electron_tube",
        B: "createaddition:capacitor",
        C: "integrateddynamics:variable_transformer_input",
    });

    // Machine writer
    event.remove({ output: "integrateddynamics:part_machine_writer" });

    event.shaped("integrateddynamics:part_machine_writer", [" A ", "BCB", " A "], {
        A: "create:electron_tube",
        B: "createaddition:capacitor",
        C: "integrateddynamics:variable_transformer_output",
    });

    // Redstone reader
    event.remove({ output: "integrateddynamics:part_redstone_reader" });

    event.shaped("integrateddynamics:part_redstone_reader", [" A ", "ABA", " A "], {
        A: "#forge:plates/red_alloy",
        B: "integrateddynamics:variable_transformer_input",
    });

    // Redstone writer
    event.remove({ output: "integrateddynamics:part_redstone_writer" });

    event.shaped("integrateddynamics:part_redstone_writer", [" A ", "ABA", " A "], {
        A: "#forge:plates/red_alloy",
        B: "integrateddynamics:variable_transformer_output",
    });

    // World reader
    event.remove({ output: "integrateddynamics:part_world_reader" });

    event.shaped("integrateddynamics:part_world_reader", [" A ", "BCB", " A "], {
        A: "tconstruct:scorched_brick",
        B: "create:sturdy_sheet",
        C: "integrateddynamics:variable_transformer_input",
    });

    // Dynamic light panel
    event.remove({ output: "integrateddynamics:part_dynamic_light_panel" });

    event.shaped("integrateddynamics:part_dynamic_light_panel", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/glowing_brass",
        B: "actuallyadditions:restonia_crystal",
        C: "integrateddynamics:part_static_light_panel",
    });
});
