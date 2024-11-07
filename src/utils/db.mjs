import fs from "fs";

const ARQUIVO = "dados.json";
let DATA = [];

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