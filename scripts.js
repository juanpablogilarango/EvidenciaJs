// Arreglo para almacenar los préstamos
let prestamos = [];

// Función para registrar un préstamo
function registrarPrestamo(usuario, libro, fechaDevolucion) {
    let nuevoPrestamo = {
        usuario: usuario,
        libro: libro,
        fechaDevolucion: new Date(fechaDevolucion),
        enRetraso: false,

        multa: 0
    };
    prestamos.push(nuevoPrestamo);
    console.log("Préstamo registrado: " + usuario + " ha tomado \"" + libro + "\" hasta el " + fechaDevolucion + ".");
}

// Función para verificar el retraso
function verificarRetraso() {
    let hoy = new Date();
    prestamos.forEach(function (prestamo) {
        if (hoy > prestamo.fechaDevolucion) {
            let diasRetraso = Math.floor((hoy - prestamo.fechaDevolucion) / (1000 * 60 * 60 * 24));
            prestamo.enRetraso = true;
            prestamo.multa = diasRetraso * 500;
            console.log("El préstamo de \"" + prestamo.libro + "\" está en retraso por " + diasRetraso + " días. Multa acumulada: $" + prestamo.multa + ".");
        }
    });
}

// Función para mostrar el estado de los préstamos
function mostrarPrestamos() {
    prestamos.forEach(function (prestamo) {
        let estado = prestamo.enRetraso ? "en retraso" : "a tiempo";
        console.log("Usuario: " + prestamo.usuario + ", Libro: \"" + prestamo.libro + "\", Estado: " + estado + ", Multa: $" + prestamo.multa + ".");
    });
}

// Función para gestionar los préstamos
function gestionarPrestamos() {
    registrarPrestamo("Juan", "El Quijote", "2024-10-20");
    registrarPrestamo("Luna", "Cien Años de Soledad", "2024-10-20");
    
    // Verificar los retrasos
    verificarRetraso();
    
    // Mostrar los préstamos
    mostrarPrestamos();
}

// Ejecutar el sistema
gestionarPrestamos();
