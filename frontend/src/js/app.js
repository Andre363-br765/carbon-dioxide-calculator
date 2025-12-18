import { calculateCO2 } from './core/calculator.js';
import { populateRoutes, showResult } from './ui/ui.js';

const form = document.getElementById('calc-form');
const routeSelect = document.getElementById('route-select');
const distanceInput = document.getElementById('distance');
const modeSelect = document.getElementById('mode');
const resultEl = document.getElementById('result');

populateRoutes(routeSelect);

routeSelect.addEventListener('change', e => {
  const val = e.target.value;
  if (val) distanceInput.value = val;
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const distanceKm = parseFloat(distanceInput.value || '0');
  const mode = modeSelect.value;

  if (isNaN(distanceKm) || distanceKm <= 0) {
    resultEl.classList.remove('hidden');
    resultEl.innerHTML = '<p>Informe uma distância válida maior que zero.</p>';
    return;
  }

  try {
    const res = await calculateCO2(distanceKm, mode);
    showResult(resultEl, { distanceKm, mode, grams: res.grams, kg: res.kg });
  } catch (err) {
    resultEl.classList.remove('hidden');
    resultEl.innerHTML = `<p>Erro: ${err.message}</p>`;
  }
});
