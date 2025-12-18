// Fatores de emissão (gramas CO2 por km) — valores aproximados para fins educativos
// Fonte: valores médios públicos (apenas referência)
export const EMISSION_FACTORS = {
  car: 192,      // carro médio por passageiro (g/km)
  bus: 105,      // ônibus por passageiro (g/km)
  train: 41,     // trem elétrico / regional (g/km)
  plane: 255,    // avião (média curta/média distância) (g/km)
  bike: 0,       // bicicleta (emissões diretas zero)
  walking: 0     // caminhada (emissões diretas zero)
};

export const GRAMS_IN_KG = 1000; // conversão
