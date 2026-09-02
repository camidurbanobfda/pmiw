function mostrarEstado(){
  
 if(accionActual == 1){
   contadorPicar++;
     
   if(contadorPicar >= duracionPicar){
     accionActual = 2;
   }
 }
 
 
 if(accionActual == 2){
   contadorPicarFuerza++;
   
   if(contadorPicarFuerza >= duracionPicarFuerza){
     terminoDePicar = true;
     accionActual = 0;
   }
 }
   

 if(accionActual == 3){
   contadorQuieto++;
   
   if(contadorQuieto >= duracionQuieto){
     accionActual = 4;
   } 
 }
 
}


function velocidadFuerza(){
//para que en picarfuerza los frames se cambien más rápido

  if(accionActual <= 1 || accionActual >= 3){
    return 10;
    
  }else if(accionActual == 2){
    return 6;
  }
  
}

function corregirPosicion(){
//para que coincida la posicion de picarfuerza con los otros estados

 let frames = acciones[accionActual];
 let frameActual = elegirFrame(frames, velocidadFuerza());

  if(accionActual == 2){
    image(frameActual, xPersonaje-6, 483);
    
  }else{
    image(frameActual, xPersonaje, 490);
  }
  
  
}
