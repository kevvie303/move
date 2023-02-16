let startTime;
let movementDetected = false;
let elapsedTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  // Calculate progress bar width and draw
  let progressBarWidth = map(elapsedTime, 0, 5000, 0, width);
  rect(0, height-30, progressBarWidth, 30);

  // Draw timer and km/h counter
  let timeText = "Time: " + nf(elapsedTime/1000, 1, 2) + "s";
  let kmhText = "Speed: " + nf(getSpeedKMH(), 1, 1) + " km/h";
  text(timeText, width/2, height/2-50);
  text(kmhText, width/2, height/2+50);
  
  // Display completion message if movementDetected
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
    elapsedTime = millis() - startTime;
    if (elapsedTime > 5000) {
      movementDetected = true;
    }
  }
}

function getSpeedKMH() {
  // Get current speed in meters per second
  let speedMS = (abs(accelerationX) + abs(accelerationY) + abs(accelerationZ)) / 3;
  // Convert to km/h
  return speedMS * 3.6;
}
