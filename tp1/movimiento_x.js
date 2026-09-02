function moverPersonaje(){

 if(accionActual == 0){
   xPersonaje += velocidad;
    
   if(xPersonaje >= 295){
     accionActual = 1;
  }
  
  
  if(xPersonaje >= 650 && xFondo >= -550 && xPiso >= -1100){
    xPersonaje = 650;
  }
  
  
  if(xFondo <= -550 && xPiso <= -1100){
    xPersonaje += velocidad;
  }


  if(xPersonaje >= 690){
    xPersonaje = 690;
    accionActual = 3;
  }

 }
  
}



function moverFondo(){
  
  if(xPersonaje >= 650 && xFondo >= -550){
    xFondo -= 2;
  }
  
  image(fondo, xFondo, 450, 2000, 100);
  
}



function moverPiso(){
  
  if(xPersonaje >= 650 && xPiso >= -1100){
    xPiso -= 4;
  }
  
  image(piso, xPiso, 548, width, 100);
  image(piso, xPiso + 800, 548, width, 100);
  image(piso, xPiso + 1600, 548, width, 100); //dos veces más para que se siga dibujando al moverse
  
}
