const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos) {
  productos.forEach(producto => {
    

    if (contenedorTarjetas) {
      // lógica de tu función
     const nuevoProducto = document.createElement("div");
     nuevoProducto.classList = "tarjeta-producto";
     nuevoProducto.innerHTML = `
    <img src="/assets/image/productos/${producto.id}.jpg" alt="Producto 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`;
     contenedorTarjetas.appendChild(nuevoProducto);
     nuevoProducto
       .getElementsByTagName("button")[0]
       .addEventListener("click", () => agregarAlCarrito(producto));
    } else {
      console.log("El elemento con ID 'productos-container' no se encontró.");
    }

  });
  
}
crearTarjetasProductosInicio(productosDesayunos);
