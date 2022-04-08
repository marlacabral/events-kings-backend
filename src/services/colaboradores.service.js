const Colaborador = require('../utils/models/colaboradorSchema');

const findStaffService = async () => {
    try{
        const staff = await colab.find();
        if (staff !== undefined){
            return staff;
    } else {
        throw new Error({ message: "Erro ao encontrar staff." });
    }
    }catch(err){
        console.log(err)
}

const findColaboradorByIdService = async (id) => {
    const colaboradorById = await Colaborador.findById(id);
    console.log(colaboradorById)
    if (colaboradorById === undefined){
        console.log('Nenhum colaborador foi encontrado');
        return undefined
    }
    return colaboradorById;
};

const createColaboradorService = async (newColaborador) => {
    if (newColaborador === undefined){
        throw new Error({ message: "Nenhum dado recebido." });
    }
    if(newColaborador.name === undefined || newColaborador.name === " "){
        console.log("rodou validacao");
        throw new Error({ message: "O nome deve ser preenchido." })
    }
    if(newColaborador.email || newColaborador.email === " "){
        throw new Error({ message: "O email deve ser preenchido." })
    }
    if(newColaborador.whatsapp === undefined || newColaborador.whatsapp === " "){
        throw new Error({ message: "O whatsapp deve ser preenchido." })
    }
    if(newColaborador.fone === undefined || newColaborador.fone === " "){
        throw new Error({ message: "O fone deve ser preenchido com DDD." })
    }
    if(newColaborador.rg || newColaborador.rg === " "){
        throw new Error({ message: "O RG deve ser preenchido." })
    }
    if(newColaborador.cpf === undefined || newColaborador.cpf === " "){
        throw new Error({ message: "O CPF deve ser preenchido." })
    }
    if(newColaborador.experienceEvents || newColaborador.experienceEvents === " "){
        throw new Error({ message: "Experiência com Eventos deve ser preenchido." })
    }
    if(newColaborador.adress || newColaborador.adress === " "){
        throw new Error({ message: "O endereço deve ser preenchido." })

    }try{
        await Colaborador.create(newColaborador);
        console.log(newColaborador)
        return newColaborador;
    }catch (err){
        console.log(err)
        throw new Error({ message: err })
    }
};

const updateColaboradorService = async (id, colaboradorEdit) => {
    const colaboradorById = await Colaborador.findByIdAndUpdate(id, colaboradorEdit);
    console.log(colaboradorById)
    if (colaboradorById === undefined){
        throw new Error ({ message: "Nenhum colaborador corresponde a esse id." })
    }
    return colaboradorById;
}

const deleteColaboradorService = async (id) => {
    const colaboradorById = await Colaborador.findByIdAndDelete(id);
    console.log(colaboradorById)
    return { message: "Colaborador deletado com sucesso." }
};

module.exports = {
    findStaffService,
    findColaboradorByIdService,
    createColaboradorService,
    updateColaboradorService,
    deleteColaboradorService,
}}
