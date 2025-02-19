ServerEvents.recipes((event) => {
    // Remove crafting recipes with earth charge
    event.remove({ type: "minecraft:crafting_shapeless", input: "thermal:earth_charge" });

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
});