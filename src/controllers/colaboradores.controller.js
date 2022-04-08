const staffService = require('../services/colaboradores.service');

const findStaffController = async (req, res) => {
    const allStaff = await staffService.findStaffService();
    res.send(allStaff);
};

const findColaboradorByIdController = async (req, res) => {
    const idParam = req.params.id;
    const chosenColaborador = await staffService.findColaboradorByIdService(idParam);
    res.send(chosenColaborador);
};

const createColaboradorController = async (req, res) => {
    const colaborador = req.body;
    try{
        const newColaborador = await staffService.createColaboradorService(colaborador);
        res.status(201).send(newColaborador);
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }   
};

const updateColaboradorController = async (req, res) => {
    const idParam = parseInt(req.params.id);
    const colaboradorEdit = req.body;
    const updateColaborador = await staffService.updateColaboradorService(idParam, colaboradorEdit);
    res.send(updateColaborador);
}

const deleteColaboradorController = async (req, res) => {
    const idParam = req.params.id;
    await staffService.deleteColaboradorService(idParam);
    res.send({message: 'Colaborador deletado com sucesso.'})
}


module.exports = {
    findColaboradorByIdController,
    findStaffController,
    createColaboradorController,
    updateColaboradorController,
    deleteColaboradorController,
};
