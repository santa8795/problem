import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Nilesh Kushwaha. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/yourusername" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="nileshkus9@gmail.com" className="text-white mx-2">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
