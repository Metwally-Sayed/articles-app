import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { Articale, Userdata } from "../types";
import { Dispatch } from "redux";
import { getUser } from "../redux/features/userSlice";
import Cookies from "universal-cookie";
import { getArticale } from "../redux/features/articleSlice";

const cookies = new Cookies();

const instance = axios.create({
  baseURL: "https://51.81.20.148:7373/", // Replace with your API's base URL
});

export const userSignUp = async (
  data: Userdata,
  navigate: NavigateFunction
) => {
  await instance
    .post(`User/Register`, data)
    .then((res) => {
      if (res.status === 200) {
        navigate("/login");
      }
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
  await instance
    .get(`User/Login/${data.userName}/${data.password}`)
    .then((res) => {
      if (!res.data) {
        alert("something went wrong!");
      } else if (res.data === "InActive User, Can't Get User Info") {
        alert(res.data);
      } else if (res.data === "Invalid User Name or Password") {
        alert(res.data);
      } else {
        cookies.set("token", res.data.Token);
        cookies.set("userName", res.data.LoginUser.DisplayName);
        cookies.set("role", res.data.LoginUser.RoleName);

        dispatch(getUser(res.data));
        navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const allArticals = async (dispatch: Dispatch) => {
  try {
    const res = await instance.get(`Article/GetAllArticles`);
    if (res.status === 200) {
      dispatch(getArticale(res.data));
    }
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const allCategories = async () => {
  try {
    const res = await instance.get(`Article/GetAllCategories`);
    if (res.status === 200) return res;
  } catch (error) {
    console.error(error);
  }
};

// Articles Api

export const createUpdate = async (
  data: Articale | undefined,
  navigate: NavigateFunction
) => {
  await instance
    .post(`Article/AddUpdateArticle`, data)
    .then((res) => {
      if (res.status === 200) {
        console.log("success");
        alert("Success");
        navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteArticle = async (id: number, navigate: NavigateFunction) => {
  await instance
    .delete(`Article/DeleteArticle?id=${id}`)
    .then((res) => {
      if (res.status === 200) {
        alert(`Deleted article number:${id}`);
        navigate(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const changeStatuesArticle = async (
  id: number | undefined,
  statues: boolean | undefined,
  navigate: NavigateFunction
) => {
  await instance
    .post(`Article/ActivateArticle?id=${id}&isActive=${!statues}`)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert(`Statues Changed for article number:${id}`);
        navigate(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
