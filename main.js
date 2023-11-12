function preload()
{

}

function setup()
{
  canvas=createCanvas(650,500);
  canvas.position(110,250);
  video=createCapture(VIDEO);
  video.hide();
  tint_color=" ";

}

function draw()
{
 image(video,200,150,220,200);
 fill("red");
 stroke("red");
 circle(50,50,80);

 fill("red");
 stroke("red");
 circle(50,450,80);

 fill("red");
 stroke("red");
 circle(600,50,80);

 fill("red");
 stroke("red");
 circle(600,450,80);
 
 fill("green");
 stroke("green");
 rect(90,40,470,20);

 rect(90,440,470,20);

 rect(45,87,20,325);

 rect(590,87,20,325);
}

function take_snapshot()
{
  save('student.png');  
}


