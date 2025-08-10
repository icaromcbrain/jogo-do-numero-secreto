let quantidadeMilhas = prompt('Qual o valor de milhas: ');


let porcentagemDesconto = 0;

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = 20;
} else if(quantidadeMilhas > 5000){
    porcentagemDesconto = 10;
}
alert(`Seu desconto foi de ${porcentagemDesconto}`);