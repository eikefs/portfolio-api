const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./router.js");

app.use(express.json());
app.use(cors());

app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
