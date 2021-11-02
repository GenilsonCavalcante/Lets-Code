/*VOCÊ FOI CONTRATADO PARA CRIAR UM SISTEMA DE UM BANCO, NESSE BANCO PODEMOS TER VÁRIOS CLIENTES, TODO CLIENTE POSSUI UM NOME, RG, CPF, IDADE, NÚMERO DA CONTA E AGÊNCIA. UM CLIENTE PODE SACAR, DEPOSITAR E VER SEU SALDO. iDENTIFIQUE A/AS CLASSES PRESENTES NESSA DESCRIÇÃO E IMPLEMENTE COM SEUS MÉTODOS E ATRIBUTOS. */



class Cliente {
    name;
    rg;
    cpf;
    idade;
    numeroConta;
    agencia;
    senha;

    dinheiro = 0;
    verificar(password) {
        this.senha = password!!!!!!!!!!!!!!!!!!!!!!!!Aperfeiçoar o sistema com uma verificação com .senha.
    }
    sacar(valor) {
        
        if (valor <= this.dinheiro) {
            console.log(`Você sacou R$ ${valor}`);
            this.dinheiro = this.dinheiro - valor
        } else {
            console.log(`Você não tem dinheiro suficiente para sacar o valor de R$ ${valor}`);
        }
    }
    depositar(valor) {
        console.log(`Você acabou de depositar R$ ${valor}`);
        this.dinheiro = this.dinheiro + valor
    }
    verSaldo() {
        console.log(`Você tem R$ ${this.dinheiro}`);
    }
}

const cliente1 = new Cliente();
cliente1.name = 'Genilson';
cliente1.rg = 12311233
cliente1.cpf = 123123123-12
cliente1.idade = 22
cliente1.numeroConta = 98787
cliente1.agencia = 121

console.log(cliente1);
console.log('----------------------');

cliente1.verSaldo()
cliente1.depositar(1000)
cliente1.verSaldo()
cliente1.sacar(120)
cliente1.verSaldo()
