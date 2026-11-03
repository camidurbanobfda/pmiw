class Pizza {
  constructor(posX, posY, posYAterrizaje){ 
    this.posX = posX;
    this.posY = posY;
    this.posYAterrizaje = posYAterrizaje;
    this.yaAterrizo = false;
    this.ancho = 150;
    this.yaSumoPunto = false;
  }

dibujar(){
  rect(this.posX, this.posY, this.ancho, 100);
}

caida(){
  
  if(this.posY < this.posYAterrizaje && this.yaAterrizo === false){
    this.posY += 2;
  }else{
    this.posY = this.posYAterrizaje;
    this.yaAterrizo = true;
}
}

moverDerecha(){
}

moverIzquierda(){
}

}


function keyPressed(){
  
  if(keyCode === LEFT_ARROW){
    juego.pizzas[juego.pizzaActual].posX -= 10;
  }
  
  if(keyCode === RIGHT_ARROW){
    juego.pizzas[juego.pizzaActual].posX += 10;
  }
  
}
