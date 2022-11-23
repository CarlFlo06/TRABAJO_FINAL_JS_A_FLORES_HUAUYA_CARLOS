const catalogo = [ 
  
    {
        id: 1,
        img: "past/m1.jpg",
        nombre:"Pastel1",
        precio: 15.00,
        cantidad: 1,
        estado:"disponible",
        boton:"producto.html"
    },
    {
        id: 2,
        img: "past/m2.jpg",
        nombre:"Pastel2",
        precio: 15.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 3,
        img: "past/m3.jpg",
        nombre:"Pastel3",
        precio: 20.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 4,
        img: "past/m4.jpg",
        nombre:"Pastel4",
        precio: 25.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 5,
        img: "past/m5.jpg",
        nombre:"Pastel5",
        precio: 30.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 6,
        img: "past/m7.jpg",
        nombre:"Pastel6",
        precio: 35.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 7,
        img: "past/m8.jpg",
        nombre:"Pastel7",
        precio: 40.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 8,
        img: "past/m9.jpg",
        nombre:"Pastel8",
        precio: 40.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 9,
        img: "past/m10.jpg",
        nombre:"Pastel9",
        precio: 45.00,
        cantidad: 1,
        estado:"disponible"
    },
    {
        id: 10,
        img: "past/m11.jpg",
        nombre:"Pastel10",
        precio: 50.00,
        cantidad: 1,
        estado:"disponible"
    },
    
];

// INICIO DEL CARRITO DE COMPRAS
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

// MOSTRAR EL CATALOGO DE PRODUCTOS
catalogo.forEach((prod) => {
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
        canbody.innerHTML = `
        <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
        `;
    } else {
        console.log("Algo");
    }

      carritoContenedor.textContent = carrito.length;

      if (precioTotal) {
        precioTotal.innerText = carrito.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio,
          0
        );
      }
      guardarStorage();
}

// ELIMMINAR PRODUCTO
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
