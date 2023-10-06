import React from "react";

type Props = {
  children: JSX.Element;
};

const InputError = ({ children }: Props) => {
  return <div className=" text-red-600">{children}</div>;
};

export default InputError;
