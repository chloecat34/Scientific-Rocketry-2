JEIEvents.hideItems((event) => {
    event.hide("ad_astra:compressor");
    event.hide("ad_astra:etrionic_blast_furnace");
    event.hide("thermal:lapis_gear");
    event.hide("thermal:diamond_gear");
    event.hide("thermal:emerald_gear");
    event.hide("thermal:quartz_gear");
    event.hide("thermal:ruby_gear");
    event.hide("thermal:sapphire_gear");
	event.hide("tconstruct:crafting_station");

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
