// (1) Pergunte ao usuário qual é o dia da semana. Se a resposta 
// for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".let diaSemana = prompt('Qual o dia da semana? ');
diaSemana = prompt('Qual é o dia da semana?');

if (diaSemana === 'sabado' || diaSemana === 'domingo') {
    alert('Bom final de semana');
} else {
    alert('Boa semana');
}