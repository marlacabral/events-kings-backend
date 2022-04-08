require("dotenv").config();

const express = require('express');
const cors = require("cors")
const port = 3001;
const app = express();
const route = require("./src/routes/colaboradores.route");

const connectToDataBase = require("./src/utils/mongoConnection");

app.use(cors());

app.use(express.json());

connectToDataBase();

app.use("/staff", route);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
