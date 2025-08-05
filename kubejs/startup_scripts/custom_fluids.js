StartupEvents.registry("fluid", (event) => {
    event
        .create("kubejs:molten_sulfur")
        .thickTexture(0xafb915)
        .bucketColor(0xafb915)
        .displayName("Molten Sulfur");

    event
        .create("kubejs:molten_electrotine")
        .stillTexture("kubejs:fluid/molten_electrotine_still")
        .flowingTexture("kubejs:fluid/molten_electrotine_flow")
        .bucketColor(0x1f89b7)
        .displayName("Molten Electrotine");

    event
        .create("kubejs:molten_pulsating_alloy")
        .stillTexture("kubejs:fluid/molten_pulsating_alloy_still")
        .flowingTexture("kubejs:fluid/molten_pulsating_alloy_flow")
        .bucketColor(0x3bbd8e)
        .displayName("Molten Pulsating Alloy");

    event
        .create("kubejs:molten_vibrant_alloy")
        .stillTexture("kubejs:fluid/molten_vibrant_alloy_still")
        .flowingTexture("kubejs:fluid/molten_vibrant_alloy_flow")
        .bucketColor(0xc9ff5c)
        .displayName("Molten Vibrant Alloy");

    event
        .create("kubejs:molten_compressed_iron")
        .thickTexture(0x7d7d7d)
        .bucketColor(0x7d7d7d)
        .displayName("Molten Compressed Steel");
});
