import { StatusCode } from './../utils/status-code';
import { PodcastDTO } from "../models/podcast-dto";
import { repositoryPodcast } from "../repositories/podcats-repository"


export const serviceListEpisodes = async (): Promise<PodcastDTO> => {

    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: []
    };

    const data = await repositoryPodcast();
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NOT_FOUND,
        body: data
    };

    return responseFormat;
}