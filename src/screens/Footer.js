import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{background: 'black', color: 'white'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street<br />City, State ZIP<br />Phone: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 9:00 AM - 9:00 PM<br />Saturday - Sunday: 10:00 AM - 8:00 PM</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; {new Date().getFullYear()} Food Store. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
