alert("Ejecuta DevTools y escribe en la consola JS la función: consultarProductos()")

console.log("Bienvenid@ nuevamente!!!")

const cuotasSinInteres = 3

function mostrarCuotasSinIntereses() {
    console.log("TODOS NUESTROS ARTÍCULOS TIENEN 👇")
    for(let i = 0; i < cuotasSinInteres; i++) {
        console.log((i + 1) + ' cuotas sin interés.')
    }
        console.warn("CONSULTA NUESTRAS PROMOCIONES!")
}

function mostrarPrecio(codigo) {
    switch (parseInt(codigo)) {
        case 1:
            console.log("Hambuerguesa simple valor $ 1000")
            break;
        case 2:
            console.log("Hambuerguesa con Jamon y Queso valor $ 1200")
            break;
        case 3:
            console.log("Hambuerguesa con Lechuga y Tomate valor $ 1200")
            break;
        case 4:
            console.log("Hamburguesa Completa valor $ 1500")
            break;
        case 5:
            console.log("Hamburguesa con Cheddar y Panceta valor $ 1600")
            break;
        case 6:
            console.log("Hamburguesa con Provoleta y Pimientos Ahumados valor $ 1600")
            break;            
        case 7:   
            console.log("Hamburguesa Full Tasty valor $ 1800")
            break;
        case 8:
            console.log("Hamburguesa Sabores valor $ 2000")
            break;
        case 9:
            console.log("Hamburguesa LOLA valor $ 2000")
            break;
        case 10:
            console.log("Hambuerguesa LOLA Completa valor $ 2200")
            break;              
        default:
            alert("No entendimos tu selección, vuelve a intentarlo por favor!")
    }
}

function consultarProductos() {
    let respuesta = confirm("¿Ya sabes que hambuerguesa vas a pedir?")
    if (respuesta) {
        let codigo = parseInt(prompt("Ingresa el código correspondiente al producto elegido (del 1 al 10):"))
            if (codigo) {
                mostrarPrecio(codigo)
                mostrarCuotasSinIntereses()
            }
    } else {
        console.warn("Gracias por vistar nuestra página. Ojalá vuelvas pronto!!!")
    }
}
