function setup() {
  createCanvas(windowWidth, windowHeight);
  background(164,162,148);
  angleMode(DEGREES)
 // Black bar 1
    push();
    rotate(-70);
    fill(21, 21, 21, 200);
    stroke(21, 21, 21, 200);
    rect(-windowHeight/2, 0, 200, 1800);
    pop();
  // Red bar 1
    push();
    rotate(-60);
    fill(154, 40, 30, 195);
    stroke(154, 40, 30, 195);
    rect(-windowHeight/3.5, 0, 200, 1800);
    pop();
  // Black bar 2
    push();
    rotate(25);
    fill(21, 21, 21, 200);
    stroke(21, 21, 21, 200);
    rect(windowWidth/1.6, -windowHeight-200, 200, 2000 );
    pop();
  //Red bar 2
    push();
    rotate(35);
    fill(154, 40, 30, 195);
    stroke(154, 40, 30, 195);
    rect(windowWidth/1.6, -windowHeight-200, 200, 2000 );
    pop();
  // White circle
    fill(223, 221, 200, 175)
    stroke(223, 221, 200, 175)
    circle(windowWidth/2.5, windowHeight/2.5, 550)
}

function draw() {
}
