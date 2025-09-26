ServerEvents.recipes((event) => {
    // Canola
    event.recipes.thermal
        .insolator(
            [
                Item.of("actuallyadditions:canola").withChance(2.0),
                Item.of("actuallyadditions:canola_seeds").withChance(1.1),
            ],
            ["actuallyadditions:canola_seeds", Fluid.of("minecraft:water", 1000)]
        )
        .energy(20000);

    event.custom({
        type: "immersiveengineering:cloche",
        input: {
            item: "actuallyadditions:canola_seeds",
        },
        render: {
            type: "generic",
            block: "actuallyadditions:canola",
        },
        results: [
            {
                count: 2,
                item: "actuallyadditions:canola",
            },
            {
                chance: 0.25,
                item: "actuallyadditions:canola_seeds",
            },
        ],
        soil: {
            item: "minecraft:dirt",
        },
        time: 480,
    });

    // Rice
    event.recipes.thermal
        .insolator(
            [
                Item.of("actuallyadditions:rice").withChance(2.0),
                Item.of("actuallyadditions:rice_seeds").withChance(1.1),
            ],
            ["actuallyadditions:rice_seeds", Fluid.of("minecraft:water", 1000)]
        )
        .energy(20000);

    event.custom({
        type: "immersiveengineering:cloche",
        input: {
            item: "actuallyadditions:rice_seeds",
        },
        render: {
            type: "generic",
            block: "actuallyadditions:rice",
        },
        results: [
            {
                count: 2,
                item: "actuallyadditions:rice",
            },
            {
                chance: 0.25,
                item: "actuallyadditions:rice_seeds",
            },
        ],
        soil: {
            item: "minecraft:dirt",
        },
        time: 480,
    });

    // Coffee
    event.recipes.thermal
        .insolator(
            [Item.of("actuallyadditions:coffee_beans").withChance(2.5)],
            ["actuallyadditions:coffee_beans", Fluid.of("minecraft:water", 1000)]
        )
        .energy(20000);

    event.custom({
        type: "immersiveengineering:cloche",
        input: {
            item: "actuallyadditions:coffee_beans",
        },
        render: {
            type: "generic",
            block: "actuallyadditions:coffee",
        },
        results: [
            {
                count: 2,
                item: "actuallyadditions:coffee_beans",
            },
        ],
        soil: {
            item: "minecraft:dirt",
        },
        time: 480,
    });

    // Flax
    event.recipes.thermal
        .insolator(
            [Item.of("minecraft:string").withChance(2.0), Item.of("actuallyadditions:flax_seeds").withChance(1.1)],
            ["actuallyadditions:flax_seeds", Fluid.of("minecraft:water", 1000)]
        )
        .energy(20000);

    event.custom({
        type: "immersiveengineering:cloche",
        input: {
            item: "actuallyadditions:flax_seeds",
        },
        render: {
            type: "generic",
            block: "actuallyadditions:flax",
        },
        results: [
            {
                count: 2,
                item: "minecraft:string",
            },
            {
                chance: 0.25,
                item: "actuallyadditions:flax_seeds",
            },
        ],
        soil: {
            item: "minecraft:dirt",
        },
        time: 480,
    });

    // Disable omega upgrades for now
    event.remove({ output: "sophisticatedbackpacks:stack_upgrade_omega_tier" });
    event.remove({ output: "sophisticatedstorage:stack_upgrade_omega_tier" });

    // Backpack stack upgrades
    event.remove({ output: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
    event.remove({ output: "sophisticatedbackpacks:stack_upgrade_tier_1" });
    event.remove({ output: "sophisticatedbackpacks:stack_upgrade_tier_2" });
    event.remove({ output: "sophisticatedbackpacks:stack_upgrade_tier_3" });
    event.remove({ output: "sophisticatedbackpacks:stack_upgrade_tier_4" });

    event.shaped("sophisticatedbackpacks:stack_upgrade_starter_tier", ["AAA", "ABA", "AAA"], {
        A: "#forge:storage_blocks/bronze",
        B: "sophisticatedbackpacks:upgrade_base",
    });

    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_1", ["AAA", "ABA", "AAA"], {
        A: "#forge:storage_blocks/steel",
        B: "sophisticatedbackpacks:stack_upgrade_starter_tier",
    });

    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_2", ["AAA", "ABA", "AAA"], {
        A: "#forge:storage_blocks/energetic_alloy",
        B: "sophisticatedbackpacks:stack_upgrade_tier_1",
    });

    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_3", ["ABA", "CDC", "ABA"], {
        A: "#forge:storage_blocks/aluminum",
        B: "#forge:storage_blocks/knightslime",
        C: "actuallyadditions:diamatine_crystal_block",
        D: "sophisticatedbackpacks:stack_upgrade_tier_2",
    });

    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_4", ["ABA", "CDC", "ABA"], {
        A: "#forge:storage_blocks/stainless_steel",
        B: "#forge:storage_blocks/netherite",
        C: "actuallyadditions:emeradic_crystal_block",
        D: "sophisticatedbackpacks:stack_upgrade_tier_3",
    });

    // Storage stack upgrades
    event.remove({ output: "sophisticatedstorage:stack_upgrade_tier_1" });
    event.remove({ output: "sophisticatedstorage:stack_upgrade_tier_1_plus" });
    event.remove({ output: "sophisticatedstorage:stack_upgrade_tier_2" });
    event.remove({ output: "sophisticatedstorage:stack_upgrade_tier_3" });
    event.remove({ output: "sophisticatedstorage:stack_upgrade_tier_4" });
    event.remove({ output: "sophisticatedstorage:stack_upgrade_tier_5" });

    event.shaped("sophisticatedstorage:stack_upgrade_tier_1", ["ABA", "BCB", "ABA"], {
        A: "#forge:treated_wood",
        B: "#forge:plates/bronze",
        C: "sophisticatedstorage:upgrade_base",
    });

    event.shaped("sophisticatedstorage:stack_upgrade_tier_1_plus", ["ABA", "BCB", "ABA"], {
        A: "#forge:gears/rose_gold",
        B: "#forge:plates/brass",
        C: "sophisticatedstorage:stack_upgrade_tier_1",
    });

    event.shaped("sophisticatedstorage:stack_upgrade_tier_2", ["ABA", "BCB", "ABA"], {
        A: "#forge:gears/steel",
        B: "#forge:plates/manyullyn",
        C: "sophisticatedstorage:stack_upgrade_tier_1_plus",
    });

    event.shaped("sophisticatedstorage:stack_upgrade_tier_3", ["ABA", "CDC", "ABA"], {
        A: "#forge:gears/vibrant_alloy",
        B: "#forge:storage_blocks/knightslime",
        C: "#forge:plates/knightslime",
        D: "sophisticatedstorage:stack_upgrade_tier_2",
    });

    event.shaped("sophisticatedstorage:stack_upgrade_tier_4", ["ABA", "BCB", "ABA"], {
        A: "#forge:gears/stainless_steel",
        B: "actuallyadditions:emeradic_crystal_block",
        C: "sophisticatedstorage:stack_upgrade_tier_3",
    });

    // Tier 5 is WIP
});
