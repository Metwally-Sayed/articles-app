import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { Articale } from "../types";


const Article = () => {
  const { id } = useParams();
  const articalesData = useSelector((state: RootState) => state.articale);


  const articaleData = articalesData.find(
    (articale: Articale) => articale.id === +id!
  );
  return (
    <div className="m-20">
      <div>
        <h2 className=" text-6xl font-bold text-gray-900 py-10">
          {articaleData?.title}
        </h2>
      </div>
      <div>
        <p className="text-gray-900 py-5 text-2xl pt-10 ">
          {articaleData?.body}
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between">
        <p className="mt-2 md:text-lg text-gray-500 w-1/2 my-10">
          by {articaleData?.writerName}
        </p>
        <p className="mt-2  text-gray-500 w-1/2 md:text-lg text-end my-10  ">
          {articaleData?.categoryName}
        </p>
      </div>
    </div>
  );
};

export default Article;
