import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
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
      sx={{border: "solid black 1px", width: 250}}
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
