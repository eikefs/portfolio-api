require("dotenv/config");

const axios = require('axios');

const instance = axios.create({
    baseURL: process.env.REQUEST_URL,
    timeout: 1000,
    headers: {
        Authorization: `token ${process.env.OAUTH_TOKEN}`
    }
});

module.exports = {
    repos() {
        return instance.get();
    }
}