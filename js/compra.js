
function importarScript(nombre) {
  var s = document.createElement("script");
  s.src = nombre;
  document.querySelector("body").appendChild(s);
}
importarScript("js/tienda.js")

// document.addEventListener('DOMContentLoaded',() => {
//   carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//   procesarPedido();
// });

// // PROCESAR PEDIDO
// function procesarPedido() {
//   const listaCompra = document.querySelector("#lista-compra tbody");
//   // const tr = document.createElement("tr");
//   if (listaCompra) {
//       listaCompra.innerHTML="";

//     carrito.forEach((prod) => {  
//       const { id, nombre, precio, img, cantidad } = prod;
      
//         listaCompra.innerHTML += `
//               <td>
//                 <button class="btn btn-danger" onclick="eliminarProducto(${id})">Eliminar</button>
//               </td>
//               <td>
//                 <img class="img-fluid img-carrito" src="${img}"/>
//               </td>
//               <td>${nombre}</td>
//               <td>${precio}</td>
//               <td>${cantidad}</td>
//               <td>${precio * cantidad}</td>
//               `;
//         // listaCompra.appendChild(listaCompra);
//       });
//     }

//     if (carrito.length === 0) {
//       console.log("Nada");
//       listaCompra.innerHTML = `
//       <p class="text-center text-primary parrafo">¡Aun no agregaste en el carrito!</p>
//       `;
//     } else {
//       console.log("Algo");
//     }
    
//     carritoContenedor.textContent = carrito.length;
    
//       if (totalProceso) {
//           totalProceso.innerText = carrito.reduce(
//             (acc, prod) => acc + prod.cantidad * prod.precio,
//             0
//           );
//       }
//       guardarStorage();
      
//     totalProceso.innerText = carrito.reduce(
//       (acc, prod) => acc + prod.cantidad * prod.precio,
//       0
//     );
// }
// function eliminarProducto1(id) {
//   const juegoId = id;
//   carrito = carrito.filter((juego) => juego.id !== juegoId);
//   procesarPedido();
// }