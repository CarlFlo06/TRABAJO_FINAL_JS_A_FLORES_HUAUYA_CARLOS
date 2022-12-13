<?php
    if(!empty($_SERVER(['HTTP X REQUESTED WITH']))){
        $nombre = $ POST["nombre"];
        $apellido = $ POST["apellido"];
        $correo = $ POST["correo"];
        $telefono = $ POST["telefono"];
        $mensaje = $ POST["mensaje"];

        if(empty($correo)){
            $error=1;
            $mensaje="correo electronico vacio";
            $datos=0;
        }else{
            $usuario_mail="JhonBeth@email.com";
            $remite="Formulario de Jhon Beth";
            $remite_email = "carlosflores.h66@gmail.com";
            $asunto = "Se envio un correo de contacto desde $remite";

            $mensaje = "<!DOCTYPE html>
            <html lang="en">
            <title>Han enviado los siguientes datos!</title>
            <head>
            </head>
            <body>
                <h1>Contacto de venta desde el sitio Jhon Beth</h1>
                Nombre:".$nombre" <br clear='all'/>
                Apellido:".$apellido" <br clear='all'/>
                Correo:".$correo" <br clear='all'/>
                Telefono:".$telefono" <br clear='all'/>
                Menasje:<br clear='all'/>".$mensaje" <br clear='all'/>
                
            </body>
            </html>";

            $cabeceras = "From: ".$remite." <".$remite_email.">\r\n";
            $cabeceras= $cabeceras."Mime-Version: 1.0\n"; 
            $cabeceras=$cabeceras.'Content-type: text/html; charset=ut-8' ."\r\n";

            $enviar_email = mail($nombre,$apellido,$correo,.$telefono,.$mensaje,$cabeceras );

            if ($enviar_email) {
                $error=0;
                4menasaje="correo enviado";
                $datos=0;
                # code...
            }else{
                $error=1;
                $mensaje="El correo no fue enviado";
                $datos=0;
            }
        }

        $resp[
            "error"=>$error,
            "mensaje"=>$mensaje,
            "datos"=>$datos,
        ];

        echo json_decode($resp);

    }else {
        $resp=[
            "error"=>[1,
            "mensaje"=>"El servidor denego la petición",
            "datos"=>0
        ];
        ]
    }
>