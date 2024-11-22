import { AnimeSearchResult } from "../models/anilist";
import { Anime } from "../models/anime";
import { gql, GraphQLClient } from "graphql-request";

const url = "https://graphql.anilist.co";
const client = new GraphQLClient(url);

export async function animeSearch(anime: string): Promise<Anime[]> {
  const document = gql`
    query ($search: String) {
      Page(page: 1, perPage: 10) {
        media(type: ANIME, sort: START_DATE, search: $search) {
          id
          title {
            english
            romaji
          }
        }
      }
    }
  `;

  const variables = {
    search: `%${anime}%`,
  };

  let results = await client.request<AnimeSearchResult>(document, variables);
  const animeList = results.Page.media.map((media) => {
    return new Anime(media);
  });

  return animeList;
}

// title {
//     english
// },
// startDate {
//     day,
//     month,
//     year
// }
