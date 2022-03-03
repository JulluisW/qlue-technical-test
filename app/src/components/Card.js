import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../store/actions";

function Card({person}) {
  const [modifiedSkills, setModifiedSkills] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toProfile = async (name) => {
    try {
      await dispatch(fetchProfile(person))
      navigate(`/profile/${name}`)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    let temp = person.expert_skills.map(el=> {
      return el[0].toUpperCase() + el.slice(1)
    })
    setModifiedSkills(temp)
  },[person.expert_skills])

  return (
    <div className="card" onClick={() => {
      toProfile(person.full_name)
    }}>
      <h1>
      {person.full_name}
      </h1>
      <p>Expert skills:</p>
      <p>{person.expert_skills.length === 0 ? "-" : modifiedSkills.join(', ')}</p>
    </div>
  )
}

export default Card;