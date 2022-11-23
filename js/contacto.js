document.getElementById("btnSend").addEventListener("click", validar1);
function validar1(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var lugar = document.getElementById("lugar").value;
    var celular = document.getElementById("celular").value;
    var sabor = document.getElementById("sabor").value;
    var mensaje = document.getElementById("mensaje").value;

    var p = new Login(nombre, apellido,  correo, lugar, celular, sabor, mensaje);
    p.validaPatron1();

}

function Login(nombre, apellido, correo, lugar, celular, sabor, mensaje){

    this.nom = nombre;
    this.ape = apellido;
    this.cor = correo;
    this.lug = lugar;
    this.cel = celular;
    this.sab = sabor;
    this.men = mensaje;

}

Login.prototype.validaPatron1 = function(){
    
    var mensajes;
    //*********NOMBRE***********
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;

    if(!exp.test(this.nom)){
      mensajes="Ingrese su nombre";
      $("#validar1").text(mensajes);
      $("#validar1").css("color","red");
      $("#validar1").css("font-size","15px");
      return 0;
    }
    else{
        mensajes ="correcto";
        $("#validar1").text(mensajes);
        $("#validar1").css("color","green");
    }

    //**********APELLIDO**********
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;

    if(!exp.test(this.ape)){
      mensajes="Ingrese su apellido";
      $("#validar2").text(mensajes);
      $("#validar2").css("color","red");
      $("#validar2").css("font-size","15px");
      return 0;
    }
    else{
        mensajes ="Correcto";
        $("#validar2").text(mensajes);
        $("#validar2").css("color","green");
    }
    
    //***********CORREO***********
    var exp = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    if(!exp.test(this.cor)){
      mensaje="Ingrese un correo válido: correo@gmail.com";
      $("#validar3").text(mensaje);
      $("#validar3").css("color","red");
      $("#validar3").css("font-size","15px");
      return 0;
    }
    else{
        mensaje ="Correcto";
        $("#validar3").text(mensaje);
        $("#validar3").css("color","green");
    }

    //***********LUGAR************
    var exp =  /^[^ ]([A-Z.]|[a-z.]|[ ]){1,14}$/;

    if(!exp.test(this.lug)){
      mensaje="Ingrese el lugar para la entrega";
      $("#validar5").text(mensaje);
      $("#validar5").css("color","red");
      $("#validar5").css("font-size","15px");
      return 0;
    }
    else{
        mensaje ="Correcto";
        $("#validar5").text(mensaje);
        $("#validar5").css("color","green");
    }

    //**********CELULAR************
    var exp = /^[9]\d{8}$/;

    if(!exp.test(this.cel)){
      mensaje="Ingrese su telefono";
      $("#validar6").text(mensaje);
      $("#validar6").css("color","red");
      $("#validar6").css("font-size","15px");
      return 0;
    }
    else{
        mensaje ="Correcto";
        $("#validar6").text(mensaje);
        $("#validar6").css("color","green");
    }

    //***********SABOR************
    var exp =  /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;

    if(!exp.test(this.sab)){
      mensaje="Ingrese el sabor del pedido";
      $("#validar8").text(mensaje);
      $("#validar8").css("color","red");
      $("#validar8").css("font-size","15px");
      return 0;
    }
    else{
        mensaje ="Correcto";
        $("#validar8").text(mensaje);
        $("#validar8").css("color","green");
    }

    //MENSAJE
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;

    if(!exp.test(this.men)){
      mensajes="Ingrese un mensaje";
      $("#validar9").text(mensajes);
      $("#validar9").css("color","red");
      $("#validar9").css("font-size","15px");
      return 0;
    }
    else{
        mensajes ="Correcto";
        $("#validar9").text(mensajes);
        $("#validar9").css("color","green");
    }


    alert("Muchas gracias por enviar el formulario");
    document.frm.submit();
    return true;
}

function valida_envia(){
    //NOMBRE
    if(document.frm.nombre.value == "" && /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/) {
        alert("Por favor indique su Nombre");
        document.frm.nombre.focus();
        return 0;
    }

    //APELLIDO
    if(document.frm.apellido.value == "" && /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/) {
        alert("Por favor indique su apellido");
        document.frm.apellido.focus();
        return 0;
    }

    //CORREO
    if(document.frm.correo.value == "" && /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/) {
        alert("Por favor indica un email valido, para enviarle su respuesta");
        document.frm.correo.focus();
        return 0;
    }

    //LUGAR
    if(document.frm.lugar.value == "" && /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/) {
        alert("Por favor coloque el Lugar");
        document.frm.lugar.focus();
        return 0;
    }

    //CELULAR
    if(document.frm.celular.value == "" && /^[9]\d{8}$/) {
        alert("Por favor coloque su celular");
        document.frm.celular.focus();
        return 0;
    }

    //SABOR
    if(document.frm.sabor.value == "" && /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/) {
        alert("Por favor coloque el sabor del pedido");
        document.frm.sabor.focus();
        return 0;
    }

    //MENSAJE
    if(document.frm.mensaje.value == "" && /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/) {
        alert("Por favor indica un mensaje");
        document.frm.mensaje.focus();
        return 0;
    }

    alert("Muchas gracias por enviar el formulario");
    document.frm.submit();
    return true;
}