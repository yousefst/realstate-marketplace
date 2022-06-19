import {getAuth} from 'firebase/auth';
import { useEffect,useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';


const auth =getAuth();
const user=auth.currentUser;
const Profile = () => {
  const navigate=useNavigate();
  const [formData, setForemData] = useState({
    name:user.displayName,
    email:user.email
  });

  const onLogout=()=>{
    auth.signOut();
    navigate('/')
  }

  return(
    <>
       <div className='profile'>
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button type='button' className='logOut' onClick={onLogout}>Logout</button>
    </header>
  </div>
    </>
  )
}

export default Profile