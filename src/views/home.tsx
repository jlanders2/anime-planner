import { useState } from "react";
import AnimeSearch from "../components/anime-search.js";
import Nav from "../components/nav.js";
import TrendingAnime from "../components/trending-anime.js";

function Home() {
  const [navValue, setNavValue] = useState("trending");
  const handleNavChange = (navTo: string) => {
    setNavValue(navTo);
  };
  return (
    <div className="d-flex justify-content-start">
      <Nav onNavChange={handleNavChange} />
      <main className="container">
        {navValue === "search" && <AnimeSearch />}
        {navValue === "trending" && <TrendingAnime />}
      </main>
    </div>
  );
}

export default Home;
