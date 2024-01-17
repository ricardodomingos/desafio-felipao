// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque genérico";
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.nome} ${this.idade} ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe
  const heroiMago = new Heroi("Merlin", 100, "mago");
  heroiMago.atacar();
  
  const heroiGuerreiro = new Heroi("Conan", 35, "guerreiro");
  heroiGuerreiro.atacar();
  
  const heroiMonge = new Heroi("Bruce Lee", 40, "monge");
  heroiMonge.atacar();
  
  const heroiNinja = new Heroi("Hanzo", 25, "ninja");
  heroiNinja.atacar();
  