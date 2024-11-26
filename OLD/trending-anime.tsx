import { useEffect, useState } from "react";
import { Anime } from "../src/shared/anilist/models/anime";
import * as anilistApi from "../src/shared/anilist/api";
import parse from "html-react-parser";

export default function TrendingAnime() {
  const [animeList, setAnimeList] = useState(new Array<Anime>());

  const updateAnimeList = async () => {
    const results = await anilistApi.trendingAnimeTopFive();
    setAnimeList(results);
  };

  useEffect(() => {
    updateAnimeList();
    setInterval(updateAnimeList, 60 * 60 * 1000);
  }, []);

  return (
    <div>
      <table className="table table-striped table-borderless">
        <thead></thead>
        <tbody>
          {animeList.map((anime, id) => {
            return (
              <tr key={id}>
                <td>
                  <img src={anime.mediumArtworkUrl} />
                </td>
                <td>
                  <div>{anime.title}</div>
                  <div>{anime.averageScore}</div>
                  <div>{parse(anime.description ? anime.description : "")}</div>
                </td>
                <td>
                  {anime.season} - {anime.seasonYear}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
