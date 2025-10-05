StartupEvents.registry("item", (event) => {
    // Function that capitalizes a word
    const capitalize = (word) => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();

    event.create("rod_die").displayName("Rod Die").tag("thermal:crafting/dies");

    event.create("wire_die").displayName("Wire Die").tag("thermal:crafting/dies");

    event.create("chiller_plate_cast").displayName("Plate Cast").tag("thermal:crafting/casts");

    event.create("zinc_dust").displayName("Zinc Dust").tag("forge:dusts").tag("forge:dusts/zinc");

    event.create("cobalt_dust").displayName("Cobalt Dust").tag("forge:dusts").tag("forge:dusts/cobalt");
    event.create("ardite_dust").displayName("Ardite Dust").tag("forge:dusts").tag("forge:dusts/ardite");
    event.create("raw_ardite").displayName("Raw Ardite").tag("forge:raw_materials").tag("forge:raw_materials/ardite");

    event.create("desh_dust").displayName("Desh Dust").tag("forge:dusts").tag("forge:dusts/desh");

    event.create("platinum_dust").displayName("Platinum Dust").tag("forge:dusts").tag("forge:dusts/platinum");

    event
        .create("compressed_iron_plate")
        .displayName("Compressed Steel Plate")
        .tag("forge:plates")
        .tag("forge:plates/compressed_iron");

    event.create("cobalt_plate").displayName("Cobalt Plate").tag("forge:plates").tag("forge:plates/cobalt");

    event.create("cobalt_gear").displayName("Cobalt Gear").tag("forge:gears").tag("forge:gears/cobalt");

    event.create("brass_gear").displayName("Brass Gear").tag("forge:gears").tag("forge:gears/brass");

    event.create("cinderslime_plate").displayName("Cinderslime Plate").tag("forge:plates").tag("forge:plates/cinderslime");
    event.create("cinderslime_gear").displayName("Cinderslime Gear").tag("forge:gears").tag("forge:gears/cinderslime");

    event.create("slimesteel_plate").displayName("Slimesteel Plate").tag("forge:plates").tag("forge:plates/slimesteel");
    event.create("slimesteel_gear").displayName("Slimesteel Gear").tag("forge:gears").tag("forge:gears/slimesteel");

    event.create("knightslime_plate").displayName("Knightslime Plate").tag("forge:plates").tag("forge:plates/knightslime");
    event.create("knightslime_gear").displayName("Knightslime Gear").tag("forge:gears").tag("forge:gears/knightslime");

    event.create("amethyst_bronze_plate").displayName("Amethyst Bronze Plate").tag("forge:plates").tag("forge:plates/amethyst_bronze");
    event.create("amethyst_bronze_gear").displayName("Amethyst Bronze Gear").tag("forge:gears").tag("forge:gears/amethyst_bronze");

    event.create("hepatizon_plate").displayName("Hepatizon Plate").tag("forge:plates").tag("forge:plates/hepatizon");
    event.create("hepatizon_gear").displayName("Hepatizon Gear").tag("forge:gears").tag("forge:gears/hepatizon");

    event.create("queens_slime_plate").displayName("Queen's Slime Plate").tag("forge:plates").tag("forge:plates/queens_slime");
    event.create("queens_slime_gear").displayName("Queen's Slime Gear").tag("forge:gears").tag("forge:gears/queens_slime");

    event.create("zinc_rod").displayName("Zinc Rod").tag("forge:rods").tag("forge:rods/zinc");
    event.create("compressed_iron_rod").displayName("Compressed Steel Rod").tag("forge:rods").tag("forge:rods/compressed_iron");

    event
        .create("coagulated_blood")
        .displayName("Coagulated Blood")
        .tag("forge:slimeballs")
        .tag("forge:slimeball/blood");

    event.create("coke_brick_blend").displayName("Coke Brick Blend");

    event.create("coke_brick").displayName("Coke Brick");

    event.create("blast_brick_blend").displayName("Blast Brick Blend");

    event.create("blast_brick").displayName("Blast Brick");

    event.create("treated_leather").displayName("Treated Leather");

    event.create("manyullyn_plate").displayName("Manyullyn Plate").tag("forge:plates").tag("forge:plates/manyullyn");

    event.create("manyullyn_gear").displayName("Manyullyn Gear").tag("forge:gears").tag("forge:gears/manyullyn");

    event.create("heat_mechanism").displayName("Heat Mechanism");

    event.create("incomplete_heat_mechanism").displayName("Incomplete Heat Mechanism");

    event.create("incomplete_electronic_component").displayName("Incomplete Electronic Component");

    event.create("incomplete_adv_electronic_component").displayName("Incomplete Advanced Electronic Component");

    event.create("incomplete_logic_cable").displayName("Incomplete Logic Cable");

    event.create("soul_sand_dust").displayName("Soul Sand Dust").tag("forge:dusts/soul_sand");

    event.create("electrotine").displayName("§9Electrotine Dust").tag("forge:dusts/electrotine");

    event.create("amethyst_dust").displayName("Amethyst Dust").tag("forge:dusts/amethyst");

    event.create("vibrating_powder").displayName("§aVibrating Powder");

    event.create("energetic_blend").displayName("§6Energetic Blend");

    event.create("pulsating_crystal").displayName("§3Pulsating Crystal");
    event.create("vibrant_crystal").displayName("§aVibrant Crystal");

    event.create("energetic_alloy_coil").displayName("§6Energetic Alloy Coil");
    event.create("vibrant_alloy_coil").displayName("§aVibrant Alloy Coil");

    event.create("glod_crystal").displayName("Glod Crystal").tag("actuallyadditions:crystals");
    event.create("empowered_glod_crystal").displayName("Empowered Glod Crystal").glow(true);

    // Register materials with ingots, nuggets, plates, and gears
    let materials = [
        "red_alloy",
        "energetic_alloy",
        "vibrant_alloy",
        "electrical_steel",
        "platinum",
        "redstone_alloy",
        "blue_alloy",
        "purple_alloy",
        "pulsating_alloy",
        "ardite",
        "stainless_steel",
        "glowing_brass"
    ];

    // Map ingots to the formatting code if needed
    let formats = {
        "vibrant_alloy": "§a",
        "pulsating_alloy": "§3",
        "purple_alloy": "§5",
        "energetic_alloy": "§6",
        "glowing_brass": "§e"
    };

    let wires = ["red_alloy", "energetic_alloy", "vibrant_alloy"];

    materials.forEach((material) => {
        let materialName = material.split("_").map(capitalize).join(" ");

        const formatting = material in formats ? formats[material] : "";

        for (const type of ["ingot", "nugget", "plate", "gear"]) {
            let result = event
                .create(`${material}_${type}`)
                .displayName(`${formatting}${materialName} ${capitalize(type)}`)
                .tag(`forge:${type}s`)
                .tag(`forge:${type}s/${material}`);

            if (type === "ingot") {
                result.tag("ae2:metal_ingots");
            }
        }

        if (wires.indexOf(material) !== -1) {
            event
                .create(`${material}_wire`)
                .displayName(`${formatting}${materialName} Wire`)
                .tag("forge:wires")
                .tag(`forge:wires/${material}`);
        }
    });
});
