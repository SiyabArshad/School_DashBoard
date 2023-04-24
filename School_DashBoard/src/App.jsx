import React, { useState, useEffect } from 'react';
import Home from './Components/home/Home';
import "./App.css";
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import EditStudent from './Components/editStudent/EditStudent';
import { AuthContext, AuthProvider, useAuth } from './context/Authentication';

function App() {
  const { user } = useAuth();
  return (
    <Router>
      <Routes>
        {user === null || !user || user === undefined
          ? (
            <React.Fragment>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </React.Fragment>
          )
          : <React.Fragment>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/student/update/:id" element={<EditStudent />} />
          </React.Fragment>
        }
        <Route path='*' element={user?<Layout><Home /></Layout>:<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

const Layout = ({ children }) => {
  return (
    <div className='maincon'>
      <SideBar />
      {children}
    </div>
  );
};
