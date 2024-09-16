abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;
  
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    abstract mostrarDatos(): void;
  }
  
  export default Persona;

  