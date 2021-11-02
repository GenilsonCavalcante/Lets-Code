class Carro {
    marca;
    modelo;
    placa;
    cor;
    estaLigado = false;

    ligar() {
        if (this.estaLigado == true) {
            console.log('O carro já está ligado');
        } else {
            console.log('Ligando carro ...' + this.placa);
            console.log('Carro ligado');
        }

        this.estaLigado = true
    }
    desligar() {
        if (this.estaLigado == false) {
            console.log('O carro já está desligado');
        } else {
            console.log('Desligando carro');
            console.log('Carro desligado');
        }

        this.estaLigado = false;
    }
    acelerar() {
        if (this.estaLigado != true) {
            console.log('Ligue o carro primeiro');
        } else {
            console.log('Acelerando...1...2...3...');
        }
    }
}

const carro1 = new Carro();

carro1.marca = 'Ferrari';
carro1.modelo = 'XYZ';
carro1.placa = 'AXRIPF';
carro1.cor = 'Vermelho';


const carro2 =  new Carro();

carro2.marca = 'Ford';
carro2.modelo = 'XY';
carro2.placa = 'njSRUY';
carro2.cor = 'Cinza';

console.log(carro1.ligar());
console.log(carro1.desligar());
console.log(carro1.acelerar());
console.log('-----------------------');
console.log(carro2.ligar());
console.log(carro2.ligar());
console.log(carro2.desligar());
console.log(carro2.desligar());
