ServerEvents.recipes((event) => {
    // Remove crusher
    event.remove({ output: "actuallyadditions:crusher" });
    event.remove({ output: "actuallyadditions:crusher_double" });

    event.remove({ type: "actuallyadditions:crushing" });

    // Remove some lens of the miner recipes
    for (let ore of ["powah/uraninite_ore", "mekanism/fluorite_ore", "stone_ores_uranium", "mekanism/osmium_ore", "stone_ores_nickel"]) {
        event.remove({ id: `actuallyadditions:mininglens/${ore}`});
    }

    // Mining lens recipes
    let lensRecipes = [
        ["thermal:apatite_ore", "minecraft:stone", 200],
        ["thermal:deepslate_apatite_ore", "minecraft:deepslate", 200],
        ["thermal:niter_ore", "minecraft:stone", 500],
        ["thermal:deepslate_niter_ore", "minecraft:deepslate", 500],
        ["thermal:deepslate_tin_ore", "minecraft:deepslate", 2000],
        ["thermal:deepslate_lead_ore", "minecraft:deepslate", 2000],
        ["thermal:deepslate_silver_ore", "minecraft:deepslate", 1000],
        ["thermal:ruby_ore", "minecraft:stone", 25],
        ["thermal:deepslate_ruby_ore", "minecraft:deepslate", 25],
        ["kubejs:sulfur_ore", "minecraft:netherrack", 1000],
        ["create:deepslate_zinc_ore", "minecraft:deepslate", 1000],
        ["immersiveengineering:deepslate_ore_aluminum", "minecraft:deepslate", 250]
    ];

    for (let entry of lensRecipes) {
        let [target, stone, weight] = entry;

        event.custom({
            type: "actuallyadditions:mining_lens",
            ingredient: {
                item: stone
            },
            output_type: "item",
            result: {
                item: target
            },
            weight: weight
        });
    }
});
