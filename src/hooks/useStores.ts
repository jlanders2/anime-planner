import { useContext } from "react";
import rootContext from "../context/rootContext";

const useStores = (): any => useContext(rootContext);

export default useStores;
