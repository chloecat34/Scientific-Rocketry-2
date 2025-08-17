ServerEvents.recipes((event) => {
    // Disable Crafting Station, since the one from the mod works better
    event.remove({ output: "tconstruct:crafting_station" });

    // Remove foundry
    [
        "tconstruct:foundry_controller",
        "tconstruct:scorched_drain",
        "tconstruct:scorched_duct",
        "tconstruct:scorched_chute",
        "tconstruct:scorched_fuel_tank",
        "tconstruct:scorched_fuel_gauge",
        "tconstruct:scorched_table",
        "tconstruct:scorched_basin",
        "tconstruct:scorched_alloyer",
    ].forEach((item) => event.remove({ output: item }));

    // Extra recipe for ingot casts (to replace the thermal ones)
    event.replaceInput({}, "thermal:chiller_ingot_cast", "tconstruct:ingot_cast");
    event.remove({ output: "thermal:chiller_ingot_cast" });

    // Remove coin casts
    event.remove({ output: "tconstruct:coin_cast" });
    event.remove({ output: "#tconstruct:casts/single_use/coin" });
    event.remove({ input: "tconstruct:coin_cast" });
    event.remove({ input: "#tconstruct:casts/single_use/coin" });

    // Remove gear casts
    event.remove({ output: "tconstruct:gear_cast" });
    event.remove({ output: "#tconstruct:casts/single_use/gear" });
    event.remove({ input: "tconstruct:gear_cast" });
    event.remove({ input: "#tconstruct:casts/single_use/gear" });

    // Remove plate casts
    event.remove({ output: "tconstruct:plate_cast" });
    event.remove({ output: "#tconstruct:casts/single_use/plate" });
    event.remove({ input: "tconstruct:plate_cast" });
    event.remove({ input: "#tconstruct:casts/single_use/plate" });

    // Remove wire casts
    event.remove({ output: "tconstruct:wire_cast" });
    event.remove({ output: "#tconstruct:casts/single_use/wire" });
    event.remove({ input: "tconstruct:wire_cast" });
    event.remove({ input: "#tconstruct:casts/single_use/wire" });

    // Remove rod casting for metal rods
    event.remove({
        input: "tconstruct:rod_cast",
        not: {
            output: "minecraft:blaze_rod",
        },
    });

    event.remove({
        input: "#tconstruct:casts/single_use/rod",
        not: {
            output: "minecraft:blaze_rod",
        },
    });

    // Blaze rod casting with thermal
    event.recipes.thermal
        .chiller("minecraft:blaze_rod", [Fluid.of("tconstruct:blazing_blood", 100), "tconstruct:rod_cast"])
        .energy(2400);

    // Scorched bricks
    event.remove({ output: "tconstruct:nether_grout" });
    event.remove({ input: "tconstruct:nether_grout" });

    event.recipes.create.mixing("2x tconstruct:scorched_brick", [
        "minecraft:soul_sand",
        "#forge:gravel",
        Fluid.of("tconstruct:magma", 250),
    ]);

    event.recipes.thermal
        .smelter("2x tconstruct:scorched_brick", ["minecraft:soul_sand", "#forge:gravel", "minecraft:magma_cream"])
        .energy(4800);

    // Seared brick shortcut
    event.recipes.thermal
        .smelter("2x tconstruct:seared_brick", ["#forge:sand", "#forge:gravel", "#forge:clay"])
        .energy(4800);

    event.remove({id: "tconstruct:smeltery/casting/seared/brick_composite"});
    event.remove({id: "tconstruct:smeltery/casting/scorched/brick_composite"});

    // Remove the gravel recipe in the induction smelter bc of the conflict
    event.remove({ id: "thermal:machines/smelter/smelter_gravel" });
});
