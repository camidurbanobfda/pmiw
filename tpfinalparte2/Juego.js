class Juego {
  constructor(){
    this.pizzas = [];
    this.mesa = new Mesa();
    
    this.pizzaActual = 0;
    
  }

agregarOtraPizza(){
  let cambioPosYAterrizaje = 285 - (25 * this.pizzas.length);
  this.pizzas.push(new Pizza(random(250, 550), -70, cambioPosYAterrizaje));
}

iniciarJuego(){
}

dibujar(){
  this.mesa.dibujar();
  
  for(let p = 0; p < this.pizzas.length; p++){
    
    if(!this.pizzas[p].yaAterrizo && (p === this.pizzaActual)){
    this.pizzas[p].caida();
    
    }
    
    if (this.pizzas[p].yaAterrizo && (p === this.pizzaActual)){
    this.pizzaActual++;
    }
    
    this.pizzas[p].dibujar();
  }
  
  if((this.pizzaActual === this.pizzas.length) && this.pizzaActual <= 9){
    this.agregarOtraPizza();
  }
  
  if(this.pizzaActual > 0){
    this.alineamientoPizzas = (this.pizzas[this.pizzaActual].posX) - (this.pizzas[this.pizzaActual - 1].posX);
  
  if(this.alineamientoPizzas >= 150 || this.alineamientoPizzas <= -150){
    this.finJuego();
  }
}
  
}

finJuego(){
}

}
