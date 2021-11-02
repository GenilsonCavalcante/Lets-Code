/*
Faça uma função que calcule a hipotenusa do triangulo retângulo, recebendo por parâmetro o valor dos seus catetos. Teste seus valores com lados de 9 e 16 (pitágoras).
o quadrado da hipotenusa é igual à soma dos quadrados dos catetos
*/

//H² = C1² + C2²

function calcHipotenusa(cateto1, cateto2) {
    let quadradoHipotenusa = (cateto1**2) + (cateto2**2);
    let valorFinalHipotenusa = Math.sqrt(quadradoHipotenusa);

    return valorFinalHipotenusa;
}

console.log(calcHipotenusa(9, 16));