import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Nav from './Nav';
import Home from './Home'
import About from './About'
import BlogsList from './BlogsList'
import Offerings from './Offerings'
import Speaking from './Speaking'
import Press from './Press'
import Affiliates from './Affiliates';
import Contact from './Contact';
import Free from './Free';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import SideBarItems from './SideBarItems';


function App({blogs, offers, affiliates}) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [sidebar, setSidebar] = useState(false)

  const handleSideBar = () => setSidebar(!sidebar)

  useEffect(() => {
    matches && setSidebar(false)
  }, [matches])

  return (
    <BrowserRouter>
      <div className="container">
        <Nav matches={matches} handleSideBar={handleSideBar}/>
        <Drawer
          anchor="left"
          open={sidebar}
          onClose={handleSideBar}
        >
          <SideBarItems handleSideBar={handleSideBar}/>
        </Drawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about">
            <Route index element={<About />} />
          </Route>
          <Route path="blogs">
            <Route index element={<BlogsList blogs={blogs}/>} />
          </Route>
          <Route path="offerings">
            <Route index element={<Offerings offers={offers}/>} />
          </Route>
          <Route path="speaking">
            <Route index element={<Speaking />} />
          </Route>
          <Route path="press">
            <Route index element={<Press />} />
          </Route>
          <Route path="contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="free">
            <Route index element={<Free />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
