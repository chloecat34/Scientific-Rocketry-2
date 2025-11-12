StartupEvents.registry("block", (event) => {
    event
        .create("sulfur_ore")
        .displayName("Sulfur Ore")
        .material("stone")
        .hardness(3.0)
        .resistance(3.0)
        .tag("forge:ores")
        .tag("forge:ores/sulfur")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool");

    event
        .create("ardite_ore")
        .displayName("Ardite Ore")
        .material("stone")
        .hardness(5.0)
        .resistance(30.0)
        .tag("forge:ores")
        .tag("forge:ores/ardite")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");

    event
        .create("ardite_block")
        .displayName("Ardite Block")
        .material("metal")
        .hardness(5.0)
        .resistance(30.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/ardite")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");

    event
        .create("nether_copper_ore")
        .displayName("Nether Copper Ore")
        .material("stone")
        .hardness(3.0)
        .resistance(3.0)
        .tag("forge:ores")
        .tag("forge:ores/copper")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool");

    event
        .create("platinum_block")
        .displayName("Platinum Block")
        .material("metal")
        .hardness(5.0)
        .resistance(30.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/platinum")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");

    event
        .create("red_alloy_block")
        .displayName("Red Alloy Block")
        .material("metal")
        .hardness(2.5)
        .resistance(15.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/red_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("energetic_alloy_block")
        .displayName("§6Energetic Alloy Block")
        .material("metal")
        .hardness(4.0)
        .resistance(20.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/energetic_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("vibrant_alloy_block")
        .displayName("§aVibrant Alloy Block")
        .material("metal")
        .hardness(5.0)
        .resistance(30.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/vibrant_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("stainless_steel_block")
        .displayName("Stainless Steel Block")
        .material("metal")
        .hardness(5.0)
        .resistance(30.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/stainless_steel")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");

    event
        .create("electrical_steel_block")
        .displayName("Electrical Steel Block")
        .material("metal")
        .hardness(5.0)
        .resistance(30.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/electrical_steel")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("blue_alloy_block")
        .displayName("Blue Alloy Block")
        .material("metal")
        .hardness(2.5)
        .resistance(15.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/blue_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("purple_alloy_block")
        .displayName("§5Purple Alloy Block")
        .material("metal")
        .hardness(4.5)
        .resistance(30.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/purple_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("redstone_alloy_block")
        .displayName("Redstone Alloy Block")
        .material("metal")
        .hardness(2.5)
        .resistance(15.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/redstone_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("pulsating_alloy_block")
        .displayName("§3Pulsating Alloy Block")
        .material("metal")
        .hardness(2.5)
        .resistance(15.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/pulsating_alloy")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("glowing_brass_block")
        .displayName("§eGlowing Brass Block")
        .material("metal")
        .hardness(2.5)
        .resistance(15.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/glowing_brass")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("electrotine_block")
        .displayName("§9Electrotine Block")
        .material("stone")
        .hardness(2.5)
        .resistance(10.0)
        .tag("forge:storage_blocks")
        .tag("forge:storage_blocks/electrotine")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("glod_crystal_block")
        .displayName("Glod Crystal Block")
        .material("stone")
        .hardness(2.5)
        .resistance(20)
        .tag("forge:storage_blocks")
        .tag("actuallyadditions:crystal_blocks")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("empowered_glod_crystal_block")
        .displayName("Empowered Glod Crystal Block")
        .material("stone")
        .hardness(3.5)
        .resistance(30)
        .tag("forge:storage_blocks")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("air_filter_casing")
        .displayName("Air Filter Casing")
        .material("metal")
        .hardness(2.5)
        .resistance(30.0)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event
        .create("hepatizon_sheetmetal")
        .displayName("Hepatizon Sheetmetal")
        .material("metal")
        .hardness(4.0)
        .resistance(120.0)
        .requiresTool(true)
        .tag("forge:sheetmetals/hepatizon")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs/diamond_tool");

    event
        .create("manyullyn_sheetmetal")
        .displayName("Manyullyn Sheetmetal")
        .material("metal")
        .hardness(4.0)
        .resistance(120.0)
        .requiresTool(true)
        .tag("forge:sheetmetals/manyullyn")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs/diamond_tool");

    event
        .create("compressed_iron_sheetmetal")
        .displayName("Compressed Steel Sheetmetal")
        .material("metal")
        .hardness(4.0)
        .resistance(120.0)
        .requiresTool(true)
        .tag("forge:sheetmetals/compressed_iron")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs/diamond_tool");

    event
        .create("industrial_centrifuge_wall")
        .displayName("Industrial Centrifuge Wall")
        .material("metal")
        .hardness(4.0)
        .resistance(120.0)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");

    event
        .create("industrial_centrifuge_core")
        .displayName("Industrial Centrifuge Core")
        .material("metal")
        .hardness(8.0)
        .resistance(480.0)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");
});
