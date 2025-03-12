ServerEvents.recipes((event) => {
    // Remove molten slime + amethyst
    event.remove({ output: "minecraft:slime_ball", type: "create:compacting" });
    event.remove({ output: Fluid.of("estrogen:molten_amethyst", 250) });
});