import React from "react";
import Login from "./pages/Login";
import "./assets/styles/_global.scss";
import { Route, Routes } from "react-router-dom";
import DashboardRoutes from "./routes/Dashboard";
import IsUserAllowed from "./services/utils/utils";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Product";
import Category from "./pages/Category";
function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={DashboardRoutes.LOGIN} element={<Login />} />
      <Route
        path={DashboardRoutes.INDEX}
        element={
          <IsUserAllowed>
            <Dashboard />
          </IsUserAllowed>
        }
      >
        <Route
          path={DashboardRoutes.PRODUCTS}
          element={
            <IsUserAllowed>
              <Products />
            </IsUserAllowed>
          }
        />
         <Route
          path={DashboardRoutes.CATEGORIES}
          element={
            <IsUserAllowed>
              <Category />
            </IsUserAllowed>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
