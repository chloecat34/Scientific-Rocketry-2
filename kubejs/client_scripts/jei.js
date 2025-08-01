JEIEvents.hideItems((event) => {
    const itemsToRemove = [
        "ad_astra:compressor",
        "ad_astra:etrionic_blast_furnace",
        "thermal:lapis_gear",
        "thermal:diamond_gear",
        "thermal:emerald_gear",
        "thermal:quartz_gear",
        "thermal:ruby_gear",
        "thermal:sapphire_gear",
        "tconstruct:crafting_station",
        "integrateddynamics:squeezer",
        "integrateddynamics:drying_basin",
        "integrateddynamics:mechanical_squeezer",
        "integrateddynamics:mechanical_drying_basin",
        "immersiveengineering:alloybrick",
        "immersiveengineering:slab_alloybrick",
        "ae2:facade",
        "tconstruct:rose_gold_ingot",
        "tconstruct:rose_gold_nugget",
        "tconstruct:rose_gold_block",
        "industrialforegoing:fluid_sieving_machine",
        "industrialforegoing:fermentation_station",
        "industrialforegoing:washing_factory",
        "mekanism:dust_quartz",
        "ae2:ender_dust",
        "tconstruct:foundry_controller",
        "tconstruct:scorched_drain",
        "tconstruct:scorched_duct",
        "tconstruct:scorched_chute",
        "tconstruct:scorched_fuel_tank",
        "tconstruct:scorched_fuel_gauge",
        "tconstruct:scorched_table",
        "tconstruct:scorched_basin",
        "tconstruct:scorched_alloyer",
        "create:crushed_raw_iron",
        "create:crushed_raw_gold",
        "create:crushed_raw_copper",
        "create:crushed_raw_zinc",
        "create:crushed_raw_osmium",
        "create:crushed_raw_silver",
        "create:crushed_raw_tin",
        "create:crushed_raw_lead",
        "create:crushed_raw_aluminum",
        "create:crushed_raw_uranium",
        "create:crushed_raw_nickel",
        "thermal:sulfur_ore",
        "thermal:deepslate_sulfur_ore",
        "mekanism:chemical_washer",
        "mekanism:clean_copper",
        "mekanism:clean_iron",
        "mekanism:clean_gold",
        "mekanism:clean_lead",
        "mekanism:clean_osmium",
        "mekanism:clean_tin",
        "mekanism:clean_uranium",
        "mekanism:dirty_copper",
        "mekanism:dirty_iron",
        "mekanism:dirty_gold",
        "mekanism:dirty_lead",
        "mekanism:dirty_osmium",
        "mekanism:dirty_tin",
        "mekanism:dirty_uranium",
        "mekanism:crystal_copper",
        "mekanism:crystal_iron",
        "mekanism:crystal_gold",
        "mekanism:crystal_lead",
        "mekanism:crystal_osmium",
        "mekanism:crystal_tin",
        "mekanism:crystal_uranium",
        "mekanism:shard_copper",
        "mekanism:shard_iron",
        "mekanism:shard_gold",
        "mekanism:shard_lead",
        "mekanism:shard_osmium",
        "mekanism:shard_tin",
        "mekanism:shard_uranium",
        "mekanism:clump_copper",
        "mekanism:clump_iron",
        "mekanism:clump_gold",
        "mekanism:clump_lead",
        "mekanism:clump_osmium",
        "mekanism:clump_tin",
        "mekanism:clump_uranium",
        "mekanism:dirty_dust_copper",
        "mekanism:dirty_dust_iron",
        "mekanism:dirty_dust_gold",
        "mekanism:dirty_dust_lead",
        "mekanism:dirty_dust_osmium",
        "mekanism:dirty_dust_tin",
        "mekanism:dirty_dust_uranium",
        "mekanism:purification_chamber",
        "mekanism:basic_purifying_factory",
        "mekanism:advanced_purifying_factory",
        "mekanism:elite_purifying_factory",
        "mekanism:ultimate_purifying_factory",
        "estrogen:molten_slime_bucket",
        "estrogen:molten_amethyst_bucket",
        "thermal:chiller_ingot_cast",
        "thermal:chiller_rod_cast",
        "tconstruct:coin_cast",
        "tconstruct:coin_sand_cast",
        "tconstruct:coin_red_sand_cast",
        "tconstruct:gear_cast",
        "tconstruct:gear_sand_cast",
        "tconstruct:gear_red_sand_cast",
        "tconstruct:plate_cast",
        "tconstruct:plate_sand_cast",
        "tconstruct:plate_red_sand_cast",
        "tconstruct:wire_cast",
        "tconstruct:wire_sand_cast",
        "tconstruct:wire_red_sand_cast",
        "industrialforegoing:latex_processing_unit",
        "industrialforegoing:plastic",
        "industrialforegoing:dryrubber",
        "kubejs:incomplete_heat_mechanism",
        "actuallyadditions:crusher",
        "actuallyadditions:crusher_double",
        "kubejs:incomplete_electronic_component",
        "kubejs:incomplete_adv_electronic_component",
        "mekanism:sawdust",
        "immersiveengineering:dust_wood",
        "pneumaticcraft:air_compressor",
        "pneumaticcraft:advanced_air_compressor",
    ];

    itemsToRemove.forEach((item) => event.hide(item));
});

JEIEvents.hideFluids((event) => {
    ["estrogen:molten_slime", "estrogen:molten_amethyst", "tconstruct:molten_ender"].forEach((fluid) =>
        event.hide(fluid)
    );
});

JEIEvents.addItems((event) => {
    ["tconstruct:knightslime_nugget", "tconstruct:knightslime_ingot", "tconstruct:knightslime_block"].forEach((item) =>
        event.add(Item.of(item))
    );
});

JEIEvents.addFluids((event) => {
    ["tconstruct:molten_knightslime"].forEach((fluid) => event.add(fluid));
});
