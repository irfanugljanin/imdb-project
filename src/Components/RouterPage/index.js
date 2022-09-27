import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../../context";
import Home from "./Home";

const RouterPage = (props) => {
  const { counter } = useContext(AppContext);
  console.log("ROUTERPAGE", counter);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default RouterPage;
