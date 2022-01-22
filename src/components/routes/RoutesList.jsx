import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
const RoutesList = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesList;
