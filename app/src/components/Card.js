import { useEffect, useState } from "react";

function Card({person}) {
  const [modifiedSkills, setModifiedSkills] = useState([])

  useEffect(()=>{
    let temp = person.expert_skills.map(el=> {
      return el[0].toUpperCase() + el.slice(1)
    })
    setModifiedSkills(temp)
  },[person.expert_skills])

  return (
    <div className="card">
      <h1>
      {person.full_name}
      </h1>
      <p>Expert skills:</p>
      <p>{person.expert_skills.length === 0 ? "-" : modifiedSkills.join(', ')}</p>
  </div>
  )
}

export default Card;