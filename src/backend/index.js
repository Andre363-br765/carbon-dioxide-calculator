// backend/index.js
import express from 'express';
import co2Routes from './routes/co2.js';

const app = express();
app.use(express.json());
app.use('/api/co2', co2Routes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
