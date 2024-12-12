
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Whatsappshare from './Whatsappshare';
import ProductDetails from './ProductDetails';
const App = () => {
  return (

    <> 
    <Router>
        <Routes>
          <Route path="/" element={<Whatsappshare />} />
          <Route path="/product/details/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
      </>
  );
};

export default App;
