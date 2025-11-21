MMEvents.registerControllers((event) => {
    event.create("lava_enricher").name("Lava Enricher").type("mm:machine");
    event.create("fluid_drilling_rig").name("Fluid Drilling Rig").type("mm:machine");
    event.create("air_collector").name("Air Collector").type("mm:machine");
    event.create("industrial_centrifuge").name("Industrial Centrifuge").type("mm:machine");
});

MMEvents.registerPorts((event) => {
    event
        .create("lava_enricher_fluid")
        .name("Lava Enricher Fluid")
        .controllerId("mm:lava_enricher")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(8000).autoPush(true);
        });

    event
        .create("fluid_drilling_rig_item")
        .name("Fluid Drilling Rig Item")
        .controllerId("mm:fluid_drilling_rig")
        .config("mm:item", (c) => {
            c.rows(1).columns(1);
        });

    event
        .create("fluid_drilling_rig_fluid")
        .name("Fluid Drilling Rig Fluid")
        .controllerId("mm:fluid_drilling_rig")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(32000).autoPush(true);
        });

    event
        .create("fluid_drilling_rig_energy")
        .name("Fluid Drilling Rig Energy")
        .controllerId("mm:fluid_drilling_rig")
        .config("mm:energy", (c) => {
            c.capacity(80000).maxReceive(1024);
        });

    event
        .create("air_collector_fluid")
        .name("Air Collector Fluid")
        .controllerId("mm:air_collector")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(32000).autoPush(true);
        });

    event
        .create("air_collector_energy")
        .name("Air Collector Energy")
        .controllerId("mm:air_collector")
        .config("mm:energy", (c) => {
            c.capacity(80000).maxReceive(1024);
        });

    event
        .create("industrial_centrifuge_fluid")
        .name("Industrial Centrifuge Fluid")
        .controllerId("mm:industrial_centrifuge")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(32000).autoPush(true);
        });

    event
        .create("industrial_centrifuge_energy")
        .name("Industrial Centrifuge Energy")
        .controllerId("mm:industrial_centrifuge")
        .config("mm:energy", (c) => {
            c.capacity(320000).maxReceive(2048);
        });
});
