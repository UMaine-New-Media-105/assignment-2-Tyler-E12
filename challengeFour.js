//the two countries I chose were Tonga and Ethiopia
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  noStroke();
  fill("darkgreen");
  rect(0, 0, 600, 133.3); //the first third of the background flag
  fill("yellow");
  rect(0, 133.4, 600, 133.3); //the second third of the background flag
  fill("red");
  rect(0, 266.4, 600, 133.3); //the last third of the background flag
  noStroke();
  fill("red");
  rect(250, 75, 100, 58); //the first part of the cross
  fill("darkgreen");
  rect(250, 132, 100, 58);
  rect(165, 150, 270, 90); //the middle parts of the cross
  rect(250, 209, 100, 58);
  fill("yellow");
  rect(250, 267, 100, 58); //the bottom part of the cross
  rotate(50);
  drawStar(-120, 12);
  rotate(-100);
  drawStar(400, -144);
}

function drawStar(x, y, rotation) {
  //this function is used to draw the star and circle.
  push();
  translate(x, y);
  fill("darkblue");
  ellipse(150, 202, 120); //this makes the circle portion of the function.
  noFill();
  stroke("gold");
  strokeWeight(4);
  beginShape();
  vertex(150, 150);
  vertex(180, 240);
  vertex(150, 220);
  vertex(120, 240);
  vertex(150, 150); //this creates the first part of the star shape.
  endShape();
  beginShape();
  vertex(150, 220);
  vertex(100, 185);
  vertex(200, 185);
  vertex(150, 220); //this creates the second part of the star shape.
  endShape();
  pop();
}
