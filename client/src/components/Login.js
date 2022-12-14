import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

import kawaii from '../images/kawaii.png';

const Login = () => {

  const { state, dispatch } = useContext(UserContext)

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid credential");
      console.log("Invalid credential");
    } else {

      dispatch({ type: "USER", payload: true });

      window.alert("Successfull Login");
      console.log("Successfull Login");
      navigate('/');
    }

  }

  return (
    <>
      <section className='signin'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-image'>
              <figure>
                <img src={kawaii} alt="login" />
              </figure>
              <NavLink to="/signup" className="signin-image-link">Create account</NavLink>
            </div>
            <div className='signin-form'>
              <h2 className='form-title'>Log In</h2>
              <form method='POST' id='signin-form'>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id="email" autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your email' />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id="password" autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Your password' />
                </div>

                <div className='form-group form-button'>
                  <input type="submit" name='signin' id='signin' className='form-submit' value="Log In" onClick={loginUser} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login