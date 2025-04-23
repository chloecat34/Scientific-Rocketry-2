ServerEvents.recipes((event) => {
    // Remove crafting recipes with earth charge
    event.remove({ type: "minecraft:crafting_shapeless", input: "thermal:earth_charge" });

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
        "thermal:enderium_ingot"
    ].forEach(item =>
        event.remove({ input: "minecraft:fire_charge", output: item })
    );

    // Rod die
    event.shaped("kubejs:rod_die", [
        " A ",
        "ABA",
        " A "
    ], {
        "A": "#forge:plates/invar",
        "B": "#forge:rods/brass"
    });

    // Wire die
    event.shaped("kubejs:wire_die", [
        " A ",
        "ABA",
        " A "
    ], {
        "A": "#forge:plates/invar",
        "B": "#forge:wires/aluminum"
    });

    // Gearworking die
    event.replaceInput({ output: "thermal:press_gear_die" }, "#forge:gears/diamond", "#forge:gears/constantan");

    // Remove rod cast
    event.remove({ output: "thermal:chiller_rod_cast" });
    event.remove({ input: "thermal:chiller_rod_cast" });

    // Custom casts
    event.shaped("kubejs:chiller_plate_cast", [
        " A ",
        "ABA",
        " A "
    ], {
        "A": "#forge:plates/bronze",
        "B": "#forge:plates/steel"
    });

    // Rubber
    event.remove({ id: "thermal:rubber_from_dandelion" });
    event.remove({ id: "thermal:rubber_from_vine" });
    event.remove({ id: "thermal:rubber_3" });

    event.recipes.createMixing

    event.recipes.createCompacting("thermal:rubber", [Fluid.of("thermal:latex", 250)]);
    event.recipes.createCompacting("thermal:rubber", [Fluid.of("thermal:resin", 500)]);
    event.recipes.thermal.chiller("thermal:rubber", Fluid.of("thermal:latex", 250)).energy(2400);
    event.recipes.thermal.chiller("thermal:rubber", Fluid.of("thermal:resin", 500)).energy(2400);

    event.remove({ output: "thermal:cured_rubber", type: "minecraft:smelting" });

    event.recipes.createMixing("thermal:cured_rubber", [Fluid.of("kubejs:molten_sulfur", 125), "thermal:rubber"]);

    // Arboreal extractor
    event.remove({ output: "thermal:device_tree_extractor" });

    event.shaped("thermal:device_tree_extractor", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        "A": "#forge:treated_wood",
        "B": "create:brass_hand",
        "C": "#forge:glass",
        "D": "minecraft:bucket",
        "E": "#forge:gears/bronze"
    });

    // Redstone servo
    event.remove({ output: "thermal:redstone_servo" });

    event.shaped("thermal:redstone_servo", [
        "ABA",
        " B ",
        "ABA"
    ], {
        "A": "#forge:plates/red_alloy",
        "B": "#forge:rods/aluminum"
    });

    // Igneous extruder
    event.remove({ output: "thermal:device_rock_gen" });

    event.shaped("thermal:device_rock_gen", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        "A": "#forge:plates/invar",
        "B": "#forge:gears/constantan",
        "C": "#forge:glass",
        "D": "create:mechanical_drill",
        "E": "thermal:redstone_servo"
    });
});