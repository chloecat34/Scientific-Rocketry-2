// This event handles molten metals to ensure they burn the player
const molten = [
    "kubejs:molten_sulfur"
];

PlayerEvents.tick(event => {
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
});