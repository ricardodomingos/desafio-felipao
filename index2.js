const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularNivel() {
    rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
        rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
            // Convertendo as entradas para números inteiros
            vitorias = parseInt(vitorias);
            derrotas = parseInt(derrotas);

            // Calcula o saldo de rankeadas
            const saldoVitorias = vitorias - derrotas;

            // Determina o nível com base no saldo de vitórias
            let nivel;
            if (vitorias < 10) {
                nivel = "Ferro";
            } else if (vitorias >= 11 && vitorias <= 20) {
                nivel = "Bronze";
            } else if (vitorias >= 21 && vitorias <= 50) {
                nivel = "Prata";
            } else if (vitorias >= 51 && vitorias <= 80) {
                nivel = "Ouro";
            } else if (vitorias >= 81 && vitorias <= 90) {
                nivel = "Diamante";
            } else if (vitorias >= 91 && vitorias <= 100) {
                nivel = "Lendário";
            } else {
                nivel = "Imortal";
            }

            // Exibe a mensagem a seguir
            console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);

            // Fecha a interface readline
            rl.close();
        });
    });
}

// Chama a função para calcular o nível com base nas entradas do usuário
calcularNivel();