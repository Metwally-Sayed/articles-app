import { useEffect, useState } from "react";
import { allArticals } from "./lib/api";
import { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ArticaleCard from "./components/ArticaleCard";

function App() {
  const user = useSelector((state: RootState) => state.user);


  console.log(user, "redux");

  return (
    <main>
      <ArticaleCard />
    </main>
  );
}

export default App;
