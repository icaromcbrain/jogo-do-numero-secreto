let nota1 = 7;
let nota2 = 9;
let nota3 = 9;
let nota4 = 9;

function calcularMedia(nota1, nota2, nota3, nota4){
    let media = (nota1 + nota2 + nota3 + nota4) / 4; 
    return media; 
}

function verificarAprovacao(media) {
    return media >= 5 ? 'Aprovado' : 'Reprovado';
}

// 1. Chama a função para calcular a média e armazena o resultado
let mediaFinal = calcularMedia(nota1, nota2, nota3, nota4);

// 2. Chama a função para verificar a aprovação com a média calculada
let status = verificarAprovacao(mediaFinal);

// 3. Exibe os resultados no console
console.log("A média do aluno é: " + mediaFinal);
console.log("Situação: " + status);
