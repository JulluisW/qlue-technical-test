import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../store/actions";

function CreatePage() {
  const { data } = useSelector((state) => state)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputSkills, setInputSkills] = useState([])
  const [inputName, setInputName] = useState("")
  const [inputError, setInputError] = useState(false)
  const insertSkill = (skill) => {
    let newInput= []
    if(inputSkills.includes(skill)) {
      newInput = inputSkills.filter(el => {
        return el !== skill
      })
    } else {
      newInput = [
        ...inputSkills,
        skill
      ]
    }
    setInputSkills(newInput)
  }

  const submitData = () => {
    if(!inputName) {
      setInputError(true)
    } else {
      let skills = {}
      inputSkills.forEach(el => {
        skills[el] = "expert"
      })
      const payload = {
          id: data.length + 1,
          first_name: inputName.split(' ')[0],
          last_name: inputName.split(' ')[1],
          skills,
        }
        dispatch(postData(payload))
        .then(()=>{
          setInputError(false)
          navigate('/')
        })
    }
  }

  return (
    <div id="CreatePage">
      <h1>Create Person</h1>
      <form id="form-wrapper">
        <div className="name-input-wrapper">
          <label htmlFor="name-input">Name</label>
          <input onChange={(e)=>{
            setInputName(e.target.value)
          }} className="text-input" type="text" />
          {
            !inputError ? null : <label id="input-error">Please fill in name above</label>
          }
        </div>
        <label id="expert-label" >Expert Skills</label>
        <div className="checkbox-wrapper">
          <input onChange={(e)=>{
            insertSkill(e.target.value)
          }} type="checkbox" value="javascript" />
          <label>javascript</label><br></br>
        </div>
        <div className="checkbox-wrapper">
          <input onChange={(e)=>{
            insertSkill(e.target.value)
          }} type="checkbox" value="python" />
          <label>python</label><br></br>
        </div>
        <div className="checkbox-wrapper">
          <input onChange={(e)=>{
            insertSkill(e.target.value)
          }} type="checkbox" value="golang" />
          <label>golang</label><br></br>
        </div>
        <div className="checkbox-wrapper">
          <input onChange={(e)=>{
            insertSkill(e.target.value)
          }} type="checkbox" value="php" />
          <label>php</label><br></br>
        </div>
        <button
        id="submit-person-btn"
        onClick={(e)=>{
          e.preventDefault()
          submitData()
        }} >Submit</button>
      </form>
    </div>
  );
}

export default CreatePage;
