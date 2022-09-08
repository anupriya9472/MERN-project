import React,{ useEffect, useState } from 'react';

const Home = () => {

  const [userName, setUserName] = useState('');
  const [show,setShow]=useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      setUserName(data.name);
      setShow(true);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userHomePage();
  }, []);


  return (
    <>
      <div className='home'>
        <div className='home-div text-center'>
          <p className='pt-5'>Welcome</p>
          <h1>{userName}</h1>
          <h2>{show ? 'Mern develpoer' : 'This is MERN Project'}</h2>
        </div>
      </div>
    </>
  )
}

export default Home