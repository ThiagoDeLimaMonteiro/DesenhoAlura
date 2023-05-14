let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y
 
function setup() {
  random(0, 255)
  createCanvas(400, 400);
  cor = color(random(0,255), random(0, 255), random(0,255))
  posicaoHorizontal=200
posicaoVertical=200
}

function draw() {
  
   fill(cor)
  circle(posicaoHorizontal, posicaoVertical, 50)
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal +1
  }
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal -1
  }
  if(mouseY < posicaoVertical) {
    posicaoVertical = posicaoVertical -1
  }
  if(mouseY > posicaoVertical) {
    posicaoVertical = posicaoVertical +1
  }
  if(mouseIsPressed) {
    cor = color(random(0,255), random(0, 255), random(0,255), random(0,100))
  }
}
