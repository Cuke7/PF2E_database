const heritages_data = {
    "adaptive-anadi": {
        _id: "7gGcpQMqnZhBDZLI",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Adaptive Anadi",
        system: {
            ancestry: {
                name: "Anadi",
                slug: "anadi",
                uuid: "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
            },
            description: {
                value:
                    "<p>You descend from a line of anadi who worked to perfect their transformation magic, allowing them to integrate into a wider variety of cultures. Choose a common, Medium humanoid ancestry. Your human form is replaced with a form that matches this choice. You also gain the @UUID[Compendium.pf2e.feats-srd.Item.Adopted Ancestry] feat for your chosen humanoid ancestry.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Adopted Ancestry",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    aiuvarin: {
        _id: "N36ZR4lh9eCazDaN",
        img: "systems/pf2e/icons/features/ancestry/half-elf.webp",
        name: "Aiuvarin",
        system: {
            ancestry: {
                name: "Human",
                slug: "human",
                uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
            },
            description: {
                value:
                    "<p>You have elves, or possibly other aiuvarins, in your family tree. You have pointed ears and other telltale signs of elf heritage. You gain the elf trait, the aiuvarin trait, and low-light vision. In addition, when you gain an ancestry feat, you can choose from aiuvarin and elf feats in addition to those from your ancestry.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { key: "Sense", selector: "lowLightVision" },
                { add: ["elf", "half-elf"], key: "ActorTraits" },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.details.ancestry.versatile",
                    value: "elf",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.details.ancestry.countsAs",
                    value: "elf",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.details.ancestry.countsAs",
                    value: "half-elf",
                },
            ],
            traits: { rarity: "common", value: ["half-elf"] },
        },
        type: "heritage",
    },
    "ancient-ash": {
        _id: "CMf0qluB0LXWReew",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ancient Ash",
        system: {
            ancestry: {
                name: "Ghoran",
                slug: "ghoran",
                uuid: "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
            },
            description: {
                value:
                    "<p>Your memory is sharp and clear, and you remember so much. You remember the calm before the storm and the soil after the rain, the acrid tang of magic and the whisper of a song. You remember it all. You become trained in one skill of your choice. At 5th level, you become an expert in that skill.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SkillAcr",
                            predicate: ["skill:acr:rank:0"],
                            value: "acr",
                        },
                        {
                            label: "PF2E.SkillArc",
                            predicate: ["skill:arc:rank:0"],
                            value: "arc",
                        },
                        {
                            label: "PF2E.SkillAth",
                            predicate: ["skill:ath:rank:0"],
                            value: "ath",
                        },
                        {
                            label: "PF2E.SkillCra",
                            predicate: ["skill:cra:rank:0"],
                            value: "cra",
                        },
                        {
                            label: "PF2E.SkillDec",
                            predicate: ["skill:dec:rank:0"],
                            value: "dec",
                        },
                        {
                            label: "PF2E.SkillDip",
                            predicate: ["skill:dip:rank:0"],
                            value: "dip",
                        },
                        {
                            label: "PF2E.SkillItm",
                            predicate: ["skill:itm:rank:0"],
                            value: "itm",
                        },
                        {
                            label: "PF2E.SkillMed",
                            predicate: ["skill:med:rank:0"],
                            value: "med",
                        },
                        {
                            label: "PF2E.SkillNat",
                            predicate: ["skill:nat:rank:0"],
                            value: "nat",
                        },
                        {
                            label: "PF2E.SkillOcc",
                            predicate: ["skill:occ:rank:0"],
                            value: "occ",
                        },
                        {
                            label: "PF2E.SkillPrf",
                            predicate: ["skill:prf:rank:0"],
                            value: "prf",
                        },
                        {
                            label: "PF2E.SkillRel",
                            predicate: ["skill:rel:rank:0"],
                            value: "rel",
                        },
                        {
                            label: "PF2E.SkillSoc",
                            predicate: ["skill:soc:rank:0"],
                            value: "soc",
                        },
                        {
                            label: "PF2E.SkillSte",
                            predicate: ["skill:ste:rank:0"],
                            value: "ste",
                        },
                        {
                            label: "PF2E.SkillSur",
                            predicate: ["skill:sur:rank:0"],
                            value: "sur",
                        },
                        {
                            label: "PF2E.SkillThi",
                            predicate: ["skill:thi:rank:0"],
                            value: "thi",
                        },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: {
                        brackets: [
                            { end: 4, value: 1 },
                            { start: 5, value: 2 },
                        ],
                    },
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "ancient-blooded-dwarf": {
        _id: "yL6944LrPo2HNdEJ",
        img: "systems/pf2e/icons/features/ancestry/ancient-blooded-dwarf.webp",
        name: "Ancient-Blooded Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manifests in you. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Call on Ancient Blood] reaction.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Call on Ancient Blood",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "ancient-elf": {
        _id: "Nd9hdX8rdYyRozw8",
        img: "systems/pf2e/icons/features/ancestry/ancient-elf.webp",
        name: "Ancient Elf",
        system: {
            ancestry: {
                name: "Elf",
                slug: "elf",
                uuid: "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
            },
            description: {
                value:
                    "<p>In your long life, you've dabbled in many paths and many styles. A typical ancient elf is at least 100 years old, though you might be younger at the GM's discretion. Choose a class other than your own. You gain the multiclass dedication feat for that class, even though you don't meet its level prerequisite. You must still meet its other prerequisites to gain the feat.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    choices: {
                        filter: [
                            "item:category:class",
                            "item:trait:dedication",
                            "item:trait:multiclass",
                        ],
                        itemType: "feat",
                    },
                    flag: "ancientElf",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.AncientElf.Prompt",
                },
                {
                    key: "GrantItem",
                    uuid: "{item|flags.pf2e.rulesSelections.ancientElf}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "ancient-scale-azarketi": {
        _id: "zPhArF36ZVgLeVUU",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ancient Scale Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>Your lineage stems from azarketis who remain dedicated to their deep-sea roots. Divorced from land society, you're a foreigner to any world above a thousand fathoms deep. You gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision].</p>\n<p>Your body is dotted with phosphorescent spots that emit a guiding light and help you communicate. The spots - located primarily on your face, arms, and hands - illuminate a 10-foot radius around you with dim light. You can activate, deactivate, or change the arrangement of lights as an action, which has the concentration trait.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
            },
            rules: [{ key: "Sense", selector: "darkvision" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "ant-gnoll": {
        _id: "udMXXjFirjARYr4p",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ant Gnoll",
        system: {
            ancestry: {
                name: "Gnoll",
                slug: "gnoll",
                uuid: "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
            },
            description: {
                value:
                    "<p>You're a sharp-featured, big-eared gnoll about three feet tall. Many are skeptical that you are in fact a gnoll. Your size is Small instead of Medium. You are trained in Deception (or another skill if you were already trained in Deception). You gain a +1 circumstance bonus to Deception checks to Lie when specifically claiming innocence, to Deception DCs against Sense Motive checks to uncover such lies, and to initiative checks when you roll Deception for initiative.</p>\n<hr />\n<p><em>Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill.</em></p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["deception"],
                    selector: "initiative",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    label: "Lying to Claim Innocence",
                    predicate: ["action:lie"],
                    selector: "deception",
                    type: "circumstance",
                    value: 1,
                },
                { key: "CreatureSize", value: "sm" },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.dec.rank",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "anvil-dwarf": {
        _id: "kRDsVbhdBVeSlpBa",
        img: "systems/pf2e/icons/features/ancestry/anvil-dwarf.webp",
        name: "Anvil Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>You are a descendant of a famed crafter and have your own amazing talent. Other dwarves might consider this a blessing from your ancestors or from the Forgefather himself, depending on where you grew up. You become trained in Crafting (or another skill if you were already trained in Crafting) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat, but you can pick two different specialties instead of one.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.cra.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    aphorite: {
        _id: "lj5iHaiY0IwCCptd",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Aphorite",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>You were born with a connection to Axis, the Plane of Law. You gain the aphorite trait, in addition to the traits from your ancestry. You also gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision], or you gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision] if your ancestry already has low-light vision. You can choose from aphorite feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { add: ["aphorite"], key: "ActorTraits" },
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: ["aphorite"] },
        },
        type: "heritage",
    },
    "arctic-elf": {
        _id: "1dYDucCIaZpCJqBc",
        img: "systems/pf2e/icons/features/ancestry/artic-elf.webp",
        name: "Arctic Elf",
        system: {
            ancestry: {
                name: "Elf",
                slug: "elf",
                uuid: "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
            },
            description: {
                value:
                    "<p>You dwell deep in the frozen north and have gained incredible resilience against cold environments, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    ardande: {
        _id: "jAX7yavR4lNKwDK8",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ardande",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>You descend from wood elementals or have some other heritage influenced by the elemental Plane of Wood. You might have green, mossy skin, vines that grow from your head instead of hair, or thin appendages that resemble twigs. You gain the ardande trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision.</p>\n<p>You can choose from ardande feats, geniekin feats, and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: ["ardande"] },
        },
        type: "heritage",
    },
    "artisan-android": {
        _id: "VgL18yU7pysdoZZG",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Artisan Android",
        system: {
            ancestry: {
                name: "Android",
                slug: "android",
                uuid: "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
            },
            description: {
                value:
                    "<p>Your body was originally designed to create works of art, complex tools, or maintain advanced machinery. You become trained in Crafting (or another skill if you're already trained in Crafting), and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat in a specialty of your choice.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.cra.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    athamasi: {
        _id: "CnCFZfuKzAYqy61e",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Athamasi",
        system: {
            ancestry: {
                name: "Kashrishi",
                slug: "kashrishi",
                uuid: "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
            },
            description: {
                value:
                    "<p>You have a set of small secondary arms adapted for climbing and hanging from trees. You can't hold or retrieve objects with these limbs, but you can Climb or @UUID[Compendium.pf2e.actionspf2e.Item.Grab an Edge] even if one or both of your primary hands are full. You aren't @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] while Climbing.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "badlands-orc": {
        _id: "8Gsa8KFsHizEwSHU",
        img: "systems/pf2e/icons/features/ancestry/badlands-orc.webp",
        name: "Badlands Orc",
        system: {
            ancestry: {
                name: "Orc",
                slug: "orc",
                uuid: "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
            },
            description: {
                value:
                    "<p>You come from sun-scorched badlands, where long legs and an ability to withstand the elements helped you thrive. You can @UUID[Compendium.pf2e.actionspf2e.Item.Hustle] twice as long while exploring before you have to stop, and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "bandaagee-vanara": {
        _id: "ClshvrjvBTMm3INX",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Bandaagee Vanara",
        system: {
            ancestry: {
                name: "Vanara",
                slug: "vanara",
                uuid: "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
            },
            description: {
                value:
                    "<p>Your family is one of many who claims to be descended from the regal vanara peacekeeping family called the Bandaagee. Bandaagee are the most common kind of vanaras. You're very familiar with the trappings of civilization and move easily through the most crowded communities. You ignore difficult terrain from crowds.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "battle-ready-orc": {
        _id: "nXQxlmjH24Eb8h2Q",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Battle-Ready Orc",
        system: {
            ancestry: {
                name: "Orc",
                slug: "orc",
                uuid: "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
            },
            description: {
                value:
                    "<p>You descend from a line of terrifying battlefield commanders. You become trained in Intimidation, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.itm.rank",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "battle-trained-human-bb": {
        _id: "d7NC4C19AgkspQQg",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Battle-Trained Human (BB)",
        system: {
            ancestry: {
                name: "Human",
                slug: "human",
                uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
            },
            description: {
                value:
                    "<p>Your family has trained in battle for generations, granting you advantages in a fight. You are trained in all martial weapons..</p>\n<p>In addition, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] feat.</p>\n<p><em>Note: This heritage is from the Beginner Box and features non-standard heritage features</em></p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Beginner Box",
            },
            rules: [
                { key: "GrantItem", uuid: "Compendium.pf2e.feats-srd.Item.Diehard" },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.proficiencies.attacks.martial.rank",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    beastkin: {
        _id: "GAn2cdhBE9Bqa85s",
        img: "systems/pf2e/icons/features/ancestry/beastkin.webp",
        name: "Beastkin",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>The blood of a beast flows through your veins, granting you the ferocity and might of animals. Only creatures with the humanoid trait can take the beastkin versatile heritage. Choose a type of animal such as bat, eagle, shark, spider, tyrannosaurus, wasp, or wolf. This is the type of animal tied to your heritage and is known as your inherent animal. A beastkin's hybrid form is their natural shape. You gain the beast and beastkin traits, in addition to the traits from your ancestry.</p>\n<p>You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Change Shape (Beastkin)] ability. You can choose from beastkin feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { add: ["beast", "beastkin"], key: "ActorTraits" },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Change Shape (Beastkin)",
                },
            ],
            traits: { rarity: "rare", value: ["beastkin"] },
        },
        type: "heritage",
    },
    "benthic-azarketi": {
        _id: "HFHSh2RWuxa4GhhQ",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Benthic Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>Your heritage traces to azarketis living deep beneath the sea, and you can handle the chilling depths more easily than most. You gain resistance to cold equal to half your level, and you don't treat environmental cold as one degree more severe when you are wet. You adapt to pressure changes from being deep underwater automatically without ill effect.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
            },
            rules: [
                { key: "Resistance", type: "cold", value: "floor(@actor.level/2)" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "bloodhound-shoony": {
        _id: "z4cvqtpkkAYoFpHa",
        img: "systems/pf2e/icons/features/ancestry/bloodhound-shoony.webp",
        name: "Bloodhound Shoony",
        system: {
            ancestry: {
                name: "Shoony",
                slug: "shoony",
                uuid: "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
            },
            description: {
                value:
                    "<p>Your ancestors were famous trackers, and you carry in your blood that same gift of the hunt.</p>\n<p>You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the location of a creature, but it remains @UUID[Compendium.pf2e.conditionitems.Item.Hidden].</p>\n<p>In addition, you gain a +2 circumstance bonus to Survival checks to @UUID[Compendium.pf2e.actionspf2e.Item.Track] creatures that you have previously sensed with your scent.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #153: Life's Long Shadows",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Bloodhound Shoony (Track smelled creatures)",
                    predicate: ["action:track", "target:previously-smelled"],
                    selector: "survival",
                    type: "circumstance",
                    value: 2,
                },
                { acuity: "imprecise", key: "Sense", range: 30, selector: "scent" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "bright-fetchling": {
        _id: "wHO5luJMODbDLXNi",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Bright Fetchling",
        system: {
            ancestry: {
                name: "Fetchling",
                slug: "fetchling",
                uuid: "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
            },
            description: {
                value:
                    "<p>Your body proves that shadow can't exist without light. Perhaps your eyes glow brighter or your veins occasionally pulse with light. You emit dim light within 5 feet of you. You can activate or suppress this ability as an action, which has the concentrate trait. Additionally, you can force fragments of your shadow to glow and cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Dancing Lights]</em> and <em>@UUID[Compendium.pf2e.spells-srd.Item.Light]</em> as occult innate cantrips. Cantrips are heightened to a spell level equal to half your level rounded up.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "TokenLight",
                    predicate: ["bright-fetchling"],
                    value: { bright: 0, color: "#c4abab", dim: 5, shadows: 0.2 },
                },
                {
                    domain: "all",
                    key: "RollOption",
                    option: "bright-fetchling",
                    toggleable: true,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "cactus-leshy": {
        _id: "2cii5ZkBsJ4DYdd2",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Cactus Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>Spines cover your body. You gain a spine unarmed attack that deals 1d6 piercing damage. Your spines are in the brawling group and have the finesse and unarmed traits.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/unarmed-attacks/spine.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Spine",
                    range: null,
                    traits: ["finesse", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "cataphract-fleshwarp": {
        _id: "PQuJEYI0UFl8W7fH",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Cataphract Fleshwarp",
        system: {
            ancestry: {
                name: "Fleshwarp",
                slug: "fleshwarp",
                uuid: "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
            },
            description: {
                value:
                    "<p>Your battle-hardened skeleton is laced with additional cartilage and muscle to help bear armor across vast areas of operation, and your skin is bedecked with tiny spurs of pliable, resilient keratin to optimize the grip and weight distribution of your armor. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Armor Proficiency] feat.</p>\n<p>If your class makes you trained in all types of armor, you instead become trained in Athletics (or a skill of your choice if you're already trained in Athletics) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Armor Assist] skill feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Armor Proficiency",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "caveclimber-kobold": {
        _id: "5A1wMPdzN1OWE4cY",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Caveclimber Kobold",
        system: {
            ancestry: {
                name: "Kobold",
                slug: "kobold",
                uuid: "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
            },
            description: {
                value:
                    "<p>You live in a vertically-oriented home, and you're a consummate climber. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat, even if you don't meet the prerequisites. You can use your clawed feet and tail to Climb, leaving your hands free. Additionally, if you succeed at an Athletics check to Climb, you critically succeed instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:climb"],
                    selector: "athletics",
                },
                {
                    key: "Note",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    text: "When you roll a success to Climb, you get a critical success instead.",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "cavern-elf": {
        _id: "NfIAGatB1KIzt8G7",
        img: "systems/pf2e/icons/features/ancestry/caveren-elf.webp",
        name: "Cavern Elf",
        system: {
            ancestry: {
                name: "Elf",
                slug: "elf",
                uuid: "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
            },
            description: {
                value:
                    "<p>You were born or spent many years in underground tunnels or caverns where light is scarce. You gain darkvision.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [{ key: "Sense", selector: "darkvision" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "cavern-kobold": {
        _id: "35k2aujXYvqUCSS1",
        img: "systems/pf2e/icons/features/ancestry/cavern-kobold.webp",
        name: "Cavern Kobold",
        system: {
            ancestry: {
                name: "Kobold",
                slug: "kobold",
                uuid: "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
            },
            description: {
                value:
                    "<p>You hatched into a warren among narrow tunnels and countless kin. Your body is flexible.</p>\n<p>When @UUID[Compendium.pf2e.actionspf2e.Item.Climb]{Climbing} rock walls, stalactites, and other natural stone features, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have @UUID[Compendium.pf2e.feats-srd.Item.Quick Climb]). This doesn't affect you if you're using a climb Speed.</p>\n<p>If you roll a success on an Acrobatics check to @UUID[Compendium.pf2e.actionspf2e.Item.Squeeze], you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["action:climb", "natural-stone"],
                    selector: "athletics",
                    text: "When you climb natural stone, you move at half your Speed on a success, and full speed on a critical success.",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    predicate: ["action:squeeze"],
                    selector: "acrobatics",
                    text: "When you roll a success to Squeeze, you get a critical success instead.",
                    title: "{item|name}",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:squeeze"],
                    selector: "acrobatics",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "celestial-envoy-kitsune": {
        _id: "IFg2tqmAFFnU8UNU",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Celestial Envoy Kitsune",
        system: {
            ancestry: {
                name: "Kitsune",
                slug: "kitsune",
                uuid: "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
            },
            description: {
                value:
                    "<p>Whether due to Daikitsu's grace or faithful forebears, you have a strong connection to the divine, affording you certain protections. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Invoke Celestial Privilege] reaction. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Invoke Celestial Privilege",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "chameleon-gnome": {
        _id: "XeXWsvcWU3Zaj5WC",
        img: "systems/pf2e/icons/features/ancestry/chameleon-gnome.webp",
        name: "Chameleon Gnome",
        system: {
            ancestry: {
                name: "Gnome",
                slug: "gnome",
                uuid: "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
            },
            description: {
                value:
                    "<p>The color of your hair and skin is mutable, possibly due to latent magic from First World influences or lingering illusion effects. You can slowly change the vibrancy and the exact color, and the coloration can be different across your body, allowing you to create patterns or other colorful designs. It takes a single action for minor localized shifts and up to an hour for dramatic shifts throughout your body. While you're asleep, the colors shift on their own in tune with your dreams, giving you an unusual coloration each morning. When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the single action to make minor localized shifts designed to help you blend into your surroundings. This grants you a +2 circumstance bonus to Stealth checks until your surroundings shift in coloration or pattern.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["coloration-matches"],
                    selector: "stealth",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    changeling: {
        _id: "EKY9v7SF1hVsUdbH",
        img: "systems/pf2e/icons/features/ancestry/changeling.webp",
        name: "Changeling",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>Your mother was a hag. Your eyes' heterochromia is the most obvious signifier of this parentage, but you likely also have a slighter build, paler skin, and darker hair than most members of your other parent's ancestry. You gain the changeling trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from changeling feats and feats from your other parent's ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { add: ["changeling"], key: "ActorTraits" },
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: ["changeling"] },
        },
        type: "heritage",
    },
    "charhide-goblin": {
        _id: "32oX6hHUY6K8N70Q",
        img: "systems/pf2e/icons/features/ancestry/charhide-goblin.webp",
        name: "Charhide Goblin",
        system: {
            ancestry: {
                name: "Goblin",
                slug: "goblin",
                uuid: "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
            },
            description: {
                value:
                    "<p>Your ancestors have always had a connection to fire and a thicker skin, which allows you to resist burning. You gain fire resistance equal to half your level (minimum 1). You can also recover from being on fire more easily. Your flat check to remove persistent fire damage is DC 10 instead of DC 15, which is reduced to @Check[type:flat|dc:5] if another creature uses a particularly appropriate action to help.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    itemType: "condition",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:damage:type:fire"],
                    property: "pd-recovery-dc",
                    value: 10,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "clawed-catfolk": {
        _id: "bLhIBwqdjTiVJ5qm",
        img: "systems/pf2e/icons/features/ancestry/clawed-catfolk.webp",
        name: "Clawed Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>Your family has particularly long, sharp claws capable of delivering bleeding wounds with a wicked swipe. You gain a claw unarmed attack that deals @Damage[1d6[slashing]] damage. Your claws are in the brawling group and have the agile, finesse and unarmed traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    baseType: "claw",
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d6" } },
                    group: "brawling",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.claw",
                    range: null,
                    traits: ["finesse", "unarmed", "agile"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "cliffscale-lizardfolk": {
        _id: "OoUqJJB77VfWbWRM",
        img: "systems/pf2e/icons/features/ancestry/cliifscale-lizardfolk.webp",
        name: "Cliffscale Lizardfolk",
        system: {
            ancestry: {
                name: "Lizardfolk",
                slug: "lizardfolk",
                uuid: "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
            },
            description: {
                value:
                    "<p>Your toes are adapted for gripping and climbing.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] feat as a bonus feat, and as long as you aren't wearing footwear, you can use the sticky pads on your feet to climb, leaving your hands free.</p>\n<p>Additionally, if you roll a success on an Athletics check to climb, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    text: "When you roll a success to Climb, you get a critical success instead.",
                    title: "{item|name}",
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "cloudleaper-lizardfolk": {
        _id: "sEnMG5zbnXdJvVPz",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Cloudleaper Lizardfolk",
        system: {
            ancestry: {
                name: "Lizardfolk",
                slug: "lizardfolk",
                uuid: "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
            },
            description: {
                value:
                    "<p>Your body is light with flaps of skin along your limbs that catch the air that passes beneath you. As long as you can act and have enough room, you can open the flaps to slow any fall just enough to avoid taking damage (whether you have the room to do so depends on the GM's discretion).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "compact-skeleton": {
        _id: "mZqaKQkvadBbNubM",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Compact Skeleton",
        system: {
            ancestry: {
                name: "Skeleton",
                slug: "skeleton",
                uuid: "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
            },
            description: {
                value:
                    "<p>For tasks that require a lighter touch, gnome, goblin, and halfling remains are more suitable than a larger creature's. These smaller, nimbler skeletons fit well in a traveling chest, can be forced through tight spaces, and more easily avoid detection. Your size is Small instead of Medium. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Squeeze] feat, even if you aren't trained in Acrobatics. Tight spaces not tight enough to require the Squeeze activity aren't difficult terrain for you.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                { key: "CreatureSize", value: "small" },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Squeeze",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "created-fleshwarp": {
        _id: "iY2CCqoMc2bRdoas",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Created Fleshwarp",
        system: {
            ancestry: {
                name: "Fleshwarp",
                slug: "fleshwarp",
                uuid: "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
            },
            description: {
                value:
                    "<p>You were created through occult or alchemical processes, such as being grown in a vat or stitched together from the body parts of other creatures by a scientist in Ustalav. Your manufactured body is durable; you don't need to eat and can't starve. You gain a +2 circumstance bonus to saving throws against diseases.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.VsDiseases",
                    predicate: ["disease"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "dark-fields-kitsune": {
        _id: "NWbdAN5gDse0ad7C",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Dark Fields Kitsune",
        system: {
            ancestry: {
                name: "Kitsune",
                slug: "kitsune",
                uuid: "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
            },
            description: {
                value:
                    "<p>You can exert your unsettling presence to subtly Demoralize others. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don't take a penalty when you attempt to Demoralize a creature that doesn't understand your language. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Invigorating Fear] reaction. Your alternate form is a fox, which has the statistics of 1st-level <em>@UUID[Compendium.pf2e.spells-srd.Item.Pest Form]</em>.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Invigorating Fear",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "death-warden-dwarf": {
        _id: "VTtXwBxrfRUXSL38",
        img: "systems/pf2e/icons/features/ancestry/death-warden-dwarf.webp",
        name: "Death Warden Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>Your ancestors were tomb guardians, and their power to ward off death passed on to you. If you roll a success on a saving throw against an effect that has the void trait or was created by an undead creature, you get a critical success instead.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Note",
                    outcome: [],
                    predicate: [{ or: ["void", "origin:trait:undead"] }],
                    selector: "saving-throw",
                    text: "PF2E.SpecificRule.Dwarf.DeathWardenDwarf.Note",
                    title: "{item|name}",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: [{ or: ["void", "origin:trait:undead"] }],
                    selector: "saving-throw",
                    type: "save",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "deep-fetchling": {
        _id: "k4AU5tjtngDOIqrB",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Deep Fetchling",
        system: {
            ancestry: {
                name: "Fetchling",
                slug: "fetchling",
                uuid: "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
            },
            description: {
                value:
                    "<p>Your predecessors dwelled in the Shadow Plane's deepest, most treacherous regions. You might cast a denser shadow, have a slower pulse, or find comfort in the embrace of darkness. You gain cold or negative resistance equal to half your level (minimum 1), chosen when you gain this heritage.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitVoid", value: "void" },
                    ],
                    flag: "heritageDeepFetchling",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Fetchling.DeepFetchling.Prompt",
                },
                {
                    key: "Resistance",
                    type: "{item|flags.pf2e.rulesSelections.heritageDeepFetchling}",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "deep-orc": {
        _id: "wn4EbYk1QN3tyFhh",
        img: "systems/pf2e/icons/features/ancestry/deep-orc.webp",
        name: "Deep Orc",
        system: {
            ancestry: {
                name: "Orc",
                slug: "orc",
                uuid: "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
            },
            description: {
                value:
                    "<p>Your calloused hands and red eyes speak to a life spent in the deep darkness of mountain caverns, where you learned to battle on rocky cliffs and survive with minimal resources. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat for underground terrain and the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "GrantItem",
                    preselectChoices: { terrain: "underground" },
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "deep-rat": {
        _id: "7p9HtLzWBHc18JDW",
        img: "systems/pf2e/icons/features/ancestry/deep-rat.webp",
        name: "Deep Rat",
        system: {
            ancestry: {
                name: "Ratfolk",
                slug: "ratfolk",
                uuid: "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
            },
            description: {
                value:
                    "<p>Your ancestors lived deeper underground than other ratfolk, granting you the ability to see in the dark. You gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision].</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [{ key: "Sense", selector: "darkvision" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "desert-elf": {
        _id: "kiKxnKd7Dfegk9dM",
        img: "systems/pf2e/icons/features/ancestry/desert-elf.webp",
        name: "Desert Elf",
        system: {
            ancestry: {
                name: "Elf",
                slug: "elf",
                uuid: "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
            },
            description: {
                value:
                    "<p>You live under the desert's blazing heat, gaining incredible resilience to warm environments. You gain fire resistance equal to half your level (minimum 1), and environmental heat effects are one step less extreme for you (incredible heat becomes extreme, extreme heat becomes severe, and so on).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "desert-rat": {
        _id: "twayjFuXbsvyHUwy",
        img: "systems/pf2e/icons/features/ancestry/desert-rat.webp",
        name: "Desert Rat",
        system: {
            ancestry: {
                name: "Ratfolk",
                slug: "ratfolk",
                uuid: "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
            },
            description: {
                value:
                    "<p>You are native to arid plains and likely grew up traveling the roads. You have a leaner build than other ratfolk, with longer limbs and short fur. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours. In addition, environmental heat effects are one step less extreme for you, and you can go 10 times as long as normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["hands-free:2"],
                    selector: "land-speed",
                    value: 5,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    dhampir: {
        _id: "UaD5VDoFlILEmbyz",
        img: "systems/pf2e/icons/features/ancestry/dhampir.webp",
        name: "Dhampir",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>You are the scion of a vampire, half living and half undead, gifted with uncanny charm and grace, a bloodless pallor, and elongated incisors. You gain the dhampir trait, in addition to the traits from your ancestry. You have the negative healing ability, which means you are harmed by positive damage and healed by negative effects as if you were undead. You also gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision], or you gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision] if your ancestry already has low-light vision. You can choose from dhampir feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.hp.negativeHealing",
                    value: true,
                },
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
                { add: ["dhampir"], key: "ActorTraits" },
            ],
            traits: { rarity: "uncommon", value: ["dhampir"] },
        },
        type: "heritage",
    },
    "discarded-fleshwarp": {
        _id: "OtqOC3ElpF444qMe",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Discarded Fleshwarp",
        system: {
            ancestry: {
                name: "Fleshwarp",
                slug: "fleshwarp",
                uuid: "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
            },
            description: {
                value:
                    '<p>The biomancers and mutagenists who warped your form labeled you a "discard on discovery"—a euphemism for destroying you on sight. An anomaly among anomalies, your body stubbornly repudiates the efforts of fleshcrafters seeking to mold you to their grandiose visions, and your immune responses blunt the worst effects of unwanted fleshwarping attempts. If you roll a success on a saving throw against a transmutation effect, you get a critical success instead.</p>',
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    outcome: ["success"],
                    predicate: [],
                    selector: "saving-throw",
                    type: "save",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "dogtooth-tengu": {
        _id: "2hLDilS6qbjHxgVS",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Dogtooth Tengu",
        system: {
            ancestry: {
                name: "Tengu",
                slug: "tengu",
                uuid: "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
            },
            description: {
                value:
                    "<p>In addition to a beak, your mouth also features a number of vicious, pointed teeth. Some legends claim your powerful jaws can even bite through steel. While you aren't that strong yet, your fangs can still leave terrible wounds. Your beak unarmed attack gains the deadly d8 trait.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    definition: ["item:beak"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "weapon-traits",
                    value: "deadly-d8",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "dragonscaled-kobold": {
        _id: "P8BP1un5BTrwXoBy",
        img: "systems/pf2e/icons/features/ancestry/dragonscaled-kobold.webp",
        name: "Dragonscaled Kobold",
        system: {
            ancestry: {
                name: "Kobold",
                slug: "kobold",
                uuid: "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
            },
            description: {
                value:
                    "<p>Your scales are especially colorful, possessing some of the same resistance a dragon possesses. You gain resistance equal to half your level (minimum 1) to the damage type associated with your draconic exemplar. Double this resistance against dragons' Breath Weapons.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    predicate: [
                        {
                            or: [
                                "self:feature:draconic-exemplar:black",
                                "self:feature:draconic-exemplar:copper",
                            ],
                        },
                    ],
                    type: "acid",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "Resistance",
                    predicate: [
                        {
                            or: [
                                "self:feature:draconic-exemplar:blue",
                                "self:feature:draconic-exemplar:bronze",
                            ],
                        },
                    ],
                    type: "electricity",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "Resistance",
                    predicate: ["self:feature:draconic-exemplar:green"],
                    type: "poison",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "Resistance",
                    predicate: [
                        {
                            or: [
                                "self:feature:draconic-exemplar:red",
                                "self:feature:draconic-exemplar:gold",
                                "self:feature:draconic-exemplar:brass",
                            ],
                        },
                    ],
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "Resistance",
                    predicate: [
                        {
                            or: [
                                "self:feature:draconic-exemplar:white",
                                "self:feature:draconic-exemplar:silver",
                            ],
                        },
                    ],
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    draxie: {
        _id: "zcO93E8gAW1tDYKk",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Draxie",
        system: {
            ancestry: {
                name: "Sprite",
                slug: "sprite",
                uuid: "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
            },
            description: {
                value:
                    "<p>You are kin to faerie dragons, tracing your heritage back to the death of the mightiest faerie dragon in the First World. You gain touch telepathy, allowing you to communicate silently and purely mentally with any creature you're touching, as long as you share a language.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    dromaar: {
        _id: "tLd8Qg82AwEbbmgX",
        img: "systems/pf2e/icons/features/ancestry/half-orc.webp",
        name: "Dromaar",
        system: {
            ancestry: {
                name: "Human",
                slug: "human",
                uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
            },
            description: {
                value:
                    "<p>Orcish strength emboldens your bloodline. You have a green tinge to your skin and other indicators of orc heritage. You gain the orc trait, the dromaar trait, and low-light vision. When you gain an ancestry feat, you can choose from dromaar and orc feats in addition to those from your ancestry.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { key: "Sense", selector: "lowLightVision" },
                { add: ["orc", "half-orc"], key: "ActorTraits" },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.details.ancestry.versatile",
                    value: "orc",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.details.ancestry.countsAs",
                    value: "half-orc",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.details.ancestry.countsAs",
                    value: "orc",
                },
            ],
            traits: { rarity: "common", value: ["half-orc"] },
        },
        type: "heritage",
    },
    duskwalker: {
        _id: "ZZKZkeSP5TuT62IA",
        img: "systems/pf2e/icons/features/ancestry/duskwalker.webp",
        name: "Duskwalker",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>Thanks to an ancient bargain, your soul has been reborn as a duskwalker, a planar scion with a connection to psychopomps and the Boneyard. You gain the duskwalker trait in addition to the traits from your ancestry. You also gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision], or you gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision] if your ancestry already has low-light vision. Neither your body nor your spirit can ever become undead. You can choose from duskwalker feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { add: ["duskwalker"], key: "ActorTraits" },
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: ["duskwalker"] },
        },
        type: "heritage",
    },
    "earthly-wilds-kitsune": {
        _id: "Wk4HyaZtC1j221i1",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Earthly Wilds Kitsune",
        system: {
            ancestry: {
                name: "Kitsune",
                slug: "kitsune",
                uuid: "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
            },
            description: {
                value:
                    "<p>You are a creature of the material world, with an affinity closer to the wilds than urban society. You gain a jaws unarmed attack that deals @Damage[1d6[piercing]] damage. Your jaws are in the brawling group and have the finesse and unarmed traits. Your alternate form is a fox, which has the statistics of 1st-level <em>@UUID[Compendium.pf2e.spells-srd.Item.Pest Form]</em>.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/creatures/abilities/mouth-teeth-long-red.webp",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.jaws",
                    range: null,
                    traits: ["finesse", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "elemental-heart-dwarf": {
        _id: "MeMAAtUlZmFgKSMF",
        img: "systems/pf2e/icons/features/ancestry/elemental-heat-dwarf.webp",
        name: "Elemental Heart Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>Whether through a connection to @UUID[Compendium.pf2e.deities.Item.Torag]{Torag's} forge, the azers of the Plane of Fire, or another source, you can exude a burst of energy. Mbe'ke and Taralu dwarves of the Mwangi Expanse believe this heritage is a gift from dragons or elemental spirits. Choose one of the following damage types: acid, cold, electricity, or fire. Once chosen, this can't be changed. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Energy Emanation (Acid)]{Energy Emanation} activity.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.TraitFire",
                            value: "Compendium.pf2e.actionspf2e.Item.Energy Emanation (Fire)",
                        },
                        {
                            label: "PF2E.TraitAcid",
                            value: "Compendium.pf2e.actionspf2e.Item.Energy Emanation (Acid)",
                        },
                        {
                            label: "PF2E.TraitCold",
                            value: "Compendium.pf2e.actionspf2e.Item.Energy Emanation (Cold)",
                        },
                        {
                            label: "PF2E.TraitElectricity",
                            value:
                                "Compendium.pf2e.actionspf2e.Item.Energy Emanation (Electricity)",
                        },
                    ],
                    flag: "elementalHeartDwarf",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Dwarf.ElementalHeart.Prompt",
                },
                {
                    key: "GrantItem",
                    uuid: "{item|flags.pf2e.rulesSelections.elementalHeartDwarf}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "elfbane-hobgoblin": {
        _id: "ikNJZRxUjcRLisO6",
        img: "systems/pf2e/icons/features/ancestry/unbreakable-goblin.webp",
        name: "Elfbane Hobgoblin",
        system: {
            ancestry: {
                name: "Hobgoblin",
                slug: "hobgoblin",
                uuid: "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
            },
            description: {
                value:
                    '<p>Hobgoblins were engineered long ago from the unreliable and fecund goblins, to be used as an army against the elves. Although the elves ultimately freed the hobgoblins from their bondage, some hobgoblins retain ancestral resistance to magic, which they refer to as "elf magic." You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Resist Elf Magic] reaction.</p>',
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Resist Elf Magic",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "elusive-vishkanya": {
        _id: "ywNXVLZtwrAStyh1",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Elusive Vishkanya",
        system: {
            ancestry: {
                name: "Vishkanya",
                slug: "vishkanya",
                uuid: "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
            },
            description: {
                value:
                    "<p>Your flexible body seems unnaturally fluid to some, though they can rarely put a finger on what seems strange about you. You can escape foes with ease. You gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Escape]. Additionally, you move twice as fast when Squeezing.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:escape"],
                    selector: ["athletics", "acrobatics"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "empty-sky-kitsune": {
        _id: "mBH1L01kYmB8EL56",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Empty Sky Kitsune",
        system: {
            ancestry: {
                name: "Kitsune",
                slug: "kitsune",
                uuid: "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
            },
            description: {
                value:
                    "<p>Your spirit is open to the secrets of beyond, granting you greater access to kitsune magic. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Kitsune Spell Familiarity] ancestry feat. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Kitsune Spell Familiarity",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "enchanting-lily": {
        _id: "VqgrYMaAwnNjT9Mn",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Enchanting Lily",
        system: {
            ancestry: {
                name: "Ghoran",
                slug: "ghoran",
                uuid: "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
            },
            description: {
                value:
                    "<p>You smell ever so sweet—a delicate, floral scent like the intoxicating fragrance of lilies and the soft scent of lilacs. You're trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Make an Impression] if the target can smell your fragrance.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.dip.rank",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:make-an-impression", "enchanting-lily"],
                    selector: "diplomacy",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "farsight-goloma": {
        _id: "6JKdAZGa8odFzleS",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Farsight Goloma",
        system: {
            ancestry: {
                name: "Goloma",
                slug: "goloma",
                uuid: "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
            },
            description: {
                value:
                    "<p>Your eyes have adapted to see more in less than favorable conditions. You gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision].</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [{ key: "Sense", selector: "lowLightVision" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "fey-touched-gnome": {
        _id: "D3hTAqgwSank8OyO",
        img: "systems/pf2e/icons/features/ancestry/fey-touched-gnome.webp",
        name: "Fey-Touched Gnome",
        system: {
            ancestry: {
                name: "Gnome",
                slug: "gnome",
                uuid: "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
            },
            description: {
                value:
                    "<p>The blood of the fey flows through your veins, saturating you with their magic and making you truly one of them. You gain the fey trait, in addition to the gnome and humanoid traits. Choose one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You can change this cantrip to a different one from the same list once per day by meditating to realign yourself with the First World; this is a 10-minute activity that has the concentrate trait.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [{ add: ["fey"], key: "ActorTraits" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "fishseeker-shoony": {
        _id: "isJhIPhT4MsjJvoq",
        img: "systems/pf2e/icons/features/ancestry/fishseeker-shoony.webp",
        name: "Fishseeker Shoony",
        system: {
            ancestry: {
                name: "Shoony",
                slug: "shoony",
                uuid: "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
            },
            description: {
                value:
                    "<p>You come from a long line of fisherfolk and have inherited the quick reflexes necessary to nab and reel in big game. If you roll a success on an attempt to @UUID[Compendium.pf2e.actionspf2e.Item.Grab an Edge], you get a critical success instead; if you roll a critical failure, you get a failure instead. A creature that rolls a failure on a check to @UUID[Compendium.pf2e.actionspf2e.Item.Disarm] you gets a critical failure instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #153: Life's Long Shadows",
            },
            rules: [
                {
                    adjustment: { criticalFailure: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:grab-an-edge"],
                    selector: "reflex",
                    type: "save",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:grab-an-edge"],
                    selector: "reflex",
                    type: "save",
                },
                {
                    key: "Note",
                    predicate: ["action:grab-an-edge"],
                    selector: "reflex",
                    text: "PF2E.SpecificRule.Shoony.FishseekerShoony.Note",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "flexible-catfolk": {
        _id: "TDc9MXLXkgEFoKdD",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Flexible Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>You've inherited flexibility beyond that of most humanoids. You don't treat tight spaces that don't require you to Squeeze as difficult terrain. In addition, you get a +1 circumstance bonus to checks when you attempt to Escape.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "To Escape (Flexible Catfolk)",
                    predicate: ["action:escape"],
                    selector: ["acrobatics", "athletics", "attack"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "fodder-skeleton": {
        _id: "RZHr0olieS6YdYE9",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Fodder Skeleton",
        system: {
            ancestry: {
                name: "Skeleton",
                slug: "skeleton",
                uuid: "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
            },
            description: {
                value:
                    "<p>Humans, and those who are physically closest to them, are the favored material of necromancers. They are readily available, and their physiology has been studied the most extensively, so these skeletons can be easily mass-produced. Despite their name, fodder skeletons make rather mobile foot soldiers due to how efficiently they transfer necromantic energy within their bodies. You have a base Speed of 30 feet, instead of 25 feet.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [{ key: "BaseSpeed", selector: "land", value: 30 }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "forge-blessed-dwarf": {
        _id: "erZPj5701KiVAqoi",
        img: "icons/tools/smithing/furnace-fire-metal-orange.webp",
        name: "Forge-Blessed Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>You are from a family in Highhelm that venerates a particular dwarven deity above all others. Your birth was blessed by your family's patron deity, granting you a fraction of their power. Choose one deity from the dwarven pantheon. You can cast the 1st-level spell they grant clerics (such as <em>@UUID[Compendium.pf2e.spells-srd.Item.Soothe]</em> if your family's patron is Bolka) as an innate divine spell once per week.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "forge-dwarf": {
        _id: "5CqsBKCZuGON53Hk",
        img: "systems/pf2e/icons/features/ancestry/forge-dwarf.webp",
        name: "Forge Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>You have a remarkable adaptation to hot environments. This grants you fire resistance equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "frightful-goloma": {
        _id: "KJ2dSDXP9d5hJHzd",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Frightful Goloma",
        system: {
            ancestry: {
                name: "Goloma",
                slug: "goloma",
                uuid: "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
            },
            description: {
                value:
                    "<p>Your face has a particularly off-putting appearance. You are trained in Intimidation (or another skill of your choice if you were already trained in Intimidation) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat as a bonus feat.</p>\n<hr />\n<p><em>Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill.</em></p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.itm.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "frilled-lizardfolk": {
        _id: "6rIIsZg3tOyIU3g3",
        img: "systems/pf2e/icons/features/ancestry/frilled-lizardfolk.webp",
        name: "Frilled Lizardfolk",
        system: {
            ancestry: {
                name: "Lizardfolk",
                slug: "lizardfolk",
                uuid: "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
            },
            description: {
                value:
                    "<p>You can flare your neck frill and flex your dorsal spines, Demoralizing your foes. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don't take a penalty when you attempt to Demoralize a creature that doesn't understand your language. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Threatening Approach] action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Threatening Approach",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "frozen-wind-kitsune": {
        _id: "kHT9dFJt5yTjeYoB",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Frozen Wind Kitsune",
        system: {
            ancestry: {
                name: "Kitsune",
                slug: "kitsune",
                uuid: "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
            },
            description: {
                value:
                    "<p>Your ancestors crossed the Crown of the World or resided on snowy peaks. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "fruit-leshy": {
        _id: "L6zfGzLMDLHbZ7VV",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Fruit Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>Your body continually produces small fruits imbued with primal magic. At dawn each day, a new fruit ripens. You or an ally can remove this fruit as an Interact action. If a living creature that can derive sustenance from fruit consumes it as an Interact action within the next hour, they regain 1d8 Hit Points, plus an additional 1d8 Hit Points for every 2 of your levels beyond 1st. This effect has the healing and vitality traits.</p>\n<p>[[/r ceil(@actor.level/2)d8[healing]]]{Leveled Healing}</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "fungus-leshy": {
        _id: "87h0jepQuzIbN7jN",
        img: "systems/pf2e/icons/features/ancestry/fungus-leshy.webp",
        name: "Fungus Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>Your body was made from fungi that grows in the shade of caves and trees, and you are at home in dark caverns and warrens. You gain darkvision. You lose the plant trait and gain the fungus trait.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { add: ["fungus"], key: "ActorTraits", remove: ["plant"] },
                { key: "Sense", selector: "darkvision" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    ganzi: {
        _id: "3reGfXH0S82hM7Gp",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ganzi",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>Your blood is touched by primal chaos. You gain the ganzi trait in addition to the traits from your ancestry. You gain resistance to a single damage type equal to half your level; at the beginning of each day, determine randomly whether this resistance applies to acid, electricity, or sonic damage. You also gain a +1 circumstance bonus to saving throws against effects that would cause you to gain the @UUID[Compendium.pf2e.conditionitems.Item.Controlled] condition. You can choose from ganzi feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.VsControlled",
                    predicate: ["controlled"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "uncommon", value: ["ganzi"] },
        },
        type: "heritage",
    },
    "ghost-poppet": {
        _id: "Je15UGsLWYaaGJSW",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ghost Poppet",
        system: {
            ancestry: {
                name: "Poppet",
                slug: "poppet",
                uuid: "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
            },
            description: {
                value:
                    "<p>You awakened when a bit of another person's life force and a fragment of their soul-possibly, but not always, at the moment of their death-found its way into your constructed body. You don't remember anything more than vague flashes of your \"before life,\" but that life essence still protects you. You gain resistance to negative damage equal to half your level (minimum 1).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Grand Bazaar",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "void",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "gourd-leshy": {
        _id: "wNnsjird4OQe0s6p",
        img: "systems/pf2e/icons/features/ancestry/goudy-leshy.webp",
        name: "Gourd Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>You have a large gourd for a skull, and since you don't have a physical brain, you can use the space inside your head. You can store a collection of up to 1 Bulk of objects within your head. The DC of checks to @UUID[Compendium.pf2e.actionspf2e.Item.Steal] objects from inside your head increases by 4. Additionally, if you store only one object within your head, you can draw it effortlessly into your hand as part of another action to use the object. Drawing the item grants this other action the manipulate trait.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    option: "gourd-head",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.ToggleProperty.GourdHead",
                    predicate: ["gourd-head"],
                    selector: "perception",
                    type: "untyped",
                    value: 4,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "grave-orc": {
        _id: "VvEAFoxuddYNBmNc",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Grave Orc",
        system: {
            ancestry: {
                name: "Orc",
                slug: "orc",
                uuid: "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
            },
            description: {
                value:
                    "<p>You were exposed to powerful necromantic energies that should have killed you—but you survived. Your skin is cold, clammy, and gray. You gain resistance to void damage equal to half your level (minimum 1). You also gain a +1 circumstance bonus to saving throws against effects with the death or void trait.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "void",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["death", "void"] }],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "great-gnoll": {
        _id: "SqEcb1c3yeoJMxm0",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Great Gnoll",
        system: {
            ancestry: {
                name: "Gnoll",
                slug: "gnoll",
                uuid: "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
            },
            description: {
                value:
                    "<p>You're a large, powerful gnoll, with tawny fur and brown spots on your hide. You gain 10 Hit Points from your ancestry instead of 8 and gain a +1 circumstance bonus to Athletics checks to Shove or Trip foes.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["action:shove", "action:trip"] }],
                    selector: "athletics",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.ancestryhp",
                    value: 10,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    grig: {
        _id: "gfXSF1TafBAmZo2u",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Grig",
        system: {
            ancestry: {
                name: "Sprite",
                slug: "sprite",
                uuid: "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
            },
            description: {
                value:
                    "<p>You have the hindquarters of a cricket and adore art and music. Your cricket legs grant you a +2 circumstance bonus on Athletics checks to High Jump or Long Jump, and you gain <em>@UUID[Compendium.pf2e.spells-srd.Item.Ghost Sound]</em> as a primal innate cantrip.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.HighJumpOrLongJump",
                    predicate: [{ or: ["action:high-jump", "action:long-jump"] }],
                    selector: "athletics",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "gutsy-halfling": {
        _id: "Eq42wZ5OTweJLnLU",
        img: "systems/pf2e/icons/features/ancestry/gutsy-halfling.webp",
        name: "Gutsy Halfling",
        system: {
            ancestry: {
                name: "Halfling",
                slug: "halfling",
                uuid: "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
            },
            description: {
                value:
                    "<p>Your family line is known for keeping a level head and staving off fear when the chips were down. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["emotion"],
                    selector: "saving-throw",
                    type: "save",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "hillock-halfling": {
        _id: "Mj7uHxxVkRUlOFwJ",
        img: "systems/pf2e/icons/features/ancestry/hillock-halfling.webp",
        name: "Hillock Halfling",
        system: {
            ancestry: {
                name: "Halfling",
                slug: "halfling",
                uuid: "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
            },
            description: {
                value:
                    "<p>Accustomed to a calm life in the hills, your people find rest and relaxation especially replenishing, particularly when indulging in creature comforts. When you regain Hit Points overnight, add your level to the Hit Points regained. When anyone uses the Medicine skill to @UUID[Compendium.pf2e.actionspf2e.Item.Treat Wounds]{Treat your Wounds}, you can eat a snack to add your level to the Hit Points you regain from their treatment.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "system.attributes.hp.recoveryAddend",
                    value: "@actor.level",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "hold-scarred-orc": {
        _id: "MTTU2t7x6TjvUDnE",
        img: "systems/pf2e/icons/features/ancestry/hold-scarred-orc.webp",
        name: "Hold-Scarred Orc",
        system: {
            ancestry: {
                name: "Orc",
                slug: "orc",
                uuid: "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
            },
            description: {
                value:
                    "<p>You are part of an orc community that participates in ritual scarification or tattooing. The marks on your skin show your exceptional hardiness and vitality. You gain 12 Hit Points from your ancestry instead of 10. You also gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] feat.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.ancestryhp",
                    value: 12,
                },
                { key: "GrantItem", uuid: "Compendium.pf2e.feats-srd.Item.Diehard" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "hooded-nagaji": {
        _id: "tf3edMCyS15GhFPx",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Hooded Nagaji",
        system: {
            ancestry: {
                name: "Nagaji",
                slug: "nagaji",
                uuid: "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
            },
            description: {
                value:
                    "<p>You bear the hooded head of a spitting cobra, and like such cobras, you can shoot streams of venom from your mouth. You gain a venomous spit ranged unarmed attack with a range increment of 10 feet that deals 1d4 poison damage. On a critical hit, the target takes persistent poison damage equal to the number of weapon damage dice. Your spit doesn't have a weapon group or a critical specialization effect.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "poison", dice: 1, die: "d4" } },
                    img: "systems/pf2e/icons/spells/diamond-dust.webp",
                    key: "Strike",
                    label: "PF2E.SpecificRule.Nagaji.VenomSpit.StrikeLabel",
                    predicate: [{ not: "feat:venom-spit" }],
                    range: { increment: 10 },
                    traits: ["unarmed"],
                },
                {
                    key: "Note",
                    outcome: ["criticalSuccess"],
                    predicate: [{ not: "feat:venom-spit" }],
                    selector: "{item|_id}-damage",
                    text: "PF2E.SpecificRule.Nagaji.VenomSpit.CriticalNote",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "hunter-automaton": {
        _id: "2kMltxs2rmxRSxfV",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Hunter Automaton",
        system: {
            ancestry: {
                name: "Automaton",
                slug: "automaton",
                uuid: "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
            },
            description: {
                value:
                    "<p>You were designed to serve as a scout or assassin and have a body resembling a pack hunter like a large cat or wolf. Though you typically move like a quadruped, you can still stand and fight like a biped, allowing you to use all equipment normally. Your quadruped design allows you to move quickly; if you have both hands free, you can increase your Speed to 30 feet as you run on all fours.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    option: "on-all-fours",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SpecificRule.Automaton.HunterAutomaton.ToggleLabel",
                    predicate: ["on-all-fours"],
                    selector: "land-speed",
                    value: 5,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "hunting-catfolk": {
        _id: "1lv7RMp7t5iqeUFT",
        img: "systems/pf2e/icons/features/ancestry/hunting-catfolk.webp",
        name: "Hunting Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>You come from a long line of skilled hunters and trackers and have a particularly keen sense of smell.</p>\n<p>You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature's location. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.</p>\n<p>In addition, you gain a +2 circumstance bonus to @UUID[Compendium.pf2e.actionspf2e.Item.Track] a creature or object if you've smelled it before.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Hunting Catfolk (Track smelled creatures)",
                    predicate: ["action:track", "target:previously-smelled"],
                    selector: "survival",
                    type: "circumstance",
                    value: 2,
                },
                { acuity: "imprecise", key: "Sense", range: 30, selector: "scent" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    ifrit: {
        _id: "Svk2CHwvurK1QQhD",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ifrit",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>You descend from fire elementals or bear the mark of the Inner Spheres, and your features illustrate the influence that elemental fire has over you. You gain the ifrit trait, in addition to the traits from your ancestry. You gain resistance to fire equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less severe (incredible heat becomes extreme, extreme heat becomes severe, and so on). You can choose from ifrit feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
                { add: ["ifrit"], key: "ActorTraits" },
            ],
            traits: { rarity: "uncommon", value: ["geniekin", "ifrit"] },
        },
        type: "heritage",
    },
    "impersonator-android": {
        _id: "Mmezbef0c1fbJaVV",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Impersonator Android",
        system: {
            ancestry: {
                name: "Android",
                slug: "android",
                uuid: "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
            },
            description: {
                value:
                    "<p>Your body was augmented with processes and an appearance intended to blend in with humans more easily.</p>\n<p>You become trained in Deception (or another skill if you're already trained in Deception). You don't require a disguise kit when attempting Deception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Impersonate] a human.</p>\n<p>In addition, you gain a +4 circumstance bonus to Impersonate checks to pretend that you're a human version of yourself, rather than an android. This bonus doesn't apply to other checks to Impersonate humans.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Impersonator Android (to Impersonate a human version of yourself)",
                    predicate: ["action:impersonate", "disguise:human-self"],
                    selector: "deception",
                    type: "circumstance",
                    value: 4,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.dec.rank",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "insightful-goloma": {
        _id: "cnbwtbDmlD0KoLqY",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Insightful Goloma",
        system: {
            ancestry: {
                name: "Goloma",
                slug: "goloma",
                uuid: "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
            },
            description: {
                value:
                    "<p>You've learned to watch for telltale signs of dangerous sentiments to help you avoid trouble. You gain a +1 circumstance bonus to your Perception DC against attempts to Lie to you and your Perception checks to Sense Motive.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:sense-motive"],
                    selector: "perception",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "inured-azarketi": {
        _id: "7ZDCShtRg5QZggrU",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Inured Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>Your ancestors had to survive in polluted water that made every breath noxious. You gain poison resistance equal to half your level (minimum 1). Furthermore, you can survive outside of water for 72 hours before you begin to suffocate.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "poison",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "irongut-goblin": {
        _id: "gyoN45SVfRZwHMkk",
        img: "systems/pf2e/icons/features/ancestry/irongut-goblin.webp",
        name: "Irongut Goblin",
        system: {
            ancestry: {
                name: "Goblin",
                slug: "goblin",
                uuid: "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
            },
            description: {
                value:
                    "<p>You can subsist on food that most folks would consider spoiled. You can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the @UUID[Compendium.pf2e.actionspf2e.Item.Subsist] downtime activity. You can eat and drink things when you are @UUID[Compendium.pf2e.conditionitems.Item.Sickened].</p>\n<p>You gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a Fortitude save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Irongut Goblin (vs. afflictions & sickened)",
                    predicate: ["ingested", { or: ["affliction", "inflicts:sickened"] }],
                    selector: "saving-throw",
                    slug: "irongut-save-bonus",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "Note",
                    predicate: ["ingested", { or: ["affliction", "sickened"] }],
                    selector: "fortitude",
                    text: "If you roll a success on a save against an ingested affliction or to avoid gaining the sickened condition, treat it as a critical success",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "jinxed-halfling": {
        _id: "G9Gwfi8ZIva52uGp",
        img: "systems/pf2e/icons/features/ancestry/jinxed-halfling.webp",
        name: "Jinxed Halfling",
        system: {
            ancestry: {
                name: "Halfling",
                slug: "halfling",
                uuid: "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
            },
            description: {
                value:
                    "<p>You were born with a strange blessing: bereft of the typical halfling luck, you can instead manipulate the fortunes of others. You can never take the @UUID[Compendium.pf2e.feats-srd.Item.Halfling Luck] feat, and you gain the @UUID[Compendium.pf2e.actionspf2e.Item.Jinx] action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { key: "GrantItem", uuid: "Compendium.pf2e.actionspf2e.Item.Jinx" },
            ],
            traits: { rarity: "uncommon", value: [] },
        },
        type: "heritage",
    },
    "jinxed-tengu": {
        _id: "g4FRxyuHndZu4KTo",
        img: "systems/pf2e/icons/features/ancestry/jinxed-tengu.webp",
        name: "Jinxed Tengu",
        system: {
            ancestry: {
                name: "Tengu",
                slug: "tengu",
                uuid: "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
            },
            description: {
                value:
                    "<p>Your lineage has been exposed to curse after curse, and now, they slide off your feathers like rain. If you succeed at a saving throw against a curse or misfortune effect, you get a critical success instead.</p>\n<p>When you would gain the @UUID[Compendium.pf2e.conditionitems.Item.Doomed] condition, attempt a @Check[type:flat|dc:17] check. On a success, reduce the value of the doomed condition you would gain by 1.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: [{ or: ["curse", "misfortune"] }],
                    selector: "saving-throw",
                    type: "save",
                },
                {
                    key: "Note",
                    selector: "saving-throw",
                    text: "If you succeed at a saving throw against a curse or misfortune effect, you get a critical success instead.",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "jungle-catfolk": {
        _id: "HpqQ5VQ0w4HqYgVC",
        img: "systems/pf2e/icons/features/ancestry/jungle-catfolk.webp",
        name: "Jungle Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>You're descended from jungle stalkers and can move swiftly through scrub and underbrush. You ignore difficult terrain from undergrowth, and greater difficult terrain from undergrowth is only difficult terrain for you.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "keen-venom-vishkanya": {
        _id: "BhbwjTFw2V67XF35",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Keen-Venom Vishkanya",
        system: {
            ancestry: {
                name: "Vishkanya",
                slug: "vishkanya",
                uuid: "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
            },
            description: {
                value:
                    "<p>You're practiced with using your venom in combat, allowing you to employ your venom at a moment's notice. Your @UUID[Compendium.pf2e.actionspf2e.Item.Envenom] action doesn't trigger reactions that normally trigger on a manipulate action. Additionally, you gain the @UUID[Compendium.pf2e.actionspf2e.Item.Venom Draw] action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Venom Draw",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "laborer-android": {
        _id: "MQx7miBXUmOHycqJ",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Laborer Android",
        system: {
            ancestry: {
                name: "Android",
                slug: "android",
                uuid: "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
            },
            description: {
                value:
                    "<p>Your body is adapted to endure physical hardships or perform hard labor for long periods of time. You become trained in Athletics (or another skill if you're already trained in Athletics), and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.ath.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "lahkgyan-vanara": {
        _id: "Kq3k1Z6IWGVsLrmg",
        img: "icons/creatures/abilities/mouth-teeth-long-red.webp",
        name: "Lahkgyan Vanara",
        system: {
            ancestry: {
                name: "Vanara",
                slug: "vanara",
                uuid: "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
            },
            description: {
                value:
                    "<p>Your vanara ancestors might have been born in Ragdya's image, but they found survival only in service to his enemy: the red-faced Lahkgya. You have sharp teeth meant for gnashing and ripping into flesh. You can subsist on raw meat alone. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Jaws",
                    range: null,
                    slug: "jaws",
                    traits: ["finesse", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "leaf-leshy": {
        _id: "dQqurQys37aJYb26",
        img: "systems/pf2e/icons/features/ancestry/leafy-leshy.webp",
        name: "Leaf Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>Your body is made mostly from natural foliage, and like a leaf tumbling from a tree, you land from falls with particular grace. You take no damage from falling, regardless of the distance you fall.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    lethoci: {
        _id: "Csezts78L4FMaskB",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Lethoci",
        system: {
            ancestry: {
                name: "Kashrishi",
                slug: "kashrishi",
                uuid: "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
            },
            description: {
                value:
                    "<p>You come from a kashrishi family adapted to coastal shores, or inland ponds and lakes. You gain a +2 circumstance bonus to Athletics checks to Swim. If you critically fail an Athletics check to Swim, you get a failure instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:swim"],
                    selector: "athletics",
                    type: "circumstance",
                    value: 2,
                },
                {
                    adjustment: { criticalFailure: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:swim"],
                    selector: "athletics",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "liminal-catfolk": {
        _id: "3F5ffk7cmnrBhPcT",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Liminal Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>You've inherited a closeness to the far corners of the world, where the boundaries between dimensions grow thin. You can cast detect magic as an occult innate cantrip heightened to half your level, rounded up.</p>\n<p>You also gain a +1 circumstance bonus to Occultism checks to Recall Knowledge about creatures that originated outside of the Material Plane.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "To Recall Knowledge about non-Material creatures (Liminal Catfolk)",
                    predicate: ["action:recall-knowledge", "target:not-material-plane"],
                    selector: "occultism",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "liminal-fetchling": {
        _id: "PwxbD5VSJ0Yroqvp",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Liminal Fetchling",
        system: {
            ancestry: {
                name: "Fetchling",
                slug: "fetchling",
                uuid: "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
            },
            description: {
                value:
                    "<p>You come from a line of fetchlings with a closer connection to the Ethereal and Shadow Planes, and you share those realms' affinity with the in-between and unseen. You gain a +1 circumstance bonus to locate @UUID[Compendium.pf2e.conditionitems.Item.Undetected] creatures within 60 feet when using the Seek action. Your flat check to target @UUID[Compendium.pf2e.conditionitems.Item.Concealed] creatures is @Check[type:flat|dc:3] instead of DC 5, and your flat check to target undetected creatures is @Check[type:flat|dc:9] instead of DC 11.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "To Seek undetected within 60 feet (Liminal Fetchling)",
                    predicate: [
                        "action:seek",
                        "target:condition:undetected",
                        "target:within-60",
                    ],
                    selector: "perception",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "longsnout-rat": {
        _id: "fROPRHGyUn4PgcER",
        img: "systems/pf2e/icons/features/ancestry/longsnout-rat.webp",
        name: "Longsnout Rat",
        system: {
            ancestry: {
                name: "Ratfolk",
                slug: "ratfolk",
                uuid: "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
            },
            description: {
                value:
                    "<p>The long snouts that run in your family give you a keener sense of smell than most ratfolk. You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature's location. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.</p>\n<p>In addition, you gain a +2 circumstance bonus to Perception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Seek] a creature or object within the range of your scent.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                { acuity: "imprecise", key: "Sense", range: 30, selector: "scent" },
                {
                    key: "FlatModifier",
                    label: "Longsnout Rat (Seek within scent range)",
                    predicate: ["action:seek", "target:within-30-feet"],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "lorekeeper-shisk": {
        _id: "Fgysc0A1pFQE8PMA",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Lorekeeper Shisk",
        system: {
            ancestry: {
                name: "Shisk",
                slug: "shisk",
                uuid: "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
            },
            description: {
                value:
                    "<p>You grew up surrounded by knowledge and secrets. You become trained in one Lore skill and one other Intelligence- or Wisdom-based skill of your choice. At 5th level, you become expert in the chosen skills.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "lotus-leshy": {
        _id: "ievKYUc53q0mroGp",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Lotus Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>You effortlessly float on the surface of water. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal Speed. You can also attempt to @UUID[Compendium.pf2e.actionspf2e.Item.Balance] to move across the surface of flowing water, using the DC of a Swim check to move through the water. When you do this, you can't move faster than half your Speed, and if you fail or critically fail, you fall into the water rather than the normal effects.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "luminous-sprite": {
        _id: "LU4i3qXtyzeTGWZQ",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Luminous Sprite",
        system: {
            ancestry: {
                name: "Sprite",
                slug: "sprite",
                uuid: "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
            },
            description: {
                value:
                    "<p>You glow with magical luminance. You naturally shed light as a @UUID[Compendium.pf2e.equipment-srd.Item.Torch]; this light has the evocation, light, and primal traits. You can extinguish, rekindle, or change the color of this light using a single action, which has the concentrate trait.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "PF2E.SpecificRule.Sprite.LuminousSprite.Light",
                    option: "luminous",
                    toggleable: true,
                },
                {
                    key: "TokenLight",
                    predicate: ["luminous"],
                    value: {
                        animation: { intensity: 4, speed: 1, type: "torch" },
                        bright: 20,
                        color: "#9b7337",
                        dim: 40,
                        luminosity: 0.4,
                        shadows: 0.2,
                    },
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "mage-automaton": {
        _id: "J0eAmntxXywr9sGt",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Mage Automaton",
        system: {
            ancestry: {
                name: "Automaton",
                slug: "automaton",
                uuid: "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
            },
            description: {
                value:
                    "<p>The chamber housing your core has a more direct connection to the rest of your humanoid shape, allowing you to tap into your core's magical energy. You gain one cantrip from the arcane spell list. You can cast this spell as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    melixie: {
        _id: "TYvzNoL5ldmB5F76",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Melixie",
        system: {
            ancestry: {
                name: "Sprite",
                slug: "sprite",
                uuid: "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
            },
            description: {
                value:
                    "<p>You have the features of a bee, butterfly, or other insect that loves sweets. You can ask questions of and receive answers from arthropods (insects, spiders, scorpions, crabs, and similar invertebrate animals), as well as use Diplomacy to Make an Impression on and Request things of them. Most bees, butterflies, moths, and beetles have an @UUID[Compendium.pf2e.conditionitems.Item.Indifferent] or @UUID[Compendium.pf2e.conditionitems.Item.Friendly] starting attitude toward you and give you time to make your case, though other arthropods react to you like any other adventurer.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "mistbreath-azarketi": {
        _id: "7wdeVadvchdM0aPK",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Mistbreath Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>You descend from azarketis who migrated to land environments that could support their need for water. Over time, your people adapted to life on land culturally and physically, even resulting in azarketis born with human hair like their Azlanti ancestors. You no longer need to be immersed in water every 24 hours to maintain your skin and can instead mist or wipe your skin with water to live comfortably. Your land Speed is 25 feet, but your swim Speed is only 15 feet.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
            },
            rules: [
                { key: "FlatModifier", selector: "swim-speed", value: -15 },
                { key: "FlatModifier", selector: "land-speed", value: 5 },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "monstrous-skeleton": {
        _id: "wB8xiQB4RDbzOOvR",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Monstrous Skeleton",
        system: {
            ancestry: {
                name: "Skeleton",
                slug: "skeleton",
                uuid: "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
            },
            description: {
                value:
                    "<p>Inhuman skeletons are often created for both their deadly physical attacks and their terrifying appearances. Beasts and monstrous humanoids with the strangest skeletons tend to be the centerpiece of the collection of a necromancer skilled enough to raise one. You gain a claw, horn, tail, or wing unarmed attack that deals 1d6 damage. A claw deals slashing damage, a horn deals piercing damage, and a tail or wing deals bludgeoning damage. This unarmed attack is in the brawling group and has the finesse and unarmed traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.BattleForm.Attack.Claw", value: "claw" },
                        { label: "PF2E.BattleForm.Attack.Horn", value: "horn" },
                        { label: "PF2E.BattleForm.Attack.Tail", value: "tail" },
                        { label: "PF2E.BattleForm.Attack.Wing", value: "wing" },
                    ],
                    flag: "primaryStrike",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Automaton.AutomatonArmament.Prompt",
                    rollOption: "ancestry:skeleton:monstrous",
                },
                {
                    baseType: "claw",
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/commodities/claws/claw-bear-brown-grey.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Claw",
                    predicate: ["ancestry:skeleton:monstrous:claw"],
                    range: null,
                    slug: "claw",
                    traits: ["unarmed", "finesse"],
                },
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/unarmed-attacks/horn.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Horn",
                    predicate: ["ancestry:skeleton:monstrous:horn"],
                    range: null,
                    slug: "horn",
                    traits: ["unarmed", "finesse"],
                },
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/creatures/abilities/tail-swipe-green.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Tail",
                    predicate: ["ancestry:skeleton:monstrous:tail"],
                    range: null,
                    slug: "tail",
                    traits: ["unarmed", "finesse"],
                },
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/unarmed-attacks/wing.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Wing",
                    predicate: ["ancestry:skeleton:monstrous:wing"],
                    range: null,
                    slug: "wing",
                    traits: ["unarmed", "finesse"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "mountainkeeper-tengu": {
        _id: "ptpK6H1rM4Bu3ry4",
        img: "systems/pf2e/icons/features/ancestry/mountainkeeper-tengu.webp",
        name: "Mountainkeeper Tengu",
        system: {
            ancestry: {
                name: "Tengu",
                slug: "tengu",
                uuid: "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
            },
            description: {
                value:
                    "<p>You come from a line of tengu ascetics, leaving you with a link to the spirits of the world and the Great Beyond. You can cast the <em>@UUID[Compendium.pf2e.spells-srd.Item.Vitality Lash]{Disrupt Undead}</em> cantrip as a primal innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.</p>\n<p>Each time you cast a spell from a tengu heritage or ancestry feat, you can decide whether it's a divine or primal spell.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "murkeyed-azarketi": {
        _id: "MtH5bq0MhaMQbJEL",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Murkeyed Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>You live in murky waters and have grown accustomed to life in a low-visibility environment. You need only a successful @Check[type:flat|dc:3] when targeting a concealed creature and a successful @Check[type:flat|dc:9] when targeting a hidden creature.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "mutated-fleshwarp": {
        _id: "CCwTBSNTw0caN1jd",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Mutated Fleshwarp",
        system: {
            ancestry: {
                name: "Fleshwarp",
                slug: "fleshwarp",
                uuid: "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
            },
            description: {
                value:
                    "<p>Transformed by uncontrolled magic, you originated in a the Mana Wastes or another region similarly devastated by uncontrolled magic. Due to your toughened or redundant organs, the DC for your checks to recover from persistent bleed damage is 10 instead of 15, and it's reduced to @Check[type:flat|dc:5] instead of 10 if you have particularly effective assistance recovering from the persistent damage.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    itemType: "condition",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: ["item:damage:type:bleed"],
                    property: "pd-recovery-dc",
                    value: 10,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    nascent: {
        _id: "pJ395g22dKNoufIK",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Nascent",
        system: {
            ancestry: {
                name: "Kashrishi",
                slug: "kashrishi",
                uuid: "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
            },
            description: {
                value:
                    "<p>While most kashrishi are fully adapted to their environment by the time they reach adulthood, some retain unrealized potential well into adulthood before unlocking it. You gain a 1st-level kashrishi ancestry feat for which you meet the prerequisites, if any.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    adjustName: false,
                    choices: {
                        filter: [
                            "item:level:1",
                            "item:category:ancestry",
                            "item:trait:kashrishi",
                        ],
                        itemType: "feat",
                    },
                    flag: "nascent",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.AncestralParagon.Prompt",
                },
                { key: "GrantItem", uuid: "{item|flags.pf2e.rulesSelections.nascent}" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    nephilim: {
        _id: "1oLMOmLpurfWTTff",
        img: "systems/pf2e/icons/features/ancestry/aasimar.webp",
        name: "Nephilim",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>Your nature is influenced by celestials, fiends, or monitors. This manifests as a combination of features that belie your heritage, such as golden eyes, a halo, horns, or a tail. You gain the nephilim trait, in addition to the traits from your ancestry. You gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from nephilim feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: ["nephilim"] },
        },
        type: "heritage",
    },
    "nightglider-strix": {
        _id: "9mS8EGLlGUOzSAzP",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Nightglider Strix",
        system: {
            ancestry: {
                name: "Strix",
                slug: "strix",
                uuid: "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
            },
            description: {
                value:
                    "<p>You are a dedicated nocturnal avian, keeping watch and predating in the most lightless environments. You gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision].</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "Sense", selector: "darkvision" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "nine-lives-catfolk": {
        _id: "hOPOyyt7qZXYYCOU",
        img: "systems/pf2e/icons/features/ancestry/nine-lives-catfolk.webp",
        name: "Nine Lives Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>Your family has always seemed to bound back from disaster, not through physical hardiness or specialized skill, but from sheer luck. Other catfolk whisper that you have nine lives.</p>\n<p>If you are reduced to 0 Hit Points by a critical hit on an attack roll, you become @UUID[Compendium.pf2e.conditionitems.Item.Dying]{Dying 1} instead of dying 2.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "nomadic-halfling": {
        _id: "idGDjqi1q3Ft8bAZ",
        img: "systems/pf2e/icons/features/ancestry//nomadic-halfling.webp",
        name: "Nomadic Halfling",
        system: {
            ancestry: {
                name: "Halfling",
                slug: "halfling",
                uuid: "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
            },
            description: {
                value:
                    "<p>Your ancestors have traveled from place to place for generations, never content to settle down. You gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] feat, you gain another new language.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    nyktera: {
        _id: "h2VKMYAlUIFAAXVG",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Nyktera",
        system: {
            ancestry: {
                name: "Sprite",
                slug: "sprite",
                uuid: "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
            },
            description: {
                value:
                    "<p>You have batlike features, an affinity for batkind, and hearing that is second to none. As long as you can hear normally, you can use the Seek action to sense @UUID[Compendium.pf2e.conditionitems.Item.Undetected] creatures in a @Template[type:cone|distance:60] instead of a @Template[type:cone|distance:30]. You also gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "To seek undetected you can hear within 30 feet (Nyktera)",
                    predicate: [
                        "action:seek",
                        "target:audible",
                        "target:condition:undetected",
                        "target:within-30",
                    ],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "oathkeeper-dwarf": {
        _id: "85tRKGZUTFa6pKpG",
        img: "systems/pf2e/icons/features/ancestry/oathkeeper-dwarf.webp",
        name: "Oathkeeper Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>Growing up, you never tried to lie to get what you wanted, and even when necessary, lying makes you uncomfortable. The especially faithful might even have thought that you were blessed by the dwarven god of duty, @UUID[Compendium.pf2e.deities.Item.Kols].</p>\n<p>You gain a +1 circumstance bonus to Perception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive] and to Perception DCs against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Lie] to you.</p>\n<p>Furthermore, you gain a +2 circumstance bonus to Diplomacy checks to convince others you speak the truth when you are telling the truth, and you take a -4 circumstance penalty to lie and to your Deception DC against @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive].</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.SenseMotive",
                    predicate: ["action:sense-motive"],
                    selector: "perception",
                    slug: "oathkeeper-dwarf-to-sense-motive",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.TellTheTruth",
                    predicate: ["tell-truth"],
                    selector: "diplomacy",
                    slug: "oathkeeper-dwarf-tell-the-truth",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.Lie",
                    predicate: ["action:lie"],
                    selector: "deception",
                    slug: "oathkeeper-dwarf-lie",
                    type: "circumstance",
                    value: -4,
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: ["action:lie"],
                    selector: "perception",
                    type: "circumstance",
                    value: 1,
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: ["action:sense-motive"],
                    selector: "deception",
                    type: "circumstance",
                    value: -4,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "observant-halfling": {
        _id: "Lp7ywxabmm88Gei6",
        img: "systems/pf2e/icons/features/ancestry/observant-halfling.webp",
        name: "Observant Halfling",
        system: {
            ancestry: {
                name: "Halfling",
                slug: "halfling",
                uuid: "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
            },
            description: {
                value:
                    "<p>Your finely honed senses quickly clue you in to danger or trickery. You gain a +1 circumstance bonus to your Perception DC, though not to your Perception checks.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "perception-dc",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "old-blood-vishkanya": {
        _id: "PbXqlzRdQbKLQx1R",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Old-Blood Vishkanya",
        system: {
            ancestry: {
                name: "Vishkanya",
                slug: "vishkanya",
                uuid: "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
            },
            description: {
                value:
                    "<p>You have a direct matrilineal line to the original group of vishkanyas upon the Vudrani ships that came to reclaim Jalmeray. Since then, your family has adjusted well to a new life in the Inner Sea. You become trained in Society (or another skill of your choice if you're already trained in Society), and you gain your choice of the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] or @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { value: "Compendium.pf2e.feats-srd.Item.Streetwise" },
                        { value: "Compendium.pf2e.feats-srd.Item.Courtly Graces" },
                    ],
                    flag: "feat",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.SkillFeat",
                },
                { key: "GrantItem", uuid: "{item|flags.pf2e.rulesSelections.feat}" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    oread: {
        _id: "ITgkqfnAOJCbcIys",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Oread",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>An earth elemental ancestor has influenced your bloodline, and your features highlight this elemental planar connection. You might have a crystalline or metallic sheen to your skin or hair, rough and stony flesh, or glittering gemstone eyes. You gain the oread trait, in addition to the traits from your ancestry. You also gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision], or you gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision] if your ancestry already has low-light vision. You can choose from oread feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { add: ["oread"], key: "ActorTraits" },
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: ["geniekin", "oread"] },
        },
        type: "heritage",
    },
    "paddler-shoony": {
        _id: "mnhpCk9dIwMuFegM",
        img: "systems/pf2e/icons/features/ancestry/paddler-shoony.webp",
        name: "Paddler Shoony",
        system: {
            ancestry: {
                name: "Shoony",
                slug: "shoony",
                uuid: "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
            },
            description: {
                value:
                    "<p>You hail from shoonies who have lived long and successfully among the reeds and cattails of swamps and marshes, and have adapted to the challenges of living near waterlogged areas. You ignore difficult terrain and greater difficult terrain from bogs. When you roll a success to @UUID[Compendium.pf2e.actionspf2e.Item.Swim], you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #153: Life's Long Shadows",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["action:swim"],
                    selector: "athletics",
                    text: "When you roll a success to Swim, you get a critical success instead.",
                    title: "{item|name}",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:swim"],
                    selector: "athletics",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "pine-leshy": {
        _id: "KaokXdiE3ewXprdL",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Pine Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>You excrete a thick, sticky sap from your bark-like flesh, making it easier to climb and hold onto your gear. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] feat as a bonus feat, and you gain a +2 circumstance bonus to your Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Disarm] you.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #176: Lost Mammoth Valley",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    predicate: ["action:disarm"],
                    selector: "reflex",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    pixie: {
        _id: "KbG2BZ3Sbr3xU1sW",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Pixie",
        system: {
            ancestry: {
                name: "Sprite",
                slug: "sprite",
                uuid: "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
            },
            description: {
                value:
                    "<p>You are larger than other sprites. Instead of Tiny, your size is Small.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "CreatureSize", value: "sm" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "poisonhide-grippli": {
        _id: "bmA9JK06rnOKpNLr",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Poisonhide Grippli",
        system: {
            ancestry: {
                name: "Grippli",
                slug: "grippli",
                uuid: "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
            },
            description: {
                value:
                    "<p>You may be small, but the poison glands concealed across your body hide a deadly defense. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Toxic Skin] reaction.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Toxic Skin",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "polychromatic-anadi": {
        _id: "daaXga11ov9YQVNq",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Polychromatic Anadi",
        system: {
            ancestry: {
                name: "Anadi",
                slug: "anadi",
                uuid: "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
            },
            description: {
                value:
                    "<p>Your body is covered with exceptionally colorful hairs that create vibrant, eye-catching patterns, some of which might even show in your human form. You become trained in Performance (or another skill if you were already trained in Performance), and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] feat.</p>\n<hr />\n<p><em>Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill.</em></p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.prf.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "polyglot-android": {
        _id: "BjuZKA7lzFSjKbif",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Polyglot Android",
        system: {
            ancestry: {
                name: "Android",
                slug: "android",
                uuid: "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
            },
            description: {
                value:
                    "<p>You were preprogrammed with a multitude of linguistic proficiencies, likely to act as a translator. You learn two new languages, chosen from common languages and any uncommon languages you have access to. These languages take the same form (signed or spoken) as your other languages. If you select the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] feat, you learn three new languages instead of two.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "predator-strix": {
        _id: "MUujYQYWg6PNVaaN",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Predator Strix",
        system: {
            ancestry: {
                name: "Strix",
                slug: "strix",
                uuid: "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
            },
            description: {
                value:
                    "<p>You come from a line of strix with exceptionally broad wings and lengthy talons. You gain a talon melee unarmed attack that deals @Damage[1d4[slashing]] damage. Your talon attack is in the brawling group and has the agile, finesse, and unarmed traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d4" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/unarmed-attacks/talon.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Talon",
                    range: null,
                    traits: ["agile", "finesse", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "prismatic-vishkanya": {
        _id: "vrU3lmDO7FYzmuQc",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Prismatic Vishkanya",
        system: {
            ancestry: {
                name: "Vishkanya",
                slug: "vishkanya",
                uuid: "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
            },
            description: {
                value:
                    "<p>Your scales shimmer and catch the light in an intoxicating display of colors. You become trained in Performance (or another skill of your choice if you're already trained in Performance) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Fascinating Performance] feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.prf.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Fascinating Performance",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "quillcoat-shisk": {
        _id: "vDEfNzjLpGJU54cz",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Quillcoat Shisk",
        system: {
            ancestry: {
                name: "Shisk",
                slug: "shisk",
                uuid: "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
            },
            description: {
                value:
                    "<p>Your body has adapted a defensive mechanism to break off your quills in an attacker, allowing you to defend yourself against aggressive predators, though it takes a while for the quills to grow back. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Barbed Quills] reaction.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Barbed Quills",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "ragdyan-vanara": {
        _id: "By1y7HCfVPgX2GmI",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Ragdyan Vanara",
        system: {
            ancestry: {
                name: "Vanara",
                slug: "vanara",
                uuid: "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
            },
            description: {
                value:
                    "<p>Keepers of traditions and tellers of ancient tales, your family traces its lineage to those born directly from Ragdya's whims. When you speak, others are inclined to listen to you, perhaps due to the divine spark of your connection to Ragdya. You gain one cantrip from the divine spell list; this cantrip can't deal damage or otherwise cause direct harm. You can cast this spell as a divine innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "rainfall-orc": {
        _id: "dwKCwwtWetvPmJks",
        img: "systems/pf2e/icons/features/ancestry/rainfall-orc.webp",
        name: "Rainfall Orc",
        system: {
            ancestry: {
                name: "Orc",
                slug: "orc",
                uuid: "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
            },
            description: {
                value:
                    "<p>You were born in a rain forest with only tangles of trees providing protection from torrential rainstorms and flash floods. You've learned to move adeptly through jungle terrain and resist the various ailments common in humid environs. You gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Climb] or @UUID[Compendium.pf2e.actionspf2e.Item.Swim] and a +1 circumstance bonus to saving throws against diseases.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["action:climb", "action:swim"] }],
                    selector: "athletics",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["disease"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "razortooth-goblin": {
        _id: "a6F2WjYU8D0suT8T",
        img: "systems/pf2e/icons/features/ancestry/razortooth-goblin.webp",
        name: "Razortooth Goblin",
        system: {
            ancestry: {
                name: "Goblin",
                slug: "goblin",
                uuid: "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
            },
            description: {
                value:
                    "<p>Your family's teeth are formidable weapons. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    baseType: "jaws",
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.jaws",
                    slug: "razortooth-jaws",
                    traits: ["finesse"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    reflection: {
        _id: "gKLTlzAVapXTQ86V",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Reflection",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>You were created as a duplicate of another creature, intentionally or accidentally, though you might not know of your origins. Other than a minor mark or two, you look just like your progenitor. You gain the reflection trait, in addition to the traits from your ancestry. You don't need to attempt Deception checks to Impersonate your progenitor unless you're interacting with people who know them personally or you do something known to be out of character for them. The GM might require you to roll a Deception check in other circumstances, such as if you're mirror-risen and interacting with someone who has seen an accurate likeness of your progenitor and might notice a distinguishing feature on the reverse side. You can choose from reflection feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [{ add: ["reflection"], key: "ActorTraits" }],
            traits: { rarity: "rare", value: [] },
        },
        type: "heritage",
    },
    "resolute-fetchling": {
        _id: "VAo6NnrCEAAOUSkc",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Resolute Fetchling",
        system: {
            ancestry: {
                name: "Fetchling",
                slug: "fetchling",
                uuid: "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
            },
            description: {
                value:
                    "<p>Your ancestors have long dealt with the horrific—in the Shadow Plane or elsewhere—and you bear their mental fortitude. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["emotion"],
                    selector: "saving-throw",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "rite-of-invocation": {
        _id: "GpnHIonrLN8TFZci",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Rite of Invocation",
        system: {
            ancestry: {
                name: "Conrasu",
                slug: "conrasu",
                uuid: "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
            },
            description: {
                value:
                    "<p>You augmented your exoskeleton with magic. You gain one cantrip from the arcane or occult spell list. You can cast this spell as an innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "rite-of-knowing": {
        _id: "faLb2rczsrxAuOTt",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Rite of Knowing",
        system: {
            ancestry: {
                name: "Conrasu",
                slug: "conrasu",
                uuid: "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
            },
            description: {
                value:
                    "<p>You enhanced your exoskeleton with a connection to Axis, allowing you to tap into the infinite knowledge of the plane. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Call to Axis] action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Call to Axis",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "rite-of-light": {
        _id: "EoWwvDdoMqN5x0c9",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Rite of Light",
        system: {
            ancestry: {
                name: "Conrasu",
                slug: "conrasu",
                uuid: "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
            },
            description: {
                value:
                    "<p>Your exoskeleton bears small shoots that can share life. When using your Sunlight Healing, you can restore the Hit Points of an adjacent ally instead of yourself. That ally becomes temporarily immune to all uses of Sunlight Healing for 1 day.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "rite-of-passage": {
        _id: "yVtcyAbLmWCIHHZi",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Rite of Passage",
        system: {
            ancestry: {
                name: "Conrasu",
                slug: "conrasu",
                uuid: "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
            },
            description: {
                value:
                    "<p>Your exoskeleton remains connected with the plants that created it. You can ignore difficult terrain and uneven ground caused by undergrowth. In addition, when you use the Acrobatics skill to Balance on narrow surfaces or uneven ground within forests, you aren't off-guard. When you roll a success attempting one of these Acrobatics checks, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:balance", "terrain:forest"],
                    selector: "acrobatics",
                    type: "skill",
                },
                {
                    key: "Note",
                    predicate: ["action:balance"],
                    selector: "acrobatics",
                    text: "PF2E.SpecificRule.Conrasu.RiteOfPassage.Note",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "rite-of-reinforcement": {
        _id: "q2omqJ9t0skGTYki",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Rite of Reinforcement",
        system: {
            ancestry: {
                name: "Conrasu",
                slug: "conrasu",
                uuid: "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
            },
            description: {
                value:
                    "<p>Your woven exoskeleton rivals the hardest armors that can be found. Your exoskeleton is medium armor in the plate armor group that grants a +4 item bonus to AC, a Dex cap of +1, a check penalty of -2, a speed penalty of -5 feet, and a Strength value of 16, and has the comfort trait. You can never wear other armor or remove your exoskeleton. You can etch armor runes onto your exoskeleton as normal.</p>\n<p>@UUID[Compendium.pf2e.equipment-srd.Item.Rite of Reinforcement Exoskeleton]</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.equipment-srd.Item.Rite of Reinforcement Exoskeleton",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "river-azarketi": {
        _id: "GlejQr3rBh3sn8sL",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "River Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>You come from azarketis who abandoned the oceans for the fresh water of inland life. The varied geography of rivers required you to develop advanced physical skills to swim against rapids, leap through cascading waters, and deftly navigate shallow and narrow channels.</p>\n<p>When you succeed at an Athletics check to Swim, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["action:swim"],
                    selector: "athletics",
                    text: "When you succeed at an Athletics check to Swim, you get a critical success instead.",
                    title: "{item|name}",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:swim"],
                    selector: "athletics",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "rock-dwarf": {
        _id: "VSyOvtgJ1ZNpIVgC",
        img: "systems/pf2e/icons/features/ancestry/rock-dwarf.webp",
        name: "Rock Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>Your ancestors lived and worked among the ancient stones of the mountains or the depths of the earth. This makes you solid as a rock when you plant your feet. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Reposition], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against spells or effects that attempt to force you to move or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone].</p>\n<p>In addition, if any effect would force you to move 10 feet or more, you are moved only half the distance.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.VsShoveOrTrip",
                    predicate: [
                        { or: ["action:shove", "action:trip", "action:reposition"] },
                    ],
                    selector: ["fortitude", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.VsProne",
                    predicate: ["inflicts:prone"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "root-leshy": {
        _id: "CZx9HMmoOwcpkLY8",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Root Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>Your body is made from hardy roots that attach you firmly to the ground. You gain 10 Hit Points from your ancestry instead of 8. You can go without sunlight for 2 weeks before you begin to starve. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Reposition], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against spells or effects that attempt to move you or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone].</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.ancestryhp",
                    value: 10,
                },
                {
                    hideIfDisabled: true,
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.VsShoveOrTrip",
                    predicate: [
                        {
                            or: [
                                "action:shove",
                                "action:trip",
                                "action:reposition",
                                "inflicts:prone",
                                "inflicts:forced-movement",
                            ],
                        },
                    ],
                    selector: ["fortitude", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "runtboss-hobgoblin": {
        _id: "CzOHITB2ihLGqMuJ",
        img: "systems/pf2e/icons/features/ancestry/runtboss-hobgoblin.webp",
        name: "Runtboss Hobgoblin",
        system: {
            ancestry: {
                name: "Hobgoblin",
                slug: "hobgoblin",
                uuid: "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
            },
            description: {
                value:
                    "<p>You come from a long line of hobgoblins who commanded goblins. You are smaller than other hobgoblins, but goblins still listen to any commands you bellow. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat. If you roll a success on an Intimidation check to @UUID[Compendium.pf2e.actionspf2e.Item.Coerce] a goblin (but not other creatures with the goblin trait), you get a critical success instead; if you roll a critical failure, you get a failure instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["action:coerce", "target:trait:goblin"],
                    selector: "intimidation",
                    text: "When you roll a success on an Intimidation check to Coerce a goblin, you get a critical success instead; if you roll a critical failure, you get a failure instead.",
                    title: "{item|name}",
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sacred-nagaji": {
        _id: "iOREr80Q0SsvPP8B",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Sacred Nagaji",
        system: {
            ancestry: {
                name: "Nagaji",
                slug: "nagaji",
                uuid: "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
            },
            description: {
                value:
                    "<p>You stand out from most nagaji, with the upper body of a beautiful human and the lower body of a green or white snake. Legends claim your ancestors were faithful snakes uplifted by Nalinivati rather than nagaji created by the goddess. Instead of a fangs unarmed attack, you have a tail attack that deals 1d6 bludgeoning damage, is in the brawling weapon group, and has the finesse and unarmed traits. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Grapple] or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against effects that would @UUID[Compendium.pf2e.conditionitems.Item.Grabbed]{Grab} you, @UUID[Compendium.pf2e.conditionitems.Item.Restrained]{Restrain} you, or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone].</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        {
                            or: [
                                "action:grapple",
                                "action:trip",
                                "inflicts:grabbed",
                                "inflicts:restrained",
                                "inflicts:prone",
                            ],
                        },
                    ],
                    selector: ["fortitude", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
                {
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/creatures/abilities/tail-swipe-green.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Tail",
                    range: null,
                    traits: ["unarmed", "finesse"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sandstrider-lizardfolk": {
        _id: "6xxXtgj3fcCi53lt",
        img: "systems/pf2e/icons/features/ancestry/sandstrider-lizardfolk.webp",
        name: "Sandstrider Lizardfolk",
        system: {
            ancestry: {
                name: "Lizardfolk",
                slug: "lizardfolk",
                uuid: "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
            },
            description: {
                value:
                    "<p>Your thick scales help you retain water and combat the sun's glare. You gain fire resistance equal to half your level (minimum 1). Environmental heat effects are one step less extreme for you, and you can go 10 times as long as normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "scalekeeper-vishkanya": {
        _id: "ohOJHeFenX97sBHf",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Scalekeeper Vishkanya",
        system: {
            ancestry: {
                name: "Vishkanya",
                slug: "vishkanya",
                uuid: "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
            },
            description: {
                value:
                    "<p>You are part of the family of vishkanyas in your community tasked with keeping records of the history and experiences of your people. Your scholarly skill affords you a quick mind. Once per day, you can attempt to Recall Knowledge as a free action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "scavenger-strix": {
        _id: "j0R1SyJP8k4G2Hkn",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Scavenger Strix",
        system: {
            ancestry: {
                name: "Strix",
                slug: "strix",
                uuid: "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
            },
            description: {
                value:
                    "<p>Your ancestors originated from a land where food was scarce and threats were many. You are trained in Survival. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat as a bonus feat. Your thoroughness when gathering food provides you a +1 circumstance bonus to Survival checks to Subsist.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.sur.rank",
                    value: 1,
                },
                { key: "GrantItem", uuid: "Compendium.pf2e.feats-srd.Item.Forager" },
                {
                    key: "FlatModifier",
                    predicate: ["action:subsist"],
                    selector: "survival",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "seaweed-leshy": {
        _id: "hTl3uc6y1kTuo9ac",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Seaweed Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>Your body is made from woven seaweed, and you're just as comfortable underwater as on land. You gain a swim Speed of 20 feet, and you can always breathe underwater. However, your land Speed is reduced by 5 feet (to 20 feet for most seaweed leshies).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                { key: "BaseSpeed", selector: "swim", value: 20 },
                { key: "FlatModifier", selector: "land-speed", value: -5 },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "seer-elf": {
        _id: "jEtVesbqYcWGbBYk",
        img: "systems/pf2e/icons/features/ancestry/seer-elf.webp",
        name: "Seer Elf",
        system: {
            ancestry: {
                name: "Elf",
                slug: "elf",
                uuid: "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
            },
            description: {
                value:
                    "<p>You have an inborn ability to detect and understand magical phenomena. You can cast the @UUID[Compendium.pf2e.spells-srd.Item.Detect Magic] cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>\n<p>In addition, you gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Identify Magic] and to @UUID[Compendium.pf2e.actionspf2e.Item.Decipher Writing] of a magical nature. These skill actions typically use the Arcana, Nature, Occultism, or Religion skill.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        { or: ["action:identify-magic", "action:decipher-writing"] },
                    ],
                    selector: "skill-check",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sensate-gnome": {
        _id: "tXC5Gwn9D5x0ouJh",
        img: "systems/pf2e/icons/features/ancestry/sensate-gnome.webp",
        name: "Sensate Gnome",
        system: {
            ancestry: {
                name: "Gnome",
                slug: "gnome",
                uuid: "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
            },
            description: {
                value:
                    "<p>You see all colors as brighter, hear all sounds as richer, and especially smell all scents with incredible detail. You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the exact location of a creature. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.</p>\n<p>In addition, you gain a +2 circumstance bonus to Perception checks whenever you're trying to locate an undetected creature that is within the range of your scent.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:seek", { lte: ["target:distance", 30] }],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
                { acuity: "imprecise", key: "Sense", range: 30, selector: "scent" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sewer-rat": {
        _id: "eFsD7W6hnK33jlDQ",
        img: "systems/pf2e/icons/features/ancestry/sewer-rat.webp",
        name: "Sewer Rat",
        system: {
            ancestry: {
                name: "Ratfolk",
                slug: "ratfolk",
                uuid: "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
            },
            description: {
                value:
                    "<p>You come from a long line of ysoki from a community based in the sewers beneath a large settlement. You are immune to the disease filth fever. Each of your successful saving throws against a disease or poison reduces its stage by 2, or by 1 for a virulent disease or poison. Each critical success against an ongoing disease or poison reduces its stage by 3, or by 2 for a virulent disease or poison.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Note",
                    predicate: [{ or: ["disease", "poison"] }],
                    selector: "saving-throw",
                    text: "Your succesful saving throws against a disease or poison reduce its stage by 2 (or 1 for a virulent disease or poison). Each critical success reduces its stage by 3 (or 2 for a virulent disease or poison).",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "shadow-rat": {
        _id: "tarfuEXmi0E0Enfy",
        img: "systems/pf2e/icons/features/ancestry/shadow-rat.webp",
        name: "Shadow Rat",
        system: {
            ancestry: {
                name: "Ratfolk",
                slug: "ratfolk",
                uuid: "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
            },
            description: {
                value:
                    "<p>Your ancestors lived in dark spaces underground, granting you dark fur and a vaguely unnatural mien that unnerves sapient creatures and frightens animals. You gain the trained proficiency rank in Intimidation and can use Intimidation to @UUID[Compendium.pf2e.actionspf2e.Item.Coerce] animals. When you @UUID[Compendium.pf2e.actionspf2e.Item.Demoralize] an animal, you don't take a penalty for not sharing a language with it. If you would automatically become trained in Intimidation (from your background or class, for example), you become trained in another skill of your choice.</p>\n<p>Animals' attitudes toward you begin one degree worse than normal, usually starting at unfriendly instead of indifferent for domesticated animals, and hostile instead of unfriendly for wild animals.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.itm.rank",
                    value: 1,
                },
                {
                    key: "Note",
                    predicate: ["action:demoralize", "target:trait:animal"],
                    selector: "intimidation",
                    text: "When you Demoralize an animal, you don't take a penalty for not sharing a language with it.",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "shapewrought-fleshwarp": {
        _id: "uxtcKTkD62SmrUoh",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Shapewrought Fleshwarp",
        system: {
            ancestry: {
                name: "Fleshwarp",
                slug: "fleshwarp",
                uuid: "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
            },
            description: {
                value:
                    "<p>A victim of fleshwarping, you likely bear loose flesh, bony spurs, or features of inhuman creatures sprouting from your skin. You have nevertheless turned the psychic toll of your transformation into a strength. You gain resistance to mental damage equal to half your level (minimum 1).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "mental",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sharp-eared-catfolk": {
        _id: "NWsZ0cIeghyzk9bU",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Sharp-Eared Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>You were born with big, expressive ears that move with your moods and perk up at any unexpected sound. You gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action.</p>\n<p>As long as you're aware of a creature via sound, once per round, your ears can help you @UUID[Compendium.pf2e.actionspf2e.Item.Point Out] the creature to all allies as a free action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "To Seek undetected within 30 feet via hearing (Sharp-Eared Catfolk)",
                    predicate: ["action:seek", "sense:hearing", "target:within-30"],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sharpshooter-automaton": {
        _id: "j1nzBc9Pui7vsJ9o",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Sharpshooter Automaton",
        system: {
            ancestry: {
                name: "Automaton",
                slug: "automaton",
                uuid: "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
            },
            description: {
                value:
                    "<p>Your lithe, humanoid shape is designed for speed and accuracy suitable for ranged combat. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Automaton Aim] action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Automaton Aim",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "shoreline-strix": {
        _id: "RxNBBMFZwPA3Vlg3",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Shoreline Strix",
        system: {
            ancestry: {
                name: "Strix",
                slug: "strix",
                uuid: "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
            },
            description: {
                value:
                    "<p>You're the descendant of strix who traveled to the coasts. Your feathers are especially water-repellent and sleekly angled for diving, allowing you to catch fish and other prey in the shallows. You are trained in Athletics, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat as a bonus skill feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.ath.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "shortshanks-hobgoblin": {
        _id: "rQJBtQ9uKUzK9ktK",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Shortshanks Hobgoblin",
        system: {
            ancestry: {
                name: "Hobgoblin",
                slug: "hobgoblin",
                uuid: "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
            },
            description: {
                value:
                    "<p>You have a longer torso and broader shoulders than most hobgoblins, making your legs seem short by comparison. This gives you a strong, muscular core and lowers your center of gravity—features that assist you in riding and climbing—and you've trained at riding in a saddle from an extremely early age. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Ride] feat. Additionally, you are not @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] while you Climb.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { key: "GrantItem", uuid: "Compendium.pf2e.feats-srd.Item.Ride" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "skilled-heritage": {
        _id: "zVf0Hlp5xG0Q7kmc",
        img: "systems/pf2e/icons/features/ancestry/skilled-heritage.webp",
        name: "Skilled Heritage",
        system: {
            ancestry: {
                name: "Human",
                slug: "human",
                uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
            },
            description: {
                value:
                    "<p>Your ingenuity allows you to train in a wide variety of skills. You become trained in one skill of your choice. At 5th level, you become an expert in the chosen skill.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.SkillAcr", value: "acr" },
                        { label: "PF2E.SkillArc", value: "arc" },
                        { label: "PF2E.SkillAth", value: "ath" },
                        { label: "PF2E.SkillCra", value: "cra" },
                        { label: "PF2E.SkillDec", value: "dec" },
                        { label: "PF2E.SkillDip", value: "dip" },
                        { label: "PF2E.SkillItm", value: "itm" },
                        { label: "PF2E.SkillMed", value: "med" },
                        { label: "PF2E.SkillNat", value: "nat" },
                        { label: "PF2E.SkillOcc", value: "occ" },
                        { label: "PF2E.SkillPrf", value: "prf" },
                        { label: "PF2E.SkillRel", value: "rel" },
                        { label: "PF2E.SkillSoc", value: "soc" },
                        { label: "PF2E.SkillSte", value: "ste" },
                        { label: "PF2E.SkillSur", value: "sur" },
                        { label: "PF2E.SkillThi", value: "thi" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: "ternary(gte(@actor.level,5),2,1)",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "skyborn-tengu": {
        _id: "rKV11HWREwjjMIum",
        img: "systems/pf2e/icons/features/ancestry/skyborn-tengu.webp",
        name: "Skyborn Tengu",
        system: {
            ancestry: {
                name: "Tengu",
                slug: "tengu",
                uuid: "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
            },
            description: {
                value:
                    "<p>Your bones may be especially light, you may be a rare tengu with wings, or your connection to the spirits of wind and sky might be stronger than most, slowing your descent through the air. You take no damage from falling, regardless of the distance you fall.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "smokeworker-hobgoblin": {
        _id: "n2eJEjA8pnOMiuCm",
        img: "systems/pf2e/icons/features/ancestry/smokeworker-hobgoblin.webp",
        name: "Smokeworker Hobgoblin",
        system: {
            ancestry: {
                name: "Hobgoblin",
                slug: "hobgoblin",
                uuid: "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
            },
            description: {
                value:
                    "<p>Your family have been alchemists, engineers, and scientists for generations, on projects bringing smoke and fire to the field of battle. You gain fire resistance equal to half your level (minimum 1). You automatically succeed at the @Check[type:flat|dc:5] to target a @UUID[Compendium.pf2e.conditionitems.Item.Concealed] creature if that creature is Concealed only by smoke.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "fire",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "snaptongue-grippli": {
        _id: "2kSzKDtwbcILZTIe",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Snaptongue Grippli",
        system: {
            ancestry: {
                name: "Grippli",
                slug: "grippli",
                uuid: "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
            },
            description: {
                value:
                    "<p>Your tongue is especially long, and you can launch it with extraordinary range and precision. You can use your tongue to deliver touch-range spells and perform extremely simple Interact actions, such as opening some types of unlocked doors. Your tongue can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can't use it to hold items.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "snaring-anadi": {
        _id: "cwOUw7kofcAiY01I",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Snaring Anadi",
        system: {
            ancestry: {
                name: "Anadi",
                slug: "anadi",
                uuid: "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
            },
            description: {
                value:
                    "<p>You were hatched with hooked fangs that give you an edge when hunting in your true form. Your fangs attack gains the grapple and trip traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    definition: ["item:slug:fangs"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "weapon-traits",
                    value: "grapple",
                },
                {
                    definition: ["item:slug:fangs"],
                    key: "AdjustStrike",
                    mode: "add",
                    property: "weapon-traits",
                    value: "trip",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "snow-goblin": {
        _id: "gQyPU441J3rGt8mD",
        img: "systems/pf2e/icons/features/ancestry/snow-goblin.webp",
        name: "Snow Goblin",
        system: {
            ancestry: {
                name: "Goblin",
                slug: "goblin",
                uuid: "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
            },
            description: {
                value:
                    "<p>You are acclimated to living in frigid lands and have skin ranging from sky blue to navy in color, as well as blue fur. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "snow-rat": {
        _id: "7lFPhRMAFXQsXUP2",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Snow Rat",
        system: {
            ancestry: {
                name: "Ratfolk",
                slug: "ratfolk",
                uuid: "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
            },
            description: {
                value:
                    "<p>You have a thicker coat and bulkier frame to defend against the cold, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "songbird-strix": {
        _id: "fWT7Mo2vFC10H4Wq",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Songbird Strix",
        system: {
            ancestry: {
                name: "Strix",
                slug: "strix",
                uuid: "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
            },
            description: {
                value:
                    "<p>You descend from a talented line of strix storytellers. From the highest mountains and purest landscapes where your lungs fill with glorious clean air, you trill, whistle, and croon sweet songs. While natural sounds make you predisposed to sing, voices make you predisposed to mimicry. You receive a +1 circumstance bonus on Deception checks to Impersonate a mimicked voice, where the sound of the voice is the only factor; if you are a master in Deception, you gain a +2 circumstance bonus instead. You also gain a +1 circumstance bonus on Performance checks to sing; if you are a master in Performance, you gain a +2 circumstance bonus instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:impersonate"],
                    selector: "deception",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 2, value: 1 },
                            { start: 3, value: 2 },
                        ],
                        field: "actor|system.skills.dec.rank",
                    },
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:perform:singing"],
                    selector: "performance",
                    type: "circumstance",
                    value: {
                        brackets: [
                            { end: 2, value: 1 },
                            { start: 3, value: 2 },
                        ],
                        field: "actor|system.skills.prf.rank",
                    },
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "spellkeeper-shisk": {
        _id: "0TFf82gcfxXG9A54",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Spellkeeper Shisk",
        system: {
            ancestry: {
                name: "Shisk",
                slug: "shisk",
                uuid: "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
            },
            description: {
                value:
                    "<p>Your magical knowledge allows you to cast simple spells. Choose occult or primal. You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell level equal to half your level rounded up.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "spellscale-kobold": {
        _id: "VRyX00OuPGsJSurM",
        img: "systems/pf2e/icons/features/ancestry/spellscale-kobold.webp",
        name: "Spellscale Kobold",
        system: {
            ancestry: {
                name: "Kobold",
                slug: "kobold",
                uuid: "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
            },
            description: {
                value:
                    "<p>A trace of draconic magic flows through your veins. Choose one cantrip from the arcane spell list. You can Cast this Spell as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. You gain the trained proficiency rank in arcane spell attack rolls and spell DCs, and your key spellcasting ability is Charisma.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "spindly-anadi": {
        _id: "WxcbLvufI6JBpLt0",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Spindly Anadi",
        system: {
            ancestry: {
                name: "Anadi",
                slug: "anadi",
                uuid: "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
            },
            description: {
                value:
                    "<p>Your limbs are exceptionally long in both forms, allowing you to skitter about with surprising agility. Your Speed increases from 25 to 30 feet.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [{ key: "FlatModifier", selector: "land-speed", value: 5 }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "spined-azarketi": {
        _id: "9Iu1gFEuvVz9zaYU",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Spined Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>Your fins conceal launchable toxic spines. You have a spine ranged unarmed attack with the unarmed trait that deals @Damage[1d4[poison]] damage, has a range increment of 10 feet, and is in the dart weapon group.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "poison", dice: 1, die: "d4" } },
                    group: "dart",
                    img: "systems/pf2e/icons/unarmed-attacks/spine.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Spine",
                    range: { increment: 10 },
                    traits: ["unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "steelskin-hobgoblin": {
        _id: "BFOsMnWfXL1oaWkY",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Steelskin Hobgoblin",
        system: {
            ancestry: {
                name: "Hobgoblin",
                slug: "hobgoblin",
                uuid: "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
            },
            description: {
                value:
                    "<p>When you are cut or burned, your body responds by forming tough but flexible callouses over the site of the injury. Over time, this makes the most vulnerable sections of your body harder and more resistant to damage. Many steelskin hobgoblins intentionally use blades and flame to scar themselves in intricate patterns, though this isn't universal. Your flat check to recover from persistent physical (including bleed), energy, or poison damage is DC 13 (rather than DC 15), or @Check[type:flat|dc:8] when provided particularly effective assistance.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    itemType: "condition",
                    key: "ItemAlteration",
                    mode: "downgrade",
                    predicate: [
                        {
                            or: [
                                "item:damage:category:energy",
                                "item:damage:category:physical",
                                "item:damage:type:poison",
                            ],
                        },
                    ],
                    property: "pd-recovery-dc",
                    value: 13,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "stickytoe-grippli": {
        _id: "rFdVYKtHsZzRCsSd",
        img: "systems/pf2e/icons/features/ancestry/stickeytoe-tripkee.webp",
        name: "Stickytoe Grippli",
        system: {
            ancestry: {
                name: "Grippli",
                slug: "grippli",
                uuid: "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
            },
            description: {
                value:
                    "<p>Your hands and feet exude a film that helps them adhere to surfaces. You gain a +2 circumstance bonus to your Fortitude and Reflex DC against attempts to Disarm, Shove, or Trip you. When ascending trees, vines, and other foliage, if you roll a success on the Athletics check to Climb, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [{ or: ["action:disarm", "action:shove", "action:trip"] }],
                    selector: ["fortitude", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "stonestep-shisk": {
        _id: "lDT5h3f5GXRj42Ir",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Stonestep Shisk",
        system: {
            ancestry: {
                name: "Shisk",
                slug: "shisk",
                uuid: "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
            },
            description: {
                value:
                    "<p>Navigating mountains and other rocky terrain is second nature to you. You can ignore non-magical difficult terrain caused by rubble and uneven ground made of stone and earth.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "stormtossed-tengu": {
        _id: "7vHLPleFpSqKAjWG",
        img: "systems/pf2e/icons/features/ancestry/stormtossed-tengu.webp",
        name: "Stormtossed Tengu",
        system: {
            ancestry: {
                name: "Tengu",
                slug: "tengu",
                uuid: "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
            },
            description: {
                value:
                    "<p>Whether due to a blessing from Hei Feng or hatching from your egg during a squall, you are resistant to storms. You gain electricity resistance equal to half your level (minimum 1).</p>\n<p>You automatically succeed at the flat check to target a @UUID[Compendium.pf2e.conditionitems.Item.Concealed] creature if that creature is concealed only by rain or fog.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "electricity",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "strong-blooded-dwarf": {
        _id: "UV2sABrTC5teOXTE",
        img: "systems/pf2e/icons/features/ancestry/strong-blooded-dwarf.webp",
        name: "Strong-Blooded Dwarf",
        system: {
            ancestry: {
                name: "Dwarf",
                slug: "dwarf",
                uuid: "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
            },
            description: {
                value:
                    "<p>Your blood runs hearty and strong, and you can shake off toxins. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["poison"],
                    selector: "saving-throw",
                    text: "Your succesful saving throws against a poison reduce its stage by 2 (or 1 for a virulent poison). Each critical success reduces its stage by 3 (or 2 for a virulent poison).",
                    title: "{item|name}",
                },
                {
                    key: "Resistance",
                    type: "poison",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "strong-oak": {
        _id: "bKr34Uvxc2XClr9q",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Strong Oak",
        system: {
            ancestry: {
                name: "Ghoran",
                slug: "ghoran",
                uuid: "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
            },
            description: {
                value:
                    "<p>Most ghorans have bodies of pliable vines and tough stems, but you're covered in sturdy, rough bark and your legs are stable as roots. You gain a +2 circumstance bonus on your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Grapple] or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against effects that would @UUID[Compendium.pf2e.conditionitems.Item.Grabbed]{Grab} you, @UUID[Compendium.pf2e.conditionitems.Item.Restrained]{Restrain} you, or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone]. You also gain a +2 circumstance bonus on Acrobatics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Balance].</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        {
                            or: [
                                "action:grapple",
                                "action:trip",
                                "inflicts:grabbed",
                                "inflicts:restrained",
                                "inflicts:prone",
                            ],
                        },
                    ],
                    selector: ["fortitude", "reflex"],
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:balance"],
                    selector: "acrobatics",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "stronggut-shisk": {
        _id: "KcozzlkFAqShDEzo",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Stronggut Shisk",
        system: {
            ancestry: {
                name: "Shisk",
                slug: "shisk",
                uuid: "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
            },
            description: {
                value:
                    "<p>Your metabolism is slow, allowing you to go for days without food and process maladies at a slower rate. You can go for 1 week without food before you begin to starve Additionally, the onset times and lengths of stages for all diseases and poisons that affect you are increased by 50%. If the onset time or stage is instant or lasts only 1 round, this ability has no effect.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "strongjaw-kobold": {
        _id: "WaCn0mcivFv1omNK",
        img: "systems/pf2e/icons/features/ancestry/strongjaw-kobold.webp",
        name: "Strongjaw Kobold",
        system: {
            ancestry: {
                name: "Kobold",
                slug: "kobold",
                uuid: "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
            },
            description: {
                value:
                    "<p>Your bloodline is noted for their powerful jaws and sharp teeth. You gain a jaws unarmed attack that deals @Damage[1d6[piercing]] damage. Your jaws are in the brawling group and have the finesse and unarmed traits</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.jaws",
                    range: null,
                    traits: ["finesse", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "stuffed-poppet": {
        _id: "7kHg780SAsu2FNfP",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Stuffed Poppet",
        system: {
            ancestry: {
                name: "Poppet",
                slug: "poppet",
                uuid: "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
            },
            description: {
                value:
                    "<p>You have little inside you other than cotton, sawdust, or dried leaves. You take no damage from falling, regardless of the distance you fall.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Grand Bazaar",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sturdy-skeleton": {
        _id: "P8Rl3dUsq8AzXLHC",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Sturdy Skeleton",
        system: {
            ancestry: {
                name: "Skeleton",
                slug: "skeleton",
                uuid: "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
            },
            description: {
                value:
                    "<p>Certain hazardous conditions are not suitable for the average skeleton, so a necromancer might choose to reanimate the bones of a dwarf, orc, or other creature with a reputation for sturdiness. You have 10 Hit Points instead of 6 and gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                { key: "GrantItem", uuid: "Compendium.pf2e.feats-srd.Item.Diehard" },
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.ancestryhp",
                    value: 10,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    suli: {
        _id: "RKz7Z5pefXKiv9JE",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Suli",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>You are descended from a janni or otherwise embody a dichotomy of opposing elemental planar forces. You gain the suli trait, in addition to the traits from your ancestry. You also gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision], or you gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision] if your ancestry already has low-light vision. You can choose from suli feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { add: ["suli"], key: "ActorTraits" },
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: ["geniekin", "suli"] },
        },
        type: "heritage",
    },
    "surgewise-fleshwarp": {
        _id: "hzW7VoRDYsKJB8ku",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Surgewise Fleshwarp",
        system: {
            ancestry: {
                name: "Fleshwarp",
                slug: "fleshwarp",
                uuid: "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
            },
            description: {
                value:
                    "<p>The undulations of your body's cilia are hyper-attuned to wellsprings of magic; they trill and thrum with insights into occult energies, and their vibrations alert you to the presence of secrets. You gain the trained proficiency rank in Occultism. If you're trained in Occultism, you instead become trained in another skill of your choice. You also gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.occ.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "sweetbreath-gnoll": {
        _id: "B89BCo6LtI3SJq54",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Sweetbreath Gnoll",
        system: {
            ancestry: {
                name: "Gnoll",
                slug: "gnoll",
                uuid: "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
            },
            description: {
                value:
                    "<p>You're a striped, pale-furred gnoll with oddly pleasant breath, which you can use to entrance your prey. You are trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to Make an Impression if the target can smell your breath.</p>\n<hr />\n<p><em>Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill.</em></p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["action:make-an-impression"],
                    selector: "diplomacy",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.dip.rank",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    sylph: {
        _id: "G8jfMayPv4vZvAVr",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Sylph",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>You are descended from air elementals or were born under the element's influence. You gain the sylph trait, in addition to the traits from your ancestry. You also gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision] or @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision] if your ancestry already has low-light vision. You can choose from sylph feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { add: ["sylph"], key: "ActorTraits" },
                { key: "Sense", selector: "lowLightVision" },
                {
                    key: "Sense",
                    predicate: ["self:low-light-vision:from-ancestry"],
                    selector: "darkvision",
                },
            ],
            traits: { rarity: "uncommon", value: [] },
        },
        type: "heritage",
    },
    "tactile-azarketi": {
        _id: "S1062No0sYH35AhN",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Tactile Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>Your skin can detect the slightest changes in ocean currents. You gain imprecise wavesense with a range of 30 feet, allowing you to sense motion in the water around you. You also gain a +1 circumstance bonus to Survival checks to Sense Direction in aquatic environments.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Tactile Azarketi (Sense Direction in aquatic environments)",
                    predicate: ["action:sense-direction", "terrain:aquatic"],
                    selector: "survival",
                    type: "circumstance",
                    value: 1,
                },
                { acuity: "imprecise", key: "Sense", range: 30, selector: "wavesense" },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "tailed-goblin": {
        _id: "8wGUh9RsMUamOKjh",
        img: "systems/pf2e/icons/features/ancestry/tailed-goblin.webp",
        name: "Tailed Goblin",
        system: {
            ancestry: {
                name: "Goblin",
                slug: "goblin",
                uuid: "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
            },
            description: {
                value:
                    "<p>You have a powerful tail, likely because you descend from a community of monkey goblins. You gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Climb], you gain @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] as a bonus feat, and you reduce the number of free hands required to climb or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] by one.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Tailed Goblin (Climb)",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "taloned-tengu": {
        _id: "qM566kCXljkOpocA",
        img: "systems/pf2e/icons/features/ancestry/taloned-tengu.webp",
        name: "Taloned Tengu",
        system: {
            ancestry: {
                name: "Tengu",
                slug: "tengu",
                uuid: "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
            },
            description: {
                value:
                    "<p>Your talons are every bit as sharp and strong as your beak. You gain a talon unarmed attack that deals @Damage[1d4[slashing]] damage. Your talons are in the brawling group, and have the agile, finesse, unarmed and versatile piercing traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d4" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/unarmed-attacks/talon.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Talon",
                    range: null,
                    traits: ["agile", "finesse", "unarmed", "versatile-p"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    talos: {
        _id: "Ga7UEU186pjq7LBD",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Talos",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>Your physical features reflect the influence a zuhra or other metal elemental has had over your bloodline. Your skin likely has a metallic sheen, ranging from the dull luster of raw ore to the gleaming polish of a new blade, with the wear of age or hardship taking the form of tarnish, rust, or scouring. Your hair might resemble spun gold, coiled steel, copper wiring, or braided chains. You gain the talos trait, in addition to the traits from your ancestry. You gain resistance to electricity equal to half your level (minimum 1). You can cast the <em>@UUID[Compendium.pf2e.spells-srd.Item.Detect Metal]</em> cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>\n<p>You can choose from talos feats, geniekin feats, and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "electricity",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "uncommon", value: ["talos"] },
        },
        type: "heritage",
    },
    "technological-fleshwarp": {
        _id: "n2DKA0OQQcfvZRly",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Technological Fleshwarp",
        system: {
            ancestry: {
                name: "Fleshwarp",
                slug: "fleshwarp",
                uuid: "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
            },
            description: {
                value:
                    "<p>Your transformation is due to manipulation by advanced technology, like that found in Numeria. Your emotions are dulled and hard to influence. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["emotion"],
                    selector: "saving-throw",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "thalassic-azarketi": {
        _id: "qbWaybAX1LK7kUyY",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Thalassic Azarketi",
        system: {
            ancestry: {
                name: "Azarketi",
                slug: "azarketi",
                uuid: "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
            },
            description: {
                value:
                    "<p>You trace your lineage from azarketis who lived their lives among the great oceans and seas of the world. You know how to use the currents and the primal magic of water to guide your attacks. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat, and your piercing ranged attacks don't have their range increments halved when fighting underwater targets.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "thickcoat-shoony": {
        _id: "MhXHEh7utEfxBwmc",
        img: "systems/pf2e/icons/features/ancestry/thickcoat-shoony.webp",
        name: "Thickcoat Shoony",
        system: {
            ancestry: {
                name: "Shoony",
                slug: "shoony",
                uuid: "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
            },
            description: {
                value:
                    "<p>You are a rare shoony who hails from colder climes. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). You don't need to succeed at a flat check to target a concealed creature if that creature is @UUID[Compendium.pf2e.conditionitems.Item.Concealed] only by snow. Unless you wear protective gear or take shelter, environmental heat effects are one step more extreme for you.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #153: Life's Long Shadows",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "thorned-rose": {
        _id: "6KhxY5ArGFhLF7r1",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Thorned Rose",
        system: {
            ancestry: {
                name: "Ghoran",
                slug: "ghoran",
                uuid: "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
            },
            description: {
                value:
                    "<p>Your beautiful petals and seemingly smooth skin hide silent barbs to pierce the unwary. Your body is covered with wickedly sharp thorns to discourage those that might prey upon you. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Wicked Thorns] reaction.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Wicked Thorns",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "titan-nagaji": {
        _id: "LlUEmCDOLSZaGOyI",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Titan Nagaji",
        system: {
            ancestry: {
                name: "Nagaji",
                slug: "nagaji",
                uuid: "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
            },
            description: {
                value:
                    "<p>You were raised to be a warrior or a bodyguard, and your specialized diet and bulging muscles have made your scales as strong as armored plates. Your scales are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of 16, and have the comfort trait. You can never wear other armor or remove your scales. You can etch armor runes onto your scales.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.equipment-srd.Item.Titan Nagaji Scales",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "toy-poppet": {
        _id: "EHDYVhJcZ9uPUjfZ",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Toy Poppet",
        system: {
            ancestry: {
                name: "Poppet",
                slug: "poppet",
                uuid: "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
            },
            description: {
                value:
                    "<p>You have the form of a child's tiny toy or doll, but you don't let your small size impede your joy of life. Instead of Small, your size is Tiny. Like other Tiny creatures, you don't automatically receive lesser cover from being in a larger creature's space, but circumstances might allow you to Take Cover. You can purchase weapons, armor, and other items for your size with the same statistics as normal gear, except that melee weapons have a reach of 0 for you (or a reach 5 feet shorter than normal if they have the reach trait). You can enter another creature's space, which is important because you must usually enter a creature's space to attack it with melee Strikes! Remember to adjust the Bulk of items and your Bulk limit for Tiny size.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Grand Bazaar",
            },
            rules: [{ key: "CreatureSize", value: "tiny" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "treedweller-goblin": {
        _id: "EEvA4uj8h3zDiAfP",
        img: "systems/pf2e/icons/features/ancestry/treedweller-goblin.webp",
        name: "Treedweller Goblin",
        system: {
            ancestry: {
                name: "Goblin",
                slug: "goblin",
                uuid: "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
            },
            description: {
                value:
                    "<p>You have adapted particularly well to living in forested environments. As long as you are in a forest or jungle, you gain a +2 circumstance bonus to Stealth checks to @UUID[Compendium.pf2e.actionspf2e.Item.Hide] and @UUID[Compendium.pf2e.actionspf2e.Item.Sneak], Survival checks to @UUID[Compendium.pf2e.actionspf2e.Item.Subsist], and your Survival DC to @UUID[Compendium.pf2e.actionspf2e.Item.Cover Tracks].</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Treedweller Goblin (Subsist)",
                    predicate: ["action:subsist"],
                    selector: "survival",
                    type: "circumstance",
                    value: 2,
                },
                {
                    key: "FlatModifier",
                    label: "Treedweller Goblin (Hide or Sneak)",
                    predicate: [{ or: ["action:hide", "action:sneak"] }],
                    selector: "stealth",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    trogloshi: {
        _id: "AVZJI5wP2X5o0LL3",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Trogloshi",
        system: {
            ancestry: {
                name: "Kashrishi",
                slug: "kashrishi",
                uuid: "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
            },
            description: {
                value:
                    "<p>You're adapted to the sunless regions of dense jungle forests and deep caves, with soft flesh lacking pigment and unusually clear crystalline horns. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Crystal Luminescence] ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Crystal Luminescence",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "tunnel-rat": {
        _id: "U882U2NUUGL6u3rL",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Tunnel Rat",
        system: {
            ancestry: {
                name: "Ratfolk",
                slug: "ratfolk",
                uuid: "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
            },
            description: {
                value:
                    "<p>Your incredibly small bones allow you to easily compress your body and squeeze through gaps. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Squeeze] feat as a bonus feat, even if you aren't trained in Acrobatics. Tight spaces not tight enough to require the Squeeze action aren't difficult terrain for you.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Squeeze",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "tunnelflood-kobold": {
        _id: "ZW8GX14n3ZGievK1",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Tunnelflood Kobold",
        system: {
            ancestry: {
                name: "Kobold",
                slug: "kobold",
                uuid: "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
            },
            description: {
                value:
                    "<p>You grew up in a warren crisscrossed by underwater passages, whether natural or excavated. You gain a swim Speed of 15 feet.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "BaseSpeed", selector: "swim-speed", value: 15 }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "twilight-halfling": {
        _id: "cCy8vsZENlwiAyZ6",
        img: "systems/pf2e/icons/features/ancestry/twilight-halfling.webp",
        name: "Twilight Halfling",
        system: {
            ancestry: {
                name: "Halfling",
                slug: "halfling",
                uuid: "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
            },
            description: {
                value:
                    "<p>Your ancestors performed many secret acts under the concealing cover of dusk, whether for good or ill, and over time they developed the ability to see in twilight beyond even the usual keen sight of halflings. You gain low-light vision.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [{ key: "Sense", selector: "lowLightVision" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "umbral-gnome": {
        _id: "d0bNxgGqvaCkFlhN",
        img: "systems/pf2e/icons/features/ancestry/umbral-gnome.webp",
        name: "Umbral Gnome",
        system: {
            ancestry: {
                name: "Gnome",
                slug: "gnome",
                uuid: "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
            },
            description: {
                value:
                    "<p>Whether from a connection to dark or shadowy fey, from the underground gnomes known as drathnelar, or from another source, you can see in complete darkness. You gain darkvision.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [{ key: "Sense", selector: "darkvision" }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "unbreakable-goblin": {
        _id: "ULj56ZoW7dWdnBvu",
        img: "systems/pf2e/icons/features/ancestry/unbreakable-goblin.webp",
        name: "Unbreakable Goblin",
        system: {
            ancestry: {
                name: "Goblin",
                slug: "goblin",
                uuid: "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
            },
            description: {
                value:
                    "<p>You're able to bounce back from injuries easily due to an exceptionally thick skull, cartilaginous bones, or some other mixed blessing. You gain 10 Hit Points from your ancestry instead of 6. When you fall, reduce the falling damage you take as though you had fallen half the distance.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.ancestryhp",
                    value: 10,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    undine: {
        _id: "Gmk7oNITvMVBy78Z",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Undine",
        system: {
            ancestry: null,
            description: {
                value:
                    "<p>A water elemental ancestor influences your bloodline. You gain the undine trait, in addition to the traits from your ancestry. You gain a swim Speed of 10 feet and the amphibious trait. Like all creatures with the amphibious trait, you can breathe both water and air. You can choose from undine feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { add: ["undine", "amphibious"], key: "ActorTraits" },
                { key: "BaseSpeed", selector: "swim", value: 10 },
            ],
            traits: { rarity: "uncommon", value: [] },
        },
        type: "heritage",
    },
    "unseen-lizardfolk": {
        _id: "VYfpTUuXJM3iBOz0",
        img: "systems/pf2e/icons/features/ancestry/unseen-lizardfolk.webp",
        name: "Unseen Lizardfolk",
        system: {
            ancestry: {
                name: "Lizardfolk",
                slug: "lizardfolk",
                uuid: "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
            },
            description: {
                value:
                    "<p>You can change your skin color to blend in with your surroundings, making minor shifts with a single action and dramatic changes over the course of an hour.</p>\n<p>When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the minor, single action application of this ability to make localized changes that help you blend into your surroundings, gaining a +2 circumstance bonus to Stealth checks until your surroundings change in coloration or pattern.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Unseen Lizardfolk (coloration matches environment)",
                    predicate: ["coloration-matches"],
                    selector: "stealth",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "venom-resistant-vishkanya": {
        _id: "OBxrlZKg0IC5n238",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Venom-Resistant Vishkanya",
        system: {
            ancestry: {
                name: "Vishkanya",
                slug: "vishkanya",
                uuid: "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
            },
            description: {
                value:
                    "<p>Your body contains not just venom but numerous antivenoms. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "poison",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "Note",
                    outcome: ["success", "criticalSuccess"],
                    predicate: ["poison", "virulent"],
                    selector: "saving-throw",
                    text: "PF2E.SpecificRule.Vishkanya.VenomResistantVishkanya.VirulentSaveNote",
                    title: "{item|name}",
                },
                {
                    key: "Note",
                    outcome: ["success", "criticalSuccess"],
                    predicate: ["poison", { not: "virulent" }],
                    selector: "saving-throw",
                    text: "PF2E.SpecificRule.Vishkanya.VenomResistantVishkanya.PoisonSaveNote",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "venomous-anadi": {
        _id: "kTlJqhC7ZSE8P8lu",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Venomous Anadi",
        system: {
            ancestry: {
                name: "Anadi",
                slug: "anadi",
                uuid: "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
            },
            description: {
                value:
                    "<p>Your natural form's fangs are capable of injecting foes with venom. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Anadi Venom] ability.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Anadi Venom",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "venomshield-nagaji": {
        _id: "2jsWmnKtidCTpaQV",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Venomshield Nagaji",
        system: {
            ancestry: {
                name: "Nagaji",
                slug: "nagaji",
                uuid: "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
            },
            description: {
                value:
                    "<p>Your intrinsic connection to nagas and mundane serpents grants you an innate resistance to toxins of every sort. You gain resistance to poison equal to half your level (minimum 1 resistance), and you gain a +1 circumstance bonus to all saving throws against poison.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "poison",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "FlatModifier",
                    predicate: ["poison"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "venomtail-kobold": {
        _id: "m9rrlchS10xHFA2G",
        img: "systems/pf2e/icons/features/ancestry/venomtail-kobold.webp",
        name: "Venomtail Kobold",
        system: {
            ancestry: {
                name: "Kobold",
                slug: "kobold",
                uuid: "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
            },
            description: {
                value:
                    "<p>A vestigial spur in your tail secretes one dose of deadly</p>\n<p>venom each day. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Tail Toxin] action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Tail Toxin",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "versatile-heritage": {
        _id: "hFBwsVcSnNCJoimo",
        img: "systems/pf2e/icons/features/ancestry/versatile-heritage.webp",
        name: "Versatile Heritage",
        system: {
            ancestry: {
                name: "Human",
                slug: "human",
                uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
            },
            description: {
                value:
                    "<p>Humanity's versatility and ambition have fueled its ascendance to be the most common ancestry in most nations throughout the world. Select a general feat of your choice for which you meet the prerequisites (as with your ancestry feat, you can select this general feat at any point during character creation).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    adjustName: false,
                    choices: {
                        filter: ["item:level:1", "item:trait:general"],
                        itemType: "feat",
                    },
                    flag: "versatileHeritage",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.GeneralTraining.Prompt",
                },
                {
                    key: "GrantItem",
                    uuid: "{item|flags.pf2e.rulesSelections.versatileHeritage}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "vicious-goloma": {
        _id: "x5S4MNQ0aqUmgHcC",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Vicious Goloma",
        system: {
            ancestry: {
                name: "Goloma",
                slug: "goloma",
                uuid: "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
            },
            description: {
                value:
                    "<p>The chitin on your hands forms powerful claws that allow you to defend yourself. You gain a claw unarmed attack that deals @Damage[1d6[slashing]] damage. Your claws are in the brawling group and have the agile, finesse, and unarmed traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "slashing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/features/ancestry/claws.webp",
                    key: "Strike",
                    label: "PF2E.Weapon.Base.claw",
                    range: null,
                    traits: ["agile", "finesse", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "vigilant-goloma": {
        _id: "sGzhnQpgWErX1bmx",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Vigilant Goloma",
        system: {
            ancestry: {
                name: "Goloma",
                slug: "goloma",
                uuid: "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
            },
            description: {
                value:
                    "<p>You've learned to be aware of not just obvious physical dangers, but also noticeable magical threats. You can cast the <em>@UUID[Compendium.pf2e.spells-srd.Item.Detect Magic]</em> cantrip as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. In addition, your awareness allows you to notice magical traps easier than others. Your proficiency rank in Perception is considered one step better when attempting to detect magical traps. (Trained is considered expert, expert is considered master, and master is considered legendary).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "vine-leshy": {
        _id: "evXJISqyhl3fHE9u",
        img: "systems/pf2e/icons/features/ancestry/vine-leshy.webp",
        name: "Vine Leshy",
        system: {
            ancestry: {
                name: "Leshy",
                slug: "leshy",
                uuid: "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
            },
            description: {
                value:
                    "<p>Your prehensile vines grant you unmatched skill at climbing. You do not need to have any hands free to @UUID[Compendium.pf2e.actionspf2e.Item.Climb]. Additionally, if you roll a success on an Athletics check to Climb, you get a critical success instead.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["action:climb"],
                    selector: "athletics",
                    text: "When you roll a success to Climb, you get a critical success instead.",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "vivacious-gnome": {
        _id: "ViKRoVgog172r163",
        img: "systems/pf2e/icons/features/ancestry/vivacious-gnome.webp",
        name: "Vivacious Gnome",
        system: {
            ancestry: {
                name: "Gnome",
                slug: "gnome",
                uuid: "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
            },
            description: {
                value:
                    "<p>You have an incredibly strong connection to the positive energy that flows through the First World, making it harder to attack your life force with negative energy. You gain negative resistance equal to half your level (minimum 1). When you have the @UUID[Compendium.pf2e.conditionitems.Item.Doomed] condition, the condition affects you as if its value was 1 lower than it actually is (doomed 1 has no effect, doomed 2 causes you to die at @UUID[Compendium.pf2e.conditionitems.Item.Dying]{Dying 3}, and so on).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "void",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wajaghand-vanara": {
        _id: "nUCRd8tmz3C6LM0T",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Wajaghand Vanara",
        system: {
            ancestry: {
                name: "Vanara",
                slug: "vanara",
                uuid: "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
            },
            description: {
                value:
                    "<p>Your ancestors were forced into labor by the rakshasa immortal Ravana, the First and the Last. Although their cleverness while in captivity saved countless lives, and they're bound no longer, the time marked your family with scars upon the mind that will never truly heal, even across the generations. You gain a +1 circumstance bonus to saving throws against emotion effects, and whenever you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["emotion"],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["emotion"],
                    selector: "saving-throw",
                    type: "saves",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "warden-human-bb": {
        _id: "0Iv6LfT3UEt8taj5",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Warden Human (BB)",
        system: {
            ancestry: {
                name: "Human",
                slug: "human",
                uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
            },
            description: {
                value:
                    "<p>You and your family members are survivors, and you've learned how to take care of yourself. Pick one of the following benefits.</p>\n<ul>\n<li>Add 4 to your maximum Hit Points.</li>\n<li>You become an expert in Fortitude saving throws.</li>\n<li>You become trained in medium armor.</li>\n</ul>\n<p><em>Note: This heritage is from the Beginner Box and features non-standard heritage features</em></p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Beginner Box",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SpecificRule.WardenHuman.HitPoints", value: "hp" },
                        {
                            label: "PF2E.SpecificRule.WardenHuman.Fortitude",
                            value: "fortitude",
                        },
                        {
                            label: "PF2E.SpecificRule.WardenHuman.MediumArmor",
                            value: "armor",
                        },
                    ],
                    flag: "wardenHumanBB",
                    key: "ChoiceSet",
                    label: "PF2E.UI.RuleElements.ChoiceSet.Prompt",
                    rollOption: "heritage:warden-human",
                },
                {
                    key: "FlatModifier",
                    predicate: ["heritage:warden-human:hp"],
                    selector: "hp",
                    value: 4,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.proficiencies.defenses.medium.rank",
                    predicate: ["heritage:warden-human:armor"],
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.saves.fortitude.rank",
                    predicate: ["heritage:warden-human:fortitude"],
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "warmarch-hobgoblin": {
        _id: "K124fCpU03SJvmeP",
        img: "systems/pf2e/icons/features/ancestry/warmarch-hobgoblin.webp",
        name: "Warmarch Hobgoblin",
        system: {
            ancestry: {
                name: "Hobgoblin",
                slug: "hobgoblin",
                uuid: "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
            },
            description: {
                value:
                    "<p>You come from a line of wandering mercenaries, constantly on the march and scavenging food on the trail. If you fail, but not critically fail, to @UUID[Compendium.pf2e.actionspf2e.Item.Subsist] in the wilderness, you can still keep yourself fed with poor meals. When exploring, you can @UUID[Compendium.pf2e.actionspf2e.Item.Hustle] twice as long before you have to stop.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "warrenbred-hobgoblin": {
        _id: "0vaeOoECfVD5EGbq",
        img: "systems/pf2e/icons/features/ancestry/warrenbred-hobgoblin.webp",
        name: "Warrenbred Hobgoblin",
        system: {
            ancestry: {
                name: "Hobgoblin",
                slug: "hobgoblin",
                uuid: "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
            },
            description: {
                value:
                    "<p>Your ancestors lived underground. Your ears are larger than those of other hobgoblins and sensitive to echoes. When you are underground, you can use the @UUID[Compendium.pf2e.actionspf2e.Item.Seek] action to sense @UUID[Compendium.pf2e.conditionitems.Item.Undetected] creatures within a @Template[type:burst|distance:30] instead of a @Template[type:burst|distance:15]. In addition, if you roll a success on an Acrobatics check to @UUID[Compendium.pf2e.actionspf2e.Item.Squeeze], you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Note",
                    predicate: ["action:squeeze"],
                    selector: "acrobatics",
                    text: "When you roll a success to Squeeze, you get a critical success instead.",
                    title: "{item|name}",
                },
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: ["action:squeeze"],
                    selector: "acrobatics",
                    type: "skill",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "warrior-android": {
        _id: "RuQSx0QsirIKxwKY",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Warrior Android",
        system: {
            ancestry: {
                name: "Android",
                slug: "android",
                uuid: "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
            },
            description: {
                value:
                    "<p>Your body was originally created to function as a security officer or soldier. You're a naturally gifted warrior preprogrammed for combat. You're trained in all simple and martial weapons.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.proficiencies.attacks.simple.rank",
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.proficiencies.attacks.martial.rank",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "warrior-automaton": {
        _id: "y24ykEUfpIu5Gp6D",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Warrior Automaton",
        system: {
            ancestry: {
                name: "Automaton",
                slug: "automaton",
                uuid: "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
            },
            description: {
                value:
                    "<p>Sporting a bulkier, powerful design, your body has been designed for combat. You have a bulky, humanoid shape. The damage die for your fist increases to 1d6 instead of 1d4. You don't take a penalty when making a lethal attack with your fist or any other unarmed attack.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    baseType: "fist",
                    category: "unarmed",
                    damage: { base: { damageType: "bludgeoning", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "icons/skills/melee/unarmed-punch-fist.webp",
                    key: "Strike",
                    label: "PF2E.Strike.Fist.Label",
                    predicate: [
                        {
                            nor: [
                                "feature:powerful-fist",
                                "feat:martial-artist-dedication",
                                "feat:arcane-fist",
                            ],
                        },
                    ],
                    range: null,
                    slug: "fist",
                    traits: ["agile", "finesse", "nonlethal", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wavediver-tengu": {
        _id: "WEzgrxBRFBGdj8Hx",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Wavediver Tengu",
        system: {
            ancestry: {
                name: "Tengu",
                slug: "tengu",
                uuid: "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
            },
            description: {
                value:
                    "<p>You're one of the rare tengu who can cut through water like a bird through air, and you often lurk in rivers or oceans where few expect you. You gain a swim Speed of 15 feet.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [{ key: "BaseSpeed", selector: "swim", value: 15 }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wellspring-gnome": {
        _id: "etkuQkjkNLPLnjkA",
        img: "systems/pf2e/icons/features/ancestry/wellspring-gnome.webp",
        name: "Wellspring Gnome",
        system: {
            ancestry: {
                name: "Gnome",
                slug: "gnome",
                uuid: "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
            },
            description: {
                value:
                    "<p>Some other source of magic has a greater hold on you than the primal magic of your fey lineage does. This connection might come from an occult plane or an ancient occult song; a deity, celestial, or fiend; magical effluent left behind by a mage war; or ancient rune magic.</p>\n<p>Choose arcane, divine, or occult. You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up. Whenever you gain a primal innate spell from a gnome ancestry feat, change its tradition from primal to your chosen tradition.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wetlander-lizardfolk": {
        _id: "dJeiekfqGQ8dkwsO",
        img: "systems/pf2e/icons/features/ancestry/wetlander-lizardfolk.webp",
        name: "Wetlander Lizardfolk",
        system: {
            ancestry: {
                name: "Lizardfolk",
                slug: "lizardfolk",
                uuid: "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
            },
            description: {
                value:
                    "<p>Your family is descended from the most common lizardfolk heritage, and you are accustomed to aquatic environments. You gain a 15-foot @UUID[Compendium.pf2e.actionspf2e.Item.Swim] Speed.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [{ key: "BaseSpeed", selector: "swim", value: 15 }],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "whipfang-nagaji": {
        _id: "cDElVLonQvUK3vVk",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Whipfang Nagaji",
        system: {
            ancestry: {
                name: "Nagaji",
                slug: "nagaji",
                uuid: "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
            },
            description: {
                value:
                    "<p>You have a long, flexible neck that can curl into a striking pose like that of a snake. Your deceptively powerful muscles allow you to bite with surprising distance and speed. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Raise Neck] action.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Raise Neck",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "whisper-elf": {
        _id: "1wVDYY9Wue0G5R9Q",
        img: "systems/pf2e/icons/features/ancestry/whisper-elf.webp",
        name: "Whisper Elf",
        system: {
            ancestry: {
                name: "Elf",
                slug: "elf",
                uuid: "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
            },
            description: {
                value:
                    "<p>Your ears are finely tuned, able to detect even the slightest whispers of sound. You gain a +2 circumstance bonus when using the @UUID[Compendium.pf2e.actionspf2e.Item.Seek] action to find @UUID[Compendium.pf2e.conditionitems.Item.Hidden] or @UUID[Compendium.pf2e.conditionitems.Item.Undetected] creatures within 30 feet of you. When you target an opponent that is @UUID[Compendium.pf2e.conditionitems.Item.Concealed] from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. This benefit doesn't apply if you can't hear or if the creature is incapable of making sound (for example, if it's affected by a @UUID[Compendium.pf2e.spells-srd.Item.Silence] spell).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        { or: ["target:condition:undetected", "target:condition:hidden"] },
                        { lte: ["target:distance", 30] },
                        "target:audible",
                    ],
                    selector: "perception",
                    type: "circumstance",
                    value: 2,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wildwood-halfling": {
        _id: "xtRIYizCjLg9qe1Z",
        img: "systems/pf2e/icons/features/ancestry/wildwood-halfling.webp",
        name: "Wildwood Halfling",
        system: {
            ancestry: {
                name: "Halfling",
                slug: "halfling",
                uuid: "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
            },
            description: {
                value:
                    "<p>You hail from deep within a jungle or forest, and you've learned how to use your small size to wriggle through undergrowth and other obstacles. You ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Core Rulebook",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "windup-poppet": {
        _id: "Cv7BOjuziOQ0PO9r",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Windup Poppet",
        system: {
            ancestry: {
                name: "Poppet",
                slug: "poppet",
                uuid: "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
            },
            description: {
                value:
                    "<p>You're made primarily of soft metals, such as tin or silver, and your life force dwells within an exceptional array of clockworks deep in your body. Provided you wind metal tabs on your body a few times each day, you don't need food or water to survive. You must still breathe to ventilate your internal mechanisms and sleep to give your mechanisms rest, just like other poppets.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Grand Bazaar",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "windweb-grippli": {
        _id: "xaTTN5anLEBzWCzv",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Windweb Grippli",
        system: {
            ancestry: {
                name: "Grippli",
                slug: "grippli",
                uuid: "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
            },
            description: {
                value:
                    "<p>Tough webbing along your hands and toes can slow any fall. As long as you have one hand free, you take no falling damage, regardless of the distance you fall.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "winter-catfolk": {
        _id: "6dMd4JG0ndrObEUj",
        img: "systems/pf2e/icons/features/ancestry/winter-catfolk.webp",
        name: "Winter Catfolk",
        system: {
            ancestry: {
                name: "Catfolk",
                slug: "catfolk",
                uuid: "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
            },
            description: {
                value:
                    "<p>You have a thick coat of fur that protects you from the cold. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "winter-orc": {
        _id: "pZ1u2ScWrBXSaAqQ",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Winter Orc",
        system: {
            ancestry: {
                name: "Orc",
                slug: "orc",
                uuid: "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
            },
            description: {
                value:
                    "<p>Your ancestors survived in cold climates. You become trained in Survival, and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.sur.rank",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wintertouched-human": {
        _id: "KO33MNyY9VqNQmbZ",
        img: "systems/pf2e/icons/features/ancestry/wintertouched-human.webp",
        name: "Wintertouched Human",
        system: {
            ancestry: {
                name: "Human",
                slug: "human",
                uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
            },
            description: {
                value:
                    "<p>The power of winter flows through you. This heritage is most common among the Jadwiga of Irrisen, due to their descent from Baba Yaga, and certain Erutaki touched by the spirits. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Character Guide",
            },
            rules: [
                {
                    key: "Resistance",
                    type: "cold",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wishborn-poppet": {
        _id: "w5801ArZQCU8IXnU",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Wishborn Poppet",
        system: {
            ancestry: {
                name: "Poppet",
                slug: "poppet",
                uuid: "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
            },
            description: {
                value:
                    "<p>You were wished to life, either by a powerful spellcaster or by the earnest desire of an innocent person who loved you very much. You're living proof that a hopeful spirit can overcome any obstacle. If you roll a success on a saving throw against an emotion or fear effect, you get a critical success instead.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Grand Bazaar",
            },
            rules: [
                {
                    adjustment: { success: "one-degree-better" },
                    key: "AdjustDegreeOfSuccess",
                    predicate: [{ or: ["emotion", "fear"] }],
                    selector: "saving-throw",
                    type: "save",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "wisp-fetchling": {
        _id: "kHHcvJBJNiPJTuna",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Wisp Fetchling",
        system: {
            ancestry: {
                name: "Fetchling",
                slug: "fetchling",
                uuid: "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
            },
            description: {
                value:
                    "<p>Your ancestors' exposure to the Shadow Plane wrought great physical changes. Your hair or skin sometimes appears insubstantial, and you're slighter and more agile than other fetchlings. You're <strong>Small</strong> instead of <strong>Medium</strong>. You gain the trained proficiency rank in Acrobatics, the @UUID[Compendium.pf2e.feats-srd.Item.Quick Squeeze] skill feat, and a +1 circumstance bonus to Acrobatics checks to Tumble Through. If you would automatically become trained in Acrobatics (from your background or class, for example), you instead become trained in a skill of your choice.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                { key: "CreatureSize", value: "sm" },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.acr.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Squeeze",
                },
                {
                    key: "FlatModifier",
                    predicate: ["action:tumble-through"],
                    selector: "acrobatics",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "witch-gnoll": {
        _id: "kXp8qRh5AgtD4Izi",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Witch Gnoll",
        system: {
            ancestry: {
                name: "Gnoll",
                slug: "gnoll",
                uuid: "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
            },
            description: {
                value:
                    "<p>You're a shaggy, dark-furred gnoll capable of making some truly uncanny sounds. You can cast the <em>@UUID[Compendium.pf2e.spells-srd.Item.Ghost Sound]</em> cantrip as an occult innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to Impersonate and Create a Diversion when using only your voice.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: The Mwangi Expanse",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Witch Gnoll (voice bonus only)",
                    predicate: [
                        "auditory",
                        { or: ["action:impersonate", "action:create-a-diversion"] },
                    ],
                    selector: "deception",
                    type: "circumstance",
                    value: 1,
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "woodland-elf": {
        _id: "nW1gi13E62Feto2w",
        img: "systems/pf2e/icons/features/ancestry/woodland-elf.webp",
        name: "Woodland Elf",
        system: {
            ancestry: {
                name: "Elf",
                slug: "elf",
                uuid: "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
            },
            description: {
                value:
                    "<p>You're adapted to life in the forest, the deep jungle, or a similar environment, and you know how to climb trees and use foliage to your advantage. When @UUID[Compendium.pf2e.actionspf2e.Item.Climb]{Climbing} trees, vines, and other foliage, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have @UUID[Compendium.pf2e.feats-srd.Item.Quick Climb]). This doesn't affect you if you're using a climb Speed.</p>\n<p>You can always use the @UUID[Compendium.pf2e.actionspf2e.Item.Take Cover] action when you are within forest terrain to gain cover, even if you're not next to an obstacle you can Take Cover behind.</p>",
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    key: "Note",
                    outcome: [],
                    predicate: ["action:climb", "terrain:foliage"],
                    selector: "athletics",
                    text: "When you climb trees, vines or other foliage, you move at half your Speed on a success, and full speed on a critical success.",
                    title: "{item|name}",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    "woodstalker-lizardfolk": {
        _id: "TQFE10VFvh9wb8zb",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Woodstalker Lizardfolk",
        system: {
            ancestry: {
                name: "Lizardfolk",
                slug: "lizardfolk",
                uuid: "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
            },
            description: {
                value:
                    "<p>You move easily through thick forest and jungle, using every branch or bush. You can always use the Take Cover action when in forest or jungle terrain to gain cover, even if you're not next to an obstacle you would normally be able to Take Cover behind. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Stalker] feat, even if you're not trained in Stealth, and you must choose underbrush as your chosen terrain.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Ancestry Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Stalker",
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
    xyloshi: {
        _id: "FLWUYM2XxYwnIDQf",
        img: "systems/pf2e/icons/default-icons/heritage.svg",
        name: "Xyloshi",
        system: {
            ancestry: {
                name: "Kashrishi",
                slug: "kashrishi",
                uuid: "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
            },
            description: {
                value:
                    "<p>You have prominent neck muscles that allow you to use your facial horn as a tool or weapon. You gain a horn unarmed attack that deals 1d6 piercing damage. Your horn is in the brawling group, and has the finesse and unarmed traits.</p>",
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Impossible Lands",
            },
            rules: [
                {
                    category: "unarmed",
                    damage: { base: { damageType: "piercing", dice: 1, die: "d6" } },
                    group: "brawling",
                    img: "systems/pf2e/icons/unarmed-attacks/horn.webp",
                    key: "Strike",
                    label: "PF2E.BattleForm.Attack.Horn",
                    predicate: [{ not: "feat:puncturing-horn" }],
                    range: null,
                    traits: ["finesse", "unarmed"],
                },
            ],
            traits: { rarity: "common", value: [] },
        },
        type: "heritage",
    },
};
