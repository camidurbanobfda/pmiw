let juego = new Juego();

function setup() {
  createCanvas(800, 400);
  juego.iniciarJuego();

}


function draw() {
  background(0, 150, 150);
  juego.dibujar();
  juego.dibujarCaidaPizza();
  juego.controlarAreaPizza();
  juego.sumarPunto();
  
}
