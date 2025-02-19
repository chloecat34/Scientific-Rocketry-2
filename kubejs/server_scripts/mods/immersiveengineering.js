ServerEvents.recipes((event) => {
	// Disable alloy kiln
	event.remove({ output: "immersiveengineering:alloybrick" });
	event.remove({ output: "immersiveengineering:slab_alloybrick" });

	// Remove rose gold from arc furnace recipes
	event.remove({ id: "immersiveengineering:arcfurnace/alloy_rose_gold" });
	event.remove({ id: "immersiveengineering:arcfurnace/dust_rose_gold" });
});
