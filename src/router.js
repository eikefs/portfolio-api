const express = require("express");

const api = require("./api");
const router = express.Router();

router.get("/", async (request, response) => {
    const repos = await api.repos();

    response.send(repos.data);
});

module.exports = router;