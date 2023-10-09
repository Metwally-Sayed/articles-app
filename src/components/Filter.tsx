import { useSelector } from "react-redux";
import { Category } from "../types";
import { RootState } from "../redux/store";
import Cookies from "universal-cookie";

type Props = {
  categories: Category[];
  categoriesFilter: (cateId: number) => void;
};

const Filter = ({ categories, categoriesFilter }: Props) => {
  const cookies = new Cookies();
  const userName = cookies.get("userName");

  const user = useSelector(
    (state: RootState) => state.user.LoginUser
  );

  return (
    <div className="flex grow md:flex-col flex-row w-full gap-y-5 pt-10 overflow-y-auto bg-slate-100 px-6 md:items-center shadow-2xl rounded-md">
      <nav className="flex flex-1 md:flex-col flex-row w-full">
        <ul role="list" className=" flex-1 md:flex-col gap-y-7 w-full ">
          <li>
            <ul
              role="list"
              className="-mx-2 space-y-1 flex w-full flex-wrap md:block"
            >
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => categoriesFilter(category.id)}
                    className="text-black w-full hover:text-white hover:bg-black group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-left w-f"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <button className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-black hover:bg-black w-full">
              <img
                className="h-8 w-8 rounded-full bg-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true" className="hover:text-slate-50 ">
                {user.DisplayName || userName}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Filter;
