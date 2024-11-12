function edit() {
    alert("Você clicou em editar");
}
async function carregarTabela(){
    const resp = await fetch("/api/user");
    const json = await resp.json();
    /*
        json = [
            {
                "id":"123456",
                "name": "Cássio",
                "password": "123456",
                "email": "cassio@test.com"
            },
            {
                "id":"123456",
                "name": "Cássio",
                "password": "123456",
                "email": "cassio@test.com"
            }
        ];
    */
    const lista = document.getElementById('lista');
    lista.innerHTML = "";
    json.forEach(function(element){
        lista.innerHTML +=  `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.password}</td>
                <td>${element.email}</td>
            </tr>
        `;
    });

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(e) {
        const password = document.getElementById("password");
        const confirmpassword = document.getElementById("confirmpassword");
        if ( password.value !== confirmpassword.value ) {
            e.preventDefault();
            window.alert("Senha diferente de confirmação de senha");
        }
    })
}
window.addEventListener('DOMContentLoaded', carregarTabela);