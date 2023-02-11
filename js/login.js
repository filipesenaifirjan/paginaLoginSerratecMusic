let formulario = {
    email: document.querySelector("#email"),
    senha: document.querySelector("#senha"),
    btnEntrar: document.querySelector("#btn-entrar")
};
formulario.btnEntrar.addEventListener('click' , () => {
    alert("Olá!!");
    
    let usuario = new Usuario({
        email: formulario.email.value,
        senha: formulario.senha.value
    });

    autenticar(usuario.email, usuario.senha);
//window.open('/artistas.html', '_self')
})

function autenticar(email, senha){
fetch(` ${URL_BASE}/api/login` , {
    headers:{
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({user: email, password: senha})
})
.then(responde => {
    let token = responde.headers.get("Authorization")
})
}