import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../components";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import Contacto from "../components/Contacto";

function App() {
  return (
    <div>
      <Router>
        <>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
          </Routes>
          <div>
            <Footer />
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
