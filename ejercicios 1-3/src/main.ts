import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'

import { CabeceraPagina } from './CabeceraPagina';

// Ejemplo de uso
const cabecera = new CabeceraPagina("Mi Página", "blue", "trajan");
cabecera.setAlineacion("centro");
cabecera.imprimirPropiedades();
cabecera.mostrarTitulo();

import Calculadora from './calculadora';

const calc = new Calculadora();

console.log("Suma: ", calc.sumar(5, 3));          // 8
console.log("Resta: ", calc.restar(10, 4));       // 6
console.log("Multiplicación: ", calc.multiplicar(6, 7)); // 42
console.log("División: ", calc.dividir(8, 2));    // 4
console.log("Potencia: ", calc.potencia(2, 3));   // 8
console.log("Factorial: ", calc.factorial(5));    // 120

import Cancion from './cancion';

const miCancion = new Cancion("Imagine", "Rock", "Freddie Mercury");

// Mostrar los datos de la canción
miCancion.mostrarCancion();

// Cambiar el autor utilizando el método set
miCancion.autor = "Survivor";

// Mostrar los datos de la canción después de cambiar el autor
miCancion.mostrarCancion();


//document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  //<div>
    //<a href="https://vitejs.dev" target="_blank">
      //<img src="${viteLogo}" class="logo" alt="Vite logo" />
    //</a>
    //<a href="https://www.typescriptlang.org/" target="_blank">
      //<img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    //</a>
    //<h1>Vite + TypeScript</h1>
    //<div class="card">
      //<button id="counter" type="button"></button>
    //</div>
    //<p class="read-the-docs">
      //Click on the Vite and TypeScript logos to learn more
    //</p>
  //</div>
//`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
