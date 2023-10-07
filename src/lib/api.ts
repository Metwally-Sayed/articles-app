import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { Userdata } from "../types";
import { Dispatch } from "redux";
import { getUser } from "../redux/features/userSlice";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const userSignUp = async (
  data: Userdata,
  navigate: NavigateFunction
) => {
  await axios
    .post(`https://51.81.20.148:7373/User/Register`, data)
    .then((res) => {
      console.log(res);

      // i know its not the best practice but thats what the endpoint returns

      //   if (res.data === "User Name already Exists") {

      //   }
      if (res.status === 200) {
        navigate("/");
      }
      //   if (res.data.token) {
      //     navigate("/conversations");
      //   } else {
      //     alert(res.data);
      //   }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userLogin = async (
  data: { userName: string; password: string },
  navigate: NavigateFunction,
  dispatch: Dispatch
) => {
  await axios
    .get(
      `https://51.81.20.148:7373/User/Login/${data.userName}/${data.password}`
    )
    .then((res) => {
      console.log(res);

      if (!res.data) {
        alert("something went wrong!");
      } else if (res.data === "InActive User, Can't Get User Info") {
        alert(res.data);
      } else if (res.data === "Invalid User Name or Password") {
        alert(res.data);
      } else {
        if (res.data.Token) cookies.set("token", res.data.Token);
        dispatch(getUser(res.data));
        navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const allArticals = async () => {
  try {
    const res = await axios.get(
      `https://51.81.20.148:7373/Article/GetAllArticles`
    );
    if (res.status === 200) return res;
  } catch (error) {
    console.error(error);
  }
};
