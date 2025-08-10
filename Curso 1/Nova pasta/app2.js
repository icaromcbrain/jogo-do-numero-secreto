let nome = prompt("Digite seu nome: ");
let idade = prompt('Qual sua idade? ');

if (idade >= 18) { 
    alert(nome + ' é permitido tirar CNH!');
} else {
    alert(nome + ' não é permitido tirar a CNH');
}