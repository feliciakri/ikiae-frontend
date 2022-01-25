import { Fragment } from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ onSearch, children }: any) => {
  return (
    <Fragment>
      <Navbar onFilter={onSearch} />
      <div className="my-8 mx-6">{children}</div>
    </Fragment>
  );
};

export default Layout;
