import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Portfolio from "./Pages/Porfolio";

export default function AllRoutes () {
    return(
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    )
}

