ServerEvents.recipes((event) => {
    // Remove default ore recipes
    [
        "minecraft:raw_iron",
        "minecraft:raw_copper",
        "minecraft:raw_gold",
        "mekanism:raw_osmium",
        "powah:uraninite_raw",
        "thermal:raw_tin",
        "thermal:raw_lead",
        "thermal:raw_silver",
        "thermal:raw_nickel",
        "createoreexcavation:raw_diamond",
        "createoreexcavation:raw_emerald",
        "createoreexcavation:raw_redstone",
        "ad_astra:raw_desh",
        "ad_astra:raw_ostrum",
        "ad_astra:raw_calorite",
        "create:raw_zinc",
        "immersiveengineering:raw_aluminum",
        "immersiveengineering:raw_uranium",
        "tconstruct:raw_cobalt",
        "#forge:ores/coal",
        "#forge:ores/iron",
        "#forge:ores/copper",
        "#forge:ores/gold",
        "#forge:ores/redstone",
        "#forge:ores/emerald",
        "#forge:ores/lapis",
        "#forge:ores/diamond",
        "#forge:ores/quartz",
        "#forge:ores/osmium",
        "#forge:ores/fluorite",
        "#forge:ores/uraninite",
        "#forge:ores/desh",
        "#forge:ores/ice_shard",
        "#forge:ores/ostrum",
        "#forge:ores/calorite",
        "#forge:ores/zinc",
        "#forge:ores/dimensional_shard",
        "#forge:ores/cobalt",
        "#forge:ores/aluminum",
        "#forge:ores/uranium",
        "#forge:ores/apatite",
        "#forge:ores/cinnabar",
        "#forge:ores/niter",
        "#forge:ores/sulfur",
        "#forge:ores/tin",
        "#forge:ores/nickel",
        "#forge:ores/silver",
        "#forge:ores/lead",
        "#forge:ores/ruby",
        "#forge:ores/sapphire",
        "#forge:ores/netherite_scrap"
    ].forEach(rawOre => {
        event.remove({
            input: rawOre,
            not: [
                {
                    type: "minecraft:crafting_shaped"
                },

                {
                    type: "minecraft:crafting_shapeless"
                },

                {
                    type: "thermal:press"
                }
            ]
        })
    });
});