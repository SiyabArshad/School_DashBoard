import React from 'react'
import "./navbar.css"
import colors from "../helpers/colors"
import { Typography,Badge,Avatar,IconButton,Button } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import UserImage from "../../assets/User.png"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function Navbar() {
  return (
    <div className='navbar'>        
      <div className='leftpart'>
          <Typography variant='h5'>Students</Typography>
          <ArrowDropDownIcon sx={{cursor:"pointer"}}/>
      </div>
      <div className='centerpart'>
          <div className='searchbox'>
            <SearchIcon sx={{color:colors.grey}}/>
            <input placeholder='Seacrh for student, teacher..'/>
          </div>
      </div>
      <div className='rightpart'>
      <Badge badgeContent={4} color="error">
        <NotificationsIcon sx={{color:colors.grey}}/>
      </Badge>
      <HelpIcon sx={{color:colors.grey,marginLeft:2}}/>
      <div className='prof'>
        <Avatar src={UserImage} sx={{height:35,width:35}}/>
        <div className='userinfo'>
          <div style={{display:'flex',flexDirection:"row",alignItems:"center",cursor:"pointer"}}>
            <Typography variant='body1'>Connie Murray</Typography>
            <ArrowDropDownIcon/>
          </div>
          <Typography variant='body2' color='primary'>Admin</Typography>
        </div>
      </div>
      </div>
    </div>
  )
}
