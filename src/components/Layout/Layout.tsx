import { Fragment } from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Navbar />
      <div className="my-8 mx-6">{children}</div>
    </Fragment>
  );
};

export default Layout;
