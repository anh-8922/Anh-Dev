import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Project from "./Pages/Project";


export default function AllRoutes () {
    return(
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
      </Routes>
    )
}

