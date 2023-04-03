import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()

    const goProfile=()=>{
        navigate("/Profile")
    }
  return (
    <div>Login<Link to={"/Profile"}>Go To Profile</Link>
    <button onClick={()=>goProfile()}>Go Profile</button>
    </div>
  )
}

export default Login