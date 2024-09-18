import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import './Why.css'; // Import the CSS file

function WhyChoose() {
  return (
    <div className="app container">
      <div className="row header">
        <div className="col-md-6">
          <h2>WHY CHOOSE US <br /> FOR <span>YOUR HEALTHY FOOD</span></h2>
        </div>
        <div className="col-md-6">
          <p>
            We continue to consistently choose and maintain the quality of the fruit served, so that it remains fresh and nutritious when you eat it.
          </p>
        </div>
      </div>
      <div className="row cards">
        <div className="col-md-4">
          <div className="card">
            <div className="icon">
              <img src={icon1} alt="Own Fruit Orchard" className="card-img" />
            </div>
            <h3>Own fruit orchard</h3>
            <p>Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="icon">
              <img src={icon2} alt="#1 Healthy Fruit Salad" className="card-img" />
            </div>
            <h3>#1 Healthy Fruit Salad</h3>
            <p>The pioneer of healthy fruit salads that are delicious & suitable for all people with the best quality assurance.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="icon">
              <img src={icon3} alt="100 Top Brand" className="card-img" />
            </div>
            <h3>100 Top Brand</h3>
            <p>We are one of the best brands in the Food and Beverage sector in Indonesia.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
