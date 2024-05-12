const contenedorClientes = document.getElementById("clientes-container");

/** Crea los clientes en la tabla con clientes.js */
function crearFilasEnTabla(clientes) {
  clientes.forEach((cliente) => {
    if (contenedorClientes) {
      // lógica de tu función
      const nuevoCliente = document.createElement("tr");
      nuevoCliente.classList = "tarjeta-producto";
      nuevoCliente.innerHTML = `
          <td data-titulo="nombre">${cliente.nombre}</td>
          <td data-titulo="apellido">${cliente.apellido}</td>
          <td data-titulo="cedula">${cliente.cedula}</td>
          <td data-titulo="deuda">${cliente.deduda}$</td>
          <td data-titulo="cargo">${cliente.tipoDeCliente}</td>
          <td>
            <a href="#">editar</a>
            <a href="#">eliminar</a>
          </td>
      `;
      console.log(nuevoCliente.innerHTML);
      contenedorClientes.appendChild(nuevoCliente);
    } else {
      console.log("El elemento con ID 'clientes-container' no se encontró.");
    }
  });
}
crearFilasEnTabla(listaClientes);
