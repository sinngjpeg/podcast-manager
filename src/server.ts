import { getFilterEpisodes, getListEpisodes } from './controller/podcast-controller';
import * as http from "http";
import { Routes } from './routes/routes';


const server = http.createServer(async (
    request: http.IncomingMessage,
    response: http.ServerResponse) => {
    
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
    
    if (request.method === "GET" && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === "GET" && baseUrl === Routes.EPISODES) {
        await getFilterEpisodes(request, response);
    }
}
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
});

