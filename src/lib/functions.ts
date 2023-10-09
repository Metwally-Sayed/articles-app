import { NavigateFunction } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { decodedJWT } from "../types";
import Cookies from "universal-cookie";

export const VerifyUser = (navigate: NavigateFunction) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (token) {
    const decodedData: decodedJWT = jwt_decode(token);
    const expirationDate = decodedData.exp;
    const current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      cookies.remove("token");
      navigate("/login");
    } else {
      navigate("/", { replace: true });
    }
  } 
};
