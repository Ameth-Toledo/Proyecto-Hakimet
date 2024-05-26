const iniciar = () => {
    let listaUsuarios = JSON.parse(localStorage.getItem("lista")) || [];
    let valorUsuario = document.getElementById("RUser").value.trim();
    let valorPassword = document.getElementById("RPass").value.trim();
    let mensaje = "Usuario o password incorrecto ❌";

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].usuario === valorUsuario && listaUsuarios[i].pass === valorPassword) {
            mensaje = "𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 𝐇𝐚𝐤𝐢𝐦𝐞𝐭 👋🏻 tu mejor pagina de anime...";
            window.location.href = "index.html";
            break; 
        }
    }
    alert(mensaje);
}

const togglePasswordVisibility = () => {
    let passwordField = document.getElementById("RPass");
    let showPassCheckbox = document.getElementById("showPass");

    if (showPassCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function redireccionRegistro() {
    window.location.href = "registro.html";
}
