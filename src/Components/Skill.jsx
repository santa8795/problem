import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const skills = [
  {
    id: 1,
    icon: faReact,
    title: 'React',
    description: 'Experienced in building dynamic web applications with React.js.',
  },
  {
    id: 2,
    icon: faNodeJs,
    title: 'Node.js',
    description: 'Skilled in server-side development using Node.js and Express.',
  },
  {
    id: 3,
    icon: faDatabase,
    title: 'MongoDB',
    description: 'Proficient in working with MongoDB for NoSQL database management.',
  },
  {
    id: 4,
    icon: faCode,
    title: 'JavaScript',
    description: 'Strong knowledge of JavaScript for both front-end and back-end development.',
  },
  {
    id: 5,
    icon: faDocker,
    title: 'Docker',
    description: 'Experience with Docker for containerization and deployment.',
  },
  {
    id: 6,
    icon: faCogs,
    title: 'DevOps',
    description: 'Knowledge of DevOps practices including CI/CD pipelines and infrastructure automation.',
  },
];

const SkillComponent = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4 text-primary">My Skills</h2>
      <div className="row">
        {skills.map(skill => (
          <div className="col-md-4 mb-4" key={skill.id}>
            <div className="card skill-card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={skill.icon} size="3x" className="mb-3 skill-icon" />
                <h5 className="card-title mt-2 mb-3">{skill.title}</h5>
                <p className="card-text">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skill-card {
          border: 1px solid #ddd;
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #f9f9f9;
        }
        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .skill-icon {
          color: #007bff;
        }
        .card-title {
          font-size: 1.25rem;
          color: #333;
        }
        .card-text {
          color: #555;
        }
        .text-primary {
          color: #007bff !important;
        }
      `}</style>
    </div>
  );
};

export default SkillComponent;
