import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMessage, fetchData } from "../store/actions/index";

function Main() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMessage());
    dispatch(fetchData());
  },[]);

  return (
    <div>
    </div>
  );
}

export default Main;
