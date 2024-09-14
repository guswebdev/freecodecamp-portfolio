import { Header } from "./js/componets/Header.js";
import { click } from "./js/helpers/click.js";

/* --- VARIABLES --- */

/* --- FUNCIONES --- */
const app = () => {
  Header();

  document.addEventListener("click", click);
};

/* --- EJECUCION --- */
document.addEventListener("DOMContentLoaded", app);
