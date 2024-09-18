import React from 'react';
import './DietType.css';

const Diet = () => {
    return (
        <div className="diet-type-container">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="diet-type-left">
                        <h1>Create your Own <br /><span>Diet Type!</span></h1>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="diet-type-right">
                        <p>select diet type</p>
                        <div className="diet-buttons">
                            <button>Keto Diet</button>
                            <button>Low Carb</button>
                            <button>Gluten-free</button>
                            <button>Balanced</button>
                            <button>Vegan</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Diet;
