class Planeta {
    constructor(nombre, cantidadSatelites, masa, volumen, diametro, distanciaAlSol, observable) {
        this.nombre = nombre;
        this.cantidadSatelites = cantidadSatelites;
        this.masa = masa;
        this.volumen = volumen;
        this.diametro = diametro;
        this.distanciaAlSol = distanciaAlSol;
        this.observable = observable;
    }

    imprimirDatos() {
        let mensaje = "Nombre: " + this.nombre + "\n" +
                      "Cantidad de satélites: " + this.cantidadSatelites + "\n" +
                      "Masa: " + this.masa + "\n" +
                      "Volumen: " + this.volumen + "\n" +
                      "Diámetro: " + this.diametro + "\n" +
                      "Distancia al Sol: " + this.distanciaAlSol + "\n" +
                      "Es observable: " + (this.observable ? "Sí" : "No");
        alert(mensaje);
    }

    calcularDensidad() {
        return this.masa / this.volumen;
    }
}

let p1 = new Planeta("Tierra", 1, 5.9736e24, 1.08321e12, 12742, 150000000, true);
let p2 = new Planeta("Júpiter", 1, 1.899e27, 1.4313e15, 139820, 750000000, true);

alert("Datos del Planeta P1:\n");
p1.imprimirDatos();
alert("\nDatos del Planeta P2:\n");
p2.imprimirDatos();
