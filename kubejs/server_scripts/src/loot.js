LootJS.modifiers(event => {
    event.addEntityLootModifier("minecraft:ender_dragon")
        .addLoot("minecraft:dragon_head")
    event.addEntityLootModifier("minecraft:ender_dragon")
        .randomChance(0.5)
        .addLoot("minecraft:dragon_egg")
});
