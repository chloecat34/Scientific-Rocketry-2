ServerEvents.recipes((event) => {
    // Disable alloy kiln
    event.remove({ output: "immersiveengineering:alloybrick" });
    event.remove({ output: "immersiveengineering:slab_alloybrick" });

    // Remove treated wood handcrafting
    event.remove({
        id: "immersiveengineering:crafting/treated_wood_horizontal",
    });
    event.remove({ id: "tconstruct:compat/immersiveengineering/treated_wood" });

    event.recipes.thermal
        .bottler("immersiveengineering:treated_wood_horizontal", [
            "#minecraft:planks",
            Fluid.of("immersiveengineering:creosote", 125),
        ])
        .energy(2000);

    // Coke bricks
    event.remove({ id: "immersiveengineering:crafting/cokebrick" });
    event.shaped("immersiveengineering:cokebrick", ["AA", "AA"], {
        A: "kubejs:coke_brick",
    });

    event.recipes.createMixing("4x kubejs:coke_brick_blend", [
        "2x minecraft:clay_ball",
        "#forge:sand",
        "#forge:gunpowder",
        Fluid.of("minecraft:water", 500),
    ]);
    event.smelting("kubejs:coke_brick", "kubejs:coke_brick_blend");

    event.recipes.thermal
        .smelter("4x kubejs:coke_brick", [
            "2x minecraft:clay_ball",
            "#forge:sand",
            "#forge:gunpowder",
        ])
        .energy(9600);

    // Blast bricks
    event.remove({ id: "immersiveengineering:crafting/blastbrick" });
    event.shaped("immersiveengineering:blastbrick", ["AA", "AA"], {
        A: "kubejs:blast_brick",
    });

    event.recipes
        .createMixing("4x kubejs:blast_brick_blend", [
            "2x create:cinder_flour",
            "kubejs:soul_sand_dust",
            "#forge:dusts/coal_coke",
            Fluid.of("minecraft:lava", 250),
        ])
        .heated();
    event.smelting("kubejs:blast_brick", "kubejs:blast_brick_blend");

    event.recipes.thermal
        .smelter("4x kubejs:blast_brick", [
            "2x create:cinder_flour",
            "kubejs:soul_sand_dust",
            "#forge:dusts/coal_coke",
        ])
        .energy(9600);

    // Mech. component crafting
    event.remove({
        output: "immersiveengineering:component_iron",
        type: "minecraft:crafting_shaped",
    });
    event.remove({
        output: "immersiveengineering:component_steel",
        type: "minecraft:crafting_shaped",
    });

    // Redstone engineering block
    event.remove({ output: "immersiveengineering:rs_engineering" });

    event.shaped(
        "2x immersiveengineering:rs_engineering",
        ["ABA", "CDC", "ABA"],
        {
            A: "#forge:sheetmetals/iron",
            B: "#forge:plates/red_alloy",
            C: "create:electron_tube",
            D: "#forge:gears/rose_gold",
        }
    );

    // Light engineering block
    event.remove({ output: "immersiveengineering:light_engineering" });

    event.shaped(
        "2x immersiveengineering:light_engineering",
        ["ABA", "CDC", "ABA"],
        {
            A: "#forge:sheetmetals/iron",
            B: "immersiveengineering:component_iron",
            C: "createaddition:capacitor",
            D: "#forge:gears/bronze",
        }
    );

    // Heavy engineering block
    event.remove({ output: "immersiveengineering:heavy_engineering" });

    event.shaped(
        "2x immersiveengineering:heavy_engineering",
        ["ABA", "CDC", "ABA"],
        {
            A: "#forge:sheetmetals/steel",
            B: "immersiveengineering:component_steel",
            C: "create:precision_mechanism",
            D: "#forge:gears/invar",
        }
    );

    // Radiator block
    event.remove({ output: "immersiveengineering:radiator" });

    event.shaped("2x immersiveengineering:radiator", ["ABA", "CDC", "ABA"], {
        A: "#forge:sheetmetals/steel",
        B: "#forge:plates/netherite",
        C: "kubejs:heat_mechanism",
        D: "#forge:gears/constantan",
    });

    // Kinetic dynamo
    event.remove({ output: "immersiveengineering:dynamo" });

    event.shaped("immersiveengineering:dynamo", ["ABA", "CDC"], {
        A: "createaddition:capacitor",
        B: "#forge:gears/red_alloy",
        C: "#forge:plates/invar",
        D: "createaddition:alternator",
    });

    // Thermoelectric generator
    event.replaceInput(
        { output: "immersiveengineering:thermoelectric_generator" },
        "immersiveengineering:coil_lv",
        "immersiveengineering:coil_hv"
    );

    // Generator block
    event.remove({ output: "immersiveengineering:generator" });

    event.shaped("2x immersiveengineering:generator", ["ABA", "CDC", "ABA"], {
        A: "#forge:sheetmetals/aluminum",
        B: "immersiveengineering:coil_hv",
        C: "immersiveengineering:component_electronic",
        D: "immersiveengineering:dynamo",
    });

    // Crafting components blueprint
    event.remove({
        output: Item.of("immersiveengineering:blueprint", {
            blueprint: "components",
        }),
    });

    event.shaped(
        Item.of("immersiveengineering:blueprint", { blueprint: "components" }),
        ["ABC", "DDD", "EEE"],
        {
            A: "#forge:plates/bronze",
            B: "#forge:plates/steel",
            C: "#forge:plates/electrum",
            D: "#forge:dyes/blue",
            E: "minecraft:paper",
        }
    );

    // Metal press molds blueprint
    event.remove({
        output: Item.of("immersiveengineering:blueprint", {
            blueprint: "molds",
        }),
    });

    event.shaped(
        Item.of("immersiveengineering:blueprint", { blueprint: "molds" }),
        ["AAA", "DDD", "EEE"],
        {
            A: "#forge:plates/steel",
            D: "#forge:dyes/blue",
            E: "minecraft:paper",
        }
    );

    // Arc furnace electrodes blueprint
    event.remove({
        output: Item.of("immersiveengineering:blueprint", {
            blueprint: "electrode",
        }),
    });

    event.shaped(
        Item.of("immersiveengineering:blueprint", { blueprint: "electrode" }),
        ["AAA", "DDD", "EEE"],
        {
            A: "#forge:ingots/hop_graphite",
            D: "#forge:dyes/blue",
            E: "minecraft:paper",
        }
    );

    // Engineer's workbench
    event.replaceInput(
        { output: "immersiveengineering:workbench" },
        "#forge:ingots/iron",
        "#forge:rods/steel"
    );

    // Redstone acid needs IE
    event.remove({ id: "immersiveengineering:crafting/redstone_acid" });

    // LV accumulator
    event.remove({ output: "immersiveengineering:capacitor_lv" });

    event.shaped("immersiveengineering:capacitor_lv", ["ABA", "CDC", "ABA"], {
        A: "#forge:treated_wood",
        B: "#forge:plates/red_alloy",
        C: "#forge:plates/steel",
        D: "createaddition:modular_accumulator",
    });

    // MV accumulator
    event.remove({ output: "immersiveengineering:capacitor_mv" });

    event.shaped("immersiveengineering:capacitor_mv", ["ABA", "CDC", "ABA"], {
        A: "#forge:treated_wood",
        B: "#forge:plates/energetic_alloy",
        C: "#forge:plates/invar",
        D: "immersiveengineering:capacitor_lv",
    });

    // HV accumulator
    event.remove({ output: "immersiveengineering:capacitor_hv" });

    event.shaped("immersiveengineering:capacitor_hv", ["ABA", "CDC", "ABA"], {
        A: "#forge:treated_wood",
        B: "#forge:plates/vibrant_alloy",
        C: "#forge:plates/aluminum",
        D: "immersiveengineering:capacitor_mv",
    });

    // Concrete
    event.remove({ id: "immersiveengineering:crafting/concrete" });

    event.recipes.create.mixing(
        Fluid.of("immersiveengineering:concrete", 500),
        [
            "2x #forge:sand",
            "#forge:gravel",
            "minecraft:clay_ball",
            Fluid.of("minecraft:water", 500),
        ]
    );

    event.recipes.create.compacting("immersiveengineering:concrete", [
        Fluid.of("immersiveengineering:concrete", 1000),
    ]);

    event.recipes.thermal
        .chiller(
            "immersiveengineering:concrete",
            Fluid.of("immersiveengineering:concrete", 1000)
        )
        .energy(8000);

    event.custom({
        type: "pneumaticcraft:heat_frame_cooling",
        bonus_output: {
            limit: 0.5,
            multiplier: 0.025,
        },
        input: {
            type: "pneumaticcraft:fluid",
            amount: 1000,
            fluid: "immersiveengineering:concrete",
        },
        max_temp: 273,
        result: {
            item: "immersiveengineering:concrete",
        },
    });

    // Reinforced blast brick
    event.recipes.mekanism.combining(
        "immersiveengineering:blastbrick_reinforced",
        "immersiveengineering:blastbrick",
        "#forge:plates/steel"
    );

    // Slag glass
    event.remove({ id: "immersiveengineering:smelting/slag_glass" });
    event.smelting(
        "immersiveengineering:slag_glass",
        "immersiveengineering:slag_gravel"
    );

    event.replaceInput(
        { output: "immersiveengineering:windmill" },
        "#forge:ingots/iron",
        "#forge:rods/steel"
    );
    event.replaceInput(
        { output: "immersiveengineering:watermill" },
        "#forge:ingots/steel",
        "#forge:rods/steel"
    );

    // Electrodes
    event.remove({ id: "immersiveengineering:metalpress/electrode" });

    // Electronic component
    event.remove({ output: "immersiveengineering:component_electronic" });

    event.recipes
        .createSequencedAssembly(
            [Item.of("immersiveengineering:component_electronic")],
            "#forge:treated_wood_slab",
            [
                event.recipes.createDeploying(
                    "kubejs:incomplete_electronic_component",
                    [
                        "kubejs:incomplete_electronic_component",
                        "createaddition:capacitor",
                    ]
                ),
                event.recipes.createDeploying(
                    "kubejs:incomplete_electronic_component",
                    [
                        "kubejs:incomplete_electronic_component",
                        "kubejs:energetic_alloy_wire",
                    ]
                ),
                event.recipes.createDeploying(
                    "kubejs:incomplete_electronic_component",
                    [
                        "kubejs:incomplete_electronic_component",
                        "kubejs:energetic_alloy_wire",
                    ]
                ),
                event.recipes.createFilling(
                    "kubejs:incomplete_electronic_component",
                    [
                        "kubejs:incomplete_electronic_component",
                        Fluid.of("immersiveengineering:redstone_acid", 500),
                    ]
                ),
            ]
        )
        .transitionalItem("kubejs:incomplete_electronic_component")
        .loops(1);

    // Adv. Electronic component
    event.remove({ output: "immersiveengineering:component_electronic_adv" });

    event.recipes
        .createSequencedAssembly(
            [Item.of("immersiveengineering:component_electronic_adv")],
            "immersiveengineering:plate_duroplast",
            [
                event.recipes.createDeploying(
                    "kubejs:incomplete_adv_electronic_component",
                    [
                        "kubejs:incomplete_adv_electronic_component",
                        "immersiveengineering:electron_tube",
                    ]
                ),
                event.recipes.createDeploying(
                    "kubejs:incomplete_adv_electronic_component",
                    [
                        "kubejs:incomplete_adv_electronic_component",
                        "kubejs:vibrant_alloy_wire",
                    ]
                ),
                event.recipes.createDeploying(
                    "kubejs:incomplete_adv_electronic_component",
                    [
                        "kubejs:incomplete_adv_electronic_component",
                        "kubejs:vibrant_alloy_wire",
                    ]
                ),
                event.recipes.createFilling(
                    "kubejs:incomplete_adv_electronic_component",
                    [
                        "kubejs:incomplete_adv_electronic_component",
                        Fluid.of("immersiveengineering:redstone_acid", 500),
                    ]
                ),
            ]
        )
        .transitionalItem("kubejs:incomplete_adv_electronic_component")
        .loops(1);

    // Insulating glass
    event.remove({ id: "immersiveengineering:arcfurnace/insulating_glass" });

    event.recipes.create
        .mixing("immersiveengineering:insulating_glass", [
            "immersiveengineering:slag_glass",
            Fluid.of("tconstruct:molten_iron", 45),
        ])
        .heated();

    event.recipes.thermal
        .smelter("2x immersiveengineering:insulating_glass", [
            "2x immersiveengineering:slag_glass",
            "#forge:dusts/iron",
        ])
        .energy(9600);

    // Slag gravel
    event.recipes.mekanism.crushing(
        "immersiveengineering:slag_gravel",
        "#forge:slag"
    );
    event.recipes.thermal
        .pulverizer("immersiveengineering:slag_gravel", "#forge:slag")
        .energy(4000);

    // Vacuum tube
    event.remove({ output: "immersiveengineering:electron_tube" });

    event.custom({
        type: "immersiveengineering:blueprint",
        category: "components",
        inputs: [
            {
                item: "immersiveengineering:insulating_glass",
            },
            {
                tag: "forge:plates/nickel",
            },
            {
                tag: "forge:wires/red_alloy",
            },
            {
                item: "createaddition:capacitor",
            },
        ],
        result: {
            count: 2,
            item: "immersiveengineering:electron_tube",
        },
    });

    // IE circuit board alt recipe
    event.recipes.thermal
        .smelter("immersiveengineering:circuit_board", [
            "immersiveengineering:plate_duroplast",
            "#forge:plates/rose_gold",
        ])
        .energy(6400);

    // Garden cloche
    event.remove({ output: "immersiveengineering:cloche" });

    event.shaped("immersiveengineering:cloche", ["ABA", "ACA", "DED"], {
        A: "#forge:plates/vibrant_alloy",
        B: "immersiveengineering:light_bulb",
        C: "#forge:gears/vibrant_alloy",
        D: "#forge:treated_wood",
        E: "actuallyadditions:farmer",
    });

    // IE wire coils
    event.remove({ output: "immersiveengineering:wirecoil_copper" });
    event.remove({ output: "immersiveengineering:wirecoil_electrum" });
    event.remove({ output: "immersiveengineering:wirecoil_steel" });
    event.remove({ output: "immersiveengineering:wirecoil_structure_rope" });
    event.remove({ output: "immersiveengineering:wirecoil_structure_steel" });
    event.remove({ output: "immersiveengineering:wirecoil_redstone" });

    event.shaped(
        "2x immersiveengineering:wirecoil_copper",
        ["AAA", "ABA", "AAA"],
        {
            A: "#forge:wires/copper",
            B: "immersiveengineering:stick_treated",
        }
    );

    event.shaped(
        "2x immersiveengineering:wirecoil_electrum",
        ["AAA", "ABA", "AAA"],
        {
            A: "#forge:wires/electrum",
            B: "immersiveengineering:stick_treated",
        }
    );

    event.shaped(
        "2x immersiveengineering:wirecoil_steel",
        ["ABA", "BCB", "ABA"],
        {
            A: "#forge:wires/steel",
            B: "#forge:wires/aluminum",
            C: "immersiveengineering:stick_treated",
        }
    );

    event.shaped(
        "2x immersiveengineering:wirecoil_redstone",
        ["AAA", "ABA", "AAA"],
        {
            A: "#forge:wires/red_alloy",
            B: "immersiveengineering:stick_treated",
        }
    );

    event.shaped(
        "4x immersiveengineering:wirecoil_structure_rope",
        [" A ", "ABA", " A "],
        {
            A: "#forge:fiber_hemp",
            B: "immersiveengineering:stick_treated",
        }
    );

    event.shaped(
        "4x immersiveengineering:wirecoil_structure_steel",
        [" A ", "ABA", " A "],
        {
            A: "#forge:wires/steel",
            B: "immersiveengineering:stick_treated",
        }
    );

    // Core sample drill
    event.replaceInput(
        { output: "immersiveengineering:sample_drill" },
        "immersiveengineering:light_engineering",
        "immersiveengineering:heavy_engineering"
    );

    // Coil blocks
    event.replaceInput(
        { output: "immersiveengineering:coil_lv" },
        "#forge:ingots/iron",
        "create:copper_casing"
    );
    event.replaceInput(
        { output: "immersiveengineering:coil_mv" },
        "#forge:ingots/iron",
        "create:brass_casing"
    );
    event.replaceInput(
        { output: "immersiveengineering:coil_hv" },
        "#forge:ingots/iron",
        "create:railway_casing"
    );

    // IE wiring
    event.replaceInput(
        { output: "immersiveengineering:connector_redstone" },
        "#forge:nuggets/electrum",
        "#forge:nuggets/red_alloy"
    );

    // Blazing blood for thermoelectrics
    event.custom({
        type: "immersiveengineering:thermoelectric_source",
        singleFluid: "tconstruct:blazing_blood",
        tempKelvin: 2500,
    });

    // Remove extra coke recipe
    event.remove({ id: "immersiveengineering:crafting/coke_to_coal_coke" });
});
