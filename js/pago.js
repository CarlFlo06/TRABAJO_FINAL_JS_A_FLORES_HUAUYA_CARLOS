$(document).ready(function(){
    $("#formpago2").hide();
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;
    var exp2 = /^[1-9][0-9]*$/;
    var exp3 = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;  
    var exp4 = /^[9]\d{8}$/;

    $("#b").click(function(){

        let nom = $("#nombre").val();
        let com = document.getElementById("comprobante").selectedIndex;
        let tel = $("#telefono").val();
        let ape = $("#apellido").val();
        let dni = $("#dni").val();
        let corr = $("#correo").val();
        var condi = $("#condi:checked").val()
        var poli = $("#poli:checked").val()
        var fecha = $("#fecha").val();
        var sel1 = document.getElementById("sel1").selectedIndex;
        var sel2 = document.getElementById("sel2").selectedIndex;

        if(sel1==null || sel1==0){
            alert("Selecciona el local de recojo");
            $("#sel1").addClass("fincoinputs")
            return false;
        }else{
            $("#sel1").removeClass("fincoinputs")
        }
        if(fecha===""){
            alert("Coloca una fecha");
            $("#fecha").addClass("fincoinputs")
            return false;
        }else{
            $("#fecha").removeClass("fincoinputs")
        }

        if(sel2=null || sel2==0){
            alert("Selecciona un horario");
            $("#sel2").addClass("fincoinputs")
            return false;
        }else{
            $("#sel2").removeClass("fincoinputs")
        }

        if(!exp.test(nom)){
            alert("coloque correctamente su nombre")
            $("#nombre").addClass("fincoinputs")
            return false;
        }else{
            $("#nombre").removeClass("fincoinputs")
        }

        if(!exp.test(ape)){
            alert("coloque correctamente su apellido")
            $("#apellido").addClass("fincoinputs")
            return false;
        }else{
            $("#apellido").removeClass("fincoinputs")
        }

        if(com==null || com==0){
            alert("Selecciona un comprobante");
            $("#comprobante").addClass("fincoinputs")
            return false;
        }else{
            $("#comprobante").removeClass("fincoinputs")
        }


        if (isNaN(dni)||dni.length>8){
            alert("Ingrese correctamente dni");
            $("#dni").addClass("fincoinputs")
            return false;
        }else{
            $("#dni").removeClass("fincoinputs")
        }

        if(!exp4.test(tel)){
            alert("coloque correctamente su telefono")
            $("#telefono").addClass("fincoinputs")
            return false;
        }else{
            $("#telefono").removeClass("fincoinputs")
        }

        if(!exp3.test(corr)){
            alert("coloque correctamente su correo")
            $("#correo").addClass("fincoinputs")
            return false;
        }else{
            $("#correo").removeClass("fincoinputs")
        }

        if(!$('input[name="poli"]').is(':checked')){
            alert('porfavor acepte nuestra politica de privacidad');
            $("#poli").addClass("fincoinputs")
            return false;
        }else{
            $("#poli").removeClass("fincoinputs")
        }

        if(!$('input[name="condi"]').is(':checked')){
            alert('porfavor acepte nuestros terminos y condiciones');
            $("#condi").addClass("fincoinputs")
            return false;
        }else{
            $("#condi").removeClass("fincoinputs")
        }

        alert("gracias por su compra");
        window.open("inicio.html");
        window.close();

    })

    const formpago = document.querySelector("#formpago");

    $("#orden1").click(function(){
        $("#formpago").hide();
        // $("formpago2").hide();
        $("#formpago2").show();
        
    })
    $("#orden2").click(function(){
        $("#formpago").show();
        
        $("#formpago2").hide();
    })

    const form2=document.querySelector("#formpago2");
    form2.innerHTML+=`
        
                    <h3 class="mt-5">Detalles de facturación</h3>

                    <!-- DATOS -->
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mb-5">
                        <div class="col">
                            <!-- NOMBRES -->
                            <label for="">Nombres Completos <b>*</b></label><br>
                            <input type="text" id="nombre" class="form-control"><br>
                            <!-- COMPROBANTE -->
                            <label for="">Comprobante <b>*</b></label><br>
                            <select name="" id="comprobante" class="form-select form-select-lg">
                                <option value="" disabled selected>Seleccionar</option>
                                <option value="">Factura</option>
                                <option value="">Boleta</option>
                            </select><br>

                            <!-- TELEFONO -->
                            <label for="">Teléfono <b>*</b></label><br>
                            <input type="text" id="telefono" class="form-control"> 
                        </div>

                        <div class="col">
                            <!-- APELLIDOS -->
                            <label for="">Apellidos Completos <b>*</b></label><br>
                            <input type="text" id="apellido" class="form-control"><br>
                            <!-- DNI -->
                            <label for="">DNI *</label><br>
                            <input type="text" id="dni" class="form-control"><br>
                            <!-- CORREO -->
                            <label for="">Correo electrónico <b>*</b></label><br>
                            <input type="text" id="correo" class="form-control">

                        </div>
                    </div>
    `
})