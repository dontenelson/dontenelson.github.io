// === LEVELS DEFINITIONS ===
// TODOs 7, 11, and 12 will require changes to this section
const LEVELS = [
  {
    name: "Level 1: Neon Alley",
    speed: 2,
    gameObjects: [
      { type: "obstacle", kind: "spikes", x: 600, y: groundY },
      { type: "obstacle", kind: "spikes", x: 930, y: groundY },
      { type: "obstacle", kind: "spikes", x: 1470, y: groundY },

      { type: "platform", kind: "basicPlatform", x: 500, y: groundY - 70 },
      { type: "platform", kind: "basicPlatform", x: 820, y: groundY - 110 },
      { type: "platform", kind: "basicPlatform", x: 1120, y: groundY - 80 },

      { type: "powerup", kind: "healthUp", x: 740, y: groundY - 75 },
      { type: "powerup", kind: "healthUp", x: 1230, y: groundY - 90 },

      { type: "enemy", kind: "bug", x: 660, y: groundY },
      { type: "enemy", kind: "bug", x: 1010, y: groundY },
      { type: "enemy", kind: "bug", x: 1700, y: groundY },

      { type: "goal", kind: "flag", x: 2100, y: groundY },
    ],
  },
  {
    name: "Level 2: Circuit Run",
    speed: 3,
    gameObjects: [
      { type: "obstacle", kind: "spikes", x: 620, y: groundY },
      { type: "obstacle", kind: "spikes", x: 890, y: groundY },
      { type: "obstacle", kind: "spikes", x: 1180, y: groundY },
      { type: "obstacle", kind: "spikes", x: 1480, y: groundY },
      { type: "obstacle", kind: "spikes", x: 1860, y: groundY },

      { type: "platform", kind: "basicPlatform", x: 450, y: groundY - 60 },
      { type: "platform", kind: "basicPlatform", x: 760, y: groundY - 100 },
      { type: "platform", kind: "basicPlatform", x: 1100, y: groundY - 140 },
      { type: "platform", kind: "basicPlatform", x: 1550, y: groundY - 90 },

      { type: "powerup", kind: "healthUp", x: 680, y: groundY - 80 },
      { type: "powerup", kind: "healthUp", x: 1320, y: groundY - 105 },
      { type: "powerup", kind: "healthUp", x: 1750, y: groundY - 90 },

      { type: "enemy", kind: "bug", x: 760, y: groundY },
      { type: "enemy", kind: "bug", x: 1110, y: groundY },
      { type: "enemy", kind: "bug", x: 1410, y: groundY },
      { type: "enemy", kind: "bug", x: 1770, y: groundY },
      { type: "enemy", kind: "bug", x: 2080, y: groundY },

      { type: "goal", kind: "flag", x: 2450, y: groundY },
    ],
  },
  {
    name: "Level 3: Final Grid",
    speed: 4,
    gameObjects: [
      { type: "obstacle", kind: "spikes", x: 520, y: groundY },
      { type: "obstacle", kind: "spikes", x: 820, y: groundY },
      { type: "obstacle", kind: "spikes", x: 1120, y: groundY },
      { type: "obstacle", kind: "spikes", x: 1400, y: groundY },
      { type: "obstacle", kind: "spikes", x: 1720, y: groundY },
      { type: "obstacle", kind: "spikes", x: 2050, y: groundY },
      { type: "obstacle", kind: "spikes", x: 2360, y: groundY },

      { type: "platform", kind: "basicPlatform", x: 420, y: groundY - 60 },
      { type: "platform", kind: "basicPlatform", x: 760, y: groundY - 100 },
      { type: "platform", kind: "basicPlatform", x: 1090, y: groundY - 150 },
      { type: "platform", kind: "basicPlatform", x: 1510, y: groundY - 110 },
      { type: "platform", kind: "basicPlatform", x: 1950, y: groundY - 80 },

      { type: "powerup", kind: "healthUp", x: 650, y: groundY - 80 },
      { type: "powerup", kind: "healthUp", x: 1250, y: groundY - 150 },
      { type: "powerup", kind: "healthUp", x: 1810, y: groundY - 90 },
      { type: "powerup", kind: "healthUp", x: 2280, y: groundY - 110 },

      { type: "enemy", kind: "bug", x: 680, y: groundY },
      { type: "enemy", kind: "bug", x: 980, y: groundY },
      { type: "enemy", kind: "bug", x: 1310, y: groundY },
      { type: "enemy", kind: "bug", x: 1650, y: groundY },
      { type: "enemy", kind: "bug", x: 1960, y: groundY },
      { type: "enemy", kind: "bug", x: 2440, y: groundY },

      { type: "goal", kind: "flag", x: 2800, y: groundY },
    ],
  },
];

let currentLevel = LEVELS[0];
let currentLevelIndex = 0;
// === END LEVELS DEFINITIONS ===

// === DEFAULT VALUES FOR EACH "type" AND "kind" OF OBJECT (STUDENT-EDITABLE) ===
const DEFAULT_VALUES = {
  obstacle: {
    spikes: {
      imageUrl: "images/interactable/spikes.png",
      width: 48,
      height: 48,
      hitWidth: 40,
      hitHeight: 44,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: -20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: false,
    },
  },
  enemy: {
    bug: {
      imageUrl: "images/interactable/bug.png",
      width: 75,
      height: 75,
      hitWidth: 75,
      hitHeight: 75,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 75,
      contactHealthChange: -30,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 50,
      hp: 3,
      collect: false,
    },
  },
  powerup: {
    healthUp: {
      imageUrl: "images/interactable/health-up.png",
      width: 32,
      height: 32,
      hitWidth: 32,
      hitHeight: 32,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: +20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
    },
  },
  goal: {
    flag: {
      imageUrl: "images/interactable/flag.png",
      width: 100,
      height: 100,
      hitWidth: 100,
      hitHeight: 100,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: 0,
      contactScoreChange: +100,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
    },
  },
  platform: {
    basicPlatform: {
      imageUrl: "images/interactable/basic-platform.png",
      width: 200,
      height: 50,
      hitWidth: 200,
      hitHeight: 50,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 50,
      contactHealthChange: 0,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: Infinity,
      collect: false,
    },
  },
};
// === END DEFAULT VALUES ===
