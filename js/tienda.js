const catalogo = [ 
  
    {id: 1,img: "past/m1.jpg",nombre:"Cake con chispas",precio: 25.00,cantidad: 1,estado:"disponible"},

    {id: 2,img: "past/m2.jpg",nombre:"cake de chocolate",precio: 25.00,cantidad: 1,estado:"disponible"},

    {id: 3,img: "past/m3.jpg",nombre:"Cake decorado",precio: 20.00,cantidad: 1,estado:"disponible"},

    {id: 4,img: "past/m4.jpg",nombre:"Triangulo cake",precio: 25.00,cantidad: 1,estado:"disponible"},

    {id: 5,img: "past/m5.jpg",nombre:"Half cake",precio: 30.00,cantidad: 1,estado:"disponible"},

    {id: 6,img: "past/m6.jpg",nombre:"Half cake chocolate",precio: 35.00,cantidad: 1,estado:"disponible"},
    
    {id: 7,img: "past/m7.jpg",nombre:"Cake de vainilla",precio: 43.00,cantidad: 1,estado:"disponible"},

    {id: 8,img: "past/m8.jpg",nombre:"Cake de aniversario",precio: 40.00,cantidad: 1,estado:"disponible"},

    {id: 9,img: "past/m9.jpg",nombre:"Turron cake",precio: 48.00,cantidad: 1,estado:"disponible"},
    
    {id: 10,img: "past/m10.jpg",nombre:"Cake con fresas",precio: 50.00,cantidad: 1,estado:"disponible"},
    
    {id: 11,img: "past/m11.jpg",nombre:"Cake con donas",precio: 25.00,cantidad: 1,estado:"disponible"},

    {id: 12,img: "past/m12.jpg",nombre:"Cake decorado",precio: 30.00,cantidad: 1,estado:"disponible"},

    {id: 13,img: "past/m13.jpg",nombre:"Cake con diseño",precio: 20.00,cantidad: 1,estado:"disponible"},

    {id: 14,img: "past/m14.jpg",nombre:"Cake con glaseado",precio: 25.00,cantidad: 1,estado:"disponible"},

    {id: 15,img: "past/m15.jpg",nombre:"Cake para bebe ",precio: 50.00,cantidad: 1,estado:"disponible"},

    {id: 16,img: "past/m16.jpg",nombre:"Cake de feliz día",precio: 35.00,cantidad: 1,estado:"disponible"},
    
    {id: 17,img: "past/m17.jpg",nombre:"Cake con diseño",precio: 40.00,cantidad: 1,estado:"disponible"},

    {id: 18,img: "past/m18.jpg",nombre:"Cake con chocolate",precio: 30.00,cantidad: 1,estado:"disponible"},

    {id: 19,img: "past/m19.jpg",nombre:"Half cake chocolate",precio: 35.00,cantidad: 1,estado:"disponible"},
    
    {id: 20,img: "past/m20.jpg",nombre:"Cake adornado",precio: 35.00,cantidad: 1,estado:"disponible"},
];

// INICIO DEL CARRITO DE COMPRAS
let carrito = [];

const contenedor = document.querySelector("#contenedor");

const carritoContenedor = document.querySelector("#carritoContenedor");
const carritoContenedor1 = document.querySelector("#carritoContenedor1");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
// const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const totalProceso1 = document.querySelector("#totalProceso1");
const formulario = document.querySelector('#procesar-pago')

const igv = document.querySelector("#igv");
const total = document.querySelector("#total");

// MOSTRAR EL CATALOGO DE PRODUCTOS
const content1=catalogo.filter((id) => id.id <= 10);
console.log(content1)
// const c2=document.querySelector("#contenedor");
content1.forEach((prod) => {
    const { id, img, nombre, precio, cantidad, estado,boton} = prod;
    if (contenedor) {
      contenedor.innerHTML += `
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

// HACE QUE SE MANTENGAN LOS DATOS EN LA PÁGINA
document.addEventListener('DOMContentLoaded',() => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
  procesarPedido();
});

// MENSAJE DE CARRITO VACIO
if(procesarCompra){
  procesarCompra.addEventListener('click', () => {
    if(carrito.length === 0){
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "carrito.html";
    }
    
  })
}

// VACIAR CARRITO
if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
    procesarPedido();
  });
}

// AGREGAR PRODUCTO
const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = catalogo.find((prod) => prod.id === parseInt(id))
    item.cantidad=1
    carrito.push(item)
  }
  mostrarCarrito()
  procesarPedido()
};

// MOSTRAR CARRITO
const mostrarCarrito = () => {
  const canbody = document.querySelector(".offcanvas .offcanvas-body");

  if (canbody) {
    canbody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, img, cantidad } = prod;
      console.log(canbody);
      canbody.innerHTML += `
      <div class="cancontenedor mb-2">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger" onclick="eliminarProducto(${id})">Eliminar</button>
        </div>
      </div>
      `;
    });
  }

// RECORRE CARRITO Y VERIFICA 
    if (carrito.length === 0) {
        console.log("Nada");
        canbody.innerHTML += `
        <h3 class="text-center text-primary parrafo">¡Aun no agregaste nada!</h3>
        <div class="mb-5">
          <img class="w-100" src="img/carvacio.png" />
        </div>
        `;
    } else {
        console.log("Algo");
    }

      carritoContenedor.textContent = carrito.length;
      carritoContenedor1.textContent = carrito.length;

      if (precioTotal) {
        precioTotal.innerText = carrito.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio,
          0
        );
      }
      guardarStorage();
}

// ELIMINAR PRODUCTO DE CARRITO
function eliminarProducto(id){
  const reposId = id;
  carrito = carrito.filter((repos) => repos.id !== reposId);
  mostrarCarrito();
  procesarPedido();
}

// GUARDAR PRODUCTO
function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
//  const vale = document.getElementById("vale").value;
// PROCESAR PEDIDO
function procesarPedido() {
  const listaCompra = document.querySelector("#items");
  if (listaCompra) {
    listaCompra.innerHTML="";
    carrito.forEach((prod) => {  
      const { id, nombre, precio, img, cantidad } = prod;
        listaCompra.innerHTML += `
              <td>
                <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
              <td>${precio}</td>
              <td>
                <button id="aumentar" class="btn btn-info btn-sm" onclick="agregarProducto(${id})" value="aumentar">
                        +
                </button>
                ${cantidad}
                <button class="btn btn-danger btn-sm" onclick="restar(${id})">
                        -
                </button>
              </td>
              <td>${precio * cantidad}</td>
              <td>
                <button class="btn btn-danger" onclick="eliminarProducto(${id})"><i class="bi bi-trash-fill"></i></button>
              </td>
              `;
            
      });
  }
  
  const listaCompra2 = document.querySelector("#items2");
  if(listaCompra2){
    listaCompra2.innerHTML="";
    carrito.forEach((prod) => {  
      const { nombre, precio } = prod;
        listaCompra2.innerHTML += `
          <tr>
            <th>${nombre}</th>
            <td><h6>${precio}</h6></td>
          </tr>
        `;
    })
  }
  const tablacarrito = document.querySelector("#carrito");
  if (carrito.length === 0) {
    // tablacarrito.innerHTML="";
    console.log("Nada");
    tablacarrito.innerHTML = `
    <div class="container row row-cols-1 row-cols-md-2 mb-5 align-items-center justify-content-center"> 
      <div class="mb-5">
        <img class="w-100" src="img/carvacio.png" />
      </div>
      <div class="">
        <h2 class="text-center text-primary parrafo">¡No agregaste nada en el carrito!</h2>
      </div>
    </div>
    <a href="tienda.html" class="boton1">Regresar a la tienda</a>
    `;
  } else {
      console.log("Algo");
  }
  const oculPago = document.querySelector("#oculform");
  if (carrito.length === 0) { 
    // oculPago.innerHTML="";
    console.log("Nada");
    oculPago.innerHTML = `
    <div> 
      <div class="container row row-cols-1 row-cols-md-2 mb-5 align-items-center justify-content-center">
        <img />
      </div>
      <div class="">
        <h2 class="text-center text-primary parrafo">¡No agregaste nada en el carrito!</h2>
      </div>
    </div>
    `;
  } else {
    console.log("Algo");
  }
    carritoContenedor.textContent = carrito.length;
    carritoContenedor1.textContent = carrito.length;
      // SUBTOTAL
      let tp=0;
      tp= carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio,0);
      if (totalProceso) {
        totalProceso.innerText=Number(tp.toFixed(2));
      }
      // IGV
      let ig=0;
      ig = carrito.reduce((acc, prod)=>
          acc + (prod.cantidad * prod.precio*0.19),0)
      if(igv){
        igv.innerText=Number(ig.toFixed(2));
      }
      // TOTAL
      let to=0;
      to = carrito.reduce((acc, prod)=>
          acc + (prod.cantidad * prod.precio*0.19)+(prod.cantidad*prod.precio),0)
      if(total){
        total.innerText=Number(to.toFixed(2));
      }

      guardarStorage();
  
}

// BOTON RESTAR
function restar(id){
  const existe = carrito.some(prod => prod.id === id)
  if(existe){
    const prod = carrito.map(prod => {
        if(prod.id === id){
          if(prod.cantidad > 1){
            prod.cantidad--
          } 
        }
    })
  } 
  mostrarCarrito()
  procesarPedido()
  
}