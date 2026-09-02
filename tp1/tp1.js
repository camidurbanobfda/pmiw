let acciones = [];
const nombres = ['caminar', 'picar', 'picarfuerza', 'quieto', 'feliz'];
const framesPorAccion = [2, 2, 2, 1, 2];

let velocidad = 2; //camina avanzando cada 2 pixeles

let xPersonaje = 0;
let xFondo = 0;
let xPiso = 0;

let accionActual = 0;

let contadorPicar = 0;
let duracionPicar = 100;

let contadorPicarFuerza = 0;
let duracionPicarFuerza = 160;
let terminoDePicar = false;

let contadorQuieto = 0;
let duracionQuieto = 5;



function preload(){
  
  cargarImagenes();
  
}

function setup() {

  createCanvas(800, 600);
  
}


function draw() {

  background(135, 206, 235);
  
  moverPersonaje();
  mostrarEstado();
  
  moverFondo();
  moverPiso();
  
  dibujarPiedra();
  
  dibujarTituloYRegalo();
  
  corregirPosicion();
  
}
  


function keyPressed(){
  
  reiniciar();
  
}
