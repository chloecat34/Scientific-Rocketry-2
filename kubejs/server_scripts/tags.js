ServerEvents.tags("item", event => {
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
});