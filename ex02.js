//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
}else {
    alert('Boa semana!');
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
num = prompt('Digite um número:');
if ( num > 0) {
    alert('O número é positivo!');
}else{
    alert('O número é negativo!')
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = prompt('Qual a sua pontuação:');
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.');
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
saldo = prompt('Qual o saldo da sua conta?');

alert(`O seu saldo é de R$ ${saldo}.`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nome = prompt('Qual é o seu nome?');
alert(`Bem-vindo(a), ${nome}!`); 