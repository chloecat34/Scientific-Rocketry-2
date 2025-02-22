JEIEvents.hideItems((event) => {
	const itemsToRemove = [
		"ad_astra:compressor",
		"ad_astra:etrionic_blast_furnace",
		"thermal:lapis_gear",
		"thermal:diamond_gear",
		"thermal:emerald_gear",
		"thermal:quartz_gear",
		"thermal:ruby_gear",
		"thermal:sapphire_gear",
		"tconstruct:crafting_station",
		"integrateddynamics:squeezer",
		"integrateddynamics:drying_basin",
		"integrateddynamics:mechanical_squeezer",
		"integrateddynamics:mechanical_drying_basin",
		"immersiveengineering:alloybrick",
		"immersiveengineering:slab_alloybrick",
		"ae2:facade",
		"tconstruct:rose_gold_ingot",
		"tconstruct:rose_gold_nugget",
		"tconstruct:rose_gold_block",
		"industrialforegoing:fluid_sieving_machine",
		"industrialforegoing:fermentation_station",
		"industrialforegoing:washing_factory",
		"mekanism:dust_quartz",
		"ae2:ender_dust",
		"tconstruct:foundry_controller",
		"tconstruct:scorched_drain",
		"tconstruct:scorched_duct",
		"tconstruct:scorched_chute",
		"tconstruct:scorched_fuel_tank",
		"tconstruct:scorched_fuel_gauge",
		"tconstruct:scorched_table",
		"tconstruct:scorched_basin",
		"tconstruct:scorched_alloyer",
		"create:crushed_raw_iron",
		"create:crushed_raw_gold",
		"create:crushed_raw_copper",
		"create:crushed_raw_zinc",
		"create:crushed_raw_osmium",
		"create:crushed_raw_silver",
		"create:crushed_raw_tin",
		"create:crushed_raw_lead",
		"create:crushed_raw_aluminum",
		"create:crushed_raw_uranium",
		"create:crushed_raw_nickel"
	];
    
	itemsToRemove.forEach(item => event.hide(item));

    	// Vanilla tools (besides pickaxes, because of Breaker Modules)
	for (const toolType of ["shovel", "axe", "sword", "hoe"]) {
		for (const toolMat of ["iron", "golden", "diamond", "wooden", "stone"]) {
			event.hide(`minecraft:${toolMat}_${toolType}`);
		}
	}

	// AE2 tools
	for (const toolType of ["pickaxe", "shovel", "axe", "sword", "hoe"]) {
		for (const toolMat of ["nether_quartz", "certus_quartz", "fluix"]) {
			event.hide(`ae2:${toolMat}_${toolType}`);
		}
	}
	
	// IE tools
	for (const toolType of ["pickaxe", "shovel", "axe", "hoe", "sword"]) {
		event.hide(`immersiveengineering:${toolType}_steel`);
	}
});
