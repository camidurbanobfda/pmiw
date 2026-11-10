function images(){
  fondoFin = loadImage('images/fondoFin.jpg');
  cartelPerder = loadImage('images/cartelPerder.png');
  cartelGanar = loadImage('images/cartelGanar.png');
  mesa = loadImage('images/mesa.jpg');
  volver = loadImage('images/volver.png');
  volverActivo = loadImage('images/volverActivo.png');
}

function botonReinicio(){
  if((mouseX < 255) || (mouseX > 505) || (mouseY < 240) || (mouseY > 340)){
      image(volver, 255, 240, 250, 100);
  }else{
    image(volverActivo, 255, 240, 250, 100);
  }
}

function mousePressed(){
 if(botonReinicio){
   juego.pizzas = [];
   juego.mesa = new Mesa();
   juego.contador = new Contador();
    
   juego.pizzaAterrizada = 0;
   juego.pizzaActual = 0;
   juego.caidaAprobada = false;
   juego.perder = false;
}
}
