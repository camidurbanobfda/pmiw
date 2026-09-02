function dibujarPiedra(){
  
  if(accionActual <= 2 && terminoDePicar == false){
    image(piedra, 300, 420, 200, 200);
    
    }else if(accionActual == 0 && terminoDePicar == true){
       piedritas();
  }
  
}


function piedritas(){
//con xPiso para que queden atras cuando el personaje avance

  image(piedrita, 450 + xPiso, 550, 25, 25);
  
  push();
  translate(360 + xPiso, 550);
  rotate(radians(60));
  image(piedrita, 0, 0, 20, 20);
  pop();
  
  push();
  translate(400 + xPiso, 540);
  rotate(radians(45));
  image(piedrita, 0, 0, 20, 20);
  pop();
  
  push();
  translate(450 + xPiso, 555);
  rotate(radians(135));
  image(piedrita, 0, 0, 20, 20);
  pop();
  
  push();
  translate(420 + xPiso, 580);
  rotate(radians(180));
  image(piedrita, 0, 0, 15, 15);
  pop();
  
  push();
  translate(390 + xPiso, 570);
  rotate(radians(80));
  image(piedrita, 0, 0, 15, 15);
  pop();
  
  push();
  translate(375 + xPiso, 545);
  rotate(radians(65));
  image(piedrita, 0, 0, 15, 15);
  pop();
}

function dibujarTituloYRegalo(){
  
  image(titulo, 120, 55);
  image(regalo, 1835 + xPiso, 515, 40, 40); //con xPiso para que aparezca cuando el personaje avance
  
}
