import React from 'react'
import "./home.css"
import colors from "../helpers/colors"
import CardComponent from '../cards/Card'
import data from "./data"
import Navbar from '../Navbars/Navbar'
import { Typography,Button,IconButton,ButtonGroup } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import record from './record'
import TableComp from './TableComp'
import http from '../../utils/http';

export default function Home() {
  const [studentsinfo,setstudentinfo]=React.useState([])
  const getdata=async()=>{
    try{
      const { data } = await http.get('/students/all');
      setstudentinfo(data)
    }
    catch(e){
      console.log(e)
    }
  }
  React.useEffect(()=>{
      getdata()
  },[])
  return (
    <div className='mndashboard'>
        <Navbar/>
        <div className='cardspar'>
           {
            data.map((item,i)=>(
              <CardComponent name={item.name} amount={item.value} themecolor={item.headercolor} iconcolor={item.lightcolor} percentage={item.percent} lastdays={item.last}/>
            ))
           }
          </div>
        <TableComp records={studentsinfo}/>
    </div>
  )
}
