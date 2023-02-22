//challenge 2-3, Tyler Edwards
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("maroon");
  noStroke()
  fill("red"); //big heart
  addHeart(0, 0,4); //coordinates and size of the heart
  
}
function addHeart(x, y, size) {
  //function used to create the heart
  push();
  translate(x, y);
  scale(size);
  beginShape();
  vertex(50, 100);
  vertex(0, 50);
  vertex(0, 20);
  vertex(25, 0);
  vertex(35, 0);
  vertex(50, 15); // first half of heart done
  vertex(65, 0);
  vertex(75, 0);
  vertex(100, 20);
  vertex(100, 50);
  endShape(CLOSE);
  pop();

}
