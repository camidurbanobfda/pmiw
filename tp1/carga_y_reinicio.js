function cargarImagenes(){
  
  titulo = loadImage('data/titulo.png');
  fondo = loadImage('data/fondo.png');
  piso = loadImage('data/piso.jpg');
  piedra = loadImage('data/piedra.png');
  piedrita = loadImage('data/piedrita.png');
  regalo = loadImage('data/regalo.png');
  
  for(let accion = 0; accion < nombres.length; accion++){
    acciones.push(cargarAccion(nombres[accion], framesPorAccion[accion]));
    
  }
  
}



function cargarAccion(nombre, cantidad){
  
  let frames = [];
  
  for(let imagenes = 0; imagenes < cantidad; imagenes++){
    
    frames.push(loadImage('data/' + nombre + '_' + imagenes + '.png'));
    
  }
  
  return frames;
}



function elegirFrame(framesTotales, velocidadCambioFrames){
  
  let cambiarFrame = floor(frameCount / velocidadCambioFrames) % framesTotales.length;
  
  return framesTotales[cambiarFrame];
  
}



function reiniciar(){
  
  if(key == 'r' || 'R'){
    
 velocidad = 2;
 xPersonaje = 0;
 xFondo = 0;
 xPiso = 0;
 accionActual = 0;

 contadorPicar = 0;
 duracionPicar = 100;

 contadorPicarFuerza = 0;
 duracionPicarFuerza = 160;
 terminoDePicar = false;

 contadorQuieto = 0;
 duracionQuieto = 5;
    
  }
  
}
