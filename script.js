const sosButton = document.querySelector('.sos-button');
sosButton.addEventListener('click', () => {
  alert('🚨 Alerta SOS enviada a las autoridades.');
});

const alertaBtn = document.getElementById('alerta-btn');
alertaBtn.addEventListener('click', () => {
  document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
});
