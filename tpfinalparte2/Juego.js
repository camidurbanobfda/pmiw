class Juego {
  constructor(){
    this.pizzas = [];
    this.mesa = new Mesa();
    this.contador = new Contador();
    
    this.pizzaAterrizada = 0;
    this.pizzaActual = 0;
    this.caidaAprobada = false;
    this.perder = false;
    
    this.pantallaActual = "creditos";
    
    this.posYLogo = -150;
    this.posXPizzaTime = -200;
    this.posXCreadores = -180;
    this.posXAlumnas = 800;
    
    this.dentroBotonJugar = false;
    this.dentroBotonContinuar = false;
    this.dentroBotonReinicio = false;
    
    this.musicaJuegoIniciada = false;
    this.sonidoPerderReproducido = false;
    this.sonidoGanarReproducido = false;
  }


iniciarJuego(){
}

cambiarPantallas(){
  
  if(this.pantallaActual === "creditos"){
    this.creditos();
  }

  if(this.pantallaActual === "instrucciones"){
    this.instrucciones();
  }

  if(this.pantallaActual === "juego"){
    if(this.perder === true){
      this.finMalo();
    } else {
      this.dibujar();
      this.controlarAreaPizza();
      this.dibujarCaidaPizza();
      this.sumarPunto();
      
      if(this.musicaJuegoIniciada === false){
      musicaJuego.play();
      this.musicaJuegoIniciada = true;
    }
  }
  
}
}

creditos(){
  
  image(fondoMadera, 0, 0, width, height);
  
  
  
  image(logo, 150, this.posYLogo, 450, 350);
  image(pizzaTime, this.posXPizzaTime, 200, 200, 180);
  
  fill(255);
  stroke(102, 0, 0);
  textFont(fuente);
  textSize(15);
  text('Creadores del juego:\nKevin Eastman y\nPeter Laird', this.posXCreadores, 200);
  text('Creadoras del minijuego:\nCamila D\'Urbano Brescia y\nMicaela Abigail Fernández', this.posXAlumnas, 200);
  
if(this.posYLogo <= -70){
    this.posYLogo++;
    
}

if(this.posYLogo >= -70 && this.posXCreadores <= 35 && this.posXAlumnas >= 400){
  this.posXCreadores++;
  this.posXAlumnas--;
}

if(this.posYLogo >= -70 && this.posXPizzaTime <= 275){
  
    this.posXPizzaTime += 2.5;
}else if(this.posXPizzaTime >= 275){


botonJugar();
}
}

instrucciones(){
  image(fondoMadera, 0, 0, width, height);
  image(instrucciones, 210, -10, 350, 150);
  fill(255);
  stroke(102, 0, 0);
  textFont(fuente);
  textSize(20);
  text('Para entrar a la pizzería vas a tener que cumplir un desafío para\nprobar que sos digno de disfrutar las pizzas de Cowabunga. El reto\nconsiste en apilar correctamente 10 pizzas que van a caerte del cielo,\nusá las flechas de tu teclado para moverlas hacia la izquierda o la\nderecha. ¡Cuidado! Si apoyás las pizzas muy al borde, tu torre va a\nhacerse cada vez más pequeña y va a ser más complicado llegar al final,\ny si eso pasa... ¡Te van a despachar en el callejón oscuro!', 15, 160);

  botonContinuar();
}

agregarOtraPizza(){
  
  let anchoPrimeraPizza = 150;

if(this.pizzas.length > 0){
  anchoPrimeraPizza = this.pizzas[this.pizzas.length - 1].anchoActual;
}
  
  let cambioPosYAterrizaje = 285 - (25 * this.pizzas.length);
  this.pizzas.push(new Pizza(random(220, 580), -70, cambioPosYAterrizaje, anchoPrimeraPizza));
}


dibujar(){
  
  image(fondoPizzeria, 0, 0, width, height);
  
  noStroke();
  fill(0, 255, 0, 50);
  rect(0, 0, width, height);
  
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
  
  musicaJuego.pause();
  sonidoGanar.pause();
  
  if(this.sonidoPerderReproducido === false){
    sonidoPerder.play();
    this.sonidoPerderReproducido = true;
  }
  
  botonReinicio();
}

finBueno(){
  image(fondoFin, 0, 0, 800, 400);
  image(cartelGanar, 210, 50, 350, 150);
  
  musicaJuego.pause();
  sonidoPerder.pause();
  
  if(this.sonidoGanarReproducido === false){
    sonidoGanar.play();
    this.sonidoGanarReproducido = true;
  }
  
  botonReinicio();
}

}
