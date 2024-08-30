function setup() {
  createCanvas(400, 400);
  background('BLACK');
}

function draw() {
 
  if (mouseIsPressed) {
    // Set brush properties
    stroke('LIGHTBLUE'); 
    strokeWeight(10); 

    // Draw a line from the previous mouse position to the current mouse position
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
