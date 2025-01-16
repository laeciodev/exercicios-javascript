// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let boasVindas = 'Olá, seja bem-vindo (a)';
console.log(boasVindas);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Laécio';
console.log(`Olá, ${nome}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
//let nome = 'Laécio';
alert(`Olá, ${nome}!`); //utilizando o alert para a mesma variável nome

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Sua linguagem de programação favorita é ${linguagem}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 5;
let result = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${result}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 10;
let valor4 = 5;
let result2 = valor3 - valor4;
console.log(`A diferença de ${valor3} e ${valor4} é igual a ${result2}`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Informe a sua idade:');
if (idade >=18){
    console.log('Você é de maior!');
}else{
    console.log('Você é de menor!');                                                        
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = parseInt(prompt('Digite um número:'));
if (numero > 0){
    console.log(`${numero} é positivo`);
}else{
    console.log(`${numero} é negativo`);
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let num = 1;
while (num <=10){
    console.log(num);
    num++;
}
// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6;
let resultado = nota >=7 ? 'Aprovado' : 'Reprovado';
console.log(resultado);

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random());

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(Math.floor(Math.random() * 10 + 1));

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(Math.floor(Math.random() * 1000 + 1));
//Math.floor arredonda para baixo