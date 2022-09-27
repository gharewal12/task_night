import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TableComponent from "./TableComponent";
import User from "./User";
import { jsonData } from "./jsonData";
import "./styles.css";

export default function App(): JSX.Element {
  const [data, setData] = useState(jsonData.profile);
  return (
    <div className="App">
      <Routes>
        <Route path="user/:userid" element={<User />} />
        <Route path="/" element={<TableComponent />} />
      </Routes>
    </div>
  );
}
