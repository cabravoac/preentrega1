consultaClima()

function consultaClima(){

    const datosClima = [
        {
            ciudad: "CDMX",
            abreviatura:"CDMX",
            temperatura: 20,
            velocidadViento: 150,
        },
        {
            ciudad: "Bruselas",
            abreviatura:"BRU",
            temperatura: 25,
            velocidadViento: 120,
        },
        {
            ciudad: "Tokio",
            abreviatura:"TK",
            temperatura: 28,
            velocidadViento: 100,
        },
        {
            ciudad: "Vancouver",
            abreviatura:"VAN",
            temperatura: 18,
            velocidadViento: 80,
        },
        {
            ciudad: "Chicago",
            abreviatura:"CHI",
            temperatura: 30,
            velocidadViento: 200,
        }
    ]

    let continuar = confirm("¿Te interesa saber el estado del clima en donde estás?")

    while(continuar){        
        let nombreUsuario = prompt("Ingresa tu nombre").toUpperCase()
        let ciudadIngresada = prompt("¿En qué ciudad vives? P.ej; CDMX,BRU,TK,VAN,CHI").toUpperCase()
        console.log(ciudadIngresada)
        let ciudadEncontrada = datosClima.find(dato => dato.abreviatura == ciudadIngresada)
        alert("Hola!! " + nombreUsuario + " la temperatura en " + ciudadEncontrada.ciudad + " es de " + ciudadEncontrada.temperatura + " grados con vientos de " + ciudadEncontrada.velocidadViento + "km/h")
        
        continuar = confirm("¿Te interesa saber el estado del clima en donde estás?")

    } 
    alert("Gracias por visitarnos, vuelva pronto")
} 
