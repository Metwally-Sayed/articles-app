import React from "react";
import Form from "../components/SignupForm";

type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-64 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow-lg sm:rounded-lg sm:px-12">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Signup;
