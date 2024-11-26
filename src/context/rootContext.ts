import { createContext } from "react";
import { RootStore } from "../store/rootStore";

export interface IStoresContext {
  rootStore?: any;
}

const rootStore = new RootStore();

const storeContext = createContext<IStoresContext>({
  rootStore,
});

export default storeContext;
