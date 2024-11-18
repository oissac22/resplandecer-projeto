function edit() {
    alert("Você clicou em editar");
}

async function deletarPeloId (id) {
    const resp = await fetch("/api/user?id=" + id, {
        method: "DELETE"
    });
    const text = await resp.text();
    window.alert(text);
    carregarTabela();
}

async function carregarTabela(){
    const resp = await fetch("/api/user");
    const json = await resp.json();
    const lista = document.getElementById('lista');
    lista.innerHTML = "";
    json.forEach(function(element){
        lista.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.password}</td>
                <td>${element.email}</td>
                <td>
                    <button onClick="deletarPeloId(${element.id})">Deletar</button>
                </td>
            </tr>
        `;
    });
}
window.addEventListener('DOMContentLoaded', carregarTabela);