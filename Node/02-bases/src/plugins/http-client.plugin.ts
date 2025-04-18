import axios from 'axios';

export const httpClientPlugin = {
    get: async (url: string) => {
        /*const res = await fetch(url);
        return await res.json();*/

        const res = await axios.get(url);
        return await res.data;
    },
    post: async (url: string, body: unknown) => {
        throw new Error('Not implemented');
    },
    put: async (url: string, body: unknown) => {
        throw new Error('Not implemented');
    },
    delete: async (url:string) => {
        throw new Error('Not implemented');
    },
};
