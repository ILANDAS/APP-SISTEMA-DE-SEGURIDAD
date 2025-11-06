// Referencias
const modal = document.getElementById("modal");
const alertaBtn = document.getElementById("alerta-btn");
const closeModal = document.getElementById("closeModal");
const enviarReporte = document.getElementById("enviar-reporte");

// Abrir modal
alertaBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Cerrar modal al hacer clic en la X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Acción del botón "Enviar Registro"
enviarReporte.addEventListener("click", () => {
  alert("🚨 Reporte de incidencia enviado correctamente.");
  modal.style.display = "none";
});
