// This event handles molten metals to ensure they burn the player
const molten = [
    "kubejs:molten_sulfur",
    "kubejs:molten_electrotine",
    "kubejs:molten_pulsating_alloy",
    "kubejs:molten_vibrant_alloy",
    "kubejs:molten_compressed_iron",
    "kubejs:molten_restonia",
    "kubejs:molten_palis",
    "kubejs:molten_enori",
    "kubejs:molten_void",
    "kubejs:molten_diamatine",
    "kubejs:molten_emeradic",
    "kubejs:molten_glod",
    "kubejs:molten_red_alloy",
    "kubejs:molten_blue_alloy",
    "kubejs:molten_purple_alloy",
    "kubejs:molten_redstone_alloy",
    "kubejs:molten_electrical_steel",
    "kubejs:molten_energetic_alloy",
    "kubejs:molten_ardite",
    "kubejs:molten_stainless_steel",
    "kubejs:molten_glowing_brass",
    "kubejs:molten_andesite_alloy"
];

// Acids still damage the player but don't cause fire damage
const acids = ["kubejs:nitric_acid", "mekanism:sulfuric_acid"];

PlayerEvents.tick((event) => {
    let player = event.player;

    if (isNaN(player.health)) {
        player.setHealth(0);
    }

    let directDamage = 4;
    let fireSeconds = 15;

    if (molten.includes(player.block.id) || molten.includes(player.block.up.id)) {
        player.setSecondsOnFire(fireSeconds);
        event.entity.attack(player.damageSources().lava(), directDamage);
    }

    if (acids.includes(player.block.id) || acids.includes(player.block.up.id)) {
        event.entity.attack(player.damageSources().dragonBreath(), directDamage);
    }
});
