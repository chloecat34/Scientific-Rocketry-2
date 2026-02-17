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
});

ServerEvents.tags("block", (event) => {
    // MBD2 tags
    ["mbd2:bronze_input_hatch", "mbd2:steel_input_hatch", "mbd2:aluminum_input_hatch"].forEach((block) => {
        event.add("forge:mbd_hatch", block);
        event.add("forge:mbd_fluid_hatch", block);
        event.add("forge:mbd_fluid_input_hatch", block);
    });

    ["mbd2:bronze_output_hatch", "mbd2:steel_output_hatch", "mbd2:aluminum_output_hatch"].forEach((block) => {
        event.add("forge:mbd_hatch", block);
        event.add("forge:mbd_fluid_hatch", block);
        event.add("forge:mbd_fluid_output_hatch", block);
    });

    ["mbd2:steel_energy_input_hatch", "mbd2:aluminum_energy_input_hatch"].forEach((block) => {
        event.add("forge:mbd_hatch", block);
        event.add("forge:mbd_energy_hatch", block);
        event.add("forge:mbd_energy_input_hatch", block);
    });

    ["mbd2:steel_energy_output_hatch", "mbd2:aluminum_energy_output_hatch"].forEach((block) => {
        event.add("forge:mbd_hatch", block);
        event.add("forge:mbd_energy_hatch", block);
        event.add("forge:mbd_energy_output_hatch", block);
    });

    ["mbd2:bronze_input_bus", "mbd2:steel_input_bus", "mbd2:aluminum_input_bus"].forEach((block) => {
        event.add("forge:mbd_hatch", block);
        event.add("forge:mbd_item_hatch", block);
        event.add("forge:mbd_item_input_hatch", block);
    });

    ["mbd2:bronze_output_bus", "mbd2:steel_output_bus", "mbd2:aluminum_output_bus"].forEach((block) => {
        event.add("forge:mbd_hatch", block);
        event.add("forge:mbd_item_hatch", block);
        event.add("forge:mbd_item_output_hatch", block);
    });
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
