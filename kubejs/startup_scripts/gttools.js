// When working with tools in kubejs you will need to load these classes at the top of your file.
Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey");
Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty");

GTCEuStartupEvents.registry("gtceu:material", (event) => {
    event
        .create("cosmic")
        .ingot()
        .color(0x6147ff)
        .secondaryColor(0x6147ff)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .toolStats(
            ToolProperty.Builder.of(30.0, 7.0, 2147483647, 6, [
                GTToolType.WRENCH,
                GTToolType.CROWBAR,
                GTToolType.SOFT_MALLET,
                GTToolType.SCREWDRIVER,
            ])
                .unbreakable()
                .build()
        );
});
