const LAYOUT_DATA =
[
  {
    id: 001,
    title: "Rectangle",
    imageUrl: "images/layouts/layout-123.jpg",
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
    attacks:
      {
        id: 0001,
        name: "Yeti and Witch",
        details: {
          videoUrl:
          "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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
        categories: ["solid", "crash center" ]
      }

  },
  {
    id: 002,
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
    attacks:
      {
        id: 0002,
        name: "Yeti and Witch",
        details: {
          videoUrl:
          "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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

  },
  {
    id: 003,
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
    attacks:
      {
        id: 0003,
        name: "Yeti and Witch",
        details: {
          videoUrl:
          "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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

  },
  {
    id: 004,
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
    attacks:
      {
        id: 0004,
        name: "Yeti and Witch",
        details: {
          videoUrl:
          "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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

  },
  {
    id: 005,
    title: "anti-3",
    imageUrl: "images/layouts/layout-005.jpg",
    categories: ["mix-inferno","rectangle"],
    defence: {
      queen: 70,
      king: 66,
      champion: 20,
      varden: 50,
      castleTroops: {
        Ice_Golem: 3,
      }
    },
    attacks:
    {
      id: 0005,
      name: "Yeti and Hog_Rider",
      details: {
        videoUrl:
        "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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
      categories:  "crash center",
    }

  }
];

export default LAYOUT_DATA;