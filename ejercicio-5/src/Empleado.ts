import Persona from './Persona';  // Importamos la clase base Persona

class Empleado extends Persona {
  sueldo: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  mostrarDatos(): void {
    console.log(`Datos del Empleado: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
  }
}

export default Empleado;

