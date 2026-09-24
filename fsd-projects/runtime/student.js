function moveScenery() {
  for (let i = 0; i < scenery.building.instances.length; i++) {
    const buildingInstance = scenery.building.instances[i];
    buildingInstance.x += buildingInstance.speedX - currentLevel.speed;

    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  for (let i = 0; i < scenery.lamp.instances.length; i++) {
    const lampInstance = scenery.lamp.instances[i];
    lampInstance.x += lampInstance.speedX - currentLevel.speed;

    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  for (let i = 0; i < currentLevel.gameObjects.length; i++) {
    const currentObject = currentLevel.gameObjects[i];
    create(currentObject);
  }
}

function create(obj) {
  if (obj.type === "obstacle") {
    return makeObstacle(obj);
  }

  if (obj.type === "enemy") {
    return makeEnemy(obj);
  }

  if (obj.type === "powerup") {
    return makePowerup(obj);
  }

  if (obj.type === "goal") {
    return makeGoal(obj);
  }

  if (obj.type === "platform") {
    return makePlatform(obj);
  }

  return null;
}

function filterObjects(type) {
  const filteredObjects = [];

  for (let i = 0; i < gameObjects.length; i++) {
    const currentGameObject = gameObjects[i];
    if (currentGameObject.type === type) {
      filteredObjects.push(currentGameObject);
    }
  }

  return filteredObjects;
}

function moveGameObjects(objectList) {
  for (let i = 0; i < objectList.length; i++) {
    const currentObject = objectList[i];
    currentObject.x += currentObject.speedX - currentLevel.speed;
    currentObject.y += currentObject.speedY;
  }
}

function handleProjectileCollisions() {
  for (let i = 0; i < gameObjects.length; i++) {
    const currentObject = gameObjects[i];

    for (let j = 0; j < projectiles.length; j++) {
      const currentProjectile = projectiles[j];

      if (
        isCollidingWithProjectile(currentObject, currentProjectile) === true
      ) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  for (let i = 0; i < gameObjects.length; i++) {
    const currentObject = gameObjects[i];

    if (
      currentObject.type !== "platform" &&
      isGenericCollision(currentObject)
    ) {
      handleHallebotGenericCollision(i);
    }
  }
}

function triggerLevelTransition() {
  currentLevelIndex += 1;

  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true;
    return;
  }

  currentLevel = LEVELS[currentLevelIndex];
  gameObjects = [];
  generateLevel();
}
