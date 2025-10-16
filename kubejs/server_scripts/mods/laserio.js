ServerEvents.recipes((event) => {
    // Logic chips
    event.remove({ output: "laserio:logic_chip" });
    event.remove({ output: "laserio:logic_chip_raw" });

    event.recipes
        .createSequencedAssembly([Item.of("laserio:logic_chip", 4)], "immersiveengineering:circuit_board", [
            event.recipes.createDeploying("laserio:logic_chip_raw", [
                "laserio:logic_chip_raw",
                "immersiveengineering:electron_tube",
            ]),
            event.recipes.createFilling("laserio:logic_chip_raw", [
                "laserio:logic_chip_raw",
                Fluid.of("kubejs:molten_restonia", 100),
            ]),
            event.recipes.createPressing("laserio:logic_chip_raw", "laserio:logic_chip_raw"),
        ])
        .transitionalItem("laserio:logic_chip_raw")
        .loops(2);

    // Laser connector
    event.remove({ output: "laserio:laser_connector" });

    event.shaped("laserio:laser_connector", [" A ", "BCB", "DDD"], {
        A: "#forge:gems/ruby",
        B: "#forge:wires/vibrant_alloy",
        C: "laserio:logic_chip",
        D: "#forge:plates/electrical_steel",
    });

    // Laser node
    event.remove({ output: "laserio:laser_node" });

    event.shaped("laserio:laser_node", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "actuallyadditions:enori_crystal",
        C: "#thermal:glass/hardened",
        D: "laserio:laser_connector",
    });

    // Laser wrench
    event.replaceInput({ output: "laserio:laser_wrench" }, "#forge:ingots/iron", "#forge:ingots/electrical_steel");

    // Card holder
    event.remove({ output: "laserio:card_holder" });

    event.shaped("laserio:card_holder", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/electrical_steel",
        B: "#thermal:glass/hardened",
        C: "create:item_vault",
        D: "laserio:logic_chip",
    });

    // Card cloner
    event.remove({ output: "laserio:card_cloner" });

    event.shaped("laserio:card_cloner", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/electrical_steel",
        B: "#thermal:glass/hardened",
        C: "minecraft:paper",
        D: "laserio:logic_chip",
    });

    // Item card
    event.remove({ output: "laserio:card_item" });

    event.shaped("2x laserio:card_item", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/invar",
        B: "actuallyadditions:enori_crystal",
        C: "#forge:gems/quartz",
        D: "laserio:logic_chip",
        E: "create:electron_tube",
    });

    // Fluid card
    event.remove({ output: "laserio:card_fluid" });

    event.shaped("2x laserio:card_fluid", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/constantan",
        B: "actuallyadditions:palis_crystal",
        C: "#forge:gems/quartz",
        D: "laserio:logic_chip",
        E: "create:electron_tube",
    });

    // Redstone card
    event.remove({ output: "laserio:card_redstone" });

    event.shaped("2x laserio:card_redstone", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/redstone_alloy",
        B: "actuallyadditions:restonia_crystal",
        C: "#forge:gems/quartz",
        D: "laserio:logic_chip",
        E: "create:electron_tube",
    });

    // Remove energy card
    event.remove({ output: "laserio:card_energy" });

    // Filter
    event.remove({ id: "laserio:filter_basic" });

    event.shaped("4x laserio:filter_basic", ["ABA", "CDC", "ABA"], {
        A: "minecraft:iron_bars",
        B: "actuallyadditions:void_crystal",
        C: "create:brass_funnel",
        D: "laserio:logic_chip",
    });

    // Logistic overclocker
    event.remove({ output: "laserio:overclocker_card" });

    event.shaped("laserio:overclocker_card", ["ABA", "CDC", "ABA"], {
        A: "kubejs:glod_crystal",
        B: "#thermal:glass/hardened",
        C: "#forge:plates/cinderslime",
        D: "laserio:logic_chip",
    });

    // Node overclocker
    event.remove({ output: "laserio:overclocker_node" });

    event.shaped("laserio:overclocker_node", ["ABA", "CDC", "ABA"], {
        A: "actuallyadditions:diamatine_crystal",
        B: "actuallyadditions:advanced_coil",
        C: "#forge:plates/stainless_steel",
        D: "pneumaticcraft:printed_circuit_board",
    });
});
