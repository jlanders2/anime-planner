import { useState } from "react";
import useStores from "../../hooks/useStores";
import { observer } from "mobx-react-lite";

const Authentication = observer((): JSX.Element => {
  const {
    rootStore: { setAuth },
  } = useStores();

  const [authToken, setAuthToken] = useState("");

  const handleAuthTokenInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAuthToken(event.target.value);
  };

  const handleAuthenticate = () => {
    // Perform a test call to verify token is valid
    const success = true;
    if (success) {
      setAuth({ isAuthenticated: true, token: authToken });
    }
  };

  return (
    <>
      <p>
        Please navigate{" "}
        <a
          target="_blank"
          href="https://anilist.co/api/v2/oauth/authorize?client_id=22700&response_type=token"
        >
          here
        </a>{" "}
        to retrieve you authorization token.
      </p>
      <div>
        <h4>
          Once you have received your token please paste it below and click
          Authenticate
        </h4>
        <textarea
          value={authToken}
          onChange={handleAuthTokenInputChange}
        ></textarea>
        <button onClick={handleAuthenticate}>Authenticate</button>
      </div>
    </>
  );
});

export default Authentication;
