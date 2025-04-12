ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:totem_of_undying',
        [
            'tat',
            'gsg',
            ' g '
        ],
        {
            t: 'botania:terrasteel_ingot',
            a: 'minecraft:enchanted_golden_apple',
            g: 'minecraft:gold_ingot',
            s: 'minecraft:nether_star'
        }
    )
    event.shaped(
        'minecraft:heart_of_the_sea',
        [
            'pwp',
            'sds',
            'pwp',
        ],
        {
            d: 'quark:diamond_heart',
            w: 'botania:rune_water',
            s: 'botania:rune_summer',
            p: 'minecraft:prismarine_crystals',
        },
    )
    event.custom({
        type: 'botania:orechid',
        "input": {
            "type": "block",
            "block": "minecraft:stone"
        },
        "output": {
            "type": "block",
            "block": "create:zinc_ore"
        },
        "weight": 7000
    })
    event.custom({
        type: 'botania:orechid',
        "input": {
            "type": "block",
            "block": "minecraft:deepslate"
        },
        "output": {
            "type": "block",
            "block": "create:deepslate_zinc_ore"
        },
        "weight": 75
    })
    event.custom({
        type: 'botania:orechid',
        "input": {
            "type": "block",
            "block": "minecraft:quartz_block"
        },
        "output": {
            "type": "block",
            "block": "create:crimsite"
        },
        "weight": 1
    })
    event.custom({
        type: 'botania:orechid',
        "input": {
            "type": "block",
            "block": "minecraft:quartz_block"
        },
        "output": {
            "type": "block",
            "block": "create:ochrum"
        },
        "weight": 1
    })
    event.custom({
        type: 'botania:orechid',
        "input": {
            "type": "block",
            "block": "minecraft:quartz_block"
        },
        "output": {
            "type": "block",
            "block": "create:veridium"
        },
        "weight": 1
    })
    event.custom({
        type: 'botania:orechid',
        "input": {
            "type": "block",
            "block": "minecraft:quartz_block"
        },
        "output": {
            "type": "block",
            "block": "create:asurine"
        },
        "weight": 1
    })
})
