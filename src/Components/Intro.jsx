import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Intro() {
  return (
    <div className="px-4 py-5 my-5 text-center bg-light rounded-3 shadow-sm">
      <div className="container">
        <h1 className="display-5 fw-bold text-primary mb-4">Nilesh Kushwaha</h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4 text-secondary">
            I am a passionate full-stack developer specializing in the MERN stack, with a strong foundation in DevOps practices. Currently, I am a student at Government Polytechnic Shahjahanpur, where I continue to refine my skills and knowledge in software development. My expertise spans front-end and back-end development, with a keen interest in building scalable and efficient web applications.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a
              href="https://drive.google.com/file/d/1YFL4Hat7jGMiLCTtw6VW_4nps6jzBx2J/view?usp=sharing"
              className="btn btn-primary btn-lg px-4 py-2 rounded-pill shadow-sm hover-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-light {
          background-color: #f8f9fa !important;
        }
        .hover-shadow:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
