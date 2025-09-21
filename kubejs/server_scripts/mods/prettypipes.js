ServerEvents.recipes((event) => {
    // Pipes
    event.remove({ output: "prettypipes:pipe" });

    event.shaped("6x prettypipes:pipe", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/tin",
        B: "#forge:plates/iron",
        C: "minecraft:iron_bars",
        D: "minecraft:glass",
    });

    event.remove({ output: "ppfluids:fluid_pipe" });

    event.shaped("6x ppfluids:fluid_pipe", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/copper",
        B: "thermal:cured_rubber",
        C: "minecraft:iron_bars",
        D: "minecraft:glass",
    });

    // Blank module
    event.remove({ output: "prettypipes:blank_module" });

    event.shaped("4x prettypipes:blank_module", ["ABA", "CDC", "ABA"], {
        A: "minecraft:smooth_stone",
        B: "create:electron_tube",
        C: "#forge:plates/lead",
        D: "prettypipes:pipe",
    });

    // Extraction modules
    event.remove({ output: "prettypipes:medium_extraction_module" });

    event.shaped("prettypipes:medium_extraction_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/brass",
        B: "prettypipes:low_extraction_module",
        C: "#forge:ingots/brass",
    });

    event.remove({ output: "prettypipes:high_extraction_module" });

    event.shaped("prettypipes:high_extraction_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/steel",
        B: "prettypipes:medium_extraction_module",
        C: "#forge:ingots/steel",
    });

    // Retrieval modules
    event.remove({ output: "prettypipes:low_retrieval_module" });

    event.shaped("prettypipes:low_retrieval_module", [" A ", "BCB", " D "], {
        A: "minecraft:sticky_piston",
        B: "minecraft:redstone",
        C: "prettypipes:blank_module",
        D: "minecraft:redstone_block",
    });

    event.remove({ output: "prettypipes:medium_retrieval_module" });

    event.shaped("prettypipes:medium_retrieval_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/brass",
        B: "prettypipes:low_retrieval_module",
        C: "#forge:ingots/brass",
    });

    event.remove({ output: "prettypipes:high_retrieval_module" });

    event.shaped("prettypipes:high_retrieval_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/steel",
        B: "prettypipes:medium_retrieval_module",
        C: "#forge:ingots/steel",
    });

    // Crafting module
    event.replaceInput(
        { output: "prettypipes:low_crafting_module" },
        "minecraft:crafting_table",
        "create:mechanical_crafter"
    );

    event.remove({ output: "prettypipes:medium_crafting_module" });

    event.shaped("prettypipes:medium_crafting_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/brass",
        B: "prettypipes:low_crafting_module",
        C: "#forge:ingots/brass",
    });

    event.remove({ output: "prettypipes:high_crafting_module" });

    event.shaped("prettypipes:high_crafting_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/steel",
        B: "prettypipes:medium_crafting_module",
        C: "#forge:ingots/steel",
    });

    // Tag filter
    event.replaceInput({ output: "prettypipes:tag_filter_modifier" }, "#minecraft:iron_ores", "#forge:gears/iron");

    // Filter module
    event.remove({ output: "prettypipes:medium_filter_module" });

    event.shaped("prettypipes:medium_filter_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/brass",
        B: "prettypipes:low_filter_module",
        C: "#forge:ingots/brass",
    });

    event.remove({ output: "prettypipes:high_filter_module" });

    event.shaped("prettypipes:high_filter_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/steel",
        B: "prettypipes:medium_filter_module",
        C: "#forge:ingots/steel",
    });

    // Speed increase upgrades
    event.remove({ output: "prettypipes:medium_speed_module" });

    event.shaped("prettypipes:medium_speed_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/brass",
        B: "prettypipes:low_speed_module",
        C: "#forge:ingots/brass",
    });

    event.remove({ output: "prettypipes:high_speed_module" });

    event.shaped("prettypipes:high_speed_module", ["AAA", "ABA", "ACA"], {
        A: "#forge:nuggets/steel",
        B: "prettypipes:medium_speed_module",
        C: "#forge:ingots/steel",
    });

    // Fluid modules
    [
        ["prettypipes:low_extraction_module", "ppfluids:low_fluid_extraction_module"],
        ["prettypipes:medium_extraction_module", "ppfluids:medium_fluid_extraction_module"],
        ["prettypipes:high_extraction_module", "ppfluids:high_fluid_extraction_module"],
        ["prettypipes:low_retrieval_module", "ppfluids:low_fluid_retrieval_module"],
        ["prettypipes:medium_retrieval_module", "ppfluids:medium_fluid_retrieval_module"],
        ["prettypipes:high_retrieval_module", "ppfluids:high_fluid_retrieval_module"],
        ["prettypipes:low_filter_module", "ppfluids:low_fluid_filter_module"],
        ["prettypipes:medium_filter_module", "ppfluids:medium_fluid_filter_module"],
        ["prettypipes:high_filter_module", "ppfluids:high_fluid_filter_module"],
    ].forEach((items) => {
        const [base, fluid] = items;

        event.remove({ output: fluid });

        event.shapeless(fluid, [base, "thermal:cured_rubber", "thermal:cured_rubber"]);
    });
});
