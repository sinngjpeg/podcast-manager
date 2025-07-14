import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisodes} from '../services/list-episodes-services';
import { serviceFilterEpisodes } from "../services/filter-episodes.service";
import { ContentType } from "../utils/content-type";
import { PodcastDTO } from "../models/podcast-dto";

export const getListEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: PodcastDTO = await serviceListEpisodes();
    response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
    response.write(JSON.stringify(content.body));
    response.end();
};

export const getFilterEpisodes = async(
    request: IncomingMessage,
    response: ServerResponse
) => {
    
    const content: PodcastDTO = await serviceFilterEpisodes(request.url);
    response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
    response.write(JSON.stringify(content.body));
    response.end();
};