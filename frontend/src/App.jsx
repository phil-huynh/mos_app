import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Nav from './navComponents/Nav';
import Home from './info/Home'
import About from './info/About'
import BlogsList from './blogs/BlogsList'
import Offerings from './offerings/Offerings'
import Speaking from './upcoming/Speaking'
import Press from './upcoming/Press'
import Affiliates from './affiliates/Affiliates';
import Contact from './contact/Contact';
import Free from './contact/Free';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import SideBarItems from './navComponents/SideBarItems';
import AdminMain from './admin/AdminMain';


function App({blogs, offers, affiliates}) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [sidebar, setSidebar] = useState(false)

  const handleSideBar = () => setSidebar(!sidebar)

  useEffect(() => {
    matches && setSidebar(false)
  }, [matches])

  return (
    <BrowserRouter style={{position: "absolute", paddingTop:"100px"}}>
      <div className='navContainer'>
        <Nav matches={matches} handleSideBar={handleSideBar}/>
        <Drawer
          anchor="left"
          open={sidebar}
          onClose={handleSideBar}
          hideBackdrop
        >
          <SideBarItems handleSideBar={handleSideBar} />
        </Drawer>
      </div>
        <div className='contentsContainer'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about">
              <Route index element={<About />} />
            </Route>
            <Route path="blogs">
              <Route index element={<BlogsList blogs={blogs}/>} />
            </Route>
            <Route path="offerings">
              <Route index element={<Offerings />} />
            </Route>
            {/* <Route path="speaking">
              <Route index element={<Speaking />} />
            </Route>
            <Route path="press">
              <Route index element={<Press />} />
            </Route>
            <Route path="contact">
              <Route index element={<Contact />} />
            </Route> */}
            <Route path="free">
              <Route index element={<Free />} />
            </Route>
            <Route path="admin">
              <Route index element={<AdminMain />} />
            </Route>
          </Routes>
        <Affiliates matches={matches}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
