// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
// Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log
//  e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var first_variable = "Var variable";

if (1 > 0){
    var first_variable = "Renamed var";
};
console.log(first_variable)


let second_var = "let variable";

if (1 > 0){
    let second_var = "renamed let"
    console.log(second_var)
}
console.log(second_var)
