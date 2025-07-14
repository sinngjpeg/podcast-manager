import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcats-repository"
import { FilterPodCastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodCastModel> => {

    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode =
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
}