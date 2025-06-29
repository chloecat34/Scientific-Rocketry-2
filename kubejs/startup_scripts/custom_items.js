StartupEvents.registry("item", (event) => {
    // Function that capitalizes a word
    const capitalize = (word) => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();

    event.create("rod_die").displayName("Rod Die").tag("thermal:crafting/dies");

    event.create("wire_die").displayName("Wire Die").tag("thermal:crafting/dies");

    event.create("chiller_plate_cast").displayName("Plate Cast").tag("thermal:crafting/casts");

    event.create("zinc_dust").displayName("Zinc Dust").tag("forge:dusts").tag("forge:dusts/zinc");

    event.create("cobalt_dust").displayName("Cobalt Dust").tag("forge:dusts").tag("forge:dusts/cobalt");

    event.create("desh_dust").displayName("Desh Dust").tag("forge:dusts").tag("forge:dusts/desh");

    event.create("platinum_dust").displayName("Platinum Dust").tag("forge:dusts").tag("forge:dusts/platinum");

    event
        .create("compressed_iron_plate")
        .displayName("Compressed Steel Plate")
        .tag("forge:plates")
        .tag("forge:plates/compressed_iron");

    event.create("cobalt_plate").displayName("Cobalt Plate").tag("forge:plates").tag("forge:plates/cobalt");

    event.create("cobalt_gear").displayName("Cobalt Gear").tag("forge:gears").tag("forge:gears/cobalt");

    event.create("zinc_rod").displayName("Zinc Rod").tag("forge:rods").tag("forge:rods/zinc");

    event
        .create("coagulated_blood")
        .displayName("Coagulated Blood")
        .tag("forge:slimeballs")
        .tag("forge:slimeball/blood");

    event.create("coke_brick_blend").displayName("Coke Brick Blend");

    event.create("coke_brick").displayName("Coke Brick");

    event.create("blast_brick_blend").displayName("Blast Brick Blend");

    event.create("blast_brick").displayName("Blast Brick");

    event.create("manyullyn_plate").displayName("Manyullyn Plate").tag("forge:plates").tag("forge:plates/manyullyn");

    event.create("manyullyn_gear").displayName("Manyullyn Gear").tag("forge:gears").tag("forge:gears/manyullyn");

    event.create("heat_mechanism").displayName("Heat Mechanism");

    event.create("incomplete_heat_mechanism").displayName("Incomplete Heat Mechanism");

    event.create("incomplete_electronic_component").displayName("Incomplete Electronic Component");

    event.create("incomplete_adv_electronic_component").displayName("Incomplete Advanced Electronic Component");

    event.create("soul_sand_dust").displayName("Soul Sand Dust").tag("forge:dusts/soul_sand");

    event.create("electrotine").displayName("Electrotine Dust").tag("forge:dusts/electrotine");

    event.create("energetic_blend").displayName("Energetic Blend");

    event.create("pulsating_crystal").displayName("Pulsating Crystal");
    event.create("vibrant_crystal").displayName("Vibrant Crystal");

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
    ];

    let wires = ["red_alloy", "energetic_alloy", "vibrant_alloy"];

    materials.forEach((material) => {
        let materialName = material.split("_").map(capitalize).join(" ");

        for (const type of ["ingot", "nugget", "plate", "gear"]) {
            let result = event
                .create(`${material}_${type}`)
                .displayName(`${materialName} ${capitalize(type)}`)
                .tag(`forge:${type}s`)
                .tag(`forge:${type}s/${material}`);

            if (type === "ingot") {
                result.tag("ae2:metal_ingots");
            }
        }

        if (wires.indexOf(material) !== -1) {
            event
                .create(`${material}_wire`)
                .displayName(`${materialName} Wire`)
                .tag("forge:wires")
                .tag(`forge:wires/${material}`);
        }
    });
});
