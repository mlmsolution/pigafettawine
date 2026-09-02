document.getElementById('year').textContent = new Date().getFullYear();

const wineSelect = document.getElementById('wine');

function chooseWine(wine) {
  wineSelect.value = wine;
  document.getElementById('contatti').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('[data-wine]').forEach(button => {
  if (button.classList.contains('primary-btn')) {
    button.addEventListener('click', () => chooseWine(button.dataset.wine));
  }
});

function leadCode() {
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
  const random = Math.random().toString(36).slice(2,6).toUpperCase();
  return `PV-${date}-${random}`;
}

document.getElementById('leadForm').addEventListener('submit', () => {
  const code = leadCode();
  const wine = wineSelect.value;
  document.getElementById('leadCode').value = code;
  document.getElementById('formSubject').value = `Richiesta Pigafetta Vini · ${wine} · ${code}`;
});
