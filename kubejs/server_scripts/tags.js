ServerEvents.tags("item", event => {
    // Attempt to get rid of tinkers rose gold
    event.add("immersiveengineering:recycling/blacklist", "thermal:rose_gold_gear");
    event.add("immersiveengineering:recycling/blacklist", "thermal:rose_gold_plate");
})