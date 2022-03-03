import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import profilePic from "../assets/user.png";
import { fetchData, fetchProfile } from "../store/actions";

function Profile() {
  const params = useParams()
  const dispatch = useDispatch()
  const { profile } = useSelector((state) => state)

  useEffect(()=>{
    dispatch(fetchData())
    .then((data)=>{
      for(let i = 0; i <= data.length - 1; i++) {
        if(data[i].full_name === params.fullName) {
          dispatch(fetchProfile(data[i]))
          break
        }
      }
    })
  },[])
  
  if(!profile) {
    return null
  }
  
  return (
    <div id="Profile">
      <div className="pic-wrapper">
        <div className="C-button">c</div>
        <img src={profilePic} alt="ProfilePicture" />
      </div>
      <div className="biodata-wrapper">
        <h1 className="profile-name">{profile.full_name.toUpperCase()}</h1>
        {
          profile.expert_skills.length === 0 ? null : <>
          <h2>Expert skills</h2>
          <ul>
          { profile.expert_skills.map(el => {
            return <li key={el}>{el[0].toUpperCase() + el.slice(1)}</li>
          }) }
          </ul>
          </>
        }
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
  );
}

export default Profile;
