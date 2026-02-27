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

    // Torchflowers
    event.recipes.thermal
        .insolator(
            [Item.of("minecraft:torchflower").withChance(2.0), Item.of("minecraft:torchflower_seeds").withChance(1.1)],
            ["minecraft:torchflower_seeds", Fluid.of("minecraft:water", 1000)]
        )
        .energy(20000);

    // Phyto-gro for cloches
    event.custom({
        type: "immersiveengineering:fertilizer",
        growthModifier: 2.0,
        input: {
            item: "thermal:phytogro",
        },
    });

    // Thermal cultivation crops

    // Start with standard crops
    const standardCrops = [
        "amaranth",
        "barley",
        "corn",
        "flax",
        "onion",
        "radish",
        "rice",
        "sadiroot",
        "spinach",
        "bell_pepper",
        "eggplant",
        "green_bean",
        "peanut",
        "strawberry",
        "tomato",
    ];

    standardCrops.forEach((crop) => {
        const seed = `thermal:${crop}_seeds`;
        const result = `thermal:${crop}`;

        event.custom({
            type: "immersiveengineering:cloche",
            input: {
                item: seed,
            },
            render: {
                type: "generic",
                block: result,
            },
            results: [
                {
                    count: 2,
                    item: result,
                },
                {
                    chance: 0.25,
                    item: seed,
                },
            ],
            soil: {
                item: "minecraft:dirt",
            },
            time: 480,
        });
    });
});
