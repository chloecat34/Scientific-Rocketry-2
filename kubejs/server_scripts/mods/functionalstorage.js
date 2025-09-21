ServerEvents.recipes((event) => {
    // Drawer controller
    event.remove({ output: "functionalstorage:storage_controller" });
    event.remove({ output: "functionalstorage:framed_storage_controller" });

    event.shaped("functionalstorage:storage_controller", ["ABA", "CDC", "AEA"], {
        A: "minecraft:smooth_stone",
        B: "#forge:gems/diamond",
        C: "#functionalstorage:drawer",
        D: "create:precision_mechanism",
        E: "#forge:gears/red_alloy",
    });

    event.shaped("functionalstorage:framed_storage_controller", ["ABA", "CDC", "AEA"], {
        A: "#forge:nuggets/iron",
        B: "#forge:gems/diamond",
        C: "#functionalstorage:drawer",
        D: "create:precision_mechanism",
        E: "#forge:gears/red_alloy",
    });

    // Controller access point
    event.remove({ output: "functionalstorage:controller_extension" });
    event.remove({ output: "functionalstorage:framed_controller_extension" });

    event.shaped("functionalstorage:controller_extension", ["ABA", "CDC", "AEA"], {
        A: "minecraft:smooth_stone",
        B: "#forge:ingots/gold",
        C: "#functionalstorage:drawer",
        D: "create:electron_tube",
        E: "#forge:plates/red_alloy",
    });

    event.shaped("functionalstorage:framed_controller_extension", ["ABA", "CDC", "AEA"], {
        A: "#forge:nuggets/iron",
        B: "#forge:ingots/gold",
        C: "#functionalstorage:drawer",
        D: "create:electron_tube",
        E: "#forge:plates/red_alloy",
    });

    // Configuration card alt recipe
    event.shaped("functionalstorage:configuration_tool", ["AAB", "ACB", "ADA"], {
        A: "minecraft:paper",
        B: "#forge:ingots/gold",
        C: "#functionalstorage:drawer",
        D: "#forge:gems/amethyst",
    });

    // Fluid drawers
    ["functionalstorage:fluid_1", "functionalstorage:fluid_2", "functionalstorage:fluid_4"].forEach((drawer) => {
        event.replaceInput({ output: drawer }, "minecraft:bucket", "pneumaticcraft:small_tank");
        event.replaceInput({ output: drawer }, "#minecraft:planks", "pneumaticcraft:reinforced_bricks");
    });

    // Upgrades
    event.remove({ output: "functionalstorage:copper_upgrade" });
    event.remove({ output: "functionalstorage:gold_upgrade" });
    event.remove({ output: "functionalstorage:diamond_upgrade" });
    event.remove({ output: "functionalstorage:netherite_upgrade" });

    event.shaped("functionalstorage:copper_upgrade", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/brass",
        B: "#forge:storage_blocks/brass",
        C: "create:item_vault",
        D: "#functionalstorage:drawer",
    });

    event.shaped("functionalstorage:gold_upgrade", ["ABA", "CDC", "BAB"], {
        A: "#forge:plates/aluminum",
        B: "#forge:storage_blocks/aluminum",
        C: "immersiveengineering:component_electronic_adv",
        D: "functionalstorage:copper_upgrade",
    });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                item: "functionalstorage:gold_upgrade",
            },
            {
                item: "pneumaticcraft:printed_circuit_board",
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "actuallyadditions:emeradic_crystal",
                count: 4,
            },
            {
                type: "pneumaticcraft:stacked_item",
                tag: "forge:plates/vibrant_alloy",
                count: 8,
            },
            {
                type: "pneumaticcraft:stacked_item",
                item: "actuallyadditions:advanced_coil",
                count: 2,
            },
        ],
        pressure: 4.5,
        results: [
            {
                item: "functionalstorage:diamond_upgrade",
            },
        ],
    });
});
