ServerEvents.recipes((event) => {
    const crystals = [
        [
            "minecraft:amethyst_shard",
            "minecraft:small_amethyst_bud",
            "minecraft:medium_amethyst_bud",
            "minecraft:large_amethyst_bud",
            "minecraft:amethyst_cluster",
        ],
        [
            "ae2:certus_quartz_crystal",
            "ae2:small_quartz_bud",
            "ae2:medium_quartz_bud",
            "ae2:large_quartz_bud",
            "ae2:quartz_cluster",
        ],
        [
            "tconstruct:earth_slime_crystal",
            "tconstruct:small_earth_slime_crystal_bud",
            "tconstruct:medium_earth_slime_crystal_bud",
            "tconstruct:large_earth_slime_crystal_bud",
            "tconstruct:earth_slime_crystal_cluster",
        ],
        [
            "tconstruct:sky_slime_crystal",
            "tconstruct:small_sky_slime_crystal_bud",
            "tconstruct:medium_sky_slime_crystal_bud",
            "tconstruct:large_sky_slime_crystal_bud",
            "tconstruct:sky_slime_crystal_cluster",
        ],
        [
            "tconstruct:ichor_slime_crystal",
            "tconstruct:small_ichor_slime_crystal_bud",
            "tconstruct:medium_ichor_slime_crystal_bud",
            "tconstruct:large_ichor_slime_crystal_bud",
            "tconstruct:ichor_slime_crystal_cluster",
        ],
        [
            "tconstruct:ender_slime_crystal",
            "tconstruct:small_ender_slime_crystal_bud",
            "tconstruct:medium_ender_slime_crystal_bud",
            "tconstruct:large_ender_slime_crystal_bud",
            "tconstruct:ender_slime_crystal_cluster",
        ],
    ];

    event.remove({ id: "create:crushing/amethyst_cluster" });

    crystals.forEach((crystal) => {
        event.recipes.createFilling(crystal[1], [crystal[0], Fluid.of("immersiveengineering:redstone_acid", 100)]);
        event.recipes.createFilling(crystal[2], [crystal[1], Fluid.of("immersiveengineering:redstone_acid", 100)]);
        event.recipes.createFilling(crystal[3], [crystal[2], Fluid.of("immersiveengineering:redstone_acid", 100)]);
        event.recipes.createFilling(crystal[4], [crystal[3], Fluid.of("immersiveengineering:redstone_acid", 100)]);

        event.recipes.createCrushing(Item.of(crystal[0], 6), crystal[4]);
    });
});
