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
    },
    {
        id: 228,
        title: "Base 228",
        imageUrl: "images/layouts/layout-128.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2281,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Jd6OmuceuqU",
                    start: "1:30",
                    end: "4:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 229,
        title: "Base 229",
        imageUrl: "images/layouts/layout-129.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2291,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Jd6OmuceuqU",
                    start: "4:02",
                    end: "6:26"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 230,
        title: "Base 230",
        imageUrl: "images/layouts/layout-130.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2301,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Jd6OmuceuqU",
                    start: "6:28",
                    end: "10:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 231,
        title: "Base 231",
        imageUrl: "images/layouts/layout-131.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2311,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "2:50",
                    end: "4:34"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 232,
        title: "Base 232",
        imageUrl: "images/layouts/layout-132.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2321,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "4:36",
                    end: "6:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 233,
        title: "Base 233",
        imageUrl: "images/layouts/layout-133.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2331,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "6:42",
                    end: "8:54"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 234,
        title: "Base 234",
        imageUrl: "images/layouts/layout-134.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2341,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "8:56",
                    end: "10:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 235,
        title: "Base 235",
        imageUrl: "images/layouts/layout-135.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2351,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "2:04",
                    end: "3:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 236,
        title: "Base 236",
        imageUrl: "images/layouts/layout-136.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2361,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "3:50",
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
        id: 237,
        title: "Base 237",
        imageUrl: "images/layouts/layout-137.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2371,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "6:05",
                    end: "7:56"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 238,
        title: "Base 238",
        imageUrl: "images/layouts/layout-138.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2381,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "7:58",
                    end: "9:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 239,
        title: "Base 239",
        imageUrl: "images/layouts/layout-139.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2391,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "9:39",
                    end: "11:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 240,
        title: "Base 240",
        imageUrl: "images/layouts/layout-140.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2401,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Kb-E8T5Uw7s",
                    start: "0:47",
                    end: "3:01"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 241,
        title: "Base 241",
        imageUrl: "images/layouts/layout-141.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2411,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Kb-E8T5Uw7s",
                    start: "5:21",
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
        id: 242,
        title: "Base 242",
        imageUrl: "images/layouts/layout-142.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2421,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Kb-E8T5Uw7s",
                    start: "7:53",
                    end: "10:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 243,
        title: "Base 243",
        imageUrl: "images/layouts/layout-143.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2431,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "1:22",
                    end: "3:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 244,
        title: "Base 244",
        imageUrl: "images/layouts/layout-144.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2441,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "3:19",
                    end: "4:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 245,
        title: "Base 245",
        imageUrl: "images/layouts/layout-145.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2451,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "4:43",
                    end: "6:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 246,
        title: "Base 246",
        imageUrl: "images/layouts/layout-146.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2461,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "6:10",
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
        id: 247,
        title: "Base 247",
        imageUrl: "images/layouts/layout-147.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2471,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "8:45",
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
        id: 248,
        title: "Base 248",
        imageUrl: "images/layouts/layout-148.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2481,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "10:31",
                    end: "12:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 249,
        title: "Base 249",
        imageUrl: "images/layouts/layout-149.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2491,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=nHPIOWro3o8",
                    start: "8:35",
                    end: "11:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 250,
        title: "Base 250",
        imageUrl: "images/layouts/layout-150.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2501,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=GUT_y84mUKU",
                    start: "1:04",
                    end: "3:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 251,
        title: "Base 251",
        imageUrl: "images/layouts/layout-151.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2511,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=GUT_y84mUKU",
                    start: "3:24",
                    end: "6:19"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 252,
        title: "Base 252",
        imageUrl: "images/layouts/layout-152.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2521,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=GUT_y84mUKU",
                    start: "6:21",
                    end: "10:47"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 253,
        title: "Base 253",
        imageUrl: "images/layouts/layout-153.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2531,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "1:51",
                    end: "4:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 254,
        title: "Base 254",
        imageUrl: "images/layouts/layout-154.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2541,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "4:33",
                    end: "7:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 255,
        title: "Base 255",
        imageUrl: "images/layouts/layout-155.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2551,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "7:20",
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
        id: 256,
        title: "Base 256",
        imageUrl: "images/layouts/layout-156.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2561,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "10:24",
                    end: "12:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 257,
        title: "Base 257",
        imageUrl: "images/layouts/layout-157.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2571,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "1:14",
                    end: "3:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 258,
        title: "Base 258",
        imageUrl: "images/layouts/layout-158.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2581,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "3:32",
                    end: "5:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 259,
        title: "Base 259",
        imageUrl: "images/layouts/layout-159.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2591,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "5:48",
                    end: "7:32"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 260,
        title: "Base 260",
        imageUrl: "images/layouts/layout-160.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2601,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "7:34",
                    end: "9:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 261,
        title: "Base 261",
        imageUrl: "images/layouts/layout-161.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2611,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oCB2aDLhpsM",
                    start: "1:23",
                    end: "3:42"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 262,
        title: "Base 262",
        imageUrl: "images/layouts/layout-162.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2621,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oCB2aDLhpsM",
                    start: "6:27",
                    end: "8:42"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 263,
        title: "Base 263",
        imageUrl: "images/layouts/layout-163.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2631,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oCB2aDLhpsM",
                    start: "12:09",
                    end: "15:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 264,
        title: "Base 264",
        imageUrl: "images/layouts/layout-164.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2641,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5Rtd80pSxHU",
                    start: "1:50",
                    end: "3:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 265,
        title: "Base 265",
        imageUrl: "images/layouts/layout-165.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2651,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tk7Ug_79Hts",
                    start: "1:45",
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
        id: 266,
        title: "Base 266",
        imageUrl: "images/layouts/layout-166.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2661,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tk7Ug_79Hts",
                    start: "7:20",
                    end: "10:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 267,
        title: "Base 267",
        imageUrl: "images/layouts/layout-167.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2671,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tk7Ug_79Hts",
                    start: "13:29",
                    end: "15:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 268,
        title: "Base 268",
        imageUrl: "images/layouts/layout-168.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2681,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eu5wPvbQIjU",
                    start: "2:07",
                    end: "4:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 269,
        title: "Base 269",
        imageUrl: "images/layouts/layout-169.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2691,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eu5wPvbQIjU",
                    start: "4:35",
                    end: "7:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 270,
        title: "Base 270",
        imageUrl: "images/layouts/layout-170.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2701,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eu5wPvbQIjU",
                    start: "7:57",
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
        id: 271,
        title: "Base 271",
        imageUrl: "images/layouts/layout-171.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2711,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "1:35",
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
        id: 272,
        title: "Base 272",
        imageUrl: "images/layouts/layout-172.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2721,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "4:15",
                    end: "5:57"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 273,
        title: "Base 273",
        imageUrl: "images/layouts/layout-173.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2731,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "5:59",
                    end: "8:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 274,
        title: "Base 274",
        imageUrl: "images/layouts/layout-174.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2741,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "8:08",
                    end: "10:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 275,
        title: "Base 275",
        imageUrl: "images/layouts/layout-175.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2751,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "10:10",
                    end: "11:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 276,
        title: "Base 276",
        imageUrl: "images/layouts/layout-176.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2761,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "4:31",
                    end: "7:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            },
            {
                id: 2762,
                name: "Attack 2",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "7:52",
                    end: "10:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 277,
        title: "Base 277",
        imageUrl: "images/layouts/layout-177.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2771,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "10:30",
                    end: "12:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 278,
        title: "Base 278",
        imageUrl: "images/layouts/layout-178.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2781,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "12:17",
                    end: "14:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 279,
        title: "Base 279",
        imageUrl: "images/layouts/layout-179.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2791,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "15:00",
                    end: "16:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 280,
        title: "Base 280",
        imageUrl: "images/layouts/layout-180.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2801,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=xwcceWV3e_s",
                    start: "1:54",
                    end: "3:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 281,
        title: "Base 281",
        imageUrl: "images/layouts/layout-181.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2811,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=xwcceWV3e_s",
                    start: "4:05",
                    end: "6:53"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 282,
        title: "Base 282",
        imageUrl: "images/layouts/layout-182.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2821,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=xwcceWV3e_s",
                    start: "7:00",
                    end: "9:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 283,
        title: "Base 283",
        imageUrl: "images/layouts/layout-183.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2831,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "2:42",
                    end: "4:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 284,
        title: "Base 284",
        imageUrl: "images/layouts/layout-184.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2841,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "5:00",
                    end: "6:53"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 285,
        title: "Base 285",
        imageUrl: "images/layouts/layout-185.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2851,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "6:57",
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
        id: 286,
        title: "Base 286",
        imageUrl: "images/layouts/layout-186.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2861,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "9:10",
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
        id: 287,
        title: "Base 287",
        imageUrl: "images/layouts/layout-187.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2871,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "11:09",
                    end: "13:49"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 288,
        title: "Base 288",
        imageUrl: "images/layouts/layout-188.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2881,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "0:53",
                    end: "3:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 289,
        title: "Base 289",
        imageUrl: "images/layouts/layout-189.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2891,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "3:47",
                    end: "5:57"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 290,
        title: "Base 290",
        imageUrl: "images/layouts/layout-190.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2901,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "6:01",
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
        id: 291,
        title: "Base 291",
        imageUrl: "images/layouts/layout-191.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2911,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "8:37",
                    end: "10:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 292,
        title: "Base 292",
        imageUrl: "images/layouts/layout-192.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2921,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "2:55",
                    end: "5:26"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 293,
        title: "Base 293",
        imageUrl: "images/layouts/layout-193.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2931,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "5:28",
                    end: "7:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 294,
        title: "Base 294",
        imageUrl: "images/layouts/layout-194.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2941,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "7:38",
                    end: "10:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 295,
        title: "Base 295",
        imageUrl: "images/layouts/layout-195.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2951,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "10:15",
                    end: "12:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 296,
        title: "Base 296",
        imageUrl: "images/layouts/layout-196.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2961,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "12:05",
                    end: "13:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 297,
        title: "Base 297",
        imageUrl: "images/layouts/layout-197.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2971,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "13:33",
                    end: "15:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 298,
        title: "Base 298",
        imageUrl: "images/layouts/layout-198.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2981,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "16:00",
                    end: "17:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 299,
        title: "Base 299",
        imageUrl: "images/layouts/layout-199.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2991,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "2:00",
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
        id: 300,
        title: "Base 300",
        imageUrl: "images/layouts/layout-200.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3001,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "4:29",
                    end: "8:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 301,
        title: "Base 301",
        imageUrl: "images/layouts/layout-201.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3011,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "8:24",
                    end: "11:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 302,
        title: "Base 302",
        imageUrl: "images/layouts/layout-202.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3021,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "11:22",
                    end: "15:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 303,
        title: "Base 303",
        imageUrl: "images/layouts/layout-203.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3031,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "2:54",
                    end: "4:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 304,
        title: "Base 304",
        imageUrl: "images/layouts/layout-204.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3041,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "4:57",
                    end: "7:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 305,
        title: "Base 305",
        imageUrl: "images/layouts/layout-205.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3051,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "7:18",
                    end: "9:44"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 306,
        title: "Base 306",
        imageUrl: "images/layouts/layout-206.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "9:50",
                    end: "12:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 307,
        title: "Base 307",
        imageUrl: "images/layouts/layout-207.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "1:31",
                    end: "4:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 308,
        title: "Base 308",
        imageUrl: "images/layouts/layout-208.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "4:52",
                    end: "6:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 309,
        title: "Base 309",
        imageUrl: "images/layouts/layout-209.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "6:59",
                    end: "9:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 310,
        title: "Base 310",
        imageUrl: "images/layouts/layout-210.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "9:33",
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
        id: 311,
        title: "Base 311",
        imageUrl: "images/layouts/layout-211.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "12:09",
                    end: "14:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 312,
        title: "Base 312",
        imageUrl: "images/layouts/layout-212.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "14:44",
                    end: "17:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 313,
        title: "Base 313",
        imageUrl: "images/layouts/layout-213.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3131,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "17:42",
                    end: "21:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 314,
        title: "Base 314",
        imageUrl: "images/layouts/layout-214.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3141,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=XGE_PxGdSGs",
                    start: "3:00",
                    end: "6:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 315,
        title: "Base 315",
        imageUrl: "images/layouts/layout-215.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=XGE_PxGdSGs",
                    start: "6:17",
                    end: "8:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 316,
        title: "Base 316",
        imageUrl: "images/layouts/layout-216.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3161,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5M2uqqsSXtA",
                    start: "3:45",
                    end: "5:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 317,
        title: "Base 317",
        imageUrl: "images/layouts/layout-217.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3171,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5M2uqqsSXtA",
                    start: "5:50",
                    end: "8:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 318,
        title: "Base 318",
        imageUrl: "images/layouts/layout-218.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3181,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=hOFFONQa51o",
                    start: "2:25",
                    end: "4:32"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 319,
        title: "Base 319",
        imageUrl: "images/layouts/layout-219.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3191,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=hOFFONQa51o",
                    start: "4:50",
                    end: "6:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 320,
        title: "Base 320",
        imageUrl: "images/layouts/layout-220.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3201,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ydp7G-Y1WQQ",
                    start: "3:08",
                    end: "6:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 321,
        title: "Base 321",
        imageUrl: "images/layouts/layout-221.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3211,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qvsVA5xXgU4",
                    start: "7:53",
                    end: "10:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 322,
        title: "Base 322",
        imageUrl: "images/layouts/layout-222.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3221,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=HOkzkXp_PB4",
                    start: "10:05",
                    end: "12:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 323,
        title: "Base 323",
        imageUrl: "images/layouts/layout-223.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3231,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=LF3XXzQKCjY",
                    start: "1:51",
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
        id: 324,
        title: "Base 324",
        imageUrl: "images/layouts/layout-224.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3241,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9jSteQlg-XM",
                    start: "2:30",
                    end: "4:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 325,
        title: "Base 325",
        imageUrl: "images/layouts/layout-225.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3251,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9jSteQlg-XM",
                    start: "5:38",
                    end: "8:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 326,
        title: "Base 326",
        imageUrl: "images/layouts/layout-226.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3261,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9jSteQlg-XM",
                    start: "8:18",
                    end: "10:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 327,
        title: "Base 327",
        imageUrl: "images/layouts/layout-227.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3271,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=fH-lXpJ3KZY",
                    start: "3:15",
                    end: "5:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 328,
        title: "Base 328",
        imageUrl: "images/layouts/layout-228.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3281,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=fH-lXpJ3KZY",
                    start: "5:48",
                    end: "8:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 329,
        title: "Base 329",
        imageUrl: "images/layouts/layout-229.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3291,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h-Ry5Aew-6c",
                    start: "3:18",
                    end: "5:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 330,
        title: "Base 330",
        imageUrl: "images/layouts/layout-230.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3301,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h-Ry5Aew-6c",
                    start: "6:16",
                    end: "9:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 331,
        title: "Base 331",
        imageUrl: "images/layouts/layout-231.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3311,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h-Ry5Aew-6c",
                    start: "9:12",
                    end: "12:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 332,
        title: "Base 332",
        imageUrl: "images/layouts/layout-232.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3321,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "8:21",
                    end: "9:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 333,
        title: "Base 333",
        imageUrl: "images/layouts/layout-233.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3331,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "9:27",
                    end: "10:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 334,
        title: "Base 334",
        imageUrl: "images/layouts/layout-234.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3341,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "10:37",
                    end: "11:47"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 335,
        title: "Base 335",
        imageUrl: "images/layouts/layout-235.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3351,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "11:50",
                    end: "13:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 336,
        title: "Base 336",
        imageUrl: "images/layouts/layout-236.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3361,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "2:05",
                    end: "3:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 337,
        title: "Base 337",
        imageUrl: "images/layouts/layout-237.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3371,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "3:29",
                    end: "4:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 338,
        title: "Base 338",
        imageUrl: "images/layouts/layout-238.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3381,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "4:56",
                    end: "6:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 339,
        title: "Base 339",
        imageUrl: "images/layouts/layout-239.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3391,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "6:40",
                    end: "7:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 340,
        title: "Base 340",
        imageUrl: "images/layouts/layout-240.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3401,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "7:57",
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
        id: 341,
        title: "Base 341",
        imageUrl: "images/layouts/layout-241.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3411,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "9:09",
                    end: "12:07"
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
