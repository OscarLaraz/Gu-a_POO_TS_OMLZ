class Cancion {
    public titulo: string;
    public genero: string;
    private _autor: string;

    constructor(titulo: string, genero: string, autor: string) {
        this.titulo = titulo;
        this.genero = genero;
        this._autor = autor;
    }

    // Métodos get y set para el atributo privado 'autor'
    get autor(): string {
        return this._autor;
    }

    set autor(nuevoAutor: string) {
        this._autor = nuevoAutor;
    }

    // Método para mostrar los datos de la canción
    mostrarCancion(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}

export default Cancion;

