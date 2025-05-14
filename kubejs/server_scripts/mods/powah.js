ServerEvents.recipes((event) => {
    // Wrench
    event.remove({ output: "powah:wrench" });

    event.shaped("powah:wrench", [
        " AB",
        " CA",
        "C  "
    ], {
        "A": "#forge:ingots/steel",
        "B": "#forge:dyes/black",
        "C": "#forge:rods/steel"
    });

    // Cables
    event.remove({ output: "powah:energy_cable_starter"});
    event.remove({ output: "powah:energy_cable_basic"});
    event.remove({ output: "powah:energy_cable_hardened"});

    event.shaped("8x powah:energy_cable_starter", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        "A": "#forge:plates/red_alloy",
        "B": "thermal:cured_rubber",
        "C": "#forge:wires/red_alloy",
        "D": "createaddition:capacitor"
    });

    event.shaped("8x powah:energy_cable_basic", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        "A": "#forge:plates/energetic_alloy",
        "B": "thermal:cured_rubber",
        "C": "#forge:wires/energetic_alloy",
        "D": "createaddition:capacitor"
    });

    event.shaped("8x powah:energy_cable_basic", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        "A": "#forge:plates/energetic_alloy",
        "B": "thermal:cured_rubber",
        "C": "powah:energy_cable_starter",
        "D": "createaddition:capacitor"
    });

    event.shaped("8x powah:energy_cable_hardened", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        "A": "#forge:plates/vibrant_alloy",
        "B": "thermal:cured_rubber",
        "C": "#forge:wires/vibrant_alloy",
        "D": "createaddition:capacitor"
    });

    event.shaped("8x powah:energy_cable_hardened", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        "A": "#forge:plates/vibrant_alloy",
        "B": "thermal:cured_rubber",
        "C": "powah:energy_cable_basic",
        "D": "createaddition:capacitor"
    });
});
