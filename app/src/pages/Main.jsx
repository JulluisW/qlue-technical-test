import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage, fetchData } from "../store/actions/index";
import Card from "../components/Card";

function Main() {
  const { data } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMessage());
    dispatch(fetchData());
  },[]);

  return (
    <div id="Main">
      {
        data.map(el => {
          return (
            <Card key={el.id} person={el} />
          )
        })
      }
    </div>
  );
}

export default Main;
