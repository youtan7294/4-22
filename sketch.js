let x;

function setup() {
  createCanvas(1000, 1000);
  x=0;
}

function draw(){
    background(400);
    circle(width/2, height/2,50
    );

    x=x+20;
    if(x>width){
       x=0;
    }
circle(x,250,50)
textSize(100);
textAlign(CENTER,CENTER)
text("よろしく",500,500)





}
