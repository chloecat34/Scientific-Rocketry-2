ServerEvents.recipes((event) => {
    // Get rid of ore washing
    event.remove({ output: "industrialforegoing:fluid_sieving_machine" });
    event.remove({ output: "industrialforegoing:fermentation_station" });
    event.remove({ output: "industrialforegoing:washing_factory" });

    // Remove plastic
    event.remove({ output: "industrialforegoing:plastic" });
    event.remove({ output: "industrialforegoing:dryrubber" });
    event.remove({ output: "industrialforegoing:latex_processing_unit" });

    // Disable mycelial generators
    [
        "reactor",
        "furnace",
        "slimey",
        "culinary",
        "potion",
        "disenchantment",
        "ender",
        "explosive",
        "frosty",
        "halitosis",
        "magma",
        "pink",
        "netherstar",
        "death",
        "rocket",
        "crimed",
        "meatallurgic",
    ].forEach((gen) => {
        event.remove({ output: `industrialforegoing:mycelial_${gen}` });
    });
});
