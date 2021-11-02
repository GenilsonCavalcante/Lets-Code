//AULA DO YOUTUBE (https://www.youtube.com/watch?v=U_eGa7LEsDk)

// const url = `https://jsonplaceholder.typicode.com/users`;

// const getUsers = () => {
//     const usersData = fetch(url)
//     console.log(usersData);
// }

// async function add (firstNumber, secondNumber) {
//     if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
//         throw 'firstNumber e secondNumber devem ser números'
//     }

//     return firstNumber + secondNumber
// }

// add(5, 9)
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// const url = `https://jsonplaceholder.typicode.com/usersf`;

// const getUsers = async () => {

//     try {
//         const response = await axios.get(url);
//         console.log(response.data);
//     } catch (error) {
//         console.log('peguei vocÊ', error);
//     }
// }

// getUsers()


/*##########################################################*/

const getPokemonUrl = pokemonNumber => `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

const getPokemon = async () => {

    //Promises de pokemons
    const promisePokemon1 = axios.get(getPokemonUrl(1))
    const promisePokemon4 = axios.get(getPokemonUrl(4))
    const promisePokemon7 = axios.get(getPokemonUrl(7))

    //Pega cada uma das promises acima e retorna um array quando os dados que foram submetidos das promises retornarem com sucesso. Por isso usamos o (await)

    const pokemons = await Promise.all([
        promisePokemon1, 
        promisePokemon4, 
        promisePokemon7
    ]);

    console.log(pokemons);
}


getPokemon();