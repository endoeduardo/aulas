// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

let frase = "Frase aleatória de exemplo";
console.log(frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let var1 = null;
let var2;
console.log(var1, var2)

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
let var3 = 4;
console.log(`${var1}, ${var2}, ${var3}`)

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
let varNum = 5;
let varString = "2";
varString = Number(varString);
varNum = String(varNum);

console.log(typeof varNum, typeof varString)

// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
console.log(frase.toLowerCase())
console.log(frase.slice(start=1, end=4))