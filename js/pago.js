$(document).ready(function(){
    
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;
    var exp2 = /^[1-9][0-9]*$/;
    var exp3 = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;  
    var exp4 = /^[9]\d{8}$/;
    
    $("#b").click(function(){

        let nom = $("#nombre").val();
        let com = $("#comprobante").val();
        let tel = $("#telefono").val();
        let ape = $("#apellido").val();
        let dni = $("#dni").val();
        let corr = $("#correo").val();
        // while () {
            // $("#nombre input").keyup()
        // }
        if(!exp.test(nom)){
            alert("coloque correctamente su nombre")
            // nom.style.backgrouncolor = "red";
            $("#nombre").addClass("fincoinput")
            return false;
        }else{
            $("#nombre").removeClass("fincoinput")
        }

        if(!exp.test(ape)){
            alert("coloque correctamente su apellido")
            $("#apellido").addClass("fincoinput")
            return false;
        }else{
            $("#apellido").removeClass("fincoinput")
        }

        if (isNaN(dni)||dni.length>8){
            alert("Ingrese correctamente dni");
            $("#dni").addClass("fincoinput")
            return false;
        }else{
            $("#dni").removeClass("fincoinput")
        }

        if(!exp4.test(tel)){
            alert("coloque correctamente su telefono")
            $("#telefono").addClass("fincoinput")
            return false;
        }else{
            $("#telefono").removeClass("fincoinput")
        }

        if(!exp3.test(corr)){
            alert("coloque correctamente su correo")
            $("#correo").addClass("fincoinput")
            return false;
        }else{
            $("#correo").removeClass("fincoinput")
        }
        alert("gracias por su compra");
        return true;
    })
})