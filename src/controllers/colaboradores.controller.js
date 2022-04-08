const staffService = require('../services/colaboradores.service');

const findStaffController = (req, res) => {
    const allStaff = staffService.findStaffService();
    res.send(allStaff);
};

const findColaboradorByIdController = (req, res) => {
    const idParam = req.params.id;
    const chosenColaborador = staffService.findColaboradorByIdService(idParam);
    res.send(chosenColaborador);
};

const createColaboradorController = (req, res) => {
    const colaborador = req.body;
    try{
        const newColaborador = staffService.createColaboradorService(colaborador);
        console.log(newColaborador)
        res.status(201).send(newColaborador);
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }   
};

const updateColaboradorController = (req, res) => {
    const idParam = parseInt(req.params.id);
    const colaboradorEdit = req.body;
    const updateColaborador = staffService.updateColaboradorService(idParam, colaboradorEdit);
    res.send(updateColaborador);
}

const deleteColaboradorController = (req, res) => {
    const idParam = req.params.id;
    staffService.deleteColaboradorService(idParam);
    res.send({message: 'Colaborador deletado com sucesso.'})
}


module.exports = {
    findColaboradorByIdController,
    findStaffController,
    createColaboradorController,
    updateColaboradorController,
    deleteColaboradorController,
};
