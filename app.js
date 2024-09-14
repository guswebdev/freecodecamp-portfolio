import { projects } from "./assets/data.js";
import { Header } from "./js/componets/Header.js";
import { click } from "./js/helpers/click.js";

/* --- VARIABLES --- */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

console.log(projects);
/* --- FUNCIONES --- */
const app = () => {
  Header();

  document.addEventListener("click", click);
};

/* --- EJECUCION --- */
document.addEventListener("DOMContentLoaded", app);
