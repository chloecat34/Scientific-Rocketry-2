ServerEvents.recipes((event) => {
    // Magnets
    event.remove({ output: "simplemagnets:basicmagnet" });
    event.remove({ output: "simplemagnets:advancedmagnet" });

    event.shaped("simplemagnets:basicmagnet", ["AAB", "AC ", "AAD"], {
        A: "actuallyadditions:enori_crystal",
        B: "#forge:ingots/red_alloy",
        C: "#forge:gears/vibrant_alloy",
        D: "#forge:ingots/blue_alloy",
    });

    event.shaped("simplemagnets:advancedmagnet", ["AAB", "AC ", "AAD"], {
        A: "kubejs:glod_crystal",
        B: "#forge:ingots/red_alloy",
        C: "simplemagnets:basicmagnet",
        D: "#forge:ingots/blue_alloy",
    });

    event.remove({ output: "simplemagnets:basic_demagnetization_coil" });
    event.remove({ output: "simplemagnets:advanced_demagnetization_coil" });

    event.shaped("simplemagnets:basic_demagnetization_coil", [" A ", "BCB", "CCC"], {
        A: "create:transmitter",
        B: "#forge:ingots/red_alloy",
        C: "actuallyadditions:enori_crystal",
    });

    event.shaped("simplemagnets:advanced_demagnetization_coil", [" A ", "BCB", "CDC"], {
        A: "create:transmitter",
        B: "#forge:ingots/redstone_alloy",
        C: "kubejs:glod_crystal",
        D: "simplemagnets:basic_demagnetization_coil",
    });
});
