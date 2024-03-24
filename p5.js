function setup() {
  createCanvas(windowWidth, windowHeight);
}

let circleDiameter = 200
let xPosition = -circleDiameter/2
let rate = 1

function draw() {
  background(0)
  let c = color(mouseX, mouseY, 0);
  fill(c);

  circle(xPosition, mouseY, circleDiameter)

  xPosition += rate;
  if (xPosition >= width + circleDiameter/2){
    xPosition = -circleDiameter/2
    rate += 1
    circleDiameter -= 20
  }
  if (rate==10){
    rate = 1
    circleDiameter = 200
  }
}
