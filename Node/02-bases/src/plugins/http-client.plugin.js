const axios = require("axios");


const httpClientPlugin = {
    get: async (url) => {
        /*const res = await fetch(url);
        return await res.json();*/

        const res = await axios.get(url);
        return await res.data;
    },
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url) => {},
};

module.exports = {
    http: httpClientPlugin,
};