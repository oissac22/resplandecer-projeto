import fs from "fs";

const ARQUIVO = "dados.json";
let DATA = [];

export function deletePeloId (id) {
    DATA = DATA.filter(function(reg) {
        return reg.id.toString() !== id;
    })
    salvarJson();
}

function lerJson() {
    if (!fs.existsSync(ARQUIVO)) return;
    const texto = fs.readFileSync(ARQUIVO).toString();
    DATA = JSON.parse(texto);
}

function salvarJson() {
    fs.writeFileSync(ARQUIVO, JSON.stringify(DATA));
}

export function inserirUsuario(name, password, email) {
    const id = Math.random();
    const data = { id, name, password, email };
    DATA.push(data);
    salvarJson();
}

export function editarUsuario(id, name, password, email) {
    const data = { name, password, email };
    DATA.push(data);
    salvarJson();
}

export function listaUsuarios () {
    return DATA;
}


lerJson();