ServerEvents.recipes((event) => {
    event.recipes.createFilling("kubejs:red_alloy_ingot", ["#forge:ingots/copper", Fluid.of("thermal:redstone", 400)]);
    event.recipes.thermal.smelter("2x kubejs:red_alloy_ingot", ["#forge:ingots/copper", "4x minecraft:redstone"]).energy(4800);
});