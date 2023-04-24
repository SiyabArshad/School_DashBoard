import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import dashboardnames from './menuname';
import logo from "../../assets/schoola.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import TvIcon from '@mui/icons-material/Tv';
import colors from "../helpers/colors"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideBar() {
  const [drawerWidth,setdrawerWidth]=React.useState(60)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedtab,setselectedtab]=React.useState("dashboard")
  const handleDrawerOpen = () => {
    setdrawerWidth(240)
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setdrawerWidth(60)
  };
if(open)
{
  return(
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <DrawerHeader sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <img style={{height:40,width:40}} src={logo}/>
            <Typography variant='h5' sx={{marginLeft:2}}>Schoola</Typography>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.dashboard&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.dashboard)
                }}>
                <ListItemIcon>
                   <DashboardIcon sx={{color: selectedtab===dashboardnames.dashboard&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText sx={{color: selectedtab===dashboardnames.dashboard&&colors.blue}} primary={"Dashboard"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.analytics&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.analytics)
                }}>
                <ListItemIcon>
                   <TimelineIcon sx={{color: selectedtab===dashboardnames.analytics&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText sx={{color: selectedtab===dashboardnames.analytics&&colors.blue}} primary={"Analytics"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.students&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.students)
                }}>
                <ListItemIcon>
                   <PeopleAltIcon sx={{color: selectedtab===dashboardnames.students&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText  sx={{color: selectedtab===dashboardnames.students&&colors.blue}} primary={"Students"} />
                
              </ListItemButton>
            </ListItem>
           {

            selectedtab===dashboardnames.students&&
            <List sx={{marginX:1}}>
            <ListItem sx={{marginLeft:2}}>
              <Box sx={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}>
              <FiberManualRecordIcon sx={{height:10,width:10,color:colors.grey}}/>
              <Typography sx={{marginLeft:2,color:colors.grey}}>Add new</Typography>
              </Box> 
            </ListItem>
            <ListItem sx={{marginLeft:2}}>
              <Box sx={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}>
              <FiberManualRecordIcon sx={{height:10,width:10,color:colors.grey}}/>
              <Typography sx={{marginLeft:2,color:colors.grey}}>All Students</Typography>
              </Box> 
            </ListItem>
            <ListItem sx={{marginLeft:2}}>
              <Box sx={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}>
              <FiberManualRecordIcon sx={{height:10,width:10,color:colors.grey}}/>
              <Typography sx={{marginLeft:2,color:colors.grey}}>Pending Payments</Typography>
              </Box> 
            </ListItem>
           
            </List>

            }
            <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.payments&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.payments)
                }}>
                <ListItemIcon>
                   <CreditCardIcon sx={{color: selectedtab===dashboardnames.payments&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText sx={{color: selectedtab===dashboardnames.payments&&colors.blue}} primary={"Payments"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.teachers&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.teachers)
                }}>
                <ListItemIcon>
                   <PeopleAltIcon sx={{color: selectedtab===dashboardnames.teachers&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText sx={{color: selectedtab===dashboardnames.teachers&&colors.blue}} primary={"Teachers"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.crm&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.crm)
                }}>
                <ListItemIcon>
                   <TvIcon sx={{color: selectedtab===dashboardnames.crm&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText sx={{color: selectedtab===dashboardnames.crm&&colors.blue}} primary={"CRM"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.scholarships&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.scholarships)
                }}>
                <ListItemIcon>
                   <SchoolIcon sx={{color: selectedtab===dashboardnames.scholarships&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText sx={{color: selectedtab===dashboardnames.scholarships&&colors.blue}} primary={"Scholarships"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.settings&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.settings)
                }}>
                <ListItemIcon>
                   <SettingsIcon sx={{color: selectedtab===dashboardnames.settings&&colors.blue}}/>
                </ListItemIcon>
                <ListItemText sx={{color: selectedtab===dashboardnames.settings&&colors.blue}} primary={"Settings"} />
                
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
  )
}
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
  <DrawerHeader  sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <IconButton sx={{marginLeft:1}} onClick={handleDrawerOpen}>
           <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.dashboard&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.dashboard)
                }}>
             
                   <DashboardIcon sx={{color: selectedtab===dashboardnames.dashboard&&colors.blue}}/>
             </IconButton>
            </ListItem>
            <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.analytics&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.analytics)
                }}>
             
                   <TimelineIcon sx={{color: selectedtab===dashboardnames.analytics&&colors.blue}}/>
             </IconButton>
            </ListItem>
            <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.students&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.students)
                }}>
             
                   <PeopleAltIcon sx={{color: selectedtab===dashboardnames.students&&colors.blue}}/>
             </IconButton>
            </ListItem>
            <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.payments&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.payments)
                }}>
             
                   <CreditCardIcon sx={{color: selectedtab===dashboardnames.payments&&colors.blue}}/>
             </IconButton>
            </ListItem>
            <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.teachers&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.teachers)
                }}>
             
                   <PeopleAltIcon sx={{color: selectedtab===dashboardnames.teachers&&colors.blue}}/>
             </IconButton>
            </ListItem>
            <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.crm&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.crm)
                }}>
             
                   <TvIcon sx={{color: selectedtab===dashboardnames.crm&&colors.blue}}/>
             </IconButton>
            </ListItem>
            <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.scholarships&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.scholarships)
                }}>
             
                   <SchoolIcon sx={{color: selectedtab===dashboardnames.scholarships&&colors.blue}}/>
             </IconButton>
            </ListItem>
            <ListItem disableGutters sx={{marginLeft:1}}>
              <IconButton disableRipple={true} sx={{bgcolor:selectedtab===dashboardnames.settings&&colors.lightblue,borderRadius:2}} onClick={()=>{
                setselectedtab(dashboardnames.settings)
                }}>
             
                   <SettingsIcon sx={{color: selectedtab===dashboardnames.settings&&colors.blue}}/>
             </IconButton>
            </ListItem>
        </List>
      </Drawer>
     
  );
}
