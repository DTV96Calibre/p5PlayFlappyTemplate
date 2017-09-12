/* Use preload to load images before the game starts. (loading does not have to be done here)
 */
function preload(){
}

function setup() {
  // Create the canvas on which we'll draw the game
  createCanvas(800,400);
  // A sprite is an image representing something in the game.
  var bird = createSprite(400, 200, 1, 1); // createSprite(x, y, width, height)
  bird.addAnimation("flapping", "assets/bird/frame-1.png", "assets/bird/frame-2.png")
}

function draw() {
  /* Drawing always draws over whats already on the canvas,
   so sprites that are drawn first will have later sprites drawn over them.
   In general, sprites are drawn in the order in which they were created.*/
  background(255,255,255);
  drawSprites();
  processInput();
}

function processInput(){
  // Check for and react to input here
}
