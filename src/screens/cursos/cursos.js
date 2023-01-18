document.querySelectorAll(".botao-curso").forEach((el) => {
  el.addEventListener("click", (ev) => {
    document.getElementById("modal-curso").innerText =
      ev.target.parentElement.firstElementChild.innerText;
    document.getElementById("modal-img").src =
      ev.target.parentElement.previousElementSibling.src;
    document.getElementById("modal").style.display = "block";
  });
});
document.getElementById("modal-fechar").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
