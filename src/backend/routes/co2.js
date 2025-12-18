// backend/routes/co2.js
import express from 'express';
import { EMISSION_FACTORS, GRAMS_IN_KG } from '../config/constants.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { distanceKm, mode } = req.body;
  const factor = EMISSION_FACTORS[mode];
  if (!factor) return res.status(400).json({ error: 'Meio de transporte inválido' });

  const grams = distanceKm * factor;
  const kg = grams / GRAMS_IN_KG;
  res.json({ grams: +grams.toFixed(2), kg: +kg.toFixed(3) });
});

export default router;
