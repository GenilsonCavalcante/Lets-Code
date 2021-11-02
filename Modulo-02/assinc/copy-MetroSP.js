

// const response = fetch(`https://private-3923c4-santandercoders809.apiary-mock.com/stations`)

// response
//     .then((data) => data.json())
//     .then((results) =>{
//         console.log(results.estacoes.estacao[40]._linha)
//     })

//210
//OU

const getMetrosSP = async() => {
    try {
        const response = await fetch(`https://private-3923c4-santandercoders809.apiary-mock.com/stations`);
        const datas = await response.json();

        const getArrSeasons = datas.estacoes.estacao
        const listFromSeasons = getArrSeasons.map((item) => item);

        return getUniqueNamesSeasons(listFromSeasons);
    } catch (err) {
        console.log("ERRO", err);
    }
}

// const promise = getMetrosSP()
// const promiseJSON = promise.then((dados) => console.log(dados))
// console.log(promiseJSON);

// const getMetrosSP = () => {
//     try {
//         const response = fetch(`https://private-3923c4-santandercoders809.apiary-mock.com/stations`);
//         const datas = response.then((data) => data.json())
//         const resul = datas.then((results) => results)

//         const getArrSeasons = datas.estacoes.estacao
//         const listFromSeasons = getArrSeasons.map((item) => item);

//         console.log(resul)

//     } catch (err) {
//         console.log("ERRO", err);
//     }
// }


// const arrSeasons = () => {
//     const getArrSeasons = datas.estacoes.estacao
//     const listFromSeasons = getArrSeasons.map((item) => item);

//     return console.log(listFromSeasons);
// }



const getUniqueNamesSeasons = (listFromSeasons) => {

    const namesSeasons = [];
    listFromSeasons.filter((item) => {
        return namesSeasons.push(item._linha)
    })

    const getUniqueNamesSeasons = [...new Set(namesSeasons)];
    return objSeasons(getUniqueNamesSeasons)
}


const objSeasons = (getUniqueNamesSeasons) => {

    const newObj = {}
    getUniqueNamesSeasons.map((item) => {
        return newObj[item] = []
    })
    
    return addTheSeasonsToObj(newObj);

}


const addTheSeasonsToObj = (newObj) => {

    // getMetrosSP()
    console.log(newObj);

}


getMetrosSP()

