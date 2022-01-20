import axios from 'axios';
import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';


function Login() {
    const [userNameRegister, setUserRegister] = useState("");
    const [userRegPassword, setRegPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const registering = () =>
    {
        try{
            axios.post("http://localhost:5000/register",{
                username: userNameRegister,
                passwordname: userRegPassword,
            })
            .then((response)=>{
                console.log(response);
                setRedirect(true);
            })
        }catch(err)
        {
            console.error(err.message);
        }
        
    }
    const handleSubmit= (e) => {
      e.preventDefault();
      registering(e);
  }

    if(redirect)
    {
      return <Navigate to={"/"}/>
    }
    
    return (
        <div className='container text-center'>
              <form onSubmit={handleSubmit}>
          <fieldset>
            <legend> Register</legend>
            <div className="mb-3">
              <label id="intInput" className="form-label"></label>
              <input
                type="text"
                id="user"
                className="form-control"
                placeholder=" username"
                onChange={(e) => {setUserRegister(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="pw"
                className="form-control"
                placeholder=" password"
                onChange={(e) => {setRegPassword(e.target.value)}}
              />
            </div>
            <div className="mb-3"></div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
        </div>
    )
}

export default Login
