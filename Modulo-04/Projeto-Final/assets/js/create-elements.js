import { response } from './request-api.js';

export const createElements = async () => {

    const datas = await response();
    console.log(datas.search.result.listings[0].medias[0].url);
}