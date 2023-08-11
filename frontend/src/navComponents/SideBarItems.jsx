import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';


export default function SideBarItems({handleSideBar}) {
  const options = [
    "Home",
    "About",
    "Blogs",
    "Offerings",
    "Speaking",
    "Press",
    "Contact",
    "Free!"
  ]
  const paths = [
    "home",
    "about",
    "blogs",
    "offerings",
    "speaking",
    "press",
    "contact",
    "free"
  ]
  return (
    <Box
      sx={{
        width: 250,
        padding: "35px",
        border: "1px solid rgba(255, 255, 255, .15)",
        borderRadius: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(15px)",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem sx={{justifyContent: "end"}} disablePadding>
          <CloseIcon sx={{fontSize: "2rem"}} onClick={handleSideBar}/>
        </ListItem>
        {options.map((text, i) => (
          <>
            <ListItem key={text} disablePadding>
              <NavLink className="nav-link" to={`/${paths[i]}`}>
                <ListItemButton onClick={handleSideBar}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  )
}
