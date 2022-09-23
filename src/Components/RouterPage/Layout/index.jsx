import Nav from "../Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
