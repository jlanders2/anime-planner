import { observer } from "mobx-react-lite";
import { useState } from "react";
import useStores from "../../hooks/useStores";
import { IAnilistJwtToken } from "./models/token";
import { jwtDecode } from "jwt-decode";

const Authentication = observer((): JSX.Element => {
  const {
    rootStore: {
      authStore: { setAuth },
    },
  } = useStores();

  const [authToken, setAuthToken] = useState("");

  const handleAuthTokenInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAuthToken(event.target.value);
  };

  const handleAuthenticate = () => {
    const decodedJwt: IAnilistJwtToken = jwtDecode(authToken);
    setAuth({
      token: authToken,
      client: decodedJwt.aud,
      expirationDate: new Date(0).setUTCSeconds(decodedJwt.exp),
      anilistUserRef: decodedJwt.sub,
    });
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
