function iniciarSesion() {
    let nombre = document.getElementById("nombre").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    let resultado = document.getElementById("resultado2");

    // Validación para el administrador
    if (nombre === "admin" && contraseña === "admin") {
        window.location.href = "administrador.html";
        return;
    }

    // Recuperar el usuario registrado del Local Storage
    let usuarioRegistro = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioRegistro) {
        resultado.textContent = "No hay usuarios registrados. Regístrate primero.";
        resultado.style.color = "red";
        return;
    }

    // Verificar las credenciales ingresadas
    if (nombre === usuarioRegistro.nombre && contraseña === usuarioRegistro.contraseña) {
        // Redirigir según el rol del usuario
        switch (usuarioRegistro.tipo) {
            case "administrador":
                window.location.href = "administrador.html";
                break;
            case "profesor":
                window.location.href = "profesor.html";
                break;
            case "alumno":
                window.location.href = "alumnos.html";
                break;
            default:
                resultado.textContent = "Tipo de usuario desconocido. Contacta al administrador.";
                resultado.style.color = "red";
        }
    } else {
        resultado.textContent = "Credenciales incorrectas. Intenta de nuevo.";
        resultado.style.color = "red";
    }
}
