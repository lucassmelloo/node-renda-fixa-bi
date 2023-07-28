const http = require("http")
const port = 3000;

const routes = {
    '/': 'Voce esta acessando a API do NodeRendaFixaBI',
    '/fixed_income': 'Voce esta acessando FixedIncome',
    '/indexers': 'indexers',

}

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end(routes[req.url]);
})

server.listen(port, ()=> {
    console.log(`Servidor rodando em ${port}`);
})