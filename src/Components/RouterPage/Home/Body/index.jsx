import { Outlet } from "react-router-dom";
import MainCarousel from "./Carousel";
import "./style.css";

const Body = () => {
  return (
    <div className="body-container">
      <MainCarousel />
      <Outlet />
    </div>
  );
};

export default Body;
