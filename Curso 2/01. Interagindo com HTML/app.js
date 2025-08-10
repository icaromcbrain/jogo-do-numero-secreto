let tituloH1 = document.querySelector('h1');
tituloH1.innerHTML = 'Hora do desafio';

function verificaConsole() {
    console.log('O botão Console foi clicado');
}

function verificaAlert() {
    console.log('Eu amo JS');
}

function verificaPrompt() {
    let cidade = prompt('Diga um nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function verificaSoma() {
    let numero1 = parseInt(prompt('Informe um número'));
    let numero2 = parseInt(prompt('Informe outro número'));
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} com ${numero2} é ${soma}`);

}