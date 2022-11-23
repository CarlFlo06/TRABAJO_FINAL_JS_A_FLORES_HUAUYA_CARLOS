document.querySelector(".bars_menu").addEventListener("click", animar);

        var l1 = document.querySelector(".s1");
        var l2 = document.querySelector(".s2");
        var l3 = document.querySelector(".s3");
        // var c_menu = document.querySelector(".menu");

        function animar(){
            l1.classList.toggle("a1");
            l2.classList.toggle("a2");
            l3.classList.toggle("a3");

            // c_menu.classList.toggle("menu_active");
        }
   