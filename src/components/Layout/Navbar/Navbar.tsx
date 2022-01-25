import React, { Fragment, useContext, useEffect, useState } from "react";
import { ReactComponent as IconMenu } from "../../assets/logo/IKIAE-Logo.svg";
import ButtonSignIn from "../../UI/Button/ButtonSignIn";
import SearhButton from "../../UI/Button/SearchButton";
import ProfileDropdown from "../../UI/Dropdown/ProfileDropdown";
import ModalLogin from "../../UI/Modal/ModalAuth/ModalLogin";
import ModalRegister from "../../UI/Modal/ModalAuth/ModalRegister";
import CartSidebar from "../../Cart/CartSidebar";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const Navbar: React.FC = () => {
  const { state } = useContext(AuthContext);
  const { isLogged } = state;
  const [isCart, setIsCart] = useState<Array<any>>();
  const [showModalLog, setShowModalLog] = useState<boolean>(false);
  const [showModalReg, setShowModalReg] = useState<boolean>(false);

  useEffect(() => {
    if (isLogged) {
      axios
        .get(`${process.env.REACT_APP_API_KEY}/carts`, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        })
        .then((res) => {
          setIsCart(res.data || []);
        });
    }
  }, [isLogged, state.token]);

  // let total = isCarts?.reduce((res, item): any => {
  //   return res + item.price * item.quantity;
  // }, 0);
  // console.log(total);
  return (
    <Fragment>
      <ModalLogin
        showModalLog={showModalLog}
        setShowModalLog={setShowModalLog}
        setShowModalReg={setShowModalReg}
      />
      <ModalRegister
        showModalReg={showModalReg}
        setShowModalLog={setShowModalLog}
        setShowModalReg={setShowModalReg}
      />
      <nav className="flex items-center justify-between px-6 md:px-14 py-5 bg-white">
        <span className="w-1/3">
          <IconMenu width="10rem" />
        </span>
        <SearhButton />
        <div className="w-1/2 md:w-1/3 flex justify-end">
          <div className="flex justify-between items-center space-x-3 md:space-x-6">
            {isLogged ? (
              <ProfileDropdown />
            ) : (
              <ButtonSignIn isModal={() => setShowModalLog(true)} />
            )}

            <span className="border border-gray-200 h-full"></span>
            <div className="flex flex-rol items-center space-x-2 md:space-x-3">
              <CartSidebar />
              <span>{isCart?.length}</span>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
