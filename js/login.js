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
    })
})
window.open('/artistas.html', '_self');