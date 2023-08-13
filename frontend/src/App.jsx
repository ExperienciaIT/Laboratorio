import { Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavBar } from "./routes/components/NavBar";
import { HomeScreen } from "./routes/components/HomeScreen";
import { AboutScreen } from "./routes/components/AboutScreen";
import { ServiceScreen } from "./routes/components/ServiceScreen";

import ClientForm from "./routes/components/ClientForm";

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" Component={HomeScreen}></Route>
        <Route path="/about" Component={AboutScreen}></Route>
        <Route path="/services" Component={ServiceScreen}></Route>
        <Route path="/register" Component={ClientForm}></Route>

        <Route path="/*" Component={<Navigate to="/" replace={true} />}></Route>
      </Routes>
    </>
  );
};
