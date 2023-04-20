import React from 'react'
import "./home.css"
import colors from "../helpers/colors"
import CardComponent from '../cards/Card'
import data from "./data"
import Navbar from '../Navbars/Navbar'
import { Typography,Button,IconButton,ButtonGroup,Chip } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import record from './record'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter'
import Paper from '@mui/material/Paper';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function TableComp() {
  const [selectedrow,setselectedrow]=React.useState(-1)

  return (
    <div className='tablehome'>
    <div className='headertable'>
        <div className='htlp'>
          <div>
          <Typography variant='body1'> 
            Student List
          </Typography>
          <InfoOutlinedIcon sx={{marginLeft:1,height:17,width:17}}/>
          </div>
          <Typography variant='body2' sx={{color:colors.grey}}>Student List Collected from Last1 year</Typography>
        </div>
      <div className='tblright'>
      <div className='searchboxtb'>
         <SearchIcon sx={{color:colors.grey}}/>
       <input placeholder='Seacrh'/>
      </div>
      <Button sx={{marginLeft:1,color:colors.grey,borderColor:colors.grey,textTransform:"capitalize"}} variant='outlined' size='small' color='primary' startIcon={<FilterAltIcon/>}>
              Filters
         </Button>
      <Button sx={{marginLeft:1,textTransform:"capitalize"}} variant='contained' size='small' color='primary' startIcon={<AddIcon />}>
              Add New
         </Button>
      </div>
    </div>
    <TableContainer elevation={0} sx={{marginTop:2}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{backgroundColor:colors.lightgrye3}}>
          <TableRow >
            <TableCell sx={{border:"none",color:colors.grey}} >Fullname</TableCell>
            <TableCell sx={{border:"none",color:colors.grey}} align="center">Age</TableCell>
            <TableCell sx={{border:"none",color:colors.grey}} align="center">Grade</TableCell>
            <TableCell sx={{border:"none",color:colors.grey}} align="center">Registration Date</TableCell>
            <TableCell sx={{border:"none",color:colors.grey}} align="center">Payment Status</TableCell>
            <TableCell sx={{border:"none",color:colors.grey}} align="center">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {record.map((row,i) => (
            <TableRow onClick={()=>setselectedrow(i)} sx={selectedrow===i?{backgroundColor:colors.lightblue,border:`2px solid ${colors.blue}`}:{backgroundColor:i%2?colors.lightgrye3:colors.white}} key={row.name}>
              <TableCell sx={{border:"none"}}  scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{border:"none"}} align="center">{row.age}</TableCell>
              <TableCell sx={{border:"none"}} align="center">{row.grade}</TableCell>
              <TableCell sx={{border:"none"}} align="center">{row.registrationdate}</TableCell>
              <TableCell sx={{border:"none",textTransform:"capitalize"}} align="center">
              <Chip label={row.status} sx={{width:100,color:row?.status==="paid"?colors.green:colors.orange,backgroundColor:row?.status==="paid"?colors.lightgreen:colors.lightorange}} />
              </TableCell>
              <TableCell sx={{border:"none",textTransform:"capitalize"}} align="center">
                <div>
                <Chip label={"Chat"} icon={<MessageRoundedIcon sx={{width:17,height:17}}/>} sx={{width:100,backgroundColor:colors.white,border:`1px solid ${colors.lightgrye3}`}} />
                <Chip label={"Edit"} icon={<ModeEditOutlineRoundedIcon sx={{width:17,height:17}}/>} sx={{width:100,marginX:1,backgroundColor:colors.white,border:`1px solid ${colors.lightgrye3}`}} />
                <Chip label={"View"} icon={<VisibilityIcon sx={{width:17,height:17}}/>}  sx={{width:100,backgroundColor:colors.white,border:`1px solid ${colors.lightgrye3}`}} />
                  
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        <div className='tblfooter'>
          <p>
          Showing 13 Rows from 756 Entries
          </p>
          <div className='pagi'>
          <Button  sx={{marginRight:1,textTransform:"capitalize"}} variant='text' size='small' color='primary' startIcon={<ChevronLeftIcon />}>
              Prevoius
         </Button>
         {
          [1,2,3,4,5,6].map((item,i)=><span className='pagno' key={i}>{item}</span>)
         }
         <Button sx={{marginLeft:1,textTransform:"capitalize"}} variant='outlined' size='small' color='primary' endIcon={<ChevronRightIcon />}>
             Next
         </Button>
          </div>
        </div>
     
    </TableContainer>
</div>
  )
}
