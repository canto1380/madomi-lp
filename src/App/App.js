import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from '../components'
import Footer from '../common/footer'

function App() {
  return (
    <div>
      <Router>
        <>
          <Routes>
            <Route path='/' element={<Index/>}>
              
            </Route>
          </Routes>
        </>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
