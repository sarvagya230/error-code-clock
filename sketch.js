var hr, min , sec
function setup ()
{
  createCanvas(500,500)
 // translate(200,200)
  angleMode(DEGREES)
  
 

}
function draw()
{
  translate(200,200)
  hr=hour();
  min=minute();
  sec=second();
  background(0)
  noStroke()
  push()
  strokeWeight(8)
  stroke(255)
  noFill()
  
  //ellipse(200,200,300,300)
  pop()
  push()

  strokeWeight(8)
  stroke(255,100,150)
  noFill()
  
  var end =map(sec,0,60,0,360)
  arc(0,0,300,300,-90,end-90)
  push()
  rotate(0)
  strokeWeight(4)
  stroke(255)
  
  line(0,0,0,end)
  
  pop()

  stroke(150,100,150)
  var end2 =map(min,0,60,0,360)
  arc(0,0,280,280,-90,end2-90)

  stroke(150,255,100)
  var end3 =map(hr%12,0,12,0,360)
  arc(0,0,260,260,-90,end3-90)
  pop()
  push()
  fill(255)

  text(hr+':'+min+':'+sec,10,10)
  pop()


}