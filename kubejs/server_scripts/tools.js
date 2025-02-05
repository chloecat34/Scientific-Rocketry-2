ServerEvents.recipes((event) => {
	// Vanilla tools (besides pickaxes, because of Breaker Modules)
	for (const toolType of ["shovel", "axe", "sword", "hoe"]) {
		for (const toolMat of ["iron", "golden", "diamond", "wooden", "stone"]) {
			event.remove({output: `minecraft:${toolMat}_${toolType}`})
		}
	}

	// AE2 tools
	for (const toolType of ["pickaxe", "shovel", "axe", "sword", "hoe"]) {
		for (const toolMat of ["nether_quartz", "certus_quartz", "fluix"]) {
			event.remove({output: `ae2:${toolMat}_${toolType}`});
		}
	}
	
	// IE tools
	for (const toolType of ["pickaxe", "shovel", "axe", "hoe", "sword"]) {
		event.remove({output: `immersiveengineering:${toolType}_steel`});
	}
});