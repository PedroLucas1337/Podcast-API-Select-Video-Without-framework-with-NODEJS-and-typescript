# PodFlix

## Descrição

**PodFlix** é um aplicativo ao estilo Netflix que centraliza diferentes episódios de podcasts, organizando-os por categorias. O domínio principal do PodFlix é podcasts feitos em vídeo, permitindo aos usuários filtrar e listar episódios com facilidade.

## Domínio

- **Podcast Feito em Vídeo:** Todos os podcasts disponíveis no PodFlix são em formato de vídeo, oferecendo uma experiência visual e auditiva.

## Features

### 1. Listar Episódios de Podcast por Categoria
- **Categorias Disponíveis:** Saúde, Bodybuilder, Mentalidade, Humor, Esporte, Corrida
- **Descrição:** Os episódios de podcasts são organizados em sessões categorizadas, facilitando a navegação por interesse específico.

### 2. Filtrar Episódios por Nome de Podcast
- **Descrição:** Filtre os episódios listados com base no nome do podcast desejado, tornando a busca mais rápida e direcionada.

## Como Implementar

### 1. Listar Episódios de Podcast por Categoria

**Método:** `GET`

**Endpoint:** `/api/list`

**Descrição:** Este endpoint retorna uma lista de episódios de podcasts em formato JSON, incluindo o nome do podcast, nome do episódio, imagem de capa, link para o vídeo, e as categorias associadas.

**Exemplo de Resposta:**

```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId":"pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJY2J1bSBmbG93",
        "category": ["saúde", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "[MEDALHISTA OLÍMPICO 🥈] ISAQUIAS QUEIROZ - Flow #393",
        "videoId": "7BZkp3qaRu8",
        "cover": "https://i.ytimg.com/vi/7BZkp3qaRu8/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=7BZkp3qaRu8&pp=ygUVaXNhcXVpYXMgcXVlaXJveiBmbG93",
        "category": ["Esporte", "Corrida"]
    }
]
```

### 2. Filtrar Episódios por Nome de Podcast

**Método:** `GET`

**Endpoint:** `/api/episode`

**Parâmetro:** `p` (nome do podcast)

**Descrição:** Retorna uma lista filtrada de episódios com base no nome do podcast fornecido pelo cliente.

**Exemplo de Requisição:**
```http
GET http://localhost:3334/api/episode?p=flow
```

## Como Executar

1. Clone este repositório.
2. Instale as dependências necessárias.
3. Execute o servidor usando o comando `start:dev`.
4. Acesse o aplicativo no seu navegador ou via ferramenta de requisições HTTP como Postman.

## Tecnologias Utilizadas

- Node.js
- HTTP Module
- JavaScript
