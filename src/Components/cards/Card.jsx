import React from 'react'
import "./card.css"
import { Button, Card,Typography } from '@mui/material'
import colors from "../helpers/colors"
import GroupIcon from '@mui/icons-material/Group';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export default function CardComponent({name,amount,percentage,lastdays,themecolor,iconcolor}) {
  return (
    <div className='card'>
        <div>
        <div className='header1'>
          <div style={{backgroundColor:iconcolor}} className='circle'>
            {
              name==='Account Receivables'&&<MonetizationOnIcon sx={{height:17,width:17,color:themecolor}}/>
            }
            {
               name==='Teacher Assigned'&&<PersonIcon sx={{height:17,width:17,color:themecolor}}/>
            }
            {
               name==='Total Students'&&<PeopleIcon sx={{height:17,width:17,color:themecolor}}/>
            }
            {
               name==='New Students'&&<PersonIcon sx={{height:17,width:17,color:themecolor}}/>
            }
          </div>
            <Typography variant='body1' sx={{marginLeft:1,color:themecolor}}>{name?name:"Total Students"}</Typography>
        </div>
        <Typography variant='h4' sx={{marginLeft:2,marginTop:2}}>{amount&&amount}</Typography>
      {
        percentage||lastdays?
        <div className='header1'>
        <ShowChartIcon sx={{height:17,width:17,color:percentage>0?colors.green:colors.orange}}/>
          <Typography variant='caption' sx={{marginLeft:1}}>{percentage}%</Typography>
          <Typography variant='caption' sx={{marginLeft:1}}>last {lastdays}d</Typography>
      </div>
      :
      <Button variant='text' sx={{fontSize:13,textTransform:"capitalize"}}>
        Details
      </Button>
      }
        </div>
    </div>
  )
}
