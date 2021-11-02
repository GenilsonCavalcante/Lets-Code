/*
10 - // Exercicio 3
// {
//     under25: //até 25
//     under40: //entre 25 e 39
//     under60: // entre 40 e 59
//     }

o comentário no início do 3 é a resposta da função

tem q retornar um objeto com a contagem dos votantes nessas faixas de idade
o input da função é o "voters"

*/

const voters = [
    {name: 'Bob'  , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam'  , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed'   , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true}
]

//     under25: //até 25
const under25 = voters.filter(x => x.age <= 25 && x.voted === true)
const returnUnder25 = {
    totalVotantes: under25.length
}
console.log('Total até 25: ' + returnUnder25.totalVotantes);


//     under40: //entre 25 e 39
const under40 = voters.filter(x => (x.age > 25 && x.age <= 39) && x.voted === true)
const returnUnder40 = {
    totalVotantes: under40.length
}
console.log('Entre 25 e 39: ' + returnUnder40.totalVotantes);


//     under60: // entre 40 e 59
const under60 = voters.filter(x => (x.age > 39 && x.age <= 59) && x.voted === true)
const returnUnder60 = {
    totalVotantes: under60.length
}
console.log('Entre 40 e 59: ' + returnUnder60.totalVotantes);
