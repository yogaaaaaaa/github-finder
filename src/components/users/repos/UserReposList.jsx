import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function UserReposList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Latest Repos</h2>
    {repos.map((repo)=> (
        <RepoItem key={repo.id} repo={repo}/>
    ))}
      </div>
    </div>
  )
}

UserReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default UserReposList;
