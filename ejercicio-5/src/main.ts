import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import Empleado from './Empleado';  // Importamos la clase Empleado

// Aquí se mantiene la estructura HTML inicial
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Información del Empleado</h1>
    <div id="empleado-info"></div>  <!-- Aquí es donde se mostrará la información -->
    <div class="card">
      <button id="ver-datos" type="button">Ver Datos</button>
      <button id="ver-sueldo" type="button">Ver Sueldo</button>
      <button id="mayor-edad" type="button">Es Mayor de Edad</button>
    </div>
    <p class="read-the-docs">
      Interactúa con la información del empleado
    </p>
  </div>
`;

// Crear una instancia de la clase Empleado
const empleado = new Empleado('Juan', 'Pérez', 'Calle 123', '555-1234', 30, 2500);

// Función para mostrar la información del empleado
const mostrarDatos = () => {
  document.getElementById('empleado-info')!.innerHTML = `
    <p><strong>Nombre:</strong> ${empleado.nombre} ${empleado.apellido}</p>
    <p><strong>Dirección:</strong> ${empleado.direccion}</p>
    <p><strong>Teléfono:</strong> ${empleado.telefono}</p>
    <p><strong>Edad:</strong> ${empleado.edad}</p>
  `;
};

// Función para mostrar el sueldo del empleado
const mostrarSueldo = () => {
  document.getElementById('empleado-info')!.innerHTML = `
    <p><strong>Sueldo:</strong> ${empleado.sueldo}</p>
  `;
};

// Función para verificar si es mayor de edad
const verificarMayorEdad = () => {
  const esMayor = empleado.edad >= 18 ? 'Sí' : 'No';
  document.getElementById('empleado-info')!.innerHTML = `
    <p>${empleado.nombre} ${empleado.apellido} es mayor de edad: ${esMayor}</p>
  `;
};

// Asignar eventos a los botones
document.querySelector<HTMLButtonElement>('#ver-datos')!.addEventListener('click', mostrarDatos);
document.querySelector<HTMLButtonElement>('#ver-sueldo')!.addEventListener('click', mostrarSueldo);
document.querySelector<HTMLButtonElement>('#mayor-edad')!.addEventListener('click', verificarMayorEdad);

