let juego = new Juego();

function preload(){
  images();
}

function setup() {
  createCanvas(800, 400);
  juego.iniciarJuego();
  
}


function draw() {
  background(255);
  
juego.cambiarPantallas();

}
