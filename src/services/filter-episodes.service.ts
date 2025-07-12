import { repositoryPodcast } from "../repositories/podcats-repository"


export const serviceFilterEpisodes = async (podcastName : string) => {
    const data = await repositoryPodcast(podcastName);
    return data;
}