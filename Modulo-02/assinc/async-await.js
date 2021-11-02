/*
Para que trabalhemos com async await, temos que trabalhar com uma função. Para declaramos uma função async dentro de uma função, logo, a função que recebe, é uma promise.

Dentro dessa nossa função async(), podemos fazer coisas asincronas de uma maneira síncrona. 

Embora o async retorne uma promise, o await diz que, espere o que está a direita resolver. Ou seja, espera até que a requisição seja feita, retornando o valor.

Uma das vantagens de se utilizar o async await, é que ele já nos retorna os dados de uma promise, sem o uso das (then)'s. Assim, ele já nos retorna os dados, mas para converter para o formato consumível, temos que passar o (await response.json()) para dentro de uma variável.

Para que possamos tratar os erros dentro de um async await, é recomendado que coloquemos dentro de um try catch. try para quando o retorno é positivo e catch para quando o retorno não for satisfeito (failed), no caso do catch, recebendo um parâmetro de erro.
*/

const getPokemonsData = async() => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        return await response.json();
    } catch (err) {
        throw new Error("Deu ruim.");
    }
}

const showPokemonInfo = async () => {
    try {
        const response = await getPokemonsData();
        console.log(response);
    } catch (err) {
        console.log("THIS IS AN ERROR", err);
    }
}

showPokemonInfo();