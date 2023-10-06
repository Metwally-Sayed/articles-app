import React from "react";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
