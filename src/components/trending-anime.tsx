import { useEffect, useState } from "react";
import { Anime } from "../models/anime";
import * as anilistApi from "../anilist/api";

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
      <ul>
        {animeList.map((anime, id) => {
          return <li key={id}>{anime.title}</li>;
        })}
      </ul>
    </div>
  );
}
