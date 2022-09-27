import { useState } from "react";
import { Link } from "react-router-dom";
import { jsonData } from "./jsonData";

const TableComponent = () => {
  const data = jsonData.profile;

  return (
    <table>
      <th>User Id </th>
      <th>User Name </th>
      <th>Profile Picture </th>
      <th>Email Id</th>
      <th>Job Title</th>
      {data.map((d: any, i: any) => (
        <>
          <tr key={d.userid}>
            <td>
              <Link to={`user/${d.userid}`}>{d.userid}</Link>
            </td>
            <td>
              {d.user.name.title} {d.user.name.first} {d.user.name.last}
            </td>
            <td>
              <img src={d.user.picture.thumbnail} />
            </td>
            <td>{d.user.email}</td>
            <td>{d["job-title"]}</td>
          </tr>
        </>
      ))}
    </table>
  );
};
export default TableComponent;
