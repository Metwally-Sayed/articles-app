import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validationSchema/schema";
import { userLogin } from "../lib/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { VerifyUser } from "../lib/functions";
import InputError from "./InputError";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const formHandler = (data: { userName: string; password: string }) => {
    userLogin(data, navigate, dispatch);
  };

  useEffect(() => {
    VerifyUser(navigate);
  }, []);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(formHandler)}>
      <div>
        <label
          htmlFor="text"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          User Name
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
            className=" p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.password && (
          <InputError>
            <p>{errors.password?.message}</p>
          </InputError>
        )}
      </div>
      <div>
        <Link className=" underline " to={"/signup"}>
          Sign up here{" "}
        </Link>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gray-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Form;
