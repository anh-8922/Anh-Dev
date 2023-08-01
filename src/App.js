import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from './AllRoutes';


function App() {

 
  return (
    <BrowserRouter>
      <div className="background-container">
        <AllRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Routes>
 //           
            
            
    //      </Routes> 
