ServerEvents.recipes((event) => {
    event.remove({ mod: "curvy_pipes" });

    event.shaped("4x curvy_pipes:tiny_item_pipe", ["ABA"], {
        A: "#forge:plates/bronze",
        B: "prettypipes:pipe",
    });

    event.shaped("4x curvy_pipes:small_item_pipe", ["ABA"], {
        A: "#forge:plates/invar",
        B: "prettypipes:pipe",
    });

    event.shaped("4x curvy_pipes:medium_item_pipe", ["ABA"], {
        A: "#forge:plates/compressed_iron",
        B: "prettypipes:pipe",
    });

    event.shaped("4x curvy_pipes:tiny_fluid_pipe", ["ABA"], {
        A: "#forge:plates/steel",
        B: "ppfluids:fluid_pipe",
    });

    event.shaped("4x curvy_pipes:small_fluid_pipe", ["ABA"], {
        A: "#forge:plates/constantan",
        B: "ppfluids:fluid_pipe",
    });

    event.shaped("4x curvy_pipes:medium_fluid_pipe", ["ABA"], {
        A: "#forge:plates/aluminum",
        B: "ppfluids:fluid_pipe",
    });

    event.shaped("4x curvy_pipes:large_fluid_pipe", ["ABA"], {
        A: "#forge:plates/stainless_steel",
        B: "ppfluids:fluid_pipe",
    });

    event.shaped("4x curvy_pipes:tiny_energy_pipe", ["ABA"], {
        A: "#forge:plates/red_alloy",
        B: "powah:energy_cable_starter",
    });

    event.shaped("4x curvy_pipes:small_energy_pipe", ["ABA"], {
        A: "#forge:plates/energetic_alloy",
        B: "powah:energy_cable_basic",
    });
});
