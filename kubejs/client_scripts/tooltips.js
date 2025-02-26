ItemEvents.tooltip(event => {
    function addRedTooltip(itemName, itemText) {
		event.addAdvanced(itemName, (item, advanced, text) => {
			text.add(1, Text.red(itemText))
		});
	}

    [
        "industrialforegoing:washing_factory",
        "industrialforegoing:fermentation_station",
        "industrialforegoing:fluid_sieving_machine"
    ].forEach(item => addRedTooltip(item, "Disabled"));

    [
        "thermal:sulfur_ore",
        "thermal:deepslate_sulfur_ore",
        "thermal:niter_ore",
        "thermal:deepslate_niter_ore",
        "thermal:cinnabar_ore",
        "thermal:deepslate_cinnabar_ore",
        "thermal:nickel_ore",
        "thermal:deepslate_nickel_ore"
    ].forEach(item => addRedTooltip(item, "Removed from worldgen"));
});