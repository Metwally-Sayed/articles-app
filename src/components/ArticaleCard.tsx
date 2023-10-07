import { useEffect, useState } from "react";
import { allArticals } from "../lib/api";
import { AxiosResponse } from "axios";
import { Articale } from "../types";

type Props = {};

const ArticaleCard = (props: Props) => {
  const [articals, setArticals] = useState<Articale[]>();
  const [articalStatus, setArticalStaus] = useState<number>();

  useEffect(() => {
    (async () => {
      try {
        const data = await allArticals();
        setArticals(data?.data);
        setArticalStaus(data?.status);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(articals);
  console.log(articalStatus);

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {articals?.map((artical) => (
            <div key={artical.id} className=" shadow-2xl p-2 rounded-md w-full">
              <h3 className="mt-6 text-lg font-bold text-gray-900">
                {artical.title}
              </h3>
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {artical.body}
              </h3>
              <div className=" flex justify-between p-1">
                <p className="mt-2 text-sm text-gray-500">
                  {artical.writerName}
                </p>
                <p className="mt-2 text-sm text-gray-500 ">
                  {artical.categoryName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticaleCard;
