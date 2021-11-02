/*
1. Faça uma função que calcule o preço de um terreno que tenha 5m de frente, 20m de profundidade e custe R$6.350/m2.
*/

function calcularPreco(areaFrente, profundidade, preco) {
    let areaQuadrada = areaFrente * profundidade;
    let precoFinal = areaQuadrada / preco;

    return precoFinal;
}

// AREA DA FRENTE / PROFUNDIDADE / PREÇO/m2
console.log(calcularPreco(5, 20, 6350));