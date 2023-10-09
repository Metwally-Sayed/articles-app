import { deleteArticle } from "../lib/api";
import { useNavigate } from "react-router";

type Props = {
  id: number;
};

export default function Deletebtn({ id }: Props) {
  const navigate = useNavigate();

  const deleteHandler = () => {
    deleteArticle(id, navigate);
    // navigate(0);
  };
  return (
    <>
      <button
        onClick={deleteHandler}
        type="button"
        className="rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </>
  );
}
