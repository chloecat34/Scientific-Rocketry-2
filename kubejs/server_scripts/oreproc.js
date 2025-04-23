ServerEvents.recipes((event) => {
    // Remove default ore recipes
    [
        "minecraft:raw_iron",
        "minecraft:raw_copper",
        "minecraft:raw_gold",
        "mekanism:raw_osmium",
        "powah:uraninite_raw",
        "thermal:raw_tin",
        "thermal:raw_lead",
        "thermal:raw_silver",
        "thermal:raw_nickel",
        "ad_astra:raw_desh",
        "ad_astra:raw_ostrum",
        "ad_astra:raw_calorite",
        "create:raw_zinc",
        "immersiveengineering:raw_aluminum",
        "immersiveengineering:raw_uranium",
        "tconstruct:raw_cobalt",
        "#forge:ores/coal",
        "#forge:ores/iron",
        "#forge:ores/copper",
        "#forge:ores/gold",
        "#forge:ores/redstone",
        "#forge:ores/emerald",
        "#forge:ores/lapis",
        "#forge:ores/diamond",
        "#forge:ores/quartz",
        "#forge:ores/osmium",
        "#forge:ores/fluorite",
        "#forge:ores/uraninite",
        "#forge:ores/desh",
        "#forge:ores/ice_shard",
        "#forge:ores/ostrum",
        "#forge:ores/calorite",
        "#forge:ores/zinc",
        "#forge:ores/dimensional_shard",
        "#forge:ores/cobalt",
        "#forge:ores/aluminum",
        "#forge:ores/uranium",
        "#forge:ores/apatite",
        "#forge:ores/cinnabar",
        "#forge:ores/niter",
        "#forge:ores/sulfur",
        "#forge:ores/tin",
        "#forge:ores/nickel",
        "#forge:ores/silver",
        "#forge:ores/lead",
        "#forge:ores/ruby",
        "#forge:ores/sapphire",
        "#forge:ores/netherite_scrap",
        "#forge:storage_blocks/raw_iron",
        "#forge:storage_blocks/raw_copper",
        "#forge:storage_blocks/raw_gold",
        "#forge:storage_blocks/raw_tin",
        "#forge:storage_blocks/raw_lead",
        "#forge:storage_blocks/raw_silver",
        "#forge:storage_blocks/raw_nickel",
        "#forge:storage_blocks/raw_osmium",
        "#forge:storage_blocks/raw_desh",
        "#forge:storage_blocks/raw_ostrum",
        "#forge:storage_blocks/raw_calorite",
        "#forge:storage_blocks/raw_zinc",
        "#forge:storage_blocks/raw_aluminum",
        "#forge:storage_blocks/raw_cobalt",
        "#forge:storage_blocks/raw_uranium",
        "ad_astra:moon_cheese_ore"
    ].forEach(rawOre => {
        event.remove({
            input: rawOre,
            not: [
                {
                    type: "minecraft:crafting_shaped"
                },

                {
                    type: "minecraft:crafting_shapeless"
                },

                {
                    type: "thermal:press"
                }
            ]
        })
    });

    // Remove crushed ores
    event.remove({ input: "#create:crushed_raw_materials" });
    event.remove({ output: "#create:crushed_raw_materials" });

    // Tinkers melting
    const addTinkersMelterRecipe = makeTinkersMeltingRecipe(event);
    const addCrucibleRecipe = (item, fluid, fluidAmount, energy) => {
        event.recipes.thermal.crucible(Fluid.of(fluid, fluidAmount), item).energy(energy);
    }

    const meltOre = (material, molten, time, temperature) => {
        addTinkersMelterRecipe(`forge:raw_materials/${material}`, molten, 90, time, temperature);
        addTinkersMelterRecipe(`forge:storage_blocks/raw_${material}`, molten, 810, time * 4, temperature);
        addTinkersMelterRecipe(`forge:ores/${material}`, molten, 180, time * 2, temperature);
        addCrucibleRecipe(`#forge:raw_materials/${material}`, molten, 90, 8000);
        addCrucibleRecipe(`#forge:storage_blocks/raw_${material}`, molten, 810, 72000);
        addCrucibleRecipe(`#forge:ores/${material}`, molten, 180, 8000);
    }

    // Add these ores to melting
    meltOre("iron", "tconstruct:molten_iron", 90, IRON_TEMPERATURE);
    meltOre("gold", "tconstruct:molten_gold", 85, GOLD_TEMPERATURE);
    meltOre("copper", "tconstruct:molten_copper", 75, COPPER_TEMPERATURE);
    meltOre("tin", "tconstruct:molten_tin", 59, TIN_TEMPERATURE);
    meltOre("lead", "tconstruct:molten_lead", 65, LEAD_TEMPERATURE);
    meltOre("silver", "tconstruct:molten_silver", 90, SILVER_TEMPERATURE);
    meltOre("zinc", "tconstruct:molten_zinc", 70, ZINC_TEMPERATURE);

    // Standard crushing recipes
    [
        ["#forge:raw_materials/iron", "#forge:ores/iron", "thermal:iron_dust", "thermal:nickel_dust", 1],
        ["#forge:raw_materials/gold", "#forge:ores/gold", "thermal:gold_dust", "thermal:copper_dust", 1],
        ["#forge:raw_materials/copper", "#forge:ores/copper", "thermal:copper_dust", "thermal:nickel_dust", 1],
        ["#forge:raw_materials/tin", "#forge:ores/tin", "thermal:tin_dust", "kubejs:zinc_dust", 1],
        ["#forge:raw_materials/silver", "#forge:ores/silver", "thermal:silver_dust", "thermal:lead_dust", 1],
        ["#forge:raw_materials/lead", "#forge:ores/lead", "thermal:lead_dust", "thermal:silver_dust", 1],
        ["#forge:raw_materials/zinc", "#forge:ores/zinc", "kubejs:zinc_dust", "thermal:tin_dust", 1],
        ["#forge:raw_materials/cobalt", "#forge:ores/cobalt", "kubejs:cobalt_dust", "thermal:lead_dust", 2],
        ["#forge:raw_materials/nickel", "#forge:ores/nickel", "thermal:nickel_dust", "kubejs:platinum_dust", 2],
        ["#forge:raw_materials/desh", "#forge:ores/desh", "kubejs:desh_dust", "thermal:copper_dust", 2],
        ["#forge:raw_materials/aluminum", "#forge:ores/aluminum", "immersiveengineering:dust_aluminum", "thermal:iron_dust", 3]
    ].forEach(entry => {
        const [rawOre, ore, dust, byproduct, tier] = entry;

        if (tier === 1) {
            event.recipes.createMilling([dust], rawOre);
            event.recipes.createMilling([Item.of(dust, 2)], ore);
        }

        if (tier <= 2) {
            event.recipes.createCrushing([dust, Item.of(dust).withChance(0.5)], rawOre);
            event.recipes.createCrushing([Item.of(dust, 3)], ore);
        }

        if (tier <= 3) {
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 3000,
                input: {
                    tag: rawOre.slice(1, rawOre.length)
                },
                secondaries: [{
                    chance: 0.75,
                    output: {
                        item: dust
                    }
                }, {
                    chance: 0.15,
                    output: {
                        item: byproduct
                    }
                }],
                result: {
                    item: dust,
                    count: 1
                }
            });

            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    tag: ore.slice(1, ore.length)
                },
                secondaries: [{
                    chance: 0.5,
                    output: {
                        item: dust
                    }
                }, {
                    chance: 0.3,
                    output: {
                        item: byproduct
                    }
                }],
                result: {
                    item: dust,
                    count: 3
                }
            });
        }

        event.recipes.thermal.pulverizer([Item.of(dust).withChance(2.0), Item.of(byproduct).withChance(0.25)], rawOre);
        event.recipes.thermal.pulverizer([Item.of(dust).withChance(4.0), Item.of(byproduct).withChance(0.5)], ore).energy(8000);
    });

    // Netherite scrap
    event.recipes.createCrushing([Item.of("minecraft:netherite_scrap", 2)], "minecraft:ancient_debris");

    event.custom({
        type: "immersiveengineering:crusher",
        energy: 3000,
        input: {
            item: "minecraft:ancient_debris"
        },
        secondaries: [{
            chance: 0.5,
            output: {
                item: "minecraft:netherite_scrap"
            }
        }, {
            chance: 0.25,
            output: {
                item: "kubejs:cobalt_dust"
            }
        }],
        result: {
            item: "minecraft:netherite_scrap",
            count: 2
        }
    });

    event.recipes.thermal.pulverizer([Item.of("minecraft:netherite_scrap").withChance(3.0), Item.of("kubejs:cobalt_dust").withChance(0.5)], "minecraft:ancient_debris").energy(8000);

    // Disable combining recipes for ores
    ["minecraft:redstone_ore", "minecraft:emerald_ore", "minecraft:deepslate_lapis_ore", "minecraft:coal_ore", "minecraft:deepslate_coal_ore", "mekanism:fluorite_ore", "minecraft:ancient_debris", "minecraft:deepslate_redstone_ore", "mekanism:deepslate_fluorite_ore",
        "minecraft:nether_quartz_ore", "minecraft:deepslate_emerald_ore", "minecraft:deepslate_diamond_ore", "minecraft:lapis_ore", "minecraft:diamond_ore"
    ].forEach(ore => {
        event.remove({ output: ore, type: "mekanism:combining" })
    });

    // Remove smelting raw ore bricks
    ["quark:raw_iron_bricks", "quark:raw_gold_bricks", "quark:raw_copper_bricks"].forEach(ore => {
        event.remove({ input: ore, type: "smelting"});
        event.remove({ input: ore, type: "blasting"});
    });

    // Disable smelting recipes for some ingots
    [
        ["#forge:dusts/aluminum", "immersiveengineering:ingot_aluminum"],
        ["#forge:dusts/osmium", "mekanism:ingot_osmium"],
        ["#forge:dusts/uranium", "immersiveengineering:ingot_uranium"],
        ["#forge:dusts/signalum", "thermal:signalum_ingot"],
        ["#forge:dusts/lumium", "thermal:lumium_ingot"],
        ["#forge:dusts/enderium", "thermal:enderium_ingot"],
    ].forEach(entry => {
        const [dust, ingot] = entry;

        event.remove({ input: dust, output: ingot, type: "smelting" });
        event.remove({ input: dust, output: ingot, type: "blasting" });
        event.remove({ input: dust, output: ingot, type: "thermal:smelter" });
    });

    // Add arc furnace recipes
    [
        ["#forge:dusts/desh", "ad_astra:desh_ingot"]
    ].forEach(entry => {
        const [dust, ingot] = entry;

        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            energy: 51200,
            input: {
                tag: dust.slice(1, dust.length)
            },
            results: [{
                item: ingot,
                count: 1
            }],
            time: 100
        });
    });

    // Set up gem ore crushing recipes
    [
        // ore, primary, IE byproduct, Thermal byproduct, Base amount, Tier
        ["#forge:ores/coal", "minecraft:coal", "thermal:sulfur_dust", "thermal:sulfur", 1, 1],
        ["#forge:ores/redstone", "minecraft:redstone", "thermal:cinnabar", "thermal:cinnabar", 3, 1],
        ["#forge:ores/emerald", "minecraft:emerald", "minecraft:emerald", "minecraft:emerald", 1, 1],
        ["#forge:ores/diamond", "minecraft:diamond", "minecraft:diamond", "minecraft:diamond", 1, 1],
        ["#forge:ores/lapis", "minecraft:lapis_lazuli", "thermal:sulfur_dust", "thermal:sulfur", 3, 1],
        ["#forge:ores/quartz", "minecraft:quartz", "thermal:sulfur_dust", "thermal:sulfur", 1, 1],
        ["#forge:ores/fluorite", "mekanism:fluorite_gem", "thermal:blitz_powder", "thermal:blitz_powder", 2, 4],
        ["#forge:ores/ice_shard", "ad_astra:ice_shard", "thermal:blizz_powder", "thermal:blizz_powder", 1, 3],
        ["#forge:ores/sulfur", "thermal:sulfur", "minecraft:blaze_powder", "minecraft:blaze_powder", 2, 1],
        ["#forge:ores/dimensional_shard", "rftoolsbase:dimensionalshard", "thermal:ender_pearl_dust", "minecraft:ender_pearl", 2, 3],
        ["#forge:ores/apatite", "thermal:apatite", "minecraft:lapis_lazuli", "minecraft:lapis_lazuli", 3, 1],
        ["#forge:ores/cinnabar", "thermal:cinnabar", "thermal:ruby_dust", "thermal:ruby", 1, 1],
        ["#forge:ores/niter", "thermal:niter", "thermal:niter", "thermal:niter", 2, 1],
        ["#forge:ores/ruby", "thermal:ruby", "thermal:cinnabar", "thermal:cinnabar", 1, 1],
        ["#forge:ores/sapphire", "thermal:sapphire", "thermal:apatite", "thermal:apatite", 1, 1],
        ["#forge:ores/cheese", "ad_astra:cheese", "ad_astra:cheese", "ad_astra:cheese", 1, 3]
    ].forEach(entry => {
        const [ore, primary, byproduct1, byproduct2, baseAmount, tier] = entry;

        if (tier === 1) {
            event.recipes.createMilling([Item.of(primary, baseAmount)], ore);
        }

        if (tier <= 2) {
            event.recipes.createCrushing([Item.of(primary, baseAmount * 2)], ore);
        }

        if (tier <= 3) {
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 3000,
                input: {
                    tag: ore.slice(1, ore.length)
                },
                secondaries: [{
                    chance: 0.25,
                    output: {
                        item: byproduct1
                    }
                }],
                result: {
                    item: primary,
                    count: baseAmount * 3
                }
            });
        }

        event.recipes.thermal.pulverizer([Item.of(primary).withChance(baseAmount * 4), Item.of(byproduct2).withChance(0.5)], ore).energy(8000);
        event.recipes.mekanismEnriching(`${baseAmount * 4}x ${primary}`, ore);
    });
});