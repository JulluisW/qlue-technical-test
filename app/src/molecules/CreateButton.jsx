import { useNavigate } from "react-router-dom"

function CreateButton() {
  const navigate = useNavigate();
  return (
    <button id="create-button" onClick={()=>{
      navigate('/create')
    }}>+</button>
  )
}

export default CreateButton