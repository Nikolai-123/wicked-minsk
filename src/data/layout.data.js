const LAYOUT_DATA = [
    {
        id: 101,
        title: "Rectangle",
        imageUrl: "images/layouts/layout-001.jpg",
        categories: ["multi-inferno"],
        defence: {
            queen: 70,
            king: 66,
            champion: 10,
            varden: 50,
            castleTroops: {
                Ice_Golem: 1,
                Witch: 2,
                Archer: 6,
            }
        },
        attacks: [
            {
                id: 1011,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "0:08",
                    end: "1:50"
                },
                troops: {
                    Yeti: 10,
                    Witch: 8,
                    Wizard: 1,
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9,
                },
                categories: ["solid", "crash center"]
            }
        ]

    },
    {
        id: 102,
        title: "Rectangle",
        imageUrl: "images/layouts/layout-002.jpg",
        categories: ["mix-inferno"],
        defence: {
            queen: 70,
            king: 70,
            champion: 20,
            varden: 50,
            castleTroops: {
                Ice_Golem: 2,
                Witch: 1,
                Archer: 3,
            }
        },
        attacks: [
            {
                id: 1021,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "1:54",
                    end: "4:00",
                },
                troops: {
                    Yeti: 10,
                    Witch: 8,
                    Archer: 4,
                },
                spells: {
                    Earthquake_Spell: 4,
                    Rage_Spell: 3,
                    Poison_Spell: 1,
                    Jump_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: ["solid"]
            }
        ]
    },
    {
        id: 103,
        title: "anti-3",
        imageUrl: "images/layouts/layout-003.jpg",
        categories: ["mix-inferno"],
        defence: {
            queen: 70,
            king: 68,
            champion: 11,
            varden: 50,
            castleTroops: {
                Goblin: 20,
                Archer: 25,
            }
        },
        attacks: [
            {
                id: 1031,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "4:05",
                    end: "5:47"
                },
                troops: {
                    Yeti: 10,
                    Witch: 8,
                    Archer: 4
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: ["solid", "crash center"]
            }
        ]
    },
    {
        id: 104,
        title: "anti-3",
        imageUrl: "images/layouts/layout-004.jpg",
        categories: ["single-inferno"],
        defence: {
            queen: 70,
            king: 66,
            champion: 20,
            varden: 50,
            castleTroops: {
                Lava_Hound: 1,
                Ice_Golem: 1,
            }
        },
        attacks: [
            {
                id: 1041,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "5:51",
                    end: "7:37"
                },
                troops: {
                    Yeti: 10,
                    Witch: 6,
                    Wizard: 2,
                    Ice_Golem: 1,
                    Balloon: 1,
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: ["solid", "crash center"]
            }
        ]
    },
    {
        id: 105,
        title: "anti-3",
        imageUrl: "images/layouts/layout-005.jpg",
        categories: ["mix-inferno", "rectangle"],
        defence: {
            queen: 70,
            king: 66,
            champion: 20,
            varden: 50,
            castleTroops: {
                Ice_Golem: 3,
            }
        },
        attacks: [
            {
                id: 1051,
                name: "Yeti and Hog_Rider",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "7:41",
                    end: "9:39"
                },
                troops: {
                    Yeti: 11,
                    Hog_Rider: 5,
                    Wizard: 3,
                    Ice_Golem: 3,
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: "crash center",
            }
        ]
    },
    {
        id: 106,
        title: "Base 106",
        imageUrl: "images/layouts/layout-006.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "1:12",
                    end: "4:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 107,
        title: "Base 107",
        imageUrl: "images/layouts/layout-007.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "4:12",
                    end: "6:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 108,
        title: "Base 108",
        imageUrl: "images/layouts/layout-008.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "6:37",
                    end: "8:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 109,
        title: "Base 109",
        imageUrl: "images/layouts/layout-009.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "8:42",
                    end: "11:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 110,
        title: "Base 110",
        imageUrl: "images/layouts/layout-010.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "11:17",
                    end: "13:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 111,
        title: "Base 111",
        imageUrl: "images/layouts/layout-011.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "13:29",
                    end: "15:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 112,
        title: "Base 112",
        imageUrl: "images/layouts/layout-012.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "1:05",
                    end: "2:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 113,
        title: "Base 113",
        imageUrl: "images/layouts/layout-013.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1131,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "2:55",
                    end: "4:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 114,
        title: "Base 114",
        imageUrl: "images/layouts/layout-014.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1141,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "5:07",
                    end: "7:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 115,
        title: "Base 115",
        imageUrl: "images/layouts/layout-015.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "7:07",
                    end: "9:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 116,
        title: "Base 116",
        imageUrl: "images/layouts/layout-016.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "9:12",
                    end: "11:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 117,
        title: "Base 117",
        imageUrl: "images/layouts/layout-017.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1171,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IEn6qlS4vm8",
                    start: "8:15",
                    end: "10:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 118,
        title: "Base 118",
        imageUrl: "images/layouts/layout-018.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1181,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=QAXmKukroPk",
                    start: "4:26",
                    end: "7:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 119,
        title: "Base 119",
        imageUrl: "images/layouts/layout-019.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1191,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=QAXmKukroPk",
                    start: "7:51",
                    end: "10:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 120,
        title: "Base 120",
        imageUrl: "images/layouts/layout-020.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1201,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "2:34",
                    end: "4:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 121,
        title: "Base 121",
        imageUrl: "images/layouts/layout-021.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1211,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "4:30",
                    end: "6:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 122,
        title: "Base 122",
        imageUrl: "images/layouts/layout-022.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1221,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "6:25",
                    end: "8:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 123,
        title: "Base 123",
        imageUrl: "images/layouts/layout-023.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1231,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "8:29",
                    end: "10:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 124,
        title: "Base 124",
        imageUrl: "images/layouts/layout-024.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1241,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "1:30",
                    end: "4:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 125,
        title: "Base 125",
        imageUrl: "images/layouts/layout-025.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1251,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "4:27",
                    end: "7:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 126,
        title: "Base 126",
        imageUrl: "images/layouts/layout-026.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1261,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "7:47",
                    end: "11:06"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 127,
        title: "Base 127",
        imageUrl: "images/layouts/layout-027.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1271,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "12:01",
                    end: "14:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 128,
        title: "Base 128",
        imageUrl: "images/layouts/layout-028.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1281,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=2go5hrz6mgA",
                    start: "8:07",
                    end: "11:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 129,
        title: "Base 129",
        imageUrl: "images/layouts/layout-029.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1291,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "4:03",
                    end: "6:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 130,
        title: "Base 130",
        imageUrl: "images/layouts/layout-030.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1301,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "6:08",
                    end: "7:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 131,
        title: "Base 131",
        imageUrl: "images/layouts/layout-031.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1311,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "10:12",
                    end: "12:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 132,
        title: "Base 132",
        imageUrl: "images/layouts/layout-032.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1321,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "12:22",
                    end: "14:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 133,
        title: "Base 133",
        imageUrl: "images/layouts/layout-033.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1331,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "2:32",
                    end: "4:56"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 134,
        title: "Base 134",
        imageUrl: "images/layouts/layout-034.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1341,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "5:07",
                    end: "6:49"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 135,
        title: "Base 135",
        imageUrl: "images/layouts/layout-035.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1351,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "6:53",
                    end: "8:46"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 136,
        title: "Base 136",
        imageUrl: "images/layouts/layout-036.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1361,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "8:48",
                    end: "10:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 137,
        title: "Base 137",
        imageUrl: "images/layouts/layout-037.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1371,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "10:42",
                    end: "12:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 138,
        title: "Base 138",
        imageUrl: "images/layouts/layout-038.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1381,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "4:51",
                    end: "6:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 139,
        title: "Base 139",
        imageUrl: "images/layouts/layout-039.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1391,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "6:48",
                    end: "8:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 140,
        title: "Base 140",
        imageUrl: "images/layouts/layout-040.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1401,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "8:16",
                    end: "10:27"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 141,
        title: "Base 141",
        imageUrl: "images/layouts/layout-041.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1411,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "10:31",
                    end: "11:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 142,
        title: "Base 142",
        imageUrl: "images/layouts/layout-042.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1421,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "8:00",
                    end: "10:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 143,
        title: "Base 143",
        imageUrl: "images/layouts/layout-043.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1431,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "10:25",
                    end: "12:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 144,
        title: "Base 144",
        imageUrl: "images/layouts/layout-044.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1441,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "12:25",
                    end: "13:36"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 145,
        title: "Base 145",
        imageUrl: "images/layouts/layout-045.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1451,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "13:44",
                    end: "15:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 146,
        title: "Base 146",
        imageUrl: "images/layouts/layout-046.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1461,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=6zXNsCz7MrM",
                    start: "5:41",
                    end: "7:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 147,
        title: "Base 147",
        imageUrl: "images/layouts/layout-047.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1471,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=6zXNsCz7MrM",
                    start: "7:52",
                    end: "10:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 148,
        title: "Base 148",
        imageUrl: "images/layouts/layout-048.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1481,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZmUQMxLhMK0",
                    start: "3:22",
                    end: "4:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 149,
        title: "Base 149",
        imageUrl: "images/layouts/layout-049.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1491,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZmUQMxLhMK0",
                    start: "5:07",
                    end: "7:54"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 150,
        title: "Base 150",
        imageUrl: "images/layouts/layout-050.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1501,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZmUQMxLhMK0",
                    start: "8:01",
                    end: "10:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 151,
        title: "Base 151",
        imageUrl: "images/layouts/layout-051.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1511,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5zS6Cmn9pt4",
                    start: "1:41",
                    end: "3:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 152,
        title: "Base 152",
        imageUrl: "images/layouts/layout-052.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1521,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5zS6Cmn9pt4",
                    start: "18:39",
                    end: "21:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 153,
        title: "Base 153",
        imageUrl: "images/layouts/layout-053.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1531,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VLIh6KPpvmc",
                    start: "4:04",
                    end: "6:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 154,
        title: "Base 154",
        imageUrl: "images/layouts/layout-054.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1541,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VLIh6KPpvmc",
                    start: "6:20",
                    end: "8:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 155,
        title: "Base 155",
        imageUrl: "images/layouts/layout-055.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1551,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VLIh6KPpvmc",
                    start: "8:17",
                    end: "10:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 156,
        title: "Base 156",
        imageUrl: "images/layouts/layout-056.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1561,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "1:28",
                    end: "3:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 157,
        title: "Base 157",
        imageUrl: "images/layouts/layout-057.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1571,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "3:47",
                    end: "6:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 158,
        title: "Base 158",
        imageUrl: "images/layouts/layout-058.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1581,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "6:05",
                    end: "8:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 159,
        title: "Base 159",
        imageUrl: "images/layouts/layout-059.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1591,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "8:32",
                    end: "11:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 160,
        title: "Base 160",
        imageUrl: "images/layouts/layout-060.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1601,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "0:48",
                    end: "3:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 161,
        title: "Base 161",
        imageUrl: "images/layouts/layout-061.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1611,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "3:41",
                    end: "6:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 162,
        title: "Base 162",
        imageUrl: "images/layouts/layout-062.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1621,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "6:44",
                    end: "9:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 163,
        title: "Base 163",
        imageUrl: "images/layouts/layout-063.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1631,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "9:17",
                    end: "11:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 164,
        title: "Base 164",
        imageUrl: "images/layouts/layout-064.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1641,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Fu5LjY8M9xU",
                    start: "4:19",
                    end: "7:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 165,
        title: "Base 165",
        imageUrl: "images/layouts/layout-065.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1651,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=10yz-9NJ6zA",
                    start: "2:35",
                    end: "5:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 166,
        title: "Base 166",
        imageUrl: "images/layouts/layout-066.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1661,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=10yz-9NJ6zA",
                    start: "5:39",
                    end: "8:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 167,
        title: "Base 167",
        imageUrl: "images/layouts/layout-067.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1671,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=10yz-9NJ6zA",
                    start: "8:08",
                    end: "11:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 168,
        title: "Base 168",
        imageUrl: "images/layouts/layout-068.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1681,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Zptbg5N_Y2s",
                    start: "1:39",
                    end: "4:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 169,
        title: "Base 169",
        imageUrl: "images/layouts/layout-069.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1691,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Zptbg5N_Y2s",
                    start: "4:08",
                    end: "6:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 170,
        title: "Base 170",
        imageUrl: "images/layouts/layout-070.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1701,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Zptbg5N_Y2s",
                    start: "6:32",
                    end: "9:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 171,
        title: "Base 171",
        imageUrl: "images/layouts/layout-071.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1711,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "1:59",
                    end: "4:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 172,
        title: "Base 172",
        imageUrl: "images/layouts/layout-072.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1721,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "4:50",
                    end: "7:09"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 173,
        title: "Base 173",
        imageUrl: "images/layouts/layout-073.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1731,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "7:24",
                    end: "9:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 174,
        title: "Base 174",
        imageUrl: "images/layouts/layout-074.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1741,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "9:45",
                    end: "12:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 175,
        title: "Base 175",
        imageUrl: "images/layouts/layout-075.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1751,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "1:37",
                    end: "3:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 176,
        title: "Base 176",
        imageUrl: "images/layouts/layout-076.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1761,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "3:13",
                    end: "4:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 177,
        title: "Base 177",
        imageUrl: "images/layouts/layout-077.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1771,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "4:40",
                    end: "6:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 178,
        title: "Base 178",
        imageUrl: "images/layouts/layout-078.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1781,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "6:03",
                    end: "7:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 179,
        title: "Base 179",
        imageUrl: "images/layouts/layout-079.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1791,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "8:37",
                    end: "9:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 180,
        title: "Base 180",
        imageUrl: "images/layouts/layout-080.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1801,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "9:54",
                    end: "12:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 181,
        title: "Base 181",
        imageUrl: "images/layouts/layout-081.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1811,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "1:30",
                    end: "2:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 182,
        title: "Base 182",
        imageUrl: "images/layouts/layout-082.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1821,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "2:53",
                    end: "4:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 183,
        title: "Base 183",
        imageUrl: "images/layouts/layout-083.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1831,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "4:52",
                    end: "6:13"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 184,
        title: "Base 184",
        imageUrl: "images/layouts/layout-084.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1841,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "6:14",
                    end: "7:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 185,
        title: "Base 185",
        imageUrl: "images/layouts/layout-085.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1851,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "7:25",
                    end: "9:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 186,
        title: "Base 186",
        imageUrl: "images/layouts/layout-086.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1861,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "9:15",
                    end: "10:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 187,
        title: "Base 187",
        imageUrl: "images/layouts/layout-087.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1871,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "1:31",
                    end: "2:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 188,
        title: "Base 188",
        imageUrl: "images/layouts/layout-088.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1881,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "3:23",
                    end: "4:49"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 189,
        title: "Base 189",
        imageUrl: "images/layouts/layout-089.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1891,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "4:50",
                    end: "6:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 190,
        title: "Base 190",
        imageUrl: "images/layouts/layout-090.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1901,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "6:18",
                    end: "7:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 191,
        title: "Base 191",
        imageUrl: "images/layouts/layout-091.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1911,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "8:14",
                    end: "9:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 192,
        title: "Base 192",
        imageUrl: "images/layouts/layout-092.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1921,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "9:24",
                    end: "10:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 193,
        title: "Base 193",
        imageUrl: "images/layouts/layout-093.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1931,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I2o0H16hnzg",
                    start: "9:37",
                    end: "11:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 194,
        title: "Base 194",
        imageUrl: "images/layouts/layout-094.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1941,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I2o0H16hnzg",
                    start: "11:08",
                    end: "12:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 195,
        title: "Base 195",
        imageUrl: "images/layouts/layout-095.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1951,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "4:08",
                    end: "6:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 196,
        title: "Base 196",
        imageUrl: "images/layouts/layout-096.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1961,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "6:23",
                    end: "7:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 197,
        title: "Base 197",
        imageUrl: "images/layouts/layout-097.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1971,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "7:30",
                    end: "8:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 198,
        title: "Base 198",
        imageUrl: "images/layouts/layout-098.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1981,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "8:45",
                    end: "9:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 199,
        title: "Base 199",
        imageUrl: "images/layouts/layout-099.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1991,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "10:19",
                    end: "11:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 200,
        title: "Base 200",
        imageUrl: "images/layouts/layout-100.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2001,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "11:25",
                    end: "14:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 201,
        title: "Base 201",
        imageUrl: "images/layouts/layout-101.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2011,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ER-2ZbhzKtM",
                    start: "4:17",
                    end: "6:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 202,
        title: "Base 202",
        imageUrl: "images/layouts/layout-102.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2021,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ER-2ZbhzKtM",
                    start: "6:31",
                    end: "10:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 203,
        title: "Base 203",
        imageUrl: "images/layouts/layout-103.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2031,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F4V2W_ROMCE",
                    start: "2:49",
                    end: "5:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 204,
        title: "Base 204",
        imageUrl: "images/layouts/layout-104.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2041,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F4V2W_ROMCE",
                    start: "5:35",
                    end: "8:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 205,
        title: "Base 205",
        imageUrl: "images/layouts/layout-105.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2051,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F4V2W_ROMCE",
                    start: "8:24",
                    end: "10:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 206,
        title: "Base 206",
        imageUrl: "images/layouts/layout-106.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "4:00",
                    end: "5:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 207,
        title: "Base 207",
        imageUrl: "images/layouts/layout-107.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "5:16",
                    end: "7:54"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 208,
        title: "Base 208",
        imageUrl: "images/layouts/layout-108.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "7:56",
                    end: "10:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 209,
        title: "Base 209",
        imageUrl: "images/layouts/layout-109.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "10:43",
                    end: "12:34"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 210,
        title: "Base 210",
        imageUrl: "images/layouts/layout-110.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "12:36",
                    end: "14:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 211,
        title: "Base 211",
        imageUrl: "images/layouts/layout-111.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "1:41",
                    end: "4:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 212,
        title: "Base 212",
        imageUrl: "images/layouts/layout-112.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "4:16",
                    end: "6:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 213,
        title: "Base 213",
        imageUrl: "images/layouts/layout-113.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2131,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "6:35",
                    end: "9:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 214,
        title: "Base 214",
        imageUrl: "images/layouts/layout-114.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2141,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "9:26",
                    end: "12:04"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 215,
        title: "Base 215",
        imageUrl: "images/layouts/layout-115.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "1:26",
                    end: "3:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 216,
        title: "Base 216",
        imageUrl: "images/layouts/layout-116.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2161,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "3:23",
                    end: "5:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 217,
        title: "Base 217",
        imageUrl: "images/layouts/layout-117.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2171,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "5:35",
                    end: "7:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 218,
        title: "Base 218",
        imageUrl: "images/layouts/layout-118.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2181,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "7:39",
                    end: "9:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 219,
        title: "Base 219",
        imageUrl: "images/layouts/layout-119.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2191,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "9:54",
                    end: "12:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 220,
        title: "Base 220",
        imageUrl: "images/layouts/layout-120.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2201,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "12:05",
                    end: "13:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 221,
        title: "Base 221",
        imageUrl: "images/layouts/layout-121.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2211,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "13:57",
                    end: "16:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 222,
        title: "Base 222",
        imageUrl: "images/layouts/layout-122.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2221,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "16:02",
                    end: "18:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 223,
        title: "Base 223",
        imageUrl: "images/layouts/layout-123.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2231,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "0:59",
                    end: "3:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 224,
        title: "Base 224",
        imageUrl: "images/layouts/layout-124.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2241,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "3:23",
                    end: "5:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 225,
        title: "Base 225",
        imageUrl: "images/layouts/layout-125.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2251,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "5:41",
                    end: "8:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 226,
        title: "Base 226",
        imageUrl: "images/layouts/layout-126.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2261,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "8:39",
                    end: "11:32"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 227,
        title: "Base 227",
        imageUrl: "images/layouts/layout-127.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2271,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "11:34",
                    end: "13:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    }
];
export default LAYOUT_DATA;
