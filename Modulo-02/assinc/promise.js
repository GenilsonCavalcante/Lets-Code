
//Uma promise é sempre um retorno de uma função.
//Logo, eu tenho que dizer o que ela retorna ou o que ela rejeita.

//Criação de uma promise/Promessa:
// const newPromise = new Promise( (resolve, reject ) => {
//     setTimeout(() => {
//         resolve("LALALA");
//     }, 5000)
// })

//OBS: QUANDO EU DEFINO UMA PROMISE E NÃO RETORNO NADA (RESOLVE), ELA SEMPRE FICARÁ NO ESTADO PENDENTE.
//Enquanto ela não retorna nada, ela fica no estado pending.
//Quando o estado é: [[PromiseState]]: "fulfilled" - é porque retornou com sucesso.


// const newPromise = new Promise( (resolve, reject ) => {
//     setTimeout(() => ( resolve({
//         name: "Genilson",
//         user: "Cavalcante"
//     })), 5000)
// })

function thisReturnAPromise() {

    return  new Promise( (resolve, reject) => {
        const response = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        response
            .then((data) => data.json())
            .then((result) => resolve(result))
            .catch((error) => reject(error))
    })

    // return newPromise = new Promise( (resolve, reject ) => {
    //     setTimeout(() => ( reject(new Error('Something went wrong'))), 5000)
    // })

    // return newPromise = new Promise( (resolve, reject ) => {
    //     setTimeout(() => ( resolve({
    //         name: "Genilson",
    //         user: "Cavalcante"
    //     })), 5000)
    // })
    
}

//SOLICITANTE

const userPromise = thisReturnAPromise();
userPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
// console.log(userPromise);

//COMO CONSUMIR O DADO DA PROMISE??

// userPromise
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message))

//O parâmetro da função (then) é o dado da promise.
//A solicitação do dado com o método (then) só é executado quando a promise é retornada com sucesso.

//O (.catch) serve para tratarmos o erro, caso o (.then) não ocorra com sucesso, então o .catch retornará um erro.

//RECAPTULANDO: O (.THEN) QUANDO O RETORNO DER CERTO, (.CATCH) CASO O RETORNO DÊIA ERRADO.


