const express = require("express");
const app = express();

const router = require("./router.js");

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Listening on 3333"));
