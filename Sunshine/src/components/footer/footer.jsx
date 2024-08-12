import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-white font-subheading ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 mt-10">
          <h3 className="text-lg font-bold mb-4">Find a Showroom Near You</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-black">Sunshine Blinds Canberra</a></li>

          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 mt-10">
          <h3 className="text-lg font-bold mb-4">Sunshine Blinds</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-black">About Us</a></li>
            <li><Link to={"/contact"} className="text-white hover:text-black">Contact Us</Link></li>
            <li><a href="#" className="text-white hover:text-black">Service Request</a></li>

          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 mt-10">
          <h3 className="text-lg font-bold mb-4">Blinds</h3>
          <ul className="space-y-2">
            <li><Link to={"/blinds"} className="text-white hover:text-black">Honeycomb Blinds</Link></li>
            <li><Link to={"/blinds"} className="text-white hover:text-black">Honeycomb Glideshift</Link></li>
            <li><Link to={"/blinds"} className="text-white hover:text-black">Motorised Blinds</Link></li>
            <li><Link to={"/blinds"} className="text-white hover:text-black">Venetian Blinds</Link></li>
            <li><Link to={"/blinds"}className="text-white hover:text-black">Vertical Blinds</Link></li>
            <li><Link to={"/blinds"}className="text-white hover:text-black">Roman Blinds</Link></li>
            <li><Link to={"/blinds"} className="text-white hover:text-black">Roller Blinds</Link></li>
            <li><Link to={"/blinds"} className="text-white hover:text-black">Pleated & Softshade Blinds</Link></li>
            <li><Link to={"/blinds"} className="text-white hover:text-black">Panel Glides</Link></li>
            
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 mt-10">
          <h3 className="text-lg font-bold mb-4">Curtains</h3>
          <ul className="space-y-2">
            <li><Link to={"/curtains"} className="text-white hover:text-black">Blockout Curtains</Link></li>
            <li><Link  to={"/curtains"}  className="text-white hover:text-black">Sheer Curtains</Link></li>
            <li><Link to={"/curtains"} className="text-white hover:text-black">Veri Shades</Link></li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 mt-10">
          <h3 className="text-lg font-bold mb-4">Awnings</h3>
          <ul className="space-y-2">
            <li><Link to={"/awnings"} className="text-white hover:text-black">Canopy Awning</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Folding Arm Awning</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Cassita II By Weinor</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Semina By Weinor</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Sintesi Retractable Roof</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Sundream Awnings</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Window Awnings</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Plaza Viva By Weinor</Link></li>
            <li><Link to={"/awnings"} className="text-white hover:text-black">Zipscreen Awnings</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-0 text-center bg-black py-6">
        <p className="text-sm">&copy; Copyright 2024 Sunshine Blinds Caneberra | All rights reserved. <a href="#" className="text-white hover:text-gray">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;