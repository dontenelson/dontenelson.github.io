$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 700, 350, 20, "rgb(56, 189, 248)");
    createPlatform(420, 640, 220, 20, "rgb(46, 204, 113)");
    createPlatform(300, 520, 180, 20, "rgb(249, 115, 22)");
    createPlatform(760, 440, 220, 20, "rgb(168, 85, 247)");
    createPlatform(1040, 360, 200, 20, "rgb(59, 130, 246)");
    createPlatform(620, 280, 180, 20, "rgb(244, 114, 182)");
    createPlatform(250, 190, 150, 20, "lime");

    // TODO 3 - Create Collectables
    createCollectable("steve", 150, 660, 0, 0.7);
    createCollectable("diamond", 500, 600, 0, 0.8);
    createCollectable("grace", 840, 400, 0, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 250, 2000);
    createCannon("right", 320, 1600);
    createCannon("left", 500, 1800);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
