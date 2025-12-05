ServerEvents.recipes((event) => {
    event.remove({ mod: "gtceu" });

    // Cosmic tools
    event.shaped(
        Item.of(
            "gtceu:cosmic_crowbar",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:9.0f,AttackSpeed:-2.4f,DefaultEnchantments:[],Enchantability:10,HarvestLevel:6,MaxDamage:2147483646,ToolSpeed:34.0f},HideFlags:2,Unbreakable:1b}"
        ),
        [" AA", " B ", "A  "],
        {
            A: "#forge:plates/cobalt",
            B: "minecraft:stick",
        }
    );

    event.shaped(
        Item.of(
            "gtceu:cosmic_mallet",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:0.0f,AttackSpeed:-2.4f,DefaultEnchantments:[],Enchantability:10,MaxDamage:2147483646},HideFlags:2,Unbreakable:1b}"
        ),
        [" AB", " CA", "C  "],
        {
            A: "#forge:plates/cobalt",
            B: "thermal:cured_rubber",
            C: "minecraft:stick",
        }
    );

    event.shaped(
        Item.of(
            "gtceu:cosmic_screwdriver",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:6.0f,AttackSpeed:3.0f,DefaultEnchantments:[],Enchantability:10,MaxDamage:2147483646},HideFlags:2,Unbreakable:1b}"
        ),
        ["  A", " A ", "B  "],
        {
            A: "#forge:plates/cobalt",
            B: "minecraft:stick",
        }
    );

    event.shaped(
        Item.of(
            "gtceu:cosmic_wrench",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{Mode:2b},GT.Tool:{AttackDamage:8.0f,AttackSpeed:-2.8f,DefaultEnchantments:[],Enchantability:10,HarvestLevel:6,MaxDamage:2147483646,ToolSpeed:34.0f},HideFlags:2,Unbreakable:1b}"
        ),
        [" AB", " AA", "A  "],
        {
            A: "#forge:plates/cobalt",
            B: "create:electron_tube",
        }
    );

    // Bronze hatches
    event.shaped("gtceu:ulv_input_bus", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/bronze",
        B: "#c:glass_blocks",
        C: "immersiveengineering:crate",
    });

    event.shaped("gtceu:ulv_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/bronze",
        B: "#c:glass_blocks",
        C: "create:fluid_tank",
    });

    event.shaped("gtceu:ulv_energy_input_hatch", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/bronze",
        B: "thermal:cured_rubber",
        C: "immersiveengineering:wirecoil_redstone",
        D: "create:electron_tube",
    });

    event.shapeless("gtceu:ulv_output_bus", ["gtceu:ulv_input_bus"]);
    event.shapeless("gtceu:ulv_input_bus", ["gtceu:ulv_output_bus"]);
    event.shapeless("gtceu:ulv_output_hatch", ["gtceu:ulv_input_hatch"]);
    event.shapeless("gtceu:ulv_input_hatch", ["gtceu:ulv_output_hatch"]);
    event.shapeless("gtceu:ulv_energy_output_hatch", ["gtceu:ulv_energy_input_hatch"]);
    event.shapeless("gtceu:ulv_energy_input_hatch", ["gtceu:ulv_energy_output_hatch"]);

    // Steel hatches
    event.shaped("gtceu:lv_input_bus", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "immersiveengineering:insulating_glass",
        C: "immersiveengineering:reinforced_crate",
    });

    event.shaped("gtceu:lv_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "immersiveengineering:insulating_glass",
        C: "railways:fuel_tank",
    });

    event.shaped("gtceu:lv_energy_input_hatch", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "thermal:cured_rubber",
        C: "kubejs:energetic_alloy_coil",
        D: "immersiveengineering:capacitor_lv",
    });

    event.shapeless("gtceu:lv_output_bus", ["gtceu:lv_input_bus"]);
    event.shapeless("gtceu:lv_input_bus", ["gtceu:lv_output_bus"]);
    event.shapeless("gtceu:lv_output_hatch", ["gtceu:lv_input_hatch"]);
    event.shapeless("gtceu:lv_input_hatch", ["gtceu:lv_output_hatch"]);
    event.shapeless("gtceu:lv_energy_output_hatch", ["gtceu:lv_energy_input_hatch"]);
    event.shapeless("gtceu:lv_energy_input_hatch", ["gtceu:lv_energy_output_hatch"]);

    // Aluminum hatches
    event.shaped("gtceu:mv_input_bus", ["ABA", "BCB", "ABA"], {
        A: "#forge:sheetmetals/aluminum",
        B: "#thermal:glass/hardened",
        C: "sophisticatedstorage:basic_to_gold_tier_upgrade",
    });

    event.shaped("gtceu:mv_input_hatch", ["ABA", "BCB", "ABA"], {
        A: "#forge:sheetmetals/aluminum",
        B: "#thermal:glass/hardened",
        C: "pneumaticcraft:small_tank",
    });

    event.shaped("gtceu:mv_energy_input_hatch", ["ABA", "CDC", "ABA"], {
        A: "#forge:sheetmetals/aluminum",
        B: "thermal:cured_rubber",
        C: "kubejs:vibrant_alloy_coil",
        D: "immersiveengineering:capacitor_mv",
    });

    event.shapeless("gtceu:mv_output_bus", ["gtceu:mv_input_bus"]);
    event.shapeless("gtceu:mv_input_bus", ["gtceu:mv_output_bus"]);
    event.shapeless("gtceu:mv_output_hatch", ["gtceu:mv_input_hatch"]);
    event.shapeless("gtceu:mv_input_hatch", ["gtceu:mv_output_hatch"]);
    event.shapeless("gtceu:mv_energy_output_hatch", ["gtceu:mv_energy_input_hatch"]);
    event.shapeless("gtceu:mv_energy_input_hatch", ["gtceu:mv_energy_output_hatch"]);

    // Terminal
    event.shaped("gtceu:terminal", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/iron",
        B: "minecraft:glass_pane",
        C: "#forge:plates/glowing_brass",
        D: "create:electron_tube",
    });

    // Machine memory card
    event.shaped("gtceu:machine_memory_card", ["ABA", "ACA", "DDD"], {
        A: "pneumaticcraft:plastic",
        B: "immersiveengineering:component_electronic",
        C: "#forge:gears/redstone_alloy",
        D: "#forge:plates/electrical_steel",
    });

    // Machine controller
    event.shaped("gtceu:machine_controller_cover", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "minecraft:lever",
        C: "create:electron_tube",
        D: "immersiveengineering:wirecoil_redstone",
    });

    // Detector covers
    event.shaped("gtceu:activity_detector_cover", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "create:polished_rose_quartz",
        C: "minecraft:redstone_torch",
        D: "immersiveengineering:component_electronic",
    });

    event.shaped("gtceu:advanced_activity_detector_cover", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "create:polished_rose_quartz",
        C: "minecraft:redstone_torch",
        D: "immersiveengineering:component_electronic_adv",
    });
});
