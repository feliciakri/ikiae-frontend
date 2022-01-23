import React from "react";

interface Props {
  onClose: (arg: boolean) => void;
}
const Overlays: React.FC<Props> = ({ onClose }) => {
  return (
    <div
      onClick={() => onClose(false)}
      className={`bg-black bg-opacity-50 flex overflow-x-hidden overflow-y-auto fixed h-modal md:h-full left-0 right-0 inset-y-0 sm:inset-0 z-20 justify-center items-center outline-none cursor-pointer`}
    ></div>
  );
};

export default Overlays;
