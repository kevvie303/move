let startTime;
let movementDetected = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
}

function draw() {
  background(220);
  if (movementDetected) {
    text("You did it!", width/2, height/2);
  }
}

function deviceMoved() {
  if (!startTime) {
    startTime = millis();
  }
  let acceleration = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
  if (acceleration > 20) {
    let elapsedTime = millis() - startTime;
    if (elapsedTime > 5000) {
      movementDetected = true;
    }
  }
}
