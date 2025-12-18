import express from 'express';
import cors from 'cors';
import co2Routes from './routes/co2.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/co2', co2Routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
