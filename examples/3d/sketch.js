function setup(){
  createCanvas(windowWidth, windowHeight, 'webgl');
  // background(0, 100, 200, 255)
  // translate(0, 0.0, -200)
  // cube(100, 100, 100)
}

var theta = 0;

function draw(){
  background(0, 100, 200, 255)

  translate(-150, 0.0, -200)
  push()
  rotateZ(theta)
  rotateX(theta * 1.5)
  rotateY(theta * 0.5)
  plane(100, 100)
  pop()
  translate(50, 0, 0)
  push()
  rotateZ(theta)
  rotateX(theta * 1.5)
  rotateY(theta * 0.5)
  cube(100, 100, 100)
  pop()
  translate(50, 0, 0)
  push()
  rotateZ(theta)
  rotateX(theta)
  cylinder(100, 100)
  pop()
  translate(50, 0, 0)
  push()
  rotateZ(theta)
  rotateX(theta)
  cone(100, 100, 100)
  pop()
  translate(50, 0, 0)
  push();
  rotateZ(theta)
  rotateX(theta)
  torus(100);
  pop()
  translate(50, 0, 0)
  push()
  rotateZ(theta)
  rotateX(theta)
  sphere(100, 100)
  pop()
  theta += 0.05
}