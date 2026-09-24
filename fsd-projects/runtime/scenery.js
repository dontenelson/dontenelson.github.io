// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1600,
    instances: [
      { x: 250, width: 120, height: 260, speedX: -1.5 },
      { x: 600, width: 150, height: 330, speedX: -2 },
      { x: 980, width: 110, height: 290, speedX: -1.75 },
      { x: 1300, width: 170, height: 370, speedX: -2.25 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1600,
    instances: [
      { x: 350, width: 50, height: 150, speedX: -1 },
      { x: 780, width: 50, height: 180, speedX: -1.5 },
      { x: 1120, width: 50, height: 170, speedX: -1.25 },
      { x: 1480, width: 50, height: 190, speedX: -1.75 },
    ],
  },
};
