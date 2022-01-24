import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SingleUser from "../pages/SingleUser";
const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:login" element={<SingleUser />} />
    </Routes>
  );
};

export default RoutesList;
