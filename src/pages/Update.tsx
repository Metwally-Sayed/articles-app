import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Articale } from "../types";
import { RootState } from "../redux/store";
import Cookies from "universal-cookie";
import { allCategories, createUpdate } from "../lib/api";

const Update = () => {
  const { pathname } = useLocation();

  const cookies = new Cookies();
  const userId = useSelector((state: RootState) => state.user.LoginUser.Id);

  const navigate = useNavigate();
  const { id } = useParams();
  const articalesData = useSelector((state: RootState) => state.articale);
  const articaleData = articalesData.find(
    (articale: Articale) => articale.id === +id!
  );

  const [updatedArticale, setUpdatedArticale] = useState<Articale | undefined>(
    articaleData
  );
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: "",
    },
  ]);
  const [category, setCategory] = useState("");
  const [caregoryKey, setCaregoryKey] = useState(0);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedArticale((prevArticale) => ({
      ...prevArticale!,
      [name]: value,
    }));
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setCategory(selectedValue);

    const selectedOptionObject = categories.find(
      (option) => option.name === selectedValue
    );

    if (selectedOptionObject) {
      const selectedOptionKey = selectedOptionObject.id;
      setCaregoryKey(selectedOptionKey);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, -1); // Remove the "Z" at the end

    return formattedDate;
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUpdate(
      {
        ...updatedArticale,
        categoryId: caregoryKey,
        categoryName: category,
        writerName: updatedArticale?.writerName || cookies.get("userName"),
        isActive: true,
        userId: +userId,
        date: getCurrentDateTime(),
      },
      navigate
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const [categoriesData] = await Promise.all([allCategories()]);

        setCategories(categoriesData?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  return (
    <div className="m-20">
      <form onSubmit={(e) => submitForm(e)}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <input
              onChange={handleInputChange}
              value={updatedArticale?.title || " "}
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-10">
          <label
            htmlFor="body"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Body
          </label>
          <div className="mt-2">
            <textarea
              onChange={handleInputChange}
              value={updatedArticale?.body || " "}
              name="body"
              id="body"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-between md:flex-row flex-col">
          <div className="md:w-[25%]">
            <label
              htmlFor="writerName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Writer
            </label>
            <div className="mt-2">
              <input
                disabled
                onChange={handleInputChange}
                value={
                  updatedArticale?.writerName || cookies.get("userName") || ""
                }
                type="text"
                name="writerName"
                id="writerName"
                className=" cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="md:mt-0 mt-10">
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <select
              id="categoryName"
              name="categoryName"
              defaultValue={updatedArticale?.categoryName || " "}
              value={updatedArticale?.categoryName || " "}
              onChange={(e) => {
                handleDropdownChange(e);

                // setCategoryId()
              }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {categories.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className=" rounded-lg bg-slate-950 p-2 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            {pathname === "/create" ? "Create" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
