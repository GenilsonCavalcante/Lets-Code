//Funções Construtoras / Facture Function: 

const CarFacture = ({brand, model, year}) => {
    return {
        brand,
        model,
        year,
        turnOn: function() {
            console.log(`${model} is on`);
        }
    }
}

const car = CarFacture({brand: 'Celta', model: 'AD20', year: '2021'})
car.turnOn()
console.log(car);

//OUTRO JEITO COM MENOS LINHAS:

function CarFacture2(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car2 = new CarFacture2('Chevrolet', 'D40', '2022')
console.log(car2);
//OBS: PARA QUE POSSAMOS RESOLVER A QUESTÃO DA ORDEM DOS PARÂMETROS, GARANTINDO QUE ELES ATRIBUAM PARA OS PARÂMETROS CORRETOS, DEVEMOS FAZER COM QUE ESTES PARÂMETRO SE TRANSFORME EM OBJETOS. VEJA:

function CarFacture3({brand, model, year}) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
const car3 = new CarFacture3({brand: 'Ferrari', model: 'Ver$el*a', year: '3000'})
console.log(car3);//Logo, se eu esquecer de passar algum valor, o parâmetro se torna underfined. Logo, assim é muito bom passar por meio de um objeto, dentro de chaves {}.

