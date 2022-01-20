import React, {useState} from 'react'
import {Navigate} from "react-router-dom"
import  axios  from 'axios';
import ReactDOM from 'react-dom';


function Login(props) {
    const [userLogin, setUserLogin] = useState("");
    const [userPasswordLogin, setPasswordLogin] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setLockin} = props;

    const logging = () =>
    {
        try{
            axios.post(`http://localhost:5000/login/${userLogin}`,{
                username: userLogin,
                password: userPasswordLogin,
            }).then((response)=>{
                console.log(response);
                setRedirect(true);
                setLockin(true); // making the page visible
            })
        }catch(err)
        {
            console.error(err.message);
        }
        
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        logging(e);
    }

    if (redirect) {
        return (
        <>
        <Navigate to="/profile"/>
        </>)
      }
    return (
      
        <div className='container text-center'>
              <form onSubmit={handleSubmit}>
          <fieldset>
            <legend> Login</legend>
            <div className="mb-3">
              <label id="intInput" className="form-label"></label>
              <input
                type="text"
                id="user"
                className="form-control"
                placeholder=" username"
                onChange={(e) => {setUserLogin(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="pw"
                className="form-control"
                placeholder=" password"
                onChange={(e) => {setPasswordLogin(e.target.value)}}
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
export default Login;
