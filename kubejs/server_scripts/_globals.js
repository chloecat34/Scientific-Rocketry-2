// priority: 999
// This file contains helper functions to deal with some machines lacking KubeJS support because I didn't want to write my own KubeJS plugin.
// It also contains some global variables

// Constant temperatures
const COPPER_TEMPERATURE = 500;
const IRON_TEMPERATURE = 800;
const GOLD_TEMPERATURE = 700;
const TIN_TEMPERATURE = 225;
const LEAD_TEMPERATURE = 330;
const SILVER_TEMPERATURE = 790;
const ZINC_TEMPERATURE = 420;
const NICKEL_TEMPERATURE = 950;

// For these functions, you can create your own version using the captured event value
const makeTinkersMeltingRecipe = event => (itemTag, fluidTag, fluidAmount, time, temperature) => {
    event.custom({
        type: "tconstruct:melting",
        ingredient: {
            tag: itemTag
        },
        result: {
            amount: fluidAmount,
            tag: fluidTag
        },
        temperature: temperature,
        time: time
    });
}