import * as http from "http";

const server = http.createServer((
    request: http.IncomingMessage,
    responde: http.ServerResponse) => { }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
});

