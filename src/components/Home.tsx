import { useState } from "react";
import * as anilistApi from "../anilist/api.js";
import { Anime } from "../models/anime.js";

function Home() {
  const [animeSearchValue, setAnimeSearchValue] = useState("");
  const [animeSearchResults, SetAnimeSearchResults] = useState(
    new Array<Anime>()
  );

  const handleAnimeSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnimeSearchValue(event.target.value);
  };

  const handleAnimeSearchFormSubmission = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const animeResults = await anilistApi.animeSearch(animeSearchValue);

    SetAnimeSearchResults(animeResults);
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleAnimeSearchFormSubmission}>
        <label htmlFor="search">Anime Search</label>
        <input
          type="text"
          className="form-control"
          name="search"
          value={animeSearchValue}
          onChange={handleAnimeSearchInputChange}
        />

        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {animeSearchResults.map((anime, id) => {
            return (
              <tr key={id}>
                <td>{anime.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
