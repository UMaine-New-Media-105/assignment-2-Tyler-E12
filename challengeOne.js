//challenge 2-1, Tyler Edwards
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  Row();
  Row(0, 80);
  Row(0, 160);
  Row(0, 240);
  Row(0, 320);
  Letter();

  function Row(x, y) {
    //code created to make my 5x5 grid for me.
    push();
    translate(x, y);
    stroke("black");
    fill("hsl(180,100%,30%)");
    rect(0, 0, 80);
    rect(80, 0, 80);
    fill("gold");
    rect(160, 0, 80);
    fill("hsl(180,100%,30%)");
    rect(240, 0, 80);
    rect(320, 0, 80);
    pop();
  }
  function Letter(x, y) {
    //code created to create my initial, instead of manually typing it out.
    push();
    translate(x, y);
    fill("gold");
    rect(0, 0, 80);
    rect(80, 0, 80);
    rect(160, 0, 80);
    rect(240, 0, 80);
    rect(320, 0, 80);
    pop();
  }
}
