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
const makeTinkersMeltingRecipe = (event) => (itemTag, fluidTag, fluidAmount, time, temperature) => {
    event.custom({
        type: "tconstruct:melting",
        ingredient: {
            tag: itemTag,
        },
        result: {
            amount: fluidAmount,
            tag: fluidTag,
        },
        temperature: temperature,
        time: time,
    });
};

// Helper function to convert a tag into a usable format for IE
global.tagToIETag = (tag) => {
    return tag[0] === "#" ? tag.slice(1, tag.length) : tag;
};

// Helper function to make an item selector for IE or other mods that use data
global.createItemSelector = (item) => {
    return item[0] === "#"
        ? {
              tag: global.tagToIETag(item),
          }
        : {
              item: item,
          };
};

// Helper function to make an item selector with the count for IE or other mods that use data
global.createItemSelectorWithCount = (item, count) => {
    return item[0] === "#"
        ? {
              tag: global.tagToIETag(item),
              count: count
          }
        : {
              item: item,
              count: count
          };
};

/**
 * Creates an IE crushing recipe
 * @param energy Total RF for the recipe
 * @param input Item input in either item or tag form, always assumed to be one
 * @param result Item output in either item or tag form
 * @param resultCount Amount of the item returned
 * @param secondaries List of arrays of form [item, count, chance]
 * @returns
 */
global.immersiveCrushing = (event) => (energy, input, result, resultCount, secondaries) => {
    const parsedSecondaries = secondaries.map(second => {
        return {
            chance: second[2],
            output: global.createItemSelectorWithCount(second[0], second[1])
        }
    })

    event.custom({
        type: "immersiveengineering:crusher",
        energy: energy,
        input: global.createItemSelector(input),
        secondaries: parsedSecondaries,
        result: global.createItemSelectorWithCount(result, resultCount)
    });
};
