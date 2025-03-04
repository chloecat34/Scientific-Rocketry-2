ServerEvents.recipes((event) => {
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
        "immersiveengineering:dust_uranium"
    ].forEach(dust => {
        event.remove({ output: dust, input: "#immersiveengineering:tools/hammers" });
    });

    // Add crushing recipes for Create
    [
        ["#forge:gems/fluorite", "mekanism:dust_fluorite"],
        ["minecraft:quartz", "thermal:quartz_dust"],
        ["#forge:ingots/refined_obsidian", "mekanism:dust_refined_obsidian"],
        ["#forge:ingots/osmium", "mekanism:dust_osmium"],
        ["#forge:gems/cinnabar", "thermal:cinnabar_dust"],
        ["#forge:gems/niter", "thermal:niter_dust"],
        ["#forge:gems/sulfur", "thermal:sulfur_dust"],
        ["#forge:ender_pearls", "thermal:ender_pearl_dust"],
        ["#forge:ingots/gold", "thermal:gold_dust"],
        ["#forge:ingots/copper", "thermal:copper_dust"],
        ["#forge:ingots/netherite", "thermal:netherite_dust"],
        ["#forge:ingots/tin", "thermal:tin_dust"],
        ["#forge:ingots/lead", "thermal:lead_dust"],
        ["#forge:ingots/silver", "thermal:silver_dust"],
        ["#forge:ingots/nickel", "thermal:nickel_dust"],
        ["#forge:ingots/rose_gold", "thermal:rose_gold_dust"],
        ["#forge:ingots/bronze", "thermal:bronze_dust"],
        ["#forge:ingots/electrum", "thermal:electrum_dust"],
        ["#forge:ingots/invar", "thermal:invar_dust"],
        ["#forge:ingots/constantan", "thermal:constantan_dust"],
        ["#forge:ingots/signalum", "thermal:signalum_dust"],
        ["#forge:ingots/lumium", "thermal:lumium_dust"],
        ["#forge:ingots/enderium", "thermal:enderium_dust"],
        ["#forge:gems/emerald", "thermal:emerald_dust"],
        ["#forge:gems/ruby", "thermal:ruby_dust"],
        ["#forge:gems/sapphire", "thermal:sapphire_dust"],
        ["#forge:ingots/prismalium", "thermalendergy:prismalium_dust"],
        ["#forge:ingots/melodium", "thermalendergy:melodium_dust"],
        ["#forge:ingots/stellarium", "thermalendergy:stellarium_dust"],
        ["#forge:gems/amethyst", "thermal_extra:amethyst_dust"],
        ["minecraft:soul_sand", "thermal_extra:soul_sand_dust"],
        ["#forge:ingots/soul_infused", "thermal_extra:soul_infused_dust"],
        ["#forge:ingots/shellite", "thermal_extra:shellite_dust"],
        ["#forge:ingots/twinite", "thermal_extra:twinite_dust"],
        ["#forge:ingots/dragonsteel", "thermal_extra:dragonsteel_dust"],
        ["#forge:ingots/hop_graphite", "immersiveengineering:dust_hop_graphite"],
        ["#forge:ingots/aluminum", "immersiveengineering:dust_aluminum"],
        ["#forge:ingots/uranium", "immersiveengineering:dust_uranium"],
        ["advanced_ae:shattered_singularity", "advanced_ae:quantum_infused_dust"],
        ["#forge:ingots/zinc", "kubejs:zinc_dust"],
        ["#forge:ingots/platinum", "kubejs:platinum_dust"],
        ["#forge:ingots/cobalt", "kubejs:cobalt_dust"]
    ].forEach(entry => {
        event.recipes.createCrushing(entry[1], entry[0]);
    });

    // Add IE Crusher recipes (w/ tags)
    [
        ["forge:gems/fluorite", "mekanism:dust_fluorite"],
        ["forge:ingots/refined_obsidian", "mekanism:dust_refined_obsidian"],
        ["forge:gems/apatite", "thermal:apatite_dust"],
        ["forge:gems/cinnabar", "thermal:cinnabar_dust"],
        ["forge:gems/niter", "thermal:niter_dust"],
        ["forge:gems/sulfur", "thermal:sulfur_dust"],
        ["forge:ender_pearls", "thermal:ender_pearl_dust"],
        ["forge:ingots/netherite", "thermal:netherite_dust"],
        ["forge:ingots/signalum", "thermal:signalum_dust"],
        ["forge:ingots/lumium", "thermal:lumium_dust"],
        ["forge:ingots/enderium", "thermal:enderium_dust"],
        ["forge:gems/diamond", "thermal:diamond_dust"],
        ["forge:gems/emerald", "thermal:emerald_dust"],
        ["forge:gems/ruby", "thermal:ruby_dust"],
        ["forge:gems/sapphire", "thermal:sapphire_dust"],
        ["forge:ingots/prismalium", "thermalendergy:prismalium_dust"],
        ["forge:ingots/melodium", "thermalendergy:melodium_dust"],
        ["forge:ingots/stellarium", "thermalendergy:stellarium_dust"],
        ["forge:gems/amethyst", "thermal_extra:amethyst_dust"],
        ["forge:ingots/soul_infused", "thermal_extra:soul_infused_dust"],
        ["forge:ingots/shellite", "thermal_extra:shellite_dust"],
        ["forge:ingots/twinite", "thermal_extra:twinite_dust"],
        ["forge:ingots/dragonsteel", "thermal_extra:dragonsteel_dust"],
        ["forge:ingots/hop_graphite", "immersiveengineering:dust_hop_graphite"],
        ["forge:gems/certus_quartz", "ae2:certus_quartz_dust"],
        ["forge:gems/fluix", "ae2:fluix_dust"],
        ["#forge:ingots/cobalt", "kubejs:cobalt_dust"]
    ].forEach(entry => {
        event.custom({
            type: "immersiveengineering:crusher",
            energy: 3000,
            input: {
                tag: entry[0]
            },
            secondaries: [],
            result: {
                item: entry[1]
            }
        });
    });

    // Add IE Crusher recipes (items)
    [
        ["minecraft:charcoal", "mekanism:dust_charcoal"],
        ["minecraft:quartz", "thermal:quartz_dust"],
        ["minecraft:soul_sand", "thermal_extra:soul_sand_dust"],
        ["ae2:sky_stone_block", "ae2:sky_dust"],
        ["advanced_ae:shattered_singularity", "advanced_ae:quantum_infused_dust"]
    ].forEach(entry => {
        event.custom({
            type: "immersiveengineering:crusher",
            energy: 3000,
            input: {
                item: entry[0]
            },
            secondaries: [],
            result: {
                item: entry[1]
            }
        });
    });

    // Special crusher recipes
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 3000,
        input: {
            item: "minecraft:obsidian"
        },
        secondaries: [],
        result: {
            item: "create:powdered_obsidian",
            count: 4
        }
    });

    event.custom({
        type: "immersiveengineering:crusher",
        energy: 3000,
        input: {
            item: "estrogen:testosterone_chunk"
        },
        secondaries: [],
        result: {
            item: "estrogen:testosterone_powder",
            count: 3
        }
    });

    // Add Mekanism crusher recipes
    [
        ["minecraft:quartz", "thermal:quartz_dust"],
        ["#forge:gems/apatite", "thermal:apatite_dust"],
        ["#forge:gems/cinnabar", "thermal:cinnabar_dust"],
        ["#forge:gems/niter", "thermal:niter_dust"],
        ["#forge:gems/sulfur", "thermal:sulfur_dust"],
        ["#forge:ender_pearls", "thermal:ender_pearl_dust"],
        ["#forge:ingots/silver", "thermal:silver_dust"],
        ["#forge:ingots/nickel", "thermal:nickel_dust"],
        ["#forge:ingots/rose_gold", "thermal:rose_gold_dust"],
        ["#forge:ingots/electrum", "thermal:electrum_dust"],
        ["#forge:ingots/invar", "thermal:invar_dust"],
        ["#forge:ingots/constantan", "thermal:constantan_dust"],
        ["#forge:ingots/signalum", "thermal:signalum_dust"],
        ["#forge:ingots/lumium", "thermal:lumium_dust"],
        ["#forge:ingots/enderium", "thermal:enderium_dust"],
        ["#forge:gems/ruby", "thermal:ruby_dust"],
        ["#forge:gems/sapphire", "thermal:sapphire_dust"],
        ["#forge:ingots/prismalium", "thermalendergy:prismalium_dust"],
        ["#forge:ingots/melodium", "thermalendergy:melodium_dust"],
        ["#forge:ingots/stellarium", "thermalendergy:stellarium_dust"],
        ["#forge:gems/amethyst", "thermal_extra:amethyst_dust"],
        ["minecraft:soul_sand", "thermal_extra:soul_sand_dust"],
        ["#forge:ingots/soul_infused", "thermal_extra:soul_infused_dust"],
        ["#forge:ingots/shellite", "thermal_extra:shellite_dust"],
        ["#forge:ingots/twinite", "thermal_extra:twinite_dust"],
        ["#forge:ingots/dragonsteel", "thermal_extra:dragonsteel_dust"],
        ["#forge:coal_coke", "immersiveengineering:dust_coke"],
        ["#forge:ingots/hop_graphite", "immersiveengineering:dust_hop_graphite"],
        ["#forge:ingots/aluminum", "immersiveengineering:dust_aluminum"],
        ["estrogen:testosterone_chunk", "3x estrogen:testosterone_powder"],
        ["#forge:ingots/zinc", "kubejs:zinc_dust"],
        ["#forge:ingots/platinum", "kubejs:platinum_dust"],
        ["#forge:ingots/cobalt", "kubejs:cobalt_dust"]
    ].forEach(entry => {
        event.recipes.mekanismCrushing(entry[1], entry[0]);
    });

    // Pulverizer recipes (gems)
    [
        ["minecraft:charcoal", "mekanism:dust_charcoal"],
        ["minecraft:coal", "mekanism:dust_coal"],
        ["#forge:gems/ruby", "thermal:ruby_dust"],
        ["#forge:gems/sapphire", "thermal:sapphire_dust"],
        ["#forge:coal_coke", "immersiveengineering:dust_coke"],
        ["#forge:gems/certus_quartz", "ae2:certus_quartz_dust"],
        ["#forge:gems/fluix", "ae2:fluix_dust"],
        ["ae2:sky_stone_block", "ae2:sky_dust"],
        ["advanced_ae:shattered_singularity", "advanced_ae:quantum_infused_dust"],
        ["minecraft:obsidian", "4x create:powdered_obsidian"],
        ["estrogen:testosterone_chunk", "3x estrogen:testosterone_powder"]
    ].forEach(entry => {
        event.recipes.thermal.pulverizer(entry[1], entry[0]).energy(4000);
    });

    // Pulverizer recipes (ingots)
    [
        ["#forge:ingots/refined_obsidian", "mekanism:dust_refined_obsidian"],
        ["#forge:ingots/osmium", "mekanism:dust_osmium"],
        ["#forge:ingots/hop_graphite", "immersiveengineering:dust_hop_graphite"],
        ["#forge:ingots/zinc", "kubejs:zinc_dust"],
        ["#forge:ingots/platinum", "kubejs:platinum_dust"],
        ["#forge:ingots/cobalt", "kubejs:cobalt_dust"]
    ].forEach(entry => {
        event.recipes.thermal.pulverizer(entry[1], entry[0]).energy(2000);
    });

    // Remove some items
    ["mekanism:dust_quartz", "ae2:ender_dust"].forEach(dust => {
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
        "thermal_extra:soul_infused_dust",
        "thermal_extra:shellite_dust",
        "thermal_extra:twinite_dust",
        "thermal_extra:dragonsteel_dust",
    ].forEach(dust => {
        event.remove({ output: dust, type: "minecraft:crafting_shapeless" });
    });

    // Enrichment chamber recipes for elemental rods
    event.recipes.mekanismEnriching("4x minecraft:blaze_powder", "minecraft:blaze_rod");
    event.recipes.mekanismEnriching("4x thermal:basalz_powder", "thermal:basalz_rod");
    event.recipes.mekanismEnriching("4x thermal:blitz_powder", "thermal:blitz_rod");
    event.recipes.mekanismEnriching("4x thermal:blizz_powder", "thermal:blizz_rod");

    // Crushing wheel recipes for elemental rods
    event.recipes.createCrushing(["3x thermal:basalz_powder", Item.of("3x thermal:basalz_powder").withChance(0.33)], "thermal:basalz_rod");
    event.recipes.createCrushing(["3x thermal:blitz_powder", Item.of("3x thermal:blitz_powder").withChance(0.33)], "thermal:blitz_rod");
    event.recipes.createCrushing(["3x thermal:blizz_powder", Item.of("3x thermal:blizz_powder").withChance(0.33)], "thermal:blizz_rod");

    // Crusher recipes for elemental rods
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 3000,
        input: {
            item: "thermal:basalz_rod"
        },
        secondaries: [{
            chance: 0.5,
            output: {
                item: "immersiveengineering:slag"
            }
        }],
        result: {
            item: "thermal:basalz_powder",
            count: 4
        }
    });
    
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 3000,
        input: {
            item: "thermal:blitz_rod"
        },
        secondaries: [{
            chance: 0.5,
            output: {
                item: "immersiveengineering:dust_saltpeter"
            }
        }],
        result: {
            item: "thermal:blitz_powder",
            count: 4
        }
    });
    
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 3000,
        input: {
            item: "thermal:blizz_rod"
        },
        secondaries: [{
            chance: 0.5,
            output: {
                item: "minecraft:snowball"
            }
        }],
        result: {
            item: "thermal:blizz_powder",
            count: 4
        }
    });

    // Smelting recipes for dusts
    [
        ["#forge:dusts/zinc", "create:zinc_ingot"],
        ["#forge:dusts/cobalt", "tconstruct:cobalt_ingot"]
    ].forEach(entry => {
        const [dust, ingot] = entry;

        event.smelting(ingot, dust);
        event.blasting(ingot, dust)
    });
});