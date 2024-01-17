import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


const Loginform = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [path, setPath] = useState('');
  const [error, setError] = useState(null);
  // const [valid, setValid] = useState(null);

  // let history = useHistory();
  
  const navigate = useNavigate();

  // function isvalidEmail(email) {
  //   // setEmail(e.target.value);
  //   return /\S+@\S+\.\S+/.test(email);
  // };

  function handleSubmit() {
    // e.preventDefault();

    axios.post('http://localhost:3500/Login', {
      email: email,
      password: password
    })
      .then(function (response) {
        console.log(response.data);

        if(response.data.status === "Success")
        {
          // setPath(true)
          localStorage.setItem("token",response.data.token);
          navigate("/dashboard");
        }
        // else{
        //   set(response.data.status);
        // }
        if(response.data.status === "Check Your Email")
        {
          setError(response.data.status);
        }
        if(response.data.status === "Check Your Password")
        {
          setError(response.data.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <div className='bgcolform'>
      <div className='coler'>
        <table>
          <tr>
            <td className='p-2'>
             <button className='form-logo'> <img src={require('../images/AdminLTELogo.png')} width='30px' /><span className='m-3'>AdminLTE 3</span></button>
            </td>
          </tr>
          <tr>
            <td className='p-2'>
              <label className='me-1'>Email :-</label>
              <input type="email" id='usermail' placeholder='Enter Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td className='p-2'>
              <label className='me-1'>Password :-</label>
              <input type="password" id='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className='p-2'>
              <button className='form-logo btnform' type='submit' onClick={handleSubmit}>Login</button>
            </td>
          </tr>
        </table>
      </div>
    </div>

    </>
  )
}

export default Loginform

