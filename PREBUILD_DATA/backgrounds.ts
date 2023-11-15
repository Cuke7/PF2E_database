const backgrounds_data = {
    "abadars-avenger": {
        _id: "LHk50lz5Kk5ZYTeo",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Abadar's Avenger",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Hao Jin really has some nerve for a supposed disciple of Abadar. First, she dares to start a collection of trinkets in hopes of emulating the great Abadar's unsurpassable First Vault. As if that weren't enough, she also sets up a contest to give away her most powerful treasures to anyone who can throw a punch! Abadar hasn't directly told you as much, per se, but surely this kind of hubris can't sit well with your beloved deity, regardless of Hao Jin's own supposed ties to the Master of the First Vault. At the very least, someone's got to check out this shoddy imitation of the First Vault and write a report for the church of Abadar - and you've decided that someone is you.</p>\n<p>With or without the blessing of an actual priest of Abadar, you've taken it upon yourself to investigate Hao Jin's \"wondrous\" vault by winning her Ruby Phoenix Tournament. You read a few flyers about the tournament's home city and joined the first team that could handle your righteous zealotry, but any more preparation would be a waste of time. You clearly have the divine will of Abadar on your side (but again, no actual proof of this), which is all you'll need to win this tournament and dispel any notions of Hao Jin's ties to your patron deity.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in Religion and the Goka Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Religion.</p>",
            },
            items: {
                "703ge": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Fists of the Ruby Phoenix Player's Guide",
            },
            rules: [],
            trainedLore: "Goka",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "able-carter": {
        _id: "mWpNrTiREluJ6fLB",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Able Carter",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You worked for many years as a hauler within Geb, either on your own or with a larger operation that shipped goods across Geb's ancient roads. In either case, you were loosely affiliated with the Carters Consortium, and you might have even been part of that faction when allegations of Pharasma worship among its leaders caused the faction's sharp drop in significance.</p>\n<p>Yet the goods still need to be moved from ports to warehouses or from town to town, and that was your business. You've seen a lot of Geb in your time, and you're good at interacting with the quick and the dead alike, but you've given up the shipping business for more lucrative opportunities.</p>\n<p>The Carters Consortium values your past work, especially because so few people are sticking by them today. Your party gains 1 Reputation Point with the Carters Consortium at the start of the campaign.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Deception or Diplomacy skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] if you chose Deception or @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] if you chose Diplomacy. You're also trained in a Lore skill with one of Geb's cities: Graydirge, Mechitar, or Yled.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Blood Lords Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillDec", value: "dec" },
                        { label: "PF2E.SkillDip", value: "dip" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "able-carter",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["able-carter:dec"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
                {
                    key: "GrantItem",
                    predicate: ["able-carter:dip"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            ],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "academy-dropout": {
        _id: "1bjReaLqCD9pvBJ3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Academy Dropout",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were enrolled at a prestigious magical academy, but you've since dropped out. Maybe there was a momentous incident, maybe you had to return to other responsibilities, or perhaps it was just too much for you. Whatever the case, your exit from the academy has shaped your life as much as your entrance and led you to a life of adventure.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Arcana and Academia Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                ar4dx: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    acolyte: {
        _id: "CAjQrHZZbALE7Qjy",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Acolyte",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down, you'll always carry within you the lessons you learned.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Religion skill and the Scribing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Student of the Canon] skill feat.</p>",
            },
            items: {
                "1v9gz": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Student of the Canon",
                    uuid: "Compendium.pf2e.feats-srd.Item.Student of the Canon",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Scribing",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    acrobat: {
        _id: "IFHYbU6Nu8BiTsRa",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Acrobat",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In a circus or on the streets, you earned your pay by performing as an acrobat. You might have turned to adventuring when the money dried up, or simply decided to put your skills to better use.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Acrobatics skill and the Circus Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Steady Balance] skill feat.</p>",
            },
            items: {
                c4lrh: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Steady Balance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Steady Balance",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Circus",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    aerialist: {
        _id: "qY4IUwVWIKPSFskP",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Aerialist",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Experienced with trapezes, aerial silks, and hoops, your skill is in performing death-defying stunts high above the ground. The Celestial Menagerie skimped on safety devices such as nets and quality ropes, so you also learned to take a fall better than most. After a harrowing near-death experience involving a cracked trapeze bar, you decided to take your expertise elsewhere.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Acrobatics skill and the Rope Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] skill feat.</p>",
            },
            items: {
                htrdu: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Cat Fall",
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [],
            trainedLore: "Rope Lore",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "aiudara-seeker": {
        _id: "3kXTGUvodNMnJTxb",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Aiudara Seeker",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>[Legacy - Age of Ashes]</strong></p>\n<p>The aiudara of Alseta's Ring have become more well known, and you are interested in learning more about them.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Portal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat.</p>",
            },
            items: {
                sgdv7: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #150: Broken Promises",
            },
            rules: [],
            trainedLore: "Portal Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "alkenstar-outlaw": {
        _id: "fyKPDYFeIrgzADJB",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Alkenstar Outlaw",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're an outlaw whose first crime was stealing the guns from Alkenstar's Gunworks which allowed you to commence a crime spree of epic proportions. You don't know where your road ends, but it's probably going to be a bloody affair. The life of an adventurer might even be a relief compared to a life forever on the run from Alkenstar authorities and their allies.</p>\n<p>Choose two ability boosts. One boost must be to <strong>Dexterity</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in Thievery and Underworld Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Subtle Theft] skill feat.</p>",
            },
            items: {
                lkc9f: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Subtle Theft",
                    uuid: "Compendium.pf2e.feats-srd.Item.Subtle Theft",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Underworld",
            trainedSkills: { custom: "", value: ["thi"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "alkenstar-sojourner": {
        _id: "Yuwr2pT3z3WYTX9T",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Alkenstar Sojourner",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You came to Alkenstar because you heard they had guns, but you stayed because of the atmosphere. Or the guns. Either way, journalism and scientific curiosity opened the door to a life of adventure. Now you continue to adventure in the Alkenstar area, using your skills to deal with whatever situations present themselves.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Society and Engineering Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                i6f1u: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "alkenstar-tinker": {
        _id: "0c9Np7Yq5JSxZ6Tb",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Alkenstar Tinker",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Impossible Lands</p>\n<hr />\n<p>Your dedication to the scientific inquiry of your native Alkenstar provides great insight into mechanical and chemical innovation.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Alchemical Crafting] skill feat.</p>",
            },
            items: {
                "3pqt3": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Alchemical Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Engineering Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    alloysmith: {
        _id: "zwjoAOGkT44MmDKT",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Alloysmith",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Blacksmithing might be an ancient profession, but you are its cutting edge. You've studied the properties of different metals, experimented with them by combining them, exposing them to different elements and processes, and have even delved into the metaphysical nature of metal in your quest to master it. You might have taken up adventuring to acquire more funding and materials or to test your designs.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Crafting skill and the Plane of Metal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat with the blacksmithing specialty.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    preselectChoices: { specialtyCrafting: "blacksmithing" },
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            ],
            trainedLore: "Plane of Metal Lore",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "almas-clerk": {
        _id: "G3GIfGLY1xSNqj17",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Almas Clerk",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You worked as a clerk at the Golden Cathedral of Almas in Andoran. The Pathfinder Society's activities in the city, and its passionate defense of its mission, inspired you to join the organization. You help the Society pursue its goals and navigate the laws of Golarion's many locales.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Legal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Glean Contents] skill feat.</p>\n<p>Additionally, when you receive a mission briefing in the city of Almas, you know just how to find the information you need. You gain a +2 circumstance bonus to your checks to Gather Information or Recall Knowledge during the Getting Started segment of such adventures. Be sure to remind your GM that you have a relevant background.</p>",
            },
            items: {
                "3tvuc": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Glean Contents",
                    uuid: "Compendium.pf2e.feats-srd.Item.Glean Contents",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Blog: Pathfinder Society Year 4 Rule Updates",
            },
            rules: [],
            trainedLore: "Legal Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    amnesiac: {
        _id: "0ZfBP7Tp2P3WN7Dp",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Amnesiac",
        system: {
            boosts: {
                "0": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "2": {
                    selected: null,
                    value: ["cha", "con", "dex", "int", "str", "wis"],
                },
            },
            description: {
                value:
                    "<p>Your background is… well… honestly, you can't remember! You might have inklings deep within your mind, undercurrents of unusual emotions or unexpected responses to certain people or situations, but ultimately you don't know who you once were. You might be adventuring specifically to help discover yourself. It's up to you and the GM how to handle the truth of your character's backstory. You could leave it to the GM so it's a secret, work together with the GM, or even choose to leave it undecided until later. In any case, you and your GM should determine a few noteworthy details about your character or their belongings to get the first clues to your past.</p>\n<p>You gain three free ability boosts. You choose two, and the GM chooses the third based on their first inklings of your character's possible history.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "GM choice free skill boost",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "animal-whisperer": {
        _id: "5RGLAPi5sLykRcmm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Animal Whisperer",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have always felt a connection to animals, and it was only a small leap to learn to train them. As you travel, you continuously encounter different creatures, befriending them along the way.</p>\n<p>Choose two attribute boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Nature skill and a Lore skill related to one terrain inhabited by animals you like (such as Plains Lore or Swamp Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] skill feat.</p>",
            },
            items: {
                e036p: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Train Animal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "animal-wrangler": {
        _id: "K35I1WCbzT5xnJ6N",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Animal Wrangler",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have a long history of working with large circus animals for the Celestial Menagerie, such as performing in an animal act, jostling animals back into their cages, or even sweeping dung out of squalid pens. Mistress Dusklight's ongoing mistreatment of her animals compelled you to quit, and you now strive to ensure animals aren't abused.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Athletics or Nature skills. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Titan Wrestler] if you chose Athletics, or @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] if you chose Nature. You are also trained in a Lore skill related to a particular kind of common animal (such as Equine Lore, Feline Lore, or Pachyderm Lore).</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillAth", value: "athletics" },
                        { label: "PF2E.SkillNat", value: "nature" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "animal-wrangler",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["animal-wrangler:athletics"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Titan Wrestler",
                },
                {
                    key: "GrantItem",
                    predicate: ["animal-wrangler:nature"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            ],
            trainedLore: "<Common Animal> Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "anti-magical": {
        _id: "byyceQSVT0H5GfNB",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Anti-Magical",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Magic has never worked quite right around you. Perhaps you have become a magic-user in spite of that, or perhaps you use your unique ability to fight magic-users.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in a Lore skill of your choice, though it can't be about a magical subject (as determined by the GM if it's unclear). Whenever you would be affected by magic, even your own magic or that of an ally, the originator of the effect must attempt a @Check[type:flat|dc:3].</p>\n<p>On a failure, the magic doesn't affect you (though it still has its normal effects on anyone else). On a success, the magic affects you and there is no need to attempt further flat checks for the same magical effect, even if it affects you again later.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "<Non-Magical> Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "anti-tech-activist": {
        _id: "MgiZ25JdT6O3fLbO",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Anti-Tech Activist",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've seen the sorts of things that technology brings- polluted environments, workers put out of their jobs or horribly injured, and the slow erosion of society-and you've vowed to inform the larger world of these ills. You do so with long, impassioned speeches on street corners and village squares and by talking personally with the heads of various guilds. Adventuring into the wider world could help spread your message even farther.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Guild Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                pppm5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Guild",
            trainedSkills: { custom: "", value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    archaeologist: {
        _id: "IoBhge83aYpq0pPV",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Archaeologist",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've excavated enough sites to know that ancient civilizations aren't lost; they're merely buried and waiting for the right scholar to unearth them and tell their story. You might have worked as a laborer or local guide before learning formal archaeological techniques.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Architecture Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Additional Lore] skill feat related to an ancient culture or the history of a culture you've studied (such as Azlanti Lore or Osirian History Lore).</p>",
            },
            items: {
                pqvep: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Additional Lore",
                    uuid: "Compendium.pf2e.feats-srd.Item.Additional Lore",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Pathfinder Society Guide",
            },
            rules: [],
            trainedLore: "Architecture Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    artisan: {
        _id: "6irgRkKZ8tRZzLvs",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Artisan",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As an apprentice, you practiced a particular form of building or crafting, developing a specialized skill. You might have been a blacksmith's apprentice toiling over the forge for countless hours, a young tailor sewing garments of all kinds, or a shipwright shaping the hulls of ships.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Crafting skill and the Guild Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat.</p>",
            },
            items: {
                td7d8: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Specialty Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Guild Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    artist: {
        _id: "y9OyNsxGfmjqdcP0",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Artist",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your art is your greatest passion, whatever form it takes. Adventuring might help you find inspiration, or simply be a way to survive until you become a world-famous artist.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Crafting skill and the Art Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat.</p>",
            },
            items: {
                m0e3x: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Specialty Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Art Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "aspiring-free-captain": {
        _id: "ap25MWBuFGwwhYIG",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Aspiring Free-Captain",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - High Seas</p>\n<hr />\n<p>You seek to join the Free Captains of the Shackles and have learned everything you need to know about sailing and bossing people around. Now you just need a crew and a ship.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Sailing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                zw1bc: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Sailing Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "aspiring-river-monarch": {
        _id: "gfklP8ub45R4wXKe",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Aspiring River Monarch",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Broken Lands</p>\n<hr />\n<p>New realms rise constantly in the River Kingdoms, and you intend to lead one of them. Making your reign last, however, will require both strength and grace.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] skill feat.</p>",
            },
            items: {
                "1v9rl": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Courtly Graces",
                    uuid: "Compendium.pf2e.feats-srd.Item.Courtly Graces",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Politics Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    astrologer: {
        _id: "3YQ1Wcjzk8ftoyo7",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Astrologer",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Astrologers look to the stars for signs and portents, using their positions to chart courses for those living beneath them. As the celestial spheres move, so does fate itself. You studied the stars and learned to divine your path based on their guidance. Whether the stars directly called you to a life of adventure or you use the stars to guide your wanderlust, you're living out the stars' guidance in a life of adventure.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in Occultism and Astrology Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
            },
            items: {
                prdi2: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Oddity Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Astrology Lore",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "astrological-augur": {
        _id: "5lcDlcXKD8eji6n3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Astrological Augur",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>During your formative years, you learned the stars are a gateway to mystical power or glimpses into the future. Perhaps you grew up surrounded by Iruxi culture or were raised in one of the remaining Lirgeni sanctuaries. You've studied the constellations, using their alignment to predict fortune (or misfortune) and gaining magical powers unlike any of the other astrologers you know. Your readings might primarily focus on the Cosmic Caravan, or perhaps you use other stars to guide you, like the zodiac of Tian Xia.</p>\n<p>Choose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.</p>\n<p>You're trained in Astrology Lore. You can cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Augury]</em> as a divine innate spell once per week, and the spell's effects can see up to 1 hour in the future rather than 30 minutes.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [],
            trainedLore: "Astrology Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "attention-addict": {
        _id: "nXnaV9JwUG1N2dsg",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Attention Addict",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>A roaring crowd chanting your name. Your face plastered all over the city. Fawning fans begging for your autograph. Jealous rivals. Endless fame. The promise of all this and more is what drove you to enter this year's Ruby Phoenix Tournament, and with your prodigious star power it's no wonder why they selected you for the prequalifier on Danger Island. You've got champion stamped all over you. Obviously, the organizers knew a winner when they saw one. It's already clear that you'll be named Ruby Phoenix Champion - the challenges leading up to your prize ceremony are mere formalities, but you're happy to indulge the impassioned masses. After all, the people want a show, and what kind of celebrity would you be if you denied them? You might even deign to compete in some fights, too, as long as your hair doesn't get mussed.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Performance and the Gladiatorial Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] skill feat</p>",
            },
            items: {
                iln6y: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Impressive Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Fists of the Ruby Phoenix Player's Guide",
            },
            rules: [],
            trainedLore: "Gladiatorial",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "atteran-rancher": {
        _id: "eYY3bX7xSH7aicqT",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Atteran Rancher",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Old Cheliax</p>\n<hr />\n<p>You grew up breeding and training the famous horses of the Atteran Ranches in northern Nidal. You may even be sympathetic to the Desnan dissidents who hide there from the Umbral Court.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Animal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] skill feat.</p>",
            },
            items: {
                g8ggs: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Train Animal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Animal Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "awful-scab": {
        _id: "eK8jNZvTwo2iPdEC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Awful Scab",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Prior to the Evisceration of 4707, the district of V'drysha was a lovely borough on the southern edge of Ecanus. Now, it's the Awful, a vast morass of spell-resistant flesh and sinew, ever threatening to engulf the city. You were once a Scab working to push back its influence. It's a nasty, dangerous job, and poorly paid as well, but at least you learned enough to mimic a viscerasuit, the enchanted, airtight suit that protected you from the poisons and plagues of the Awful.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in Medicine and Fleshforged Lore. You also know how to seal your clothing or armor like a viscerasuit. During your daily preparations, you can seal your outfit. The first time each day you are introduced to poison or disease without taking physical damage, the sealed outfit attempts to counteract it using your Medicine modifier as the counteract modifier.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Wake the Dead #1",
            },
            rules: [],
            trainedLore: "Fleshforged Lore",
            trainedSkills: { custom: "", value: ["med"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "back-alley-doctor": {
        _id: "0wzTmGUb8yvzMrO0",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Back-Alley Doctor",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're the medic many turn to when a more official clinic or healer might not be available. You may specialize in stitching up bullet wounds or have a standing, confidential deal with a criminal syndicate to provide your services any time of day or night. In either case, you've perhaps turned to the adventuring life because a former client is unhappy with your work or members of the local constabulary have been asking too many questions.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Risky Surgery] skill feat.</p>",
            },
            items: {
                n6uq0: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Risky Surgery",
                    uuid: "Compendium.pf2e.feats-srd.Item.Risky Surgery",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Underworld",
            trainedSkills: { custom: "", value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    bandit: {
        _id: "6abqATPjYoF946LD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bandit",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your past includes no small amount of rural banditry, robbing travelers on the road and scraping by. Whether your robbery was sanctioned by a local noble or you did so of your own accord, you eventually got caught up in the adventuring life.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Intimidation skill and a Lore skill related to the terrain you worked in (such as Desert Lore or Plains Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                r7b3d: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<Terrain> Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "banished-brighite": {
        _id: "U1gbRkmZqJ7SmpeF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Banished Brighite",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Once, you were a dedicated and important priest of Brigh, goddess of clockwork and invention, based out of the largest church to your deity, the Temple of Brigh in Alkenstar. Here, you made important discoveries in the annals of your religion's canon and furthered the Bronze Lady's agendas of innovation and creation. Your future seemed bright, and you predicted that it was only a matter of time until you ascended to the rank of primary cog or, someday, grand cog.</p>\n<p>Then, your years of devout service were undone in an instant. A man named Ambrost Mugland came to the Temple and demanded not only access to the religious formulas you'd been uncovering, but exclusive rights to the precious knowledge. When you refused, Mugland sent word to the church's leaders that you'd been meddling in heretical doctrine. He also implicated you in the theft of church funds that had mysteriously gone missing as of late. Sure enough, you found yourself being asked to hand in your robes. Your church colleagues didn't turn you in, but they told you in no uncertain terms that you wouldn't be able to find sanctuary for your alleged crimes in the halls of the Temple of Brigh.</p>\n<p>On the run and with nowhere to turn, your faith has been thoroughly tested, though so far you've remained true to your religion and maintained your sacred skills and divine powers. It's unclear what the Bronze Lady has in store for you, but at least one thing's for certain: Ambrost Mugland will pay for what he did.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Brigh Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat.</p>",
            },
            items: {
                "57e4s": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Outlaws of Alkenstar Player's Guide",
            },
            rules: [],
            trainedLore: "Brigh Lore",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    barber: {
        _id: "wudDO9OEsRjJsqhU",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Barber",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Haircuts, dentistry, bloodletting, and surgery-if it takes a steady hand and a razor, you do it. You may have taken to the road to expand your skills, or to test yourself against a world that leaves your patients so battered and bruised.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Surgery Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Risky Surgery] skill feat.</p>",
            },
            items: {
                ph05m: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Risky Surgery",
                    uuid: "Compendium.pf2e.feats-srd.Item.Risky Surgery",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Surgery Lore",
            trainedSkills: { value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    barkeep: {
        _id: "a8BmnIIUR7AYog5B",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Barkeep",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have five specialties: hefting barrels, drinking, polishing steins, drinking, and drinking. You worked in a bar, where you learned how to hold your liquor and rowdily socialize.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Diplomacy skill and the Alcohol Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                dzcua: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Alcohol Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    barker: {
        _id: "z4cCsOT36MB7xldR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Barker",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're skilled at shouting to catch and keep the attention of passersby. A few well-timed and forcefully spoken words not only get people to notice you but also engage them to respond to you. You may have previously worked as a crier or in a more formal barker capacity with Mistress Dusklight's Celestial Menagerie. Either way, your ability to bully a crowd is impressive.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill, and the Crowd Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                raubi: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [],
            trainedLore: "Crowd Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    barrister: {
        _id: "Phvnfdmz4bB7jrI3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Barrister",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Piles of legal manuals, stern teachers, and experience in the courtroom have instructed you in legal matters. You're capable of mounting a prosecution or defense in court, and you tend to keep abreast of local laws, as you never can tell when you might need to know them on short notice.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Diplomacy skill and the Legal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                d4ikn: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Legal Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "beast-blessed": {
        _id: "KboE8OcjCLD7oFWQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Beast Blessed",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You once freed a magical beast from captivity and, whether it was intentional or a byproduct of another action, the grateful creature bestowed a blessing of freedom upon you. Your blessing manifests physically, perhaps as elongated canines, fingernails that grow to a sharp point, excess body hair, or some other feature. This physical manifestation is cosmetic and provides no benefit.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You are trained in the Survival skill. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Bestial Clarity] reaction.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Bestial Clarity",
                },
            ],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "bekyar-restorer": {
        _id: "9LnXsMRwYcxi7nDO",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bekyar Restorer",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Mwangi Expanse</p>\n<hr />\n<p>Though many Bekyars worship demons, you seek to pave a different path for yourself and your kindred, while also attempting to change other Mwangi's treatment of your culture.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Abyss Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                n8ngr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Abyss Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "belkzen-slayer": {
        _id: "EJRWGsPWzAhixuvQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Belkzen Slayer",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>You are a fearsome warrior from the Hold of Belkzen, and your clan counts on you for support, counsel, and defense. With the rising threat of the Whispering Tyrant threatening the safety of your home, you must not let your people down.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Orc Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            items: {
                caima: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Intimidating Glare",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Orc Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "bellflower-agent": {
        _id: "6K6jJkjZ2MJYqQ6h",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bellflower Agent",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Old Cheliax</p>\n<hr />\n<p>You joined a secret society dedicated to freeing halfling slaves, most likely from the cruelty of Chelish reign. You know how to smuggle people in and out of countries.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Smuggler] skill feat.</p>",
            },
            items: {
                "8k49h": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Smuggler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Smuggler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    bibliophile: {
        _id: "xvz5F7iYBWEIjz0r",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bibliophile",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You love few things more than a good book, and as a result, Odd Stories is your favorite shop in Otari. The bookseller Morlibint supplies you with fiction, anthologies, and other delightful reads, and he's always eager to discuss his latest finds with you. You know that imagination is the greatest magic, but a working knowledge of actual magic helps, too.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Library Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Arcane Sense] skill feat.</p>",
            },
            items: {
                wsxkp: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Arcane Sense",
                    uuid: "Compendium.pf2e.feats-srd.Item.Arcane Sense",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Abomination Vaults Player's Guide",
            },
            rules: [],
            trainedLore: "Library Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "black-market-smuggler": {
        _id: "I0vuIFypx8ADSJQC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Black Market Smuggler",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Golden Road</p>\n<hr />\n<p>You know how to work the less-than-legal side of the region's markets and know how to slip contraband past the authorities.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Smuggler] skill feat.</p>",
            },
            items: {
                "52l0f": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Smuggler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Smuggler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    blessed: {
        _id: "9pK15dQJVypSCjzO",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Blessed",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have been blessed by a divinity. For an unknown reason, and irrespective of your actual beliefs, a deity has granted you a boon to use for good or ill. Your blessing grants wisdom and insight to aid you in your struggles. You may or may not even know the identity of the being who blessed you, and the blessing might come with a cost you discover later on.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in a Lore skill associated with the deity who blessed you (such as Shelyn Lore) if you know their identity, or else in a Lore skill of the GM's choice if you don't. Either you can cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Guidance]</em> as a divine innate spell at will, or you gain a similar blessing determined by the GM.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "<Deity> or <GM Choice> Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "blow-in": {
        _id: "qNpLqx6LhBo1jY4A",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Blow-In",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You never expected to join a circus, but you were looking for a good place to lie low for reasons of your own. The Circus of Wayward Wonders came together with several different workers and performers a few months ago. Many came from a circus in Escadar called the Celestial Menagerie, but not all of them. It was easy to slip in among the roustabouts. Although you'd planned to move on quickly, the circus folk have adopted you as one of their own, and they don't ask questions about your past.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Deception or Thievery skills. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Lengthy Diversion] if you chose Deception, or @UUID[Compendium.pf2e.feats-srd.Item.Subtle Theft] if you chose Thievery. You are also trained in the Underworld Lore skill.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillDec", value: "deception" },
                        { label: "PF2E.SkillThi", value: "thievery" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "blow-in",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["blow-in:deception"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Lengthy Diversion",
                },
                {
                    key: "GrantItem",
                    predicate: ["blow-in:thievery"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Subtle Theft",
                },
            ],
            trainedLore: "Underworld Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "bonuwat-wavetouched": {
        _id: "kLjqmylGOXeQ5o5Y",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bonuwat Wavetouched",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Mwangi Expanse</p>\n<hr />\n<p>You are a child of the Bonuwat people, and the sea's salt flows through your veins. You've taken to sailing and swimming gracefully and with ease, earning you the honorific \"wavetouched.\"</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Ocean Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat.</p>",
            },
            items: {
                "9ljw3": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Underwater Marauder",
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Ocean Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "bookish-providence": {
        _id: "GeIFY5C1BxuWQGc7",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bookish Providence",
        system: {
            boosts: {
                "0": { value: ["int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have always been interested in knowledge and learned to read from a very young age. Perhaps one or both of your parents were librarians or scholars, or maybe the local bookshop or university was a place you felt safe at. Or, you could simply have been an avid reader of stories. Whatever the case, books have always brought you peace and comfort, and you try to never travel without a few packed away in your belongings. Since not every book is written in the same language, you've also picked up a few extra languages along the way. Your interest in the written word hasn't always been a positive, though. You might have been bullied or tormented by your peers for being more interested in reading than other pursuits. Or maybe you had some unsettling experiences with misinformation or knowledge that sent you in pursuit of something dangerous. Try to come up with one event from your past where your pursuit of books or the testing of knowledge learned from them placed you in danger, but also keep in mind that you managed to escape this danger because of what you've learned from your voracious reading habits!</p>\n<p>This background is associated with the suit of Books.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat, are trained in the Academia Lore skill, and gain the @UUID[Compendium.pf2e.actionspf2e.Item.Recall Under Pressure] free action.</p>",
            },
            items: {
                "1yalA": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    bookkeeper: {
        _id: "o1lhSKOpKPamTITI",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bookkeeper",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You ran the numbers on a large farm, for a merchant's endeavors, or with a major guild in the city. You kept track of expenses, payroll, profits, and anything else that had to do with money, for better or worse. If better, you might be adventuring to learn how others ply this trade. If worse, you may be fleeing from impending consequences, in the hope that no one finds you.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Accounting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Eye For Numbers] skill feat.</p>",
            },
            items: {
                re6l6: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Eye For Numbers",
                    uuid: "Compendium.pf2e.feats-srd.Item.Eye For Numbers",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Accounting Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "borderlands-pioneer": {
        _id: "4II2KZpizlBBcfCy",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Borderlands Pioneer",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have long lived along the southern border of Brevoy, in the shadow of the wilderness known as the Stolen Lands. Life has been hard, but through hunting, trapping, trading, and coaxing crops from the ground, you've learned how to survive on the rugged frontier. Whether because of your personal expertise and familiarity with the borderlands or in order to reclaim your family's land, you've joined the expedition into the Stolen Lands.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and a Lore skill associated with a particular type of wilderness (choose from forest, hills, mountains, plains, rivers, or swamp). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] skill feat.</p>",
            },
            items: {
                "9pyAP": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Train Animal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Kingmaker Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "bounty-hunter": {
        _id: "a9Q4iIiAZryVWN27",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bounty Hunter",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Bringing in lawbreakers lined your pockets. Maybe you had an altruistic motive and sought to bring in criminals to make the streets safer, or maybe the coin was motivation enough. Your techniques for hunting down criminals transfer easily to the life of an adventurer.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Survival skill and the Legal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Tracker] skill feat.</p>",
            },
            items: {
                "6ge8o": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Tracker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Tracker",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Legal Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "brevic-noble": {
        _id: "U8347JbRAjhowP1q",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Brevic Noble",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    '<p>You claim a tangential but legitimate connection to one of Brevoy\'s noble families. If you aren\'t human, you were adopted by one of Brevoy\'s nobles or were perhaps a favored servant or even a childhood friend of a noble scion. Whatever the case, you\'ve had a comfortable life, though still a far cry from the one your distant cousins or close associates know. An expedition into the storied Stolen Lands seems like just the test to see if you really are worthy of the "noble" title.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost. Choose one of the Brevic lineages below.</p>\n<p><strong>Garess</strong>: Family ties to the Golushkin Mountain dwarves left its mark. Your family motto is "Strong as the Mountains." You\'re trained in the Crafting skill and the Architecture Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat.</p>\n<p><strong>Lebeda</strong>: Your family\'s history of trading along the shores of Lake Reykal pervades your blood. Your family motto is "Success through Grace." You\'re trained in the Society skill and the Mercantile Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>\n<p><strong>Lodovka</strong>: Your family has made a living off the coasts of the Lake of Mists and Veils since before Brevoy existed. Your family motto is "The Waters, Our Fields." You\'re trained in the Athletics skill and the Fishing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat.</p>\n<p><strong>Medvyed</strong>: Your family has a deep respect for the wilderness and is skilled at hunting and surviving off the and. Your family motto is "Endurance Overcomes All." You\'re trained in the Survival skill and the Hunting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat.(choose your terrain from aquatic, forest, mountain, plains, or swamp).</p>\n<p><strong>Orlovsky</strong>: Your family has a reputation for avoiding conflicts. Your family motto is "High Above." You\'re trained in the Diplomacy skill and the Brevoy Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>\n<p><strong>Surtova</strong>: Your family is well known for their political agility and scheming nature. Your family motto is Ours Is the Right." You\'re trained in the Deception skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] skill feat.</p>',
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Kingmaker Player's Guide",
            },
            rules: [
                {
                    adjustName: true,
                    choices: [
                        { label: "PF2E.SpecificRule.BrevicNoble.Garess", value: "garess" },
                        { label: "PF2E.SpecificRule.BrevicNoble.Lebeda", value: "lebeda" },
                        {
                            label: "PF2E.SpecificRule.BrevicNoble.Lodovka",
                            value: "lodovka",
                        },
                        {
                            label: "PF2E.SpecificRule.BrevicNoble.Medvyed",
                            value: "medvyed",
                        },
                        {
                            label: "PF2E.SpecificRule.BrevicNoble.Orlovsky",
                            value: "orlovsky",
                        },
                        {
                            label: "PF2E.SpecificRule.BrevicNoble.Surtova",
                            value: "surtova",
                        },
                    ],
                    flag: "lineage",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.BrevicNoble.Prompt",
                    rollOption: "brevic-lineage",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.crafting.rank",
                    predicate: ["brevic-lineage:garess"],
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.society.rank",
                    predicate: ["brevic-lineage:lebeda"],
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.athletics.rank",
                    predicate: ["brevic-lineage:lodovka"],
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.survival.rank",
                    predicate: ["brevic-lineage:medvyed"],
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.diplomacy.rank",
                    predicate: ["brevic-lineage:orlovsky"],
                    value: 1,
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.deception.rank",
                    predicate: ["brevic-lineage:surtova"],
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["brevic-lineage:garess"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
                {
                    key: "GrantItem",
                    predicate: ["brevic-lineage:lebeda"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
                {
                    key: "GrantItem",
                    predicate: ["brevic-lineage:lodovka"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
                {
                    key: "GrantItem",
                    predicate: ["brevic-lineage:medvyed"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
                {
                    key: "GrantItem",
                    predicate: ["brevic-lineage:orlovsky"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
                {
                    key: "GrantItem",
                    predicate: ["brevic-lineage:surtova"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
            ],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "brevic-outcast": {
        _id: "HiOvPmXEXBjUy0VZ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Brevic Outcast",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>One of your parents was a member of one of the great families of Brevoy, perhaps even of the line of Rogarvia itself. Yet you have no substantive proof of your nobility, and you've learned that claiming such without evidence is a fool's game. Whether a recent attempt to prove your heritage brought down the wrath of a noble family or you seek to prove the worth of the blood in your veins, you've joined an expedition into the Stolen Lands, hoping to make a name all your own.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Politics Lore skill. You take a -1 penalty on all Charisma-based skill checks attempted when dealing with members of the nobility, but gain the @UUID[Compendium.pf2e.feats-srd.Item.Haughty Obstinacy] human ancestry feat, even if you aren't a human. If you manage to establish yourself as a true noble or secure a leadership role in a kingdom, you no longer take the penalty to Charisma-based checks.</p>",
            },
            items: {
                pUIwv: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Haughty Obstinacy",
                    uuid: "Compendium.pf2e.feats-srd.Item.Haughty Obstinacy",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Kingmaker Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: ["target:tag:noblility"],
                    selector: "cha-skill-check",
                    value: -1,
                },
            ],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "bright-lion": {
        _id: "JfGVkZkaoz2lnmov",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Bright Lion",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Mwangi Expanse</p>\n<hr />\n<p>You are a member of the Bright Lions and seek to overthrow the tyrannical reign of Walkena and free Mzali from his cruel whims. You're experienced operating undercover and have had to be cautious of what you say and who you trust, lest you fall afoul of the god-king's terrible punishments.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Mzali Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lie to Me]{Lie To Me} skill feat.</p>",
            },
            items: {
                bk1vm: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lie To Me",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lie to Me",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Mzali Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "broken-tusk-recruiter": {
        _id: "LWoPiYHAyLp8pvYx",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Broken Tusk Recruiter",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your gifted tongue, friendly demeanor, and deep knowledge of Broken Tusk culture and traditions make you an ideal recruiter for new followers. Whenever Broken Tusks come upon weak, weary, or wandering souls, you're often the first sent to meet these folks and determine if they would be a good fit for the following.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Hillcross Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                saayb: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Quest for the Frozen Flame Player's Guide",
            },
            rules: [],
            trainedLore: "Hillcross",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    butcher: {
        _id: "nhQKn1tVV6PKCurq",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Butcher",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've spent uncounted hours walking up and down crowded and noisy circus stands, inventing innovative means to sell refreshments, food, and novelties at inflated prices. (You might know very little about slaughtering animals; \"butcher\" is a circus slang term for a vendor.) The Celestial Menagerie constantly pushed you to figure out how to sell increasingly shoddy toys to children and how to conceal the taste of spoiled treats that should have been discarded days earlier. You peddled disappointment and hated it, so you left to seek a new line of work-although you're not yet willing to leave the circus life altogether.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Mercantile Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Read Lips] skill feat.</p>",
            },
            items: {
                "6pzn1": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Read Lips",
                    uuid: "Compendium.pf2e.feats-srd.Item.Read Lips",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [],
            trainedLore: "Mercantile Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    cannoneer: {
        _id: "8CLTXqyjdzEMKnZC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Cannoneer",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You served as a crewmate aboard a military vessel or pirate ship and were responsible for the use and maintenance of the ship's cannons. A strong back and quick reflexes were equally important to you in your duties, and you know your way around explosives and the dangers that lie therein. These skills serve you well in your new life as an adventurer, as compared to the weight of a cannon, a gear load that makes your allies blanche just makes you laugh instead.</p>\n<p>Choose two ability boosts. One boost must be to <strong>Dexterity</strong> or <strong>Strength</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat.</p>",
            },
            items: {
                ab9pz: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hefty Hauler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Warfare",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    charlatan: {
        _id: "t0t1ck8iKpaI4o5W",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Charlatan",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You traveled from place to place, peddling false fortunes and snake oil in one town, pretending to be royalty in exile to seduce a wealthy heir in the next. Becoming an adventurer might be your next big scam or an attempt to put your talents to use for a greater cause. Perhaps it's a bit of both, as you realize that after pretending to be a hero, you've become the mask.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Deception skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] skill feat.</p>",
            },
            items: {
                "3d2il": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Charming Liar",
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "chelish-rebel": {
        _id: "tA0nggrWfBEhvsKA",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Chelish Rebel",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Old Cheliax</p>\n<hr />\n<p>You joined the fight against House Thrune. You may have helped liberate the nation of Ravounel, or you might be involved in another rebellion, such as Pezzack's, that studied Ravounel's successes.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Kintargo Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                nl8vr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Kintargo Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "child-of-notoriety": {
        _id: "KLWxwhCOdqrbepbu",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Child Of Notoriety",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>One or more of your ancestors committed a grave atrocity, and even though you've tried to live your own life, your family's grim past looms over you like a relentless shadow. You might have traveled a thousand miles to escape the legends, learned how to ingratiate yourself to others, just tried to ignore the everyday accusing glances, or even accepted the notoriety just to be left alone. You didn't commit the crime, yet it haunts you. Whether you're proving the world wrong, proving to yourself that you're no monster, earning wealth to pay reparations, or just driven to do some good with your life, it's time to break free of the past. That journey begins with understanding.</p>\n<p>Clan Tolorr preserves the deeds and misdeeds of dwarven legend. With their help, you might not only understand dwarven crimes and reparations, but also learn how to accept your past and leave the world a little better than when you found it. You've corresponded with Clan Tolorr, but your most recent message came instead from one of the clan's guests: a lizardfolk mystic named Valahask who studies the dead and is eager to meet you. He has lobbied on your behalf, earning you an invitation to Clan Tolorr's upcoming Family Festival.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>Choose whether you've navigated your past through kindness or notoriety thus far. For the former, you're trained in the Diplomacy skill and the Genealogy Lore skill, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat. For the latter, you're trained in the Intimidation skill and the Underworld Lore skill, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>\n<p><strong>Connection:</strong> Valahask, an iruxi mystic</p>\n<p><strong>Reputation Points:</strong> –1</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Sky King's Tomb Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SkillDiplomacy",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.KpFetnUqTiweypZk",
                                skill: "diplomacy",
                            },
                        },
                        {
                            label: "PF2E.SkillIntimidation",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.xQMz6eDgX75WX2ce",
                                skill: "intimidation",
                            },
                        },
                    ],
                    flag: "childOfNotoriety",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.childOfNotoriety.skill}.rank",
                    value: 1,
                },
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    uuid: "{item|flags.pf2e.rulesSelections.childOfNotoriety.feat}",
                },
            ],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "child-of-the-puddles": {
        _id: "irDibuV3Wi7T43sL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Child of the Puddles",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>You grew up in the soggy, squalid quarter of Absalom known as the Puddles. You're at home in tightly packed urban environments.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Acrobatics skill, and the Absalom Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Steady Balance] skill feat.</p>",
            },
            items: {
                bqp05: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Steady Balance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Steady Balance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Absalom Lore",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "child-of-the-twin-village": {
        _id: "0FgYkkKv9u8zxWiO",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Child of the Twin Village",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were born in a village where everyone has a twin with a special link. You have moved to the wider world for reasons of your own, but you still have an unbreakable connection to your twin through your dreams.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Diplomacy and Dreamlands Lore. You gain the ability to communicate with your twin in your dreams. You and your twin gain the effects of dream message every night, only between the two of you; this isn't a spell, but a natural effect. Unless your twin is another PC, your GM roleplays your twin or summarizes your interaction during these dreams.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [],
            trainedLore: "Dreamlands Lore",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "child-of-westcrown": {
        _id: "uNvD4XK1kdvGjQVo",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Child of Westcrown",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Old Cheliax</p>\n<hr />\n<p>Whether you come from Westcrown or elsewhere, you hold the values of pre-Thrune Cheliax dear. You disdain the infernal government, but you are proud of your country and do not consider yourself a rebel.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Westcrown Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                qpsao: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Westcrown Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "chosen-one": {
        _id: "w2GSRC5uMcSUfPGJ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Chosen One",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your birth has fulfilled a prediction, and people close to you are counting on you to do great things. There's intense pressure on you to be up to the task, and the fickle nature of prophecy complicates your path.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>Decide with your GM the basics of the prophecy in which you're meant to play a major part. You're trained in one skill related to the prophecy, and the Fortune-Telling Lore skill. You gain the Prophecy's Pawn free action.</p>\n<hr />\n<p><em>Note: You must select the skill manually and add the Prophecy's Pawn action</em></p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Fortune-Telling Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "circuit-judge": {
        _id: "2TImvKwcFLDVhzUC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Circuit Judge",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're a circuit judge, a courtroom on horseback who serves a group of communities out in the Mana Wastes or a similar backwoods region. You show up every couple of months, hear the cases that have piled up since your last visit, give verdicts, and then it's on to the next town in your itinerary. It's not the easiest life in the world, but it's an interesting one, and you hear some mighty strange cases. Chances are, it was one of those cases that set you on the road to adventure.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in Deception and Legal Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lie to Me]{Lie To Me} skill feat.</p>",
            },
            items: {
                zkeri: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lie To Me",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lie to Me",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Legal",
            trainedSkills: { custom: "", value: ["dec"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "circus-born": {
        _id: "YJpEdmSOjlA2QZeu",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Circus Born",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The itinerant life of a traveling circus performer is nothing new to you; you were born and raised in the circus. You've seen more acts than you can count and grew up hearing the tall tales of circus performers while gathered around their campfires. You've experienced the thrill of captivating crowd ever since you were young. You may have tried a few times to settle down, but the lure of the open road and the glamor of the big top always called you back.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and the Circus Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Professional] skill feat.</p>",
            },
            items: {
                pem87: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Professional",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Professional",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [],
            trainedLore: "Circus Lore",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "clan-associate": {
        _id: "pPR0HAeXLUxP3rx4",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Clan Associate",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You already have a close connection to Clan Tolorr, such as having been born into the clan, worked as an esteemed contractor for them, or married into the clan (even if you chose to retain your prior clan affiliation). Whether through dedicated study or just overhearing your fellows' academic debates, you've absorbed boundless trivia about history—especially local lore. Beyond Tolorr halls, your affiliation earns you respect in Highhelm. Your clan expects you to behave well, as your actions reflect on them.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Highhelm Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>\n<p><strong>Connection:</strong> You have no special connection or sponsor in Clan Tolorr.</p>\n<p><strong>Reputation Points:</strong> +2</p>",
            },
            items: {
                IskX6: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Sky King's Tomb Player's Guide",
            },
            rules: [],
            trainedLore: "Highhelm Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    clockfighter: {
        _id: "dSYel8ABTevOc5YA",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Clockfighter",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>While others choose to use their engineering ability to heal the injured or make brilliant innovations, you've used your skill to repair and modify clockwork constructs that battle in gladiatorial combat. You know how to get a crowd electrified for your clockwork gladiator, win or lose, and you know how to repair it when it gets damaged. These skills serve you well as an adventurer.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Gladiatorial Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Professional] skill feat.</p>",
            },
            items: {
                "48cj5": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Professional",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Professional",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Gladitorial",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "clockwork-researcher": {
        _id: "xKEQvxDMHWRUkL6i",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Clockwork Researcher",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>New forms of clockwork technology are incredibly interesting to you, and you've been studying examples of them to see where else they might be best put to use. You might eventually develop a new prototype machine or find a way to make related technologies practical enough for everyone to benefit. Though before you do, you must continue your research!</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Eye For Numbers] skill feat.</p>",
            },
            items: {
                hp61b: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Eye For Numbers",
                    uuid: "Compendium.pf2e.feats-srd.Item.Eye For Numbers",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "close-ties": {
        _id: "uker8dnTA7WhzXSR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Close Ties",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've forged a close friendship with one of Willowshore's notable citizens, and you have a long tradition of sharing tea with each other while chatting about shared interests, plans for the future, town gossip, or other matters of note.</p>\n<p>Work with your GM to choose one of the NPCs mentioned in the Willowshore Gazetteer (other than Granny Hu or Old Matsuki)—your GM might have suggestions for which NPC makes the most sense for your character or might know something about an NPC's eventual role in the campaign that would give your character a compelling story beat. You could be an employee or apprentice of this NPC, a close relation or friend, or even a friendly competitor in some way.</p>\n<p>Your home is likely relatively close to the place of business or home of your NPC ally.</p>\n<p>During the Reenactment Festival, you likely spent time with your NPC ally and might have made plans to get together the next day on the first day of summer, perhaps have tea together. You were chosen to be an abductee during the Reenactment Festival because your NPC friend or ally suggested the experience would be fun or good for you, or because they'd done it the previous year at your urging and now \"it's your turn.\"</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Tea Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat (choose a specialty associated with your allied NPC), and your allied NPC begins with an attitude of friendly toward the party (rather than indifferent, which is the initial norm for all Willowshore NPCs).</p>\n<p>@UUID[Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Close Ties)]</p>\n<hr />\n<p>You can add one of the following two adjustments to any background to further modify your choice to match your vision for your PC.</p>\n<p><strong>Family:</strong> You and one (or more) other PCs are close family members (siblings, parent/child, married, etc.) If you take this adjustment, the other PC(s) who are your family must also take this adjustment. Choose one of the following to replace the skill feat you otherwise would've gained from your background. (You and your sibling need not share the same choice—a sibling who wants to keep their background's skill feat can pick \"Typical\" from the list.)</p>\n<ul>\n<li><strong>Bickering:</strong> You have a long-standing feud with your sibling(s). Whenever your sibling(s) critically fail a significant skill check or attack roll and you witness their failure, you gain a +1 status bonus to your saving throws until the end of your next turn as you secretly (or perhaps not so secretly) delight in their failure. @UUID[Compendium.pf2e.campaign-effects.Item.Effect: Bickering Family]</li>\n<li><strong>Close-Knit:</strong> You and your sibling(s) work well together, and you go all-out to help them when they're badly hurt. When you provide @UUID[Compendium.pf2e.actionspf2e.Item.Aid] or @UUID[Compendium.pf2e.actionspf2e.Item.Administer First Aid] to your sibling(s), the DC is 5 lower than normal.</li>\n<li><strong>Typical:</strong> You have a standard relationship with your sibling(s); don't change your background's skill feat.</li>\n</ul>\n<p><strong>Foundling:</strong> You aren't a native to Willowshore, but you did grow up in the town. You might have adoptive parents, or you could've grown up on the streets. Choose one of the following to replace the bonus feat you otherwise would've gained from your background.</p>\n<ul>\n<li><strong>Bitter:</strong> You appreciate the town of Willowshore but still resent the conditions that resulted in you being abandoned or left in the town. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</li>\n<li><strong>Mysterious:</strong> You keep secrets, and very few in Willowshore (if anyone) know your history before you settled in the town, in part because you've taken to learning about Willowshore by watching rather than engaging in conversation. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</li>\n<li><strong>Outgoing:</strong> You're grateful for the sense of belonging the townsfolk of Willowshore have extended to you and always do your best to repay that kindness. Once per week when you attempt a skill check to resolve a downtime activity that could benefit Willowshore (several of these activities are detailed in the adventures, and your GM can always make the call if another activity would qualify) and you fail that check, you instead succeed at the check, or if you critically fail at that check, you instead simply fail that check.</li>\n</ul>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Season of Ghosts Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Close Ties)",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Family",
                            value: "family",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Foundling",
                            value: "foundling",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.NoAdjustment",
                            value: "none",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.Prompt",
                    rollOption: "background-variant",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bickering",
                            value: "bickering",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.CloseKnit",
                            value: "close-knit",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Typical",
                            value: "typical",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:family"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FamilyPrompt",
                    rollOption: "background-variant:family",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bitter",
                            value: "bitter",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Mysterious",
                            value: "mysterious",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Outgoing",
                            value: "outgoing",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:foundling"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FoundlingPrompt",
                    rollOption: "background-variant:foundling",
                },
                {
                    key: "GrantItem",
                    predicate: [
                        {
                            or: [
                                "background-variant:none",
                                "background-variant:family:typical",
                            ],
                        },
                    ],
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:bitter"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:mysterious"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            ],
            trainedLore: "Tea Lore",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    clown: {
        _id: "DHrzVqB8f1ed3zTk",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Clown",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Although you've spent time in greasepaint and colorful clothing to amuse crowds, your skills with buffoonery and physical comedy are exceptional whether or not you're in costume. In the employ of Mistress Dusklight's Celestial Menagerie, you spent too many routines distracting an audience from an ill-timed accident or evidence of abused animals or performers. You've had enough of that, and the Celestial Menagerie isn't your home any longer.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and the Clown Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Virtuosic Performer]{Virtuosic Performer (Comedy)} skill feat.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    preselectChoices: { performance: "comedy" },
                    uuid: "Compendium.pf2e.feats-srd.Item.Virtuosic Performer",
                },
            ],
            trainedLore: "Clown Lore",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    codebreaker: {
        _id: "4XpWgGejwb2L6WpK",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Codebreaker",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether you're employed by a military organization to decipher coded messages sent by enemy factions or work independently to crack an enigma created by a past civilization, you have a head for patterns and linguistics. You might even use new clockwork devices to aid you in your efforts.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Cryptography Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Glean Contents] skill feat.</p>",
            },
            items: {
                m7kmw: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Glean Contents",
                    uuid: "Compendium.pf2e.feats-srd.Item.Glean Contents",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Cryptography",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "concordance-researcher": {
        _id: "biCstJF0OGvC5NKW",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Concordance Researcher",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Tasked by the Concordance of Elements to research a variety of enigmatic planar phenomena, you've acquired very specific knowledge about the planes and the interactions between them. While being a researcher is usually a peaceful profession, the Concordance might require you to go out into the field and research unstable planar situations.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in four of the following: Plane of Air Lore, Plane of Earth Lore, Plane of Fire Lore, Plane of Metal Lore, Plane of Water Lore, or Plane of Wood Lore.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "concordance-scout": {
        _id: "idFSq3DYBRomYmZt",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Concordance Scout",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were hired by the Concordance of Elements to seek out rumors of planar breaches or other evidence of planar imbalances. After reporting back to the Concordance, they'd send agents more well equipped to deal with the situation. Still, this job has led you into more trouble than your employers suspect, and you've learned how to get your information quickly and get out relatively unscathed.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Diplomacy skill and one of the following lore skills: Plane of Air Lore, Plane of Earth Lore, Plane of Fire Lore, Plane of Metal Lore, Plane of Water Lore, or Plane of Wood Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                s5rbz: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    conservator: {
        _id: "Ods1qOZ8CTCru8XQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Conservator",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Some history survives only so long as its physical remains do. You've developed robust museum skills to identify relics, preserve artifacts, recreate ancient technologies, and even rebuild shattered treasures—often with painstaking patience, a steady hand, and even a little magic. Your contributions don't end there, as whether you've mastered diligent recordkeeping or helped uncover smuggling rings that are looting archaeological sites, you've made an impression. Hearing of your promising abilities, representatives from Clan Tolorr contacted you, inviting you to study with their museum masters and share your own techniques, all while helping preserve over 10,000 years of history!</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in either the Crafting skill or the Thievery skill, and you're trained in either the Accounting Lore or the Underworld Lore skill. If you selected Crafting, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Repair] skill feat. If you chose Thievery, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance]{Assurance (Thievery)} skill feat.</p>\n<p><strong>Connection:</strong> Ria, an oread gnome curator who studies rivethun traditions</p>\n<p><strong>Reputation Points:</strong> +1</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Sky King's Tomb Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SkillCrafting",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.ASy9AKEIRxPYUi5o",
                                skill: "crafting",
                            },
                        },
                        {
                            label: "PF2E.SkillThievery",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.W6Gl9ePmItfDHji0",
                                skill: "thievery",
                            },
                        },
                    ],
                    flag: "conservator",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.conservator.skill}.rank",
                    value: 1,
                },
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    preselectChoices: { assurance: "thievery" },
                    uuid: "{item|flags.pf2e.rulesSelections.conservator.feat}",
                },
            ],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "construction-occultist": {
        _id: "DpmWrtkrmmgnVtAc",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Construction Occultist",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You helped to build and design buildings and public works on behalf of Geb's architectural faction, the Builders League. You've been taught that creating bridges, gatehouses, roads, walls, and more is as much about planning as it is about brute labor. You learned that the Builders League has plans of occult significance for many of its construction projects and might have even aided them in the way you laid stones or designed walls (although you never learned the great design behind those secret plans). Although you've left construction behind, the skills in long-term planning and leveraging effort remain with you.</p>\n<p>You are still well-regarded by the Builders League. Your party gains 1 Reputation Point with the Builders League at the start of the campaign.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Strength</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Athletics or Occultism skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] if you chose Athletics or @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] if you chose Occultism. You're also trained in Architecture Lore.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Blood Lords Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillOcc", value: "occ" },
                        { label: "PF2E.SkillAth", value: "ath" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "construction-occultist",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["construction-occultist:occ"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
                {
                    key: "GrantItem",
                    predicate: ["construction-occultist:ath"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            ],
            trainedLore: "Architecture Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    cook: {
        _id: "3gN09dOT2hMwGcK2",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Cook",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You grew up in the kitchens of a tavern or other dining establishment and excelled there, becoming an exceptional cook. Baking, cooking, a little brewing on the side--you've spent lots of time out of sight. It's about time you went out into the world to catch some sights for yourself.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Survival skill and the Cooking Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Seasoned] skill feat.</p>",
            },
            items: {
                diizj: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Seasoned",
                    uuid: "Compendium.pf2e.feats-srd.Item.Seasoned",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Cooking Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "corpse-stitcher": {
        _id: "ChAoT1V3Nc4sKXz4",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Corpse Stitcher",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The number of zombies working across Geb as farmhands, laborers, or shambling soldiers seems nearly uncountable. None of these zombies can do their work if they fall to pieces, so the Reanimators maintain legions of surgeons and tailors to keep zombies stitched together and suitable for service. You were one of these corpse stitchers, working long hours to ensure that Geb's mindless workforce could perform at its best. On the day you saw some of your friends come under your needle, you realized how expendable Geb's fleshy population truly is, and you decided that you should seek out a different line of work.</p>\n<p>The Reanimators appreciate your past service. Your party gains 1 Reputation Point with the Reanimators at the start of the campaign.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill. You gain your choice of either the @UUID[Compendium.pf2e.feats-srd.Item.Risky Surgery] or @UUID[Compendium.pf2e.feats-srd.Item.Stitch Flesh] skill feats. You're also trained in Zombie Lore.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Blood Lords Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { value: "Compendium.pf2e.feats-srd.Item.Risky Surgery" },
                        { value: "Compendium.pf2e.feats-srd.Item.Stitch Flesh" },
                    ],
                    flag: "feat",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.SkillFeat",
                },
                { key: "GrantItem", uuid: "{item|flags.pf2e.rulesSelections.feat}" },
            ],
            trainedLore: "Zombie Lore",
            trainedSkills: { custom: "", value: ["med"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    courier: {
        _id: "DBxOUwM7qhGH8MrF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Courier",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In your youth, you earned coin running messages for persons of wealth and influence, darting through crowded cobblestone streets. Your dogged commitment to deliver your message was good training for the life of an adventurer.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Lore skill for the city in which you were raised. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Glean Contents] skill feat.</p>",
            },
            items: {
                "30vfa": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Glean Contents",
                    uuid: "Compendium.pf2e.feats-srd.Item.Glean Contents",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "<City> Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    criminal: {
        _id: "9lVw1JGl5ser6626",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Criminal",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As an unscrupulous independent or as a member of an underworld organization, you lived a life of crime. You might have become an adventurer to seek redemption, to escape the law, or simply to get access to bigger and better loot.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Stealth skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Smuggler] skill feat.</p>",
            },
            items: {
                "19grf": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Smuggler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Smuggler",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "crown-of-chaos": {
        _id: "bdeuzUMiPjEdlPS8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Crown of Chaos",
        system: {
            boosts: {
                "0": { value: ["cha"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your life was one of tumult and mayhem, but you don't see this as a bad thing. Perhaps you lived life on the road as part of an ever-changing group, such as being a member of a traveling circus or part of a years-long pilgrimage with a group of explorers. Maybe you were a member of a large family and found the best way to get attention was to be unpredictable. Or you could have grown up in a region where society had collapsed, such as a war zone or ruined city after a disaster, where you were forced to constantly think on your feet to handle unexpected situations. One thing you've certainly excelled at is developing the skill of lying to strangers in order to put them at ease. Is it really a bad thing to lie, after all, if the end result is good for both sides? Or at the very least, good for you?</p>\n<p>This background is associated with the suit of Crowns.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong>, and one is a free ability boost. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] skill feat and are trained in a Lore about a specific terrain, as befits where you spent most of your childhood growing up. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Chaotic Destiny] free action.</p>",
            },
            items: {
                XZn29: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Charming Liar",
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "crystal-healer": {
        _id: "44T9XsTcTbmMhtc1",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Crystal Healer",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Mineral formations can be beautiful things, sparkling and arrayed in geometric configurations. To you, they are also potent natural healing aids. You may have taken up adventuring to prove yourself by healing the ailing or to find new crystals with unique properties to add to your growing collection.</p>\n<p>Choose two attribute boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong> and one is a free attribute boost.</p>\n<p>You're trained in the Nature skill and the Plane of Earth Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Natural Medicine] skill feat.</p>",
            },
            items: {
                VFEH7: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Natural Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Natural Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "Plane of Earth Lore",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    cultist: {
        _id: "fuTLDmihr9Z9e5wa",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Cultist",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were (or still are) a member of a cult whose rites may involve sacred dances to ensure a strong harvest or dire rituals that call upon dark powers. You might have taken up adventuring to further your cult's aims, to initiate yourself into the world's grander mysteries, or to flee unsavory practices or strictures.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Occultism skill and a Lore skill related to your deity or cult. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Schooled In Secrets] skill feat.</p>",
            },
            items: {
                hvaw7: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Schooled In Secrets",
                    uuid: "Compendium.pf2e.feats-srd.Item.Schooled In Secrets",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<Deity> or <Cult> Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    curandero: {
        _id: "Uk4W7mKQbLtDDHwo",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Curandero",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You learned the healing arts of your community wielding your ceremonial chonta, a tool you carved yourself and imbued with sacred oils and herbs. This process opened your eyes to ailments of a more mystical nature: malefic spirits, haunts, possession, and more. You likely took up adventuring to combat these horrors, or you may have fled an evil beyond your power to vanquish.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Herbalism Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Inoculation] skill feat.</p>",
            },
            items: {
                "1y59m": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Inoculation",
                    uuid: "Compendium.pf2e.feats-srd.Item.Inoculation",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            trainedLore: "Herbalism",
            trainedSkills: { custom: "", value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "cursed-family": {
        _id: "ajcpRVb5EG00l7Y4",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Cursed Family",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>Rumors abound that your family is cursed. While that would explain several unfortunate events in your family history, you may or may not believe it. Regardless, odd coincidences plague your lineage, and perhaps even appear in your own life, and you have become used to spotting strangeness around you.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Curse Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
            },
            items: {
                fnrcy: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Oddity Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Curse Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    cursed: {
        _id: "j2G71vQahw1DiWpO",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Cursed",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are the victim of a personal or hereditary curse. Through great effort and occult study, you have learned to fend off the curse's worst effects and, by extension, you can protect yourself against other harmful magic. However, the curse still hangs over you and sometimes manifests in dangerous ways.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in Occultism and Curse Lore. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Warding Sign] reaction. You and the GM should determine the full effects of the curse, though you've staved most of them off for now. The GM determines the curse's lingering manifestations on you, which usually include at least a constant or very frequent thematic effect and occasional more dangerous effects.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Warding Sign",
                },
            ],
            trainedLore: "Curse Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    dauntless: {
        _id: "0ncxOTCDptu01nR8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Dauntless",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As a child, you chose to face each of your deepest fears and, time and again, emerged victorious. You have learned to conquer fear itself, and by sheer force of will and determination, you're able to brush off frightening experiences more easily than most. Others find it difficult to intimidate you into backing down from whatever you've set your mind to.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in the Diplomacy skill. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Indomitable Act] reaction.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Indomitable Act",
                },
            ],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    deckhand: {
        _id: "IObZEUz8wneEMgR3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Deckhand",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The rolling waves of the high seas, the constant sway of the deck underfoot, and the creaking heights of a ship's rigging are as familiar to you as solid ground. You might have worked on a simple fishing boat, a wealthy merchant's galley, a mighty warship - or even a pirate's caravel. Whether your crew retired, your ship sank, or you've turned to adventuring so you can keep all the treasure for yourself, you still retain an excellent sense of balance and quick reflexes.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Strength</strong> and one is a free ability boost.</p>\n<p>You're trained in the Acrobatics skill, and the Sailing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] skill feat.</p>",
            },
            items: {
                "5i1qz": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Cat Fall",
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Beginner Box: Hero's Handbook",
            },
            rules: [],
            trainedLore: "Sailing Lore",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "dedicated-delver": {
        _id: "a57iBUZBQtXWZc36",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Dedicated Delver",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Filled with predators, pitfalls, and other perils, the Darklands rightfully scares off most travelers. Not you! Whether you're a veteran Darklands caravanner, a cartographer seeking safer paths through dangerous territory, or just a spelunker who loves to escape the surface and hear the caverns sing, you're adept at navigating underground obstacles and finding your way back to civilization.</p>\n<p>Clan Tolorr specializes more in studying the past than extracting it from dangerous areas. Its leader, Arghan Tolorr, was an avid explorer in his youth, and he's begun an initiative to befriend, recruit, and train subterranean daredevils who can extract relics responsibly. You're one of his candidates for this pilot program. Helping administrate recruits is Ria, a gnome curator and close Tolorr confidante who helped arrange your travel to Highhelm.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in either the Athletics skill or the Survival skill, and you're trained in the Cave Lore skill. If you selected Athletics, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat. If you chose Survival, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise]{Terrain Expertise (Underground)} skill feat.</p>\n<p><strong>Connection:</strong> Ria, an oread gnome curator who studies rivethun traditions</p>\n<p><strong>Reputation Points:</strong> +0</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Sky King's Tomb Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SkillAthletics",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.09PurtIanNUPfNRq",
                                skill: "athletics",
                            },
                        },
                        {
                            label: "PF2E.SkillSurvival",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.4tTkRyOQ0VuRBac3",
                                skill: "survival",
                            },
                        },
                    ],
                    flag: "dedicatedDiver",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.dedicatedDiver.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    preselectChoices: { assurance: "underground" },
                    uuid: "{item|flags.pf2e.rulesSelections.dedicatedDiver.feat}",
                },
            ],
            trainedLore: "Cave Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "deep-sea-diver": {
        _id: "tGtrad5lJzXPZCx6",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Deep-Sea Diver",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The sapphire depths of the seas and the mysteries they hold beneath their surface have always piqued your interest. Your obsession with the ocean depths cannot be contained to one world alone, and you've read tomes and journals about the source of all water, everywhere, hoping to one day understand the watery secrets of the great unknown.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Athletics skill and the Plane of Water Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat.</p>",
            },
            items: {
                lbeVd: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Underwater Marauder",
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "Plane of Water Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "demon-slayer": {
        _id: "NywLl1XMQmzA6rP7",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Demon Slayer",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>For over a century, Mendev led a multinational coalition against ever-growing abyssal invaders in the Worldwound, and the Pathfinder Society aided in the so-called Fifth Crusade that ultimately sealed the planar rift and defeated its demon armies. You might be a hardened recruit who clashed with the demons, or perhaps you were a survivor who lost everything to the fiendish armies and narrowly escaped-or was rescued by Pathfinders. Your exposure to the Worldwound has taught you vital lessons in identifying fiends and their magic.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Demon Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat. Add <strong>Abyssal</strong> to the list of additional languages you can learn for having a high Intelligence modifier.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 5 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                "3d0hn": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Demon Lore",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    dendrologist: {
        _id: "29mBzKZ7TRm2TizG",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Dendrologist",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Trees grow in every biome, and your awe at their ability to conquer terrain has inspired deeper study into their workings. There are trees everywhere, and your study of them will inevitably take you ever further afield in search of new varieties, perhaps even to the Plane of Wood itself.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Survival skill and the Plane of Wood Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat for forests.</p>",
            },
            items: {
                UzOU5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Expertise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    preselectChoices: { terrain: "forest" },
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            ],
            trainedLore: "Plane of Wood Lore",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    deputy: {
        _id: "KC5oI1bs6Wx8h91u",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Deputy",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>While your life may have taken some twists and turns in the intervening years, you were once deputized as the lawful protector of a community. While the role was temporary and you've since turned in your badge, that responsibility shaped you. Whenever a community is in trouble, and the sheriff is nowhere to be found, residents call on you to capture a criminal, rescue the mayor's offspring from bandits, or go toe to toe with outlaws.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Hunting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Tracker] skill feat.</p>",
            },
            items: {
                "02x6c": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Tracker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Tracker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Hunting",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "desert-tracker": {
        _id: "2qH61dLeaqgNOdOp",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Desert Tracker",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Golden Road</p>\n<hr />\n<p>You're at home blazing trails in the burning sands, and you made a living guiding or following creatures in the desert. You might be a native nomad, an experienced desert guide, a naturalist, a bandit driven into the dunes by the law-or all of the above.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Desert Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Tracker] skill feat.</p>",
            },
            items: {
                "3kqvu": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Tracker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Tracker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Desert Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    detective: {
        _id: "dVRDDjT4FOu6uLDR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Detective",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You solved crimes as a police inspector or took jobs for wealthy clients as a private investigator. You might have become an adventurer as part of your next big mystery, but likely it was due to the consequences or aftermath of a prior case.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Society skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                hcet5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "diobel-pearl-diver": {
        _id: "3wLnNwWnZ2dHIbV4",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Diobel Pearl Diver",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>You spent a portion of your youth diving and gathering precious pearls under the attentive eyes of Kortos Consortium merchants.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Ocean Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat.</p>",
            },
            items: {
                xnsv2: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Underwater Marauder",
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Ocean Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "discarded-duplicate": {
        _id: "7fCZTzmv5I2dI4sr",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Discarded Duplicate",
        system: {
            boosts: {
                "0": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "2": {
                    selected: null,
                    value: ["cha", "con", "dex", "int", "str", "wis"],
                },
            },
            description: {
                value:
                    '<p>Someone created you for a specific purpose. Some important person, be they a storied royal, a contentious politician, or a stark military leader, needed a body double for their most dangerous appearances. Using a mixture of fringe science and magic, you were commissioned and trained to emulate this person in every way, and have stood in for them in countless deadly circumstances. You may or may not know the reason behind your decommissioning, but whoever discarded you didn\'t finish you off. Now, the world is yours to explore-but "you" may have a bold or brutish reputation, or the individual you were duplicating may be long dead. Regardless of the fate of this individual, your way of life has changed drastically.</p>\n<p>You and the GM can work out how to incorporate your previous life into your story. The GM can keep this knowledge hidden even from you, or you or another character know what happened. You and the GM can also leave the information unspecified and fill it in later.</p>\n<p>You gain three free ability boosts. You choose two, and the GM chooses one based on the attributes of the character you were built to duplicate.</p>',
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "disciple-of-the-gear": {
        _id: "V9VsomfjbPQNfaSL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Disciple of the Gear",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>While many regard science and faith as incompatible, you believe scientific advancement is your deity's will. Perhaps you're a follower of Brigh, Casandalee, or some other god of technology, or perhaps you see the furnaces and sparks of modernity as the latest manifestation of Sarenrae's flame or Gozreh's lightning-whatever the case, you're always willing to spread the word of your deity, and you've learned some basic tinkering to show how your deity's focus can increase the common standard of living.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Lore skill for the deity you worship. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Repair] skill feat.</p>",
            },
            items: {
                cxdjl: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Repair",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Repair",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    doomcaller: {
        _id: "7z33GaNsmSxel1xJ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Doomcaller",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In the stars you see not guidance or wisdom but a twinkling door to the impending end of all things. You might have been raised in this ideology, gleaned it from superstition, or received a prophetic vision. Regardless, you've come to view the stars and whatever power they evoke as a path to doom, a curse to warn the masses. Others might spurn your warnings, while some might join you in enlightening the ignorant. To you, there's no greater truth than the coming end, and you know that whatever the cause for it will come from the stars-or perhaps the stars are just a gate to a more terrifying beyond.</p>\n<p>Choose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.</p>\n<p>You're trained in Occultism and Star Lore. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Stellar Misfortune] action.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Stellar Misfortune",
                },
            ],
            trainedLore: "Star lore",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "dragon-scholar": {
        _id: "GPI5kNu0xfom9kKa",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Dragon Scholar",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Dragons have fascinated you for as long as you can remember. The potent power they possess, the long lives they lead, the ancient traditions they inspire-whatever the source of your interest, you've spent much of your life to this point immersed in all things draconic. These studies have bolstered your self-confidence and given you a wide range of methods and tactics you can use to impose your will on others.</p>\n<p>You've likely chosen to attend the Call for Heroes as a way to seek funds as an adventurer to afford more texts about dragons or perhaps out of a desire to encounter one in real life.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill, and the Dragon Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            items: {
                "29e0x": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Intimidating Glare",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "Dragon Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "dreamer-of-the-verdant-moon": {
        _id: "vBPu7RwNXGDQ1ThL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Dreamer of the Verdant Moon",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You spent your early days in the aftermath of one of the great ravenings. You survived thanks to your resourcefulness and perhaps your patron's favor and were blessed with skills and drive thereafter, but you must always hold to his standards, lest the hunger from the depths seek you out once again.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Zevgavizeb Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Ravening's Desperation] skill feat.</p>",
            },
            items: {
                wge7i: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Ravening's Desperation",
                    uuid: "Compendium.pf2e.feats-srd.Item.Ravening's Desperation",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #153: Life's Long Shadows",
            },
            rules: [],
            trainedLore: "Zevgavizeb Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "dreams-of-vengeance": {
        _id: "fo2nGLI1t1b7nAHK",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Dreams of Vengeance",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've known strife your whole life, whether on the battlefield, in the arena, or simply living your day-to-day life. When you're not thinking about your next brawl, you're turning over memories of traitorous rivals and troublesome betrayers who've wronged you in the past. The sight of your enemies broken and maimed, then, greatly appealed to you when you glimpsed through a mysterious glowing archway during the Missing Moment. But when you stepped through the gate, you found yourself back where you started, with no indications of your exacted revenge anywhere in sight. You nearly burned down the countryside in frustrated rage, only realizing afterward the magnitude of the fiery new power you wielded. Fiery rays of energy you could shoot from your eyes—these, no doubt, would come in handy.</p>\n<p>Your deviant abilities are of the dragon classification. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Blasting Beams] deviant feat with the fire type. As a quirk, your pupils are shaped like curved arches. When you use a deviant ability, the centers of your pupils shine with light, like the glowing gateways of the Missing Moment.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Strength</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Gladiator Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Titan Wrestler] skill feat.</p>",
            },
            items: {
                NOtio: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Titan Wrestler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Titan Wrestler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Gatewalkers Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Blasting Beams",
                },
            ],
            trainedLore: "Gladiator Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    driver: {
        _id: "kmhZZgR7KlBzRBX0",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Driver",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You practically live behind the controls of a vehicle, and can handle just about anything the road, waves, and sky can throw at you. You likely adventure to test your skills in unusual environments and new and interesting vehicles.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Acrobatics skill and the Piloting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Piloting Lore.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Piloting",
            trainedSkills: { custom: "", value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "droskari-disciple": {
        _id: "XHY0xrSSbX0cTJKK",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Droskari Disciple",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You grew up in the church of the Dark Smith, where you learned the value of hard work and achieving vocational mastery.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.Skill Training] skill feat, and you're trained in the Droskar Lore skill.</p>",
            },
            items: {
                "6zu5x": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Skill Training",
                    uuid: "Compendium.pf2e.feats-srd.Item.Skill Training",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #148: Fires of the Haunted City",
            },
            rules: [],
            trainedLore: "Droskar Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "early-explorer": {
        _id: "p27PSjFtHAWikKaw",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Early Explorer",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In the past decade, the Pathfinder Society has clashed with demonic armies, meddled in politics, and more, but you joined the organization before everything seemed so complicated. Whether you're a dedicated scholar of ruins or an explorer who just longs for months-long expeditions into the wilderness, you're a Pathfinder to explore, report, and cooperate.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Pathfinder Society Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Seasons 0 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                l5syj: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Pathfinder Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "eclectic-scholar": {
        _id: "g7kBsG5VKCaMYEZj",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Eclectic Scholar",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Understanding history isn't just about translating old laws and reading about who invaded whom; it's also packed with magical outbursts, extraplanar interventions, and unexplained oddities not yet understood by modern science. You have a knack for absorbing esoteric trivia and unraveling past supernatural events. Your studies recently drew you to the dwarven city of Tar-Kazmukh, whose Blue Warders maintain an eclectically magical library. Perusing its shelves didn't answer your most burning questions, but it did earn you some friends, expose you to a dizzying array of dwarven religious lore, and introduce you to some intriguing mysteries buried in Highhelm's history.</p>\n<p>Believing that Highhelm might provide you with greater opportunities, a Blue Warder named Rosha Coppervein facilitated introductions between you and their adoptive clan, Clan Tolorr. It seems your credentials and whatever Rosha wrote on your behalf made an impression; within a week, you received an invitation to Highhelm and travel funds to study with Tolorr sages! The shy Rosha has stayed in Tar-Kazmukh for now, enjoying its relative quiet, but you know that they'll join you in a few weeks for Tolorr's Family Festival.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Dwarven Pantheon Lore skill, an uncommonly broad Lore skill that pertains to Torag's faith and those faiths of his divine family. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat.</p>\n<p><strong>Connection:</strong> Rosha Coppervein, a Blue Warder who married into Clan Tolorr</p>\n<p><strong>Reputation Points:</strong> +0</p>",
            },
            items: {
                L0YLx: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Sky King's Tomb Player's Guide",
            },
            rules: [],
            trainedLore: "Dwarven Pantheon Lore",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    eclipseborn: {
        _id: "oj4B6KLAOlUbY0wr",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Eclipseborn",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were born at the exact moment of a solar or lunar eclipse. At the eclipse's junction, or not long after, a catastrophe fell upon the area of your birth-perhaps it affected only the people around you, a city, or even spanned the entire region. Whatever the scope, those present at your arrival came to believe the eclipse was the omen of ill fortune, and you were its harbinger. You grew up distinctly aware others viewed you as a child of misfortune and, to a certain extent, they were right.</p>\n<p>Choose two ability boosts. One must be to Charisma or Constitution, and one is a free ability boost.</p>\n<p>Decide with the GM what catastrophic event coincided with your birth; you're trained in a Lore skill related to that event. You can cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Ill Omen]</em> as an occult innate spell once per day. After you Cast this Spell, but before you regain the ability to cast it the following day, the GM can force you to reroll a successful saving throw, attack roll, or skill check as misfortune finds its way back to you. This is a misfortune effect. If this effect causes you to fail the associated saving throw, attack roll, or skill check, you can cast <em>ill omen</em> again a second time that day.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [],
            trainedLore: "<GM> Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "eidolon-contact": {
        _id: "BRXXlw03K6ZeB2Li",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Eidolon Contact",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've come into contact with a disembodied being of magical essence known as an eidolon. You might have forged a powerful conduit with that eidolon, allowing you to manifest it as a summoner, but it's much more likely that you lost contact over time, though not before learning a few half-remembered secrets. If you lost contact, you might have become an adventurer to try to reach the eidolon again, or to be sure that you're rid of it forever.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of Arcana, Nature, Occultism, or Religion, and a Lore skill for the creature associated with your contacted eidolon (such as Angel Lore or Dragon Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                fy5xi: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillArc", value: "arcana" },
                        { label: "PF2E.SkillNat", value: "nature" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                        { label: "PF2E.SkillRel", value: "religion" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "<Eidolon Type> Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "eldritch-anatomist": {
        _id: "MiRWGXZnEdurMvVf",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Eldritch Anatomist",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're a trained physician who can ably tend wounds of many kinds. But more than a practitioner, you're a scholar. Some cultures shape flesh to extreme degrees, creating aberrations from humanoid forms. The fleshforges of distant Nex practice this fleshwarping, as do certain subterranean societies you hope to one day study—preferably from a safe and clinical distance.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Fleshwarp Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Medicine.</p>",
            },
            items: {
                j9ja5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Abomination Vaults Player's Guide",
            },
            rules: [],
            trainedLore: "Fleshwarp Lore",
            trainedSkills: { value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "elementally-infused": {
        _id: "YGJzgmHNqw9C72Kb",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Elementally Infused",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were exposed to a strong burst of elemental essence originating directly from an elemental plane, most likely caused by a planar breach. Your body absorbed the elemental essence with no ill effects, and now it coalesces within you. With time, you've learned to project elemental power in a manner safe to you but still deadly to others.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>Choose one elemental plane: Air, Earth, Fire, Metal, Water, or Wood. You are trained in the corresponding Lore skill: Plane of Air Lore, Plane of Earth Lore, Plane of Fire Lore, Plane of Metal Lore, Plane of Water Lore, or Plane of Wood Lore. You also gain a cantrip according to your chosen plane:</p>\n<p><strong>Air:</strong> <em>@UUID[Compendium.pf2e.spells-srd.Item.Gale Blast]</em></p>\n<p><strong>Earth:</strong> <em>@UUID[Compendium.pf2e.spells-srd.Item.Scatter Scree]</em></p>\n<p><strong>Fire:</strong> <em>@UUID[Compendium.pf2e.spells-srd.Item.Ignition]</em></p>\n<p><strong>Metal:</strong> <em>@UUID[Compendium.pf2e.spells-srd.Item.Needle Darts]</em></p>\n<p><strong>Water:</strong><em>@UUID[Compendium.pf2e.spells-srd.Item.Spout]</em></p>\n<p><strong>Wood:</strong> <em>@UUID[Compendium.pf2e.spells-srd.Item.Root Reading]</em></p>\n<p>You can cast this spell as a primal innate spell at will.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    emancipated: {
        _id: "oEm937kNrP5sXxFD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Emancipated",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Until recently, the nation of Ravounel was part of the larger nation of Cheliax, where the church of Asmodeus is the law and slaves are traded freely in the open market. You had the poor fortune to be born into slavery, but the good luck to have grown up in the city of Kintargo. When Ravounel seceded from Cheliax, the leaders of this new nation freed all slaves, and you've wasted no time in exploring and establishing your new life. How and why you've come to Breachill is left to you to decide-but the fact that you feel empowered to determine your own destiny continues to drive you!</p>\n<p>The chance to become an adventurer has excited you for some time, as you hope to build a new life for yourself as a hero rewarded with fame and fortune. Joining the Call for Heroes is a great opportunity to find a group to adventure with.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Kintargo Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Stalker] skill feat.</p>",
            },
            items: {
                qbuex: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Stalker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Stalker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "Kintargo Lore",
            trainedSkills: { value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    emissary: {
        _id: "3WPo7m6rJQh9L7MN",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Emissary",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As a diplomat or messenger, you traveled to lands far and wide. Communicating with new people and forming alliances were your stock and trade.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Society skill and a Lore skill related to one city you've visited often. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>",
            },
            items: {
                cxx9n: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<City> Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "empty-whispers": {
        _id: "g8xUX7DAu2ShZ90Q",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Empty Whispers",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You knew someone once, and now you know only a life stitched together and healed over, nary even a scar remaining. You hear voices of souls that have fallen through the cracks of reality, creatures who have been removed from memory, banished planar entities, and similar. Their whispers guide you.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Planar Rift Lore skill. You get a Planar Rift Lore check to sense planar rifts, even if you aren't specifically Investigating or Searching for them, as well as locations where magic has been used to remove the memory of an object or creature from existence.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [],
            trainedLore: "Planar Rift",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "energy-scarred": {
        _id: "xbyQ1RAF6x4ceXLf",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Energy Scarred",
        system: {
            boosts: {
                "0": { value: ["con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Exposure to a significant magical event overloaded you with magical energy. Perhaps you were exposed to dangerous levels of magical energy that left you near death, or it built up over long-term exposure to a powerful source of magic.</p>\n<p>Choose two ability boosts. One must be <strong>Constitution</strong> and one is a free ability boost.</p>\n<p>Your innate magical trait is primal. Choose acid, cold, electricity, fire, force, negative, positive, or sonic. You are trained in a Lore skill associated with the chosen energy (such as Fire Lore) and you gain resistance to that energy type equal to half your level (minimum 1).</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                        { label: "PF2E.TraitForce", value: "force" },
                        { label: "PF2E.TraitVoid", value: "void" },
                        { label: "PF2E.TraitVitality", value: "vitality" },
                        { label: "PF2E.TraitSonic", value: "sonic" },
                    ],
                    flag: "backgroundEnergyScarred",
                    key: "ChoiceSet",
                },
                {
                    key: "Resistance",
                    type: "{item|flags.pf2e.rulesSelections.backgroundEnergyScarred}",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            trainedLore: "Lore associated with the chosen energy",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    entertainer: {
        _id: "i4hN6OYv8qmi3GLW",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Entertainer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Through an education in the arts or sheer dogged practice, you learned to entertain crowds. You might have been an actor, a dancer, a musician, a street magician, or any other sort of performer.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Performance skill and the Theater Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Fascinating Performance] skill feat.</p>",
            },
            items: {
                q8t33: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Fascinating Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Fascinating Performance",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Theatre Lore",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "ex-con-token-guard": {
        _id: "CKU1sbFofcwZUJMx",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ex-Con Token Guard",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Not everyone starts life on easy street-your own experience is testament to that. You took a wrong turn at some point early on and became a career criminal. Perhaps you were a petty pickpocket, or maybe you've even murdered someone. Either way, your crimes landed you with a transformative prison sentence in the Brine prison. Only then did you realize that something needed to change. After your release, you dedicated yourself to helping other downtrodden individuals and those forced to resort to crime to survive. You joined the Coins District Guard, but soon learned that this precinct was a haven for the very corruption you sought to undo. Your efforts at reform never took root and you feared that your decision to become an officer of the law was a huge mistake.</p>\n<p>You transferred to the Edgewatch, the Precipice Quarter's new precinct, in the hope that you might meet others who sought to help-not exploit-Absalom's misguided.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Thievery skill and your choice of Legal Lore or Underworld Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to @UUID[Compendium.pf2e.actionspf2e.Item.Interact] with Token Guards and convicted criminals such as prison inmates. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pickpocket] skill feat.</p>",
            },
            items: {
                "3tdk7": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pickpocket",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pickpocket",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with Token Guards or convicted criminals (Ex-Con Token Guard)",
                    predicate: [{ or: ["target:token-guard", "target:convict"] }],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "Legal Lore or Underworld Lore",
            trainedSkills: { value: ["thi"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "ex-mendevian-crusader": {
        _id: "ynObDI0VbZ4sqeMI",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ex-Mendevian Crusader",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>When the Great Quake rumbled across the eastern lands and opened the rift that southerners called \"the Worldwound,\" you answered the call to arms to fight back the demonic hordes. What you saw during the war changed you forever-so much so that you became a wanderer, hermit, or other voluntary outcast. When you came upon the Broken Tusk following, you determined you'd finally found a people whose values and traditions made you feel whole again. The Broken Tusk was supposedly once a much bigger following, and so you've joined them in the hopes of helping them heal old wounds and rebuild in the shadow of loss. In the process, perhaps this new family will help you do the same.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Demon Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pilgrim's Token] skill feat.</p>",
            },
            items: {
                eu46h: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pilgrim's Token",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pilgrim's Token",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Quest for the Frozen Flame Player's Guide",
            },
            rules: [],
            trainedLore: "Demon",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "faction-opportunist": {
        _id: "HKRcQO8Xj7xzBxAw",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Faction Opportunist",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As the Pathfinder Society's influence has grown, so too did many of its factions become wealthier and more powerful. These factions relied on a host of Pathfinders and independent operatives alike to establish trade networks, shape national politics, and more, and you were among the specialists who helped one of these factions realize its goal. These events provided you countless opportunities to develop your own contacts and negotiating skills.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill, plus either Guild Lore, Heraldry Lore, or Mercantile Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 9 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                ncr1c: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Guild Lore, Heraldry Lore, or Mercantile Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "false-medium": {
        _id: "nAe65lvsOJAIHGGT",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "False Medium",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>There are people in this world who possess the ability to pierce the veil between the world of the living and the world of the dead, allowing them to communicate with spirits. You... are not one of them. But you know enough about the occult, as well as cold reading tricks and various practices from local religions, to scam your way into people's coinpurses. Unlike a through-and-through charlatan, there's some real occult methodology behind your flimflam, but that's likely cold comfort to the people you swindle. Whether you decided to take a more righteous path, were caught and pledged to make it right, or still slip in a few \"séances\" between adventures, you've taken to an adventuring lifestyle as you move from place to place.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Occultism and Fortune-Telling Lore.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.Deceptive Worship] skill feat.</p>",
            },
            items: {
                j9acs: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Deceptive Worship",
                    uuid: "Compendium.pf2e.feats-srd.Item.Deceptive Worship",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Fortune-Telling Lore",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    farmhand: {
        _id: "SOmJyAtPOokesZoe",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Farmhand",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>With a strong back and an understanding of seasonal cycles, you tilled the land and tended crops. Your farm could have been razed by invaders, you could have lost the family tying you to the land, or you might have simply tired of the drudgery, but at some point, you became an adventurer.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Athletics skill and the Farming Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Athletics.</p>",
            },
            items: {
                "00b8b": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Farming Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    farmsteader: {
        _id: "mcL4WLO2yxBGlvuG",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Farmsteader",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You built your house using wood from the trees surrounding it. Raised it up from the dirt and called it home. You thought that it would be where you would grow old and die. But despite your best efforts, you were wrong. The land that once gave you food fell fallow, and dust took to the air and choked the livestock. Now you wander the world as an adventurer. Are you in search of a new place to settle down and try again, or have you become disillusioned by your old dreams, leading you to seek out a new purpose?</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Farming Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                ev2l5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Farming",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "feral-child": {
        _id: "Q2brdDtEoI3cmpuD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Feral Child",
        system: {
            boosts: { "0": { value: ["con", "dex", "str"] }, "1": { value: [] } },
            description: {
                value:
                    "<p>You spent your youth in the wilderness, living close to or perhaps raised by animals. You have a close, mystical connection with these animals and gained certain abilities from them, though this limited your well-roundedness in mental pursuits.</p>\n<p>Choose one ability boost. It must be <strong>Strength</strong>, <strong>Dexterity</strong>, or <strong>Constitution</strong>.</p>\n<p>You are trained in Nature and Survival. You gain @UUID[Compendium.pf2e.ancestryfeatures.Item.Low-Light Vision] (or @UUID[Compendium.pf2e.ancestryfeatures.Item.Darkvision] if you already had Low-Light Vision), imprecise scent with a range of 30 feet, and the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                fx8l1: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: ["nat", "sur"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    feybound: {
        _id: "ppBGlWl0UkBKkJgE",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Feybound",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have spent time in the First World or another realm of the fey and aren't entirely the same person you were before. Perhaps you made a purchase at the legendary Witchmarket or partook deeply of fey food and wine. Whatever the case, willingly or inadvertently, you made a bargain with the fey, the benefits of which come at a price.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in Fey Lore and gain the @UUID[Compendium.pf2e.actionspf2e.Item.Fey's Fortune] free action. You must follow some rule or limitation as part of your pact with the fey. If you violate the rule, you lose Fey's Fortune until you receive the effects of a successful <em>@UUID[Compendium.pf2e.spells-srd.Item.Atone]</em> ritual using the Nature skill. The exact limitation is up to you and the GM, but the most common requirement is that you must fulfill a single request from any fey who knows your name.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Fey's Fortune",
                },
            ],
            trainedLore: "Fey Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "field-medic": {
        _id: "FKHut73XDUGTnKkP",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Field Medic",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In the chaotic rush of battle, you learned to adapt to rapidly changing conditions as you administered to battle casualties. You patched up soldiers, guards, or other combatants, and learned a fair amount about the logistics of war.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Medicine skill and the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Battle Medicine] skill feat.</p>",
            },
            items: {
                lzyme: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Battle Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Battle Medicine",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Warfare Lore",
            trainedSkills: { value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    fightbreaker: {
        _id: "KaIeesLNmn3s1Y1I",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Fightbreaker",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have a knack for picking up on simmering tensions and calming frayed nerves. You rely on your intuition to discern how and when violence is imminent, and on your skills—diplomatic and otherwise—to deescalate tense situations. You might choose the adventuring life to tackle new and unfamiliar conflicts, or be trying to escape retaliation from those who thrive on violence and resent your ability to keep the peace.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Lore skill for the city or settlement you lived in when you became a Fightbreaker. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                u8v5o: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [],
            trainedLore: "City Lore",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "finadar-leshy": {
        _id: "NZY0r4Csjul6eVPp",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Finadar Leshy",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisites</strong> Leshy ancestry</p>\n<hr />\n<p>You are a leshy from Finadar Forest, originally created under the corruption of a cyclopean monolith. Though the Pathfinder Society managed to sever the monolith's connection, freeing the forest and your people from its influence, you retain a trace, unnerving connection to the Abyss.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Abyssal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            items: {
                horfp: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Intimidating Glare",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Society Scenario #1-15: The Blooming Catastrophe",
            },
            rules: [],
            trainedLore: "Abyssal Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "final-blade-survivor": {
        _id: "tQ9t7uIssRCR2y3W",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Final Blade Survivor",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Shining Kingdoms</p>\n<hr />\n<p>You fell prey to the whims of the Galtan mob and were scheduled for execution by <em>@UUID[Compendium.pf2e.equipment-srd.Item.Final Blade]</em>, but through skill-or sheer luck-you managed to talk your way out of it.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Revolution Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] skill feat.</p>",
            },
            items: {
                rv7pf: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Charming Liar",
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Revolution Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "fire-warden": {
        _id: "QGji0lMUo6to2h2k",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Fire Warden",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether you fought against fires in the wilderness or in crowded city streets, you've had your fair share of dealing with uncontrolled flames. Battling thick smoke and toxic fumes, you've broken down obstacles to save trapped people from a fiery grave, and you've studied the nature and source of fire itself to try and better learn how to fight it.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Athletics skill and the Plane of Fire Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Breath Control] feat.</p>",
            },
            items: {
                tRABG: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Breath Control",
                    uuid: "Compendium.pf2e.feats-srd.Item.Breath Control",
                },
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "Plane of Fire Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "firebrand-follower": {
        _id: "gsyTHkbGRaiHgs6p",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Firebrand Follower",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were once rescued or liberated from a hopeless situation by a group of Firebrands, and you have since aspired to become a Firebrand to continue their legacy. You still follow news of their adventures, and you hope to one day meet your heroes as comrades.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in your choice of the Athletics or Performance skill as well as the Firebrand Lore skill. You gain the Assurance skill feat in your chosen skill.</p>",
            },
            items: {
                khIqp: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [],
            trainedLore: "Firebrand Lore",
            trainedSkills: { custom: "", value: ["ath", "prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "fireworks-performer": {
        _id: "2lk5NOcu1aUglUdK",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Fireworks Performer",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Few celebrations in Tian-Xia are complete without a show of fireworks, and your job is to make sure they go off without a hitch. You load the fireworks, set the fuses, and choreograph the performance, bringing the show together in a finale of lights and explosions. Then it's time to pack up your gear and move on to the next civic holiday or religious festival. Of course, someone who travels the roads with a pack full of high explosives is bound to run into an adventure or two along the way, and so over time, your fireworks have been spent in support of that life.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Fascinating Performance] skill feat.</p>",
            },
            items: {
                wr9b9: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Fascinating Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Fascinating Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering",
            trainedSkills: { custom: "", value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "fogfen-tale-teller": {
        _id: "3M2FRDlunjFshzbq",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Fogfen Tale-Teller",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You know there are monstrous things out in the swamp known as Fogfen; you've seen these things through the mist, gliding through the murky water and heaving themselves over sodden bits of land. No one in Otari believes your tales of swamp monsters from the depths, even when you embellish the creatures of your stories with fangs, wings, or tentacles. You'll just have to prove to them that there are truly monsters out there, and that they were wrong to doubt you.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Athletics and the Swamp Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Titan Wrestler] skill feat.</p>",
            },
            items: {
                by6ry: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Titan Wrestler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Titan Wrestler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Abomination Vaults Player's Guide",
            },
            rules: [],
            trainedLore: "Swamp Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "folklore-enthusiast": {
        _id: "ia5aFzfmfnMjhcms",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Folklore Enthusiast",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Willowshore is a small town in a rural part of Shenmen, but that doesn't exempt it from the world of the strange and unexplained. There are plenty of mysterious events and haunting legends about Willowshore or its hinterlands, and as a result of your upbringing, you've become particularly interested in learning more about them. While much of the regional folklore comes from one of Willowshore's many religions and local faiths (of which you might be a practicing member or perhaps instead have a secular interest in the lore), you've noticed that these beliefs also influence artisans and crafters in ways they might not even realize. You're convinced that many of these local beliefs have roots in a deeper, historical event of great significance and hope one day to learn more about Willowshore's true history.</p>\n<p>If you're religious, your home is likely near a shrine associated with your faith—if your faith isn't represented among Willowshore's shrines, speak with your GM about potentially having a shrine to your faith in or near to your home.</p>\n<p>During the Reenactment Festival, you likely spent time chatting with others about ghost stories and sharing spooky legends and tales. You weren't chosen to be an abductee during the Reenactment Festival so much as you volunteered, eagerly, for the chance—you might have even participated in previous years as an abductee!</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Art Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>\n<p>@UUID[Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Folklore Enthusiast)]</p>\n<hr />\n<p>You can add one of the following two adjustments to any background to further modify your choice to match your vision for your PC.</p>\n<p><strong>Family:</strong> You and one (or more) other PCs are close family members (siblings, parent/child, married, etc.) If you take this adjustment, the other PC(s) who are your family must also take this adjustment. Choose one of the following to replace the skill feat you otherwise would've gained from your background. (You and your sibling need not share the same choice—a sibling who wants to keep their background's skill feat can pick \"Typical\" from the list.)</p>\n<ul>\n<li><strong>Bickering:</strong> You have a long-standing feud with your sibling(s). Whenever your sibling(s) critically fail a significant skill check or attack roll and you witness their failure, you gain a +1 status bonus to your saving throws until the end of your next turn as you secretly (or perhaps not so secretly) delight in their failure. @UUID[Compendium.pf2e.campaign-effects.Item.Effect: Bickering Family]</li>\n<li><strong>Close-Knit:</strong> You and your sibling(s) work well together, and you go all-out to help them when they're badly hurt. When you provide @UUID[Compendium.pf2e.actionspf2e.Item.Aid] or @UUID[Compendium.pf2e.actionspf2e.Item.Administer First Aid] to your sibling(s), the DC is 5 lower than normal.</li>\n<li><strong>Typical:</strong> You have a standard relationship with your sibling(s); don't change your background's skill feat.</li>\n</ul>\n<p><strong>Foundling:</strong> You aren't a native to Willowshore, but you did grow up in the town. You might have adoptive parents, or you could've grown up on the streets. Choose one of the following to replace the bonus feat you otherwise would've gained from your background.</p>\n<ul>\n<li><strong>Bitter:</strong> You appreciate the town of Willowshore but still resent the conditions that resulted in you being abandoned or left in the town. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</li>\n<li><strong>Mysterious:</strong> You keep secrets, and very few in Willowshore (if anyone) know your history before you settled in the town, in part because you've taken to learning about Willowshore by watching rather than engaging in conversation. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</li>\n<li><strong>Outgoing:</strong> You're grateful for the sense of belonging the townsfolk of Willowshore have extended to you and always do your best to repay that kindness. Once per week when you attempt a skill check to resolve a downtime activity that could benefit Willowshore (several of these activities are detailed in the adventures, and your GM can always make the call if another activity would qualify) and you fail that check, you instead succeed at the check, or if you critically fail at that check, you instead simply fail that check.</li>\n</ul>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Season of Ghosts Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Folklore Enthusiast)",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Family",
                            value: "family",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Foundling",
                            value: "foundling",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.NoAdjustment",
                            value: "none",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.Prompt",
                    rollOption: "background-variant",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bickering",
                            value: "bickering",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.CloseKnit",
                            value: "close-knit",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Typical",
                            value: "typical",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:family"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FamilyPrompt",
                    rollOption: "background-variant:family",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bitter",
                            value: "bitter",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Mysterious",
                            value: "mysterious",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Outgoing",
                            value: "outgoing",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:foundling"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FoundlingPrompt",
                    rollOption: "background-variant:foundling",
                },
                {
                    key: "GrantItem",
                    predicate: [
                        {
                            or: [
                                "background-variant:none",
                                "background-variant:family:typical",
                            ],
                        },
                    ],
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:bitter"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:mysterious"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            ],
            trainedLore: "Art Lore",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "food-trader": {
        _id: "vmdhw37F22FCMm50",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Food Trader",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In your past, you accompanied caravans, ships, or both hauling foodstuffs out of Geb for export. You might be a Gebbite or a foreigner who has decided to work in Geb because of the undeniable opportunities. In any case, you've traveled between Geb and other nations of the Inner Sea and seen firsthand that many nations view Geb with a combination of barely disguised revulsion and eagerness for its bountiful food exports. Even though you aren't in that line of business any longer, you understand how vital this international trade is to Geb's prosperity and appreciate the hardworking people who work in it.</p>\n<p>You are still highly regarded by the Export Guild for your past journeys on the nation's behalf. Your party gains 1 Reputation Point with the Export Guild at the start of the campaign.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Crafting or Society skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Seasoned] if you chose Crafting or @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] if you chose Society. You're also trained in Mercantile Lore.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Blood Lords Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillSoc", value: "soc" },
                        { label: "PF2E.SkillCra", value: "cra" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "food-trader",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["food-trader:soc"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
                {
                    key: "GrantItem",
                    predicate: ["food-trader:cra"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Seasoned",
                },
            ],
            trainedLore: "Mercantile Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "former-aspis-agent": {
        _id: "vgin9ff2sUBMpuaI",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Former Aspis Agent",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>For more than a century, the Pathfinder Society has clashed with the avaricious and underhanded Aspis Consortium, and several years ago the Society dealt its rival a decisive blow. You may be one of the few survivors of a doomed Aspis expedition, or perhaps you chafed at the Consortium's villainous practices and defected to the Pathfinders. No matter your reasons, you know how to be efficient and ruthless when the circumstances demand.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Aspis Consortium Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat. You gain access to any uncommon options as though you were a member of the Aspis Consortium.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 7 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                fshym: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Aspis Consortium Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "fortune-teller": {
        _id: "3frMfODIYFeqTl2k",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Fortune Teller",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The strands of fate are clear to you, as you have learned many traditional forms by which laypeople can divine the future. You might have used these skills to guide your community, or simply to make money. But even the slightest peek into these practices connects you to the occult mysteries of the universe.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Occultism skill and the Fortune-Telling Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
            },
            items: {
                l6z49: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Oddity Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Fortune-Telling Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "framed-in-ferrous-quarter": {
        _id: "eHfsMNiVeqwnrpG3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Framed in Ferrous Quarter",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Everyone knows that Ferrous Quarter isn't exactly the nicest part of Alkenstar. Hard-working laborers, gunsmiths suffering from black lung, and red-eyed tinkerers alike can toil their entire lives on these grimy streets and still wind up dead in an alley with nothing to show for it. You were once one of these humble artisans, until one day, out of nowhere, things broke bad.</p>\n<p>Maybe you hung out with the wrong crowd. Maybe it was just bad luck. Whatever the case, you were framed for a crime you didn't commit-larceny, smuggling, possibly even murder. You didn't stick around long enough to find out what, exactly, the shieldmarshals banging on your door were charging you with. Now, you're on the lam, uncertain where you'll be able to get a good night's sleep, let alone your next meal.</p>\n<p>At least one thing's for sure, though: before you turned heel and ran into the streets, you saw a telltale signature on the arrest warrant. It was the scrawl of a corrupt shieldmarshal who's framed countless other hardworking folks in your neighborhood on the basis of cooked-up evidence. Yes, you're sure of it-the crooked guard who took you down is none other than Deputy Anjelique Loveless, and you're determined to return the favor.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat.</p>",
            },
            items: {
                "1vi7o": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Specialty Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Outlaws of Alkenstar Player's Guide",
            },
            rules: [],
            trainedLore: "Engineering Lore",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "free-spirit": {
        _id: "r2ZRAcoDp6EdwNrh",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Free Spirit",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've always lived your life straying from the path laid before you. Like a leaf blowing in the wind, your journey takes you where it will, providing you with a lifestyle free from the bonds of expectation. While you might have friends and family in specific towns or cities, you've chosen not to put down roots in favor of going wherever—and doing whatever—you want.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in the Survival skill and a Lore skill about a specific settlement or terrain you have traveled through. You gain the Forager skill feat.</p>",
            },
            items: {
                OzGrH: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [],
            trainedLore: "Settlement or Terrain",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "freed-slave-of-absalom": {
        _id: "a5dCSuAwGE2hqQjj",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Freed Slave of Absalom",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>As a recently freed slave in Absalom, you belong to a new, close-knit social class at the heart of the city's most important trades.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Absalom Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                b0370: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Absalom Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "friend-of-greensteeples": {
        _id: "FlXu29r5C4CborZv",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Friend of Greensteeples",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're a good friend of Benedet, the majordomo of Greensteeples Manor in Egorian, Cheliax. You've learned a thing or two about surviving against all odds thanks to your close association with House Jeggare and the clandestine Pathfinder Society operations based out of Greensteeples.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Deception or Society skills, and gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with your chosen skill. You're also trained in a Lore skill about a narrow category of creatures.</p>\n<p>Additionally, when you receive a mission briefing at Greensteeples Manor (or a briefing from Benedet or Varian Jeggare at another location), you receive a warm welcome. You gain a +2 circumstance bonus to your checks to Gather Information or Recall Knowledge during the Getting Started segment of such adventures. Be sure to remind your GM that you have a relevant background.</p>",
            },
            items: {
                sfesw: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Blog: Pathfinder Society Year 4 Rule Updates",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillDec", value: "deception" },
                        { label: "PF2E.SkillSoc", value: "society" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    preselectChoices: {
                        assurance: "{item|flags.pf2e.rulesSelections.skill}",
                    },
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            ],
            trainedLore: "<Lore about a narrow category of creatures>",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "friendly-darkmoon-kobold": {
        _id: "vEl3OBUsSmPh8b4N",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Friendly Darkmoon Kobold",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>It has taken time, but over the years, you've managed to find a place among the citizens of Falcon's Hollow. While many still distrust kobolds, they at least see you as a fellow villager, if not a friend, and you've got quite the talent for quickly convincing larger groups of people that you mean them no harm.</p>\n<p>Choose any two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and Kobold Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                EZShN: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Crown of the Kobold King",
            },
            rules: [],
            trainedLore: "Kobold",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    gambler: {
        _id: "89LEOv97ZwsjnhNx",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Gambler",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The thrill of the win drew you into games of chance. This might have been a lucrative sideline that paled in comparison to the real risks of adventuring, or you might have fallen on hard times due to your gambling and pursued adventuring as a way out of a spiral.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Deception skill and the Games Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lie to Me]{Lie To Me} skill feat.</p>",
            },
            items: {
                yiu61: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lie To Me",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lie to Me",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Games Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "geb-crusader": {
        _id: "bDyb0k0rTfDTyhd8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Geb Crusader",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Impossible Lands</p>\n<hr />\n<p>You grew up considering the existence of the undead nation of Geb an atrocity and trained to one day take part in destroying it and putting its vile inhabitants to their final rest. Key to your preparations is a thorough study of Pharasma, Urgathoa, and other undead-related deities and their philosophies.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Undead Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Student of the Canon] skill feat.</p>",
            },
            items: {
                "9uslx": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Student of the Canon",
                    uuid: "Compendium.pf2e.feats-srd.Item.Student of the Canon",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Undead Lore",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "genie-blessed": {
        _id: "LoeTd2SS6jfEgo1H",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Genie-Blessed",
        system: {
            boosts: {
                "0": { value: ["cha"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've sought out a powerful genie and requested their blessing, hoping to increase your fortune. Your wish was vague, but fortune and the genie favored you with a more powerful effect than an ordinary wish, granting you bits of wish-twisted luck throughout the rest of your life. Meanwhile, other genies of the same kind recognize you as one blessed by one of their most powerful nobles, and might treat you with greater respect or envy.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Genie Lore skill. You gain the Wish for Luck free action.</p>\n<hr />\n<p><em>Note: You must add the Wish for Luck free action</em></p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Genie Lore",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    gladiator: {
        _id: "88WyCqU5x1eJ0MK2",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Gladiator",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The bloody games of the arena taught you the art of combat. Before you attained true fame, you departed--or escaped--the arena to explore the world. Your skill at drawing both blood and a crowd's attention pay off in a new adventuring life.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Performance skill and the Gladiatorial Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] skill feat.</p>",
            },
            items: {
                "6ltd4": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Impressive Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Gladatorial Lore",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "glorianas-fixer": {
        _id: "B3Z5gbhMDRUATTrE",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Gloriana's Fixer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You used to run certain \"errands\" for Gloriana Morilla, a close confidante of Grand Princess Eutropia Stavian, the ruler of Taldor. Gloriana took note of your skills and suggested you join the Pathfinder Society, a group she's heavily involved in herself.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Thievery skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Subtle Theft] skill feat.</p>\n<p>Additionally, when Gloriana Morilla is present during your mission briefings, she discreetly checks in with you and provides some pointers. You gain a +2 circumstance bonus to your checks to Gather Information or Recall Knowledge during the Getting Started segment of such adventures. Be sure to remind your GM that you have a relevant background.</p>",
            },
            items: {
                "1noe7": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Subtle Theft",
                    uuid: "Compendium.pf2e.feats-srd.Item.Subtle Theft",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Blog: Pathfinder Society Year 4 Rule Updates",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { custom: "", value: ["thi"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "goblinblood-orphan": {
        _id: "4fBIXtSVSRYn2ZGi",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Goblinblood Orphan",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Old Cheliax</p>\n<hr />\n<p>Your family, whether goblin, hobgoblin, or human, died in the Goblinblood Wars. Though you were marked by these losses, you managed to survive through your own resilience and resourcefulness.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Goblin Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Survival.</p>",
            },
            items: {
                v252w: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Goblin Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "godless-graycloak": {
        _id: "1VdLr4Qm8fv1m4tM",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Godless Graycloak",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were a member of a church once, and you saw some things among Absalom's religious elite that put you off piety for good. Maybe it was one too many beggars turned away at the temple's front door, or maybe it was a high-ranking priests consistent abuses of power. What got to you most, though, was that according to just about every belief system out there, sinners and saints, priests and paupers were all alike in one key way: they never saw retribution or accolades until buried 6 feet under. You wanted more from Absalom. You wanted more from the world. You wanted justice now, on this plane, not in some indeterminate afterlife. So you left the church and wandered the city, a ghost of your former self.</p>\n<p>You finally found a like mind in Captain Runewulf, \"the Unbeliever,\" whose reputation and similar distaste for religion inspired you to join the Graycloaks. As a sworn protector of the Ascendant Court, you didn't differentiate between Sarenites or Pharasmins, Iomedaeans or Norgorberites; if you saw someone in danger, you put your life on the line to save them, whatever their place within or outside a church.</p>\n<p>Your good record has earned you a transfer-temporary or not, the choice is yours-to the newly formed Edgewatch, where you'll use your authority to guard the lives of not just Absalomians, but all who have come to your grand city to experience its wonders. Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and your choice of a specific religion Lore skill (such as Iomedae Lore or Norgorber Lore).</p>\n<p>You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to @UUID[Compendium.pf2e.actionspf2e.Item.Interact] with Graycloaks, priests, and clerics. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] feat.</p>",
            },
            items: {
                pf0s5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with Graycloaks, priests, and clerics (Godless Graycloak)",
                    predicate: [
                        { or: ["target:graycloak", "target:priest", "target:cleric"] },
                    ],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "<Deity> Lore",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "gold-falls-regular": {
        _id: "FovAoohhvG7vIbX9",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Gold Falls Regular",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've long been a regular of Gold Falls Inn, a tavern located near Droskar's Crag in the Darkmoon Vale region of Andoran. The establishment is a frequent gathering place for adventurers, storytellers, and folk heroes. You took note of the Pathfinder Society's growing reputation in the area and decided to join up and seek adventure and fame of your own.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill, as well as your choice of the Cooking Lore skill or Volcano Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] skill feat.</p>\n<p>Additionally, when you receive a mission briefing at Gold Falls Inn or a settlement in Darkmoon Vale, you can draw on your knowledge of the region and its many stories. You gain a +2 circumstance bonus to your checks to Gather Information or Recall Knowledge during the Getting Started segment of such adventures. Be sure to remind your GM that you have a relevant background.</p>",
            },
            items: {
                "4shqb": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Impressive Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Blog: Pathfinder Society Year 4 Rule Updates",
            },
            rules: [],
            trainedLore: "<Cooking Lore or Volcano Lore>",
            trainedSkills: { custom: "", value: ["prf"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "goldhand-arms-dealer": {
        _id: "B6kNrX1y8XNbQYea",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Goldhand Arms Dealer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're a dwarven agent of the Goldhand Lodge, a collection of dwarven merchants based out of Dongun Hold who seeks to sell guns far and wide. High King Anong Arunak hasn't expressed approval for such a method of distribution yet, but in the meantime you're still out and about, talking up your wares and occasionally providing visceral demonstrations of the overwhelming stopping power of your firearms. These demonstrations and sales have given you a taste for adventure, and the constant threat of piracy has convinced you of the importance of adventuring with a group.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Diplomacy and Mercantile Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                pu062: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Mercantile",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "grand-council-bureaucrat": {
        _id: "yK40c3082U30BUX5",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Grand Council Bureaucrat",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>You spent years working as a clerk to a functionary in Absalom's government. Your service taught you a thing or two about rousing speeches and manipulating the city's bureaucracy.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Government Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                "493vn": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Government Lore",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "grave-robber": {
        _id: "7QkQQsHjv2iNFIsF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Grave Robber",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Resurrectionist. Body snatcher. No matter what you're called, you know where the bodies are buried, and how many coins they'll fetch when dug up. Adventuring comes naturally to you-in your mind dungeons are just oversized tombs-as does returning home with your loot undetected.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Smuggler] skill feat.</p>",
            },
            items: {
                z1rup: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Smuggler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Smuggler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            trainedLore: "Underworld",
            trainedSkills: { custom: "", value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "grizzled-muckrucker": {
        _id: "xCCvT9tprRQVFVDq",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Grizzled Muckrucker",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've served on the Muckruckers, the unofficial guards of the flooded Puddles district. The pay's no good, the conditions are squalid, and you've seen things during your time on the force that've made you question your career entirely. Perhaps you joined the group out of a sense of duty to your fellow Absalomians, or maybe you felt an obligation to help restore your apocalyptic home district to some semblance of normalcy. Either way, the traumas you've endured, the double-crossers who've betrayed you, the wretched monsters that have crawled out of the muck to assail you-it's enough to turn an officer to weary cynicism or self-destruction through merciful drink.</p>\n<p>Thankfully, you found an out: an invitation to transfer to the newly formed Edgewatch. You accepted the offer in the hope that some fresh experience in a new district, surrounded by new people, might reignite the hope and passion you felt for the job so long ago.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill, as well as either Labor Lore or Underworld Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to @UUID[Compendium.pf2e.actionspf2e.Item.Interact] with Muckruckers, mercenaries, and adventurers. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Tracker] skill feat.</p>",
            },
            items: {
                "15iku": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Tracker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Tracker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with Muckruckers, mercenaries, and adventurers (Grizzled Muckrucker)",
                    predicate: [
                        {
                            or: [
                                "target:muckrucker",
                                "target:mercenary",
                                "target:adventurer",
                            ],
                        },
                    ],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "Labor Lore or Underworld Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    guard: {
        _id: "6UmhTxOQeqFnppxx",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Guard",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You served in the guard, out of either patriotism or the need for coin. Either way, you know how to get a difficult suspect to talk. However you left the guard, you might think of adventuring as a way to use your skills on a wider stage.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Intimidation skill and the Legal Lore or Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Coercion] skill feat.</p>",
            },
            items: {
                zudho: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Coercion",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<Legal or Warfare> Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "guest-of-sedeq-lodge": {
        _id: "5RhHdnzWWKfh5faz",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Guest of Sedeq Lodge",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Either as a guest, event staff, or part of the construction crew, you spent a significant stretch of time at the Pathfinder Society's new lodge in Sedeq. The lodge serves as a new home for those fleeing from oppression or otherwise seeking a fresh start in Qadira. The magic and marvels you witnessed at the lodge inspired you to find more excitement as a member of the Pathfinder Society.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Arcana or Religion skills, as well as your choice of the Genie Lore or Sarenrae Lore skills. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat.</p>\n<p>Additionally, when you receive a mission briefing at Sedeq Lodge, your familiarity with the site and the nearby area comes in handy. You gain a +2 circumstance bonus to your checks to Gather Information or Recall Knowledge during the Getting Started segment of such adventures. Be sure to remind your GM that you have a relevant background.</p>",
            },
            items: {
                jdle4: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Blog: Pathfinder Society Year 4 Rule Updates",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillArc", value: "arc" },
                        { label: "PF2E.SkillRel", value: "rel" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "<Choice of Genie Lore or Sarenrae Lore>",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    gunsmith: {
        _id: "5dezuNcZJ6wfecnG",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Gunsmith",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>From a young age, you apprenticed to an experienced gunsmith and over time your skill and knowledge rose to match that of your master. Today, you can easily repair, modify, or improve nearly any firearm you've seen before, and even if you haven't seen it, you'll break it down to learn about what makes it tick in no time. You've taken those skills on the road, using them to assist yourself and your allies as an adventurer when it comes to maintaining their weapons, shields, armor, and more.</p>\n<p>Choose two ability boosts. One of these boosts must be to <strong>Intelligence</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Repair] skill feat.</p>",
            },
            items: {
                "6ck05": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Repair",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Repair",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "hammered-by-fate": {
        _id: "Mz7G3rTPxV2Xzy18",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hammered by Fate",
        system: {
            boosts: {
                "0": { value: ["str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your life has been difficult, in no small part due to the influence of all things fiendish in your past. You might be a tiefling whose heritage has resulted in you being shunned or ostracized by society, or you could be any ancestry who grew up in a land where fiendish influence lingers—such as devil-haunted Cheliax or the realm of Sarkoris Scar, where the influence of the Worldwound and its demonic invaders yet linger. Perhaps you carry an old scar or wound from a frightening encounter with a demon, have a fiend-related element as part of your class (such as a sorcerer bloodline or a fiendish patron whom you worship), or endured a long-term affliction from a fiendish source that only recently has been alleviated. Whatever the case, fate has thrown horror and terror at you at every turn, and that's taught you to always be ready for whatever those fiends might have in store for you next.</p>\n<p>This background is associated with the suit of Hammers.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong>, and one is a free ability boost. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat and are trained in one of the following Lore skills, as fits your history: Daemon Lore, Demon Lore, or Devil Lore. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Harrow the Fiend] free action.</p>",
            },
            items: {
                "58bSE": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hefty Hauler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "harbor-guard-moonlighter": {
        _id: "lCR8gyEZbwqh3RWi",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Harbor Guard Moonlighter",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The Harbor Guard isn't known for being the most honorable precinct in town. A few years after you joined the force, you became disillusioned by the rampant corruption within the precinct and the district at large. One night, you stumbled on an ad for a local monster hunter's guild. You joined on a whim, but fell in love with the swashbuckling lifestyle of an independent bounty hunter. You've since earned quite a reputation for your nocturnal adventures; everyone still knows that you're a Harbor Guard, but stories of your dungeon-delving adventures have long overshadowed that facet of your life. Unfortunately, long nights of monster-hunting have negatively impacted your performance at your day job, so maybe it wasn't a surprise when your supervising officer put in a transfer request for you, spelling the end of your plucky nighttime antics with that particular guild.</p>\n<p>Despite the decline in your performance, Lieutenant Lavarsus of Edgewatch sees potential (and even, maybe, a bit of himself) in you. You're eager to be on a new unit and for the chance to bring your monster-hunting skills to a district that has been plagued by such supernatural beasts for far too long.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and your choice of Sailing Lore or Hunting Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to @UUID[Compendium.pf2e.actionspf2e.Item.Interact] with Harbor Guards, ship captains, and freelance adventurers. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Jump] skill feat.</p>",
            },
            items: {
                q0xhg: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Jump",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Jump",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with Harbor Guards, ship captains, and freelance adventurers (Harbor Guard Moonlighter)",
                    predicate: [
                        {
                            or: [
                                "target:harbor-guard",
                                "target:ship-captain",
                                "target:freelance-adventurer",
                            ],
                        },
                    ],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "Sailing Lore or Hunting Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "harrow-chosen": {
        _id: "X1YhwDic2ugT9RuQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Harrow-Chosen",
        system: {
            boosts: {
                "0": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Unbeknownst to you, a powerful divination has confirmed that you're destined for greatness. This divination hints at a great potential you're only just beginning to understand.</p>\n<p>Select one card from the harrow deck and note its suit and alignment. The suit is connected to a specific ability score (hammers [Strength], keys [Dexterity], shields [Constitution], books [Intelligence], stars [Wisdom], crowns [Charisma]).</p>\n<p>Choose two ability boosts. One must be to the ability score tied to your card's suit and one is a free ability boost.</p>\n<p>You gain the ability to cast a common occult innate cantrip of your choice and can cast the cantrip at will. A cantrip is heightened to a spell level equal to half your level rounded up. When casting the cantrip, you can empower it as a free action, tapping into the power of the harrow to grant you additional benefits while drawing a card from a harrow deck as part of the actions taken to Cast the Spell. This benefit is determined by alignment of the card you draw from the deck. The card can match both alignment components with yours (true match), match a single alignment component with yours (partial match), have no matching alignment components (unmatched), or have a diametrically opposed alignment to yours (misaligned). If you empower your cantrip in this way, you can't cast that cantrip again until your next daily preparations.</p>\n<p><strong>True match</strong>: You gain a +1 circumstance bonus to a saving throw of your choice (Fortitude, Reflex, or Will) for 1 minute.</p>\n<p><strong>Partial match</strong>: You gain resistance to one energy type (acid, cold, electricity, fire, or sonic) equal to your level for 1 minute.</p>\n<p><strong>Unmatched</strong>: You gain temporary Hit Points equal to twice your level. The temporary Hit Points remain for 1 minute.</p>\n<p><strong>Misaligned</strong>: You gain a +5-foot circumstance bonus to your Speeds for 1 minute.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #192: Worst of All Possible Worlds",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "harrow-led": {
        _id: "2jeonnY3GZTdEMsm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Harrow-Led",
        system: {
            boosts: {
                "0": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    '<p>You were the subject of a harrow reading at a pivotal point in your life, such as on an important birthday, or upon reaching adulthood. The reading was eerily accurate and has been relevant, for good or ill, at more points in your life than you could call mere coincidence.</p>\n<p>Randomly determine two harrow suits tied to your character, each reflecting a specific ability score. You can do so by drawing cards from a harrow deck or by rolling a [[/r 1d6]]{d6}:</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>d6</th>\n<th>Result</th>\n<th>Ability</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Hammers</td>\n<td>Strength</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Keys</td>\n<td>Dexterity</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Shields</td>\n<td>Constitution</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Books</td>\n<td>Intelligence</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Stars</td>\n<td>Wisdom</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Crowns</td>\n<td>Charisma</td>\n</tr>\n</tbody>\n</table>\n<p>The first suit is your aligned score, and the second suit is your misaligned score.</p>\n<p>Choose two ability boosts. One must be to your <strong>aligned or misaligned</strong> score, and one is a free ability boost.</p>\n<p>You\'re trained in your choice of the Occultism, Performance, or Society skill and the Harrow Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>',
            },
            items: {
                "38k5r": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #160: Assault on Hunting Lodge Seven",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillOcc", value: "occultism" },
                        { label: "PF2E.SkillPrf", value: "performance" },
                        { label: "PF2E.SkillSoc", value: "society" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Harrow Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "haunted-citizen": {
        _id: "18Jzk3gAsXspFOYC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Haunted Citizen",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You grew up in a region where undead lurk everywhere. This could be a domain as small as a vampire's fief or as vast as the nation of Ustalav. As an ever-present concern, the undead greatly shaped your life. Living with fear became an everyday skill... as did pleading for your life.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Lore skill for your home settlement. You gain the @UUID[Compendium.pf2e.feats-srd.Item.No Cause For Alarm]{No Cause for Alarm} skill feat.</p>",
            },
            items: {
                xxszd: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "No Cause For Alarm",
                    uuid: "Compendium.pf2e.feats-srd.Item.No Cause For Alarm",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    haunted: {
        _id: "pGOlKz4Krnh7MyUM",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Haunted",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are followed by a spirit or entity, either from childhood or since a traumatic or momentous event. You may have seen this entity. Others may have seen it as well. You have studied esoteric subjects trying to understand your situation, but this presence in your life remains a mystery. Whatever this entity is or wants, it influences your life in subtle ways, not always good. Sometimes the entity helps you, but at other times, its influence is malevolent or harmful. The entity is most likely to surface in stressful situations.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in Occultism and an additional skill in which the haunting entity is well-versed, determined by the GM. Any time you attempt a skill check for the entity's skill, the GM can offer you a +1 circumstance bonus to the check, as though the entity were @UUID[Compendium.pf2e.actionspf2e.Item.Aid]{Aiding} you. If you accept but fail the check, you are @UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 2} (@UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 4} on a critical failure). The initial Frightened value can't be reduced by effects that would reduce or prevent the condition (such as a fighter's bravery).</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "haunting-vision": {
        _id: "0z0PSizHviOehdJF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Haunting Vision",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've been haunted by frightening dreams of fires your whole life. This could be the result of a past, near-death experience with fire or it might have no obvious source that you know of. Recently, you stumbled upon an image, story, or other omen featuring the dragon god of destruction, Dahak, and you were struck with an unnerving sense of deja vu-you've come to think that the draconic deity might have something to do with your dreams, and as such have been studying all you can about the god. Your visions have bolstered your faith as well; even if you don't worship a specific deity, you have a deep passion for matters of faith.</p>\n<p>Your latest dream, for the first time, had enough details to identify its setting-in this last dream, you saw the town of Breachill burning. You've decided to join the Call for Heroes hoping to save the town you fear might burn to the ground soon.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Dahak Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Student of the Canon] skill feat.</p>",
            },
            items: {
                vaywv: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Student of the Canon",
                    uuid: "Compendium.pf2e.feats-srd.Item.Student of the Canon",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "Dahak Lore",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "hellknight-historian": {
        _id: "vNWSzv36L1GBPPoc",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hellknight Historian",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The various Hellknight Orders intrigue you, whether you seek to become one of their number yourself, wish to oppose their goals at every turn, or are merely inspired by or curious to learn more about them. You've heard that when the Order of the Nail abandoned Citadel Altaerein, they left behind the deed to the castle so anyone brave enough to explore the ruins and the defenses no doubt left behind would be rewarded with ownership of the abandoned fortress.</p>\n<p>You decided to join the Call for Heroes to hoping to gain an opportunity to explore Citadel Altaerein.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Architecture Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] skill feat.</p>",
            },
            items: {
                fzch2: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Courtly Graces",
                    uuid: "Compendium.pf2e.feats-srd.Item.Courtly Graces",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "Architecture Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    herbalist: {
        _id: "ZdhPKEY9FfaOS8Wy",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Herbalist",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As a formally trained apothecary or a rural practitioner of folk medicine, you learned the healing properties of various herbs. You're adept at collecting the right natural cures in all sorts of environments and preparing them properly.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Nature skill and the Herbalism Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Natural Medicine] skill feat.</p>",
            },
            items: {
                i5m1o: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Natural Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Natural Medicine",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Herbalism Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "hermean-expatriate": {
        _id: "bh6O2Ad5mkYwRngM",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hermean Expatriate",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - High Seas</p>\n<hr />\n<p>You have been exiled from Hermea, perhaps of your own accord or perhaps because you didn't measure up. However, you take with you some of the benefits of the excellent education afforded to its citizenry.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Dragon Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Skill Training] skill feat.</p>",
            },
            items: {
                kbvzp: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Skill Training",
                    uuid: "Compendium.pf2e.feats-srd.Item.Skill Training",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Dragon Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "hermean-heritor": {
        _id: "mxJRdRSMsyZfBf5c",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hermean Heritor",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>[Legacy - Age of Ashes]</strong></p>\n<p>With the restrictions on Hermean citizenship lifted, you may have fled the city of Promise or have spent some of your childhood in the company of someone who did.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Legal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat or the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat for Society.</p>",
            },
            items: {
                o318c: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
                x6866: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #150: Broken Promises",
            },
            rules: [],
            trainedLore: "Legal Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    hermit: {
        _id: "b3UC18ueX8m9Ov0W",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hermit",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In an isolated place--like a cave, remote oasis, or secluded mansion--you lived a life of solitude. Adventuring might be a welcome reprieve from solitude or an unwanted change, but in either case, you're likely still rough around the edges.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Nature or Occultism skill, plus a Lore skill related to the terrain you lived in as a hermit (such as Cave Lore or Desert Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                z8dne: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillNat", value: "nature" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "<Location> Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "highborn-snoop": {
        _id: "OfdT8v9apVNZyYqt",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Highborn Snoop",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The machinations and scheming of King's Crown have trained you to be on the lookout for those who seem out of place. You've learned to spot when the person pouring your tea has sword calluses—or when the person wearing a guard's uniform doesn't.</p>\n<p>Choose two ability boosts. One must be <strong>Dexterity</strong> or <strong>Intelligence</strong>, and the other is a free boost.</p>\n<p>You're trained in the Society skill, and the Guild Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] skill feat.</p>",
            },
            items: {
                uYjAM: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Courtly Graces",
                    uuid: "Compendium.pf2e.feats-srd.Item.Courtly Graces",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [],
            trainedLore: "Guild Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "hired-killer": {
        _id: "1M91pTjatEejBjEl",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hired Killer",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your life truly began after your first kill. Maybe you killed in self-defense, maybe it was a crime of passion, or maybe it was just an accident and you were a kid in the wrong place at the wrong time. In the end, the why doesn't matter. You got away with it. And then you found that maybe it didn't bother you as much as it should have. And maybe, just maybe, you had a talent you could use to forge a life for yourself. A blood-soaked talent and a blood-soaked life, sure. But it's yours.</p>\n<p>Choose two ability boosts. One boost must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Stalker] skill feat, choosing a terrain appropriate for where you make your kills.</p>",
            },
            items: {
                p53i3: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Stalker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Stalker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Underworld",
            trainedSkills: { custom: "", value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "historical-reenactor": {
        _id: "2zYdTia5t7w6J2ey",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Historical Reenactor",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>To Clan Tolorr, history shouldn't be dry and boring; it deserves to be engaging and made relevant to the living. You couldn't agree more! Whether it's your hobby or career, you've developed a reputation for translating the past into the present through demonstrations, period performances, acting out famous events, donning replica armor, and other feats of living history—filling in a few historical blanks if it makes a better show. Having learned of your passion, Clan Tolorr has sponsored your visit to Highhelm so that you can learn from each other. It's a wonderful opportunity, and Tolorr puppetry arts, storytelling, props, and historical rigor are the stuff of legends. Already, you've begun researching dwarven history so that you're prepared for whatever lies ahead.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in either the Performance skill or the Society skill, and you're trained in the Dwarf Lore skill. If you selected Performance, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] skill feat. If you chose Society, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>\n<p><strong>Connection:</strong> Bulgra Veldollow, a matriarch in Clan Tolorr and accomplished puppeteer</p>\n<p><strong>Reputation Points:</strong> +0</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Sky King's Tomb Player's Guide",
            },
            rules: [
                {
                    choices: [
                        {
                            label: "PF2E.SkillPerformance",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.xqAdXRd2gSQcqp5E",
                                skill: "performance",
                            },
                        },
                        {
                            label: "PF2E.SkillSociety",
                            value: {
                                feat: "Compendium.pf2e.feats-srd.Item.1Bt7uCW2WI4sM84P",
                                skill: "society",
                            },
                        },
                    ],
                    flag: "historicalReenactor",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.historicalReenactor.skill}.rank",
                    value: 1,
                },
                {
                    allowDuplicate: false,
                    key: "GrantItem",
                    uuid: "{item|flags.pf2e.rulesSelections.historicalReenactor.feat}",
                },
            ],
            trainedLore: "Dwarf Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "hookclaw-digger": {
        _id: "aWAfj7bhTZM2oK81",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hookclaw Digger",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisites</strong> Kobold ancestry</p>\n<p>You are a digger from the Hookclaw kobold tribe, born beneath the streets of Absalom, with muscles and mind hardened by years spent tunneling through rock and earth and a confidence built upon your pride in your draconic heritage.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill, the Mining Lore skill, and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Improvise Tool] skill feat.</p>",
            },
            items: {
                o3zgv: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Improvise Tool",
                    uuid: "Compendium.pf2e.feats-srd.Item.Improvise Tool",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Little Trouble in Big Absalom",
            },
            rules: [],
            trainedLore: "Mining Lore, Engineering Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "hounded-thief": {
        _id: "T537wo3aem8GvnmR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hounded Thief",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Some time ago, you stole a unique item from a strange individual. It might have been a piece of clockwork from a far-off land or some other bit of strange technology. You might still have it or you might have sold it, but either way, you can't shake the feeling that you're being followed and watched, likely by forces who want to retrieve what you took. Luckily, a life of adventure keeps you on the move.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Thievery skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pickpocket] skill feat.</p>",
            },
            items: {
                l8gqm: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pickpocket",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pickpocket",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Underworld",
            trainedSkills: { custom: "", value: ["thi"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    hunter: {
        _id: "5Z3cLEpsx9nHVwhM",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Hunter",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You stalked and took down animals and other creatures of the wild. Skinning animals, harvesting their flesh, and cooking them were also part of your training, all of which can give you useful resources while you adventure.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Survival skill and the Tanning Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Survey Wildlife] skill feat.</p>",
            },
            items: {
                hy4x9: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Survey Wildlife",
                    uuid: "Compendium.pf2e.feats-srd.Item.Survey Wildlife",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Tanning Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "inexplicably-expelled": {
        _id: "UK40FVVVx6IKxipW",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Inexplicably Expelled",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Gaining admission to Blythir College is a difficult task, even for Alkenstar's most well-to-do families. In the magic-warped Mana Wastes, it's next to impossible to fake arcane talents or alchemical aptitude. So when you were accepted to the school, it was one of the most triumphant moments of your life.</p>\n<p>Unfortunately, your victory was short-lived. Just as you were you making significant headway on a promising series of explosive experiments, you found a letter on your desk informing you that, effective immediately, you were permanently expelled from Blythir College. As bogus as the punishment was, the charges leveled against you were even more puzzling: theft of property, both intellectual and physical. And just like that, you found your prestigious honors replaced with a ruined reputation, and your colleagues and mentors became bitter rivals and accusers. In an instant, you'd gone from promising scholar to wanted criminal.</p>\n<p>You followed the money for answers and learned that a shady financier named Ambrost Mugland didn't want you to finish your research at Blythir. He'd learned that you were on the brink of a great discovery-one that even you weren't fully aware of-and he decided that your imminent breakthrough would be bad for business. Unfortunately for Mugland, he chose the wrong student to destroy. Now, you'll do whatever's necessary to get your revenge on the villain who stole the future you had worked so hard to build for yourself.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Academia Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Alchemical Crafting] skill feat.</p>",
            },
            items: {
                hg2wb: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Alchemical Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Outlaws of Alkenstar Player's Guide",
            },
            rules: [],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    inlander: {
        _id: "6vsoyCZKqxG0lVe8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Inlander",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>You grew up in an untamed region of the Isle of Kortos, and you know how to survive in the wild.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and a Lore skill related to the terrain type associated with your home region (such as Hills Lore or Mountains Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Survey Wildlife] skill feat.</p>",
            },
            items: {
                yy4um: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Survey Wildlife",
                    uuid: "Compendium.pf2e.feats-srd.Item.Survey Wildlife",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "<Terrain> Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    insurgent: {
        _id: "HdnmIaLadhRfZq8X",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Insurgent",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were more than a rebel; you were a revolutionary, fighting for the promise of a new or better country. You may or may not still believe in the cause, or perhaps victory or exile has led you on this new journey to trumpet your glory... or to escape the consequences of your defeat.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lengthy Diversion] skill feat.</p>",
            },
            items: {
                ltz28: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lengthy Diversion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lengthy Diversion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Warfare Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "iolite-trainee-hobgoblin": {
        _id: "fML6YrXYDqQy0g7L",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Iolite Trainee Hobgoblin",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisites</strong> Hobgoblin Ancestry</p>\n<hr />\n<p>The Iolite Squad was Oprak's first foray into training hobgoblins for Pathfinder membership. You've added the archival and archaeological skills they sent back to Oprak into your military training.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Sign Language] skill feat.</p>",
            },
            items: {
                ltsp0: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Sign Language",
                    uuid: "Compendium.pf2e.feats-srd.Item.Sign Language",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Society Scenario #1-19: Iolite Squad Alpha",
            },
            rules: [],
            trainedLore: "Warfare Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "issian-partisan": {
        _id: "8UEKgUkagUDixkL2",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Issian Partisan",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Broken Lands</p>\n<hr />\n<p>You grew up among the northern houses of Brevoy in old Issia. Steeped in the cultural legacy of pirates and smugglers, you rely on your cleverness and charm as you make your way throughout the world.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] skill feat.</p>",
            },
            items: {
                "6onml": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Charming Liar",
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "issian-patriot": {
        _id: "bNsYkUGMKmtc28MX",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Issian Patriot",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You grew up in northern Brevoy, but the call for heroes willing to help take back your country's rightful holdings in the Stolen Lands has inflamed your dreams of profit and possibilities, and you have joined an expedition journeying south.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Legal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                "4VDIF": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Kingmaker Player's Guide",
            },
            rules: [],
            trainedLore: "Legal Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "junk-collector": {
        _id: "HSNUDvPgO1NESW7S",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Junk Collector",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You live by the adage that one person's trash is another's treasure. Whether by sifting through scrap heaps or digging up old battlefields, you remain on the lookout for lost or discarded objects that you might be able to turn into something useful. More often than not, what you find is just junk... but you're convinced that one of these days, you're going to hit the jackpot. You've even taken up adventuring as a means to supercharge your access to all sorts of junk, gear, and loot.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and your choice of either the Engineering Lore or Mining Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Crafter's Appraisal] skill feat.</p>",
            },
            items: {
                osb2w: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Crafter's Appraisal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Crafter's Appraisal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering or Mining",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    junker: {
        _id: "vTyG1bQkEENZHroY",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Junker",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You live on the outskirts of civilization, combing through the detritus left behind for interesting trinkets to sell or use in your own crafting. Though you have a preferred terrain to search, you know that the greatest treasures occur where people make greater use of technology.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Lore skill of the terrain in which you scavenge. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat.</p>",
            },
            items: {
                uzu2f: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hefty Hauler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "kalistrade-follower": {
        _id: "hPx0xiv00GQqPWUH",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Kalistrade Follower",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Shining Kingdoms</p>\n<hr />\n<p>You follow the philosophy of the Prophecies of Kalistrade, seeking to build up your wealth in this life so that you might meet the next world on your own terms.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Kalistrade Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Bargain Hunter] skill feat.</p>",
            },
            items: {
                q5wjd: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Bargain Hunter",
                    uuid: "Compendium.pf2e.feats-srd.Item.Bargain Hunter",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Kalistrade Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "keys-to-destiny": {
        _id: "m2sWdTIXlyXmqsuC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Keys to Destiny",
        system: {
            boosts: {
                "0": { value: ["dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>From as far back as you can remember, it seems you were always meant to enter a specific industry or profession, be it artistry, engineering, farming, herbalism, labor, merchantry, scribing, theater, or warfare. Perhaps your parents belonged to this profession and encouraged you to follow in their footsteps, or maybe a personal hero of yours inspired you to take up their calling in honor of their accomplishments. Whatever the reason, the skills associated with that profession came naturally to you, but as time wore on and you grew older, you began to realize that this profession, while interesting to you, isn't what you want to do with your life. The lure of glory and adventure beckons. You can always go back to the studio, farm, or stage once you retire, after all!</p>\n<p>This background is associated with the suit of Keys.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong>, and one is a free ability boost. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat and are trained in one of the following Lore skills associated with a profession, as befits your history: Art Lore, Engineering Lore, Farming Lore, Herbalism Lore, Labor Lore, Mercantile Lore, Scribing Lore, Theater Lore, or Warfare Lore. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Lucky Break] free action.</p>",
            },
            items: {
                rhnET: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "kyonin-emissary": {
        _id: "pBX18FI1grWwkWjk",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Kyonin Emissary",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Shining Kingdoms</p>\n<hr />\n<p>You were trained to be an ambassador of the elven land of Kyonin, and you have now been sent out into the wider world to build alliances between Kyonin and the neighboring kingdoms.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>",
            },
            items: {
                "3sxsf": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Politics Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    laborer: {
        _id: "2bzqI0D4J3LUi8nq",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Laborer",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've spent years performing arduous physical labor. It was a difficult life, but you somehow survived. You may have embraced adventuring as an easier method to make your way in the world, or you might adventure under someone else's command.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Athletics skill and the Labor Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat.</p>",
            },
            items: {
                zqm3y: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hefty Hauler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Labor Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "lastwall-survivor": {
        _id: "ffcNsTUBsxFwbNgJ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Lastwall Survivor",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>You managed to escape the devastation that the Whispering Tyrant brought to your nation, but you lost everything to the lich-king's minions, including your home and many friends and family.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Undead Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Battle Medicine] skill feat.</p>",
            },
            items: {
                rqosr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Battle Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Battle Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Undead Lore",
            trainedSkills: { value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "learned-guard-prodigy": {
        _id: "OD8RTS7cTeMJJFcR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Learned Guard Prodigy",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>For some, the nuts and bolts of keeping the peace are practically second nature. Such is the case for you, a member of the Learned Guard with an incredible mind for investigation as well as a gift for understanding magic. You probably aren't a hit with your peers, who find your intellect and natural gift of deduction perhaps a bit off-putting, but when left to your own devices you excel, and you get along well with professors and mages such as those who work in Forae Logos or the Arcanamirium.</p>\n<p>After no shortage of debating the pros and cons, you decided to transfer to the Edgewatch precinct. Sure, you have a keen understanding of the theories and principles behind law enforcement, but you've reasoned that in order to be a truly effective guard you'll need some first-hand experience in a high-risk area nabbing suspects and protecting innocents- all the while taking fastidious notes and writing your grand thesis on the merits and shortcomings of Absalom's laws.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Arcana or Occultism skill, as well as Legal Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Learned Guards and with academics such as librarians and scholars. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat.</p>",
            },
            items: {
                o4rw8: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with Learned Guards or scholars (Learned Guard Prodigy)",
                    predicate: [{ or: ["target:learned-guard", "target:scholar"] }],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillArc", value: "arcana" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Legal Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "legacy-of-the-hammer": {
        _id: "qzKT7L1qldz14q8M",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Legacy of the Hammer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your introduction to the criminal life was spurred forward by a seemingly innocuous hammer that provided you with all kinds of innovative criminal ideas. It has since left your possession, but every now and then you hear a faint whisper urging you toward crime.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Thievery skill and Engineering Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Concealing Legerdemain] skill feat.</p>",
            },
            items: {
                REfC4: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Concealing Legerdemain",
                    uuid: "Compendium.pf2e.feats-srd.Item.Concealing Legerdemain",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [],
            trainedLore: "Engineering Lore",
            trainedSkills: { custom: "", value: ["thi"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "legendary-parents": {
        _id: "84uVpQFCqn0Atfpo",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Legendary Parents",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>[Legacy - Age of Ashes]</strong></p>\n<p>One or more of your parents (either biological or adoptive) were heroes of the Age of Ashes Adventure Path. Others tend to treat you with a bit more respect, or perhaps fear your connections to people of great power.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill, and the Genealogy Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                sce5j: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #150: Broken Promises",
            },
            rules: [],
            trainedLore: "Genealogy Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "lesser-scion": {
        _id: "BBeJA7n0xpSsBCGq",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Lesser Scion",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are the youngest child in a noble house (in Cheliax, Isger, or Andoran) and stand to inherit nothing from your family. Although you have a minor title, it affords you no lands or wealth, but it has garnered you a small amount of respect and deference in your travels. When play begins, you are riding in a caravan bound for Almas, where a cousin has promised to allow you to stay with them for a month.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Heraldry Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                w46a5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: The Fall of Plaguestone",
            },
            rules: [],
            trainedLore: "Heraldry Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "local-brigand": {
        _id: "TQBYPTRTVGLMv7cx",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Local Brigand",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You hail from the River Kingdoms or the more lawless reaches of Brevoy. Your life has been hard. You know how to ambush travelers, bully traders, avoid the law, and camp where no one can find you. Recently, you've run into some trouble, either with the law or with other bandits, and you're looking to get away to somewhere no one would ever think to look for you. An expedition into the rugged wilderness seems like a perfect way to lie low until the trouble blows over.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Banditry Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                GnMr4: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Kingmaker Player's Guide",
            },
            rules: [],
            trainedLore: "Banditry Lore",
            trainedSkills: { custom: "", value: ["itm"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "local-scion": {
        _id: "4a2sVO0o2mMTydN8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Local Scion",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're from Breachill and have lived there most, if not all, of your life. You might be the son or daughter of a well-known local adventuring family, or a family with a storied tradition of military or other martial service. You likely also have some sort of skill with your hands, as the people of Breachill are very self-sufficient.</p>\n<p>The Call for Heroes is one of your hometown's most iconic traditions, and you want to attend so you can prove your own merits to the council-beyond simply those of your family's name.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Breachill Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat.</p>",
            },
            items: {
                e8pnw: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Specialty Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "Breachill Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "lost-and-alone": {
        _id: "wU1qd8tZNcYn43y2",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Lost and Alone",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were training to become a knight in Lastwall when the Whispering Tyrant escaped his imprisonment and destroyed the nation. It was only by dumb luck that you are alive at all, but the memories of that fateful day haunt your dreams. When play begins, you have boarded a caravan heading toward a new town, having worn out your welcome at the taverns and inns of Elidir.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill, and the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            items: {
                od1ci: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Intimidating Glare",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: The Fall of Plaguestone",
            },
            rules: [],
            trainedLore: "Warfare Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "lost-loved-one": {
        _id: "2wGmG7ntcnkvtw8l",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Lost Loved One",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You see your life as naturally divided into two chapters: in one, the love-limned, halcyon days of yesteryear, in the other, the day you lost the person most important to you, plus every aching moment thereafter. When you saw a vision of your lost loved one in a glowing portal on the night of the Missing Moment, you knew it was too good to be true. But you couldn't help yourself, either, so you walked through the door, one grasping hand outstretched in anticipation. You don't know what happened on the other side of the arch, but your hand seems to. Like a ghostly fragment of your missing loved one, you can summon an ethereal hand to reach out from your body. Though it's a pale imitation of the warmth you once felt in your dearly departed's presence, you do find this new hand somehow comforting, in a way.</p>\n<p>Your deviant abilities are of the wraith classification. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Ghostly Grasp (Deviant)]{Ghostly Grasp} deviant feat. As a quirk, whenever you use a deviant ability, a low, rattling moan emanates from some unseen maw in your vicinity.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Genealogy Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>",
            },
            items: {
                GSnz8: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Gatewalkers Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Ghostly Grasp (Deviant)",
                },
            ],
            trainedLore: "Genealogy Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "lumber-consortium-laborer": {
        _id: "uJcFanGjVranEarv",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Lumber Consortium Laborer",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Shining Kingdoms</p>\n<hr />\n<p>You have suffered as a worker for the unscrupulous Lumber Consortium, laboring under harsh conditions in dangerous wooded regions of Andoran.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Forest Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Athletics.</p>",
            },
            items: {
                nffsc: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Forest Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "magaambya-academic": {
        _id: "HsAZDAPpqynArFAp",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Magaambya Academic",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Mwangi Expanse</p>\n<hr />\n<p>You studied magic at the prestigious Magaambya academy in Nantambu, learning magical traditions dating back to Old- Mage Jatembe and earning a pedigree respected by magical scholars almost everywhere.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of either the Arcana or Nature skill, as well as the Academia Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat.</p>",
            },
            items: {
                cq4ht: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillArc", value: "arcana" },
                        { label: "PF2E.SkillNat", value: "nature" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "magical-experiment": {
        _id: "WIWR8jURAdSAzxIh",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Magical Experiment",
        system: {
            boosts: { "0": { value: ["con"] }, "1": { value: [] } },
            description: {
                value:
                    "<p>At some point in your life, powerful people performed magical experiments on you that changed you permanently. You may have signed up for this voluntarily, but it may have been against your will. You still bear the marks, as well as the abilities.</p>\n<p>You gain one ability boost. It must be to <strong>Constitution</strong>.</p>\n<p>You're trained in Occultism and the Academia Lore skill. You gain one special ability as a result of the magical experimentation. Work with the GM to select an appropriate ability from the following list or to come up with another special ability.</p>\n<hr />\n<ul>\n<li><strong>Enhanced Senses</strong> You gain low-light vision (or darkvision if you already had low-light vision) and an imprecise sense with a range of 30 feet, such as scent, thoughtsense, tremorsense, or wavesense.</li>\n<li><strong>Resistant Skin</strong> The experiments rendered your skin tougher and resilient to a particular type of damage. You gain resistance equal to half your level (minimum resistance 1) against two of the following types of energy damage, one chosen by you and the other chosen by the GM: acid, cold, electricity, fire, or sonic.</li>\n<li><strong>Touch Telepathy</strong> The experiments to your body allowed you to link minds via touch. You gain telepathy with creatures as long as you are in physical contact. This allows you to communicate mentally with any creatures you're in physical contact with, as long as you both share a language. This doesn't give any special access to their thoughts, and communicates no more information than normal speech would.</li>\n</ul>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    adjustName: true,
                    choices: [
                        {
                            label: "PF2E.SpecificRule.MagicalExperiment.EnhancedSenses",
                            value: "enhanced-senses",
                        },
                        {
                            label: "PF2E.SpecificRule.MagicalExperiment.ResistantSkin",
                            value: "resistant-skin",
                        },
                        {
                            label: "PF2E.SpecificRule.MagicalExperiment.TouchTelepathy",
                            value: "touch-telepathy",
                        },
                    ],
                    flag: "magicalExperiment",
                    key: "ChoiceSet",
                    prompt: "PF2E.UI.RuleElements.ChoiceSet.Prompt",
                    rollOption: "background:magical-experiment",
                },
                {
                    key: "Sense",
                    predicate: [
                        "self:low-light-vision:from-ancestry",
                        "background:magical-experiment:enhanced-senses",
                    ],
                    selector: "darkvision",
                },
                {
                    key: "Sense",
                    predicate: ["background:magical-experiment:enhanced-senses"],
                    selector: "lowLightVision",
                },
                {
                    adjustName: true,
                    choices: [
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                        { label: "PF2E.TraitSonic", value: "sonic" },
                    ],
                    flag: "energy1",
                    key: "ChoiceSet",
                    predicate: ["background:magical-experiment:resistant-skin"],
                },
                {
                    adjustName: true,
                    choices: [
                        { label: "PF2E.TraitAcid", value: "acid" },
                        { label: "PF2E.TraitCold", value: "cold" },
                        { label: "PF2E.TraitElectricity", value: "electricity" },
                        { label: "PF2E.TraitFire", value: "fire" },
                        { label: "PF2E.TraitSonic", value: "sonic" },
                    ],
                    flag: "energy2",
                    key: "ChoiceSet",
                    predicate: ["background:magical-experiment:resistant-skin"],
                },
                {
                    key: "Resistance",
                    predicate: ["background:magical-experiment:resistant-skin"],
                    type: "{item|flags.pf2e.rulesSelections.energy1}",
                    value: "max(1,floor(@actor.level/2))",
                },
                {
                    key: "Resistance",
                    predicate: ["background:magical-experiment:resistant-skin"],
                    type: "{item|flags.pf2e.rulesSelections.energy2}",
                    value: "max(1,floor(@actor.level/2))",
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "magical-merchant": {
        _id: "I5cRrqrPCHsQqFI9",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Magical Merchant",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Selling magic items isn't like being an ordinary merchant. The wares you buy and sell are expensive, making each sale rare and lucrative. You've developed knowledge of expert handiwork to ensure you don't fall for a scam, since buying a single counterfeit item can lead to bankruptcy. Whether you went out of business and had to find alternative employment, or took up adventuring to acquire new merchandise, you've taken to adventuring yourself.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in Crafting and Mercantile Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Crafter's Appraisal] skill feat.</p>",
            },
            items: {
                tkjfi: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Crafter's Appraisal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Crafter's Appraisal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Mercantile Lore",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "magical-misfit": {
        _id: "EYPorNgoYcp37akm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Magical Misfit",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You don't understand folks who claim that magical talent is some sort of burden or great responsibility; you've always used your magic to cause trouble and to escape the consequences. Whether becoming an adventurer is your attempt to make amends or just a new way to make some mischief, you're excited to see where it takes you, and you still delight in using your skills to get out of trouble.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in Arcana and Underworld Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Trick Magic Item] skill feat.</p>",
            },
            items: {
                lu6zt: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Trick Magic Item",
                    uuid: "Compendium.pf2e.feats-srd.Item.Trick Magic Item",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { custom: "", value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "mammoth-herder": {
        _id: "D00NdG0WtUNMO546",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mammoth Herder",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're adept at calming, wrangling, and living beside woolly mammoths and other megafauna commonly found in the Realm of the Mammoth Lords. Perhaps you've even formed a particularly strong bond with one or two of your following's animals, and you tend to get along with other herders in the following, such as young Imek or old Chultei. When the Broken Tusk following must move, you and the other herders know how to convey this message to the animals in your herd.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Herding Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] skill feat.</p>",
            },
            items: {
                "9bwxw": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Train Animal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Quest for the Frozen Flame Player's Guide",
            },
            rules: [],
            trainedLore: "Herding",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "mammoth-speaker": {
        _id: "76RK9WizWYdyhMy5",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mammoth Speaker",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Saga Lands</p>\n<hr />\n<p>You have learned the secrets of taming the mighty mammoths and other megafauna of the far north. Perhaps these talents are a part of your people's traditional customs, or perhaps you sought out these massive animals of your own accord.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Animal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] skill feat.</p>",
            },
            items: {
                h8c9q: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Train Animal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Animal Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "mana-wastes-refugee": {
        _id: "V1RAIckpUJd2OzXi",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mana Wastes Refugee",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Impossible Lands</p>\n<hr />\n<p>Exposure to the corrupting influence of the Mana Wastes' strange energies has warped your inner essence, resulting in unpredictable interactions with magic items and more than a little know-how about surviving under bizarre and adverse natural conditions.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Wilderness Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Trick Magic Item] skill feat.</p>",
            },
            items: {
                exsd0: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Trick Magic Item",
                    uuid: "Compendium.pf2e.feats-srd.Item.Trick Magic Item",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Wilderness Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "mantis-scion": {
        _id: "4aVFnYyRajog0mNl",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mantis Scion",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - High Seas</p>\n<hr />\n<p>At least one of your parents is a member of the notorious Red Mantis assassins, merciless killers for hire who rarely fail to claim their marks. Whether on purpose or by simple exposure, you were trained from a young age in the art of stalking and killing people.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Assassin Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Stealth.</p>",
            },
            items: {
                "2a5o3": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Assassin Lore",
            trainedSkills: { value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "market-runner": {
        _id: "n2JN5Kiu7tOCAHPr",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Market Runner",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Keeleno Lathenar, the proprietor of Otari Market, is a grim and bitter man. A werewolf named Jaul Mezmin mauled his wife, Ayla, to death 30 years ago. Keeleno has never forgotten nor forgiven this attack, and he believes against all odds that Jaul has evaded justice and is alive and well. Running errands for Keeleno around town, you've gotten to know him almost as well as you know Otari. Keeleno's suspicions have rubbed off</p>\n<p>on you a bit, so you keep a wary eye on other people—particularly around the full moon.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Otari Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                xtumr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Abomination Vaults Player's Guide",
            },
            rules: [],
            trainedLore: "Otari Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "martial-disciple": {
        _id: "lX5KDS2hU5LihZRs",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Martial Disciple",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You dedicated yourself to intense training and rigorous study to become a great warrior. The school you attended might have been a traditionalist monastery, an elite military academy, or the local branch of a prestigious mercenary organization.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free attribute boost.</p>\n<p>You're trained in your choice of the Acrobatics or Athletics skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] if you chose Acrobatics or @UUID[Compendium.pf2e.feats-srd.Item.Quick Jump] if you chose Athletics. You're also trained in the Warfare Lore skill.</p>",
            },
            items: {},
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillAcr", value: "acrobatics" },
                        { label: "PF2E.SkillAth", value: "athletics" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "martial-disciple",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["martial-disciple:acrobatics"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
                {
                    key: "GrantItem",
                    predicate: ["martial-disciple:athletics"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Jump",
                },
            ],
            trainedLore: "Warfare Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    mechanic: {
        _id: "cODrdTvko4Om26ik",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mechanic",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The intricate inner workings of machines are no stranger to you. Whether they are mundane devices or complex clockworks, you know what makes them tick and how to maintain them. An adventuring group might keep you around to repair their equipment, or you might travel around to offer your rare services to those in need-for a price, of course!</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Repair] skill feat.</p>",
            },
            items: {
                rp23j: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Repair",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Repair",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "mechanical-symbiosis": {
        _id: "wGB222d5UIBGYWsK",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mechanical Symbiosis",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether you purposefully took it on or had it thrust upon you, a bronze, clockwork object latched onto some part of your body. It may have sunk its needles into you or locked its spidery legs around your neck, torso, or upper arm. Some entity or spirit lives in this collection of gears and wires-whether or not other people hear its whispers is up to you. The entity may be an ancient, terrible being that has razed villages with its hosts, or it may be a brilliant, starry-eyed child who barely understands you're not part of its own body.</p>\n<p>You have studied and searched for information on these rare, crab-like machines, leaving you an expert in the binding of elemental spirits or mortal souls to mechanical objects. Though you have several theories on what the symbiotic entity might be, you have no definitive answers-this may be why you're adventuring in the first place, or perhaps you've made a deal with someone to get it removed. The entity might talk to you periodically, or it might only speak when it wants you to do something in particular or finds the two of you in danger. You and the GM should decide on the entity's motivations, or if the motivations should be a secret known only to the GM.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and an additional skill in which the clockwork entity is well-versed, determined by the GM. Any time you attempt a skill check for the entity's skill, the GM can offer you a +1 circumstance bonus to the check, as though the entity were Aiding you. If you accept but fail the check, the entity clenches up and you are @UUID[Compendium.pf2e.conditionitems.Item.Stunned]{Stunned 1} (@UUID[Compendium.pf2e.conditionitems.Item.Stunned]{Stunned 2} on a critical failure).</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["arc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "medicinal-clocksmith": {
        _id: "x3fFxtLogoy5hZfe",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Medicinal Clocksmith",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>While others might have looked to clockwork as a mechanical innovation, you see the potential in the technology to improve the health of patients. You might be an experienced field medic who reached for a scrapped construct to help a wounded soldier, or a vanguard surgeon who's found replacing organs with clockwork more effective than repairing them. Perhaps you've also worked to \"optimize\" organic bodies with fine machinery, with or without the permission of your patients.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Risky Surgery] skill feat.</p>",
            },
            items: {
                woff0: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Risky Surgery",
                    uuid: "Compendium.pf2e.feats-srd.Item.Risky Surgery",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering",
            trainedSkills: { custom: "", value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "megafauna-hunter": {
        _id: "q1OCPBAgYgvwy1Of",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Megafauna Hunter",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Life is only as meaningful as its risks, and the risks you're willing to take are big indeed. Like Wipa's half-sister Panuaku, Mammoth Lord Merthig, and Eiwa's great-grandnephew Pakano, you revel in the thrill of the hunt, especially when it involves mortal combat with megafauna, dinosaurs, and other oversized beasts. Though you're still early in your hunting career, your talent shows great promise, and you have a natural knack for tracking and taking down big game such as moose, saber-toothed tigers, and even wild mammoths.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Hunting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Titan Wrestler] skill feat.</p>",
            },
            items: {
                mtc96: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Titan Wrestler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Titan Wrestler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Quest for the Frozen Flame Player's Guide",
            },
            rules: [],
            trainedLore: "Hunting",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "menagerie-dung-sweeper": {
        _id: "YyzIzLxn2UCFubj4",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Menagerie Dung Sweeper",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>Whether you washed warrior beasts below the Irorium's arena floor or tended to the mutated animals of a Puddle sideshow, you are experienced with all manner of weird wildlife.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Animal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] skill feat.</p>",
            },
            items: {
                i5j8m: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Train Animal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Animal Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "merabite-prodigy": {
        _id: "a45LqkSRX07ljKdW",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Merabite Prodigy",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Golden Road</p>\n<hr />\n<p>Even in a city renowned for its alchemy, you were able to rise above the competition.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Alchemical Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat with alchemy</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    preselectChoices: { specialtyCrafting: "alchemy" },
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            ],
            trainedLore: "Alchemical Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    merchant: {
        _id: "KMv7ollLVaZ81XDV",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Merchant",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In a dusty shop, market stall, or merchant caravan, you bartered wares for coin and trade goods. The skills you picked up still apply in the adventuring life, in which a good deal on a suit of armor could prevent your death.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Diplomacy skill and the Mercantile Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Bargain Hunter] skill feat.</p>",
            },
            items: {
                "9xt57": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Bargain Hunter",
                    uuid: "Compendium.pf2e.feats-srd.Item.Bargain Hunter",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Mercantile Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    miner: {
        _id: "bCJ9p3P5uJDAtaUI",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Miner",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You earned a living wrenching precious minerals from the lightless depths of the earth. Adventuring might have seemed lucrative or glamorous compared to this backbreaking labor--and if you have to head back underground, this time you plan to do so armed with a real weapon instead of a miner's pick.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Survival skill and the Mining Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat with underground terrain.</p>",
            },
            items: {
                kvkjl: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Expertise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Mining Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    missionary: {
        _id: "GNidqGnSABx1rQUQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Missionary",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You received training from clergy in a faraway temple, who sent you out into the world to spread the faith. Although you are relatively new at this, you are always on the lookout for new places in need of your deity's teachings and guidance. When play begins, you are riding along in a caravan making your way through sparsely populated regions of Isger, spreading the news of your faith to those who will listen.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Scribing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                f4hap: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: The Fall of Plaguestone",
            },
            rules: [],
            trainedLore: "Scribing Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "molthuni-mercenary": {
        _id: "lqjmBmGHYRaSiglZ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Molthuni Mercenary",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>Whether you sought citizenship or simply needed a steady paycheck, you spent some of your time as a paid mercenary in the armed forces of Molthune, where you fought against Molthune's enemies such as Nirmathas or the Ironfang Legion. Alternatively, you might have worked at sea, protecting Molthune's military and trading ships against pirates on Lake Encarthan.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Mercenary Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Professional] skill feat.</p>",
            },
            items: {
                dupx7: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Professional",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Professional",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Mercenary Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "money-counter": {
        _id: "KEG5KFNrXKhTsj6J",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Money Counter",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The wealthiest of all the factions in Geb is the Tax Collectors Union, but it's the money counters in its banks and vaults that keep the numbers tallied. You used to work as one of these drudges who counted other people's money all day, until you decided to slip some unaccounted coins into your own pocket. You weren't caught, but you knew it would only be a matter of time before you felt the Union's wrath if you remained employed. You took the next opportunity to leave with both your official and unofficial final payments.</p>\n<p>The Tax Collectors Union is unaware of your petty theft, and you remain in good standing with them. Your party gains 1 Reputation Point with the Tax Collectors Union at the start of the campaign.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Society or Thievery skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Eye For Numbers] if you chose Society or @UUID[Compendium.pf2e.feats-srd.Item.Subtle Theft] if you chose Thievery. You're also trained in Accounting Lore.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Blood Lords Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillSoc", value: "soc" },
                        { label: "PF2E.SkillThi", value: "thi" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "money-counter",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["money-counter:soc"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Eye For Numbers",
                },
                {
                    key: "GrantItem",
                    predicate: ["money-counter:thi"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Subtle Theft",
                },
            ],
            trainedLore: "Accounting Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "musical-prodigy": {
        _id: "HNdGlDHkcczqNw2U",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Musical Prodigy",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Ever since you were young, you've been almost supernaturally skilled in a particular type of music. The people around you were sure you'd grow up to perform at royal courts or to become a world-famous composer, but you've chosen a life of adventure instead. You might have given up on those dreams to find your own meaning, or you might find that adventuring allows you to experience unfiltered emotions and exploits that you can translate into a wondrous symphony some day.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Performance and Music Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Virtuosic Performer] skill feat.</p>\n<hr />\n<p><em>Note: You will have to select the correct virtuosic performer feat for your style.</em></p>",
            },
            items: {
                F9KOw: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Virtuosic Performer",
                    uuid: "Compendium.pf2e.feats-srd.Item.Virtuosic Performer",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Music Lore",
            trainedSkills: { custom: "", value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "mystic-seer": {
        _id: "Y50ssWBBKSRVBpSa",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mystic Seer",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You delight crowds by reading minds, telling futures, and contacting spirits. Although much of your work is misdirection and showmanship, your cons have inadvertently awakened a genuine awareness of magic in your mind. This new sense is both thrilling and frightening, and you hope that you can hone it further in the Circus of Wayward Wonders.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Scam Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Arcane Sense] skill feat.</p>",
            },
            items: {
                kkm53: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Arcane Sense",
                    uuid: "Compendium.pf2e.feats-srd.Item.Arcane Sense",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [],
            trainedLore: "Scam Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "mystic-tutor": {
        _id: "Tujic4RHrQJmEYX4",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Mystic Tutor",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You spent years predicting, identifying, and harnessing the innate magical talents of those around you. A magic-rich world has taught you that you can never have too much training when everyone around you is capable of magic.</p>\n<p>Choose two ability boosts. One must be <strong>Intelligence</strong> or <strong>Wisdom</strong> and one is a free ability boost. Your innate magical trait is arcane or occult.</p>\n<p>You're trained in either Arcana or Occultism, depending on your innate magical trait, and the Academia Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat.</p>",
            },
            items: {
                jh8bn: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillArc", value: "arcana" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "necromancers-apprentice": {
        _id: "Yai061jIDzojHzsn",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Necromancer's Apprentice",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You apprenticed under a necromancer-a hard education in a field where a cadaver you were dissecting could suddenly animate and every magical artifact seemed deadly. Now on your own, you're grateful you learned to identify magical threats quickly and thoroughly.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Necromancy Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat.</p>",
            },
            items: {
                pi3v2: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            trainedLore: "Necromancy",
            trainedSkills: { custom: "", value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "newcomer-in-need": {
        _id: "QnL7hqUi9HPenrbC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Newcomer In Need",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're a Gokan native in a bad spot, and you're going to need a miracle to get you out of your current fix. Miracles are in short supply, but the title of Ruby Phoenix Champion might just do the trick. Maybe you need the prize money to pay for a relative's expensive operation or to free your family from debt to Golden League gangsters. Or maybe there's a particular prize in Hao Jin's vault that could literally save your life - an amulet you can use to flee to the farthest corners of the multiverse or even an artifact that could resurrect you if you die, just like the Ruby Phoenix. The tough circumstances of your upbringing in one of Goka's more downtrodden neighborhoods - such as industrial Oldtown, the slums of the Scales district, or even the crime-ridden undercity taught you lessons of self-reliance and how to quickly make friends in unlikely circumstances. You've scraped together an entry into the Ruby Phoenix Tournament's prequalifier with a team you can trust. Now all that's left is to pull off the impossible and win this thing once and for all.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in Society and the Goka Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                rj5hr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Fists of the Ruby Phoenix Player's Guide",
            },
            rules: [],
            trainedLore: "Goka",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "nexian-mystic": {
        _id: "Y35nOXZRryiyHjlk",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Nexian Mystic",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Impossible Lands</p>\n<hr />\n<p>Your initiations into the Nexian mysteries and the philosophies of the Arclords of Nex grant you a preternatural comprehension of the arcane underpinnings of existence.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and a Lore skill related to one plane of your choice (other than the Material Plane). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Arcane Sense] skill feat.</p>",
            },
            items: {
                k5wvl: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Arcane Sense",
                    uuid: "Compendium.pf2e.feats-srd.Item.Arcane Sense",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "<Planar> Lore (except Material Plane)",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "night-watch": {
        _id: "RxhdWJUoRTBEeHYZ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Night Watch",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>When everyone else slumbers, you're on guard. You might have been a watch member in a teeming metropolis, the guard in an unquiet cemetery, or a lonely shepherd. Many a night you've shouted out warnings into the dark, unsure of what lurked just beyond the range of your lantern's light. More than once you've seen things shambling in the dark that never should have been up and about.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and either Legal Lore or the Lore skill for your home settlement. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Coercion] skill feat.</p>",
            },
            items: {
                "64gag": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "nirmathi-guerrilla": {
        _id: "E2ij2Cg8oMC0W0NS",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Nirmathi Guerrilla",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>Woodcraft comes naturally to you, and you have learned how to use the forest to your tactical advantage against superior forces in skirmishes against the Molthuni army or the Ironfang Legion.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Forest Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Stalker] (underbrush) skill feat.</p>",
            },
            items: {
                nyz6l: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Stalker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Stalker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Forest Lore",
            trainedSkills: { custom: "", value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    noble: {
        _id: "Yu7Cl0Lk94LdPRi6",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Noble",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>To the common folk, the life of a noble seems one of idyllic luxury, but growing up as a noble or member of the aspiring gentry, you know the reality: a noble's lot is obligation and intrigue. Whether you seek to escape your duties by adventuring or to better your station, you have traded silks and pageantry for an adventurer's life.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Society skill and the Genealogy Lore or Heraldry Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] skill feat.</p>",
            },
            items: {
                "5gkru": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Courtly Graces",
                    uuid: "Compendium.pf2e.feats-srd.Item.Courtly Graces",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<Genealogy or Heraldry> Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "nocturnal-navigator": {
        _id: "StWWI7Wi0WRgRmxS",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Nocturnal Navigator",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have a great affinity for the night skies. You watch the stars, and you feel they speak secret messages specifically to you, which help you navigate your surroundings or perhaps determine your next course of action. Often, the stars have led you to places of great adventure, where you find new experiences and challenges. You might have come to make use of your talents as a guide for traveling groups, or maybe you preferred using your talents in pursuing a star-driven journey for personal enlightenment.</p>\n<p>Choose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.</p>\n<p>You're trained in Survival. Whenever you can clearly identify the stars, if you roll a success on a check to @UUID[Compendium.pf2e.actionspf2e.Item.Sense Direction] or otherwise orienteer, you get a critical success instead; if you roll a critical failure at such a check, you get a failure instead.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [
                {
                    key: "Note",
                    outcome: ["criticalFailure"],
                    predicate: [
                        "action:sense-direction",
                        "can-clearly-identify-the-stars",
                    ],
                    selector: "survival",
                    text: "Whenever you can clearly identify the stars, if you roll a critical failure on a check to Sense Direction or otherwise orienteer, you get a failure instead.",
                    title: "{item|name}",
                },
                {
                    domain: "survival",
                    key: "RollOption",
                    label: "PF2E.SkillVariant.CanClearlyIdentifyTheStars",
                    option: "can-clearly-identify-the-stars",
                    toggleable: true,
                },
                {
                    key: "Note",
                    outcome: ["success"],
                    predicate: [
                        "action:sense-direction",
                        "can-clearly-identify-the-stars",
                    ],
                    selector: "survival",
                    text: "Whenever you can clearly identify the stars, if you roll a success on a check to Sense Direction or otherwise orienteer, you get a critical success instead.",
                    title: "{item|name}",
                },
                {
                    adjustment: {
                        criticalFailure: "one-degree-better",
                        success: "one-degree-better",
                    },
                    key: "AdjustDegreeOfSuccess",
                    predicate: [
                        "action:sense-direction",
                        "can-clearly-identify-the-stars",
                    ],
                    selector: "survival",
                    type: "skill",
                },
            ],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    nomad: {
        _id: "8UXahQfkP9GZ1TNW",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Nomad",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Traveling far and wide, you picked up basic tactics for surviving on the road and in unknown lands, getting by with few supplies and even fewer comforts. As an adventurer, you travel still, often into even more dangerous places.</p>\n<p>Choose two attribute boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Survival skill and a Lore skill related to one terrain you traveled in (such as Desert Lore or Swamp Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with Survival.</p>",
            },
            items: {
                dbply: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance (Survival)",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<Terrain> Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "northland-forager": {
        _id: "xyHndp512sLU4UOL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Northland Forager",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The vast tundra and looming mountains of the Realm of the Mammoth Lords may seem featureless and barren to the untrained eye, but you know better. You see what others don't: nutritious roots buried beneath muddy reeds, succulent bird eggs cradled in craggy rocks, restorative berries nestled among thorny thickets, and more. In the south, farmers toil in dusty fields to eat the same vegetables every day, but your diet is varied and you're rarely hungry-the entire Realm is your garden.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Herbalism Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                "07n2z": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Quest for the Frozen Flame Player's Guide",
            },
            rules: [],
            trainedLore: "Herbalism",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "northridge-scholar": {
        _id: "2nt2nsQMBXgQRlOu",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Northridge Scholar",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The political faction of Northridge is focused on modern pragmatism and urban growth. While there are certainly those in this faction who regard those of Southshore as rubes, bumbling yokels, or stubborn traditionalists who would prefer Willowshore never grow, most of those following this local faction instead put their energy into developing Willowshore, envisioning a time when the town might grow into an important hub for trade. Your interests lie more along the concept of Willowshore as a place for learning—a school, library, or even small university could do so much for your town! Of course, as invigorating as it is to study and learn, you also understand that expanding Willowshore in such a way will require lots of hard work, and your childhood helping to lay foundations or raise buildings has given you a physique that eludes the typical scholar.</p>\n<p>Your home is likely somewhere along the northern banks of the Ceiba River to the east of downtown Willowshore.</p>\n<p>During the Reenactment Festival, you likely helped to run some of the festivities or spent time simply sitting back to people-watch. You volunteered to be an abductee during the Reenactment Festival because the experience of taking part in one of the town's longest-running traditions is an honor you've always wanted to experience.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Strength</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Academia Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Additional Lore] feat.</p>\n<p>@UUID[Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Northridge Scholar)]</p>\n<hr />\n<p>You can add one of the following two adjustments to any background to further modify your choice to match your vision for your PC.</p>\n<p><strong>Family:</strong> You and one (or more) other PCs are close family members (siblings, parent/child, married, etc.) If you take this adjustment, the other PC(s) who are your family must also take this adjustment. Choose one of the following to replace the skill feat you otherwise would've gained from your background. (You and your sibling need not share the same choice—a sibling who wants to keep their background's skill feat can pick \"Typical\" from the list.)</p>\n<ul>\n<li><strong>Bickering:</strong> You have a long-standing feud with your sibling(s). Whenever your sibling(s) critically fail a significant skill check or attack roll and you witness their failure, you gain a +1 status bonus to your saving throws until the end of your next turn as you secretly (or perhaps not so secretly) delight in their failure. @UUID[Compendium.pf2e.campaign-effects.Item.Effect: Bickering Family]</li>\n<li><strong>Close-Knit:</strong> You and your sibling(s) work well together, and you go all-out to help them when they're badly hurt. When you provide @UUID[Compendium.pf2e.actionspf2e.Item.Aid] or @UUID[Compendium.pf2e.actionspf2e.Item.Administer First Aid] to your sibling(s), the DC is 5 lower than normal.</li>\n<li><strong>Typical:</strong> You have a standard relationship with your sibling(s); don't change your background's skill feat.</li>\n</ul>\n<p><strong>Foundling:</strong> You aren't a native to Willowshore, but you did grow up in the town. You might have adoptive parents, or you could've grown up on the streets. Choose one of the following to replace the bonus feat you otherwise would've gained from your background.</p>\n<ul>\n<li><strong>Bitter:</strong> You appreciate the town of Willowshore but still resent the conditions that resulted in you being abandoned or left in the town. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</li>\n<li><strong>Mysterious:</strong> You keep secrets, and very few in Willowshore (if anyone) know your history before you settled in the town, in part because you've taken to learning about Willowshore by watching rather than engaging in conversation. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</li>\n<li><strong>Outgoing:</strong> You're grateful for the sense of belonging the townsfolk of Willowshore have extended to you and always do your best to repay that kindness. Once per week when you attempt a skill check to resolve a downtime activity that could benefit Willowshore (several of these activities are detailed in the adventures, and your GM can always make the call if another activity would qualify) and you fail that check, you instead succeed at the check, or if you critically fail at that check, you instead simply fail that check.</li>\n</ul>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Season of Ghosts Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Northridge Scholar)",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Family",
                            value: "family",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Foundling",
                            value: "foundling",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.NoAdjustment",
                            value: "none",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.Prompt",
                    rollOption: "background-variant",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bickering",
                            value: "bickering",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.CloseKnit",
                            value: "close-knit",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Typical",
                            value: "typical",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:family"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FamilyPrompt",
                    rollOption: "background-variant:family",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bitter",
                            value: "bitter",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Mysterious",
                            value: "mysterious",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Outgoing",
                            value: "outgoing",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:foundling"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FoundlingPrompt",
                    rollOption: "background-variant:foundling",
                },
                {
                    key: "GrantItem",
                    predicate: [
                        {
                            or: [
                                "background-variant:none",
                                "background-variant:family:typical",
                            ],
                        },
                    ],
                    uuid: "Compendium.pf2e.feats-srd.Item.Additional Lore",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:bitter"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:mysterious"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "occult-librarian": {
        _id: "jpgO5zofecGeyXd5",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Occult Librarian",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Hours spent reading numerous compendiums dedicated to various occult topics honed your knowledge of these more obscure magical arts. You might have taken to adventuring to finance your acquisition of rare tomes, to explore occult mysteries that can't be found in the pages of a book, or perhaps to put your skills to the test.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Academia Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Schooled In Secrets] skill feat.</p>",
            },
            items: {
                whppw: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Schooled In Secrets",
                    uuid: "Compendium.pf2e.feats-srd.Item.Schooled In Secrets",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "oenopion-ooze-tender": {
        _id: "iWWg16f3re1YChiD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Oenopion-Ooze Tender",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Impossible Lands</p>\n<hr />\n<p>Your apprenticeship in one of Oenopion's unorthodox arcane and alchemical academies instilled in you a deep reservoir of mostly reliable esoteric knowledge, not to mention a deep resentment born of countless hours spent mucking ooze pens and feeding helpless creatures to ravenous, belching jellies and gelatinous puddings.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Ooze Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                x4wlr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Ooze Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "once-bitten": {
        _id: "jjkY6r7NNWhxDqja",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Once Bitten",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>After an altercation with an undead creature, you feared you might be infected. Either through medical intervention, luck, or misunderstanding how undeath spreads, your fears abated. However, your brush with living death taught you the value of life. You do whatever you can to avoid the end you thought you'd been fated.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Undead Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Battle Medicine] skill feat.</p>",
            },
            items: {
                q6qj2: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Battle Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Battle Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [],
            trainedLore: "Undead",
            trainedSkills: { custom: "", value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "onyx-trader": {
        _id: "WueM94C9JXk10jPd",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Onyx Trader",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>Oprak doesn't share the secrets of the Onyx Vault with many, but you are one of the lucky few to be permitted into the heart of the nation. You have traveled the extradimensional paths of the Stone Roads and traded goods across a wide variety of lands. You've learned to step lively in foreign markets of all types.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Mercantile Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>",
            },
            items: {
                "5mn6l": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Mercantile Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    osirionologist: {
        _id: "AJ41zFEYwlOUghXp",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osirionologist",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Golden Road</p>\n<hr />\n<p>Whether you're a fascinated outsider or a local proud of your nation's storied past, you're a devoted student of Osirion's history. You might be a traveling professor, a member of a society like the Pathfinders or the Esoteric Order of the Palatine Eye, or even a simple tomb robber cashing in on the glories of the past.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Ancient Osirion Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
            },
            items: {
                mbaxt: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Oddity Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Ancient Osirion Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "osprey-barnraiser": {
        _id: "mh0hj27ZO5qDWat1",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osprey Barnraiser",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>A person cannot live on fish alone, which is why you work with Elder Bo'Mel on her farm. Elder Ordwi asked you to accompany her to Iron Harbor because she values your input in evaluating how the village might be making use of their natural resources.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Architecture Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Natural Medicine] skill feat.</p>",
            },
            items: {
                wg87x: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Natural Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Natural Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Rusthenge",
            },
            rules: [],
            trainedLore: "Architecture Lore",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "osprey-fisher": {
        _id: "v319qChG1uAQkGEe",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osprey Fisher",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Fishing is Osprey Cove's number one profession, and you've apprenticed under the best of them: Elder Anlorgog. You're also a keen study of boats and ships, so Elder Ordwi wants you along on her trip to Iron Harbor to help her evaluate the strength and purpose of the village's fleet—particularly if they're building ships meant for war.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Sailing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Repair] skill feat.</p>",
            },
            items: {
                NppYw: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Repair",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Repair",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Rusthenge",
            },
            rules: [],
            trainedLore: "Sailing Lore",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "osprey-scion": {
        _id: "PJxPNMEUTimop4Lq",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osprey Scion",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are the birth or adopted child of one of the five elders of Osprey Cove, and your parent or guardian volunteers you to accompany Elder Ordwi on her trip to Iron Harbor, hoping to get an unbiased account of events. If your parent or guardian is Ordwi, then she values your companionship and insight and wants you along on this important mission.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Xin-Edasseril Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Rusthenge",
            },
            rules: [],
            trainedLore: "Xin-Edasseril Lore",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "osprey-scout": {
        _id: "v8pS4UCYjt9OTtQL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osprey Scout",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Though Osprey Cove is a quiet village, you've scouted the wilderness inland, watching for any dangerous wildlife or creatures in order to keep it that way. Elder Ordwi wants you along on this trip because she knows your knowledge about the Kindred Coast will help ensure the safety of the group on the day-long trip.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Scouting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Tracker] skill feat.</p>",
            },
            items: {
                "1wpad": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Tracker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Tracker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Rusthenge",
            },
            rules: [],
            trainedLore: "Scouting Lore",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "osprey-scribe": {
        _id: "JjAh5pxgHrW3fwaH",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osprey Scribe",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Either as a punishment or because of political ambition, you work for Elder Vandous. On her trip to Iron Harbor, Elder Ordwi needs someone at her side who is a skilled observer and adept at keeping journals; she hopes to provide the other elders with accurate information about their sibling village upon her return.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Demon Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                PLTOh: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Rusthenge",
            },
            rules: [],
            trainedLore: "Demon Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "osprey-spellcaster": {
        _id: "AJuE41aToGs9tbcM",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osprey Spellcaster",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether by instinct or study, magic is one of your most notable talents. Your understanding of the traditions of ancient Thassilon has helped you learn languages associated with that nation. Elder Ordwi fears there may be some form of magical affliction spreading in Iron Harbor, and she needs your knowledge to help her determine the threat.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Arcana, Nature, Occultism, or Religion skill, and gain Thassilonian as a bonus language. You also gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat.</p>",
            },
            items: {
                tqScw: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Rusthenge",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.SkillArc", value: "arc" },
                        { label: "PF2E.SkillNat", value: "nat" },
                        { label: "PF2E.SkillOcc", value: "occ" },
                        { label: "PF2E.SkillRel", value: "rel" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "add",
                    path: "traits.languages.value",
                    value: "thassilonian",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "osprey-warrior": {
        _id: "f7ZTF8tnZUmTXwwF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Osprey Warrior",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You'd always been the most athletic child of your play group, leading the other children in games of skill and strategy. As an adult, there are few opportunities for you to employ these skills in the village. Osprey Cove is a quiet community, with hardly any dangers or foes to fight. You occasionally break up pub brawls, or perhaps start them out of boredom. Elder Ordwi asks you to come with her simply because of your endurance and athleticism—the Old Coast Road is poorly maintained, and the physical aid you'll bring on the trip will likely be invaluable.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Gorum Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat.</p>",
            },
            items: {
                FmB3C: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hefty Hauler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: Rusthenge",
            },
            rules: [],
            trainedLore: "Gorum Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "otherworldly-mission": {
        _id: "d5fKB0ZMJQkwDF5p",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Otherworldly Mission",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're called to serve a specific purpose-your deity told you so, and so it must be true. Maybe you grew up knowing all along, or maybe it came to you one day in a vision, clear as a bell and twice as loud. You have some task that only you can accomplish. You mission might be as dangerous as killing a deadly tyrant or as simple as opening a particular door on a particular day. You should work with your GM on how to handle the truth of your character's backstory or leave it to the GM to decide in secret. Is this call to action a message from the character's own mind, are they being manipulated by some manner of supernatural entity, or are they actually getting marching orders from one of the deities of the setting?</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Religion. Once per adventure, you can ask the voice you believe to be a deity for orders and get some kind of instruction-you never get any kind of explanation, simply a command to go somewhere or do something. Following those commands isn't always safe, but it's usually interesting.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "out-of-towner": {
        _id: "UgityMZaujmYUpil",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Out-Of-Towner",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've never been to Breachill, nor do you have roots in the town, but as chance has it you find yourself visiting. You might be here traveling with a friend, visiting an old acquaintance, or merely here to see a new part of the world. Before coming to town, though, you spent many years living with an ancestry other than your own, and your diverse childhood has left you with an open mind and a curious nature.</p>\n<p>You're excited to meet new people and cultures, and answering the Call for Heroes seems to be an interesting way to do so.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and a Lore skill thematically associated with the members of the ancestry you grew up with: Dwarf, Elf, Gnome, Goblin, or Halfling. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                "6ja48": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "<Ancestry> Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    outrider: {
        _id: "dAvFZ5QmbAHgXcNp",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Outrider",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In your youth, you galloped on horseback over vast prairies, serving as a vanguard for your settlement, an army, or another group. Seeing so many different lands built a thirst in you to adventure and explore the world instead of just racing past it.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Plains Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Express Rider] skill feat.</p>",
            },
            items: {
                vfq3c: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Express Rider",
                    uuid: "Compendium.pf2e.feats-srd.Item.Express Rider",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Plains Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "outskirt-dweller": {
        _id: "GyFfqCZZVtazmwPD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Outskirt Dweller",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>While Willowshore is a lovely small town, even a population of 200 is a bit much for you. Whether you grew up in the town's outskirts, or you grew frustrated and overwhelmed with town life and decided to move to the fringes, you're only really at home when you're surrounded by nature. You don't look down on those who live in town, and you might be among the hunters, trappers, fishers, or herbalists who provide important support to those who lack such forestry skills. Your home is on the outskirts of Willowshore and might not even be represented by an actual building on the map. With the GM's permission, you might even dwell in a small building further out in the Willowshore hinterlands, but no further than a couple of miles from town.</p>\n<p>During the Reenactment Festival, you likely showed up late and weren't intending to stay for long, but your friends and allies (the other PCs) convinced you to stick around.</p>\n<p>You were chosen to be an abductee during the Reenactment Festival at the last minute when someone else had to back out (perhaps as a result of overindulging during the feast), and your friends (the other PCs) convinced you to join them on what would be a fun, shared experience. And since it involves sleeping out under the stars in the woods, well, that's a pretty lovely way to end an evening!</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Hunting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise]{Terrain Expertise (forest)} skill feat.</p>\n<p>@UUID[Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Outskirt Dweller)]</p>\n<hr />\n<p>You can add one of the following two adjustments to any background to further modify your choice to match your vision for your PC.</p>\n<p><strong>Family:</strong> You and one (or more) other PCs are close family members (siblings, parent/child, married, etc.) If you take this adjustment, the other PC(s) who are your family must also take this adjustment. Choose one of the following to replace the skill feat you otherwise would've gained from your background. (You and your sibling need not share the same choice—a sibling who wants to keep their background's skill feat can pick \"Typical\" from the list.)</p>\n<ul>\n<li><strong>Bickering:</strong> You have a long-standing feud with your sibling(s). Whenever your sibling(s) critically fail a significant skill check or attack roll and you witness their failure, you gain a +1 status bonus to your saving throws until the end of your next turn as you secretly (or perhaps not so secretly) delight in their failure. @UUID[Compendium.pf2e.campaign-effects.Item.Effect: Bickering Family]</li>\n<li><strong>Close-Knit:</strong> You and your sibling(s) work well together, and you go all-out to help them when they're badly hurt. When you provide @UUID[Compendium.pf2e.actionspf2e.Item.Aid] or @UUID[Compendium.pf2e.actionspf2e.Item.Administer First Aid] to your sibling(s), the DC is 5 lower than normal.</li>\n<li><strong>Typical:</strong> You have a standard relationship with your sibling(s); don't change your background's skill feat.</li>\n</ul>\n<p><strong>Foundling:</strong> You aren't a native to Willowshore, but you did grow up in the town. You might have adoptive parents, or you could've grown up on the streets. Choose one of the following to replace the bonus feat you otherwise would've gained from your background.</p>\n<ul>\n<li><strong>Bitter:</strong> You appreciate the town of Willowshore but still resent the conditions that resulted in you being abandoned or left in the town. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</li>\n<li><strong>Mysterious:</strong> You keep secrets, and very few in Willowshore (if anyone) know your history before you settled in the town, in part because you've taken to learning about Willowshore by watching rather than engaging in conversation. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</li>\n<li><strong>Outgoing:</strong> You're grateful for the sense of belonging the townsfolk of Willowshore have extended to you and always do your best to repay that kindness. Once per week when you attempt a skill check to resolve a downtime activity that could benefit Willowshore (several of these activities are detailed in the adventures, and your GM can always make the call if another activity would qualify) and you fail that check, you instead succeed at the check, or if you critically fail at that check, you instead simply fail that check.</li>\n</ul>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Season of Ghosts Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Outskirt Dweller)",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Family",
                            value: "family",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Foundling",
                            value: "foundling",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.NoAdjustment",
                            value: "none",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.Prompt",
                    rollOption: "background-variant",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bickering",
                            value: "bickering",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.CloseKnit",
                            value: "close-knit",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Typical",
                            value: "typical",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:family"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FamilyPrompt",
                    rollOption: "background-variant:family",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bitter",
                            value: "bitter",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Mysterious",
                            value: "mysterious",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Outgoing",
                            value: "outgoing",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:foundling"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FoundlingPrompt",
                    rollOption: "background-variant:foundling",
                },
                {
                    key: "GrantItem",
                    predicate: [
                        {
                            or: [
                                "background-variant:none",
                                "background-variant:family:typical",
                            ],
                        },
                    ],
                    preselectChoices: { terrain: "forest" },
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:bitter"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:mysterious"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            ],
            trainedLore: "Hunting Lore",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "ozem-experience": {
        _id: "CjNA8ippwoAvpxeI",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ozem Experience",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You or someone close to you worked with the Knights of Ozem before Lastwall fell. In addition to knowledge of the organization's tenets and goals, you have germane understanding of the order's history. You believe there are valuable lessons in the Knights of Ozem's exploits.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] skill feat.</p>",
            },
            items: {
                "7erl2": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Courtly Graces",
                    uuid: "Compendium.pf2e.feats-srd.Item.Courtly Graces",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [],
            trainedLore: "Warfare",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "pathfinder-hopeful": {
        _id: "j9v38iHA0sVy59SR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Pathfinder Hopeful",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>You've long wanted to join the adventurous Pathfinder Society. You have taken up the dangerous life of an adventurer in hopes of earning a spot among the Pathfinders.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Pathfinder Society Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Additional Lore] skill feat.</p>",
            },
            items: {
                jzu36: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Additional Lore",
                    uuid: "Compendium.pf2e.feats-srd.Item.Additional Lore",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Pathfinder Society Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "pathfinder-recruiter": {
        _id: "NXYce9NAHls2fcIf",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Pathfinder Recruiter",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The Pathfinder Society's always on the lookout for talent, but that talent rarely just stumbles into the Grand Lodge. Whether you're professionally trained to encourage new recruits or the Society's own scouts identified your potential and raised you from childhood, you're committed to expanding the Society's roster.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and a Lore skill related to one city you've visited often. You gain the Group Impression skill feat.</p>",
            },
            items: {
                "2dltm": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Pathfinder Society Guide",
            },
            rules: [],
            trainedLore: "<City> Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "perfection-seeker": {
        _id: "P65AGDPkhD2B4JtG",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Perfection Seeker",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Impossible Lands</p>\n<hr />\n<p>You aspire to perfect your body and mind in the tradition of Jalmeray's Houses of Perfection, honing your acrobatic skills and mental faculties in preparation for a lifetime pushing the edge of what most consider possible.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Acrobatics skill as well as the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] skill feat.</p>",
            },
            items: {
                k542i: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Cat Fall",
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Warfare Lore",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    pilgrim: {
        _id: "r9fzNQEz33HyKTxm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Pilgrim",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In your youth, you made several pilgrimages to important shrines and holy sites. You might have been a mendicant friar, a seller of holy relics (real or fraudulent), or just a simple farmer following the dictates of your faith. Whatever the aims of your wanderings now, your faith still protects you on the road.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Lore skill for your patron deity. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pilgrim's Token] skill feat.</p>",
            },
            items: {
                "1cme1": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pilgrim's Token",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pilgrim's Token",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "<Deity> Lore",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    pillar: {
        _id: "8hsMIh3lVGfZwjG5",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Pillar",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Not every Knight of Lastwall contributes to the crusade through combat. Pillars provide essential upkeep and service at camps, enjoying the same rank of knight as the crusaders and strategists for which the knights are known. You spent time as an assistant among the pillars, learning how noncombatants provide for the physical and mental wellbeing of an army.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in one of your choice of the Medicine, Society, or Survival skills, as well as the Labor Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Additional Lore] skill feat.</p>",
            },
            items: {
                oywf4: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Additional Lore",
                    uuid: "Compendium.pf2e.feats-srd.Item.Additional Lore",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.SkillMed", value: "med" },
                        { label: "PF2E.SkillSoc", value: "soc" },
                        { label: "PF2E.SkillSur", value: "sur" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Labor",
            trainedSkills: { value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "planar-migrant": {
        _id: "2sRZ6OsvHIpwGCAg",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Planar Migrant",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your birthplace was on one of the elemental planes, but you traveled to the Universe for some reason. Maybe you left on good terms, or maybe you were driven out and hope to one day return. Maybe you were even exiled, and any mention of it brings pain and resentment. In any case, nowhere has quite felt like home since, and you've roamed the land, carrying your life's possessions on your back wherever you go. You adventure possibly in search of a place to belong or a way to return to your plane of origin and settle unfinished business.</p>\n<p>Choose two attribute boosts. One must be <strong>Dexterity</strong> or <strong>Constitution</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Athletics skill and one of the following lore skills: Plane of Air Lore, Plane of Earth Lore, Plane of Fire Lore, Plane of Metal Lore, Plane of Water Lore, or Plane of Wood Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] and @UUID[Compendium.pf2e.feats-srd.Item.Prescient Planner] skill feats.</p>",
            },
            items: {
                De3Mi: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hefty Hauler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
                tSJ1W: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 3,
                    name: "Prescient Planner",
                    uuid: "Compendium.pf2e.feats-srd.Item.Prescient Planner",
                },
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "plant-whisperer": {
        _id: "76j9ds5URXv1dqnm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Plant Whisperer",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've always had a green thumb, allowing you to care for plants that others found too difficult to grow and tend with a skill that borders on the magical. As you travel, you encounter all sorts of new plants and plant creatures, allowing you to expand your horizons and deepen your understanding of flora.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Nature and Plant Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Natural Medicine] skill feat.</p>",
            },
            items: {
                b837f: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Natural Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Natural Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Plant Lore",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "political-scion": {
        _id: "JauSkDtMV6dhDZS8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Political Scion",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Like your parents and your parents before them, you initially followed the long path toward politics from an early age. Your close association with Absalom's upper echelons put you in touch with the city's various military or special operations units-the First Guard, the Wave Riders, the Varlokkur-though you avoided any actual duty with these groups. Thanks to your strict upbringing and the connections of your family, you soon became a lauded and highly respected member of Absalom's political elite. But you couldn't stifle a certain feeling that you were destined for more than simply filling the pointed shoes of your forebears. Despite your easily earned accolades and a relatively cushy life as a young lawyer or councilmember, you sought to do more with your diplomatic training and not live out the exact same life as your ancestors.</p>\n<p>Your decision to transfer to the Edgewatch has rubbed your traditionalist family the wrong way, and they've cut off the financial aid they've provided you your whole life. But you don't care-you know you're doing the right thing by taking on the rough jobs of a low-ranking guard, and you're ready to shine based on your own merits, not those of your lofty kin.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and Legal Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to Interact with members of Absalom's political establishment. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                km6n9: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with Absalom's political establishment (Political Scion)",
                    predicate: ["target:absalom-politician"],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "Legal Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "post-guard-of-all-trades": {
        _id: "DVtZab19D1vD3a0n",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Post Guard of All Trades",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Not all cops are passionate about their jobs. For some, the pursuit of justice is just another way to pay the bills. Honestly, it was probably the Post Guard's generous time-off policy that drew you to their service, and during your yearly sabbaticals you've dabbled in hobbies as diverse as fishing, baking, or even stand-up comedy. Even while on duty, you're probably idly fiddling with a lucky coin or practicing magic tricks with a deck of cards. You probably irritate your fellow guards a bit with your non sequiturs, casual attitude, and tendency to daydream, but results don't lie, and more often than not you prove your worth when the chips are down.</p>\n<p>For all the excitement of guarding Absalom's Postern Gate, the Post Guard wasn't really the right fit for someone as distractible as yourself, so your boss put in a \"promotion\" for you to transfer to the newly formed Edgewatch. You're all for the reassignment, since it will put you smack in the middle of the most entertaining and diverse gathering of the century, the Radiant Festival.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill, a Lore skill of your choice, and you gain a <strong>bonus language</strong>. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to @UUID[Compendium.pf2e.actionspf2e.Item.Interact] with Post Guards. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                "8298f": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label: "Interacting with Post Guards (Post Guard of All Trades)",
                    predicate: ["target:post-guard"],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "<Any> Lore",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "press-ganged-g-g": {
        _id: "M8EfhY6Knb2iQm6S",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Press-Ganged (G&G)",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Was it five shots or six? It doesn't really matter in the end, because after those nice folks bought all your drinks, you woke up on the lowest rung of the ladder. Whether a crewmate on a ship, a conscript in an army, or something worse, you've nowhere to go but up. This background generally requires buy-in with the entire group to tell a story allowing you to play a character starting their adventuring due to circumstances outside their own control. However, you can also play a character who was once press-ganged and has since escaped that life. If you do, press-ganged doesn't have the uncommon trait, and it has the same mechanical effects either way.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Labor Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Armor Assist] skill feat.</p>",
            },
            items: {
                "7kapn": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Armor Assist",
                    uuid: "Compendium.pf2e.feats-srd.Item.Armor Assist",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Labor Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "press-ganged-lowg": {
        _id: "4yN5miHoMvKwZIsa",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Press-Ganged (LOWG)",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - High Seas</p>\n<hr />\n<p>You were forced into service as a sailor against your will. Perhaps you were punished for a crime, were drafted into military service, are repaying a debt, or simply were abducted. Though you were initially trained as a simple deckhand, you may have subsequently studied a trade under one of the vessel's specialists.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Sailing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Professional] skill feat.</p>",
            },
            items: {
                u3r44: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Professional",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Professional",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Sailing Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    printer: {
        _id: "qJNmSgzq0ae29qCC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Printer",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Keeping your finger on the pulse of the city, you write a small news broadsheet to sell on street corners. You rent the use of a printing press to achieve this goal, so you're familiar with such machines. However, people and their stories are your main focus, and you adventure to chase the latest scoop.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Scribing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>",
            },
            items: {
                b3j75: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Scribing",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    prisoner: {
        _id: "apXTV7jJx6yJpj8D",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Prisoner",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have been imprisoned or punished for crimes (whether you were guilty or not). Now that your sentence has ended or you've escaped, you take full advantage of the newfound freedom of your adventuring life.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Stealth skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Smuggler] skill feat.</p>",
            },
            items: {
                "37hdp": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Smuggler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Smuggler",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "propaganda-promoter": {
        _id: "9uqDWl8V2AgGMRXi",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Propaganda Promoter",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The ghost king Geb has returned to a more active role in leading his nation after thousands of years, and it's shocking that some people in the nation haven't heard that. You helped the Celebrants plan parades, exciting displays like circuses, news missives, and more to help push messages of loyalty to the nation. Even though most Celebrants are followers of Urgathoa, deity of gluttony and undeath, you might follow a different faith (or no faith at all); more important is helping Celebrants spread their message. You started to see that propaganda was often timed to help the Celebrants, in addition to the nation as a whole, and you saw just how powerful the right message at the right time can be.</p>\n<p>You are still well-regarded by the Celebrants. Your party gains 1 Reputation Point with the Celebrants at the start of the campaign.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Acrobatics or Performance skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Steady Balance] if you chose Acrobatics or @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] if you chose Performance. You're also trained in Urgathoa Lore.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Blood Lords Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillAcr", value: "acr" },
                        { label: "PF2E.SkillPrf", value: "prf" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "propaganda-promoter",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["propaganda-promoter:acr"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Steady Balance",
                },
                {
                    key: "GrantItem",
                    predicate: ["propaganda-promoter:prf"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
            ],
            trainedLore: "Urhathoa",
            trainedSkills: { value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "purveyor-of-the-bizarre": {
        _id: "IfpYRxN8qyV4ym0o",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Purveyor of the Bizarre",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Golden Road</p>\n<hr />\n<p>Whether in Katapesh or one of the bustling markets along the Path of Salt, you've spent enough time buying and selling ancient or unusual items to give you an instinctive ability to quickly sort valuable trinkets from worthless baubles.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Mercantile Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat.</p>",
            },
            items: {
                hwrfy: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Mercantile Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "pyre-tender": {
        _id: "a9YjyQRNEOyespFf",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Pyre Tender",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're experienced at building funeral pyres. You might have lit flaming biers in the Land of the Linnorm Kings, tended the cremation pits of Cheliax or Vudra, or been a backwoods charcoal burner, using the right mixture of alchemy to act as an accelerant. However you worship, you know nothing sends off the departed like flame.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Funeral Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Alchemical Crafting] skill feat.</p>",
            },
            items: {
                y1mm1: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Alchemical Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            trainedLore: "Funeral",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "quick-refugee": {
        _id: "22X8QMu7Z1mJzNWC",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Quick Refugee",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The living residents of Geb are known as the quick, and it is not, overall, a very pleasant thing to be. While some of the quick choose to make the best of their lot, or even thrive in Geb's undead-dominated society, you decided that whatever terrors the outside world holds, they pale in comparison to those that make up the Gebbite upper class. And considering that escape means braving the Mana Wastes, you must have been very, very certain indeed.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in Stealth and Undead Lore. When you Hide or @UUID[Compendium.pf2e.actionspf2e.Item.Sneak] successfully, you are also @UUID[Compendium.pf2e.conditionitems.Item.Hidden] or @UUID[Compendium.pf2e.conditionitems.Item.Concealed] from undeads' lifesense and other special precise senses the undead possess.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Wake the Dead #2",
            },
            rules: [],
            trainedLore: "Undead Lore",
            trainedSkills: { custom: "", value: ["ste"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    quick: {
        _id: "i6y4DiKvqitdE0PW",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Quick",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Impossible Lands</p>\n<hr />\n<p>Staying alive among the scheming, ravenous undead of Geb required a deep knowledge of their motivations, capabilities, and weaknesses. More often than not, it also required the ability to weave alibis and life-preserving half-truths capable of swaying a stilled heart.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Undead Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] skill feat.</p>",
            },
            items: {
                "3y6lg": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Charming Liar",
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Undead Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "raised-by-belief": {
        _id: "RC4l6WsxPn89a1f8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Raised by Belief",
        system: {
            boosts: {
                "0": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether in a monastery, a religious household, or just as part of your everyday life, your upbringing was steeped in the traditions of a particular deity. You might remain committed or you may have turned from your childhood creed, but your skills are still founded in your devotion.</p>\n<p>Choose two attribute boosts. One must be to an attribute specified in your deity's <strong>Divine Attribute</strong>, and the other is a free attribute boost.</p>\n<p>You're trained in the deity's listed Divine Skill and gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] feat with that skill. You gain a Lore skill related to your deity (Abadar Lore, for example).</p>",
            },
            items: {
                ihbaq: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Assurance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "ratted-out-gun-runner": {
        _id: "bxWID85noazU72O3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ratted-Out Gun Runner",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Sure, you've got a checkered past. Who doesn't? It's hard to make a living in the City of Smog, so you did what you could to put silvers in your pocket and food on the table. You made a good deal of money selling firearms from the Gunworks to people who perhaps shouldn't have had them. You even worked with wasteland marauders a few times, sticking up Ustradi barges plying the river between the Gunworks and Alkenstar. Of course, you never hurt any innocents or did anything truly heinous; your criminal career was always just a matter of money.</p>\n<p>One day, a corrupt financier named Ambrost Mugland-a true crook if there ever was one-approached you, demanding a cut of your business. When you refused, he put in a word with the shieldmarshals that you'd be a certain somewhere at a certain time with a certain large quantity of illegally obtained firearms. Even though you escaped arrest, your identity was compromised, and your old accomplices have all turned their backs on you. Your gun-running days are clearly over. Now, you're just running.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Firearm Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Smuggler] skill feat.</p>",
            },
            items: {
                e5s60: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Smuggler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Smuggler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Outlaws of Alkenstar Player's Guide",
            },
            rules: [],
            trainedLore: "Firearm Lore",
            trainedSkills: { custom: "", value: ["ste"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "razmiran-faithful": {
        _id: "9uTdwJaj27F18ZDX",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Razmiran Faithful",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Broken Lands</p>\n<hr />\n<p>You serve a living god who rules upon the face of Golarion, and this gives your actions a divine mandate not to be trifled with.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Razmir Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                s85v4: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Razmir Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "reborn-soul": {
        _id: "HrWEyXTgIj16Z1RR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Reborn Soul",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were given a second opportunity at life by mysterious forces in the Lands of Second Souls. You remember your life before your death and now live with an extra lifetime of knowledge.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You become trained in two Lore skills, which you and your GM choose from Lore skills associated with your past life. At 3rd level, 7th level, and 15th level, you receive skill increases, which you can apply only to these Lore skills. In certain situations analogous to your past life, fragments of memories resurface, potentially helping or distracting you. The GM can offer you a +1 circumstance bonus on skill checks with either of these Lore skills or on other skill checks that echo your past life. If you accept but fail the check, you're @UUID[Compendium.pf2e.conditionitems.Item.Stupefied]{Stupefied 1} for 1 minute by the mental distraction of your past-life memories, or @UUID[Compendium.pf2e.conditionitems.Item.Stupefied]{Stupefied 2} for 1 minute on a critical failure.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Dark Archive",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    reclaimed: {
        _id: "HMIfr9N4rco1dzBO",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Reclaimed",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>A unit of Crimson Reclaimers saved you from certain death in the Gravelands. You spent time with one or more Crimson Reclaimers as they escorted you to safety, and you've learned the ways of this faction of the Knights of Lastwall. You consider yourself forever in their debt and defend their reputation unquestioningly against any accusations of duplicity.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Crimson Reclaimers Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                "2e9z7": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [],
            trainedLore: "Crimson Reclaimers",
            trainedSkills: { custom: "", value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "reclaimer-investigator": {
        _id: "pChM2ApTVEQ8SohP",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Reclaimer Investigator",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You believe the mysterious patron of the Crimson Reclaimers has an ulterior motive that bedevils the Knights of Lastwall. Whatever the organization gains from the pact, some mysterious force with its own agenda and a need for anonymity benefits as well. You've made it your mission to determine what that agenda is before the patron decides it has manipulated from the shadows long enough.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Crimson Reclaimers Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
            },
            items: {
                a1vfy: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Oddity Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [],
            trainedLore: "Crimson Reclaimers",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "refugee-apg": {
        _id: "i28Z9JXhEvoc7BX5",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Refugee (APG)",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You come from a land very distant from the one you now find yourself in, driven by war, plague, or simply in the pursuit of opportunity. Regardless of your origin or the reason you left your home, you find yourself an outsider in this new land. Adventuring is a way to support yourself while offering hope to those who need it most.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and a Lore skill related to the settlement you came from. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>",
            },
            items: {
                "17wwh": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "<City> Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "refugee-fall-of-plaguestone": {
        _id: "HDquvQywAZimmcFF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Refugee (Fall of Plaguestone)",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The fighting around the Lake Encarthan region has forced many of the people residing there to flee from the violence. Although your home is gone, you have managed to survive and are making your way south in search of a better life. When play begins, you are riding along in a caravan taking you to what might be either a new home in Andoran or simply another waypoint in your journey.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Hunting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                r7cai: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: The Fall of Plaguestone",
            },
            rules: [],
            trainedLore: "Hunting Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "relentless-dedication": {
        _id: "7OAX5QMd15svZJzX",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Relentless Dedication",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Recruiters invite many candidates like you to train to be Knights of Lastwall, but only a select few make the cut. Whereas others lose heart, your perseverance paid off. Your commitment to the cause is so clear, it overcame whatever disqualified your previous attempts to join the new Shining Crusade.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Warfare Lore skill, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Canny Acumen] feat.</p>",
            },
            items: {
                su0e8: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Canny Acumen",
                    uuid: "Compendium.pf2e.feats-srd.Item.Canny Acumen",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [],
            trainedLore: "Warfare",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "reputation-seeker": {
        _id: "TPoP1mKpqUOpRQ5Y",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Reputation Seeker",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're likely from Breachill, but unlike the Local Scion, your family has no notable legacy in the area. You might not even have much of a family at all to call your own, and could be an orphan. You've seen so many people make names for themselves that you set out on your own and spent some time abroad in the jungles or deserts of Garund or in the upper reaches of the Darklands-regions that proved too dangerous to remain in for long on your own. You returned home with more caution and knowledge of the world beyond Breachill's borders, but still determined to win fame.</p>\n<p>You've decided that joining an adventuring group would be the best way to secure aid in your quest to build your own reputation, and are attending the Call for Heroes to find such allies.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Darklands, Desert, or Jungle Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat (underground if you have Darklands Lore, desert if you have Desert Lore, or forest if you have Jungle Lore).</p>",
            },
            items: {
                u6r5t: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Expertise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "<Terrain> Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    returned: {
        _id: "rzyRtasSTfHS3e0y",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Returned",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You died and miraculously returned with knowledge of the realms beyond death and a stronger link to life. Some dead and undead souls might feel a strange, instinctual kinship with you.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] feat and the @UUID[Compendium.pf2e.feats-srd.Item.Additional Lore] feat for Boneyard Lore.</p>",
            },
            items: {
                bpwjq: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Diehard",
                    uuid: "Compendium.pf2e.feats-srd.Item.Diehard",
                },
                k29rl: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Additional Lore",
                    uuid: "Compendium.pf2e.feats-srd.Item.Additional Lore",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "**Boneyard Lore (with Additional Lore perks)",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "returning-descendant": {
        _id: "iaM6TjvijLCgiHeD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Returning Descendant",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You aren't from Breachill yourself-you might not even be from Isger or Avistan at all. You've lived a hard life, in any event. You have often had to make tough decisions, and have developed a knack for understanding how things work (and the best way to take them apart) that has helped you support yourself. Recently you discovered that an ancestor was from the town of Breachill and had a modest career as an adventurer. You can't help but wonder if you would have had an easier life if you'd grown up there instead, and have decided to seek out this small town to learn more about it.</p>\n<p>You've decided to respond to the Call for Heroes to follow in your ancestor's footsteps, either to honor their memory or accomplish the great deeds they did not.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Thievery skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pickpocket] skill feat.</p>",
            },
            items: {
                g5mpz: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pickpocket",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pickpocket",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "Engineering Lore",
            trainedSkills: { value: ["thi"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    revenant: {
        _id: "W6OIPZhjcV45gfoX",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Revenant",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You died. No real doubt about that. Bullet to the brain or knife to the throat, you were dead as dead can be. Then you got back up again. Maybe you had some unfinished business, or maybe you were just so tough and so mean that Hell itself spat you out. Either way, you came back for a reason.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Religion and Boneyard Lore. You're still alive, not undead, but you have the negative healing ability, which means you're harmed by positive damage and healed by negative effects as if you were undead.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "ActiveEffectLike",
                    mode: "override",
                    path: "system.attributes.hp.negativeHealing",
                    value: true,
                },
            ],
            trainedLore: "Boneyard",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    rigger: {
        _id: "7IrOApgShgnmp1A5",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Rigger",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've worked as a roustabout to erect tents and set up rigging for acrobatic performances; you've sometimes even aided aerialists and acrobats in their death-defying training. Even though your work is often done before the crowds arrive, you know your skills contribute to the success and safety of the circus. Mistress Dusklight treats her roustabouts as little more than slaves, and you've resolved to join a company where your expertise is appreciated.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Circus Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat.</p>",
            },
            items: {
                zp5gh: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Combat Climber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Extinction Curse Player's Guide",
            },
            rules: [],
            trainedLore: "Circus Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "rivethun-adherent": {
        _id: "6c0rsuiiAaVqGTu7",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Rivethun Adherent",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Shining Kingdoms</p>\n<hr />\n<p>You have spent time learning the practices and traditions of the ancient Rivethun dwarven shamans and can recognize all sorts of magic. You may have chosen your own road since then, or you may remain an adherent of the philosophy.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Spirit Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat.</p>",
            },
            items: {
                s5irv: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Spirit Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "root-worker": {
        _id: "ns9BOvCyjdapYhI0",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Root Worker",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Some ailments can't be cured by herbs alone. You learned ritual remedies as well, calling on nature spirits to soothe aches and ward off the evil eye. Taking up with adventurers has given you company on the road, as well as protection from those who would brand you a fake-or worse.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Herbalism Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Root Magic] skill feat.</p>",
            },
            items: {
                rzhqp: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Root Magic",
                    uuid: "Compendium.pf2e.feats-srd.Item.Root Magic",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Herbalism Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "rostland-partisan": {
        _id: "8q4PhvpmIxZD7rsV",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Rostland Partisan",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Broken Lands</p>\n<hr />\n<p>You grew up among the southern houses of Brevoy in old Rostland. You're accustomed to arguing from a position of underappreciated worth.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] skill feat.</p>",
            },
            items: {
                "9n14k": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Impression",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Politics Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    rostlander: {
        _id: "wKiFedYlHCsM5wN4",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Rostlander",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were raised in the south of Brevoy, a land of dense forests and rolling plains, of crystalline rivers and endless sapphire skies. You come from hardy stock and were raised with simple sensibilities-that hard work earns well-deserved gains, the importance of charity and compassion, and the value of personal and familial honor. Yours is the country of the Aldori swordlords and the heroes who refused to bend before the armies of a violent conqueror. You care little for matters of politics and nobles or of deception and schemes. You are thoroughly Brevic, and the call for champions willing to expand your land's influence into the Stolen Lands has inflamed your sense of patriotism and honor, and so you have joined an expedition to journey southward and build a kingdom.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Farming Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat.</p>",
            },
            items: {
                aHtyU: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hefty Hauler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hefty Hauler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Kingmaker Player's Guide",
            },
            rules: [],
            trainedLore: "Farming Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    royalty: {
        _id: "uC6D2nmDTATxXrV6",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Royalty",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are a prominent member of a royal family. You have taken up the life of an adventurer-perhaps you're a deposed queen hoping to regain her throne, a prince seeking a more exciting life, or a princess on a secret mission.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in Society. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] skill feat and can influence commoners in your family's territory, as well as nobility anywhere. If you later gain the @UUID[Compendium.pf2e.feats-srd.Item.Connections] skill feat, you automatically have common and noble connections within any community in your royal family's territory and have noble connections in large communities outside your territory.</p>",
            },
            items: {
                zslzu: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Courtly Graces",
                    uuid: "Compendium.pf2e.feats-srd.Item.Courtly Graces",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "ruby-phoenix-enthusiast": {
        _id: "7K6ZSWOoihZKSdyd",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ruby Phoenix Enthusiast",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Named for the legendary sorcerer Hao Jin, the Ruby Phoenix Tournament occurs once every 10 years in Goka and attracts extraordinary talent from across the world. You might have begun training for the tournament but never participated, or perhaps you entered the tournament only to be defeated by (and inspired to join) the Pathfinder Society. Either way, your dedicated training prepares you for the rigors of the adventuring lifestyle.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Gladiatorial Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat. In addition, you gain access to one of the following uncommon monk weapons:</p>\n<ul>\n<li>@UUID[Compendium.pf2e.equipment-srd.Item.Kama],</li>\n<li>@UUID[Compendium.pf2e.equipment-srd.Item.Nunchaku],</li>\n<li>@UUID[Compendium.pf2e.equipment-srd.Item.Sai],</li>\n<li>@UUID[Compendium.pf2e.equipment-srd.Item.Shuriken], or</li>\n<li>@UUID[Compendium.pf2e.equipment-srd.Item.Temple Sword].</li>\n</ul>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 3 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                mo8ar: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Combat Climber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Gladatorial Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "ruby-phoenix-fanatic": {
        _id: "uF9nw15tK6b1bgre",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ruby Phoenix Fanatic",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Have you heard of the peerless sorcerer Hao Jin, also known as the Ruby Phoenix? Of course you have! You're her biggest fan! She's got amazing powers of self-resurrection, her hair is as red and fiery as a phoenix, and she has a huge vault full of the most incredible treasures in the multiverse. Now she's finally back from a mysterious 300-year quest on the plane of Axis so she can host this year's Ruby Phoenix Tournament—and you can't wait to meet her! In order to get as close to Hao Jin as possible, you've researched everything there is to know about the Ruby Phoenix's home, her planar escapades, and her competition. You've also trained your body to prove yourself a worthy champion. When Hao Jin's committee invited you and some friends to take part in the tournament's prequalifier, you just about fainted from excitement. Is your dream of meeting the Ruby Phoenix about to come true? As long as you win enough matches to get into the actual tournament, it just might! Just try not to act too star-struck when you finally get a chance to talk to her, okay?</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Axis Lore, Gladiatorial Lore, and Goka Lore skills. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                "7umvq": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Fists of the Ruby Phoenix Player's Guide",
            },
            rules: [],
            trainedLore: "Axis, Gladiatorial, Goka",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "ruin-delver": {
        _id: "5qUQOpdlNsJjpFVX",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ruin Delver",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've looked through some of the smaller ruins in the Otari hinterlands but have never quite built up the courage to check out the creepy lighthouse called Gauntlight. You've heard that these ruins are pretty well picked over, and mostly collapsed, but you always planned to some day explore them and perhaps find some bauble left behind from the centuries-old battle where the Roseguard slew an evil sorcerer. You know that the crumbled stone of old ruins has a tendency to shift, so you'd better step lightly if you get the chance to explore Gauntlight.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in Acrobatics and the Roseguard Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] skill feat.</p>",
            },
            items: {
                "1jgzx": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Cat Fall",
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Abomination Vaults Player's Guide",
            },
            rules: [],
            trainedLore: "Roseguard Lore",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    runner: {
        _id: "kkPdZsf61qySImQD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Runner",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You served as a messenger for a specific faction, guild, house, or individual, often running those messages on a short timeline. Finding the quickest path from point A to point B is your specialty and you've learned to make the most of your athleticism and navigational skill.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You are trained in the Athletics skill and a Lore skill for the city in which you were a messenger. You gain the Quick Jump skill feat.</p>",
            },
            items: {
                imRX1: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Jump",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Jump",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [],
            trainedLore: "City",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    saboteur: {
        _id: "4Vc8uXVHonrasFnU",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Saboteur",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether you do it for personal enjoyment or at the behest of a mercenary company or military organization, you have a knack for destroying things. You have a sense for an object or structure's weak spots and know where to deliver a hammer strike or alchemical bomb. You adventure to hone your skills or complete a particular mission.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Thievery skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Concealing Legerdemain] skill feat.</p>",
            },
            items: {
                hb9mc: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Concealing Legerdemain",
                    uuid: "Compendium.pf2e.feats-srd.Item.Concealing Legerdemain",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Engineering",
            trainedSkills: { custom: "", value: ["thi"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    sailor: {
        _id: "Zmwyhsxe4i6rZN75",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sailor",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You heard the call of the sea from a young age. Perhaps you signed onto a merchant's vessel, joined the navy, or even fell in with a crew of pirates and scalawags.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Dexterity</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Athletics skill and the Sailing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat.</p>",
            },
            items: {
                "78ses": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Underwater Marauder",
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Sailing Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sally-guard-neophyte": {
        _id: "vE6nb2OSIXqprDXk",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sally Guard Neophyte",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You joined the Sally Guard, Westgate's guard precinct, at an early age, bringing with you the requisite steel armor, sword, and lance, though your gear is of dubious make. The other guards may have suspected that you were a novice with less combat experience than them; if so, you proved their suspicions on your first day of training when your mount immediately threw you in the mud. A supervisor took mercy on you and offered to transfer you to another guard unit in the city, promising that you'd have a place on the Sally Guard when you decided you were ready for the challenge.</p>\n<p>Biting your lip in shame, you took the Edgewatch reassignment in order to gain the experience necessary to go back to your home district with your head held high. You'll prove them wrong, one way or another, and show everyone that you can protect the ones you hold most dear.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and your choice of Hunting Lore or Stabling Lore. You start out with a @UUID[Compendium.pf2e.pathfinder-bestiary.Actor.Riding Horse], as well as a suit of shoddy @UUID[Compendium.pf2e.equipment-srd.Item.Half Plate] armor, a shoddy @UUID[Compendium.pf2e.equipment-srd.Item.Longsword], and a shoddy @UUID[Compendium.pf2e.equipment-srd.Item.Lance].</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [],
            trainedLore: "Hunting Lore or Stabling Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "saloon-entertainer": {
        _id: "4KCa67gyxUn60zdf",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Saloon Entertainer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>All you want to do is entertain the people, but sure enough, bad news seems to follow you. Gunfights, brawls, robberies, and more befall establishments you play at, and word is quick to spread. Keep one town ahead of the gossip, and you just might be able to play a gig, command a stage, or run a table again.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and a lore skill of your choice. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Virtuosic Performer] skill feat.</p>",
            },
            items: {
                ktlDd: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Virtuosic Performer",
                    uuid: "Compendium.pf2e.feats-srd.Item.Virtuosic Performer",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sandswept-survivor": {
        _id: "MrZvq1ebEgEN9cIv",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sandswept Survivor",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were in the Sandswept Hall, the Pathfinder Society's lodge in Sothis, Osirion, when it came under attack from an unrelenting horde of undead. You endured the siege and forged new bonds with your fellow survivors, then joined the Society as a field agent.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and a Lore skill related to a specific type of undead, such as Mummy Lore or Zombie Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat with underground terrain.</p>\n<p>Additionally, when you receive a mission briefing at the Sandswept Hall, your familiarity with its history and staff grants further insight. You gain a +2 circumstance bonus to your checks to Gather Information or Recall Knowledge during the Getting Started segment of such adventures. Be sure to remind your GM that you have a relevant background.</p>",
            },
            items: {
                fx513: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Expertise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Blog: Pathfinder Society Year 4 Rule Updates",
            },
            rules: [],
            trainedLore: "<Lore about a specific type of undead>",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "sarkorian-reclaimer": {
        _id: "khGFmnQMBYmz2ONR",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sarkorian Reclaimer",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Broken Lands</p>\n<hr />\n<p>Whether you trace your heritage to lost Sarkoris or are a crusader trying to atone for past fanatics' wrongs, you seek to liberate the Sarkorian homeland from the demons who have defiled it.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free boost.</p>\n<p>You're trained in the Medicine skill and the Abyssal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Battle Medicine] skill feat.</p>",
            },
            items: {
                qsfyf: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Battle Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Battle Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Abyssal Lore",
            trainedSkills: { value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sarkorian-survivor": {
        _id: "B8kEwzPUMIjhofUm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sarkorian Survivor",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Broken Lands</p>\n<hr />\n<p>The devastation and carnage of the Worldwound were nearly complete, but you somehow managed to survive it.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free boost.</p>\n<p>You're trained in the Survival skill and the Sarkorian History Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                yj8hr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Sarkorian History Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "saved-by-clockwork": {
        _id: "yZUzLCeuaIkNk4up",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Saved by Clockwork",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Through bloody combat, a terrible accident, or purposeful sacrifice, you've lost some piece of your body that has been replaced with a clockwork mechanism. Whether your arm is now a whirring series of pumps, steel coils, and iron gears; your heart a intricate crystal clock that requires winding every day; or your lower leg a sculpted metal tube powered by adamantine springs and steam, part of you needs regular maintenance and repair. You might have received instructions from the brilliant inventor who saved you, or you might have woken up on a battlefield with no memory of the procedure or the individuals involved. Regardless, you possess the knowledge to take care of yourself-even if it's how to wind a key in your own heart or reconstruct a mechanical foot.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill. Every day you must perform 10 minutes of maintenance and wind up your clockwork parts, or you risk failure of the components, with consequences depending on what you replaced (determined by you and the GM). Your clockwork components allow you to react to danger with alacrity. You gain a +2 circumstance bonus to initiative rolls.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "FlatModifier",
                    selector: "initiative",
                    type: "circumstance",
                    value: 2,
                },
            ],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "savior-of-air": {
        _id: "locc0cjOmOQHe3j7",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Savior of Air",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Upon securing the <em>Untouchable Opal</em>, an artifact of extraordinary power, the Pathfinder Society endeavored to free the benevolent demigod Ranginori, who was trapped within the virtually unbreakable prison. You might have joined the Pathfinder Society in its expeditions to the Elemental Planes, or you might have lived on one of those planes before learning of the Society from these Pathfinder agents. You are no stranger to navigating precarious terrain as a result.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Acrobatics skill, plus either Elemental Lords Lore or a Lore skill related either to one of the Elemental Planes (such as Plane of Air Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] skill feat. Add <strong>Auran</strong> to the list of additional languages you can learn for having a high Intelligence modifier.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 8 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                z1zgz: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Cat Fall",
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Elemental Lords Lore or <Elemental Plane> Lore",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    scavenger: {
        _id: "vHeP960qjhfob4Je",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Scavenger",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've made a living sorting through the things society throws away. You might have scavenged simply to survive, or plied a trade as a ragpicker, dung carter, or the like. While you've left that life behind, you still keep one eye on the ground out of habit.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Lore skill for the settlement you grew up scavenging in. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                y8g6e: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "<City> Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "scholar-of-the-ancients": {
        _id: "i5G6E5dkGWiq838C",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Scholar of the Ancients",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - High Seas</p>\n<hr />\n<p>You're fascinated by the lost Azlanti Empire and have dedicated yourself to seeking out and studying every broken artifact or scrap of knowledge that remains, whether as an academic pursuit or simply for the joy of treasure hunting.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Azlant Lore skills. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat.</p>",
            },
            items: {
                nrcun: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Azlant Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "scholar-of-the-sky-key": {
        _id: "UyddtAwqDGjQ1SZK",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Scholar of the Sky Key",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The unfamiliar technology of Numeria's Silver Mount still baffles Society scholars, yet you are one of the innovators who discovered how to operate a handful of these futuristic tools-possibly after surviving more than a few explosions. The Society might have recruited you for your esoteric abilities, or you might have sought out the Society's protection in escaping the covetously vile Technic League. Even if your understanding of advanced technology is imperfect, your hard-learned lessons are invaluable in deciphering and repairing gear.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Repair] skill feat.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 6 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                htv8u: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Repair",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Repair",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Engineering Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    scholar: {
        _id: "v0WPfxN6G8XFfFZT",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Scholar",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have a knack for learning and sequestered yourself from the outside world to learn all you could. You read about so many wondrous places and things in your books, always dreaming about one day seeing the real things. Eventually, that curiosity led you to leave your studies and become an adventurer.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in your choice of the Arcana, Nature, Occultism, or Religion skill, and gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat in your chosen skill. You're also trained in the Academia Lore skill.</p>",
            },
            items: {},
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    choices: [
                        { label: "PF2E.SkillArc", value: "arcana" },
                        { label: "PF2E.SkillNat", value: "nature" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                        { label: "PF2E.SkillRel", value: "religion" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    preselectChoices: {
                        assurance: "{item|flags.pf2e.rulesSelections.skill}",
                    },
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "scion-of-slayers": {
        _id: "RPU1aNfVz3ZbymvV",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Scion of Slayers",
        system: {
            boosts: {
                "0": { value: ["int", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were born into a lineage of undead slayers. No mere occupation, in your family slaying is a mantle of almost mystic responsibility passed from parent to child. Over the generations, this single-minded focus has begun to manifest in uncanny ways during combat.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Undead Lore skill. You can cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Vitality Lash]{Disrupt Undead}</em> as an innate divine cantrip. You can use Intelligence as your spellcasting ability for this innate spell.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [],
            trainedLore: "Undead",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    scout: {
        _id: "o7RbsQbv5iLRvd8j",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Scout",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You called the wilderness home as you found trails and guided travelers. Your wanderlust could have called you to the adventuring life, or perhaps you served as a scout for soldiers and found you liked battle.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Survival skill and a Lore skill related to one terrain you scouted in (such as Forest Lore or Cavern Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                hkkx3: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<Terrain> Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "second-chance-champion": {
        _id: "wz4fDeZtCvxC4vyO",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Second Chance Champion",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You competed in the last Ruby Phoenix Tournament 10 years ago, though you didn't make it to the end. One wrong step, one mistimed punch, one blocked spell—whatever it was, that was all it took for your opponent to get the upper hand and knock you out of the tournament. Well, maybe it was a simple mistake or maybe you just weren't up to snuff, and you're too headstrong to admit it. Now, after training for a decade to ensure you don't repeat any of your prior mistakes, you've joined forces with a team of fellow fighters in order to maximize your odds of making it all the way to the finals. Whatever happened before, you've vowed to return to the ring in Goka for an epic rematch, and this time you're not walking out until you've been named Ruby Phoenix Champion.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Strength</strong>, and one is a free ability boost.</p>\n<p>You're trained in Acrobatics and the Gladiatorial Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] skill feat</p>",
            },
            items: {
                br2az: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Cat Fall",
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Fists of the Ruby Phoenix Player's Guide",
            },
            rules: [],
            trainedLore: "Gladiatorial",
            trainedSkills: { value: ["acr"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "secular-medic": {
        _id: "y0WZS51fSi6dILHq",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Secular Medic",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Golden Road</p>\n<hr />\n<p>You're from Rahadoum, where the Laws of Mortality taught you to reject the gods, yet you've seen firsthand how dangerous it can be to go without healing magic. As a result, you've thrown yourself into the study of medicine, so you can save lives without saving souls.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and the Anatomy Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Battle Medicine] skill feat.</p>",
            },
            items: {
                "6fn06": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Battle Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Battle Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Anatomy Lore",
            trainedSkills: { value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "seer-of-the-dead": {
        _id: "UU4MOe7Lozt9V8tg",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Seer of the Dead",
        system: {
            boosts: { "0": { value: ["con", "wis"] }, "1": { value: [] } },
            description: {
                value:
                    "<p>You have long been gifted with the ability to see and speak with the departed. This could have manifested at your birth or when a chance encounter linked you inextricably to the spirits of the dead. Their constant presence might feel like a curse, or it might provide you with welcome companionship.</p>\n<p>You gain one ability boost. It must be to <strong>Constitution</strong> or <strong>Wisdom</strong>.</p>\n<p>You're trained in Religion and Undead Lore. You gain the effects of the <em>@UUID[Compendium.pf2e.spells-srd.Item.Spirit Sense]</em> spell at all times.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Undead Lore",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "senghor-sailor": {
        _id: "lav3yRNPc7lQ7e9k",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Senghor Sailor",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Mwangi Expanse</p>\n<hr />\n<p>As an experienced sailor from Senghor, you know that the only thing saving you from disaster on the high seas is a properly maintained ship. You know boat-building inside and out and you can quickly cobble together a solution in the event that something breaks.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Sailing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Repair] skill feat.</p>",
            },
            items: {
                "1k8jz": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Repair",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Repair",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Sailing Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sense-of-belonging": {
        _id: "cCi1Lsld9Umz1uHs",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sense of Belonging",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Home is all you've ever wanted. But home, whatever that means to you, has always been a step out of reach. On the night of the Missing Moment, you saw loving figures with outstretched arms, beckoning you toward a warm hearth just inside a glowing archway. On the other side of the portal, though, you found only missing memories and lost time, your feet back at the very spot where you started. Perhaps your heart was broken that night, or perhaps you met your mission to find a suitable community with renewed zeal. Either way, you haven't felt quite \"whole\" since your gatewalker experience. Your new ability to momentarily disappear onto another plane of existence only reinforces this feeling of emptiness.</p>\n<p>Your deviant abilities are of the wraith classification. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Eerie Flicker] deviant feat. As a quirk, whenever you use a deviant ability, plants around you spontaneously bloom and then wilt, as if rapidly aging.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Scouting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                dDUWJ: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Gatewalkers Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Eerie Flicker",
                },
            ],
            trainedLore: "Scouting Lore",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "sentinel-reflectance": {
        _id: "1Fpf40RBd0EgwP7R",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sentinel Reflectance",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Either through witnessing their deeds and devout heroics firsthand, or through reading chronicles of their exploits, the Shining Sentinels of the Knights of Lastwall inspire you. You may idealize their philosophy or one day hope to join their ranks; the Shining Sentinels are your guiding star.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Shining Sentinels Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.No Cause For Alarm]{No Cause for Alarm} skill feat.</p>",
            },
            items: {
                xtiqt: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "No Cause For Alarm",
                    uuid: "Compendium.pf2e.feats-srd.Item.No Cause For Alarm",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [],
            trainedLore: "Shining Sentinels",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    servant: {
        _id: "UdOUj7i8XGTI72Zc",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Servant",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You held a role of servitude, waiting on nobles and engendering their trust as one of the confidantes of the household. You might have walked away on good terms, or perhaps you know dangerous secrets about your former masters. Regardless, you're adventuring for a change and finding that in this new role, the skills you've learned now serve you.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Labor Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Read Lips] skill feat.</p>",
            },
            items: {
                z7jfd: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Read Lips",
                    uuid: "Compendium.pf2e.feats-srd.Item.Read Lips",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Labor Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sewer-dragon": {
        _id: "OhP7cqvNouFgHIdJ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sewer Dragon",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisites</strong> Kobold Ancestry</p>\n<hr />\n<p>You are one of the Sewer Dragons, born in Absalom's sewers, strengthened by a life defending your territory.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost. You're trained in the Crafting skill and the Kobold Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Snare Crafting] skill feat.</p>",
            },
            items: {
                "4w4bm": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Snare Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Snare Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Society Quest #10: The Broken Scales",
            },
            rules: [],
            trainedLore: "Kobold Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "shadow-haunted": {
        _id: "V31KRG7aA7xS0m8L",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Shadow Haunted",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Old Cheliax</p>\n<hr />\n<p>You are from Nidal, and regardless of your personal values, Zon-Kuthon has a claim on your soul due to an ancient pact. The Midnight Lord's unsettling influence is bred deep into your bones.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Shadow Plane Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Coercion] skill feat.</p>",
            },
            items: {
                "9db55": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Shadow Plane Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "shadow-lodge-defector": {
        _id: "HEd2Lxgvl080nRxx",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Shadow Lodge Defector",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were among the Pathfinders recruited by the devious Shadow Lodge, lured in by promises of wealth, reform, justice, or revenge. You might have fought against the Society's loyal agents, helped sabotage the Pathfinders' reputation in distant countries, or even infiltrated the far-flung lodges as a spy. You've since made peace with and rejoined the Pathfinder Society, yet the underhanded reflexes and skills you learned are hard to forget.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lie to Me]{Lie To Me} skill feat.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 2 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                o9m71: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lie To Me",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lie to Me",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "shadow-war-survivor": {
        _id: "b9EPEY09dYOVzdue",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Shadow War Survivor",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Countless factions have fought for influence in Absalom for millennia, and for decades these groups worked through the Pathfinder Society to better control the City at the Center of the World. Perhaps you were ones of these agents who clashed with other operatives during the so-called Shadow War. Or you might have been an unintended victim of these clandestine clashes, inspiring you to join the Society and stop the conflict from within. Whatever the reason, navigating the Shadow War has left you politically savvy and informed.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Absalom Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 1 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                sziit: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Streetwise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Absalom Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    sheriff: {
        _id: "AqhHif8mzYjlGMxJ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sheriff",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You hold an official title of sheriff or deputy in a small community. Those that would do harm to others flee your gaze, for they know it brings the promise of castigation. You protect your town, watch over those who have placed their trust in you, and make sure those that would do others harm are brought to justice.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Hunting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat.</p>",
            },
            items: {
                keeap: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Group Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Hunting",
            trainedSkills: { custom: "", value: ["itm"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "shielded-fortune": {
        _id: "Vq6kOTBm114bV9y7",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Shielded Fortune",
        system: {
            boosts: {
                "0": { value: ["con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've always been tougher than your peers. As a child, you may have been able to endure the rough-and-tumble horseplay with friends more easily. You regularly emerged relatively unscathed from accidents could have been quite dangerous. At some point in your past, you had a particularly close call with death—be it from a near-fatal accident, a fight gone horribly wrong, a close call with illness, or something similar, yet you quickly recovered. You may or may not believe you're more fated to face unexpected hardship in your life, but regardless, you know you can take what destiny has to dish out.</p>\n<p>This background is associated with the suit of Shields.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong>, and one is a free ability boost. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Toughness] general feat and also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Fated Not to Die] free action.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "shoanti-name-bearer": {
        _id: "H3E69w8Xg0T7rAqD",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Shoanti Name-Bearer",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Saga Lands</p>\n<hr />\n<p>You are a member of a Shoanti quah and have gone through its coming of age ceremony, gaining the traditional tattoo of your quah and earning your adult name.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Quah Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat.</p>",
            },
            items: {
                "22ltd": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Combat Climber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Quah Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "shory-seeker": {
        _id: "HZ3oBBdEnsH3fWrm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Shory Seeker",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've dedicated your life to unraveling the secrets of the ancient Shory Empire, either through meticulous research or by traveling into dangerous and distant ruins to track down long-lost artifacts.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Shory Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat.</p>",
            },
            items: {
                "6x9px": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Specialty Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Shory Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sign-bound": {
        _id: "5Bfzt3sZyiaKrBO0",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sign Bound",
        system: {
            boosts: {
                "0": { value: ["cha", "con", "dex", "int", "str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were born under a powerful manifestation of a specific constellation, and its connection to you is obvious. You tend to feel most at ease while your constellation is prominent and can draw upon your sign's influence from time to time. When you gain this background, choose a specific constellation, such as the Thrush or the Wagon. Your associated constellation determines one of the ability boosts you gain and an innate spell. The list includes benefits for the constellations of the Cosmic Caravan, but you might have been born under a different constellation and gain different benefits as determined by the GM.</p>\n<p>Choose two ability boosts. One must be to the ability tied to your sign, and one is a free ability boost.</p>\n<p>You're trained in Astrology Lore. You also gain the ability to cast an occult innate spell, as determined by your sign. The frequency with which you can cast this spell is listed below; cantrips can be used as often as you wish. As normal, you cast non-cantrip innate spells at the lowest level available to that spell, such as 2nd level for speak with animals, and cantrips are heightened to half your level.</p>\n<p>Additionally, once during the prominent time for your sign (such as 12 Pharast-18 Gozran for the Bridge), you can cast your sign's spell without expending its normal use.</p>\n<hr />\n<p><strong>The Thrush</strong> (Dexterity): <em>@UUID[Compendium.pf2e.spells-srd.Item.Ghost Sound]</em>; at will<br /><strong>The Lantern Bearer</strong> (Wisdom): <em>@UUID[Compendium.pf2e.spells-srd.Item.Light]</em>; at will<br /><strong>The Newlyweds</strong> (Charisma): <em>@UUID[Compendium.pf2e.spells-srd.Item.Charm]</em>; once per day<br /><strong>The Bridge</strong> (Constitution): <em>@UUID[Compendium.pf2e.spells-srd.Item.Environmental Endurance]</em>; once per week<br /><strong>The Daughter</strong> (Charisma): <em>@UUID[Compendium.pf2e.spells-srd.Item.Guidance]</em>; at will<br /><strong>The Rider</strong> (Strength): <em>@UUID[Compendium.pf2e.spells-srd.Item.Marvelous Mount]{Phantom Steed}</em>; once per week<br /><strong>The Patriarch</strong> (Strength): <em>@UUID[Compendium.pf2e.spells-srd.Item.Know the Way]</em>; at will<br /><strong>The Wagon</strong> (Constitution): <em>@UUID[Compendium.pf2e.spells-srd.Item.Tailwind]</em>; once per week<br /><strong>The Pack</strong> (Dexterity): <em>@UUID[Compendium.pf2e.spells-srd.Item.Speak with Animals]</em>; once per week<br /><strong>The Mother</strong> (Wisdom): <em>@UUID[Compendium.pf2e.spells-srd.Item.Clear Mind]{Remove Fear}</em>; once per week<br /><strong>The Star Gazer</strong> (Intelligence): <em>@UUID[Compendium.pf2e.spells-srd.Item.Sure Strike]</em>; once per week<br /><strong>The Stranger</strong> (Charisma): <em>@UUID[Compendium.pf2e.spells-srd.Item.Message]</em>; at will<br /><strong>The Follower</strong> (Intelligence): <em>@UUID[Compendium.pf2e.spells-srd.Item.Stabilize]</em>; at will</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [],
            trainedLore: "Astrology",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "sky-rider": {
        _id: "lMJYIXSh3NSJslmi",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sky Rider",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The freedom of a bird in flight is something to envy, and envy it you did, but not for long. You've borrowed mechanical gliders or sought out the benefits of magically aided gliding and flight, doing anything for an opportunity to look down on the world with only the wind to keep you aloft. The expense of these experiences may have been a notable factor in why you undertook the adventuring lifestyle or perhaps you are seeking new methods of flight to master.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Acrobatics skill and the Plane of Air Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Cat Fall] skill feat.</p>",
            },
            items: {
                UVhOe: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Cat Fall",
                    uuid: "Compendium.pf2e.feats-srd.Item.Cat Fall",
                },
            },
            publication: {
                license: "OGL",
                remaster: true,
                title: "Pathfinder Rage of Elements",
            },
            rules: [],
            trainedLore: "Plane of Air Lore",
            trainedSkills: { custom: "", value: ["acr"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sleepless-suns-star": {
        _id: "AfBCrHsw1xbRFejN",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sleepless Suns Star",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Among your fellow guards who patrol the Foreign Quarter, you're something of a big deal. Your good work and big personality have made a big enough splash that word has gotten out about your status as a rising star among the watchdogs of Absalom. Your popularity has also earned you the trust of many citizens of the Foreign Quarter.</p>\n<p>Your laudable performance has earned you a transfer to the newly formed Edgewatch in the Precipice Quarter, where you'll put your formidable reputation to good use by patrolling the Radiant Festival and ensuring the safety of Absalom's most vulnerable visitors.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society, plus either Gladiatorial Lore or Genealogy Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to @UUID[Compendium.pf2e.actionspf2e.Item.Interact] with members of the Sleepless Suns and residents of the Foreign Quarter. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>",
            },
            items: {
                j7rys: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with members of the Sleepless Suns and residents of the Foreign Quarter (Sleepless Suns Star)",
                    predicate: [
                        { or: ["target:sleepless-suns", "target:foreign-quarter"] },
                    ],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "Gladatorial Lore or Genealogy Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "snubbed-out-stoolie": {
        _id: "4lbfPXwZEf3eE0ip",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Snubbed Out Stoolie",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were once a distinguished informant for the shieldmarshals, working deep undercover to infiltrate gangs of bootleggers and assassins. Then, one day, you discovered that the records of your service had all been completely destroyed. In an instant, you were no longer an elite spy impersonating a criminal-you were just a plain criminal.</p>\n<p>Now, not a trace remains of your work for the city. Not only is it as though you were never a shieldmarshal at all, but you've got a rap sheet implicating you as a key member in the criminal organizations you spent your career infiltrating. Luckily, no one could take away the skills you learned from your deep-cover missions, and your new notoriety has earned you quite a reputation among Alkenstar's criminal elite. Through your underworld connections, you've identified Deputy Shieldmarshal Anjelique Loveless as the one responsible for your fall from grace. It seems you were onto something that she didn't want you to know about, but there's only one way to figure out exactly why Loveless ruined your reputation and gave you your outlaw status-find her.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lie to Me] skill feat.</p>",
            },
            items: {
                "61zbo": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lie To Me",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lie to Me",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Outlaws of Alkenstar Player's Guide",
            },
            rules: [],
            trainedLore: "Underworld Lore",
            trainedSkills: { custom: "", value: ["dec"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "sodden-scavenger": {
        _id: "93icIDHD4IrqI2oV",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sodden Scavenger",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Mwangi Expanse</p>\n<hr />\n<p>You've managed to eke out an existence in the storm-wracked Sodden Lands and have become an expert at scavenging food and tools.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Swamp Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                cp6du: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Swamp Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "song-of-the-deep": {
        _id: "o3ArTg5c8pLe7iGm",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Song of the Deep",
        system: {
            boosts: { "0": { value: ["cha", "con", "str"] }, "1": { value: [] } },
            description: {
                value:
                    "<p>During a sea voyage, you washed overboard, ingested sea water, and drowned. Merfolk, kelpies, sea serpents, or another magical denizen of the sea pulled your unconscious body from the briny depths. Having spent so much time underwater, your lungs were filled with salt water. To restore your ability to breathe, they exhaled into your lungs and shared the ability to breathe underwater in the process. You came back with the ability to breathe water, as well as a newfound knowledge of your time beneath the waves.</p>\n<p>You gain one ability boost. It must be to <strong>Strength</strong>, <strong>Constitution</strong>, or <strong>Charisma</strong>.</p>\n<p>You're trained in the Athletics skill and the Ocean Lore skill. You have the ability to breathe underwater.</p>\n<hr />\n<p><strong>Special</strong> You can choose to lose the ability to breathe air when you take this background, making you only able to breathe underwater. If you do, you gain a second ability boost, which is a free ability boost.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "Ocean Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "songsinger-in-training": {
        _id: "ECKic2p6yIyoGYod",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Songsinger in Training",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are a pupil of Argakoa the Songsinger, Otter House leader and Mammoth Lord. Argakoa has been the Broken Tusk's foremost songsinger for many winters, and she sees in you a promising disciple who can carry the torch when it's time for her to pass it. The role of songsinger is a great distinction. These chanters, musicians, and poets are responsible for recording, preserving, and sharing the Broken Tusk's oral history. As one of these songsingers, it's up to you to decide which stories are worthy of passing on and which should be left along the migration trail.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and the Genealogy Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] skill feat.</p>",
            },
            items: {
                xg485: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Impressive Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Quest for the Frozen Flame Player's Guide",
            },
            rules: [],
            trainedLore: "Geneaology",
            trainedSkills: { custom: "", value: ["prf"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "southbank-traditionalist": {
        _id: "2W2jadmj4gPNfdQ9",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Southbank Traditionalist",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>The political faction of Southbank represents the original founders of Willowshore, a hearty band of settlers whose skills and focus tend toward the earthly and humble. While there are certainly those in this faction who regard Northridge as vapid urbanites, merchants, and power-hungry politicians, most in Southbank devote their energy to helping Willowshore stay fed, honoring its long-standing traditions, and remaining relatively self-sufficient. Your interests in Willowshore's history are closely tied to the traditions of farming and building what you need with your own two hands, as well as taking part in the shared oral history of the region. Whether it's enjoying discussions with local elders about the past or helping newcomers learn Willowshore's ways, you're always eager to help uphold the town's traditions.</p>\n<p>Your home is likely located south of the Ceiba River, on the southernmost outskirts of town.</p>\n<p>During the Reenactment Festival, you likely spent time helping to set up the feasts, assisted in running some of the events, and otherwise worked behind the scenes. You were chosen to be an abductee during the Reenactment Festival because you lost a bet, owed a favor, or otherwise got pressured or tricked into the role by a family member, friend, or coworker. Perhaps someone who was going to be one of the abductees but had to back out at the last moment, and so you ended up taking their place.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Farming Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] feat.</p>\n<p>@UUID[Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Southbank Traditionalist)]</p>\n<hr />\n<p>You can add one of the following two adjustments to any background to further modify your choice to match your vision for your PC.</p>\n<p><strong>Family:</strong> You and one (or more) other PCs are close family members (siblings, parent/child, married, etc.) If you take this adjustment, the other PC(s) who are your family must also take this adjustment. Choose one of the following to replace the skill feat you otherwise would've gained from your background. (You and your sibling need not share the same choice—a sibling who wants to keep their background's skill feat can pick \"Typical\" from the list.)</p>\n<ul>\n<li><strong>Bickering:</strong> You have a long-standing feud with your sibling(s). Whenever your sibling(s) critically fail a significant skill check or attack roll and you witness their failure, you gain a +1 status bonus to your saving throws until the end of your next turn as you secretly (or perhaps not so secretly) delight in their failure. @UUID[Compendium.pf2e.campaign-effects.Item.Effect: Bickering Family]</li>\n<li><strong>Close-Knit:</strong> You and your sibling(s) work well together, and you go all-out to help them when they're badly hurt. When you provide @UUID[Compendium.pf2e.actionspf2e.Item.Aid] or @UUID[Compendium.pf2e.actionspf2e.Item.Administer First Aid] to your sibling(s), the DC is 5 lower than normal.</li>\n<li><strong>Typical:</strong> You have a standard relationship with your sibling(s); don't change your background's skill feat.</li>\n</ul>\n<p><strong>Foundling:</strong> You aren't a native to Willowshore, but you did grow up in the town. You might have adoptive parents, or you could've grown up on the streets. Choose one of the following to replace the bonus feat you otherwise would've gained from your background.</p>\n<ul>\n<li><strong>Bitter:</strong> You appreciate the town of Willowshore but still resent the conditions that resulted in you being abandoned or left in the town. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</li>\n<li><strong>Mysterious:</strong> You keep secrets, and very few in Willowshore (if anyone) know your history before you settled in the town, in part because you've taken to learning about Willowshore by watching rather than engaging in conversation. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</li>\n<li><strong>Outgoing:</strong> You're grateful for the sense of belonging the townsfolk of Willowshore have extended to you and always do your best to repay that kindness. Once per week when you attempt a skill check to resolve a downtime activity that could benefit Willowshore (several of these activities are detailed in the adventures, and your GM can always make the call if another activity would qualify) and you fail that check, you instead succeed at the check, or if you critically fail at that check, you instead simply fail that check.</li>\n</ul>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Season of Ghosts Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Southbank Traditionalist)",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Family",
                            value: "family",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Foundling",
                            value: "foundling",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.NoAdjustment",
                            value: "none",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.Prompt",
                    rollOption: "background-variant",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bickering",
                            value: "bickering",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.CloseKnit",
                            value: "close-knit",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Typical",
                            value: "typical",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:family"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FamilyPrompt",
                    rollOption: "background-variant:family",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bitter",
                            value: "bitter",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Mysterious",
                            value: "mysterious",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Outgoing",
                            value: "outgoing",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:foundling"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FoundlingPrompt",
                    rollOption: "background-variant:foundling",
                },
                {
                    key: "GrantItem",
                    predicate: [
                        {
                            or: [
                                "background-variant:none",
                                "background-variant:family:typical",
                            ],
                        },
                    ],
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:bitter"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:mysterious"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            ],
            trainedLore: "Farming Lore",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "spell-seeker": {
        _id: "LbuWzGpCIP79UwVB",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Spell Seeker",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Conventional magic can only hold your attention for so long. Instead, you've devoted yourself to understanding truly esoteric spells, which invariably draws you to explore the world and all its eldritch traditions.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in either the Arcana skill or Occult skill, as well as the Library Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat.</p>",
            },
            items: {
                "2k7dh": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Pathfinder Society Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillArc", value: "arcana" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Library Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sponsored-by-a-stranger": {
        _id: "FznrY4fZASquT6hY",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sponsored by a Stranger",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You remember the day the stranger approached you to make several peculiar inquiries. You don't remember much about them, other than a large head and a frail body. At first, the stranger's questions seemed odd: how might forgotten history nevertheless shape the present, whether an insect hive mind could be manipulated at a distance, and so on. You don't remember all of the questions, and you don't know why you could refuse to answer some but felt compelled to answer others. The stranger nevertheless seemed pleased with your responses and insisted you would find study at the Magaambya enlightening. You never saw them again, but you're now here at the Magaambya, with more questions than answers about your future.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Occultism or Nature skill. You gain your choice of the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] or @UUID[Compendium.pf2e.feats-srd.Item.Quick Identification] skill feat. You're also trained in Insect Lore. Your recommended primary branch is the Rain-Scribes.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Strength of Thousands Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillNat", value: "nature" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    adjustName: false,
                    choices: [
                        { value: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge" },
                        { value: "Compendium.pf2e.feats-srd.Item.Quick Identification" },
                    ],
                    flag: "feat",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.SkillFeat",
                },
                { key: "GrantItem", uuid: "{item|flags.pf2e.rulesSelections.feat}" },
            ],
            trainedLore: "Insect Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "sponsored-by-a-village": {
        _id: "8usMHYAmFdqmmkTS",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sponsored by a Village",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You come from a small community far from any large cities, but the Magaambya is known even in your isolated corner of the world. You have shown more scholarly talent than anyone from your village in many years, perhaps even generations, and the village elders have insisted you explore your potential at the Magaambya. Whether you were eager to leave or not seemed irrelevant to the elders; you had the talent, so you must go. You don't know how the elders had the connections or influence to sponsor your education there, but you've left your tight- knit community behind for the city of Nantambu and the Magaambya at its heart.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Crafting or Survival skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Crafter's Appraisal] if you chose Crafting or @UUID[Compendium.pf2e.feats-srd.Item.Forager] if you chose Survival. You're also trained in the Lore skill appropriate for the terrain around your community (such as Forest Lore or Jungle Lore).</p>\n<p>Your recommended primary branch is the Cascade Bearers.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Strength of Thousands Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillCra", value: "crafting" },
                        { label: "PF2E.SkillSur", value: "survival" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "village",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["village:crafting"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Crafter's Appraisal",
                },
                {
                    key: "GrantItem",
                    predicate: ["village:survival"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            ],
            trainedLore: "<Terrain> Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "sponsored-by-family": {
        _id: "T8SlgHjj0hVjKW2Q",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sponsored by Family",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Several members of your family have studied at the Magaambya, although not all of them have graduated as lore-speakers (or even advanced past initiates to become attendants). Your family has decided that you're an excellent candidate to join their ranks. Although lore-speakers of the Magaambya know they are supported by the strength of thousands of graduates who have come before them, you can take the smaller, more personal comfort in the support of your family.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Diplomacy or Society skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] if you chose Diplomacy or @UUID[Compendium.pf2e.feats-srd.Item.Eye For Numbers] if you chose Society. You're also trained in Magaambya Lore.</p>\n<p>Your recommended primary branch is the Uzunjati.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Strength of Thousands Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillDip", value: "diplomacy" },
                        { label: "PF2E.SkillSoc", value: "society" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "family",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["family:diplomacy"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
                {
                    key: "GrantItem",
                    predicate: ["family:society"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Eye For Numbers",
                },
            ],
            trainedLore: "Magaambya Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "sponsored-by-teacher-ot": {
        _id: "p6Asr6f2cI2BWorr",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sponsored by Teacher Ot",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have known the Magaambyan teacher Takulu Ot and his wife Niana for many years. Both are amateur bird-watchers and musicians, and you share one of these hobbies. They are pleasant people and well-regarded in Nantambu, although their unshakable generosity and friendliness strike cynics as too earnest to be genuine. You know otherwise; Takulu and Niana are just as sincere as they appear. Takulu always seemed to watch you with a discerning eye, and one day he idly observed that you'd do well at the Magaambya. Talking about it further with him, Takulu agreed that he would sponsor you personally and be the one to give your intake interview. With a twinkle in his eye, he asked that you call him Teacher Ot from now on, just as all of his students do.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Survival or Performance skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Survey Wildlife] if you chose Survival or @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] if you chose Performance. You're also trained in Nantambu Lore.</p>\n<p>Your recommended primary branch is the Emerald Boughs.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Strength of Thousands Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillPrf", value: "performance" },
                        { label: "PF2E.SkillSur", value: "survival" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "teacher-ot",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["teacher-ot:performance"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
                {
                    key: "GrantItem",
                    predicate: ["teacher-ot:survival"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Survey Wildlife",
                },
            ],
            trainedLore: "Nantambu Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    spotter: {
        _id: "XcacLiaGDgjzHS3T",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Spotter",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>An eye for detail, a sense for the wind, and a strong trust in your gut feelings. These qualities have set you apart from others when it comes to assisting a sharpshooter with setting up the perfect shot against their target. Elevation, velocity, and concealment-these are all vital factors that need to be considered to pull off a feat of true marksmanship, and no sniper would be able to function without an experienced spotter. Since your younger days, you've put your skills as a spotter to work as an adventurer. Whether you're taking your own shots now or spotting for others, your talents grant you an edge in an adventuring career.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Stealth skill and the Scouting Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Stalker] skill feat.</p>",
            },
            items: {
                ku7lr: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Stalker",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Stalker",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Scouting",
            trainedSkills: { custom: "", value: ["ste"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    squire: {
        _id: "qbvzNG8hMjb8f66D",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Squire",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You trained at the feet of a knight, maintaining their gear and supporting them at tourneys and in battle. Now you search for a challenge that will prove you worthy of full knighthood, or you've spurned pomp and ceremony to test yourself in honest, albeit less formal, combat.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and your choice of the Heraldry Lore or Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Armor Assist] skill feat.</p>",
            },
            items: {
                o4nzb: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Armor Assist",
                    uuid: "Compendium.pf2e.feats-srd.Item.Armor Assist",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Heraldry Lore or Warfare Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "starless-one": {
        _id: "KHMEcCCG132ILkuU",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Starless One",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You were born on a night when not a single star was in the night sky. While this is likely due to a haze, cloud cover, or other natural phenomena, there is always a chance that the stars hid from you on purpose. You have never been able to rely on the stars to guide you and you choose to exert your own will on your fortune rather than rely on the heavens. You've learned to reject outside influence on your fate, maintaining control of your own destiny.</p>\n<p>Choose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.</p>\n<p>You're trained in Occultism and Astrology Lore. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Reclaim Destiny] action.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Reclaim Destiny",
                },
            ],
            trainedLore: "Astrology Lore",
            trainedSkills: { custom: "", value: ["occ"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    starwatcher: {
        _id: "sR3S7Xn15drU6rOF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Starwatcher",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You're one of Wrin Sivinxi's closest confidantes. You've spent many long nights with her under the stars, learning the tales associated with the Cosmic Caravan and how the heavens can predict the future. You know that Wrin has paralyzing claustrophobia; she sees menace in angles and danger in confined spaces, which is why her shop is an all domed canvas that opens to the sky. If Wrin thinks there's trouble, you'll be the first to offer to help.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Astrology Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                az6xy: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Abomination Vaults Player's Guide",
            },
            rules: [],
            trainedLore: "Astrology Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "storm-survivor": {
        _id: "UURvnfwXypRYYXBI",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Storm Survivor",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - High Seas</p>\n<hr />\n<p>Through luck or through skill, you managed to survive a catastrophic maritime disaster, such as a shipwreck or being thrown overboard. You have a keen sense for weather or situations that are similar to the one you escaped.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Weather Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                un6z5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Weather Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "street-preacher": {
        _id: "tqnrnXVTbdehohPL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Street Preacher",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Forget the church orthodoxy and the stuffy cloisters-spreading the word of your god to the people is your calling. You've preached on the street corners and in public houses, to wanderers on the road and to captives in the stocks. Adventuring can take you across the world. What vocation could better serve to take your holy words to fresh ears?</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Lore skill for your patron deity. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                uhfiz: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [],
            trainedLore: "<Deity> Lore",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "street-urchin": {
        _id: "moVRsnpjB5THCwxE",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Street Urchin",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You eked out a living by picking pockets on the streets of a major city, never knowing where you'd find your next meal. While some adventure for the glory, you do so to survive.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Constitution</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Thievery skill and a Lore skill for the city you lived in as a street urchin (such as Absalom Lore or Magnimar Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pickpocket] skill feat.</p>",
            },
            items: {
                jpni5: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pickpocket",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pickpocket",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "<City> Lore",
            trainedSkills: { value: ["thi"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "student-of-magic": {
        _id: "FVE2mg6EEyPVLz3M",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Student of Magic",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are currently enrolled at a school of magic, where you're learning the fundamentals of your magical tradition. Whether your adventuring occurs during breaks between semesters, as part of a work study program, or even within the halls of the academy itself, you'll have to learn to juggle your dual life.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of Arcana, Nature, Occultism, or Religion, as well as Academia Lore. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Recognize Spell] skill feat.</p>",
            },
            items: {
                xa78y: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Recognize Spell",
                    uuid: "Compendium.pf2e.feats-srd.Item.Recognize Spell",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillArc", value: "arcana" },
                        { label: "PF2E.SkillNat", value: "nature" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                        { label: "PF2E.SkillRel", value: "religion" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "sun-dancer": {
        _id: "UNbV4UwZEXxJy703",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sun Dancer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've been taught the Burning Mother's blessings could be invited through dances done under its presence, such as in welcoming the first rays of warmth in the spring. You could have been the apprentice of some primal caster who wished to harness the sun's power for their incantations or lived in a community who reveres the Daughter of the Cosmic Caravan through displays of veneration for the sun. Whatever the case, you developed a supernatural connection to the sun.</p>\n<p>Choose two ability boosts. One must be to Charisma or Dexterity, and one is a free ability boost.</p>\n<p>You're trained in Performance. You gain the Fascinating Performance skill feat. If you use this feat outdoors in direct sunlight, you gain a +1 circumstance bonus to the skill check.</p>",
            },
            items: {
                CC8hhkrq4zPv6VWG: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Fascinating Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Fascinating Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [
                {
                    domain: "performance",
                    key: "RollOption",
                    label: "PF2E.SkillVariant.AttemptToFascinateOutdoorsInBrightSun",
                    option: "fascinate-outdoors-in-bright-sun",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.AttemptToFascinateOutdoorsInBrightSun",
                    predicate: ["fascinate-outdoors-in-bright-sun"],
                    selector: "performance",
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "surge-investigator": {
        _id: "0otxwSLobUCf0l1I",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Surge Investigator",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>From rivers that charm all who come near to forests that speak through dream messages, you have seen and studied many kinds of magical terrain. The world is so rich in magic that it can affect the land itself, and you have traveled extensively to learn the ways of identifying the oddities of magical terrain wherever it arises.</p>\n<p>Choose two ability boosts. One must be <strong>Constitution</strong> or <strong>Wisdom</strong> and one is a free ability boost.</p>\n<p>You're trained in your choice of Nature or Occultism and the Magical Terrain Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat.</p>",
            },
            items: {
                kmtpe: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Expertise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillNat", value: "nature" },
                        { label: "PF2E.SkillOcc", value: "occultism" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Magical Terrain Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "sword-scion": {
        _id: "IuwNiQSSeRMQyDE7",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Sword Scion",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have lived all your life in and around the city of Restov, growing up on tales of Baron Sirian Aldori and the exploits of your home's heroic and legendary swordlords. Joining an expedition into the Stolen Lands seems like a perfect way to improve your skills and begin crafting a legend worthy of Baron Aldori.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Warfare Lore skill. You gain access to Aldori dueling swords and can purchase one as part of your starting equipment. You treat Aldori dueling swords as martial weapons rather than advanced weapons for the purpose of proficiency.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Kingmaker Player's Guide",
            },
            rules: [
                {
                    definition: ["item:aldori-dueling-sword"],
                    key: "MartialProficiency",
                    label: "PF2E.Weapon.Base.aldori-dueling-sword",
                    sameAs: "martial",
                    slug: "aldori-dueling-sword",
                },
            ],
            trainedLore: "Warfare Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "taldan-schemer": {
        _id: "PhqUBXLLkVXb6oUE",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Taldan Schemer",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Shining Kingdoms</p>\n<hr />\n<p>Whether willing or unwilling, you have been involved in the many cutthroat political intrigues within Taldor. You might have been born into it as a member of the aristocracy, or you might have taken an active role in the recent events of the War for the Crown.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                eup60: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Politics Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "tall-tale": {
        _id: "uwZ0emSBFNMGA74j",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tall Tale",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've ridden a tornado, lassoed a river, mooned a dragon under a full moon, and shot six zombies with one bullet. That's what the stories say, anyway, and even if people don't strictly believe them, they are curious about you. Certainly, the stories keep spreading, and it would appear that you either have a unique destiny or are trying to convince the world that you do.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in Performance. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] skill feat. You can gain the @UUID[Compendium.pf2e.feats-srd.Item.Connections] skill feat later without being expert in Society or having Courtly Graces-this represents less traditional social connections and more the way that your legend has spread, and you've learned to leverage your legend, with people wanting to meet you and see you for themselves.</p>",
            },
            items: {
                xvz64: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Impressive Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Impressive Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["prf"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "tapestry-refugee": {
        _id: "n7tPT1SfVTcHjrj3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tapestry Refugee",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Within her magnificent museum demiplane, the sorcerer Hao Jin extracted and preserved countless sites and cultures. The demiplane's unraveling magic forced the Pathfinder Society to evacuate the many inhabitants recently, and you were among the refugees who returned to the Material Plane after centuries of isolation. Whether you joined the Society out of gratitude, curiosity, or desperation, you are hardened by your harrowing flight from your doomed home.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine or Stealth skill, plus a Lore skill related to the terrain you lived in while on the demiplane (such as Cave Lore or Desert Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Assurance] skill feat with the skill you chose to become trained in (Medicine or Stealth).</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 10 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillMed", value: "medicine" },
                        { label: "PF2E.SkillSte", value: "stealth" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    preselectChoices: {
                        assurance: "{item|flags.pf2e.rulesSelections.skill}",
                    },
                    uuid: "Compendium.pf2e.feats-srd.Item.Assurance",
                },
            ],
            trainedLore: "<Terrain> Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "tax-collector": {
        _id: "ixluAGUDZciLEHtb",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tax Collector",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Reviled but required, you were sent when taxes were due. Performing your job might have required travel and persuasion, or perhaps you were responsible for collecting taxes on trade. Either way, it sometimes meant dirty hands, and adventuring seemed the next logical step to you.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Lore skill for the settlement that employed you. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Coercion] skill feat.</p>",
            },
            items: {
                ihsus: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "<City> Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    teacher: {
        _id: "WrKVeUQ6KeRCm9uH",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Teacher",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You are incredibly knowledgeable, skilled, and perhaps even trained to teach children and adults about the world and its wonders. From books to classes, you're committed to imparting knowledge to all. Not everything can be taught or learned from a book, though, so you've become an adventurer to learn subjects more directly and bring that wisdom back to your students.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in your choice of either the Performance or Society skill, as well as the Academia Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Professional] skill feat.</p>",
            },
            items: {
                "2phf2": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Professional",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Professional",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillPrf", value: "performance" },
                        { label: "PF2E.SkillSoc", value: "society" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    teamster: {
        _id: "h98cEl4DY75IL6KJ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Teamster",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You left your home a few months back for a life on the road, working for one caravan company and then another, always on the lookout for a new job and a better life. Last week, you were hired by the Bort Bargith's company in Elidir. You don't know anyone from the company just yet, but most of its members seem to be honest merchants and traders.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Mercantile Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Train Animal] skill feat.</p>",
            },
            items: {
                "7z8e4": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Train Animal",
                    uuid: "Compendium.pf2e.feats-srd.Item.Train Animal",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Adventure: The Fall of Plaguestone",
            },
            rules: [],
            trainedLore: "Mercantile Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "tech-reliant": {
        _id: "2FUdcPsXwoWT1bms",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tech Reliant",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Some event, be it an accident, attack, or disaster, has left you horribly scarred by magic. Your body no longer tolerates magical healing, and you can't use magic, forcing you to rely on gadgets and ingenuity where others trust in spells and magical items. You might have been well-versed in magic before, or barely familiar with its use. This event may have injured your body in visible ways, but no matter the extent of your injuries, your body no longer interacts with healing magic in any capacity.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Medicine skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Battle Medicine] skill feat, and a +1 circumstance bonus to saving throws against spells. Healing spells, healing magic items, and magical effects with the healing trait have no effect on you.</p>",
            },
            items: {
                "5002m": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Battle Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Battle Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    key: "FlatModifier",
                    predicate: [
                        { or: ["arcane", "divine", "primal", "occult", "item:type:spell"] },
                    ],
                    selector: "saving-throw",
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["cra", "med"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "thassilonian-delver": {
        _id: "vjhB0ZTV9OZgSuSz",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Thassilonian Delver",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As archaeologists uncovered and explored ever-larger numbers of Thassilonian ruins, you were among the eager explorers who sought out the Runelords' ancient secrets. You may have been the apprentice to another Pathfinder who perished on an expedition, leaving you their discoveries and notes. Or perhaps you explored several of these sites yourself, quickly learning to parse the arcane secrets before lest the eldritch magic extinguish your life.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Thassilonian History Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Arcane Sense] skill feat. Add <strong>Thassilonian</strong> to the list of additional languages you can learn for having a high Intelligence modifier.</p>\n<hr />\n<p><strong>Special</strong> You can select this background only if you have earned credit for at least 5 First Edition scenarios from Season 4 of the Pathfinder Society organized play campaign.</p>",
            },
            items: {
                "56qln": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Arcane Sense",
                    uuid: "Compendium.pf2e.feats-srd.Item.Arcane Sense",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Organized Play Foundation",
            },
            rules: [],
            trainedLore: "Thassilonian History Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "thassilonian-traveler": {
        _id: "su8y75pGMVTUsNHK",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Thassilonian Traveler",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Saga Lands</p>\n<hr />\n<p>You come from ancient Thassilon, one of the citizens that appeared out of time alongside the city of Xin-Edasseril. You know many things that have been long forgotten... along with many things that are no longer correct.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Thassilon Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Dubious Knowledge] skill feat.</p>",
            },
            items: {
                o51zt: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Dubious Knowledge",
                    uuid: "Compendium.pf2e.feats-srd.Item.Dubious Knowledge",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Thassilon Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "thrill-seeker": {
        _id: "2UXBsyJFimwYOUFQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Thrill-Seeker",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You once survived a life-or-death situation and found it surprisingly exhilarating, so now you chase that feeling of invincibility you only get when dancing with death. Your desire for exhilaration has you scaling buildings, leaping off rooftops, jumping chasms, and performing other deathdefying stunts.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You are trained in the Athletics skill and the Engineering Lore skill. You gain the Combat Climber skill feat.</p>",
            },
            items: {
                OciPK: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Combat Climber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Combat Climber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [],
            trainedLore: "Engineering Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "thrune-loyalist": {
        _id: "m1vRLRHTpCrgk89G",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Thrune Loyalist",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Old Cheliax</p>\n<hr />\n<p>Despite the setbacks Cheliax has suffered recently, your loyalties lie with the devil-backed House Thrune. You consider the current queen to be the rightful ruler of your homeland, and you are willing to act against her enemies.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Hell Lore skill You gain the @UUID[Compendium.pf2e.feats-srd.Item.Student of the Canon] skill feat.</p>",
            },
            items: {
                nl2mz: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Student of the Canon",
                    uuid: "Compendium.pf2e.feats-srd.Item.Student of the Canon",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Hell Lore",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "thuvian-unifier": {
        _id: "MslumKt6iwJ85GKZ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Thuvian Unifier",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Golden Road</p>\n<hr />\n<p>You believe the city-states of Thuvia should be united into one nation under the rule of your home city (most commonly Aspenthar), and you're willing to do whatever it takes to make it happen.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Coercion] skill feat.</p>",
            },
            items: {
                "5y5lm": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Quick Coercion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Quick Coercion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Politics Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "tide-watcher": {
        _id: "5Oh9SdD4rhwlpHzg",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tide Watcher",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Where you hail from, the ocean is the lifeblood of your community; knowing how it changes according to the moon was integral to everyday life. You've studied the moon's phases to predict the rise and fall of the ocean waters. Eventually, you gained a supernatural ability to foretell to some degree of accuracy the coming of more severe changes, such as tidal waves or encroaching storms. At times, it fell on you to warn settlements of such oncoming natural disasters.</p>\n<p>Choose two ability boosts. One must be to Charisma or Intelligence, and one is a free ability boost.</p>\n<p>You're trained in Nature and Ocean Lore. During the night when you can see the moon, you gain a +1 circumstance bonus to Survival checks to discern weather patterns and predict upcoming weather conditions-this bonus increases to +2 if you're in the vicinity of the ocean.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Travel Guide",
            },
            rules: [
                {
                    domain: "survival",
                    key: "RollOption",
                    label: "PF2E.SkillVariant.NearTheOcean",
                    option: "near-the-ocean",
                    toggleable: true,
                },
                {
                    domain: "survival",
                    key: "RollOption",
                    label: "PF2E.SkillVariant.NighttimeWithMoonVisible",
                    option: "nighttime-with-visible-moon",
                    toggleable: true,
                },
                {
                    domain: "survival",
                    key: "RollOption",
                    label: "PF2E.SkillVariant.DiscernAndPredictWeather",
                    option: "discern-weather",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.DiscernAndPredictWeather",
                    predicate: ["discern-weather", "nighttime-with-visible-moon"],
                    selector: "survival",
                    type: "circumstance",
                    value: 1,
                },
                {
                    key: "FlatModifier",
                    label: "PF2E.SkillVariant.DiscernAndPredictWeather",
                    predicate: [
                        "discern-weather",
                        "nighttime-with-visible-moon",
                        "near-the-ocean",
                    ],
                    selector: "survival",
                    type: "circumstance",
                    value: 2,
                },
            ],
            trainedLore: "Ocean Lore",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "time-traveler": {
        _id: "IOcjPmcemrQFFb2b",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Time Traveler",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You come from a different time. Whether by your own doing or a terrible accident, powerful magic has resulted in you coming to this time from the future or from the past, but you are unable to return. You might be from New Thassilon, an entire nation of time travelers.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You are trained in three Lore skills of your choice that represent your knowledge from your old time. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Bend Time] reaction.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Secrets of Magic",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Bend Time",
                },
            ],
            trainedLore: "<Three Different> Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    tinker: {
        _id: "i79pgNIAtJfkkOiw",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tinker",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Creating all sorts of minor inventions scratches your itch for problem-solving. Your engineering skills take a particularly creative bent, and no one know what you'll come up with next. It might be a genius device with tremendous potential or it might explode.</p>\n<p>Choose two attribute boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Crafting skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat.</p>",
            },
            items: {
                wts6h: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Specialty Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Engineering Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "tomb-born": {
        _id: "eGPlKAoYBTUqjyrr",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tomb Born",
        system: {
            boosts: {
                "0": { value: ["con", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your parents conceived you for a fell purpose at a site tainted by death, like a wight's barrow, mass grave, or ossuary. Their reasons could be a mystery, or you might know of their grand design and seek to escape-or fulfill-their plans. Either way, you're at your most dangerous when near death.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Undead Lore skill. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Final Spite] reaction.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Final Spite",
                },
            ],
            trainedLore: "Undead",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "total-power": {
        _id: "JBRBb2818DZ4hjXw",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Total Power",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether you desire simple security after a life of uncertainty or you're actually just a control freak, power over your own fate is the thing you've always wanted. On the night of the Missing Moment, you glimpsed such power amid the light of a glowing archway, and you stepped through, eager to claim control over your destiny. What happened next, you don't remember—you came to at the same place you'd started, though clearly a lot of time had passed. Ever since that night, your body has felt heavier than before. You soon discovered that you could will your very bones into extending from your flesh like thorns from a rose's stem. Though you didn't choose the title gatewalker for yourself, you're sure you can use your strange new power to exercise control over your life.</p>\n<p>Your deviant abilities are of the troll classification. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Bone Spikes] deviant feat. As a quirk, whenever you use a deviant ability, the very fibers of your muscles flex and expand to impossible proportions. Your actual strength remains the same during these times, but few can deny your fearsome appearance.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Legal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            items: {
                w2FQs: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Intimidating Glare",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Gatewalkers Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Bone Spikes",
                },
            ],
            trainedLore: "Legal Lore",
            trainedSkills: { custom: "", value: ["itm"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "touched-by-dahak": {
        _id: "4naQmCXBl0007c2W",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Touched by Dahak",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>[Legacy - Age of Ashes]</strong></p>\n<p>As the manifestation of Dahak was destroyed, a shard of the dragon god's wrathful nature infused you, resulting in a violent temper, strange apocalyptic dreams, an obsession with dragon hunting, or some other touch of his influence.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Dragon Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Titan Wrestler] skill feat.</p>",
            },
            items: {
                uy8ld: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Titan Wrestler",
                    uuid: "Compendium.pf2e.feats-srd.Item.Titan Wrestler",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder #150: Broken Promises",
            },
            rules: [],
            trainedLore: "Dragon Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    toymaker: {
        _id: "Sj91CUyEUeWoPh2R",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Toymaker",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You delight in making little trinkets for children of all ages, and seeing their faces light up thanks to one of your creations brings joy to your heart. Perhaps you sell your wares from a particular shop or from the back of a wagon as you travel from town to town.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Mercantile Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat, choosing Artistry, Blacksmithing, Glassmaking, Leatherworking, Tailoring, or Woodworking as your specialty.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SpecialtyCrafting.Artistry",
                            value: "artistry",
                        },
                        {
                            label: "PF2E.SpecificRule.SpecialtyCrafting.Blacksmithing",
                            value: "blacksmithing",
                        },
                        {
                            label: "PF2E.SpecificRule.SpecialtyCrafting.Glassmaking",
                            value: "glassmaking",
                        },
                        {
                            label: "PF2E.SpecificRule.SpecialtyCrafting.Leatherworking",
                            value: "leatherworking",
                        },
                        {
                            label: "PF2E.SpecificRule.SpecialtyCrafting.Tailoring",
                            value: "tailoring",
                        },
                        {
                            label: "PF2E.SpecificRule.SpecialtyCrafting.Woodworking",
                            value: "woodworking",
                        },
                    ],
                    flag: "toymaker",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.SpecialtyCrafting.Prompt",
                },
                {
                    key: "GrantItem",
                    preselectChoices: {
                        specialtyCrafting: "{item|flags.pf2e.rulesSelections.toymaker}",
                    },
                    uuid: "Compendium.pf2e.feats-srd.Item.Specialty Crafting",
                },
            ],
            trainedLore: "Mercantile",
            trainedSkills: { custom: "", value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "trade-consortium-underling": {
        _id: "tcsSxwkl4wCsfO3k",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Trade Consortium Underling",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Absalom and Starstone Isle</p>\n<hr />\n<p>Your experience as a ledger-keeper for one of Absalom's trade guilds has made you a canny investor and shrewd entrepreneur.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Business Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Experienced Professional] skill feat.</p>",
            },
            items: {
                o2re4: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Experienced Professional",
                    uuid: "Compendium.pf2e.feats-srd.Item.Experienced Professional",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Business Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    trailblazer: {
        _id: "LwAu4r3uocYfpKA8",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Trailblazer",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Uncharted realms have always intrigued you, and you've explored and mapped large territories in service to merchants, governments, or your own curiosity. Where some see a blank spot on a map, you see the potential for something new and undiscovered.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill and the Cartography Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat with one terrain you've explored (such as forest or underground).</p>",
            },
            items: {
                hszl0: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Expertise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Pathfinder Society Guide",
            },
            rules: [],
            trainedLore: "Cartography Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    translator: {
        _id: "7AfixHrjbXgDPPkp",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Translator",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In your youth, you learned to transcribe books and translate scrolls to preserve knowledge or perhaps to aid wealthy merchants and politicians. Whether you set out to make your own fortune or are drawn to decipher the strangest codes, your linguistic training will guide your discoveries.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Scribing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] skill feat.</p>",
            },
            items: {
                yqlay: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Multilingual",
                    uuid: "Compendium.pf2e.feats-srd.Item.Multilingual",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Pathfinder Society Guide",
            },
            rules: [],
            trainedLore: "Scribing Lore",
            trainedSkills: { value: ["soc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "truth-seeker": {
        _id: "TC7jpN5EA4UBIYep",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Truth Seeker",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether you are a local or from out of town, you've heard rumors that Breachill's past contains a hidden secret. Perhaps you've heard strange rumors that the town's founder, Lamond Breachton, was not the hero everyone touts, or maybe your grandmother heard stories from her own grandmother that contradict the town's accepted narrative of its establishment. In the pursuit of the truth, you've learned to navigate the tangles of politics, and to never take anyone's word at face value.</p>\n<p>You plan to join the Call for Heroes so that you can make yourself known to the council, or perhaps even ingratiating yourself to them, so you can seek the truth and eventually uncover Breachill's secrets!</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lie to Me]{Lie To Me} skill feat.</p>",
            },
            items: {
                llxv2: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lie To Me",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lie to Me",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Age of Ashes Player's Guide",
            },
            rules: [],
            trainedLore: "Politics Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "tyrant-witness": {
        _id: "90vPOBrSXY27k0bL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Tyrant Witness",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>When Tar-Baphon broke free of Gallowspire, you saw him emerge. When the god-slaying lich obliterated Vigil and Roslar's Coffer, you scrambled to safety. And when necrotic rainfall swept through the lands and the Gallowgarden grew, you weathered the storms. Others talk of what the Whispering Tyrant's return did to Lastwall, but you were there. And it changed you.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Undead Lore skill. You can cast <em>@UUID[Compendium.pf2e.spells-srd.Item.Vitality Lash]{Disrupt Undead}</em> as a divine innate cantrip. As normal, the cantrip heightens to half your level rounded up.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Knights of Lastwall",
            },
            rules: [],
            trainedLore: "Undead",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "ulfen-raider": {
        _id: "V3nYEAhyA54RtYky",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ulfen Raider",
        system: {
            boosts: {
                "0": { value: ["cha", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Saga Lands</p>\n<hr />\n<p>You are an Ulfen warrior, feared among Avistan for the merciless and devastating raids your people once conducted along the shores. Though the days of these Ulfen raids are largely past, you have been trained to strike terror into the hearts of those who face you.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Intimidation skill and the Sailing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            items: {
                leo7o: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Intimidating Glare",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Sailing Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "undercover-contender": {
        _id: "Am8kwC9c2GQ5bJAW",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Undercover Contender",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Gangsters and cheats seem as drawn to the Ruby Phoenix Tournament as piranhas to a bloody hippo, and you're dead set on making sure this tournament is as scandal-free as possible. Your reasons are your own - maybe a high-ranking official in Goka has tasked you with the case, or maybe foul play led to losing someone dear to you in the last tournament. Maybe you just hate to see fair fighters get knocked out by crooked contenders. Whatever your motives, you've promised to be in the ring in case anyone tries to derail the contest. The Golden League crime syndicate is the most obvious suspect, what with their meddling in the Ruby Phoenix Tournament a decade ago, but maybe there will be others - unscrupulous contenders trying to pull one over on Hao Jin, perhaps, or an entirely new devious conspiracy hoping to hijack the event for their own evil purposes. In any case, you'll be around to deliver the hammer of justice. You've told a small squad of your closest confidants about your mission, and you've managed to secure a spot in the tournament's prequalifier along with them. You and your team have to win fights to stay in the competition long enough to make sure things go smoothly. If that means you end up being the Ruby Phoenix Champions, all the better.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in Deception and the Underworld Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Lengthy Diversion] skill feat.</p>",
            },
            items: {
                pmho7: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lengthy Diversion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lengthy Diversion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Fists of the Ruby Phoenix Player's Guide",
            },
            rules: [],
            trainedLore: "Underworld",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "undercover-lotus-guard": {
        _id: "86TbxxwfpWjScwSQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Undercover Lotus Guard",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>It's a well-known secret that for every playhouse in the Ivy District, there's an underground criminal element lurking somewhere in the shadows. To get intel on the occultists, assassins, and thieves' guilds that pull the strings of power in the Ivy District, the Lotus Guard trains some of the best undercover agents and operatives in all of Absalom. You're one such agent, and you've put your life on the line more times than you can count by getting close to the Ivy's most dangerous criminals. Your risky missions and thrill-seeking derring-do have earned you many accolades-but also no shortage of enemies.</p>\n<p>You transferred to the Edgewatch after your cover was unexpectedly blown and you needed a safe place to lie low away from the Ivy District. With your mastery of disguise and your ability to confidently converse with criminal masterminds, it won't be long before you've made yourself an indispensable undercover operator in this precinct as well.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Deception skill, Art Lore, <strong>and</strong> Underworld Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to Interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] skill feat.</p>",
            },
            items: {
                hqa2u: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Charming Liar",
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Agents of Edgewatch Player's Guide",
            },
            rules: [
                {
                    key: "FlatModifier",
                    label:
                        "Interacting with Lotus Guards and high-ranking criminals (Undercover Lotus Guard)",
                    predicate: [
                        { or: ["target:lotus-guard", "target:high-rank-criminal"] },
                    ],
                    selector: ["deception", "diplomacy", "intimidation"],
                    type: "circumstance",
                    value: 1,
                },
            ],
            trainedLore: "Art Lore and Underworld Lore",
            trainedSkills: { value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "undersea-enthusiast": {
        _id: "Ty8FRM0k262xuHfF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Undersea Enthusiast",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - High Seas</p>\n<hr />\n<p>You love diving and exploring the world beneath the waves, and long periods of swimming have trained you to move easily through the water. You're also fascinated by undersea creatures and cultures-and may even have a trace of one of them in your own lineage.</p>\n<p>Choose two ability boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Ocean Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat.</p>",
            },
            items: {
                "48zjn": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Underwater Marauder",
                    uuid: "Compendium.pf2e.feats-srd.Item.Underwater Marauder",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Ocean Lore",
            trainedSkills: { value: ["ath"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    undertaker: {
        _id: "2Mm0BHMJZhqIqoQG",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Undertaker",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>People die. This is the unfortunate fact of life on which you've founded your business, because wherever people die, there is a demand for mortuary services. You might be a Pharasmin priest or a secular professional, but your job is seeing to the body, comforting the bereaved, and making sure that the deceased goes to their ultimate reward with all due dignity. Of course, someone in your position sees a lot of strange deaths, and chances are one of them set you on the road to adventure.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Medicine skill and a Lore skill specializing in one local type of undead. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forensic Acumen] skill feat.</p>",
            },
            items: {
                o5yn4: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forensic Acumen",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forensic Acumen",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["med"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "union-representative": {
        _id: "T8YNd9Jg6XBJvNBQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Union Representative",
        system: {
            boosts: {
                "0": { value: ["cha", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You might have fought for fairer ore distribution for the Metalmaker's Union, higher chef's pay in the Provisioners' Union, or better mercenary contracts for the Union of Axe and Coin. Whatever the case, you have experience in the high-stakes world of the negotiating table, experience that translates surprisingly well to adventuring.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Charisma</strong>, the other is a free boost.</p>\n<p>You're trained in the Diplomacy skill and the Legal Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Contract Negotiator] skill feat.</p>",
            },
            items: {
                WWbNU: {
                    img: "icons/sundries/books/book-red-exclamation.webp",
                    level: 1,
                    name: "Contract Negotiator",
                    uuid: "Compendium.pf2e.feats-srd.Item.Contract Negotiator",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Highhelm",
            },
            rules: [],
            trainedLore: "Legal Lore",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    unremarkable: {
        _id: "xkRZUxWna7BcNnHZ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Unremarkable",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Your face is particularly unremarkable, even if your presence or actions may not be. You know how to use this to your advantage, making it difficult for people to identify and collect information about you.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You are trained in the Deception skill and the Acting Lore skill. You gain the Lengthy Diversion skill feat.</p>",
            },
            items: {
                "8ocYQ": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Lengthy Diversion",
                    uuid: "Compendium.pf2e.feats-srd.Item.Lengthy Diversion",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: Firebrands",
            },
            rules: [],
            trainedLore: "Acting Lore",
            trainedSkills: { custom: "", value: ["dec"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    unsponsored: {
        _id: "l5Kj0owzxfPcTvIb",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Unsponsored",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You have aspirations of attending the Magaambya academy of magic, but fate seemed to thwart you at every turn. You were unable to obtain a sponsorship and lost a collection of helpful textbooks to unexpected insect damage. You nevertheless made the long trip to Nantambu through terrible weather, uncharacteristically bad roads, and indifferent fellow travelers. Yet you have persevered. Now that you are here, alone but determined, you won't let anything stand in your way.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in your choice of the Diplomacy or Intimidation skill. You gain a skill feat: @UUID[Compendium.pf2e.feats-srd.Item.Group Impression] if you chose Diplomacy or @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] if you chose Intimidation. You're also trained in Academia Lore.</p>\n<p>Your recommended primary branch is the Tempest-Sun Mages.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Strength of Thousands Player's Guide",
            },
            rules: [
                {
                    adjustName: false,
                    choices: [
                        { label: "PF2E.SkillDip", value: "diplomacy" },
                        { label: "PF2E.SkillItm", value: "intimidation" },
                    ],
                    flag: "skill",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.Prompt.Skill",
                    rollOption: "unsponsored",
                },
                {
                    key: "ActiveEffectLike",
                    mode: "upgrade",
                    path: "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
                    value: 1,
                },
                {
                    key: "GrantItem",
                    predicate: ["unsponsored:diplomacy"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Group Impression",
                },
                {
                    key: "GrantItem",
                    predicate: ["unsponsored:intimidation"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            ],
            trainedLore: "Academia Lore",
            trainedSkills: { custom: "", value: [] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    "ustalavic-academic": {
        _id: "x2y25cE98Eq4qxbu",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ustalavic Academic",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>You were educated at a famed Ustalavic academy, such as the University of Lepidstadt or the Sincomakti School of Sciences, and received quality instruction in advanced concepts of mathematics, science, and engineering.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Academia Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Skill Training] skill feat.</p>",
            },
            items: {
                ftnjp: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Skill Training",
                    uuid: "Compendium.pf2e.feats-srd.Item.Skill Training",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Academia Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "varisian-wanderer": {
        _id: "uNhdcyhiog7YvXPT",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Varisian Wanderer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Saga Lands</p>\n<hr />\n<p>You have spent your youth wandering the lands of Varisia and beyond among the brightly painted wagons of a Varisian caravan. You have heard endless tales of your people's history and lore, and have learned many songs and stories from the disparate people you have met.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and the Circus Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Fascinating Performance] skill feat.</p>",
            },
            items: {
                "29ij0": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Fascinating Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Fascinating Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Circus Lore",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "vidrian-reformer": {
        _id: "mrkgVjiEdlPjLUsN",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Vidrian Reformer",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Mwangi Expanse</p>\n<hr />\n<p>You know that the only way your homeland of Vidrian can remain free from outside conquerors is by forging a strong and unified government. As such, you seek to bind your fellow citizens together through careful diplomacy and force of personality-or, if necessary, subterfuge and intrigue.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill and the Politics Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Hobnobber] skill feat.</p>",
            },
            items: {
                d0exc: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Hobnobber",
                    uuid: "Compendium.pf2e.feats-srd.Item.Hobnobber",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Politics Lore",
            trainedSkills: { value: ["dip"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "wandering-preacher": {
        _id: "UFHezf1LXUwcQIAQ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Wandering Preacher",
        system: {
            boosts: {
                "0": { value: ["con", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>While you once spoke to a small congregation in a ramshackle church, those days are behind you now. Your church was destroyed, your congregants scattered, and now you meander the lands holding a worn copy of your religious text in one hand, and a fiery conviction in the other.</p>\n<p>Choose two ability boosts. One boost must be to <strong>Constitution</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and a Lore skill associated with the deity you preach for (such as Pharasmin Lore). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pilgrim's Token] skill feat.</p>",
            },
            items: {
                bcwu2: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pilgrim's Token",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pilgrim's Token",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    wanderlust: {
        _id: "b1588nhgRoYMef44",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Wanderlust",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You've traveled the world for years in search of excitement and adventure. On the night of the Missing Moment, all the many exciting occasions you've experienced paled in comparison to the vision of fantastic lands and incredible people you saw on the other side of the glowing gate. You stepped through in the hopes of finally reaching the thrilling highs you so desperately seek, but as soon as you'd gone there you were again, standing in front of a lightless gateway with a months-long gap in your memories. Frustrated at having come so close to achieving your dreams, you swung at a nearby tree, smashing it to splinters with surprising strength you never knew you had. This strange new brawn wasn't what you asked for—but it might help you pursue the excitement you crave.</p>\n<p>Your deviant abilities are of the troll classification. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Titan Swing] deviant feat. As a quirk, whenever you use a deviant ability, your feet elongate and your leg bones crack as your lower limbs transform into those of a rabbit, wolf, or other spry, long-heeled animal.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill and the Stabling Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Express Rider] skill feat.</p>",
            },
            items: {
                Q8Ygg: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Express Rider",
                    uuid: "Compendium.pf2e.feats-srd.Item.Express Rider",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Gatewalkers Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Titan Swing",
                },
            ],
            trainedLore: "Stabling Lore",
            trainedSkills: { custom: "", value: ["nat"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "wanted-witness": {
        _id: "wZikbWmCWYpjFxQF",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Wanted Witness",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You saw something you shouldn't have, plain and simple. The shame is that you don't even know what it is, exactly, that you saw.</p>\n<p>After moving to Alkenstar, you swiftly fell in love with the City of Smog, but you found it difficult to get a foothold in the fast-paced metropolis. Luckily, a chance invitation promised good work for someone with your unique social talents. You went to an inconspicuous chamber in a humble tower somewhere in the Capital District. There, you met some clearly powerful, clearly corrupt members of the Alkenstar elite. Among the faces you recognized were the notorious mogul Ambrost Mugland and the steely-eyed shieldmarshal Anjelique Loveless. Before you were asked to leave, you made quite an impression-but not a good one.</p>\n<p>Not only did you not make the cut for whatever kinds of jobs were on offer that day, but you soon discovered that you couldn't get a room at any inn in the city, and there were wanted posters with your name on them plastered all over town. Friends and families turned their backs on you, afraid to get involved. Clearly, someone at that meeting-Mugland, maybe, or perhaps Loveless- believed you were a liability, and they had you excised from Alkenstar society. All you want is to be able to walk the streets without fearing for your life, and there's only one way to make that happen: find the villains responsible for your predicament and get them to undo the curse now attached to your name.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Alkenstar Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Read Lips] skill feat.</p>",
            },
            items: {
                wk57a: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Read Lips",
                    uuid: "Compendium.pf2e.feats-srd.Item.Read Lips",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Outlaws of Alkenstar Player's Guide",
            },
            rules: [],
            trainedLore: "Alkenstar Lore",
            trainedSkills: { custom: "", value: ["soc"] },
            traits: { rarity: "uncommon", value: [] },
        },
        type: "background",
    },
    ward: {
        _id: "IXxdCzBS0xP20ckw",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Ward",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>When you were young, you became the ward of another house-boarded, fed, and educated, but never quite a part of the family. Perhaps you had to tend to their needs in return for feeding and raising you, or perhaps you were provided for but disregarded. Now, adventuring is your chance to grow and roam free.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and the Genealogy Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Fascinating Performance] skill feat.</p>",
            },
            items: {
                rdv0j: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Fascinating Performance",
                    uuid: "Compendium.pf2e.feats-srd.Item.Fascinating Performance",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Advanced Player's Guide",
            },
            rules: [],
            trainedLore: "Genealogy Lore",
            trainedSkills: { value: ["prf"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    warrior: {
        _id: "r0kYIbN06Cv8eNG3",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Warrior",
        system: {
            boosts: {
                "0": { value: ["con", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>In your younger days, you waded into battle as a mercenary, a warrior defending a nomadic people, or a member of a militia or army. You might have wanted to break away from the regimented structure of these forces, or you could have always been as independent a warrior as you are now.</p>\n<p>Choose two attribute boosts. One must be to <strong>Strength</strong> or <strong>Constitution</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Intimidation skill and the Warfare Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
            },
            items: {
                wkfyj: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Intimidating Glare",
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
            },
            publication: {
                license: "ORC",
                remaster: true,
                title: "Pathfinder Player Core",
            },
            rules: [],
            trainedLore: "Warfare Lore",
            trainedSkills: { value: ["itm"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "waste-walker": {
        _id: "9l6q90sk8UM292CY",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Waste Walker",
        system: {
            boosts: {
                "0": { value: ["str", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Whether you grew up in the Mana Wastes or another similarly desolate place, you quickly learned that only the strong survive. You and your family were forced to evade monsters, mutants, wild magic, and worse, as each new day heralded the possibility of a danger or threat you'd never seen before. You learned to adapt to the worst possible conditions and how to forage and survive in a place few others would dare to live.</p>\n<p>Choose two ability boosts. One boost must be to <strong>Strength</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Survival skill, and Mana Wastes Lore (or another similar Lore skill associated with the wastes where you grew up). You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat.</p>",
            },
            items: {
                "6oavh": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Forager",
                    uuid: "Compendium.pf2e.feats-srd.Item.Forager",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [],
            trainedLore: "Mana Wastes",
            trainedSkills: { custom: "", value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "whispering-way-scion": {
        _id: "aisuJF1A98bHfkLH",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Whispering Way Scion",
        system: {
            boosts: {
                "0": { value: ["int", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Eye of Dread</p>\n<hr />\n<p>Your family has long been associated with the enigmatic death cult known as the Whispering Way, which was recently responsible for the terrible devastation in the nation of Lastwall. Whether or not you have followed in their footsteps, you know many of the philosophy's secrets.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Religion skill and the Undead Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Student of the Canon] skill feat.</p>",
            },
            items: {
                v396h: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Student of the Canon",
                    uuid: "Compendium.pf2e.feats-srd.Item.Student of the Canon",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Undead Lore",
            trainedSkills: { value: ["rel"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "wildwood-local": {
        _id: "R1v4gUu8oRMoOASM",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Wildwood Local",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Shining Kingdoms</p>\n<hr />\n<p>You might have been born and raised among the druids of the Verduran Forest, or you may have spent time among them as an adult and come to know their ways.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Nature skill as well as the Forest Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Natural Medicine] skill feat.</p>",
            },
            items: {
                zmomz: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Natural Medicine",
                    uuid: "Compendium.pf2e.feats-srd.Item.Natural Medicine",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Forest Lore",
            trainedSkills: { value: ["nat"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "willing-host": {
        _id: "ykYaQwIX7sxvbhwc",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Willing Host",
        system: {
            boosts: {
                "0": { value: ["cha", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>You speak to spirits only you can perceive: wispy shreds of lost souls, household guardians, ancestral spirits, and other entities. You can negotiate with these beings, allowing them into your body to impart knowledge or aid in a task for the price of a favor.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Spirit Lore skill. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Host Spirit] action.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Book of the Dead",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.actionspf2e.Item.Host Spirit",
                },
            ],
            trainedLore: "Spirit",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "willowshore-urchin": {
        _id: "0oTvU8dNFcT42CWV",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Willowshore Urchin",
        system: {
            boosts: {
                "0": { value: ["dex", "str"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>As with any settlement, not all of Willowshore's citizens are born into easy lives. You grew up on the town streets, either as an orphan or hardscrabble youth who was forced at a young age to help provide for your family. You might technically have had a home of your own, but for various reasons, you had, or preferred, to live most of your childhood outside of those walls. You might have run with a gang of kids (some of whom might even be fellow PCs), or you could've been a loner who managed to survive against all odds. Regardless, your childhood was one of forced ingenuity, desperation, and physicality. Hardly a week would've passed without you having to jury-rig a solution to some problem or to simply use your reflexes or brawn to solve a situation quickly before things escalated. While you might have left your old life behind you now that you're all grown up, the time you spent on Willowshore's streets have made you the person you are today.</p>\n<p>You might still be technically homeless, subsisting on the street and never sleeping in the same place twice in a row. You might keep a small shanty or hideout somewhere in town as well. It's also possible that, despite your childhood, you've been fortunate enough to find a family or home, in which case your home could be anywhere in Willowshore.</p>\n<p>During the Reenactment Festival, you likely enjoyed the revelry... perhaps a bit too much! Festivals were always times of excitement in your childhood, and this one is no exception. You were chosen to be an abductee during the Reenactment Festival simply by chance—maybe your name was selected by a blind draw, or perhaps someone dared you to take part, or you could simply have craved the attention.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Strength</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Athletics skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Charming Liar] feat.</p>\n<p>@UUID[Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Willowshore Urchin)]</p>\n<hr />\n<p>You can add one of the following two adjustments to any background to further modify your choice to match your vision for your PC.</p>\n<p><strong>Family:</strong> You and one (or more) other PCs are close family members (siblings, parent/child, married, etc.) If you take this adjustment, the other PC(s) who are your family must also take this adjustment. Choose one of the following to replace the skill feat you otherwise would've gained from your background. (You and your sibling need not share the same choice—a sibling who wants to keep their background's skill feat can pick \"Typical\" from the list.)</p>\n<ul>\n<li><strong>Bickering:</strong> You have a long-standing feud with your sibling(s). Whenever your sibling(s) critically fail a significant skill check or attack roll and you witness their failure, you gain a +1 status bonus to your saving throws until the end of your next turn as you secretly (or perhaps not so secretly) delight in their failure. @UUID[Compendium.pf2e.campaign-effects.Item.Effect: Bickering Family]</li>\n<li><strong>Close-Knit:</strong> You and your sibling(s) work well together, and you go all-out to help them when they're badly hurt. When you provide @UUID[Compendium.pf2e.actionspf2e.Item.Aid] or @UUID[Compendium.pf2e.actionspf2e.Item.Administer First Aid] to your sibling(s), the DC is 5 lower than normal.</li>\n<li><strong>Typical:</strong> You have a standard relationship with your sibling(s); don't change your background's skill feat.</li>\n</ul>\n<p><strong>Foundling:</strong> You aren't a native to Willowshore, but you did grow up in the town. You might have adoptive parents, or you could've grown up on the streets. Choose one of the following to replace the bonus feat you otherwise would've gained from your background.</p>\n<ul>\n<li><strong>Bitter:</strong> You appreciate the town of Willowshore but still resent the conditions that resulted in you being abandoned or left in the town. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</li>\n<li><strong>Mysterious:</strong> You keep secrets, and very few in Willowshore (if anyone) know your history before you settled in the town, in part because you've taken to learning about Willowshore by watching rather than engaging in conversation. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] skill feat.</li>\n<li><strong>Outgoing:</strong> You're grateful for the sense of belonging the townsfolk of Willowshore have extended to you and always do your best to repay that kindness. Once per week when you attempt a skill check to resolve a downtime activity that could benefit Willowshore (several of these activities are detailed in the adventures, and your GM can always make the call if another activity would qualify) and you fail that check, you instead succeed at the check, or if you critically fail at that check, you instead simply fail that check.</li>\n</ul>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Season of Ghosts Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.adventure-specific-actions.Item.Seasonal Boon (Willowshore Urchin)",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Family",
                            value: "family",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Foundling",
                            value: "foundling",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.NoAdjustment",
                            value: "none",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.Prompt",
                    rollOption: "background-variant",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bickering",
                            value: "bickering",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.CloseKnit",
                            value: "close-knit",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Typical",
                            value: "typical",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:family"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FamilyPrompt",
                    rollOption: "background-variant:family",
                },
                {
                    choices: [
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Bitter",
                            value: "bitter",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Mysterious",
                            value: "mysterious",
                        },
                        {
                            label: "PF2E.SpecificRule.SeasonOfGhosts.Background.Outgoing",
                            value: "outgoing",
                        },
                    ],
                    flag: "variant",
                    key: "ChoiceSet",
                    predicate: ["background-variant:foundling"],
                    prompt: "PF2E.SpecificRule.SeasonOfGhosts.Background.FoundlingPrompt",
                    rollOption: "background-variant:foundling",
                },
                {
                    key: "GrantItem",
                    predicate: [
                        {
                            or: [
                                "background-variant:none",
                                "background-variant:family:typical",
                            ],
                        },
                    ],
                    uuid: "Compendium.pf2e.feats-srd.Item.Charming Liar",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:bitter"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Intimidating Glare",
                },
                {
                    key: "GrantItem",
                    predicate: ["background-variant:foundling:mysterious"],
                    uuid: "Compendium.pf2e.feats-srd.Item.Streetwise",
                },
            ],
            trainedLore: "Engineering Lore",
            trainedSkills: { custom: "", value: ["ath"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "winters-child": {
        _id: "SJ3nNOI5A8A4hK0Q",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Winter's Child",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Saga Lands</p>\n<hr />\n<p>Your or one of your ancestors hails from Irrisen, and some spark of the icy region's magic has manifested itself within your bones. The blood of Baba Yaga's legacy runs in your veins, and you are at one with the mysteries and dangers of the frozen land.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Arcana skill and the Weather Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Arcane Sense] skill feat.</p>",
            },
            items: {
                k3n7x: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Arcane Sense",
                    uuid: "Compendium.pf2e.feats-srd.Item.Arcane Sense",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Weather Lore",
            trainedSkills: { value: ["arc"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "wish-for-riches": {
        _id: "vMyMUZpg8MYZT2AZ",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Wish for Riches",
        system: {
            boosts: {
                "0": { value: ["cha", "dex"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>On the night of the Missing Moment, you saw visions of fabulous riches in the gate before you. Honestly, how someone could see anything but piles of jewels and gold is utterly baffling to you. Having pined for material wealth for as long as you could remember, you practically sprang into the portal in hopes of securing your fortune. The next moment, however, you were standing right where you'd just been, though indeterminate time had passed. The night's cold hardly bothered you; in fact, you soon discovered that you could absorb the very chill in the air, in the process changing the appearance of everything around you into a sheen of finest silver. You're no richer than before you walked through the gate, unfortunately, but perhaps you could use this new power somehow to pursue your avarice anew.</p>\n<p>Your deviant abilities are of the dragon classification. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Consume Energy] deviant feat with the cold type. As a quirk, your deviant abilities manifest in a silver hue, and when you use a deviant ability you absorb the color silver from your surroundings. The absorbed color returns to your surroundings within an hour.</p>\n<p>Choose two ability boosts. One must be to <strong>Charisma</strong> or <strong>Dexterity</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Thievery skill and the Games Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Subtle Theft] skill feat.</p>",
            },
            items: {
                eGyHW: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Subtle Theft",
                    uuid: "Compendium.pf2e.feats-srd.Item.Subtle Theft",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Gatewalkers Player's Guide",
            },
            rules: [
                {
                    key: "GrantItem",
                    uuid: "Compendium.pf2e.feats-srd.Item.Consume Energy",
                },
            ],
            trainedLore: "Games Lore",
            trainedSkills: { custom: "", value: ["thi"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "wished-alive": {
        _id: "O4xKRtHb21DCTvQ0",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Wished Alive",
        system: {
            boosts: {
                "0": { value: ["cha", "con"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Once you were a simple construct or inanimate doll, but due to a deeply felt wish, either yours or another's, you came to life, and so you're now a living, breathing creature.</p>\n<p>Choose two ability boosts. One must be to <strong>Constitution</strong> or <strong>Charisma</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Diplomacy skill. Once per day, you can fervently wish for something you could work towards achieving as a single action which has the concentrate trait. If you do, you gain a +2 circumstance bonus on the first skill check you attempt before the end of your turn to fulfill that wish.</p>",
            },
            items: {},
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Guns & Gears",
            },
            rules: [
                {
                    domain: "all",
                    key: "RollOption",
                    label: "Making a Wish",
                    option: "make-a-wish",
                    toggleable: true,
                },
                {
                    key: "FlatModifier",
                    predicate: ["make-a-wish"],
                    selector: "skill-check",
                    type: "circumstance",
                    value: 2,
                },
            ],
            trainedLore: "",
            trainedSkills: { custom: "", value: ["dip"] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
    "witch-wary": {
        _id: "yAtyaKbcHZWCJlf5",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Witch Wary",
        system: {
            boosts: {
                "0": { value: ["dex", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Saga Lands</p>\n<hr />\n<p>You have little love or trust for spellcraft and those who practice it, and have developed a paranoid knack for recognizing such tricks. You are constantly on guard for the magic of witches and have been trained to spot the signs of those with minds affected by magic.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Intelligence</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Occultism skill and the Curse Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
            },
            items: {
                "5ljyd": {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Oddity Identification",
                    uuid: "Compendium.pf2e.feats-srd.Item.Oddity Identification",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Curse Lore",
            trainedSkills: { value: ["occ"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "witchlight-follower": {
        _id: "BZhPPw9VD9U2ur6B",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Witchlight Follower",
        system: {
            boosts: {
                "0": { value: ["dex", "wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>While in a dismal forest or remote swamp, you caught sight of a string of lights bobbing through the trees. You stepped forward for a closer look, and then still further when the lights retreated a few paces. Then you remembered the rumors. Will-o'-wisps, rushlights, corpse lanterns—whatever they're called—such evil creatures lead people to their doom. With a supreme effort of will, you broke free from the alluring enchantment, and you've resolved to never let the strange lights of remote wildernesses claim you again.</p>\n<p>Choose two ability boosts. One must be to <strong>Dexterity</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in Survival and the Wisp Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat with both swamp terrain and subterranean bodies of water.</p>",
            },
            items: {
                pz84g: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Terrain Expertise",
                    uuid: "Compendium.pf2e.feats-srd.Item.Terrain Expertise",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Abomination Vaults Player's Guide",
            },
            rules: [],
            trainedLore: "Wisp Lore",
            trainedSkills: { value: ["sur"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "wonder-taster": {
        _id: "qB7g1OiZ8v8zgvkL",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Wonder Taster",
        system: {
            boosts: {
                "0": { value: ["con", "int"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p><strong>Prerequisite</strong> Region - Broken Lands</p>\n<hr />\n<p>Having once sampled Numerian fluids, you've tasted knowledge beyond comprehension. You are driven to recapture that astounding experience.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Constitution</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Crafting skill and the Alchemical Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Alchemical Crafting] skill feat.</p>",
            },
            items: {
                eclly: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Alchemical Crafting",
                    uuid: "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder Lost Omens: World Guide",
            },
            rules: [],
            trainedLore: "Alchemical Lore",
            trainedSkills: { value: ["cra"] },
            traits: { rarity: "common", value: [] },
        },
        type: "background",
    },
    "writ-in-the-stars": {
        _id: "maxaKunHAOKUrR4q",
        img: "systems/pf2e/icons/default-icons/background.svg",
        name: "Writ in the Stars",
        system: {
            boosts: {
                "0": { value: ["wis"] },
                "1": { value: ["cha", "con", "dex", "int", "str", "wis"] },
            },
            description: {
                value:
                    "<p>Destiny has always intrigued you. Maybe you grew up in a family where fortune-telling and divinations were a day-to-day part of life, or perhaps you had your fortune told as a young adult and the results were so shockingly accurate that you became a believer. The mysteries of what might lie in store for us all have long intrigued you, and you're always eager to debate whether or not we have free will or if destiny is predetermined—be it for one side or the other. You may see the failure of prophecy that began with the onset of the Age of Lost Omens as a dire indication of some sort of horrible cosmic mistake. Conversely, you could view this age as new era of freedom where reality is finally admitting that each person is free to determine their own path to the future. You still own a small token from your childhood that you view as a lucky charm, but whatever your beliefs are today, many of your fortunes have foretold that great things lie in store for you in the future, and you can't wait to find out what they might be!</p>\n<p>This background is associated with the suit of Stars.</p>\n<p>Choose two ability boosts. One must be to <strong>Wisdom</strong>, and one is a free ability boost. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Pilgrim's Token] skill feat (this token need not be from a faith and could simply be a good luck charm) and are trained in the Fortune-Telling Lore skill. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.A Quick Glimpse Beyond] free action.</p>",
            },
            items: {
                wEMSL: {
                    img: "systems/pf2e/icons/features/feats/feats.webp",
                    level: 1,
                    name: "Pilgrim's Token",
                    uuid: "Compendium.pf2e.feats-srd.Item.Pilgrim's Token",
                },
            },
            publication: {
                license: "OGL",
                remaster: false,
                title: "Pathfinder: Stolen Fate Player's Guide",
            },
            rules: [],
            trainedLore: "Fortune-Telling Lore",
            trainedSkills: { value: [] },
            traits: { rarity: "rare", value: [] },
        },
        type: "background",
    },
};
