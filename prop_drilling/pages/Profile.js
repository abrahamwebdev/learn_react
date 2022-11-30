import ChangeProfile from "../components/ChangeProfile";

export const Profile = (props) => {
  return (
  <div>
     THIS IS THE Profile PAGE and user is : {props.username}
     <ChangeProfile setUsername={props.setUsername}/>
  </div>
  )
};