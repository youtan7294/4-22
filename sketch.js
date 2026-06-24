let x;
let y;

function setup() {
  createCanvas(300, 300);
  x = 200;
  y = 200;
}

function draw(){
    background(0,200,random(200),20);
    y = y + 1;
    if(y>height){
      y = 0;
    }
  for(let i =0; i<5; i++)
  circle(i*100,y,random(50))
}