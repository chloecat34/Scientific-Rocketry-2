ServerEvents.recipes((event) => {
    // Wood to copper, 8 copper plate
    // Copper to steel, 4 steel plate + 4 treated planks
    // Steel to electrum, 4 electrum plate + 2 electrum gear + 2 capacitor (ABA, CDC, ABA)
    // Electrum to aluminum, 4 aluminum plate + 2 slimesteel gear + 2 diamond (ABA, CDC, ABA)
    // Aluminum to stainless steel,4 stainless steel plate + 3 diamatine crystal + 1 netherite gear (ABA, BCB, ADA)

    [
        ["", "barrel"],
        ["limited_", "barrel_1"],
        ["limited_", "barrel_2"],
        ["limited_", "barrel_3"],
        ["limited_", "barrel_4"],
        ["", "chest"],
        ["", "shulker_box"],
    ].map((entry) => {
        const [part1, part2] = entry;

        const baseTier = `sophisticatedstorage:${part1}${part2}`;
        const copperTier = `sophisticatedstorage:${part1}copper_${part2}`;
        const ironTier = `sophisticatedstorage:${part1}iron_${part2}`;
        const goldTier = `sophisticatedstorage:${part1}gold_${part2}`;
        const diamondTier = `sophisticatedstorage:${part1}diamond_${part2}`;
        const netheriteTier = `sophisticatedstorage:${part1}netherite_${part2}`;

        event.remove({ mod: "sophisticatedstorage", output: copperTier });
        event.remove({ mod: "sophisticatedstorage", output: ironTier });
        event.remove({ mod: "sophisticatedstorage", output: goldTier });
        event.remove({ mod: "sophisticatedstorage", output: diamondTier });
        event.remove({ mod: "sophisticatedstorage", output: netheriteTier });

        event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            pattern: ["AAA", "ABA", "AAA"],
            key: {
                A: {
                    tag: "forge:plates/copper",
                },
                B: {
                    item: baseTier,
                },
            },
            result: {
                item: copperTier,
            },
        });

        event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            pattern: ["AAA", "ABA", "AAA"],
            key: {
                A: {
                    tag: "forge:plates/iron",
                },
                B: {
                    item: copperTier,
                },
            },
            result: {
                item: ironTier,
            },
        });

        event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            pattern: ["ABA", "CDC", "ABA"],
            key: {
                A: {
                    tag: "forge:plates/electrum",
                },
                B: {
                    tag: "forge:gears/rose_gold",
                },
                C: {
                    item: "create:electron_tube",
                },
                D: {
                    item: ironTier,
                },
            },
            result: {
                item: goldTier,
            },
        });

        event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            pattern: ["ABA", "CDC", "ABA"],
            key: {
                A: {
                    tag: "forge:plates/steel",
                },
                B: {
                    tag: "forge:gears/blue_alloy",
                },
                C: {
                    tag: "forge:gems/diamond",
                },
                D: {
                    item: goldTier,
                },
            },
            result: {
                item: diamondTier,
            },
        });

        event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            pattern: ["ABA", "CDC", "AEA"],
            key: {
                A: {
                    tag: "forge:plates/hepatizon",
                },
                B: {
                    item: "actuallyadditions:void_crystal_block",
                },
                C: {
                    tag: "forge:gems/emerald",
                },
                D: {
                    item: diamondTier,
                },
                E: {
                    tag: "forge:gears/netherite",
                },
            },
            result: {
                item: netheriteTier,
            },
        });
    });

    // Tier upgrades
    let tiers = ["basic", "copper", "iron", "gold", "diamond", "netherite"];

    tiers.forEach((tier1) => {
        tiers.forEach((tier2) => {
            event.remove({ output: `sophisticatedstorage:${tier1}_to_${tier2}_tier_upgrade` });
        });
    });

    event.shaped("sophisticatedstorage:basic_to_copper_tier_upgrade", ["AAA", "ABA", "AAA"], {
        A: "#forge:plates/copper",
        B: "minecraft:redstone_torch",
    });

    event.shaped("sophisticatedstorage:basic_to_iron_tier_upgrade", ["AAA", "ABA", "AAA"], {
        A: "#forge:plates/iron",
        B: "sophisticatedstorage:basic_to_copper_tier_upgrade",
    });

    event.shaped("sophisticatedstorage:copper_to_iron_tier_upgrade", ["AAA", "ABA", "AAA"], {
        A: "#forge:plates/iron",
        B: "#forge:ingots/copper",
    });

    event.shaped("sophisticatedstorage:basic_to_gold_tier_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/electrum",
        B: "#forge:gears/rose_gold",
        C: "create:electron_tube",
        D: "sophisticatedstorage:basic_to_iron_tier_upgrade",
    });

    event.shaped("sophisticatedstorage:copper_to_gold_tier_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/electrum",
        B: "#forge:gears/rose_gold",
        C: "create:electron_tube",
        D: "sophisticatedstorage:copper_to_iron_tier_upgrade",
    });

    event.shaped("sophisticatedstorage:iron_to_gold_tier_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/electrum",
        B: "#forge:gears/rose_gold",
        C: "create:electron_tube",
        D: "#forge:ingots/iron",
    });

    event.shaped("sophisticatedstorage:basic_to_diamond_tier_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:gears/blue_alloy",
        C: "#forge:gems/diamond",
        D: "sophisticatedstorage:basic_to_gold_tier_upgrade",
    });

    event.shaped("sophisticatedstorage:copper_to_diamond_tier_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:gears/blue_alloy",
        C: "#forge:gems/diamond",
        D: "sophisticatedstorage:copper_to_gold_tier_upgrade",
    });

    event.shaped("sophisticatedstorage:iron_to_diamond_tier_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:gears/blue_alloy",
        C: "#forge:gems/diamond",
        D: "sophisticatedstorage:iron_to_gold_tier_upgrade",
    });

    event.shaped("sophisticatedstorage:gold_to_diamond_tier_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:gears/blue_alloy",
        C: "#forge:gems/diamond",
        D: "#forge:ingots/gold",
    });

    event.shaped("sophisticatedstorage:basic_to_netherite_tier_upgrade", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/hepatizon",
        B: "actuallyadditions:void_crystal_block",
        C: "#forge:gems/emerald",
        D: "sophisticatedstorage:basic_to_diamond_tier_upgrade",
        E: "#forge:gears/netherite",
    });

    event.shaped("sophisticatedstorage:copper_to_netherite_tier_upgrade", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/hepatizon",
        B: "actuallyadditions:void_crystal_block",
        C: "#forge:gems/emerald",
        D: "sophisticatedstorage:copper_to_diamond_tier_upgrade",
        E: "#forge:gears/netherite",
    });

    event.shaped("sophisticatedstorage:iron_to_netherite_tier_upgrade", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/hepatizon",
        B: "actuallyadditions:void_crystal_block",
        C: "#forge:gems/emerald",
        D: "sophisticatedstorage:iron_to_diamond_tier_upgrade",
        E: "#forge:gears/netherite",
    });

    event.shaped("sophisticatedstorage:gold_to_netherite_tier_upgrade", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/hepatizon",
        B: "actuallyadditions:void_crystal_block",
        C: "#forge:gems/emerald",
        D: "sophisticatedstorage:gold_to_diamond_tier_upgrade",
        E: "#forge:gears/netherite",
    });

    event.shaped("sophisticatedstorage:diamond_to_netherite_tier_upgrade", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/hepatizon",
        B: "actuallyadditions:void_crystal_block",
        C: "#forge:gems/emerald",
        D: "#forge:gems/diamond",
        E: "#forge:gears/netherite",
    });

    // Storage blocks
    event.remove({ output: "sophisticatedstorage:controller" });
    event.remove({ output: "sophisticatedstorage:storage_io" });
    event.remove({ output: "sophisticatedstorage:storage_input" });
    event.remove({ output: "sophisticatedstorage:storage_output" });

    event.shaped("sophisticatedstorage:controller", ["ABA", "CDC", "AEA"], {
        A: "minecraft:smooth_stone",
        B: "#forge:gems/diamond",
        C: "#sophisticatedstorage:base_tier_wooden_storage",
        D: "create:precision_mechanism",
        E: "#forge:gears/red_alloy",
    });

    event.shaped("sophisticatedstorage:storage_io", ["ABA", "CDE", "ABA"], {
        A: "minecraft:smooth_stone",
        B: "#forge:treated_wood",
        C: "create:electron_tube",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
        E: "#forge:plates/brass",
    });

    event.shaped("sophisticatedstorage:storage_input", ["ACA", "BDB", "AEA"], {
        A: "minecraft:smooth_stone",
        B: "#forge:treated_wood",
        C: "create:electron_tube",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
        E: "#forge:plates/brass",
    });

    event.shaped("sophisticatedstorage:storage_output", ["AEA", "BDB", "ACA"], {
        A: "minecraft:smooth_stone",
        B: "#forge:treated_wood",
        C: "create:electron_tube",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
        E: "#forge:plates/brass",
    });

    // Storage link
    event.remove({ output: "sophisticatedstorage:storage_link" });

    event.shapeless("3x sophisticatedstorage:storage_link", ["sophisticatedstorage:controller", "create:transmitter"]);

    // Disable recipes that turn backpack into storage upgrades and vice versa
    let upgrades = [
        "pickup_upgrade",
        "advanced_pickup_upgrade",
        "filter_upgrade",
        "advanced_filter_upgrade",
        "magnet_upgrade",
        "advanced_magnet_upgrade",
        "feeding_upgrade",
        "advanced_feeding_upgrade",
        "compacting_upgrade",
        "advanced_compacting_upgrade",
        "void_upgrade",
        "advanced_void_upgrade",
        "smelting_upgrade",
        "auto_smelting_upgrade",
        "smoking_upgrade",
        "auto_smoking_upgrade",
        "blasting_upgrade",
        "auto_blasting_upgrade",
        "crafting_upgrade",
        "stonecutter_upgrade",
        "stack_downgrade_tier_1",
        "stack_downgrade_tier_2",
        "stack_downgrade_tier_3",
        "stack_upgrade_omega_tier",
        "jukebox_upgrade",
        "advanced_jukebox_upgrade",
        "alchemy_upgrade",
        "advanced_alchemy_upgrade",
        "chipped_botanist_workbench_upgrade",
        "chipped_glassblower_upgrade",
        "chipped_carpenters_table_upgrade",
        "chipped_loom_table_upgrade",
        "chipped_mason_table_upgrade",
        "chipped_alchemy_bench_upgrade",
        "chipped_tinkering_table_upgrade",
    ].forEach((upgrade) => {
        event.remove({ id: `sophisticatedstorage:storage_${upgrade}_from_backpack_${upgrade}` });
        event.remove({ id: `sophisticatedstorage:backpack_${upgrade}_from_storage_${upgrade}` });
    });

    upgrades = [
        ["tier_1_plus", "starter_tier"],
        ["tier_2", "tier_1"],
        ["tier_3", "tier_2"],
        ["tier_4", "tier_3"],
        ["tier_5", "tier_4"],
    ].forEach((entry) => {
        const upgrade1 = `storage_stack_upgrade_${entry[0]}`;
        const upgrade2 = `backpack_stack_upgrade_${entry[1]}`;

        event.remove({ id: `sophisticatedstorage:${upgrade1}_from_${upgrade2}` });
        event.remove({ id: `sophisticatedstorage:${upgrade2}_from_${upgrade1}` });
    });

    // Backpack recipes
    event.remove({ mod: "sophisticatedbackpacks", output: "sophisticatedbackpacks:copper_backpack" });
    event.remove({ mod: "sophisticatedbackpacks", output: "sophisticatedbackpacks:iron_backpack" });
    event.remove({ mod: "sophisticatedbackpacks", output: "sophisticatedbackpacks:gold_backpack" });
    event.remove({ mod: "sophisticatedbackpacks", output: "sophisticatedbackpacks:diamond_backpack" });
    event.remove({ mod: "sophisticatedbackpacks", output: "sophisticatedbackpacks:netherite_backpack" });

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
            A: {
                tag: "forge:plates/bronze",
            },
            B: {
                tag: "forge:gears/bronze",
            },
            C: {
                item: "create:electron_tube",
            },
            D: {
                item: "sophisticatedbackpacks:backpack",
            },
        },
        result: {
            item: "sophisticatedbackpacks:copper_backpack",
        },
    });

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
            A: {
                tag: "forge:plates/steel",
            },
            B: {
                tag: "forge:gears/steel",
            },
            C: {
                item: "functionalstorage:copper_upgrade",
            },
            D: {
                item: "sophisticatedbackpacks:copper_backpack",
            },
        },
        result: {
            item: "sophisticatedbackpacks:iron_backpack",
        },
    });

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
            A: {
                tag: "forge:plates/vibrant_alloy",
            },
            B: {
                tag: "forge:gears/vibrant_alloy",
            },
            C: {
                item: "functionalstorage:gold_upgrade",
            },
            D: {
                item: "sophisticatedbackpacks:iron_backpack",
            },
        },
        result: {
            item: "sophisticatedbackpacks:gold_backpack",
        },
    });

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
            A: {
                tag: "forge:plates/stainless_steel",
            },
            B: {
                tag: "forge:gears/stainless_steel",
            },
            C: {
                item: "functionalstorage:diamond_upgrade",
            },
            D: {
                item: "sophisticatedbackpacks:gold_backpack",
            },
        },
        result: {
            item: "sophisticatedbackpacks:diamond_backpack",
        },
    });

    // Upgrade base
    event.remove({ output: "sophisticatedstorage:upgrade_base" });
    event.remove({ output: "sophisticatedbackpacks:upgrade_base" });

    event.shaped("sophisticatedstorage:upgrade_base", ["ABA", "BAB", "ABA"], {
        A: "#forge:treated_wood",
        B: "#forge:plates/iron",
    });

    event.shaped("sophisticatedbackpacks:upgrade_base", ["ABA", "BCB", "ABA"], {
        A: "#forge:fabric_hemp",
        B: "#forge:plates/steel",
        C: "create:brass_casing",
    });

    // Magnet upgrades
    event.remove({ output: "sophisticatedstorage:magnet_upgrade" });
    event.remove({ output: "sophisticatedstorage:advanced_magnet_upgrade" });
    event.remove({ output: "sophisticatedbackpacks:magnet_upgrade" });
    event.remove({ output: "sophisticatedbackpacks:advanced_magnet_upgrade" });

    event.shaped("sophisticatedstorage:magnet_upgrade", ["ABA", "BCB", "D E"], {
        A: "#forge:plates/amethyst_bronze",
        B: "actuallyadditions:enori_crystal",
        C: "sophisticatedstorage:pickup_upgrade",
        D: "#forge:ingots/red_alloy",
        E: "#forge:ingots/blue_alloy",
    });

    event.shaped("sophisticatedstorage:advanced_magnet_upgrade", ["ABA", "BCB", "D E"], {
        A: "#forge:plates/vibrant_alloy",
        B: "kubejs:glod_crystal",
        C: "sophisticatedstorage:magnet_upgrade",
        D: "#forge:ingots/red_alloy",
        E: "#forge:ingots/blue_alloy",
    });

    event.shaped("sophisticatedbackpacks:magnet_upgrade", ["ABA", "BCB", "D E"], {
        A: "#forge:plates/amethyst_bronze",
        B: "actuallyadditions:enori_crystal",
        C: "sophisticatedbackpacks:pickup_upgrade",
        D: "#forge:ingots/red_alloy",
        E: "#forge:ingots/blue_alloy",
    });

    event.shaped("sophisticatedbackpacks:advanced_magnet_upgrade", ["ABA", "BCB", "D E"], {
        A: "#forge:plates/vibrant_alloy",
        B: "kubejs:glod_crystal",
        C: "sophisticatedbackpacks:magnet_upgrade",
        D: "#forge:ingots/red_alloy",
        E: "#forge:ingots/blue_alloy",
    });

    // Feeding upgrade
    event.replaceInput(
        { output: "sophisticatedbackpacks:feeding_upgrade" },
        "minecraft:ender_pearl",
        "tconstruct:pig_iron_ingot"
    );
    event.replaceInput(
        { output: "sophisticatedstorage:feeding_upgrade" },
        "minecraft:ender_pearl",
        "tconstruct:pig_iron_ingot"
    );

    // Void upgrade
    event.remove({ output: "sophisticatedbackpacks:void_upgrade" });
    event.remove({ output: "sophisticatedstorage:void_upgrade" });

    event.shaped("sophisticatedbackpacks:void_upgrade", ["ABA", "BCB", "ABA"], {
        A: "#forge:dusts/redstone",
        B: "#forge:obsidian",
        C: "sophisticatedbackpacks:upgrade_base",
    });

    event.shaped("sophisticatedstorage:void_upgrade", ["ABA", "BCB", "ABA"], {
        A: "#forge:dusts/redstone",
        B: "#forge:obsidian",
        C: "sophisticatedstorage:upgrade_base",
    });

    // Refill upgrade
    event.replaceInput(
        { output: "sophisticatedbackpacks:refill_upgrade" },
        "minecraft:ender_pearl",
        "create:mechanical_arm"
    );

    // Inception upgrade TODO
    event.remove({ output: "sophisticatedbackpacks:inception_upgrade" });

    // Everlasting upgrade TODO
    event.remove({ output: "sophisticatedbackpacks:everlasting_upgrade" });

    // Storage tool
    event.replaceInput({ output: "sophisticatedstorage:storage_tool" }, "minecraft:ender_pearl", "create:transmitter");

    // Battery upgrade
    event.remove({ output: "sophisticatedbackpacks:battery_upgrade" });

    event.shaped("sophisticatedbackpacks:battery_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/electrum",
        B: "#forge:storage_blocks/redstone",
        C: "immersiveengineering:capacitor_mv",
        D: "sophisticatedbackpacks:upgrade_base",
    });
});
