class Juego {
  constructor(){
    this.pizzas = [];
    this.mesa = new Mesa();
    this.contador = new Contador();
    
    this.pizzaAterrizada = 0;
    this.pizzaActual = 0;
    this.caidaAprobada = false;
    this.perder = false;
    
  }

agregarOtraPizza(){
  
  let anchoPrimeraPizza = 150;

if(this.pizzas.length > 0){
  anchoPrimeraPizza = this.pizzas[this.pizzas.length - 1].anchoActual;
}
  
  let cambioPosYAterrizaje = 285 - (25 * this.pizzas.length);
  this.pizzas.push(new Pizza(random(220, 580), -70, cambioPosYAterrizaje, anchoPrimeraPizza));
}

iniciarJuego(){
}

dibujar(){
  
  this.mesa.dibujar();
  
  this.contador.dibujar();
  
}

dibujarCaidaPizza(){
  
  for(let p = 0; p < this.pizzas.length; p++){
    
    if(!this.pizzas[p].yaAterrizo && (p === this.pizzaActual)){
    this.pizzas[p].caida();
    this.pizzas[p].mover();
    
    }
    
    if(this.pizzas[p].yaAterrizo && (p === this.pizzaActual)){
  this.pizzaAterrizada = p;
  this.pizzaActual++;
}
    
    this.pizzas[p].dibujar();
  }
  
}


controlarAreaPizza(){
  
  if(this.pizzaAterrizada === 0 && this.pizzas.length === 1){
    this.caidaAprobada = true;
  }
  
  if((this.pizzaAterrizada > 0) && (this.pizzaAterrizada < this.pizzas.length) && (this.pizzas[this.pizzaAterrizada].yaAterrizo) && (this.pizzas[this.pizzaAterrizada].yaSeRecorto === false)){
    let resultado = this.pizzas[this.pizzaAterrizada].recortar(this.pizzas[this.pizzaAterrizada - 1]);
    
    this.pizzas[this.pizzaAterrizada].yaSeRecorto = true;
  
  if(resultado === false){
      this.caidaAprobada = false;
      this.perder = true;
    } else {
      this.caidaAprobada = true;
    }
  
}

if((this.pizzaActual === this.pizzas.length) && (this.pizzaActual <= 9) && (this.pizzaActual === 0 || this.caidaAprobada === true)){
    this.agregarOtraPizza();
  }
  
}

sumarPunto(){
  
  for(let p = 0; p < this.pizzas.length; p++){
  
    if(this.caidaAprobada && this.pizzas[p].yaAterrizo && this.pizzas[p].yaSumoPunto === false){
      this.pizzas[p].yaSumoPunto = true;
    this.contador.cambiarValor();
    
  }
  
  if(this.contador.valor === 10){
    this.finBueno();
  }
  
}
}


finMalo(){
  image(fondoFin, 0, 0, 800, 400);
  image(cartelPerder, 210, 50, 350, 150);
  botonReinicio();
}

finBueno(){
  image(fondoFin, 0, 0, 800, 400);
  image(cartelGanar, 210, 50, 350, 150);
  botonReinicio();
}

}
