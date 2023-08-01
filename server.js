import app  from './src/app.js';
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.PORT;

import connect from './src/db/db.js';

app.listen(port, () => { console.log(`Servidor rodando na porta: ${port}`)})

