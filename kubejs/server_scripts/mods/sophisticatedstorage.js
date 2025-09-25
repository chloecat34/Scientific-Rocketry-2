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

        event.remove({ mod: "sophisticatedstorage", output: copperTier });

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
    });
});
