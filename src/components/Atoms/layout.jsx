import React from "react";
import { Component } from "./styles";

function Layout(props) {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Layout;
