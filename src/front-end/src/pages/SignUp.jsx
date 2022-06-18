import { useState } from "react"  
import { Link,useNavigate } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: ""
  })

  const { name,email, password } = formData

  const onChange =(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  };

  const navigate = useNavigate()

  return (
    <>
     <div className="pageContainer">
      <header className="mb-6">
        <p className="pageHeader">welcome </p>
      </header>
      <form>

      <input type="text" className="nameInput" placeholder="Name" id="name" value={name} onChange={onChange} />
            <input type="email" className="emailInput" placeholder="Email" id="email" value={email} onChange={onChange} />
            <div className="passwordInputDiv">
              <input type={showPassword?'text':'password'} className="passwordInput" placeholder="Password" id="password" value={password} onChange={onChange} />
              <img src={visibilityIcon} alt="show password" className="showPassword" onClick={()=>showPassword?setShowPassword(false):setShowPassword(true)} />
            </div>
            <Link to="/forget-password" className="forgotPasswordLink">forget password </Link>
            <div className="signUpBar">
              <p className="signUpText"> Sign Up</p>
              <button className="signInButton" >
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
      </form>
      {/* google outh */}

      <Link to="/sign-in" className="registerLink" >Sign In Instead</Link>



      </div> 

    </>
  )
}

export default SignUp