import React from "react";
import { Routes,Route} from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Blinds_page from "../blinds/blinds_page";
import Curtains_Page from "../curtains/curtains";
import Shutter from "../shutters/shutter";
import Awnings_Page from "../awnings/awnings";
import Commercial_Page from "../commercial/commercial";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/blinds" element={<Blinds_page/>}></Route>
    <Route path="/curtains" element={<Curtains_Page/>}></Route>
    <Route path="/shutters" element={<Shutter/>}></Route>
    <Route path="/awnings" element={<Awnings_Page/>}></Route>
    <Route path="/commercial" element={<Commercial_Page/>}></Route>
    
    
    

  </Routes>


);

export default AppRoutes;
