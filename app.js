const btnDisminuir = document.getElementById("btn-dicrease");
const btnAumentar = document.getElementById("btn-increase");
const number = document.getElementById("span-number");
let contador = 0;

btnDisminuir.addEventListener("click", () => {
  contador--;
  number.textContent = contador;
});

btnAumentar.addEventListener("click", () => {
  contador++;
  number.textContent = contador;
});
