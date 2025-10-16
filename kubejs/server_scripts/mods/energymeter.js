ServerEvents.recipes((event) => {
    // Energy meter
    event.remove({ output: "energymeter:meter" });

    event.shaped("energymeter:meter", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/steel",
        B: "#forge:gears/red_alloy",
        C: "createaddition:capacitor",
        D: "#forge:glass_panes/colorless",
        E: "minecraft:observer",
    });
});
