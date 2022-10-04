import { Outlet } from "react-router-dom";
import MainCarousel from "./Carousel";
import "./style.css";

const Body = () => {
  return (
    <div className="body-container">
      <MainCarousel />
      <div className="browse-trailers">
        <p className="up-next">Up Next</p>
        <div className="trailers">
          <div style={{ width: "300px", height: "100px" }}></div>
          <div style={{ width: "300px", height: "100px" }}></div>
          <div style={{ width: "300px", height: "100px" }}></div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Body;
