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
});
