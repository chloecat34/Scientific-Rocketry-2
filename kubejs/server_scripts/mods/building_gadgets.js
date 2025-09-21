ServerEvents.recipes((event) => {
    // Building gadget
    event.remove({ output: "buildinggadgets2:gadget_building" });

    event.shaped("buildinggadgets2:gadget_building", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/electrical_steel",
        B: "#thermal:glass/hardened",
        C: "#forge:gems/diamond",
        D: "actuallyadditions:basic_coil",
        E: "#forge:gears/blue_alloy",
    });

    // Exchanging gadget
    event.remove({ output: "buildinggadgets2:gadget_exchanging" });

    event.shaped("buildinggadgets2:gadget_exchanging", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/electrical_steel",
        B: "#thermal:glass/hardened",
        C: "actuallyadditions:diamatine_crystal",
        D: "actuallyadditions:advanced_coil",
        E: "#forge:gears/purple_alloy",
    });

    // Copy-paste gadget
    event.remove({ output: "buildinggadgets2:gadget_copy_paste" });

    event.shaped("buildinggadgets2:gadget_copy_paste", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/electrical_steel",
        B: "#thermal:glass/hardened",
        C: "#forge:gems/emerald",
        D: "actuallyadditions:basic_coil",
        E: "#forge:gears/blue_alloy",
    });

    // Cut-paste gadget
    event.remove({ output: "buildinggadgets2:gadget_cut_paste" });

    event.shaped("buildinggadgets2:gadget_cut_paste", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/electrical_steel",
        B: "#thermal:glass/hardened",
        C: "minecraft:shears",
        D: "actuallyadditions:basic_coil",
        E: "#forge:gears/blue_alloy",
    });

    // Destruction gadget
    event.remove({ output: "buildinggadgets2:gadget_destruction" });

    event.shaped("buildinggadgets2:gadget_destruction", ["ABA", "CDC", "AEA"], {
        A: "#forge:plates/electrical_steel",
        B: "#thermal:glass/hardened",
        C: "#forge:plates/vibrant_alloy",
        D: "actuallyadditions:basic_coil",
        E: "#forge:gears/blue_alloy",
    });

    // Template manager
    event.remove({ output: "buildinggadgets2:template_manager" });

    event.shaped("buildinggadgets2:template_manager", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/electrical_steel",
        B: "#forge:gears/blue_alloy",
        C: "minecraft:paper",
        D: "actuallyadditions:iron_casing",
    });
});
