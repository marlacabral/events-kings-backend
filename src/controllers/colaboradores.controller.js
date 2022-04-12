const staffService = require('../services/colaboradores.service');

const findStaffController = async (req, res) => {
    try{
        const allStaff = await staffService.findStaffService();
        res.send(allStaff);
    }catch(err){
        console.log(err);
        res.status(400).send({message: 'houve algum erro'})
    }    
};

const findColaboradorByIdController = async (req, res) => {
    const idParam = req.params.id;
    const chosenColaborador = await staffService.findColaboradorByIdService(idParam);
    res.send(chosenColaborador);
};

const createColaboradorController = async (req, res) => {
    const colaborador = req.body;
    try{
        if(
            !colaborador
        ) {
            return res
            .status(400)
            .send({message: "Preencha todos os campos."});
        }
        const newColaborador = await staffService.createColaboradorService(colaborador);
        res.status(201).send(newColaborador);
    } catch(err){
        console.log(err);
        res.status(400).send({message: 'houve algum erro'})
    }
}

const updateColaboradorController = async (req, res) => {
    const idParam = req.params.id;
    console.log(idParam);
    const colaboradorEdit = req.body;
    try{
        const updateColaborador = await staffService.updateColaboradorService(
            idParam, 
            colaboradorEdit,
        );
        res.status(200).send(updateColaborador);
    }catch(err){
        console.log(err);
        res.status(400).send({message: 'Houve algum erro nesta busca.'})
    }
};

const deleteColaboradorController = async (req, res) => {
    const idParam = req.params.id;
    try{
        await staffService.deleteColaboradorService(idParam);
        res.status(200).send({ message: 'Colaborador deletado com sucesso.'});
    }catch (err) {
        res.status(400).send({ message: 'Não foi possivel deletar colaborador' });
    }
}


module.exports = {
    findColaboradorByIdController,
    findStaffController,
    createColaboradorController,
    updateColaboradorController,
    deleteColaboradorController,
};
