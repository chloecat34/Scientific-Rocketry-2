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

    // Remove molten slime + amethyst
    event.remove({ output: "minecraft:slime_ball", type: "create:compacting" });
    event.remove({ output: Fluid.of("estrogen:molten_amethyst", 250) });

    // Solidify molten plastic
    event.recipes.thermal.chiller("pneumaticcraft:plastic", Fluid.of("pneumaticcraft:plastic", 500)).energy(2400);

    // Molten clay
    event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_clay", 250), "minecraft:clay_ball").energy(2000);
    event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_clay", 1000), "minecraft:clay").energy(8000);
    event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_clay", 250), "#minecraft:decorated_pot_ingredients").energy(2000);
    event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_clay", 250), "minecraft:bricks").energy(8000);
    event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_clay", 500), "minecraft:brick_slab").energy(4000);
    event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_clay", 750), "minecraft:flower_pot").energy(6000);
    event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_clay", 1000), "#minecraft:terracotta").energy(8000);
    chillerIngotCasting("minecraft:brick", "tconstruct:molten_clay", 250);
    chillerBlockCasting("minecraft:terracotta", "tconstruct:molten_clay", 1000, 8000);
});