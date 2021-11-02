
/*
* Uma função (fetch), já é nativa do navegador. Ela pode nos retornar uma requisição HTTP, retornando uma promise.

*A função (then) fica responsável por pegar os dados dessa nosso promise. Assim quando terminada.
Retornando os dados pela then, ainda não podemos consumidos, para que fique melhor para consumir, podemos retornar em um .JSON.
Retornando na calbeckFunction, um [data.json()]. O que acontece é que esse .json(), nos retorna os dados em um formato consumível, mas em um formato de outra promise.

OBS: O primeiro then só é executado quando o resultado da promise da requisição feita pelo fetch for correspondida, quando isso é realizado, temos agora acesso aos dados, que no caso é uma nova promise, quando temos essa promise respondida, podemos ter solicitar uma nova promise para consultar dados específicos com uma nova promise de um novo (then). 

*/


/* ###################################################################### */
/*
Assincronicidade

Pegue as informações dos seguintes pokemons e agrupe-os por seus tipos:


{
  fire: ['Charmander'],
  electric: ['Pikachu', 'Zapdos'],
  water: ['Squirtle', 'Blastoise'],
  poison: ['Bulbasaur']
}

*/



// const getDatesPokemons = arrPokemons.map(item => {
//     const response = fetch(`https://pokeapi.co/api/v2/pokemon/${item}`);
//     console.log(response);
// })


// function getDatesPokemons() {
    
//     for (index of arrPokemons) {
//         const response = fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        
//         response
//             .then( (data) => {
//                 return data.json()
//             })
//             .then((results) => console.log(results.abilities[1].ability))
//     }
//         // .catch((error) => console.log(error));
// }
// getDatesPokemons();

    
//.then((results) => console.log(results.abilities[0].ability.url))



/*#######################################################
Resolution
*/

const pokemons = ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur'];

const getPokemonsPromisesData = (arr) => {
    return arr.map((pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`))
}

// const extractInfoFromPromises = (arr) => {
//     let pokeInfos = [];
//     arr.forEach((prom, index) => {
//         prom
//             .then((data) => data.json())
//             .then((result) => {
//                 pokeInfos.push(result)
//                 if (arr.length - 1 === index) parsePokeInfo(pokeInfos);
//             })
//     })
// }

//Outra forma de fazer o código acima é com a Promise.all, onde espera a promise terminar para poder executa-la, pois a forma do código acima pode nos trazer um erro, em momentos que uma das promises demorem retornar e não sejam jogadas para dentro do array. Então uma das formas de se resolver isso é com a Promise.all, como mostra abaixo:

const extractInfoFromPromises = (arr) => {
    const promiseAll = arr.map((prom) => prom.then(data => data.json()));
    const promiseMASTER = Promise.all(promiseAll);
    promiseMASTER.then((result) => parsePokeInfo(result));
}

const pokemonsPromises = getPokemonsPromisesData(pokemons);
extractInfoFromPromises(pokemonsPromises)


const parsePokeInfo = (arr) => {

    const objFromTypePokemons = {
        fire: '',
        electric: '',
        water: '',
        poison: ''
    }

    arr.map((pokemon) => {

        switch (pokemon.types[0].type.name) {
            case 'fire':
                objFromTypePokemons.fire = pokemon.name;
                break;
            case 'electric':
                objFromTypePokemons.electric = pokemon.name;
                break;
            case 'water':
                objFromTypePokemons.water = pokemon.name;
                break;
            case 'poison':
                objFromTypePokemons.poison = pokemon.name;
                break;
            default:
                console.log(pokemon.name + ' Não possui um type correspondente');
                break;
        }
    })

    console.log(objFromTypePokemons);
}



    // const typesPokemons = {
    //     fire: ['Charmander'],
    //     electric: ['Pikachu', 'Zapdos'],
    //     water: ['Squirtle', 'Blastoise'],
    //     poison: ['Bulbasaur']
    // }

    // console.log(arr[0].types[0].type.name);