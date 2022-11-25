const catalogo = [ 
  
    {id: 1,img: "past/m1.jpg",nombre:"Pastel1",precio: 15,cantidad: 1,estado:"disponible"},

    {id: 2,img: "past/m2.jpg",nombre:"Pastel2",precio: 15,cantidad: 1,estado:"disponible"},

    {id: 3,img: "past/m3.jpg",nombre:"Pastel3",precio: 20.00,cantidad: 1,estado:"disponible"},

    {id: 4,img: "past/m4.jpg",nombre:"Pastel4",precio: 25.00,cantidad: 1,estado:"disponible"},

    {id: 5,img: "past/m5.jpg",nombre:"Pastel5",precio: 30.00,cantidad: 1,estado:"disponible"},

    {id: 6,img: "past/m7.jpg",nombre:"Pastel6",precio: 35.00,cantidad: 1,estado:"disponible"},
    
    {id: 7,img: "past/m8.jpg",nombre:"Pastel7",precio: 40.00,cantidad: 1,estado:"disponible"},

    {id: 8,img: "past/m9.jpg",nombre:"Pastel8",precio: 40.00,cantidad: 1,estado:"disponible"},

    {id: 9,img: "past/m10.jpg",nombre:"Pastel9",precio: 45.00,cantidad: 1,estado:"disponible"},
    
    {id: 10,img: "past/m11.jpg",nombre:"Pastel10",precio: 50.00,cantidad: 1,estado:"disponible"},
    
    {id: 11,img: "past/m1.jpg",nombre:"Pastel11",precio: 15,cantidad: 1,estado:"disponible"},

    {id: 12,img: "past/m2.jpg",nombre:"Pastel12",precio: 15,cantidad: 1,estado:"disponible"},

    {id: 13,img: "past/m3.jpg",nombre:"Pastel13",precio: 20.00,cantidad: 1,estado:"disponible"},

    {id: 14,img: "past/m4.jpg",nombre:"Pastel14",precio: 25.00,cantidad: 1,estado:"disponible"},

    {id: 15,img: "past/m5.jpg",nombre:"Pastel15",precio: 30.00,cantidad: 1,estado:"disponible"},

    {id: 16,img: "past/m7.jpg",nombre:"Pastel16",precio: 35.00,cantidad: 1,estado:"disponible"},
    
    {id: 17,img: "past/m8.jpg",nombre:"Pastel17",precio: 40.00,cantidad: 1,estado:"disponible"},

    {id: 18,img: "past/m9.jpg",nombre:"Pastel18",precio: 40.00,cantidad: 1,estado:"disponible"},

    {id: 19,img: "past/m10.jpg",nombre:"Pastel19",precio: 45.00,cantidad: 1,estado:"disponible"},
    
    {id: 20,img: "past/m11.jpg",nombre:"Pastel20",precio: 50.00,cantidad: 1,estado:"disponible"},
];
// function importarScript(nombre) {
//   var s = document.createElement("script");
//   s.src = nombre;
//   document.querySelector("body").appendChild(s);
// }
// importarScript("js/agnuevcarrito.js")

// INICIO DEL CARRITO DE COMPRAS
let carrito = [];

const contenedor = document.querySelector("#contenedor");

const carritoContenedor = document.querySelector("#carritoContenedor");
const carritoContenedor1 = document.querySelector("#carritoContenedor1");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

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
          <a href="${boton}" class="btn btn-secondary mb-2">Comprar</a>
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
  // nuevPedido();
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
        <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
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

// ELIMMINAR PRODUCTO DE CARRITO
function eliminarProducto(id){
  const reposId = id;
  carrito = carrito.filter((repos) => repos.id !== reposId);
  mostrarCarrito();
  procesarPedido();
  // console.log(carrito);
}

// GUARDAR PRODUCTO
function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// PROCESAR PEDIDO
function procesarPedido() {
  const listaCompra = document.querySelector("#lista-compra tbody");
  const tablacarrito = document.querySelector("#carrito");
  //botones
  
  // const tr = document.createElement("tr");
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
        // listaCompra.appendChild(listaCompra);
      });
    }
    
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
    
    carritoContenedor.textContent = carrito.length;
    carritoContenedor1.textContent = carrito.length;
    
      if (totalProceso) {
          totalProceso.innerText = carrito.reduce(
            (acc, prod) => acc + prod.cantidad * prod.precio,
            0
          );
      }
      guardarStorage();
  
}

// BOOTON RESTAR
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
  // else {
  //   const item = catalogo.find((prod) => prod.id === parseInt(id))
  //   item.cantidad=1
  //   carrito.push(item)
  // }
  
  mostrarCarrito()
  procesarPedido()
  
}