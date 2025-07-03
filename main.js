function setPage(page) {
  document.querySelectorAll(".section").forEach((sec) => {
    sec.classList.remove("active");
  });
  document.getElementById(page).classList.add("active");
}

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Solicitud enviada correctamente. Gracias.");
  this.reset();
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente. Gracias.");
  this.reset();
});
