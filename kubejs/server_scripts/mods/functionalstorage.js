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
    });
});
