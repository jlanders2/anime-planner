import { action, computed, makeAutoObservable, observable, set } from "mobx";
import Auth, { IAuth } from "./models/auth";
import { RootStore } from "./rootStore";

export class AuthStore {
  rootStore: RootStore;

  @observable auth = Auth;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @action("AuthStore | setAuth")
  setAuth = (state: IAuth): IAuth => {
    set(this.auth, state);
    console.log(this.auth);
    return this.auth;
  };

  @computed get isAuthenticated() {
    let authResult = false;
    const correctClient = this.auth.client === "22700";
    const isExpired = this.auth.expirationDate.valueOf() < new Date().valueOf();

    if (correctClient && !isExpired) authResult = true;
    return authResult;
  }
}
