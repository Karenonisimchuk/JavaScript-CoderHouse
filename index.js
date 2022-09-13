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
  
  function main() {
    let prendas = agregarPrendas();
    mostrarPrendas(prendas);
    let saldoFinal = calcularCosto(prendas);
    alert("El salto total es: " + saldoFinal);
  }
  
  main();