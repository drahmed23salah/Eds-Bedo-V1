import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ;


app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Express server running with ES Modul-es' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});