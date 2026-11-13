class Pizza {
  constructor(posX, posY, posYAterrizaje, anchoActual){ 
    this.posX = posX;
    this.posY = posY;
    this.posYAterrizaje = posYAterrizaje;
    this.yaAterrizo = false;
    this.anchoActual = anchoActual;
    this.yaSumoPunto = false;
    this.yaSeRecorto = false;
  }

dibujar(){
  strokeWeight(10);
  stroke(219,162,74);
  fill(225,216,0);
  rect(this.posX, this.posY, this.anchoActual, 100);
  fill(255, 0, 0);
  strokeWeight(2);
  stroke(102, 0, 0);
  circle(this.posX + this.anchoActual * 0.20, this.posY + 15, 10);
  circle(this.posX + this.anchoActual * 0.25, this.posY + 60, 10);
  circle(this.posX + this.anchoActual * 0.55, this.posY + 45, 10);
  circle(this.posX + this.anchoActual * 0.80, this.posY + 30, 10);
  circle(this.posX + this.anchoActual * 0.70, this.posY + 75, 10);
}

caida(){
  
  if(this.posY < this.posYAterrizaje && this.yaAterrizo === false){
    this.posY += 2;
  }else{
    this.posY = this.posYAterrizaje;
    this.yaAterrizo = true;
}
}

recortar(anterior){
  
  let derechaNueva = this.posX + this.anchoActual;
  let derechaAnterior = anterior.posX + anterior.anchoActual;let izquierda = this.posX;

if(anterior.posX > this.posX){
  izquierda = anterior.posX;
}

let derecha = derechaNueva;

if(derechaAnterior < derechaNueva){
  derecha = derechaAnterior;
}


if(derecha > izquierda){
this.anchoActual = derecha - izquierda;
this.posX = izquierda;
return true;
}else{
  return false;
}  
}

mover(){
  
  if(keyIsDown(LEFT_ARROW) === true){
    juego.pizzas[juego.pizzaActual].posX -= 1.3;
  }
  
  
  if(keyIsDown(RIGHT_ARROW) === true){
    juego.pizzas[juego.pizzaActual].posX += 1.3;
  }
  
}

}
