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
        F: "pneumaticcraft:small_tank"
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
});
