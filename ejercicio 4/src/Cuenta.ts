export class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;
    private appDiv: HTMLElement | null;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
        this.appDiv = document.getElementById('app'); // Elemento en el DOM donde mostrar resultados
    }

    // Método para depositar
    public depositar(cantidad: number): void {
        if (cantidad < 5.00) {
            this.mostrarMensaje("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += cantidad;
            this.mostrarMensaje(`Se ha depositado correctamente: $${cantidad}. Saldo actual: $${this.cantidad}`);
        }
    }

    // Método para retirar
    public retirar(valor: number): void {
        if (valor < 5.00) {
            this.mostrarMensaje("El valor a retirar debe ser mayor a $5.00");
        } else if (valor > this.cantidad) {
            this.mostrarMensaje("No hay suficiente dinero en la cuenta");
        } else {
            this.cantidad -= valor;
            this.mostrarMensaje(`Has retirado: $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }

    // Método para mostrar los datos de la cuenta
    public mostrarDatos(): void {
        this.mostrarMensaje(`Nombre: ${this.nombre}`);
        this.mostrarMensaje(`Tipo de cuenta: ${this.tipoCuenta}`);
        this.mostrarMensaje(`Número de cuenta: ${this.numeroCuenta}`);
        this.mostrarMensaje(`Saldo: $${this.cantidad}`);
    }

    // Método para mostrar mensajes en el DOM
    private mostrarMensaje(mensaje: string): void {
        if (this.appDiv) {
            const p = document.createElement('p');
            p.innerText = mensaje;
            this.appDiv.appendChild(p);
        }
    }
}
