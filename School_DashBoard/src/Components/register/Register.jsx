import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../utils/http';
import "./register.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dashboadriamge from "./dashboard.jpg"
import { Link } from 'react-router-dom';
import googlimagge from "./google.png"
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
} from '@material-ui/core';
import { AuthContext,AuthProvider,useAuth } from '../../context/Authentication';
const Register = () => {
  const {login}=useAuth()
  const [userDetails, setUserDetails] = useState({
    first_name: '',
    last_name:'',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await http.post('/auth/register', userDetails);
     login(data)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      }
    }
  };
  return (
    <div className='mncont1'>
        <div className='mncont2'>
          <div className='loginformchild'>
            <div className='logo'>
              <span>School</span>
            </div>
            <div>
              <p className='login'>
                Signup
              </p>
              <p className='wback'>
                Welcome! Please enter your details
              </p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
            <TextField
        label="FirstName"
        name="first_name"
        value={userDetails.first_name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="LastName"
        name="last_name"
        value={userDetails.last_name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
       <TextField
        label="Email"
        name="email"
        value={userDetails.email}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
             <TextField
        label="Password"
        name="password"
        type="password"
        value={userDetails.password}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth={true}>
        Register
      </Button>
              <div className='signin'>
              
                 <button className='signbtn2'>
                  <img src={googlimagge}/>
                 <span> Sign up with Google </span>
                 </button>
              </div>
              <div className='signup'>
                <span className='dh'>
                  Already have an account?
                </span>
                <Link to={"/login"} style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className='sup'>
                  Signin
                </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className='mncont3'>
          <div className='sliderparent'> 
          <Carousel
          showStatus={false}
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          >
                <div>
                    <img src={dashboadriamge} />
                </div>
                <div>
                    <img src={dashboadriamge} />
                </div>
                <div>
                    <img src={dashboadriamge} />
                </div>
            </Carousel>
          </div>
        </div>
    </div>
  )

};

export default Register;

