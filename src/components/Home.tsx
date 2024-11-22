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
    <div className="d-flex flex-column align-items-center justify-content-center m-2">
      <form onSubmit={handleAnimeSearchFormSubmission} className="w-50">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Anime"
            value={animeSearchValue}
            onChange={handleAnimeSearchInputChange}
          />
          <button className="btn btn-outline-secondary">Search</button>
        </div>
      </form>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {animeSearchResults.map((anime, id) => {
            return (
              <tr key={id}>
                <td>{anime.id}</td>
                <td>{anime.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
