import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  ref: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, ...rest },
  ref
) => {
  return (
    <input className="border py-1 rounded" {...rest} type={type} ref={ref} />
  );
};

const InputField = React.forwardRef(Input);

export default InputField;
