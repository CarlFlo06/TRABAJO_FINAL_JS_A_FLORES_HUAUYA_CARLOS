// const productos=[

// ];

// let carrito=[]

// const contenedor = document.querySelector("#contenedor")

// productos.forEach((prod)=>{
//     // console.log(prod.nom)
//     const {id,nombre,precio,desc,img,cantidad}=prod

//     contenedor.innerHTML = `
//     <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${img}" alt="Card image cap">
//         <div class="card-body">
//         <h5 class="card-title">${nombre}</h5>
//         <p class="card-text">Precio: ${precio}</p>
//         <p class="card-text">Descripción: ${desc}</p>
//         <p class="card-text">Cantidad: ${cantidad}</p>
//         <button onclick="agregarProducto(${id}) class="btn btn-primary">Agregar al carrito</button>
    
//         </div>
//     </div>`
// })

// function agregarProducto(id){
//     const item = productos.find((prod)=> prod.id === id)
//     carrito.push(item)
//     // console.log(item)
// }