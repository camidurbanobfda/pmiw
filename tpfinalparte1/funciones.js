function controladorDeAnimaciones(escenaActual, velocidad, PosX, tamX, tamY){
  let  contador = floor (frameCount/velocidad)%escenaActual.length;
  let escala = 2;
  image(escenaActual[contador], PosX, 348, escenaActual[contador].width * escala, escenaActual[contador].height * escala); //calcula el ancho y alto de cada escena para que se pueda modificar el tamaño sin cambiar la escala
  
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

function mostrarTortugas(){
  
  if(tortugaActual == 0 && posXLeonardo < 807){
  controladorDeAnimaciones(leonardoCaminando, 10, posXLeonardo);
  posXLeonardo += 2;
  

}else if(tortugaActual == 0 && posXLeonardo >= 807){
  tortugaActual = 1;
  
}

if(tortugaActual == 1 && posXDonatello < 807){
  controladorDeAnimaciones(donatelloCaminando, 10, posXDonatello);
  posXDonatello += 2;

}else if(tortugaActual == 1 && posXDonatello >= 807){
  tortugaActual = 2;
  
}
  
  if(tortugaActual == 2 && posXRafael < 807){
  controladorDeAnimaciones(rafaelCaminando, 10, posXRafael);
  posXRafael += 2;

}else if(tortugaActual == 2 && posXRafael >= 807){
  tortugaActual = 3;
  
}

if(tortugaActual == 3 && posXMich < 807){
  controladorDeAnimaciones(michCaminando, 10, posXMich);
  posXMich += 2;

}else if(tortugaActual == 3 && posXMich >= 807){
  tortugaActual = 4;
}

if(tortugaActual <= 3){
  xPiso--;
}
  
}

function dibujarPiso(){

image(piso, xPiso, 510);
image(piso, xPiso + 523, 510); //para que se siga dibujado
image(piso, xPiso + 1046, 510);
image(piso, xPiso + 1569, 510);
image(piso, xPiso + 2092, 510);
image(piso, xPiso + 2615, 510);
  
}
