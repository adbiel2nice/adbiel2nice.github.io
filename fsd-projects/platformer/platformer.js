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
    // Neon sunset gradient climb — cool colors rising to hot colors
    createPlatform(80, 620, 180, 20, "#1E1B4B");     // BED — deep indigo
    createPlatform(360, 570, 180, 20, "#4C1D95");    // floor pillow — dark purple
    createPlatform(680, 520, 180, 20, "#7C3AED");    // snack shelf — royal purple
    createPlatform(1000, 460, 180, 20, "#C026D3");   // stepping stool — magenta
    createPlatform(720, 380, 180, 20, "#EC4899");    // bean bag — hot pink
    createPlatform(400, 300, 180, 20, "#F43F5E");    // side table — rose red
    createPlatform(120, 220, 180, 20, "#F97316");    // window ledge — orange
    createPlatform(480, 160, 200, 20, "#FACC15");    // COUCH — golden yellow (finish)

    // TODO 3 - Create Collectables
    createCollectable("diamond", 420, 520);
    createCollectable("steve", 1040, 400, 0.5, 0.7);
    createCollectable("max", 460, 240);
    createCollectable("kennedi", 200, 160, 0, 0);
    createCollectable("database", 560, 100);

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