const feat_effects_data = {
    "effect-aberrant-blood-magic": {
        _id: "UQ7vZgmfK0VSFS8A",
        img: "icons/commodities/biological/eye-blue-gold.webp",
        name: "Effect: Aberrant Blood Magic",
        system: {
            description: {
                value:
                    "<p>Aberrant whispers shield one target's mind or your own, granting a +2 status bonus to Will saving throws for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                { key: "FlatModifier", selector: "will", type: "status", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-accept-echo": {
        _id: "2ca1ZuqQ7VkunAh3",
        img: "systems/pf2e/icons/spells/mirror-image.webp",
        name: "Effect: Accept Echo",
        system: {
            description: {
                value:
                    "<p>While in this state, you become trained in the weapon you chose and an expert in the skill you chose. Additionally, while you're in this state, the echo can speak and interact with the Material Plane using your body, and you gain a +4 status bonus to all saves against possession effects, as the possessing spirit protects you from other possessions.</p>\n<p>This state lasts for 10 minutes, after which the echo disappears completely until the next time you make your daily preparations. You can @UUID[Compendium.pf2e.actionspf2e.Item.Dismiss] this effect.</p>\n<p>At 7th level you become a master of the skill you chose, at 13th level you become an expert with the weapon you chose, and at 15th level you become legendary with the skill you chose.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["possession"],
                    selector: "saving-throw",
                    type: "status",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-accursed-clay-fist": {
        _id: "bvk5rwYSoTtz8QGf",
        img: "systems/pf2e/icons/features/feats/accursed-clay-fist.webp",
        name: "Effect: Accursed Clay Fist",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Accursed Clay Fist]</p>\n<p>You take a -2 status penalty to saving throws against curse effects for 1 hour.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "hours",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #153: Life's Long Shadows",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Accursed Clay Fist (vs. curses)",
                    predicate: ["curse"],
                    selector: "will",
                    type: "status",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-aldori-parry": {
        _id: "aEuDaQY1GnrrnDRA",
        img: "systems/pf2e/icons/equipment/weapons/aldori-dueling-sword.webp",
        name: "Effect: Aldori Parry",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Aldori Parry]</p>\n<p>You gain a +2 circumstance bonus to AC.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-align-armament-chaotic": {
        _id: "XC3dRbwfu35vuvmM",
        img: "systems/pf2e/icons/spells/weapon-storm.webp",
        name: "Effect: Align Armament (Chaotic)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Sanctify Armament].</p>\n<p>For 1 round, that weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectAlignArmamentChaotic",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "chaotic",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectAlignArmamentChaotic}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-align-armament-evil": {
        _id: "eA14bUF7xhNCzw2v",
        img: "systems/pf2e/icons/spells/weapon-storm.webp",
        name: "Effect: Align Armament (Evil)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Sanctify Armament].</p>\n<p>For 1 round, that weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectAlignArmamentEvil",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "evil",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectAlignArmamentEvil}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-align-armament-good": {
        _id: "bl4HXm1e4NQ0iJs5",
        img: "systems/pf2e/icons/spells/weapon-storm.webp",
        name: "Effect: Align Armament (Good)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Sanctify Armament].</p>\n<p>For 1 round, that weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectAlignArmamentGood",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "good",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectAlignArmamentGood}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-align-armament-lawful": {
        _id: "KkbFlNfcQQUfSVXd",
        img: "systems/pf2e/icons/spells/weapon-storm.webp",
        name: "Effect: Align Armament (Lawful)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Sanctify Armament].</p>\n<p>For 1 round, that weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectAlignArmamentLawful",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "lawful",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectAlignArmamentLawful}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-anadi-venom": {
        _id: "gN1LbKYQgi8Fx98V",
        img: "icons/skills/melee/blade-tip-energy-green.webp",
        name: "Effect: Anadi Venom",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Anadi Venom]</p>\n<p>If the next fangs Strike you make before the end of your turn hits and deals damage, the Strike deals an additional 1d6 poison damage. On a critical failure, the poison is wasted as normal. At 12th level, this poison damage increases to 2d6.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    damageType: "poison",
                    diceNumber: "ternary(gte(@actor.level, 12), 2, 1)",
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "fangs-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-ancestral-influence": {
        _id: "vkgmMBMd2e2BwiwJ",
        img: "systems/pf2e/icons/spells/chromatic-image.webp",
        name: "Effect: Ancestral Influence",
        system: {
            badge: {
                evaluate: true,
                labels: ["Martial", "Skillful", "Spellcaster", "Choice"],
                reevaluate: "turn-end",
                type: "formula",
                value: "1d4",
            },
            description: {
                value:
                    "<p>One of your ancestors becomes predominant in their meddling. The first time you gain this effect each day, roll [[/r 1d4]] on the list below to determine which type of ancestor becomes predominant. During combat or another tense, round-by-round encounter, other ancestors wrestle for control of your actions. When you roll initiative, and then at the end of each of your turns during the encounter, roll [[/r 1d4]] and change your predominant ancestor appropriately. Once the encounter ends, you return to the influence of the ancestor you first rolled for the day.</p>\n<h4>Ancestral Influence</h4>\n<ol>\n<li>Martial Ancestor\n<ul>\n<li><strong>Preferred action</strong> Strikes</li>\n<li><strong>Moderate curse benefit</strong> Your Strikes gain a +1 status bonus to attack rolls and a +2 status bonus to damage.</li>\n<li><strong>Major curse benefit</strong> Your Strikes gain a +1 status bonus to attack rolls and a +6 status bonus to damage</li>\n</ul>\n</li>\n<li>Skillful Ancestor\n<ul>\n<li><strong>Preferred action</strong> Perception and Skill actions</li>\n<li><strong>Moderate curse benefit</strong> You gain a +1 status bonus to skill checks and Perception checks.</li>\n<li><strong>Major curse benefit</strong> You gain a +2 status bonus to skill checks and Perception checks.</li>\n</ul>\n</li>\n<li>Spellcasting Ancestor\n<ul>\n<li><strong>Preferred action</strong> Cast a Spell</li>\n<li><strong>Moderate curse benefit</strong> Non-cantrip spells without a duration gain a status bonus to their damage and healing equal to the spell's level.</li>\n<li><strong>Major curse benefit</strong> Non-cantrip spells without a duration gain a status bonus to their damage and healing equal to the spell's level + 3.</li>\n</ul>\n</li>\n<li>You choose which ancestor guides your actions</li>\n</ol>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    alwaysActive: true,
                    key: "RollOption",
                    label: "PF2E.OracleCurses.Ancestor.AncestralInfluence",
                    option: "ancestral-influence",
                    phase: "beforeDerived",
                    suboptions: [
                        {
                            label: "PF2E.OracleCurses.Ancestor.Label.Martial",
                            predicate: [
                                { or: ["parent:badge:value:1", "parent:badge:value:4"] },
                            ],
                            value: "martial",
                        },
                        {
                            label: "PF2E.OracleCurses.Ancestor.Label.Skillful",
                            predicate: [
                                { or: ["parent:badge:value:2", "parent:badge:value:4"] },
                            ],
                            value: "skillful",
                        },
                        {
                            label: "PF2E.OracleCurses.Ancestor.Label.Spellcasting",
                            predicate: [
                                { or: ["parent:badge:value:3", "parent:badge:value:4"] },
                            ],
                            value: "spellcasting",
                        },
                    ],
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-anchored": {
        _id: "R6mx6EfLxSrQlrRa",
        img: "icons/equipment/shield/heater-wooden-steel-boss.webp",
        name: "Effect: Anchored",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tunnel Wall]</p>\n<p>You become Anchored and gain a +4 circumstance bonus to the DC to @UUID[Compendium.pf2e.actionspf2e.Item.Tumble Through] your space.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: ["action:tumble-through"],
                    selector: "reflex",
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-angelic-blood-magic": {
        _id: "s1tulrmW6teTFjVd",
        img: "icons/commodities/treasure/trinket-wing-white.webp",
        name: "Effect: Angelic Blood Magic",
        system: {
            description: {
                value:
                    "<p>An angelic aura protects you or one target, granting a +1 status bonus to saving throws for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "saving-throw",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-anoint-ally": {
        _id: "nnF7RSVlC6swbSw8",
        img: "icons/magic/unholy/hand-marked-pink.webp",
        name: "Effect: Anoint Ally",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Anoint Ally].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-aquatic-endemic-herbs": {
        _id: "NviQYIVZbPCSWLqT",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Aquatic Endemic Herbs",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Endemic Herbs]</p>\n<p>Gain a +1 circumstance bonus to Fortitude saves.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "fortitude",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-arcane-propulsion": {
        _id: "EVRcdGt4awWPgXla",
        img: "icons/magic/light/projectiles-star-purple.webp",
        name: "Effect: Arcane Propulsion",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Arcane Propulsion].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 5,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "@actor.attributes.speed.total",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-arctic-endemic-herb": {
        _id: "2RwhJ9fbJtcQjW6s",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Arctic Endemic Herb",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Endemic Herbs]</p>\n<p>For 1 hour, treat environmental cold effects as if they were one step less severe.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "hours",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-armor-tampered-with-critical-success": {
        _id: "rzcpTJU9MvW1x1gz",
        img: "icons/equipment/chest/breastplate-layered-steel-green.webp",
        name: "Effect: Armor Tampered With (Critical Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tamper]</p>\n<p>Your armor has been tampered with! You are @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] and take a -10-foot penalty to your Speeds. The effect lasts until you @UUID[Compendium.pf2e.actionspf2e.Item.Interact] to remove it.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Off-Guard",
                },
                { key: "FlatModifier", selector: "speed", value: -10 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-armor-tampered-with-success": {
        _id: "IfRkgjyh0JzGalIy",
        img: "icons/equipment/chest/breastplate-layered-steel-green.webp",
        name: "Effect: Armor Tampered With (Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tamper]</p>\n<p>Your armor has been tampered with! You are @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] and take a -10-foot penalty to your Speeds. The effect ends at the start of the inventor's next turn, or until you @UUID[Compendium.pf2e.actionspf2e.Item.Interact] to remove it.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Off-Guard",
                },
                { key: "FlatModifier", selector: "speed", value: -10 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-assisting-shot-critical-hit": {
        _id: "AAgoUuwMvHzqNhIN",
        img: "icons/skills/melee/spear-tips-double-purple.webp",
        name: "Effect: Assisting Shot (Critical Hit)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Assisting Shot] if you critically hit the target.</p>\n<p>The next creature other than you to attack the same target before the start of your next turn gains a +2 circumstance bonus on their roll.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Assisting Shot",
                    selector: "attack",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-assisting-shot": {
        _id: "zcJii1XyOne9EvMr",
        img: "icons/skills/melee/spear-tips-double-purple.webp",
        name: "Effect: Assisting Shot",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Assisting Shot] if you hit the target.</p>\n<p>The next creature other than you to attack the same target before the start of your next turn gains a +1 circumstance bonus on their roll.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "attack",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-augment-senses": {
        _id: "JwDCoBIwyhOFnDGZ",
        img: "icons/commodities/biological/eye-lizard-orange.webp",
        name: "Effect: Augment Senses",
        system: {
            description: {
                value:
                    "<p>Until the start of your next turn, you can't be flanked.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 13 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.flanking.flankable",
                    value: false,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-aura-junction-air": {
        _id: "Mnvd3jV4EW6nAJKI",
        img: "systems/pf2e/icons/spells/buffeting-winds.webp",
        name: "Effect: Aura Junction (Air)",
        system: {
            description: {
                value: "<p>You gain a +10-foot status bonus to land and fly Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["land-speed", "fly-speed"],
                    type: "status",
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-aura-junction-fire": {
        _id: "QOWjsM4GYUHw6pFA",
        img: "icons/magic/fire/barrier-wall-flame-ring-yellow.webp",
        name: "Effect: Aura Junction (Fire)",
        system: {
            description: {
                value:
                    "<p>Enemies in your kinetic aura gain weakness to fire from your fire impulses. The weakness is equal to half your level (minimum weakness 1).</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    definition: [
                        "damage:type:fire",
                        "item:trait:impulse",
                        "origin:signature:{item|origin.signature}",
                    ],
                    key: "Weakness",
                    label: "PF2E.IWR.Custom.ImpulseFireFrom",
                    type: "custom",
                    value: "max(1, floor(@item.level/2))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-aura-junction-water": {
        _id: "s8LMK2zCQgUT3HoY",
        img: "icons/magic/water/wave-water-explosion.webp",
        name: "Effect: Aura Junction (Water)",
        system: {
            description: {
                value:
                    "<p>You gain fire resistance equal to half the kineticist's level.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "Resistance", type: "fire", value: "floor(@item.level/2)" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-aura-junction-wood": {
        _id: "su5qLXoweaHxt6ZP",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Aura Junction (Wood)",
        system: {
            description: {
                value:
                    "<p>Any ally that begins its turn in the aura gains 1 temporary Hit Point that lasts until the start of its next turn. This increases to 2 temporary Hit Points if you're 10th level or higher and to 3 temporary Hit Points if you're 15th level or higher.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    events: { onCreate: false, onTurnStart: true },
                    key: "TempHP",
                    value:
                        "ternary(gte(@item.level,15), 3, ternary(gte(@item.level,10), 2, 1))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-aura-of-despair": {
        _id: "MNkIxAishE22TqL3",
        img: "systems/pf2e/icons/spells/destructive-aura.webp",
        name: "Effect: Aura of Despair",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Aura Of Despair]</p>\n<p>Enemies within 15 of you take a -1 circumstance penalty to saving throws against fear.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Aura of Despair (vs. fear)",
                    predicate: ["fear"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-aura-of-faith": {
        _id: "VOOShYoB4gTopZtg",
        img: "systems/pf2e/icons/spells/destructive-aura.webp",
        name: "Effect: Aura of Faith",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Aura of Faith]</p>\n<p>Each good-aligned ally within 15 feet deal an extra 1 spirit damage against evil creatures on their first Strike that hits an evil creature each round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 12 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "damage",
                    key: "RollOption",
                    label: "First Stike that hits an evil foe this round",
                    option: "aura-of-faith",
                    toggleable: true,
                },
                {
                    damageType: "good",
                    key: "FlatModifier",
                    label: "Aura of Faith (Allies)",
                    predicate: ["aura-of-faith"],
                    selector: "strike-damage",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-aura-of-life": {
        _id: "FPuICuxBLiDaEbDX",
        img: "systems/pf2e/icons/spells/destructive-aura.webp",
        name: "Effect: Aura of Life",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Aura of Life]</p>\n<p>Your allies within 15 feet gain a +1 status bonus to saves against necromancy effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 14 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [],
                    selector: "saving-throw",
                    type: "status",
                    value: 1,
                },
                { key: "Resistance", type: "void", value: 5 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-aura-of-preservation": {
        _id: "18FHJoazfEmgNkfk",
        img: "systems/pf2e/icons/spells/destructive-aura.webp",
        name: "Effect: Aura of Preservation",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Aura Of Preservation]</p>\n<p>Your allies within 15 feet gain a +1 status bonus to Fortitude and Will saves against effects from aberrations.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 14 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["origin:trait:aberration"],
                    selector: ["fortitude", "will"],
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-aura-of-righteousness": {
        _id: "L0hDj8vFk1IWh01L",
        img: "systems/pf2e/icons/spells/angelic-wings.webp",
        name: "Effect: Aura of Righteousness",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Aura of Righteousness]</p>\n<p>You and all allies within 15 feet gain evil resistance 5.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 14 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [{ key: "Resistance", type: "evil", value: 5 }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-avenge-in-glory": {
        _id: "JQUoBlZKT5N5zO5k",
        img: "systems/pf2e/icons/features/feats/avenge-in-glory.webp",
        name: "Effect: Avenge in Glory",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Avenge in Glory]</p>\n<p><strong>Frequency</strong> once per day</p>\n<p><strong>Access</strong> mountain dwarf ethnicity</p>\n<p><strong>Trigger</strong> An ally within 30 feet gains the @UUID[Compendium.pf2e.conditionitems.Item.Dying] condition.</p>\n<hr />\n<p>You honor your ally's life, gaining temporary Hit Points equal to your level for 1 minute. As long as you have these temporary Hit Points, you gain a +1 circumstance bonus to attack and damage rolls.</p>\n<p>Implemented Effects:</p>\n<ul>\n<li>Temporary hitpoints based on level</li>\n<li>Sets a circumstance bonus of +1 to attack and damage rolls</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                { key: "TempHP", value: "@actor.level" },
                {
                    key: "FlatModifier",
                    selector: ["attack", "strike-damage"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-azarketi-purification": {
        _id: "8rDbWcWmQL0N5FFG",
        img: "icons/magic/nature/leaf-glow-maple-teal.webp",
        name: "Effect: Azarketi Purification",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Azarketi Purification]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Azarketi Purification (vs. ongoing saves against poisons already in your body)",
                    predicate: ["poison"],
                    selector: "saving-throw",
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-battle-medicine-immunity": {
        _id: "2XEYQNZTCGpdkyR6",
        img: "systems/pf2e/icons/features/feats/treat-wounds.webp",
        name: "Effect: Battle Medicine Immunity",
        system: {
            description: {
                value:
                    "<p>Granted when someone uses @UUID[Compendium.pf2e.feats-srd.Item.Battle Medicine] on you, rendering you temporarily immune to Battle Medicine from that person for the duration.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-benevolent-spirit-deck": {
        _id: "k8gB0eDuAlGRoeQj",
        img: "systems/pf2e/icons/spells/dismantle.webp",
        name: "Effect: Benevolent Spirit Deck",
        system: {
            description: {
                value:
                    "<p>You gain a +1 status bonus to AC and resistance depending on your harrow omen.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: true,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    predicate: ["harrow-omen:crowns"],
                    type: "acid",
                    value:
                        "ternary(gte(@actor.level,15),15,ternary(gte(@actor.level,10),10,5))",
                },
                {
                    key: "Resistance",
                    predicate: ["harrow-omen:hammers"],
                    type: "cold",
                    value:
                        "ternary(gte(@actor.level,15),15,ternary(gte(@actor.level,10),10,5))",
                },
                {
                    key: "Resistance",
                    predicate: ["harrow-omen:books"],
                    type: "electricity",
                    value:
                        "ternary(gte(@actor.level,15),15,ternary(gte(@actor.level,10),10,5))",
                },
                {
                    key: "Resistance",
                    predicate: ["harrow-omen:keys"],
                    type: "fire",
                    value:
                        "ternary(gte(@actor.level,15),15,ternary(gte(@actor.level,10),10,5))",
                },
                {
                    key: "Resistance",
                    predicate: ["harrow-omen:stars"],
                    type: "mental",
                    value:
                        "ternary(gte(@actor.level,15),15,ternary(gte(@actor.level,10),10,5))",
                },
                {
                    key: "Resistance",
                    predicate: ["harrow-omen:shields"],
                    type: "poison",
                    value:
                        "ternary(gte(@actor.level,15),15,ternary(gte(@actor.level,10),10,5))",
                },
                { key: "FlatModifier", selector: "ac", type: "status", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-bespell-weapon-force": {
        _id: "GbbwJhwSNLw06XpO",
        img: "systems/pf2e/icons/spells/astral-labyrinth.webp",
        name: "Effect: Bespell Weapon (Force)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bespell Strikes]{Bespell Weapon} if you cast an abjuration spell or an evocation spell that didn't deal damage.</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 force damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectBespellWeaponForce",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "force",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectBespellWeaponForce}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bespell-weapon-mental": {
        _id: "ZSgB3imGveukWUxs",
        img: "systems/pf2e/icons/spells/astral-labyrinth.webp",
        name: "Effect: Bespell Weapon (Mental)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bespell Strikes]{Bespell Weapon} if you cast a divination, enchantment or illusion spell.</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 mental damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectBespellWeaponMental",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "mental",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectBespellWeaponMental}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bespell-weapon-negative": {
        _id: "G1IRkppxJCYdfqXo",
        img: "systems/pf2e/icons/spells/astral-labyrinth.webp",
        name: "Effect: Bespell Weapon (Negative)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bespell Strikes]{Bespell Weapon} if you cast a necromancy spell.</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 negative damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectBespellWeaponNegative",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "void",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectBespellWeaponNegative}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bespell-weapon": {
        _id: "E8MiV00QEhH5n18L",
        img: "systems/pf2e/icons/spells/astral-labyrinth.webp",
        name: "Effect: Bespell Weapon",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bespell Strikes]{Bespell Weapon} if you cast a conjuration or transmution spell.</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectBespellWeapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectBespellWeapon}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-blade-ally": {
        _id: "sCxi8lOH8tWQjLh0",
        img: "systems/pf2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp",
        name: "Effect: Blade Ally",
        system: {
            description: {
                value:
                    "<p>A spirit of battle dwells within your armaments. Select one weapon or @UUID[Compendium.pf2e.equipment-srd.Item.Handwraps of Mighty Blows] when you make your daily preparations. In your hands, the item gains the effect of a property rune.</p>\n<hr />\n<p>From <em>@UUID[Compendium.pf2e.classfeatures.Item.Blade Ally]</em>:</p>\n<p>@UUID[Compendium.pf2e.equipment-srd.Item.Vitalizing]{Disrupting}, @UUID[Compendium.pf2e.equipment-srd.Item.Ghost Touch], @UUID[Compendium.pf2e.equipment-srd.Item.Fearsome], @UUID[Compendium.pf2e.equipment-srd.Item.Returning], or @UUID[Compendium.pf2e.equipment-srd.Item.Shifting]</p>\n<hr />\n<p>From <em>@UUID[Compendium.pf2e.feats-srd.Item.Radiant Blade Spirit]</em>:</p>\n<p>@UUID[Compendium.pf2e.equipment-srd.Item.Flaming], @UUID[Compendium.pf2e.equipment-srd.Item.Anarchic], @UUID[Compendium.pf2e.equipment-srd.Item.Axiomatic], @UUID[Compendium.pf2e.equipment-srd.Item.Holy], or @UUID[Compendium.pf2e.equipment-srd.Item.Unholy]</p>\n<hr />\n<p>From <em>@UUID[Compendium.pf2e.feats-srd.Item.Radiant Blade Master]</em>:</p>\n<p>@UUID[Compendium.pf2e.equipment-srd.Item.Animated]{Dancing}, @UUID[Compendium.pf2e.equipment-srd.Item.Disrupting (Greater)], or @UUID[Compendium.pf2e.equipment-srd.Item.Keen]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: {
                        includeHandwraps: true,
                        ownedItems: true,
                        types: ["weapon"],
                    },
                    flag: "weapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    choices: [
                        {
                            label: "PF2E.WeaponPropertyRune.anarchic.Name",
                            predicate: [
                                "feat:radiant-blade-spirit",
                                { or: ["feature:liberator", "feature:antipaladin"] },
                            ],
                            value: "anarchic",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.axiomatic.Name",
                            predicate: [
                                "feat:radiant-blade-spirit",
                                { or: ["feature:paladin", "feature:tyrant"] },
                            ],
                            value: "axiomatic",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.disrupting.Name",
                            predicate: ["feature:the-tenets-of-good"],
                            value: "disrupting",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.greaterDisrupting.Name",
                            predicate: ["feat:radiant-blade-master"],
                            value: "greater-disrupting",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.fearsome.Name",
                            predicate: ["feature:the-tenets-of-evil"],
                            value: "fearsome",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.flaming.Name",
                            predicate: ["feat:radiant-blade-spirit"],
                            value: "flaming",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.ghostTouch.Name",
                            predicate: ["feature:the-tenets-of-good"],
                            value: "ghost-touch",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.holy.Name",
                            predicate: [
                                "feat:radiant-blade-spirit",
                                "feature:the-tenets-of-good",
                            ],
                            value: "holy",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.keen.Name",
                            predicate: ["feat:radiant-blade-master"],
                            value: "keen",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.returning.Name",
                            value: "returning",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.shifting.Name",
                            value: "shifting",
                        },
                        {
                            label: "PF2E.WeaponPropertyRune.unholy.Name",
                            predicate: [
                                "feat:radiant-blade-spirit",
                                "feature:the-tenets-of-evil",
                            ],
                            value: "unholy",
                        },
                    ],
                    flag: "rune",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Champion.BladeAllyRune",
                },
                {
                    definition: [
                        {
                            or: [
                                "item:id:{item|flags.pf2e.rulesSelections.weapon}",
                                "item:category:{item|flags.pf2e.rulesSelections.weapon}",
                            ],
                        },
                    ],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "property-runes",
                    value: "{item|flags.pf2e.rulesSelections.rune}",
                },
                {
                    key: "CriticalSpecialization",
                    predicate: [
                        {
                            or: [
                                "item:category:{item|flags.pf2e.rulesSelections.weapon}",
                                "item:id:{item|flags.pf2e.rulesSelections.weapon}",
                            ],
                        },
                    ],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-blizzard-evasion": {
        _id: "JF2xCqL6t4UJZtUi",
        img: "systems/pf2e/icons/spells/flowing-strike.webp",
        name: "Effect: Blizzard Evasion",
        system: {
            description: {
                value:
                    "<p>You gain resistance 10 to physical damage and weakness 10 to force damage. You gain a fly speed of 40 feet.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 3,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Monsters of Myth",
            },
            rules: [
                { key: "Resistance", type: "physical", value: 10 },
                { key: "Weakness", type: "force", value: 10 },
                { key: "BaseSpeed", selector: "fly", value: 40 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-boleras-interrogation-critical-failure": {
        _id: "VIScVb6Hl7KwoWfH",
        img: "icons/sundries/gaming/chess-pawn-white-pink.webp",
        name: "Effect: Bolera's Interrogation (Critical Failure)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bolera's Interrogation]</p>\n<p>On a critical failure, the creature finds itself unable to speak any deliberate and intentional lies and takes a -4 penalty to Deception checks. This effect lasts for 10 minutes as long as you are within 30 feet of the target and the target is aware that you are using the ability against it. If you begin a new interrogation, this effect ends for any previous target. After your interrogation ends, the target is immune to this ability for 24 hours.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #157: Devil at the Dreaming Palace",
            },
            rules: [{ key: "FlatModifier", selector: "deception", value: -4 }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-boleras-interrogation-failure": {
        _id: "bmVwaN0C4e9fE2Sz",
        img: "icons/sundries/gaming/chess-pawn-white-pink.webp",
        name: "Effect: Bolera's Interrogation (failure)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bolera's Interrogation]</p>\n<p>On a failure, the creature finds itself unable to speak any deliberate and intentional lies and takes a -2 penalty to Deception checks. This effect lasts for 10 minutes as long as you are within 30 feet of the target and the target is aware that you are using the ability against it. If you begin a new interrogation, this effect ends for any previous target. After your interrogation ends, the target is immune to this ability for 24 hours.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #157: Devil at the Dreaming Palace",
            },
            rules: [{ key: "FlatModifier", selector: "deception", value: -2 }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bon-mot-critical-success": {
        _id: "CtrZFI3RV0yPNzTv",
        img: "systems/pf2e/icons/features/feats/bon-mot.webp",
        name: "Effect: Bon Mot (Critical Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bon Mot]</p>\n<p>You are distracted and takes a -3 status penalty to Perception and Will saves for 1 minute.</p>\n<p>You can end the effect early with a retort to your Bon Mot. This can either be a single action that has the concentrate trait or an appropriate skill action to frame their retort. The GM determines which skill actions qualify, though they must take at least 1 action. Typically, the retort needs to use a linguistic Charisma-based skill action.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["perception", "will"],
                    type: "status",
                    value: -3,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bon-mot": {
        _id: "GoSls6SKCFmSoDxT",
        img: "systems/pf2e/icons/features/feats/bon-mot.webp",
        name: "Effect: Bon Mot",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bon Mot]</p>\n<p>You are distracted and takes a -2 status penalty to Perception and Will saves for 1 minute.</p>\n<p>You can end the effect early with a retort to your Bon Mot. This can either be a single action that has the concentrate trait or an appropriate skill action to frame their retort. The GM determines which skill actions qualify, though they must take at least 1 action. Typically, the retort needs to use a linguistic Charisma-based skill action.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["perception", "will"],
                    type: "status",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bone-spikes": {
        _id: "ZsO5juyylVoxUkXh",
        img: "icons/commodities/bones/bones-stack-tan.webp",
        name: "Effect: Bone Spikes",
        system: {
            description: {
                value:
                    "<p>You can make bone spike unarmed Strikes, which deal 1d6 piercing damage and have the versatile S and sweep traits.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    key: "Strike",
                    label: "PF2E.SpecificRule.DeviantAbilities.BoneSpikes.StrikeLabel",
                    slug: "bone-spike",
                    traits: ["versatile-s", "sweep", "unarmed"],
                },
                {
                    definition: ["item:slug:bone-spike"],
                    key: "AdjustStrike",
                    mode: "add",
                    predicate: ["awakening:bone-spikes:reach:active"],
                    property: "weapon-traits",
                    value: "reach",
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.DeviantAbilities.BoneSpikes.ReachLabel",
                    option: "awakening:bone-spikes:reach:active",
                    predicate: ["awakening:bone-spikes:reach"],
                    toggleable: true,
                },
                {
                    category: "persistent",
                    damageType: "poison",
                    diceNumber:
                        "ternary(gte(@actor.level,18),3,ternary(gte(@actor.level,10),2,1))",
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: ["awakening:bone-spikes:poison"],
                    selector: "{item|_id}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bone-swarm": {
        _id: "r4kb2zDepFeczMsl",
        img: "icons/commodities/bones/bones-stack-tan.webp",
        name: "Effect: Bone Swarm",
        system: {
            description: {
                value:
                    "<p>You become Huge, gain the swarm trait, and gain a fly Speed of 40 feet. As a swarm, you have the following characteristics.</p>\n<ul>\n<li>You are immune to the @UUID[Compendium.pf2e.conditionitems.Item.Grabbed], @UUID[Compendium.pf2e.conditionitems.Item.Prone], and @UUID[Compendium.pf2e.conditionitems.Item.Restrained] conditions.</li>\n<li>You have weakness 5 to area and splash damage.</li>\n<li>You can occupy the same space as other creatures and must do so to use your damaging ability.</li>\n<li>As a 2-action activity, you can deal @Damage[10d6[bludgeoning]] damage to all creatures sharing your space (@Check[type:reflex|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save with a DC equal to your class DC or spell DC, whichever is higher).</li>\n<li>You can't speak, Cast Spells, use manipulate actions requiring your hands, Activate magic items, or make any Strikes with your normal body.</li>\n<li>You don't gain the swarm mind ability, so you are still affected normally by mental effects. You also retain the benefits of skeleton feats that don't require communication or the use of hands.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                { key: "Weakness", type: ["area-damage", "splash-damage"], value: 5 },
                { key: "CreatureSize", value: "huge" },
                { key: "Immunity", type: ["grabbed", "prone", "restrained"] },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-brightness-seeker": {
        _id: "xPg5wzzKNxJy18rU",
        img: "systems/pf2e/icons/spells/moonlight-bridge.webp",
        name: "Effect: Brightness Seeker",
        system: {
            description: {
                value:
                    "<p><strong>Trigger</strong> You attempt an attack roll, skill check, or saving throw while performing the course of action from your <em>@UUID[Compendium.pf2e.spells-srd.Item.Augury]</em>, but you haven't rolled yet.</p>\n<hr />\n<p><strong>Effect</strong> You gain a +1 status bonus to the triggering check, or a +2 status bonus if the result of the augury was woe and you proceeded anyway.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 30,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["call-upon-the-brightness", "brightness-seeker:weal"],
                    selector: "attack",
                    slug: "weal-attack",
                    type: "status",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: ["call-upon-the-brightness", "brightness-seeker:weal"],
                    selector: "skill-check",
                    slug: "weal-skill",
                    type: "status",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: ["call-upon-the-brightness", "brightness-seeker:weal"],
                    selector: "saving-throw",
                    slug: "weal-save",
                    type: "status",
                    value: 1,
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.Elf.BrightnessSeeker.Weal",
                            value: "weal",
                        },
                        {
                            label: "PF2E.SpecificRule.Elf.BrightnessSeeker.Woe",
                            value: "woe",
                        },
                        {
                            label: "PF2E.SpecificRule.Elf.BrightnessSeeker.WealAndWoe",
                            value: "weal",
                        },
                    ],
                    flag: "brightnessSeeker",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Elf.BrightnessSeeker.Prompt",
                    rollOption: "brightness-seeker",
                },
                {
                    key: "FlatModifier",
                    predicate: ["call-upon-the-brightness", "brightness-seeker:woe"],
                    selector: "attack",
                    slug: "woe-attack",
                    type: "status",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["call-upon-the-brightness", "brightness-seeker:woe"],
                    selector: "skill-check",
                    slug: "woe-skill",
                    type: "status",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["call-upon-the-brightness", "brightness-seeker:woe"],
                    selector: "saving-throw",
                    slug: "woe-save",
                    type: "status",
                    value: 2,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.Elf.BrightnessSeeker.Label",
                    option: "call-upon-the-brightness",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-bristle": {
        _id: "4Zj71naHbY6O9ggP",
        img: "icons/commodities/claws/claws-plain-brown-orange.webp",
        name: "Effect: Bristle",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Bristle]</p>\n<p>You curl into a posture that splays out your bone spines. You gain a +1 circumstance bonus to AC until the start of your next turn.</p>\n<hr />\n<p><strong>Special</strong> If you have the @UUID[Compendium.pf2e.actionspf2e.Item.Barbed Quills] reaction or a quills unarmed attack, each gains a +1 circumstance bonus to damage rolls until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
                {
                    key: "FlatModifier",
                    selector: ["barbed-quills-inline-damage", "quills-damage"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-calculate-threats": {
        _id: "P6druSuWIVoLrXJR",
        img: "systems/pf2e/icons/features/classes/precise-discipline.webp",
        name: "Effect: Calculate Threats",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Calculate Threats].</p>\n<p>You gain a +2 circumstance bonus to AC and Reflex saves until the beginning of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["ac", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-cast-down": {
        _id: "Ve1CRFI8ikL6dqcL",
        img: "icons/magic/holy/projectiles-blades-salvo-yellow.webp",
        name: "Effect: Cast Down",
        system: {
            description: {
                value: "<p>You take a –10-foot status penalty to your Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "status",
                    value: "-10",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-cat-nap": {
        _id: "l3S9i2UWGhSO58YX",
        img: "systems/pf2e/icons/spells/sleep.webp",
        name: "Effect: Cat Nap",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Cat Nap].</p>\n<p>You gain temporary Hit Points equal to your level that last for 10 minutes.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "TempHP", value: "@actor.level" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-catfolk-dance": {
        _id: "5bEnBqVOgdp4gROP",
        img: "systems/pf2e/icons/spells/uncontrollable-dance.webp",
        name: "Effect: Catfolk Dance",
        system: {
            description: {
                value:
                    "<p>The target creature gains a -2 circumstance penalty to Reflex saves</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "reflex",
                    type: "circumstance",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-cavaliers-banner": {
        _id: "xDT10fUWp8UStSZR",
        img: "systems/pf2e/icons/features/feats/cavaliers-banner.webp",
        name: "Effect: Cavalier's Banner",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Cavalier's Banner]</p>\n<p>You fly the banner of your pledge from your mount, raising your allies' spirits. You and all allies within 30 feet gain a +1 circumstance bonus to Will saves and DCs against fear effects. If your banner is destroyed or removed, allies within 30 feet become @UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 1}.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Cavalier's Banner (vs fear)",
                    predicate: ["fear"],
                    selector: "will",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-ceremony-of-protection": {
        _id: "9kNbiZPOM2wy60ao",
        img: "systems/pf2e/icons/equipment/shields/specific-shields/spellguard-shield.webp",
        name: "Effect: Ceremony of Protection",
        system: {
            description: {
                value:
                    "<p>You gain a +1 circumstance bonus to AC until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-champions-resistance": {
        _id: "DawVHfoPKbPJsz4k",
        img: "systems/pf2e/icons/spells/dancing-shield.webp",
        name: "Effect: Champion's Resistance",
        system: {
            description: {
                value:
                    "<p>The ally gains resistance to all damage against the triggering damage equal to 2 + your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "all-damage",
                    value: "@item.origin.level+2",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-channel-the-godmind": {
        _id: "7hQnwwsixZmXzdIT",
        img: "systems/pf2e/icons/spells/entrancing-eyes.webp",
        name: "Effect: Channel the Godmind",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Channel The Godmind].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { acuity: "precise", key: "Sense", range: 60, selector: "motionsense" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-clue-in-detectives-readiness-expertise": {
        _id: "z4pnE8KyUdEkJmru",
        img: "icons/tools/scribal/magnifying-glass.webp",
        name: "Effect: Clue In (Detective's Readiness, Expertise)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Clue In] if the investigator has @UUID[Compendium.pf2e.feats-srd.Item.Detective's Readiness] and @UUID[Compendium.pf2e.classfeatures.Item.Investigator Expertise].</p>\n<p>Whenever you attempt a saving throw against the subject of a lead, you gain a +2 circumstance bonus to the check.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Clue In",
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-clue-in-detectives-readiness": {
        _id: "rUKtp4q8y73AvCbo",
        img: "icons/tools/scribal/magnifying-glass.webp",
        name: "Effect: Clue In (Detective's Readiness)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Clue In] if the investigator has @UUID[Compendium.pf2e.feats-srd.Item.Detective's Readiness].</p>\n<p>Whenever you attempt a saving throw against the subject of a lead, you gain a +1 circumstance bonus to the check.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Clue In",
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-clue-in-expertise": {
        _id: "uA1Ofqoyi0UiZIPk",
        img: "icons/tools/scribal/magnifying-glass.webp",
        name: "Effect: Clue In (Expertise)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Clue In] if the investigator has @UUID[Compendium.pf2e.classfeatures.Item.Investigator Expertise].</p>\n<p>Whenever you attempt a Perception or skill check to investigate a designated subject, you gain a +2 circumstance bonus to the check.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["perception", "skill-check"],
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-clue-in": {
        _id: "vhSYlQiAQMLuXqoc",
        img: "icons/tools/scribal/magnifying-glass.webp",
        name: "Effect: Clue In",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Clue In]</p>\n<p>Whenever you attempt a Perception or skill check to investigate a designated subject, you gain a +1 circumstance bonus to the check.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["perception", "skill-check"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-combat-mentor-boon-pfs": {
        _id: "q2kY0TzXloJ8HLNO",
        img: "systems/pf2e/icons/features/feats/pfs-combat-mentor-boon.webp",
        name: "Effect: Combat Mentor Boon (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you provide pointers and lead drills that ensure your newer colleagues' attacks strike true. For any PCs benefiting from a Level Bump and whose levels are lower than yours, you increase the Level Bump's modifier to attack rolls and spell attack rolls to 2.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's attack roll and spell attack roll modifiers by 1.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Combat Mentor Adjustment",
                    selector: "attack-roll",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-consume-energy-augment-strike": {
        _id: "eMsI1lR0SuJBCYjn",
        img: "systems/pf2e/icons/spells/divinity-leech.webp",
        name: "Effect: Consume Energy (Augment Strike)",
        system: {
            description: {
                value:
                    "<p>Strikes with the chosen weapon or unarmed attack deal an additional 1d6 damage of a type matching the energy you consumed.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    adjustName: false,
                    choices: { attacks: true },
                    flag: "strike",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "{actor|flags.pf2e.deviantAbilities.dragon.damageType}",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "{item|flags.pf2e.rulesSelections.strike}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-control-tower": {
        _id: "mkIamZGtQaSsUWLk",
        img: "icons/environment/settlement/watchtower-tribe.webp",
        name: "Effect: Control Tower",
        system: {
            description: {
                value:
                    "<p>Your keen senses and ability to process battlefield information have dramatically improved, allowing you to drastically reduce the advantage of unseen foes. You and allies in your overwatch field gain a +2 circumstance bonus when using the Seek action to find hidden or undetected creatures within the overwatch field. You and your allies don't have to succeed at a flat check to target a concealed creature within your overwatch field. When you or an ally targets a hidden creature in your overwatch field, reduce the DC of the flat check to 5.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    domain: "perception",
                    key: "RollOption",
                    label: "Seeking a Hidden or Undetected Target",
                    option: "seeking-hidden-undetected",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: ["seeking-hidden-undetected"],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-core-cannon": {
        _id: "Ljrx4N5XACKSk1Ks",
        img: "icons/magic/unholy/beam-impact-purple.webp",
        name: "Effect: Core Cannon",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Core Cannon]</p>\n<p>Your body transforms into a powerful magical cannon.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                { domain: "all", key: "RollOption", option: "core-cannon" },
                {
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Immobilized",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-corpse-killers-defiance-lower-level": {
        _id: "ctiTtuRWFjAnWdYQ",
        img: "systems/pf2e/icons/spells/drop-dead.webp",
        name: "Effect: Corpse-Killer's Defiance (Lower Level)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Corpse-Killer's Defiance]</p>\n<p>You gain a +1 status bonus to attack and damage rolls against undead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["target:mode:undead"],
                    selector: ["attack", "damage"],
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-corpse-killers-defiance": {
        _id: "3WzaQKb10AYLdTsQ",
        img: "systems/pf2e/icons/spells/drop-dead.webp",
        name: "Effect: Corpse-Killer's Defiance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Corpse-Killer's Defiance]</p>\n<p>You gain a +2 status bonus to attack and damage rolls against undead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 2,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["target:mode:undead"],
                    selector: ["attack", "damage"],
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-creeping-ashes": {
        _id: "ybc7tZwByenCzow8",
        img: "icons/magic/fire/flame-burning-skeleton-explosion.webp",
        name: "Effect: Creeping Ashes",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feat-effects.Item.Effect: Curse of Creeping Ashes]</p>\n<p><strong>Moderate Curse</strong></p>\n<p>You and creatures in the aura are concealed.</p>\n<p><strong>Major Curse</strong></p>\n<p>You and all creatures gain weakness to fire equal to half your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #185: A Taste of Ashes",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Concealed",
                },
                {
                    key: "Weakness",
                    predicate: [
                        { gte: ["parent:origin:effect:curse-of-creeping-ashes", 3] },
                    ],
                    type: "fire",
                    value: "floor(@item.origin.level/2)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-crimson-shroud": {
        _id: "6YhbQmOmbmy84W1C",
        img: "systems/pf2e/icons/spells/sanguine-mist.webp",
        name: "Effect: Crimson Shroud",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Crimson Shroud].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [
                {
                    details: "",
                    key: "FastHealing",
                    type: "fast-healing",
                    value: "floor(@actor.level / 2)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-current-spell-air": {
        _id: "T5rsLTqS274B9Mly",
        img: "icons/magic/water/pseudopod-swirl-blue.webp",
        name: "Effect: Current Spell (Air)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Current Spell] if you cast a spell with the air trait.</p>\n<p>You gain a +1 circumstance bonus to AC or a +2 circumstance bonus against ranged attacks. You also gain a +1 circumstance bonus to all saves against effects with the air trait.</p>\n<p>This effect has the air trait.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
                {
                    key: "FlatModifier",
                    predicate: ["ranged"],
                    selector: "ac",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["air"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-current-spell-water": {
        _id: "DhvSMIFs6xifgQHX",
        img: "icons/magic/water/pseudopod-swirl-blue.webp",
        name: "Effect: Current Spell (Water)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Current Spell] if you cast a spell with the water trait.</p>\n<p>You gain a +1 circumstance bonus to AC or a +2 circumstance bonus against ranged attacks. You also gain a +1 circumstance bonus to all saves against effects with the water trait.</p>\n<p>This effect has the water trait.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
                {
                    key: "FlatModifier",
                    predicate: ["ranged"],
                    selector: "ac",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["water"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-ancestral-meddling": {
        _id: "V6lnFOq998B76Rr0",
        img: "icons/environment/wilderness/arch-stone.webp",
        name: "Effect: Curse of Ancestral Meddling",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Ancestors]</p>\n<h3>Curse of Ancestral Meddling</h3>\n<p>The ancestral spirits you commune with haunt you and meddle with your belongings and actions, either out of a well-intentioned (but ultimately detrimental) attempt to assist you, as punishment for your audacity in circumventing the traditional means of achieving divine power, for their own amusement, or a mixture of the above. Your hair, clothing, and belongings constantly shift and stir, seemingly of their own volition.</p>\n<p><strong>Minor Curse</strong></p>\n<p>One of your ancestors becomes predominant in their meddling. The first time you gain this effect each day, roll [[/r 1d4]] on the list below to determine which type of ancestor becomes predominant. This predominant ancestor guides you to use their preferred type of action. When you try to use one of the types of actions listed for the other ancestors, you must succeed at a @Check[type:flat|dc:4]. On a failure, you spend the action but gain no effect (though you don't lose the spell if you were Casting a Spell). If your action would take 1 minute or longer, it's long enough that you can overcome the meddling, and you don't need to attempt a flat check.</p>\n<p>During combat or another tense, round-by-round encounter, other ancestors wrestle for control of your actions. When you roll initiative, and then at the end of each of your turns during the encounter, roll [[/r 1d4]] and change your predominant ancestor appropriately. Once the encounter ends, you return to the influence of the ancestor you first rolled for the day.</p>\n<p><strong>Moderate Curse</strong></p>\n<p>The flat check DC to use other actions is 6, and you get the moderate curse benefit listed for your predominant ancestor in the list below.</p>\n<p><strong>Major Curse (11th)</strong></p>\n<p>The flat check DC is 8, and you get the major curse benefit listed for your predominant ancestor instead of the moderate curse benefit.</p>\n<hr />\n<h4>Ancestral Influence</h4>\n<ol>\n<li>Martial Ancestor\n<ul>\n<li><strong>Preferred action</strong> Strikes</li>\n<li><strong>Moderate curse benefit</strong> Your Strikes gain a +1 status bonus to attack rolls and a +2 status bonus to damage.</li>\n<li><strong>Major curse benefit</strong> Your Strikes gain a +1 status bonus to attack rolls and a +6 status bonus to damage</li>\n</ul>\n</li>\n<li>Skillful Ancestor\n<ul>\n<li><strong>Preferred action</strong> Perception and Skill actions</li>\n<li><strong>Moderate curse benefit</strong> You gain a +1 status bonus to skill checks and Perception checks.</li>\n<li><strong>Major curse benefit</strong> You gain a +2 status bonus to skill checks and Perception checks.</li>\n</ul>\n</li>\n<li>Spellcasting Ancestor\n<ul>\n<li><strong>Preferred action</strong> Cast a Spell</li>\n<li><strong>Moderate curse benefit</strong> Non-cantrip spells without a duration gain a status bonus to their damage and healing equal to the spell's level.</li>\n<li><strong>Major curse benefit</strong> Non-cantrip spells without a duration gain a status bonus to their damage and healing equal to the spell's level + 3.</li>\n</ul>\n</li>\n<li>You choose which ancestor guides your actions</li>\n</ol>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:1",
                        {
                            or: [
                                "ancestral-influence:skillful",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                    ],
                    selector: "strike-attack-roll",
                    text: "PF2E.OracleCurses.Ancestor.MinorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:1",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                        { nor: ["check:type:initiative", "downtime", "exploration"] },
                    ],
                    selector: "skill-check",
                    text: "PF2E.OracleCurses.Ancestor.MinorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:1",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                        { nor: ["check:type:initiative", "downtime", "exploration"] },
                    ],
                    selector: "perception",
                    text: "PF2E.OracleCurses.Ancestor.MinorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:1",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:skillful",
                            ],
                        },
                    ],
                    selector: "spell-attack",
                    text: "PF2E.OracleCurses.Ancestor.MinorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:1",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:skillful",
                            ],
                        },
                        { not: "item:trait:attack" },
                    ],
                    selector: "spell-damage",
                    text: "PF2E.OracleCurses.Ancestor.MinorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "class:oracle",
                        "parent:badge:value:2",
                        {
                            or: [
                                "ancestral-influence:skillful",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                    ],
                    selector: "strike-attack-roll",
                    text: "PF2E.OracleCurses.Ancestor.ModerateFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "class:oracle",
                        "parent:badge:value:2",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                        { nor: ["check:type:initiative", "downtime", "exploration"] },
                    ],
                    selector: "skill-check",
                    text: "PF2E.OracleCurses.Ancestor.ModerateFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "class:oracle",
                        "parent:badge:value:2",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                        { nor: ["check:type:initiative", "downtime", "exploration"] },
                    ],
                    selector: "perception",
                    text: "PF2E.OracleCurses.Ancestor.ModerateFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "class:oracle",
                        "parent:badge:value:2",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:skillful",
                            ],
                        },
                    ],
                    selector: "spell-attack",
                    text: "PF2E.OracleCurses.Ancestor.ModerateFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "class:oracle",
                        "parent:badge:value:2",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:skillful",
                            ],
                        },
                        { not: "item:trait:attack" },
                    ],
                    selector: "spell-damage",
                    text: "PF2E.OracleCurses.Ancestor.ModerateFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:3",
                        {
                            or: [
                                "ancestral-influence:skillful",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                    ],
                    selector: "strike-attack-roll",
                    text: "PF2E.OracleCurses.Ancestor.MajorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:3",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                        { nor: ["check:type:initiative", "downtime", "exploration"] },
                    ],
                    selector: "skill-check",
                    text: "PF2E.OracleCurses.Ancestor.MajorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:3",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:spellcasting",
                            ],
                        },
                        { nor: ["check:type:initiative", "downtime", "exploration"] },
                    ],
                    selector: "perception",
                    text: "PF2E.OracleCurses.Ancestor.MajorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:3",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:skillful",
                            ],
                        },
                    ],
                    selector: "spell-attack-roll",
                    text: "PF2E.OracleCurses.Ancestor.MajorFailure",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        "parent:badge:value:3",
                        {
                            or: [
                                "ancestral-influence:martial",
                                "ancestral-influence:skillful",
                            ],
                        },
                        { not: "item:trait:attack" },
                    ],
                    selector: "spell-damage",
                    text: "PF2E.OracleCurses.Ancestor.MajorFailure",
                    title: "{item|name}",
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "class:oracle",
                        "item:duration:0",
                        { not: "item:trait:cantrip" },
                        { gte: ["parent:badge:value", 2] },
                        "ancestral-influence:spellcasting",
                    ],
                    selector: "spell-damage",
                    slug: "curse-spell-damage",
                    type: "status",
                    value: "@spell.rank",
                },
                {
                    key: "AdjustModifier",
                    mode: "add",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: "spell-damage",
                    slug: "curse-spell-damage",
                    value: 3,
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "class:oracle",
                        "ancestral-influence:martial",
                        { gte: ["parent:badge:value", 2] },
                    ],
                    selector: "strike-attack-roll",
                    slug: "curse-battle-attack",
                    type: "status",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "class:oracle",
                        "ancestral-influence:martial",
                        { gte: ["parent:badge:value", 2] },
                    ],
                    selector: "strike-damage",
                    slug: "curse-martial-damage",
                    type: "status",
                    value: 2,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: "strike-damage",
                    slug: "curse-martial-damage",
                    value: 6,
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "class:oracle",
                        { gte: ["parent:badge:value", 2] },
                        "ancestral-influence:skillful",
                    ],
                    selector: ["skill-check", "perception"],
                    slug: "curse-skill",
                    type: "status",
                    value: 1,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: ["skill-check", "perception"],
                    slug: "curse-skill",
                    value: 2,
                },
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.feat-effects.Item.Effect: Ancestral Influence",
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-creeping-ashes": {
        _id: "G4L49aMxHqO2yqxi",
        img: "icons/magic/fire/flame-burning-skeleton-explosion.webp",
        name: "Effect: Curse of Creeping Ashes",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Ash]</p>\n<h3>Curse of Creeping Ashes</h3>\n<p>Your body is slowly being consumed by the fires of your internal power, purifying you with each passing day. You are occasionally wracked with dry, wheezing coughs, and wherever you go you leave behind a fine trace of ash that falls from your body.</p>\n<p><strong>Minor Curse</strong></p>\n<p>The smoldering furnace of power within you begins to feed on your body and generate ash, which you inhale with every breath and leave behind with every step, impeding your footing. You take a –1 penalty on Constitution-based checks, such as Fortitude saves, and your Speed is reduced by 10 feet.</p>\n<p><strong>Moderate Curse</strong></p>\n<p>The ash you produce intensifies and fills the area around you, obscuring details and making the ground challenging to navigate. You are @UUID[Compendium.pf2e.conditionitems.Item.Dazzled]. An aura of ash surrounds you in a 10-foot emanation. You and creatures in the aura are @UUID[Compendium.pf2e.conditionitems.Item.Concealed]. If you do not move for 1 round, heaps of ashes settle in the aura, creating difficult terrain that lasts until you move (when the ashes blow away).</p>\n<p><strong>Major Curse (11th)</strong></p>\n<p>You and nearby creatures collapse into ash with the slightest flame. Within your moderate curse's aura, you and all creatures gain weakness to fire equal to half your level. If a creature other than you in this aura is killed by fire damage, its body collapses into ash. Objects and structures in your aura halve their Hardness, and any parts of the object or structures in your aura that are reduced to 0 Hit Points collapse into ash.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #185: A Taste of Ashes",
            },
            rules: [
                { key: "FlatModifier", selector: "con-based", value: -1 },
                {
                    effects: [
                        {
                            affects: "all",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Creeping Ashes",
                        },
                    ],
                    key: "Aura",
                    predicate: ["class:oracle", { gt: ["parent:badge:value", 1] }],
                    radius: 10,
                    slug: "ashes-curse",
                    traits: ["oracle"],
                },
                { key: "FlatModifier", selector: "land-speed", value: -10 },
                {
                    inMemoryOnly: true,
                    key: "GrantItem",
                    predicate: ["class:oracle", { gte: ["parent:badge:value", 2] }],
                    uuid: "Compendium.pf2e.conditionitems.Item.Dazzled",
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-engulfing-flames": {
        _id: "hqeR9faxHj0NDFFP",
        img: "icons/magic/fire/flame-burning-campfire-orange.webp",
        name: "Effect: Curse of Engulfing Flames",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Flames]</p>\n<h3>Curse of Engulfing Flames</h3>\n<p>You see flames and smoke wherever you look. These flames might be imagined, or they might be a preternatural glimpse of the metaphorical fires that empower the entire multiverse-but you always see them. Fires flare noticeably (though not dangerously) in your presence, you occasionally smoke slightly, and your body is almost painfully hot to the touch.</p>\n<h4>Minor Curse</h4>\n<p>The smoke, heat, and crackling flames of your curse fill your vision and all your other senses.</p>\n<p>Creatures further than 30 feet are @UUID[Compendium.pf2e.conditionitems.Item.Concealed] from you. You can't benefit from effects that would allow you to ignore or mitigate this concealment, as normal for effects of an oracular curse.</p>\n<h4>Moderate Curse</h4>\n<p>Smoke and flickering visions of flame fill your senses more completely, and harmless flickers of obscuring flames also fill your space.</p>\n<p>You are concealed from other creatures, though as the other creatures aren't cursed themselves, they can benefit from effects that would allow them to ignore or mitigate the concealed condition, as normal. All other creatures and objects are concealed from you regardless of distance; however, when casting a fire spell, you automatically succeed at the flat check for this concealed condition for targets within 30 feet.</p>\n<p>All your senses become imprecise beyond 30 feet, meaning everything past 30 feet that you'd normally be able to see is @UUID[Compendium.pf2e.conditionitems.Item.Hidden] from you.</p>\n<h4>Major Curse (11th)</h4>\n<p>The flames surrounding you are no longer simply visions.</p>\n<p>An aura of fire surrounds you in a 10-foot emanation, dealing @Damage[4d6[fire]] damage (basic Reflex save) to all other creatures in the aura at the end of each of your turns. You lose [[/r 1d6]] Hit Points at the end of your turn each round, with no save; if you have a weakness to fire, increase the number of HP you lose by that weakness.</p>\n<p>You can suppress your aura until the start of your next turn by spending a single action, which has the concentrate trait, to diminish the flames, causing neither you nor anyone in the aura to take damage. While Refocusing to reduce your curse, you are continually diminishing the flames, so you don't lose HP. The flames subside if you fall @UUID[Compendium.pf2e.conditionitems.Item.Unconscious], but they resume when you wake up unless you rested for long enough to reset your curse. As usual for oracular curses, you can't mitigate or reduce the lost Hit Points in any way, though you can still heal the lost HP normally after the fact.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    inMemoryOnly: true,
                    key: "GrantItem",
                    predicate: ["class:oracle", { gte: ["parent:badge:value", 2] }],
                    uuid: "Compendium.pf2e.conditionitems.Item.Concealed",
                },
                {
                    key: "Aura",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    radius: 10,
                    slug: "flames-curse",
                    traits: ["oracle"],
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-living-death": {
        _id: "6fObd480rDBkFwZ3",
        img: "systems/pf2e/icons/features/classes/bones-mystery.webp",
        name: "Effect: Curse of Living Death",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Bones]</p>\n<h3>Curse of Living Death</h3>\n<p>Your body is slowly decaying even though you are alive, and using your powers furthers this unnatural living death. You carry a touch of the grave about you, manifesting as bloodless pallor, a faint smell of earth, or deathly cold skin.</p>\n<h4>Minor Curse</h4>\n<p>Bones protrude through your skin and your flesh rots, combining with a stench of decay and an unearthly chill. Non-magical effects that would restore your Hit Points only grant you half as many HP as normal.</p>\n<h4>Moderate Curse</h4>\n<p>Your dead flesh continues to rot, affecting your health. You become @UUID[Compendium.pf2e.conditionitems.Item.Drained]{Drained 1}, and this drained condition is cumulative with any other drained conditions you gain. This drained condition is removed only when you Refocus; effects that normally remove the drained condition reduce your drained condition to drained 1 instead.</p>\n<p>In addition, you gain resistance to poison equal to half your level. You gain a +4 status bonus to saves against diseases, poisons, and death effects, and if you roll a success on such a save, you get a critical success instead.</p>\n<h4>Major Curse (11th)</h4>\n<p>You stand just steps from the grave. You become @UUID[Compendium.pf2e.conditionitems.Item.Wounded]{Wounded 1}. This wounded condition is removed only when you Refocus; effects that normally remove the wounded condition reduce your wounded condition to wounded 1 instead.</p>\n<p>When you would attempt a recovery check, you can choose to get an automatic success instead of rolling, and if you roll a critical failure on a save against a disease, poison, or death effect, you get a failure instead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        { gte: ["parent:badge:value", 2] },
                        { or: ["disease", "poison", "death"] },
                    ],
                    selector: "saving-throw",
                    type: "status",
                    value: 4,
                },
                {
                    key: "Note",
                    predicate: [
                        { gte: ["parent:badge:value", 2] },
                        { or: ["disease", "poison", "death"] },
                    ],
                    selector: "saving-throw",
                    text: "PF2E.OracleCurses.Bones.ModerateUpgrade",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: [
                        { gte: ["parent:badge:value", 3] },
                        { or: ["disease", "poison", "death"] },
                    ],
                    selector: "saving-throw",
                    text: "PF2E.OracleCurses.Bones.MajorUpgrade",
                    title: "{item|name}",
                },
                {
                    adjustment: { criticalFailure: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: [
                        { gte: ["parent:badge:value", 3] },
                        { or: ["disease", "poison", "death"] },
                    ],
                    selector: "saving-throw",
                    type: "save",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: [
                        { gte: ["parent:badge:value", 2] },
                        { or: ["disease", "poison", "death"] },
                    ],
                    selector: "saving-throw",
                    type: "save",
                },
                {
                    key: "Resistance",
                    predicate: [{ gte: ["parent:badge:value", 2] }],
                    type: "poison",
                    value: "floor(@actor.level/2)",
                },
                {
                    allowDuplicate: false,
                    inMemoryOnly: true,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    predicate: [{ gte: ["parent:badge:value", 2] }],
                    reevaluateOnUpdate: true,
                    uuid: "Compendium.pf2e.conditionitems.Item.Drained",
                },
                {
                    allowDuplicate: false,
                    inMemoryOnly: true,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    reevaluateOnUpdate: true,
                    uuid: "Compendium.pf2e.conditionitems.Item.Wounded",
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-outpouring-life": {
        _id: "EtFMN1ZLkL7sUk01",
        img: "icons/commodities/flowers/lotus-pink.webp",
        name: "Effect: Curse of Outpouring Life",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Life]</p>\n<h3>Curse of Outpouring Life</h3>\n<p>Life energy flows outward from you and connects you to all living things, but you expend your vital essence to do so. Your presence comforts the ill and injured, causes scars to fade slightly, spurs new growth in plants, and otherwise infuses your surroundings with vitality.</p>\n<h4>Minor Curse</h4>\n<p>As your life force seeps outward, it becomes more difficult to keep your body functioning. Effects that restore Hit Points to you take a status penalty equal to half your level (minimum 1) to the number of HP you recover.</p>\n<h4>Moderate Curse</h4>\n<p>The flow of life energy away from you can't be reversed.</p>\n<p>In addition to the effects of your minor curse, you can't be healed by magical effects originating from other creatures. However, if you are unconscious, magical effects can restore you to 1 HP (but no higher). You are affected normally by healing elixirs, potions, and other items.</p>\n<p>When you cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Heal]</em> and all your targets are living creatures, you roll d12s instead of d8s for the amount of healing.</p>\n<p>Whenever you finish casting a non-cantrip spell, you restore Hit Points equal to the spell level to your choice of either one target of the spell or the creature nearest to you. You can't heal yourself in this way. This healing has the healing, necromancy, and positive traits, as well as the tradition trait of the spell.</p>\n<h4>Major Curse (11th)</h4>\n<p>Life energy tears through you to empower your magic. Some of your spells carry positive energy with them.</p>\n<p>Each time you use a spell slot to cast a 5th-level or higher spell that takes 2 or more actions to cast, you disperse positive energy in a @Template[type:burst|distance:30] with the effects of a 3-action <em>@UUID[Compendium.pf2e.spells-srd.Item.Heal]</em> spell with a level 4 lower than that of the spell you cast. This healing occurs immediately after you finish Casting the Spell. You don't benefit from this healing. Instead, you lose double the number of Hit Points rolled for the heal spell.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "healing-received",
                    type: "status",
                    value: "-max(floor(@actor.level/2),1)",
                },
                {
                    key: "DamageDice",
                    override: { dieSize: "d12" },
                    predicate: [
                        "class:oracle",
                        "item:slug:heal",
                        { gte: ["parent:badge:value", 2] },
                        "all-living-targets",
                    ],
                    selector: "spell-damage",
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.OracleCurses.Life.ToggleLabel",
                    option: "all-living-targets",
                    predicate: ["class:oracle", { gte: ["parent:badge:value", 2] }],
                    toggleable: true,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-the-heros-burden": {
        _id: "pQ3EjUm1lZW9t3el",
        img: "systems/pf2e/icons/features/classes/battle-mystery.webp",
        name: "Effect: Curse of the Hero's Burden",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Battle]</p>\n<h3>Curse of the Hero's Burden</h3>\n<p>You thrive while adrenaline flows and your life depends on your might alone, but holding the collective battle prowess of the ages within you leaves your body weakened after a fight. You smell faintly of steel and blood no matter how you try to remove or mask the scent, you appear more muscular than you actually are, and you hear the faint clash and clamor of battle in the distance at all times.</p>\n<h4>Minor Curse</h4>\n<p>Your body languishes when you aren't bringing harm to your foes. You take a -2 status penalty to AC and saving throws, but each time you make a Strike, you can suspend these penalties until the start of your next turn.</p>\n<h4>Moderate Curse</h4>\n<p>The strain of conflict wears upon your body, even though you gain vitality from it. Making a Strike reduces the penalty from your minor curse to -1 rather than suspending it entirely. You gain a +2 status bonus to weapon and unarmed damage rolls. You also gain fast healing equal to half your level while in a non-trivial combat encounter.</p>\n<h4>Major Curse (11th)</h4>\n<p>Your body proves capable of truly heroic feats, but doing so interferes with your mental focus. Your moderate curse's fast healing is equal to your level, and its damage bonus is +6. You gain a +1 status bonus to weapon and unarmed attack rolls, but you are @UUID[Compendium.pf2e.conditionitems.Item.Stupefied]{Stupefied 2}.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.OracleCurses.Battle.MadeAStrike",
                    option: "made-a-strike",
                    predicate: [{ or: ["class:oracle", "feat:first-revelation"] }],
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["class:oracle", "feat:first-revelation"] }],
                    selector: ["ac", "saving-throw"],
                    slug: "battle-curse-penalty",
                    type: "status",
                    value: -2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["class:oracle", { gte: ["parent:badge:value", 2] }],
                    selector: "strike-damage",
                    slug: "battle-curse-damage",
                    type: "status",
                    value: 2,
                },
                {
                    details: "",
                    key: "FastHealing",
                    predicate: [
                        "class:oracle",
                        "parent:badge:value:2",
                        { gt: ["encounter:threat", 0] },
                    ],
                    type: "fast-healing",
                    value: "floor(@actor.level/2)",
                },
                {
                    details: "",
                    key: "FastHealing",
                    predicate: [
                        { gte: ["parent:badge:value", 3] },
                        { gt: ["encounter:threat", 0] },
                    ],
                    type: "fast-healing",
                    value: "@actor.level",
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selectors: ["strike-damage"],
                    slug: "battle-curse-damage",
                    value: 6,
                },
                {
                    key: "FlatModifier",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: "attack",
                    slug: "battle-curse-attack",
                    type: "status",
                    value: 1,
                },
                {
                    allowDuplicate: false,
                    alterations: [
                        { mode: "override", property: "badge-value", value: 2 },
                    ],
                    inMemoryOnly: true,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    reevaluateOnUpdate: true,
                    uuid: "Compendium.pf2e.conditionitems.Item.Stupefied",
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: [{ gte: ["parent:badge:value", 2] }, "made-a-strike"],
                    selectors: ["ac", "saving-throw"],
                    slug: "battle-curse-penalty",
                    value: -1,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: ["parent:badge:value:1", "made-a-strike"],
                    selectors: ["ac", "saving-throw"],
                    slug: "battle-curse-penalty",
                    value: 0,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-the-perpetual-storm": {
        _id: "I0g5oaSwaqZ8fFAV",
        img: "icons/magic/water/pseudopod-swirl-blue.webp",
        name: "Effect: Curse of the Perpetual Storm",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Tempest]</p>\n<h3>Curse of the Perpetual Storm</h3>\n<p>You are the center of your own tiny tempest, ever surrounded by wind and rain that worsens the more you tap into your elemental powers. Even when you are calm and at rest, your hair and clothing are blown about by gentle winds, you are slightly damp, and your touch often comes with a static shock.</p>\n<h4>Minor Curse</h4>\n<p>An aura of a whirling storm whips up in a @Template[type:emanation|distance:5] around you and in your space. The aura puts out small non-magical fires 1 round after they're lit or brought into your aura.</p>\n<p>Electrical energy builds up within your storm, turning you into a lightning rod; you gain weakness 2 to electricity, and electricity spells or effects that have additional effects for a creature wearing or holding metal treat you as though you were wearing metal.</p>\n<h4>Moderate Curse</h4>\n<p>Your minor curse's aura expands to a @Template[type:emanation|distance:10] and carries rain on the winds. The whirling winds impose a -2 circumstance penalty on ranged attack rolls using physical ammunition that target you or originate from you.</p>\n<p>Your weakness to electricity increases to 5 or half your level, whichever is greater, but torrential rain grants you an equal amount of fire resistance.</p>\n<h4>Major Curse (11th)</h4>\n<p>Your minor curse's aura expands to a @Template[type:emanation|distance:15] and grows stronger. High winds blowing outward in the aura impede creatures' progress. The aura is difficult terrain for Large and smaller creatures on the ground, and for Huge or smaller flying creatures. You aren't affected by this difficult terrain.</p>\n<p>The electricity arcing through you becomes dangerous. Any creature that touches you or damages you with an unarmed melee attack or non-reach melee weapon takes @Damage[1d6[electricity]] damage. As normal, this doesn't affect creatures you touch.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    key: "Aura",
                    predicate: ["class:oracle"],
                    radius: "min(@item.badge.value*5, 15)",
                    slug: "perpetual-storm",
                },
                {
                    key: "Aura",
                    predicate: [{ not: "class:oracle" }],
                    radius: 5,
                    slug: "perpetual-storm",
                },
                { key: "Weakness", type: "electricity", value: 2 },
                {
                    key: "Weakness",
                    predicate: ["class:oracle", { gt: ["parent:badge:value", 1] }],
                    type: "electricity",
                    value: "max(5,floor(@actor.level/2))",
                },
                {
                    key: "Resistance",
                    predicate: ["class:oracle", { gt: ["parent:badge:value", 1] }],
                    type: "fire",
                    value: "max(5,floor(@actor.level/2))",
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "class:oracle",
                        "item:ranged",
                        { nor: ["item:thrown", "item:category:unarmed"] },
                        { gt: ["parent:badge:value", 1] },
                    ],
                    selector: "strike-attack-roll",
                    value: -2,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-the-skys-call": {
        _id: "rwDsr5XsrYcH7oFT",
        img: "systems/pf2e/icons/features/classes/cosmos-mystery.webp",
        name: "Effect: Curse of the Sky's Call",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Cosmos]</p>\n<h3>Curse of the Sky's Call</h3>\n<p>You have your head in the clouds-and not just figuratively. Your body is drawn toward the heavens, making you lighter and less substantial than you should be. Your eyes glow with starry light, and your hair and clothing float and drift around you.</p>\n<h4>Minor Curse</h4>\n<p>Your unnatural lightness makes it hard to keep your footing and interact with other physical objects. You are @UUID[Compendium.pf2e.conditionitems.Item.Enfeebled]{Enfeebled 1} and take a -2 penalty to saves and DCs against @UUID[Compendium.pf2e.actionspf2e.Item.Grapple], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], and other forms of forced movement.</p>\n<h4>Moderate Curse</h4>\n<p>Your body is drawn further skyward. You are @UUID[Compendium.pf2e.conditionitems.Item.Enfeebled]{Enfeebled 2}, and the penalty from your minor curse increases to -3.</p>\n<p>You are treated as one size smaller for wind effects. You gain a +2 status bonus against @UUID[Compendium.pf2e.actionspf2e.Item.Trip] attempts, you only take half as much damage from falls, and you gain the effects of the @UUID[Compendium.pf2e.feats-srd.Item.Powerful Leap] and @UUID[Compendium.pf2e.feats-srd.Item.Quick Jump] skill feats. You weigh only half as much, and your Bulk, should someone need to carry you, is also half as much.</p>\n<h4>Major Curse (11th)</h4>\n<p>As your body rises, you float just above the ground beneath you. You become @UUID[Compendium.pf2e.conditionitems.Item.Enfeebled]{Enfeebled 4}, and the penalty from your minor curse increases to -4.</p>\n<p>You can walk on liquids as if they were solid; you gain the effects of the @UUID[Compendium.pf2e.feats-srd.Item.Cloud Jump] skill feat; and you don't leave tracks, trigger weight-sensitive pressure plates, or otherwise connect with the ground below you.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        { or: ["action:grapple", "action:shove", "forced-movement"] },
                    ],
                    selector: "saving-throw",
                    slug: "curse-penalty",
                    value: -2,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: ["parent:badge:value:2"],
                    selector: "saving-throw",
                    slug: "curse-penalty",
                    value: -3,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: "saving-throw",
                    slug: "curse-penalty",
                    value: -4,
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: [{ gte: ["parent:badge:value", 2] }, "action:trip"],
                    selector: "reflex",
                    slug: "curse-major",
                    value: 2,
                },
                {
                    inMemoryOnly: true,
                    key: "GrantItem",
                    priority: 39,
                    uuid: "Compendium.pf2e.conditionitems.Item.Enfeebled",
                },
                {
                    itemType: "condition",
                    key: "ItemAlteration",
                    mode: "upgrade",
                    predicate: [
                        "class:oracle",
                        "item:slug:enfeebled",
                        { gte: ["parent:badge:value", 2] },
                    ],
                    property: "badge-value",
                    value: "ternary(gt(@item.badge.value, 2), 4, 2)",
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-torrential-knowledge": {
        _id: "Tju9kpQlwcKkyKor",
        img: "icons/sundries/scrolls/scroll-symbol-sun-brown.webp",
        name: "Effect: Curse of Torrential Knowledge",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Lore]</p>\n<h3>Curse of Torrential Knowledge</h3>\n<p>You have a link to true divine knowledge, but your mortal mind struggles to process and act on what you know. Loose materials around you, such as dust, grains of rice, and droplets of water, slowly shift to form strange runes or faint indecipherable writing, and you sometimes speak unintelligible truths or statements in unknown languages without realizing it.</p>\n<h4>Minor Curse</h4>\n<p>You take a -4 penalty to initiative, as trying to process a surge of information about what's happening around you slows your ability to respond to it.</p>\n<h4>Moderate Curse</h4>\n<p>The flow of information through your mind grows. The attention you divert to process this huge influx of information means you are always @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard].</p>\n<p>At the start of each of your turns, you automatically make one check to @UUID[Compendium.pf2e.actionspf2e.Item.Recall Knowledge] as a free action. This uses a skill of your choice that has the Recall Knowledge action, using a result equal to 10 + your proficiency bonus in that skill (with no other bonuses, penalties, or modifiers).</p>\n<h4>Major Curse (11th)</h4>\n<p>The massive flow of information clouding your mind overwhelms your ability to communicate with others. You can understand all languages, but you can't speak, use linguistic effects, or otherwise communicate with your allies.</p>\n<p>If you Cast a Spell with a verbal component, you must succeed at a @Check[type:flat|dc:5] or the spell is lost.</p>\n<p>You gain a +4 status bonus on saving throws against linguistic effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["class:oracle", "feat:first-revelation"] }],
                    selector: "initiative",
                    value: -4,
                },
                {
                    key: "FlatModifier",
                    predicate: ["linguistic", { gte: ["parent:badge:value", 3] }],
                    selector: "saving-throw",
                    type: "status",
                    value: 4,
                },
                {
                    inMemoryOnly: true,
                    key: "GrantItem",
                    predicate: ["class:oracle", { gte: ["parent:badge:value", 2] }],
                    uuid: "Compendium.pf2e.conditionitems.Item.Off-Guard",
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemType: "effect",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:id:{item|id}", { not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-curse-of-turbulent-moments": {
        _id: "oSzUv21eN9VS9TC1",
        img: "systems/pf2e/icons/spells/hasted-assault.webp",
        name: "Effect: Curse of Turbulent Moments",
        system: {
            badge: {
                labels: ["Minor", "Moderate", "Major", "Extreme"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Time]</p>\n<h3>Curse of Turbulent Moments</h3>\n<p>Time passes differently for you than everyone else. You experience fluxes that might manifest as minor day-to-day changes in your apparent age, such as a gray lock of hair or a disappearing wrinkle, or as occasional ghostly temporal afterimages that slightly trail your movement.</p>\n<p><strong>Minor Curse</strong></p>\n<p>As you draw upon your mystery, time's passage becomes more disjointed, aging, regressing, or warping you out of sync. You become @UUID[Compendium.pf2e.conditionitems.Item.Enfeebled]{Enfeebled 1}. In addition, you take a -2 penalty to saving throws against effects that would make you @UUID[Compendium.pf2e.conditionitems.Item.Fatigued] or @UUID[Compendium.pf2e.conditionitems.Item.Slowed].</p>\n<p><strong>Moderate Curse</strong></p>\n<p>Time distorts further, increasing your muscular atrophy, age regression, or warping while making effects pass you by at an increased rate. The value of your enfeebled condition increases to @UUID[Compendium.pf2e.conditionitems.Item.Enfeebled]{Enfeebled 2} and the penalty from your minor curse increases to -3. Your status bonus to AC against attacks made against you from reactions or free actions while you're moving increases to +2. In addition, spells affecting you last less time; their duration is reduced by half, to a minimum of 1 round. This doesn't reduce the spell's duration for other targets affected by the same spell. Finally, all non-permanent conditions affecting you that have a duration measured in rounds, minutes, or hours have their duration reduced by half, to a minimum of 1 round. Any afflictions (such as poisons, diseases, and curses) affecting you have their maximum duration, onset time, and time for each stage reduced by half. Spells, conditions, and afflictions that last \"until your next daily preparations\" last for 12 hours or until your next daily preparations, whichever comes first. This doesn't change the duration you're temporarily immune, the rate at which you can use abilities that have a frequency, or any other features based on the passage of time.</p>\n<p><strong>Major Curse (11th)</strong></p>\n<p>You become so out of sync with time that it's hard for you to act, but when you do act, you do so with incredible speed. You become @UUID[Compendium.pf2e.conditionitems.Item.Slowed]{Slowed 1}, the value of your enfeebled condition increases to 3, and the penalty from your minor curse increases to -4. Time passes so much faster for you that your steps appear as a blur of motion to others. You gain a +4 status bonus to initiative rolls. Whenever you move, you're @UUID[Compendium.pf2e.conditionitems.Item.Concealed] while you're moving and until the start of your next turn. As normal for concealment where your location is still obvious, you can't use this concealment to Hide or @UUID[Compendium.pf2e.actionspf2e.Item.Sneak]. Your status bonus to AC against attacks made against you from reactions or free actions while you're moving increases to +4.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["inflicts:fatigued", "inflicts:slowed"] }],
                    selector: "saving-throw",
                    slug: "time-curse-minor",
                    value: -2,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: ["class:oracle", "parent:badge:value:2"],
                    selector: "ac",
                    slug: "time-curse-ac-bonus",
                    value: 2,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: "ac",
                    slug: "time-curse-ac-bonus",
                    value: 4,
                },
                {
                    key: "FlatModifier",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: "initiative",
                    type: "status",
                    value: 4,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: ["parent:badge:value:2"],
                    selector: "saving-throw",
                    slug: "time-curse-minor",
                    value: -3,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    selector: "saving-throw",
                    slug: "time-curse-minor",
                    value: -4,
                },
                {
                    inMemoryOnly: true,
                    key: "GrantItem",
                    priority: 39,
                    uuid: "Compendium.pf2e.conditionitems.Item.Enfeebled",
                },
                {
                    itemType: "condition",
                    key: "ItemAlteration",
                    mode: "upgrade",
                    predicate: [
                        "class:oracle",
                        "item:slug:enfeebled",
                        { gte: ["parent:badge:value", 2] },
                    ],
                    property: "badge-value",
                    value: "ternary(gt(@item.badge.value, 2), 3, 2)",
                },
                {
                    allowDuplicate: true,
                    inMemoryOnly: true,
                    key: "GrantItem",
                    predicate: [{ gte: ["parent:badge:value", 3] }],
                    uuid: "Compendium.pf2e.conditionitems.Item.Slowed",
                },
                {
                    itemId: "{item|id}",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: [{ not: "feature:major-curse" }],
                    property: "badge-max",
                    value: 2,
                },
                {
                    itemId: "{item|id}",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: [{ not: "feature:extreme-curse" }],
                    property: "badge-max",
                    value: 3,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "oracular-curse:stage:{item|badge.value}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-cut-from-the-air": {
        _id: "gWwG7MNAesJgpmRW",
        img: "systems/pf2e/icons/equipment/consumables/ammunition/viper-arrow.webp",
        name: "Effect: Cut from the Air",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Cut from the Air]{Cut From The Air}.</p>\n<p>You gain a +4 circumstance bonus to AC against the triggering attack.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 4 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-daydream-trance": {
        _id: "RATDyLyxXN3qmOas",
        img: "systems/pf2e/icons/spells/entrancing-eyes.webp",
        name: "Effect: Daydream Trance",
        system: {
            description: {
                value:
                    "<p>You take a -1 penalty to Perception checks and initiative rolls and gain a +1 status bonus to Will saves. This bonus increases to +2 against mental effects. If you're legendary in Occultism, the bonus against mental effects increases to +3.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["initiative", "perception"],
                    value: -1,
                },
                {
                    key: "FlatModifier",
                    predicate: ["mental"],
                    selector: "will",
                    slug: "daydream-trance-mental",
                    type: "status",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    selector: "will",
                    slug: "daydream-trance-will",
                    type: "status",
                    value: 1,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: ["skill:occ:rank:4"],
                    selector: "will",
                    slug: "daydream-trance-mental",
                    value: 3,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-deadly-poison-weapon": {
        _id: "ed9iJxdHuft6bDFF",
        img: "systems/pf2e/icons/equipment/alchemical-items/alchemical-poisons/hunting-spider-venom.webp",
        name: "Effect: Deadly Poison Weapon",
        system: {
            description: {
                value:
                    "<p>Applied when you apply a poison created with @UUID[Compendium.pf2e.feats-srd.Item.Deadly Poison Weapon].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #149: Against the Scarlet Triad",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectDeadlyPoisonWeapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "poison",
                    diceNumber: 4,
                    dieSize: "d4",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectDeadlyPoisonWeapon}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-debilitating-strike": {
        _id: "yBTASi3FvnReAwHy",
        img: "icons/skills/melee/strike-sword-blood-red.webp",
        name: "Effect: Debilitating Strike",
        system: {
            description: {
                value:
                    "<p>The target has been affected by a rogue's @UUID[Compendium.pf2e.actionspf2e.Item.Debilitating Strike].</p>\n<p><em>Note: this effect only tracks the duration of the debilitation. You need to manually apply the specific penalties the rogue chose to apply.</em></p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-decry-thief-critical-success": {
        _id: "kAgUld9PcI4XkHbq",
        img: "systems/pf2e/icons/features/feats/decry-thief.webp",
        name: "Effect: Decry Thief (Critical Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Decry Thief]</p>\n<p>For 1 round, the target takes a -10 foot status penalty to Speed and a -4 status penalty to Stealth.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #149: Against the Scarlet Triad",
            },
            rules: [
                { key: "FlatModifier", selector: "stealth", type: "status", value: -4 },
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "status",
                    value: -10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-decry-thief-success": {
        _id: "FyaekbWsazkJhJda",
        img: "systems/pf2e/icons/features/feats/decry-thief.webp",
        name: "Effect: Decry Thief (Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Decry Thief]</p>\n<p>For 1 round, the target takes a -5 foot status penalty to Speed and a -2 status penalty to Stealth.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #149: Against the Scarlet Triad",
            },
            rules: [
                { key: "FlatModifier", selector: "stealth", type: "status", value: -2 },
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "status",
                    value: -5,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-deep-freeze": {
        _id: "BBGg5gpMmuBSo7Mi",
        img: "icons/magic/water/ice-snowman.webp",
        name: "Effect: Deep Freeze",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Deep Freeze].</p>\n<p><strong>Critical Success</strong> The target is unaffected.</p>\n<p><strong>Success</strong> The target takes half damage and takes a -5-foot status penalty to its Speeds for 1 round.</p>\n<p><strong>Failure</strong> The target takes full damage and takes a -10-foot status penalty to its Speeds for 1 round.</p>\n<p><strong>Critical Failure</strong> The target takes double damage, is @UUID[Compendium.pf2e.conditionitems.Item.Slowed]{Slowed 1} for 1 round, and takes a -15-foot status penalty to its Speeds for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 12 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.Check.Result.Degree.Check.success", value: 5 },
                        { label: "PF2E.Check.Result.Degree.Check.failure", value: 10 },
                        {
                            label: "PF2E.Check.Result.Degree.Check.criticalFailure",
                            value: 15,
                        },
                    ],
                    flag: "deepFreezeSpeedPenalty",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.DegreeOfSuccess",
                    rollOption: "deep-freeze-penalty",
                },
                {
                    key: "FlatModifier",
                    selector: "all-speeds",
                    type: "circumstance",
                    value: "-@item.flags.pf2e.rulesSelections.deepFreezeSpeedPenalty",
                },
                {
                    alterations: [
                        { mode: "override", property: "badge-value", value: 1 },
                    ],
                    key: "GrantItem",
                    predicate: ["deep-freeze-penalty:15"],
                    uuid: "Compendium.pf2e.conditionitems.Item.Slowed",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-defensive-instincts": {
        _id: "pTYTanMHMwSgJ8TN",
        img: "systems/pf2e/icons/features/feats/defensive-instincts.webp",
        name: "Effect: Defensive Instincts",
        system: {
            description: {
                value:
                    "<p>@UUID[Compendium.pf2e.feats-srd.Item.Defensive Instincts]</p>\n<p><strong>Requirements</strong> you are adjacent to at least two enemies</p>\n<hr />\n<p>Your body tenses up when surrounded, putting you on edge just enough to anticipate an attack. You gain a +1 circumstance bonus to AC until the beginning of your next turn and Step.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-defensive-recovery": {
        _id: "jwxurN6JPQm9wXug",
        img: "icons/equipment/shield/heater-wooden-steel-boss.webp",
        name: "Effect: Defensive Recovery",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Defensive Recovery]</p>\n<p>You gain a +2 status bonus to AC and saving throws.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 12 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["ac", "saving-throw"],
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-demonic-blood-magic-self": {
        _id: "aKRo5TIhUtu0kyEr",
        img: "icons/commodities/treasure/statuette-gargoyle-green-gold.webp",
        name: "Effect: Demonic Blood Magic (Self)",
        system: {
            description: {
                value:
                    "<p>The corruption of sin makes you more imposing. You gain a +1 status bonus to Intimidation checks for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "intimidation",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-demonic-blood-magic-target": {
        _id: "yfbP64r4a9e5oyli",
        img: "icons/commodities/treasure/statuette-gargoyle-green-gold.webp",
        name: "Effect: Demonic Blood Magic (Target)",
        system: {
            description: {
                value:
                    "<p>The corruption of sin weakens a target's defenses. A target takes a -1 status penalty to AC for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "status", value: -1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-desert-endemic-herbs": {
        _id: "jZYRxGHyArCci6AF",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Desert Endemic Herbs",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Endemic Herbs]</p>\n<p>For 1 hour, treat environmental heat effects as if they were one step less severe.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "hours",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-deteriorated": {
        _id: "94MzLpLykQIWKcA1",
        img: "systems/pf2e/icons/features/feats/deteriorated.webp",
        name: "Effect: Deteriorated",
        system: {
            description: {
                value:
                    "<p>Associated with @UUID[Compendium.pf2e.feats-srd.Item.Zombie Dedication].</p>\n<p>While your body is deteriorated, you're @UUID[Compendium.pf2e.conditionitems.Item.Slowed]{Slowed 1}. You can spend 10 minutes checking and repairing your joints and other weak parts of your body to recover from deterioration. You can perform these repairs as part of your daily preparations. Because it's a natural result of your body's functions, you can't remove the slowed condition from deterioration through any other means.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "cascade", granter: "detach" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Slowed",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-devise-a-stratagem": {
        _id: "XQpTyjXFYYNexyOk",
        img: "systems/pf2e/icons/features/classes/devise-a-stratagem.webp",
        name: "Effect: Devise a Stratagem",
        system: {
            badge: {
                evaluate: true,
                reevaluate: null,
                type: "formula",
                value: "1d20",
            },
            description: {
                value:
                    "<p>You assess a foe's weaknesses in combat and use them to formulate a plan of attack against your enemy. Choose a creature you can see, and roll a d20. If you Strike the chosen creature later this round, you must use the result of the roll you made to Devise a Stratagem for your Strike's attack roll instead of rolling. You make this substitution only for the first Strike you make against the creature this round, not any subsequent attacks.</p>\n<p>When you make this substitution, you can also add your Intelligence modifier to your attack roll instead of your Strength or Dexterity modifier, provided your Strike uses an agile or finesse melee weapon, an agile or finesse unarmed attack, a ranged weapon (which must be agile or finesse if it's a melee weapon with the thrown trait) or @UUID[Compendium.pf2e.equipment-srd.Item.Sap].</p>\n<p>If you're aware that the creature you choose is the subject of a lead you're pursuing, you can use this ability as a free action.</p>",
            },
            duration: {
                expiry: "round-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "TokenMark", slug: "devise-a-stratagem" },
                {
                    key: "SubstituteRoll",
                    predicate: ["target:mark:devise-a-stratagem"],
                    removeAfterRoll: "if-enabled",
                    required: true,
                    selector: "strike-attack-roll",
                    slug: "devise-a-stratagem",
                    value: "@item.badge.value",
                },
                {
                    key: "SubstituteRoll",
                    predicate: [
                        "feat:athletic-strategist",
                        { or: ["devise-a-stratagem", "target:mark:devise-a-stratagem"] },
                        {
                            or: [
                                "action:disarm",
                                "action:grapple",
                                "action:shove",
                                "action:trip",
                            ],
                        },
                    ],
                    removeAfterRoll: "if-enabled",
                    required: true,
                    selector: "athletics",
                    slug: "devise-a-strategem",
                    value: "@item.badge.value",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-devrins-cunning-stance": {
        _id: "jACKRmVfr9ATsmwg",
        img: "systems/pf2e/icons/spells/anticipate-peril.webp",
        name: "Effect: Devrin's Cunning Stance",
        system: {
            description: {
                value:
                    "<p>You have a +1 status bonus to skill checks. When you Strike an @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] enemy, that enemy can't use reactions until the beginning of its next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["target:condition:off-guard"],
                    selector: "strike-damage",
                    text: "{item|system.description.value}",
                    title: "{item|name}",
                },
                {
                    key: "FlatModifier",
                    selector: "skill-check",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-diabolic-blood-magic-self": {
        _id: "n1vhmOd7aNiuR3nk",
        img: "icons/sundries/scrolls/scroll-symbol-eye-brown.webp",
        name: "Effect: Diabolic Blood Magic (Self)",
        system: {
            description: {
                value:
                    "<p>Hellfire fills your tongue with lies. You gain a +1 status bonus to Deception checks for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "deception",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-didactic-strike": {
        _id: "72THfaqak0F4XnON",
        img: "systems/pf2e/icons/equipment/adventuring-gear/lovers-ink.webp",
        name: "Effect: Didactic Strike",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Didactic Strike].</p>\n<p>Your first attack against the designated target before the investigator's next turn deals an extra 2d6 precision damage to the target if it hits.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 16 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "precision",
                    diceNumber: 2,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "strike-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-discordant-voice": {
        _id: "oXG7eX26FmePmwUF",
        img: "systems/pf2e/icons/spells/ghost-sound.webp",
        name: "Effect: Discordant Voice",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Discordant Voice], while you are affected by Inspire Courage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    damageType: "sonic",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    predicate: [{ or: ["weapon", "unarmed"] }],
                    selector: "strike-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-disrupting-strikes": {
        _id: "ewfHVi6NWBGM8B6f",
        img: "icons/weapons/swords/sword-flanged-lightning.webp",
        name: "Effect: Disrupting Strikes",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Disrupting Strikes]</p>\n<p>Your weapon and unarmed Strikes gain the effects of a <em>disrupting</em> property rune until the start of your next turn.</p>\n<p>If you're 14th level or higher, your Strikes instead gain the effects of a <em>greater disrupting</em> property rune.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #166: Despair on Danger Island",
            },
            rules: [
                {
                    definition: ["item:type:weapon"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "property-runes",
                    value: {
                        brackets: [
                            { end: 13, value: "disrupting" },
                            { start: 14, value: "greater-disrupting" },
                        ],
                    },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-disruptive-stare": {
        _id: "QcReJp7kgURdQCGz",
        img: "icons/commodities/biological/eye-lizard-orange.webp",
        name: "Effect: Disruptive Stare",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["spell-attack", "spell-dc"],
                    type: "status",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-distant-wandering": {
        _id: "ngwcN8u7f7CnqGXp",
        img: "icons/magic/death/undead-ghost-scream-teal.webp",
        name: "Effect: Distant Wandering",
        system: {
            description: {
                value:
                    "<p>You are @UUID[Compendium.pf2e.conditionitems.Item.Invisible] and inaudible.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Invisible",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.emitsSound",
                    phase: "beforeDerived",
                    value: false,
                },
                {
                    key: "BaseSpeed",
                    predicate: ["awakening:distant-wandering:fly"],
                    selector: "fly",
                    value: "@actor.attributes.speed.value",
                },
                {
                    key: "FlatModifier",
                    predicate: ["awakening:distant-wandering:fly"],
                    selector: ["land-speed", "fly-speed"],
                    type: "status",
                    value: 20,
                },
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    predicate: ["awakening:distant-wandering:quick"],
                    uuid: "Compendium.pf2e.conditionitems.Item.Quickened",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-distracting-feint": {
        _id: "7hRgBo0fRQBxMK7g",
        img: "systems/pf2e/icons/spells/paralyze.webp",
        name: "Effect: Distracting Feint",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Distracting Feint]</p>\n<p>While a creature is @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] by your Feint, it also takes a -2 circumstance penalty to Perception checks and Reflex saves.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["perception", "reflex"],
                    type: "circumstance",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-aegis": {
        _id: "K1IgNCf3Hh2EJwQ9",
        img: "systems/pf2e/icons/spells/divine-inspiration.webp",
        name: "Effect: Divine Aegis",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Aegis]</p>\n<p>Until the beginning of your next turn, you gain a +1 circumstance bonus to saving throws against non-divine magical effects, but you also take a -1 circumstance penalty to saves against divine effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Divine Aegis (vs. non-divine magical effects)",
                    predicate: [{ or: ["magical", "arcane", "occult", "primal"] }],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    label: "Divine Aegis (vs. divine effect)",
                    predicate: ["divine"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-castigation": {
        _id: "U2Pgm6B4nmdQ2Gpd",
        img: "icons/magic/symbols/runes-star-pentagon-orange-purple.webp",
        name: "Effect: Divine Castigation",
        system: {
            description: {
                value:
                    "<p>Imposed by @UUID[Compendium.pf2e.feats-srd.Item.Divine Castigation]</p>\n<p><em>@UUID[Compendium.pf2e.spells-srd.Item.Heal]</em> spells you cast damage fiends as though they were undead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.hp.negativeHealing",
                    phase: "beforeDerived",
                    predicate: ["self:trait:fiend"],
                    value: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-divine-infusion-harm": {
        _id: "bIU1q05vzkKBtFj2",
        img: "systems/pf2e/icons/spells/harm.webp",
        name: "Effect: Divine Infusion (Harm)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Infusion]</p>\n<p>You deal an additional 1d6 void damage with your melee weapons and unarmed attacks. If the <em>harm</em> spell is at least 5th level, this damage increases to 2d6, and if the <em>harm</em> spell is at least 8th level, the damage increases to 3d6.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    damageType: "void",
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "strike-damage",
                    value: {
                        brackets: [
                            { end: 4, value: { diceNumber: 1 } },
                            { end: 7, start: 5, value: { diceNumber: 2 } },
                            { start: 8, value: { diceNumber: 3 } },
                        ],
                        field: "item|system.level.value",
                    },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-infusion-heal": {
        _id: "cH8JD3ub4eEKuIAD",
        img: "icons/magic/life/cross-worn-green.webp",
        name: "Effect: Divine Infusion (Heal)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Infusion]</p>\n<p>You deal 1d6 additional vitality damage with your melee weapons and unarmed attacks until the end of its next turn. If the <em>heal</em> spell is at least 5th level, this damage increases to 2d6, or 3d6 if the spell is at least 8th level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    damageType: "vitality",
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "strike-damage",
                    value: {
                        brackets: [
                            { end: 4, value: { diceNumber: 1 } },
                            { end: 7, start: 5, value: { diceNumber: 2 } },
                            { start: 8, value: { diceNumber: 3 } },
                        ],
                        field: "item|system.level.value",
                    },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-weapon-chaotic": {
        _id: "OkcblqWj4aHVAkrp",
        img: "systems/pf2e/icons/spells/divine-lance.webp",
        name: "Effect: Divine Weapon (Chaotic)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Weapon].</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectDivineWeaponChaotic",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "chaotic",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectDivineWeaponChaotic}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-weapon-evil": {
        _id: "AclYG5JuBFrjCY3I",
        img: "systems/pf2e/icons/spells/divine-lance.webp",
        name: "Effect: Divine Weapon (Evil)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Weapon].</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectDivineWeaponEvil",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "evil",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectDivineWeaponEvil}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-weapon-good": {
        _id: "dvOfGUuvG8ihcN8d",
        img: "systems/pf2e/icons/spells/divine-lance.webp",
        name: "Effect: Divine Weapon (Good)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Weapon].</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectDivineWeaponGood",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "good",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectDivineWeaponGood}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-weapon-lawful": {
        _id: "GlpZyxAGhy5QNqkm",
        img: "systems/pf2e/icons/spells/divine-lance.webp",
        name: "Effect: Divine Weapon (Lawful)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Weapon].</p>\n<p>Until the end of your turn, the weapon deals an additional 1d6 spirit damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectDivineWeaponLawful",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "lawful",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectDivineWeaponLawful}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-weapon": {
        _id: "zZ25N1zpXA8GNhFL",
        img: "systems/pf2e/icons/spells/divine-lance.webp",
        name: "Effect: Divine Weapon",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Weapon]</p>\n<p>Until the end of your turn, the weapon deals an additional 1d4 spirit damage. If you are holy or unholy, Strikes with the weapon also gain that trait, and the additional damage increases to 2d4 against creatures of the opposing trait.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 6 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    choices: {
                        ownedItems: true,
                        predicate: ["item:equipped"],
                        types: ["weapon"],
                    },
                    flag: "weapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "spirit",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: [
                        {
                            nor: [
                                { and: ["self:trait:holy", "target:trait:unholy"] },
                                { and: ["self:trait:unholy", "target:trait:holy"] },
                            ],
                        },
                    ],
                    selector: "{item|flags.pf2e.rulesSelections.weapon}-damage",
                },
                {
                    damageType: "spirit",
                    diceNumber: 2,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: [
                        {
                            or: [
                                { and: ["self:trait:holy", "target:trait:unholy"] },
                                { and: ["self:trait:unholy", "target:trait:holy"] },
                            ],
                        },
                    ],
                    selector: "{item|flags.pf2e.rulesSelections.weapon}-damage",
                },
                {
                    definition: ["item:id:{item|flags.pf2e.rulesSelections.weapon}"],
                    key: "AdjustStrike",
                    mode: "add",
                    predicate: ["self:trait:holy"],
                    property: "traits",
                    value: "holy",
                },
                {
                    definition: ["item:id:{item|flags.pf2e.rulesSelections.weapon}"],
                    key: "AdjustStrike",
                    mode: "add",
                    predicate: ["self:trait:unholy"],
                    property: "traits",
                    value: "unholy",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-divine-wings": {
        _id: "HfXGhXc9D120gvl5",
        img: "systems/pf2e/icons/spells/angelic-wings.webp",
        name: "Effect: Divine Wings",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Divine Wings]</p>\n<p>You gain a fly Speed equal to your Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "@actor.attributes.speed.total",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-draconic-blood-magic": {
        _id: "FNTTeJHiK6iOjrSq",
        img: "icons/commodities/biological/wing-lizard-pink-purple.webp",
        name: "Effect: Draconic Blood Magic",
        system: {
            description: {
                value:
                    "<p>Draconic scales grow briefly on you or one target, granting a +1 status bonus to AC for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "status", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-dragons-rage-wings": {
        _id: "wmBSuZPqiDyUNwXH",
        img: "icons/creatures/abilities/wing-batlike-red-pink.webp",
        name: "Effect: Dragon's Rage Wings",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Dragon's Rage Wings]</p>\n<p>While you are raging, you gain a fly Speed equal to your land Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 12 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    predicate: ["self:effect:rage"],
                    selector: "fly-speed",
                    value: "@actor.attributes.speed.total",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-dread-marshal-stance": {
        _id: "KBEJVRrie2JTHWIK",
        img: "systems/pf2e/icons/features/feats/dread-marshal-stance.webp",
        name: "Effect: Dread Marshal Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Dread Marshal Stance]</p>\n<p>You gain a status bonus to damage rolls equal to the number of weapon damage dice of the unarmed attack or weapon the originator of the aura is wielding that has the most weapon damage dice. When you or an ally in the aura critically hits an enemy with a Strike, that enemy is @UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 1}.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Note",
                    outcome: ["criticalSuccess"],
                    selector: "strike-damage",
                    text: "PF2E.SpecificRule.Marshal.DreadMarshalStance.Note",
                    title: "PF2E.SpecificRule.Marshal.DreadMarshalStance.Title",
                },
                {
                    key: "FlatModifier",
                    selector: "damage",
                    type: "status",
                    value: "@item.origin.flags.pf2e.highestWeaponDamageDice",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-dueling-parry": {
        _id: "1nCwQErK6hpkNvfw",
        img: "systems/pf2e/icons/equipment/weapons/rapier.webp",
        name: "Effect: Dueling Parry",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Dueling Parry (Swashbuckler)] or @UUID[Compendium.pf2e.feats-srd.Item.Dueling Parry (Fighter)]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-duelists-challenge": {
        _id: "maBSHuVHyGwga9uC",
        img: "icons/skills/melee/weapons-crossed-swords-purple.webp",
        name: "Effect: Duelist's Challenge",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Duelist's Challenge].</p>\n<p>Select one foe that you can see and proclaim a challenge. That foe is your dueling opponent until they are defeated, flee, or the encounter ends.</p>\n<p>Any time you hit that enemy using a single one-handed melee weapon while your other hand or hands are free, you gain a circumstance bonus to the Strike's damage equal to the number of damage dice your weapon deals.</p>\n<p>If you attack a creature other than your dueling opponent, you take a circumstance penalty to damage equal to the number of damage dice your weapon deals.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "TokenMark", slug: "duelists-challenge" },
                {
                    key: "FlatModifier",
                    predicate: [
                        "item:hands-held:1",
                        "target:mark:duelists-challenge",
                        {
                            nor: [
                                "hands-free:0",
                                "item:category:unarmed",
                                "target:condition:fleeing",
                            ],
                        },
                    ],
                    selector: "melee-strike-damage",
                    type: "circumstance",
                    value: "@weapon.system.damage.dice",
                },
                {
                    key: "FlatModifier",
                    predicate: [{ not: "target:mark:duelists-challenge" }],
                    selector: "strike-damage",
                    slug: "duelists-challenge-wrong-target",
                    type: "circumstance",
                    value: "@weapon.system.damage.dice * -1",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-earth-impulse-junction": {
        _id: "09oP0FBBAhXOS4JW",
        img: "systems/pf2e/icons/spells/hurtling-stone.webp",
        name: "Effect: Earth Impulse Junction",
        system: {
            description: { value: "<p>You gain a +1 circumstance bonus to AC.</p>" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-echoes-in-stone": {
        _id: "XIYWFGHBlcc79YI5",
        img: "icons/magic/sonic/explosion-shock-sound-wave.webp",
        name: "Effect: Echoes in Stone",
        system: {
            description: {
                value: "<p>You gain imprecise tremorsense with a range of 20 feet.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    acuity: "imprecise",
                    key: "Sense",
                    range: 20,
                    selector: "tremorsense",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-educate-allies-ally": {
        _id: "WrWSieH9Acy6XuzV",
        img: "icons/sundries/scrolls/scroll-writing-tan-grey.webp",
        name: "Effect: Educate Allies (Ally)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Educate Allies].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Educate Allies (vs. performative effects)",
                    predicate: [
                        { or: ["auditory", "illusion", "linguistic", "sonic", "visual"] },
                    ],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-educate-allies-self": {
        _id: "KceTcamIZ4ZrQJLD",
        img: "icons/sundries/scrolls/scroll-writing-tan-grey.webp",
        name: "Effect: Educate Allies (Self)",
        system: {
            description: {
                value:
                    "<p>Granted by using @UUID[Compendium.pf2e.feats-srd.Item.Educate Allies] on your allies.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Well-Versed (vs. performative effects)",
                    predicate: [
                        { or: ["auditory", "illusion", "linguistic", "sonic", "visual"] },
                    ],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-elemental-assault": {
        _id: "XaZdQHF9GvaJINqH",
        img: "icons/magic/symbols/elements-air-earth-fire-water.webp",
        name: "Effect: Elemental Assault",
        system: {
            description: {
                value:
                    "<p>You shroud your arms and held weapons in elemental magic. Choose one element. Until the end of your next turn, your Strikes deal an additional 1d6 damage of the indicated type and have the trait corresponding to the element: electricity for air, bludgeoning for earth, fire for fire, or cold for water.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.TraitAir",
                            predicate: [{ or: [{ not: "feat:dualborn" }, "dualborn:air"] }],
                            value: "electricity",
                        },
                        {
                            label: "PF2E.TraitEarth",
                            predicate: [{ or: [{ not: "feat:dualborn" }, "dualborn:earth"] }],
                            value: "bludgeoning",
                        },
                        {
                            label: "PF2E.TraitFire",
                            predicate: [{ or: [{ not: "feat:dualborn" }, "dualborn:fire"] }],
                            value: "fire",
                        },
                        {
                            label: "PF2E.TraitWater",
                            predicate: [{ or: [{ not: "feat:dualborn" }, "dualborn:water"] }],
                            value: "cold",
                        },
                    ],
                    flag: "element",
                    key: "ChoiceSet",
                },
                {
                    damageType: "{item|flags.pf2e.rulesSelections.element}",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "strike-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-elemental-blood-magic-self": {
        _id: "3gGBZHcUFsHLJeQH",
        img: "systems/pf2e/icons/features/classes/elemental.webp",
        name: "Effect: Elemental Blood Magic (Self)",
        system: {
            description: {
                value:
                    "<p>Elemental energy surrounds you. You gain a +1 status bonus to Intimidation checks for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "intimidation",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-elementalist-dedication": {
        _id: "O8qithYQCv3e7DUQ",
        img: "systems/pf2e/icons/features/classes/elemental-magic.webp",
        name: "Effect: Elementalist Dedication",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Elementalist Dedication]</p>\n<p>Each day when you make your daily preparations, you can attune yourself to one element of your choice: air, earth, fire, or water. You gain resistance equal to half your level (minimum 1 resistance) against damage dealt by effects with your attuned elemental trait. This attunement lasts until you next make your daily preparations.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitAir", value: "air" },
                        { label: "PF2E.TraitEarth", value: "earth" },
                        { label: "PF2E.TraitFire", value: "fire" },
                        { label: "PF2E.TraitWater", value: "water" },
                    ],
                    flag: "element",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Element",
                },
                {
                    key: "Resistance",
                    type: "{item|flags.pf2e.rulesSelections.element}",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-antimagic-weapon": {
        _id: "RyGaB5hDRcOeb34Q",
        img: "icons/skills/melee/strike-sword-slashing-red.webp",
        name: "Effect: Emblazon Antimagic (Weapon)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Antimagic].</p>\n<p>When the weapon's wielder critically hits with the weapon, they can attempt to counteract a spell on their target, using half their level, rounded up, as the counteract level. If they attempt to do so, the emblazoned symbol immediately disappears.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 12 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectEmblazonAntimagicWeapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    key: "Note",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonAntimagicWeapon}-attack",
                    text: "When you critically hit with the this weapon, you can attempt to counteract a spell on your target, using half your level (rounded up) as the counteract level. If you do this, the emblazon symbol immediately disappears.",
                    title: "{item|name}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-armament-shield": {
        _id: "o04gwnrVtzWyIEs8",
        img: "systems/pf2e/icons/spells/dancing-shield.webp",
        name: "Effect: Emblazon Armament (Shield)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Armament] when applied to a shield.</p>\n<ul>\n<li><strong>Shield</strong> The shield gains a +1 status bonus to its Hardness.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: {
                        ownedItems: true,
                        predicate: ["item:category:shield"],
                        types: ["armor"],
                    },
                    flag: "effectEmblazonArmamentShield",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Shield",
                },
                {
                    itemType: "armor",
                    key: "ItemAlteration",
                    mode: "add",
                    predicate: [
                        "item:id:{item|flags.pf2e.rulesSelections.effectEmblazonArmamentShield}",
                    ],
                    property: "hardness",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-armament-weapon": {
        _id: "U1MpMtRnFqEDBJwd",
        img: "icons/skills/melee/strike-sword-slashing-red.webp",
        name: "Effect: Emblazon Armament (Weapon)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Armament]</p>\n<p>The wielder gains a +1 status bonus to damage rolls with the chosen weapon</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectEmblazonArmamentWeapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    key: "FlatModifier",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonArmamentWeapon}-damage",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-energy-weapon-acid": {
        _id: "x4Sb3qaMJo8x1r3X",
        img: "icons/skills/melee/strike-sword-slashing-red.webp",
        name: "Effect: Emblazon Energy (Weapon, Acid)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Energy] when applied to a weapon.</p>\n<ul>\n<li><strong>Weapon</strong> The weapon deals an extra 1d4 acid damage, or an extra 1d6 acid damage if you have a domain spell with the acid trait.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectEmblazonEnergyWeaponAcid",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "acid",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    label: "Emblazon Energy (Acid)",
                    predicate: [{ not: "acid-domain" }],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponAcid}-damage",
                },
                {
                    damageType: "acid",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    label: "Emblazon Energy (Acid Domain)",
                    predicate: ["acid-domain"],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponAcid}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-energy-weapon-cold": {
        _id: "5TzKmEqFyLHBG2ua",
        img: "icons/skills/melee/strike-sword-slashing-red.webp",
        name: "Effect: Emblazon Energy (Weapon, Cold)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Energy] when applied to a weapon.</p>\n<ul>\n<li><strong>Weapon</strong> The weapon deals an extra 1d4 cold damage, or an extra 1d6 cold damage if you have a domain spell with the cold trait.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectEmblazonEnergyWeaponCold",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "cold",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    label: "Emblazon Energy (Cold)",
                    predicate: [{ not: "cold-domain" }],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponCold}-damage",
                },
                {
                    damageType: "cold",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    label: "Emblazon Energy (Cold Domain)",
                    predicate: ["cold-domain"],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponCold}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-energy-weapon-electricity": {
        _id: "oX51Db6IxnUI64dT",
        img: "icons/skills/melee/strike-sword-slashing-red.webp",
        name: "Effect: Emblazon Energy (Weapon, Electricity)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Energy] when applied to a weapon.</p>\n<ul>\n<li><strong>Weapon</strong> The weapon deals an extra 1d4 electricity damage, or an extra 1d6 electricity damage if you have a domain spell with the electricity trait.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectEmblazonEnergyWeaponElectricity",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "electricity",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    label: "Emblazon Energy (Electricity)",
                    predicate: [{ not: "electricity-domain" }],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponElectricity}-damage",
                },
                {
                    damageType: "electricity",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    label: "Emblazon Energy (Electricity Domain)",
                    predicate: ["electricity-domain"],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponElectricity}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-energy-weapon-fire": {
        _id: "GCEOngH5zL0rRyle",
        img: "icons/skills/melee/strike-sword-slashing-red.webp",
        name: "Effect: Emblazon Energy (Weapon, Fire)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Energy] when applied to a weapon.</p>\n<ul>\n<li><strong>Weapon</strong> The weapon deals an extra 1d4 fire damage, or an extra 1d6 fire damage if you have a domain spell with the fire trait.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectEmblazonEnergyWeaponFire",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "fire",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    label: "Emblazon Energy (Fire)",
                    predicate: [{ not: "fire-domain" }],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponFire}-damage",
                },
                {
                    damageType: "fire",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    label: "Emblazon Energy (Fire Domain)",
                    predicate: ["fire-domain"],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponFire}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emblazon-energy-weapon-sonic": {
        _id: "2c30Drdg84bWLcRn",
        img: "icons/skills/melee/strike-sword-slashing-red.webp",
        name: "Effect: Emblazon Energy (Weapon, Sonic)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emblazon Energy] when applied to a weapon.</p>\n<ul>\n<li><strong>Weapon</strong> The weapon deals an extra 1d4 sonic damage, or an extra 1d6 sonic damage if you have a domain spell with the sonic trait.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectEmblazonEnergyWeaponSonic",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "sonic",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    label: "Emblazon Energy (Sonic)",
                    predicate: [{ not: "sonic-domain" }],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponSonic}-damage",
                },
                {
                    damageType: "sonic",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    label: "Emblazon Energy (Sonic Domain)",
                    predicate: ["sonic-domain"],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectEmblazonEnergyWeaponSonic}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emotional-fervor": {
        _id: "JysvElDwGZ5ABQ6x",
        img: "systems/pf2e/icons/spells/remove-paralysis.webp",
        name: "Effect: Emotional Fervor",
        system: {
            description: { value: "<p>You activate your emotional fervor.</p>" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 3,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-emotional-surge": {
        _id: "dTymNXgTtnjqgYP9",
        img: "systems/pf2e/icons/spells/agitate.webp",
        name: "Effect: Emotional Surge",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Emotional Surge]</p>\n<p>You gain a +2 status bonus to attack rolls and skill checks.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["attack", "skill-check"],
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-encroaching-presence": {
        _id: "cqgbTZCvqaSvtQdz",
        img: "icons/creatures/magical/humanoid-silhouette-glowing-pink.webp",
        name: "Effect: Encroaching Presence",
        system: {
            badge: {
                labels: ["Mild", "Moderate", "Severe"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Seeing and touching the beyond leaves you open to its alien influence, warping your perceptions and thoughts.</p>\n<p><strong>Mild Backlash</strong> Something inexplicable touches your mind, leaving you with lingering horror. You become @UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 3}.</p>\n<p><strong>Moderate Backlash</strong> Disorienting visions and figments cover your vision, as if you're seeing through another set of alien senses. For 10 minutes, all creatures become @UUID[Compendium.pf2e.conditionitems.Item.Concealed] to you as they are covered in visual distortions only you can see.</p>\n<p><strong>Severe Backlash</strong> Your life force is siphoned away as the presence tugs your soul to wherever it resides. You become @UUID[Compendium.pf2e.conditionitems.Item.Doomed]{Doomed 1} and @UUID[Compendium.pf2e.conditionitems.Item.Drained]{Drained 2} until your next daily preparations.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-enduring-debilitating-strike": {
        _id: "PX6WdrpzEdUzKRHx",
        img: "icons/skills/melee/strike-sword-blood-red.webp",
        name: "Effect: Enduring Debilitating Strike",
        system: {
            description: {
                value:
                    "<p>The target has been affected by a rogue's @UUID[Compendium.pf2e.actionspf2e.Item.Debilitating Strike] if the rogue also has @UUID[Compendium.pf2e.feats-srd.Item.Enduring Debilitation].</p>\n<p><em>Note: this effect only tracks the duration of the debilitation. You need to manually apply the specific penalties the rogue chose to apply.</em></p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #150: Broken Promises",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-energetic-meltdown": {
        _id: "0AD7BiKjT8a6Uh92",
        img: "icons/magic/unholy/strike-body-explode-disintegrate.webp",
        name: "Effect: Energetic Meltdown",
        system: {
            badge: {
                labels: ["Mild", "Moderate", "Severe"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>As you channel energy through your deviant abilities, some of it turns back on you, spiking your body temperature or dancing across your skin.</p>\n<p><strong>Mild Backlash</strong> You take [[/r @actor.level]]{damage equal to your level} as energy scours your body.</p>\n<p><strong>Moderate Backlash</strong> Energy wracks your body. After taking the damage, you gain weakness to the energy type of your backlash until your next daily preparations. The weakness is equal to one-third of your level. You also lose immunity to the energy type if you had it, until your next daily preparations.</p>\n<p><strong>Severe Backlash</strong> Whatever furnace or well within you that provides the energy for your deviation overloads completely, cascading out of you in an uncontrolled burst. You deal [[/r (@actor.level)d6]]{1d6 damage per level} to all creatures in a @Template[type:emanation|distance:30] with a @Check[type:fortitude|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save. You automatically take full damage without attempting a save.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "Weakness",
                    predicate: [
                        {
                            or: [
                                "self:effect:energetic-meltdown:2",
                                "self:effect:energetic-meltdown:3",
                            ],
                        },
                    ],
                    type: "{actor|flags.pf2e.deviantAbilities.dragon.damageType}",
                    value: "floor(@actor.level/3)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-energize-wings": {
        _id: "8E5SCmFndGAvgkTw",
        img: "systems/pf2e/icons/spells/angelic-wings.webp",
        name: "Effect: Energize Wings",
        system: {
            description: { value: "<p>You gain a fly Speed of 30 feet.</p>" },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 5 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "BaseSpeed", selector: "fly-speed", value: 30 }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-energy-shot": {
        _id: "zocU4IYIlWwRKUuE",
        img: "systems/pf2e/icons/equipment/consumables/ammunition/trustworthy-round.webp",
        name: "Effect: Energy Shot",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Energy Shot]</p>\n<p>On your first three Strikes of this encounter with a firearm or crossbow, you deal an additional 1 acid, cold, fire or electricity damage. You choose which damage type to deal as part of making each Strike.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                    ],
                    flag: "energyShot",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.EnergyType",
                },
                {
                    damageType: "{item|flags.pf2e.rulesSelections.energyShot}",
                    key: "FlatModifier",
                    predicate: [{ or: ["item:group:firearm", "item:group:crossbow"] }],
                    selector: "strike-damage",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-enforce-oath": {
        _id: "LF8xzzFsFJKxejqv",
        img: "icons/sundries/scrolls/scroll-writing-tan-grey.webp",
        name: "Effect: Enforce Oath",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Enforce Oath]</p>\n<p>You gain a +1 status bonus to AC and saves against attacks and effects by the chosen creature. You also gain a +1 status bonus to attack rolls against the chosen creature.</p>\n<p>However, your dedication to Enforcing your Oath draws your focus away from all other foes. While you are Enforcing your Oath, you take a -1 status penalty to AC, attack rolls, and saves against all other creatures until you stop Enforcing your Oath.</p>\n<p>You stop Enforcing your Oath once the chosen creature is reduced to 0 Hit Points or offers a legitimate surrender to you or your allies. You immediately stop Enforcing your Oath if you are @UUID[Compendium.pf2e.conditionitems.Item.Unconscious] or if the chosen creature goes @UUID[Compendium.pf2e.conditionitems.Item.Unnoticed] by you for more than 1 minute. You can also stop Enforcing your Oath at any time during your turn as a free action.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Target is subject of your Enforce Oath",
                    option: "enforce-oath",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "oath-target",
                    predicate: ["enforce-oath"],
                    selector: ["ac", "attack", "saving-throw"],
                    type: "status",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    label: "not-oath-target",
                    predicate: [{ not: "enforce-oath" }],
                    selector: ["ac", "attack", "saving-throw"],
                    type: "status",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-engine-of-destruction": {
        _id: "nlMZCi8xi9YSvlYR",
        img: "icons/environment/traps/saw-steel-grey.webp",
        name: "Effect: Engine of Destruction",
        system: {
            description: {
                value:
                    "<p>Your construct innovation gains a +2 circumstance bonus to its attack rolls.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "attack",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-enlightened-presence": {
        _id: "XM1AA8z5cHm8sJXM",
        img: "systems/pf2e/icons/spells/commune.webp",
        name: "Effect: Enlightened Presence",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Enlightened Presence].</p>\n<p>You and allies within 15 feet of you gain a +2 status bonus to Will saving throws against mental effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 16 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["mental"],
                    selector: "will",
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-entitys-resurgence": {
        _id: "yr5ey5qC8dXH749T",
        img: "icons/creatures/magical/spirit-undead-ghost-purple.webp",
        name: "Effect: Entity's Resurgence",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "TempHP",
                    value:
                        "@actor.level+@actor.system.abilities.{actor|system.details.keyability.value}.mod",
                },
                {
                    key: "FlatModifier",
                    selector: ["attack", "damage"],
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-envenom-fangs": {
        _id: "yqCzUxrdLlk6Q9VW",
        img: "icons/creatures/abilities/fang-tooth-poison-green.webp",
        name: "Effect: Envenom Fangs",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Envenom Fangs]</p>\n<p>You envenom your fangs. If the next fangs Strike you make before the end of your next turn hits and deals damage, the Strike deals an additional 1d6 poison damage. On a critical failure, the poison is wasted as normal.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 5 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    damageType: "poison",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "fangs-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-eye-of-the-arclords": {
        _id: "5IGz4iheaiUWm5KR",
        img: "icons/magic/perception/orb-eye-scrying.webp",
        name: "Effect: Eye of the Arclords",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Eye of the Arclords].</p>\n<p>While the eye is open, you gain the following benefits:</p>\n<ul>\n<li>you gain the effects of the detect magic arcane innate spell from your Arcane Sense at the start of each of your turns without needing to cast the spell;</li>\n<li>you gain darkvision;</li>\n<li>you gain a +2 status bonus to Perception checks to Seek undetected and hidden creatures and to your Perception DC against Hide and Sneak.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [
                { key: "Sense", selector: "darkvision" },
                {
                    key: "FlatModifier",
                    label: "Eye of the Arclords (Seek undetected & hidden creatures)",
                    predicate: [
                        "action:seek",
                        { or: ["target:hidden", "target:undetected"] },
                    ],
                    selector: "perception",
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-favorable-winds": {
        _id: "X1pGyhMKrCTvHB0q",
        img: "systems/pf2e/icons/features/feats/favorable-winds.webp",
        name: "Effect: Favorable Winds",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Favorable Winds].</p>\n<hr />\n<p>You wrap a shell of favorable wind around a weapon you wield. On your next Strike with a ranged weapon before the start of your next turn, you don't take circumstance penalties on the attack roll due to wind. In addition, if that weapon has a range increment of 10 feet or less, increase its range increment by 10 feet for that Strike.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    definition: [
                        { lte: ["item:range-increment", 10] },
                        { not: "item:category:unarmed" },
                    ],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "range-increment",
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-favored-terrain-gain-climb-speed": {
        _id: "sDftJWPPSUeSZD3A",
        img: "icons/sundries/misc/ladder.webp",
        name: "Effect: Favored Terrain (Gain Climb Speed)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Favored Terrain]{Favored Terrain (Forest, Moutain or Underground)} if you have the @UUID[Compendium.pf2e.classfeatures.Item.Unimpeded Journey]{Wild Stride} class feature, and are in forested, mountainous or underground terrain and do not already have a climb Speed.</p>\n<p>You gain a climb Speed equal to your Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 11 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "climb",
                    value: "@actor.attributes.speed.total",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-favored-terrain-gain-swim-speed": {
        _id: "OhLcaJeQy4Nf5Mwo",
        img: "icons/magic/water/wave-water-blue.webp",
        name: "Effect: Favored Terrain (Gain Swim Speed)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Favored Terrain]{Favored Terrain (Aquatic)} if you have the @UUID[Compendium.pf2e.classfeatures.Item.Unimpeded Journey]{Wild Stride} class feature, and are in aquatic terrain and do not already have a swim Speed.</p>\n<p>You gain a swim Speed equal to your Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 11 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "swim",
                    value: "@actor.attributes.speed.total",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-favored-terrain-increase-climb-speed": {
        _id: "IpRfT9lL3YR6MH6w",
        img: "icons/sundries/misc/ladder.webp",
        name: "Effect: Favored Terrain (Increase Climb Speed)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Favored Terrain]{Favored Terrain (Forest, Moutain or Underground)} if you have the @UUID[Compendium.pf2e.classfeatures.Item.Unimpeded Journey]{Wild Stride} class feature, and are in forested, mountainous or underground terrain and already have a climb Speed.</p>\n<p>You gain a +10-foot status bonus to your climb Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 11 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "climb-speed",
                    type: "status",
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-favored-terrain-increase-swim-speed": {
        _id: "HKPmrxkZwHRND5Um",
        img: "icons/magic/water/wave-water-blue.webp",
        name: "Effect: Favored Terrain (Increase Swim Speed)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Favored Terrain]{Favored Terrain (Aquatic)} if you have the @UUID[Compendium.pf2e.classfeatures.Item.Unimpeded Journey]{Wild Stride} class feature, and are in aquatic terrain and already have a swimSpeed.</p>\n<p>You gain a +10-foot status bonus to your swim Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 11 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "swim-speed",
                    type: "status",
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-fey-blood-magic": {
        _id: "rJpkKaPRGaH0pLse",
        img: "icons/commodities/biological/wing-insect-blue.webp",
        name: "Effect: Fey Blood Magic",
        system: {
            description: {
                value:
                    "<p>Colorful fey glamours dance around you or one target, causing them to be concealed for 1 round. Such obvious concealment can't be used to Hide.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-fiendish-wings": {
        _id: "MrdT7LiOZMN8J4GK",
        img: "icons/creatures/abilities/wing-batlike-purple-blue.webp",
        name: "Effect: Fiendish Wings",
        system: {
            description: {
                value:
                    "<p>You can strain to call forth bat-like or otherwise fiendish wings from your back, similar in appearance to those of your fiendish ancestors. Once manifested, these wings remain for 10 minutes. You gain a fly Speed equal to your land Speed while you've manifested your wings.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "@actor.attributes.speed.total",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-flamboyant-cruelty": {
        _id: "v2HDcrxQF2Dncjbs",
        img: "systems/pf2e/icons/spells/suns-fury.webp",
        name: "Effect: Flamboyant Cruelty",
        system: {
            description: {
                value:
                    "<p>Granted when you use @UUID[Compendium.pf2e.feats-srd.Item.Flamboyant Cruelty]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Legends",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Tumble Through (Flamboyant Cruelty)",
                    predicate: ["action:tumble-through", "flamboyant-cruelty"],
                    selector: "acrobatics",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    label: "Panache-granting action (Flamboyant Cruelty)",
                    predicate: ["panache-granting", "flamboyant-cruelty"],
                    selector: "skill-check",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-fleet-tempo": {
        _id: "pQ9e5njvIOe5QzFa",
        img: "systems/pf2e/icons/spells/unfathomable-song.webp",
        name: "Effect: Fleet Tempo",
        system: {
            description: {
                value:
                    "<p>You and all allies within 30 feet gain a +10-foot status bonus to all Speeds for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #170: Spoken on the Song Wind",
            },
            rules: [
                { key: "FlatModifier", selector: "speed", type: "status", value: 10 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-forest-endemic-herbs": {
        _id: "bliWctLi7jlKUTUe",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Forest Endemic Herbs",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Endemic Herbs]</p>\n<p>Gain a +2 circumstance bonus to saves against disease and poison effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["disease", "poison"] }],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-formation-training": {
        _id: "LVPodfYEWKtK3fUW",
        img: "systems/pf2e/icons/spells/anima-invocation.webp",
        name: "Effect: Formation Training",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Formation Training]</p>\n<p>You know how to fight in formation with your brethren. When you are adjacent to at least two hobgoblin allies, you gain a +1 circumstance bonus to AC and saving throws. This bonus increases to +2 on Reflex saves against area effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 5 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["ac", "saving-throw"],
                    type: "circumstance",
                    value: 1,
                },
                {
                    domain: "damage",
                    key: "RollOption",
                    label: "Saving Against an Area Effect",
                    option: "area-effect",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: ["area-effect"],
                    selector: "reflex",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-fortify-shield": {
        _id: "ghZFZWUh5Z20vOlR",
        img: "systems/pf2e/icons/spells/dancing-shield.webp",
        name: "Effect: Fortify Shield",
        system: {
            description: {
                value: "<p>Add your level to your shield's Hardness.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.attributes.shield.hardness",
                    predicate: ["self:shield:equipped"],
                    value: "@actor.level",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-fresh-produce": {
        _id: "2GWZgsvMJF9DN0DO",
        img: "icons/consumables/fruit/blueberry-cluster-blue.webp",
        name: "Effect: Fresh Produce",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Fresh Produce]</p>\n<p>You gain resistance to void damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "void",
                    value: "2 * (1+floor((@item.level -1)/2))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-fulminating-shot": {
        _id: "UE0yky6aW0WCF0Qg",
        img: "systems/pf2e/icons/equipment/consumables/ammunition/golden-cased-bullet.webp",
        name: "Effect: Fulminating Shot",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Fulminating Shot]</p>\n<p>Choose acid, cold, electricity, or fire. If you hit with your next attack roll using a firearm or crossbow before the end of your turn, you deal 1d6 additional damage of this type. At 12th level, this increases to 2d6 additional damage, and at 18th level, it increases to 3d6 additional damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                    ],
                    flag: "fulminatingShot",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.EnergyType",
                },
                {
                    damageType: "{item|flags.pf2e.rulesSelections.fulminatingShot}",
                    dieSize: "d6",
                    key: "DamageDice",
                    predicate: [{ or: ["item:group:firearm", "item:group:crossbow"] }],
                    selector: "strike-damage",
                    value: {
                        brackets: [
                            { end: 11, value: { diceNumber: 1 } },
                            { end: 17, start: 12, value: { diceNumber: 2 } },
                            { start: 18, value: { diceNumber: 3 } },
                        ],
                    },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-furnace-form": {
        _id: "Tw9MjeQHL3qFY1PO",
        img: "icons/magic/fire/elemental-fire-humanoid.webp",
        name: "Effect: Furnace Form",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Furnace Form]</p>\n<p>You become living flame, giving you fire immunity, resistance 10 to precision damage, and weakness 5 to cold and to water. Your unarmed attacks deal 1d4 additional fire damage, and your fire spells deal one additional die of fire damage (of the same damage die the spell uses). Your fire Elemental Blasts deal an additional die of damage. In fire form, you have a fly Speed of 40 feet.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: true,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "Immunity", type: "fire" },
                { key: "Resistance", type: "precision", value: 10 },
                { key: "Weakness", type: ["cold", "water"], value: 5 },
                {
                    damageType: "fire",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: ["unarmed"],
                    selector: "strike-damage",
                },
                { key: "BaseSpeed", selector: "fly", value: 40 },
                {
                    damageType: "fire",
                    diceNumber: 1,
                    key: "DamageDice",
                    predicate: ["item:trait:fire"],
                    selector: "spell-damage",
                },
                {
                    diceNumber: 1,
                    key: "DamageDice",
                    predicate: ["item:trait:fire"],
                    selector: "elemental-blast-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-gathering-moss": {
        _id: "p0S3VHkRgMye7RSI",
        img: "icons/creatures/tentacles/tentacles-thing-green.webp",
        name: "Effect: Gathering Moss",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Gathering Moss]</p>\n<p>You gain fast healing equal to your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [
                {
                    details: "",
                    key: "FastHealing",
                    type: "fast-healing",
                    value: "@actor.level",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-genie-blood-magic-self": {
        _id: "9AUcoY48H5LrVZiF",
        img: "systems/pf2e/icons/features/classes/genie.webp",
        name: "Effect: Genie Blood Magic (Self)",
        system: {
            description: {
                value:
                    "<p>Your spellcasting warps reality and distracts your foes. You gain a +1 status bonus to Deception checks for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "deception",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-genie-blood-magic-target": {
        _id: "KVbS7AbhQdeuA0J6",
        img: "systems/pf2e/icons/features/classes/genie.webp",
        name: "Effect: Genie Blood Magic (Target)",
        system: {
            description: {
                value:
                    "<p>Your spellcasting warps reality and distracts your foes. A target takes a -1 status penalty to Perception for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "perception",
                    type: "status",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-ghost-wrangler": {
        _id: "SiegLMJpVOGuoyWJ",
        img: "systems/pf2e/icons/spells/charming-touch.webp",
        name: "Effect: Ghost Wrangler",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Ghost Wrangler]</p>\n<p>Your fists gain the effects of the ghost touch property rune.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                { fist: true, key: "Strike" },
                {
                    definition: ["item:base:fist"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "property-runes",
                    value: "ghost-touch",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-ghosts-in-the-storm-activation": {
        _id: "Sb3ZdFs61atILypS",
        img: "icons/magic/lightning/bolt-strike-sparks-teal.webp",
        name: "Effect: Ghosts in the Storm (Activation)",
        system: {
            description: {
                value:
                    "<p>The creature is @UUID[Compendium.pf2e.conditionitems.Item.Concealed], and its Strikes gain the <em>@UUID[Compendium.pf2e.equipment-srd.Item.Shock]</em> rune.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Concealed",
                },
                {
                    key: "AdjustStrike",
                    mode: "add",
                    property: "property-runes",
                    value: "shock",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-ghosts-in-the-storm": {
        _id: "mmaJYXBUxVncsOsx",
        img: "icons/magic/air/wind-tornado-funnel-blue-grey.webp",
        name: "Effect: Ghosts in the Storm",
        system: {
            description: {
                value:
                    "<p>The creature gains a +2 status bonus to Reflex saves and Acrobatics checks.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["reflex", "acrobatics"],
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-giants-lunge": {
        _id: "N2CSGvtPXloOEPrK",
        img: "systems/pf2e/icons/spells/divine-vessel.webp",
        name: "Effect: Giant's Lunge",
        system: {
            description: {
                value:
                    "<p>Until your rage ends, all your melee weapons and unarmed attacks gain reach 10.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    definition: ["item:melee"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "weapon-traits",
                    value: "reach",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-giants-stature": {
        _id: "6VrKQ0PhRXuteusQ",
        img: "icons/skills/social/intimidation-impressing.webp",
        name: "Effect: Giant's Stature",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Giant's Stature]</p>\n<p>You become Large, increasing your reach by 5 feet and gaining the @UUID[Compendium.pf2e.conditionitems.Item.Clumsy]{Clumsy 1} condition until you stop raging</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.ActorSizeLarge", value: "large" },
                        {
                            label: "PF2E.ActorSizeHuge",
                            predicate: ["feat:titans-stature"],
                            value: "huge",
                        },
                    ],
                    flag: "size",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.CreatureSize",
                    rollOption: "giants-stature",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.attributes.reach.value",
                    predicate: ["giants-stature:large"],
                    value: 5,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.attributes.reach.manipulate",
                    predicate: ["giants-stature:large"],
                    value: 5,
                },
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    onDeleteActions: { grantee: "restrict" },
                    uuid: "Compendium.pf2e.conditionitems.Item.Clumsy",
                },
                {
                    key: "CreatureSize",
                    predicate: ["giants-stature:large"],
                    reach: { upgrade: 10 },
                    resizeEquipment: true,
                    value: "large",
                },
                {
                    key: "CreatureSize",
                    predicate: ["giants-stature:huge"],
                    reach: { upgrade: 15 },
                    resizeEquipment: true,
                    value: "huge",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.attributes.reach.value",
                    predicate: ["giants-stature:huge"],
                    value: 10,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.attributes.reach.manipulate",
                    predicate: ["giants-stature:huge"],
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-goblin-song-critical-success": {
        _id: "bIRIS6mnynr72RDw",
        img: "systems/pf2e/icons/spells/unfathomable-song.webp",
        name: "Effect: Goblin Song (Critical Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Goblin Song]</p>\n<p>The creature takes a -1 status penalty to Perception checks and Will saves.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["perception", "will"],
                    type: "status",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-goblin-song-success": {
        _id: "5veOBmMYQxywTudd",
        img: "systems/pf2e/icons/spells/unfathomable-song.webp",
        name: "Effect: Goblin Song (Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Goblin Song]</p>\n<p>The creature takes a -1 status penalty to Perception checks and Will saves.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["perception", "will"],
                    type: "status",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-great-tengu-form": {
        _id: "BC92TyFzRCWq8fu0",
        img: "icons/creatures/birds/corvid-call-sound-glowing.webp",
        name: "Effect: Great Tengu Form",
        system: {
            description: {
                value:
                    "<p>Once per day, as part of using Long-Nosed Form, you also gain the benefits of 4th-level <em>@UUID[Compendium.pf2e.spells-srd.Item.Enlarge]</em>and <em>@UUID[Compendium.pf2e.spells-srd.Item.Fly]</em>.</p>\n<p>This lasts for 5 minutes or until you shift out of your Long-Nosed Form, whichever happens first.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 5,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["item:melee"],
                    selector: "strike-damage",
                    type: "status",
                    value: 4,
                },
                { key: "CreatureSize", resizeEquipment: true, value: "huge" },
                {
                    key: "FlatModifier",
                    selector: "dex-based",
                    type: "status",
                    value: -1,
                },
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "max(20,(@actor.attributes.speed.total))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-guardians-deflection": {
        _id: "w6X7io56B2HHTOvs",
        img: "systems/pf2e/icons/spells/scintillating-safeguard.webp",
        name: "Effect: Guardian's Deflection",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Guardian's Deflection (Fighter)] or @UUID[Compendium.pf2e.feats-srd.Item.Guardian's Deflection (Swashbuckler)].</p>\n<p>You gain a +2 circumstance bonus to AC against the triggering attack.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-guardians-embrace": {
        _id: "X19XgqqItqZ4tfmq",
        img: "systems/pf2e/icons/spells/dancing-shield.webp",
        name: "Effect: Guardian's Embrace",
        system: {
            description: {
                value:
                    "<p>You gain a +2 status bonus to AC against physical attacks and can use a reaction to gain resistance 10 to physical damage dealt by that attack, which ends this effect.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #188: They Watched the Stars",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label:
                        "PF2E.SpecificRule.ScionOfDomora.GuardiansEmbrace.PhysicalAttackLabel",
                    option: "guardians-embrace-ac",
                    toggleable: true,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label:
                        "PF2E.SpecificRule.ScionOfDomora.GuardiansEmbrace.ProtectionLabel",
                    option: "guardians-embrace-resist",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: ["guardians-embrace-ac"],
                    selector: "ac",
                    type: "status",
                    value: 2,
                },
                {
                    key: "Resistance",
                    predicate: ["guardians-embrace-resist"],
                    type: "physical",
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-guided-by-the-stars": {
        _id: "raLQ458uiyd3lI2K",
        img: "icons/magic/light/explosion-star-glow-blue.webp",
        name: "Effect: Guided by the Stars",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Guided by the Stars]</p>\n<p>You roll twice and take the better result on your next skill check or saving throw. If it's night and you can see the stars, you gain a +1 circumstance bonus to the triggering roll.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.UI.RuleElements.ChoiceSet.SkillLabel",
                            value: "skill-check",
                        },
                        {
                            label: "PF2E.UI.RuleElements.ChoiceSet.SaveLabel",
                            value: "saving-throw",
                        },
                    ],
                    flag: "effectGuidedByTheStars",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Lizardfolk.GuidedByTheStars.Prompt",
                    rollOption: "guided-by-the-stars",
                },
                {
                    keep: "higher",
                    key: "RollTwice",
                    predicate: ["guided-by-the-stars:skill-check"],
                    removeAfterRoll: true,
                    selector: "skill-check",
                },
                {
                    keep: "higher",
                    key: "RollTwice",
                    predicate: ["guided-by-the-stars:saving-throw"],
                    removeAfterRoll: true,
                    selector: "saving-throw",
                },
                {
                    key: "FlatModifier",
                    predicate: ["night-time", "can-see-stars"],
                    selector: ["saving-throw", "skill-check"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-guided-skill": {
        _id: "iaZ6P59YVhdnFIN8",
        img: "systems/pf2e/icons/spells/phantom-steed.webp",
        name: "Effect: Guided Skill",
        system: {
            description: {
                value:
                    "<p>You gain a +2 status bonus to checks made using Acrobatics, Occultism, Stealth, or Survival.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #188: They Watched the Stars",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["acrobatics", "occultism", "stealth", "survival"],
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-hag-blood-magic": {
        _id: "6fb15XuSV4TNuVAT",
        img: "icons/commodities/biological/hand-gnarled-green.webp",
        name: "Effect: Hag Blood Magic",
        system: {
            description: {
                value:
                    "<p>Spiteful curses punish your foes. The first creature that deals damage to you before the end of your next turn takes 2 mental damage per spell level and must attempt a basic Will save.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hamstringing-strike": {
        _id: "ESnzqtwSgahLcxg2",
        img: "icons/skills/melee/strike-sword-blood-red.webp",
        name: "Effect: Hamstringing Strike",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Hamstringing Strike]</p>\n<p>If you hit your prey, the creature takes a -5-foot status penalty to Speed. If you critically hit your prey, the creature takes a -10-foot status penalty to Speed.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Kingmaker",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.Check.Result.Degree.Attack.success", value: -5 },
                        {
                            label: "PF2E.Check.Result.Degree.Attack.criticalSuccess",
                            value: -10,
                        },
                    ],
                    flag: "hamstringingStrike",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Ranger.HamstringingStrike.Prompt",
                },
                {
                    key: "FlatModifier",
                    selector: "speed",
                    type: "status",
                    value: "{item|flags.pf2e.rulesSelections.hamstringingStrike}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-harden-flesh": {
        _id: "Np3OSqKxuB9rTbij",
        img: "icons/magic/defensive/armor-stone-skin.webp",
        name: "Effect: Harden Flesh",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Harden Flesh]</p>\n<p>You gain resistance 3 to physical damage, except adamantine, until the beginning of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    exceptions: ["adamantine"],
                    key: "Resistance",
                    type: "physical",
                    value: {
                        brackets: [
                            { end: 11, start: 10, value: 3 },
                            { end: 15, start: 12, value: 4 },
                            { end: 19, start: 16, value: 5 },
                            { start: 20, value: 6 },
                        ],
                    },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-harrow-chosen": {
        _id: "1Azz9TSWXrX4aNX4",
        img: "icons/sundries/gaming/playing-cards-black.webp",
        name: "Effect: Harrow-Chosen",
        system: {
            description: {
                value:
                    "<p>This benefit is determined by alignment of the card you draw from the deck. The card can match both alignment components with yours (true match), match a single alignment component with yours (partial match), have no matching alignment components (unmatched), or have a diametrically opposed alignment to yours (misaligned).</p>\n<p><strong>True match</strong>: You gain a +1 circumstance bonus to a saving throw of your choice (Fortitude, Reflex, or Will) for 1 minute.</p>\n<p><strong>Partial match</strong>: You gain resistance to one energy type (acid, cold, electricity, fire, or sonic) equal to your level for 1 minute.</p>\n<p><strong>Unmatched</strong>: You gain temporary Hit Points equal to twice your level. The temporary Hit Points remain for 1 minute.</p>\n<p><strong>Misaligned</strong>: You gain a +5-foot circumstance bonus to your Speeds for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #192: Worst of All Possible Worlds",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.HarrowChosen.TrueMatch",
                            value: "true-match",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowChosen.PartialMatch",
                            value: "partial-match",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowChosen.Unmatched",
                            value: "unmatched",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowChosen.Misaligned",
                            value: "misaligned",
                        },
                    ],
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.HarrowChosen.Prompt",
                    rollOption: "harrow-chosen",
                },
                {
                    choices: [
                        { label: "PF2E.SavesFortitude", value: "fortitude" },
                        { label: "PF2E.SavesReflex", value: "reflex" },
                        { label: "PF2E.SavesWill", value: "will" },
                    ],
                    flag: "save",
                    key: "ChoiceSet",
                    predicate: ["harrow-chosen:true-match"],
                },
                {
                    key: "FlatModifier",
                    predicate: ["harrow-chosen:true-match"],
                    selector: "{item|flags.pf2e.rulesSelections.save}",
                    type: "circumstance",
                    value: 1,
                },
                {
                    choices: [
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                        { label: "PF2E.TraitSonic", value: "sonic" },
                    ],
                    flag: "resistance",
                    key: "ChoiceSet",
                    predicate: ["harrow-chosen:partial-match"],
                    prompt: "PF2E.SpecificRule.Prompt.EnergyType",
                },
                {
                    key: "Resistance",
                    predicate: ["harrow-chosen:partial-match"],
                    type: "{item|flags.pf2e.rulesSelections.resistance}",
                    value: "@actor.level",
                },
                {
                    key: "TempHP",
                    predicate: ["harrow-chosen:unmatched"],
                    value: "2*@actor.level",
                },
                {
                    key: "FlatModifier",
                    predicate: ["harrow-chosen:misaligned"],
                    selector: "all-speeds",
                    type: "circumstance",
                    value: 5,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-harrow-omen": {
        _id: "rp6hA52dWVwtuu5F",
        img: "icons/sundries/gaming/playing-cards-grey.webp",
        name: "Effect: Harrow Omen",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.HarrowDeck.HarrowSuits.Books",
                            value: "books",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowDeck.HarrowSuits.Crowns",
                            value: "crowns",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowDeck.HarrowSuits.Hammers",
                            value: "hammers",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowDeck.HarrowSuits.Keys",
                            value: "keys",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowDeck.HarrowSuits.Shields",
                            value: "shields",
                        },
                        {
                            label: "PF2E.SpecificRule.HarrowDeck.HarrowSuits.Stars",
                            value: "stars",
                        },
                    ],
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.HarrowDeck.Prompt",
                    rollOption: "harrow-omen",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-harrow-the-fiend": {
        _id: "MSkspeBsbXm6LQ19",
        img: "icons/sundries/gaming/playing-cards-grey.webp",
        name: "Effect: Harrow the Fiend",
        system: {
            description: {
                value:
                    "<p>You gain a +1 status bonus on all Strikes or spell attack rolls against fiends.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["target:trait:fiend"],
                    selector: "attack",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-harsh-judgement": {
        _id: "raoz523QRsj5WjcF",
        img: "systems/pf2e/icons/features/feats/harsh-judgement.webp",
        name: "Effect: Harsh Judgement",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Harsh Judgement]</p>\n<p>You gain a +2 circumstance bonus to Perception checks to Seek your condemned foe and on Intimidation checks to Demoralize them. You have a -1 circumstance penalty to Perception checks to Seek creatures other than your condemned foe and on Intimidation checks to Demoralize anyone other than your condemned foe.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Night of the Gray Death",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Target is Condemned Foe",
                    option: "harsh-judgement",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "Seeking Condemned Foe",
                    predicate: ["harsh-judgement", "action:seek"],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "Seeking Non-Condemned Foe",
                    predicate: ["action:seek"],
                    selector: "perception",
                    type: "circumstance",
                    value: -1,
                },
                {
                    key: "FlatModifier",
                    label: "Seeking Condemned Foe",
                    predicate: ["harsh-judgement", "action:demoralize"],
                    selector: "intimidation",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "Seeking Condemned Foe",
                    predicate: ["action:demoralize"],
                    selector: "intimidation",
                    type: "circumstance",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-heavens-thunder": {
        _id: "L9g3EMCT3imX650b",
        img: "systems/pf2e/icons/spells/polar-ray.webp",
        name: "Effect: Heaven's Thunder",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Heaven's Thunder]</p>\n<p>Until the end of your next turn, your unarmed attacks and any monk weapons you wield deal additional electricity and sonic damage; the amount of each damage type is equal to the number of damage dice for the weapon or unarmed attack. Any creature who successfully Grapples you or is successfully Grappled by you takes this damage immediately after the Grapple check is resolved (using the number of damage dice of your unarmed attack to determine the damage dealt).</p>\n<p>If you also know the <em>ki blast</em> ki spell, you can choose to deal either electricity or sonic damage with the spell instead of force while this effect is active (<em>ki blast</em> loses the force trait and gains the electricity or sonic trait instead).</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    damageType: "electricity",
                    key: "FlatModifier",
                    predicate: [{ or: ["unarmed", "monk"] }],
                    selector: "strike-damage",
                    slug: "heavens-thunder-electricity",
                    value: "@weapon.system.damage.dice",
                },
                {
                    damageType: "sonic",
                    key: "FlatModifier",
                    predicate: [{ or: ["unarmed", "monk"] }],
                    selector: "strike-damage",
                    slug: "heavens-thunder-sonic",
                    value: "@weapon.system.damage.dice",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-heroes-call": {
        _id: "BHnunYPROBG5lxv4",
        img: "systems/pf2e/icons/spells/anima-invocation.webp",
        name: "Effect: Heroes' Call",
        system: {
            description: {
                value:
                    "<p>You gain temporary Hit Points equal to twice your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [{ key: "TempHP", value: "@actor.level*2" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-heroic-recovery": {
        _id: "7ogytOgDmh4h2g5d",
        img: "systems/pf2e/icons/features/feats/heroic-recovery.webp",
        name: "Effect: Heroic Recovery",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Heroic Recovery]</p>\n<p>You gain a +5-foot status bonus to your Speed, and a +1 status bonus to attack and damage rolls.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "status",
                    value: 5,
                },
                {
                    key: "FlatModifier",
                    selector: ["attack", "damage"],
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-high-speed-regeneration-speed-boost": {
        _id: "tx0S0fnfZ6Q2o80H",
        img: "systems/pf2e/icons/spells/agile-feet.webp",
        name: "Effect: High-Speed Regeneration Speed Boost",
        system: {
            description: {
                value: "<p>You gain a +10-foot status bonus to your Speed.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "status",
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hungry-goblin": {
        _id: "4xtHFRGI05SNe9rA",
        img: "icons/creatures/abilities/mouth-teeth-sharp.webp",
        name: "Effect: Hungry Goblin",
        system: {
            description: {
                value:
                    "<p>You'll eat anything and anyone. Whenever you inflict @UUID[Compendium.pf2e.conditionitems.Item.Persistent Damage]{Persistent Bleed Damage} with your jaws unarmed attack, you gain temporary Hit Points equal to half your level for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [{ key: "TempHP", value: "ceil(@actor.level/2)" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hunters-edge-flurry": {
        _id: "uXCU8GgriUjuj5FV",
        img: "icons/skills/melee/strike-polearm-light-orange.webp",
        name: "Effect: Hunter's Edge, Flurry",
        system: {
            description: {
                value:
                    "<p>Granted when a ranger shares their @UUID[Compendium.pf2e.classfeatures.Item.Flurry] edge with you.</p>\n<p>Your multiple attack penalty for attacks against your hunted prey is -3 (-2 with an agile weapon) on your second attack of the turn instead of -5, and -6 (-4 with an agile weapon) on your third or subsequent attack of the turn, instead of -10.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.HuntPrey.TargetHuntedPrey",
                    option: "hunted-prey",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.HuntPrey.SeekHuntedPrey",
                    predicate: ["action:seek", "hunted-prey"],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.HuntPrey.TrackHuntedPrey",
                    predicate: ["action:track", "hunted-prey"],
                    selector: "survival",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "MultipleAttackPenalty",
                    predicate: ["agile", "hunted-prey"],
                    selector: "attack",
                    value: -2,
                },
                {
                    key: "MultipleAttackPenalty",
                    predicate: ["hunted-prey", { not: "agile" }],
                    selector: "attack",
                    value: -3,
                },
            ],
            start: { initiative: null, value: 3648 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hunters-edge-outwit": {
        _id: "ltIvO9ZQlmqGD89Y",
        img: "icons/creatures/invertebrates/spider-web-black.webp",
        name: "Effect: Hunter's Edge, Outwit",
        system: {
            description: {
                value:
                    "<p>Granted when a ranger shares their @UUID[Compendium.pf2e.classfeatures.Item.Outwit] edge with you.</p>\n<p>You gain a +2 circumstance bonus to Deception checks, Intimidation checks, Stealth checks, and any checks to Recall Knowledge about the prey, and a +1 circumstance bonus to AC against your prey's attacks.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.HuntPrey.TargetHuntedPrey",
                    option: "hunted-prey",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.HuntPrey.SeekHuntedPrey",
                    predicate: ["action:seek", "hunted-prey"],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.HuntPrey.TrackHuntedPrey",
                    predicate: ["action:track", "hunted-prey"],
                    selector: "survival",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "Vs. hunted prey",
                    predicate: ["hunted-prey"],
                    selector: ["deception", "intimidation", "stealth"],
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "Recall knowledge on hunted prey",
                    predicate: ["action:recall-knowledge", "hunted-prey"],
                    selector: "skill-check",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "Vs. attacks from hunted prey",
                    predicate: ["hunted-prey"],
                    selector: "ac",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 3648 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hunters-edge-precision": {
        _id: "mNk0KxsZMFnDjUA0",
        img: "icons/skills/ranged/target-bullseye-archer-orange.webp",
        name: "Effect: Hunter's Edge, Precision",
        system: {
            description: {
                value:
                    "<p>Granted when a ranger shares their @UUID[Compendium.pf2e.classfeatures.Item.Precision] edge with you.</p>\n<p>You have trained to aim for your prey's weak points. The first time you hit your hunted prey in a round, you also deal 1d8 additional precision damage. (Precision damage increases the damage you already deal, using the same type, but is ineffective against creatures that lack vital organs or weak points.)</p>\n<p>At 11th level, the extra damage increases to 2d8 precision damage, and at 19th level, the extra damage increases to 3d8 precision damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.HuntPrey.TargetHuntedPrey",
                    option: "hunted-prey",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.HuntPrey.SeekHuntedPrey",
                    predicate: ["action:seek", "hunted-prey"],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.HuntPrey.TrackHuntedPrey",
                    predicate: ["action:track", "hunted-prey"],
                    selector: "survival",
                    type: "circumstance",
                    value: 2,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "First attack on hunted prey this round",
                    option: "first-attack",
                    toggleable: true,
                },
                {
                    category: "precision",
                    dieSize: "d8",
                    key: "DamageDice",
                    predicate: ["first-attack"],
                    selector: "strike-damage",
                    value: {
                        brackets: [
                            { end: 10, value: { diceNumber: 1 } },
                            { end: 18, start: 11, value: { diceNumber: 2 } },
                            { start: 19, value: { diceNumber: 3 } },
                        ],
                    },
                },
            ],
            start: { initiative: null, value: 3648 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hybrid-shape-beastkin": {
        _id: "qIOEe4kUN7FOBifb",
        img: "systems/pf2e/icons/features/ancestry/beastkin.webp",
        name: "Effect: Hybrid Shape (Beastkin)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Change Shape (Beastkin)]{Change Shape}.</p>\n<p>In hybrid shape, you appear as a mix between your ancestry and your inherent animal. While in hybrid shape, you gain a jaws unarmed Strike resembling the features of your inherent animal (fangs for bats, beaks for eagles, mandibles for wasps, and so on). Your jaws deal 1d4 piercing damage, have the agile, finesse, and unarmed traits, and are in the brawling weapon group.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    baseType: "jaws",
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d4" } },
                    group: "brawling",
                    img: "icons/creatures/abilities/mouth-teeth-long-red.webp",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.jaws",
                    slug: "beastkin-jaws",
                    traits: ["agile", "finesse", "unarmed"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hydration": {
        _id: "Q5FUu7yhWPJlcXei",
        img: "icons/magic/defensive/armor-stone-skin.webp",
        name: "Effect: Hydration",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.ancestryfeatures.Item.Hydration] if you spend 24 hours outside of water.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Dehydrated",
                    selector: "fortitude",
                    type: "status",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-hydraulic-deflection": {
        _id: "IfsglZ7fdegwem0E",
        img: "icons/magic/fire/explosion-flame-blue.webp",
        name: "Effect: Hydraulic Deflection",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Hydraulic Deflection]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-imperial-blood-magic": {
        _id: "vguxP8ukwVTWWWaA",
        img: "icons/sundries/books/book-embossed-jewel-gold-purple.webp",
        name: "Effect: Imperial Blood Magic",
        system: {
            description: {
                value:
                    "<p>A surge of ancestral memories grants you or one target a +1 status bonus to skill checks for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "skill-check",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-improved-poison-weapon": {
        _id: "C6H3gF5HTdsIKpOC",
        img: "systems/pf2e/icons/equipment/alchemical-items/alchemical-poisons/hunting-spider-venom.webp",
        name: "Effect: Improved Poison Weapon",
        system: {
            description: {
                value:
                    "<p>Applied when you apply a poison created with @UUID[Compendium.pf2e.feats-srd.Item.Improved Poison Weapon].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: {
                        ownedItems: true,
                        predicate: [
                            "item:equipped",
                            {
                                or: ["item:damage:type:slashing", "item:damage:type:piercing"],
                            },
                        ],
                        types: ["weapon"],
                    },
                    flag: "effectImprovedPoisonWeapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "poison",
                    diceNumber: 2,
                    dieSize: "d4",
                    key: "DamageDice",
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectImprovedPoisonWeapon}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-inspired-stratagem": {
        _id: "K0Sv9AHgq245hSLC",
        img: "systems/pf2e/icons/features/feats/inspired-stratagem.webp",
        name: "Effect: Inspired Stratagem",
        system: {
            description: {
                value:
                    "<p>You roll the triggering check twice and take the better of the two results.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { keep: "higher", key: "RollTwice", selector: "attack-roll" },
                { keep: "higher", key: "RollTwice", selector: "skill-check" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-inspiring-marshal-stance": {
        _id: "kzEPq4aczYb6OD2h",
        img: "systems/pf2e/icons/features/feats/inspiring-marshal-stance.webp",
        name: "Effect: Inspiring Marshal Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Inspiring Marshal Stance]</p>\n<p>Your marshal's aura grants you and allies a +1 status bonus to attack rolls and saves against mental effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "attack", type: "status", value: 1 },
                {
                    key: "FlatModifier",
                    predicate: ["mental"],
                    selector: "saving-throw",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-inspiring-resilience": {
        _id: "qM4bQfcwZ0EOS2M9",
        img: "systems/pf2e/icons/default-icons/effect.svg",
        name: "Effect: Inspiring Resilience",
        system: {
            description: {
                value:
                    "<p>You gain a +1 circumstance bonus to their Will save against the triggering effect, or a +2 circumstance bonus if the effect originated from an undead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["mental"],
                    selector: "saving-throw",
                    slug: "inspiring-resilience",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "AdjustModifier",
                    mode: "override",
                    predicate: ["origin:mode:undead"],
                    selector: "saving-throw",
                    slug: "inspiring-resilience",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-invigorating-breath": {
        _id: "tl94WHJ2Hg0akK2o",
        img: "icons/magic/life/heart-shadow-red.webp",
        name: "Effect: Invigorating Breath",
        system: {
            description: {
                value:
                    "<p>You gain 20 temporary Hit Points. At 15th level, you instead gain 30 temporary Hit Points.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #188: They Watched the Stars",
            },
            rules: [{ key: "TempHP", value: "ternary(gte(@actor.level,15),30,20)" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-juvenile-flight": {
        _id: "0JrHvdUgJBl631En",
        img: "icons/commodities/materials/feather-blue-glowing.webp",
        name: "Effect: Juvenile Flight",
        system: {
            description: {
                value:
                    "<p>You gain a fly Speed equal to your land Speed while your wings are unfurled.</p>\n<p>If you have @UUID[Compendium.pf2e.feats-srd.Item.Fledgling Flight], you gain a +10-foot status bonus to your fly Speed with Juvenile Flight. As normal, since your fly Speed is derived from your land Speed, this status bonus isn't cumulative with a status bonus to your land Speed, if you have one.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "@actor.attributes.speed.total",
                },
                {
                    key: "FlatModifier",
                    predicate: ["feat:fledgling-flight"],
                    selector: "fly-speed",
                    type: "status",
                    value: 10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-kindle-inner-flames": {
        _id: "bWvOkRT3alzllsiG",
        img: "systems/pf2e/icons/spells/entropic-wheel.webp",
        name: "Effect: Kindle Inner Flames",
        system: {
            description: {
                value:
                    "<p>The creature gains a status bonus to Reflex saves and Acrobatics checks.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["reflex", "acrobatics"],
                    type: "status",
                    value: "ternary(gte(@item.origin.level,12), 2, 1)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-kinetic-aura": {
        _id: "pLurcSPQb2gjAzoP",
        img: "icons/magic/unholy/orb-swirling-teal.webp",
        name: "Effect: Kinetic Aura",
        system: {
            description: { value: "<p>You activate your kinetic aura.</p>" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        {
                            label: "PF2E.AreaSize5",
                            predicate: ["feat:aura-shaping"],
                            value: 5,
                        },
                        { label: "PF2E.AreaSize10", value: 10 },
                        {
                            label: "PF2E.AreaSize15",
                            predicate: ["feat:aura-shaping"],
                            value: 15,
                        },
                        {
                            label: "PF2E.AreaSize20",
                            predicate: ["feat:aura-shaping"],
                            value: 20,
                        },
                        {
                            label: "PF2E.AreaSize25",
                            predicate: ["feat:aura-shaping", { gte: ["self:level", 15] }],
                            value: 25,
                        },
                        {
                            label: "PF2E.AreaSize30",
                            predicate: ["feat:aura-shaping", { gte: ["self:level", 20] }],
                            value: 30,
                        },
                    ],
                    flag: "auraRadius",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Kineticist.KineticGate.Prompt.AuraSize",
                },
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            predicate: ["junction:air:aura"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Aura Junction (Air)",
                        },
                        {
                            affects: "enemies",
                            predicate: ["junction:fire:aura"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Aura Junction (Fire)",
                        },
                        {
                            affects: "all",
                            predicate: ["junction:water:aura"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Aura Junction (Water)",
                        },
                        {
                            affects: "allies",
                            includeSelf: false,
                            predicate: ["junction:wood:aura"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Aura Junction (Wood)",
                        },
                    ],
                    key: "Aura",
                    level: "@actor.level",
                    priority: 99,
                    radius: "@item.flags.pf2e.rulesSelections.auraRadius",
                    slug: "kinetic-aura",
                    traits: ["kineticist", "primal"],
                },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "flags.pf2e.kineticist.auraRadius",
                    value: "@item.flags.pf2e.rulesSelections.auraRadius",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-kneecap": {
        _id: "kZdVPBO58uq38KIR",
        img: "icons/skills/movement/figure-running-gray.webp",
        name: "Effect: Kneecap",
        system: {
            description: {
                value: "<p>You gain imprecise tremorsense with a range of 20 feet.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        {
                            label: "PF2E.Check.Result.Degree.Attack.criticalSuccess",
                            value: -15,
                        },
                        { label: "PF2E.Check.Result.Degree.Attack.success", value: -10 },
                    ],
                    flag: "penalty",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.DegreeOfSuccess",
                },
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "circumstance",
                    value: "@item.flags.pf2e.rulesSelections.penalty",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-known-weakness": {
        _id: "DvyyA11a63FBwV7x",
        img: "systems/pf2e/icons/equipment/adventuring-gear/advanced-book-of-translation.webp",
        name: "Effect: Known Weakness",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Known Weaknesses].</p>\n<p>Your ally gains a +1 circumstance bonus to their next attack roll against the subject of known weakness, as long as their attack is made before the beginning of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "attack",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-legendary-monster-hunter": {
        _id: "LB0PTV5yqMlBmRFj",
        img: "systems/pf2e/icons/spells/monstrosity-form.webp",
        name: "Effect: Legendary Monster Hunter",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Monster Hunter] if you have @UUID[Compendium.pf2e.feats-srd.Item.Legendary Monster Hunter].</p>\n<p>You gain a +2 circumstance bonus to your next attack roll against that prey.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 16 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "attack-roll",
                    key: "RollOption",
                    label: "Target is the subject of Monster Hunter",
                    option: "monster-hunter",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: ["monster-hunter"],
                    selector: "attack",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 3648 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-legendary-monster-warden": {
        _id: "aUpcWqaLBlmpnJgW",
        img: "systems/pf2e/icons/spells/monstrosity-form.webp",
        name: "Effect: Legendary Monster Warden",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Monster Warden] if you have @UUID[Compendium.pf2e.feats-srd.Item.Legendary Monster Hunter].</p>\n<p>You gain a +2 circumstance bonus to your next attack roll against that prey.</p>\n<p>You gain a +2 circumstance bonus to your next saving throw against that particular creature and to your AC against that creature's next attack against you.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 16 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Target is the subject of Monster Hunter",
                    option: "monster-hunter",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "Monster Warden",
                    predicate: ["monster-hunter"],
                    selector: ["ac", "attack", "saving-throw"],
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 3648 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-liberating-step-vs-aberration": {
        _id: "tAsFXMzNkpj964X4",
        img: "icons/creatures/magical/spirit-fire-yellow.webp",
        name: "Effect: Liberating Step (vs. Aberration)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Esoteric Oath (Liberator)]</p>\n<p>If you use Liberating Step triggered by an evil aberration, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. aberration)",
                    predicate: ["action:escape"],
                    selector: ["acrobatics", "athletics", "saving-throw"],
                    type: "circumstance",
                    value: 4,
                },
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. aberration)",
                    predicate: ["action:escape", "unarmed"],
                    selector: "attack",
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-liberating-step-vs-dragon": {
        _id: "iyONT1qgeRgoYHsZ",
        img: "systems/pf2e/icons/spells/summon-dragon.webp",
        name: "Effect: Liberating Step (vs. Dragon)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Dragonslayer Oath (Liberator)]</p>\n<p>If you use Liberating Step triggered by an evil dragon, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. dragon)",
                    predicate: ["action:escape"],
                    selector: ["acrobatics", "athletics", "saving-throw"],
                    type: "circumstance",
                    value: 4,
                },
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. dragon)",
                    predicate: ["action:escape", "unarmed"],
                    selector: "attack",
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-liberating-step-vs-fiend": {
        _id: "9dCt0asv0kt7DR4q",
        img: "systems/pf2e/icons/spells/summon-fiend.webp",
        name: "Effect: Liberating Step (vs. Fiend)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Fiendsbane Oath (Liberator)]</p>\n<p>If you use Liberating Step triggered by a fiend, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. fiend)",
                    predicate: ["action:escape"],
                    selector: ["acrobatics", "athletics", "saving-throw"],
                    type: "circumstance",
                    value: 4,
                },
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. fiend)",
                    predicate: ["action:escape", "unarmed"],
                    selector: "attack",
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-liberating-step-vs-undead": {
        _id: "ZnKnOPPq3cG54PlG",
        img: "icons/magic/death/undead-skeleton-fire-green.webp",
        name: "Effect: Liberating Step (vs. Undead)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Shining Oath (Liberator)]</p>\n<p>If you use Liberating Step triggered by an undead, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. undead)",
                    predicate: ["action:escape"],
                    selector: ["acrobatics", "athletics", "saving-throw"],
                    type: "circumstance",
                    value: 4,
                },
                {
                    key: "FlatModifier",
                    label: "Liberating Step (vs. undead)",
                    predicate: ["action:escape", "unarmed"],
                    selector: "attack",
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-life-giving-magic": {
        _id: "YKJhjkerCW0Jl6HP",
        img: "icons/magic/life/heart-area-circle-red-green.webp",
        name: "Effect: Life-Giving Magic",
        system: {
            description: {
                value:
                    "<p>You gain a number of temporary Hit Points equal to half your level (minimum 1) that last until the end of your next turn.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [{ key: "TempHP", value: "max(1,floor(@actor.level/2))" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-living-for-the-applause": {
        _id: "YMdRmEcOlM3uU9Em",
        img: "systems/pf2e/icons/spells/enthrall.webp",
        name: "Effect: Living for the Applause",
        system: {
            description: { value: "<p>You gain a +1 circumstance bonus to AC.</p>" },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-living-fortification-parry-trait": {
        _id: "WxE5S3KY1DR5Nbxm",
        img: "systems/pf2e/icons/equipment/weapons/main-gauche.webp",
        name: "Effect: Living Fortification (Parry Trait)",
        system: {
            description: {
                value:
                    "<p>You position your weapon defensively, gaining a +2 circumstance bonus to AC until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: ["gunslinger"] },
        },
        type: "effect",
    },
    "effect-living-fortification": {
        _id: "fRlvmul3LbLo2xvR",
        img: "systems/pf2e/icons/equipment/weapons/main-gauche.webp",
        name: "Effect: Living Fortification",
        system: {
            description: {
                value:
                    "<p>You position your weapon defensively, gaining a +1 circumstance bonus to AC until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: ["gunslinger"] },
        },
        type: "effect",
    },
    "effect-lock-on": {
        _id: "xtqOIXCe0Nsd0QCt",
        img: "icons/skills/targeting/crosshair-bars-yellow.webp",
        name: "Effect: Lock On",
        system: {
            description: {
                value:
                    "<p>The construct gains a +2 circumstance bonus to attack rolls against the designated enemy until the end of the turn. If you use 2 actions for the Command, the bonus is instead a +3 circumstance bonus, or a +4 circumstance bonus if you're legendary in Crafting.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                { key: "TokenMark", slug: "lock-on" },
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SpecificRule.Actions.OneAction", value: 2 },
                        { label: "PF2E.SpecificRule.Actions.TwoActions", value: 3 },
                        {
                            label: "PF2E.SpecificRule.Inventor.LockOn.TwoActionsLegendary",
                            value: 4,
                        },
                    ],
                    flag: "number",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Actions.Prompt",
                },
                {
                    key: "FlatModifier",
                    predicate: ["target:mark:lock-on"],
                    selector: "attack-roll",
                    type: "circumstance",
                    value: "@item.flags.pf2e.rulesSelections.number",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-lost-in-the-crowd-10-creatures": {
        _id: "aWOvmdaTK1jS3H72",
        img: "systems/pf2e/icons/features/feats/lost-in-the-crowd.webp",
        name: "Effect: Lost in the Crowd (10 Creatures)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Lost in the Crowd]</p>\n<p>You've learned how to move as one with crowds and hide among them, vanishing into a busy street in the blink of an eye. You move at full Speed in crowds and can use cover from crowds to Hide and Sneak, gaining a +2 circumstance bonus on your Stealth checks when in a crowd of at least 10 creatures.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "stealth",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-lost-in-the-crowd-100-creatures": {
        _id: "CNnIS8jWVj00nPwF",
        img: "systems/pf2e/icons/features/feats/lost-in-the-crowd.webp",
        name: "Effect: Lost in the Crowd (100 Creatures)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Lost in the Crowd]</p>\n<p>You've learned how to move as one with crowds and hide among them, vanishing into a busy street in the blink of an eye. You move at full Speed in crowds and can use cover from crowds to Hide and Sneak, gaining a +4 circumstance bonus on your Stealth checks when in a crowd of at least 100 creatures.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "stealth",
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-magical-mentor-boon-pfs": {
        _id: "fh8TgCfiifVk0eqU",
        img: "systems/pf2e/icons/features/feats/pfs-magical-mentor-boon.webp",
        name: "Effect: Magical Mentor Boon (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you provide key spellcasting insights that augment your colleagues' magic. Any PCs benefiting from a Level Bump and whose levels are lower than yours can prepare one additional spell of their highest-level spell slot or cast one additional spell of their highest-level spell slot. When casting spells of a magical tradition that is the same as the tradition you use for spellcasting, the affected PC also increases the Level Bump's modifier to spell DCs to 2.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's spell DCs by 1, and it does not grant any additional spells prepared or spell slots.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>\n<p><strong>**Spell-DC not implemented yet. The rule is in place for when it is but all DCs must be increased manually for now**</strong></p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Magical Mentor",
                    selector: "spell-dc",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-maidens-mending": {
        _id: "FIgud5jqZgIjwkRE",
        img: "systems/pf2e/icons/spells/healers-blessing.webp",
        name: "Effect: Maiden's Mending",
        system: {
            description: {
                value:
                    "<p>You gain a number of temporary Hit Points equal to half your level (minimum 1) that last until the end of your next turn.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "TempHP", value: "max(floor(@actor.level/2),1)" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-marshals-aura": {
        _id: "Ru4BNABCZ0hUbX7S",
        img: "systems/pf2e/icons/features/feats/marshals-aura.webp",
        name: "Effect: Marshal's Aura",
        system: {
            description: {
                value:
                    "<p>Granted by being inside a Marshal's Aura.</p>\n<hr />\n<p>Your aura has the emotion, mental, and visual traits and grants you and allies within the aura a +1 status bonus to saving throws against fear.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["fear"],
                    selector: "saving-throw",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-masterful-hunters-edge-flurry": {
        _id: "4UNQfMrwfWirdwoV",
        img: "icons/skills/melee/strike-polearm-light-orange.webp",
        name: "Effect: Masterful Hunter's Edge, Flurry",
        system: {
            description: {
                value:
                    "<p>Granted when a ranger shares their @UUID[Compendium.pf2e.classfeatures.Item.Masterful Hunter (Flurry)] with you.</p>\n<p>Your multiple attack penalty for attacks against your hunted prey is -3 (-2 with an agile weapon) on your second attack of the turn instead of -5, and -6 (-4 with an agile weapon) on your third or subsequent attack of the turn, instead of -10.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.HuntPrey.TargetHuntedPrey",
                    option: "hunted-prey",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "To Track hunted prey (Masterful Hunter)",
                    predicate: ["action:track", "hunted-prey"],
                    selector: "survival",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.sur.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "To Seek hunted prey (Masterful Hunter)",
                    predicate: ["action:seek", "hunted-prey"],
                    selector: "perception",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.attributes.perception.rank",
                    },
                },
                {
                    key: "MultipleAttackPenalty",
                    predicate: [
                        "hunted-prey",
                        { or: ["proficiency:master", "proficiency:legendary"] },
                        { not: "agile" },
                    ],
                    selector: "attack",
                    value: -2,
                },
                {
                    key: "MultipleAttackPenalty",
                    predicate: [
                        "agile",
                        "hunted-prey",
                        { or: ["proficiency:master", "proficiency:legendary"] },
                    ],
                    selector: "attack",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 3648 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-masterful-hunters-edge-outwit": {
        _id: "iqvurepX0zyu9OlI",
        img: "icons/creatures/invertebrates/spider-web-black.webp",
        name: "Effect: Masterful Hunter's Edge, Outwit",
        system: {
            description: {
                value:
                    "<p>Granted when a ranger shares their @UUID[Compendium.pf2e.classfeatures.Item.Masterful Hunter (Outwit)] with you.</p>\n<p>Your mastery of skills allows you to overwhelm your prey. If you have master proficiency in Deception, Intimidation, Stealth, or the skill you use to Recall Knowledge about your prey, increase the circumstance bonus against the prey with that skill from +2 to +4.</p>\n<p>If you have master proficiency with your armor, increase the circumstance bonus to AC against the prey from +1 to +2.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.HuntPrey.TargetHuntedPrey",
                    option: "hunted-prey",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "To Track hunted prey (Masterful Hunter)",
                    predicate: ["action:track", "hunted-prey"],
                    selector: "survival",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.sur.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "To Seek hunted prey (Masterful Hunter)",
                    predicate: ["action:seek", "hunted-prey"],
                    selector: "perception",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.attributes.perception.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Vs. attacks from hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey"],
                    selector: "ac",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 2 },
                            { end: 2, start: 1, value: 1 },
                        ],
                        field: "actor|system.proficiencies.defenses.unarmored.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Vs. hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey"],
                    selector: "deception",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.dec.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Vs. hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey"],
                    selector: "intimidation",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.itm.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Vs. hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey"],
                    selector: "stealth",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.ste.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Recall knowledge on hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey", "action:recall-knowledge"],
                    selector: "arcana",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.arc.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Recall knowledge on hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey", "action:recall-knowledge"],
                    selector: "religion",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.rel.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Recall knowledge on hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey", "action:recall-knowledge"],
                    selector: "nature",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.nat.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Recall knowledge on hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey", "action:recall-knowledge"],
                    selector: "occultism",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.occ.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Recall knowledge on hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey", "action:recall-knowledge"],
                    selector: "crafting",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.cra.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "Recall knowledge on hunted prey (Masterful Hunter)",
                    predicate: ["hunted-prey", "action:recall-knowledge"],
                    selector: "society",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.soc.rank",
                    },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-masterful-hunters-edge-precision": {
        _id: "Lt5iSfx8fxHSdYXz",
        img: "icons/skills/ranged/target-bullseye-archer-orange.webp",
        name: "Effect: Masterful Hunter's Edge, Precision",
        system: {
            description: {
                value:
                    "<p>Granted when a ranger shares their @UUID[Compendium.pf2e.classfeatures.Item.Masterful Hunter (Precision)] with you.</p>\n<p>The second time in a round you hit your hunted prey, you also deal 1d8 precision damage.</p>\n<p>At 19th level, your second hit in a round against your hunted prey deals 2d8 precision damage, and your third hit in a round against your hunted prey deals 1d8 precision damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.HuntPrey.TargetHuntedPrey",
                    option: "hunted-prey",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "To Track hunted prey (Masterful Hunter)",
                    predicate: ["action:track", "hunted-prey"],
                    selector: "survival",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.skills.sur.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    label: "To Seek hunted prey (Masterful Hunter)",
                    predicate: ["action:seek", "hunted-prey"],
                    selector: "perception",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 4, start: 3, value: 4 },
                            { end: 2, start: 1, value: 2 },
                        ],
                        field: "actor|system.attributes.perception.rank",
                    },
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Second attack on hunted prey this round",
                    option: "second-attack",
                    toggleable: true,
                },
                {
                    category: "precision",
                    dieSize: "d8",
                    key: "DamageDice",
                    predicate: ["second-attack"],
                    selector: "strike-damage",
                    value: {
                        brackets: [
                            { end: 18, value: { diceNumber: 1 } },
                            { start: 19, value: { diceNumber: 2 } },
                        ],
                    },
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Third attack on hunted prey this round",
                    option: "third-attack",
                    toggleable: true,
                },
                {
                    category: "precision",
                    dieSize: "d8",
                    key: "DamageDice",
                    predicate: ["third-attack"],
                    selector: "strike-damage",
                    value: { brackets: [{ start: 19, value: { diceNumber: 1 } }] },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-metallic-skin": {
        _id: "YIShkE3JCEuwCAxl",
        img: "systems/pf2e/icons/spells/face-in-the-crowd.webp",
        name: "Effect: Metallic Skin",
        system: {
            description: {
                value:
                    "<p>You fortify your natural resistances with elemental metal, covering your skin with thick metal. You gain a +2 status bonus to AC and resistance 10 to physical damage (except adamantine), but you take a –10-foot penalty to Speed. If you take fire damage while this ability is active, until the end of your next turn, you deal an additional @Damage[2d6[fire]] damage with all your unarmed melee Strikes.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "status", value: 2 },
                { key: "FlatModifier", selector: "speed", value: -10 },
                {
                    exceptions: ["adamantine"],
                    key: "Resistance",
                    type: "physical",
                    value: 10,
                },
                {
                    domain: "damage",
                    key: "RollOption",
                    option: "metallic-skin-fire",
                    toggleable: true,
                },
                {
                    damageType: "fire",
                    diceNumber: 2,
                    dieSize: "d6",
                    key: "DamageDice",
                    predicate: [
                        "item:category:unarmed",
                        "item:melee",
                        "metallic-skin-fire",
                    ],
                    selector: "strike-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-methodical-debilitations": {
        _id: "emSh1VxHVtTmt925",
        img: "icons/skills/melee/strike-sword-blood-red.webp",
        name: "Effect: Methodical Debilitations",
        system: {
            description: {
                value: "<p>The target is unable to flank or provide flanking.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.flanking.canFlank",
                    value: false,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-monster-hunter": {
        _id: "W2tWq0gdAcnoz2MO",
        img: "systems/pf2e/icons/spells/monstrosity-form.webp",
        name: "Effect: Monster Hunter",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Monster Hunter]</p>\n<p>You gain a +1 circumstance bonus to your next attack roll against that prey.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "attack-roll",
                    key: "RollOption",
                    label: "Target is the subject of Monster Hunter",
                    option: "monster-hunter",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: ["monster-hunter"],
                    selector: "attack",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-monster-warden": {
        _id: "nlaxROgSSLVHZ1hx",
        img: "systems/pf2e/icons/spells/monstrosity-form.webp",
        name: "Effect: Monster Warden",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Monster Warden]</p>\n<p>You gain a +1 circumstance bonus to your next attack roll against that prey.</p>\n<p>You gain a +1 circumstance bonus to your next saving throw against that particular creature and to your AC against that creature's next attack against you.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Target is the subject of Monster Hunter",
                    option: "monster-hunter",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: ["monster-hunter"],
                    selector: ["ac", "attack", "saving-throw"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-mountain-endemic-herbs": {
        _id: "QTG73gxKSNkiEWdY",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Mountain Endemic Herbs",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Endemic Herbs]</p>\n<p>Gain a +1 circumstance bonus to Reflex saves.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "reflex",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-mountain-strategy-critically-hit": {
        _id: "O7OO1kWFEFv6vl3E",
        img: "icons/skills/targeting/target-strike-triple-blue.webp",
        name: "Effect: Mountain Strategy (Critically Hit)",
        system: {
            description: { value: "<p>Marks a target that critically hit you.</p>" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [{ key: "TokenMark", slug: "mountain-strategy" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-mountain-stronghold": {
        _id: "EfMaI6AnROP4X9lN",
        img: "icons/environment/settlement/watchtower-silhouette-yellow.webp",
        name: "Effect: Mountain Stronghold",
        system: {
            description: {
                value:
                    "<p>You focus on your connection to the earth and call upon the mountain to block attacks against you. You gain a +2 circumstance bonus to AC until the beginning of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-mutate-weapon": {
        _id: "ITvyvbB234bxceRK",
        img: "icons/magic/nature/root-vine-beanstolk-green.webp",
        name: "Effect: Mutate Weapon",
        system: {
            description: {
                value:
                    "<p>Select one unarmed attack you gained with Living Weapon. The damage die for that attack increases by one step until the end of your turn. In addition, choose to either have the attack gain a reach of 10 feet until the end of your turn or for you to gain a +1 status bonus to attack rolls with the chosen unarmed attack until the end of your turn.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 5 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.BattleForm.Attack.Claw",
                            predicate: ["living-weapon:claw"],
                            value: "claw",
                        },
                        {
                            label: "PF2E.BattleForm.Attack.Horn",
                            predicate: ["living-weapon:horn"],
                            value: "horn",
                        },
                        {
                            label: "PF2E.BattleForm.Attack.Jaws",
                            predicate: ["living-weapon:jaws"],
                            value: "jaws",
                        },
                        {
                            label: "PF2E.BattleForm.Attack.Tusk",
                            predicate: ["living-weapon:tusk"],
                            value: "tusk",
                        },
                        {
                            label: "PF2E.BattleForm.Attack.Tail",
                            predicate: ["living-weapon:tail"],
                            value: "tail",
                        },
                    ],
                    flag: "mutateWeaponTarget",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Fleshwarp.MutateWeapon.Target",
                    rollOption: "mutate-weapon-target",
                },
                {
                    key: "DamageDice",
                    override: { upgrade: true },
                    selector:
                        "{item|flags.pf2e.rulesSelections.mutateWeaponTarget}-damage",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.Fleshwarp.MutateWeapon.Reach",
                            value: "reach",
                        },
                        {
                            label: "PF2E.SpecificRule.Fleshwarp.MutateWeapon.Accuracy",
                            value: "accuracy",
                        },
                    ],
                    flag: "effectMutateWeapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Fleshwarp.MutateWeapon.Bonus",
                    rollOption: "mutate-weapon-bonus",
                },
                {
                    definition: [
                        "item:{item|flags.pf2e.rulesSelections.mutateWeaponTarget}",
                    ],
                    key: "AdjustStrike",
                    mode: "add",
                    predicate: ["mutate-weapon-bonus:reach"],
                    property: "weapon-traits",
                    value: "reach",
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: ["mutate-weapon-bonus:accuracy"],
                    selector:
                        "{item|flags.pf2e.rulesSelections.mutateWeaponTarget}-attack-roll",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-nanite-surge-bonus": {
        _id: "pFo9DVyaDb4LdURY",
        img: "icons/commodities/tech/tube-chamber-lightning.webp",
        name: "Effect: Nanite Surge (Bonus)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Nanite Surge].</p>\n<p>You gain a +2 status bonus to the triggering skill check.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    removeAfterRoll: "if-enabled",
                    selector: "skill-check",
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-nanite-surge": {
        _id: "ErLweSmVAN57QIpp",
        img: "systems/pf2e/icons/spells/moonlight-ray.webp",
        name: "Effect: Nanite Surge",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Nanite Surge].</p>\n<p>Your circuitry glows, lighting a @Template[type:emanation|distance:10] with dim light for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "TokenLight",
                    value: { bright: 0, color: "#9b7337", dim: 10, shadows: 0.2 },
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feat-effects.Item.Effect: Nanite Surge (Bonus)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-nymph-blood-magic-self": {
        _id: "SVGW8CLKwixFlnTv",
        img: "systems/pf2e/icons/features/classes/nymph.webp",
        name: "Effect: Nymph Blood Magic (Self)",
        system: {
            description: {
                value:
                    "<p>Nymph grace accentuates your movements and distracts your foes, granting you a +1 status bonus to Diplomacy checks for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "diplomacy",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-nymph-blood-magic-target": {
        _id: "ruRAfGJnik7lRavk",
        img: "systems/pf2e/icons/features/classes/nymph.webp",
        name: "Effect: Nymph Blood Magic (Target)",
        system: {
            description: {
                value:
                    "<p>Nymph grace accentuates your movements and distracts your foes, imposing a -1 status bonus to Will saves for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "will", type: "status", value: -1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-offensive-boost": {
        _id: "ut5SVyCSXel69nnd",
        img: "systems/pf2e/icons/features/classes/offensive-boost.webp",
        name: "Effect: Offensive Boost",
        system: {
            description: {
                value:
                    "<p>If your innovation is armor, the boost applies to your melee Strikes with one weapon you choose during daily preparations; if your innovation is a construct, the boost applies to your construct companion's Strikes; Choose one of the following boosts, with the damage type in parentheses.</p>\n<ul>\n<li><strong>Chill (Cold)</strong> Your innovation rapidly absorbs heat, creating an intense chill.</li>\n<li><strong>Ignition (Fire)</strong> Your innovation shoots out jets of searing flame.</li>\n<li><strong>Jolt (Electricity)</strong> Your innovation jolts foes with charges of electricity.</li>\n<li><strong>Momentum (Bludgeoning)</strong> Your innovation slams into foes with added momentum.</li>\n<li><strong>Saws (Slashing)</strong> Your innovation reveals spinning sawblades during your attacks.</li>\n<li><strong>Spike (Piercing)</strong> Your innovation reveals wicked spikes during your attacks.</li>\n<li><strong>Vitriol (Acid)</strong> Your innovation releases spurts of caustic acid.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.Inventor.OffensiveBoost.Chill",
                            value: "cold",
                        },
                        {
                            label: "PF2E.SpecificRule.Inventor.OffensiveBoost.Ignition",
                            value: "fire",
                        },
                        {
                            label: "PF2E.SpecificRule.Inventor.OffensiveBoost.Jolt",
                            value: "electricity",
                        },
                        {
                            label: "PF2E.SpecificRule.Inventor.OffensiveBoost.Momentum",
                            value: "bludgeoning",
                        },
                        {
                            label: "PF2E.SpecificRule.Inventor.OffensiveBoost.Saws",
                            value: "slashing",
                        },
                        {
                            label: "PF2E.SpecificRule.Inventor.OffensiveBoost.Spike",
                            value: "piercing",
                        },
                        {
                            label: "PF2E.SpecificRule.Inventor.OffensiveBoost.Vitriol",
                            value: "acid",
                        },
                    ],
                    flag: "damage",
                    key: "ChoiceSet",
                    predicate: ["self:trait:minion"],
                    prompt: "PF2E.SpecificRule.Inventor.OffensiveBoost.Prompt",
                },
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "weapon",
                    key: "ChoiceSet",
                    predicate: ["feature:armor-innovation"],
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "{item|flags.pf2e.rulesSelections.damage}",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    predicate: ["self:trait:minion"],
                    selector: "strike-damage",
                },
                {
                    damageType: "{actor|flags.pf2e.inventor.offensiveBoost.damageType}",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    predicate: ["feature:armor-innovation"],
                    selector: "{item|flags.pf2e.rulesSelections.weapon}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-orchards-endurance": {
        _id: "FHBYfq3w7ddLvzrK",
        img: "icons/magic/nature/barrier-shield-wood-vines.webp",
        name: "Effect: Orchard's Endurance",
        system: {
            description: {
                value:
                    "<p>You gain resistance to bludgeoning and piercing damage. In addition, you roll flat checks to recover from persistent damage twice and take the higher result; this is a fortune effect.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "Resistance",
                    type: ["bludgeoning", "piercing"],
                    value: "ternary(gte(@item.origin.level,18),7,5)",
                },
                {
                    keep: "higher",
                    key: "RollTwice",
                    removeAfterRoll: false,
                    selector: "pd-recovery-check",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-overdrive-success": {
        _id: "MZDh3170EFIfOwTO",
        img: "systems/pf2e/icons/features/feats/overdrive-success.webp",
        name: "Effect: Overdrive (Success)",
        system: {
            description: {
                value:
                    "<p>Your gizmos go into overdrive, adding power to your attacks. Your Strikes deal additional damage equal to half your Intelligence modifier for 1 minute. After the Overdrive ends, your gizmos become unusable as they cool down or reset, and you can't use Overdrive for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ not: "feature:expert-overdrive" }],
                    selector: "strike-damage",
                    slug: "overdrive",
                    value: "floor(@actor.abilities.int.mod/2)",
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "feature:expert-overdrive",
                        { not: "feature:master-overdrive" },
                    ],
                    selector: "strike-damage",
                    slug: "overdrive-expert",
                    value: "floor(@actor.abilities.int.mod/2)+1",
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "feature:master-overdrive",
                        { not: "feature:legendary-overdrive" },
                    ],
                    selector: "strike-damage",
                    slug: "overdrive-master",
                    value: "floor(@actor.abilities.int.mod/2)+2",
                },
                {
                    key: "FlatModifier",
                    predicate: ["feature:legendary-overdrive"],
                    selector: "strike-damage",
                    slug: "overdrive-legendary",
                    value: "floor(@actor.abilities.int.mod/2)+3",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-overdrive": {
        _id: "1XlJ9xLzL19GHoOL",
        img: "systems/pf2e/icons/features/feats/overdrive-critical-success.webp",
        name: "Effect: Overdrive",
        system: {
            description: {
                value:
                    "<p>Your gizmos go into a state of incredible efficiency called critical overdrive, adding great power to your attacks. Your Strikes deal additional damage equal to your Intelligence modifier for 1 minute. After the Overdrive ends, your gizmos become unusable as they cool down or reset, and you can't use Overdrive for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.Check.Result.Degree.Check.criticalSuccess",
                            value: "critical-success",
                        },
                        {
                            label: "PF2E.Check.Result.Degree.Check.success",
                            value: "success",
                        },
                    ],
                    flag: "baseDamage",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.DegreeOfSuccess",
                    rollOption: "overdrive",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "flags.pf2e.overdriveBaseDamage",
                    phase: "beforeDerived",
                    predicate: ["overdrive:success"],
                    value: "floor(@item.origin.system.abilities.int.mod/2)",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "flags.pf2e.overdriveBaseDamage",
                    phase: "beforeDerived",
                    predicate: ["overdrive:critical-success"],
                    value: "@item.origin.system.abilities.int.mod",
                },
                {
                    key: "FlatModifier",
                    selector: "strike-damage",
                    slug: "overdrive",
                    value:
                        "@actor.flags.pf2e.overdriveBaseDamage+ternary(gte(@item.origin.level,15), 3, ternary(gte(@item.origin.level,7), 2, ternary(gte(@item.origin.level,3),1,0)))",
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "self:effect:overdrive-success",
                    predicate: ["overdrive:success"],
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "self:effect:overdrive-critical-success",
                    predicate: ["overdrive:critical-success"],
                },
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.UI.RuleElements.ChoiceSet.YesLabel", value: "fire" },
                        {
                            label: "PF2E.UI.RuleElements.ChoiceSet.NoLabel",
                            value: "normal",
                        },
                    ],
                    flag: "damageType",
                    key: "ChoiceSet",
                    predicate: ["feature:weapon-innovation"],
                    prompt: "PF2E.SpecificRule.Inventor.Overdrive.DamageTypePrompt",
                    rollOption: "weapon-innovation-overdrive-damage",
                },
                {
                    damageType: "fire",
                    key: "AdjustModifier",
                    mode: "add",
                    predicate: ["weapon-innovation-overdrive-damage:fire"],
                    selector: "strike-damage",
                    slug: "overdrive",
                    value: 0,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-overwatch-field": {
        _id: "AKKHagjg5bL1fMG5",
        img: "systems/pf2e/icons/spells/prying-eye.webp",
        name: "Effect: Overwatch Field",
        system: {
            description: {
                value:
                    "<p>Your overwatch field aura grants you increased perception and allows you to call out warnings to your allies within the aura to point out threats. This aura has the auditory and visual traits. You and allies within your overwatch field receive a +2 circumstance bonus when using Perception for Initiative checks.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["perception"],
                    selector: "initiative",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-panache": {
        _id: "uBJsxCzNhje8m8jj",
        img: "icons/commodities/treasure/crown-gold-laurel-wreath.webp",
        name: "Effect: Panache",
        system: {
            description: {
                value:
                    "<p>You care as much about the way you accomplish something as whether you actually accomplish it in the first place. When you perform an action with particular bravado, you can leverage this moment of verve to perform spectacular, deadly maneuvers. This state of flair is called panache, and you are either in a state of panache or you are not.</p>\n<p>Granted by @UUID[Compendium.pf2e.classfeatures.Item.Panache]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { domain: "all", key: "RollOption", option: "panache" },
                {
                    key: "FlatModifier",
                    predicate: ["action:tumble-through"],
                    selector: "acrobatics",
                    type: "circumstance",
                    value: 1,
                },
                { key: "FlatModifier", selector: "speed", type: "status", value: 5 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-perfect-resistance": {
        _id: "DyX4E7KDkzRnDxzc",
        img: "systems/pf2e/icons/spells/endure-elements.webp",
        name: "Effect: Perfect Resistance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Perfect Resistance]</p>\n<p>After using a Student of Perfection ki spell, the resistance increases to be equal to your level for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "{actor|flags.pf2e.houseOfPerfection.element}",
                    value: "@actor.level",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-plains-endemic-herbs": {
        _id: "HjCXHDZT6GkCyiuG",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Plains Endemic Herbs",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Endemic Herbs]</p>\n<p>Gain a +1 circumstance bonus to Will saves.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "will",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-poison-weapon": {
        _id: "SXYcrnGzWCuj8zq7",
        img: "systems/pf2e/icons/equipment/alchemical-items/alchemical-poisons/hunting-spider-venom.webp",
        name: "Effect: Poison Weapon",
        system: {
            description: {
                value:
                    "<p>Applied when you apply a poison created with @UUID[Compendium.pf2e.feats-srd.Item.Poison Weapon].</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: {
                        ownedItems: true,
                        predicate: [
                            "item:equipped",
                            {
                                or: ["item:damage:type:slashing", "item:damage:type:piercing"],
                            },
                        ],
                        types: ["weapon"],
                    },
                    flag: "effectPoisonWeapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "poison",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: [
                        {
                            nor: ["feat:improved-poison-weapon", "feat:deadly-poison-weapon"],
                        },
                    ],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectPoisonWeapon}-damage",
                },
                {
                    damageType: "poison",
                    diceNumber: 2,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: [
                        "feat:improved-poison-weapon",
                        { not: "feat:deadly-poison-weapon" },
                    ],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectPoisonWeapon}-damage",
                },
                {
                    damageType: "poison",
                    diceNumber: 4,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: ["feat:deadly-poison-weapon"],
                    selector:
                        "{item|flags.pf2e.rulesSelections.effectPoisonWeapon}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-prayer-touched-weapon": {
        _id: "cA6ps8RKE0gysEWr",
        img: "systems/pf2e/icons/spells/divine-lance.webp",
        name: "Effect: Prayer-Touched Weapon",
        system: {
            description: {
                value: "<p>The chosen weapon deals an extra 1d6 positive damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "weapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "vitality",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "{item|flags.pf2e.rulesSelections.weapon}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-precious-arrow": {
        _id: "KpEtIFwjj0ZrSVbD",
        img: "systems/pf2e/icons/equipment/consumables/ammunition/ghost-ammunition.webp",
        name: "Effect: Precious Arrow",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Precious Arrow]</p>\n<p>Choose cold iron or silver; if you shoot the arrow before the end of your turn, it counts as that material. At 14th level, add adamantine to the list of materials you can choose from.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.PreciousMaterialAdamantine",
                            predicate: [{ gte: ["self:level", 14] }],
                            value: "adamantine",
                        },
                        { label: "PF2E.PreciousMaterialColdIron", value: "cold-iron" },
                        { label: "PF2E.PreciousMaterialSilver", value: "silver" },
                    ],
                    flag: "material",
                    key: "ChoiceSet",
                },
                {
                    definition: ["item:group:bow"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "materials",
                    selector: "strike-damage",
                    value: "{item|flags.pf2e.rulesSelections.material}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-predictable-critical-failure": {
        _id: "KgR1myc4OLzVxfxn",
        img: "systems/pf2e/icons/equipment/shields/precious-material-shields/orichalcum-buckler.webp",
        name: "Effect: Predictable! (Critical Failure)",
        system: {
            description: {
                value:
                    "<p>Granted if you critically fail with @UUID[Compendium.pf2e.feats-srd.Item.Predictable!]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["predicatable"],
                    selector: ["ac", "reflex"],
                    type: "circumstance",
                    value: -1,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Defending against target of Predictable!",
                    option: "predicable",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-predictable-critical-success": {
        _id: "I4Ozf6mTnd3X0Oax",
        img: "systems/pf2e/icons/equipment/shields/precious-material-shields/orichalcum-buckler.webp",
        name: "Effect: Predictable! (Critical Success)",
        system: {
            description: {
                value:
                    "<p>Granted if you critically succeed with @UUID[Compendium.pf2e.feats-srd.Item.Predictable!]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["predicatable"],
                    selector: ["ac", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Defending against target of Predictable!",
                    option: "predicable",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-predictable": {
        _id: "5v0ndPPMfZwhiVZF",
        img: "systems/pf2e/icons/equipment/shields/precious-material-shields/orichalcum-buckler.webp",
        name: "Effect: Predictable!",
        system: {
            description: {
                value:
                    "<p>Granted if you succeed with @UUID[Compendium.pf2e.feats-srd.Item.Predictable!]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["predicatable"],
                    selector: ["ac", "reflex"],
                    type: "circumstance",
                    value: 1,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Defending against target of Predictable!",
                    option: "predicable",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-prevailing-position": {
        _id: "COsdMolZraFRTdP8",
        img: "systems/pf2e/icons/spells/elemental-tempest.webp",
        name: "Effect: Prevailing Position",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Prevailing Position]</p>\n<p>You leave the stance you were in, gaining a +4 circumstance bonus to the triggering saving throw or to your AC against the triggering attack.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 16 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["ac", "reflex"],
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-primal-aegis": {
        _id: "5PIaLkys5ZqP2BUv",
        img: "systems/pf2e/icons/spells/electrified-crystal-ward.webp",
        name: "Effect: Primal Aegis",
        system: {
            description: {
                value:
                    "<p>You gain resistance to acid, cold, electricity, fire, vitality, and void damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: ["acid", "cold", "electricity", "fire", "void", "vitality"],
                    value: "@item.origin.abilities.wis.mod",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-propulsive-leap": {
        _id: "RU6D7pNQSBt1zSuK",
        img: "systems/pf2e/icons/spells/angelic-wings.webp",
        name: "Effect: Propulsive Leap",
        system: {
            description: {
                value:
                    "<p>You gain a fly Speed equal to your Speed or 20 feet, whichever is greater.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "max(@actor.attributes.speed.value,20)",
                },
                {
                    key: "FlatModifier",
                    predicate: ["awakening:propulsive-leap:speed"],
                    selector: "fly-speed",
                    type: "status",
                    value: 15,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-protective-mentor-boon-admired-pfs": {
        _id: "lbe8XDSZB8gwyg90",
        img: "systems/pf2e/icons/features/feats/pfs-protective-mentor-boon.webp",
        name: "Effect: Protective Mentor Boon (Admired) (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you shield your more fragile wards from the threat of death. For any PCs benefiting from a Level Bump and whose levels are lower than yours, you increase their current and maximum Hit Points by an additional amount equal to 3 times your Radiant Oath reputation tier.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's Hit Points by 10% or 10, whichever is higher.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Protective Mentor Adjustment (Admired)",
                    selector: "hp",
                    value: 6,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-protective-mentor-boon-liked-pfs": {
        _id: "OKOqC1wswrh9jXqP",
        img: "systems/pf2e/icons/features/feats/pfs-protective-mentor-boon.webp",
        name: "Effect: Protective Mentor Boon (Liked) (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you shield your more fragile wards from the threat of death. For any PCs benefiting from a Level Bump and whose levels are lower than yours, you increase their current and maximum Hit Points by an additional amount equal to 3 times your Radiant Oath reputation tier.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's Hit Points by 10% or 10, whichever is higher.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Protective Mentor Adjustment (Liked)",
                    selector: "hp",
                    value: 3,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-protective-mentor-boon-revered-pfs": {
        _id: "0r2V1nK5pV31IUPY",
        img: "systems/pf2e/icons/features/feats/pfs-protective-mentor-boon.webp",
        name: "Effect: Protective Mentor Boon (Revered) (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you shield your more fragile wards from the threat of death. For any PCs benefiting from a Level Bump and whose levels are lower than yours, you increase their current and maximum Hit Points by an additional amount equal to 3 times your Radiant Oath reputation tier.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's Hit Points by 10% or 10, whichever is higher.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Protective Mentor Adjustment (Revered)",
                    selector: "hp",
                    value: 9,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-protective-spirit-mask": {
        _id: "kzSjzK72CQ67wfBH",
        img: "systems/pf2e/icons/default-icons/armor.webp",
        name: "Effect: Protective Spirit Mask",
        system: {
            description: {
                value:
                    "<p>You gain a +1 circumstance bonus to AC until the start of the caster's next turn.</p>\n<p><strong>Granted By:</strong>@UUID[Compendium.pf2e.feats-srd.Item.Protective Spirit Mask]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #174: Shadows of the Ancients",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-psi-strikes": {
        _id: "BIHU3o499fsa1bwt",
        img: "icons/magic/symbols/runes-star-magenta.webp",
        name: "Effect: Psi Strikes",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Psi Strikes]</p>\n<p>The attack deals an extra 1d6 force damage.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    choices: { attacks: true },
                    flag: "effectPsiStrikes",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.WeaponOrUnarmed",
                },
                {
                    damageType: "force",
                    diceNumber: 1,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "{item|flags.pf2e.rulesSelections.effectPsiStrikes}-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-psychic-rapport": {
        _id: "Dbr5hInQXH904Ca7",
        img: "systems/pf2e/icons/spells/mind-reading.webp",
        name: "Effect: Psychic Rapport",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Psychic Rapport]</p>\n<p>You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks, and to Perception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:sense-motive"],
                    selector: "perception",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-psychopomp-blood-magic-self": {
        _id: "7BFd8A9HFrmg6vwL",
        img: "systems/pf2e/icons/features/classes/psychopomp.webp",
        name: "Effect: Psychopomp Blood Magic (Self)",
        system: {
            description: {
                value:
                    "<p>The border between life and death becomes blurred to you. You gain a +2 status bonus to Fortitude saving throws for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "fortitude",
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-purifying-breeze": {
        _id: "7MQLLkQACZt8cspt",
        img: "systems/pf2e/icons/spells/air-walk.webp",
        name: "Effect: Purifying Breeze",
        system: {
            description: {
                value: "<p>You gain a +1 status bonus to Fortitude saving throws.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "fortitude",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-push-back-the-dead": {
        _id: "OeZ0E1oUKyGPxPy0",
        img: "icons/magic/fire/flame-burning-skeleton-explosion.webp",
        name: "Effect: Push Back the Dead!",
        system: {
            description: {
                value:
                    "<p>The creature gains a +2 circumstance bonus to saves against effects originating from undead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["origin:mode:undead"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-radiant-circuitry": {
        _id: "263Cd5JMj8Lgc9yz",
        img: "systems/pf2e/icons/features/feats/sky-and-heaven-stance.webp",
        name: "Effect: Radiant Circuitry",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Radiant Circuitry].</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "TokenLight",
                    value: { bright: 20, color: "#9b7337", dim: 40, shadows: 0.2 },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-rage": {
        _id: "z3uyCMBddrPK5umr",
        img: "icons/skills/wounds/injury-face-impact-orange.webp",
        name: "Effect: Rage",
        system: {
            description: {
                value:
                    "<p><strong>Requirements</strong> You aren't @UUID[Compendium.pf2e.conditionitems.Item.Fatigued] or raging</p>\n<hr />\n<p>You tap into your inner fury and begin raging. You gain a number of temporary Hit Points equal to your level plus your Constitution modifier. This frenzy lasts for 1 minute, until there are no enemies you can perceive, or until you fall @UUID[Compendium.pf2e.conditionitems.Item.Unconscious], whichever comes first. You can't voluntarily stop raging. While you are raging:</p>\n<ul>\n<li>You deal 2 additional damage with melee weapons and unarmed attacks. This additional damage is halved if your weapon or unarmed attack is agile.</li>\n<li>You take a -1 penalty to AC.</li>\n<li>You can't use actions with the concentrate trait unless they also have the rage trait. You can @UUID[Compendium.pf2e.actionspf2e.Item.Seek] while raging.</li>\n</ul>\n<p>After you stop raging, you lose any remaining temporary Hit Points from Rage, and you can't Rage again for 1 minute.</p>\n<p>Implemented Effects:</p>\n<ul>\n<li>Temporary hitpoint based on level and con mod</li>\n<li>Enables rage property for rage damage</li>\n<li>Sets token effect</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "flags.pf2e.rageTempHP",
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "flags.pf2e.rageTempHP",
                    phase: "beforeDerived",
                    predicate: [
                        {
                            nor: [
                                "self:type:familiar",
                                "self:type:hazard",
                                "self:type:vehicle",
                            ],
                        },
                    ],
                    value: "@actor.level + @actor.abilities.con.mod",
                },
                { key: "TempHP", value: "@actor.flags.pf2e.rageTempHP" },
                { domain: "all", key: "RollOption", option: "rage" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-raise-menhir": {
        _id: "AggnVD5loQHLb7zj",
        img: "icons/environment/wilderness/carved-standing-stone.webp",
        name: "Effect: Raise Menhir",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Raise Menhir]</p>\n<p>Choose arcane, divine, or occult; all creatures within 15 feet of the monument gain a +2 status bonus to their saving throws against effects with that trait.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitArcane", value: "arcane" },
                        { label: "PF2E.TraitDivine", value: "divine" },
                        { label: "PF2E.TraitOccult", value: "occult" },
                    ],
                    flag: "raiseMenhirTradition",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Tradition",
                },
                {
                    key: "FlatModifier",
                    predicate: ["{item|flags.pf2e.rulesSelections.raiseMenhirTradition}"],
                    selector: "saving-throw",
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-rallying-charge": {
        _id: "wjNNHgX6ceKLbn8Q",
        img: "icons/sundries/flags/banner-flag-red-white.webp",
        name: "Effect: Rallying Charge",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Rallying Charge]</p>\n<p>You gain temporary hit points equal to the Charisma modifier of the creature that used Rallying Charge.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [{ key: "TempHP", value: "@item.origin.abilities.cha.mod" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-rampaging-form-frozen-winds-kitsune": {
        _id: "WRe8qbemruWxkN8d",
        img: "systems/pf2e/icons/features/feats/rampaging-form-frozen-wind.webp",
        name: "Effect: Rampaging Form (Frozen Winds Kitsune)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Rampaging Form]</p>\n<p>You Change Shape into a form of living ice for 1 minute or until you shift back. Your battle form is Huge and has the following statistics:</p>\n<ul>\n<li>AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.</li>\n<li>20 temporary Hit Points.</li>\n<li>Low-light vision and imprecise scent 30 feet.</li>\n<li>A Speed of 30, a Fly speed of 40, and you don't need to breathe</li>\n<li><strong>Melee</strong> <span class=\"action-glyph\">a</span> jaws, <strong>Damage</strong> 2d8 piercing + 1d4 cold damage.</li>\n<li>Your unarmed attacks deal 1d4 additional cold damage, and your cold spells deal one additional die of cold damage (of the same damage die the spell uses).</li>\n<li>You can cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Ray of Frost]</em> as an innate spell; the casting is reduced from 2 actions to 1.</li>\n<li>Any creature that touches you or damages you with an unarmed attack or non-reach melee weapon takes @Damage[3d6[cold]] damage.</li>\n<li>Athletics modifier of +20, unless your own modifier is higher.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "BattleForm",
                    overrides: {
                        armorClass: { modifier: "18 + @actor.level" },
                        immunities: [{ type: "cold" }],
                        resistances: [{ type: "precision", value: 10 }],
                        senses: {
                            lowLightVision: {},
                            scent: { acuity: "imprecise", range: 30 },
                        },
                        size: "huge",
                        skills: { ath: { modifier: 20 } },
                        speeds: { fly: 40, land: 40 },
                        strikes: {
                            jaws: {
                                ability: "str",
                                baseType: "jaws",
                                category: "unarmed",
                                damage: {
                                    damageType: "piercing",
                                    dice: 4,
                                    die: "d8",
                                    modifier: 7,
                                },
                                modifier: 18,
                                traits: ["unarmed", "reach-15"],
                            },
                        },
                        tempHP: 20,
                        traits: ["animal"],
                        weaknesses: [{ type: ["fire", "water"], value: 5 }],
                    },
                },
                {
                    damageType: "cold",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: ["unarmed"],
                    selector: "strike-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-rampaging-form": {
        _id: "DWrsDJte9sez0Ppi",
        img: "systems/pf2e/icons/features/feats/rampaging-form.webp",
        name: "Effect: Rampaging Form",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Rampaging Form]</p>\n<p>You Change Shape into a form of living ice for 1 minute or until you shift back. Your battle form is Huge and has the following statistics:</p>\n<ul>\n<li>AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.</li>\n<li>20 temporary Hit Points.</li>\n<li>Low-light vision and imprecise scent 30 feet.</li>\n<li>A Speed of 30, a Fly speed of 40, and you don't need to breathe</li>\n<li><strong>Melee</strong> <span class=\"action-glyph\">a</span> jaws, <strong>Damage</strong> 2d8 piercing + 1d4 fire damage.</li>\n<li>Your unarmed attacks deal 1d4 additional fire damage, and your fire spells deal one additional die of fire damage (of the same damage die the spell uses).</li>\n<li>You can cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Produce Flame]</em> as an innate spell; the casting is reduced from 2 actions to 1.</li>\n<li>Any creature that touches you or damages you with an unarmed attack or non-reach melee weapon takes @Damage[3d6[fire]] damage.</li>\n<li>Athletics modifier of +20, unless your own modifier is higher.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "BattleForm",
                    overrides: {
                        armorClass: { modifier: "18 + @actor.level" },
                        immunities: [{ type: "fire" }],
                        resistances: [{ type: "precision", value: 10 }],
                        senses: {
                            lowLightVision: {},
                            scent: { acuity: "imprecise", range: 30 },
                        },
                        size: "huge",
                        skills: { ath: { modifier: 20 } },
                        speeds: { fly: 40, land: 40 },
                        strikes: {
                            jaws: {
                                ability: "str",
                                baseType: "jaws",
                                category: "unarmed",
                                damage: {
                                    damageType: "piercing",
                                    dice: 4,
                                    die: "d8",
                                    modifier: 7,
                                },
                                modifier: 18,
                                traits: ["unarmed", "reach-15"],
                            },
                        },
                        tempHP: 20,
                        traits: ["animal"],
                        weaknesses: [{ type: ["cold", "water"], value: 5 }],
                    },
                },
                {
                    damageType: "fire",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    predicate: ["unarmed"],
                    selector: "strike-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-read-shibboleths": {
        _id: "ivGiUp0EC5nWT9Hb",
        img: "systems/pf2e/icons/features/feats/read-shibboleths.webp",
        name: "Effect: Read Shibboleths",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Read Shibboleths]</p>\n<p>Once you've gleaned one or more true minor facts about a person, you can then incorporate these mannerisms into your speech to present yourself in a way that they find familiar. This grants you a +1 circumstance bonus to your Diplomacy and Deception checks with them.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["deception", "diplomacy"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-reanimator-dedication": {
        _id: "EQCnu8DGHDDNXch0",
        img: "icons/creatures/magical/spirit-undead-ghost-purple.webp",
        name: "Effect: Reanimator Dedication",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Reanimator Dedication]</p>\n<p>The undead you animate gains a +1 status bonus to attack rolls, AC, saving throws, and skill checks for the duration of <em>@UUID[Compendium.pf2e.spells-srd.Item.Summon Undead]{Animate Dead}</em>.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["ac", "attack", "saving-throw", "skill-check"],
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-recall-under-pressure": {
        _id: "CW4zphOOpeaLJIWc",
        img: "icons/sundries/gaming/playing-cards-grey.webp",
        name: "Effect: Recall Under Pressure",
        system: {
            description: {
                value:
                    "<p>You gain a +1 status bonus to saving throws for the remainder of the combat encounter as your morale soars or a +2 status bonus if the card you drew was from the suit of Books.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [
                {
                    choices: [
                        { label: "UI.RuleElements.ChoiceSet.NoLabel", value: 1 },
                        { label: "UI.RuleElements.ChoiceSet.YesLabel", value: 2 },
                    ],
                    flag: "bonus",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.HarrowCourt.BooksSuitPrompt",
                },
                {
                    key: "FlatModifier",
                    selector: "saving-throw",
                    value: "@item.flags.pf2e.rulesSelections.bonus",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-reckless-abandon-barbarian": {
        _id: "sfUsodcGb4atcSyN",
        img: "icons/skills/wounds/injury-eyes-blood-red-pink.webp",
        name: "Effect: Reckless Abandon (Barbarian)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Reckless Abandon (Barbarian)]</p>\n<p>You gain a +2 circumstance bonus to attack rolls, a -2 penalty to AC, and a -1 penalty to saves. These bonuses and penalties last until your Rage ends or until you are above half Hit Points, whichever comes first.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["self:effect:rage", { lte: ["hp-percent", 50] }],
                    selector: "attack",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["self:effect:rage", { lte: ["hp-percent", 50] }],
                    selector: "ac",
                    value: -2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["self:effect:rage", { lte: ["hp-percent", 50] }],
                    selector: "saving-throw",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-reckless-abandon-goblin": {
        _id: "rvyeOU7TQTLnKj03",
        img: "systems/pf2e/icons/features/ancestry/treedweller-goblin.webp",
        name: "Effect: Reckless Abandon (Goblin)",
        system: {
            description: {
                value:
                    "<p>For the remainder of your turn, if you roll a failure or critical failure on a saving throw against a harmful effect, you get a success instead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Note",
                    selector: "saving-throw",
                    text: "PF2E.SpecificRule.Goblin.RecklessAbandon.Note",
                    title: "{item|name}",
                },
                {
                    adjustment: { criticalFailure: "to-success", failure: "to-success" },
                    key: "AdjustDegreeOfSuccess",
                    selector: "saving-throw",
                    type: "save",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-reflexive-shield": {
        _id: "pwbFFD6NzDooobKo",
        img: "systems/pf2e/icons/equipment/shields/specific-shields/force-shield.webp",
        name: "Effect: Reflexive Shield",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Reflexive Shield] when you raise a shield that gives a +2 circumstance bonus to AC.</p>\n<p>You gain your shield's cricumstance bonus to Reflex saves.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "reflex",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-renewed-vigor": {
        _id: "jlZjUtrfcfIWumSe",
        img: "systems/pf2e/icons/spells/enduring-might.webp",
        name: "Effect: Renewed Vigor",
        system: {
            description: {
                value:
                    "<p>You gain temporary Hit Points equal to half your level plus your Constitution modifier.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "TempHP",
                    predicate: ["self:effect:rage"],
                    value: "floor(@actor.level/2) + @actor.abilities.con.mod",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-repair-module": {
        _id: "DjxZpQ4xJWWvYQqY",
        img: "systems/pf2e/icons/features/feats/effect-repair-module.webp",
        name: "Effect: Repair Module",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Repair Module].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    details: "",
                    key: "FastHealing",
                    type: "fast-healing",
                    value: "floor(@actor.level / 2)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-replenishment-of-war": {
        _id: "BJc494USeyM011p3",
        img: "icons/magic/life/heart-shadow-red.webp",
        name: "Effect: Replenishment of War",
        system: {
            description: {
                value:
                    "<p>You gain a number of temporary Hit Points equal to half your level, or equal to your level if the Strike was a critical hit. These temporary Hit Points last until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.Check.Result.Degree.Attack.success", value: 2 },
                        {
                            label: "PF2E.Check.Result.Degree.Attack.criticalSuccess",
                            value: 1,
                        },
                    ],
                    flag: "outcome",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.DegreeOfSuccess",
                },
                {
                    key: "TempHP",
                    value:
                        "max(floor(@item.origin.level/@item.flags.pf2e.rulesSelections.outcome),1)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-resounding-bravery-vs-fear": {
        _id: "Cumdy84uIkUHG9zF",
        img: "icons/equipment/shield/heater-steel-segmented-purple.webp",
        name: "Effect: Resounding Bravery (vs. Fear)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Resounding Bravery] if you critically succeed at a Will save against a foe's fear effect.</p>\n<p>You gain a +2 status bonus to saves and a number of temporary Hit Points equal to your level for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Resounding Bravery",
                    selector: "saving-throw",
                    type: "status",
                    value: 2,
                },
                { key: "TempHP", value: "@actor.level" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-resounding-bravery": {
        _id: "NMmsJyeMTawpgLVR",
        img: "icons/equipment/shield/heater-steel-segmented-purple.webp",
        name: "Effect: Resounding Bravery",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Resounding Bravery] if you critically succeed at a Will save against a foe's ability.</p>\n<p>You gain a +1 status bonus to saves and a number of temporary Hit Points equal to half your level for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "saving-throw",
                    type: "status",
                    value: 1,
                },
                { key: "TempHP", value: "floor(@actor.level / 2)" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-resurrectionist": {
        _id: "YaSxccYfE5ShFdFd",
        img: "icons/magic/life/heart-cross-green.webp",
        name: "Effect: Resurrectionist",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Resurrectionist]</p>\n<p>You gain fast healing 5.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "status", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-root-magic": {
        _id: "jO7wMhnjT7yoAtQg",
        img: "icons/containers/bags/sack-simple-leather-tan.webp",
        name: "Effect: Root Magic",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Root Magic]</p>\n<p>The first time that day the ally attempts a saving throw against a spell or haunt, they gain a +1 circumstance bonus to the roll. This bonus increases to +2 if you're an expert in Occultism or +3 if you're legendary.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["item:type:spell", "origin:trait:haunt"] }],
                    selector: "saving-throw",
                    type: "circumstance",
                    value:
                        "ternary(eq(@item.origin.skills.occultism.rank,4),3,ternary(gt(@item.origin.skills.occultism.rank,1),2,1))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-rugged-mentor-boon-pfs": {
        _id: "ZMFgz4GYSsFeaKKK",
        img: "systems/pf2e/icons/features/feats/pfs-rugged-mentor-boon.webp",
        name: "Effect: Rugged Mentor Boon (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you provide important insights that keep your less experienced colleagues safe from harm. For any PCs benefiting from a Level Bump and whose levels are lower than yours, you increase the Level Bump's modifier to saving throws to 2.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's saving throw modifiers by 1.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Rugged Mentor Adjustment",
                    selector: "saving-throw",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-safeguard-soul": {
        _id: "tlft5vzk66iWCVRq",
        img: "icons/magic/water/barrier-ice-shield.webp",
        name: "Effect: Safeguard Soul",
        system: {
            description: {
                value:
                    "<p>You gain a +2 status bonus to saving throws against death effects, possession effects, and effects that attempt to manipulate or steal your soul.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["death", "possession", "manipulate-soul"] }],
                    selector: "saving-throw",
                    type: "status",
                    value: 2,
                },
                {
                    domain: "saving-throw",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.SoulWarden.SafeguardSoul.Label",
                    option: "manipulate-soul",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-sanctify-armament": {
        _id: "ImkjllInxmrdDCOq",
        img: "icons/weapons/swords/sword-winged-pink.webp",
        name: "Effect: Sanctify Armament",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Sanctify Armament]</p>\n<p>The weapon gains your holy or unholy trait. It also deals an additional 2d6 spirit damage to creatures of the opposed trait.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "weapon",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageType: "spirit",
                    diceNumber: 2,
                    dieSize: "d6",
                    key: "DamageDice",
                    predicate: [
                        {
                            or: [
                                { and: ["self:trait:holy", "target:trait:unholy"] },
                                { and: ["self:trait:unholy", "target:trait:holy"] },
                            ],
                        },
                    ],
                    selector: "{item|flags.pf2e.rulesSelections.weapon}-damage",
                },
                {
                    definition: ["item:id:{item|flags.pf2e.rulesSelections.weapon}"],
                    key: "AdjustStrike",
                    mode: "add",
                    predicate: ["self:trait:holy"],
                    property: "traits",
                    value: "holy",
                },
                {
                    definition: ["item:id:{item|flags.pf2e.rulesSelections.weapon}"],
                    key: "AdjustStrike",
                    mode: "add",
                    predicate: ["self:trait:unholy"],
                    property: "traits",
                    value: "unholy",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-saoc-astrology": {
        _id: "6ACbQIpmmemxmoBJ",
        img: "icons/magic/light/explosion-star-glow-blue.webp",
        name: "Effect: Saoc Astrology",
        system: {
            description: {
                value:
                    "<p>This effect grants you the selected circumstance bonus or penalty to skill checks.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    choices: [
                        { label: "-1 penalty", value: -1 },
                        {
                            label: "+1 bonus",
                            predicate: [{ not: "heir-of-the-saoc" }],
                            value: 1,
                        },
                        { label: "+2 bonus", value: 2 },
                        { label: "+3 bonus", predicate: ["heir-of-the-saoc"], value: 3 },
                        { label: "+4 bonus", predicate: ["heir-of-the-saoc"], value: 4 },
                    ],
                    flag: "saocBonus",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Human.SaocAstrology.Prompt",
                },
                {
                    key: "FlatModifier",
                    selector: "skill-check",
                    type: "circumstance",
                    value: "{item|flags.pf2e.rulesSelections.saocBonus}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-scouts-warning": {
        _id: "RxDDXK52lwyHXl7v",
        img: "systems/pf2e/icons/features/classes/heightened-senses.webp",
        name: "Effect: Scout's Warning",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Scout's Warning].</p>\n<p>You gain a +1 circumstance bonus to your initiative roll.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "initiative",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-sea-glass-guardians": {
        _id: "LOql7Rc5anCse9Nx",
        img: "systems/pf2e/icons/spells/elemental-confluence.webp",
        name: "Effect: Sea Glass Guardians",
        system: {
            description: {
                value:
                    "<p>The creature gains a +1 status bonus to AC and saving throws.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: ["ac", "saving-throw"],
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-seedpod": {
        _id: "wQDHpOKY3GZqvS2v",
        img: "icons/magic/nature/plant-poison-spit-green.webp",
        name: "Effect: Seedpod",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Seedpod]</p>\n<p>On a critical hit, a seedpod bursts, issuing forth a tangle of vegetation that imposes a -10-foot circumstance penalty on the target's Speed for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "speed",
                    type: "circumstance",
                    value: -10,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-selfish-shield": {
        _id: "h6nyMp4dtPXBfCJc",
        img: "systems/pf2e/icons/spells/dancing-shield.webp",
        name: "Effect: Selfish Shield",
        system: {
            description: {
                value:
                    "<p>You gain resistance against the triggering damage equal to 2 + half your level, regardless of damage type.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "all-damage",
                    value: "floor(@actor.level/2)+2",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-shadow-blood-magic-perception": {
        _id: "Nv70aqcQgCBpDYp8",
        img: "systems/pf2e/icons/features/classes/shadow.webp",
        name: "Effect: Shadow Blood Magic (Perception)",
        system: {
            description: {
                value:
                    "<p>Shadows grow deeper around you or one target, imposing a -1 status penalty to Perception for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "perception",
                    type: "status",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-shadow-blood-magic-stealth": {
        _id: "OqH6IaeOwRWkGPrk",
        img: "systems/pf2e/icons/features/classes/shadow.webp",
        name: "Effect: Shadow Blood Magic (Stealth)",
        system: {
            description: {
                value:
                    "<p>Shadows grow deeper around you or one target, granting a +1 status bonus to Stealth for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "stealth", type: "status", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-shadow-sight": {
        _id: "3GPh6O3PJxORytAC",
        img: "icons/magic/perception/orb-eye-scrying.webp",
        name: "Effect: Shadow Sight",
        system: {
            description: {
                value: "<p>You gain Greater Darkvision for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "Sense", selector: "greaterDarkvision" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-share-rage": {
        _id: "RoGEt7lrCdfaueB9",
        img: "icons/skills/wounds/injury-face-impact-orange.webp",
        name: "Effect: Share Rage",
        system: {
            description: {
                value:
                    "<p>You tap into your inner fury and begin raging. You gain a number of temporary Hit Points equal to your level plus your Constitution modifier. This frenzy lasts for 1 minute, until there are no enemies you can perceive, or until you fall @UUID[Compendium.pf2e.conditionitems.Item.Unconscious], whichever comes first. You can't voluntarily stop raging. While you are raging:</p>\n<ul>\n<li>You deal 2 additional damage with melee weapons and unarmed attacks. This additional damage is halved if your weapon or unarmed attack is agile.</li>\n<li>You take a -1 penalty to AC.</li>\n</ul>\n<p>After you stop raging, you lose any remaining temporary Hit Points from Rage, and you can't Rage again for 1 minute.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "PF2E.TraitRage",
                    predicate: [{ not: "ranged" }],
                    selector: "strike-damage",
                    slug: "rage",
                    value: 2,
                },
                {
                    key: "AdjustModifier",
                    mode: "multiply",
                    predicate: ["item:trait:agile"],
                    priority: 95,
                    selector: "strike-damage",
                    slug: "rage",
                    value: 0.5,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.TraitRage",
                    selector: "ac",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-shared-avoidance": {
        _id: "svVczVV174KfJRDf",
        img: "systems/pf2e/icons/spells/freedom-of-movement.webp",
        name: "Effect: Shared Avoidance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Shared Avoidance].</p>\n<p>Allies within 15 feet of you who are rolling the same saving throw against the same hazard also gain a +2 circumstance bonus to their saving throws.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 10 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["premonition-of-avoidance", "target:type:hazard"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-shared-clarity": {
        _id: "CUtvkuGSxq1raBIB",
        img: "systems/pf2e/icons/spells/mind-probe.webp",
        name: "Effect: Shared Clarity",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Shared Clarity].</p>\n<p>You gain a +2 circumstance bonus to the triggering saving throw.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 18 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["mental"],
                    removeAfterRoll: true,
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-shattershields": {
        _id: "6hh788S8hznyD66m",
        img: "icons/skills/melee/shield-block-gray-yellow.webp",
        name: "Effect: Shattershields",
        system: {
            description: { value: "<p>Gain a +1 circumstance bonus to AC.</p>" },
            duration: {
                expiry: null,
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 12 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-shed-tail": {
        _id: "OK7zMlYy25JciBp6",
        img: "icons/creatures/abilities/tail-swipe-green.webp",
        name: "Effect: Shed Tail",
        system: {
            description: {
                value:
                    "<p>You take a -2 circumstance penalty on checks to Balance.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 7,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:balance"],
                    selector: "acrobatics",
                    type: "circumstance",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-shield-ally": {
        _id: "s3Te8waFP3KEb2dN",
        img: "icons/magic/defensive/shield-barrier-deflect-teal.webp",
        name: "Effect: Shield Ally",
        system: {
            description: {
                value: "<p>The hardness of your equipped shield increases by 2.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.attributes.shield.hardness",
                    predicate: ["self:shield:equipped"],
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-shield-of-faith": {
        _id: "5uMMLUvJOEmfMgeV",
        img: "icons/magic/defensive/shield-barrier-deflect-gold.webp",
        name: "Effect: Shield of Faith",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Shield of Faith]</p>\n<p>You gain a +1 status bonus to your AC.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "status", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-skillful-mentor-boon-pfs": {
        _id: "SKjVvQcRQmnDoouw",
        img: "systems/pf2e/icons/features/feats/pfs-skillful-mentor-boon.webp",
        name: "Effect: Skillful Mentor Boon (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you provide vital advice to sharpen your newer colleagues' skills. For any PCs benefiting from a Level Bump and whose levels are lower than yours, you increase the Level Bump's modifier to skill checks to 2.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's skill check modifiers by 1.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Skillful Mentor Adjustment",
                    selector: "skill-check",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-smite-evil": {
        _id: "AlnxieIRjqNqsdVu",
        img: "icons/sundries/flags/banner-sword-blue.webp",
        name: "Effect: Smite Evil",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Smite Evil].</p>\n<p>Until the start of your next turn, your Strikes with the weapon your blade ally inhabits against that foe deal an extra 4 spirit damage, increasing to 6 if you have master proficiency with this weapon.</p>\n<p>If the foe attacks one of your allies, the duration extends to the end of that foe's next turn. If the foe continues to attack your allies each turn, the duration continues to extend.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    domain: "damage",
                    key: "RollOption",
                    label: "Target is subject of your Smite Evil",
                    option: "smite-evil",
                    toggleable: true,
                },
                {
                    damageType: "good",
                    key: "FlatModifier",
                    predicate: [
                        "smite-evil",
                        { nor: ["proficiency:master", "proficiency:legendary"] },
                    ],
                    selector: "strike-damage",
                    slug: "smite-not-master",
                    value: 4,
                },
                {
                    damageType: "good",
                    key: "FlatModifier",
                    predicate: [
                        "smite-evil",
                        { or: ["proficiency:master", "proficiency:legendary"] },
                    ],
                    selector: "strike-damage",
                    slug: "smite-master",
                    value: 6,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-smite-good": {
        _id: "2MIn8qyPTmz4ZyO1",
        img: "icons/weapons/misc/whip-red-yellow.webp",
        name: "Effect: Smite Good",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Smite Good].</p>\n<p>Until the start of your next turn, your Strikes against that foe using the weapon your blade ally inhabits deal an extra 4 spirit damage, increasing to 6 if you have master proficiency with this weapon.</p>\n<p>If the chosen enemy attacks you before the start of your next turn, the duration extends to the end of that enemy's next turn. If the enemy continues to attack you each turn, the duration continues to extend.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    domain: "damage",
                    key: "RollOption",
                    label: "Target is subject of your Smite Good",
                    option: "smite-good",
                    toggleable: true,
                },
                {
                    damageType: "evil",
                    key: "FlatModifier",
                    predicate: [
                        "smite-good",
                        { nor: ["proficiency:master", "proficiency:legendary"] },
                    ],
                    selector: "strike-damage",
                    slug: "smite-not-master",
                    value: 4,
                },
                {
                    damageType: "evil",
                    key: "FlatModifier",
                    predicate: [
                        "smite-good",
                        { or: ["proficiency:master", "proficiency:legendary"] },
                    ],
                    selector: "strike-damage",
                    slug: "smite-master",
                    value: 6,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-sniping-duo-dedication": {
        _id: "zQHF2kkhZRAcrQvR",
        img: "systems/pf2e/icons/equipment/other/attached-items/scope.webp",
        name: "Effect: Sniping Duo Dedication",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Sniping Duo Dedication].</p>\n<p>Whenever you or your spotter successfully Strikes a target, the other member of your duo gains a +1 circumstance bonus per weapon damage die on the damage roll of their next Strike made against that target before the end of their next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["sniping-duo"],
                    selector: "strike-damage",
                    type: "circumstance",
                    value: "@weapon.system.damage.dice",
                },
                {
                    domain: "damage",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.SnipingDuoDedication.Label",
                    option: "sniping-duo",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-soaring-flight": {
        _id: "ytG5XJmkOnDOTjNN",
        img: "icons/magic/holy/angel-winged-humanoid-blue.webp",
        name: "Effect: Soaring Flight",
        system: {
            description: {
                value:
                    "<p>To be a tengu is to be unburdened by the concerns of the world below. You grow a pair of magical wings or expand your existing ones. For 5 minutes, you gain a fly Speed equal to your land Speed or 20 feet, whichever is greater.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 5,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "max(20,(@actor.attributes.speed.total))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-spell-protection-array": {
        _id: "OochfTTXnDLVXeSS",
        img: "icons/magic/defensive/barrier-shield-dome-pink.webp",
        name: "Effect: Spell Protection Array",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Spell Protection Array]</p>\n<p>You gain a +1 status bonus to saving throws against magic.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        { or: ["magical", "arcane", "divine", "primal", "occult"] },
                    ],
                    selector: "saving-throw",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-spin-tale": {
        _id: "UzIamWcEJTOjwfoA",
        img: "icons/sundries/documents/document-official-capital.webp",
        name: "Effect: Spin Tale",
        system: {
            description: {
                value:
                    "<p>You gain a +1 status bonus to attack rolls and saving throws against the villain until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: true,
                unit: "rounds",
                value: 10,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #170: Spoken on the Song Wind",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["spin-tale"],
                    selector: "attack",
                    type: "status",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: ["spin-tale"],
                    selector: "saving-throw",
                    value: 1,
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Target is villain of Folklorist's Spun Tale",
                    option: "spin-tale",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-spiral-sworn": {
        _id: "2gVP04ZWYbQdX3uS",
        img: "systems/pf2e/icons/deity/Pharasma.webp",
        name: "Effect: Spiral Sworn",
        system: {
            description: {
                value:
                    "<p>For 3 rounds, your Strikes and spells deal additional damage against undead, creatures in possession of an imprisoned soul, or creatures you have witnessed create or command undead. You gain a status bonus to damage with your Strikes against these creatures equal to the number of weapon damage dice. Spells you cast from spell slots gain a status bonus to damage against these creatures equal to the level of the spell; this bonus applies only to spells that deal damage and don't have a duration.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 3,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    domain: "saving-throw",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.SoulWarden.SpiralSworn.Label",
                    option: "target:imprisoned-soul",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["target:mode:undead", "target:imprisoned-soul"] }],
                    selector: "strike-damage",
                    type: "status",
                    value: "@weapon.system.damage.dice",
                },
                {
                    key: "FlatModifier",
                    phase: "afterDerived",
                    predicate: [
                        "item:spell-slot",
                        "item:duration:0",
                        "damaging-effect",
                        { or: ["target:mode:undead", "target:imprisoned-soul"] },
                    ],
                    selector: "spell-damage",
                    type: "status",
                    value: "@spell.level",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-starlight-armor": {
        _id: "Y96a1OedsU8PVf7z",
        img: "icons/magic/light/explosion-star-glow-blue.webp",
        name: "Effect: Starlight Armor",
        system: {
            description: {
                value:
                    "<p>The armor grants you resistance 7 to piercing, bludgeoning, and slashing damage. The armor also sheds bright light for 20 feet (and dim light for the next 20 feet).</p>\n<p>When you reach 17th level, the resistance increases to 10.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 7 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #187: The Seventh Arch",
            },
            rules: [
                {
                    key: "Resistance",
                    type: ["piercing", "slashing", "bludgeoning"],
                    value: "ternary(gte(@actor.level,17),10,7)",
                },
                {
                    key: "TokenLight",
                    value: { bright: 20, color: "#9b7337", dim: 40, shadows: 0.2 },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-stone-body": {
        _id: "7cG8kpQvh2oyBV8d",
        img: "icons/magic/earth/construct-stone.webp",
        name: "Effect: Stone Body",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Stone Body]</p>\n<p>You gain resistance 10 to all damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [{ key: "Resistance", type: "all-damage", value: 10 }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-stoney-deflection": {
        _id: "ecWVnrjsjubZ4On6",
        img: "systems/pf2e/icons/spells/protective-ward.webp",
        name: "Effect: Stoney Deflection",
        system: {
            description: {
                value:
                    "<p>You gain a +2 circumstance bonus to AC and to any defenses against being Shoved or Tripped</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #195: Heavy is the Crown",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["action:shove", "action:trip"] }],
                    selector: ["fortitude", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-strained-metabolism": {
        _id: "lZPbv3nBRWmfbs3z",
        img: "systems/pf2e/icons/spells/putrefy-food-and-drink.webp",
        name: "Effect: Strained Metabolism",
        system: {
            badge: {
                labels: ["Mild", "Moderate", "Severe"],
                type: "counter",
                value: 1,
            },
            description: {
                value:
                    "<p>Your body's overclocked physiology requires larger-than-usual amounts of nourishment, leaving you weakened when it kicks in mid-combat.</p>\n<p><strong>Mild Backlash</strong> Your metabolism immediately burns through your body's energy stores, making you @UUID[Compendium.pf2e.conditionitems.Item.Enfeebled]{Enfeebled 1} and @UUID[Compendium.pf2e.conditionitems.Item.Clumsy]{Clumsy 1} until you take a bite of food (which usually requires 2 Interact actions: one to retrieve the food and another to consume it).</p>\n<p><strong>Moderate Backlash</strong> Ravenous hunger wracks your body. You are enfeebled 1, clumsy 1, and @UUID[Compendium.pf2e.conditionitems.Item.Fatigued] until you can eat a full meal, which requires at least 10 minutes.</p>\n<p><strong>Severe Backlash</strong> The strain on your body is truly incapacitating. You become @UUID[Compendium.pf2e.conditionitems.Item.Sickened]{Sickened 2} as nausea wracks you, and you are also enfeebled 1 and clumsy 1 until you can eat a full meal (which requires you to no longer be sickened). You are fatigued until you can get a full night's rest.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-striking-retribution": {
        _id: "EzgW32MCOGov9h5C",
        img: "systems/pf2e/icons/spells/retributive-pain.webp",
        name: "Effect: Striking Retribution",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Striking Retribution]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Striking Retribution (vs. alghollthu and their servants) if alghollthu enchants ally",
                    predicate: [
                        { or: ["target:tag:alghollthu", "target:tag:alghollthu-servant"] },
                    ],
                    selector: "strike-damage",
                    type: "circumstance",
                    value: 4,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-supercharge-prosthetic-eyes": {
        _id: "qSKVcw6brzrvfhUM",
        img: "systems/pf2e/icons/spells/detect-alignment.webp",
        name: "Effect: Supercharge Prosthetic Eyes",
        system: {
            description: {
                value:
                    "<p>You gain darkvision and low-light vision, and you gain a +1 status bonus to visual Perception checks.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                { key: "Sense", selector: "darkvision" },
                {
                    key: "FlatModifier",
                    predicate: ["visual"],
                    selector: "perception",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-tactical-debilitations-no-flanking": {
        _id: "JUgx48XHMz4QM4Ir",
        img: "systems/pf2e/icons/spells/clairvoyance.webp",
        name: "Effect: Tactical Debilitations (No Flanking)",
        system: {
            description: {
                value:
                    "<p>The target can't flank or contribute to allies' flanking.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.flanking.canFlank",
                    value: false,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-tail-toxin": {
        _id: "Q0DKJRnDuuUnLpvn",
        img: "systems/pf2e/icons/features/ancestry/venomtail-kobold.webp",
        name: "Effect: Tail Toxin",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Tail Toxin]</p>\n<p>You apply your tail's venom to a piercing or slashing weapon. If your next Strike with that weapon before the end of your next turn hits and deals damage, you deal persistent poison damage equal to your level to the target.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: {
                        ownedItems: true,
                        predicate: [
                            {
                                or: ["item:damage:type:slashing", "item:damage:type:piercing"],
                            },
                        ],
                        types: ["weapon"],
                    },
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    damageCategory: "persistent",
                    damageType: "poison",
                    key: "FlatModifier",
                    selector: "{item|flags.pf2e.rulesSelections.effectTailToxin}-damage",
                    value: "@actor.level",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-thermal-nimbus-cold": {
        _id: "1WqXbwhfT1f6OrPU",
        img: "icons/magic/fire/explosion-flame-blue.webp",
        name: "Effect: Thermal Nimbus (Cold)",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [{ key: "Resistance", type: "cold", value: "@item.level" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-thermal-nimbus-fire": {
        _id: "IYeAJ0sB2zCgus1b",
        img: "systems/pf2e/icons/spells/abyssal-wrath.webp",
        name: "Effect: Thermal Nimbus (Fire)",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [{ key: "Resistance", type: "fire", value: "@item.level" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-tidal-shield": {
        _id: "UBC6HbfqbfPQYlMq",
        img: "systems/pf2e/icons/spells/dancing-shield.webp",
        name: "Effect: Tidal Shield",
        system: {
            description: {
                value:
                    "<p>You conjure the force of the tides to gain a +4 circumstance bonus to AC until the end of your next turn. You can Sustain the effect to a maximum duration of 5 rounds.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: true,
                unit: "rounds",
                value: 5,
            },
            level: { value: 17 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 4 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-tillers-drive": {
        _id: "4alr9e8w9H0RCLwI",
        img: "systems/pf2e/icons/features/feats/tillers-drive.webp",
        name: "Effect: Tiller's Drive",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tiller's Drive]</p>\n<p>Members of your crop receive a +5-foot circumstance bonus to Speed.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #147: Tomorrow Must Burn",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "circumstance",
                    value: 5,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-titans-stature": {
        _id: "RcxDIOa68SUGyMun",
        img: "systems/pf2e/icons/spells/summon-giant.webp",
        name: "Effect: Titan's Stature",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "CreatureSize",
                    reach: { add: 10 },
                    resizeEquipment: true,
                    value: "huge",
                },
                {
                    key: "FlatModifier",
                    label: "Giant's Stature",
                    selector: "dex-based",
                    type: "status",
                    value: -1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-topple-giants": {
        _id: "W8HWQ47YNHWB8kj6",
        img: "systems/pf2e/icons/features/feats/topple-giants.webp",
        name: "Effect: Topple Giants",
        system: {
            description: {
                value:
                    "<p>When an ally within your overwatch field attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Disarm], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] an opponent within your overwatch field and fails, you coordinate efforts to provide a +2 circumstance bonus to the next Athletics check rolled by a different ally to attempt the same action on the same target before that target's next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "athletics",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-towering-presence": {
        _id: "XJtlvaqAHseq1yoz",
        img: "systems/pf2e/icons/spells/enlarge.webp",
        name: "Effect: Towering Presence",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 5 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                { key: "CreatureSize", value: "large" },
                {
                    key: "FlatModifier",
                    selector: "melee-damage",
                    type: "status",
                    value: 2,
                },
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.conditionitems.Item.Clumsy",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-treat-wounds-immunity": {
        _id: "Lb4q2bBAgxamtix5",
        img: "systems/pf2e/icons/features/feats/treat-wounds.webp",
        name: "Effect: Treat Wounds Immunity",
        system: {
            description: {
                value:
                    "<p>Granted when someone uses @UUID[Compendium.pf2e.actionspf2e.Item.Treat Wounds] on you, rendering you temporarily immune to Treat Wounds for the duration.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "hours",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-twin-parry-parry-trait": {
        _id: "EDpjey6SCdvIYqEc",
        img: "systems/pf2e/icons/equipment/weapons/main-gauche.webp",
        name: "Effect: Twin Parry (Parry Trait)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Twin Parry] if either weapon has the parry trait.</p>\n<p>You gain a +2 circumstance bonus to AC until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Twin Parry",
                    selector: "ac",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-twin-parry": {
        _id: "eu2HidLHaGKe4MPn",
        img: "systems/pf2e/icons/equipment/weapons/main-gauche.webp",
        name: "Effect: Twin Parry",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Twin Parry] if neither weapon has the parry trait.</p>\n<p>You gain a +1 circumstance bonus to AC until the start of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-under-control": {
        _id: "cGwFYusGTsJR3x3P",
        img: "icons/sundries/flags/banner-flag-red-white.webp",
        name: "Effect: Under Control",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Undying Conviction]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-underground-endemic-herbs": {
        _id: "AJlunjfAIOq2Sg0p",
        img: "systems/pf2e/icons/spells/ancestral-defense.webp",
        name: "Effect: Underground Endemic Herbs",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Endemic Herbs]</p>\n<p>Gain a +1 circumstance bonus to Perception.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "perception",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-undying-conviction": {
        _id: "e6mv68aarIbQ3tXL",
        img: "systems/pf2e/icons/spells/create-undead.webp",
        name: "Effect: Undying Conviction",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Undying Conviction]</p>\n<p>Undead creatures gain a +2 status bonus to saving throws to resist positive damage and to Will saving throws to resist effects that would make them controlled.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["vitality"],
                    selector: "saving-throw",
                    type: "status",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["inflicts:controlled"],
                    selector: "will",
                    type: "status",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-unleash-psyche": {
        _id: "939OHjW9y8uCmDk3",
        img: "systems/pf2e/icons/features/classes/unleash-psyche.webp",
        name: "Effect: Unleash Psyche",
        system: {
            description: {
                value:
                    "<p>When you cast a damaging spell, you gain a status bonus to its damage equal to double the spell's level. This applies only to spells that don't have a duration and that you cast using psychic spellcasting.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 2,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        "unleash-psyche-damage",
                        "item:duration:0",
                        "damaging-effect",
                    ],
                    selector: "spell-damage",
                    type: "status",
                    value: "2*@spell.level",
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.Psychic.UnleashPsyche.DamageLabel",
                    option: "unleash-psyche-damage",
                    toggleable: true,
                    value: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-ursine-avenger-form": {
        _id: "m5xWMaDfV0PiTE6u",
        img: "systems/pf2e/icons/spells/animal-form-bear.webp",
        name: "Effect: Ursine Avenger Form",
        system: {
            description: { value: "" },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Treasure Vault",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/commodities/claws/claw-bear-brown-grey.webp",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.claw",
                    range: null,
                    traits: ["unarmed", "agile"],
                },
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "icons/creatures/abilities/mouth-teeth-long-red.webp",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.jaws",
                    range: null,
                    traits: ["unarmed"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-vicious-debilitations": {
        _id: "Rgt9hH3W1oh9dvku",
        img: "systems/pf2e/icons/spells/blade-barrier.webp",
        name: "Effect: Vicious Debilitations",
        system: {
            description: {
                value:
                    "<p>The target gains weakness 5 to your choice of bludgeoning, piercing, or slashing damage.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitBludgeoning", value: "bludgeoning" },
                        { label: "PF2E.TraitPiercing", value: "piercing" },
                        { label: "PF2E.TraitSlashing", value: "slashing" },
                    ],
                    flag: "viciousDebilitations",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.DamageType",
                },
                {
                    key: "Weakness",
                    type: "{item|flags.pf2e.rulesSelections.viciousDebilitations}",
                    value: 5,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-victorious-vigor": {
        _id: "0pq3MPLH0C9z4tj3",
        img: "icons/equipment/head/helm-barbute-horned-gold-red.webp",
        name: "Effect: Victorious Vigor",
        system: {
            description: {
                value:
                    "<p>You gain temporary Hit Points equal to your Constitution modifier until the end of your next turn.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 5 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [{ key: "TempHP", value: "@actor.abilities.con.mod" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-vivacious-bravado": {
        _id: "T7AJQbfmlA57y625",
        img: "icons/magic/light/explosion-star-glow-blue.webp",
        name: "Effect: Vivacious Bravado",
        system: {
            description: {
                value:
                    "<p>Granted when you use @UUID[Compendium.pf2e.feats-srd.Item.Vivacious Bravado].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 8 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "TempHP", value: "@actor.level + @actor.abilities.cha.mod" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-walking-the-cardinal-paths": {
        _id: "kui8yKIVsxfJnrYe",
        img: "icons/magic/symbols/elements-air-earth-fire-water.webp",
        name: "Effect: Walking the Cardinal Paths",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.adventure-specific-actions.Item.(Affinity Ablaze) Arms of Balance: Walking the Cardinal Paths]</p>\n<p>One of your weapons or your unarmed Strikes deal an additional 2d6 fire, cold, acid, or electricity damage. The Strikes gain the appropriate energy trait as well.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Fists of the Ruby Phoenix Hardcover Compilation",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                    ],
                    flag: "damage",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.DamageType",
                },
                {
                    choices: { attacks: true },
                    flag: "strike",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.WeaponOrUnarmed",
                },
                {
                    damageType: "{item|flags.pf2e.rulesSelections.damage}",
                    diceNumber: 2,
                    dieSize: "d6",
                    key: "DamageDice",
                    selector: "{item|flags.pf2e.rulesSelections.strike}-damage",
                },
                {
                    definition: ["item:{item|flags.pf2e.rulesSelections.strike}"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "weapon-traits",
                    value: "{item|flags.pf2e.rulesSelections.damage}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-watchful-gaze": {
        _id: "a7qiSYdlaIRPe57i",
        img: "systems/pf2e/icons/spells/web-of-eyes.webp",
        name: "Effect: Watchful Gaze",
        system: {
            description: {
                value:
                    "<p>You gain @UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.All-Around Vision] until the start of your next turn. This lets you see in all directions and prevents you from being flanked.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.flanking.flankable",
                    value: false,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-weapon-infusion": {
        _id: "zezKegTvOArcDQ0x",
        img: "systems/pf2e/icons/actions/elemental-blast/weapon-infusion.webp",
        name: "Effect: Weapon Infusion",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Weapon Infusion].</p>\n<p>If your next action is an Elemental Blast, choose a weapon shape for it to take. You can choose to change the blast's damage type to bludgeoning, piercing, or slashing-whichever suits the weapon shape-and you can choose other alterations depending on whether you make a melee or ranged blast.</p>\n<ul>\n<li><strong>Melee</strong> Add one of the following traits of your choice: agile, backswing, forceful, reach, sweep.</li>\n<li><strong>Ranged</strong> Choose one of three options: range increment 100 feet and the volley 30 feet trait, range increment 50 feet and the propulsive trait, or range increment 20 feet and the thrown trait.</li>\n</ul>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 0,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["self:effect:weapon-infusion"],
                    value: { damageTypes: ["bludgeoning", "piercing", "slashing"] },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:melee:agile"],
                    value: { traits: { melee: ["agile"] } },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:melee:backswing"],
                    value: { traits: { melee: ["backswing"] } },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:melee:forceful"],
                    value: { traits: { melee: ["forceful"] } },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:melee:reach"],
                    value: { traits: { melee: ["reach"] } },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:melee:sweep"],
                    value: { traits: { melee: ["sweep"] } },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:ranged:volley-30"],
                    value: {
                        range: { increment: 100 },
                        traits: { ranged: ["volley-30"] },
                    },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:ranged:propulsive"],
                    value: {
                        range: { increment: 50 },
                        traits: { ranged: ["propulsive"] },
                    },
                },
                {
                    key: "ActiveEffectLike",
                    merge: true,
                    mode: "override",
                    path: "flags.pf2e.kineticist.elementalBlast.infusion",
                    predicate: ["weapon-infusion:ranged:thrown"],
                    value: { range: { increment: 20 }, traits: { ranged: ["thrown"] } },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-weapon-tampered-with-critical-success": {
        _id: "o7qm13OmaYOMwgib",
        img: "systems/pf2e/icons/equipment/weapons/tricky-pick.webp",
        name: "Effect: Weapon Tampered With (Critical Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tamper]</p>\n<p>Your weapon has been tampered with! You take a -2 circumstance penalty to attack rolls and damage rolls with that weapon. The effect lasts until you @UUID[Compendium.pf2e.actionspf2e.Item.Interact] to remove it.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectWeaponTamperedWithCriticalSuccess",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    key: "FlatModifier",
                    selector: [
                        "{item|flags.pf2e.rulesSelections.effectWeaponTamperedWithCriticalSuccess}-attack",
                        "{item|flags.pf2e.rulesSelections.effectWeaponTamperedWithCriticalSuccess}-damage",
                    ],
                    type: "circumstance",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-weapon-tampered-with-success": {
        _id: "4QWayYR3JSL9bk2T",
        img: "systems/pf2e/icons/equipment/weapons/tricky-pick.webp",
        name: "Effect: Weapon Tampered With (Success)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tamper]</p>\n<p>Your weapon has been tampered with! You take a -2 circumstance penalty to attack rolls and damage rolls with that weapon. The effect ends at the start of the inventor's next turn, or until you @UUID[Compendium.pf2e.actionspf2e.Item.Interact] to remove it.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    choices: { ownedItems: true, types: ["weapon"] },
                    flag: "effectWeaponTamperedWithSuccess",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Weapon",
                },
                {
                    key: "FlatModifier",
                    selector: [
                        "{item|flags.pf2e.rulesSelections.effectWeaponTamperedWithSuccess}-attack",
                        "{item|flags.pf2e.rulesSelections.effectWeaponTamperedWithSuccess}-damage",
                    ],
                    type: "circumstance",
                    value: -2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-wings-of-air": {
        _id: "k1J2SaHPwZb2Y6Bp",
        img: "icons/magic/holy/angel-winged-humanoid-blue.webp",
        name: "Effect: Wings of Air",
        system: {
            description: {
                value:
                    "<p>You can strain to call forth feathered or cloudy wings from your back. Once manifested, these wings remain for 10 minutes. You gain a fly Speed equal to your land Speed while you've manifested your wings.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "minutes",
                value: 10,
            },
            level: { value: 9 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "BaseSpeed",
                    selector: "fly",
                    value: "@actor.attributes.speed.total",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-witchs-charge": {
        _id: "ugeStF0Rj8phBPWL",
        img: "systems/pf2e/icons/equipment/other/magic-pots/walking-cauldron.webp",
        name: "Effect: Witch's Charge",
        system: {
            description: {
                value:
                    "<p>Granted when you designate someone as your @UUID[Compendium.pf2e.feats-srd.Item.Witch's Charge].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "days",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-wood-impulse-junction": {
        _id: "rCsmv66TzQhte4Gp",
        img: "icons/magic/nature/barrier-shield-wood-vines.webp",
        name: "Effect: Wood Impulse Junction",
        system: {
            description: {
                value: "<p>You gain temporary hit points equal to your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [{ key: "TempHP", value: "@actor.level" }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "effect-worldly-mentor-boon-pfs": {
        _id: "oKJr59FYdDORxLcR",
        img: "systems/pf2e/icons/features/feats/pfs-worldly-mentor-boon.webp",
        name: "Effect: Worldly Mentor Boon (PFS)",
        system: {
            description: {
                value:
                    "<p><strong>Effect</strong> While working with less experienced Pathfinder allies, you help your less experienced colleagues recognize danger and withstand danger. For any PCs benefiting from a Level Bump and whose levels are lower than yours, you increase the Level Bump's modifier to Perception checks and Initiative rolls to 2.</p>\n<p><strong>Normal</strong> A Level Bump increases a PC's Perception modifier by 1.</p>\n<p><strong>Special</strong> A PC can only benefit from two mentor boons.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: { license: "OGL", remaster: false, title: "" },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Worldly Mentor Adjustment",
                    selector: "perception",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: false },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-wyrmblessed-blood-magic-status-bonus-self": {
        _id: "fILVhS5NuCtGXfri",
        img: "icons/creatures/eyes/lizard-single-slit-blue.webp",
        name: "Effect: Wyrmblessed Blood Magic (Status Bonus - Self)",
        system: {
            description: {
                value:
                    "<p>Draconic might carries in your voice. You gain a +1 status bonus to Intimidation checks for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "intimidation",
                    type: "status",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-wyrmblessed-blood-magic-status-penalty-target": {
        _id: "aqnx6IDcB7ARLxS5",
        img: "systems/pf2e/icons/features/feats/wyrmblesed-blood-magic-penalty.webp",
        name: "Effect: Wyrmblessed Blood Magic (Status Penalty - Target)",
        system: {
            description: {
                value:
                    "<p>Draconic might carries in your voice. A target takes a -1 status penalty to Will saves for 1 round.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                { key: "FlatModifier", selector: "will", type: "status", value: -1 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "effect-youre-an-embarrassment": {
        _id: "zUvicEXd4OgCZ1cO",
        img: "systems/pf2e/icons/spells/agitate.webp",
        name: "Effect: You're an Embarrassment",
        system: {
            description: {
                value:
                    "<p>You reroll the triggering Will saving throw with a +1 circumstance bonus.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: false,
                unit: "rounds",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "will",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-air-shroud": {
        _id: "XFc3dVzTe7KnpjuP",
        img: "icons/magic/air/air-wave-gust-blue.webp",
        name: "Stance: Air Shroud",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Air Shroud]</p>\n<p>Turbulent air suffuses your kinetic aura. This doesn't displace other matter but provides air for creatures in your kinetic aura that need air to breathe. Attacks with ranged weapons take a -1 circumstance penalty to their attack rolls if their paths pass through your kinetic aura. Air in your kinetic aura is difficult terrain for flying creatures other than yourself.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-arcane-cascade": {
        _id: "fsjO5oTKttsbpaKl",
        img: "icons/magic/control/silhouette-hold-change-blue.webp",
        name: "Stance: Arcane Cascade",
        system: {
            description: {
                value:
                    "<p><strong>Requirements</strong> You used your most recent action to Cast a Spell or make a Spellstrike.</p>\n<hr />\n<p>You divert a portion of the spell's magical power and keep it cycling through your body and weapon using specialized forms, breathing, or footwork. While you're in the stance, your melee Strikes deal [[/r {1}]]{1 extra damage}. This damage increases to 2 if you have weapon specialization and 3 if you have greater weapon specialization. Any Strike that benefits from this damage gains the arcane trait, making it magical.</p>\n<p>If your most recent spell before entering the stance was one that can deal damage, the damage from the stance is the same type that spell could deal (or one type of your choice if the spell could deal multiple types of damage). If the spell couldn't deal damage, this stance's bonus damage depends on the spell's school.</p>\n<ul>\n<li><strong>Abjuration</strong> or <strong>Evocation</strong> force</li>\n<li><strong>Conjuration</strong> or <strong>Transmutation</strong> same type as your weapon or unarmed attack</li>\n<li><strong>Divination</strong>, <strong>Enchantment</strong>, or <strong>Illusion</strong> mental</li>\n<li><strong>Necromancy</strong> negative</li>\n</ul>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    events: { onCreate: true, onTurnStart: true },
                    key: "TempHP",
                    predicate: [
                        "feature:inexorable-iron",
                        "self:weapon:melee",
                        "self:weapon:hands-held:2",
                    ],
                    value: "max(floor(@actor.level / 2), 1)",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.Magus.ArcaneCascade.WeaponDamage",
                            value: "",
                        },
                        { label: "PF2E.TraitBludgeoning", value: "bludgeoning" },
                        { label: "PF2E.TraitPiercing", value: "piercing" },
                        { label: "PF2E.TraitSlashing", value: "slashing" },
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                        { label: "PF2E.TraitForce", value: "force" },
                        { label: "PF2E.TraitVoid", value: "void" },
                        { label: "PF2E.TraitVitality", value: "vitality" },
                        { label: "PF2E.TraitSonic", value: "sonic" },
                        { label: "PF2E.TraitChaotic", value: "chaotic" },
                        { label: "PF2E.TraitLawful", value: "lawful" },
                        { label: "PF2E.TraitEvil", value: "evil" },
                        { label: "PF2E.TraitGood", value: "good" },
                        { label: "PF2E.TraitMental", value: "mental" },
                        { label: "PF2E.TraitPoison", value: "poison" },
                    ],
                    flag: "stanceArcaneCascade",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.DamageType",
                },
                {
                    definition: ["item:melee"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "traits",
                    value: "arcane",
                },
                {
                    damageType: "{item|flags.pf2e.rulesSelections.stanceArcaneCascade}",
                    key: "FlatModifier",
                    predicate: ["item:melee"],
                    selector: "strike-damage",
                    slug: "arcane-cascade-extra-damage",
                    value: 1,
                },
                {
                    key: "AdjustModifier",
                    mode: "upgrade",
                    predicate: ["item:melee", "feature:weapon-specialization"],
                    selector: "strike-damage",
                    slug: "arcane-cascade-extra-damage",
                    value: 2,
                },
                {
                    key: "AdjustModifier",
                    mode: "upgrade",
                    predicate: ["item:melee", "feature:greater-weapon-specialization"],
                    selector: "strike-damage",
                    slug: "arcane-cascade-extra-damage",
                    value: 3,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "flags.pf2e.arcaneCascade.damageType",
                    value: "{item|flags.pf2e.rulesSelections.stanceArcaneCascade}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-assume-earths-mantle": {
        _id: "QrJ06Sc2GiloQ6hB",
        img: "icons/magic/earth/construct-stone.webp",
        name: "Stance: Assume Earth's Mantle",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Assume Earth's Mantle]</p>\n<p>Enormous pieces of rock cluster around your body. You can Dismiss this impulse.</p>\n<ul>\n<li>You become Large if you were smaller. This increases your reach by 5 feet (or by 10 feet if you started out Tiny).</li>\n<li>You gain a climb Speed equal to your land Speed, but you can use it only to climb surfaces of earthen matter.</li>\n<li>The armor grants you a +1 circumstance bonus to your Fortitude saves and a +2 circumstance bonus to your Fortitude or Reflex DCs against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Shove] you, @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you, or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone].</li>\n<li>If your Strength is below +4, this armor raises your Strength to +4. If your Strength is +4 or higher, this armor grants you a +1 item bonus to your Strength.</li>\n<li>If you have the Armor in Earth impulse, you can add its effects to Assume Earth's Mantle.</li>\n</ul>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "CreatureSize", value: "large" },
                {
                    key: "BaseSpeed",
                    selector: "climb",
                    value: "@actor.attributes.speed.total",
                },
                {
                    key: "FlatModifier",
                    selector: "fortitude",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        { or: ["action:shove", "action:trip", "inflicts:prone"] },
                    ],
                    selector: ["fortitude-dc", "reflex-dc"],
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-buckler-dance": {
        _id: "PS17dsXkTdQmOv7w",
        img: "icons/equipment/shield/buckler-wooden-boss-brown.webp",
        name: "Stance: Buckler Dance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Buckler Dance]</p>\n<hr />\n<p><strong>Requirements</strong> You are wielding a @UUID[Compendium.pf2e.equipment-srd.Item.Buckler].</p>\n<hr />\n<p>You spin your buckler defensively toward every attack. While you are in this stance, you constantly have your buckler raised as if you'd used @UUID[Compendium.pf2e.actionspf2e.Item.Raise a Shield], as long as you meet that action's requirements.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.shield.raised",
                    predicate: [
                        "self:shield:equipped",
                        { nor: ["self:shield:broken", "self:shield:destroyed"] },
                    ],
                    value: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-bullet-dancer-stance": {
        _id: "6ctQFQfSZ6o1uyyZ",
        img: "systems/pf2e/icons/equipment/consumables/ammunition/awakened-adamantine-shot.webp",
        name: "Stance: Bullet Dancer Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Bullet Dancer Stance]</p>\n<p><strong>Requirements</strong> You're unarmored and wielding a simple firearm, bayonet, or reinforced stock</p>\n<hr />\n<p><strong>Effect</strong> You enter a specialized stance for a unique martial art centered around the use of simple firearms. While in this stance, the only Strikes you can make are those using bayonets, reinforced stocks, and simple firearms. You can use Flurry of Blows with these weapons. You can use your other monk feats or monk abilities that normally require unarmed attacks with bayonets and reinforced stocks, so long as the feat or ability doesn't require a single, specific Strike. You can also use them with simple firearms when attacking within half the first range increment.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-clinging-shadows-stance": {
        _id: "uFYvW3kFP9iyNfVX",
        img: "systems/pf2e/icons/spells/clinging-shadows-stance.webp",
        name: "Stance: Clinging Shadows Stance",
        system: {
            description: {
                value:
                    "<p>Granted by <em>@UUID[Compendium.pf2e.spells-srd.Item.Clinging Shadows Stance]</em></p>\n<p>You adopt the stance of clinging shadows. You can make shadow grasp Strikes. These deal 1d4 negative damage; are in the brawling group; and have the agile, grapple, reach, and unarmed traits.</p>\n<p>While in the clinging shadows stance, you gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Grapple], and to the DC for creatures to @UUID[Compendium.pf2e.actionspf2e.Item.Escape] from you.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "void", dice: 1, die: "d4" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/spells/clinging-shadows-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.ShadowGrasp",
                    range: null,
                    traits: ["agile", "grapple", "reach", "unarmed"],
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:grapple"],
                    selector: "athletics",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-cobra-stance-cobra-envenom": {
        _id: "2Qpt0CHuOMeL48rN",
        img: "systems/pf2e/icons/features/feats/cobra-stance.webp",
        name: "Stance: Cobra Stance (Cobra Envenom)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Cobra Stance] if you have @UUID[Compendium.pf2e.feats-srd.Item.Cobra Envenom], which increases the circumstance bonus to Fortitude saves and Fortitude DC to +2.</p>\n<p>You enter a tight stance, coiled up like a lashing cobra with your hands poised as venomous fangs. While in this stance, the only Strikes you can make are cobra fang unarmed attacks. These deal 1d4 poison damage; are in the brawling group; and have the agile, deadly d10, finesse, nonlethal, poison, and unarmed traits.</p>\n<p>While in Cobra Stance, you gain a +2 circumstance bonus to Fortitude saves and your Fortitude DC, and you gain poison resistance equal to half your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "poison", dice: 1, die: "d4" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/cobra-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.CobraFang",
                    range: null,
                    replaceAll: true,
                    traits: [
                        "agile",
                        "deadly-d10",
                        "finesse",
                        "poison",
                        "unarmed",
                        "nonlethal",
                    ],
                },
                {
                    key: "FlatModifier",
                    selector: "fortitude",
                    type: "circumstance",
                    value: 2,
                },
                { key: "Resistance", type: "poison", value: "floor(@actor.level/2)" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-cobra-stance": {
        _id: "CgxYa0lrLUjS2ZhI",
        img: "systems/pf2e/icons/features/feats/cobra-stance.webp",
        name: "Stance: Cobra Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Cobra Stance]</p>\n<p>You enter a tight stance, coiled up like a lashing cobra with your hands poised as venomous fangs. While in this stance, the only Strikes you can make are cobra fang unarmed attacks. These deal 1d4 poison damage; are in the brawling group; and have the agile, deadly d10, finesse, nonlethal, poison, and unarmed traits.</p>\n<p>While in Cobra Stance, you gain a +1 circumstance bonus to Fortitude saves and your Fortitude DC, and you gain poison resistance equal to half your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "poison", dice: 1, die: "d4" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/cobra-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.CobraFang",
                    range: null,
                    replaceAll: true,
                    traits: [
                        "agile",
                        "deadly-d10",
                        "finesse",
                        "poison",
                        "unarmed",
                        "nonlethal",
                    ],
                },
                {
                    key: "FlatModifier",
                    selector: "fortitude",
                    slug: "cobra-stance",
                    type: "circumstance",
                    value: 1,
                },
                { key: "Resistance", type: "poison", value: "floor(@actor.level/2)" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-crane-stance": {
        _id: "nwkYZs6YwXYAJ4ps",
        img: "icons/commodities/materials/feather-damaged-brown.webp",
        name: "Stance: Crane Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Crane Stance]</p>\n<p>You enter the stance of a crane, holding your arms in an imitation of a crane's wings and using flowing, defensive motions. You gain a +1 circumstance bonus to AC, but the only Strikes you can make are crane wing attacks. These deal 1d6 bludgeoning damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.</p>\n<p>While in Crane Stance, reduce the DC for @UUID[Compendium.pf2e.actionspf2e.Item.High Jump] and @UUID[Compendium.pf2e.actionspf2e.Item.Long Jump] by 5, and when you @UUID[Compendium.pf2e.actionspf2e.Item.Leap], you can move an additional 5 feet horizontally or 2 feet vertically.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/commodities/materials/feather-damaged-brown.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.CraneWing",
                    range: null,
                    replaceAll: true,
                    traits: ["agile", "finesse", "unarmed", "nonlethal"],
                },
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 1 },
                {
                    key: "Note",
                    predicate: [
                        { or: ["action:high-jump", "action:long-jump", "action:leap"] },
                    ],
                    selector: "athletics",
                    text: "Reduce the DC for High Jump and Long Jump by 5, and when you Leap, you can move an additional 5 feet horizontally or 2 feet vertically.",
                    title: "Crane Stance",
                },
                { domain: "all", key: "RollOption", option: "crane-stance" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-crowned-in-tempests-fury": {
        _id: "woKCbf1kXPrPjeZG",
        img: "icons/equipment/head/crown-horns-brown.webp",
        name: "Stance: Crowned in Tempest's Fury",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Crowned in Tempest's Fury]</p>\n<p>You become one with a devastating thunderstorm from the Plane of Air, placing a crown of lightning upon your brow. Sparks flash in your eyes, and lightning strikes constantly in the air around you as howling winds lift you from the ground.</p>\n<ul>\n<li>Any creature that enters your kinetic aura or ends its turn there takes @Damage[2d12[electricity]] damage.</li>\n<li>If you don't have a fly Speed, you gain a 20-foot fly Speed. If you have the Cyclonic Ascent impulse, you instead gain that fly Speed and the extra benefits.</li>\n<li>You gain a +10-foot status bonus to all your Speeds.</li>\n<li>Your air Elemental Blasts deal an additional @Damage[1d12[electricity]] damage.</li>\n</ul>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "BaseSpeed", selector: "fly", value: 20 },
                { key: "FlatModifier", selector: "speed", type: "status", value: 10 },
                {
                    damageType: "electricity",
                    diceNumber: 1,
                    dieSize: "d12",
                    key: "DamageDice",
                    predicate: ["item:trait:air"],
                    selector: "elemental-blast-damage",
                },
                {
                    key: "BaseSpeed",
                    predicate: ["feat:cyclonic-ascent"],
                    selector: "fly",
                    value: "max(30,@actor.attributes.speed.total)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-desert-wind": {
        _id: "gcR66Xgi12ICOVt7",
        img: "icons/magic/perception/eye-slit-red-orange.webp",
        name: "Stance: Desert Wind",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Desert Wind]</p>\n<p>A vortex of sand and dust surrounds you. Each creature inside your kinetic aura (including you) is @UUID[Compendium.pf2e.conditionitems.Item.Concealed] from any creature outside your kinetic aura, and creatures outside the aura are concealed from creatures inside the aura other than you. Your air impulses carry sands that cut at great speed.</p>\n<p>When you use a damaging air impulse that affects at least one creature in your kinetic aura, that impulse deals 1 additional slashing damage, or 2 if the impulse has a single target.</p>\n<hr />\n<p><strong>Level (+2)</strong> The extra damage increases by 1, or 2 if the impulse has a single target.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-devrins-cunning-stance": {
        _id: "kyrvZfZfzKK1vx9b",
        img: "systems/pf2e/icons/spells/anticipate-peril.webp",
        name: "Stance: Devrin's Cunning Stance",
        system: {
            description: {
                value:
                    "<p>Your aura grants you and your allies a +1 status bonus to skill checks. When you or an ally in the aura Strike an @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] enemy, that enemy can't use reactions until the beginning of its next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.Check.Result.Degree.Check.criticalSuccess",
                            value: 20,
                        },
                        { label: "PF2E.Check.Result.Degree.Check.success", value: 10 },
                    ],
                    flag: "auraRadius",
                    key: "ChoiceSet",
                    prompt: "PF2E.UI.RuleElements.ChoiceSet.Prompt",
                },
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Marshal's Aura",
                        },
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Devrin's Cunning Stance",
                        },
                    ],
                    key: "Aura",
                    radius: "@item.flags.pf2e.rulesSelections.auraRadius",
                    slug: "marshals-aura",
                    traits: ["emotion", "mental", "visual"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-disarming-stance": {
        _id: "LxSev4GNKv26DbZw",
        img: "systems/pf2e/icons/equipment/weapons/rapier.webp",
        name: "Stance: Disarming Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Disarming Stance].</p>\n<p>You gain a +1 circumstance bonus to Athletics checks to Disarm and a +2 circumstance bonus to your Reflex DC when defending against checks to Disarm you.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:disarm"],
                    selector: "athletics",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:disarm"],
                    selector: "reflex-dc",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-disruptive-stance": {
        _id: "qBR3kqGCeKp3T2Be",
        img: "systems/pf2e/icons/features/classes/mastermind.webp",
        name: "Stance: Disruptive Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Disruptive Stance]</p>\n<p>The slightest distraction can provoke your wrath, and you're prepared to foil enemies' actions.</p>\n<p>As long as you are in this stance, you can use @UUID[Compendium.pf2e.actionspf2e.Item.Reactive Strike]{Attack of Opportunity} when a creature within your reach uses a concentrate action, in addition to manipulate and move actions.</p>\n<p>Furthermore, you disrupt a triggering concentrate or manipulate action if your Strike hits (not only if it's a critical hit).</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-dragon-stance": {
        _id: "qUowHpn79Dpt1hVn",
        img: "icons/creatures/reptiles/dragon-horned-blue.webp",
        name: "Stance: Dragon Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Dragon Stance]</p>\n<p>You enter the stance of a dragon and make powerful leg strikes like a lashing dragon's tail. You can make dragon tail attacks that deal 1d10 bludgeoning damage. They are in the brawling group and have the backswing, nonlethal, and unarmed traits.</p>\n<p>While in Dragon Stance, you can ignore the first square of difficult terrain while Striding.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d10" } },
                    group: "brawling",
                    img: "icons/creatures/reptiles/dragon-horned-blue.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.DragonTail",
                    range: null,
                    traits: ["backswing", "unarmed", "nonlethal"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-dread-marshal-stance": {
        _id: "qX62wJzDYtNxDbFv",
        img: "systems/pf2e/icons/features/feats/dread-marshal-stance.webp",
        name: "Stance: Dread Marshal Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Dread Marshal Stance].</p>\n<p>Your marshal's aura grants you and allies a status bonus to damage rolls equal to the number of weapon damage dice of the unarmed attack or weapon the you are wielding that has the most weapon damage dice. When you or an ally in the aura critically hits an enemy with a Strike, that enemy is @UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 1}.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.Check.Result.Degree.Check.criticalSuccess",
                            value: 20,
                        },
                        { label: "PF2E.Check.Result.Degree.Check.success", value: 10 },
                    ],
                    flag: "auraRadius",
                    key: "ChoiceSet",
                    prompt: "PF2E.UI.RuleElements.ChoiceSet.Prompt",
                },
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Marshal's Aura",
                        },
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Dread Marshal Stance",
                        },
                    ],
                    key: "Aura",
                    radius: "@item.flags.pf2e.rulesSelections.auraRadius",
                    slug: "marshals-aura",
                    traits: ["emotion", "mental", "visual"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-drifting-pollen": {
        _id: "8hmw9L2ORKz6Z6Bc",
        img: "icons/magic/nature/leaf-glow-maple-orange.webp",
        name: "Stance: Drifting Pollen",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Drifting Pollen]</p>\n<p>A haze of pollen floats around you. A creature in your kinetic aura when you enter the stance, or who later enters the aura or ends its turn in the aura, attempts at a @Check[type:fortitude|dc:resolve(@actor.system.proficiencies.classDCs.kineticist.dc)] save against your class DC. On a failure, it's @UUID[Compendium.pf2e.conditionitems.Item.Sickened]{Sickened 1} (@UUID[Compendium.pf2e.conditionitems.Item.Sickened]{Sickened 2} on a critical failure) and @UUID[Compendium.pf2e.conditionitems.Item.Dazzled] until it's no longer sickened. A creature attempts this save no more than once per round and doesn't attempt a new save if already affected.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-dueling-dance": {
        _id: "KiuBRoMFxL2Npt51",
        img: "systems/pf2e/icons/equipment/weapons/rapier.webp",
        name: "Stance: Dueling Dance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Dueling Dance (Swashbuckler)] or @UUID[Compendium.pf2e.feats-srd.Item.Dueling Dance (Fighter)]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Dueling Parry",
                    selector: "ac",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-everstand-stance": {
        _id: "GGebXpRPyONZB3eS",
        img: "systems/pf2e/icons/equipment/shields/specific-shields/spellguard-shield.webp",
        name: "Stance: Everstand Stance",
        system: {
            description: {
                value:
                    "<p>When in this stance, you wield the shield with both hands. When wielding a shield this way, increase the weapon damage die of the shield's boss or spikes by one step, and increase the shield's Hardness by 2 when using the @UUID[Compendium.pf2e.feats-srd.Item.Shield Block] reaction.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    itemType: "armor",
                    key: "ItemAlteration",
                    mode: "add",
                    predicate: [
                        "item:category:shield",
                        "item:equipped",
                        "self:shield:raised",
                    ],
                    property: "hardness",
                    value: 2,
                },
                {
                    key: "DamageDice",
                    override: { upgrade: true },
                    selector: ["shield-boss-damage", "shield-spikes-damage"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-fanes-fourberie": {
        _id: "GvqB4M8LrHpzYEvl",
        img: "systems/pf2e/icons/equipment/adventuring-gear/playing-cards.webp",
        name: "Stance: Fane's Fourberie",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Fane's Fourberie]</p>\n<p>Stella Fane has perfected a technique for using playing cards as weapons that's one part sleight of hand and one part magic.</p>\n<p>When you enter this stance, choose whether to treat playing cards in your possession as daggers or darts; you can wield a playing card in all ways as the chosen weapon until the stance ends. As long as the majority of the deck remains in your possession, any cards that are lost or thrown can be found after 1 minute. Otherwise, the remaining cards are likely lost or destroyed.</p>\n<p>A character who has this feat can enchant a single deck of playing cards as a magic weapon, etching fundamental and property runes directly onto the deck of cards.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Pathfinder Society Guide",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.Weapon.Base.dagger", value: "dagger" },
                        { label: "PF2E.Weapon.Base.dart", value: "dart" },
                    ],
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.FanesFourberie.Prompt",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-geologic-attunement": {
        _id: "ebCWQB5nfK19GpY5",
        img: "systems/pf2e/icons/spells/earthquake.webp",
        name: "Stance: Geologic Attunement",
        system: {
            description: {
                value:
                    "<p>You gain tremorsense (imprecise) in your kinetic aura.</p>\n<p>At 13th level this becomes precise tremorsense.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    acuity: "imprecise",
                    key: "Sense",
                    predicate: ["self:effect:kinetic-aura"],
                    range: "@actor.flags.pf2e.kineticist.auraRadius",
                    selector: "tremorsense",
                },
                {
                    acuity: "precise",
                    key: "Sense",
                    predicate: ["self:effect:kinetic-aura", { gte: ["self:level", 13] }],
                    range: "@actor.flags.pf2e.kineticist.auraRadius",
                    selector: "tremorsense",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-ghosts-in-the-storm": {
        _id: "sPIaly8bgNxgcNvT",
        img: "icons/creatures/magical/spirit-undead-winged-ghost.webp",
        name: "Stance: Ghosts in the Storm",
        system: {
            description: {
                value:
                    "<p>Clouds, like eager pets, are drawn to you and to those in your good graces. Fast-moving gray clouds surround you, as well as your allies while they're in your kinetic aura. Anyone surrounded by these clouds gains a +2 status bonus to Reflex saves and Acrobatics checks. When an affected creature uses a move action, clouds dance around it. Until the start of its next turn, it's @UUID[Compendium.pf2e.conditionitems.Item.Concealed], and its Strikes gain the <em>@UUID[Compendium.pf2e.equipment-srd.Item.Shock]</em> rune.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Ghosts in the Storm",
                        },
                    ],
                    key: "Aura",
                    predicate: ["self:effect:kinetic-aura"],
                    radius: "@actor.flags.pf2e.kineticist.auraRadius",
                    slug: "kinetic-aura",
                    traits: ["kineticist", "primal", "air", "electricity"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-gorilla-stance-gorilla-pound": {
        _id: "UZKIKLuwpQu47feK",
        img: "systems/pf2e/icons/features/feats/gorilla-stance.webp",
        name: "Stance: Gorilla Stance (Gorilla Pound)",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Gorilla Stance] if you have @UUID[Compendium.pf2e.feats-srd.Item.Gorilla Pound], which grants you a climb speed of 15 while you are in this stance.</p>\n<p>You lower yourself to the ground and take an imposing, knuckle-walking stance. While in this stance, the only Strikes you can make are gorilla slam unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the backswing, forceful, grapple, nonlethal, and unarmed traits.</p>\n<p>While you are in Gorilla Stance, you gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Climb], and if you roll a success on an Athletics check to Climb, you get a critical success instead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/gorilla-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.GorillaSlam",
                    range: null,
                    replaceAll: true,
                    traits: ["backswing", "forceful", "grapple", "unarmed", "nonlethal"],
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "Note",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    text: "If you roll a success on an Athletics check to Climb, you get a critical success instead.",
                    title: "Gorilla Stance",
                },
                { key: "BaseSpeed", selector: "climb", value: 15 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-gorilla-stance": {
        _id: "RozqjLocahvQWERr",
        img: "systems/pf2e/icons/features/feats/gorilla-stance.webp",
        name: "Stance: Gorilla Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Gorilla Stance]</p>\n<p>You lower yourself to the ground and take an imposing, knuckle-walking stance. While in this stance, the only Strikes you can make are gorilla slam unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the backswing, forceful, grapple, nonlethal, and unarmed traits.</p>\n<p>While you are in Gorilla Stance, you gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Climb], and if you roll a success on an Athletics check to Climb, you get a critical success instead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/gorilla-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.GorillaSlam",
                    range: null,
                    replaceAll: true,
                    traits: ["backswing", "forceful", "grapple", "unarmed", "nonlethal"],
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "Note",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    text: "If you roll a success on an Athletics check to Climb, you get a critical success instead.",
                    title: "Gorilla Stance",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-graceful-poise": {
        _id: "mark4VEQoynfYNBF",
        img: "systems/pf2e/icons/equipment/weapons/dagger.webp",
        name: "Stance: Graceful Poise",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Graceful Poise]</p>\n<p>With the right positioning, your off-hand weapon can strike like a scorpion's stinger.</p>\n<p>While you are in this stance, if you make your second Strike from @UUID[Compendium.pf2e.feats-srd.Item.Double Slice] with an agile weapon, Double Slice counts as one attack when calculating your multiple attack penalty.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-impassable-wall-stance": {
        _id: "zzC2qZwEKf4Ja3xD",
        img: "icons/commodities/stone/paver-brick-brown.webp",
        name: "Stance: Impassable Wall Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Impassable Wall Stance]</p>\n<p>You refuse to let foes past your guard. As long as you are in this stance, when you critically hit with an @UUID[Compendium.pf2e.actionspf2e.Item.Reactive Strike]{Attack of Opportunity} triggered by a move action, you disrupt that move action.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-inspiring-marshal-stance": {
        _id: "er5tvDNvpbcnlbHQ",
        img: "systems/pf2e/icons/features/feats/inspiring-marshal-stance.webp",
        name: "Stance: Inspiring Marshal Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Inspiring Marshal Stance].</p>\n<p>Your marshal's aura grants you and allies a +1 status bonus to attack rolls and saves against mental effects.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.Check.Result.Degree.Check.criticalSuccess",
                            value: 20,
                        },
                        { label: "PF2E.Check.Result.Degree.Check.success", value: 10 },
                    ],
                    flag: "auraRadius",
                    key: "ChoiceSet",
                    prompt: "PF2E.UI.RuleElements.ChoiceSet.Prompt",
                },
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Marshal's Aura",
                        },
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Inspiring Marshal Stance",
                        },
                    ],
                    key: "Aura",
                    radius: "@item.flags.pf2e.rulesSelections.auraRadius",
                    slug: "marshals-aura",
                    traits: ["emotion", "mental", "visual"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-ironblood-stance": {
        _id: "tPKXLtDJ3bzJcXlv",
        img: "systems/pf2e/icons/features/feats/ironblood-stance.webp",
        name: "Stance: Ironblood Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Ironblood Stance]</p>\n<p>You enter the stance of impenetrable iron, refusing to yield to any blow. You can make iron sweep unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the nonlethal, parry, sweep, and unarmed traits.</p>\n<p>While in Ironblood Stance, you gain resistance 2 to all damage. The resistance increases to 3 at 12th level, to 4 at 16th level, and to 5 at 20th level.</p>\n<p>@UUID[Compendium.pf2e.equipment-effects.Item.Effect: Parry]</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/ironblood-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.IronSweep",
                    range: null,
                    traits: ["parry", "sweep", "unarmed", "nonlethal"],
                },
                {
                    key: "Resistance",
                    type: "all-damage",
                    value: "min(floor(@actor.level/4),5)",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-jellyfish-stance": {
        _id: "pkcr9w5x6bKzl3om",
        img: "systems/pf2e/icons/spells/tempest-of-shades.webp",
        name: "Stance: Jellyfish Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Jellyfish Stance]</p>\n<p><strong>Requirements</strong> You are unarmored.</p>\n<hr />\n<p>You relax your posture and loosen your joints, allowing yourself to move with incredible fluidity. You can make stinging lash attacks that deal 1d6 slashing damage. These attacks are in the brawling group, and have the finesse, nonlethal, reach, and unarmed traits.</p>\n<p>While in Jellyfish Stance, you gain a +2 circumstance bonus to Reflex saves and on checks to @UUID[Compendium.pf2e.actionspf2e.Item.Escape] and @UUID[Compendium.pf2e.actionspf2e.Item.Squeeze].</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Fists of the Ruby Phoenix Hardcover Compilation",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/spells/tempest-of-shades.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.StingingLash",
                    range: null,
                    traits: ["unarmed", "reach", "finesse", "nonlethal"],
                },
                {
                    key: "FlatModifier",
                    selector: "reflex",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:escape"],
                    selector: ["acrobatics", "athletics"],
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:escape", "unarmed"],
                    selector: "attack",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:squeeze"],
                    selector: "acrobatics",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-kindle-inner-flames": {
        _id: "hrEG2smy3tZyGxIn",
        img: "icons/magic/fire/flame-burning-campfire-rocks.webp",
        name: "Stance: Kindle Inner Flames",
        system: {
            description: {
                value:
                    "<p>As a candle can light another, you awaken the latent potential to channel fire in other creatures. You shed faint, glowing embers, as do your allies while they're in your kinetic aura. Anyone shedding these embers gains a +1 status bonus to Reflex saves and Acrobatics checks and can Step as a free action once per round. When an affected creature takes a move action, its Strikes deal an extra @Damage[2[fire]] damage until the end of its turn.</p>\n<hr />\n<p><strong>Level (12th)</strong> The status bonus to Reflex saves and Acrobatics checks is +2, and the Strikes gain the <em>@UUID[Compendium.pf2e.equipment-srd.Item.Flaming]</em> rune instead of the extra 2 fire damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Kindle Inner Flames",
                        },
                    ],
                    key: "Aura",
                    predicate: ["self:effect:kinetic-aura"],
                    radius: "@actor.flags.pf2e.kineticist.auraRadius",
                    slug: "kinetic-aura",
                    traits: ["kineticist", "primal", "fire"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-lunging-stance": {
        _id: "W8CKuADdbODpBh6O",
        img: "systems/pf2e/icons/equipment/weapons/guisarme.webp",
        name: "Stance: Lunging Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Lunging Stance]</p>\n<hr />\n<p><strong>Requirements</strong> You are wielding a melee weapon</p>\n<hr />\n<p>Your body coiled to strike, you can lash out at distant enemies. While you are in this stance, you can use Attack of Opportunity against a creature that is outside your reach but within the reach you would have with a @UUID[Compendium.pf2e.feats-srd.Item.Lunge]. If you do, you increase your range with the Strike by 5 feet.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-magnetic-field": {
        _id: "PdFisHX9ZJmKEKCv",
        img: "icons/skills/movement/arrows-up-trio-red.webp",
        name: "Stance: Magnetic Field",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Magnetic Field]</p>\n<p>A magnetic field surrounds you. Choose a polarity when you take this action. You can switch the polarity as a free action at the start of each of your turns while you remain in this stance.</p>\n<p><strong>Attract</strong> A creature that is wearing metal armor, has the metal trait, or is made of metal treats squares in your kinetic aura as difficult terrain when moving away from you. You pull unattended metal objects of light Bulk or less in your kinetic aura to you. They gather in your space and move with you.</p>\n<p><strong>Repel</strong> A creature that is wearing metal armor, has the metal trait, or is made of metal treats squares in your kinetic aura as difficult terrain when moving closer to you. You push unattended metal objects of light Bulk or less in your kinetic aura away. They stop moving once they're outside your aura.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-masquerade-of-seasons-stance": {
        _id: "6IsZQpwRJQWIzdGx",
        img: "icons/magic/symbols/elements-air-earth-fire-water.webp",
        name: "Stance: Masquerade of Seasons Stance",
        system: {
            description: {
                value:
                    "<p>You have mastered the opening steps to the Masquerade of Seasons, a dance that channels the power of spring, summer, winter, and autumn. Choose one of the following traits: water, fire, negative, or cold. You gain resistance 5 to damage dealt by effects with the chosen trait. You can use an action to reenter this stance at any time, changing the granted resistance to another of the available options. If you are at least 12th level, the granted resistance increases to be equal to half your level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-mobile-shot-stance": {
        _id: "NWOmJ6WJFheaGhho",
        img: "systems/pf2e/icons/spells/jump.webp",
        name: "Stance: Mobile Shot Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Mobile Shot Stance]</p>\n<p>Your shots become nimble and deadly. While you're in this stance, your ranged Strikes don't trigger Attacks of Opportunity or other reactions that are triggered by a ranged attack.</p>\n<p>If you have @UUID[Compendium.pf2e.actionspf2e.Item.Reactive Strike]{Attack of Opportunity}, you can use it with a loaded ranged weapon you're wielding. The triggering creature must be within 5 feet of you for you to do so.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-monastic-archer-stance": {
        _id: "1dxD3xsTzak6GNj5",
        img: "systems/pf2e/icons/equipment/weapons/specific-magic-weapons/oathbow.webp",
        name: "Stance: Monastic Archer Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Monastic Archer Stance]</p>\n<p>You enter a specialized stance for a unique martial art centered around the use of a bow. While in this stance, the only Strikes you can make are those using longbows, shortbows, or bows with the monk trait.</p>\n<p>You can use @UUID[Compendium.pf2e.actionspf2e.Item.Flurry of Blows] with these bows. You can use your other monk feats or monk abilities that normally require unarmed attacks with these bows when attacking within half the first range increment (normally 50 feet for a longbow and 30 feet for a shortbow), so long as the feat or ability doesn't require a single, specific Strike.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-mountain-stance": {
        _id: "gYpy9XBPScIlY93p",
        img: "icons/commodities/treasure/statue-bust-stone-grey.webp",
        name: "Stance: Mountain Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Mountain Stance]</p>\n<p>You enter the stance of an implacable mountain—a technique first discovered by dwarven monks—allowing you to strike with the weight of an avalanche. The only Strikes you can make are falling stone unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the forceful, nonlethal, and unarmed traits.</p>\n<p>While in Mountain Stance, you gain a +4 item bonus to AC and a +2 circumstance bonus to any defenses against being Shoved or Tripped. However, you have a Dexterity modifier cap to your AC of +0, meaning you don't add your Dexterity to your AC, and your Speeds are all reduced by 5 feet. The item bonus to AC from Mountain Stance is cumulative with armor potency runes on your explorer's clothing, mage armor, and bracers of armor.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "icons/commodities/treasure/statue-bust-stone-grey.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.FallingStone",
                    range: null,
                    replaceAll: true,
                    traits: ["forceful", "unarmed", "nonlethal"],
                },
                {
                    fromEquipment: false,
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    selector: "ac",
                    type: "item",
                    value: 4,
                },
                {
                    key: "DexterityModifierCap",
                    predicate: [
                        { nor: ["feat:mountain-stronghold", "feat:mountain-quake"] },
                    ],
                    value: 0,
                },
                { key: "FlatModifier", selector: "speed", value: -5 },
                {
                    key: "AdjustModifier",
                    mode: "add",
                    relabel: "PF2E.SpecificRule.MountainStance.BracersOfArmor",
                    selector: "ac",
                    slug: "bracers-of-armor",
                    value: 4,
                },
                {
                    key: "AdjustModifier",
                    mode: "add",
                    relabel: "PF2E.SpecificRule.MountainStance.ExplorersClothing",
                    selector: "ac",
                    slug: "explorers-clothing",
                    value: 4,
                },
                {
                    key: "AdjustModifier",
                    mode: "add",
                    relabel: "PF2E.SpecificRule.MountainStance.MageArmor",
                    selector: "ac",
                    slug: "mage-armor",
                    value: 4,
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: ["action:shove"],
                    selector: "fortitude",
                    type: "circumstance",
                    value: 2,
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: ["action:trip"],
                    selector: "reflex",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-multishot-stance": {
        _id: "l4QUaedYofnfXig0",
        img: "systems/pf2e/icons/equipment/consumables/ammunition/sleep-arrow.webp",
        name: "Stance: Multishot Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Multishot Stance].</p>\n<p>While you are in this stance, your penalty for Double Shot is reduced to -1, or -2 if you add the extra action to make three Strikes. If you move from your position, this stance ends.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 16 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "AdjustModifier",
                    mode: "add",
                    predicate: ["double-shot"],
                    relabel: "{item|name}",
                    selector: "ranged-attack-roll",
                    slug: "double-shot",
                    value: 1,
                },
                {
                    key: "AdjustModifier",
                    mode: "add",
                    predicate: ["triple-shot"],
                    relabel: "{item|name}",
                    selector: "ranged-attack-roll",
                    slug: "double-shot",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-orchards-endurance": {
        _id: "YNoBbHUu7enOSKyv",
        img: "icons/environment/wilderness/tree-oak.webp",
        name: "Stance: Orchard's Endurance",
        system: {
            description: {
                value:
                    "<p>Patches of bark appear on the skin of you and your nearby allies. You and your allies in your kinetic aura gain resistance 5 to bludgeoning and piercing damage. In addition, you and your affected allies roll flat checks to recover from persistent damage twice and take the higher result; this is a fortune effect.</p>\n<hr />\n<p><strong>Level (+4)</strong> The resistance increases by 2.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Orchard's Endurance",
                        },
                    ],
                    key: "Aura",
                    predicate: ["self:effect:kinetic-aura"],
                    radius: "@actor.flags.pf2e.kineticist.auraRadius",
                    slug: "kinetic-aura",
                    traits: ["kineticist", "primal", "plant", "wood"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-paragons-guard": {
        _id: "6EDoy3OSFZ4L3Vs7",
        img: "systems/pf2e/icons/features/feats/paragons-guard.webp",
        name: "Stance: Paragon's Guard",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Paragon's Guard].</p>\n<hr />\n<p><strong>Requirements</strong> You are wielding a shield</p>\n<hr style=\"border-top: 1px solid var(--color-border-light-primary); border-bottom: 1px solid var(--color-border-light-highlight);\">\n<p>Once you've had a moment to set your stance, you always have your shield ready without a thought.</p>\n<p>While you are in this stance, you constantly have your shield raised as if you'd used the @UUID[Compendium.pf2e.actionspf2e.Item.Raise a Shield] action, as long as you meet that action's requirements.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.shield.raised",
                    predicate: ["self:shield:equipped"],
                    value: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-peafowl-stance": {
        _id: "vjvcccAwdkOLA1Fc",
        img: "systems/pf2e/icons/equipment/weapons/specific-magic-weapons/storm-flash.webp",
        name: "Stance: Peafowl Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Peafowl Stance]</p>\n<p>You enter a tall and proud stance while remaining mobile, with all the grace and composure of a peafowl.</p>\n<p>While in this stance, the only Strikes you can make are melee Strikes with the required sword. Once per round, after you hit with a monk sword Strike, you can Step as a free action as your next action.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-point-blank-stance": {
        _id: "9HPxAKpP3WJmICBx",
        img: "systems/pf2e/icons/equipment/weapons/daikyu.webp",
        name: "Stance: Point Blank Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Point Blank Stance]{Point-Blank Shot}.</p>\n<p>When using a ranged weapon that doesn't have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon's first range increment.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    domain: "attack-roll",
                    key: "RollOption",
                    option: "self:ignore-volley-penalty",
                },
                {
                    key: "FlatModifier",
                    predicate: [
                        "target:range-increment:1",
                        "item:ranged",
                        {
                            nor: [
                                "item:trait:volley-20",
                                "item:trait:volley-30",
                                "item:trait:volley-50",
                            ],
                        },
                    ],
                    selector: "strike-damage",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-powder-punch-stance": {
        _id: "kDTiRg9vVOYNnTyr",
        img: "icons/equipment/hand/gauntlet-simple-leather-brown-gold.webp",
        name: "Stance: Powder Punch Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Powder Punch Stance]</p>\n<p>You infuse your handwraps with black powder. On your first melee Strike each round with an unarmed attack, @UUID[Compendium.pf2e.equipment-srd.Item.Knuckle Duster], or @UUID[Compendium.pf2e.equipment-srd.Item.Black Powder Knuckle Dusters], you deal an additional 1 fire Damage. If you critically succeed at an attempt to @UUID[Compendium.pf2e.actionspf2e.Item.Shove] while in this stance, the target is pushed back an additional 5 feet.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #178: Punks in a Powder Keg",
            },
            rules: [
                {
                    domain: "damage",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.PowderPunchStance.Label",
                    option: "powder-punch",
                    toggleable: true,
                },
                {
                    damageType: "fire",
                    key: "FlatModifier",
                    predicate: ["powder-punch"],
                    selector: [
                        "unarmed-damage",
                        "knuckle-duster-damage",
                        "black-powder-knuckle-dusters",
                    ],
                    value: 1,
                },
                {
                    key: "Note",
                    outcome: ["criticalSuccess"],
                    predicate: ["action:shove"],
                    selector: "athletics",
                    text: "PF2E.SpecificRule.PowderPunchStance.Note",
                    title: "{item|name}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-rain-of-embers-stance": {
        _id: "Im5JBInybWFbHEYS",
        img: "icons/magic/fire/blast-jet-stream-splash.webp",
        name: "Stance: Rain of Embers Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Rain of Embers Stance]</p>\n<p>You enter the stance of an enraged phoenix, holding your fingers as rigid as deadly talons while moving with quick, flickering gestures that dance with biting flames. The only Strikes you can make are fire talon Strikes. These deal 1d4 fire damage; are in the brawling group; and have the agile, finesse, fire, nonlethal, and unarmed traits.</p>\n<p>While in Rain of Embers Stance, you gain a +1 status bonus to AC and fire resistance equal to half your level (minimum 1).</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Pathfinder Society Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "fire", dice: 1, die: "d4" } },
                    group: "brawling",
                    img: "icons/magic/fire/blast-jet-stream-splash.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.FireTalon",
                    range: null,
                    replaceAll: true,
                    traits: ["agile", "finesse", "fire", "unarmed", "nonlethal"],
                },
                { key: "FlatModifier", selector: "ac", type: "status", value: 1 },
                {
                    key: "Resistance",
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-ravel-of-thorns": {
        _id: "JW93FDTAOUNuCgIu",
        img: "icons/magic/nature/vines-thorned-entwined-glow-teal-purple.webp",
        name: "Stance: Ravel Of Thorns",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Ravel Of Thorns]</p>\n<p>Thorny vines grow in geometric patterns on surfaces in your kinetic aura. A creature that starts its turn in the thorns takes a –10-foot circumstance penalty to its Speeds until it leaves the area. The thorns are hazardous terrain. A creature takes @Damage[(floor((@actor.level -4)/4)+2)[piercing]] damage each time it moves into one of these squares. If any square the thorns grow on is water or soil, double the hazardous terrain damage for all thorns. If you move, the thorns disappear; new thorns grow at the end of your turn.</p>\n<hr />\n<p><strong>Level (+4)</strong> The damage increases by 1.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-rebirth-in-living-stone": {
        _id: "zqgOjMU9TGoGwJWc",
        img: "icons/magic/earth/construct-stone-long-arms.webp",
        name: "Stance: Rebirth In Living Stone",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Rebirth In Living Stone]<br /><br /></p>\n<p>Rock overflows from within you to consume your form before cracking open to reveal your body transformed into living stone. You gain 40 temporary Hit Points. You're immune to critical hits and precision damage. You can't be pushed, pulled, or tripped while you're standing on earth or stone. Your earth Elemental Blasts deal an additional 1d10 damage of their normal type. These benefits last until the end of your next turn, but you can Sustain them up to 1 minute. After you gain temporary Hit Points from this impulse, you can't do so again for 10 minutes.</p>\n<hr />\n<p><strong>Level (20th)</strong> You gain 50 temporary Hit Points.</p>",
            },
            duration: {
                expiry: "turn-end",
                sustained: true,
                unit: "minutes",
                value: 1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "TempHP",
                    value: {
                        brackets: [
                            { end: 19, value: 40 },
                            { start: 20, value: 50 },
                        ],
                    },
                },
                { key: "Immunity", type: "precision" },
                { key: "Immunity", type: "critical-hits" },
                {
                    diceNumber: 1,
                    dieSize: "d10",
                    key: "DamageDice",
                    predicate: ["item:trait:earth"],
                    selector: "elemental-blast-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-reflective-ripple-stance": {
        _id: "QDQwHxNowRwzUx9R",
        img: "systems/pf2e/icons/features/feats/reflective-ripple-stance.webp",
        name: "Stance: Reflective Ripple Stance",
        system: {
            description: {
                value:
                    "<p>You can make flowing wave attacks that deal 1d6 bludgeoning damage. They are in the brawling group and have the agile, disarm, finesse, nonlethal, trip, unarmed, and water traits.</p>\n<p>While in Reflective Ripple Stance, you gain a +1 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Disarm], @UUID[Compendium.pf2e.actionspf2e.Item.Swim], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip], and you gain a +2 circumstance bonus to your Reflex DC to avoid being Disarmed and Tripped.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/reflective-ripple-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.FlowingWave",
                    range: null,
                    traits: [
                        "agile",
                        "disarm",
                        "finesse",
                        "nonlethal",
                        "trip",
                        "unarmed",
                        "water",
                    ],
                },
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["action:disarm", "action:swim", "action:trip"] }],
                    selector: "athletics",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["action:trip", "action:disarm"] }],
                    selector: "reflex-dc",
                    type: "circumstance",
                    value: 2,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-ricochet-stance": {
        _id: "Unfl4QQURWaX2zfd",
        img: "systems/pf2e/icons/equipment/weapons/chakram.webp",
        name: "Stance: Ricochet Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Ricochet Stance (Fighter)] or @UUID[Compendium.pf2e.feats-srd.Item.Ricochet Stance (Rogue)]</p>\n<p>You adopt a stance designed to rebound your thrown weapons back toward you. While you are in this stance, any thrown weapons you use as part of a ranged Strike to deal bludgeoning or slashing damage immediately return to your hand, enabling you to use them for additional Strikes.</p>\n<p>You must be within the weapon's listed range increment and have a hand free to catch the weapon. If you make a ranged Strike with a thrown weapon outside of its listed range increment, it instead flies back toward you a number of feet equal to its listed range increment and then falls to the ground.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-rough-terrain-stance": {
        _id: "YkiTA74FrUUu5IvI",
        img: "systems/pf2e/icons/spells/earthquake.webp",
        name: "Stance: Rough Terrain Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Rough Terrain Stance]</p>\n<hr />\n<p><strong>Requirements</strong> You gained a terrain attunement benefit this turn.</p>\n<hr />\n<p>You enter a stance that makes it difficult to move around you. Each square adjacent to you becomes difficult terrain that matches the terrain attunement you gained (rime forms in an arctic terrain, momentary undergrowth shoots up in a forest terrain, and so on). You ignore this difficult terrain.</p>\n<p>This stance ends if you move into a different type of terrain.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-sea-glass-guardians": {
        _id: "buCKRBDZi27shB3X",
        img: "systems/pf2e/icons/spells/bralani-referendum.webp",
        name: "Stance: Sea Glass Guardians",
        system: {
            description: {
                value:
                    "<p>Eerily beautiful elemental water beings race around you, eager to protect and heal you and your allies. Their forms vary and might include eels formed of undulating water or ice crystals whirling in the shape of a jellyfish. The guardians flow around combatants and don't occupy a space. They attempt to intercept all dangers, granting you and your allies within your kinetic aura a +1 status bonus to AC and saving throws.</p>\n<p>If any creature affected is critically hit or critically fails at a saving throw against an attack, effect from an enemy, or hazard and remains above 0 HP, the guardians reach out to heal that creature. The creature regains 4d8+8 HP, and the impulse ends. If the creature is in water, the healing dice are d10s instead of d8s.</p>\n<hr />\n<p><strong>Level (+3)</strong> The healing increases by 1d8+4.</p>\n<p>[[/r ((floor((max(12,@actor.level)-12)/3)+4)d8+(floor((max(12,@actor.level)-12)/3)*4+8))[healing]]]{Leveled HP}</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Sea Glass Guardians",
                        },
                    ],
                    key: "Aura",
                    predicate: ["self:effect:kinetic-aura"],
                    radius: "@actor.flags.pf2e.kineticist.auraRadius",
                    slug: "kinetic-aura",
                    traits: ["kineticist", "primal", "water"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-shattershields": {
        _id: "Njb4eLx5VngDIDpo",
        img: "icons/skills/melee/shield-damaged-broken-brown.webp",
        name: "Stance: Shattershields",
        system: {
            badge: { max: 4, min: 0, type: "counter", value: 4 },
            description: {
                value:
                    "<p>Four plates of pitted metal float around you to intercept attacks. You and allies in your kinetic aura gain a +1 circumstance bonus to AC.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 12 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "Compendium.pf2e.feat-effects.Item.Effect: Shattershields",
                        },
                    ],
                    key: "Aura",
                    predicate: ["self:effect:kinetic-aura"],
                    radius: "@actor.flags.pf2e.kineticist.auraRadius",
                    slug: "kinetic-aura",
                    traits: ["kineticist", "primal", "metal"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-shooting-stars-stance": {
        _id: "RXbfq6oqzVnW6xOV",
        img: "systems/pf2e/icons/equipment/weapons/shuriken.webp",
        name: "Stance: Shooting Stars Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Shooting Stars Stance]</p>\n<p>You enter a stance that lets you throw shuriken with lightning speed.</p>\n<p>While in this stance, you can use your monk feats or monk abilities that normally require unarmed attacks with shuriken instead.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-six-pillars-stance": {
        _id: "P80mwvCAEncR2snK",
        img: "systems/pf2e/icons/features/feats/six-pillars-stance.webp",
        name: "Stance: Six Pillars Stance",
        system: {
            description: {
                value:
                    "<p>@UUID[Compendium.pf2e.feats-srd.Item.Six Pillars Stance]</p>\n<p><strong>Requirements</strong> You are unarmored.</p>\n<hr />\n<p>You stand firm, steeling your mind and body, allowing you to use your magic unperturbed. While in this stance, you gain a +4 circumstance bonus to AC against reactions triggered by using actions with the concentrate or manipulate traits. In addition, when you cast a spell that requires one or more actions while in this stance, your unarmed Strikes gain a +1 circumstance bonus to damage.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #167: Ready? Fight!",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Guarding against reactions",
                    option: "vs-reaction",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "Six Pillars vs. reactions",
                    predicate: ["vs-reaction"],
                    selector: "ac",
                    type: "circumstance",
                    value: 4,
                },
                {
                    key: "FlatModifier",
                    label: "six-pillars-damage",
                    predicate: ["unarmed", "sp-cast-spell"],
                    selector: "strike-damage",
                    type: "circumstance",
                    value: 1,
                },
                {
                    domain: "damage",
                    key: "RollOption",
                    label: "Casting a 1+ action spell",
                    option: "sp-cast-spell",
                    toggleable: true,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-sky-and-heaven-stance": {
        _id: "CQfkyJkRHw4IHWhv",
        img: "systems/pf2e/icons/features/feats/sky-and-heaven-stance.webp",
        name: "Stance: Sky and Heaven Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Sky and Heaven Stance]</p>\n<p>Your jagged blows are like lightning. The only Strikes you can make are skyward slash unarmed attacks. These unarmed attacks deal 1d10 slashing damage; are in the brawling group; and have the nonlethal, unarmed, and versatile P traits. While in Sky and Heaven Stance, you gain resistance 2 to electricity and resistance 2 to sonic damage. These resistances increase to 5 at 12th level and to 8 at 18th level.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 6 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d10" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/sky-and-heaven-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.SkywardSlash",
                    range: null,
                    replaceAll: true,
                    traits: ["versatile-p", "unarmed", "nonlethal"],
                },
                {
                    key: "Resistance",
                    type: ["electricity", "sonic"],
                    value: {
                        brackets: [
                            { end: 11, value: 2 },
                            { end: 17, start: 12, value: 5 },
                            { start: 18, value: 8 },
                        ],
                    },
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-steam-knight": {
        _id: "cmCLIMgtd4TLA23p",
        img: "icons/magic/air/fog-gas-smoke-swirling-white.webp",
        name: "Stance: Steam Knight",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Steam Knight]</p>\n<p>You shape your kinetic aura into swirling armor of steam that scalds your enemies and propels you on super-heated jet streams. A creature can take damage from Steam Knight only once per round. Your steam armor has the following effects.</p>\n<ul>\n<li>You gain a +10-foot status bonus to your Speed.</li>\n<li>When you @UUID[Compendium.pf2e.actionspf2e.Item.Leap], you can jump up to your Speed. You don't immediately fall at the end of a jump, provided you Leap again with your next action. If you Leap over a creature and come within 10 feet, that creature takes @Damage[(floor((@actor.level -6)/5)+2)d6[fire]] damage with a @Check[type:reflex|dc:resolve(@actor.system.proficiencies.classDCs.kineticist.dc)|basic:true] save against your class DC.</li>\n<li>At the start of each of your turns, you can emit steam as a free action. It deals @Damage[(floor((@actor.level -6)/5)+2)d6[fire]] damage to each creature in your kinetic aura with a @Check[type:reflex|dc:resolve(@actor.system.attributes.classDC.value)|basic:true] save against your class DC. A creature that fails is also pushed 5 feet.<hr />\n<p><strong>Level (+5)</strong> The fire damage from a jump or blast of steam increases by 1d6.</p>\n</li>\n</ul>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [{ key: "FlatModifier", selector: "speed", value: 10 }],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-stoked-flame-stance": {
        _id: "rp1YauUSULuqW8rs",
        img: "icons/magic/fire/blast-jet-stream-embers-red.webp",
        name: "Stance: Stoked Flame Stance",
        system: {
            description: {
                value:
                    "<p><strong>Requirements</strong> You're unarmored.</p>\n<hr />\n<p>You enter a stance of fast, fiery movements. You can make flashing spark attacks that deal 1d8 slashing damage. They are in the brawling group and have the forceful, nonlethal, sweep, and unarmed traits. If you have access to the flashing sparks' critical specialization effect, you can take an alternate effect instead: if your critical Strike dealt damage, the target takes 1d6 persistent fire damage.</p>\n<p>While in Stoked Flame Stance, you gain a +5-foot status bonus to your Speed. If you have incredible movement, increase the benefit from incredible movement to a +15-foot status bonus plus 5 feet for every 4 levels beyond 3rd.</p>\n<hr />\n<p><strong>Special</strong> This feat gains your choice of either the divine or occult trait, matching your ki spell tradition if possible.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    key: "Note",
                    outcome: ["criticalSuccess"],
                    selector: "flashing-spark-damage",
                    text: "If you have access to the flashing sparks' critical specialization effect, you can take an alternate effect instead: if your critical Strike dealt damage, the target takes @Damage[1d6[persistent,fire]] damage.",
                    title: "PF2E.SpecificRule.Stance.Attack.FlashingSpark",
                },
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "icons/magic/fire/blast-jet-stream-embers-red.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.FlashingSpark",
                    range: null,
                    traits: ["forceful", "nonlethal", "sweep", "unarmed"],
                },
                {
                    key: "FlatModifier",
                    selector: "land-speed",
                    type: "status",
                    value: 5,
                },
                {
                    key: "AdjustModifier",
                    mode: "add",
                    selector: "land-speed",
                    slug: "incredible-movement",
                    value: 5,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-stonestrike-stance": {
        _id: "RDKbWKphiD9ippAv",
        img: "systems/pf2e/icons/features/feats/accursed-clay-fist.webp",
        name: "Stance: Stonestrike Stance",
        system: {
            description: {
                value:
                    "<p>You enter the stance of unyielding stone and draw upon the power of the living rock, encasing your fists in stone and allowing you to make stonestrike attacks. These deal 1d8 bludgeoning damage, are in the brawling group, and have the forceful, magical, and unarmed traits.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 2 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #195: Heavy is the Crown",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/accursed-clay-fist.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.Stonestrike",
                    range: null,
                    replaceAll: true,
                    slug: "stonestrike",
                    traits: ["forceful", "magical", "unarmed"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-stumbling-stance": {
        _id: "BCyGDKcplkJiSAKJ",
        img: "systems/pf2e/icons/features/feats/stumbling-stance.webp",
        name: "Stance: Stumbling Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Stumbling Stance]</p>\n<p>You enter a seemingly unfocused stance that mimics the movements of the inebriated—bobbing, weaving, leaving false openings, and distracting your enemies from your true movements. While in this stance, you gain a +1 circumstance bonus to Deception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Feint].</p>\n<p>The only Strikes you can make are stumbling swing unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the agile, backstabber, finesse, nonlethal, and unarmed traits. If an enemy hits you with a melee Strike while in this stance, it becomes off-guard against the next stumbling swing Strike you make against it before the end of your next turn.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/stumbling-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.StumblingSwing",
                    range: null,
                    replaceAll: true,
                    traits: ["agile", "backstabber", "finesse", "unarmed", "nonlethal"],
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:feint"],
                    selector: "deception",
                    type: "circumstance",
                    value: 1,
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-tangled-forest-stance": {
        _id: "PMHwCrnh9W4sMu5b",
        img: "systems/pf2e/icons/features/feats/tangled-forest-stance.webp",
        name: "Stance: Tangled Forest Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tangled Forest Stance]</p>\n<p>You extend your arms like gnarled branches to interfere with your foes' movements. You can make lashing branch unarmed attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.</p>\n<p>While you're in Tangled Forest Stance and can act, every enemy in your reach that tries to move away from you must succeed at a Reflex save, Acrobatics check, or Athletics check against your class DC or be immobilized for that action. If you prefer, you can allow the enemy to move.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/tangled-forest-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.LashingBranch",
                    range: null,
                    traits: ["agile", "finesse", "unarmed", "nonlethal"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-tenacious-stance": {
        _id: "Ms6WPXRWfXb2KpG2",
        img: "icons/magic/earth/strike-fist-stone-light.webp",
        name: "Stance: Tenacious Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.actionspf2e.Item.Tenacious Stance]</p>\n<p>You gain a number of temporary Hit Points equal to half your level (minimum 1) and a +2 circumstance bonus to DCs against being Shoved and Tripped.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: [{ or: ["action:shove", "action:trip"] }],
                    selector: ["fortitude", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
                { key: "TempHP", value: "max(1,floor(@actor.level/2))" },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-thermal-nimbus": {
        _id: "2EMak2C8x6pFwoUi",
        img: "systems/pf2e/icons/spells/breath-of-drought.webp",
        name: "Stance: Thermal Nimbus",
        system: {
            description: {
                value:
                    "<p>Choose cold or fire. You and allies in your kinetic aura gain resistance equal to your level to damage of that type.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 4 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.TraitCold",
                            value:
                                "Compendium.pf2e.feat-effects.Item.Effect: Thermal Nimbus (Cold)",
                        },
                        {
                            label: "PF2E.TraitFire",
                            value:
                                "Compendium.pf2e.feat-effects.Item.Effect: Thermal Nimbus (Fire)",
                        },
                    ],
                    flag: "damage",
                    key: "ChoiceSet",
                    predicate: ["self:effect:kinetic-aura"],
                    prompt: "PF2E.SpecificRule.Prompt.DamageType",
                },
                {
                    effects: [
                        {
                            affects: "allies",
                            events: ["enter"],
                            uuid: "{item|flags.pf2e.rulesSelections.damage}",
                        },
                    ],
                    key: "Aura",
                    predicate: ["self:effect:kinetic-aura"],
                    radius: "@actor.flags.pf2e.kineticist.auraRadius",
                    slug: "kinetic-aura",
                    traits: ["kineticist", "primal", "fire"],
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-tiger-stance": {
        _id: "pf9yvKNg6jZLrE30",
        img: "icons/creatures/abilities/lion-roar-yellow.webp",
        name: "Stance: Tiger Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Tiger Stance]</p>\n<p>You enter the stance of a tiger and can make tiger claw attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.</p>\n<p>On a critical success with your tiger claws, if you deal damage, the target takes @Damage[1d4[bleed]].</p>\n<p>As long as your Speed is at least 20 feet while in Tiger Stance, you can Step 10 feet.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "icons/creatures/abilities/lion-roar-yellow.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.TigerClaw",
                    range: null,
                    slug: "tiger-claw",
                    traits: ["agile", "finesse", "unarmed", "nonlethal"],
                },
                {
                    critical: true,
                    damageType: "bleed",
                    diceNumber: 1,
                    dieSize: "d4",
                    key: "DamageDice",
                    selector: "tiger-claw-damage",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-twinned-defense": {
        _id: "3eHMqVx30JGiJqtM",
        img: "systems/pf2e/icons/features/classes/master-tricks.webp",
        name: "Stance: Twinned Defense",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Twinned Defense (Fighter)] or @UUID[Compendium.pf2e.feats-srd.Item.Twinned Defense (Swashbuckler)]</p>\n<hr />\n<p><strong>Requirements</strong> You are wielding two melee weapons, one in each hand</p>\n<hr />\n<p>You're always ready to use your off-hand weapon to interfere with attacks against you. While you are in this stance, you constantly gain the benefits of the @UUID[Compendium.pf2e.feats-srd.Item.Twin Parry] action.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.UI.RuleElements.ChoiceSet.NoLabel", value: 1 },
                        { label: "PF2E.UI.RuleElements.ChoiceSet.YesLabel", value: 2 },
                    ],
                    flag: "acBonus",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.TwinnedDefense.Prompt",
                },
                {
                    key: "FlatModifier",
                    selector: "ac",
                    type: "circumstance",
                    value: "{item|flags.pf2e.rulesSelections.acBonus}",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-vitality-manipulation-stance": {
        _id: "h45sUZFs5jhuQdCE",
        img: "icons/magic/unholy/beam-ringed-impact-purple.webp",
        name: "Stance: Vitality-Manipulation Stance",
        system: {
            description: {
                value:
                    "<p>You have learned to attack meridians and pressure points like your rival Shino Hakusa. You gain a vitality blast ranged unarmed Strike that deals @Damage[1d4[void]] damage, has a range of 30 feet, and has the unarmed and versatile positive traits.</p>\n<p>Additionally, when you use Stunning Fist, instead of saving against being stunned, you can choose to have the target make a Fortitude save against your class DC with the following results. You must choose to do this before the target rolls its save.</p>\n<hr />\n<p><strong>Critical Success</strong> The target is unaffected.</p>\n<p><strong>Success</strong> The target's muscles become temporarily weaker. For 1 round, the target is @UUID[Compendium.pf2e.conditionitems.Item.Enfeebled]{Enfeebled 2}, and any time it attempts to take an action with the manipulate trait, the action is disrupted unless it succeeds at a flat check with a DC equal to 5 + its enfeebled value.</p>\n<p><strong>Failure</strong> As success, but the duration is 1 minute.</p>\n<p><strong>Critical Failure</strong> As success, but the duration is 1 minute, the flat check is DC 11, and the target takes -10-foot status penalty to all Speeds for the duration.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #168: King of the Mountain",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "void", dice: 1, die: "d4" } },
                    key: "Strike",
                    label: "PF2E.SpecificRule.VitalityManipulationStance.StrikeLabel",
                    range: { max: 30 },
                    traits: ["unarmed", "versatile-vitality"],
                },
                {
                    key: "Note",
                    predicate: ["stunning-fist"],
                    selector: "strike-damage",
                    text: "PF2E.SpecificRule.VitalityManipulationStance.Note",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-whirling-blade-stance": {
        _id: "JefXqvhzUeBArkAP",
        img: "systems/pf2e/icons/equipment/weapons/buugeng.webp",
        name: "Stance: Whirling Blade Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Whirling Blade Stance]</p>\n<p>You enter a mindful stance that creates a deep connection between you and your monk weapons, allowing you to manipulate them with your ki even at a distance.</p>\n<p>All melee Monk weapons you wield with the finesse trait gain the thrown 10 feet trait (unless they already have the thrown trait with a greater range).</p>\n<p>Once you've made a thrown Strike with such a weapon, you can use the precision of your throw to make additional Strikes with it, even from a distance. Start from the space of the previous Strike's target to determine the range increment and whether the new target has cover. At the end of your turn, the thrown weapon flies directly back to you in a straight line. If a solid barrier blocks its path, it falls to the ground after hitting the barrier.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-whirlwind-stance": {
        _id: "q6UokHWSEcEYWmvh",
        img: "systems/pf2e/icons/spells/whirlwind.webp",
        name: "Stance: Whirlwind Stance",
        system: {
            description: {
                value:
                    "<p>Granted by: @UUID[Compendium.pf2e.feats-srd.Item.Whirlwind Stance]</p>\n<hr />\n<p><strong>Requirements</strong> You are wielding your staff, which must have the parry trait.</p>\n<hr />\n<p>You use your staff as a defensive implement as well as an offensive one. You gain a +2 circumstance bonus to AC as long as you remain in this stance.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "unlimited",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #151: The Show Must Go On",
            },
            rules: [
                { key: "FlatModifier", selector: "ac", type: "circumstance", value: 2 },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-wild-winds-stance": {
        _id: "eeAlh6edygcZIz9c",
        img: "icons/magic/air/wind-tornado-funnel-blue-grey.webp",
        name: "Stance: Wild Winds Stance",
        system: {
            description: {
                value:
                    "<p>Granted by <em>@UUID[Compendium.pf2e.spells-srd.Item.Wild Winds Stance]</em></p>\n<p>You take on the stance of the flowing winds, sending out waves of energy at a distance.</p>\n<p>You can make wind crash unarmed Strikes as ranged Strikes against targets within 30 feet. These deal 1d6 bludgeoning damage, use the brawling group, and have the agile, nonlethal, propulsive, and unarmed traits. Wind crash Strikes ignore concealment and all cover.</p>\n<p>While in wild winds stance, you gain a +2 circumstance bonus to AC against ranged attacks.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/magic/air/wind-tornado-funnel-blue-grey.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.WindCrash",
                    range: { increment: 30 },
                    traits: ["agile", "propulsive", "unarmed", "nonlethal"],
                },
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Wild Wind Stance (vs. ranged attack)",
                    option: "wild-wind",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "Wild Winds Stance (vs. ranged attacks)",
                    predicate: ["wild-wind"],
                    selector: "ac",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "Note",
                    selector: "wind-crash-attack",
                    text: "Wind crash strikes ignore concealment and all cover",
                    title: "Wild Wind Stance",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
    "stance-winter-sleet": {
        _id: "lge4vtZdfZOCWAch",
        img: "icons/magic/water/projectile-icecicles-salvo.webp",
        name: "Stance: Winter Sleet",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Winter Sleet]</p>\n<p>Bone-chilling, swirling sleet surrounds you, cruel as deepest winter. Surfaces in your kinetic aura are coated in slippery ice. A creature that moves on this uneven ground immediately falls unless it @UUID[Compendium.pf2e.actionspf2e.Item.Balance]{Balances} (DC 15). A creature is @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] on the ice, as normal for uneven ground. You're immune to these effects.</p>\n<p>If a creature on the ice is critically hit by one of your water impulses or critically fails at a save against one, that creature is @UUID[Compendium.pf2e.conditionitems.Item.Slowed]{Slowed 1} until the end of its next turn.</p>",
            },
            duration: {
                expiry: null,
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 1 },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { value: [] },
        },
        type: "effect",
    },
    "stance-wolf-stance": {
        _id: "b2kWJuCPj1rDMdwz",
        img: "systems/pf2e/icons/features/feats/wolf-stance.webp",
        name: "Stance: Wolf Stance",
        system: {
            description: {
                value:
                    "<p>Granted by @UUID[Compendium.pf2e.feats-srd.Item.Wolf Stance]</p>\n<p>You enter the stance of a wolf, low to the ground with your hands held like fanged teeth. You can make wolf jaw unarmed attacks. These deal 1d8 piercing damage; are in the brawling group; and have the agile, backstabber, finesse, nonlethal, and unarmed traits.</p>\n<p>If you're flanking a target while in Wolf Stance, your wolf jaw unarmed attacks also gain the trip trait.</p>",
            },
            duration: {
                expiry: "turn-start",
                sustained: false,
                unit: "encounter",
                value: -1,
            },
            level: { value: 0 },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d8" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/feats/wolf-stance.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Stance.Attack.WolfJaws",
                    range: null,
                    slug: "wolf-jaws",
                    traits: ["agile", "backstabber", "finesse", "unarmed", "nonlethal"],
                },
                {
                    definition: ["item:wolf-jaws"],
                    key: "AdjustStrike",
                    mode: "add",
                    predicate: ["self:flanking"],
                    property: "weapon-traits",
                    value: "trip",
                },
            ],
            start: { initiative: null, value: 0 },
            tokenIcon: { show: true },
            traits: { rarity: "common", value: [] },
        },
        type: "effect",
    },
};
