import React from "react";
import classes from "../classes/Preloader.module.css";
import { Spin, Space } from "antd";
import "antd/dist/antd.css";

const Preloader = () => {
  return (
    <div className={classes.preloaderContainer}>
      <Space size="large">
        <div className={classes.preloader}>
          <Spin size="large" />
        </div>
        <div className={classes.preloaderText}>Loading...</div>
      </Space>
    </div>
  );
};

export default Preloader;
