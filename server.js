const app  = require( './src/app.js');
const dotenv = require('dotenv');
dotenv.config()

const port = process.env.PORT;

const connect = require('./src/config/database.js');

app.listen(port, () => { console.log(`Servidor rodando na porta: ${port}`)})

