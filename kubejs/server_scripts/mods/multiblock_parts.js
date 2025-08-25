ServerEvents.recipes(event => {
    // Lava enricher controller
    event.shaped("mbd2:lava_enricher", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        "A": "tconstruct:scorched_bricks",
        "B": "tconstruct:scorched_soul_glass",
        "C": "create:precision_mechanism",
        "D": "#forge:gears/cobalt"
    });

    // Bronze fluid input
    event.shaped("mbd2:bronze_input_hatch", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        "A": "#forge:plates/bronze",
        "B": "tconstruct:seared_glass",
        "C": "create:fluid_tank"
    });

    event.shapeless("mbd2:bronze_input_hatch", ["mbd2:bronze_output_hatch"]);
    event.shapeless("mbd2:bronze_output_hatch", ["mbd2:bronze_input_hatch"]);
});