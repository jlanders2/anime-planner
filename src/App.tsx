import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [view, setView] = useState("home");
  return (
    <div>
      {(() => {
        if (view === "home") {
          return <Home />;
        }
      })()}
    </div>
  );
}

export default App;
