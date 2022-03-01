import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage, fetchData } from "../store/actions/index";

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
            <div className="card">
              <p>{el.full_name} <br></br> {el.expert_skills.length === 0 ? "-" : el.expert_skills.join(', ')}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Main;
