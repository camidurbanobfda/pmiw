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
let xFondo = 0;
let yLogo = 0;
let xAutoras = 1500;
let xCreadores = 3000;
let xMancha1 = 1500;
let xMancha2 = 3000;


function preload() {

preL();
  
}
async function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
}


function draw() {
background(200);
  
animacionCreditos();

} 
