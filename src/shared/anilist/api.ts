import { GraphQLClient } from "graphql-request";
import { Anime } from "../models/anime";
import { AnimeSearchResult } from "./models";
import { animeSearchQuery, trendingTopFiveAnimeQuery } from "./queries";

const url = "https://graphql.anilist.co";
const client = new GraphQLClient(url);

export async function animeSearch(
  anime: string,
  resultsPage: number,
  resultsPerPage: number
): Promise<Anime[]> {
  const query = animeSearchQuery(anime, resultsPage, resultsPerPage);

  let results = await client.request<AnimeSearchResult>(
    query.document,
    query.variables
  );
  const animeList = results.Page.media.map((media) => {
    return new Anime(media);
  });

  return animeList;
}

export async function trendingAnimeTopFive() {
  const query = trendingTopFiveAnimeQuery();

  let results = await client.request<AnimeSearchResult>(query.document);
  const animeList = results.Page.media.map((media) => {
    return new Anime(media);
  });

  return animeList;
}
