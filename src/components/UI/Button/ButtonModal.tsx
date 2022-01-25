import React from "react";

interface Props {
  setIsModal: (active: boolean) => void;
}

const ButtonModal: React.FC<Props> = ({ setIsModal }) => {
  const closeModal = () => {
    setIsModal(false);
  };
  return <button onClick={closeModal}>X</button>;
};

export default ButtonModal;
