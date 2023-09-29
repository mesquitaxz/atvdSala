// 1. Crie uma classe FiguraGeometrica com os atributos base e altura.
class FiguraGeometrica {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
  
  // 2. Crie uma classe Retangulo que herda de FiguraGeometrica e implementa o método calcularArea() para calcular a área do retângulo.
  class Retangulo extends FiguraGeometrica {
    calcularArea() {
      return this.base * this.altura;
    }
  }
  
  // 3. Crie uma classe Circulo que herda de FiguraGeometrica e implementa o método calcularArea() para calcular a área do círculo.
  class Circulo extends FiguraGeometrica {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio * this.raio;
    }
  }
  
  // 4. Crie um programa que crie um objeto Retangulo com base 10 e altura 20 e imprima a área do retângulo.
  let retangulo = new Retangulo(10, 20);
  console.log("Área do retângulo:", retangulo.calcularArea());
  
  // 5. Crie um programa que crie um objeto Círculo com raio 5 e imprima a área do círculo.
  let circulo = new Circulo(5);
  console.log("Área do círculo:", circulo.calcularArea());
  
  // 6. Crie uma classe Animal com os atributos nome e especie.
  class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  // 7. Crie uma classe Cachorro que herda de Animal e implementa o método latir().
  class Cachorro extends Animal {
    latir() {
      console.log("Au au au!");
    }
  }
  
  // 8. Crie uma classe Gato que herda de Animal e implementa o método miar().
  class Gato extends Animal {
    miar() {
      console.log("Miau!");
    }
  }
  
  // 9. Crie um programa que crie um objeto Cachorro com nome "Totó" e especie "Cachorro" e imprima o animal latindo.
  let cachorro = new Cachorro("Totó", "Cachorro");
  cachorro.latir();
  
  // 10. Crie um programa que crie um objeto Gato com nome "Miaú" e especie "Gato" e imprima o animal miando.
  let gato = new Gato("Miaú", "Gato");
  gato.miar();
  