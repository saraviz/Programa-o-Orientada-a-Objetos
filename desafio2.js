class Circulo {
    constructor(raio) {
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  
    calcularCircunferencia() {
      return 2 * Math.PI * this.raio;
    }
  
  }

  const circulo = new Circulo(5);

  
  console.log(circulo.calcularArea());
  console.log(circulo.calcularCircunferencia());