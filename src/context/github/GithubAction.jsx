import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const axiosGithub = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//searh users============================
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await axiosGithub.get(`/search/users?${params}`);
  console.log(response);

  console.log(response.data.items);
  return response.data.items;

  // if (response.data.status === 404) {
  //   window.location = "/notfound";
  // } else {
  // }
};

export const getUserAndRepos = async (login) => {

  const [user, repos] = await Promise.all([
    axiosGithub.get(`/users/${login}`),
    axiosGithub.get(`/users/${login}/repos`),
  ]).catch(function(error){
    if(error.response.status === 404){
      window.location = "/notfound";
    }
  })

  return { user: user.data, repos: repos.data }
  
 
};

//FETCH SINGLE USER===========================
//  export const getUser = async (login) => {
//     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     });

//     if (response.status === 404) {
//       window.location = "/notfound";
//     } else {
//       const data = await response.json();

//       return data;

//     }
//   };

//   //GET USER REPOS=============================
//   export const getUserRepos = async (login) => {
//     const params = new URLSearchParams({
//       sort: 'created',
//       per_page: 10
//     });

//     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     });
//     const data = await response.json();
//     return data;
//   };
