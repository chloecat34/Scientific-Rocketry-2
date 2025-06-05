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


	// Remove rose gold from arc furnace recipes
	event.remove({ id: "immersiveengineering:arcfurnace/alloy_rose_gold" });
	event.remove({ id: "immersiveengineering:arcfurnace/dust_rose_gold" });

	// Replace rose gold with thermal rose gold
	event.replaceOutput({}, "tconstruct:rose_gold_ingot", "thermal:rose_gold_ingot");
	event.replaceOutput({}, "tconstruct:rose_gold_nugget", "thermal:rose_gold_nugget");
	event.replaceOutput({}, "tconstruct:rose_gold_block", "thermal:rose_gold_block");

    // Hepatizon recipe
    event.remove({ output: "tconstruct:hepatizon_ingot", type: "create:mixing" });
    event.remove({ output: "tconstruct:hepatizon_ingot", type: "thermal:smelter" });

    event.recipes.createMixing("2x tconstruct:hepatizon_ingot", ["2x #forge:ingots/amethyst_bronze", "#forge:ingots/cobalt", "2x create:polished_rose_quartz"]).superheated();
    event.recipes.thermal.smelter("2x tconstruct:hepatizon_ingot", ["2x #forge:ingots/amethyst_bronze", "#forge:ingots/cobalt", "2x create:polished_rose_quartz"]).energy(16000);

    // Queen's slime recipe
    event.remove({ output: "tconstruct:queens_slime_ingot", type: "create:mixing" });
    event.remove({ output: "tconstruct:queens_slime_ingot", type: "thermal:smelter" });

    event.recipes.createMixing("2x tconstruct:queens_slime_ingot", ["#forge:ingots/cobalt", "#forge:ingots/rose_gold", Fluid.of("kubejs:ichorslime", 250)]).superheated();
    event.recipes.thermal.smelter("2x tconstruct:queens_slime_ingot", ["#forge:ingots/cobalt", "#forge:ingots/rose_gold", "tconstruct:ichor_slime_ball"]).energy(16000);

    // Netherite recipe
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": "tconstruct:slimesteel_ingot"
            },

            {
                "item": "tconstruct:hepatizon_ingot"
            },

            {
                "item": "tconstruct:queens_slime_ingot"
            },

            {
                "item": "tconstruct:knightslime_ingot"
            }
        ],
        "energy": 102400,
        "input": { "base_ingredient": { "tag": "forge:ingots/manyullyn" }, "count": 1 },
        "results": [{ "base_ingredient": { "tag": "forge:ingots/netherite" }, "count": 1 }],
        "time": 100
    })

    event.remove({ output: "minecraft:netherite_ingot", input: "minecraft:netherite_scrap" });
    event.remove({ output: "#forge:dusts/netherite", input: "minecraft:netherite_scrap" });

    // Knightslime
    event.recipes.createMixing("2x tconstruct:knightslime_ingot", ["#forge:ingots/steel", "#forge:ingots/netherite_scrap", Fluid.of("tconstruct:ender_slime", 250)]).superheated();
    event.recipes.thermal.smelter("2x tconstruct:knightslime_ingot", ["#forge:ingots/steel", "#forge:ingots/netherite_scrap", "tconstruct:ender_slime_ball"]).energy(16000);

    // Enderium
    event.remove({ output: "thermal:enderium_ingot", input: "thermal:diamond_dust", type: "thermal:smelter" });

    // Lumium
    event.remove({ output: "thermal:lumium_ingot", input: "#forge:dusts/glowstone", type: "thermal:smelter" });

    // Signalum
    event.remove({ output: "thermal:signalum_ingot", input: "#forge:dusts/redstone", type: "thermal:smelter" });
});