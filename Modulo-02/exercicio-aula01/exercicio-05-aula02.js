// 5. Faça uma função que receba os alunos e suas respectivas médias e retorne apenas os aprovados (média maior ou igual a 5).

const students = [
    {name: 'Estudante 1', score: 8},
    {name: 'Estudante 2', score: 4},
    {name: 'Estudante 3', score: 1},
    {name: 'Estudante 4', score: 6},
    {name: 'Estudante 5', score: 10}
]

var aprovados = students.filter( item => item.score >= 5 );
console.log(aprovados);