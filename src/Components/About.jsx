import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function About() {
  return (
    <div className="container col-xxl-8 px-4 py-5 mt-6">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIEhltZScLHms1h-S1FtFSS9KvbOw-bSPl_e0mK0t-GD0Tq65fe=s288-c-no"
            className="d-block mx-lg-auto img-fluid rounded-circle shadow-lg mb-3"
            alt="Profile"
            width="200"
            height="200"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-primary mb-3">Qualification</h1>
          <p className="lead text-secondary">
            Nilesh Kushwaha is a dedicated full-stack developer with a solid educational background. He completed his diploma in Computer Science from Government Polytechnic, Shahjahanpur, which provided him with a strong foundation in technical skills. Nilesh is originally from Deoria, UP, and he graduated from Assumption Public School, Gorakhpur in 2021. His education has equipped him with a robust understanding of technology and development, preparing him to excel in the field of full-stack development.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="https://www.linkedin.com/in/nilesh-kushwaha-3bb154266/"
              className="btn btn-primary btn-lg px-4 me-md-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-profile"
              className="btn btn-outline-secondary btn-lg px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
