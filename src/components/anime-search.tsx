import { useState } from "react";
import { Anime } from "../models/anime";
import * as anilistApi from "../anilist/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AnimeSearch() {
  const [animeSearchValue, setAnimeSearchValue] = useState("");
  const [animeSearchResultsPage] = useState(1);
  const [animeSearchResultsPerPage, setAnimeSearchResultsPerPage] =
    useState(10);
  const [animeSearchResults, SetAnimeSearchResults] = useState(
    new Array<Anime>()
  );

  const perPageOptions = [10, 15, 25, 50];

  const handleAnimeSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnimeSearchValue(event.target.value);
  };

  const handlePerPageSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAnimeSearchResultsPerPage(Number(event.target.value));
  };

  const handleAnimeSearchFormSubmission = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const animeResults = await anilistApi.animeSearch(
      animeSearchValue,
      animeSearchResultsPage,
      animeSearchResultsPerPage
    );

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
          <button className="btn btn-outline-primary">Search</button>
        </div>
      </form>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {animeSearchResults.map((anime, id) => {
            return (
              <tr key={id}>
                <td>
                  <img src={anime.mediumArtworkUrl} />
                </td>
                <td>{anime.title}</td>
                <td>{anime.averageScore}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon className="btn text-primary" icon={faArrowLeft} />
        <div className="input-group">
          <select
            className="form-select"
            name="perPageSelect"
            onChange={handlePerPageSelectChange}
          >
            {perPageOptions.map((option, id) => {
              return (
                <option value={option} key={id}>
                  {option.toString()}
                </option>
              );
            })}
          </select>
        </div>
        <FontAwesomeIcon className="btn text-primary" icon={faArrowRight} />
      </div>
    </div>
  );
}
