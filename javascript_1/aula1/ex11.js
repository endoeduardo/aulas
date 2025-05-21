// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
let primeiraLista = [1, 2, 3, 4, 5]
// for (elemento of primeiraLista){
//     console.log(elemento)
// }

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function mostraElementoEscolhido(lista, indice){
    console.log(lista[indice])
}

mostraElementoEscolhido(primeiraLista, 2)

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
function somaListas(lista){
    let soma = 0;
    for(num of lista){
        soma += num
    }
    return soma
}

console.log(somaListas(primeiraLista))

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
function mostraMinMax(lista){
    let maior = lista[0];
    let menor = lista[0];
    for (numero of lista){
        for (num_comp of lista){
            if (numero >= num_comp && numero >= maior){
                maior = numero
            }
            if (numero <= num_comp && numero <= menor){
                menor = numero
            }
        }
    }
    return [maior, menor]
}
console.log(mostraMinMax(primeiraLista))

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

function retornaPares(listaNumeros){
    let pares = [];
    for (numero of listaNumeros){
        if (numero % 2 === 0){
            pares.push(numero);
        }
    }
    return pares;
}

console.log(retornaPares([3, 8, 12, 5, 6, 10, 7, 2, 9, 14]))

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
function calculaMedia(lista){
    let soma = 0;
    for (numero of lista){
        soma += numero;
    }
    return soma / lista.length
}

console.log(calculaMedia([3, 8, 12, 5, 6, 10, 7, 2, 9, 14]))

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota;
  }
)

const media = somaDasNotas / notas.length

console.log(media)