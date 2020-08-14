import React from "react";
import classes from "../../classes/Navbar.module.css";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";

class Navbar extends React.Component {
  state = {
    current: "mail",
  };
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <nav className={classes.nav}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="alipay">
            <NavLink to="/New">New</NavLink>
          </Menu.Item>
          <Menu.Item key="a">
            <NavLink to="/Popular">Popular</NavLink>
          </Menu.Item>
        </Menu>
      </nav>
    );
  }
}
export default Navbar;
