// Funções para manipular o DOM e mostrar resultados
import { ROUTES } from '../data/routes.js';

/** Popula o select de rotas com os dados de exemplo */
export function populateRoutes(selectEl){
  ROUTES.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.distanceKm; // guardamos distância no value para simplificar
    opt.textContent = `${r.name} — ${r.distanceKm} km`;
    selectEl.appendChild(opt);
  });
}

/** Mostra o resultado no elemento fornecido */
export function showResult(containerEl, data){
  containerEl.classList.remove('hidden');
  containerEl.innerHTML = `
    <h3>Resultado</h3>
    <p><strong>Distância:</strong> ${formatNumber(data.distanceKm,1)} km</p>
    <p><strong>Transporte:</strong> ${data.mode}</p>
    <p><strong>Emissão estimada:</strong> ${formatNumber(data.grams,2)} g CO₂ (${formatNumber(data.kg,3)} kg)</p>
  `;
}

export function formatNumber(value, decimals=2){
  return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
