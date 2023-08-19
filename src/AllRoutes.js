import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Journey from "./Pages/Experiences";
import Blog from "./Pages/Blog";

export default function AllRoutes () {
    return(
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/journey" element={<Journey/>}/>
          <Route path="/blog" element={<Blog/>}/>
      </Routes>
    )
}

