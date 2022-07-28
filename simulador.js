let motoG60S = 60999;
let motoG52 = 57999;
let galaxyAO3 = 27999;
let galaxyA13 = 54999;
let verCelulares = false;
let verCuotas = false;
let verPrecios = false;
let verPrecioFinalCuotas = false;

function mostrarCelulares() {
    if (verCelulares) {
        alert("Éstos son los modelos que tenemos disponibles\n1 - Celular Motorola G60S 128GB Azul \n2 - Celular Motorola G52 128GB Negro \n3 - Samsung Galaxy AO3 Core 32 GB\n4 - Celular Samsung Galaxy A13 128GB Negro");
    }
}

function mostrarCuotas() {
    if (verCuotas) {
        alert("¿En cuantas cuotas lo/s queres comprar?\n1 - Sin Interés. \n2 - Con $4.394 de Interés. \n3 - Sin Interés. \n6 - Con $13.661 de Interés.  \n12 - Con $29.580 de Interés.  \n18 - Con $46.686 de Interés.");

    }
}

function mostrarPrecios() {
    if (verPrecios) {
        alert("Bienvenido/a a la Tienda Online de FRÁVEGA, Gracias por su compra! \n1 - motoG60S a $" + motoG60S + "\n2 - El moto G52 a $ " + motoG52 + "\n3 - galaxyAO3 a $ " + galaxyAO3 + "\n4 - galaxyA13 a $" + galaxyA13);
    }
}

function mostrarPrecioFinalCuotas() {
    while (verPrecioFinalCuotas) {
        let modelo = parseInt(prompt("¿Qué modelo querés cotizar?\n1 - Celular Motorola G60S 128GB Azul \n2 - Celular Motorola G52 128GB Negro \n3 - Samsung Galaxy AO3 Core 32 GB\n4 - Celular Samsung Galaxy A13 128GB Negro"));
        let cuotas = parseInt(prompt("¿En cuántas cuotas? 1 - 2 - 3 - 6 - 12 -18"));
            switch (modelo) {
                case 1:
                    modelo = motoG60S;
                    break;
                case 2:
                    modelo = motoG52;
                    break;
                case 3:
                    modelo = galaxyAO3;
                    break;
                case 4:
                    modelo = galaxyA13;
                    break;
                default:
                    alert("El valor ingresado es inválido");
                    break;
            }


            switch (cuotas) {
                case 1:
                    let celEnCuotas1 = modelo;
                    alert("El precio en " + cuotas + " cuotas es de $" + celEnCuotas1);
                    break;
                case 2:
                    let celEnCuotas2 = (modelo + 4394) / cuotas;
                    alert("El precio en " + cuotas + " cuotas es de $" + celEnCuotas2);
                    break;
                case 3:
                    let celEnCuotas3 = modelo / cuotas;
                    alert("El precio en " + cuotas + " cuotas es de $" + celEnCuotas3);
                    break;
                case 6:
                    let celEnCuotas6 = (modelo + 13661) / cuotas;
                    alert("El precio en " + cuotas + " cuotas es de $" + celEnCuotas6);
                    break;
                case 12:
                    let celEnCuotas12 = (modelo + 29580) / cuotas;
                    alert("El precio en " + cuotas + " cuotas es de $" + celEnCuotas12);
                    break;
                case 18:
                    let celEnCuotas18 = (modelo + 46686) / cuotas;
                    alert("El precio en " + cuotas + " cuotas es de $" + celEnCuotas18);
                    break;
                default:
                    alert("El valor ingresado es inválido")
                    break;
            }
            opcion = prompt("Bienvenido/a a la Tienda Online de FRÁVEGA ¿En qué te podemos ayudar? \n1 - Quiero ver los productos disponibles\n2-  Quiero ver los precios  \n3- Quiero ver las cuotas\n4 - Ver los precios finales \nX - Salir");
        }
    }
    


let opcion = prompt("Bienvenido/a a la Tienda Online de FRÁVEGA ¿En qué te podemos ayudar? \n1 - Quiero ver los productos disponibles\n2-  Quiero ver los precios  \n3- Quiero ver las cuotas\n4 - Ver los precios finales \nX - Salir");
while (opcion != "x" && opcion != "X") {
    switch (opcion) {
        case "1":
            verCelulares = true;
            mostrarCelulares()
            break;
        case "2":
            verPrecios = true;
            mostrarPrecios();
            break;
        case "3":
            verCuotas = true;
            mostrarCuotas();
            break;
        case "4":
            verPrecioFinalCuotas = true;
            mostrarPrecioFinalCuotas();
            break;
        default:
            alert("ingresaste una opción invalida");
            break;
    }
    opcion = prompt("Bienvenido/a a la Tienda Online de FRÁVEGA ¿En qué te podemos ayudar? \n1 - Quiero ver los productos disponibles\n2-  Quiero ver los precios  \n3- Quiero ver las cuotas\n4 - Ver los precios finales \nX - Salir");
}


