// 1 - Crie uma função que receba dois arrays e os concatene em um único array.
const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]

const finalArray = firstArray.concat(secondArray)
console.log(finalArray)

// 2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
const parteNumeros = arrayNumber.slice(3, 7)
console.log(parteNumeros)

// 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2, 1, 'Kiwi')
frutas.splice(3, 1, 'Pêssego')

console.log(frutas)

// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ['Lasanha', 'Macarronada', 'Pizza']
const menuDeSobremesas = ['Sorvete', 'Petit gateau', 'Salada de Grutas']
let menuCompleto = [menuPrincipal, menuDeSobremesas]

console.log(menuCompleto)

// 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

// Dicas:

// comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// você pode resolver usando um for dentro de outro for.
matrix = [[], [], []]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrix[i].push(j * i)
    }
  }

  console.log(matrix)
// 6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log(matrix[1][2])

// 7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

menuCompleto[1].splice(3, 1, 15)
console.log(menuCompleto)