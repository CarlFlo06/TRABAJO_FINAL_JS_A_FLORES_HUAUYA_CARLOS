<?php

use PHPMailer\PHPMailer\{PHPMailer, SMTP, Exception};

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST['submit'])) {

    $nombre = $_POST['nombre'];
    $apellido = $_POST['nombre'];
    $email = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $ip = $_SERVER["REMOTE_ADDR"];
    // $captcha = $_POST['g-recaptcha-response'];
    $secretKey = 'aqui va la clave secreta';

    $errors = array();

    // $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$recaptchaResponse}&remoteip={$ip}");

    // $atributos = json_decode($response, TRUE);

    // if (!$atributos['success']) {
    //     $errors[] = 'Verifica el captcha';
    // }

    if (empty($nombre)) {
        $errors[] = 'El campo nombre es obligatorio';
    }

    if (empty($apellido)) {
        $errors[] = 'El campo nombre es obligatorio';
    }

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'La dirección de correo electrónico no es válida';
    }

    if (empty($telefono)) {
        $errors[] = 'El campo asunto es obligatorio';
    }

    if (empty($mensaje)) {
        $errors[] = 'El campo mensaje es obligatorio';
    }

    if (count($errors) == 0) {

        $msj = "De: $nombre <a href='mailto:$correo'>$correo</a><br>";
        $msj = "De: $apellido <a href='mailto:$correo'>$correo</a><br>";
        $msj .= "Telefono: $telefono<br><br>";
        $msj .= "Cuerpo del mensaje:";
        $msj .= '<p>' . $mensaje . '</p>';
        $msj .= "--<p>Este mensaje se ha enviado desde un formulario de contacto de Código de programación.</p>";

        $mail = new PHPMailer(true);

        try {
            $mail->SMTPDebug = SMTP::DEBUG_OFF;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'carlosflores.h66@gmail.com';
            $mail->Password = 'jvakorkgepeohdcp';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;

            $mail->setFrom('carlosflores.h66@gmail.com', 'Emisor');
            $mail->addAddress('carlos.d.floresh66@gmail.com', 'Receptor');
            //$mail->addReplyTo('otro@dominio.com');

            $mail->isHTML(true);
            $mail->Subject = 'Formulario de contacto';
            $mail->Body = utf8_decode($msj);

            $mail->send();

            $respuesta = 'Correo enviado';
        } catch (Exception $e) {
            $respuesta = 'Mensaje ' . $mail->ErrorInfo;
        }
    }
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Suez+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="/icon/cake.png"/>
    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">

    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
<body>
    <main>
        <!------------------HEADER-------------------->
        
        <header class="mb-5">

            <div class="heade">
    
                <!-- BARRA NAVEGACIÓN -->
                <div class="logo-head">
                    <a href="#" class="bg-black">
                        <img class="icon" src="icon/cake.png" alt="">
                        <span>Jhon Beth</span> 
                    </a>
                </div>
                <nav id="menu" class="menu">
                    <ul class="">
                        <li><a href="inicio.html" class="">Inicio</a></li>
                        <li><a href="nosotros.html" class="">Nosotros</a></li>
                        <li><a href="tienda.html" class="">Tienda</a></li>
                        <li><a href="#" class="">Especialidades</a></li>
                        <li><a href="contacto.html" class="">Contáctanos</a></li>
                    </ul>    
                </nav>
    
                <div class="head">
                    <a href="especial_pasteles.html" class="ai"><i class="fa-solid fa-book"></i></a>
                    
                    <a href="#" class="ai" data-bs-toggle="offcanvas" data-bs-target="#intro"><i class="bi bi-cart" id="carritoContenedor">0</i></a>
                    
                </div>
                <!-- FIN DE BARRA DE NAVEGACIÓN -->
                        
                <div class="icon-menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
                
            </div>
    
            <div class="text-center text-white d-flex justify-content-center align-items-center bg-dark" id="imag">
                
                <h1 class="display-4 fw-bolder">Contacto</h1>
            </div>
            
        </header>
        <!-- error -->
        <?php
            if (isset($errors)) {
                if (count($errors) > 0) {
            ?>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <?php
                                foreach ($errors as $error) {
                                    echo $error . '<br>';
                                }
                                ?>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
            <?php
                }
            }
            ?>
        <!-------------------------------------------->
        
        <!-- BOTON FLOTANTE -->
        <a href="https://wa.me/51979617922"  class="btnflotante2">
            <img class="" src="icon/whatsapp.png" alt="">
        </a>
        <!--  -->
        <!-- BOTON FLOTANTE 2 -->
        <a class="btnflotante" data-bs-toggle="offcanvas" data-bs-target="#intro">
            <i class="bi bi-cart" id="carritoContenedor1">0</i>
        </a>
        <!--  -->
        <!-- CARRITO LATERAL DERECHO -->
        <div class="offcanvas offcanvas-end" id="intro" data-bs-scroll="true">

            <div class="offcanvas-header" id="offcanvasRight">
                <div class="offcanvas-title">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            </div>
            
            <div class="offcanvas-body">
                
            </div>
            <div class="offcanvas-footer">
                <button type="button" class="mb-3 btn btn-danger" id="vaciarCarrito">
                    Vaciar carrito
                </button>
                <button type="button" id="procesarCompra" class="mb-3 btn btn-primary">
                    Continuar compra
                </button><br>
                <span>Precio total:</span>
                <p class="text-center" id="precioTotal"></p>
            </div>
        </div>
        
        <!-----------------SECTION-------------------->

        <!-- CONTENEDOR -->
        <div class="container col-8 mt-3">

            <!-- FORMULARIO -->
            <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" autocomplete="off" method="POST" id="formu" >

                <!-- TITULO -->
                <div class="text-center  mb-3">
                    <h2 for="form-floating">Completa el formulario</h2>
                </div>

                <!-- NOMBRE -->
                <div class="input-group">
                    <span class="input-group-text icono"><i class="fa-solid fa-user-large "></i></span>

                    <div class="form-floating text-black-50" id="v1">
                        <input class="form-control" type="text" for="form-floating" placeholder="Nombres" id="nombre" name="nombre" required>
                        <label for="form-floating" class="form-label" id="floatingInput">Nombres</label>
                        <div class="w">
                            <p id="validar1"></p>
                        </div>
                    </div>
                    
                </div>    
                
                <!-- APELLIDO -->
                <div class="input-group">
                    <span class="input-group-text icono"><i class="fa-solid fa-user "></i></span>
                    
                    <div class="form-floating text-black-50" id="v2">
                        <input class="form-control" type="text" for="form-floating" placeholder="Apellidos" id="apellido" name="apellido" required>
                        <label for="form-floating" class="form-label" id="floatingInput">Apellidos</label>
                        <div class="w">
                            <p id="validar2"></p>
                        </div>
                    </div>
                </div> 

                <!-- CORREO -->
                <div class="input-group">
                    <span class="input-group-text icono"><i class="fa-regular fa-envelope "></i></span>
                    
                    <div class="form-floating text-black-50" id="v3">
                        <input class="form-control" type="text" for="form-floating" placeholder="Correo" id="correo" name="correo" required>
                        <label for="form-floating" class="form-label" id="floatingInput">Correo</label>
                        <div class="w">
                            <p id="validar3"></p>
                        </div>
                    </div>
                </div>

                <!-- TELEFONO -->
                <div class="input-group">
                    <span class="input-group-text icono"><i class="fa-solid fa-square-phone "></i></span>
                    
                    <div class="form-floating text-black-50" id="v4">
                        <input class="form-control" type="text" for="form-floating" placeholder="Telefono" id="telefono" name="telefono" required>
                        <label for="form-floating" class="form-label" id="floatingInput">Telefono</label>
                        <div class="w">
                            <p id="validar4"></p>
                        </div>
                    </div>
                </div>

                <!-- MENSAJE -->
                <div class="input-group">
                    <span class="input-group icono"><i class="fa-regular fa-pen-to-square "></i></span>
                    
                    <div class="form-floating text-black-50" id="v5">
                        <textarea class="form-control" name="" for="form-floating" id="mensaje" name="mensaje" rows="4" style="height: 140px;" placeholder="Coloca un mensaje" required></textarea>
                        <label for="form-floating" class="form-label" id="floatingInput">Coloca un mensaje</label>
                        <div class="w">
                            <p id="validar5"></p>
                        </div>
                    </div>
                </div>
                
                <!-- BOTON -->
                <div class="input-group justify-content-center">
                    <button class="btn btn-primary mb-5" name="submit" type="submit" onclick="validar()">Submit</button>
                </div>

            </form>

            <!-- RESPUESTA -->
            <?php if (isset($respuesta)) { ?>
                <div class="row py-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <?php echo $respuesta; ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            <?php } ?>
            
        </div>
        <!-------------------FOOTER------------------->
        
        <footer class="text-white bg-dark p-4 pt-5">
            <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
                <div class="col mb-5">
                    <div class="logo">
                        <a href="#" class="">      
                            <img class="icon" src="icon/cake.png" alt="">
                            <span class="fs-4">Jhon Beth</span> 
                        </a>
                    </div> 
                    <div>
                        <li><a href="nosotros.html">Nosotros</a></li>
                        <li><a href="tienda.html">Tienda</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                        <li><a href="#">Politicas de privacidad</a></li>
                        <li><a href="#">Terminos y condiciones</a></li>
                    </div>
                </div>
                
                <div class="col imgg1 mb-5">
                    <h4>Siguenos en:</h4>
                    <img src="icon/facebook.png" alt="">
                    <img src="icon/instagram.png" alt="">
                    <img src="icon/twitter.png" alt="">
                </div>
                <div class="col imgg1 mb-5">
                    <h4>Atendemos de:</h4>
                    <p>Lunes a Sábado: 
                    De 8:00 am a 8:00 pm</p>
                </div>
                <div class="col imgg1 mb-5">
                    <h4>Comunicate con nosotros:</h4>
                    <div class="d-flex imgg1 align-items-center justify-content-center">

                            <li><img class="me-3" src="icon/whatsapp.png" alt="">998765432</li>

                    </div>
                    <div class="d-flex imgg1 align-items-center justify-content-center">

                            <li><img class="me-3" src="icon/gmail.png" alt="">user@email.com</li>

                    </div>
                </div>
            </div>
            <P>Jhon Beth  | Todos los derechos reservados 2022. Diseñado por Carlos Flores Huauya</P>
    
        </footer>

    </main>
    <script src="js/contacto.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/tienda.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>