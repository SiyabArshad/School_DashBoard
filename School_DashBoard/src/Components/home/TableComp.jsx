import React,{useState} from 'react'
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
import { Link } from 'react-router-dom'
import BasicModal from '../Modal/Modal'
export default function TableComp({records}) {
  const [selectedrecord,setselectydrecord]=React.useState(null)
  const [open,setopen]=React.useState(false)
  const [selectedrow,setselectedrow]=React.useState(-1)
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(records.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleOpen = (row) => {

    setopen(true);
    setselectydrecord(row)
  
  }
    const handleClose = () => setopen(false);

  return (
    <div className='tablehome'>
      <BasicModal open={open} closefunc={handleClose} data={selectedrecord}/>
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
            <TableCell sx={{border:"none",color:colors.grey}} >First Name</TableCell>
            <TableCell sx={{border:"none",color:colors.grey}} align="center">Last Name</TableCell>
              <TableCell sx={{border:"none",color:colors.grey}} align="center">Number</TableCell>
            <TableCell sx={{border:"none",color:colors.grey}} align="center">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {records&&currentRecords?.map((row,i) => (
            <TableRow onClick={()=>setselectedrow(row?.uniquenumer)} sx={selectedrow===row?.uniquenumer?{backgroundColor:colors.lightblue,border:`2px solid ${colors.blue}`}:{backgroundColor:i%2?colors.lightgrye3:colors.white}} key={row.name}>
              <TableCell sx={{border:"none"}}  scope="row">
                {row?.first_name}
              </TableCell>
              <TableCell sx={{border:"none"}} align="center">{row?.last_name}</TableCell>
              <TableCell sx={{border:"none"}} align="center">{row?.uniquenumer}</TableCell>
             
              <TableCell sx={{border:"none",textTransform:"capitalize"}} align="center">
                <div>
                <Chip label={"Chat"} icon={<MessageRoundedIcon sx={{width:17,height:17}}/>} sx={{width:100,backgroundColor:colors.white,border:`1px solid ${colors.lightgrye3}`}} />
                <Link to={`/student/update/${row?._id}`}> 
                <Chip label={"Edit"} icon={<ModeEditOutlineRoundedIcon sx={{width:17,height:17}}/>} sx={{width:100,marginX:1,backgroundColor:colors.white,border:`1px solid ${colors.lightgrye3}`}} />
                </Link>
                <Button size='small' onClick={()=>handleOpen(row)}>
                <Chip label={"View"} icon={<VisibilityIcon sx={{width:17,height:17}}/>}  sx={{width:100,backgroundColor:colors.white,border:`1px solid ${colors.lightgrye3}`}} />
                
                </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        <div className='tblfooter'>
          <p>
          {`Showing Page ${currentPage} of ${totalPages} Pages`}
          </p>
          <div className='pagi'>
          <Button onClick={handlePreviousPage} disabled={currentPage === 1} sx={{marginRight:1,textTransform:"capitalize"}} variant='text' size='small' color='primary' startIcon={<ChevronLeftIcon />}>
              Previous
         </Button>
         <Button onClick={handleNextPage} disabled={currentPage === totalPages} sx={{marginLeft:1,textTransform:"capitalize"}} variant='outlined' size='small' color='primary' endIcon={<ChevronRightIcon />}>
             Next
         </Button>
          </div>
        </div>
     
    </TableContainer>
</div>
  )
}
