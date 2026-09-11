// Exercícios 8 - if / else if / else

// Verifique uma temperatura.

// Menor que 15 -> Frio

// Entre 15 e 28 -> Agradável

// Maior que 28 -> Muito quente

let temperatura = 10
if (temperatura<15){
    console.log(`Frio`);
}
else if(temperatura>15 && temperatura<28){
    console.log(`Agradável`);
}
else if(temperatura>28){
    console.log(`Muito quente`);
}
else{
    console.log(`normal`);
}