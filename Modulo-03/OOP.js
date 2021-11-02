const user = {
    name: 'Genilson',
    address: 'Rua tal',
    login: 'Genil',
    logUser: (success) => {
        if (success) console.log(user.login + ' is online now.');
    }
}

const person = {
    name: 'Genilson',
    age: 26,
    sayHello: function() {
        console.log(`OI, MEU NOME É ${person.name}, E TENHO ${person.age} ANOS`);
    }
}

const person2 = {
    name: 'Genilson2',
    age: 26,
    sayHello: function() {//OBS: Em uma arrow function, ela não possui um this.
        console.log(`OI, MEU NOME É ${this.name}, E TENHO ${this.age} ANOS`);
    }
}

person.sayHello();
person2.sayHello();
user.logUser(true);

