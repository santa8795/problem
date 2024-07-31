import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/nilesh8795/repos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p className="text-center my-4">Loading...</p>;
  if (error) return <p className="text-center my-4 text-danger">Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="text-center my-4">
        <h2 className="text-primary">My Projects</h2>
        <hr className="my-4 border-primary" /> {/* Horizontal line */}
      </div>
      <div className="row">
        {repos.map((repo) => (
          <div className="col-md-4 mb-4" key={repo.id}>
            <div className="card shadow-sm border-light rounded">
              <div className="card-body">
                <h5 className="card-title text-info">{repo.name}</h5>
                <p className="card-text text-muted">
                  {repo.description || 'No description available'}
                </p>
                <a
                  href={repo.html_url}
                  className="btn btn-primary mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .text-primary {
          color: #007bff !important;
        }
        .text-info {
          color: #17a2b8 !important;
        }
        .text-muted {
          color: #6c757d !important;
        }
        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }
        .border-primary {
          border-top: 2px solid #007bff;
        }
      `}</style>
    </div>
  );
};

export default Project;
