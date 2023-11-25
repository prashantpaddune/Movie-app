import { makeUseAxios } from 'axios-hooks';
import Axios from 'axios';


const request = Axios.create({
    baseURL: 'https://run.mocky.io/v3/d71c028f-0c28-4ef7-9ead-787b2beb9c8b',
});

export const useRequest = makeUseAxios({ axios: request, cache: false, defaultOptions: { ssr: true } });