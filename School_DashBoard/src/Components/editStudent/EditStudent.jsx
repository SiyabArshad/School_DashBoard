import React from 'react'
import "./edit.css"
import colors from "../helpers/colors"
import { useParams } from 'react-router-dom'
import {
    TextField,
    Button,
    Typography
  } from '@material-ui/core';
  import http from "../../utils/http"
  import CircularProgress from '@mui/material/CircularProgress';
  import { ToastContainer, toast } from 'react-toastify';
export default function EditStudent() {
    const {id}=useParams()
    const [load,setload]=React.useState(false)
    const [userDetails, setUserDetails] = React.useState({
        first_name: '',
        last_name:'',
        phone: '',
        birthdate:'',
        registerDate:'',
        emergency_contact_name:'',
        Emergency_contact_phone:'',
        medical:'',
        comments:''
      });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => {
          return { ...prev, [name]: value };
        });
      };
    const getdata=async()=>{
    try{
     const { data } = await http.get(`/students/${id}`);
     setUserDetails((prev) => {
        return { ...prev, ...data };
      });
    }
    catch(e){
      console.log(e)
    }
  }
  const updateRecord=async(e)=>{
    console.log("ssds")
    e.preventDefault()
    
    setload(true)
    try{
        await http.patch(`/students/${id}`,userDetails)
        alert("Updated")
    }
    catch{
        alert("Update Failed")
    }
    finally{
        setload(false)
    }
  }
  React.useEffect(()=>{
      getdata()
  },[])
  return (
    <div className='editmncon'>
        <Typography variant='h5' style={{color:colors.blue}}>Edit Student Record</Typography>
        <form onSubmit={updateRecord} className='edscomp'>
            
        <div className='edformcomp'>
              <TextField
        size='small'
        label="First Name"
        name="first_name"
        onChange={handleChange}
        value={userDetails.first_name}
        margin="normal"
        variant="outlined"
        fullWidth
        style={{marginRight:10}}
      />
       <TextField
        size='small'
        label="Last Name"
        name="last_name"
        onChange={handleChange}
        value={userDetails.last_name}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      </div>
      <div className='edformcomp'>
              <TextField
        size='small'
        label="Phone"
        name="phone"
        onChange={handleChange}
        value={userDetails.phone}
        margin="normal"
        variant="outlined"
        fullWidth
        style={{marginRight:10}}
      />
       <TextField
        size='small'
        label="BirthDate"
        name="birthdate"
        onChange={handleChange}
        value={userDetails.birthdate}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      </div>
      <div className='edformcomp'>
              <TextField
        size='small'
        label="Register Date"
        name="registerDate"
        onChange={handleChange}
        value={userDetails.registerDate}
        margin="normal"
        variant="outlined"
        fullWidth
        style={{marginRight:10}}
      />
       <TextField
        size='small'
        label="Emergency Contact Name"
        name="emergency_contact_name"
        onChange={handleChange}
        value={userDetails.emergency_contact_name}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      </div>
      <div className='edformcomp'>
              <TextField
        size='small'
        label="Emergency Contact Phone"
        name="Emergency_contact_phone"
        onChange={handleChange}
        value={userDetails.Emergency_contact_phone}
        margin="normal"
        variant="outlined"
        fullWidth
        style={{marginRight:10}}
      />
            <TextField
        size='small'
        label="Medical"
        name="medical"
        onChange={handleChange}
        value={userDetails.medical}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      </div>
      <div className='edformcomp'>
              <TextField
        size='small'
        label="Comments"
        name="comments"
        onChange={handleChange}
        value={userDetails.comments}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      </div>
      <Button type='submit' variant='contained' style={{width:"25%",marginLeft:"37.5%",marginTop:20,backgroundColor:colors.blue,color:colors.white,textTransform:"capitalize"}}>
      {
        load?<CircularProgress size={24} color='inherit' />:"Update Record"
      }
      </Button>
        </form>
    </div>
  )
}
