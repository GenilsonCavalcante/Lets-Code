/*EXERCICIO: CRIE UM OBJETO QUE DESCREVA UMA PESSOA, ESSE OBJETO DEVE TER NOME, IDADE E UM MÉTODO QUE CUMPRIMENTE AS PESSOAS DIZENDO "OI, MEU NOME É {NOME} E EU TENHO {XX} ANOS."*/

class Person {
    name;
    idade;

    saudacoes() {
        console.log(`OI, MEU NOME É ${this.name} E EU TENHO ${this.idade} ANOS.`);
    }
}

const pessoa1 = new Person();
pessoa1.name = 'Genilson'
pessoa1.idade = 22
pessoa1.saudacoes()
