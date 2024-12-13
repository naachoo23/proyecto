function contieneCaracteres(contraseña) {
    if (contraseña.length < 8 || contraseña.length > 16) {
        return "Su contraseña debe tener entre 8 y 16 caracteres.";
    }
    return true;
}

function tieneMayuscula(contraseña) {
    for (let i = 0; i < contraseña.length; i++) {
        let letra = contraseña[i];
        if (letra >= 'A' && letra <= 'Z') {
            return true;
        }
    }
    return false;
}

function contieneMinuscula(contraseña) {
    for (let i = 0; i < contraseña.length; i++) {
        let letra = contraseña[i];
        if (letra >= 'a' && letra <= 'z') {
            return true;
        }
    }
    return false;
}

function contieneNumeros(contraseña) {
    for (let i = 0; i < contraseña.length; i++) {
        let letra = contraseña[i];
        if (letra >= '0' && letra <= '9') {
            return true;
        }
    }
    return false;
}

function tieneCaracEspeciales(contraseña) {
    let caracteresEspeciales = ['-', '_', '@', '#', '$', '%', '&'];
    for (let i = 0; i < contraseña.length; i++) {
        let letra = contraseña[i];
        if (caracteresEspeciales.includes(letra)) {
            return true;
        }
    }
    return false;
}

function validarContraseña() {
    let nombre = document.getElementById("nombre").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    let confirmarContraseña = document.getElementById("contraseña2").value.trim();
    let tipoUsuario = document.getElementById("tipoUsuario").value; // Asegúrate de tener un campo para esto
    let resultado = document.getElementById("resultado");

    let longitudCorrecta = contieneCaracteres(contraseña);

    if (!nombre) {
        mostrarResultado("Por favor, ingresa un nombre de usuario.");
        return;
    }

    if (longitudCorrecta !== true) {
        mostrarResultado(longitudCorrecta);
        return;
    }

    if (!tieneMayuscula(contraseña)) {
        mostrarResultado("La contraseña debe tener al menos una letra mayúscula.");
        return;
    }

    if (!contieneMinuscula(contraseña)) {
        mostrarResultado("La contraseña debe tener al menos una letra minúscula.");
        return;
    }

    if (!contieneNumeros(contraseña)) {
        mostrarResultado("La contraseña debe tener al menos un número.");
        return;
    }

    if (!tieneCaracEspeciales(contraseña)) {
        mostrarResultado("La contraseña debe tener al menos un carácter especial: '-', '_', '@', '#', '$', '%', '&'.");
        return;
    }

    if (contraseña !== confirmarContraseña) {
        mostrarResultado("Las contraseñas no coinciden.");
        return;
    }

    // Guardar en Local Storage
    let usuario = {
        nombre : nombre,
        contraseña: contraseña,
        tipo: tipoUsuario
    
    };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    mostrarResultado("Usuario registrado correctamente.");
    resultado.style.color = 'green';

    // Redirigir al login
    setTimeout(() => {
        window.location.href = "inicioSesion.html";
    }, 2000);
}

function mostrarResultado(mensaje) {
    let resultado = document.getElementById("resultado");
    resultado.textContent = mensaje;
    resultado.style.color = "red";
}
