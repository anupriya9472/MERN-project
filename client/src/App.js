import React, { createContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ErrorPage from './components/ErrorPage';

import { initialState, reducer } from './reducer/UseReducer';


//1. contextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>

      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>

        <Navbar />
        <Routing />

      </UserContext.Provider>

      {/* <Routes>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>
      </Routes> */}
    </>
  )
}

export default App