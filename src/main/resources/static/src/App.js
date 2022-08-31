import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import './App.css';
import './components/footer/Footer.css'


function App() {
  return (
    
      <div className="page-container">
      <div className="content-wrap">
        <Navbar />
      </div>
      <Footer />
      </div>
  );
}

export default App;
