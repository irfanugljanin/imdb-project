import Layout from "../Layout";
import { Outlet } from "react-router-dom";
import Body from "./Body";

const Home = () => {
  return (
    <Layout>
      <Body />
      <Outlet />
    </Layout>
  );
};

export default Home;
