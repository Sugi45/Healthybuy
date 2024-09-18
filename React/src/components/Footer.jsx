import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3 mb-md-0">
              <h5 className="text-success">HEALTHY BUY</h5>
              <p>Jez Salad is the pioneer of healthy fruit salad with high nutrition.</p>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <h5>Feature</h5>
              <ul className="list-unstyled">
                <li>Menu</li>
                <li>Promo</li>
                <li>Contact</li>
                <li>About us</li>
              </ul>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <h5>Get in Touch</h5>
              <p><i className="fas fa-map-marker-alt me-2"></i> 879/ Adiya Maan street, Delhi, 726827</p>
              <p><i className="fas fa-envelope me-2"></i> healthybuy@gmail.com</p>
              <p><i className="fas fa-phone me-2"></i> +91 985364567</p>
            </div>
            <div className="col-md-3">
              <h5>Follow our social media</h5>
              <div className="social-icons">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 text-center">
              <p>&copy; Copyright Healthy Buy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
