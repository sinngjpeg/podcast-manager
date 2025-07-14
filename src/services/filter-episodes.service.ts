
import { repositoryPodcast } from "../repositories/podcats-repository"
import { PodcastDTO } from "../models/podcast-dto";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastDTO> => {

    let responseFormat: PodcastDTO = {
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