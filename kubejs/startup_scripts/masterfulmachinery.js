MMEvents.registerControllers((event) => {
    event.create("lava_enricher").name("Lava Enricher").type("mm:machine");
});

MMEvents.registerPorts((event) => {
    event
        .create("lava_enricher_fluid")
        .name("Lava Enricher Fluid")
        .controllerId("mm:lava_enricher")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(8000).autoPush(true);
        });
});
