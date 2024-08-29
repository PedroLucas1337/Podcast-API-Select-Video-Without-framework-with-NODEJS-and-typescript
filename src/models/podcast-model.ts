export interface PodcastModel {
    podcastName: string;
    episode: string;
    videoId: string;
    categories: string[];  // Corrigi o nome para "categories" para ficar consistente com o JSON.
}
