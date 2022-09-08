import React, { useState } from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import bird from '../images/bird.png';
import '../style.css';

const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "", phone: "", work: "", password: "", cpassword: "" });

  let name, value;

  const handleInput = (e) => {

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    // console.log(user);
    e.preventDefault();

    const {name, email, phone, work, password, cpassword}=user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, phone, work, password, cpassword })
    });

    const data = await res.json();

    if(data.status === 422 || !data)
    {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    }else{
      window.alert("Successfull registration");
      console.log("Successfull registration");

      navigate('/login');
    }

  }

  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign up</h2>
              <form method='POST' className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name='name' id="name" autoComplete='off' value={user.name}
                    onChange={handleInput}
                    placeholder='Your name' />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id="email" autoComplete='off' value={user.email}
                    onChange={handleInput}
                    placeholder='Your email' />
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="text" name='phone' id="phone" autoComplete='off' value={user.phone}
                    onChange={handleInput}
                    placeholder='Your phone' />
                </div>

                <div className='form-group'>
                  <label htmlFor='work'>
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name='work' id="work" autoComplete='off' value={user.work}
                    onChange={handleInput}
                    placeholder='Your profession' />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id="password" autoComplete='off' value={user.password}
                    onChange={handleInput}
                    placeholder='Your password' />
                </div>

                <div className='form-group'>
                  <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='cpassword' id="cpassword" autoComplete='off' value={user.cpassword}
                    onChange={handleInput}
                    placeholder='Confirm password' />
                </div>

                <div className='form-group form-button'>
                  <input type="submit" name='signup' id='signup' className='form-submit' value="Register" onClick={postData} />

                </div>

              </form>
            </div>
            <div className='signup-image'>
              <figure>
                <img src={bird} alt="registration" />
              </figure>
              <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Signup