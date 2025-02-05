ServerEvents.recipes((event) => {
    // Remove compressor
    event.remove({ output: "ad_astra:compressor" });
    event.remove({ type: "ad_astra:compressing" });

    // Remove blast furnace
    event.remove({ output: "ad_astra:etrionic_blast_furnace" });
    event.remove({ type: "ad_astra:alloying" });
});
