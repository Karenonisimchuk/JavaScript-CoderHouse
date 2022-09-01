let seleccionUsuario = parseInt(
    prompt(
        "Que esta buscando: \n 1.Remera \n 2.Pantalon \n 3.Pollera \n 4.campera \n 5.buzo "
        
    )
);

switch (seleccionUsuario){
    case 1:
        alert("Selecciono una remera")
    break
    case 2:
        alert("Selecciono un pantalon")
    break
    case 3:
        alert("Selecciono una pollera")
    break
    case 4:
        alert("Selecciono una campera")
    break
    case 5:
        alert("Selecciono un buzo")
    break
    default:
        alert("Opcion desconocida")
        break
}