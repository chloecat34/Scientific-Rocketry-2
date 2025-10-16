ServerEvents.recipes((event) => {
    // Travel anchor
    event.remove({ output: "travelanchors:travel_anchor" });

    event.shaped("travelanchors:travel_anchor", ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/pulsating_alloy",
        B: "#thermal:glass/hardened",
        C: "kubejs:pulsating_crystal",
    });

    // Travel staff
    event.remove({ output: "travelanchors:travel_staff" });

    event.shaped("travelanchors:travel_staff", ["  A", " B ", "B  "], {
        A: "kubejs:vibrant_crystal",
        B: "#forge:rods/aluminum",
    });
});
