ServerEvents.recipes((event) => {
	// Disable Crafting Station, since the one from the mod works better
	event.remove({ output: "tconstruct:crafting_station" });
});