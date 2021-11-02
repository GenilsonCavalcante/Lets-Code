// 4. Faça uma função que calcule o preço médio dos elementos que compõe a cesta de produtos:

const productsPrice = [28, 33, 42, 14, 10, 88, 95, 100, 29];

const totalElementos = productsPrice.reduce( (valorInicial, valorAtual) => valorInicial + valorAtual );
const media = totalElementos / productsPrice.length

console.log('A soma dos elementos é: ' + totalElementos);
console.log('A média dos elementos é: ' + media);