ItemEvents.tooltip(event => {
    function addRedTooltip(itemName) {
		event.addAdvanced(itemName, (item, advanced, text) => {
			text.add(1, Text.red("Disabled"))
		});
	}

    [
        "industrialforegoing:washing_factory",
        "industrialforegoing:fermentation_station",
        "industrialforegoing:fluid_sieving_machine"
    ].forEach(item => addRedTooltip(item));
});