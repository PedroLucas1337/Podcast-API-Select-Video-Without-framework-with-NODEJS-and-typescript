import { repoPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {


    //definir interface
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //busco dados
    const queryString = podcastName?.split("p=")[1] || "";

    const data = await repoPodcast(queryString);

    //verifico se há conteudo
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
        }

        return responseFormat;
}