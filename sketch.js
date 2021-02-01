var hr 
 var mn 
 var sc 

var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,400);
 }

function draw() {
  background("black"); 

  fill("red")
  textSize(30)
  text("T",500,200)

  fill("yellow")
  textSize(30)
  text("I",520,200)

  fill("blue")
  textSize(30)
  text("C",530,200)

  fill("red")
  textSize(30)
  text("K",550,200)

  fill("yellow")
  textSize(30)
  text("T",585,200)

  fill("blue")
  textSize(30)
  text("O",602,200)

  fill("red")
  textSize(30)
  text("C",625,200)

  fill("yellow")
  textSize(30)
  text("K",645,200)

   hr = hour()
   mn = minute()
   sc = second()
 
  translate(200,200)
  rotate(-90)

  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360)
 
  push()
  rotate(scAngle)
  stroke("red")
  strokeWeight(2)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("yellow")
  strokeWeight(4)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop()

noFill()

  stroke("red")
 strokeWeight(7)
  arc(0,0,300,300,0,scAngle)

  stroke("yellow")
 strokeWeight(7)
  arc(0,0,285,280,0,mnAngle)

  stroke("blue")
 strokeWeight(7)
  arc(0,0,270,260,0,hrAngle)
}