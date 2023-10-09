import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from "./card/Card";


const List = () => {
  const stateData = useSelector((state: RootState) => state.listArticale);

  return (
    <div className=" m-20">
      <Card articals={stateData} />
    </div>
  );
};

export default List;
