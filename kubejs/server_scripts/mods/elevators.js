ServerEvents.recipes((event) => {
    const colors = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black",
    ];

    colors.forEach((color) => {
        event.remove({ id: `elevatorid:elevator_${color}` });

        event.shaped(`elevatorid:elevator_${color}`, ["ABA", "BCB", "ABA"], {
            A: `minecraft:${color}_wool`,
            B: "#immersiveengineering:scaffoldings/aluminum",
            C: "tconstruct:sky_slime_crystal",
        });
    });
});
