import React from "react";
interface Props {
  isModal: (arg: boolean) => void;
}
const ButtonSignIn: React.FC<Props> = ({ isModal }) => {
  const handlerModal = () => {
    isModal(true);
  };
  return (
    <button
      className="text-sm font-inter font-bold border-2 bg-white py-1 px-4 sm:px-3 text-blue-400 border-blue-400 rounded-lg"
      onClick={handlerModal}
    >
      Sign In
    </button>
  );
};

export default ButtonSignIn;
