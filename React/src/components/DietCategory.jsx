import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
const DietCategory = () => {
  return (
    <div className="container text-center">
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-4 mb-4">
          <img src={card1} alt="clock-icon" className="img-fluid mb-2" style={{ width: '50px' }} />
          <p>reduces farm <br></br>to plate time</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={card2} alt="broccoli-icon" className="img-fluid mb-2" style={{ width: '50px' }} />
          <p>nutrition-rich <br></br>superfoods meals</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={card3} alt="whisk-icon" className="img-fluid mb-2" style={{ width: '50px' }} />
          <p>fusion and<br></br> innovative recipes</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={card4}alt="policy-icon" className="img-fluid mb-2" style={{ width: '50px' }} />
          <p>national health policy<br></br> (nhp) compliant</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={card5} alt="nutrients-icon" className="img-fluid mb-2" style={{ width: '50px' }} />
          <p>optimum levels<br></br> nutrients intake</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={card6} alt="nutritionist-icon" className="img-fluid mb-2" style={{ width: '50px' }} />
          <p>approved by certified <br></br>nutritionists</p>
        </div>
      </div>
    </div>
  );
};

export default DietCategory;
