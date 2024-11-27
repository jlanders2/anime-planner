import { observer } from "mobx-react-lite";

const Nav = observer((): JSX.Element => {
  const navigations = ["My Anime List", "Search", "Trending"];

  return (
    <div className="w-100">
      <ul className="nav-list">
        {navigations.map((nav, id) => {
          return <li key={id}>{nav}</li>;
        })}
      </ul>
    </div>
  );
});

export default Nav;
