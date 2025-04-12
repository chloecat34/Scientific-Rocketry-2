ItemEvents.tooltip(event => {
    function addTooltip(itemName, itemText, textColor, idx) {
        event.addAdvanced(itemName, (item, advanced, text) => {
			text.add(1, textColor(itemText))
		});
    }

    function addRedTooltip(itemName, itemText, idx) {
		addTooltip(itemName, itemText, Text.red, idx)
	}

    [
        "industrialforegoing:washing_factory",
        "industrialforegoing:fermentation_station",
        "industrialforegoing:fluid_sieving_machine",
        "industrialforegoing:latex_processing_unit",
        "industrialforegoing:plastic",
        "industrialforegoing:dryrubber"
    ].forEach(item => addRedTooltip(item, "Disabled", 1));

    [
        "thermal:sulfur_ore",
        "thermal:deepslate_sulfur_ore",
        "thermal:niter_ore",
        "thermal:deepslate_niter_ore",
        "thermal:cinnabar_ore",
        "thermal:deepslate_cinnabar_ore",
        "thermal:nickel_ore",
        "thermal:deepslate_nickel_ore",
        "powah:deepslate_uraninite_ore_poor",
        "powah:deepslate_uraninite_ore",
        "powah:deepslate_uraninite_ore_dense",
        "powah:uraninite_ore_poor",
        "powah:uraninite_ore",
        "powah:uraninite_ore_dense",
        "rftoolsbase:dimensionalshard_overworld",
        "rftoolsbase:dimensionalshard_nether",
        "rftoolsbase:dimensionalshard_end",
    ].forEach(item => addRedTooltip(item, "Removed from worldgen", 1));

    // Set up tooltips for ores
    function t1OreTooltip(item, idx) {
        addTooltip(item, "Tier 1 Ore", Text.blue, idx);
    }

    function t2OreTooltip(item, idx) {
        addTooltip(item, "Tier 2 Ore", Text.darkAqua, idx);
    }

    function t3OreTooltip(item, idx) {
        addTooltip(item, "Tier 3 Ore", Text.green, idx);
    }

    function t4OreTooltip(item, idx) {
        addTooltip(item, "Tier 4 Ore", Text.aqua, idx);
    }

    function t5OreTooltip(item, idx) {
        addTooltip(item, "Tier 5 Ore", Text.lightPurple, idx);
    }

    function t6OreTooltip(item, idx) {
        addTooltip(item, "Tier 6 Ore", Text.red, idx);
    }

    t1OreTooltip("minecraft:raw_iron", 1);
    t1OreTooltip("minecraft:iron_ore", 1);
    t1OreTooltip("minecraft:deepslate_iron_ore", 1);
    t1OreTooltip("minecraft:raw_copper", 1);
    t1OreTooltip("minecraft:copper_ore", 1);
    t1OreTooltip("minecraft:deepslate_copper_ore", 1);
    t1OreTooltip("minecraft:coal_ore", 1);
    t1OreTooltip("minecraft:deepslate_coal_ore", 1);
    t1OreTooltip("minecraft:raw_gold", 1);
    t1OreTooltip("minecraft:gold_ore", 1);
    t1OreTooltip("minecraft:deepslate_gold_ore", 1);
    t1OreTooltip("minecraft:nether_gold_ore", 1);
    t1OreTooltip("minecraft:redstone_ore", 1);
    t1OreTooltip("minecraft:deepslate_redstone_ore", 1);
    t1OreTooltip("minecraft:emerald_ore", 1);
    t1OreTooltip("minecraft:deepslate_emerald_ore", 1);
    t1OreTooltip("minecraft:lapis_ore", 1);
    t1OreTooltip("minecraft:deepslate_lapis_ore", 1);
    t1OreTooltip("minecraft:diamond_ore", 1);
    t1OreTooltip("minecraft:deepslate_diamond_ore", 1);
    t1OreTooltip("minecraft:nether_quartz_ore", 1);
    t5OreTooltip("mekanism:raw_osmium", 1);
    t5OreTooltip("mekanism:osmium_ore", 1);
    t5OreTooltip("mekanism:deepslate_osmium_ore", 1);
    t4OreTooltip("mekanism:fluorite_ore", 1);
    t4OreTooltip("mekanism:deepslate_fluorite_ore", 1);
    t1OreTooltip("thermal:apatite_ore", 1);
    t1OreTooltip("thermal:deepslate_apatite_ore", 1);
    t1OreTooltip("thermal:cinnabar_ore", 2);
    t1OreTooltip("thermal:deepslate_cinnabar_ore", 2);
    t1OreTooltip("thermal:niter_ore", 2);
    t1OreTooltip("thermal:deepslate_niter_ore", 2);
    t1OreTooltip("thermal:raw_tin", 1);
    t1OreTooltip("thermal:tin_ore", 1);
    t1OreTooltip("thermal:deepslate_tin_ore", 1);
    t1OreTooltip("thermal:raw_lead", 1);
    t1OreTooltip("thermal:lead_ore", 1);
    t1OreTooltip("thermal:deepslate_lead_ore", 1);
    t1OreTooltip("thermal:raw_silver", 1);
    t1OreTooltip("thermal:silver_ore", 1);
    t1OreTooltip("thermal:deepslate_silver_ore", 1);
    t2OreTooltip("thermal:raw_nickel", 1);
    t2OreTooltip("thermal:nickel_ore", 2);
    t2OreTooltip("thermal:deepslate_nickel_ore", 2);
    t1OreTooltip("thermal:ruby_ore", 1);
    t1OreTooltip("thermal:deepslate_ruby_ore", 1);
    t1OreTooltip("thermal:sapphire_ore", 1);
    t1OreTooltip("thermal:deepslate_sapphire_ore", 1);
    t3OreTooltip("ad_astra:moon_cheese_ore", 1);
    t3OreTooltip("ad_astra:raw_desh", 1);
    t3OreTooltip("ad_astra:moon_desh_ore", 1);
    t3OreTooltip("ad_astra:deepslate_desh_ore", 1);
    t3OreTooltip("ad_astra:moon_ice_shard_ore", 1);
    t3OreTooltip("ad_astra:deepslate_ice_shard_ore", 1);
    t3OreTooltip("ad_astra:mars_ice_shard_ore", 1);
    t3OreTooltip("ad_astra:glacio_ice_shard_ore", 1);
    t5OreTooltip("ad_astra:raw_ostrum", 1);
    t5OreTooltip("ad_astra:mars_ostrum_ore", 1);
    t5OreTooltip("ad_astra:deepslate_ostrum_ore", 1);
    t6OreTooltip("ad_astra:raw_calorite", 1);
    t6OreTooltip("ad_astra:venus_calorite_ore", 1);
    t6OreTooltip("ad_astra:deepslate_calorite_ore", 1);
    t1OreTooltip("kubejs:sulfur_ore", 1);
    t1OreTooltip("create:raw_zinc", 1);
    t1OreTooltip("create:zinc_ore", 1);
    t1OreTooltip("create:deepslate_zinc_ore", 1);
    t3OreTooltip("rftoolsbase:dimensionalshard_overworld", 2);
    t3OreTooltip("rftoolsbase:dimensionalshard_nether", 2);
    t3OreTooltip("rftoolsbase:dimensionalshard_end", 2);
    t3OreTooltip("immersiveengineering:raw_aluminum", 1);
    t3OreTooltip("immersiveengineering:ore_aluminum", 1);
    t3OreTooltip("immersiveengineering:deepslate_ore_aluminum", 1);
    t5OreTooltip("immersiveengineering:raw_uranium", 1);
    t5OreTooltip("immersiveengineering:ore_uranium", 1);
    t5OreTooltip("immersiveengineering:deepslate_ore_uranium", 1);
    t2OreTooltip("minecraft:ancient_debris", 1);
    t2OreTooltip("tconstruct:raw_cobalt", 1);
    t2OreTooltip("tconstruct:cobalt_ore", 1);
});