import { Anime } from "../models/anime";

export async function animeSearch(anime: string): Promise<Anime[]> {
  const results: Anime[] = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query ($search: String){
              Page (page: 1, perPage: 10) {
                  media (type: ANIME,
                         sort: START_DATE,
                         search: $search) {
                      id
                  }
              }
          }
          `,
      variables: {
        search: `%${anime}%`,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data.data.Page.media.map(
        (animeResult: { id: number | undefined }) => {
          const anime = new Anime();
          anime.id = animeResult.id;

          return anime;
        }
      );
    })
    .catch((error) => {
      console.error(error);
    });

  return results;
}

// title {
//     english
// },
// startDate {
//     day,
//     month,
//     year
// }
