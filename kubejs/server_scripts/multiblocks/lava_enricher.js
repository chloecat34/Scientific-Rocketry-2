MMEvents.createProcesses((event) => {
    event
        .create("mm:blazing_blood")
        .structureId("mm:lava_enricher")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:lava",
                amount: 250,
            },
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tconstruct:ichor",
                amount: 250,
            },
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tconstruct:blazing_blood",
                amount: 250,
            },
        });
});

ServerEvents.recipes((event) => {
    // Lava enricher controller
    event.shaped("mm:lava_enricher", ["ABA", "CDC", "ABA"], {
        A: "tconstruct:scorched_bricks",
        B: "tconstruct:scorched_soul_glass",
        C: "create:precision_mechanism",
        D: "#forge:gears/cobalt",
    });

    // Fluid hatches
    event.shaped("mm:lava_enricher_fluid_input", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/ardite",
        B: "tconstruct:scorched_soul_glass",
        C: "create:fluid_tank",
    });

    event.shapeless("mm:lava_enricher_fluid_input", ["mm:lava_enricher_fluid_output"]);
    event.shapeless("mm:lava_enricher_fluid_output", ["mm:lava_enricher_fluid_input"]);
});
