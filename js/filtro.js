$(document).ready(function(){
    $("#filtro1").hide();
    $("#filtro2").hide();  
    $("#filtro3").hide();   

    mostrarCarrito();
    $("#b1").click(function(){
        $("#contenedor").show();
        $("#filtro1").hide();
    })
    $("#b2").click(function(){
        $("#contenedor").hide();
        $("#filtro1").hide();
        $("#filtro2").hide();
        $("#filtro1").show();
    })
    $("#b3").click(function(){
        $("#contenedor").hide();
        $("#filtro1").hide();
        $("#filtro2").hide();
        $("#filtro3").hide();
        $("#filtro2").show();
    })
    $("#b4").click(function(){
        $("#contenedor").hide();
        $("#filtro1").hide();
        $("#filtro2").hide();
        $("#filtro3").hide();
        $("#filtro4").hide();
        $("#filtro3").show();
    })

});
// FILTROS
const f1=document.querySelector("#filtro1");

function filtro1(pre){
  // const precio1=pre;
  carrito=carrito.filter((pre)=> pre.precio ==50)
  mostrarCarrito();
}
// function filtro1(filtro1){
//     return filtro1.filter((p)=> p.precio==15)
// }
// filtro1(catalogo).forEach((prod)=>{
//   const { id, img, nombre, precio, cantidad, estado,boton}=prod;
//     f1.innerHTML+=`
//     <div class="card p-0 m-2 imgg" style='background-color:#E3D8D6'>
//       <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
//       <div class="card-body">
//         <h4>${nombre}</h4>
//         <p>Precio: ${precio}</p>
//         <label>Cantidad</label><br>
//         <p>${cantidad}</p>
//         <p>Estado: ${estado}</p>
//         <a href="${boton}" class="btn btn-secondary mb-2">Comprar</a>
//         <button class="btn btn-success mb-2" onclick="agregarProducto(${id})">carrito</button>
//       </div>
//     </div>`;
// });
const f2=document.querySelector("#filtro2");

function filtro2(filtro2){
    return filtro2.filter((p)=> p.precio==50)
}
filtro2(catalogo).forEach((prod)=>{
  const { id, img, nombre, precio, cantidad, estado,boton}=prod;
    f2.innerHTML+=`
    <div class="card p-0 m-2 imgg" style='background-color:#E3D8D6'>
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h4>${nombre}</h4>
        <p>Precio: ${precio}</p>
        <label>Cantidad</label><br>
        <p>${cantidad}</p>
        <p>Estado: ${estado}</p>
        <a href="${boton}" class="btn btn-secondary mb-2">Comprar</a>
        <button class="btn btn-success mb-2" onclick="agregarProducto(${id})">carrito</button>
      </div>
    </div>`;
})