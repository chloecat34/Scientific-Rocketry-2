ServerEvents.recipes((event) => {
    // Coils
    event.remove({ output: "ironjetpacks:basic_coil" });
    event.remove({ output: "ironjetpacks:advanced_coil" });
    event.remove({ output: "ironjetpacks:elite_coil" });
    event.remove({ output: "ironjetpacks:ultimate_coil" });

    // Items
    const vibrantAlloyCell = Item.of("ironjetpacks:cell", '{ Id: "ironjetpacks:vibrant_alloy" }').weakNBT();
    const vibrantAlloyThruster = Item.of("ironjetpacks:thruster", '{ Id: "ironjetpacks:vibrant_alloy" }').weakNBT();
    const vibrantAlloyCapacitor = Item.of("ironjetpacks:capacitor", '{ Id: "ironjetpacks:vibrant_alloy" }').weakNBT();
    const vibrantAlloyJetpack = Item.of("ironjetpacks:jetpack", '{ Id: "ironjetpacks:vibrant_alloy" }').weakNBT();

    // Vibrant alloy jetpack
    event.remove({ output: "ironjetpacks:strap" });

    event.shaped("ironjetpacks:strap", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/aluminum",
        B: "#forge:plates/vibrant_alloy",
        C: "kubejs:treated_leather",
        D: "create_jetpack:netherite_jetpack",
    });

    event.shaped(vibrantAlloyCell, ["ABC", "BDB", "CBA"], {
        A: "#forge:plates/vibrant_alloy",
        B: "powah:energy_cable_hardened",
        C: "kubejs:vibrant_alloy_coil",
        D: "immersiveengineering:capacitor_hv",
    });

    event.shaped(vibrantAlloyThruster, ["ABA", "ACA", "DED"], {
        A: "#forge:plates/vibrant_alloy",
        B: "kubejs:heat_mechanism",
        C: vibrantAlloyCell,
        D: "immersiveengineering:generator",
        E: "create:blaze_burner",
    });

    event.recipes
        .createCompacting(vibrantAlloyCapacitor, [
            vibrantAlloyCell,
            vibrantAlloyCell,
            "8x immersiveengineering:component_electronic_adv",
            Fluid.of("kubejs:molten_vibrant_alloy", 1000),
        ])
        .superheated();

    event.recipes.createMechanicalCrafting(
        vibrantAlloyJetpack,
        [" A   A ", "ABA ABA", "ABACABA", "ADAEADA", "ABFCFBA", "ABA ABA", "GHG GHG"],
        {
            A: "#forge:plates/vibrant_alloy",
            B: "#immersiveengineering:scaffoldings/aluminum",
            C: "kubejs:vibrant_alloy_coil",
            D: "#forge:sheetmetals/aluminum",
            E: "ironjetpacks:strap",
            F: vibrantAlloyCapacitor,
            G: "immersiveengineering:radiator",
            H: vibrantAlloyThruster,
        }
    );
});
