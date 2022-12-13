let muestra = [

    {
        "img": "past/pastel1.jpg",
        "Nombre":"Tiramisú",
        "precio":"S/ " + 15.00,
        "estado":"disponible",
        "boton":"producto.html"
    },
    {
        "img": "past/pastel2.jpg",
        "Nombre":"Tres Leches",
        "precio":"S/ " + 15.00,
        "estado":"disponible",
        "boton":"producto.html"
    },
    {
        "img": "past/pastel3.jpg",
        "Nombre":"Tarta de Santiago",
        "precio":"S/ " + 15.00,
        "estado":"disponible",
        "boton":"producto.html"
    },
    {
        "img": "past/pastel4.jpg",
        "Nombre":"Ópera",
        "precio":"S/ " + 15.00,
        "estado":"disponible",
        "boton":"producto.html"
    },

];

function rCatalogo(muestra) {
    let html = '';
    
    muestra.forEach(function(elemento){
    html += "<div class='card p-0 m-2 imgg mx-4' style='background-color:#E3D8D6'>"+
                "<img class='card-img-top' src="+elemento.img+"></img>"+
                "<div class='card-body'>"+
                    "<h3 style='height: 70px;'>"+elemento.Nombre+"</h3>"+
                    
                "</div>"+
            "</div>";

    });

    document.getElementById("muestra").innerHTML = html;
}
  
document.addEventListener('DOMContentLoaded',function() {
    rCatalogo(muestra);
});