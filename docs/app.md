# PodFlix

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcast separados por categoria

### Dominio
Podcast Feito em video

### Features
- Listar os Episódios Podcast em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor, esporte, corrida]
- Filtrar Episódios por nome de Podcast


## Como

### Feature:
- Listar os Episódios Podcast em sessões de categorias

### Como Implementar:
 GET: Vou retornar em uma api rest (json) o nome do podcast, nome do epiisódio, imagem de capa, link e categoria

```js
[
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId:"pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJY2J1bSBmbG93",
    category: ["saúde", "bodybuilder"]
},

{
    podcastName: "flow",
    episode: "[MEDALHISTA OLÍMPICO 🥈] ISAQUIAS QUEIROZ - Flow #393",
    videoId: "7BZkp3qaRu8",
    cover: "https://i.ytimg.com/vi/7BZkp3qaRu8/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=7BZkp3qaRu8&pp=ygUVaXNhcXVpYXMgcXVlaXJveiBmbG93",
    category: ["Esporte", "Corrida"]
},
]
```


GET: Vou retornar em uma api rest (json) o nome do podcast, nome do epiisódio, imagem de capa, link e categoria, baseado em um parametro enviado pelo cliente do nome do podcast

