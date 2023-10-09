import { Dispatch, SetStateAction } from "react";

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Search = ({ search, setSearch }: Props) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="m-10">
      <input
        value={search}
        onChange={(e) => {
          searchHandler(e);
        }}
        type="text"
        name="text"
        id="text"
        className=" p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
