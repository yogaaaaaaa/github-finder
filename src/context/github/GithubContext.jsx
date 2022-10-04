import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //DEFINE INITIAL STATE ======================
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  //USER REDUCER =============================
  //dispatch is for using the action from reducer file===============
  const [state, dispatch] = useReducer(githubReducer, initialState);

 

  //FETCH SINGLE USER===========================
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      console.log(response.status);
      window.location = "/notfound";
    } else {
      const data = await response.json();

      //dispatch is to replace setSomething =======================
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //GET USER REPOS=============
  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    });

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    //dispatch is to replace setSomething =======================
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  //for clearing user search result=======================
  const clearUser = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        dispatch,
        // searchUsers,
        clearUser,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
