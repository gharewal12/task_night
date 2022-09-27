import { useParams } from "react-router";
import { jsonData } from "./jsonData";

const User = () => {
  const { userid } = useParams();
  const data = jsonData.profile;
  const userDetails = data.filter((x) => x.userid === userid)[0];

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <tr>
          <td>UserId</td>
          <td>{userDetails.userid}</td>
        </tr>
        <tr>
          <td>UserName</td>
          <td>
            {userDetails.user.name.title} {userDetails.user.name.first}{" "}
            {userDetails.user.name.last}
          </td>
        </tr>
        <tr>
          <td>Email Id</td>
          <td>{userDetails.user.email}</td>
        </tr>
        <tr>
          <td>Contact No</td>
          <td>
            {userDetails.user["contact-ext"]}
            {userDetails.user.contact}
          </td>
        </tr>
        <tr>
          <td>Joining Date</td>
          <td>
            {new Date(userDetails.user["join-date"]).toLocaleDateString()}
          </td>
        </tr>
        <tr>
          <td>Last Login</td>
          <td>
            {new Date(userDetails["last-login"].datetime).toLocaleDateString()}
          </td>
        </tr>
      </table>
      {/* <div className="userDetails">
        <div>
          <label>UserId</label> : <label>{userDetails.userid}</label>
        </div>
        <div>
          <label>UserName</label> :{" "}
          <label>
            {userDetails.user.name.title} {userDetails.user.name.first}{" "}
            {userDetails.user.name.last}
          </label>
        </div>
      </div> */}
    </div>
  );
};
export default User;
