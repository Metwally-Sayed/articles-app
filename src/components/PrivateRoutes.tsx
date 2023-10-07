import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Cookies from "universal-cookie";

const PrivateRoutes = () => {
  const cookies = new Cookies();
  const accessTokenObj = cookies.get("token");
  console.log(accessTokenObj);

  const auth = useSelector((state: RootState) => state.user);

  return auth.Token || accessTokenObj ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
