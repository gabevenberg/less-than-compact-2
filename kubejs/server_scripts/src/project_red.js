ServerEvents.recipes(event => {
    event.recipes.create.mixing('projectred_core:infused_silicon',['minecraft:redstone', 'minecraft:sand']).heated()
    event.recipes.create.mixing('projectred_core:energized_silicon',['minecraft:glowstone_dust', 'minecraft:sand']).heated()
    event.recipes.create.mixing('projectred_core:red_ingot',['minecraft:redstone', 'minecraft:iron_ingot']).heated()
})
