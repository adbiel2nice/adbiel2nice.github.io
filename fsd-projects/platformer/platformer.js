$(function () {
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
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    // Alternating red and yellow, spaced out a bit more
    createPlatform(60, 630, 180, 20, "red");        // BED
    createPlatform(370, 575, 180, 20, "yellow");    // floor pillow
    createPlatform(700, 520, 180, 20, "red");       // snack shelf
    createPlatform(1020, 455, 180, 20, "yellow");   // stepping stool
    createPlatform(720, 375, 180, 20, "red");       // bean bag
    createPlatform(390, 295, 180, 20, "yellow");    // side table
    createPlatform(100, 215, 180, 20, "red");       // window ledge
    createPlatform(500, 145, 200, 20, "yellow");    // COUCH (finish)

    // TODO 3 - Create Collectables (nudged to sit above the moved platforms)
    createCollectable("diamond", 430, 525);
    createCollectable("steve", 1060, 395, 0.5, 0.7);
    createCollectable("max", 450, 235);
    createCollectable("kennedi", 180, 155, 0, 0);
    createCollectable("database", 580, 85);

    // TODO 4 - Create Cannons — five of them, all four sides
    createCannon("bottom", 500, 2200);   // floor lob
    createCannon("bottom", 900, 2600);   // second floor lob
    createCannon("right", 250, 1800);    // upper-right
    createCannon("right", 500, 2200);    // lower-right
    createCannon("top", 350, 1600);      // ceiling drop
    createCannon("left", 300, 2000);     // sneaky left-side

    // TODO 5 - Checkpoint
    // createCheckpoint(1000, 400);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});