ServerEvents.recipes((event) => {
    // Thermal sawmill stick recipe
    event.recipes.thermal
        .sawmill(["6x minecraft:stick", Item.of("#forge:sawdust").withChance(0.25)], "#minecraft:planks")
        .energy(1000);

    // Treated sticks
    event.recipes.thermal.sawmill("4x immersiveengineering:stick_treated", "#forge:treated_wood").energy(1000);

    event.recipes.mekanism.sawing("#forge:treated_wood", "4x immersiveengineering:stick_treated");
});
