const baseUrl = "http://localhost:3001/staff";

const findStaff= async () => {
    const response = await fetch(`${baseUrl}/find-staff`);

    const staff = await response.json();

    staff.forEach((colaborador) => {
        document.getElementById("staffList").insertAdjacentHTML(
            "beforeend",
            `<div class="StaffListaItem">
            <div>
                <div class="StaffListaItem_name">${`Nome: ${colaborador.name}`}</div>
                <div class="StaffListaItem_idade">${`Idade: ${colaborador.idade}`}</div>
                <div class="StaffListaItem_email">${`Email: ${colaborador.email}`}</div>
                <div class="StaffListaItem_whatsapp">${`Whatsapp: ${colaborador.whatsapp}`}</div>
                <div class="StaffListaItem_fone">${`Fone: ${colaborador.fone}`}</div>
                <div class="StaffListaItem_rg">${`RG: ${colaborador.rg}`}</div>
                <div class="StaffListaItem_cpf">${`CPF: ${colaborador.cpf}`}</div>
                <div class="StaffListaItem_experienceEvents">${`Experiência com Eventos: ${colaborador.experienceEvents}`}</div>
                <div class="StaffListaItem_adress">${`Endereço: ${colaborador.adress}`}</div>
            </div>
            <img class="StaffListaItem_pic" src=${colaborador.pic} alt=${`${colaborador.name}`}/>
            </div>`,
        );
    });
};

findStaff();


const findColaboradorById = async () => {
    const id = document.getElementById("idColaborador").value;

    const response = await fetch(`${baseUrl}/find-staff/${id}`);

    const colaborador = await response.json();

    const colaboradorEscolhidoDiv = document.getElementById("colaboradorEscolhido");

    colaboradorEscolhidoDiv.innerHTML = `
    <div class ="StaffCardItem">
        <div>
            <div class="StaffListaItem_name">${colaborador.name}</div>
            <div class="StaffListaItem_idade">${colaborador.idade}</div>
            <div class="StaffListaItem_email">${colaborador.email}</div>
            <div class="StaffListaItem_whatsapp">${colaborador.whatsapp}</div>
            <div class="StaffListaItem_fone">${colaborador.fone}</div>
            <div class="StaffListaItem_rg">${colaborador.rg}</div>
            <div class="StaffListaItem_cpf">${colaborador.cpf}</div>
            <div class="StaffListaItem_experienceEvents">${colaborador.experienceEvents}</div>
            <div class="StaffListaItem_adress">${colaborador.adress}</div>
        </div>
            <img class="StaffListaItem_pic" src=${colaborador.pic} alt=${colaborador.name}/>
    </div>
    `;
};

const submitColaborador = async () => {
    const name = document.getElementById('name').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const fone = document.getElementById('fone').value;
    const rg = document.getElementById('rg').value;
    const cpf = document.getElementById('cpf').value;
    const experienceEvents = document.getElementById('experienceEvents').value;
    const pic = document.getElementById('pic').value;
    const adress = document.getElementById('adress').value;

    const colaborador = {
        name,
        idade,
        email,
        whatsapp,
        fone,
        rg,
        cpf,
        experienceEvents,
        pic,
        adress,
    };

    const response = await fetch(baseUrl + '/create', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
        body: JSON.stringify(colaborador),
    });

    const novoColaborador = await response.json();

    const html = `
    <div class ="StaffListaItem">
        <div>
            <div class="StaffListaItem_name">${novoColaborador.name}</div>
            <div class="StaffListaItem_idade">${novoColaborador.idade}</div>
            <div class="StaffListaItem_email">${novoColaborador.email}</div>
            <div class="StaffListaItem_whatsapp">${novoColaborador.whatsapp}</div>
            <div class="StaffListaItem_fone">${novoColaborador.fone}</div>
            <div class="StaffListaItem_rg">${novoColaborador.rg}</div>
            <div class="StaffListaItem_cpf">${novoColaborador.cpf}</div>
            <div class="StaffListaItem_experienceEvents">${`Experiência com Eventos: ${novoColaborador.experienceEvents}`}</div>
            <div class="StaffListaItem_adress">${novoColaborador.adress}</div>
        </div>
        <img class="StaffListaItem_pic" src=${novoColaborador.pic} alt=${`Foto de ${novoColaborador.name}`} />
    </div>
    `;


    document.getElementById('staffList').insertAdjacentHTML('beforeend', html);

    document.getElementById('name').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('email').value = '';
    document.getElementById('whatsapp').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('rg').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('experienceEvents').value = '';
    document.getElementById('pic').value = '';
    document.getElementById('adress').value = '';

}
