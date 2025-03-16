ServerEvents.recipes((event) => {
    // Adds an ingot casting recipe in the blast chiller
    function chillerIngotCasting(item, fluid, amount, energy) {
        energy = energy === undefined ? 4800 : energy;

        event.recipes.thermal.chiller(item, [Fluid.of(fluid, amount), "tconstruct:ingot_cast"]).energy(energy);
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
    crucibleMelting("minecraft:brick_slab", "tconstruct:molten_clay", 500, 4000);
    crucibleMelting("minecraft:flower_pot", "tconstruct:molten_clay", 750, 6000);
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
});