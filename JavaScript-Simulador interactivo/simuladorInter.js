function Vendedor(numeroUno, porcentajeVendedor) {
    let resultado = numeroUno - (1*15)/(100);
    return resultado;
  }
  
  function Agente(numeroUno, porcentajeAgene) {
    let resultado = numeroUno - porcentajeAgene;
    return resultado;
  }
  
  function Lider(numeroUno, porcentajeLider) {
    let resultado = numeroUno * porcentajeLider;
    return resultado;
  }

  
  function mostrarResultado(resultado) {
    alert("El descuento es: " + resultado);
  }
  
  function mostrarMenu() {
    let opcion = prompt(
      "Bienvenido, seleccione su rol en la empresa (ESC para salir)\n1. Vendedor\n2. Agente\n3. Lider"
    );
    return opcion;
  }
  
  function calculadora() {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada !== "ESC") {
      if (opcionSeleccionada !== "") {
        opcionSeleccionada = parseInt(opcionSeleccionada);
  
        
        if (!isNaN(opcionSeleccionada)) {
          let numeroUno = parseFloat(prompt("Ingrese el pecio del producto"));
          //let porcentajeVendedor = parseFloat(prompt("Ingrese el segundo numero"));
          //let porcentajeAgene = parseFloat(prompt("Ingrese el segundo numero"));
          //let porcentajeLider = parseFloat(prompt("Ingrese el segundo numero"));
          switch (opcionSeleccionada) {
            case 1:
              let resultadoSuma = Vendedor(numeroUno, porcentajeVendedor);
              mostrarResultado(resultadoSuma);
              break;
  
            case 2:
              let resultadoResta = Agente(numeroUno, numeroDos);
              mostrarResultado(resultadoResta);
              break;
  
            case 3:
              let resultadoMultiplicacion = Lider(numeroUno, numeroDos);
              mostrarResultado(resultadoMultiplicacion);
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
      opcionSeleccionada = mostrarMenu();
    }
  }
  
  calculadora();