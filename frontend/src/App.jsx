import { Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import { Home } from "./page/Home/Home";
import { NavBar } from "./components/NavBar";
import { AboutScreen } from "./components/AboutScreen";
import { ServiceScreen } from "./components/ServiceScreen";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/about" Component={AboutScreen}></Route>
        <Route path="/services" Component={ServiceScreen}></Route>
        <Route path="/register" Component={CreateUserForm}></Route>

        <Route path="/*" Component={<Navigate to="/" replace={true} />}></Route>
      </Routes>
    </>
  );
};
