// This file nerfs various tools
ItemEvents.modification(event => {
	function nerfTool(name) {
		event.modify(name, item => {
			item.maxDamage = 1;
		});
	}
	
	for (const toolType of ["pickaxe", "shovel", "axe", "sword", "hoe"]) {
		for (const toolMat of ["wooden", "stone", "iron", "golden", "diamond"]) {
			nerfTool(`minecraft:${toolMat}_${toolType}`);
		}
	}
	
	// AE2 tools
	for (const toolType of ["pickaxe", "shovel", "axe", "sword", "hoe"]) {
		for (const toolMat of ["nether_quartz", "certus_quartz", "fluix"]) {
			nerfTool(`ae2:${toolMat}_${toolType}`);
		}
	}
	
	// IE tools
	for (const toolType of ["pickaxe", "shovel", "axe", "hoe", "sword"]) {
		nerfTool(`immersiveengineering:${toolType}_steel`);
	}
});