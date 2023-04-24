import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import formateddate from "../../utils/formateddatetime"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open,closefunc,data}) {
  return (
      <Modal
        open={open}
        onClose={closefunc}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom:2}}>
            Student Record
          </Typography>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>First Name</Typography>
            <Typography variant='body2'>{data&&data?.first_name}</Typography>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>Last Name</Typography>
            <Typography variant='body2'>{data&&data?.last_name}</Typography>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>Phone</Typography>
            <Typography variant='body2'>{data&&data?.phone?data?.phone:"Record not Available"}</Typography>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>Emergency Contact</Typography>
            <Typography variant='body2'>{data&&data?.emergency_contact_name?data?.emergency_contact_name:"Record not Available"}</Typography>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>Emergency Phone</Typography>
            <Typography variant='body2'>{data&&data?.Emergency_contact_phone?data?.Emergency_contact_phone:"Record not Available"}</Typography>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>Medical</Typography>
            <Typography variant='body2'>{data&&data?.medical?data?.medical:"Record not Available"}</Typography>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>Date Of Birth</Typography>
            <Typography variant='body2'>{ data&&data?.birthdate?formateddate(data&&data?.birthdate):"Record not Available"}</Typography>
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
            <Typography variant='body1' sx={{marginRight:2}}>Register Date</Typography>
            <Typography variant='body2'>{ data&&data?.registerDate?formateddate(data&&data?.registerDate):"Record not Available"}</Typography>
          </div>
        </Box>
      </Modal>
  );
}