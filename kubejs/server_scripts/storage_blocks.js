ServerEvents.recipes((event) => {
    // Multiservo press packing/unpacking
    function addPacking(ingot, block) {
		// Check if there is any 3x3 crafting recipe
		if (!(event.containsRecipe({output: block, type: "minecraft:crafting_shapeless"}) || event.containsRecipe({output: block, type: "minecraft:crafting_shaped"}))) {
			event.shapeless(block, [`9x ${ingot}`]);
			event.shapeless(`9x ${ingot}`, [block]);
		}
		
        event.recipes.thermal.press(block, [`9x ${ingot}`, "thermal:press_packing_3x3_die"]).energy(400);
        event.recipes.thermal.press(`9x ${ingot}`, [block, "thermal:press_unpacking_die"]).energy(400);
    }
	
	// 2x2 packing
	function addPacking2x2(ingot, block) {
		// Check if there is any 2x2 crafting recipe
		if (!(event.containsRecipe({output: block, type: "minecraft:crafting_shapeless"}) || event.containsRecipe({output: block, type: "minecraft:crafting_shaped"}))) {
			event.shapeless(block, [`4x ${ingot}`]);
			event.shapeless(`4x ${ingot}`, [block]);
		}
		
        event.recipes.thermal.press(block, [`4x ${ingot}`, "thermal:press_packing_2x2_die"]).energy(400);
        event.recipes.thermal.press(`4x ${ingot}`, [block, "thermal:press_unpacking_die"]).energy(400);
	}

    addPacking("create:andesite_alloy", "create:andesite_alloy_block");
    addPacking("minecraft:bone_meal", "minecraft:bone_block");
    addPacking("integrateddynamics:crystalized_menril_chunk", "integrateddynamics:crystalized_menril_block");
    addPacking("integrateddynamics:crystalized_chorus_chunk", "integrateddynamics:crystalized_chorus_block");
	addPacking("powah:steel_energized", "powah:energized_steel_block");
	addPacking("powah:crystal_blazing", "powah:blazing_crystal_block");
	addPacking("powah:crystal_niotic", "powah:niotic_crystal_block");
	addPacking("powah:crystal_spirited", "powah:spirited_crystal_block");
	addPacking("powah:crystal_nitro", "powah:nitro_crystal_block");
	addPacking("powah:uraninite", "powah:uraninite_block");
	addPacking("#forge:gems/ruby", "thermal:ruby_block");
	addPacking("#forge:gems/sapphire", "thermal:sapphire_block");
	addPacking("ad_astra:cheese", "ad_astra:cheese_block");
	addPacking("#forge:ingots/desh", "#forge:storage_blocks/desh");
	addPacking("#forge:raw_materials/desh", "#forge:storage_blocks/raw_desh");
	addPacking("#forge:ingots/ostrum", "#forge:storage_blocks/ostrum");
	addPacking("#forge:raw_materials/ostrum", "#forge:storage_blocks/raw_ostrum");
	addPacking("#forge:ingots/calorite", "#forge:storage_blocks/calorite");
	addPacking("#forge:raw_materials/calorite", "#forge:storage_blocks/raw_calorite");
	addPacking("estrogen:estrogen_pill", "estrogen:estrogen_pill_block");
	addPacking("minecraft:allium", "biomeswevegone:allium_petal_block");
	addPacking("biomeswevegone:pink_allium", "biomeswevegone:pink_allium_petal_block");
	addPacking("biomeswevegone:white_allium", "biomeswevegone:white_allium_petal_block");
	addPacking("biomeswevegone:rose", "biomeswevegone:rose_petal_block");
	addPacking("create:experience_nugget", "create:experience_block");
	addPacking("#forge:ingots/soul_infused", "#forge:storage_blocks/soul_infused");
	addPacking("#forge:ingots/shellite", "#forge:storage_blocks/shellite");
	addPacking("#forge:ingots/twinite", "#forge:storage_blocks/twinite");
	addPacking("#forge:ingots/dragonsteel", "#forge:storage_blocks/dragonsteel");
	addPacking2x2("tconstruct:cheese_ingot", "tconstruct:cheese_block");
	addPacking("#forge:raw_materials/cobalt", "#forge:storage_blocks/raw_cobalt");
	addPacking2x2("tconstruct:earth_slime_crystal", "tconstruct:earth_slime_crystal_block");
	addPacking2x2("tconstruct:sky_slime_crystal", "tconstruct:sky_slime_crystal_block");
	addPacking2x2("tconstruct:ichor_slime_crystal", "tconstruct:ichor_slime_crystal_block");
	addPacking2x2("tconstruct:ender_slime_crystal", "tconstruct:ender_slime_crystal_block");
	addPacking("avaritia:neutronium_ingot", "avaritia:neutronium_block");
	addPacking("avaritia:infinity_ingot", "avaritia:infinity_block");
	addPacking2x2("#forge:gems/certus_quartz", "#forge:storage_blocks/certus_quartz");
	addPacking2x2("#forge:gems/fluix", "ae2:fluix_block");
	addPacking("advanced_ae:quantum_alloy", "advanced_ae:quantum_alloy_block");
	addPacking("createaddition:biomass_pellet", "createaddition:biomass_pellet_block");
	
	["desh", "ostrum", "calorite", "prismalium", "melodium", "stellarium", "soul_infused", "shellite", "twinite", "dragonsteel"].forEach(material => {
		addPacking(`#forge:nuggets/${material}`, `#forge:ingots/${material}`);
	});
	
	addPacking("avaritia:neutronium_nugget", "avaritia:neutronium_ingot");
});