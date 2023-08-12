import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

export default function AllRoutes () {
    return(
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    )
}

