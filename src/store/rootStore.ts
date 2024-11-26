import { action, observable, set } from "mobx";
import Auth, { IAuth } from "./models/auth";

export class RootStore {
  @observable auth = Auth;
  constructor() {}

  @action("ApplicationStore | setAuth")
  setAuth = (state: IAuth): IAuth => {
    set(this.auth, state);
    console.log(this.auth);
    return this.auth;
  };
}
