// Referencias al DOM
const modal = document.getElementById("modal");
const alertaBtn = document.getElementById("alerta-btn");
const closeModal = document.getElementById("closeModal");
const enviarReporte = document.getElementById("enviar-reporte");

// Referencias a los campos del formulario
const tipoSelect = modal.querySelector("select");
const ubicacionInput = modal.querySelector("input[type='text']");
const detalleTextarea = modal.querySelector("textarea");

// Referencia a la tabla
const tablaBody = document.querySelector("table tbody");

// Contador para nuevas filas
let contador = 3; // porque ya tienes 2 registros iniciales

// Abrir modal
alertaBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Cerrar modal con la X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal haciendo clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Enviar y guardar reporte
enviarReporte.addEventListener("click", () => {
  const tipo = tipoSelect.value;
  const ubicacion = ubicacionInput.value.trim();
  const detalle = detalleTextarea.value.trim();

  // Validar campos
  if (!tipo || !ubicacion || !detalle) {
    alert("⚠️ Por favor completa todos los campos antes de enviar.");
    return;
  }

  contador++; // aumenta el número del caso

  // Crear nueva fila
  const nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `
    <td>${contador}</td>
    <td>${tipo}</td>
    <td>María Esther</td>
    <td>${ubicacion}</td>
    <td>✔️</td>
  `;

  // Agregar fila a la tabla
  tablaBody.appendChild(nuevaFila);

  // Confirmación visual
  alert("🚨 Reporte de incidencia guardado correctamente.");

  // Limpiar campos
  tipoSelect.selectedIndex = 0;
  ubicacionInput.value = "";
  detalleTextarea.value = "";

  // Cerrar modal
  modal.style.display = "none";
});
