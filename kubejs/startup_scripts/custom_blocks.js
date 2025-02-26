StartupEvents.registry("block", event => {
    event.create("sulfur_ore")
        .displayName("Sulfur Ore")
        .material("stone")
        .hardness(3.0)
        .resistance(3.0)
        .tagBlock("forge:ores")
        .tagBlock("forge:ores/sulfur")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool");
});