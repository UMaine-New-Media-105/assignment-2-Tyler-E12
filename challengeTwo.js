//challenge 2-2, Tyler Edwards
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("maroon");
  fill("red"); //big heart
  addHeart(-200, -100, 2);
  fill("pink"); //smaller heart inside
  addHeart(0, 50);
  addGradient();
}
function addHeart(x, y, size) {
  //function used to create the heart
  push();
  translate(x, y);
  scale(size);
  beginShape();
  vertex(200, 200);
  vertex(150, 150);
  vertex(150, 120);
  vertex(175, 100);
  vertex(185, 100);
  vertex(200, 115); // first half of heart done
  vertex(215, 100);
  vertex(225, 100);
  vertex(250, 120);
  vertex(250, 150);
  endShape(CLOSE);
  pop();
}
function addGradient(x, y, size) {
  //added a gradient to add some flair
  fill("rgb(114,3,3)");
  noStroke();
  rect(0, 320, 80);
  rect(80, 320, 80);
  rect(160, 320, 80);
  rect(240, 320, 80);
  rect(320, 320, 80);
}
