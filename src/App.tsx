import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import "./assets/united.bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AnimeSearch from "./views/anime-search";
import Nav from "./components/nav";
import TrendingAnime from "./views/trending-anime";

function App() {
  const [view, setView] = useState("trending");
  const handleNavChange = (navTo: string) => {
    setView(navTo);
  };

  return (
    <div className="d-flex justify-content-start">
      <Nav onNavChange={handleNavChange} />
      <main className="container">
        {view === "search" && <AnimeSearch />}
        {view === "trending" && <TrendingAnime />}
      </main>
    </div>
  );
}

export default App;
