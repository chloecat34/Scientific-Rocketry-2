StartupEvents.registry("item", event => {
    event.create("rod_die")
        .displayName("Rod Die");

    event.create("wire_die")
        .displayName("Wire Die");

    event.create("zinc_dust")
        .displayName("Zinc Dust")
        .tag("forge:dusts")
        .tag("forge:dusts/zinc");

    event.create("cobalt_dust")
        .displayName("Cobalt Dust")
        .tag("forge:dusts")
        .tag("forge:dusts/cobalt");

    event.create("desh_dust")
        .displayName("Desh Dust")
        .tag("forge:dusts")
        .tag("forge:dusts/desh");

    event.create("platinum_dust")
        .displayName("Platinum Dust")
        .tag("forge:dusts")
        .tag("forge:dusts/platinum");

    event.create("platinum_ingot")
        .displayName("Platinum Ingot")
        .tag("forge:ingots")
        .tag("ae2:metal_ingots")
        .tag("forge:ingots/platinum");

    event.create("platinum_nugget")
        .displayName("Platinum Nugget")
        .tag("forge:nuggets")
        .tag("forge:nuggets/platinum");

    event.create("platinum_plate")
        .displayName("Platinum Plate")
        .tag("forge:plates")
        .tag("forge:plates/platinum");

    event.create("platinum_gear")
        .displayName("Platinum Gear")
        .tag("forge:gears")
        .tag("forge:gears/platinum");

    event.create("compressed_iron_plate")
        .displayName("Compressed Iron Plate")
        .tag("forge:plates")
        .tag("forge:plates/compressed_iron");
});