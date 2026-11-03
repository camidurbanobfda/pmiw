class Contador {
  constructor(){
  
    this.valor = 0;
    
  }
  
  dibujar(){
    rect(680, 20, 100, 50);
    
    text(this.valor, 700, 40);
  }
  
  cambiarValor(){
    
    this.valor++;
    
  }
  
}
