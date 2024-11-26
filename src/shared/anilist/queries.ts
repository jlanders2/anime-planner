import { gql } from "graphql-request";

export interface IAnilistQuery {
  document: string;
  variables: object;
}

export const animeSearchQuery = (
  anime: string,
  page?: number,
  perPage?: number
): IAnilistQuery => {
  return {
    document: gql`
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
            description(asHtml: false)
          }
        }
      }
    `,
    variables: {
      search: `%${anime}%`,
      page: page || 1,
      perPage: perPage || 10,
    },
  };
};

export const trendingTopFiveAnimeQuery = (): IAnilistQuery => {
  return {
    document: gql`
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
            description(asHtml: false)
          }
        }
      }
    `,
    variables: {},
  };
};
