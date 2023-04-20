import React, { useEffect, useState } from 'react';

const Contact = () => {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

  const callContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      setUserData({ name: data.name, email: data.email, phone: data.phone });

      //console.log(data);
      //console.log(userData);

      if (!data.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    callContact();
  }, []);


  //storing data on states

  const handelInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value })
  }
  //send data to server

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    });

    const data = await res.json();

    if (!data) {
      console.log('message not sent');
    }
    else {
      alert('Message Sent');
      setUserData({ ...userData, message: "" });
    }

  }

  return (
    <>
      <div className='contact-info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
              {/*phone */}
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <i className="zmdi zmdi-smartphone-android material-icons-size"></i>
                <div className='contact-info-content'>
                  <div className='contact-info-title'>Phone</div>
                  <div className='contact-info-text'>+91 22222 11111</div>
                </div>
              </div>

              {/*email */}
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <i className="zmdi zmdi-email material-icons-size"></i>
                <div className='contact-info-content'>
                  <div className='contact-info-title'>Email</div>
                  <div className='contact-info-text'>anu.priya.9472@gmail.com</div>
                </div>
              </div>

              {/*Address */}
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <i className="zmdi zmdi-home material-icons-size"></i>
                <div className='contact-info-content'>
                  <div className='contact-info-title'>Address</div>
                  <div className='contact-info-text'>Madhepura</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/*  contact us form */}
      <div className='contact-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact-form-container py-5'>
                <div className='contact-form-title'>
                  <h2>Get In Touch</h2>
                </div>
                <form method='POST' id='contact-form'>
                  <div className='contact-form-name d-flex justify-content-between align-items-between'>
                    <input type='text' id='contact-form-name' className='contact-form-name input-field'
                      name="name" onChange={handelInputs} value={userData.name} placeholder='Your name' required='true' />

                    <input type='email' id='contact-form-email'
                      name="email" onChange={handelInputs} value={userData.email} className='contact-form-email input-field' placeholder='Your email' required='true' />

                    <input type='number' id='contact-form-phone'
                      name="phone" onChange={handelInputs} value={userData.phone} className='contact-form-phone input-field' placeholder='Your phone number' required='true' />
                  </div>

                </form>
                <div className='contact-form-text mt-5'>
                  <textarea className='text-field contact-form-message' name="message" onChange={handelInputs} value={userData.message} placeholder='Message' cols='30' rows='6'></textarea>
                </div>

                <div className='contact-form-button mt-4'>
                  <button type='submit' onClick={sendData} className='btn btn-primary'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
