ServerEvents.recipes(event => {
    event.shapeless(
        'minecraft:crying_obsidian',
        [
            'minecraft:obsidian',
            'minecraft:ghast_tear',
        ]
    )
    event.shaped(
        'minecraft:trident',
        [
            ' ss',
            ' is',
            'i  ',
        ],
        {
            s: 'minecraft:prismarine_shard',
            i: 'minecraft:iron_ingot',
        }
    )
    event.shaped(
        'minecraft:saddle',
        [
            'sls',
            'i i',
        ],
        {
            s: 'minecraft:string',
            l: 'minecraft:leather',
            i: 'minecraft:iron_ingot',
        },
    )
    event.shaped(
        'minecraft:iron_horse_armor',
        [
            'm m',
            'mlm',
            'm m',
        ],
        {
            m: 'minecraft:iron_ingot',
            l: 'minecraft:leather',
        },
    )
    event.shaped(
        'minecraft:golden_horse_armor',
        [
            'm m',
            'mlm',
            'm m',
        ],
        {
            m: 'minecraft:gold_ingot',
            l: 'minecraft:leather',
        },
    )
    event.shaped(
        'minecraft:diamond_horse_armor',
        [
            'm m',
            'mlm',
            'm m',
        ],
        {
            m: 'minecraft:diamond',
            l: 'minecraft:leather',
        },
    )
    event.shaped(
        'minecraft:chainmail_helmet',
        [
            'nnn',
            'n n'
        ],
        { n: 'minecraft:iron_nugget' }
    )
    event.shaped(
        'minecraft:chainmail_chestplate',
        [
            'n n',
            'nnn',
            'nnn'
        ],
        { n: 'minecraft:iron_nugget' }
    )
    event.shaped(
        'minecraft:chainmail_leggings',
        [
            'nnn',
            'n n',
            'n n'
        ],
        { n: 'minecraft:iron_nugget' }
    )
    event.shaped(
        'minecraft:chainmail_boots',
        [
            'n n',
            'n n'
        ],
        { n: 'minecraft:iron_nugget' }
    )
})

