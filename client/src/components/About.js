import React, { useEffect, useState } from 'react';
import hacker from '../images/hacker.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", work: "" });

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      setUserData({ name: data.name, email: data.email, phone: data.phone, work: data.work });
      //console.log(data);

      if (!data.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);


  return (
    <>
      <div className='container emp-profile'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src={hacker} alt='profile' />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Anu Priya</h5>
                <h6>MERN developer</h6>
                <p className='profile-reating mt-3 mb-5'>Ranking : <span>4/10</span></p>
              </div>
            </div>

            <div className='col-md-2'>
              <input type='submit' className='btn btn-secondary' name='btnAddMore' value='Edit Profile' />
            </div>
          </div>

          <div className='row'>
            {/* left side url */}
            <div className='col-md-4'>
              <div className='profile-work mt-5'>
                <p>Work Links</p>
                <a href='https://www.youtube.com/'>YouTube</a><br />
                <a href='https://www.instagram.com/'>Instagram</a><br />
                <a href='https://www.facebook.com/'>Facebook</a><br />
                <a href='https://github.com/'>GitHub</a><br />
                <a href='https://www.hackerrank.com/'>Hackerrank</a>
              </div>
            </div>

            {/* right side data toggle */}
            <div className='col-md-8'>

              <ul className="nav nav-tabs" role='tablist'>
                <li className="nav-item">
                  <a className="nav-link active" id='home-tab' data-toggle='tab' href="#home" role='tab'>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id='profile-tab' data-toggle='tab' href="#profile" role='tab'>Timeline</a>
                </li>
              </ul>

              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>USER ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>857687654657789</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>NAME</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Phone no</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{ userData.phone }</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{ userData.work }</p>
                    </div>
                  </div>

                </div>

                <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>USER ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>857687654657789</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About