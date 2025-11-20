MMEvents.createStructures((event) => {
    event
        .create("mm:lava_enricher")
        .controllerId("mm:lava_enricher")
        .name("Lava Enricher")
        .layout((a) => {
            a.layer(["AAAAA", "AFFFA", "AFFFA", "AFFFA", "AAAAA"])
                .layer(["ABBBA", "BDDDB", "BDEDB", "BDDDB", "ABBBA"])
                .layer(["AB1BA", "BDDDB", "2DED2", "BDDDB", "ABCBA"])
                .layer(["AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA"])
                .key("A", {
                    block: "tconstruct:scorched_bricks",
                })
                .key("B", {
                    block: "create:cut_scorchia_bricks",
                })
                .key("D", {
                    block: "minecraft:magma_block",
                })
                .key("E", {
                    block: "tconstruct:ichor_slime",
                })
                .key("F", {
                    block: "tconstruct:scorched_glass",
                })
                .key("1", {
                    port: "mm:lava_enricher_fluid",
                    input: false,
                })
                .key("2", {
                    port: "mm:lava_enricher_fluid",
                    input: true,
                });
        });
});
