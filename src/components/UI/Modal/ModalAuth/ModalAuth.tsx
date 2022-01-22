import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
interface Props {
  isShow: boolean;
  children: any;
  onClose: (arg: boolean) => void;
}
const Modal: React.FC<Props> = ({ isShow, children, onClose }) => {
  const ModalOverlay = () => {
    return (
      <div
        className={`w-1/3 fixed inset-0 flex justify-center items-center mx-auto z-50`}
      >
        {children}
      </div>
    );
  };
  const portalElement = document.getElementById("overlays") as HTMLElement;
  return (
    <Fragment>
      {ReactDOM.createPortal(isShow ? <ModalOverlay /> : null, portalElement)}
      {ReactDOM.createPortal(
        isShow ? <Backdrop onClose={onClose} /> : null,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
