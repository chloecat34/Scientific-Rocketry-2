ServerEvents.recipes((event) => {
    // Remove andesite alloy recipe with iron
    event.remove({ output: "create:andesite_alloy", input: "#forge:nuggets/iron" });
	event.remove({ output: "create:andesite_alloy", type: "minecraft:crafting_shaped" });

    // Replace andesite alloy in induction smelter
    event.recipes.thermal.smelter("create:andesite_alloy", ["minecraft:andesite", "#forge:nuggets/zinc"], 0, 3200);

    // Water wheel
    event.remove({ output: "create:water_wheel" });

    event.shaped("create:water_wheel", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:large_cogwheel"
    });

    // Large water wheel
    event.remove({ output: "create:large_water_wheel" });

    event.shaped("create:large_water_wheel", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/iron",
        C: "create:water_wheel"
    });

    // Basin
    event.remove({ output: "create:basin" });

    event.shaped("create:basin", [
        "ABA",
        "AAA"
    ], {
        A: "create:andesite_alloy",
        B: "minecraft:cauldron"
    });

    // Rose quartz
    event.remove({ output: "create:rose_quartz" });

    event.recipes.createFilling("create:rose_quartz", ["#forge:gems/quartz", Fluid.of("thermal:redstone", 200)]);

    // Blaze burner
    event.remove({ output: "create:empty_blaze_burner" });

    event.shaped("create:empty_blaze_burner", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "#forge:plates/cobalt",
        B: "minecraft:netherrack"
    });

    // Mechanical crafter
    event.remove({ output: "create:mechanical_crafter" });

    event.shaped("3x create:mechanical_crafter", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "#forge:plates/brass",
        B: "create:electron_tube",
        C: "minecraft:crafting_table",
        D: "create:brass_casing",
        E: "create:precision_mechanism"
    });

    // Brass casing
    event.remove({ output: "create:brass_casing" });

    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood"
            },

            {
                tag: "forge:plates/brass"
            }
        ],
        results: [
            {
                item: "create:brass_casing"
            }
        ]
    });

    // Crushing wheels
    event.remove({ output: "create:crushing_wheel" });

    event.recipes.createMechanicalCrafting("2x create:crushing_wheel", [
        " AAA ",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        " AAA "
    ], {
        A: "create:sturdy_sheet",
        B: "create:andesite_alloy",
        C: "create:brass_casing",
        D: "#forge:storage_blocks/andesite_alloy"
    });

    // Precision mechanism
    event.remove({ output: "create:precision_mechanism" });

    event.recipes.createSequencedAssembly([
        Item.of("create:precision_mechanism")
    ], "#forge:plates/electrum", [
        event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:cogwheel"]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:large_cogwheel"]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "minecraft:iron_nugget"])
    ]).transitionalItem("create:incomplete_precision_mechanism").loops(3);
});
