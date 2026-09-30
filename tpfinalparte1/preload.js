function preL(){

mancha = loadImage('images/mancha.png');
fuenteConsola = loadFont('data/fuenteconsola.ttf');  
logo = loadImage('images/logo.png');
fondo = loadImage('images/fondo.png');
piso = loadImage('images/piso.jpg');
leonardo();
donatello();
rafael();
mich();

}




function leonardo(){
  
  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    leonardoCaminando.push(loadImage('images/leonardo_'+frameActual+'.png'))
  }
  
}

function donatello(){
  
  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    donatelloCaminando.push(loadImage('images/donatello_'+frameActual+'.png'))
  }
  
}

function rafael(){
  
  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    rafaelCaminando.push(loadImage('images/rafael_'+frameActual+'.png'))
  }
  
}

function mich(){
  
  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    michCaminando.push(loadImage('images/mich_'+frameActual+'.png'))
  }
  
}
