import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    //define contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //busco os dados
    const data = await repoPodcast();  // Chama a função corretamente

    //verifico o tipo de resposta
    responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data
    }
    
    return responseFormat;
};
