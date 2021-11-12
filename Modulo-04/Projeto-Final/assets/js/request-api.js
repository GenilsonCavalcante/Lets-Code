// const saoPaulo = ['sp', 'sao-paulo'];

export const response = async () => {

    try {
        const url = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=sp&city=sao-paulo`);

        const datas = await url.json();
        return datas;

    } catch (error) {
        console.log('peguei vocÊ', error);
    }
}