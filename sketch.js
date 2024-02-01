function setup() {
  createCanvas(400, 400);
  background(200);

  rotate(-PI/20);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(5);

    noStroke();
    fill(255);
    ellipse(x, y, size, size*random(40));
  }
}
