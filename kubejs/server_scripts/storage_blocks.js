ServerEvents.recipes((event) => {
    // Multiservo press packing/unpacking
    function addPacking(ingot, block) {
        // Check if there is any 3x3 crafting recipe
        if (
            !(
                event.containsRecipe({
                    output: block,
                    input: ingot,
                    type: "minecraft:crafting_shapeless",
                }) ||
                event.containsRecipe({
                    output: block,
                    input: ingot,
                    type: "minecraft:crafting_shaped",
                })
            )
        ) {
            event.shapeless(block, [`9x ${ingot}`]);
            event.shapeless(`9x ${ingot}`, [block]);
        }

        event.recipes.thermal
            .press(block, [`9x ${ingot}`, "thermal:press_packing_3x3_die"])
            .energy(400);
        event.recipes.thermal
            .press(`9x ${ingot}`, [block, "thermal:press_unpacking_die"])
            .energy(400);
    }

    // 2x2 packing
    function addPacking2x2(ingot, block) {
        // Check if there is any 2x2 crafting recipe
        if (
            !(
                event.containsRecipe({
                    output: block,
                    type: "minecraft:crafting_shapeless",
                }) ||
                event.containsRecipe({
                    output: block,
                    type: "minecraft:crafting_shaped",
                })
            )
        ) {
            event.shapeless(block, [`4x ${ingot}`]);
            event.shapeless(`4x ${ingot}`, [block]);
        }

        event.recipes.thermal
            .press(block, [`4x ${ingot}`, "thermal:press_packing_2x2_die"])
            .energy(400);
        event.recipes.thermal
            .press(`4x ${ingot}`, [block, "thermal:press_unpacking_die"])
            .energy(400);
    }

    addPacking("create:andesite_alloy", "create:andesite_alloy_block");
    addPacking("minecraft:bone_meal", "minecraft:bone_block");
    addPacking(
        "integrateddynamics:crystalized_menril_chunk",
        "integrateddynamics:crystalized_menril_block"
    );
    addPacking(
        "integrateddynamics:crystalized_chorus_chunk",
        "integrateddynamics:crystalized_chorus_block"
    );
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
    addPacking("#forge:ingots/cinderslime", "#forge:storage_blocks/cinderslime");
    addPacking("#forge:nuggets/cinderslime", "#forge:ingots/cinderslime");
    addPacking("#forge:ingots/soulsteel", "#forge:storage_blocks/soulsteel");
    addPacking("#forge:nuggets/soulsteel", "#forge:ingots/soulsteel");
    addPacking(
        "#forge:raw_materials/ostrum",
        "#forge:storage_blocks/raw_ostrum"
    );
    addPacking("#forge:ingots/calorite", "#forge:storage_blocks/calorite");
    addPacking(
        "#forge:raw_materials/calorite",
        "#forge:storage_blocks/raw_calorite"
    );
    addPacking("minecraft:allium", "biomeswevegone:allium_petal_block");
    addPacking(
        "biomeswevegone:pink_allium",
        "biomeswevegone:pink_allium_petal_block"
    );
    addPacking(
        "biomeswevegone:white_allium",
        "biomeswevegone:white_allium_petal_block"
    );
    addPacking("biomeswevegone:rose", "biomeswevegone:rose_petal_block");
    addPacking("create:experience_nugget", "create:experience_block");
    addPacking2x2("tconstruct:cheese_ingot", "tconstruct:cheese_block");
    addPacking(
        "#forge:raw_materials/cobalt",
        "#forge:storage_blocks/raw_cobalt"
    );
    addPacking2x2(
        "tconstruct:earth_slime_crystal",
        "tconstruct:earth_slime_crystal_block"
    );
    addPacking2x2(
        "tconstruct:sky_slime_crystal",
        "tconstruct:sky_slime_crystal_block"
    );
    addPacking2x2(
        "tconstruct:ichor_slime_crystal",
        "tconstruct:ichor_slime_crystal_block"
    );
    addPacking2x2(
        "tconstruct:ender_slime_crystal",
        "tconstruct:ender_slime_crystal_block"
    );
    addPacking2x2(
        "#forge:gems/certus_quartz",
        "#forge:storage_blocks/certus_quartz"
    );
    addPacking2x2("#forge:gems/fluix", "ae2:fluix_block");
    addPacking("advanced_ae:quantum_alloy", "advanced_ae:quantum_alloy_block");
    addPacking(
        "createaddition:biomass_pellet",
        "createaddition:biomass_pellet_block"
    );

    [
        "desh",
        "ostrum",
        "calorite",
        "prismalium",
        "melodium",
        "stellarium",
    ].forEach((material) => {
        addPacking(`#forge:nuggets/${material}`, `#forge:ingots/${material}`);
    });

    addPacking("kubejs:platinum_nugget", "kubejs:platinum_ingot");
    addPacking("kubejs:platinum_ingot", "kubejs:platinum_block");
    addPacking("tconstruct:knightslime_nugget", "tconstruct:knightslime_ingot");
    addPacking("tconstruct:knightslime_ingot", "tconstruct:knightslime_block");
    addPacking("kubejs:red_alloy_nugget", "kubejs:red_alloy_ingot");
    addPacking("kubejs:red_alloy_ingot", "kubejs:red_alloy_block");
    addPacking("kubejs:energetic_alloy_nugget", "kubejs:energetic_alloy_ingot");
    addPacking("kubejs:energetic_alloy_ingot", "kubejs:energetic_alloy_block");
    addPacking("kubejs:vibrant_alloy_nugget", "kubejs:vibrant_alloy_ingot");
    addPacking("kubejs:vibrant_alloy_ingot", "kubejs:vibrant_alloy_block");
    addPacking(
        "kubejs:electrical_steel_nugget",
        "kubejs:electrical_steel_ingot"
    );
    addPacking(
        "kubejs:electrical_steel_ingot",
        "kubejs:electrical_steel_block"
    );
    addPacking("kubejs:redstone_alloy_nugget", "kubejs:redstone_alloy_ingot");
    addPacking("kubejs:redstone_alloy_ingot", "kubejs:redstone_alloy_block");
    addPacking("kubejs:blue_alloy_nugget", "kubejs:blue_alloy_ingot");
    addPacking("kubejs:blue_alloy_ingot", "kubejs:blue_alloy_block");
    addPacking("kubejs:purple_alloy_nugget", "kubejs:purple_alloy_ingot");
    addPacking("kubejs:purple_alloy_ingot", "kubejs:purple_alloy_block");
    addPacking("kubejs:pulsating_alloy_nugget", "kubejs:pulsating_alloy_ingot");
    addPacking("kubejs:pulsating_alloy_ingot", "kubejs:pulsating_alloy_block");
    addPacking("kubejs:electrotine", "kubejs:electrotine_block");
    addPacking("pneumaticcraft:ingot_iron_compressed", "pneumaticcraft:compressed_iron_block");
});
