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
        ["kubejs:ardite_ore", "minecraft:netherrack", 50],
        ["kubejs:pyrolusite_ore", "minecraft:netherrack", 50],
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

    event.custom({
        type: "actuallyadditions:laser",
        energy: 1000,
        ingredient: {
            tag: "forge:ingots/energetic_alloy",
        },
        result: {
            item: "kubejs:glod_crystal",
        },
    });

    event.custom({
        type: "actuallyadditions:laser",
        energy: 10000,
        ingredient: {
            tag: "forge:storage_blocks/energetic_alloy",
        },
        result: {
            item: "kubejs:glod_crystal_block",
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
        A: "#forge:sheetmetals/aluminum",
        B: "kubejs:energetic_alloy_coil",
        C: "#forge:gems/black_quartz",
        D: "immersiveengineering:heavy_engineering",
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

    // Canola processing thermal support
    event.recipes.thermal
        .centrifuge(Fluid.of("actuallyadditions:canola_oil", 80), "actuallyadditions:canola")
        .energy(800);

    event.recipes.thermal
        .refinery([Fluid.of("actuallyadditions:refined_canola_oil", 80)], Fluid.of("actuallyadditions:canola_oil", 80))
        .energy(800);

    event.recipes.thermal
        .brewer(Fluid.of("actuallyadditions:crystallized_oil", 1000), [
            Fluid.of("actuallyadditions:refined_canola_oil", 1000),
            "actuallyadditions:crystallized_canola_seed",
        ])
        .energy(4000);

    event.recipes.thermal
        .brewer(Fluid.of("actuallyadditions:empowered_oil", 1000), [
            Fluid.of("actuallyadditions:crystallized_oil", 1000),
            "actuallyadditions:empowered_canola_seed",
        ])
        .energy(4000);

    event.recipes.thermal.compression_fuel(Fluid.of("actuallyadditions:canola_oil", 1000)).energy(80000);
    event.recipes.thermal.compression_fuel(Fluid.of("actuallyadditions:refined_canola_oil", 1000)).energy(200000);
    event.recipes.thermal.compression_fuel(Fluid.of("actuallyadditions:crystallized_oil", 1000)).energy(800000);
    event.recipes.thermal.compression_fuel(Fluid.of("actuallyadditions:empowered_oil", 1000)).energy(1600000);

    // Canola IE support
    event.custom({
        type: "immersiveengineering:squeezer",
        energy: 3200,
        fluid: {
            amount: 80,
            fluid: "actuallyadditions:canola_oil",
        },
        input: {
            item: "actuallyadditions:canola",
        },
    });

    event.custom({
        type: "immersiveengineering:refinery",
        energy: 120,
        input0: {
            amount: 8,
            tag: "forge:canola_oil",
        },
        result: {
            amount: 8,
            fluid: "actuallyadditions:refined_canola_oil",
        },
    });

    event.custom({
        type: "immersiveengineering:mixer",
        energy: 3200,
        fluid: {
            amount: 1000,
            tag: "forge:refined_canola_oil",
        },
        inputs: [
            {
                item: "actuallyadditions:crystallized_canola_seed",
            },
        ],
        result: {
            amount: 1000,
            fluid: "actuallyadditions:crystallized_oil",
        },
    });

    event.custom({
        type: "immersiveengineering:mixer",
        energy: 3200,
        fluid: {
            amount: 1000,
            tag: "forge:crystallized_oil",
        },
        inputs: [
            {
                item: "actuallyadditions:empowered_canola_seed",
            },
        ],
        result: {
            amount: 1000,
            fluid: "actuallyadditions:empowered_oil",
        },
    });

    // PNC support
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:refined_canola_oil",
        },
        item_input: {
            item: "actuallyadditions:crystallized_canola_seed",
        },
        fluid_output: {
            amount: 1000,
            fluid: "actuallyadditions:crystallized_oil",
        },
        pressure: 3.0,
        temperature: {
            min_temp: 373,
        },
    });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "actuallyadditions:crystallized_oil",
        },
        item_input: {
            item: "actuallyadditions:empowered_canola_seed",
        },
        fluid_output: {
            amount: 1000,
            fluid: "actuallyadditions:empowered_oil",
        },
        pressure: 4.0,
        temperature: {
            min_temp: 773,
        },
    });

    // Coils
    event.remove({ output: "actuallyadditions:basic_coil" });
    event.remove({ output: "actuallyadditions:advanced_coil" });

    event.shaped("actuallyadditions:basic_coil", ["ABC", "BDB", "CBA"], {
        A: "#forge:gems/black_quartz",
        B: "actuallyadditions:restonia_crystal",
        C: "kubejs:energetic_alloy_coil",
        D: "createaddition:capacitor",
    });

    event.shaped("actuallyadditions:advanced_coil", ["ABC", "BDB", "CBA"], {
        A: "actuallyadditions:diamatine_crystal",
        B: "actuallyadditions:palis_crystal",
        C: "kubejs:vibrant_alloy_coil",
        D: "actuallyadditions:basic_coil",
    });

    // Ring
    event.remove({ output: "actuallyadditions:ring" });

    event.shaped("actuallyadditions:ring", ["ABA", "BCB", "ABA"], {
        A: "actuallyadditions:enori_crystal",
        B: "kubejs:glod_crystal",
        C: "tconstruct:ichor_slime_crystal",
    });
});
