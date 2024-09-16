import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { Cuenta } from './Cuenta.ts'  // Importamos la clase Cuenta

// Aquí se mantiene la estructura HTML inicial
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card" id="app">
      <button id="depositar" type="button">Depositar</button>
      <button id="retirar" type="button">Retirar</button>
    </div>
    <p class="read-the-docs">
      Click en los botones para interactuar con la cuenta
    </p>
  </div>
`

// Crear una instancia de la clase Cuenta
const cuenta = new Cuenta("Juan Pérez", 100, "Ahorro", "123456789");

// Mostrar los datos iniciales de la cuenta
cuenta.mostrarDatos();

// Asignar eventos a los botones
document.querySelector<HTMLButtonElement>('#depositar')!.addEventListener('click', () => {
    cuenta.depositar(50); // Deposita $50 cuando se presiona el botón
});

document.querySelector<HTMLButtonElement>('#retirar')!.addEventListener('click', () => {
    cuenta.retirar(50); // Retira $30 cuando se presiona el botón
});

