import express from 'express';
import { EMISSION_FACTORS, GRAMS_IN_KG } from '../config/constants.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { distanceKm, mode } = req.body;

  if (!distanceKm || distanceKm <= 0 || !mode) {
    return res.status(400).json({ error: 'Distância ou modo inválido' });
  }

  const factor = EMISSION_FACTORS[mode];
  if (factor === undefined) {
    return res.status(400).json({ error: 'Meio de transporte inválido' });
  }

  const grams = distanceKm * factor;
  const kg = grams / GRAMS_IN_KG;

  res.json({ grams: +grams.toFixed(2), kg: +kg.toFixed(3) });
});

export default router;
