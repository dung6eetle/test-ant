import React from "react";
import ReactDOM from "react-dom";
import classes from "../../classes/Navbar.module.css";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";


const { SubMenu } = Menu;

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
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <nav className={classes.nav}>
          <Menu.Item key="alipay">
            <NavLink to="/New" target="_blank" rel="noopener noreferrer">
              New
            </NavLink>
          </Menu.Item>
          <Menu.Item key="alip">
            <NavLink to="/Popular" target="_blank" rel="noopener noreferrer">
              Popular
            </NavLink>
          </Menu.Item>
        </nav>
      </Menu>
    );
  }
}
export default Navbar;

{
  /* <Tabs defaultActiveKey="1">
      <nav className={classes.nav}>
        <div className={classes.navContainer}>
          <TabPane tab="Tab 1" key="1">
            <div className={classes.item}>
              <NavLink to="../New" activeClassName={classes.activeLink}>
                New
              </NavLink>
            </div>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <div className={classes.item}>
              <NavLink to="../Popular" activeClassName={classes.activeLink}>
                Popular
              </NavLink>
            </div>
          </TabPane>
        </div>
      </nav>
    </Tabs> */
}
