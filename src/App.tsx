import { observer } from "mobx-react-lite";
import "./assets/styles.scss";
import useStores from "./hooks/useStores";
import Authentication from "./views/Authentication";

const App = observer((): JSX.Element => {
  const {
    rootStore: {
      auth: { isAuthenticated },
    },
  } = useStores();

  return (
    <>
      {isAuthenticated && <h1>Congrats!</h1>}
      {!isAuthenticated && <Authentication />}
    </>
  );
});

export default App;
