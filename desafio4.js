class FigurasGeometricas {
    constructor(cor) {
        this.cor = cor;
    }
}

class Quadrado extends FigurasGeometricas {
    constructor(base, altura) {
      super(cor);
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.base * this.altura;
    }
  }

  class Triangulo extends FigurasGeometricas {
    constructor(base, altura) {
      super(cor);
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  }

  class Circulo extends FigurasGeometricas {
    constructor(raio) {
      super(cor);
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  }
  
const quadrado = new Quadrado("red", 5, 5);
const triangulo = new Triangulo("blue", 4, 6);
const circulo = new Circulo("green", 3);

console.log(quadrado.calcularArea());
console.log(triangulo.calcularArea());
console.log(circulo.calcularArea());