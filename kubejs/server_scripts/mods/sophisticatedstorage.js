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
});
