const staff = [
    {
        id: 1,
        name: "Marla Cabral",
        idade: "32",
        email: "devmarlacabral@gmail.com",
        whatsapp: "51996140140",
        fone: "7398517608",
        rg: "8093744012",
        cpf: "01361186070",
        experienceEvents: "Garçonete, bar, caixa",
        pic: "./assets/img1.png",
        adress: "Rua Dorval Marques, 166 Santa Teresa Porto Alegre/RS"
    },
    {
        id: 2,
        name: "José Júnior",
        idade: "22",
        email: "jose@gmail.com",
        whatsapp: "51994140242",
        fone: "51994140242",
        rg: "5096276265",
        cpf: "04069158065",
        experienceEvents: "Bar",
        pic: "./assets/img2.png",
        adress: "Rua A, 100 Porto Alegre/RS"
    }
];

const findStaffService = () => {
    return staff;
};

const findColaboradorByIdService = (id) => {
    const colaborador = staff.find((objeto) => {
        objeto.id == id
    })

    if (colaborador === undefined){
        console.log('Nenhum colaborador foi encontrado');
        return undefined
    }
    return colaborador
};

const createColaboradorService = (newColaborador) => {
    const newId = staff.length + 1;
    newColaborador.id = newId;
    if (newColaborador.cpf !== [11]){
        return null;
    }
    staff.push(newColaborador);
    return newColaborador;
}

const updateColaboradorService = (id, colaboradorEdit) => {
    colaboradorEdit['id'] = id;
    const colaboradorIndex = staff.findIndex((colaborador) => colaborador.id == id);
    if (colaboradorIndex === undefined) {
        return {message: 'Nenhum colaborador encontrado.'}
    }
    staff[colaboradorIndex] = colaboradorEdit;
    return colaboradorEdit;
}

const deleteColaboradorService = (id) => {
    const colaboradorIndex = staff.findIndex((colaborador) => colaborador.id == id);
    return staff.splice(colaboradorIndex, 1);
}

module.exports = {
    findStaffService,
    findColaboradorByIdService,
    createColaboradorService,
    updateColaboradorService,
    deleteColaboradorService,
};
