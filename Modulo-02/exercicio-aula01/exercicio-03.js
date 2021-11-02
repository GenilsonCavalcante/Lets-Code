/*
Faça uma função que retorne se vale a pena ou não abastecer com álcool. A função deve receber como parâmetros o valor do álcool e da gasolina.
Para que vala apena; O valor do álcool deve ser menor que 70% do preço da gasolina;
*/

function calcAbastecimento(valorGasolina, valorAlcool) {
    let diferencaDePreco = valorAlcool < (valorGasolina * (70/100));
    
    if (diferencaDePreco) {
        console.log("Vale apena abastecer com álcool.");
    } else {
        console.log("Não vale apena");
    }
}
// DIGITAR PREÇO DA GASOLINA, E DEPOIS DO ÁLCOOL
console.log(calcAbastecimento(10, 9));