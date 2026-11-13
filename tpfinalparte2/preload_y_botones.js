function images(){
  fondoFin = loadImage('images/fondoFin.jpg');
  cartelPerder = loadImage('images/cartelPerder.png');
  cartelGanar = loadImage('images/cartelGanar.png');
  mesa = loadImage('images/mesa.jpg');
  volver = loadImage('images/volver.png');
  volverActivo = loadImage('images/volverActivo.png');
  fondoPizzeria = loadImage('images/fondoPizzeria.jpg');
  fondoMadera = loadImage('images/fondoMadera.jpg');
  logo = loadImage('images/logo.png');
  pizzaTime = loadImage('images/pizzaTime.png');
  pizzaTimeActivo = loadImage('images/pizzaTimeActivo.png');
  fuente = loadFont('data/fuenteconsola.ttf');
  jugar = loadImage('images/jugar.png');
  instrucciones = loadImage('images/instrucciones.png');
  flecha = loadImage('images/flecha.png');
  flechaActiva = loadImage('images/flechaActiva.png');
  musicaJuego = new Audio('data/musicaJuego.mp3');
  sonidoPerder = new Audio('data/finalMalo.mp3');
  sonidoGanar = new Audio('data/finalBueno.mp3');
}


function botonJugar(){
  
  if((mouseX < 276) || (mouseX > 476) || (mouseY < 200) || (mouseY > 380)){
      image(pizzaTime, 276, 200, 200, 180);
  }else{
    image(pizzaTimeActivo, 276, 200, 200, 180);
    image(jugar, 400, 170, 150, 150);
    juego.dentroBotonJugar = true;
  }
  }
  
  
  function botonContinuar(){
  
  if((mouseX < 620) || (mouseX > 770) || (mouseY < 310) || (mouseY > 410)){
      image(flecha, 620, 310, 150, 100);
  }else{
    image(flechaActiva, 620, 310, 150, 100);
    juego.dentroBotonContinuar = true;
  }
  }


function botonReinicio(){
  if((mouseX < 255) || (mouseX > 505) || (mouseY < 240) || (mouseY > 340)){
      image(volver, 255, 240, 250, 100);
  }else{
    image(volverActivo, 255, 240, 250, 100);
    juego.dentroBotonReinicio = true;
  }
}

function mousePressed(){
 
  if(juego.dentroBotonJugar === true){
    
    juego.pantallaActual = "instrucciones";
    
  }
  
  if(juego.dentroBotonContinuar === true){
    
    juego.pantallaActual = "juego";
    
  }
  
  if(juego.dentroBotonReinicio === true){
   juego.pizzas = [];
   juego.mesa = new Mesa();
   juego.contador = new Contador();
    
   juego.pizzaAterrizada = 0;
   juego.pizzaActual = 0;
   juego.caidaAprobada = false;
   juego.perder = false;
   
   juego.pantallaActual = "creditos";
    
   juego.posYLogo = -150;
   juego.posXPizzaTime = -200;
   juego.posXCreadores = -180;
   juego.posXAlumnas = 800;
    
   juego.dentroBotonJugar = false;
   juego.dentroBotonContinuar = false;
   juego.dentroBotonReinicio = false;
   
   juego.musicaJuegoIniciada = false;
   musicaJuego.pause();
   musicaJuego.currentTime = 0;
   
   juego.sonidoPerderReproducido = false;
   sonidoPerder.pause();
   sonidoPerder.currentTime = 0;
   
   juego.sonidoGanarReproducido = false;
   sonidoGanar.pause();
   sonidoGanar.currentTime = 0;
}
}
