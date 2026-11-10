let juego = new Juego();

function preload(){
  images();
}

function setup() {
  createCanvas(800, 400);
  juego.iniciarJuego();
  
}


function draw() {
  background(78, 148, 48);
  
  if(juego.perder === true){
  juego.finMalo();
  return;
}else{
  juego.dibujar();
  juego.controlarAreaPizza();
  juego.dibujarCaidaPizza();
  juego.sumarPunto();
}
}
