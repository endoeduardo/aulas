// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const numeroArray = [1, 2, 3, 4, 5]
// numeroArray.forEach((numero, indice) => console.log(numero, indice))

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
function executaOperacaoEmArray(lista, operacao) {
    lista.forEach(numero => {
        const resultado = operacao(numero);
        console.log(resultado);
    });
}

// executaOperacaoEmArray(numeroArray, num => num * num)

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

function encontraNumeroEmArray(lista, numero) {
    indices = [];
    lista.forEach((num, idx) => {
        if (num === numero) {
            indices.push(numero);
        }
    })
    if (indices.length > 0) {
        return indices;
    } else {
        return -1
    }

}

console.log(encontraNumeroEmArray(numeroArray, 0))

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];
  
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const salaInteira = nomesTurmaA.concat(nomesTurmaB);

const aluno = salaInteira.find(nome => nome === "João" );
if (aluno === undefined){
    console.log("aluno não encontrado")
} else {
    console.log(aluno)
}
