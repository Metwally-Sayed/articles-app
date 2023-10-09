import { useEffect, useState } from "react";
import { allArticals, allCategories } from "../../lib/api";
import { Articale } from "../../types";
import Filter from "../Filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Search from "../Search";
import Cookies from "universal-cookie";
import { listArticale } from "../../redux/features/listSclice";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const CardFeature = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.LoginUser);
  const articalesData = useSelector((state: RootState) => state.articale);
  const userRole = user.RoleName || cookies.get("role");
  const userName = user?.UserName || cookies.get("userName");

  const [filteredArticals, setFilteredArticals] = useState<
    Articale[] | undefined
  >(articalesData);
  const [categories, setcategories] = useState([]);
  const [search, setSearch] = useState("");

  const getFilteredArticals = () => {
    if (userRole === "Anonymous") {
      const activeArticale = articalesData.filter(
        (item) => item.isActive === true
      );
      setFilteredArticals(activeArticale);
    } else if (userRole === "Writer") {
      const writerArticale = articalesData.filter(
        (item) => item.writerName === userName || item.userId === +user.Id
      );
      setFilteredArticals(writerArticale);
    } else {
      setFilteredArticals(articalesData);
    }
  };

  const actionBtnHandler = (data: Articale) => {
    dispatch(listArticale(data));
  };

  useEffect(() => {
    getFilteredArticals();
  }, [articalesData]);

  useEffect(() => {
    (async () => {
      try {
        const [articalsData, categoriesData] = await Promise.all([
          allArticals(dispatch),
          allCategories(),
        ]);
        console.log(articalsData);
        setcategories(categoriesData?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  const categoriesFilter = (cateId: number) => {
    const filteredArticles = articalesData?.filter(
      (item: Articale) => item.categoryId === cateId
    );
    setFilteredArticals(filteredArticles);
    return filteredArticles;
  };

  return (
    <main className=" md:flex w-full ">
      {userRole === "Anonymous" ? (
        <div className="md:flex md:items-center md:pl-10">
          <Filter categories={categories} categoriesFilter={categoriesFilter} />
        </div>
      ) : null}
      <div className="mx-auto max-w-2xl px-4 md:py-24 sm:px-6  lg:max-w-7xl lg:px-8 bg w-full">
        {userRole === "Anonymous" ? (
          <div>
            <Search search={search} setSearch={setSearch} />
          </div>
        ) : userRole === "Writer" ? (
          <div className="flex justify-end my-5">
            <button
              onClick={() => navigate(`/create`)}
              className=" bg-black text-white px-5 py-2 rounded-lg  "
            >
              Create new Articale
            </button>
          </div>
        ) : null}

        {/* card */}
        <Card
          userRole={userRole}
          articals={filteredArticals}
          search={search}
          actionBtnHandler={actionBtnHandler}
        />
      </div>
    </main>
  );
};

export default CardFeature;
