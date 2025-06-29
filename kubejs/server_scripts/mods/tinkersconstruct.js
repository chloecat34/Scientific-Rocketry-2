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
    event.replaceInput(
        {},
        "thermal:chiller_ingot_cast",
        "tconstruct:ingot_cast"
    );
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
});
