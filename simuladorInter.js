function Vendedor(numeroUno) {
    const porcentajeVendedor = 15;
    const resultado = numeroUno * (1-(porcentajeVendedor/100));
    return resultado;
  }
  
  function Agente(numeroUno) {
    const porcentajeAgente = 25;
    const resultado = numeroUno * (1-(porcentajeAgente/100));
    return resultado;
  }
  
  function Lider(numeroUno) {
    const porcentajeLider = 35;
    const resultado = numeroUno * (1-(porcentajeLider/100));
    return resultado;
  }

  
  function mostrarResultado(resultado) {
    alert("Precio final: " + resultado);
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
      opcionSeleccionada = mostrarMenu();
    }
  }
  
  calculadora();