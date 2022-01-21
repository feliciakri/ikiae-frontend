import { Fragment } from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
    </Fragment>
  );
};

export default Layout;
