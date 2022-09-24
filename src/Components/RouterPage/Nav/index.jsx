import "./style.css";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

const Nav = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/IMDb_Logo_Square.svg"
          alt=""
        />
      </div>
      <Input
        className="search-input"
        icon={<IconSearch />}
        variant="filled"
        placeholder="Search"
        style={{ width: "700px", height: "32px" }}
      />
    </div>
  );
};

export default Nav;
