function validar(){
    // vform=true;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let eadres = document.getElementById("eaddress").value;
    let phone = document.getElementById("phone").value;
    let mesage = document.getElementById("message").value;
    
    exp = /^[^ ]([a-zA-ZÀ-ÿ\s]|[ ]){1,40}$/;
    exp2 = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    exp3 = /^[9]\d{8}$/;
    // VAL1
    if(!exp.test(fname)){
        document.getElementById("validar1").textContent="Por favor coloque correctamente su nombre";
        document.getElementById("validar1").classList.add("p-incorrecto");
        document.getElementById("validar1").classList.remove("p-correcto");
        document.getElementById("v1").classList.add("fincoinput");
        document.getElementById("v1").classList.remove("fcoinput");
        return false;
    }else{
        document.getElementById("validar1").textContent="Correcto";
        document.getElementById("validar1").classList.add('p-correcto');
        document.getElementById("validar1").classList.remove("p-incorrecto");
        document.getElementById("v1").classList.add("fcoinput");
        document.getElementById("v1").classList.remove("fincoinput");
    }
    // VAL2
    if(!exp.test(lname)){
        document.getElementById("validar2").textContent="Por favor coloque correctamente su apellido";
        document.getElementById("validar2").classList.add("p-incorrecto");
        document.getElementById("validar2").classList.remove("p-correcto");
        document.getElementById("v2").classList.add("fincoinput");
        document.getElementById("v2").classList.remove("fcoinput");
        return false;
    }else{
        document.getElementById("validar2").textContent="Correcto";
        document.getElementById("validar2").classList.add("p-incorrecto");
        document.getElementById("validar2").classList.add('p-correcto');
        document.getElementById("validar2").classList.remove("p-incorrecto");
        document.getElementById("v2").classList.add("fcoinput");
        document.getElementById("v2").classList.remove("fincoinput");
    }
    // VAL3
    if(!exp2.test(eadres)){
        document.getElementById("validar3").textContent="Porfavor coloque correctamente su correo";
        document.getElementById("validar3").classList.add("p-incorrecto");
        document.getElementById("validar3").classList.remove("p-correcto");
        document.getElementById("v3").classList.add("fincoinput");
        document.getElementById("v3").classList.remove("fcoinput");
        return false;
    }else{
        document.getElementById("validar3").textContent="Correcto";
        document.getElementById("validar3").classList.add('p-correcto');
        document.getElementById("validar3").classList.remove("p-incorrecto");
        document.getElementById("v3").classList.add("fcoinput");
        document.getElementById("v3").classList.remove("fincoinput");
    }
    // VAL 4
    if(!exp3.test(phone)){
        document.getElementById("validar4").textContent="Por favor coloque correctamente su telefono";
        document.getElementById("validar4").classList.add("p-incorrecto");
        document.getElementById("validar4").classList.remove("p-correcto");
        document.getElementById("v4").classList.add("fincoinput");
        document.getElementById("v4").classList.remove("fcoinput");
        return false;
    }else{
        document.getElementById("validar4").textContent="Correcto";
        document.getElementById("validar4").classList.add('p-correcto');
        document.getElementById("validar4").classList.remove("p-incorrecto");
        document.getElementById("v4").classList.add("fcoinput");
        document.getElementById("v4").classList.remove("fincoinput");
    }
    // VAL 5
    if(!exp.test(mesage)){
        document.getElementById("validar5").textContent="Por favor coloque un mensaje";
        document.getElementById("validar5").classList.add("p-incorrecto");
        document.getElementById("validar5").classList.remove("p-correcto");
        document.getElementById("v5").classList.add("fincoinput");
        document.getElementById("v5").classList.remove("fcoinput");
        return false;
    }else{
        document.getElementById("validar5").textContent="correcto";
        document.getElementById("validar5").classList.add('p-correcto');
        document.getElementById("validar5").classList.remove("p-incorrecto");
        document.getElementById("v5").classList.add("fcoinput");
        document.getElementById("v5").classList.remove("fincoinput");
    }
    alert("Gracias por por contactarnos")
    return true;
    
}