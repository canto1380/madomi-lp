import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../components";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import Contacto from "../components/Contacto";
import Productos from "../components/Productos";
import Distribuidores from '../components/Distribuidores'
import Nosotros from '../components/Nosotros'

import '../components/index.css';

function App() {
  return (
    <div>
      <Router>
        <>
          <div>
            <Navbar />
          </div>
          <div className='mt-navbar'>
          <Routes>
            <Route exact path="/" element={<Index />}></Route>
            <Route exact path="/contacto" element={<Contacto />}></Route>
            <Route exact path='/productos' element={<Productos />}></Route>
            <Route exact path='/distribuidores' element={<Distribuidores/>}></Route>
            <Route exact path='/nosotros' element={<Nosotros/>}></Route>
            <Route exact path="*" element={<Index/>}></Route>
          </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </>
      </Router>
      <script>
      AOS.init();
    </script>
    </div>
  );
}

export default App;
