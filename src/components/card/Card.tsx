import { Articale } from "../../types";
import ActionBtn from "../ActionBtn";
import { useNavigate } from "react-router-dom";
import Deletebtn from "../Deletebtn";

type Props = {
  userRole?: string;
  articals: Articale[] | undefined;
  search?: string;
  actionBtnHandler?: (data: Articale) => void;
};

const Card = ({ articals, search = "", actionBtnHandler, userRole }: Props) => {
  const navigate = useNavigate();

  const articaleNav = (id: number) => {
    navigate(`article/${id}`);
  };

  return (
    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8  ">
      {articals
        ?.filter((item) => {
          return search!.toLocaleLowerCase() === " "
            ? item
            : item.title?.toLocaleLowerCase().includes(search);
        })
        .map((artical) => (
          <div className=" flex flex-col shadow-2xl p-2 rounded-md w-full bg-slate-100 hover:cursor-pointer min-h-full">
            {userRole === "Writer" ? (
              <div>
                <Deletebtn id={artical.id!} />
              </div>
            ) : null}
            <div
              className="md:min-h-[55%]"
              key={artical.id}
              onClick={() => {
                articaleNav(artical.id!);
              }}
            >
              <div className="flex justify-between">
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {artical.title}
                </h3>

                {artical.isActive ? (
                  <p className="mt-6 bg-green-300 rounded-lg px-2 h-7 ">
                    Active
                  </p>
                ) : (
                  <p className="mt-6 bg-red-300 rounded-lg px-2 h-7 ">
                    Disabled
                  </p>
                )}
              </div>
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {artical.body}
              </h3>
              <div className=" flex justify-between p-1">
                <p className="mt-2 text-sm text-gray-500 w-1/2">
                  {artical.writerName}
                </p>
                <p className="mt-2  text-gray-500 w-1/2 text-xs text-end  ">
                  {artical.categoryName}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end m-2  ">
              <ActionBtn
                actionBtnHandler={actionBtnHandler!}
                artical={artical}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
