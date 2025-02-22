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
        "createoreexcavation:raw_diamond",
        "createoreexcavation:raw_emerald",
        "createoreexcavation:raw_redstone",
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
        "#forge:storage_blocks/raw_cobalt"
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

    const meltOre = (rawOre, rawOreBlock, ore, molten, time, temperature) => {
        addTinkersMelterRecipe(rawOre.split("#")[1], molten, 90, time, temperature);
        addTinkersMelterRecipe(rawOreBlock.split("#")[1], molten, 810, time * 4, temperature);
        addTinkersMelterRecipe(ore.split("#")[1], molten, 180, time, temperature);
        addCrucibleRecipe(rawOre, molten, 90, 8000);
        addCrucibleRecipe(rawOreBlock, molten, 810, 72000);
        addCrucibleRecipe(ore, molten, 180, 8000);
    }

    // Add these ores to melting
    meltOre("#forge:raw_materials/iron", "#forge:storage_blocks/raw_iron", "#forge:ores/iron", "tconstruct:molten_iron", 90, IRON_TEMPERATURE);

    // Standard crushing recipes
    [
        ["#forge:raw_materials/iron", "#forge:ores/iron", "thermal:iron_dust", "thermal:nickel_dust"]
    ].forEach(entry => {
        const [rawOre, ore, dust, byproduct] = entry;
        
        event.recipes.createMilling([dust], rawOre);
        event.recipes.createMilling([Item.of(dust, 2)], ore);
        event.recipes.createCrushing([dust, Item.of(dust).withChance(0.5)], rawOre);
        event.recipes.createCrushing([Item.of(dust, 3)], ore);

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

        event.recipes.thermal.pulverizer([Item.of(dust).withChance(2.0), Item.of(byproduct).withChance(0.25)], rawOre);
        event.recipes.thermal.pulverizer([Item.of(dust).withChance(4.0), Item.of(byproduct).withChance(0.5)], ore).energy(8000);
    });
});