ServerEvents.recipes((event) => {
    event.remove({ mod: "gtceu" });

    // Cosmic tools
    event.shaped(
        Item.of(
            "gtceu:cosmic_crowbar",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:9.0f,AttackSpeed:-2.4f,DefaultEnchantments:[],Enchantability:10,HarvestLevel:6,MaxDamage:2147483646,ToolSpeed:34.0f},HideFlags:2,Unbreakable:1b}"
        ),
        [" AA", " B ", "A  "],
        {
            A: "#forge:plates/cobalt",
            B: "minecraft:stick",
        }
    );

    event.shaped(
        Item.of(
            "gtceu:cosmic_mallet",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:0.0f,AttackSpeed:-2.4f,DefaultEnchantments:[],Enchantability:10,MaxDamage:2147483646},HideFlags:2,Unbreakable:1b}"
        ),
        [" AB", " CA", "C  "],
        {
            A: "#forge:plates/cobalt",
            B: "thermal:cured_rubber",
            C: "minecraft:stick",
        }
    );

    event.shaped(
        Item.of(
            "gtceu:cosmic_screwdriver",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:6.0f,AttackSpeed:3.0f,DefaultEnchantments:[],Enchantability:10,MaxDamage:2147483646},HideFlags:2,Unbreakable:1b}"
        ),
        ["  A", " A ", "B  "],
        {
            A: "#forge:plates/cobalt",
            B: "minecraft:stick",
        }
    );

    event.shaped(
        Item.of(
            "gtceu:cosmic_wrench",
            "{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{Mode:2b},GT.Tool:{AttackDamage:8.0f,AttackSpeed:-2.8f,DefaultEnchantments:[],Enchantability:10,HarvestLevel:6,MaxDamage:2147483646,ToolSpeed:34.0f},HideFlags:2,Unbreakable:1b}"
        ),
        [" AB", " AA", "A  "],
        {
            A: "#forge:plates/cobalt",
            B: "create:electron_tube",
        }
    );
});
