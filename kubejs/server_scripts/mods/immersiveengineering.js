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

	event.recipes.createMixing("4x kubejs:coke_brick_blend", ["2x minecraft:clay_ball", "#forge:sand", "#forge:gunpowder", Fluid.of("minecraft:water", 500)]);
	event.smelting("kubejs:coke_brick", "kubejs:coke_brick_blend");

	// Blast bricks
	event.remove({ id: "immersiveengineering:crafting/blastbrick" });
	event.shaped("immersiveengineering:blastbrick", [
		"AA",
		"AA"
	], {
		"A": "kubejs:blast_brick"
	});

	event.recipes.createMixing("4x kubejs:blast_brick_blend", ["create:cinder_flour", "kubejs:soul_sand_dust", "#forge:dusts/coal_coke", Fluid.of("minecraft:lava", 250)]).heated();
	event.smelting("kubejs:blast_brick", "kubejs:blast_brick_blend");

	// Mech. component craftiing
	event.remove({ output: "immersiveengineering:component_iron", type: "minecraft:crafting_shaped" });
	event.remove({ output: "immersiveengineering:component_steel", type: "minecraft:crafting_shaped" });

	// Redstone engineering block
	event.remove({ output: "immersiveengineering:rs_engineering" });

	event.shaped("2x immersiveengineering:rs_engineering", [
		"ABA",
		"CDC",
		"ABA"
	], {
		"A": "#forge:sheetmetals/iron",
		"B": "#forge:plates/red_alloy",
		"C": "create:electron_tube",
		"D": "#forge:gears/rose_gold"
	});

	// Light engineering block
	event.remove({ output: "immersiveengineering:light_engineering" });

	event.shaped("2x immersiveengineering:light_engineering", [
		"ABA",
		"CDC",
		"ABA"
	], {
		"A": "#forge:sheetmetals/iron",
		"B": "immersiveengineering:component_iron",
		"C": "createaddition:capacitor",
		"D": "#forge:gears/bronze"
	});

	// Heavy engineering block
	event.remove({ output: "immersiveengineering:heavy_engineering" });

	event.shaped("2x immersiveengineering:heavy_engineering", [
		"ABA",
		"CDC",
		"ABA"
	], {
		"A": "#forge:sheetmetals/steel",
		"B": "immersiveengineering:component_steel",
		"C": "create:precision_mechanism",
		"D": "#forge:gears/invar"
	});

	// Radiator block
	event.remove({ output: "immersiveengineering:radiator" });

	event.shaped("2x immersiveengineering:radiator", [
		"ABA",
		"CDC",
		"ABA"
	], {
		"A": "#forge:sheetmetals/steel",
		"B": "#forge:plates/netherite",
		"C": "kubejs:heat_mechanism",
		"D": "#forge:gears/constantan"
	});

	// Kinetic dynamo
	event.remove({ output: "immersiveengineering:dynamo" });

	event.shaped("immersiveengineering:dynamo", [
		"ABA",
		"CDC"
	], {
		"A": "createaddition:capacitor",
		"B": "#forge:gears/red_alloy",
		"C": "#forge:plates/invar",
		"D": "createaddition:alternator"
	});

	// Thermoelectric generator
	event.replaceInput({ output: "immersiveengineering:thermoelectric_generator"}, "immersiveengineering:coil_lv", "immersiveengineering:coil_hv");

	// Generator block
	event.remove({ output: "immersiveengineering:generator" });

	event.shaped("2x immersiveengineering:generator", [
		"ABA",
		"CDC",
		"ABA"
	], {
		"A": "#forge:sheetmetals/aluminum",
		"B": "immersiveengineering:coil_hv",
		"C": "immersiveengineering:component_electronic",
		"D": "immersiveengineering:dynamo"
	});
});
