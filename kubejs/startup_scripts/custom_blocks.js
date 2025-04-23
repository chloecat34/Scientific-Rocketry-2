StartupEvents.registry("block", event => {
    event.create("sulfur_ore")
        .displayName("Sulfur Ore")
        .material("stone")
        .hardness(3.0)
        .resistance(3.0)
        .tag("forge:ores")
        .tag("forge:ores/sulfur")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool");

    event.create("platinum_block")
        .displayName("Platinum Block")
        .material("metal")
        .hardness(5.0)
        .resistance(30.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/platinum")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");

    event.create("red_alloy_block")
        .displayName("Red Alloy Block")
        .material("metal")
        .hardness(2.5)
        .resistance(15.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/red_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");
});