import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const RouterPage = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default RouterPage;
