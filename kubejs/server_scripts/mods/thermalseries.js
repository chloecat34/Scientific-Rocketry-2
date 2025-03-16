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
});