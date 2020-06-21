const express = require("express");

const api = require("./api");
const router = express.Router();

router.get("/", async (request, response) => {
    const repos = await api.repos();
    const projects = [];

    repos.data.map(info => {
        const { full_name, name, fork, description } = info;

        projects.push({ full_name, name, fork, description });
    });

    response.send(projects);
});

module.exports = router;