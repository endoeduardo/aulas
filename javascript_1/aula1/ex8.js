// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles
// utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo = 5000;
let deposito = 3000;
let saque = 1000;
let opearacao = "subtracao";

if (opearacao === "subtracao") {
    saldo -= saque;
    console.log(`saldo final ${saldo}`)
} else if (opearacao === "adicao") {
    saldo += deposito;
    console.log(`saldo final ${saldo}`);
};

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
function isEvenOrOdd(number) {
    remainder = number % 2;
    return remainder === 0 ? "The number is Even" : "The number is Odd"
};
console.log(isEvenOrOdd(15))

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. 
// Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
function authenticateUser(role, is_logged){
    return role === "admin" && is_logged === true ? true : false;
};
console.log(authenticateUser("admin", true));

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
let first_var = true
let second_var = false
console.log(first_var || second_var)

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima
// e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

let age = 12
let required_age = 16

function isAbleToBuyTickets(age, required_age) {
    if (age >= required_age) {
        return true
    } else {
        return false
    }
}
console.log(isAbleToBuyTickets(age, required_age))