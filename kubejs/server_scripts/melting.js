ServerEvents.recipes((event) => {
    // Adds an ingot casting recipe in the blast chiller
    function chillerIngotCasting(item, fluid, amount, energy) {
        energy = energy === undefined ? 4800 : energy;

        event.recipes.thermal.chiller(item, [Fluid.of(fluid, amount), "tconstruct:ingot_cast"]).energy(energy);
    }
    
    function chillerGemCasting(item, fluid, amount, energy) {
        energy = energy === undefined ? 4800 : energy;

        event.recipes.thermal.chiller(item, [Fluid.of(fluid, amount), "tconstruct:gem_cast"]).energy(energy);
    }

    function chillerBlockCasting(item, fluid, amount, energy) {
        energy = energy === undefined ? 4800 * 9 : energy;

        event.recipes.thermal.chiller(item, Fluid.of(fluid, amount)).energy(energy);
    }

    function crucibleMelting(item, fluid, fluidAmount, energy) {
        energy = energy === undefined ? 8000 : energy;

        event.recipes.thermal.crucible(Fluid.of(fluid, fluidAmount), item).energy(energy);
    }

    // Remove molten slime + amethyst
    event.remove({ output: "minecraft:slime_ball", type: "create:compacting" });
    event.remove({ output: Fluid.of("estrogen:molten_amethyst", 250) });

    // Solidify molten plastic
    event.recipes.thermal.chiller("pneumaticcraft:plastic", Fluid.of("pneumaticcraft:plastic", 500)).energy(2400);

    // Molten clay
    crucibleMelting("minecraft:clay_ball", "tconstruct:molten_clay", 250, 2000);
    crucibleMelting("minecraft:clay", "tconstruct:molten_clay", 1000, 8000);
    crucibleMelting("#minecraft:decorated_pot_ingredients", "tconstruct:molten_clay", 250, 2000);
    crucibleMelting("minecraft:bricks", "tconstruct:molten_clay", 1000, 8000);
    crucibleMelting("#minecraft:terracotta", "tconstruct:molten_clay", 1000, 8000);
    chillerIngotCasting("minecraft:brick", "tconstruct:molten_clay", 250);
    chillerBlockCasting("minecraft:terracotta", "tconstruct:molten_clay", 1000, 8000);

    // Molten glass
    crucibleMelting("#forge:glass/silica", "tconstruct:molten_glass", 1000, 2000);
    crucibleMelting("minecraft:glass_bottle", "tconstruct:molten_glass", 1000, 2000);
    crucibleMelting("#forge:glass_panes/silica", "tconstruct:molten_glass", 250, 1000);
    crucibleMelting("#minecraft:smelts_to_glass", "tconstruct:molten_glass", 1000, 4000);
    crucibleMelting("#tconstruct:casts/single_use/blank", "tconstruct:molten_glass", 250, 2000);
    chillerBlockCasting("tconstruct:clear_glass", "tconstruct:molten_glass", 1000, 4000);

    // Molten obsidian (can't melt obsidian bc it turns into lava)
    chillerBlockCasting("minecraft:obsidian", "tconstruct:molten_obsidian", 1000, 8000);

    // Molten emerald
    crucibleMelting("minecraft:emerald", "tconstruct:molten_emerald", 100, 4800);
    crucibleMelting("#forge:storage_blocks/emerald", "tconstruct:molten_emerald", 900, 4800 * 9);
    chillerGemCasting("minecraft:emerald", "tconstruct:molten_emerald", 100, 4800);
    chillerBlockCasting("minecraft:emerald_block", "tconstruct:molten_emerald", 900, 4800 * 9);

    // Molten quartz
    crucibleMelting("minecraft:quartz", "tconstruct:molten_quartz", 100, 4800);
    crucibleMelting("#forge:storage_blocks/quartz", "tconstruct:molten_quartz", 400, 4800 * 4);
    chillerGemCasting("minecraft:quartz", "tconstruct:molten_quartz", 100, 4800);
    chillerBlockCasting("minecraft:quartz_block", "tconstruct:molten_quartz", 400, 4800 * 4);

    // Molten amethyst
    crucibleMelting("minecraft:amethyst_shard", "tconstruct:molten_amethyst", 100, 4800);
    crucibleMelting("#forge:storage_blocks/amethyst", "tconstruct:molten_amethyst", 400, 4800 * 4);
    chillerGemCasting("minecraft:amethyst_shard", "tconstruct:molten_amethyst", 100, 4800);
    chillerBlockCasting("minecraft:amethyst_block", "tconstruct:molten_amethyst", 400, 4800 * 4);

    // Molten diamond
    crucibleMelting("minecraft:diamond", "tconstruct:molten_diamond", 100, 4800);
    crucibleMelting("#forge:storage_blocks/diamond", "tconstruct:molten_diamond", 900, 4800 * 9);
    chillerGemCasting("minecraft:diamond", "tconstruct:molten_diamond", 100, 4800);
    chillerBlockCasting("minecraft:diamond_block", "tconstruct:molten_diamond", 900, 4800 * 9);

    // Molten debris
    crucibleMelting("minecraft:netherite_scrap", "tconstruct:molten_debris", 90, 4800);
    crucibleMelting("tconstruct:debris_nugget", "tconstruct:molten_debris", 10, 600);

    // Molten iron
    crucibleMelting("#forge:ingots/iron", "tconstruct:molten_iron", 90, 4800);
    crucibleMelting("#forge:nuggets/iron", "tconstruct:molten_iron", 10, 600);
    crucibleMelting("#forge:storage_blocks/iron", "tconstruct:molten_iron", 810, 4800 * 9);
    crucibleMelting("#forge:coins/iron", "tconstruct:molten_iron", 30, 1600);
    crucibleMelting("#forge:gears/iron", "tconstruct:molten_iron", 360, 4800 * 4);
    crucibleMelting("#forge:plates/iron", "tconstruct:molten_iron", 90, 4800);
    crucibleMelting("#forge:rods/iron", "tconstruct:molten_iron", 45, 2400);
    crucibleMelting("#forge:wires/iron", "tconstruct:molten_iron", 45, 2400);
    crucibleMelting("#forge:sheetmetals/iron", "tconstruct:molten_iron", 90, 4800);
    chillerBlockCasting("minecraft:iron_block", "tconstruct:molten_iron", 810, 4800 * 9);

    // Molten gold
    crucibleMelting("#forge:ingots/gold", "tconstruct:molten_gold", 90, 4800);
    crucibleMelting("#forge:nuggets/gold", "tconstruct:molten_gold", 10, 600);
    crucibleMelting("#forge:storage_blocks/gold", "tconstruct:molten_gold", 810, 4800 * 9);
    crucibleMelting("#forge:coins/gold", "tconstruct:molten_gold", 30, 1600);
    crucibleMelting("#forge:gears/gold", "tconstruct:molten_gold", 360, 4800 * 4);
    crucibleMelting("#forge:plates/gold", "tconstruct:molten_gold", 90, 4800);
    crucibleMelting("#forge:rods/gold", "tconstruct:molten_gold", 45, 2400);
    crucibleMelting("#forge:wires/gold", "tconstruct:molten_gold", 45, 2400);
    crucibleMelting("#forge:sheetmetals/gold", "tconstruct:molten_gold", 90, 4800);
    chillerBlockCasting("minecraft:gold_block", "tconstruct:molten_gold", 810, 4800 * 9);

    // Molten copper
    crucibleMelting("#forge:ingots/copper", "tconstruct:molten_copper", 90, 4800);
    crucibleMelting("#forge:nuggets/copper", "tconstruct:molten_copper", 10, 600);
    crucibleMelting("#forge:storage_blocks/copper", "tconstruct:molten_copper", 810, 4800 * 9);
    crucibleMelting("#forge:coins/copper", "tconstruct:molten_copper", 30, 1600);
    crucibleMelting("#forge:gears/copper", "tconstruct:molten_copper", 360, 4800 * 4);
    crucibleMelting("#forge:plates/copper", "tconstruct:molten_copper", 90, 4800);
    crucibleMelting("#forge:rods/copper", "tconstruct:molten_copper", 45, 2400);
    crucibleMelting("#forge:wires/copper", "tconstruct:molten_copper", 45, 2400);
    crucibleMelting("#forge:sheetmetals/copper", "tconstruct:molten_copper", 90, 4800);
    chillerBlockCasting("minecraft:copper_block", "tconstruct:molten_copper", 810, 4800 * 9);

    // Molten cobalt
    crucibleMelting("#forge:ingots/cobalt", "tconstruct:molten_cobalt", 90, 4800);
    crucibleMelting("#forge:nuggets/cobalt", "tconstruct:molten_cobalt", 10, 600);
    crucibleMelting("#forge:storage_blocks/cobalt", "tconstruct:molten_cobalt", 810, 4800 * 9);
    crucibleMelting("#forge:gears/cobalt", "tconstruct:molten_cobalt", 360, 4800 * 4);
    crucibleMelting("#forge:plates/cobalt", "tconstruct:molten_cobalt", 90, 4800);
    chillerBlockCasting("tconstruct:cobalt_block", "tconstruct:molten_cobalt", 810, 4800 * 9);
});