import React from 'react';
import salad1 from '../assets/Mini.png';
import salad2 from '../assets/Menufull.png';
import salad3 from '../assets/Menu.png';

const Discount = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2> <span style={{ color: 'green' }}>Meals that are perfect for a healthy lifestyle</span></h2>
      <h1>ENJOY THE BEST MENU AND GET <span style={{ color: 'green' }}> <br></br>DISCOUNTS</span> AVAILABLE</h1>

<div className='container'>



      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '35px' }}>
      
      
        <div style={{ width: '250px', textAlign: 'center' }}>
          <img src={salad1} alt="Mini Salad Yummy" style={{ width: '100%' }} />
         
        </div>
        
        <div style={{ width: '250px', textAlign: 'center' }}>
          <img src={salad2} alt="Completed Salad" style={{ width: '100%' }} />
         
        </div>

        <div style={{ width: '250px', textAlign: 'center' }}>
          <img src={salad3} alt="Salad Yummy Red" style={{ width: '100%' }} />

        </div>
      </div>
    </div>
    </div>
  );
};

export default Discount;
