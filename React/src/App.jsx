import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Diet from './components/Diet';
import DietCategory from './components/DietCategory';
import Subscribe from './components/Subscribe';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';
import Discount from './components/Discount';
import DietPlan from './components/DietPlan';
import Plans from './Plans';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Diet />
          <DietCategory />
          <WhyChoose />
          <Discount />
          <DietPlan />
          <Subscribe />
          <Footer />
        </>} />
        <Route path="/plans" element={<Plans />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}
