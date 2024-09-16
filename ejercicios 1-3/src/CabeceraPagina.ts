export class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'centro' | 'derecha' | 'izquierda';

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'centro'; // valor por defecto
    }

    // Método para obtener las propiedades
    public obtenerPropiedades(): { titulo: string, color: string, fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    // Método para configurar la alineación
    public setAlineacion(alineacion: 'centro' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
    }

    // Método para imprimir propiedades en la consola
    public imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }

    // Método para mostrar el título en el DOM
    public mostrarTitulo(): void {
        const appDiv = document.getElementById('app');
        if (appDiv) {
            const tituloElemento = document.createElement('h1');
            tituloElemento.innerText = this.titulo;
            tituloElemento.style.color = this.color;
            tituloElemento.style.fontFamily = this.fuente;
            tituloElemento.style.textAlign = this.alineacion;
            appDiv.appendChild(tituloElemento);
        }
    }
}
