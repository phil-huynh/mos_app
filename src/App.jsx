import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'
import About from './About'
import BlogsList from './BlogsList'
import Offerings from './Offerings'
import Speaking from './Speaking'
import Press from './Press'
import Affiliates from './Affiliates'
import Contact from './Contact'
import Free from './Free'


function App({blogs, offers, affiliates}) {
  console.log(offers)
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
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
          <Route path="affiliates">
            <Route index element={<Affiliates affiliates={affiliates}/>} />
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
