export const click = (e) => {
  const $bars = document.querySelector("[data-bars]");
  const $xmark = document.querySelector("[data-xmark]");
  if (
    e.target.matches(".bars") ||
    e.target.matches(".xmark") ||
    location.hash == "#abrir"
  ) {
    $bars.parentElement.classList.toggle("d-none");
    $xmark.parentElement.classList.toggle("d-none");
  }
};
