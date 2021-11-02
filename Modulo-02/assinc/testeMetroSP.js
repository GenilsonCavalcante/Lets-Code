
const response = async() => {
    const resposta = await fetch(`https://private-3923c4-santandercoders809.apiary-mock.com/stations`);
    const datas = await resposta.json()

    const getArrSeasons = datas.estacoes.estacao
    const listFromSeasons = getArrSeasons.map((item) => item);

    /********************************************************/

    const getMetrosSP = async() => {
        try {
            return getUniqueNamesSeasons(listFromSeasons);
        } catch (err) {
            console.log("ERRO", err);
        }
    }

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
        
        //Não consegui entender o porque a função abaixo só retorna o primeiro item para o newObj. Sendo que para mim, fazeria sentido retornar todos os item que possui o mesmo nome da chave correspondente de 'newObj[`${seasonObj}`]'.
        listFromSeasons.map((item) => {
            getUniqueNamesSeasons.map((seasonObj) => {
                if (seasonObj == item._linha) {
                    return newObj[`${seasonObj}`] = item
                }
            })
        })

        console.log(newObj);
    }

    getMetrosSP()
}

response()
