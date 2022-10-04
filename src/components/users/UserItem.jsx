import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <div className="h2 card-title">{login}</div>
          <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>

    //Table users ===================================
//   <div className="overflow-x-auto">
//       <table className="table table-zebra w-full" >
//         {/* <thead>
//           <tr>
//             <th>ID</th>
//             <th>user</th>
//           </tr>
//         </thead> */}
//     {/* {users.map((user) => ( */}
//         <tbody>
//           <tr>
//             <td><img className="rounded-full shadow-14 h-14" src={avatar_url}/></td>
//             <td>{login}</td>
//           </tr>
//         </tbody>
//         {/* ))} */}
//       </table>
//   </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
