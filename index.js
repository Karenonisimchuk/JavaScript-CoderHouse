function Vendedor(numeroUno) {
  const porcentajeVendedor = 15;
  const resultado = numeroUno * (1 - (porcentajeVendedor / 100));
  return resultado;
}

function Agente(numeroUno) {
  const porcentajeAgente = 25;
  const resultado = numeroUno * (1 - (porcentajeAgente / 100));
  return resultado;
}

function Lider(numeroUno) {
  const porcentajeLider = 35;
  const resultado = numeroUno * (1 - (porcentajeLider / 100));
  return resultado;
}

function mostrarResultado(resultado) {
  alert("Precio final: " + resultado);
}

function mostrarMenu() {
  let opcion = prompt(
    "Bienvenido, ¿En que podemos ayudar? (ESC para salir)\n1. Precio final del producto\n2. Saldo total\n3. Promociones"
  );
  return opcion;
}

function productoFinal() {
  let opcion = prompt(
    "Seleccione su rol en la empresa (ESC para salir)\n1. Vendedor\n2. Agente\n3. Lider"
  );
  return opcion;
}

function calculadora() {
  let opcionSeleccionada = productoFinal();
  
    if (opcionSeleccionada !== "") {
      opcionSeleccionada = parseInt(opcionSeleccionada);


      if (!isNaN(opcionSeleccionada)) {
        let numeroUno = parseFloat(prompt("Ingrese el pecio del producto"));
        switch (opcionSeleccionada) {
          case 1:
            let resultadoVendedor = Vendedor(numeroUno);
            mostrarResultado(resultadoVendedor);
            break;

          case 2:
            let resultadoAgente = Agente(numeroUno);
            mostrarResultado(resultadoAgente);
            break;

          case 3:
            let resultadoLider = Lider(numeroUno);
            mostrarResultado(resultadoLider);
            break;


          default:
            alert("Opcion Incorrecta");
            break;
        }
      } else {
        alert("Ingresó una letra");
      }
    } else {
      alert("Seleccione la opción");
    }

}

// calculadora();

class Prenda {
  constructor(codigo, precioPrenda, cantidad) {
    this.codigo = codigo.toUpperCase();
    this.precioPrenda = precioPrenda;
    this.cantidad = cantidad;
  }
  calcularCosto = () => this.cantidad * this.precioPrenda;
}

function agregarPrendas() {
  let numeroPrendas = parseInt(
    prompt("Cuantas prendas necesita registrar")
  );
  let prendas = [];
  for (let index = 0; index < numeroPrendas; index++) {
    let codigo = prompt("Ingrese el codigo de la prenda");
    let precioPrenda = prompt("Ingrese el precio de la prenda");
    let cantidad = prompt("Ingrese la cantidad");
    let prendasARegistrar = new Prenda(
      codigo,
      precioPrenda,
      cantidad
    );
    prendas.push(prendasARegistrar);
  }
  return prendas;
}

function mostrarPrendas(prendas) {
  for (const prenda of prendas) {
    console.log(prenda);
    console.log(prenda.codigo);
  }
}

function calcularCosto(prendas) {
  let sumatoriaCosto = 0;
  for (const prenda of prendas) {
    sumatoriaCosto += prenda.calcularCosto();
  }
  return sumatoriaCosto;
}

// prenda();

const productos = [
  { nombre: "Remera", precio: 3999 },
  { nombre: "Pantalon", precio: 5599 },
  { nombre: "Buzo", precio: 6599 },
  { nombre: "Campera", precio: 8799 },
  { nombre: "Ropa interior", precio: 999 }
]

const ordenarPrecios = () => {

  productos.sort((a, b) => a.precio - b.precio);
  return productos;
}

// producto();

function main() {
 
  let result = mostrarMenu();

  while (result !== "ESC") {
    if (result == "1") {
      calculadora();
    } else if (result == "2") {
      let prendas = agregarPrendas();
      mostrarPrendas(prendas);
      let saldoFinal = calcularCosto(prendas);
      alert("El saldo total es: " + saldoFinal);
    } else if (result == "3") {
      const precios = ordenarPrecios();
      alert(JSON.stringify(precios));
    } else {
      alert("Opcion inválida");
    }

    result = mostrarMenu();
  }

  alert("Fin");
}
// orden del menu();

//main();

// clase DOM();
console.log(document); 
console.log(document.head);
console.log(document.body);

const listaProductos = [
  {
    id: 1,
    nombre: "Remera",
    codigo: "5453",
    precioprenda: "3999",
    disponibles: 22,
  },
  {
    id: 2,
    nombre: "Pantalon",
    codigo: "1133",
    precioprenda: "5599",
    disponibles: 42,
  },
  {
    id: 3,
    nombre: "Buzo",
    codigo: "3415",
    precioprenda: "6599",
    disponibles: 12,
  },
  {
    id: 4,
    nombre: "Campera",
    codigo: "4213",
    precioprenda: "8799",
    disponibles: 23,
  },
  {
    id: 5,
    nombre: "Ropa interior",
    codigo: "0012",
    precioprenda: "999",
    disponibles: 92,
  },

];

const contenedorProductos = document.getElementById("contenedor-productos");

for (const producto of listaProductos) {
  let column = document.createElement("div");
  column.className = "col-md-4 mt-3 ";
  column.id = `columna-${producto.id}`;
  column.innerHTML = `
      <div class="card">
          <div class="card-body">
          <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
          <p class="card-text">Codigo: <b>${producto.codigo}</b></p>
          <p class="card-text">Precio: <b>${producto.precioprenda}</b></p>
          <p class="card-text">Disponibles: <b>${producto.disponibles}</b></p>
          </div>
      </div>`;

  contenedorProductos.append(column);
}

// Eventos();
let producto = [];

let formulario;
let inputNombre;
let inputCodigo;
let inputPrecioPrenda;
let inputCantidad;
let contenedorProducto;

class Producto {
  constructor(id, nombre, codigo, precioPrenda, cantidad) {
    this.nombre = nombre.toUpperCase();
    this.codigo = codigo;
    this.precioPrenda = precioPrenda;
    this.cantidad = cantidad;
  }
  calcularPrecioCompra = () => this.precioPrenda * this.cantidad;
}
 

  function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputNombreProducto = document.getElementById("inputNombreProducto");
  inputCodigo = document.getElementById("inputCodigo");
  inputPrecioPrenda = document.getElementById("inputPrecioPrenda");
  inputCantidad = document.getElementById("inputCantidad");
  contenedorProductos = document.getElementById("contenedorProductos");
}

function inicializarEventos() {
  formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
  event.preventDefault();
  let nombre = inputNombre.value;
  let codigo = parseFloat(inputCodigo.value);
  let precioPrenda = parseFloat(inputPrecioPrenda.value);
  let cantidad = parseInt(inputCantidad.value);

  const idExiste = productos.some((producto) => producto.id === idProducto);
  if (!idExiste) {
    let producto = new Producto(
      nombre,
      codigo,
      precioPrenda,
      cantidad
    );

    productos.push(producto);
    formulario.reset();

    pintarProductos();
  } else {
    alert("El id ya existe");
  }
}

function eliminarProducto(idProducto) {
  let columnaBorrar = document.getElementById(`columna-${idProducto}`);
  let indiceBorrar = productos.findIndex(
    (producto) => Number(producto.id) === Number(idProducto)
  );

  productos.splice(indiceBorrar, 1);
  columnaBorrar.remove();
}

function pintarProductos() {
  contenedorProductos.innerHTML = "";
  productos.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">Nombre:
                    <b>${producto.nombre}</b>
                </p>
                <p class="card-text">Precio compra:
                    <b>${producto.codigo}</b>
                </p>
                <p class="card-text">Precio venta:
                    <b>${producto.precioPrenda}</b>
                </p>
                <p class="card-text">Cantidad:
                    <b>${producto.cantidad}</b>
                </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger" id="botonEliminar-${producto.id}" >Eliminar</button>
                </div>
            </div>`;

    contenedorProductos.append(column);

    let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
    botonEliminar.onclick = () => eliminarProducto(producto.id);
  });
}

function main() {
  inicializarElementos();
  inicializarEventos();
}

main();
