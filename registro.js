const Registrar = () => {
    let listaUsuarios = JSON.parse(localStorage.getItem("lista")) || [];
    let valorUsuario = document.getElementById("RUser").value.trim();
    let valorPassword = document.getElementById("RPass").value.trim();
    let valorConfirmacion = document.getElementById("RConfirm").value.trim();
    let mensaje = "";

    const existeUsuario = listaUsuarios.some(usuario => usuario.usuario === valorUsuario);

    if (existeUsuario) {
        mensaje = "El usuario ya existe. Por favor, elija otro nombre de usuario.";
    } else if (valorPassword !== valorConfirmacion) {
        mensaje = "Las contraseñas no coinciden. Por favor, verifique.";
    } else {
        listaUsuarios.push({ usuario: valorUsuario, pass: valorPassword });

        localStorage.setItem("lista", JSON.stringify(listaUsuarios));

        mensaje = "Usuario registrado exitosamente.";
    }
        Swal.fire(mensaje);
}

const togglePasswordVisibility = () => {
    let passwordField = document.getElementById("RPass");
    let confirmPasswordField = document.getElementById("RConfirm");
    let showPassCheckbox = document.getElementById("showPass");

    if (showPassCheckbox.checked) {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    }
}
