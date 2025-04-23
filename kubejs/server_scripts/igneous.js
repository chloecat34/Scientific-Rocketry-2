ServerEvents.recipes((event) => {
	let rockgen = (adjacent, below, out) => {
    event.custom({
        type: 'thermal:rock_gen',
        adjacent: adjacent,
        below: below,
        result: {item: out}})
    }

    let rocks = [
        "minecraft:diorite",
        "minecraft:andesite",
        "minecraft:granite",
        "minecraft:calcite",
        "biomeswevegone:dacite_cobblestone",
        "biomeswevegone:red_rock",
        "minecraft:tuff",
        "create:asurine",
        "create:crimsite",
        "create:limestone",
        "create:ochrum",
        "create:scoria",
        "create:scorchia",
        "create:veridium",
        "quark:limestone",
        "quark:jasper",
        "quark:shale",
        "quark:myalite",
        "quark:permafrost"
    ];

    rocks.forEach(rock => rockgen("minecraft:water", rock, rock));
});