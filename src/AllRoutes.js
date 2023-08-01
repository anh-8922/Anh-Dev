import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";



export default function AllRoutes () {
    return(
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        
      </Routes>
    )
}

