import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ModalAuth from "./ModalAuth";
import ModalWrapper from "./ModalWrapper";
import { ReactComponent as IconMenu } from "../../../assets/logo/IKIAE-Logo.svg";
import InputField from "../../Input/InputField";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handlerShow = () => {
    setShowModalReg(true);
    setShowModalLog(false);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Send input login to backend
    console.log(data);
  };
  return (
    <ModalAuth isShow={showModalLog} onClose={setShowModalLog}>
      <ModalWrapper>
        <div className="flex flex-col items-center justify-center">
          <IconMenu />
          <h1 className="font-poppins text-2xl tracking-wider my-6">
            Sign in to your account
          </h1>
        </div>
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
