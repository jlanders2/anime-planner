import { observable } from "mobx";

export interface IAuth {
  token: string;
  client: string;
  expirationDate: Date;
  anilistUserRef: string;
}

const Auth: IAuth = observable({
  token: "",
  client: "",
  expirationDate: new Date(0),
  anilistUserRef: ""
});

export default Auth;
