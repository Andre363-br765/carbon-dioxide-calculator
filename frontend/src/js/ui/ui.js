import { ROUTES } from '../data/routes.js';

export function populateRoutes(selectEl) {
  ROUTES.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.distanceKm;
    opt.textContent = `${r.name} — ${r.distanceKm} km`;
    selectEl.appendChild(opt);
  });
}

export function showResult(containerEl, data) {
  containerEl.classList.remove('hidden');
  containerEl.innerHTML = `
    <h3>Resultado</h3>
    <p><strong>Distância:</strong> ${data.distanceKm.toLocaleString('pt-BR', { minimumFractionDigits: 1 })} km</p>
    <p><strong>Transporte:</strong> ${data.mode}</p>
    <p><strong>Emissão estimada:</strong> ${data.grams.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} g CO₂ (${data.kg.toLocaleString('pt-BR', { minimumFractionDigits: 3 })} kg)</p>
  `;
}
