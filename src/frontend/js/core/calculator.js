// Lógica simples para calcular emissões de CO2
import { EMISSION_FACTORS, GRAMS_IN_KG } from '../config/co2.constants.js';

/**
 * Calcula CO2 emitido em gramas e kg.
 * @param {number} distanceKm Distância em quilômetros
 * @param {string} mode Meio de transporte (chave em EMISSION_FACTORS)
 * @returns {{grams:number, kg:number}}
 */
export function calculateCO2(distanceKm, mode){
  const factor = EMISSION_FACTORS[mode];
  if (factor === undefined) throw new Error('Meio de transporte inválido: ' + mode);
  const grams = distanceKm * factor;
  const kg = grams / GRAMS_IN_KG;
  return { grams: Number(grams.toFixed(2)), kg: Number(kg.toFixed(3)) };
}
