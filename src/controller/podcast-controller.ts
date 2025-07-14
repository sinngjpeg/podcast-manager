import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisodes} from '../services/list-episodes-services';
import { serviceFilterEpisodes } from "../services/filter-episodes.service";
import { ContentType } from "../utils/content-type";
import { PodcastDTO } from "../models/podcast-dto";

const DEFAULT_CONTENT = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: PodcastDTO = await serviceListEpisodes();
    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body));
    response.end();
};

export const getFilterEpisodes = async(
    request: IncomingMessage,
    response: ServerResponse
) => {
    
    const content: PodcastDTO = await serviceFilterEpisodes(request.url);
    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body));
    response.end();
};