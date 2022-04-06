const express = require('express');
const cors = require("cors")
const port = 3001;
const app = express();
const route = require("./src/routes/colaboradores.route");

app.use(cors());

app.use(express.json());

app.use("/staff", route);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
