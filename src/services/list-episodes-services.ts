import { repositoryPodcast } from "../repositories/podcats-repository"


export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();
    return data;
}