// Desafio - Loja

// Crie:

// produto
// preco
// quantidade

// Calcule:

// total = preco * quantidade

// Se o total for maior que R$500:

// Desconto de 15%

// Caso contrário:

// Sem desconto

// Mostre o total.

let produto = "miojo"
let preco = 5
let quantidade = 1245
let total =(preco * quantidade)
console.log (`${total}`);

if (total > 500){
    console.log(`Desconto de 15%`);
}
else{
    console.log(`Sem desconto`);
}