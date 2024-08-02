import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/topnav/topnav";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./components/routes/route";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <TopNavbar/>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
