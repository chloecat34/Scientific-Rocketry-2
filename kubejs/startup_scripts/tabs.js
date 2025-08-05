StartupEvents.modifyCreativeTab("tconstruct:general", (event) => {
    [
        "tconstruct:knightslime_ingot",
        "tconstruct:knightslime_nugget",
        "tconstruct:knightslime_block",
        "tconstruct:soulsteel_ingot",
        "tconstruct:soulsteel_nugget",
        "tconstruct:soulsteel_block"
    ].forEach((item) => {
        event.addAfter("tconstruct:hepatizon_block", item);
    });
});

StartupEvents.modifyCreativeTab("tconstruct:fluids", (event) => {
    ["tconstruct:molten_knightslime_bucket", "tconstruct:molten_soulsteel_bucket"].forEach((item) => {
        event.addAfter("tconstruct:molten_refined_obsidian_bucket", item);
    });
});
