import React from "react";
import { Routes,Route} from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Blinds_page from "../blinds/blinds_page";
import Curtains_Page from "../curtains/curtains";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/blinds" element={<Blinds_page/>}></Route>
    <Route path="/curtains" element={<Curtains_Page/>}></Route>

  </Routes>


);

export default AppRoutes;
