ServerEvents.recipes((event) => {
    // Disable drying basin + squeezer
    event.remove({ output: "integrateddynamics:drying_basin" });
    event.remove({ output: "integrateddynamics:squeezer" });
    event.remove({ output: "integrateddynamics:mechanical_drying_basin" });
    event.remove({ output: "integrateddynamics:mechanical_squeezer" });

    event.remove({ type: "integrateddynamics:squeezer" });
    event.remove({ type: "integrateddynamics:mechanical_squeezer" });
    event.remove({ type: "integrateddynamics:drying_basin" });
    event.remove({ type: "integrateddynamics:mechanical_drying_basin" });
});
