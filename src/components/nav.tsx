import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface navProps {
  onNavChange: (navTo: string) => void;
}

export default function Nav({ onNavChange }: navProps) {
  return (
    <div className="card card-body w-25 vh-100 d-flex align-content-center justify-content-start">
      <ul className="p-0 text-primary">
        <li className="list-unstyled mb-2">
          <button
            className="btn border-0"
            onClick={() => onNavChange("search")}
          >
            Search
          </button>
        </li>
        <li className="list-unstyled">
          <button
            className="btn border-0"
            onClick={() => onNavChange("trending")}
          >
            Trending
          </button>
        </li>
      </ul>
    </div>
  );
}
