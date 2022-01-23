import React from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const ModalWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white p-10 w-5/6 md:w-full font-inter shadow-lg">
      {children}
    </div>
  );
};

export default ModalWrapper;
