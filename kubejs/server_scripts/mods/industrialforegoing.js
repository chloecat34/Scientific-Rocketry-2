ServerEvents.recipes((event) => {
    // Get rid of ore washing
    event.remove({ output: "industrialforegoing:fluid_sieving_machine" });
    event.remove({ output: "industrialforegoing:fermentation_station" });
    event.remove({ output: "industrialforegoing:washing_factory" });
});