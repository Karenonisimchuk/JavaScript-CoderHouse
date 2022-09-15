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

main();