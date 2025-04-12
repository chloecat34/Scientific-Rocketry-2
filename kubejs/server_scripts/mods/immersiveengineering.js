ServerEvents.recipes((event) => {
	// Disable alloy kiln
	event.remove({ output: "immersiveengineering:alloybrick" });
	event.remove({ output: "immersiveengineering:slab_alloybrick" });

	// Remove rose gold from arc furnace recipes
	event.remove({ id: "immersiveengineering:arcfurnace/alloy_rose_gold" });
	event.remove({ id: "immersiveengineering:arcfurnace/dust_rose_gold" });

	// Remove treated wood handcrafting
	event.remove({ id: "immersiveengineering:crafting/treated_wood_horizontal"});
	event.remove({ id: "tconstruct:compat/immersiveengineering/treated_wood"});

	event.recipes.thermal.bottler("immersiveengineering:treated_wood_horizontal", ["#minecraft:planks", Fluid.of("immersiveengineering:creosote", 125)]).energy(2000);

	// Coke bricks
	event.remove({ id: "immersiveengineering:crafting/cokebrick" });
	event.shaped("immersiveengineering:cokebrick", [
		"AA",
		"AA"
	], {
		"A": "kubejs:coke_brick"
	});

	event.recipes.createMixing("4x kubejs:coke_brick_blend", ["2x minecraft:clay", "#forge:sand", "#forge:gunpowder", Fluid.of("minecraft:water", 500)]);
	event.smelting("kubejs:coke_brick", "kubejs:coke_brick_blend");
});
