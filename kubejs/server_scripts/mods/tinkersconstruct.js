ServerEvents.recipes((event) => {
	// Disable Crafting Station, since the one from the mod works better
	event.remove({ output: "tconstruct:crafting_station" });
	
	// Replace rose gold with thermal rose gold
	event.replaceOutput({}, "tconstruct:rose_gold_ingot", "thermal:rose_gold_ingot");
	event.replaceOutput({}, "tconstruct:rose_gold_nugget", "thermal:rose_gold_nugget");
	event.replaceOutput({}, "tconstruct:rose_gold_block", "thermal:rose_gold_block");
});