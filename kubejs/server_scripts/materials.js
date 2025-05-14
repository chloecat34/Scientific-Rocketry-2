ServerEvents.recipes((event) => {
    // Red alloy
    event.recipes.createFilling("kubejs:red_alloy_ingot", ["#forge:ingots/copper", Fluid.of("thermal:redstone", 400)]);
    event.recipes.thermal.smelter("2x kubejs:red_alloy_ingot", ["#forge:ingots/copper", "4x minecraft:redstone"]).energy(4800);

    // Electrotine
    event.custom({
        type: "createaddition:charging",
        input: {
            item: "thermal:lapis_dust"
        },
        result: {
            item: "kubejs:electrotine",
            count: 1
        },
        energy: 5000
    });

    event.recipes.powah.energizing(["thermal:lapis_dust"], "kubejs:electrotine", 5000);

    // Energetic blend
    event.recipes.createMixing("2x kubejs:energetic_blend", ["kubejs:electrotine", "minecraft:redstone", "minecraft:glowstone_dust", Fluid.of("immersiveengineering:redstone_acid", 250)]);

    event.recipes.powah.energizing(["minecraft:redstone", "minecraft:glowstone_dust", "kubejs:electrotine"], "2x kubejs:energetic_blend", 20000);

    // Energetic alloy
    event.recipes.createMixing("kubejs:energetic_alloy_ingot", ["#forge:ingots/electrum", "2x kubejs:energetic_blend"]).heated();
    event.recipes.thermal.smelter("kubejs:energetic_alloy_ingot", ["#forge:ingots/electrum", "2x kubejs:energetic_blend"]).energy(6400);

    // Vibrant alloy
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": "minecraft:ender_eye"
            }
        ],
        "energy": 102400,
        "input": { "base_ingredient": { "tag": "forge:ingots/energetic_alloy" }, "count": 1 },
        "results": [{ "base_ingredient": { "tag": "forge:ingots/vibrant_alloy" }, "count": 1 }],
        "time": 100
    })

    event.recipes.thermal.smelter("kubejs:vibrant_alloy_ingot", ["#forge:ingots/energetic_alloy", "minecraft:ender_eye"]).energy(9600);
});