import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Cookies from "universal-cookie";
import Header from "./Header";

const PrivateRoutes = () => {
  const cookies = new Cookies();
  const accessTokenObj = cookies.get("token");

  const auth = useSelector((state: RootState) => state.user);

  return auth.Token || accessTokenObj ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
