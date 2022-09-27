import { Outlet } from "react-router-dom";
import MainCarousel from "./Carousel";
import "./style.css";

const Body = () => {
  return (
    <div className="body-container">
      <MainCarousel />
      <div className="browse-trailers">
        <p className="up-next">Up Next</p>
      </div>

      <Outlet />
    </div>
  );
};

export default Body;
