ServerEvents.recipes((event) => {
    // Remove crusher
    event.remove({ output: "actuallyadditions:crusher" });
    event.remove({ output: "actuallyadditions:crusher_double" });

    event.remove({ type: "actuallyadditions:crushing" });

    // Remove some lens of the miner recipes
    for (let ore of [
        "powah/uraninite_ore",
        "mekanism/fluorite_ore",
        "stone_ores_uranium",
        "mekanism/osmium_ore",
        "stone_ores_nickel",
    ]) {
        event.remove({ id: `actuallyadditions:mininglens/${ore}` });
    }

    // Mining lens recipes
    let lensRecipes = [
        ["thermal:apatite_ore", "minecraft:stone", 200],
        ["thermal:deepslate_apatite_ore", "minecraft:deepslate", 200],
        ["thermal:niter_ore", "minecraft:stone", 500],
        ["thermal:deepslate_niter_ore", "minecraft:deepslate", 500],
        ["thermal:deepslate_tin_ore", "minecraft:deepslate", 2000],
        ["thermal:deepslate_lead_ore", "minecraft:deepslate", 2000],
        ["thermal:deepslate_silver_ore", "minecraft:deepslate", 1000],
        ["thermal:ruby_ore", "minecraft:stone", 25],
        ["thermal:deepslate_ruby_ore", "minecraft:deepslate", 25],
        ["kubejs:sulfur_ore", "minecraft:netherrack", 1000],
        ["create:deepslate_zinc_ore", "minecraft:deepslate", 1000],
        ["immersiveengineering:deepslate_ore_aluminum", "minecraft:deepslate", 250],
    ];

    for (let entry of lensRecipes) {
        let [target, stone, weight] = entry;

        event.custom({
            type: "actuallyadditions:mining_lens",
            ingredient: {
                item: stone,
            },
            output_type: "item",
            result: {
                item: target,
            },
            weight: weight,
        });
    }

    // Enori crystals
    event.remove({ id: "actuallyadditions:laser/crystalize_enori_crystal" });
    event.remove({
        id: "actuallyadditions:laser/crystalize_enori_crystal_block",
    });
    event.remove({ id: "actuallyadditions:laser/crystalize_void_crystal" });
    event.remove({
        id: "actuallyadditions:laser/crystalize_void_crystal_block",
    });
    event.remove({ id: "actuallyadditions:laser/crystalize_restonia_crystal" });
    event.remove({
        id: "actuallyadditions:laser/crystalize_restonia_crystal_block",
    });
    event.remove({ id: "actuallyadditions:laser/crystalize_palis_crystal" });
    event.remove({
        id: "actuallyadditions:laser/crystalize_palis_crystal_block",
    });
    event.remove({ id: "actuallyadditions:laser/crystalize_diamatine_crystal" });
    event.remove({
        id: "actuallyadditions:laser/crystalize_diamatine_crystal_block",
    });
    event.remove({ id: "actuallyadditions:laser/crystalize_emeradic_crystal" });
    event.remove({
        id: "actuallyadditions:laser/crystalize_emeradic_crystal_block",
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 800,
        ingredient: {
            tag: "forge:ingots/electrical_steel",
        },
        result: {
            item: "actuallyadditions:enori_crystal",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 8000,
        ingredient: {
            tag: "forge:storage_blocks/electrical_steel",
        },
        result: {
            item: "actuallyadditions:enori_crystal_block",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 600,
        ingredient: {
            tag: "forge:coal_coke",
        },
        result: {
            item: "actuallyadditions:void_crystal",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 6000,
        ingredient: {
            tag: "forge:storage_blocks/coal_coke",
        },
        result: {
            item: "actuallyadditions:void_crystal_block",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 400,
        ingredient: {
            tag: "forge:ingots/redstone_alloy",
        },
        result: {
            item: "actuallyadditions:restonia_crystal",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 4000,
        ingredient: {
            tag: "forge:storage_blocks/redstone_alloy",
        },
        result: {
            item: "actuallyadditions:restonia_crystal_block",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 400,
        ingredient: {
            tag: "forge:ingots/blue_alloy",
        },
        result: {
            item: "actuallyadditions:palis_crystal",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 4000,
        ingredient: {
            tag: "forge:storage_blocks/blue_alloy",
        },
        result: {
            item: "actuallyadditions:palis_crystal_block",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 1200,
        ingredient: {
            item: "kubejs:pulsating_crystal",
        },
        result: {
            item: "actuallyadditions:diamatine_crystal",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 1600,
        ingredient: {
            item: "kubejs:vibrant_crystal",
        },
        result: {
            item: "actuallyadditions:emeradic_crystal",
        },
    });

    // Extra electrotine recipe
    event.custom({
        type: "actuallyadditions:laser",
        energy: 5000,
        ingredient: {
            tag: "forge:dusts/lapis",
        },
        result: {
            item: "kubejs:electrotine",
        },
    });

    // Wood casing
    event.remove({ output: "actuallyadditions:wood_casing" });

    event.shaped("actuallyadditions:wood_casing", ["ABA", "BCB", "ABA"], {
        A: "#forge:treated_wood",
        B: "#forge:rods/treated_wood",
        C: "#forge:plates/iron",
    });

    // Iron casing
    event.remove({ output: "actuallyadditions:iron_casing" });

    event.shaped("actuallyadditions:iron_casing", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "#forge:rods/treated_wood",
        C: "#forge:gems/black_quartz",
        D: "#forge:gears/electrical_steel",
    });

    // Atomic reconstructor
    event.remove({ output: "actuallyadditions:atomic_reconstructor" });

    event.shaped("actuallyadditions:atomic_reconstructor", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/purple_alloy",
        B: "immersiveengineering:tesla_coil",
        C: "#forge:gems/ruby",
        D: "actuallyadditions:iron_casing",
        E: "createaddition:tesla_coil",
    });
});
