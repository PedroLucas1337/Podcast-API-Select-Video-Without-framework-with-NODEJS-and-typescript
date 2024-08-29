import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { HttpMethod } from "../utils/http-methods";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";

const DEFAULT_CONTENT = { "Content-Type": ContentType.JSON }

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        if (request.method === HttpMethod.GET) {
            const content: PodcastTransferModel = await serviceListEpisodes();
            response.writeHead(content.statusCode, DEFAULT_CONTENT );
            response.write(JSON.stringify(content.body));
            response.end();
        } else {
            response.writeHead(StatusCode.NOT_ALLOWED, DEFAULT_CONTENT);
            response.write(JSON.stringify({ message: "Method Not Allowed" }));
            response.end();
        }
    } catch (error) {
        console.error("Error fetching episodes:", error);
        response.writeHead(StatusCode.ERROR, DEFAULT_CONTENT);
        response.write(JSON.stringify({ message: "Internal Server Error" }));
        response.end();
    }
};


export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

   
    const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

    

    response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
    response.write(JSON.stringify(content.body));
    response.end();
};
