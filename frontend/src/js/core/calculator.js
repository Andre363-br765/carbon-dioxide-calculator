export async function calculateCO2(distanceKm, mode) {
  const res = await fetch('http://localhost:3000/api/co2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ distanceKm, mode })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Erro no cálculo');
  }

  return res.json();
}
