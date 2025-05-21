// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
function processaListas(...listas) {
    let listaFinal = listas.reduce((acumulador, lista) => [...acumulador, ...lista], []);
    return listaFinal;
}

console.log(processaListas([1, 2, 3, 4], [4, 5, 6, 7]))

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores = [2, 3, 4, 5]
const soma = valores.reduce((acumulador, valor) => acumulador += valor, 0);
console.log(soma);

// 3 - Considere duas listas de cores:
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
const listaFinal = [...new Set([...coresLista1, ...coresLista2])];
console.log(listaFinal);

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
function retornarPares(lista) {
    const numerosPares = lista.filter(numero => {
        return numero % 2 === 0;
    });

    return numerosPares
}

console.log(retornarPares([1, 2, 3, 4, 5, 6]))

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function retornaNumeros(listaNum) {
    let listaFinal = listaNum.filter( numero => {
        return numero % 3 === 0 && numero > 5;
    });

    return listaFinal;
}

console.log(retornaNumeros([1, 6, 2, 9, 20, 21]))

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
function somaElementos(listaNum) {
    let soma = listaNum.reduce((acumulador, num) => acumulador += num, 0)
    return soma;
}
console.log(somaElementos([2, 3, 4, 5]))