import { observer } from "mobx-react-lite";
import "./assets/styles.scss";
import useStores from "./hooks/useStores";
import Authentication from "./views/Authentication";
import Nav from "./views/Nav";

const App = observer((): JSX.Element => {
  const {
    rootStore: {
      authStore: { isAuthenticated },
    },
  } = useStores();

  return (
    <>
      {isAuthenticated && (
        <>
          <Nav />
        </>
      )}
      {!isAuthenticated && <Authentication />}
    </>
  );
});

export default App;
