/**
* Olguta Constantina Nedelcu 
* Arte y Tec: Projecto final, 01/01/21
* Consiste en una imagen que pretende representar un poema flart
*/ 

let img;
function setup() {
  createCanvas(400, 400);
  strokeWeight(5);
  background(100);

}


function draw() {
  background(255);
  //Outside Frame
  rect(-1, -1, 400, 400);
  img = loadImage('/ornitorrinco 1.jpg');
  image(img,10,10,50,50);

  //Fill in the blue
  fill(106,55,255);
  rect(0,280,80,400);
  noFill();
  
  //Fill in the red
  fill(255,53,34);
  rect(50,0,400,280);
  noFill();
  
    //Fill in the yellow
  fill(255,250,34);
  rect(1,0,80,100);
  rect(280,280,280,400);
  noFill();
  
  line(90,0,80,400);
  line(0,280,400,280);
  
  //Heavy stroke
  strokeWeight(8);
  line(0,150,80,150);
  line(20,120,80,150);
  line(340,280,340,400);
  strokeWeight(3);
  
  //group of line
  line(340,950,400,350);
  line(340,360,400,360);
  line(340,370,400,370);
  line(340,390,400,380);
  line(340,390,400,390);
  ellipse(40,40,80,80);
  fill(255);
  arc(40, 40, 80, 80, 0,HALF_PI);
  
  //Circle big in white
  fill(255);
  ellipse(40,160,320,320);
  noFill();
  fill(190);
  arc(240, 160, 320, 320, 0, 3.14,OPEN);
  noFill();
  fill(225);
  ellipse(40,160,320,320);

  fill(106,55,255);
  arc(280, 100, 210, 210, 2.6, 0.1,PIE);
  noFill();
  ellipse(280,120,210,210);
  arc(270, 100, 220, 210, 2.6, 0.1,PIE);

 
  rect(160, 50,70, 400, 10, 10, 0, 0);
  fill(225,53,34);
  ellipse(220,220,60,60);
  noFill();
  line(80,0,40,80);
  ellipse(140,140,90,90);
  
  // Try Vertice
  beginShape();
  vertex(0, 0);
  vertex(80, 150);
  vertex(400, 280);
  vertex(80, 400);
  vertex(70, 400);
  endShape(CLOSE);
  
}