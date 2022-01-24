import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ModalAuth from "./ModalAuth";
import ModalWrapper from "./ModalWrapper";
import { ReactComponent as IconMenu } from "../../../assets/logo/IKIAE-Logo.svg";
import InputField from "../../Input/InputField";
import axios, { AxiosResponse } from "axios";
import { AuthContext } from "../../../../context/AuthContext";

interface Props {
  showModalLog: boolean;
  setShowModalLog: (arg: boolean) => void;
  setShowModalReg: (arg: boolean) => void;
}

type Inputs = {
  email: string;
  password: string;
};

const ModalLogin: React.FC<Props> = ({
  showModalLog,
  setShowModalLog,
  setShowModalReg,
}) => {
  const { state, dispatch } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handlerShow = () => {
    setShowModalReg(true);
    setShowModalLog(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch({ type: "LOGIN_START" });
    axios
      .post(`${process.env.REACT_APP_API_KEY_AUTH}/login`, data)
      .then((res: AxiosResponse) => {
        dispatch({ type: "LOGIN_SUCCES", payload: res.data.token });
        localStorage.setItem("token", JSON.stringify(res.data.token));
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      setShowModalLog(false);
    }, 1000);
  };
  return (
    <ModalAuth isShow={showModalLog} onClose={setShowModalLog}>
      <ModalWrapper>
        <div className="flex flex-col items-center justify-center">
          <IconMenu />
          <h1 className="font-poppins text-2xl tracking-wider my-6 text-center">
            Sign in to your account
          </h1>
        </div>
        <h1
          className={`${
            state.isLogged ? "relative" : "hidden"
          } bg-blue-400 text-white text-center py-2 uppercase`}
        >
          Succes
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label>Email Address</label>
            <InputField
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500">Please enter your email!</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <InputField
              type="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <p className="text-red-500">Please enter your password!</p>
            )}
          </div>
          <div className="space-y-5 mb-5">
            <div className="flex flex-row space-x-3 items-center">
              <input type="checkbox" />
              <h2>Remimber me?</h2>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-400 text-white py-2 px-3 rounded"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
        <hr className="my-6" />
        <div className="mt-10">
          <h1 className="text-center">
            Dont have any account?
            <button onClick={handlerShow} className="text-blue-400 ml-1">
              register.
            </button>
          </h1>
        </div>
      </ModalWrapper>
    </ModalAuth>
  );
};

export default ModalLogin;
