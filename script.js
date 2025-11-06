// Simulación de envío de alertas ciudadanas
const sosBtn = document.getElementById("sos-btn");
const alertHistory = document.getElementById("alert-history");

sosBtn.addEventListener("click", () => {
  const date = new Date().toLocaleString();
  const alertItem = document.createElement("li");
  alertItem.textContent = `🚨 Alerta enviada - ${date}`;
  alertHistory.prepend(alertItem);

  alert("¡Alerta enviada exitosamente!");
});
