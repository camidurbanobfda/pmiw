let escenaActual;
let framesTotales = 3;
let tortugaActual = 0;

let leonardoCaminando = [];
let donatelloCaminando = [];
let rafaelCaminando = [];
let michCaminando = [];

let contador;
let posXLeonardo = 0;
let posXDonatello = 0;
let posXRafael = 0;
let posXMich = 0;
let xPiso = 0;

function preload() {

piso = loadImage('images/piso.jpg');
leonardo();
donatello();
rafael();
mich();
  
}
async function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
}


function draw() {
background(200);
  
dibujarPiso();
mostrarTortugas();
  
} 
