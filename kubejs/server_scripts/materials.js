ServerEvents.recipes((event) => {
    // Creates a proper json item from the given input item
    const createJsonItem = (item) => {
        if (item[0] == "#") {
            return {
                tag: item.slice(1, item.length),
            };
        } else {
            return {
                item: item,
            };
        }
    };

    // Creates an arc furnace recipe
    // Provide base, additives, and output with strings instead of json items
    const createArcFurnaceRecipe = (base, base_count, additives, output, output_count, energy, time) => {
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: additives.map(createJsonItem),
            energy: energy,
            input: { base_ingredient: createJsonItem(base), count: base_count },
            results: [
                {
                    base_ingredient: createJsonItem(output),
                    count: output_count,
                },
            ],
            time: time,
        });
    };

    // Red alloy
    event.recipes.createFilling("kubejs:red_alloy_ingot", ["#forge:ingots/copper", Fluid.of("thermal:redstone", 400)]);
    event.recipes.thermal
        .smelter("2x kubejs:red_alloy_ingot", ["#forge:ingots/copper", "4x minecraft:redstone"])
        .energy(4800);

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 200,
            fluid: "thermal:redstone",
        },
        item_input: {
            tag: "forge:ingots/copper",
        },
        item_output: {
            count: 1,
            item: "kubejs:red_alloy_ingot",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 273,
        },
    });

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 300,
            tag: "forge:redstone",
        },
        inputs: [
            {
                tag: "forge:ingots/copper",
            },
        ],
        results: [
            {
                item: "kubejs:red_alloy_ingot",
            },
        ],
    });

    // Blue alloy
    event.recipes.createFilling("kubejs:blue_alloy_ingot", [
        "#forge:ingots/tin",
        Fluid.of("kubejs:molten_electrotine", 400),
    ]);
    event.recipes.thermal
        .smelter("2x kubejs:blue_alloy_ingot", ["#forge:ingots/tin", "4x kubejs:electrotine"])
        .energy(4800);

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 200,
            fluid: "kubejs:molten_electrotine",
        },
        item_input: {
            tag: "forge:ingots/tin",
        },
        item_output: {
            count: 1,
            item: "kubejs:blue_alloy_ingot",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 273,
        },
    });

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 300,
            tag: "forge:molten_electrotine",
        },
        inputs: [
            {
                tag: "forge:ingots/tin",
            },
        ],
        results: [
            {
                item: "kubejs:blue_alloy_ingot",
            },
        ],
    });

    // Pulsating alloy
    event.recipes.thermal
        .bottler("kubejs:pulsating_alloy_ingot", ["#forge:ingots/silver", Fluid.of("thermal:ender", 250)])
        .energy(4800);

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 250,
            fluid: "thermal:ender",
        },
        item_input: {
            tag: "forge:ingots/silver",
        },
        item_output: {
            count: 1,
            item: "kubejs:pulsating_alloy_ingot",
        },
        pressure: 2.0,
        temperature: {
            max_temp: 173,
        },
    });

    // Electrotine
    event.custom({
        type: "createaddition:charging",
        input: {
            item: "thermal:lapis_dust",
        },
        result: {
            item: "kubejs:electrotine",
            count: 1,
        },
        energy: 5000,
    });

    event.recipes.powah.energizing(["thermal:lapis_dust"], "kubejs:electrotine", 5000);

    // Energetic blend
    event.recipes.createMixing("2x kubejs:energetic_blend", [
        "kubejs:electrotine",
        "minecraft:redstone",
        "minecraft:glowstone_dust",
        Fluid.of("immersiveengineering:redstone_acid", 250),
    ]);

    event.recipes.powah.energizing(
        ["minecraft:redstone", "minecraft:glowstone_dust", "kubejs:electrotine"],
        "2x kubejs:energetic_blend",
        20000
    );

    // Energetic alloy
    event.recipes
        .createMixing("kubejs:energetic_alloy_ingot", ["#forge:ingots/electrum", "2x kubejs:energetic_blend"])
        .heated();
    event.recipes.thermal
        .smelter("kubejs:energetic_alloy_ingot", ["#forge:ingots/electrum", "2x kubejs:energetic_blend"])
        .energy(6400);

    // Vibrant alloy
    createArcFurnaceRecipe(
        "#forge:ingots/energetic_alloy",
        1,
        ["kubejs:vibrating_powder"],
        "#forge:ingots/vibrant_alloy",
        1,
        102400,
        100
    );

    event.recipes.thermal
        .smelter("kubejs:vibrant_alloy_ingot", ["#forge:ingots/energetic_alloy", "kubejs:vibrating_powder"])
        .energy(9600);

    // Vibrating powder
    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 250,
            tag: "forge:ender",
        },
        inputs: [
            {
                item: "kubejs:amethyst_dust",
            },
        ],
        results: [
            {
                item: "kubejs:vibrating_powder",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 250,
            fluid: "thermal:ender",
        },
        item_input: {
            tag: "forge:dusts/amethyst",
        },
        item_output: {
            count: 1,
            item: "kubejs:vibrating_powder",
        },
        pressure: 2.0,
        temperature: {
            max_temp: 173,
        },
    });

    event.recipes.thermal
        .bottler("kubejs:vibrating_powder", ["#forge:dusts/amethyst", Fluid.of("thermal:ender", 250)])
        .energy(4800);

    // Remove rose gold from arc furnace recipes
    event.remove({ id: "immersiveengineering:arcfurnace/alloy_rose_gold" });
    event.remove({ id: "immersiveengineering:arcfurnace/dust_rose_gold" });

    // Rose gold arc furnace
    createArcFurnaceRecipe("#forge:ingots/copper", 1, ["#forge:ingots/gold"], "thermal:rose_gold_ingot", 2, 51200, 100);

    // Replace rose gold with thermal rose gold
    event.replaceOutput({}, "tconstruct:rose_gold_ingot", "thermal:rose_gold_ingot");
    event.replaceOutput({}, "tconstruct:rose_gold_nugget", "thermal:rose_gold_nugget");
    event.replaceOutput({}, "tconstruct:rose_gold_block", "thermal:rose_gold_block");

    // Hepatizon recipe
    event.remove({
        output: "tconstruct:hepatizon_ingot",
        type: "create:mixing",
    });
    event.remove({
        output: "tconstruct:hepatizon_ingot",
        type: "thermal:smelter",
    });

    event.recipes
        .createMixing("2x tconstruct:hepatizon_ingot", [
            "2x #forge:ingots/amethyst_bronze",
            "#forge:ingots/cobalt",
            "2x create:polished_rose_quartz",
        ])
        .superheated();
    event.recipes.thermal
        .smelter("2x tconstruct:hepatizon_ingot", [
            "2x #forge:ingots/amethyst_bronze",
            "#forge:ingots/cobalt",
            "2x create:polished_rose_quartz",
        ])
        .energy(16000);

    // Queen's slime recipe
    event.remove({
        output: "tconstruct:queens_slime_ingot",
        type: "create:mixing",
    });
    event.remove({
        output: "tconstruct:queens_slime_ingot",
        type: "thermal:smelter",
    });

    event.recipes
        .createMixing("2x tconstruct:queens_slime_ingot", [
            "#forge:ingots/cobalt",
            "#forge:ingots/rose_gold",
            Fluid.of("tconstruct:earth_slime", 250),
        ])
        .superheated();
    event.recipes.thermal
        .smelter("2x tconstruct:queens_slime_ingot", [
            "#forge:ingots/cobalt",
            "#forge:ingots/rose_gold",
            "minecraft:slime_ball",
        ])
        .energy(16000);

    createArcFurnaceRecipe(
        "#forge:ingots/cobalt",
        1,
        ["#forge:ingots/rose_gold", "minecraft:slime_ball"],
        "#forge:ingots/queens_slime",
        2,
        51200,
        100
    );

    // Cinderslime
    event.recipes
        .createMixing("2x tconstruct:cinderslime_ingot", [
            "tconstruct:scorched_brick",
            "#forge:ingots/ardite",
            Fluid.of("tconstruct:ichor", 250),
        ])
        .superheated();

    event.recipes.thermal
        .smelter("2x tconstruct:cinderslime_ingot", [
            "tconstruct:scorched_brick",
            "#forge:ingots/ardite",
            "tconstruct:ichor_slime_ball",
        ])
        .energy(16000);

    createArcFurnaceRecipe(
        "tconstruct:scorched_brick",
        1,
        ["#forge:ingots/ardite", "tconstruct:ichor_slime_ball"],
        "#forge:ingots/cinderslime",
        2,
        51200,
        100
    );

    // Slimesteel recipes
    event.remove({
        output: "tconstruct:slimesteel_ingot",
        type: "create:mixing",
    });
    event.remove({
        output: "tconstruct:slimesteel_ingot",
        type: "thermal:smelter",
    });

    event.recipes
        .createMixing("2x tconstruct:slimesteel_ingot", [
            "#forge:ingots/steel",
            "tconstruct:seared_brick",
            Fluid.of("tconstruct:sky_slime", 250),
        ])
        .heated();
    event.recipes.thermal
        .smelter("2x tconstruct:slimesteel_ingot", [
            "#forge:ingots/steel",
            "tconstruct:seared_brick",
            "tconstruct:sky_slime_ball",
        ])
        .energy(9600);

    createArcFurnaceRecipe(
        "#forge:ingots/steel",
        1,
        ["tconstruct:seared_brick", "#forge:slimeball/sky"],
        "#forge:ingots/slimesteel",
        2,
        51200,
        100
    );

    // New manyullyn recipe
    event.remove({
        output: "tconstruct:manyullyn_ingot",
        type: "create:mixing",
    });

    event.remove({
        output: "tconstruct:manyullyn_ingot",
        type: "thermal:smelter",
    });

    event.recipes
        .createMixing("tconstruct:manyullyn_ingot", ["#forge:ingots/cobalt", "#forge:ingots/ardite"])
        .superheated();

    event.recipes.thermal
        .smelter("tconstruct:manyullyn_ingot", ["#forge:ingots/cobalt", "#forge:ingots/ardite"])
        .energy(9600);

    createArcFurnaceRecipe(
        "#forge:ingots/cobalt",
        1,
        ["#forge:ingots/ardite"],
        "#forge:ingots/manyullyn",
        1,
        51200,
        100
    );

    // Netherite recipe
    createArcFurnaceRecipe(
        "#forge:ingots/manyullyn",
        1,
        [
            "#forge:ingots/netherite_scrap",
            "#forge:ingots/netherite_scrap",
            "#forge:ingots/netherite_scrap",
            "#forge:ingots/netherite_scrap",
        ],
        "#forge:ingots/netherite",
        1,
        102400,
        100
    );

    event.recipes.thermal
        .smelter("minecraft:netherite_ingot", ["#forge:ingots/manyullyn", "4x #forge:ingots/netherite_scrap"])
        .energy(24000);

    event.remove({
        output: "minecraft:netherite_ingot",
        input: "minecraft:netherite_scrap",
    });
    event.remove({
        output: "#forge:dusts/netherite",
        input: "minecraft:netherite_scrap",
    });

    // Knightslime
    event.recipes.thermal
        .smelter("2x tconstruct:knightslime_ingot", [
            "#forge:ingots/cinderslime",
            "#forge:ingots/slimesteel",
            "tconstruct:ender_slime_ball",
        ])
        .energy(32000);

    createArcFurnaceRecipe(
        "#forge:slimeball/ender",
        1,
        ["#forge:ingots/cinderslime", "#forge:ingots/slimesteel"],
        "#forge:ingots/knightslime",
        2,
        102400,
        100
    );

    // Amethyst bronze
    createArcFurnaceRecipe(
        "#forge:ingots/copper",
        1,
        ["#forge:gems/amethyst"],
        "#forge:ingots/amethyst_bronze",
        1,
        51200,
        100
    );

    // Enderium
    event.remove({
        output: "thermal:enderium_ingot",
        input: "thermal:diamond_dust",
        type: "thermal:smelter",
    });

    // Lumium
    event.remove({
        output: "thermal:lumium_ingot",
        input: "#forge:dusts/glowstone",
        type: "thermal:smelter",
    });

    // Signalum
    event.remove({
        output: "thermal:signalum_ingot",
        input: "#forge:dusts/redstone",
        type: "thermal:smelter",
    });

    // Black quartz
    createArcFurnaceRecipe(
        "#forge:gems/quartz",
        8,
        ["#forge:dusts/hop_graphite"],
        "#forge:gems/black_quartz",
        8,
        51200,
        100
    );

    event.recipes.thermal
        .smelter("8x #forge:gems/black_quartz", ["8x #forge:gems/quartz", "#forge:dusts/hop_graphite"])
        .energy(12800);

    // HOP Graphite
    event.recipes.mekanism.enriching("#forge:dusts/hop_graphite", "4x #forge:dusts/coal_coke");

    // Electrical steel
    createArcFurnaceRecipe(
        "#forge:ingots/steel",
        1,
        ["#forge:silicon"],
        "#forge:ingots/electrical_steel",
        1,
        51200,
        100
    );

    event.recipes.thermal
        .smelter("#forge:ingots/electrical_steel", ["#forge:ingots/steel", "#forge:silicon"])
        .energy(9600);

    // Silicon
    event.smelting("ae2:silicon", "#forge:dusts/quartz");
    event.blasting("ae2:silicon", "#forge:dusts/quartz");

    // Redstone alloy
    createArcFurnaceRecipe(
        "#forge:ingots/red_alloy",
        1,
        ["#forge:silicon", "#forge:dusts/coal_coke"],
        "#forge:ingots/redstone_alloy",
        1,
        51200,
        100
    );

    createArcFurnaceRecipe(
        "#forge:ingots/red_alloy",
        1,
        ["#forge:silicon", "#forge:dusts/carbon"],
        "#forge:ingots/redstone_alloy",
        1,
        51200,
        100
    );

    event.recipes.thermal
        .smelter("#forge:ingots/redstone_alloy", [
            "#forge:ingots/red_alloy",
            "#forge:silicon",
            "#forge:dusts/coal_coke",
        ])
        .energy(9600);

    event.recipes.thermal
        .smelter("#forge:ingots/redstone_alloy", ["#forge:ingots/red_alloy", "#forge:silicon", "#forge:dusts/carbon"])
        .energy(9600);

    // Purple alloy
    createArcFurnaceRecipe(
        "#forge:ingots/manyullyn",
        1,
        ["#forge:ingots/red_alloy", "#forge:ingots/blue_alloy"],
        "#forge:ingots/purple_alloy",
        2,
        51200,
        100
    );

    event.recipes.thermal
        .smelter("2x #forge:ingots/purple_alloy", [
            "#forge:ingots/red_alloy",
            "#forge:ingots/blue_alloy",
            "#forge:ingots/manyullyn",
        ])
        .energy(14400);

    // Pulsating crystal
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 180,
            fluid: "kubejs:molten_pulsating_alloy",
        },
        item_input: {
            tag: "forge:gems/diamond",
        },
        item_output: {
            count: 1,
            item: "kubejs:pulsating_crystal",
        },
        pressure: 4.0,
        temperature: {
            min_temp: 573,
        },
    });

    event.recipes.thermal
        .bottler("kubejs:pulsating_crystal", ["#forge:gems/diamond", Fluid.of("kubejs:molten_pulsating_alloy", 180)])
        .energy(12800);

    // Vibrant crystal
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 180,
            fluid: "kubejs:molten_vibrant_alloy",
        },
        item_input: {
            tag: "forge:gems/emerald",
        },
        item_output: {
            count: 1,
            item: "kubejs:vibrant_crystal",
        },
        pressure: 4.0,
        temperature: {
            min_temp: 573,
        },
    });

    event.recipes.thermal
        .bottler("kubejs:vibrant_crystal", ["#forge:gems/emerald", Fluid.of("kubejs:molten_vibrant_alloy", 180)])
        .energy(12800);

    // Hardened glass
    event.remove({ output: "thermal:obsidian_glass" });

    event.recipes.thermal
        .smelter("2x thermal:obsidian_glass", [
            "immersiveengineering:insulating_glass",
            "minecraft:obsidian",
            "#forge:gems/quartz",
        ])
        .energy(4800);

    createArcFurnaceRecipe(
        "minecraft:obsidian",
        1,
        ["immersiveengineering:insulating_glass", "#forge:gems/quartz"],
        "thermal:obsidian_glass",
        2,
        51200,
        100
    );

    // Glowing brass
    event.recipes.create.filling("kubejs:glowing_brass_ingot", [
        "create:brass_ingot",
        Fluid.of("thermal:glowstone", 250),
    ]);

    event.recipes.thermal
        .smelter("2x kubejs:glowing_brass_ingot", ["#forge:ingots/brass", "minecraft:glowstone_dust"])
        .energy(4800);

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 125,
            fluid: "thermal:glowstone",
        },
        item_input: {
            tag: "forge:ingots/brass",
        },
        item_output: {
            count: 1,
            item: "kubejs:glowing_brass_ingot",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 273,
        },
    });

    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 200,
            tag: "forge:glowstone",
        },
        inputs: [
            {
                tag: "forge:ingots/brass",
            },
        ],
        results: [
            {
                item: "kubejs:glowing_brass_ingot",
            },
        ],
    });

    // Steel with carbon dust
    createArcFurnaceRecipe("minecraft:iron_ingot", 1, ["kubejs:carbon_dust"], "thermal:steel_ingot", 1, 102400, 200);

    event.recipes.thermal.smelter("#forge:ingots/steel", ["minecraft:iron_ingot", "kubejs:carbon_dust"]).energy(4800);

    // Carbon dust with mekanism
    event.recipes.mekanismEnriching("mekanism:enriched_carbon", "kubejs:carbon_dust");

    event.custom({
        type: "mekanism:infusion_conversion",
        input: {
            ingredient: [
                {
                    item: "kubejs:carbon_dust",
                },
            ],
        },
        output: {
            amount: 10,
            infuse_type: "mekanism:carbon",
        },
    });
});
