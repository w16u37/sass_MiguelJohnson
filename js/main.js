
alert("Bienvenidos a Luminus \nPara empezar necesitamos que te registres \nPresiona Aceptar para continuar");
let nombres = prompt("Ingresa tus nombres:")
let apellidos = prompt("Ingresa tus apellidos:")
let correo = prompt("Ingresa tu correo:");
alert("Se te enviará un mensaje de confirmación a tu correo \nPresiona Aceptar para continuar");
let codigo = parseInt(prompt("Ingresa tu código de validación:"));
let codigoG = "1234"
if (codigo == codigoG) {
    alert("Gracias por confiar en Luminus \nPara proceder a comprar selecciona un rubro");        
    let rubro = prompt("Rubros: \n1- Drive Luminus \n2- Aplicaciones web \n3- Dominios \nPara SALIR escribe esc");
} else {
    alert("Código incorrecto, verifica tu correo")
}
while (rubro != "salir") {
    switch (rubro) {
        case "1":
            let opcion1 = ("Selecciona que capacidad de memoria que deseas: \nA. 2 TB - CON DSCTO 20% \nB. 1 TB - CON DSCTO 10% \nC. 500 GB \nPara SALIR escribe esc");
            alert("Perfecto "+ nombres+" Te estamos dirigiendo al carrito de compras");
            break;
        case "2":
            let opcion2 = ("Selecciona que tipo de aplicación que deseas: \nA. e-Commerce \nB. e-Health \nC. e-Learning \nPara SALIR escribe esc");
            alert("Genial "+ nombres+" Te estamos dirigiendo a los estilos disponibles");
            break;
        case "3":
            let opcion3 = ("Selecciona que tipo de dominio que deseas: \nA- .com \nB- .net \nC- .luminus.com - Gratis \nPara SALIR escribe esc");
            alert("Excelente "+ nombres+" Te estamos dirigiendo para que busques tu nombre de empresa");
            break;    
        default:
            alert("Aún no te vayas, tenemos descuentos que te sorprenderan");
            break;
    }
    rubro = prompt("Rubros: \n1- Drive Luminus \n2- Aplicaciones web \n3- Dominios \nPara SALIR escribe esc");
    if ((rubro == "esc") || (opcion1 == "esc") || (opcion2 == esc) || (opcion3 == esc))  {
        alert("Gracias por visitarnos, vuelva pronto");
    }
    }



