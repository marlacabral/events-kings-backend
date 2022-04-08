const mongoose = require("mongoose");

const validId = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)){
        return res.status(404).send({ message: "Id inválido." })
    }
    next();
}

const validObjectBody = (req, res, next) => {
    const colaborador = req.body;

    if(
        !colaborador ||
        !colaborador.name ||
        !colaborador.idade ||
        !colaborador.email || 
        !colaborador.whatsapp ||
        !colaborador.fone ||
        !colaborador.rg ||
        !colaborador.cpf ||
        !colaborador.experienceEvents ||
        !colaborador.pic ||
        !colaborador.adress
    ){
        return res
        .status(400)
        .send({ message: "Campos enviados estão incorretos." })
    }
    next();
}

module.exports = {
    validId,
    validObjectBody
}
