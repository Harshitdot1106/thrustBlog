import React from "react";
 

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="footer-container">
        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="feedback-section">
          <h3>Feedback</h3>
          <p>We value your feedback. Let us know your thoughts!</p>
        </div>
        <div className="social-section">
          <h3>Follow Us</h3>
          <p>
            <a href="https://twitter.com/?lang=en">Twitter</a> | <a href="https://twitter.com/?lang=en">Facebook</a> | <a href="https://twitter.com/?lang=en">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
  marginTop: "30px"
};

export default Footer;
