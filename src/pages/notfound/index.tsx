import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col m-auto py-10 w-1/2 h-full bg-white space-y-4 mt-56 font-inter">
      <h1 className="text-4xl font-bold">404</h1>
      <p>Oh no! page not found!</p>
      <Link to="/">
        <button className="text-indigo-700">Back to homepage</button>
      </Link>
    </div>
  );
};
export default NotFound;
