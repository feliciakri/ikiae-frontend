import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import ModalAuth from "./ModalAuth";
import ModalWrapper from "./ModalWrapper";
import InputField from "../../Input/InputField";
import { ReactComponent as IconMenu } from "../../../assets/logo/IKIAE-Logo.svg";

interface Props {
  showModalReg: boolean;
  setShowModalReg: (arg: boolean) => void;
  setShowModalLog: (arg: boolean) => void;
}

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const ModalRegister: React.FC<Props> = ({
  showModalReg,
  setShowModalReg,
  setShowModalLog,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handlerShow = () => {
    setShowModalReg(false);
    setShowModalLog(true);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_KEY_AUTH}/register`, data)
      .then((data) => {
        console.log(data);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setShowModalReg(false);
          setShowModalLog(true);
        }, 1000);
      })
      .catch((err) => alert("Something wrong..."));
  };
  return (
    <ModalAuth isShow={showModalReg} onClose={setShowModalReg}>
      <ModalWrapper>
        <div className="flex flex-col items-center justify-center text-center">
          <IconMenu />
          <div className="flex flex-col items-center my-3 space-y-3">
            <h1 className="font-poppins text-2xl tracking-wider">
              Create a new account
            </h1>
            <h2 className="text-sm">
              By signing up, you agree on our
              <Link to="/about">terms & condition</Link>
            </h2>
          </div>
        </div>
        <h1
          className={`${
            isLoading ? "relative" : "hidden"
          } bg-blue-400 text-white text-center py-2 uppercase`}
        >
          Registration successsful. Please Login
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label>Name</label>
            <InputField
              type="text"
              {...register("name", { required: true, minLength: 6 })}
            />
            {errors.name && (
              <p className="text-red-500">
                Please enter your name (min 6 character)!
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Email</label>
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
              <p className="text-red-500">
                Please enter your password (min 6 character)!
              </p>
            )}
          </div>
          <div className="space-y-5 mb-5">
            <div className="flex items-center justify-center">
              <button className="bg-blue-400 text-white py-2 px-3 rounded">
                Register
              </button>
            </div>
          </div>
        </form>
        <hr className="my-6" />
        <div className="mt-10">
          <h1 className="text-center">
            Already have an account?
            <button onClick={handlerShow} className="text-blue-400 ml-1">
              Login.
            </button>
          </h1>
        </div>
      </ModalWrapper>
    </ModalAuth>
  );
};

export default ModalRegister;
