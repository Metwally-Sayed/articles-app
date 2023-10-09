import { useSelector } from "react-redux";
import { Articale } from "../types";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { changeStatuesArticle } from "../lib/api";

type Props = { actionBtnHandler: (data: Articale) => void; artical: Articale };

const ActionBtn = ({ actionBtnHandler, artical }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cookies = new Cookies();

  const userRole =
    useSelector((state: RootState) => state.user.LoginUser.RoleName) ||
    cookies.get("role");

  let renderBtn;

  if (location.pathname === "/listed") {
    return renderBtn;
  } else if (userRole === "Anonymous") {
    renderBtn = (
      <button
        onClick={() => actionBtnHandler(artical)}
        className=" bg-black text-white px-5 py-2 rounded-lg  "
      >
        List
      </button>
    );
  } else if (userRole === "Writer") {
    renderBtn = (
      <button
        onClick={() => navigate(`/update/${artical.id}`)}
        className=" bg-black text-white px-5 py-2 rounded-lg "
      >
        Update
      </button>
    );
  } else if (userRole === "SuperAdmin") {
    renderBtn = (
      <button
        onClick={() =>
          changeStatuesArticle(artical.id, artical.isActive, navigate)
        }
        className=" bg-black text-white px-5 py-2 rounded-lg "
      >
        Change Status{" "}
      </button>
    );
  }

  return <>{renderBtn}</>;
};

export default ActionBtn;
