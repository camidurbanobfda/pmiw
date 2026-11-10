class Contador {
  constructor(){
  
    this.valor = 0;
    
  }
  
  dibujar(){
    stroke(102, 0, 0);
    strokeWeight(3);
    fill(225,35,1);
    rect(680, 20, 100, 50);
    stroke(143, 206, 0);
    strokeWeight(10);
    fill(255);
    textSize(35);
    text(this.valor, 720, 57);
  }
  
  cambiarValor(){
    
    this.valor++;
    
  }
  
}
