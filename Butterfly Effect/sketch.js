
var x = 0.01;
var y = 0;
var z = 0;


var a = 10;
var b = 28;
var c = 8/3;

var dt = 0.01;

var theta = 0;
var av = 0.01;
var ac = 0;

var n = 0;

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  translate(200,200);
}

function draw() {
    background(0);
    //orbitControl();
    
    var dx = a*(y-x)*dt;
    var dy = (b*x - y - x*z)*dt;
    var dz = (x*y - c*z) * dt;
    
    x += dx;
    y += dy;
    z += dz;
  
    points[n] = x;
    points[n+1] = y;
    points[n+2] = z;
    
    push();
    noFill();
    rotateY(theta);
    stroke(0, 217, 255);
    beginShape();
    for(var j = 0; j < points.length; j+=3) {
      vertex(points[j]*3, points[j+1]*3, points[j+2]*3);
    }
    endShape();
    pop();
    
  
    theta+=av;
    n+=3;
}

mousePressed = function() {
    background(0);
    x = -75 + mouseX * 0.375;
    y = 75 - mouseY * 0.375;
    points = [];
    n = 0;
};