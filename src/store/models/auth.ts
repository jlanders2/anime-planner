import { observable } from "mobx";

export interface IAuth {
  isAuthenticated: boolean;
  token: string;
}

const Auth: IAuth = observable({
  isAuthenticated: false,
  token: "",
});

export default Auth;
