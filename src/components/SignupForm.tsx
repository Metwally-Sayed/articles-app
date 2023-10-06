import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputError from "./InputError";
import { registrationSchema } from "../validationSchema/schema";
import { Userdata } from "../typs";

type Props = {};

const SignupForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const formHandler = (data: Userdata) => {
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(formHandler)}>
      <div>
        <label
          htmlFor="userName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            {...register("userName", { required: true })}
            id="userName"
            name="userName"
            type="text"
            className=" p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.userName && (
          <InputError>
            <p>{errors.userName?.message}</p>
          </InputError>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            {...register("email", { required: true })}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className=" p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.email && (
          <InputError>
            <p>{errors.email?.message}</p>
          </InputError>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            {...register("password")}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className=" p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.password && (
          <InputError>
            <p>{errors.password?.message}</p>
          </InputError>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Confirm Password
        </label>
        <div className="mt-2">
          <input
            {...register("passwordConfirmation")}
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            className=" p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.passwordConfirmation && (
          <InputError>
            <p>{errors.passwordConfirmation?.message}</p>
          </InputError>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;