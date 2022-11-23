var lista = ["banner.jpg","banner2.jpg","banner3.jpg"];
var i = 0;
var estado;
function carrusel(){
    document.getElementById("imag").src = "img/"+lista[i];
    i++;
    if(i >= lista.length)
        i = 0;
    estado = setTimeout("carrusel()", 3000);
}
    
function carrusel1(){

    let r=document.getElementById("imag");
    r.src = "img/"+lista[i];
    i++;
    if(i >= lista.length -1){
        i = 0;
    }     
    
}

function carrusel2(){

    let r=document.getElementById("imag");
    r.src = "img/"+lista[i];
    i--;
    if(i <= 0){
        i = lista.length -1;
    }   
    
}

document.addEventListener('DOMContentLoaded',function() {
    carrusel();
});
document.getElementById("imggg").addEventListener('click',function(){
    carrusel1();
});
document.getElementById("imggg1").addEventListener('click',function(){
    carrusel2();
});