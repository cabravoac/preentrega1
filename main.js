function consultaClima() {
    const ciudades = [
        {
            nombre: "CDMX",
            abreviatura: "CDMX",
        },
        {
            nombre: "Bruselas",
            abreviatura: "BRU",
        },
        {
            nombre: "Tokio",
            abreviatura: "TK",
        },
        {
            nombre: "Vancouver",
            abreviatura: "VAN",
        },
        {
            nombre: "Chicago",
            abreviatura: "CHI",
        }
    ];

    const datosClima = {
        CDMX: {
            temperatura: 20,
            velocidadViento: 150,
        },
        BRU: {
            temperatura: 25,
            velocidadViento: 120,
        },
        TK: {
            temperatura: 28,
            velocidadViento: 100,
        },
        VAN: {
            temperatura: 18,
            velocidadViento: 80,
        },
        CHI: {
            temperatura: 30,
            velocidadViento: 200,
        }
    };

    let continuar = confirm("¿Te interesa saber el estado del clima en donde estás?");

    while (continuar) {
        let nombreUsuario = prompt("Ingresa tu nombre").toUpperCase()
        let abreviaturaIngresada = prompt("¿En qué ciudad vives? P.ej; CDMX, BRU, TK, VAN, CHI").toUpperCase()

        if (abreviaturaIngresada in datosClima) {
            const ciudad = ciudades.find(ciudad => ciudad.abreviatura === abreviaturaIngresada);
            const clima = datosClima[abreviaturaIngresada];

            alert(`Hola, ${nombreUsuario}. La temperatura en ${ciudad.nombre} es de ${clima.temperatura} grados con vientos de ${clima.velocidadViento} km/h`);
        } else {
            alert("La abreviatura de la ciudad ingresada no es válida. Por favor, ingresa una de las siguientes opciones: CDMX, BRU, TK, VAN, CHI.");
        }

        continuar = confirm("¿Te interesa saber el estado del clima en donde estás?")
    }

    alert("Gracias por visitarnos, vuelva pronto")
}

consultaClima();
