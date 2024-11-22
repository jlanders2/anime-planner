import { AnimeSearchResult } from "../models/anilist";
import { Anime } from "../models/anime";
import { gql, GraphQLClient } from "graphql-request";

const url = "https://graphql.anilist.co";
const client = new GraphQLClient(url);

export async function animeSearch(
  anime: string,
  resultsPage: number,
  resultsPerPage: number
): Promise<Anime[]> {
  const document = gql`
    query ($page: Int, $perPage: Int, $search: String) {
      Page(page: $page, perPage: $perPage) {
        media(type: ANIME, sort: START_DATE, search: $search) {
          id
          title {
            english
            romaji
          }
          coverImage {
            large
            medium
          }
          averageScore
          season
          seasonYear
        }
      }
    }
  `;

  const variables = {
    search: `%${anime}%`,
    page: resultsPage,
    perPage: resultsPerPage,
  };

  let results = await client.request<AnimeSearchResult>(document, variables);
  const animeList = results.Page.media.map((media) => {
    return new Anime(media);
  });

  return animeList;
}

export async function trendingAnimeTopFive() {
  const document = gql`
    query {
      Page(page: 1, perPage: 5) {
        media(type: ANIME, sort: [TRENDING_DESC, POPULARITY_DESC]) {
          id
          title {
            english
            romaji
          }
          coverImage {
            large
            medium
          }
          averageScore
          season
          seasonYear
        }
      }
    }
  `;

  let results = await client.request<AnimeSearchResult>(document);
  const animeList = results.Page.media.map((media) => {
    return new Anime(media);
  });

  return animeList;
}
