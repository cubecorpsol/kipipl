import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Kblocks from "./components/Kblocks";
import BlueMetals from "./components/BlueMetals";
import ReadyMix from "./components/ReadyMix";
import Contact from "./components/ContactUs";
import ServiceLocations from "./knowledge/service-locations";
import Blog from "./knowledge/Blog";
import FAQs from "./knowledge/FAQ";
import Tilefix from "./components/Tilefix";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kblocks" element={<Kblocks />} />
        <Route path="/bluemetals" element={<BlueMetals />} />
        <Route path="/readymix" element={<ReadyMix />} />
        <Route path="/tile-fixpro" element={<Tilefix />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/knowledge/service-locations"
  element={<ServiceLocations />}
/>
        <Route path="/knowledge/blog" element={<Blog />} />
         <Route
    path="/knowledge/faqs"
    element={<FAQs />}
  />
 
      </Routes>
      
    </Router>
  );
}

export default App;
