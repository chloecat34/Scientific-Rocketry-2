ServerEvents.recipes((event) => {
    // Remove crafting recipes with earth charge
    event.remove({
        type: "minecraft:crafting_shapeless",
        input: "thermal:earth_charge",
    });

    // Remove recipes from thermal with fire charge
    [
        "thermal:obsidian_glass",
        "thermal:signalum_glass",
        "thermal:lumium_glass",
        "thermal:enderium_glass",
        "thermal:bronze_ingot",
        "thermal:electrum_ingot",
        "thermal:invar_ingot",
        "thermal:constantan_ingot",
        "thermal:signalum_ingot",
        "thermal:lumium_ingot",
        "thermal:enderium_ingot",
    ].forEach((item) => event.remove({ input: "minecraft:fire_charge", output: item }));

    // Rod die
    event.shaped("kubejs:rod_die", [" A ", "ABA", " A "], {
        A: "#forge:plates/invar",
        B: "#forge:rods/brass",
    });

    // Wire die
    event.shaped("kubejs:wire_die", [" A ", "ABA", " A "], {
        A: "#forge:plates/invar",
        B: "#forge:wires/aluminum",
    });

    // Wire die
    event.shaped("kubejs:sheetmetal_die", [" A ", "ABA", " A "], {
        A: "#forge:plates/invar",
        B: "#forge:sheetmetals/aluminum",
    });

    // Gearworking die
    event.replaceInput({ output: "thermal:press_gear_die" }, "#forge:gears/diamond", "#forge:gears/constantan");

    // Remove rod cast
    event.remove({ output: "thermal:chiller_rod_cast" });
    event.remove({ input: "thermal:chiller_rod_cast" });

    // Custom casts
    event.shaped("kubejs:chiller_plate_cast", [" A ", "ABA", " A "], {
        A: "#forge:plates/bronze",
        B: "#forge:plates/steel",
    });

    // Rubber
    event.remove({ id: "thermal:rubber_from_dandelion" });
    event.remove({ id: "thermal:rubber_from_vine" });
    event.remove({ id: "thermal:rubber_3" });

    event.recipes.createMixing;

    event.recipes.createCompacting("thermal:rubber", [Fluid.of("thermal:latex", 250)]);
    event.recipes.createCompacting("thermal:rubber", [Fluid.of("thermal:resin", 500)]);
    event.recipes.thermal.chiller("thermal:rubber", Fluid.of("thermal:latex", 250)).energy(2400);
    event.recipes.thermal.chiller("thermal:rubber", Fluid.of("thermal:resin", 500)).energy(2400);

    event.remove({
        output: "thermal:cured_rubber",
        type: "minecraft:smelting",
    });

    event.recipes.createMixing("thermal:cured_rubber", [Fluid.of("kubejs:molten_sulfur", 125), "thermal:rubber"]);

    // Arboreal extractor
    event.remove({ output: "thermal:device_tree_extractor" });

    event.shaped("thermal:device_tree_extractor", ["ABA", "CDC", "AEA"], {
        A: "#forge:treated_wood",
        B: "create:brass_hand",
        C: "#forge:glass",
        D: "minecraft:bucket",
        E: "#forge:gears/bronze",
    });

    // Redstone servo
    event.remove({ output: "thermal:redstone_servo" });

    event.shaped("thermal:redstone_servo", ["ABA", " B ", "ABA"], {
        A: "#forge:plates/redstone_alloy",
        B: "#forge:rods/aluminum",
    });

    // Igneous extruder
    event.remove({ output: "thermal:device_rock_gen" });

    event.shaped("thermal:device_rock_gen", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/invar",
        B: "#forge:gears/constantan",
        C: "#forge:glass",
        D: "create:mechanical_drill",
        E: "thermal:redstone_servo",
    });

    // Cured rubber boostable
    event.remove({ id: "thermal:machines/smelter/smelter_cured_rubber" });

    event.recipes.thermal
        .smelter(Item.of("thermal:cured_rubber").withChance(4.0), [
            ["#forge:gems/sulfur", "#forge:dusts/sulfur"],
            "2x thermal:rubber",
        ])
        .energy(3200);

    // Hive hopper
    event.replaceInput({ output: "thermal:device_hive_extractor" }, "#minecraft:planks", "#forge:treated_wood");
    event.replaceInput({ output: "thermal:device_fisher" }, "#minecraft:planks", "#forge:treated_wood");
    event.replaceInput({ output: "thermal:device_composter" }, "#minecraft:planks", "#forge:treated_wood");

    // Phyto soil infuser
    event.remove({ output: "thermal:device_soil_infuser" });

    event.shaped("thermal:device_soil_infuser", ["ABA", "CDC", "AEA"], {
        A: "#forge:treated_wood",
        B: "immersiveengineering:light_bulb",
        C: "#thermal:glass/hardened",
        D: "thermal:phytosoil",
        E: "immersiveengineering:component_electronic",
    });

    // Aqueous accumulator
    event.remove({ output: "thermal:device_water_gen" });

    event.shaped("thermal:device_water_gen", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/constantan",
        B: "#forge:gears/aluminum",
        C: "#thermal:glass/hardened",
        D: "immersiveengineering:fluid_pump",
        E: "thermal:redstone_servo",
    });

    // Vacuumulator
    event.remove({ output: "thermal:device_collector" });

    event.shaped("thermal:device_collector", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/pulsating_alloy",
        B: "kubejs:pulsating_crystal",
        C: "#thermal:glass/hardened",
        D: "minecraft:hopper",
        E: "thermal:redstone_servo",
    });

    // Insightful crystal
    event.remove({ output: "thermal:xp_crystal" });

    event.shaped("thermal:xp_crystal", [" A ", "BCB", " A "], {
        A: "actuallyadditions:palis_crystal",
        B: "actuallyadditions:emeradic_crystal",
        C: "create:experience_block",
    });

    // Insightful Condenser
    event.remove({ output: "thermal:device_xp_condenser" });

    event.shaped("thermal:device_xp_condenser", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/purple_alloy",
        B: "create:experience_block",
        C: "#thermal:glass/hardened",
        D: "thermal:xp_crystal",
        E: "thermal:redstone_servo",
    });

    // Nullifier
    event.remove({ output: "thermal:device_nullifier" });

    event.shaped("thermal:device_nullifier", ["ABA", "CDE", "AFA"], {
        A: "#forge:plates/invar",
        B: "#forge:gears/lead",
        C: "trashcans:item_trash_can",
        D: "thermal:machine_null_augment",
        E: "trashcans:liquid_trash_can",
        F: "thermal:redstone_servo",
    });

    // Decoctive diffuser
    event.remove({ output: "thermal:device_potion_diffuser" });

    event.shaped("thermal:device_potion_diffuser", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/mithril",
        B: "#forge:gears/knightslime",
        C: "#thermal:glass/hardened",
        D: "minecraft:glass_bottle",
        E: "thermal:redstone_servo",
    });

    // Item filter
    event.remove({ output: "thermal:item_filter_augment" });

    event.shaped("thermal:item_filter_augment", [" A ", "ABA", " A "], {
        A: "#forge:plates/invar",
        B: "create:brass_funnel",
    });

    // Fluid filter
    event.remove({ output: "thermal:fluid_filter_augment" });

    event.shaped("thermal:fluid_filter_augment", [" A ", "BCB", " A "], {
        A: "thermal:cured_rubber",
        B: "#forge:plates/constantan",
        C: "create:smart_fluid_pipe",
    });

    // Knowledge concentrator
    event.replaceInput(
        { output: "thermal:xp_storage_augment" },
        "#forge:nuggets/gold",
        "actuallyadditions:emeradic_crystal"
    );

    // Remove satchel
    event.remove({ output: "thermal:satchel" });

    // Auxiliary cactus
    event.replaceInput(
        { output: "thermal:machine_null_augment" },
        "#forge:nuggets/iron",
        "actuallyadditions:void_crystal"
    );

    // Reservoir
    event.remove({ output: "thermal:fluid_reservoir" });

    event.shaped("thermal:fluid_reservoir", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/constantan",
        B: "thermal:cured_rubber",
        C: "#thermal:glass/hardened",
        D: "pneumaticcraft:small_tank",
        E: "thermal:redstone_servo",
    });

    // Watering can
    event.replaceInput({ output: "thermal:watering_can" }, "#forge:ingots/copper", "#forge:plates/bronze");

    // Potion infuser
    event.remove({ output: "thermal:potion_infuser" });

    event.shaped("thermal:potion_infuser", ["ABA", "CDC", " C "], {
        A: "thermal:cured_rubber",
        B: "minecraft:glass_bottle",
        C: "#forge:plates/mithril",
        D: "#forge:gears/mithril",
    });

    // Alchemical quiver
    event.remove({ output: "thermal:potion_quiver" });

    event.shaped("thermal:potion_quiver", ["A A", "BCD", "EAE"], {
        A: "#forge:plates/mithril",
        B: "minecraft:glass_bottle",
        C: "#forge:gears/mithril",
        D: "minecraft:string",
        E: "thermal:cured_rubber",
    });
});
