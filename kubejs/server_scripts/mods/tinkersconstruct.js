ServerEvents.recipes((event) => {
	// Disable Crafting Station, since the one from the mod works better
	event.remove({ output: "tconstruct:crafting_station" });
	
	// Replace rose gold with thermal rose gold
	event.replaceOutput({}, "tconstruct:rose_gold_ingot", "thermal:rose_gold_ingot");
	event.replaceOutput({}, "tconstruct:rose_gold_nugget", "thermal:rose_gold_nugget");
	event.replaceOutput({}, "tconstruct:rose_gold_block", "thermal:rose_gold_block");

	// Remove foundry
	[
		"tconstruct:foundry_controller",
		"tconstruct:scorched_drain",
		"tconstruct:scorched_duct",
		"tconstruct:scorched_chute",
		"tconstruct:scorched_fuel_tank",
		"tconstruct:scorched_fuel_gauge",
		"tconstruct:scorched_table",
		"tconstruct:scorched_basin",
		"tconstruct:scorched_alloyer"
	].forEach(item => event.remove({ output: item }));
});