ServerEvents.recipes((event) => {
    // Multiservo press packing/unpacking
    function addPacking(ingot, block) {
        event.recipes.thermal.press(block, [`9x ${ingot}`, "thermal:press_packing_3x3_die"]).energy(400);
        event.recipes.thermal.press(`9x ${ingot}`, [block, "thermal:press_unpacking_die"]).energy(400);
    }

    addPacking("create:andesite_alloy", "create:andesite_alloy_block");
    addPacking("minecraft:bone_meal", "minecraft:bone_block");
    addPacking("integrateddynamics:crystalized_menril_chunk", "integrateddynamics:crystalized_menril_block");
    addPacking("integrateddynamics:crystalized_chorus_chunk", "integrateddynamics:crystalized_chorus_block");
})