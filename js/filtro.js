$(document).ready(function(){
  $("#contenedor2").hide();
    $("#filtro1").hide();
    $("#filtro2").hide();  
    $("#filtro3").hide();   

    $("#b1").click(function(){
        $("#contenedor").show();
        $("#contenedor2").hide();
        $("#paginas").show();
        $("#filtro1").hide();
        $("#filtro2").hide();
    })
    $("#b2").click(function(){
        $("#contenedor").hide();
        $("#contenedor2").hide();
        $("#paginas").hide();
        $("#filtro1").hide();
        $("#filtro2").hide();
        $("#filtro1").show();
    })
    $("#b3").click(function(){
        $("#contenedor").hide();
        $("#contenedor2").hide();
        $("#paginas").hide();
        $("#filtro1").hide();
        $("#filtro2").hide();
        $("#filtro3").hide();
        $("#filtro2").show();
    })
    // $("#b4").click(function(){
    //     $("#contenedor").hide();
    //     $("#contenedor2").hide();
    //     $("#filtro1").hide();
    //     $("#filtro2").hide();
    //     $("#filtro3").hide();
    //     $("#filtro4").hide();
    //     $("#filtro3").show();
    // })
    $("#pag1").click(function(){
      $("#contenedor").show();
      $("#contenedor2").hide();
      $("#filtro1").hide();
      $("#filtro2").hide();
      $("#filtro3").hide();
    })
    $("#pag2").click(function(){
      $("#contenedor").hide();
      // $("#contenedor2").hide();
      // $("#contenedor").hide();
      $("#contenedor2").show();
      $("#filtro1").hide();
      $("#filtro2").hide();
      $("#filtro3").hide();
    })

});


const content2=catalogo.filter((id) => id.id >= 11);
console.log(content2)

const c2=document.querySelector("#contenedor2");
content2.forEach((prod)=>{
  const { id, img, nombre, precio, cantidad, estado,boton}=prod;
  if (c2) {
    c2.innerHTML += `
    <div class="card p-0 m-2 imgg" style='background-color:#E3D8D6'>
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h4>${nombre}</h4>
        <p>Precio: ${precio}</p>
        <label>Cantidad</label><br>
        <p>${cantidad}</p>
        <p>Estado: ${estado}</p>
        <a href="#" class="btn btn-secondary mb-2"><i class="bi bi-search"></i></a>
        <button class="btn btn-success mb-2" onclick="agregarProducto(${id})"><i class="bi bi-cart" id="carritoContenedor"></i></button>
      </div>
    </div>
    `;
  }
});

const filtro1=catalogo.filter((pre) => pre.precio <= 30);
console.log(filtro1)

  const f1=document.querySelector("#filtro1");
  filtro1.forEach((prod)=>{
  const { id, img, nombre, precio, cantidad, estado,boton}=prod;
    f1.innerHTML+=`
    <div class="card p-0 m-2 imgg" style='background-color:#E3D8D6'>
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h4>${nombre}</h4>
        <p>Precio: ${precio}</p>
        <label>Cantidad</label><br>
        <p>${cantidad}</p>
        <p>Estado: ${estado}</p>
        <a href="${boton}" class="btn btn-secondary mb-2"><i class="bi bi-search"></i></a>
        <button class="btn btn-success mb-2" onclick="agregarProducto(${id})">carrito</button>
      </div>
    </div>`;
  });

// ************************ FILTRO 2

const f2=document.querySelector("#filtro2");

function filtro2(filtro2){
    return filtro2.filter((p)=> p.precio > 30)
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
        <a href="${boton}" class="btn btn-secondary mb-2"><i class="bi bi-search"></i></a>
        <button class="btn btn-success mb-2" onclick="agregarProducto(${id})">carrito</button>
      </div>
    </div>`;
})
