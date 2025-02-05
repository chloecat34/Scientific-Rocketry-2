ItemEvents.tooltip(event => {
	// Add a red tooltip
	function addRedTooltip(itemName) {
		event.addAdvanced(itemName, (item, advanced, text) => {
			text.add(1, Text.red("Disabled, use Tinkers' Tools instead."))
		});
	}

	// Vanila tools
	["wooden", "stone", "iron", "golden", "diamond"].forEach(mat => {
		["axe", "shovel", "pickaxe", "hoe", "sword"].forEach(type => {
			addRedTooltip(`minecraft:${mat}_${type}`);
		});
	});

	// AE2 tools
	for (const toolType of ["pickaxe", "shovel", "axe", "sword", "hoe"]) {
		for (const toolMat of ["nether_quartz", "certus_quartz", "fluix"]) {
			addRedTooltip(`ae2:${toolMat}_${toolType}`);
		}
	}
	
	// IE tools
	for (const toolType of ["pickaxe", "shovel", "axe", "hoe", "sword"]) {
		addRedTooltip(`immersiveengineering:${toolType}_steel`);
	}
});
