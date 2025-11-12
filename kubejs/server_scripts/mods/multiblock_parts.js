ServerEvents.recipes((event) => {
    // Lava enricher controller
    event.shaped("mbd2:lava_enricher", ["ABA", "CDC", "ABA"], {
        A: "tconstruct:scorched_bricks",
        B: "tconstruct:scorched_soul_glass",
        C: "create:precision_mechanism",
        D: "#forge:gears/cobalt",
    });

    // Fluid drilling rig controller
    event.recipes.createMechanicalCrafting("mbd2:fluid_drilling_rig", ["AABAA", "ACDCA", "BEFEB", "ACDCA", "AABAA"], {
        A: "#forge:sheetmetals/steel",
        B: "immersiveengineering:heavy_engineering",
        C: "#forge:plates/knightslime",
        D: "compressedcreativity:compressed_iron_casing",
        E: "pneumaticcraft:gas_lift",
        F: "pneumaticcraft:small_tank",
    });

    // Bronze fluid hatch
    event.shaped("mbd2:bronze_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/bronze",
        B: "tconstruct:seared_glass",
        C: "create:fluid_tank",
    });

    event.shapeless("mbd2:bronze_input_hatch", ["mbd2:bronze_output_hatch"]);
    event.shapeless("mbd2:bronze_output_hatch", ["mbd2:bronze_input_hatch"]);

    // Steel fluid hatch
    event.shaped("mbd2:steel_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "immersiveengineering:insulating_glass",
        C: "railways:fuel_tank",
    });

    event.shapeless("mbd2:steel_input_hatch", ["mbd2:steel_output_hatch"]);
    event.shapeless("mbd2:steel_output_hatch", ["mbd2:steel_input_hatch"]);

    // Aluminum fluid hatch
    event.shaped("mbd2:aluminum_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "#thermal:glass/hardened",
        C: "pneumaticcraft:small_tank",
    });

    event.shapeless("mbd2:aluminum_input_hatch", ["mbd2:aluminum_output_hatch"]);
    event.shapeless("mbd2:aluminum_output_hatch", ["mbd2:aluminum_input_hatch"]);

    // Steel energy hatch
    event.shaped("mbd2:steel_energy_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "createaddition:capacitor",
        C: "createaddition:modular_accumulator",
    });

    event.shapeless("mbd2:steel_energy_input_hatch", ["mbd2:steel_energy_output_hatch"]);
    event.shapeless("mbd2:steel_energy_output_hatch", ["mbd2:steel_energy_input_hatch"]);

    // Aluminum energy hatch
    event.shaped("mbd2:aluminum_energy_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "immersiveengineering:component_electronic_adv",
        C: "immersiveengineering:capacitor_hv",
    });

    event.shapeless("mbd2:aluminum_energy_input_hatch", ["mbd2:aluminum_energy_output_hatch"]);
    event.shapeless("mbd2:aluminum_energy_output_hatch", ["mbd2:aluminum_energy_input_hatch"]);

    // Bronze input bus
    event.shaped("mbd2:bronze_input_bus", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/bronze",
        B: "#forge:treated_wood",
        C: "create:item_vault",
    });

    event.shapeless("mbd2:bronze_input_bus", ["mbd2:bronze_output_bus"]);
    event.shapeless("mbd2:bronze_output_bus", ["mbd2:bronze_input_bus"]);

    // Steel input bus
    event.shaped("mbd2:steel_input_bus", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "prettypipes:high_speed_module",
        C: "sophisticatedstorage:basic_to_gold_tier_upgrade",
    });

    event.shapeless("mbd2:steel_input_bus", ["mbd2:steel_output_bus"]);
    event.shapeless("mbd2:steel_output_bus", ["mbd2:steel_input_bus"]);

    // Aluminum input bus
    event.shaped("mbd2:aluminum_input_bus", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "laserio:logic_chip",
        C: "sophisticatedstorage:basic_to_diamond_tier_upgrade",
    });

    event.shapeless("mbd2:aluminum_input_bus", ["mbd2:aluminum_output_bus"]);
    event.shapeless("mbd2:aluminum_output_bus", ["mbd2:aluminum_input_bus"]);

    // Air filter casing
    event.shaped("2x kubejs:air_filter_casing", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "#immersiveengineering:scaffoldings/aluminum",
        C: "pneumaticcraft:air_grate_module",
        D: "pneumaticcraft:turbine_rotor",
    });

    // Air collector
    event.recipes.createMechanicalCrafting("mbd2:air_collector", ["AABAA", "ACDCA", "BEFEB", "ACGCA", "AABAA"], {
        A: "#forge:sheetmetals/aluminum",
        B: "pneumaticcraft:pressure_chamber_glass",
        C: "pneumaticcraft:air_grate_module",
        D: "immersiveengineering:light_engineering",
        E: "pneumaticcraft:medium_tank",
        F: "#forge:gears/compressed_iron",
        G: "compressedcreativity:rotational_compressor",
    });

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

    event.recipes.createMechanicalCrafting(
        "mbd2:industrial_centrifuge",
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
