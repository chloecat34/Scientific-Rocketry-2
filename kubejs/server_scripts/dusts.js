ServerEvents.recipes((event) => {
    // Get instances of helper functions
    const immersiveCrushing = global.immersiveCrushing(event);

    // Remove hammer recipes
    [
        "thermal:iron_dust",
        "mekanism:dust_osmium",
        "thermal:gold_dust",
        "thermal:copper_dust",
        "thermal:tin_dust",
        "thermal:lead_dust",
        "thermal:silver_dust",
        "thermal:nickel_dust",
        "immersiveengineering:dust_aluminum",
        "immersiveengineering:dust_uranium",
        "kubejs:ardite_dust",
    ].forEach((dust) => {
        event.remove({
            output: dust,
            input: "#immersiveengineering:tools/hammers",
        });
    });

    // Type of recipe for determining power usage
    const ItemType = {
        GEM: 4000,
        INGOT: 2000,
    };

    // Flags for the crushing system
    const CrushingFlags = {
        NO_CREATE: 0, // Disable the crushing wheel recipe
        NO_IE: 1, // Disable the crusher recipe
    };

    // New system for dusts
    function standardizeCrushing(item, dust, itemType, _flags) {
        const flags = _flags === undefined ? [] : _flags;

        if (
            !event.containsRecipe({ output: dust, input: item, type: "create:crushing" }) &&
            !flags.includes(CrushingFlags.NO_CREATE)
        ) {
            event.recipes.createCrushing(dust, item);
        }

        if (!event.containsRecipe({ output: dust, type: "immersiveengineering:crusher" })) {
            immersiveCrushing(3000, item, dust, 1, []);
        }

        if (!event.containsRecipe({ output: dust, input: item, type: "mekanism:crushing" })) {
            event.recipes.mekanismCrushing(dust, item);
        }

        if (!event.containsRecipe({ output: dust, input: item, type: "thermal:pulverizer" })) {
            event.recipes.thermal.pulverizer(dust, item).energy(itemType);
        }
    }

    // Add all crushing recipes for a tag
    function allCrushingTag(item, dust, thermalEnergy) {
        event.recipes.createCrushing(dust, item);

        event.custom({
            type: "immersiveengineering:crusher",
            energy: 3000,
            input: {
                tag: item.replace("#", ""),
            },
            secondaries: [],
            result: {
                item: dust,
                count: 1,
            },
        });

        event.recipes.mekanismCrushing(dust, item);

        event.recipes.thermal.pulverizer(dust, item).energy(thermalEnergy);
    }

    // Standardize the dust crushing recipes
    standardizeCrushing("minecraft:prismarine_shard", "minecraft:prismarine_crystals", ItemType.GEM);
    standardizeCrushing("#forge:gems/apatite", "thermal:apatite_dust", ItemType.GEM, [CrushingFlags.NO_CREATE]);
    standardizeCrushing("#forge:gems/fluorite", "mekanism:dust_fluorite", ItemType.GEM);
    standardizeCrushing("minecraft:quartz", "thermal:quartz_dust", ItemType.GEM);
    standardizeCrushing("#forge:ingots/refined_obsidian", "mekanism:dust_refined_obsidian", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/osmium", "mekanism:dust_osmium", ItemType.INGOT);
    standardizeCrushing("#forge:gems/cinnabar", "thermal:cinnabar_dust", ItemType.GEM);
    standardizeCrushing("#forge:gems/niter", "thermal:niter_dust", ItemType.GEM);
    standardizeCrushing("#forge:gems/sulfur", "thermal:sulfur_dust", ItemType.GEM);
    standardizeCrushing("#forge:ender_pearls", "thermal:ender_pearl_dust", ItemType.GEM);
    standardizeCrushing("#forge:ingots/iron", "thermal:iron_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/gold", "thermal:gold_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/copper", "thermal:copper_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/netherite", "thermal:netherite_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/tin", "thermal:tin_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/lead", "thermal:lead_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/silver", "thermal:silver_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/nickel", "thermal:nickel_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/rose_gold", "thermal:rose_gold_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/bronze", "thermal:bronze_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/electrum", "thermal:electrum_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/invar", "thermal:invar_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/constantan", "thermal:constantan_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/signalum", "thermal:signalum_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/lumium", "thermal:lumium_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/enderium", "thermal:enderium_dust", ItemType.INGOT);
    standardizeCrushing("#forge:gems/diamond", "thermal:diamond_dust", ItemType.GEM);
    standardizeCrushing("#forge:gems/emerald", "thermal:emerald_dust", ItemType.GEM);
    standardizeCrushing("#forge:gems/ruby", "thermal:ruby_dust", ItemType.GEM);
    standardizeCrushing("#forge:gems/sapphire", "thermal:sapphire_dust", ItemType.GEM);
    standardizeCrushing("#forge:ingots/prismalium", "thermalendergy:prismalium_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/melodium", "thermalendergy:melodium_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/stellarium", "thermalendergy:stellarium_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/hop_graphite", "immersiveengineering:dust_hop_graphite", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/aluminum", "immersiveengineering:dust_aluminum", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/uranium", "immersiveengineering:dust_uranium", ItemType.INGOT);
    standardizeCrushing("advanced_ae:shattered_singularity", "advanced_ae:quantum_infused_dust", ItemType.GEM);
    standardizeCrushing("#forge:ingots/zinc", "kubejs:zinc_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/platinum", "kubejs:platinum_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/cobalt", "kubejs:cobalt_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/desh", "kubejs:desh_dust", ItemType.INGOT);
    standardizeCrushing("#forge:ingots/ardite", "kubejs:ardite_dust", ItemType.INGOT);
    standardizeCrushing("#forge:gems/certus_quartz", "ae2:certus_quartz_dust", ItemType.GEM);
    standardizeCrushing("#forge:gems/fluix", "ae2:fluix_dust", ItemType.GEM);
    standardizeCrushing("#forge:gems/amethyst", "kubejs:amethyst_dust", ItemType.GEM);
    standardizeCrushing("minecraft:coal", "mekanism:dust_coal", ItemType.GEM, [CrushingFlags.NO_CREATE]);
    standardizeCrushing("minecraft:charcoal", "mekanism:dust_charcoal", ItemType.GEM, [
        CrushingFlags.NO_CREATE,
        CrushingFlags.NO_IE,
    ]);
    standardizeCrushing("ae2:sky_stone_block", "ae2:sky_dust", ItemType.GEM);
    standardizeCrushing("#forge:coal_coke", "immersiveengineering:dust_coke", ItemType.GEM);

    // Remove extra coke dust recipe
    event.remove({ id: "create:crushing/compat/immersiveengineering/coal_coke" });
    event.remove({ id: "create:crushing/compat/immersiveengineering/coke_block" });

    // Obsidian dust
    event.remove({ id: "create:crushing/obsidian" });
    event.recipes.createCrushing("4x create:powdered_obsidian", "minecraft:obsidian");
    immersiveCrushing(3000, "minecraft:obsidian", "create:powdered_obsidian", 4, []);
    event.recipes.thermal.pulverizer("4x create:powdered_obsidian", "minecraft:obsidian").energy(4000);

    // Remove extra sky stone dust recipes
    event.remove({ id: "ad_astra_giselle_addon:compat/mekanism/crushing/to_sky_dust" });
    event.remove({ id: "ad_astra_giselle_addon:compat/ae2/inscriber/sky_stone_dust" });
    event.remove({ id: "ad_astra_giselle_addon:compat/ae2/smelting/smooth_sky_stone_block" });

    // Remove some items
    ["mekanism:dust_quartz", "ae2:ender_dust"].forEach((dust) => {
        event.remove({ output: dust });
    });

    // Apatite to cyan dye
    event.recipes.createCrushing(["2x minecraft:cyan_dye"], "#forge:gems/apatite");
    event.recipes.createMilling(["2x minecraft:cyan_dye"], "#forge:gems/apatite");
    event.recipes.mekanismEnriching("2x minecraft:cyan_dye", "#forge:gems/apatite");

    // Remove mixing recipes for dusts
    [
        "thermal:bronze_dust",
        "thermal:electrum_dust",
        "thermal:invar_dust",
        "thermal:constantan_dust",
        "thermal:signalum_dust",
        "thermal:enderium_dust",
        "thermal:lumium_dust",
    ].forEach((dust) => {
        event.remove({ output: dust, type: "minecraft:crafting_shapeless" });
    });

    // Enrichment chamber recipes for elemental rods
    event.recipes.mekanismEnriching("4x minecraft:blaze_powder", "minecraft:blaze_rod");
    event.recipes.mekanismEnriching("4x thermal:basalz_powder", "thermal:basalz_rod");
    event.recipes.mekanismEnriching("4x thermal:blitz_powder", "thermal:blitz_rod");
    event.recipes.mekanismEnriching("4x thermal:blizz_powder", "thermal:blizz_rod");

    // Crushing wheel recipes for elemental rods
    event.recipes.createCrushing(
        ["3x thermal:basalz_powder", Item.of("3x thermal:basalz_powder").withChance(0.33)],
        "thermal:basalz_rod"
    );
    event.recipes.createCrushing(
        ["3x thermal:blitz_powder", Item.of("3x thermal:blitz_powder").withChance(0.33)],
        "thermal:blitz_rod"
    );
    event.recipes.createCrushing(
        ["3x thermal:blizz_powder", Item.of("3x thermal:blizz_powder").withChance(0.33)],
        "thermal:blizz_rod"
    );

    // Crusher recipes for elemental rods
    immersiveCrushing(3000, "thermal:basalz_rod", "thermal:basalz_powder", 4, [["immersiveengineering:slag", 1, 0.5]]);
    immersiveCrushing(3000, "thermal:blitz_rod", "thermal:blitz_powder", 4, [["thermal:niter_dust", 1, 0.5]]);
    immersiveCrushing(3000, "thermal:blizz_rod", "thermal:blizz_powder", 4, [["minecraft:snowball", 1, 0.5]]);

    // Smelting recipes for dusts
    [
        ["#forge:dusts/zinc", "create:zinc_ingot"],
        ["#forge:dusts/cobalt", "tconstruct:cobalt_ingot"],
        ["#forge:dusts/ardite", "kubejs:ardite_ingot"],
    ].forEach((entry) => {
        const [dust, ingot] = entry;

        event.smelting(ingot, dust);
        event.blasting(ingot, dust);
    });

    // Millstone recipe for first obsidian dust
    event.recipes.createMilling("create:powdered_obsidian", "minecraft:obsidian");

    // Soul sand dust
    event.recipes.createCrushing(
        ["kubejs:soul_sand_dust", Item.of("kubejs:soul_sand_dust").withChance(0.5)],
        "minecraft:soul_sand"
    );
    event.recipes.thermal
        .pulverizer([Item.of("kubejs:soul_sand_dust").withChance(1.5)], "minecraft:soul_sand")
        .energy(4000);

    event.recipes.remove({ id: "create:milling/lapis_lazuli" });
    event.recipes.createCrushing("thermal:lapis_dust", "#forge:gems/lapis");

    // Sawdust fix
    event.replaceOutput({}, "immersiveengineering:dust_wood", "thermal:sawdust");
    event.replaceOutput({}, "mekanism:sawdust", "thermal:sawdust");

    // Flax to string (Create)
    event.recipes.createMilling("minecraft:string", "thermal:flax");
    event.recipes.createCrushing(["minecraft:string", Item.of("minecraft:string").withChance(0.5)], "thermal:flax");

    // Gem crystallizer recipes
    event.recipes.thermal
        .crystallizer("minecraft:amethyst_shard", ["#forge:dusts/amethyst", Fluid.of("minecraft:water", 2000)])
        .energy(20000);
    event.recipes.thermal
        .crystallizer("#forge:gems/ruby", ["#forge:dusts/ruby", Fluid.of("minecraft:water", 2000)])
        .energy(20000);
    event.recipes.thermal
        .crystallizer("#forge:gems/sapphire", ["#forge:dusts/sapphire", Fluid.of("minecraft:water", 2000)])
        .energy(20000);
});
