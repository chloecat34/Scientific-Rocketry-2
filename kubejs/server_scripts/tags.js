ServerEvents.tags("item", (event) => {
    // Attempt to get rid of tinkers rose gold
    event.add("immersiveengineering:recycling/blacklist", "thermal:rose_gold_gear");
    event.add("immersiveengineering:recycling/blacklist", "thermal:rose_gold_plate");

    // Missing venus sandstone tag
    event.add("forge:sandstone/venus_sandstone", "ad_astra:venus_sandstone");

    // Cheese ore
    event.add("forge:ores/cheese", "ad_astra:moon_cheese_ore");

    // Nitrate
    event.add("forge:dusts/niter", "immersiveengineering:dust_saltpeter");
    event.add("forge:dusts/saltpeter", "thermal:niter_dust");

    // Ingot cast works in blast chiller
    event.add("thermal:crafting/casts", "tconstruct:ingot_cast");
    event.add("thermal:crafting/casts", "tconstruct:rod_cast");
    event.add("thermal:crafting/casts", "tconstruct:gem_cast");

    event.remove("forge:dusts/wood", "immersiveengineering:dust_wood");
    event.remove("forge:dusts/wood", "mekanism:sawdust");

    // Blocks to show
    [
        "tconstruct:knightslime_nugget",
        "tconstruct:knightslime_ingot",
        "tconstruct:knightslime_block",
        "tconstruct:soulsteel_nugget",
        "tconstruct:soulsteel_ingot",
        "tconstruct:soulsteel_block",
    ].forEach((item) => {
        event.remove("c:hidden_from_recipe_viewers", item);
    });

    // Thermal spores
    event.add("forge:mushrooms", "thermal:glowstone_mushroom_spores");
    event.add("forge:mushrooms", "thermal:gunpowder_mushroom_spores");
    event.add("forge:mushrooms", "thermal:redstone_mushroom_spores");
    event.add("forge:mushrooms", "thermal:slime_mushroom_spores");
});

ServerEvents.tags("fluid", (event) => {
    event.remove("c:hidden_from_recipe_viewers", "tconstruct:molten_knightslime");
    event.remove("c:hidden_from_recipe_viewers", "tconstruct:molten_soulsteel");

    event.add("forge:canola_oil", "actuallyadditions:canola_oil");
    event.add("forge:refined_canola_oil", "actuallyadditions:refined_canola_oil");
    event.add("forge:crystallized_oil", "actuallyadditions:crystallized_oil");
    event.add("forge:empowered_oil", "actuallyadditions:empowered_oil");
    event.add("forge:menril_resin", "integrateddynamics:menril_resin");
    event.add("forge:molten_electrotine", "kubejs:molten_electrotine");
    event.add("forge:blazing_blood", "tconstruct:blazing_blood");
    event.add("forge:molten_compressed_iron", "kubejs:molten_compressed_iron");
    event.add("forge:molten_andesite", "kubejs:molten_andesite");
    event.add("forge:nitric_acid", "kubejs:nitric_acid");
    event.add("forge:hydrochloric_acid", "kubejs:hydrochloric_acid");
    event.add("forge:hydrogen", "mekanism:hydrogen");
    event.add("forge:chlorine", "mekanism:chlorine");
    event.add("forge:hydrogen_chloride", "mekanism:hydrogen_chloride");
    event.add("forge:sulfur_trioxide", "mekanism:sulfur_trioxide");
    event.add("forge:molten_ardite", "kubejs:molten_ardite");
});
