function validar () {
alert("Bienvenidos a Luminus \nPara empezar necesitamos que te registres \nPresiona Aceptar para continuar");
let nombres = prompt("Ingresa tus nombres:")
let apellidos = prompt("Ingresa tus apellidos:")
let correo = prompt("Ingresa tu correo:");
alert("Gracias " + nombres + " , en breve te llegará un mensaje de confirmación a tu correo: " + correo + "\nPresiona Aceptar para continuar..");
let codigo = parseInt(prompt("Ingresa tu código de validación:"));
let codigoG = "1234"
for (let i = 1; i < 2; i++) {
    if (codigo == codigoG) {
    alert("!Genial todo salio bien! Gracias por confiar en Luminus, \nPresiona Aceptar para seleccionar un rubro");    
} else {
    alert("Código incorrecto, verifica tu correo..");
    codigo = parseInt(prompt("Ingresa tu código de validación:"));
}
}
while (codigo == codigoG) {
    let rubro = prompt("Rubros: \n1- Drive Luminus \n2- Aplicaciones web \n3- Dominios \nPara SALIR escribe esc")
    switch (rubro) {
        case "1":            
            let opcion1 = prompt("Selecciona que capacidad de memoria deseas comprar: \nA. 2 TB - CON DSCTO 20% \nB. 1 TB - CON DSCTO 10% \nC. 500 GB \nPara SALIR escribe esc");
            if (opcion1 == "esc") {
                alert("Gracias por visitarnos, vuelva pronto");    
                break;
            } else {
                alert("Fantastico "+ nombres +" Te estamos dirigiendo al carrito de compras");
                break;
            }
        case "2":            
            let opcion2 = prompt("Selecciona que tipo de aplicación que deseas: \nA. e-Commerce \nB. e-Health \nC. e-Learning \nPara SALIR escribe esc");
            if (opcion2 == "esc") {
                alert("Gracias por visitarnos, vuelva pronto");    
                break;
            } else {
                alert("Genial "+ nombres+" Te estamos dirigiendo a los estilos disponibles");
                break;
            }            
        case "3":            
            let opcion3 = prompt("Selecciona que tipo de dominio que deseas: \nA- .com \nB- .net \nC- .luminus.com - Gratis \nPara SALIR escribe esc");
            if (opcion3 == "esc") {
                alert("Gracias por visitarnos, vuelva pronto");    
                break;
            } else {
                alert("Excelente "+ nombres+" Te estamos dirigiendo para que busques tu nombre de empresa");
                break;
            }            
        default:
            if (rubro == "esc") {
            alert("Gracias por visitarnos, vuelva pronto");    
            break;
            }
    }
        break;
    }
}

// Llamando a la función
validar();

// Declaración de array
const registroV = [];
let cantidad = 3;

// Cargamos los nombres a través de un array
do {
    let nombres = prompt("Ingresa tus nombres:");
    registroV.push(nombres.toUpperCase());
    console.log(registroV.length);
} while (registroV.length != cantidad)
    // Agregamos dos registros
    const nuevoRegistro = registroV.concat(["MARIA LUISA","JOSE MIGUEL"]);
    // Salida de salto de línea usando Join
    alert("Los usuarios registrados son:\n" + nuevoRegistro.join("\n"));


// Insertamos una clase
// class Usuario {
//     constructor (nombres, apellidos, correo){
//         this.nombres = nombres.toUpperCase();
//         this.apellidos = apellidos.toUpperCase();
//         this.correo = correo.toLowerCase();
//     }
// }

// Insertando un Array
// const registro = [];
// registro.push(new Usuario());
// registro.push(new Usuario());
// registro.push(new Usuario());

// Imprimimos el Array
// alert(registroV);




