const $template = document.querySelector("#header").content;
const $containerHeader = document.querySelector("[data-header]");
export const Header = () => {
  let clone = document.importNode($template, true);
  $containerHeader.appendChild(clone);
};
