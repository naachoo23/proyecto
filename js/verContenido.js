function verContenido(){
    let input = document.getElementById('contraseña2');
    let input2 = input.type;
    if(input2 == 'password'){
        input.type = 'text';
    }else if(input2 == 'text'){
        input.type = 'password';
    }
}