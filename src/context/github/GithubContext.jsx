import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //DEFINE INITIAL STATE ======================
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,

      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
