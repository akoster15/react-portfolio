import React, { useState } from 'react';
import background from '../images/background.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <About />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <div style={{ backgroundImage: `url(${background})` }}>
          {renderPage()}
        </div>
        <Footer/>
      </div>
      
    );
  }
  