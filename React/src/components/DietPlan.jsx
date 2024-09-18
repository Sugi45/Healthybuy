import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dietplan.css'

const DietPlan = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {

    
    axios.get('http://localhost:3009/plans')
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
      });


  }, []);

  const getPlanDuration = (duration) => {
    switch(duration) {
      case '1 Month':
        return { title: 'Full Month', meals: '20x' };
      case '3 Weeks':
        return { title: 'Thrice Weekly', meals: '12x' };
      case '1 Week':
        return { title: 'Weekly', meals: '5x' };
      default:
        return { title: duration, meals: '' };
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">
        Select <span className="text-success">existing</span> plans
      </h1>
      <div className="row justify-content-center">
        {plans.map((plan, index) => {
          const { title, meals } = getPlanDuration(plan.duration);
          return (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 dietplan border-success">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <h2 className="card-subtitle mb-2">Diet Box</h2>
                  <p className="card-text text-muted">20x</p>
                  <p className="card-text">
                    Veg Box - ₹{plan.veg_price.toFixed(2)}<br />
                    Non Veg Box - ₹{plan.nonveg_price.toFixed(2)}
                  </p>
                  <ul className="list-unstyled mt-auto">
                    <li>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Mon to Fri
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Lunch/Dinner
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Doorstep Delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DietPlan;